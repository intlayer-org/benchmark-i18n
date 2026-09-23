import * as e from "react";
import t, { Suspense as n, createContext as r, useCallback as i, useEffect as a, useMemo as o, useRef as s, useState as c } from "react";
import { jsx as l } from "react/jsx-runtime";
import { RouterProvider as u } from "@tanstack/react-router";
import { createIsomorphicFn as d } from "@tanstack/start-client-core";
import { defineHandlerCallback as f, renderRouterToStream as p, renderRouterToString as m } from "@tanstack/react-router/ssr/server";
import { jsxDEV as h } from "react/jsx-dev-runtime";
import g from "../gt.config.json";
import _ from "../src/_gt/en.json";
import v from "../src/_gt/fr.json";
import y from "../src/_gt/de.json";
import b from "../src/_gt/es.json";
import x from "../src/_gt/it.json";
import S from "../src/_gt/ja.json";
import C from "../src/_gt/ko.json";
import ee from "../src/_gt/pt.json";
import te from "../src/_gt/ru.json";
import w from "../src/_gt/zh.json";
var T = Object.defineProperty, ne = Object.getOwnPropertyDescriptor, re = Object.getOwnPropertyNames, ie = Object.prototype.hasOwnProperty, ae = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, oe = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), se = (e, t) => {
	let n = {};
	for (var r in e) T(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || T(n, Symbol.toStringTag, { value: "Module" }), n;
}, E = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = re(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !ie.call(e, s) && s !== n && T(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = ne(t, s)) || r.enumerable
	});
	return e;
}, ce = (e, t, n) => (E(e, t, "default"), n && E(n, t, "default")), le = (e) => ie.call(e, "module.exports") ? e["module.exports"] : E(T({}, "__esModule", { value: !0 }), e), D = 6e4, ue = (e) => `generaltranslation Formatting Error: Invalid cutoff style: ${e}.`, de = "DEFAULT_TERMINATOR_KEY", fe = {
	ellipsis: {
		fr: {
			terminator: "…",
			separator: " "
		},
		zh: {
			terminator: "……",
			separator: void 0
		},
		ja: {
			terminator: "……",
			separator: void 0
		},
		[de]: {
			terminator: "…",
			separator: void 0
		}
	},
	none: { [de]: {
		terminator: void 0,
		separator: void 0
	} }
}, pe = class {
	constructor(e, t = {}) {
		try {
			let t = e ? Array.isArray(e) ? e.map((e) => String(e)) : [String(e)] : ["en"], n = Intl.getCanonicalLocales(t);
			this.locale = n.length ? n[0] : "en";
		} catch {
			this.locale = "en";
		}
		if (!fe[t.style ?? "ellipsis"]) throw Error(ue(t.style ?? "ellipsis"));
		let n, r;
		if (t.maxChars !== void 0) {
			n = t.style ?? "ellipsis";
			let e = new Intl.Locale(this.locale).language;
			r = fe[n][e] || fe[n].DEFAULT_TERMINATOR_KEY;
		}
		let i = t.terminator ?? r?.terminator, a = i == null ? void 0 : t.separator ?? r?.separator;
		this.additionLength = (i?.length ?? 0) + (a?.length ?? 0), t.maxChars !== void 0 && Math.abs(t.maxChars) < this.additionLength && (i = void 0, a = void 0), this.options = {
			maxChars: t.maxChars,
			style: n,
			terminator: i,
			separator: a
		};
	}
	format(e) {
		return this.formatToParts(e).join("");
	}
	formatToParts(e) {
		let { maxChars: t, terminator: n, separator: r } = this.options, i = t === void 0 || Math.abs(t) >= e.length ? t : t >= 0 ? Math.max(0, t - this.additionLength) : Math.min(0, t + this.additionLength), a = i !== void 0 && i > -1 ? e.slice(0, i) : e.slice(i);
		return t == null || i == null || i === 0 || n == null || e.length <= Math.abs(t) ? [a] : i > 0 ? r == null ? [a, n] : [
			a,
			r,
			n
		] : r == null ? [n, a] : [
			n,
			r,
			a
		];
	}
	resolvedOptions() {
		return this.options;
	}
}, me = {
	Collator: Intl.Collator,
	DateTimeFormat: Intl.DateTimeFormat,
	DisplayNames: Intl.DisplayNames,
	ListFormat: Intl.ListFormat,
	Locale: Intl.Locale,
	NumberFormat: Intl.NumberFormat,
	PluralRules: Intl.PluralRules,
	RelativeTimeFormat: Intl.RelativeTimeFormat,
	Segmenter: Intl.Segmenter,
	CutoffFormat: pe
}, O = new class {
	constructor() {
		this.cache = {};
	}
	_generateKey(e, t = {}) {
		return `${e ? Array.isArray(e) ? e.map((e) => String(e)).join(",") : String(e) : "undefined"}:${t ? JSON.stringify(t, Object.keys(t).sort()) : "{}"}`;
	}
	get(e, ...t) {
		let [n = "en", r = {}] = t, i = this._generateKey(n, r), a = this.cache[e]?.[i];
		return a === void 0 && (a = new me[e](...t), this.cache[e] || (this.cache[e] = {}), this.cache[e][i] = a), a;
	}
}(), he = "https://cdn.gtx.dev", ge = {
	GTJSON: ["GTJSON"],
	JSON: ["JSON"],
	PO: ["PO"],
	POT: ["POT", "PO"],
	YAML: ["YAML"],
	MDX: ["MDX"],
	MD: ["MD"],
	TS: ["TS"],
	JS: ["JS"],
	HTML: ["HTML"],
	TXT: ["TXT"],
	TWILIO_CONTENT_JSON: ["TWILIO_CONTENT_JSON"]
};
function _e(e, t) {
	return ge[e]?.includes(t) ?? !1;
}
function ve(e) {
	if (!e.transformFormat) return;
	let t = e.fileName ?? e.fileId ?? "unknown file";
	if (!e.fileFormat) return `fileFormat is required when transformFormat is provided for ${t}`;
	if (!_e(e.fileFormat, e.transformFormat)) return `Unsupported file format transform: ${e.fileFormat} -> ${e.transformFormat}`;
}
function ye(e) {
	for (let t of e) {
		let e = ve(t);
		if (e) throw Error(e);
	}
}
function be(e) {
	if (typeof Buffer < "u") return Buffer.from(e, "utf8").toString("base64");
	let t = new TextEncoder().encode(e), n = "";
	for (let e = 0; e < t.length; e++) n += String.fromCharCode(t[e]);
	return btoa(n);
}
function xe(e) {
	if (typeof Buffer < "u") return Buffer.from(e, "base64").toString("utf8");
	let t = atob(e), n = new Uint8Array(t.length);
	for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
	return new TextDecoder().decode(n);
}
function Se(e) {
	if (e === void 0) return;
	if (e === null) return "null";
	if (typeof e == "number") return isFinite(e) ? "" + e : "null";
	if (typeof e != "object") return JSON.stringify(e);
	if (Array.isArray(e)) {
		let t = "[";
		for (let n = 0; n < e.length; n++) n && (t += ","), t += Se(e[n]) || "null";
		return t + "]";
	}
	let t = Object.keys(e).sort(), n = "";
	for (let r of t) {
		let t = Se(e[r]);
		t && (n && (n += ","), n += JSON.stringify(r) + ":" + t);
	}
	return "{" + n + "}";
}
function Ce(e) {
	return Se(e) ?? "";
}
function we(e) {
	let t = e;
	if (t && typeof t == "object" && typeof t.k == "string") {
		let e = Object.keys(t);
		if (e.length === 1 || e.length === 2 && (typeof t.i == "number" || typeof t.v == "string") || e.length === 3 && typeof t.v == "string" && typeof t.i == "number") return !0;
	}
	return !1;
}
function Te(e) {
	return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in e && e.BYTES_PER_ELEMENT === 1;
}
function Ee(e, t, n = "") {
	let r = Te(e), i = e?.length, a = t !== void 0;
	if (!r || a && i !== t) {
		let o = n && `"${n}" `, s = a ? ` of length ${t}` : "", c = r ? `length=${i}` : `type=${typeof e}`, l = o + "expected Uint8Array" + s + ", got " + c;
		throw r ? RangeError(l) : TypeError(l);
	}
	return e;
}
function De(e, t = !0) {
	if (e.destroyed) throw Error("Hash instance has been destroyed");
	if (t && e.finished) throw Error("Hash#digest() has already been called");
}
function Oe(e, t) {
	Ee(e, void 0, "digestInto() output");
	let n = t.outputLen;
	if (e.length < n) throw RangeError("\"digestInto() output\" expected to be of length >=" + n);
}
function ke(...e) {
	for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function Ae(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function k(e, t) {
	return e << 32 - t | e >>> t;
}
var je = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", Me = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function Ne(e) {
	if (Ee(e), je) return e.toHex();
	let t = "";
	for (let n = 0; n < e.length; n++) t += Me[e[n]];
	return t;
}
function Pe(e) {
	if (typeof e != "string") throw TypeError("string expected");
	return new Uint8Array(new TextEncoder().encode(e));
}
function Fe(e, t = {}) {
	let n = (t, n) => e(n).update(t).digest(), r = e(void 0);
	return n.outputLen = r.outputLen, n.blockLen = r.blockLen, n.canXOF = r.canXOF, n.create = (t) => e(t), Object.assign(n, t), Object.freeze(n);
}
var Ie = (e) => ({ oid: Uint8Array.from([
	6,
	9,
	96,
	134,
	72,
	1,
	101,
	3,
	4,
	2,
	e
]) });
function Le(e, t, n) {
	return e & t ^ ~e & n;
}
function Re(e, t, n) {
	return e & t ^ e & n ^ t & n;
}
var ze = class {
	blockLen;
	outputLen;
	canXOF = !1;
	padOffset;
	isLE;
	buffer;
	view;
	finished = !1;
	length = 0;
	pos = 0;
	destroyed = !1;
	constructor(e, t, n, r) {
		this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = Ae(this.buffer);
	}
	update(e) {
		De(this), Ee(e);
		let { view: t, buffer: n, blockLen: r } = this, i = e.length;
		for (let a = 0; a < i;) {
			let o = Math.min(r - this.pos, i - a);
			if (o === r) {
				let t = Ae(e);
				for (; r <= i - a; a += r) this.process(t, a);
				continue;
			}
			n.set(e.subarray(a, a + o), this.pos), this.pos += o, a += o, this.pos === r && (this.process(t, 0), this.pos = 0);
		}
		return this.length += e.length, this.roundClean(), this;
	}
	digestInto(e) {
		De(this), Oe(e, this), this.finished = !0;
		let { buffer: t, view: n, blockLen: r, isLE: i } = this, { pos: a } = this;
		t[a++] = 128, ke(this.buffer.subarray(a)), this.padOffset > r - a && (this.process(n, 0), a = 0);
		for (let e = a; e < r; e++) t[e] = 0;
		n.setBigUint64(r - 8, BigInt(this.length * 8), i), this.process(n, 0);
		let o = Ae(e), s = this.outputLen;
		if (s % 4) throw Error("_sha2: outputLen must be aligned to 32bit");
		let c = s / 4, l = this.get();
		if (c > l.length) throw Error("_sha2: outputLen bigger than state");
		for (let e = 0; e < c; e++) o.setUint32(4 * e, l[e], i);
	}
	digest() {
		let { buffer: e, outputLen: t } = this;
		this.digestInto(e);
		let n = e.slice(0, t);
		return this.destroy(), n;
	}
	_cloneInto(e) {
		e ||= new this.constructor(), e.set(...this.get());
		let { blockLen: t, buffer: n, length: r, finished: i, destroyed: a, pos: o } = this;
		return e.destroyed = a, e.finished = i, e.length = r, e.pos = o, r % t && e.buffer.set(n), e;
	}
	clone() {
		return this._cloneInto();
	}
}, Be = Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), Ve = Uint32Array.from([
	1116352408,
	1899447441,
	3049323471,
	3921009573,
	961987163,
	1508970993,
	2453635748,
	2870763221,
	3624381080,
	310598401,
	607225278,
	1426881987,
	1925078388,
	2162078206,
	2614888103,
	3248222580,
	3835390401,
	4022224774,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	2554220882,
	2821834349,
	2952996808,
	3210313671,
	3336571891,
	3584528711,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	2177026350,
	2456956037,
	2730485921,
	2820302411,
	3259730800,
	3345764771,
	3516065817,
	3600352804,
	4094571909,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	2227730452,
	2361852424,
	2428436474,
	2756734187,
	3204031479,
	3329325298
]), He = /* @__PURE__ */ new Uint32Array(64), Ue = class extends ze {
	constructor(e) {
		super(64, e, 8, !1);
	}
	get() {
		let { A: e, B: t, C: n, D: r, E: i, F: a, G: o, H: s } = this;
		return [
			e,
			t,
			n,
			r,
			i,
			a,
			o,
			s
		];
	}
	set(e, t, n, r, i, a, o, s) {
		this.A = e | 0, this.B = t | 0, this.C = n | 0, this.D = r | 0, this.E = i | 0, this.F = a | 0, this.G = o | 0, this.H = s | 0;
	}
	process(e, t) {
		for (let n = 0; n < 16; n++, t += 4) He[n] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			let t = He[e - 15], n = He[e - 2], r = k(t, 7) ^ k(t, 18) ^ t >>> 3, i = k(n, 17) ^ k(n, 19) ^ n >>> 10;
			He[e] = i + He[e - 7] + r + He[e - 16] | 0;
		}
		let { A: n, B: r, C: i, D: a, E: o, F: s, G: c, H: l } = this;
		for (let e = 0; e < 64; e++) {
			let t = k(o, 6) ^ k(o, 11) ^ k(o, 25), u = l + t + Le(o, s, c) + Ve[e] + He[e] | 0, d = (k(n, 2) ^ k(n, 13) ^ k(n, 22)) + Re(n, r, i) | 0;
			l = c, c = s, s = o, o = a + u | 0, a = i, i = r, r = n, n = u + d | 0;
		}
		n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, o = o + this.E | 0, s = s + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(n, r, i, a, o, s, c, l);
	}
	roundClean() {
		ke(He);
	}
	destroy() {
		this.destroyed = !0, this.set(0, 0, 0, 0, 0, 0, 0, 0), ke(this.buffer);
	}
}, We = class extends Ue {
	A = Be[0] | 0;
	B = Be[1] | 0;
	C = Be[2] | 0;
	D = Be[3] | 0;
	E = Be[4] | 0;
	F = Be[5] | 0;
	G = Be[6] | 0;
	H = Be[7] | 0;
	constructor() {
		super(32);
	}
}, Ge = Fe(() => new We(), Ie(1)), Ke = se({
	__addDisposableResource: () => bt,
	__assign: () => A,
	__asyncDelegator: () => ft,
	__asyncGenerator: () => dt,
	__asyncValues: () => pt,
	__await: () => ut,
	__awaiter: () => nt,
	__classPrivateFieldGet: () => _t,
	__classPrivateFieldIn: () => yt,
	__classPrivateFieldSet: () => vt,
	__createBinding: () => wt,
	__decorate: () => Ye,
	__disposeResources: () => xt,
	__esDecorate: () => Ze,
	__exportStar: () => it,
	__extends: () => qe,
	__generator: () => rt,
	__importDefault: () => gt,
	__importStar: () => ht,
	__makeTemplateObject: () => mt,
	__metadata: () => tt,
	__param: () => Xe,
	__propKey: () => $e,
	__read: () => ot,
	__rest: () => Je,
	__rewriteRelativeImportExtension: () => St,
	__runInitializers: () => Qe,
	__setFunctionName: () => et,
	__spread: () => st,
	__spreadArray: () => lt,
	__spreadArrays: () => ct,
	__values: () => at,
	default: () => Ot
});
function qe(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	Ct(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function Je(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Ye(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
function Xe(e, t) {
	return function(n, r) {
		t(n, r, e);
	};
}
function Ze(e, t, n, r, i, a) {
	function o(e) {
		if (e !== void 0 && typeof e != "function") throw TypeError("Function expected");
		return e;
	}
	for (var s = r.kind, c = s === "getter" ? "get" : s === "setter" ? "set" : "value", l = !t && e ? r.static ? e : e.prototype : null, u = t || (l ? Object.getOwnPropertyDescriptor(l, r.name) : {}), d, f = !1, p = n.length - 1; p >= 0; p--) {
		var m = {};
		for (var h in r) m[h] = h === "access" ? {} : r[h];
		for (var h in r.access) m.access[h] = r.access[h];
		m.addInitializer = function(e) {
			if (f) throw TypeError("Cannot add initializers after decoration has completed");
			a.push(o(e || null));
		};
		var g = (0, n[p])(s === "accessor" ? {
			get: u.get,
			set: u.set
		} : u[c], m);
		if (s === "accessor") {
			if (g === void 0) continue;
			if (typeof g != "object" || !g) throw TypeError("Object expected");
			(d = o(g.get)) && (u.get = d), (d = o(g.set)) && (u.set = d), (d = o(g.init)) && i.unshift(d);
		} else (d = o(g)) && (s === "field" ? i.unshift(d) : u[c] = d);
	}
	l && Object.defineProperty(l, r.name, u), f = !0;
}
function Qe(e, t, n) {
	for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
	return r ? n : void 0;
}
function $e(e) {
	return typeof e == "symbol" ? e : `${e}`;
}
function et(e, t, n) {
	return typeof t == "symbol" && (t = t.description ? `[${t.description}]` : ""), Object.defineProperty(e, "name", {
		configurable: !0,
		value: n ? `${n} ${t}` : t
	});
}
function tt(e, t) {
	if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function nt(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function rt(e, t) {
	var n = {
		label: 0,
		sent: function() {
			if (a[0] & 1) throw a[1];
			return a[1];
		},
		trys: [],
		ops: []
	}, r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
	return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
		return this;
	}), o;
	function s(e) {
		return function(t) {
			return c([e, t]);
		};
	}
	function c(s) {
		if (r) throw TypeError("Generator is already executing.");
		for (; o && (o = 0, s[0] && (n = 0)), n;) try {
			if (r = 1, i && (a = s[0] & 2 ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done) return a;
			switch (i = 0, a && (s = [s[0] & 2, a.value]), s[0]) {
				case 0:
				case 1:
					a = s;
					break;
				case 4: return n.label++, {
					value: s[1],
					done: !1
				};
				case 5:
					n.label++, i = s[1], s = [0];
					continue;
				case 7:
					s = n.ops.pop(), n.trys.pop();
					continue;
				default:
					if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (s[0] === 6 || s[0] === 2)) {
						n = 0;
						continue;
					}
					if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) {
						n.label = s[1];
						break;
					}
					if (s[0] === 6 && n.label < a[1]) {
						n.label = a[1], a = s;
						break;
					}
					if (a && n.label < a[2]) {
						n.label = a[2], n.ops.push(s);
						break;
					}
					a[2] && n.ops.pop(), n.trys.pop();
					continue;
			}
			s = t.call(e, n);
		} catch (e) {
			s = [6, e], i = 0;
		} finally {
			r = a = 0;
		}
		if (s[0] & 5) throw s[1];
		return {
			value: s[0] ? s[1] : void 0,
			done: !0
		};
	}
}
function it(e, t) {
	for (var n in e) n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && wt(t, e, n);
}
function at(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ot(e, t) {
	var n = typeof Symbol == "function" && e[Symbol.iterator];
	if (!n) return e;
	var r = n.call(e), i, a = [], o;
	try {
		for (; (t === void 0 || t-- > 0) && !(i = r.next()).done;) a.push(i.value);
	} catch (e) {
		o = { error: e };
	} finally {
		try {
			i && !i.done && (n = r.return) && n.call(r);
		} finally {
			if (o) throw o.error;
		}
	}
	return a;
}
function st() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(ot(arguments[t]));
	return e;
}
function ct() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	for (var r = Array(e), i = 0, t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function lt(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
function ut(e) {
	return this instanceof ut ? (this.v = e, this) : new ut(e);
}
function dt(e, t, n) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var r = n.apply(e, t || []), i, a = [];
	return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", o), i[Symbol.asyncIterator] = function() {
		return this;
	}, i;
	function o(e) {
		return function(t) {
			return Promise.resolve(t).then(e, d);
		};
	}
	function s(e, t) {
		r[e] && (i[e] = function(t) {
			return new Promise(function(n, r) {
				a.push([
					e,
					t,
					n,
					r
				]) > 1 || c(e, t);
			});
		}, t && (i[e] = t(i[e])));
	}
	function c(e, t) {
		try {
			l(r[e](t));
		} catch (e) {
			f(a[0][3], e);
		}
	}
	function l(e) {
		e.value instanceof ut ? Promise.resolve(e.value.v).then(u, d) : f(a[0][2], e);
	}
	function u(e) {
		c("next", e);
	}
	function d(e) {
		c("throw", e);
	}
	function f(e, t) {
		e(t), a.shift(), a.length && c(a[0][0], a[0][1]);
	}
}
function ft(e) {
	var t = {}, n;
	return r("next"), r("throw", function(e) {
		throw e;
	}), r("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function r(r, i) {
		t[r] = e[r] ? function(t) {
			return (n = !n) ? {
				value: ut(e[r](t)),
				done: !1
			} : i ? i(t) : t;
		} : i;
	}
}
function pt(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var t = e[Symbol.asyncIterator], n;
	return t ? t.call(e) : (e = typeof at == "function" ? at(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
		return this;
	}, n);
	function r(t) {
		n[t] = e[t] && function(n) {
			return new Promise(function(r, a) {
				n = e[t](n), i(r, a, n.done, n.value);
			});
		};
	}
	function i(e, t, n, r) {
		Promise.resolve(r).then(function(t) {
			e({
				value: t,
				done: n
			});
		}, t);
	}
}
function mt(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function ht(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (e != null) for (var n = Et(e), r = 0; r < n.length; r++) n[r] !== "default" && wt(t, e, n[r]);
	return Tt(t, e), t;
}
function gt(e) {
	return e && e.__esModule ? e : { default: e };
}
function _t(e, t, n, r) {
	if (n === "a" && !r) throw TypeError("Private accessor was defined without a getter");
	if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
	return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function vt(e, t, n, r, i) {
	if (r === "m") throw TypeError("Private method is not writable");
	if (r === "a" && !i) throw TypeError("Private accessor was defined without a setter");
	if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
	return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
}
function yt(e, t) {
	if (t === null || typeof t != "object" && typeof t != "function") throw TypeError("Cannot use 'in' operator on non-object");
	return typeof e == "function" ? t === e : e.has(t);
}
function bt(e, t, n) {
	if (t != null) {
		if (typeof t != "object" && typeof t != "function") throw TypeError("Object expected.");
		var r, i;
		if (n) {
			if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
			r = t[Symbol.asyncDispose];
		}
		if (r === void 0) {
			if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
			r = t[Symbol.dispose], n && (i = r);
		}
		if (typeof r != "function") throw TypeError("Object not disposable.");
		i && (r = function() {
			try {
				i.call(this);
			} catch (e) {
				return Promise.reject(e);
			}
		}), e.stack.push({
			value: t,
			dispose: r,
			async: n
		});
	} else n && e.stack.push({ async: !0 });
	return t;
}
function xt(e) {
	function t(t) {
		e.error = e.hasError ? new Dt(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
	}
	var n, r = 0;
	function i() {
		for (; n = e.stack.pop();) try {
			if (!n.async && r === 1) return r = 0, e.stack.push(n), Promise.resolve().then(i);
			if (n.dispose) {
				var a = n.dispose.call(n.value);
				if (n.async) return r |= 2, Promise.resolve(a).then(i, function(e) {
					return t(e), i();
				});
			} else r |= 1;
		} catch (e) {
			t(e);
		}
		if (r === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
		if (e.hasError) throw e.error;
	}
	return i();
}
function St(e, t) {
	return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, a) {
		return n ? t ? ".jsx" : ".js" : r && (!i || !a) ? e : r + i + "." + a.toLowerCase() + "js";
	}) : e;
}
var Ct, A, wt, Tt, Et, Dt, Ot, kt = ae((() => {
	Ct = function(e, t) {
		return Ct = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		}, Ct(e, t);
	}, A = function() {
		return A = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, A.apply(this, arguments);
	}, wt = Object.create ? (function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: function() {
				return t[n];
			}
		}), Object.defineProperty(e, r, i);
	}) : (function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	}), Tt = Object.create ? (function(e, t) {
		Object.defineProperty(e, "default", {
			enumerable: !0,
			value: t
		});
	}) : function(e, t) {
		e.default = t;
	}, Et = function(e) {
		return Et = Object.getOwnPropertyNames || function(e) {
			var t = [];
			for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
			return t;
		}, Et(e);
	}, Dt = typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
		var r = Error(n);
		return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
	}, Ot = {
		__extends: qe,
		__assign: A,
		__rest: Je,
		__decorate: Ye,
		__param: Xe,
		__esDecorate: Ze,
		__runInitializers: Qe,
		__propKey: $e,
		__setFunctionName: et,
		__metadata: tt,
		__awaiter: nt,
		__generator: rt,
		__createBinding: wt,
		__exportStar: it,
		__values: at,
		__read: ot,
		__spread: st,
		__spreadArrays: ct,
		__spreadArray: lt,
		__await: ut,
		__asyncGenerator: dt,
		__asyncDelegator: ft,
		__asyncValues: pt,
		__makeTemplateObject: mt,
		__importStar: ht,
		__importDefault: gt,
		__classPrivateFieldGet: _t,
		__classPrivateFieldSet: vt,
		__classPrivateFieldIn: yt,
		__addDisposableResource: bt,
		__disposeResources: xt,
		__rewriteRelativeImportExtension: St
	};
}));
kt();
var j;
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(j ||= {});
var M;
(function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(M ||= {});
var At;
(function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(At ||= {});
function jt(e) {
	return e.type === M.literal;
}
function Mt(e) {
	return e.type === M.argument;
}
function Nt(e) {
	return e.type === M.number;
}
function Pt(e) {
	return e.type === M.date;
}
function Ft(e) {
	return e.type === M.time;
}
function It(e) {
	return e.type === M.select;
}
function Lt(e) {
	return e.type === M.plural;
}
function Rt(e) {
	return e.type === M.pound;
}
function zt(e) {
	return e.type === M.tag;
}
function Bt(e) {
	return !!(e && typeof e == "object" && e.type === At.number);
}
function Vt(e) {
	return !!(e && typeof e == "object" && e.type === At.dateTime);
}
var Ht = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Ut = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Wt(e) {
	var t = {};
	return e.replace(Ut, function(e) {
		var n = e.length;
		switch (e[0]) {
			case "G":
				t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
				break;
			case "y":
				t.year = n === 2 ? "2-digit" : "numeric";
				break;
			case "Y":
			case "u":
			case "U":
			case "r": throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
			case "q":
			case "Q": throw RangeError("`q/Q` (quarter) patterns are not supported");
			case "M":
			case "L":
				t.month = [
					"numeric",
					"2-digit",
					"short",
					"long",
					"narrow"
				][n - 1];
				break;
			case "w":
			case "W": throw RangeError("`w/W` (week) patterns are not supported");
			case "d":
				t.day = ["numeric", "2-digit"][n - 1];
				break;
			case "D":
			case "F":
			case "g": throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
			case "E":
				t.weekday = n === 4 ? "long" : n === 5 ? "narrow" : "short";
				break;
			case "e":
				if (n < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][n - 4];
				break;
			case "c":
				if (n < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][n - 4];
				break;
			case "a":
				t.hour12 = !0;
				break;
			case "b":
			case "B": throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
			case "h":
				t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "H":
				t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "K":
				t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "k":
				t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "j":
			case "J":
			case "C": throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
			case "m":
				t.minute = ["numeric", "2-digit"][n - 1];
				break;
			case "s":
				t.second = ["numeric", "2-digit"][n - 1];
				break;
			case "S":
			case "A": throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
			case "z":
				t.timeZoneName = n < 4 ? "short" : "long";
				break;
			case "Z":
			case "O":
			case "v":
			case "V":
			case "X":
			case "x": throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
		}
		return "";
	}), t;
}
var Gt = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Kt(e) {
	if (e.length === 0) throw Error("Number skeleton cannot be empty");
	for (var t = e.split(Gt).filter(function(e) {
		return e.length > 0;
	}), n = [], r = 0, i = t; r < i.length; r++) {
		var a = i[r].split("/");
		if (a.length === 0) throw Error("Invalid number skeleton");
		for (var o = a[0], s = a.slice(1), c = 0, l = s; c < l.length; c++) if (l[c].length === 0) throw Error("Invalid number skeleton");
		n.push({
			stem: o,
			options: s
		});
	}
	return n;
}
function qt(e) {
	return e.replace(/^(.*?)-/, "");
}
var Jt = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Yt = /^(@+)?(\+|#+)?[rs]?$/g, Xt = /(\*)(0+)|(#+)(0+)|(0+)/g, Zt = /^(0+)$/;
function Qt(e) {
	var t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Yt, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function $t(e) {
	switch (e) {
		case "sign-auto": return { signDisplay: "auto" };
		case "sign-accounting":
		case "()": return { currencySign: "accounting" };
		case "sign-always":
		case "+!": return { signDisplay: "always" };
		case "sign-accounting-always":
		case "()!": return {
			signDisplay: "always",
			currencySign: "accounting"
		};
		case "sign-except-zero":
		case "+?": return { signDisplay: "exceptZero" };
		case "sign-accounting-except-zero":
		case "()?": return {
			signDisplay: "exceptZero",
			currencySign: "accounting"
		};
		case "sign-never":
		case "+_": return { signDisplay: "never" };
	}
}
function en(e) {
	var t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		var n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Zt.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function tn(e) {
	return $t(e) || {};
}
function nn(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n];
		switch (i.stem) {
			case "percent":
			case "%":
				t.style = "percent";
				continue;
			case "%x100":
				t.style = "percent", t.scale = 100;
				continue;
			case "currency":
				t.style = "currency", t.currency = i.options[0];
				continue;
			case "group-off":
			case ",_":
				t.useGrouping = !1;
				continue;
			case "precision-integer":
			case ".":
				t.maximumFractionDigits = 0;
				continue;
			case "measure-unit":
			case "unit":
				t.style = "unit", t.unit = qt(i.options[0]);
				continue;
			case "compact-short":
			case "K":
				t.notation = "compact", t.compactDisplay = "short";
				continue;
			case "compact-long":
			case "KK":
				t.notation = "compact", t.compactDisplay = "long";
				continue;
			case "scientific":
				t = A(A(A({}, t), { notation: "scientific" }), i.options.reduce(function(e, t) {
					return A(A({}, e), tn(t));
				}, {}));
				continue;
			case "engineering":
				t = A(A(A({}, t), { notation: "engineering" }), i.options.reduce(function(e, t) {
					return A(A({}, e), tn(t));
				}, {}));
				continue;
			case "notation-simple":
				t.notation = "standard";
				continue;
			case "unit-width-narrow":
				t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
				continue;
			case "unit-width-short":
				t.currencyDisplay = "code", t.unitDisplay = "short";
				continue;
			case "unit-width-full-name":
				t.currencyDisplay = "name", t.unitDisplay = "long";
				continue;
			case "unit-width-iso-code":
				t.currencyDisplay = "symbol";
				continue;
			case "scale":
				t.scale = parseFloat(i.options[0]);
				continue;
			case "rounding-mode-floor":
				t.roundingMode = "floor";
				continue;
			case "rounding-mode-ceiling":
				t.roundingMode = "ceil";
				continue;
			case "rounding-mode-down":
				t.roundingMode = "trunc";
				continue;
			case "rounding-mode-up":
				t.roundingMode = "expand";
				continue;
			case "rounding-mode-half-even":
				t.roundingMode = "halfEven";
				continue;
			case "rounding-mode-half-down":
				t.roundingMode = "halfTrunc";
				continue;
			case "rounding-mode-half-up":
				t.roundingMode = "halfExpand";
				continue;
			case "integer-width":
				if (i.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
				i.options[0].replace(Xt, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else if (i && a) throw Error("We currently do not support maximum integer digits");
					else if (o) throw Error("We currently do not support exact integer digits");
					return "";
				});
				continue;
		}
		if (Zt.test(i.stem)) {
			t.minimumIntegerDigits = i.stem.length;
			continue;
		}
		if (Jt.test(i.stem)) {
			if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			i.stem.replace(Jt, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			var a = i.options[0];
			a === "w" ? t = A(A({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = A(A({}, t), Qt(a)));
			continue;
		}
		if (Yt.test(i.stem)) {
			t = A(A({}, t), Qt(i.stem));
			continue;
		}
		var o = $t(i.stem);
		o && (t = A(A({}, t), o));
		var s = en(i.stem);
		s && (t = A(A({}, t), s));
	}
	return t;
}
var rn = {
	"001": ["H", "h"],
	419: [
		"h",
		"H",
		"hB",
		"hb"
	],
	AC: [
		"H",
		"h",
		"hb",
		"hB"
	],
	AD: ["H", "hB"],
	AE: [
		"h",
		"hB",
		"hb",
		"H"
	],
	AF: [
		"H",
		"hb",
		"hB",
		"h"
	],
	AG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	AI: [
		"H",
		"h",
		"hb",
		"hB"
	],
	AL: [
		"h",
		"H",
		"hB"
	],
	AM: ["H", "hB"],
	AO: ["H", "hB"],
	AR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	AS: ["h", "H"],
	AT: ["H", "hB"],
	AU: [
		"h",
		"hb",
		"H",
		"hB"
	],
	AW: ["H", "hB"],
	AX: ["H"],
	AZ: [
		"H",
		"hB",
		"h"
	],
	BA: [
		"H",
		"hB",
		"h"
	],
	BB: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BD: [
		"h",
		"hB",
		"H"
	],
	BE: ["H", "hB"],
	BF: ["H", "hB"],
	BG: [
		"H",
		"hB",
		"h"
	],
	BH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	BI: ["H", "h"],
	BJ: ["H", "hB"],
	BL: ["H", "hB"],
	BM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BN: [
		"hb",
		"hB",
		"h",
		"H"
	],
	BO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	BQ: ["H"],
	BR: ["H", "hB"],
	BS: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BT: ["h", "H"],
	BW: [
		"H",
		"h",
		"hb",
		"hB"
	],
	BY: ["H", "h"],
	BZ: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CA: [
		"h",
		"hb",
		"H",
		"hB"
	],
	CC: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CD: ["hB", "H"],
	CF: [
		"H",
		"h",
		"hB"
	],
	CG: ["H", "hB"],
	CH: [
		"H",
		"hB",
		"h"
	],
	CI: ["H", "hB"],
	CK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CL: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CM: [
		"H",
		"h",
		"hB"
	],
	CN: [
		"H",
		"hB",
		"hb",
		"h"
	],
	CO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CP: ["H"],
	CR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CU: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CV: ["H", "hB"],
	CW: ["H", "hB"],
	CX: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CY: [
		"h",
		"H",
		"hb",
		"hB"
	],
	CZ: ["H"],
	DE: ["H", "hB"],
	DG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	DJ: ["h", "H"],
	DK: ["H"],
	DM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	DO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	DZ: [
		"h",
		"hB",
		"hb",
		"H"
	],
	EA: [
		"H",
		"h",
		"hB",
		"hb"
	],
	EC: [
		"h",
		"H",
		"hB",
		"hb"
	],
	EE: ["H", "hB"],
	EG: [
		"h",
		"hB",
		"hb",
		"H"
	],
	EH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	ER: ["h", "H"],
	ES: [
		"H",
		"hB",
		"h",
		"hb"
	],
	ET: [
		"hB",
		"hb",
		"h",
		"H"
	],
	FI: ["H"],
	FJ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	FK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	FM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	FO: ["H", "h"],
	FR: ["H", "hB"],
	GA: ["H", "hB"],
	GB: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GD: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GE: [
		"H",
		"hB",
		"h"
	],
	GF: ["H", "hB"],
	GG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GH: ["h", "H"],
	GI: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GL: ["H", "h"],
	GM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GN: ["H", "hB"],
	GP: ["H", "hB"],
	GQ: [
		"H",
		"hB",
		"h",
		"hb"
	],
	GR: [
		"h",
		"H",
		"hb",
		"hB"
	],
	GT: [
		"h",
		"H",
		"hB",
		"hb"
	],
	GU: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GW: ["H", "hB"],
	GY: [
		"h",
		"hb",
		"H",
		"hB"
	],
	HK: [
		"h",
		"hB",
		"hb",
		"H"
	],
	HN: [
		"h",
		"H",
		"hB",
		"hb"
	],
	HR: ["H", "hB"],
	HU: ["H", "h"],
	IC: [
		"H",
		"h",
		"hB",
		"hb"
	],
	ID: ["H"],
	IE: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IL: ["H", "hB"],
	IM: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IN: ["h", "H"],
	IO: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IQ: [
		"h",
		"hB",
		"hb",
		"H"
	],
	IR: ["hB", "H"],
	IS: ["H"],
	IT: ["H", "hB"],
	JE: [
		"H",
		"h",
		"hb",
		"hB"
	],
	JM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	JO: [
		"h",
		"hB",
		"hb",
		"H"
	],
	JP: [
		"H",
		"K",
		"h"
	],
	KE: [
		"hB",
		"hb",
		"H",
		"h"
	],
	KG: [
		"H",
		"h",
		"hB",
		"hb"
	],
	KH: [
		"hB",
		"h",
		"H",
		"hb"
	],
	KI: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KM: [
		"H",
		"h",
		"hB",
		"hb"
	],
	KN: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KP: [
		"h",
		"H",
		"hB",
		"hb"
	],
	KR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	KW: [
		"h",
		"hB",
		"hb",
		"H"
	],
	KY: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KZ: ["H", "hB"],
	LA: [
		"H",
		"hb",
		"hB",
		"h"
	],
	LB: [
		"h",
		"hB",
		"hb",
		"H"
	],
	LC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	LI: [
		"H",
		"hB",
		"h"
	],
	LK: [
		"H",
		"h",
		"hB",
		"hb"
	],
	LR: [
		"h",
		"hb",
		"H",
		"hB"
	],
	LS: ["h", "H"],
	LT: [
		"H",
		"h",
		"hb",
		"hB"
	],
	LU: [
		"H",
		"h",
		"hB"
	],
	LV: [
		"H",
		"hB",
		"hb",
		"h"
	],
	LY: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MA: [
		"H",
		"h",
		"hB",
		"hb"
	],
	MC: ["H", "hB"],
	MD: ["H", "hB"],
	ME: [
		"H",
		"hB",
		"h"
	],
	MF: ["H", "hB"],
	MG: ["H", "h"],
	MH: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	ML: ["H"],
	MM: [
		"hB",
		"hb",
		"H",
		"h"
	],
	MN: [
		"H",
		"h",
		"hb",
		"hB"
	],
	MO: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MP: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MQ: ["H", "hB"],
	MR: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MS: [
		"H",
		"h",
		"hb",
		"hB"
	],
	MT: ["H", "h"],
	MU: ["H", "h"],
	MV: ["H", "h"],
	MW: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MX: [
		"h",
		"H",
		"hB",
		"hb"
	],
	MY: [
		"hb",
		"hB",
		"h",
		"H"
	],
	MZ: ["H", "hB"],
	NA: [
		"h",
		"H",
		"hB",
		"hb"
	],
	NC: ["H", "hB"],
	NE: ["H"],
	NF: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NI: [
		"h",
		"H",
		"hB",
		"hb"
	],
	NL: ["H", "hB"],
	NO: ["H", "h"],
	NP: [
		"H",
		"h",
		"hB"
	],
	NR: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NU: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NZ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	OM: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PA: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PE: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PF: [
		"H",
		"h",
		"hB"
	],
	PG: ["h", "H"],
	PH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PK: [
		"h",
		"hB",
		"H"
	],
	PL: ["H", "h"],
	PM: ["H", "hB"],
	PN: [
		"H",
		"h",
		"hb",
		"hB"
	],
	PR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PS: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PT: ["H", "hB"],
	PW: ["h", "H"],
	PY: [
		"h",
		"H",
		"hB",
		"hb"
	],
	QA: [
		"h",
		"hB",
		"hb",
		"H"
	],
	RE: ["H", "hB"],
	RO: ["H", "hB"],
	RS: [
		"H",
		"hB",
		"h"
	],
	RU: ["H"],
	RW: ["H", "h"],
	SA: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SB: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SC: [
		"H",
		"h",
		"hB"
	],
	SD: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SE: ["H"],
	SG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SH: [
		"H",
		"h",
		"hb",
		"hB"
	],
	SI: ["H", "hB"],
	SJ: ["H"],
	SK: ["H"],
	SL: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SM: [
		"H",
		"h",
		"hB"
	],
	SN: [
		"H",
		"h",
		"hB"
	],
	SO: ["h", "H"],
	SR: ["H", "hB"],
	SS: [
		"h",
		"hb",
		"H",
		"hB"
	],
	ST: ["H", "hB"],
	SV: [
		"h",
		"H",
		"hB",
		"hb"
	],
	SX: [
		"H",
		"h",
		"hb",
		"hB"
	],
	SY: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SZ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TA: [
		"H",
		"h",
		"hb",
		"hB"
	],
	TC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TD: [
		"h",
		"H",
		"hB"
	],
	TF: [
		"H",
		"h",
		"hB"
	],
	TG: ["H", "hB"],
	TH: ["H", "h"],
	TJ: ["H", "h"],
	TL: [
		"H",
		"hB",
		"hb",
		"h"
	],
	TM: ["H", "h"],
	TN: [
		"h",
		"hB",
		"hb",
		"H"
	],
	TO: ["h", "H"],
	TR: ["H", "hB"],
	TT: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TW: [
		"hB",
		"hb",
		"h",
		"H"
	],
	TZ: [
		"hB",
		"hb",
		"H",
		"h"
	],
	UA: [
		"H",
		"hB",
		"h"
	],
	UG: [
		"hB",
		"hb",
		"H",
		"h"
	],
	UM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	US: [
		"h",
		"hb",
		"H",
		"hB"
	],
	UY: [
		"h",
		"H",
		"hB",
		"hb"
	],
	UZ: [
		"H",
		"hB",
		"h"
	],
	VA: [
		"H",
		"h",
		"hB"
	],
	VC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VE: [
		"h",
		"H",
		"hB",
		"hb"
	],
	VG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VI: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VN: ["H", "h"],
	VU: ["h", "H"],
	WF: ["H", "hB"],
	WS: ["h", "H"],
	XK: [
		"H",
		"hB",
		"h"
	],
	YE: [
		"h",
		"hB",
		"hb",
		"H"
	],
	YT: ["H", "hB"],
	ZA: [
		"H",
		"h",
		"hb",
		"hB"
	],
	ZM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	ZW: ["H", "h"],
	"af-ZA": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"ar-001": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"ca-ES": [
		"H",
		"h",
		"hB"
	],
	"en-001": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"en-HK": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"en-IL": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"en-MY": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"es-BR": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"es-ES": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"es-GQ": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"fr-CA": [
		"H",
		"h",
		"hB"
	],
	"gl-ES": [
		"H",
		"h",
		"hB"
	],
	"gu-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"hi-IN": [
		"hB",
		"h",
		"H"
	],
	"it-CH": [
		"H",
		"h",
		"hB"
	],
	"it-IT": [
		"H",
		"h",
		"hB"
	],
	"kn-IN": [
		"hB",
		"h",
		"H"
	],
	"ml-IN": [
		"hB",
		"h",
		"H"
	],
	"mr-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"pa-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"ta-IN": [
		"hB",
		"h",
		"hb",
		"H"
	],
	"te-IN": [
		"hB",
		"h",
		"H"
	],
	"zu-ZA": [
		"H",
		"hB",
		"hb",
		"h"
	]
};
function an(e, t) {
	for (var n = "", r = 0; r < e.length; r++) {
		var i = e.charAt(r);
		if (i === "j") {
			for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
			var o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), c = "a", l = on(t);
			for ((l == "H" || l == "k") && (s = 0); s-- > 0;) n += c;
			for (; o-- > 0;) n = l + n;
		} else n += i === "J" ? "H" : i;
	}
	return n;
}
function on(e) {
	var t = e.hourCycle;
	if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	var n = e.language, r;
	return n !== "root" && (r = e.maximize().region), (rn[r || ""] || rn[n || ""] || rn[`${n}-001`] || rn["001"])[0];
}
kt();
var sn = RegExp(`^${Ht.source}*`), cn = RegExp(`${Ht.source}*\$`);
function N(e, t) {
	return {
		start: e,
		end: t
	};
}
var ln = !!String.prototype.startsWith && "_a".startsWith("a", 1), un = !!String.fromCodePoint, dn = !!Object.fromEntries, fn = !!String.prototype.codePointAt, pn = !!String.prototype.trimStart, mn = !!String.prototype.trimEnd, hn = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
	return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, gn = !0;
try {
	gn = Cn("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")?.[0] === "a";
} catch {
	gn = !1;
}
var _n = ln ? function(e, t, n) {
	return e.startsWith(t, n);
} : function(e, t, n) {
	return e.slice(n, n + t.length) === t;
}, vn = un ? String.fromCodePoint : function() {
	for (var e = [...arguments], t = "", n = e.length, r = 0, i; n > r;) {
		if (i = e[r++], i > 1114111) throw RangeError(i + " is not a valid code point");
		t += i < 65536 ? String.fromCharCode(i) : String.fromCharCode(((i -= 65536) >> 10) + 55296, i % 1024 + 56320);
	}
	return t;
}, yn = dn ? Object.fromEntries : function(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n], a = i[0];
		t[a] = i[1];
	}
	return t;
}, bn = fn ? function(e, t) {
	return e.codePointAt(t);
} : function(e, t) {
	var n = e.length;
	if (!(t < 0 || t >= n)) {
		var r = e.charCodeAt(t), i;
		return r < 55296 || r > 56319 || t + 1 === n || (i = e.charCodeAt(t + 1)) < 56320 || i > 57343 ? r : (r - 55296 << 10) + (i - 56320) + 65536;
	}
}, xn = pn ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(sn, "");
}, Sn = mn ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(cn, "");
};
function Cn(e, t) {
	return new RegExp(e, t);
}
var wn;
if (gn) {
	var Tn = Cn("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
	wn = function(e, t) {
		return Tn.lastIndex = t, Tn.exec(e)[1] ?? "";
	};
} else wn = function(e, t) {
	for (var n = [];;) {
		var r = bn(e, t);
		if (r === void 0 || An(r) || jn(r)) break;
		n.push(r), t += r >= 65536 ? 2 : 1;
	}
	return vn.apply(void 0, n);
};
var En = function() {
	function e(e, t) {
		t === void 0 && (t = {}), this.message = e, this.position = {
			offset: 0,
			line: 1,
			column: 1
		}, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
	}
	return e.prototype.parse = function() {
		if (this.offset() !== 0) throw Error("parser can only be used once");
		return this.parseMessage(0, "", !1);
	}, e.prototype.parseMessage = function(e, t, n) {
		for (var r = []; !this.isEOF();) {
			var i = this.char();
			if (i === 123) {
				var a = this.parseArgument(e, n);
				if (a.err) return a;
				r.push(a.val);
			} else if (i === 125 && e > 0) break;
			else if (i === 35 && (t === "plural" || t === "selectordinal")) {
				var o = this.clonePosition();
				this.bump(), r.push({
					type: M.pound,
					location: N(o, this.clonePosition())
				});
			} else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
				if (n) break;
				return this.error(j.UNMATCHED_CLOSING_TAG, N(this.clonePosition(), this.clonePosition()));
			} else if (i === 60 && !this.ignoreTag && Dn(this.peek() || 0)) {
				var a = this.parseTag(e, t);
				if (a.err) return a;
				r.push(a.val);
			} else {
				var a = this.parseLiteral(e, t);
				if (a.err) return a;
				r.push(a.val);
			}
		}
		return {
			val: r,
			err: null
		};
	}, e.prototype.parseTag = function(e, t) {
		var n = this.clonePosition();
		this.bump();
		var r = this.parseTagName();
		if (this.bumpSpace(), this.bumpIf("/>")) return {
			val: {
				type: M.literal,
				value: `<${r}/>`,
				location: N(n, this.clonePosition())
			},
			err: null
		};
		if (this.bumpIf(">")) {
			var i = this.parseMessage(e + 1, t, !0);
			if (i.err) return i;
			var a = i.val, o = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !Dn(this.char())) return this.error(j.INVALID_TAG, N(o, this.clonePosition()));
				var s = this.clonePosition();
				return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: M.tag,
						value: r,
						children: a,
						location: N(n, this.clonePosition())
					},
					err: null
				} : this.error(j.INVALID_TAG, N(o, this.clonePosition()))) : this.error(j.UNMATCHED_CLOSING_TAG, N(s, this.clonePosition()));
			}
			return this.error(j.UNCLOSED_TAG, N(n, this.clonePosition()));
		}
		return this.error(j.INVALID_TAG, N(n, this.clonePosition()));
	}, e.prototype.parseTagName = function() {
		var e = this.offset();
		for (this.bump(); !this.isEOF() && kn(this.char());) this.bump();
		return this.message.slice(e, this.offset());
	}, e.prototype.parseLiteral = function(e, t) {
		for (var n = this.clonePosition(), r = "";;) {
			var i = this.tryParseQuote(t);
			if (i) {
				r += i;
				continue;
			}
			var a = this.tryParseUnquoted(e, t);
			if (a) {
				r += a;
				continue;
			}
			var o = this.tryParseLeftAngleBracket();
			if (o) {
				r += o;
				continue;
			}
			break;
		}
		var s = N(n, this.clonePosition());
		return {
			val: {
				type: M.literal,
				value: r,
				location: s
			},
			err: null
		};
	}, e.prototype.tryParseLeftAngleBracket = function() {
		return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !On(this.peek() || 0)) ? (this.bump(), "<") : null;
	}, e.prototype.tryParseQuote = function(e) {
		if (this.isEOF() || this.char() !== 39) return null;
		switch (this.peek()) {
			case 39: return this.bump(), this.bump(), "'";
			case 123:
			case 60:
			case 62:
			case 125: break;
			case 35:
				if (e === "plural" || e === "selectordinal") break;
				return null;
			default: return null;
		}
		this.bump();
		var t = [this.char()];
		for (this.bump(); !this.isEOF();) {
			var n = this.char();
			if (n === 39) {
				if (this.peek() === 39) t.push(39), this.bump();
				else {
					this.bump();
					break;
				}
			} else t.push(n);
			this.bump();
		}
		return vn.apply(void 0, t);
	}, e.prototype.tryParseUnquoted = function(e, t) {
		if (this.isEOF()) return null;
		var n = this.char();
		return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), vn(n));
	}, e.prototype.parseArgument = function(e, t) {
		var n = this.clonePosition();
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(j.EXPECT_ARGUMENT_CLOSING_BRACE, N(n, this.clonePosition()));
		if (this.char() === 125) return this.bump(), this.error(j.EMPTY_ARGUMENT, N(n, this.clonePosition()));
		var r = this.parseIdentifierIfPossible().value;
		if (!r) return this.error(j.MALFORMED_ARGUMENT, N(n, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(j.EXPECT_ARGUMENT_CLOSING_BRACE, N(n, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: M.argument,
					value: r,
					location: N(n, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(j.EXPECT_ARGUMENT_CLOSING_BRACE, N(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
			default: return this.error(j.MALFORMED_ARGUMENT, N(n, this.clonePosition()));
		}
	}, e.prototype.parseIdentifierIfPossible = function() {
		var e = this.clonePosition(), t = this.offset(), n = wn(this.message, t), r = t + n.length;
		return this.bumpTo(r), {
			value: n,
			location: N(e, this.clonePosition())
		};
	}, e.prototype.parseArgumentOptions = function(e, t, n, r) {
		var i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
		switch (a) {
			case "": return this.error(j.EXPECT_ARGUMENT_TYPE, N(i, o));
			case "number":
			case "date":
			case "time":
				this.bumpSpace();
				var s = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					var c = this.clonePosition(), l = this.parseSimpleArgStyleIfPossible();
					if (l.err) return l;
					var u = Sn(l.val);
					if (u.length === 0) return this.error(j.EXPECT_ARGUMENT_STYLE, N(this.clonePosition(), this.clonePosition()));
					s = {
						style: u,
						styleLocation: N(c, this.clonePosition())
					};
				}
				var d = this.tryParseArgumentClose(r);
				if (d.err) return d;
				var f = N(r, this.clonePosition());
				if (s && _n(s?.style, "::", 0)) {
					var p = xn(s.style.slice(2));
					if (a === "number") {
						var l = this.parseNumberSkeletonFromString(p, s.styleLocation);
						return l.err ? l : {
							val: {
								type: M.number,
								value: n,
								location: f,
								style: l.val
							},
							err: null
						};
					}
					if (p.length === 0) return this.error(j.EXPECT_DATE_TIME_SKELETON, f);
					var m = p;
					this.locale && (m = an(p, this.locale));
					var u = {
						type: At.dateTime,
						pattern: m,
						location: s.styleLocation,
						parsedOptions: this.shouldParseSkeletons ? Wt(m) : {}
					};
					return {
						val: {
							type: a === "date" ? M.date : M.time,
							value: n,
							location: f,
							style: u
						},
						err: null
					};
				}
				return {
					val: {
						type: a === "number" ? M.number : a === "date" ? M.date : M.time,
						value: n,
						location: f,
						style: s?.style ?? null
					},
					err: null
				};
			case "plural":
			case "selectordinal":
			case "select":
				var h = this.clonePosition();
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(j.EXPECT_SELECT_ARGUMENT_OPTIONS, N(h, A({}, h)));
				this.bumpSpace();
				var g = this.parseIdentifierIfPossible(), _ = 0;
				if (a !== "select" && g.value === "offset") {
					if (!this.bumpIf(":")) return this.error(j.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, N(this.clonePosition(), this.clonePosition()));
					this.bumpSpace();
					var l = this.tryParseDecimalInteger(j.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, j.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
					if (l.err) return l;
					this.bumpSpace(), g = this.parseIdentifierIfPossible(), _ = l.val;
				}
				var v = this.tryParsePluralOrSelectOptions(e, a, t, g);
				if (v.err) return v;
				var d = this.tryParseArgumentClose(r);
				if (d.err) return d;
				var y = N(r, this.clonePosition());
				return a === "select" ? {
					val: {
						type: M.select,
						value: n,
						options: yn(v.val),
						location: y
					},
					err: null
				} : {
					val: {
						type: M.plural,
						value: n,
						options: yn(v.val),
						offset: _,
						pluralType: a === "plural" ? "cardinal" : "ordinal",
						location: y
					},
					err: null
				};
			default: return this.error(j.INVALID_ARGUMENT_TYPE, N(i, o));
		}
	}, e.prototype.tryParseArgumentClose = function(e) {
		return this.isEOF() || this.char() !== 125 ? this.error(j.EXPECT_ARGUMENT_CLOSING_BRACE, N(e, this.clonePosition())) : (this.bump(), {
			val: !0,
			err: null
		});
	}, e.prototype.parseSimpleArgStyleIfPossible = function() {
		for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
			case 39:
				this.bump();
				var n = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(j.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, N(n, this.clonePosition()));
				this.bump();
				break;
			case 123:
				e += 1, this.bump();
				break;
			case 125:
				if (e > 0) --e;
				else return {
					val: this.message.slice(t.offset, this.offset()),
					err: null
				};
				break;
			default: this.bump();
		}
		return {
			val: this.message.slice(t.offset, this.offset()),
			err: null
		};
	}, e.prototype.parseNumberSkeletonFromString = function(e, t) {
		var n = [];
		try {
			n = Kt(e);
		} catch {
			return this.error(j.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: At.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? nn(n) : {}
			},
			err: null
		};
	}, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
		for (var i, a = !1, o = [], s = /* @__PURE__ */ new Set(), c = r.value, l = r.location;;) {
			if (c.length === 0) {
				var u = this.clonePosition();
				if (t !== "select" && this.bumpIf("=")) {
					var d = this.tryParseDecimalInteger(j.EXPECT_PLURAL_ARGUMENT_SELECTOR, j.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (d.err) return d;
					l = N(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
				} else break;
			}
			if (s.has(c)) return this.error(t === "select" ? j.DUPLICATE_SELECT_ARGUMENT_SELECTOR : j.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
			c === "other" && (a = !0), this.bumpSpace();
			var f = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(t === "select" ? j.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : j.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, N(this.clonePosition(), this.clonePosition()));
			var p = this.parseMessage(e + 1, t, n);
			if (p.err) return p;
			var m = this.tryParseArgumentClose(f);
			if (m.err) return m;
			o.push([c, {
				value: p.val,
				location: N(f, this.clonePosition())
			}]), s.add(c), this.bumpSpace(), i = this.parseIdentifierIfPossible(), c = i.value, l = i.location;
		}
		return o.length === 0 ? this.error(t === "select" ? j.EXPECT_SELECT_ARGUMENT_SELECTOR : j.EXPECT_PLURAL_ARGUMENT_SELECTOR, N(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(j.MISSING_OTHER_CLAUSE, N(this.clonePosition(), this.clonePosition())) : {
			val: o,
			err: null
		};
	}, e.prototype.tryParseDecimalInteger = function(e, t) {
		var n = 1, r = this.clonePosition();
		this.bumpIf("+") || this.bumpIf("-") && (n = -1);
		for (var i = !1, a = 0; !this.isEOF();) {
			var o = this.char();
			if (o >= 48 && o <= 57) i = !0, a = a * 10 + (o - 48), this.bump();
			else break;
		}
		var s = N(r, this.clonePosition());
		return i ? (a *= n, hn(a) ? {
			val: a,
			err: null
		} : this.error(t, s)) : this.error(e, s);
	}, e.prototype.offset = function() {
		return this.position.offset;
	}, e.prototype.isEOF = function() {
		return this.offset() === this.message.length;
	}, e.prototype.clonePosition = function() {
		return {
			offset: this.position.offset,
			line: this.position.line,
			column: this.position.column
		};
	}, e.prototype.char = function() {
		var e = this.position.offset;
		if (e >= this.message.length) throw Error("out of bound");
		var t = bn(this.message, e);
		if (t === void 0) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
		return t;
	}, e.prototype.error = function(e, t) {
		return {
			val: null,
			err: {
				kind: e,
				message: this.message,
				location: t
			}
		};
	}, e.prototype.bump = function() {
		if (!this.isEOF()) {
			var e = this.char();
			e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
		}
	}, e.prototype.bumpIf = function(e) {
		if (_n(this.message, e, this.offset())) {
			for (var t = 0; t < e.length; t++) this.bump();
			return !0;
		}
		return !1;
	}, e.prototype.bumpUntil = function(e) {
		var t = this.offset(), n = this.message.indexOf(e, t);
		return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
	}, e.prototype.bumpTo = function(e) {
		if (this.offset() > e) throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
		for (e = Math.min(e, this.message.length);;) {
			var t = this.offset();
			if (t === e) break;
			if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
			if (this.bump(), this.isEOF()) break;
		}
	}, e.prototype.bumpSpace = function() {
		for (; !this.isEOF() && An(this.char());) this.bump();
	}, e.prototype.peek = function() {
		if (this.isEOF()) return null;
		var e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}, e;
}();
function Dn(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function On(e) {
	return Dn(e) || e === 47;
}
function kn(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function An(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function jn(e) {
	return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
kt();
function Mn(e) {
	e.forEach(function(e) {
		if (delete e.location, It(e) || Lt(e)) for (var t in e.options) delete e.options[t].location, Mn(e.options[t].value);
		else Nt(e) && Bt(e.style) || (Pt(e) || Ft(e)) && Vt(e.style) ? delete e.style.location : zt(e) && Mn(e.children);
	});
}
function Nn(e, t) {
	t === void 0 && (t = {}), t = A({
		shouldParseSkeletons: !0,
		requiresOtherClause: !0
	}, t);
	var n = new En(e, t).parse();
	if (n.err) {
		var r = SyntaxError(j[n.err.kind]);
		throw r.location = n.err.location, r.originalMessage = n.err.message, r;
	}
	return t?.captureLocation || Mn(n.val), n.val;
}
var Pn = oe(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.SKELETON_TYPE = e.TYPE = void 0, e.isLiteralElement = r, e.isArgumentElement = i, e.isNumberElement = a, e.isDateElement = o, e.isTimeElement = s, e.isSelectElement = c, e.isPluralElement = l, e.isPoundElement = u, e.isTagElement = d, e.isNumberSkeleton = f, e.isDateTimeSkeleton = p, e.createLiteralElement = m, e.createNumberElement = h;
	var t;
	(function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	})(t || (e.TYPE = t = {}));
	var n;
	(function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	})(n || (e.SKELETON_TYPE = n = {}));
	function r(e) {
		return e.type === t.literal;
	}
	function i(e) {
		return e.type === t.argument;
	}
	function a(e) {
		return e.type === t.number;
	}
	function o(e) {
		return e.type === t.date;
	}
	function s(e) {
		return e.type === t.time;
	}
	function c(e) {
		return e.type === t.select;
	}
	function l(e) {
		return e.type === t.plural;
	}
	function u(e) {
		return e.type === t.pound;
	}
	function d(e) {
		return e.type === t.tag;
	}
	function f(e) {
		return !!(e && typeof e == "object" && e.type === n.number);
	}
	function p(e) {
		return !!(e && typeof e == "object" && e.type === n.dateTime);
	}
	function m(e) {
		return {
			type: t.literal,
			value: e
		};
	}
	function h(e, n) {
		return {
			type: t.number,
			value: e,
			style: n
		};
	}
})), Fn = oe(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), kt(), le(Ke), Pn();
})), In = Pn();
Fn();
function Ln({ icuString: e, shouldVisit: t, visitor: n, options: { recurseIntoVisited: r = !0, ...i } }) {
	let a = Nn(e, i);
	return o(a), a;
	function o(e) {
		e.map(s);
	}
	function s(e) {
		let i = !1;
		t(e) && (n(e), i = !0), (!i || r) && (e.type === M.select || e.type === M.plural ? Object.values(e.options).map((e) => e.value).map(o) : e.type === M.tag && o(e.children));
	}
}
var Rn = "_gt_";
RegExp(`^${Rn}\\d+$`);
var zn = RegExp(`^${Rn}$`);
function Bn(e) {
	return e.type === In.TYPE.select && zn.test(e.value) && !!e.options.other && (e.options.other.value.length === 0 || e.options.other.value.length > 0 && e.options.other.value[0]?.type === In.TYPE.literal);
}
function Vn(e) {
	if (!e.includes("_gt_")) return e;
	let t = [];
	function n(e) {
		t.push({
			start: e.location?.start.offset ?? 0,
			end: e.location?.end.offset ?? 0,
			otherStart: e.options.other.location?.start.offset ?? 0,
			otherEnd: e.options.other.location?.end.offset ?? 0
		});
	}
	Ln({
		icuString: e,
		shouldVisit: Bn,
		visitor: n,
		options: {
			recurseIntoVisited: !1,
			captureLocation: !0
		}
	});
	let r = [], i = 0;
	for (let n = 0; n < t.length; n++) {
		let { start: a, end: o, otherStart: s, otherEnd: c } = t[n];
		r.push(e.slice(i, a)), r.push(e.slice(a, a + 4 + 1)), r.push(String(n + 1)), r.push(e.slice(a + 4 + 1, s)), r.push("{}"), r.push(e.slice(c, o)), i = o;
	}
	return r.push(e.slice(i, e.length)), r.join("");
}
function Hn(e, t) {
	var n = t && t.cache ? t.cache : Qn, r = t && t.serializer ? t.serializer : Xn;
	return (t && t.strategy ? t.strategy : qn)(e, {
		cache: n,
		serializer: r
	});
}
function Un(e) {
	return e == null || typeof e == "number" || typeof e == "boolean";
}
function Wn(e, t, n, r) {
	var i = Un(r) ? r : n(r), a = t.get(i);
	return a === void 0 && (a = e.call(this, r), t.set(i, a)), a;
}
function Gn(e, t, n) {
	var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
	return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
}
function Kn(e, t, n, r, i) {
	return n.bind(t, e, r, i);
}
function qn(e, t) {
	var n = e.length === 1 ? Wn : Gn;
	return Kn(e, this, n, t.cache.create(), t.serializer);
}
function Jn(e, t) {
	return Kn(e, this, Gn, t.cache.create(), t.serializer);
}
function Yn(e, t) {
	return Kn(e, this, Wn, t.cache.create(), t.serializer);
}
var Xn = function() {
	return JSON.stringify(arguments);
}, Zn = function() {
	function e() {
		this.cache = Object.create(null);
	}
	return e.prototype.get = function(e) {
		return this.cache[e];
	}, e.prototype.set = function(e, t) {
		this.cache[e] = t;
	}, e;
}(), Qn = { create: function() {
	return new Zn();
} }, $n = {
	variadic: Jn,
	monadic: Yn
};
kt();
var er;
(function(e) {
	e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(er ||= {});
var tr = function(e) {
	qe(t, e);
	function t(t, n, r) {
		var i = e.call(this, t) || this;
		return i.code = n, i.originalMessage = r, i;
	}
	return t.prototype.toString = function() {
		return `[formatjs Error: ${this.code}] ${this.message}`;
	}, t;
}(Error), nr = function(e) {
	qe(t, e);
	function t(t, n, r, i) {
		return e.call(this, `Invalid values for "${t}": "${n}". Options are "${Object.keys(r).join("\", \"")}"`, er.INVALID_VALUE, i) || this;
	}
	return t;
}(tr), rr = function(e) {
	qe(t, e);
	function t(t, n, r) {
		return e.call(this, `Value for "${t}" must be of type ${n}`, er.INVALID_VALUE, r) || this;
	}
	return t;
}(tr), ir = function(e) {
	qe(t, e);
	function t(t, n) {
		return e.call(this, `The intl string context variable "${t}" was not provided to the string "${n}"`, er.MISSING_VALUE, n) || this;
	}
	return t;
}(tr), P;
(function(e) {
	e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(P ||= {});
function ar(e) {
	return e.length < 2 ? e : e.reduce(function(e, t) {
		var n = e[e.length - 1];
		return !n || n.type !== P.literal || t.type !== P.literal ? e.push(t) : n.value += t.value, e;
	}, []);
}
function or(e) {
	return typeof e == "function";
}
function sr(e, t, n, r, i, a, o) {
	if (e.length === 1 && jt(e[0])) return [{
		type: P.literal,
		value: e[0].value
	}];
	for (var s = [], c = 0, l = e; c < l.length; c++) {
		var u = l[c];
		if (jt(u)) {
			s.push({
				type: P.literal,
				value: u.value
			});
			continue;
		}
		if (Rt(u)) {
			typeof a == "number" && s.push({
				type: P.literal,
				value: n.getNumberFormat(t).format(a)
			});
			continue;
		}
		var d = u.value;
		if (!(i && d in i)) throw new ir(d, o);
		var f = i[d];
		if (Mt(u)) {
			(!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), s.push({
				type: typeof f == "string" ? P.literal : P.object,
				value: f
			});
			continue;
		}
		if (Pt(u)) {
			var p = typeof u.style == "string" ? r.date[u.style] : Vt(u.style) ? u.style.parsedOptions : void 0;
			s.push({
				type: P.literal,
				value: n.getDateTimeFormat(t, p).format(f)
			});
			continue;
		}
		if (Ft(u)) {
			var p = typeof u.style == "string" ? r.time[u.style] : Vt(u.style) ? u.style.parsedOptions : r.time.medium;
			s.push({
				type: P.literal,
				value: n.getDateTimeFormat(t, p).format(f)
			});
			continue;
		}
		if (Nt(u)) {
			var p = typeof u.style == "string" ? r.number[u.style] : Bt(u.style) ? u.style.parsedOptions : void 0;
			p && p.scale && (f *= p.scale || 1), s.push({
				type: P.literal,
				value: n.getNumberFormat(t, p).format(f)
			});
			continue;
		}
		if (zt(u)) {
			var m = u.children, h = u.value, g = i[h];
			if (!or(g)) throw new rr(h, "function", o);
			var _ = g(sr(m, t, n, r, i, a).map(function(e) {
				return e.value;
			}));
			Array.isArray(_) || (_ = [_]), s.push.apply(s, _.map(function(e) {
				return {
					type: typeof e == "string" ? P.literal : P.object,
					value: e
				};
			}));
		}
		if (It(u)) {
			var v = u.options[f] || u.options.other;
			if (!v) throw new nr(u.value, f, Object.keys(u.options), o);
			s.push.apply(s, sr(v.value, t, n, r, i));
			continue;
		}
		if (Lt(u)) {
			var v = u.options[`=${f}`];
			if (!v) {
				if (!Intl.PluralRules) throw new tr("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", er.MISSING_INTL_API, o);
				var y = n.getPluralRules(t, { type: u.pluralType }).select(f - (u.offset || 0));
				v = u.options[y] || u.options.other;
			}
			if (!v) throw new nr(u.value, f, Object.keys(u.options), o);
			s.push.apply(s, sr(v.value, t, n, r, i, f - (u.offset || 0)));
			continue;
		}
	}
	return ar(s);
}
kt();
function cr(e, t) {
	return t ? A(A(A({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
		return n[r] = A(A({}, e[r]), t[r] || {}), n;
	}, {})) : e;
}
function lr(e, t) {
	return t ? Object.keys(e).reduce(function(n, r) {
		return n[r] = cr(e[r], t[r]), n;
	}, A({}, e)) : e;
}
function ur(e) {
	return { create: function() {
		return {
			get: function(t) {
				return e[t];
			},
			set: function(t, n) {
				e[t] = n;
			}
		};
	} };
}
function dr(e) {
	return e === void 0 && (e = {
		number: {},
		dateTime: {},
		pluralRules: {}
	}), {
		getNumberFormat: Hn(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.NumberFormat).bind.apply(e, lt([void 0], t, !1)))();
		}, {
			cache: ur(e.number),
			strategy: $n.variadic
		}),
		getDateTimeFormat: Hn(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.DateTimeFormat).bind.apply(e, lt([void 0], t, !1)))();
		}, {
			cache: ur(e.dateTime),
			strategy: $n.variadic
		}),
		getPluralRules: Hn(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.PluralRules).bind.apply(e, lt([void 0], t, !1)))();
		}, {
			cache: ur(e.pluralRules),
			strategy: $n.variadic
		})
	};
}
var fr = function() {
	function e(t, n, r, i) {
		n === void 0 && (n = e.defaultLocale);
		var a = this;
		if (this.formatterCache = {
			number: {},
			dateTime: {},
			pluralRules: {}
		}, this.format = function(e) {
			var t = a.formatToParts(e);
			if (t.length === 1) return t[0].value;
			var n = t.reduce(function(e, t) {
				return !e.length || t.type !== P.literal || typeof e[e.length - 1] != "string" ? e.push(t.value) : e[e.length - 1] += t.value, e;
			}, []);
			return n.length <= 1 ? n[0] || "" : n;
		}, this.formatToParts = function(e) {
			return sr(a.ast, a.locales, a.formatters, a.formats, e, void 0, a.message);
		}, this.resolvedOptions = function() {
			return { locale: a.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(a.locales)[0] };
		}, this.getAst = function() {
			return a.ast;
		}, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
			if (this.message = t, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
			var o = i || {};
			o.formatters;
			var s = Je(o, ["formatters"]);
			this.ast = e.__parse(t, A(A({}, s), { locale: this.resolvedLocale }));
		} else this.ast = t;
		if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
		this.formats = lr(e.formats, r), this.formatters = i && i.formatters || dr(this.formatterCache);
	}
	return Object.defineProperty(e, "defaultLocale", {
		get: function() {
			return e.memoizedDefaultLocale ||= new Intl.NumberFormat().resolvedOptions().locale, e.memoizedDefaultLocale;
		},
		enumerable: !1,
		configurable: !0
	}), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
		if (Intl.Locale !== void 0) {
			var t = Intl.NumberFormat.supportedLocalesOf(e);
			return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
		}
	}, e.__parse = Nn, e.formats = {
		number: {
			integer: { maximumFractionDigits: 0 },
			currency: { style: "currency" },
			percent: { style: "percent" }
		},
		date: {
			short: {
				month: "numeric",
				day: "numeric",
				year: "2-digit"
			},
			medium: {
				month: "short",
				day: "numeric",
				year: "numeric"
			},
			long: {
				month: "long",
				day: "numeric",
				year: "numeric"
			},
			full: {
				weekday: "long",
				month: "long",
				day: "numeric",
				year: "numeric"
			}
		},
		time: {
			short: {
				hour: "numeric",
				minute: "numeric"
			},
			medium: {
				hour: "numeric",
				minute: "numeric",
				second: "numeric"
			},
			long: {
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
				timeZoneName: "short"
			},
			full: {
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
				timeZoneName: "short"
			}
		}
	}, e;
}(), pr = [
	"Cham",
	"Jamo",
	"Kawi",
	"Lisu",
	"Toto",
	"Thai"
], mr = (e) => e >= "qaa" && e <= "qtz", F = (e, t) => {
	t?.[e] && typeof t[e] == "object" && "code" in t[e] && t[e].code && (e = t[e].code);
	try {
		let { language: t, region: n, script: r } = O.get("Locale", e);
		return !(e.split("-").length !== (() => {
			let e = 1;
			return n && (e += 1), r && (e += 1), e;
		})() || O.get("DisplayNames", ["en"], { type: "language" }).of(t) === t && !mr(t) || n && O.get("DisplayNames", ["en"], { type: "region" }).of(n) === n || r && O.get("DisplayNames", ["en"], { type: "script" }).of(r) === r && !pr.includes(r));
	} catch {
		return !1;
	}
}, I = (e) => {
	try {
		return Intl.getCanonicalLocales(e)[0];
	} catch {
		return e;
	}
};
function hr(e, t) {
	let { language: n, region: r, script: i } = O.get("Locale", e), { language: a, region: o, script: s } = O.get("Locale", t);
	return !(n !== a || r && o && r !== o || i && s && i !== s);
}
function gr(...e) {
	try {
		let t = e.flat().map(I);
		for (let e = 0; e < t.length; e++) for (let n = e + 1; n < t.length; n++) if (!hr(t[e], t[n])) return !1;
		return !0;
	} catch (e) {
		return console.error(e), !1;
	}
}
function _r(...e) {
	try {
		let t = e.flat().map((e) => O.get("Locale", e).language);
		return t.every((e) => e === t[0]);
	} catch (e) {
		return console.error(e), !1;
	}
}
function vr(e, t, n, r) {
	return !(!F(e, r) || !F(t, r) || n && n.some((e) => !F(e, r)) || gr(e, t) || n && !n.some((e) => _r(t, e)));
}
var yr = (e, t, n) => {
	if (e?.[t]) return typeof e[t] == "string" ? n === "name" ? e[t] : void 0 : e[t][n];
}, br = (e, t) => !!(t?.[e] && typeof t[e] == "object" && "code" in t[e] && t[e].code && F(t[e].code));
function xr(e, t) {
	let n = e;
	t && br(e, t) && (e = t[e].code);
	try {
		let r = I(e), i = O.get("Locale", r), { language: a, region: o } = i;
		if (t) for (let i of [
			n,
			e,
			r,
			a
		]) {
			let e = yr(t, i, "emoji");
			if (e) return e;
		}
		let s = o && Ar(o);
		if (s) return s;
		let c = i.maximize();
		return Tr[c.language] || kr(c.region || "");
	} catch {
		return wr;
	}
}
var Sr = "🌍", Cr = "🌏", wr = Sr, Tr = {
	ca: Sr,
	eu: Sr,
	ku: Sr,
	bo: Cr,
	ug: Cr,
	gd: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
	cy: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
	gv: "🇮🇲",
	grc: "🏺"
}, Er = {
	EU: "🇪🇺",
	419: "🌎"
}, Dr = /* @__PURE__ */ new Set(/* @__PURE__ */ "AF.AX.AL.DZ.AS.AD.AO.AI.AQ.AG.AR.AM.AW.AU.AT.AZ.BS.BH.BD.BB.BY.BE.BZ.BJ.BM.BT.BO.BQ.BA.BW.BV.BR.IO.BN.BG.BF.BI.CV.KH.CM.CA.KY.CF.TD.CL.CN.CX.CC.CO.KM.CD.CG.CK.CR.CI.HR.CU.CW.CY.CZ.DK.DJ.DM.DO.EC.EG.SV.GQ.ER.EE.SZ.ET.FK.FO.FJ.FI.FR.GF.PF.TF.GA.GM.GE.DE.GH.GI.GR.GL.GD.GP.GU.GT.GG.GN.GW.GY.HT.HM.VA.HN.HK.HU.IS.IN.ID.IR.IQ.IE.IM.IL.IT.JM.JP.JE.JO.KZ.KE.KI.KP.KR.KW.KG.LA.LV.LB.LS.LR.LY.LI.LT.LU.MO.MG.MW.MY.MV.ML.MT.MH.MQ.MR.MU.YT.MX.FM.MD.MC.MN.ME.MS.MA.MZ.MM.NA.NR.NP.NL.NC.NZ.NI.NE.NG.NU.NF.MK.MP.NO.OM.PK.PW.PS.PA.PG.PY.PE.PH.PN.PL.PT.PR.QA.RE.RO.RU.RW.BL.SH.KN.LC.MF.PM.VC.WS.SM.ST.SA.SN.RS.SC.SL.SG.SX.SK.SI.SB.SO.ZA.GS.SS.ES.LK.SD.SR.SJ.SE.CH.SY.TW.TJ.TZ.TH.TL.TG.TK.TO.TT.TN.TR.TM.TC.TV.UG.UA.AE.GB.US.UM.UY.UZ.VU.VE.VN.VG.VI.WF.EH.YE.ZM.ZW".split(".")), Or = 127397;
function kr(e) {
	return Ar(e) || "🌍";
}
function Ar(e) {
	let t = e.toUpperCase(), n = Er[t];
	if (n) return n;
	if (Dr.has(t)) return String.fromCodePoint(t.charCodeAt(0) + Or, t.charCodeAt(1) + Or);
}
function jr(e, t) {
	if (t) {
		let n = {};
		for (let r of e) {
			let e = t[r];
			e && (typeof e == "string" ? n.name ||= e : e && (n = {
				...e,
				...n
			}));
		}
		return n;
	}
}
function Mr(e, t = "en", n) {
	let r = e;
	n && br(e, n) && (e = n[e].code), t ||= "en";
	try {
		let i = I(e), a = O.get("Locale", e), o = a.language, s = jr([
			r,
			e,
			i,
			o
		], n), c = a.region, l = a.maximize(), u = l.toString(), d = a.region || s?.regionCode || l.region || "", f = a.script || s?.scriptCode || l.script || "", p = a.minimize().toString(), m = [
			t,
			e,
			"en"
		], h = [
			e,
			t,
			"en"
		], g = O.get("DisplayNames", m, { type: "language" }), _ = O.get("DisplayNames", h, { type: "language" }), v = s?.name, y = s?.nativeName || s?.name, b = v || g.of(e) || e, x = y || _.of(e) || e, S = s?.maximizedName || v || g.of(u) || e, C = s?.nativeMaximizedName || y || _.of(u) || e, ee = s?.minimizedName || v || g.of(p) || e, te = s?.nativeMinimizedName || y || _.of(p) || e, w = s?.languageName || v || g.of(o) || e, T = s?.nativeLanguageName || y || _.of(o) || e, ne = s?.nameWithRegionCode || c ? `${w} (${c})` : b, re = s?.nativeNameWithRegionCode || (c ? `${T} (${c})` : x) || ne, ie = O.get("DisplayNames", m, { type: "region" }), ae = O.get("DisplayNames", h, { type: "region" }), oe = s?.regionName || (d ? ie.of(d) : "") || "", se = s?.nativeRegionName || (d ? ae.of(d) : "") || "", E = O.get("DisplayNames", m, { type: "script" }), ce = O.get("DisplayNames", h, { type: "script" });
		return {
			code: i,
			name: b,
			nativeName: x,
			maximizedCode: u,
			maximizedName: S,
			nativeMaximizedName: C,
			minimizedCode: p,
			minimizedName: ee,
			nativeMinimizedName: te,
			languageCode: o,
			languageName: w,
			nativeLanguageName: T,
			nameWithRegionCode: ne,
			nativeNameWithRegionCode: re,
			regionCode: d,
			regionName: oe,
			nativeRegionName: se,
			scriptCode: f,
			scriptName: s?.scriptName || (f ? E.of(f) : "") || "",
			nativeScriptName: s?.nativeScriptName || (f ? ce.of(f) : "") || "",
			emoji: s?.emoji || xr(i, n)
		};
	} catch {
		let t = F(e) ? I(e) : e, r = t?.split("-"), i = r?.[0] || t || "", a = r.length > 2 ? r?.[2] : r?.[1] || "", o = r?.[3] || "", s = jr([t, i], n);
		t = s?.code || t;
		let c = s?.name || t, l = s?.nativeName || c, u = s?.maximizedCode || t, d = s?.maximizedName || c, f = s?.nativeMaximizedName || l, p = s?.minimizedCode || t, m = s?.minimizedName || c, h = s?.nativeMinimizedName || l;
		i = s?.languageCode || i;
		let g = s?.languageName || c, _ = s?.nativeLanguageName || l;
		a = s?.regionCode || a;
		let v = s?.regionName || "", y = s?.nativeRegionName || "";
		o = s?.scriptCode || o;
		let b = s?.scriptName || "", x = s?.nativeScriptName || "", S = s?.nameWithRegionCode || (v ? `${g} (${v})` : c), C = s?.nativeNameWithRegionCode || (y ? `${_} (${y})` : l), ee = s?.emoji || "🌍";
		return {
			code: t,
			name: c,
			nativeName: l,
			maximizedCode: u,
			maximizedName: d,
			nativeMaximizedName: f,
			minimizedCode: p,
			minimizedName: m,
			nativeMinimizedName: h,
			languageCode: i,
			languageName: g,
			nativeLanguageName: _,
			nameWithRegionCode: S,
			nativeNameWithRegionCode: C,
			regionCode: a,
			regionName: v,
			nativeRegionName: y,
			scriptCode: o,
			scriptName: b,
			nativeScriptName: x,
			emoji: ee
		};
	}
}
function Nr(e, t, n) {
	typeof e == "string" && (e = [e]), e = e.filter((e) => F(e, n)).map(I), t = t.filter((e) => F(e, n)).map(I);
	for (let n of e) {
		let e = t.filter((e) => _r(n, e)), r = ({ locale: t, languageCode: n, minimizedCode: r, regionCode: i, scriptCode: a }) => {
			let o = [
				t,
				`${n}-${i}`,
				`${n}-${a}`,
				r
			];
			for (let t of o) if (e.includes(t)) return t;
			return null;
		}, { languageCode: i, ...a } = Mr(n), o = r({
			locale: n,
			languageCode: i,
			...a
		}) || r({
			locale: i,
			...Mr(i)
		});
		if (o) return o;
	}
}
var Pr = {
	debug: 0,
	info: 1,
	warn: 2,
	error: 3,
	off: 4
}, Fr = {
	debug: "\x1B[36m",
	info: "\x1B[32m",
	warn: "\x1B[33m",
	error: "\x1B[31m",
	off: ""
}, Ir = "\x1B[0m";
function Lr() {
	if (typeof process < "u" && process.env?._GT_LOG_LEVEL) {
		let e = process.env._GT_LOG_LEVEL.toLowerCase();
		if (e in Pr) return e;
	}
	return "warn";
}
var Rr = class {
	constructor(e) {
		this.config = e;
	}
	handle(e) {
		let t = [];
		this.config.includeTimestamp && t.push(`[${e.timestamp.toISOString()}]`);
		let n = Fr[e.level], r = `[${e.level.toUpperCase()}]`;
		t.push(`${n}${r}${Ir}`), this.config.prefix && t.push(`[${this.config.prefix}]`), this.config.includeContext && e.context && t.push(`[${e.context}]`), t.push(e.message), e.metadata && Object.keys(e.metadata).length > 0 && t.push(`\n  Metadata: ${JSON.stringify(e.metadata, null, 2)}`);
		let i = t.join(" ");
		switch (e.level) {
			case "debug":
				console.debug(i);
				break;
			case "info":
				console.info(i);
				break;
			case "warn":
				console.warn(i);
				break;
			case "error": console.error(i);
		}
	}
}, zr = class {
	constructor(e = {}) {
		this.config = {
			level: Lr(),
			includeTimestamp: !0,
			includeContext: !0,
			enableConsole: !0,
			handlers: [],
			...e
		}, this.handlers = [...this.config.handlers || []], this.config.enableConsole && this.handlers.push(new Rr(this.config));
	}
	addHandler(e) {
		this.handlers.push(e);
	}
	removeHandler(e) {
		let t = this.handlers.indexOf(e);
		t > -1 && this.handlers.splice(t, 1);
	}
	configure(e) {
		this.config = {
			...this.config,
			...e
		};
	}
	shouldLog(e) {
		return Pr[e] >= Pr[this.config.level];
	}
	log(e, t, n, r) {
		if (!this.shouldLog(e)) return;
		let i = {
			level: e,
			message: t,
			timestamp: /* @__PURE__ */ new Date(),
			context: n,
			metadata: r
		};
		this.handlers.forEach((e) => {
			try {
				e.handle(i);
			} catch (e) {
				console.error("Error in log handler:", e);
			}
		});
	}
	debug(e, t, n) {
		this.log("debug", e, t, n);
	}
	info(e, t, n) {
		this.log("info", e, t, n);
	}
	warn(e, t, n) {
		this.log("warn", e, t, n);
	}
	error(e, t, n) {
		this.log("error", e, t, n);
	}
	child(e) {
		return new Br(this, e);
	}
	getConfig() {
		return { ...this.config };
	}
}, Br = class e {
	constructor(e, t) {
		this.logger = e, this.context = t;
	}
	debug(e, t) {
		this.logger.debug(e, this.context, t);
	}
	info(e, t) {
		this.logger.info(e, this.context, t);
	}
	warn(e, t) {
		this.logger.warn(e, this.context, t);
	}
	error(e, t) {
		this.logger.error(e, this.context, t);
	}
	child(t) {
		return new e(this.logger, `${this.context}:${t}`);
	}
}, Vr = new zr({
	level: Lr(),
	includeTimestamp: !0,
	includeContext: !0,
	prefix: "GT"
}), Hr = Vr.child("fetch");
Vr.child("validation"), Vr.child("formatting"), Vr.child("locale");
var Ur = Vr.child("GT instance");
function Wr({ value: e, locales: t = "en", options: n = {} }) {
	return O.get("CutoffFormat", t, n).format(e);
}
function Gr(e, t = "en", n = {}) {
	return new fr(e, t).format(n)?.toString() ?? "";
}
function Kr(e) {
	return e;
}
function qr({ value: e, locales: t = ["en"], options: n = {} }) {
	return O.get("NumberFormat", t, {
		numberingSystem: "latn",
		...n
	}).format(e);
}
function Jr({ value: e, locales: t = ["en"], options: n = {} }) {
	return O.get("DateTimeFormat", t, {
		calendar: "gregory",
		numberingSystem: "latn",
		...n
	}).format(e);
}
function Yr({ value: e, locales: t = ["en"], currency: n = "USD", options: r = {} }) {
	return O.get("NumberFormat", t, {
		style: "currency",
		currency: n,
		numberingSystem: "latn",
		...r
	}).format(e);
}
function Xr({ value: e, locales: t = ["en"], options: n = {} }) {
	return O.get("ListFormat", t, {
		type: "conjunction",
		style: "long",
		...n
	}).format(e);
}
function Zr({ value: e, locales: t = ["en"], options: n = {} }) {
	let r = O.get("ListFormat", t, {
		type: "conjunction",
		style: "long",
		...n
	}).formatToParts(e.map(() => "1")), i = 0;
	return r.map((t) => t.type === "element" ? e[i++] : t.value);
}
function Qr(e, t) {
	let n = t.getTime(), r = e.getTime() - n, i = Math.abs(r), a = r < 0 ? -1 : 1, o = Math.floor(i / 1e3), s = Math.floor(i / 6e4), c = Math.floor(i / 36e5), l = Math.floor(i / 864e5), u = Math.floor(i / 6048e5), d = Math.floor(i / 2592e6), f = Math.floor(i / 31536e6);
	return o < 60 ? {
		value: a * o,
		unit: "second"
	} : s < 60 ? {
		value: a * s,
		unit: "minute"
	} : c < 24 ? {
		value: a * c,
		unit: "hour"
	} : l < 7 ? {
		value: a * l,
		unit: "day"
	} : l < 28 || d < 1 ? {
		value: a * u,
		unit: "week"
	} : d < 12 || f < 1 ? {
		value: a * d,
		unit: "month"
	} : {
		value: a * f,
		unit: "year"
	};
}
function $r({ date: e, baseDate: t, locales: n = ["en"], options: r = {} }) {
	let { value: i, unit: a } = Qr(e, t);
	return ei({
		value: i,
		unit: a,
		locales: n,
		options: r
	});
}
function ei({ value: e, unit: t, locales: n = ["en"], options: r = {} }) {
	return O.get("RelativeTimeFormat", n, {
		style: "long",
		numeric: "auto",
		...r
	}).format(e, t);
}
function ti(e, t = "en", n) {
	let r = e;
	n && br(e, n) && (e = n[e].code), t ||= "en";
	try {
		let i = I(e);
		if (n) for (let t of [
			r,
			e,
			i,
			O.get("Locale", i).language
		]) {
			let e = yr(n, t, "name");
			if (e) return e;
		}
		return O.get("DisplayNames", [
			t,
			i,
			"en"
		], { type: "language" }).of(i) || "";
	} catch {
		return "";
	}
}
function ni(e) {
	try {
		let t = ai(O.get("Locale", e));
		if (t) return t;
	} catch {}
	let { scriptCode: t, languageCode: n } = Mr(e);
	return t ? oi(t) ? "rtl" : "ltr" : n && si(n) ? "rtl" : "ltr";
}
var ri = /* @__PURE__ */ new Set([
	"arab",
	"adlm",
	"hebr",
	"nkoo",
	"rohg",
	"samr",
	"syrc",
	"thaa",
	"yezi"
]), ii = /* @__PURE__ */ new Set([
	"ar",
	"arc",
	"ckb",
	"dv",
	"fa",
	"he",
	"iw",
	"ku",
	"lrc",
	"nqo",
	"ps",
	"pnb",
	"sd",
	"syr",
	"ug",
	"ur",
	"yi"
]);
function ai(e) {
	if ("textInfo" in e && typeof e.textInfo == "object" && e.textInfo !== null && "direction" in e.textInfo && (e.textInfo?.direction === "rtl" || e.textInfo?.direction === "ltr")) return e.textInfo?.direction;
}
function oi(e) {
	return e ? ri.has(e.toLowerCase()) : !1;
}
function si(e) {
	return e ? ii.has(e.toLowerCase()) : !1;
}
function ci(e, t) {
	try {
		let { language: n, region: r, script: i } = O.get("Locale", I(e)), { language: a, region: o, script: s } = O.get("Locale", I(t));
		return !(n !== a || r && r !== o || i && i !== s);
	} catch (e) {
		return console.error(e), !1;
	}
}
function li(e, t) {
	let n;
	return t && (n = Object.fromEntries(Object.entries(t).filter(([, e]) => e && typeof e == "object" && "code" in e).map(([e, t]) => [t.code, e]))), n?.[e] || e;
}
function ui(e, t) {
	return t && br(e, t) ? t[e].code : e;
}
var di = class {
	constructor({ defaultLocale: e = "en", locales: t = [], customMapping: n } = {}) {
		this.defaultLocale = e, this.locales = t, this.customMapping = n;
	}
	get translationLocales() {
		return this.locales.length ? this.locales : void 0;
	}
	resolveCanonicalLocaleList(e) {
		return e.map((e) => this.resolveCanonicalLocale(e));
	}
	resolveCanonicalLocaleArgs(e) {
		return e.map((e) => Array.isArray(e) ? this.resolveCanonicalLocaleList(e) : this.resolveCanonicalLocale(e));
	}
	toLocaleList(e) {
		return Array.isArray(e) ? e : [e];
	}
	getFormattingLocales(e, t) {
		return (t === void 0 ? [
			e,
			this.defaultLocale,
			"en"
		] : this.toLocaleList(t)).filter((e) => !!e).map((e) => this.resolveCanonicalLocale(e));
	}
	formatNum(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return qr({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatDateTime(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return Jr({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatCurrency(e, t, n, r = {}) {
		let { locales: i, ...a } = r;
		return Yr({
			value: e,
			currency: t,
			locales: this.getFormattingLocales(n, i),
			options: a
		});
	}
	formatRelativeTime(e, t, n, r = {}) {
		let { locales: i, ...a } = r;
		return ei({
			value: e,
			unit: t,
			locales: this.getFormattingLocales(n, i),
			options: a
		});
	}
	formatRelativeTimeFromDate(e, t, n = {}) {
		let { locales: r, baseDate: i, ...a } = n;
		return $r({
			date: e,
			baseDate: i ?? /* @__PURE__ */ new Date(),
			locales: this.getFormattingLocales(t, r),
			options: a
		});
	}
	formatCutoff(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return Wr({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatMessage(e, t, n = {}) {
		let { locales: r, variables: i, dataFormat: a } = n;
		return a === "STRING" ? Kr(e) : Gr(e, this.getFormattingLocales(t, r), i);
	}
	formatList(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return Xr({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatListToParts(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return Zr({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	getLocaleName(e) {
		return ti(e, this.defaultLocale, this.customMapping);
	}
	getLocaleEmoji(e) {
		return xr(e, this.customMapping);
	}
	getLocaleProperties(e) {
		return Mr(e, this.defaultLocale, this.customMapping);
	}
	requiresTranslation(e, t = this.defaultLocale, n = this.translationLocales) {
		return vr(this.resolveCanonicalLocale(t), this.resolveCanonicalLocale(e), n ? this.resolveCanonicalLocaleList(n) : void 0, this.customMapping);
	}
	determineLocale(e, t = this.locales) {
		let n = t.map((e) => ({
			locale: e,
			canonicalLocale: this.resolveCanonicalLocale(e)
		})), r = Nr(Array.isArray(e) ? this.resolveCanonicalLocaleList(e) : this.resolveCanonicalLocale(e), n.map(({ canonicalLocale: e }) => e), this.customMapping);
		if (r) return n.find(({ canonicalLocale: e }) => e === r)?.locale || this.resolveAliasLocale(r);
	}
	getLocaleDirection(e) {
		return ni(this.resolveCanonicalLocale(e));
	}
	isValidLocale(e) {
		return F(e, this.customMapping);
	}
	resolveCanonicalLocale(e) {
		return ui(e, this.customMapping);
	}
	resolveAliasLocale(e) {
		return li(e, this.customMapping);
	}
	standardizeLocale(e) {
		return I(e);
	}
	isSameDialect(...e) {
		return gr(...this.resolveCanonicalLocaleArgs(e));
	}
	isSameLanguage(...e) {
		return _r(...this.resolveCanonicalLocaleArgs(e));
	}
	isSupersetLocale(e, t) {
		return ci(this.resolveCanonicalLocale(e), this.resolveCanonicalLocale(t));
	}
};
function fi(e, t) {
	return F(e, t);
}
function pi(e, t) {
	return ui(e, t);
}
function mi(e) {
	return I(e);
}
var hi = {
	warn(e) {
		console.warn(e);
	},
	error(e) {
		console.error(e);
	},
	info(e) {
		console.info(e);
	},
	debug(e) {
		console.debug(e);
	}
}, gi = class extends Error {
	constructor(e, t, n) {
		super(e), this.name = "ApiError", this.code = t, this.message = n;
	}
	getCode() {
		return this.code;
	}
	getMessage() {
		return this.message;
	}
};
function _i(e) {
	return Ne(Ge(Pe(e))).slice(0, 16);
}
function vi({ source: e, context: t, id: n, maxChars: r, dataFormat: i }, a = _i) {
	let o;
	return o = i === "JSX" ? bi(e) : e, a(Ce({
		source: o,
		...n && { id: n },
		...t && { context: t },
		...r != null && { maxChars: Math.abs(r) },
		...i && { dataFormat: i }
	}));
}
var yi = (e) => {
	if (e && typeof e == "object") {
		let t = {};
		if ("c" in e && e.c && (t.c = bi(e.c)), "d" in e) {
			let n = e?.d;
			n?.b && (t.b = Object.fromEntries(Object.entries(n.b).map(([e, t]) => [e, bi(t)]))), n?.t && (t.t = n.t);
		}
		return we(e) ? {
			k: e.k,
			...e.v && { v: e.v }
		} : t;
	}
	return e;
};
function bi(e) {
	return Array.isArray(e) ? e.map(yi) : yi(e);
}
var xi = "GT Error:", Si = (e) => `${xi} Translation request timed out after ${e}ms.`, Ci = (e) => `${xi} Translation request failed. Error: ${e}`, wi = (e, t, n) => `${xi} API returned error status. Status: ${e}, Status Text: ${t}, Error: ${n}`, L = (e) => `${xi} Cannot call \`${e}\` without a specified locale. Either pass a locale to the \`${e}\` function or specify a targetLocale in the GT constructor.`, Ti = (e) => `${xi} Cannot call \`${e}\` without a specified locale. Either pass a locale to the \`${e}\` function or specify a sourceLocale in the GT constructor.`, Ei = (e) => `${xi} Cannot call \`${e}\` without a specified project ID. Either pass a project ID to the \`${e}\` function or specify a projectId in the GT constructor.`, Di = (e) => `${xi} Cannot call \`${e}\` without a specified API key. Either pass an API key to the \`${e}\` function or specify an apiKey in the GT constructor.`, Oi = (e) => `${xi} Invalid locale: ${e}.`, ki = (e) => `${xi} Invalid locales: ${e.join(", ")}.`;
async function Ai(e, t, n) {
	let r = new AbortController(), i = r.signal;
	n ||= D;
	let a = n ? setTimeout(() => r.abort(), n) : null;
	try {
		return await fetch(e, {
			...t,
			signal: i
		});
	} catch (e) {
		throw e instanceof Error && e.name === "AbortError" ? Si(n) : e;
	} finally {
		a && clearTimeout(a);
	}
}
async function ji(e) {
	if (!e.ok) {
		let t = "Unknown error";
		try {
			let n = await e.text();
			try {
				t = JSON.parse(n).error;
			} catch {
				t = n || "Unknown error";
			}
		} catch {}
		throw new gi(wi(e.status, e.statusText, t), e.status, t);
	}
}
function Mi(e, t) {
	if (e instanceof Error && e.name === "AbortError") {
		let e = Si(t);
		throw Hr.error(e), Error(e);
	}
	let n = Ci(e instanceof Error ? e.message : String(e));
	throw Hr.error(n), e;
}
var Ni = "2026-03-06.v1";
function Pi(e, t = !1) {
	let n = {
		...!t && { "Content-Type": "application/json" },
		"x-gt-project-id": e.projectId
	};
	return e.apiKey && (e.apiKey.startsWith("gtx-internal-") ? n["x-gt-internal-api-key"] = e.apiKey : n["x-gt-api-key"] = e.apiKey), n["gt-api-version"] = Ni, n;
}
var Fi = 3, Ii = 500;
function Li(e) {
	return new Promise((t) => setTimeout(t, e));
}
function Ri(e, t) {
	switch (e) {
		case "linear": return Ii * (t + 1);
		case "exponential": return Ii * 2 ** t;
		default: return 0;
	}
}
async function R(e, t, n) {
	let r = n?.timeout ?? 6e4, i = `${e.baseUrl || "https://api2.gtx.dev"}${t}`, a = n?.method ?? "POST", o = n?.retryPolicy ?? "exponential", s = o === "none" ? 0 : Fi, c = {
		method: a,
		headers: Pi(e)
	};
	n?.body !== void 0 && (c.body = JSON.stringify(n.body));
	for (let e = 0; e <= s; e++) {
		let t;
		try {
			t = await Ai(i, c, r);
		} catch (t) {
			if (e < s) {
				await Li(Ri(o, e));
				continue;
			}
			Mi(t, r);
		}
		if (t.status >= 500 && e < s) {
			await Li(Ri(o, e));
			continue;
		}
		return await ji(t), await t.json();
	}
	throw Error("Max retries exceeded");
}
async function zi(e, t, n, r) {
	let i = Array.isArray(e), a = i ? [] : void 0, o = {}, s = i ? e.map((e) => [void 0, e]) : Object.entries(e);
	for (let [e, t] of s) {
		let { source: n, metadata: r } = typeof t == "string" ? { source: t } : t, i = e ?? r?.hash ?? vi({
			source: n,
			dataFormat: r?.dataFormat ?? "STRING",
			...r ?? {}
		});
		a?.push(i), o[i] = {
			source: n,
			metadata: r
		};
	}
	let c = await R({
		...n,
		baseUrl: n.baseUrl || "https://runtime2.gtx.dev"
	}, "/v2/translate", {
		body: {
			requests: o,
			targetLocale: t.targetLocale,
			sourceLocale: t.sourceLocale,
			metadata: t
		},
		timeout: r,
		retryPolicy: "none"
	});
	return a ? a.map((e) => c[e] ?? {
		success: !1,
		error: "No translation returned",
		code: 500
	}) : c;
}
async function Bi(e, t, n) {
	return R(t, "/v2/project/setup/generate", {
		body: {
			files: e.map((e) => ({
				branchId: e.branchId,
				fileId: e.fileId,
				versionId: e.versionId
			})),
			locales: n?.locales,
			force: n?.force
		},
		timeout: n?.timeoutMs
	});
}
function Vi(e, t) {
	let n = [];
	for (let r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
	return n;
}
async function Hi(e, t, n = {}) {
	let { batchSize: r = 100, parallel: i = !0 } = n;
	if (e.length === 0) return {
		data: [],
		count: 0,
		batchCount: 0
	};
	let a = Vi(e, r), o = [];
	if (i) {
		let e = await Promise.all(a.map((e) => t(e)));
		for (let t of e) t && o.push(...t);
	} else for (let e of a) {
		let n = await t(e);
		n && o.push(...n);
	}
	return {
		data: o,
		count: o.length,
		batchCount: a.length
	};
}
async function Ui(e, t, n) {
	ye(e);
	let r = await Hi(e, async (e) => {
		let r = await R(n, "/v2/project/translations/enqueue", {
			body: {
				files: e.map((e) => ({
					branchId: e.branchId,
					fileId: e.fileId,
					versionId: e.versionId,
					fileName: e.fileName,
					transformFormat: e.transformFormat
				})),
				targetLocales: t.targetLocales,
				sourceLocale: t.sourceLocale,
				requireApproval: t.requireApproval,
				modelProvider: t.modelProvider,
				force: t.force
			},
			timeout: t.timeout
		});
		return Array.from(Object.entries(r.jobData));
	}, { batchSize: 100 });
	return {
		jobData: Object.fromEntries(r.data.map(([e, t]) => [e, t])),
		locales: t.targetLocales,
		message: `Successfully enqueued ${r.count} file translation jobs in ${r.batchCount} batch(es)`
	};
}
async function Wi(e, t) {
	return await R(t, "/v2/project/tags/create", { body: {
		tagId: e.tagId,
		files: e.files,
		...e.message && { message: e.message }
	} });
}
async function Gi(e, t, n) {
	return Hi(e, async (e) => (await R(n, "/v2/project/files/download", {
		body: e,
		timeout: t.timeout
	})).files.map((e) => ({
		...e,
		data: xe(e.data)
	})), { batchSize: 100 });
}
async function Ki(e, t, n = {}) {
	return await Hi(e.diffs, async (e) => (await R(t, "/v2/project/files/diffs", {
		body: { diffs: e },
		timeout: n.timeout
	}), [{ success: !0 }]), { batchSize: 100 }), { success: !0 };
}
function qi(e, t = "en", n) {
	t ||= "en";
	try {
		return {
			code: e,
			name: O.get("DisplayNames", [t, "en"], { type: "region" }).of(e) || e,
			emoji: kr(e),
			...n?.[e]
		};
	} catch {
		return {
			code: e,
			name: e,
			emoji: wr,
			...n?.[e]
		};
	}
}
async function Ji(e, t, n) {
	return Hi(e, async (e) => (await R(n, "/v2/project/files/upload-files", {
		body: {
			data: e.map(({ source: e }) => ({ source: {
				content: be(e.content),
				fileName: e.fileName,
				fileFormat: e.fileFormat,
				locale: e.locale,
				dataFormat: e.dataFormat,
				formatMetadata: e.formatMetadata,
				fileId: e.fileId,
				versionId: e.versionId,
				branchId: e.branchId,
				incomingBranchId: e.incomingBranchId,
				checkedOutBranchId: e.checkedOutBranchId
			} })),
			sourceLocale: t.sourceLocale
		},
		timeout: t.timeout
	})).uploadedFiles || [], { batchSize: 100 });
}
async function Yi(e, t, n) {
	return ye(e.map(({ source: e }) => e)), Hi(e, async (e) => (await R(n, "/v2/project/files/upload-translations", {
		body: {
			data: e.map(({ source: e, translations: t }) => ({
				source: {
					content: be(e.content),
					fileName: e.fileName,
					fileFormat: e.fileFormat,
					transformFormat: e.transformFormat,
					locale: e.locale,
					dataFormat: e.dataFormat,
					formatMetadata: e.formatMetadata,
					fileId: e.fileId,
					versionId: e.versionId,
					branchId: e.branchId
				},
				translations: t.map((e) => ({
					content: be(e.content),
					fileName: e.fileName,
					fileFormat: e.fileFormat,
					locale: e.locale,
					dataFormat: e.dataFormat,
					fileId: e.fileId,
					versionId: e.versionId,
					branchId: e.branchId
				}))
			})),
			sourceLocale: t.sourceLocale
		},
		timeout: t.timeout
	})).uploadedFiles || [], { batchSize: 100 });
}
async function Xi(e, t, n) {
	let r = e.branchId, i = e.versionId, a = e.fileId, o = new URLSearchParams();
	return r && o.set("branchId", r), i && o.set("versionId", i), R(n, `/v2/project/translations/files/status/${encodeURIComponent(a)}?${o.toString()}`, {
		method: "GET",
		timeout: t.timeout
	});
}
async function Zi(e, t, n) {
	let { baseUrl: r } = n, i = t.timeout ? t.timeout : D, a = `${r || "https://api2.gtx.dev"}/v2/project/info/${encodeURIComponent(e)}`, o;
	try {
		o = await Ai(a, {
			method: "GET",
			headers: Pi(n)
		}, i);
	} catch (e) {
		Mi(e, i);
	}
	return await ji(o), await o.json();
}
async function Qi(e, t, n) {
	return R(t, "/v2/project/jobs/info", {
		body: { jobIds: e },
		timeout: n
	});
}
async function $i(e, t, n) {
	let r = (t?.pollingIntervalSeconds ?? 5) * 1e3, i = t?.timeoutSeconds === void 0 ? 6e5 : t.timeoutSeconds * 1e3, a = Object.keys(e.jobData);
	if (a.length === 0) return {
		complete: !0,
		jobs: []
	};
	let o = Date.now(), s = new Map(a.map((e) => [e, {
		jobId: e,
		status: "unknown"
	}])), c = new Set(a);
	for (; c.size > 0;) {
		let e = await Qi(Array.from(c), n);
		for (let t of e) t.status === "completed" || t.status === "failed" || t.status === "unknown" ? (s.set(t.jobId, {
			jobId: t.jobId,
			status: t.status,
			...t.error ? { error: t.error } : {}
		}), c.delete(t.jobId)) : s.set(t.jobId, {
			jobId: t.jobId,
			status: t.status
		});
		if (c.size === 0 || Date.now() - o >= i) break;
		await new Promise((e) => setTimeout(e, r));
	}
	return {
		complete: c.size === 0,
		jobs: Array.from(s.values())
	};
}
async function ea(e, t = {}, n) {
	return R(n, "/v2/project/files/info", {
		body: {
			sourceFiles: e.sourceFiles?.map((e) => ({
				fileId: e.fileId,
				versionId: e.versionId,
				branchId: e.branchId
			})),
			translatedFiles: e.translatedFiles?.map((e) => ({
				fileId: e.fileId,
				versionId: e.versionId,
				branchId: e.branchId,
				locale: e.locale
			}))
		},
		timeout: t.timeout
	});
}
async function ta(e, t) {
	return R(t, "/v2/project/branches/info", { body: e });
}
async function na(e, t) {
	return R(t, "/v2/project/branches/create", { body: e });
}
async function ra(e, t, n) {
	if (e.length === 0) return {
		results: [],
		summary: {
			total: 0,
			succeeded: 0,
			failed: 0
		}
	};
	let r = await Hi(e, async (e) => (await R(n, "/v2/project/files/moves", {
		body: {
			branchId: t.branchId,
			moves: e
		},
		timeout: t.timeout
	})).results, { batchSize: 100 }), i = r.data.filter((e) => e.success).length, a = r.data.filter((e) => !e.success).length;
	return {
		results: r.data,
		summary: {
			total: e.length,
			succeeded: i,
			failed: a
		}
	};
}
async function ia(e, t, n = {}, r) {
	let i = (t) => R(r, "/v2/project/files/orphaned", {
		body: {
			branchId: e,
			fileIds: t
		},
		timeout: n.timeout
	});
	if (t.length === 0) return i([]);
	let a = Vi(t, 100), o = await Promise.all(a.map((e) => i(e)));
	if (o.length === 1) return o[0];
	let s = /* @__PURE__ */ new Map();
	for (let e of o[0].orphanedFiles) s.set(e.fileId, e);
	for (let e = 1; e < o.length; e++) {
		let t = new Set(o[e].orphanedFiles.map((e) => e.fileId));
		Array.from(s.keys()).forEach((e) => {
			t.has(e) || s.delete(e);
		});
	}
	return { orphanedFiles: Array.from(s.values()) };
}
async function aa(e, t) {
	return await R(t, "/v2/project/files/publish", { body: { files: e } });
}
var oa = class {
	get localeConfig() {
		return this._localeConfig;
	}
	constructor(e = {}) {
		typeof process < "u" && (this.apiKey ||= process.env?.GT_API_KEY, this.devApiKey ||= process.env?.GT_DEV_API_KEY, this.projectId ||= process.env?.GT_PROJECT_ID), this.setConfig(e);
	}
	setConfig({ apiKey: e, devApiKey: t, sourceLocale: n, targetLocale: r, locales: i, projectId: a, customMapping: o, baseUrl: s }) {
		if (e && (this.apiKey = e), t && (this.devApiKey = t), a && (this.projectId = a), n && (this.sourceLocale = I(n), !F(this.sourceLocale, o))) throw Error(Oi(this.sourceLocale));
		if (r && (this.targetLocale = I(r), !F(this.targetLocale, o))) throw Error(Oi(this.targetLocale));
		if (i) {
			let e = [], t = [];
			if (i.forEach((n) => {
				let r = I(n);
				F(r) ? e.push(r) : t.push(n);
			}), t.length > 0) throw Error(ki(t));
			this.locales = e;
		}
		s && (this.baseUrl = s), o && (this.customMapping = o, this.reverseCustomMapping = Object.fromEntries(Object.entries(o).filter(([, e]) => e && typeof e == "object" && "code" in e).map(([e, t]) => [t.code, e]))), this._localeConfig = new di({
			defaultLocale: this.sourceLocale,
			locales: this.locales ?? [],
			customMapping: this.customMapping
		});
	}
	_getTranslationConfig() {
		return {
			baseUrl: this.baseUrl,
			apiKey: this.apiKey || this.devApiKey,
			projectId: this.projectId || ""
		};
	}
	_validateAuth(e) {
		let t = [];
		if (!this.apiKey && !this.devApiKey) {
			let n = Di(e);
			t.push(n);
		}
		if (!this.projectId) {
			let n = Ei(e);
			t.push(n);
		}
		if (t.length) throw Error(t.join("\n"));
	}
	async queryBranchData(e) {
		return this._validateAuth("queryBranchData"), await ta(e, this._getTranslationConfig());
	}
	async createBranch(e) {
		return this._validateAuth("createBranch"), await na(e, this._getTranslationConfig());
	}
	async processFileMoves(e, t = {}) {
		return this._validateAuth("processFileMoves"), await ra(e, t, this._getTranslationConfig());
	}
	async getOrphanedFiles(e, t, n = {}) {
		return this._validateAuth("getOrphanedFiles"), await ia(e, t, n, this._getTranslationConfig());
	}
	async setupProject(e, t) {
		return this._validateAuth("setupProject"), t = {
			...t,
			locales: t?.locales?.map((e) => this.resolveCanonicalLocale(e))
		}, await Bi(e, this._getTranslationConfig(), t);
	}
	async checkJobStatus(e, t) {
		return this._validateAuth("checkJobStatus"), await Qi(e, this._getTranslationConfig(), t);
	}
	async awaitJobs(e, t) {
		return this._validateAuth("awaitJobs"), await $i(e, t, this._getTranslationConfig());
	}
	async enqueueFiles(e, t) {
		this._validateAuth("enqueueFiles");
		let n = {
			...t,
			sourceLocale: t.sourceLocale ?? this.sourceLocale,
			targetLocales: t.targetLocales ?? [this.targetLocale]
		};
		if (!n.sourceLocale) {
			let e = Ti("enqueueFiles");
			throw Ur.error(e), Error(e);
		}
		if (!n.targetLocales || n.targetLocales.length === 0) {
			let e = L("enqueueFiles");
			throw Ur.error(e), Error(e);
		}
		return n = {
			...n,
			targetLocales: n.targetLocales.map((e) => this.resolveCanonicalLocale(e))
		}, await Ui(e, n, this._getTranslationConfig());
	}
	async createTag(e) {
		return this._validateAuth("createTag"), await Wi(e, this._getTranslationConfig());
	}
	async publishFiles(e) {
		return this._validateAuth("publishFiles"), await aa(e, this._getTranslationConfig());
	}
	async submitUserEditDiffs(e) {
		this._validateAuth("submitUserEditDiffs"), await Ki({
			...e,
			diffs: (e.diffs || []).map((e) => ({
				...e,
				locale: this.resolveCanonicalLocale(e.locale)
			}))
		}, this._getTranslationConfig());
	}
	async queryFileData(e, t = {}) {
		this._validateAuth("queryFileData"), e.translatedFiles = e.translatedFiles?.map((e) => ({
			...e,
			locale: this.resolveCanonicalLocale(e.locale)
		}));
		let n = await ea(e, t, this._getTranslationConfig());
		return n.translatedFiles = n.translatedFiles?.map((e) => ({
			...e,
			...e.locale && { locale: this.resolveAliasLocale(e.locale) }
		})), n.sourceFiles = n.sourceFiles?.map((e) => ({
			...e,
			...e.sourceLocale && { sourceLocale: this.resolveAliasLocale(e.sourceLocale) },
			locales: e.locales.map((e) => this.resolveAliasLocale(e))
		})), n;
	}
	async querySourceFile(e, t = {}) {
		this._validateAuth("querySourceFile");
		let n = await Xi(e, t, this._getTranslationConfig());
		return n.translations = n.translations.map((e) => ({
			...e,
			...e.locale && { locale: this.resolveAliasLocale(e.locale) }
		})), n.sourceFile.locales = n.sourceFile.locales.map((e) => this.resolveAliasLocale(e)), n.sourceFile.sourceLocale && (n.sourceFile.sourceLocale = this.resolveAliasLocale(n.sourceFile.sourceLocale)), n;
	}
	async getProjectData(e, t = {}) {
		this._validateAuth("getProjectData");
		let n = await Zi(e, t, this._getTranslationConfig());
		return n.currentLocales = n.currentLocales.map((e) => this.resolveAliasLocale(e)), n.defaultLocale = this.resolveAliasLocale(n.defaultLocale), n;
	}
	async downloadFile(e, t = {}) {
		return this._validateAuth("downloadTranslatedFile"), (await Gi([{
			fileId: e.fileId,
			branchId: e.branchId,
			locale: e.locale ? this.resolveCanonicalLocale(e.locale) : void 0,
			versionId: e.versionId,
			useLatestAvailableVersion: e.useLatestAvailableVersion
		}], t, this._getTranslationConfig())).data?.[0]?.data ?? "";
	}
	async downloadFileBatch(e, t = {}) {
		this._validateAuth("downloadFileBatch"), e = e.map((e) => ({
			...e,
			locale: e.locale ? this.resolveCanonicalLocale(e.locale) : void 0
		}));
		let n = await Gi(e, t, this._getTranslationConfig());
		return {
			files: n.data.map((e) => ({
				...e,
				...e.locale && { locale: this.resolveAliasLocale(e.locale) }
			})),
			count: n.count
		};
	}
	async translate(e, t, n) {
		typeof t == "string" && (t = { targetLocale: t }), this._validateAuth("translate");
		let r = t?.targetLocale || this.targetLocale;
		if (!r) {
			let e = L("translate");
			throw Ur.error(e), Error(e);
		}
		r = this.resolveCanonicalLocale(r);
		let i = this.resolveCanonicalLocale(t?.sourceLocale || this.sourceLocale || "en");
		return (await zi([e], {
			...t,
			targetLocale: r,
			sourceLocale: i
		}, this._getTranslationConfig(), n))[0];
	}
	async translateMany(e, t, n) {
		typeof t == "string" && (t = { targetLocale: t }), this._validateAuth("translateMany");
		let r = t?.targetLocale || this.targetLocale;
		if (!r) {
			let e = L("translateMany");
			throw Ur.error(e), Error(e);
		}
		r = this.resolveCanonicalLocale(r);
		let i = this.resolveCanonicalLocale(t?.sourceLocale || this.sourceLocale || "en");
		return await zi(e, {
			...t,
			targetLocale: r,
			sourceLocale: i
		}, this._getTranslationConfig(), n);
	}
	async uploadSourceFiles(e, t) {
		this._validateAuth("uploadSourceFiles");
		let n = {
			...t,
			sourceLocale: this.resolveCanonicalLocale(t.sourceLocale ?? this.sourceLocale ?? "en")
		};
		e = e.map((e) => ({
			...e,
			source: {
				...e.source,
				locale: this.resolveCanonicalLocale(e.source.locale)
			}
		}));
		let r = await Ji(e, n, this._getTranslationConfig());
		return {
			uploadedFiles: r.data,
			count: r.count,
			message: `Successfully uploaded ${r.count} files in ${r.batchCount} batch(es)`
		};
	}
	async uploadTranslations(e, t) {
		this._validateAuth("uploadTranslations");
		let n = {
			...t,
			sourceLocale: t.sourceLocale ?? this.sourceLocale
		};
		if (!n.sourceLocale) {
			let e = Ti("uploadTranslations");
			throw Ur.error(e), Error(e);
		}
		let r = await Yi(e.map((e) => ({
			...e,
			translations: e.translations.map((e) => ({
				...e,
				locale: this.resolveCanonicalLocale(e.locale)
			}))
		})), n, this._getTranslationConfig());
		return {
			uploadedFiles: r.data,
			count: r.count,
			message: `Successfully uploaded ${r.count} files in ${r.batchCount} batch(es)`
		};
	}
	formatCutoff(e, t) {
		return this.localeConfig.formatCutoff(e, this.targetLocale, t);
	}
	formatMessage(e, t) {
		return this.localeConfig.formatMessage(e, this.targetLocale, t);
	}
	formatNum(e, t) {
		return this.localeConfig.formatNum(e, this.targetLocale, t);
	}
	formatDateTime(e, t) {
		return this.localeConfig.formatDateTime(e, this.targetLocale, t);
	}
	formatCurrency(e, t, n) {
		return this.localeConfig.formatCurrency(e, t, this.targetLocale, n);
	}
	formatList(e, t) {
		return this.localeConfig.formatList(e, this.targetLocale, t);
	}
	formatListToParts(e, t) {
		return this.localeConfig.formatListToParts(e, this.targetLocale, t);
	}
	formatRelativeTime(e, t, n) {
		return this.localeConfig.formatRelativeTime(e, t, this.targetLocale, n);
	}
	formatRelativeTimeFromDate(e, t) {
		return this.localeConfig.formatRelativeTimeFromDate(e, this.targetLocale, t);
	}
	getLocaleName(e = this.targetLocale) {
		if (!e) throw Error(L("getLocaleName"));
		return this.localeConfig.getLocaleName(e);
	}
	getLocaleEmoji(e = this.targetLocale) {
		if (!e) throw Error(L("getLocaleEmoji"));
		return this.localeConfig.getLocaleEmoji(e);
	}
	getLocaleProperties(e = this.targetLocale) {
		if (!e) throw Error(L("getLocaleProperties"));
		return this.localeConfig.getLocaleProperties(e);
	}
	getRegionProperties(e = this.getLocaleProperties().regionCode, t) {
		if (!t) {
			if (this.customMapping && !this.customRegionMapping) {
				let e = {};
				for (let [t, n] of Object.entries(this.customMapping)) if (n && typeof n == "object" && n.regionCode && !e[n.regionCode]) {
					let { regionName: r, emoji: i } = n;
					e[n.regionCode] = {
						locale: t,
						...r && { name: r },
						...i && { emoji: i }
					};
				}
				this.customRegionMapping = e;
			}
			t = this.customRegionMapping;
		}
		return qi(e, this.targetLocale, t);
	}
	requiresTranslation(e = this.sourceLocale, t = this.targetLocale, n = this.locales, r = this.customMapping) {
		if (!e) throw Error(Ti("requiresTranslation"));
		if (!t) throw Error(L("requiresTranslation"));
		return r === this.customMapping ? this.localeConfig.requiresTranslation(t, e, n) : vr(e, t, n, r);
	}
	determineLocale(e, t = this.locales || [], n = this.customMapping) {
		return n === this.customMapping ? this.localeConfig.determineLocale(e, t ?? []) : Nr(e, t, n);
	}
	getLocaleDirection(e = this.targetLocale) {
		if (!e) throw Error(L("getLocaleDirection"));
		return this.localeConfig.getLocaleDirection(e);
	}
	isValidLocale(e = this.targetLocale, t = this.customMapping) {
		if (!e) throw Error(L("isValidLocale"));
		return t === this.customMapping ? this.localeConfig.isValidLocale(e) : F(e, t);
	}
	resolveCanonicalLocale(e = this.targetLocale, t = this.customMapping) {
		if (!e) throw Error(L("resolveCanonicalLocale"));
		return t === this.customMapping ? this.localeConfig.resolveCanonicalLocale(e) : ui(e, t);
	}
	resolveAliasLocale(e, t = this.customMapping) {
		if (!e) throw Error(L("resolveAliasLocale"));
		return t === this.customMapping ? this.localeConfig.resolveAliasLocale(e) : li(e, t);
	}
	standardizeLocale(e = this.targetLocale) {
		if (!e) throw Error(L("standardizeLocale"));
		return this.localeConfig.standardizeLocale(e);
	}
	isSameDialect(...e) {
		return this.localeConfig.isSameDialect(...e);
	}
	isSameLanguage(...e) {
		return this.localeConfig.isSameLanguage(...e);
	}
	isSupersetLocale(e, t) {
		return this.localeConfig.isSupersetLocale(e, t);
	}
};
function sa(e, t, n) {
	return Mr(e, t, n);
}
function ca(e, t, n, r) {
	return vr(e, t, n, r);
}
function la(e, t = [], n = void 0) {
	return Nr(e, t, n);
}
function z(e, t) {
	return li(e, t);
}
function ua(...e) {
	return _r(...e);
}
function da(e, t = "", n = !0) {
	if (e.forEach((e) => {
		switch (e.type) {
			case "error":
				hi.error(t + e.message);
				break;
			case "warning": hi.warn(t + e.message);
		}
	}), n && e.some((e) => e.type === "error")) throw Error("Validation errors occurred");
}
function fa(e) {
	return e.loadTranslations ? "custom" : e.cacheUrl ? "remote" : (e.cacheUrl === void 0 || e.cacheUrl === "https://cdn.gtx.dev") && e.projectId ? "gt-remote" : "disabled";
}
function pa(e) {
	let t = [], { projectId: n, loadTranslations: r } = e;
	switch (fa(e)) {
		case "remote":
		case "gt-remote":
			n || t.push({
				type: "warning",
				message: "projectId is required when loading translations from a remote store"
			});
			break;
		case "custom": r || t.push({
			type: "error",
			message: "loadTranslations is required when loading translations from a custom loader"
		});
	}
	return t;
}
function ma(e) {
	return (e.runtimeUrl === void 0 || e.runtimeUrl === "https://runtime2.gtx.dev") && e.projectId && (e.devApiKey || e.apiKey) ? "gt" : e.runtimeUrl ? "custom" : "disabled";
}
function ha(e) {
	let t = [];
	switch (ma(e)) {
		case "custom":
		case "gt": e.projectId || t.push({
			type: "warning",
			message: "projectId is required"
		}), !e.devApiKey && !e.apiKey && t.push({
			type: "warning",
			message: "devApiKey or apiKey is required"
		});
	}
	return t;
}
function ga(e) {
	return fa(e) === "gt-remote" || ma(e) === "gt";
}
function _a(e) {
	let t = [];
	if (!ga(e)) return t;
	let { defaultLocale: n, locales: r, customMapping: i } = e;
	return (/* @__PURE__ */ new Set([...n ? [n] : [], ...r || []])).forEach((e) => {
		fi(e, i) || t.push({
			type: "error",
			message: `Invalid locale: ${e}`
		});
	}), t;
}
function va(e) {
	let t = [];
	return t.push(...pa(e)), t.push(...ha(e)), t.push(..._a(e)), t;
}
var ya = class {}, ba = "fallback-storage-adapter", xa = class extends ya {
	constructor(...e) {
		super(...e), this.type = ba, this.storage = {};
	}
	getItem(e) {
		return this.storage[e];
	}
	setItem(e, t) {
		this.storage[e] = t;
	}
	removeItem(e) {
		delete this.storage[e];
	}
};
function Sa(e, t) {
	return (n) => (r) => e.translateMany(r, { targetLocale: n }, t);
}
function Ca(e) {
	let t = wa(e);
	return async (n) => {
		n = pi(n, e.customMapping);
		let r = t.replace("[locale]", n), i = await fetch(r);
		if (!i.ok) throw Error(`Failed to load translations from ${r}`);
		return await i.json();
	};
}
function wa(e) {
	let { cacheUrl: t = he, projectId: n, _versionId: r, _branchId: i } = e, a = r ? `/${r}` : "", o = i ? `?branchId=${i}` : "";
	return `${t}/${n}/[locale]` + a + o;
}
function Ta() {
	return async (e) => ({});
}
function Ea({ type: e, remoteTranslationLoaderParams: t, loadTranslations: n }) {
	e === "disabled" && hi.warn("I18nManager: No translation loader found. No translations will be loaded.");
	let { cacheUrl: r, projectId: i, _versionId: a, _branchId: o, customMapping: s } = t;
	switch (e) {
		case "remote":
		case "gt-remote": return Ca({
			cacheUrl: r || "",
			projectId: i || "",
			_versionId: a,
			_branchId: o,
			customMapping: s
		});
		case "custom": return n;
		case "disabled": return Ta();
	}
}
var Da = class {
	constructor(e, t) {
		this.cache = {}, this.fallbackPromises = {}, this.cache = structuredClone(e), this.onHit = t?.onHit, this.onMiss = t?.onMiss;
	}
	setCache(e, t) {
		this.cache[e] = t;
	}
	getCache(e) {
		let t = this.genKey(e);
		return this.cache[t];
	}
	getInternalCache() {
		return this.cache;
	}
	async missCache(e) {
		let t = this.genKey(e);
		if (this.fallbackPromises[t] !== void 0) return await this.fallbackPromises[t];
		let n = this.fallback(e);
		this.fallbackPromises[t] = n;
		try {
			let e = await n;
			return this.cache[t] = e, e;
		} finally {
			delete this.fallbackPromises[t];
		}
	}
};
function Oa(e, t) {
	return vi({
		source: t.$format === "ICU" ? Vn(e) : e,
		...t?.$context && { context: t.$context },
		...t?.$id && { id: t.$id },
		..."$maxChars" in t && t.$maxChars != null && { maxChars: Math.abs(t.$maxChars) },
		dataFormat: t.$format
	});
}
var ka = 25, Aa = 100, ja = 50, Ma = class extends Da {
	constructor({ init: e, translateMany: t, lifecycle: n }) {
		super(e, n), this._queue = [], this._batchTimer = null, this._activeRequests = 0, this._translateMany = t;
	}
	get(e) {
		let t = this.getCache(e);
		return t != null && this.onHit && this.onHit({
			inputKey: e,
			cacheKey: this.genKey(e),
			cacheValue: t,
			outputValue: t
		}), t;
	}
	async miss(e) {
		let t = await this.missCache(e);
		return t != null && this.onMiss && this.onMiss({
			inputKey: e,
			cacheKey: this.genKey(e),
			cacheValue: t,
			outputValue: t
		}), t;
	}
	genKey(e) {
		return Oa(e.message, e.options);
	}
	fallback(e) {
		let t = this._enqueueTranslation(e);
		return this._queue.length >= ka ? this._flushNow() : this._scheduleBatch(), t;
	}
	_flushNow() {
		this._batchTimer &&= (clearTimeout(this._batchTimer), null), this._drainQueue();
	}
	_scheduleBatch() {
		this._batchTimer ||= setTimeout(() => {
			this._batchTimer = null, this._drainQueue();
		}, ja);
	}
	_drainQueue() {
		for (; this._queue.length > 0 && this._activeRequests < Aa;) {
			let e = this._queue.splice(0, ka);
			this._sendBatchRequest(e);
		}
		this._queue.length > 0 && this._scheduleBatch();
	}
	_enqueueTranslation(e) {
		let t = this.genKey(e), n = e.options;
		return new Promise((r, i) => {
			this._queue.push({
				key: t,
				source: e.message,
				metadata: {
					...n?.$context && { context: n.$context },
					...n?.$id && { id: n.$id },
					..."$maxChars" in n && n.$maxChars != null && { $maxChars: Math.abs(n.$maxChars) },
					dataFormat: n.$format
				},
				resolve: (e) => r(e),
				reject: i
			});
		});
	}
	async _sendBatchRequest(e) {
		this._activeRequests++;
		let t = Na(e), n = await this._sendBatchRequestWithErrorHandling(e, t);
		n && this._handleTranslationResponse(e, n), this._activeRequests--;
	}
	async _sendBatchRequestWithErrorHandling(e, t) {
		try {
			return await this._translateMany(t);
		} catch (t) {
			for (let n of e) n.reject(t);
			return;
		}
	}
	_handleTranslationResponse(e, t) {
		for (let n of e) {
			let { key: e } = n, r = t[e];
			if (r && r.success) {
				let t = r.translation;
				this.setCache(e, t), n.resolve(t);
			} else n.reject(r?.error);
		}
	}
};
function Na(e) {
	return e.reduce((e, t) => (e[t.key] = {
		source: t.source,
		metadata: t.metadata
	}, e), {});
}
var Pa = 6e4, Fa = class extends Da {
	constructor({ init: e = {}, ttl: t, loadTranslations: n, createTranslateMany: r, lifecycle: { onLocalesCacheHit: i, onLocalesCacheMiss: a, onTranslationsCacheHit: o, onTranslationsCacheMiss: s } }) {
		super(e, {
			onHit: i,
			onMiss: a
		}), this.ttl = Pa, this.ttl = t === null ? -1 : t ?? 6e4, this._translationLoader = n, this._createTranslateMany = r, this._onTranslationsCacheHit = o, this._onTranslationsCacheMiss = s;
	}
	get(e) {
		let t = this.getCache(e);
		if (!t || t.expiresAt > 0 && t.expiresAt < Date.now()) return;
		let n = t.translationsCache;
		return n != null && this.onHit && this.onHit({
			inputKey: e,
			cacheKey: this.genKey(e),
			cacheValue: t,
			outputValue: n
		}), n;
	}
	async miss(e) {
		let t = await this.missCache(e), n = t.translationsCache;
		return n != null && this.onMiss && this.onMiss({
			inputKey: e,
			cacheKey: this.genKey(e),
			cacheValue: t,
			outputValue: n
		}), n;
	}
	genKey(e) {
		return e;
	}
	async fallback(e) {
		let t = this._translationLoader(e), n = this.ttl < 0 ? this.ttl : Date.now() + this.ttl;
		return {
			translationsCache: new Ma({
				init: await t,
				lifecycle: this._createTranslationsCacheLifecycle(e),
				translateMany: this._createTranslateMany(e)
			}),
			expiresAt: n
		};
	}
	_createTranslationsCacheLifecycle(e) {
		return {
			onHit: this._onTranslationsCacheHit ? (t) => this._onTranslationsCacheHit({
				locale: e,
				...t
			}) : void 0,
			onMiss: this._onTranslationsCacheMiss ? (t) => this._onTranslationsCacheMiss({
				locale: e,
				...t
			}) : void 0
		};
	}
};
function Ia(e) {
	return {
		onLocalesCacheHit: (t) => {
			e("locales-cache-hit", {
				locale: t.inputKey,
				translations: t.outputValue.getInternalCache()
			});
		},
		onLocalesCacheMiss: (t) => {
			e("locales-cache-miss", {
				locale: t.inputKey,
				translations: t.outputValue.getInternalCache()
			});
		},
		onTranslationsCacheHit: (t) => {
			e("translations-cache-hit", {
				locale: t.locale,
				hash: t.cacheKey,
				translation: t.outputValue
			});
		},
		onTranslationsCacheMiss: (t) => {
			e("translations-cache-miss", {
				locale: t.locale,
				hash: t.cacheKey,
				translation: t.outputValue
			});
		}
	};
}
var La = class {
	constructor() {
		this.listeners = {};
	}
	getOrCreateListeners(e) {
		return this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set()), this.listeners[e];
	}
	subscribe(e, t) {
		let n = this.getOrCreateListeners(e);
		return n.add(t), () => {
			n.delete(t);
		};
	}
	emit(e, t) {
		this.listeners[e]?.forEach((e) => e(t));
	}
};
function Ra({ onLocalesCacheHit: e, onLocalesCacheMiss: t, onTranslationsCacheHit: n, onTranslationsCacheMiss: r }, i) {
	e && i("locales-cache-hit", (t) => {
		e({
			...t,
			value: t.translations
		});
	}), t && i("locales-cache-miss", (e) => {
		t({
			...e,
			value: e.translations
		});
	}), n && i("translations-cache-hit", (e) => {
		n({
			...e,
			value: e.translation
		});
	}), r && i("translations-cache-miss", (e) => {
		r({
			...e,
			value: e.translation
		});
	});
}
var za = 12e3, Ba = class extends La {
	constructor(e) {
		super(), this.resolveTranslationSync = (e, t = {}) => this.lookupTranslation(e, t), da(va(e), "I18nManager: "), this.config = Va(e), this.localeConfig = new di({
			defaultLocale: this.config.defaultLocale,
			locales: this.config.locales,
			customMapping: this.config.customMapping
		}), this.storeAdapter = e.storeAdapter ?? new xa();
		let t = Ga(e), n = Sa(this.getGTClassClean(), za);
		Ra(e.lifecycle ?? {}, (...e) => this.subscribe(...e)), this.localesCache = new Fa({
			loadTranslations: t,
			createTranslateMany: n,
			lifecycle: Ia((...e) => this.emit(...e))
		});
	}
	subscribeToTranslationsCacheMiss(e, t, n) {
		return this.subscribe("translations-cache-miss", (r) => {
			r.locale === t && r.hash === n && e(r);
		});
	}
	getAdapterType() {
		return this.storeAdapter.type;
	}
	getLocale() {
		return this.storeAdapter.getItem("locale") || (hi.warn("getLocale() invoked outside of translation context, falling back to default locale"), this.config.defaultLocale);
	}
	setLocale(e) {
		try {
			let t = this.resolveLocale(e), n = this.getLocale();
			this.storeAdapter.setItem("locale", t), this.emit("locale-update", {
				previousLocale: n,
				newLocale: t
			});
		} catch (e) {
			this.handleError(e);
		}
	}
	getDefaultLocale() {
		return this.config.defaultLocale;
	}
	getLocales() {
		return this.config.locales;
	}
	getVersionId() {
		return this.config._versionId;
	}
	getGTClass() {
		return this.getGTClassClean(this.getLocale());
	}
	isTranslationEnabled() {
		return this.config.enableI18n;
	}
	getTranslationLoader() {
		return (e) => this.loadTranslations(e);
	}
	async loadTranslations(e = this.getLocale()) {
		try {
			let t = this.resolveLocale(e);
			if (!this.requiresTranslation(t)) return {};
			let n = this.localesCache.get(t);
			return n ||= await this.localesCache.miss(t), n.getInternalCache();
		} catch (e) {
			return this.handleError(e), {};
		}
	}
	lookupTranslation(e, t = {}) {
		try {
			let { locale: n, options: r } = this.resolveLookupParams(t);
			if (!this.requiresTranslation(n)) return e;
			let i = this.localesCache.get(n);
			return i ? i.get({
				message: e,
				options: r
			}) : void 0;
		} catch (e) {
			this.handleError(e);
			return;
		}
	}
	async lookupTranslationWithFallback(e, t = {}) {
		try {
			let { locale: n, options: r } = this.resolveLookupParams(t);
			if (!this.requiresTranslation(n)) return e;
			let i = this.localesCache.get(n);
			i ||= await this.localesCache.miss(n);
			let a = i.get({
				message: e,
				options: r
			});
			return a ??= await i.miss({
				message: e,
				options: r
			}), a;
		} catch (e) {
			this.handleError(e);
			return;
		}
	}
	async getLookupTranslation(e = this.getLocale(), t = []) {
		try {
			let n = this.resolveLocale(e);
			if (!this.requiresTranslation(n)) return (e) => e;
			let r = Wa(t, n, (e) => this.resolveLocale(e));
			r.length !== t.length && hi.warn(`I18nManager: getLookupTranslation(): prefetchEntries must all be the same locale, ignoring all entries that are not for ${n}`);
			let i = this.localesCache.get(n);
			return i ||= await this.localesCache.miss(n), i ? (await Promise.all(r.filter((e) => i.get(e) == null).map((e) => i.miss(e))), (e, t = {}) => i.get({
				message: e,
				options: this.resolveLookupOptions(t)
			})) : () => void 0;
		} catch (e) {
			return this.handleError(e), (e) => e;
		}
	}
	async getTranslations(e = this.getLocale()) {
		try {
			return this.loadTranslations(e);
		} catch (e) {
			return this.handleError(e), {};
		}
	}
	async getTranslationResolver(e = this.getLocale()) {
		return this.getLookupTranslation(e);
	}
	requiresTranslation(e = this.getLocale()) {
		let t = this.getDefaultLocale(), n = this.getLocales();
		return this.isTranslationEnabled() && this.localeConfig.requiresTranslation(e, t, n);
	}
	requiresDialectTranslation(e = this.getLocale()) {
		let t = this.getDefaultLocale();
		return this.requiresTranslation(e) && this.localeConfig.isSameLanguage(t, e);
	}
	handleError(e) {
		switch (this.config.environment) {
			case "development": throw e;
			default: hi.error("I18nManager: " + e);
		}
	}
	resolveLocale(e) {
		let t = this.localeConfig.determineLocale(e);
		if (!this.localeConfig.isValidLocale(e) || !t) throw Error(`I18nManager: validateLocale(): locale ${e} is not valid`);
		return t;
	}
	resolveLookupParams(e = {}) {
		let t = this.resolveLocale(e.$locale ?? this.getLocale());
		return {
			locale: t,
			options: this.resolveLookupOptions(e, t)
		};
	}
	resolveLookupOptions(e = {}, t) {
		return e.$locale ? {
			...e,
			$locale: t ?? this.resolveLocale(e.$locale)
		} : e;
	}
	getGTClassClean(e) {
		return new oa({
			sourceLocale: this.config.defaultLocale,
			targetLocale: e,
			locales: this.config.locales,
			customMapping: this.config.customMapping,
			projectId: this.config.projectId,
			baseUrl: this.config.runtimeUrl || void 0,
			apiKey: this.config.apiKey,
			devApiKey: this.config.devApiKey
		});
	}
};
function Va(e) {
	let t = ga(e), n = Ha({
		defaultLocale: e.defaultLocale || "en",
		locales: e.locales || ["en"],
		customMapping: e.customMapping
	});
	return {
		environment: e.environment || "production",
		enableI18n: e.enableI18n === void 0 || e.enableI18n,
		projectId: e.projectId,
		devApiKey: e.devApiKey,
		apiKey: e.apiKey,
		runtimeUrl: e.runtimeUrl,
		_versionId: e._versionId,
		...t ? Ua(n) : n
	};
}
function Ha({ defaultLocale: e, locales: t, customMapping: n }) {
	return {
		defaultLocale: e,
		locales: Array.from(/* @__PURE__ */ new Set([e, ...t])),
		customMapping: n || {}
	};
}
function Ua(e) {
	return {
		defaultLocale: mi(e.defaultLocale),
		locales: e.locales.map((t) => (typeof e.customMapping?.[t] == "string" ? e.customMapping?.[t] : e.customMapping?.[t]?.code) ? t : mi(t)),
		customMapping: Object.fromEntries(Object.entries(e.customMapping || {}).map(([e, t]) => [e, typeof t == "string" ? mi(t) : {
			...t,
			...t.code ? { code: mi(t.code) } : {}
		}]))
	};
}
function Wa(e, t, n) {
	return e.flatMap((e) => {
		let r = e.options.$locale;
		if (r == null) return [e];
		try {
			let i = n(r);
			return i === t ? [{
				message: e.message,
				options: {
					...e.options,
					$locale: i
				}
			}] : [];
		} catch {
			return [];
		}
	});
}
function Ga(e) {
	return Ea({
		loadTranslations: e.loadTranslations,
		type: fa(e),
		remoteTranslationLoaderParams: {
			cacheUrl: e.cacheUrl,
			projectId: e.projectId,
			_versionId: e._versionId,
			_branchId: e._branchId,
			customMapping: e.customMapping
		}
	});
}
var Ka = void 0;
function qa() {
	return Ka ||= (hi.warn("getI18nManager(): Translation failed because I18nManager not initialized."), new Ba({
		defaultLocale: "en",
		locales: ["en"]
	})), Ka;
}
function Ja(e) {
	Ka = e;
}
var Ya = "DEFAULT_TERMINATOR_KEY", Xa = {
	ellipsis: {
		fr: {
			terminator: "…",
			separator: " "
		},
		zh: {
			terminator: "……",
			separator: void 0
		},
		ja: {
			terminator: "……",
			separator: void 0
		},
		[Ya]: {
			terminator: "…",
			separator: void 0
		}
	},
	none: { [Ya]: {
		terminator: void 0,
		separator: void 0
	} }
}, Za = {
	Collator: Intl.Collator,
	DateTimeFormat: Intl.DateTimeFormat,
	DisplayNames: Intl.DisplayNames,
	ListFormat: Intl.ListFormat,
	Locale: Intl.Locale,
	NumberFormat: Intl.NumberFormat,
	PluralRules: Intl.PluralRules,
	RelativeTimeFormat: Intl.RelativeTimeFormat,
	Segmenter: Intl.Segmenter,
	CutoffFormat: class {
		constructor(e, t = {}) {
			try {
				let t = e ? Array.isArray(e) ? e.map((e) => String(e)) : [String(e)] : ["en"], n = Intl.getCanonicalLocales(t);
				this.locale = n.length ? n[0] : "en";
			} catch {
				this.locale = "en";
			}
			if (!Xa[t.style ?? "ellipsis"]) throw Error(((e) => `generaltranslation Formatting Error: Invalid cutoff style: ${e}.`)(t.style ?? "ellipsis"));
			let n, r;
			if (t.maxChars !== void 0) {
				n = t.style ?? "ellipsis";
				let e = new Intl.Locale(this.locale).language;
				r = Xa[n][e] || Xa[n].DEFAULT_TERMINATOR_KEY;
			}
			let i = t.terminator ?? r?.terminator, a = i == null ? void 0 : t.separator ?? r?.separator;
			this.additionLength = (i?.length ?? 0) + (a?.length ?? 0), t.maxChars !== void 0 && Math.abs(t.maxChars) < this.additionLength && (i = void 0, a = void 0), this.options = {
				maxChars: t.maxChars,
				style: n,
				terminator: i,
				separator: a
			};
		}
		format(e) {
			return this.formatToParts(e).join("");
		}
		formatToParts(e) {
			let { maxChars: t, terminator: n, separator: r } = this.options, i = t === void 0 || Math.abs(t) >= e.length ? t : t >= 0 ? Math.max(0, t - this.additionLength) : Math.min(0, t + this.additionLength), a = i !== void 0 && i > -1 ? e.slice(0, i) : e.slice(i);
			return t == null || i == null || i === 0 || n == null || e.length <= Math.abs(t) ? [a] : i > 0 ? r == null ? [a, n] : [
				a,
				r,
				n
			] : r == null ? [n, a] : [
				n,
				r,
				a
			];
		}
		resolvedOptions() {
			return this.options;
		}
	}
};
new class {
	constructor() {
		this.cache = {};
	}
	_generateKey(e, t = {}) {
		return `${e ? Array.isArray(e) ? e.map((e) => String(e)).join(",") : String(e) : "undefined"}:${t ? JSON.stringify(t, Object.keys(t).sort()) : "{}"}`;
	}
	get(e, ...t) {
		let [n = "en", r = {}] = t, i = this._generateKey(n, r), a = this.cache[e]?.[i];
		return a === void 0 && (a = new Za[e](...t), this.cache[e] || (this.cache[e] = {}), this.cache[e][i] = a), a;
	}
}();
function Qa(e, t, n = "") {
	let r = (i = e) instanceof Uint8Array || ArrayBuffer.isView(i) && i.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in i && i.BYTES_PER_ELEMENT === 1;
	var i;
	let a = e?.length;
	if (!r || t !== void 0) {
		let t = (n && `"${n}" `) + "expected Uint8Array, got " + (r ? `length=${a}` : "type=" + typeof e);
		throw r ? RangeError(t) : TypeError(t);
	}
	return e;
}
function $a(e, t = !0) {
	if (e.destroyed) throw Error("Hash instance has been destroyed");
	if (t && e.finished) throw Error("Hash#digest() has already been called");
}
function eo(...e) {
	for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function to(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function no(e, t) {
	return e << 32 - t | e >>> t;
}
typeof Uint8Array.from([]).toHex == "function" && Uint8Array.fromHex, Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function ro(e, t, n) {
	return e & t ^ ~e & n;
}
function io(e, t, n) {
	return e & t ^ e & n ^ t & n;
}
var ao = class {
	blockLen;
	outputLen;
	canXOF = !1;
	padOffset;
	isLE;
	buffer;
	view;
	finished = !1;
	length = 0;
	pos = 0;
	destroyed = !1;
	constructor(e, t, n, r) {
		this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = to(this.buffer);
	}
	update(e) {
		$a(this), Qa(e);
		let { view: t, buffer: n, blockLen: r } = this, i = e.length;
		for (let a = 0; a < i;) {
			let o = Math.min(r - this.pos, i - a);
			if (o === r) {
				let t = to(e);
				for (; r <= i - a; a += r) this.process(t, a);
				continue;
			}
			n.set(e.subarray(a, a + o), this.pos), this.pos += o, a += o, this.pos === r && (this.process(t, 0), this.pos = 0);
		}
		return this.length += e.length, this.roundClean(), this;
	}
	digestInto(e) {
		$a(this), function(e, t) {
			Qa(e, void 0, "digestInto() output");
			let n = t.outputLen;
			if (e.length < n) throw RangeError("\"digestInto() output\" expected to be of length >=" + n);
		}(e, this), this.finished = !0;
		let { buffer: t, view: n, blockLen: r, isLE: i } = this, { pos: a } = this;
		t[a++] = 128, eo(this.buffer.subarray(a)), this.padOffset > r - a && (this.process(n, 0), a = 0);
		for (let e = a; e < r; e++) t[e] = 0;
		n.setBigUint64(r - 8, BigInt(8 * this.length), i), this.process(n, 0);
		let o = to(e), s = this.outputLen;
		if (s % 4) throw Error("_sha2: outputLen must be aligned to 32bit");
		let c = s / 4, l = this.get();
		if (c > l.length) throw Error("_sha2: outputLen bigger than state");
		for (let e = 0; e < c; e++) o.setUint32(4 * e, l[e], i);
	}
	digest() {
		let { buffer: e, outputLen: t } = this;
		this.digestInto(e);
		let n = e.slice(0, t);
		return this.destroy(), n;
	}
	_cloneInto(e) {
		e ||= new this.constructor(), e.set(...this.get());
		let { blockLen: t, buffer: n, length: r, finished: i, destroyed: a, pos: o } = this;
		return e.destroyed = a, e.finished = i, e.length = r, e.pos = o, r % t && e.buffer.set(n), e;
	}
	clone() {
		return this._cloneInto();
	}
}, oo = Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), so = Uint32Array.from([
	1116352408,
	1899447441,
	3049323471,
	3921009573,
	961987163,
	1508970993,
	2453635748,
	2870763221,
	3624381080,
	310598401,
	607225278,
	1426881987,
	1925078388,
	2162078206,
	2614888103,
	3248222580,
	3835390401,
	4022224774,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	2554220882,
	2821834349,
	2952996808,
	3210313671,
	3336571891,
	3584528711,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	2177026350,
	2456956037,
	2730485921,
	2820302411,
	3259730800,
	3345764771,
	3516065817,
	3600352804,
	4094571909,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	2227730452,
	2361852424,
	2428436474,
	2756734187,
	3204031479,
	3329325298
]), co = /* @__PURE__ */ new Uint32Array(64), lo = class extends ao {
	constructor(e) {
		super(64, e, 8, !1);
	}
	get() {
		let { A: e, B: t, C: n, D: r, E: i, F: a, G: o, H: s } = this;
		return [
			e,
			t,
			n,
			r,
			i,
			a,
			o,
			s
		];
	}
	set(e, t, n, r, i, a, o, s) {
		this.A = 0 | e, this.B = 0 | t, this.C = 0 | n, this.D = 0 | r, this.E = 0 | i, this.F = 0 | a, this.G = 0 | o, this.H = 0 | s;
	}
	process(e, t) {
		for (let n = 0; n < 16; n++, t += 4) co[n] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			let t = co[e - 15], n = co[e - 2], r = no(t, 7) ^ no(t, 18) ^ t >>> 3, i = no(n, 17) ^ no(n, 19) ^ n >>> 10;
			co[e] = i + co[e - 7] + r + co[e - 16] | 0;
		}
		let { A: n, B: r, C: i, D: a, E: o, F: s, G: c, H: l } = this;
		for (let e = 0; e < 64; e++) {
			let t = l + (no(o, 6) ^ no(o, 11) ^ no(o, 25)) + ro(o, s, c) + so[e] + co[e] | 0, u = (no(n, 2) ^ no(n, 13) ^ no(n, 22)) + io(n, r, i) | 0;
			l = c, c = s, s = o, o = a + t | 0, a = i, i = r, r = n, n = t + u | 0;
		}
		n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, o = o + this.E | 0, s = s + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(n, r, i, a, o, s, c, l);
	}
	roundClean() {
		eo(co);
	}
	destroy() {
		this.destroyed = !0, this.set(0, 0, 0, 0, 0, 0, 0, 0), eo(this.buffer);
	}
}, uo = class extends lo {
	A = 0 | oo[0];
	B = 0 | oo[1];
	C = 0 | oo[2];
	D = 0 | oo[3];
	E = 0 | oo[4];
	F = 0 | oo[5];
	G = 0 | oo[6];
	H = 0 | oo[7];
	constructor() {
		super(32);
	}
};
(function(e, t = {}) {
	let n = (t, n) => e(n).update(t).digest(), r = e(void 0);
	return n.outputLen = r.outputLen, n.blockLen = r.blockLen, n.canXOF = r.canXOF, n.create = (t) => e(t), Object.assign(n, t), Object.freeze(n);
})(() => new uo(), (fo = 1, { oid: Uint8Array.from([
	6,
	9,
	96,
	134,
	72,
	1,
	101,
	3,
	4,
	2,
	fo
]) }));
var fo, po = function(e, t) {
	return po = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, po(e, t);
};
function mo(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	function n() {
		this.constructor = e;
	}
	po(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var B = function() {
	return B = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, B.apply(this, arguments);
};
function ho(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") {
		var i = 0;
		for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	}
	return n;
}
function go(e, t, n, r) {
	var i, a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
	return a > 3 && o && Object.defineProperty(t, n, o), o;
}
function _o(e, t) {
	return function(n, r) {
		t(n, r, e);
	};
}
function vo(e, t, n, r, i, a) {
	function o(e) {
		if (e !== void 0 && typeof e != "function") throw TypeError("Function expected");
		return e;
	}
	for (var s, c = r.kind, l = c === "getter" ? "get" : c === "setter" ? "set" : "value", u = !t && e ? r.static ? e : e.prototype : null, d = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}), f = !1, p = n.length - 1; p >= 0; p--) {
		var m = {};
		for (var h in r) m[h] = h === "access" ? {} : r[h];
		for (var h in r.access) m.access[h] = r.access[h];
		m.addInitializer = function(e) {
			if (f) throw TypeError("Cannot add initializers after decoration has completed");
			a.push(o(e || null));
		};
		var g = (0, n[p])(c === "accessor" ? {
			get: d.get,
			set: d.set
		} : d[l], m);
		if (c === "accessor") {
			if (g === void 0) continue;
			if (typeof g != "object" || !g) throw TypeError("Object expected");
			(s = o(g.get)) && (d.get = s), (s = o(g.set)) && (d.set = s), (s = o(g.init)) && i.unshift(s);
		} else (s = o(g)) && (c === "field" ? i.unshift(s) : d[l] = s);
	}
	u && Object.defineProperty(u, r.name, d), f = !0;
}
function yo(e, t, n) {
	for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
	return r ? n : void 0;
}
function bo(e) {
	return typeof e == "symbol" ? e : `${e}`;
}
function xo(e, t, n) {
	return typeof t == "symbol" && (t = t.description ? `[${t.description}]` : ""), Object.defineProperty(e, "name", {
		configurable: !0,
		value: n ? `${n} ${t}` : t
	});
}
function So(e, t) {
	if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function Co(e, t, n, r) {
	return new (n ||= Promise)(function(i, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			var t;
			e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
				e(t);
			})).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function wo(e, t) {
	var n, r, i, a = {
		label: 0,
		sent: function() {
			if (1 & i[0]) throw i[1];
			return i[1];
		},
		trys: [],
		ops: []
	}, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
	return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
		return this;
	}), o;
	function s(s) {
		return function(c) {
			return function(s) {
				if (n) throw TypeError("Generator is already executing.");
				for (; o && (o = 0, s[0] && (a = 0)), a;) try {
					if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
					switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
						case 0:
						case 1:
							i = s;
							break;
						case 4: return a.label++, {
							value: s[1],
							done: !1
						};
						case 5:
							a.label++, r = s[1], s = [0];
							continue;
						case 7:
							s = a.ops.pop(), a.trys.pop();
							continue;
						default:
							if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || s[0] !== 6 && s[0] !== 2)) {
								a = 0;
								continue;
							}
							if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
								a.label = s[1];
								break;
							}
							if (s[0] === 6 && a.label < i[1]) {
								a.label = i[1], i = s;
								break;
							}
							if (i && a.label < i[2]) {
								a.label = i[2], a.ops.push(s);
								break;
							}
							i[2] && a.ops.pop(), a.trys.pop();
							continue;
					}
					s = t.call(e, a);
				} catch (e) {
					s = [6, e], r = 0;
				} finally {
					n = i = 0;
				}
				if (5 & s[0]) throw s[1];
				return {
					value: s[0] ? s[1] : void 0,
					done: !0
				};
			}([s, c]);
		};
	}
}
var To = Object.create ? function(e, t, n, r) {
	r === void 0 && (r = n);
	var i = Object.getOwnPropertyDescriptor(t, n);
	i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
		enumerable: !0,
		get: function() {
			return t[n];
		}
	}), Object.defineProperty(e, r, i);
} : function(e, t, n, r) {
	r === void 0 && (r = n), e[r] = t[n];
};
function Eo(e, t) {
	for (var n in e) n === "default" || Object.prototype.hasOwnProperty.call(t, n) || To(t, e, n);
}
function Do(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Oo(e, t) {
	var n = typeof Symbol == "function" && e[Symbol.iterator];
	if (!n) return e;
	var r, i, a = n.call(e), o = [];
	try {
		for (; (t === void 0 || t-- > 0) && !(r = a.next()).done;) o.push(r.value);
	} catch (e) {
		i = { error: e };
	} finally {
		try {
			r && !r.done && (n = a.return) && n.call(a);
		} finally {
			if (i) throw i.error;
		}
	}
	return o;
}
function ko() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Oo(arguments[t]));
	return e;
}
function Ao() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	var r = Array(e), i = 0;
	for (t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function jo(e, t, n) {
	if (n || arguments.length === 2) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r ||= Array.prototype.slice.call(t, 0, i), r[i] = t[i]);
	return e.concat(r || Array.prototype.slice.call(t));
}
function Mo(e) {
	return this instanceof Mo ? (this.v = e, this) : new Mo(e);
}
function No(e, t, n) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var r, i = n.apply(e, t || []), a = [];
	return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", function(e) {
		return function(t) {
			return Promise.resolve(t).then(e, l);
		};
	}), r[Symbol.asyncIterator] = function() {
		return this;
	}, r;
	function o(e, t) {
		i[e] && (r[e] = function(t) {
			return new Promise(function(n, r) {
				a.push([
					e,
					t,
					n,
					r
				]) > 1 || s(e, t);
			});
		}, t && (r[e] = t(r[e])));
	}
	function s(e, t) {
		try {
			(n = i[e](t)).value instanceof Mo ? Promise.resolve(n.value.v).then(c, l) : u(a[0][2], n);
		} catch (e) {
			u(a[0][3], e);
		}
		var n;
	}
	function c(e) {
		s("next", e);
	}
	function l(e) {
		s("throw", e);
	}
	function u(e, t) {
		e(t), a.shift(), a.length && s(a[0][0], a[0][1]);
	}
}
function Po(e) {
	var t = {}, n;
	return r("next"), r("throw", function(e) {
		throw e;
	}), r("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function r(r, i) {
		t[r] = e[r] ? function(t) {
			return (n = !n) ? {
				value: Mo(e[r](t)),
				done: !1
			} : i ? i(t) : t;
		} : i;
	}
}
function Fo(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var t, n = e[Symbol.asyncIterator];
	return n ? n.call(e) : (e = Do(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
		return this;
	}, t);
	function r(n) {
		t[n] = e[n] && function(t) {
			return new Promise(function(r, i) {
				(function(e, t, n, r) {
					Promise.resolve(r).then(function(t) {
						e({
							value: t,
							done: n
						});
					}, t);
				})(r, i, (t = e[n](t)).done, t.value);
			});
		};
	}
}
function Io(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
var Lo = Object.create ? function(e, t) {
	Object.defineProperty(e, "default", {
		enumerable: !0,
		value: t
	});
} : function(e, t) {
	e.default = t;
}, Ro = function(e) {
	return Ro = Object.getOwnPropertyNames || function(e) {
		var t = [];
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
		return t;
	}, Ro(e);
};
function zo(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (e != null) for (var n = Ro(e), r = 0; r < n.length; r++) n[r] !== "default" && To(t, e, n[r]);
	return Lo(t, e), t;
}
function Bo(e) {
	return e && e.__esModule ? e : { default: e };
}
function Vo(e, t, n, r) {
	if (n === "a" && !r) throw TypeError("Private accessor was defined without a getter");
	if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
	return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function Ho(e, t, n, r, i) {
	if (r === "m") throw TypeError("Private method is not writable");
	if (r === "a" && !i) throw TypeError("Private accessor was defined without a setter");
	if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
	return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
}
function Uo(e, t) {
	if (t === null || typeof t != "object" && typeof t != "function") throw TypeError("Cannot use 'in' operator on non-object");
	return typeof e == "function" ? t === e : e.has(t);
}
function Wo(e, t, n) {
	if (t != null) {
		if (typeof t != "object" && typeof t != "function") throw TypeError("Object expected.");
		var r, i;
		if (n) {
			if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
			r = t[Symbol.asyncDispose];
		}
		if (r === void 0) {
			if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
			r = t[Symbol.dispose], n && (i = r);
		}
		if (typeof r != "function") throw TypeError("Object not disposable.");
		i && (r = function() {
			try {
				i.call(this);
			} catch (e) {
				return Promise.reject(e);
			}
		}), e.stack.push({
			value: t,
			dispose: r,
			async: n
		});
	} else n && e.stack.push({ async: !0 });
	return t;
}
var Go = typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
	var r = Error(n);
	return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
};
function Ko(e) {
	function t(t) {
		e.error = e.hasError ? new Go(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
	}
	var n, r = 0;
	return function i() {
		for (; n = e.stack.pop();) try {
			if (!n.async && r === 1) return r = 0, e.stack.push(n), Promise.resolve().then(i);
			if (n.dispose) {
				var a = n.dispose.call(n.value);
				if (n.async) return r |= 2, Promise.resolve(a).then(i, function(e) {
					return t(e), i();
				});
			} else r |= 1;
		} catch (e) {
			t(e);
		}
		if (r === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
		if (e.hasError) throw e.error;
	}();
}
function qo(e, t) {
	return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, a) {
		return n ? t ? ".jsx" : ".js" : !r || i && a ? r + i + "." + a.toLowerCase() + "js" : e;
	}) : e;
}
var V, H, Jo, Yo = Object.freeze({
	__proto__: null,
	__addDisposableResource: Wo,
	get __assign() {
		return B;
	},
	__asyncDelegator: Po,
	__asyncGenerator: No,
	__asyncValues: Fo,
	__await: Mo,
	__awaiter: Co,
	__classPrivateFieldGet: Vo,
	__classPrivateFieldIn: Uo,
	__classPrivateFieldSet: Ho,
	__createBinding: To,
	__decorate: go,
	__disposeResources: Ko,
	__esDecorate: vo,
	__exportStar: Eo,
	__extends: mo,
	__generator: wo,
	__importDefault: Bo,
	__importStar: zo,
	__makeTemplateObject: Io,
	__metadata: So,
	__param: _o,
	__propKey: bo,
	__read: Oo,
	__rest: ho,
	__rewriteRelativeImportExtension: qo,
	__runInitializers: yo,
	__setFunctionName: xo,
	__spread: ko,
	__spreadArray: jo,
	__spreadArrays: Ao,
	__values: Do,
	default: {
		__extends: mo,
		__assign: B,
		__rest: ho,
		__decorate: go,
		__param: _o,
		__esDecorate: vo,
		__runInitializers: yo,
		__propKey: bo,
		__setFunctionName: xo,
		__metadata: So,
		__awaiter: Co,
		__generator: wo,
		__createBinding: To,
		__exportStar: Eo,
		__values: Do,
		__read: Oo,
		__spread: ko,
		__spreadArrays: Ao,
		__spreadArray: jo,
		__await: Mo,
		__asyncGenerator: No,
		__asyncDelegator: Po,
		__asyncValues: Fo,
		__makeTemplateObject: Io,
		__importStar: zo,
		__importDefault: Bo,
		__classPrivateFieldGet: Vo,
		__classPrivateFieldSet: Ho,
		__classPrivateFieldIn: Uo,
		__addDisposableResource: Wo,
		__disposeResources: Ko,
		__rewriteRelativeImportExtension: qo
	}
});
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(V ||= {}), function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
}(H ||= {}), function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
}(Jo ||= {});
var Xo = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Zo = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Qo(e) {
	var t = {};
	return e.replace(Zo, function(e) {
		var n = e.length;
		switch (e[0]) {
			case "G":
				t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
				break;
			case "y":
				t.year = n === 2 ? "2-digit" : "numeric";
				break;
			case "Y":
			case "u":
			case "U":
			case "r": throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
			case "q":
			case "Q": throw RangeError("`q/Q` (quarter) patterns are not supported");
			case "M":
			case "L":
				t.month = [
					"numeric",
					"2-digit",
					"short",
					"long",
					"narrow"
				][n - 1];
				break;
			case "w":
			case "W": throw RangeError("`w/W` (week) patterns are not supported");
			case "d":
				t.day = ["numeric", "2-digit"][n - 1];
				break;
			case "D":
			case "F":
			case "g": throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
			case "E":
				t.weekday = n === 4 ? "long" : n === 5 ? "narrow" : "short";
				break;
			case "e":
				if (n < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][n - 4];
				break;
			case "c":
				if (n < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][n - 4];
				break;
			case "a":
				t.hour12 = !0;
				break;
			case "b":
			case "B": throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
			case "h":
				t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "H":
				t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "K":
				t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "k":
				t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "j":
			case "J":
			case "C": throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
			case "m":
				t.minute = ["numeric", "2-digit"][n - 1];
				break;
			case "s":
				t.second = ["numeric", "2-digit"][n - 1];
				break;
			case "S":
			case "A": throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
			case "z":
				t.timeZoneName = n < 4 ? "short" : "long";
				break;
			case "Z":
			case "O":
			case "v":
			case "V":
			case "X":
			case "x": throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
		}
		return "";
	}), t;
}
var $o = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function es(e) {
	return e.replace(/^(.*?)-/, "");
}
var ts = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, ns = /^(@+)?(\+|#+)?[rs]?$/g, rs = /(\*)(0+)|(#+)(0+)|(0+)/g, is = /^(0+)$/;
function as(e) {
	var t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(ns, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function os(e) {
	switch (e) {
		case "sign-auto": return { signDisplay: "auto" };
		case "sign-accounting":
		case "()": return { currencySign: "accounting" };
		case "sign-always":
		case "+!": return { signDisplay: "always" };
		case "sign-accounting-always":
		case "()!": return {
			signDisplay: "always",
			currencySign: "accounting"
		};
		case "sign-except-zero":
		case "+?": return { signDisplay: "exceptZero" };
		case "sign-accounting-except-zero":
		case "()?": return {
			signDisplay: "exceptZero",
			currencySign: "accounting"
		};
		case "sign-never":
		case "+_": return { signDisplay: "never" };
	}
}
function ss(e) {
	var t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		var n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !is.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function cs(e) {
	return os(e) || {};
}
function ls(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n];
		switch (i.stem) {
			case "percent":
			case "%":
				t.style = "percent";
				continue;
			case "%x100":
				t.style = "percent", t.scale = 100;
				continue;
			case "currency":
				t.style = "currency", t.currency = i.options[0];
				continue;
			case "group-off":
			case ",_":
				t.useGrouping = !1;
				continue;
			case "precision-integer":
			case ".":
				t.maximumFractionDigits = 0;
				continue;
			case "measure-unit":
			case "unit":
				t.style = "unit", t.unit = es(i.options[0]);
				continue;
			case "compact-short":
			case "K":
				t.notation = "compact", t.compactDisplay = "short";
				continue;
			case "compact-long":
			case "KK":
				t.notation = "compact", t.compactDisplay = "long";
				continue;
			case "scientific":
				t = B(B(B({}, t), { notation: "scientific" }), i.options.reduce(function(e, t) {
					return B(B({}, e), cs(t));
				}, {}));
				continue;
			case "engineering":
				t = B(B(B({}, t), { notation: "engineering" }), i.options.reduce(function(e, t) {
					return B(B({}, e), cs(t));
				}, {}));
				continue;
			case "notation-simple":
				t.notation = "standard";
				continue;
			case "unit-width-narrow":
				t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
				continue;
			case "unit-width-short":
				t.currencyDisplay = "code", t.unitDisplay = "short";
				continue;
			case "unit-width-full-name":
				t.currencyDisplay = "name", t.unitDisplay = "long";
				continue;
			case "unit-width-iso-code":
				t.currencyDisplay = "symbol";
				continue;
			case "scale":
				t.scale = parseFloat(i.options[0]);
				continue;
			case "rounding-mode-floor":
				t.roundingMode = "floor";
				continue;
			case "rounding-mode-ceiling":
				t.roundingMode = "ceil";
				continue;
			case "rounding-mode-down":
				t.roundingMode = "trunc";
				continue;
			case "rounding-mode-up":
				t.roundingMode = "expand";
				continue;
			case "rounding-mode-half-even":
				t.roundingMode = "halfEven";
				continue;
			case "rounding-mode-half-down":
				t.roundingMode = "halfTrunc";
				continue;
			case "rounding-mode-half-up":
				t.roundingMode = "halfExpand";
				continue;
			case "integer-width":
				if (i.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
				i.options[0].replace(rs, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else {
						if (i && a) throw Error("We currently do not support maximum integer digits");
						if (o) throw Error("We currently do not support exact integer digits");
					}
					return "";
				});
				continue;
		}
		if (is.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
		else if (ts.test(i.stem)) {
			if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			i.stem.replace(ts, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			var a = i.options[0];
			a === "w" ? t = B(B({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = B(B({}, t), as(a)));
		} else if (ns.test(i.stem)) t = B(B({}, t), as(i.stem));
		else {
			var o = os(i.stem);
			o && (t = B(B({}, t), o));
			var s = ss(i.stem);
			s && (t = B(B({}, t), s));
		}
	}
	return t;
}
var us = {
	"001": ["H", "h"],
	419: [
		"h",
		"H",
		"hB",
		"hb"
	],
	AC: [
		"H",
		"h",
		"hb",
		"hB"
	],
	AD: ["H", "hB"],
	AE: [
		"h",
		"hB",
		"hb",
		"H"
	],
	AF: [
		"H",
		"hb",
		"hB",
		"h"
	],
	AG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	AI: [
		"H",
		"h",
		"hb",
		"hB"
	],
	AL: [
		"h",
		"H",
		"hB"
	],
	AM: ["H", "hB"],
	AO: ["H", "hB"],
	AR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	AS: ["h", "H"],
	AT: ["H", "hB"],
	AU: [
		"h",
		"hb",
		"H",
		"hB"
	],
	AW: ["H", "hB"],
	AX: ["H"],
	AZ: [
		"H",
		"hB",
		"h"
	],
	BA: [
		"H",
		"hB",
		"h"
	],
	BB: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BD: [
		"h",
		"hB",
		"H"
	],
	BE: ["H", "hB"],
	BF: ["H", "hB"],
	BG: [
		"H",
		"hB",
		"h"
	],
	BH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	BI: ["H", "h"],
	BJ: ["H", "hB"],
	BL: ["H", "hB"],
	BM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BN: [
		"hb",
		"hB",
		"h",
		"H"
	],
	BO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	BQ: ["H"],
	BR: ["H", "hB"],
	BS: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BT: ["h", "H"],
	BW: [
		"H",
		"h",
		"hb",
		"hB"
	],
	BY: ["H", "h"],
	BZ: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CA: [
		"h",
		"hb",
		"H",
		"hB"
	],
	CC: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CD: ["hB", "H"],
	CF: [
		"H",
		"h",
		"hB"
	],
	CG: ["H", "hB"],
	CH: [
		"H",
		"hB",
		"h"
	],
	CI: ["H", "hB"],
	CK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CL: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CM: [
		"H",
		"h",
		"hB"
	],
	CN: [
		"H",
		"hB",
		"hb",
		"h"
	],
	CO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CP: ["H"],
	CR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CU: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CV: ["H", "hB"],
	CW: ["H", "hB"],
	CX: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CY: [
		"h",
		"H",
		"hb",
		"hB"
	],
	CZ: ["H"],
	DE: ["H", "hB"],
	DG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	DJ: ["h", "H"],
	DK: ["H"],
	DM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	DO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	DZ: [
		"h",
		"hB",
		"hb",
		"H"
	],
	EA: [
		"H",
		"h",
		"hB",
		"hb"
	],
	EC: [
		"h",
		"H",
		"hB",
		"hb"
	],
	EE: ["H", "hB"],
	EG: [
		"h",
		"hB",
		"hb",
		"H"
	],
	EH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	ER: ["h", "H"],
	ES: [
		"H",
		"hB",
		"h",
		"hb"
	],
	ET: [
		"hB",
		"hb",
		"h",
		"H"
	],
	FI: ["H"],
	FJ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	FK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	FM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	FO: ["H", "h"],
	FR: ["H", "hB"],
	GA: ["H", "hB"],
	GB: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GD: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GE: [
		"H",
		"hB",
		"h"
	],
	GF: ["H", "hB"],
	GG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GH: ["h", "H"],
	GI: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GL: ["H", "h"],
	GM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GN: ["H", "hB"],
	GP: ["H", "hB"],
	GQ: [
		"H",
		"hB",
		"h",
		"hb"
	],
	GR: [
		"h",
		"H",
		"hb",
		"hB"
	],
	GT: [
		"h",
		"H",
		"hB",
		"hb"
	],
	GU: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GW: ["H", "hB"],
	GY: [
		"h",
		"hb",
		"H",
		"hB"
	],
	HK: [
		"h",
		"hB",
		"hb",
		"H"
	],
	HN: [
		"h",
		"H",
		"hB",
		"hb"
	],
	HR: ["H", "hB"],
	HU: ["H", "h"],
	IC: [
		"H",
		"h",
		"hB",
		"hb"
	],
	ID: ["H"],
	IE: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IL: ["H", "hB"],
	IM: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IN: ["h", "H"],
	IO: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IQ: [
		"h",
		"hB",
		"hb",
		"H"
	],
	IR: ["hB", "H"],
	IS: ["H"],
	IT: ["H", "hB"],
	JE: [
		"H",
		"h",
		"hb",
		"hB"
	],
	JM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	JO: [
		"h",
		"hB",
		"hb",
		"H"
	],
	JP: [
		"H",
		"K",
		"h"
	],
	KE: [
		"hB",
		"hb",
		"H",
		"h"
	],
	KG: [
		"H",
		"h",
		"hB",
		"hb"
	],
	KH: [
		"hB",
		"h",
		"H",
		"hb"
	],
	KI: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KM: [
		"H",
		"h",
		"hB",
		"hb"
	],
	KN: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KP: [
		"h",
		"H",
		"hB",
		"hb"
	],
	KR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	KW: [
		"h",
		"hB",
		"hb",
		"H"
	],
	KY: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KZ: ["H", "hB"],
	LA: [
		"H",
		"hb",
		"hB",
		"h"
	],
	LB: [
		"h",
		"hB",
		"hb",
		"H"
	],
	LC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	LI: [
		"H",
		"hB",
		"h"
	],
	LK: [
		"H",
		"h",
		"hB",
		"hb"
	],
	LR: [
		"h",
		"hb",
		"H",
		"hB"
	],
	LS: ["h", "H"],
	LT: [
		"H",
		"h",
		"hb",
		"hB"
	],
	LU: [
		"H",
		"h",
		"hB"
	],
	LV: [
		"H",
		"hB",
		"hb",
		"h"
	],
	LY: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MA: [
		"H",
		"h",
		"hB",
		"hb"
	],
	MC: ["H", "hB"],
	MD: ["H", "hB"],
	ME: [
		"H",
		"hB",
		"h"
	],
	MF: ["H", "hB"],
	MG: ["H", "h"],
	MH: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	ML: ["H"],
	MM: [
		"hB",
		"hb",
		"H",
		"h"
	],
	MN: [
		"H",
		"h",
		"hb",
		"hB"
	],
	MO: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MP: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MQ: ["H", "hB"],
	MR: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MS: [
		"H",
		"h",
		"hb",
		"hB"
	],
	MT: ["H", "h"],
	MU: ["H", "h"],
	MV: ["H", "h"],
	MW: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MX: [
		"h",
		"H",
		"hB",
		"hb"
	],
	MY: [
		"hb",
		"hB",
		"h",
		"H"
	],
	MZ: ["H", "hB"],
	NA: [
		"h",
		"H",
		"hB",
		"hb"
	],
	NC: ["H", "hB"],
	NE: ["H"],
	NF: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NI: [
		"h",
		"H",
		"hB",
		"hb"
	],
	NL: ["H", "hB"],
	NO: ["H", "h"],
	NP: [
		"H",
		"h",
		"hB"
	],
	NR: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NU: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NZ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	OM: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PA: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PE: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PF: [
		"H",
		"h",
		"hB"
	],
	PG: ["h", "H"],
	PH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PK: [
		"h",
		"hB",
		"H"
	],
	PL: ["H", "h"],
	PM: ["H", "hB"],
	PN: [
		"H",
		"h",
		"hb",
		"hB"
	],
	PR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PS: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PT: ["H", "hB"],
	PW: ["h", "H"],
	PY: [
		"h",
		"H",
		"hB",
		"hb"
	],
	QA: [
		"h",
		"hB",
		"hb",
		"H"
	],
	RE: ["H", "hB"],
	RO: ["H", "hB"],
	RS: [
		"H",
		"hB",
		"h"
	],
	RU: ["H"],
	RW: ["H", "h"],
	SA: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SB: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SC: [
		"H",
		"h",
		"hB"
	],
	SD: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SE: ["H"],
	SG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SH: [
		"H",
		"h",
		"hb",
		"hB"
	],
	SI: ["H", "hB"],
	SJ: ["H"],
	SK: ["H"],
	SL: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SM: [
		"H",
		"h",
		"hB"
	],
	SN: [
		"H",
		"h",
		"hB"
	],
	SO: ["h", "H"],
	SR: ["H", "hB"],
	SS: [
		"h",
		"hb",
		"H",
		"hB"
	],
	ST: ["H", "hB"],
	SV: [
		"h",
		"H",
		"hB",
		"hb"
	],
	SX: [
		"H",
		"h",
		"hb",
		"hB"
	],
	SY: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SZ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TA: [
		"H",
		"h",
		"hb",
		"hB"
	],
	TC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TD: [
		"h",
		"H",
		"hB"
	],
	TF: [
		"H",
		"h",
		"hB"
	],
	TG: ["H", "hB"],
	TH: ["H", "h"],
	TJ: ["H", "h"],
	TL: [
		"H",
		"hB",
		"hb",
		"h"
	],
	TM: ["H", "h"],
	TN: [
		"h",
		"hB",
		"hb",
		"H"
	],
	TO: ["h", "H"],
	TR: ["H", "hB"],
	TT: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TW: [
		"hB",
		"hb",
		"h",
		"H"
	],
	TZ: [
		"hB",
		"hb",
		"H",
		"h"
	],
	UA: [
		"H",
		"hB",
		"h"
	],
	UG: [
		"hB",
		"hb",
		"H",
		"h"
	],
	UM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	US: [
		"h",
		"hb",
		"H",
		"hB"
	],
	UY: [
		"h",
		"H",
		"hB",
		"hb"
	],
	UZ: [
		"H",
		"hB",
		"h"
	],
	VA: [
		"H",
		"h",
		"hB"
	],
	VC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VE: [
		"h",
		"H",
		"hB",
		"hb"
	],
	VG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VI: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VN: ["H", "h"],
	VU: ["h", "H"],
	WF: ["H", "hB"],
	WS: ["h", "H"],
	XK: [
		"H",
		"hB",
		"h"
	],
	YE: [
		"h",
		"hB",
		"hb",
		"H"
	],
	YT: ["H", "hB"],
	ZA: [
		"H",
		"h",
		"hb",
		"hB"
	],
	ZM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	ZW: ["H", "h"],
	"af-ZA": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"ar-001": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"ca-ES": [
		"H",
		"h",
		"hB"
	],
	"en-001": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"en-HK": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"en-IL": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"en-MY": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"es-BR": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"es-ES": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"es-GQ": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"fr-CA": [
		"H",
		"h",
		"hB"
	],
	"gl-ES": [
		"H",
		"h",
		"hB"
	],
	"gu-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"hi-IN": [
		"hB",
		"h",
		"H"
	],
	"it-CH": [
		"H",
		"h",
		"hB"
	],
	"it-IT": [
		"H",
		"h",
		"hB"
	],
	"kn-IN": [
		"hB",
		"h",
		"H"
	],
	"ml-IN": [
		"hB",
		"h",
		"H"
	],
	"mr-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"pa-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"ta-IN": [
		"hB",
		"h",
		"hb",
		"H"
	],
	"te-IN": [
		"hB",
		"h",
		"H"
	],
	"zu-ZA": [
		"H",
		"hB",
		"hb",
		"h"
	]
};
function ds(e) {
	var t = e.hourCycle;
	if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	var n, r = e.language;
	return r !== "root" && (n = e.maximize().region), (us[n || ""] || us[r || ""] || us[`${r}-001`] || us["001"])[0];
}
var fs = RegExp(`^${Xo.source}*`), ps = RegExp(`${Xo.source}*\$`);
function U(e, t) {
	return {
		start: e,
		end: t
	};
}
var ms = !!String.prototype.startsWith && "_a".startsWith("a", 1), hs = !!String.fromCodePoint, gs = !!Object.fromEntries, _s = !!String.prototype.codePointAt, vs = !!String.prototype.trimStart, ys = !!String.prototype.trimEnd, bs = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
	return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, xs = !0;
try {
	xs = ks("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")?.[0] === "a";
} catch {
	xs = !1;
}
var Ss, Cs = ms ? function(e, t, n) {
	return e.startsWith(t, n);
} : function(e, t, n) {
	return e.slice(n, n + t.length) === t;
}, ws = hs ? String.fromCodePoint : function() {
	for (var e = [...arguments], t, n = "", r = e.length, i = 0; r > i;) {
		if ((t = e[i++]) > 1114111) throw RangeError(t + " is not a valid code point");
		n += t < 65536 ? String.fromCharCode(t) : String.fromCharCode(55296 + ((t -= 65536) >> 10), t % 1024 + 56320);
	}
	return n;
}, Ts = gs ? Object.fromEntries : function(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n], a = i[0];
		t[a] = i[1];
	}
	return t;
}, Es = _s ? function(e, t) {
	return e.codePointAt(t);
} : function(e, t) {
	var n = e.length;
	if (!(t < 0 || t >= n)) {
		var r, i = e.charCodeAt(t);
		return i < 55296 || i > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? i : r - 56320 + (i - 55296 << 10) + 65536;
	}
}, Ds = vs ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(fs, "");
}, Os = ys ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(ps, "");
};
function ks(e, t) {
	return new RegExp(e, t);
}
if (xs) {
	var As = ks("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
	Ss = function(e, t) {
		return As.lastIndex = t, As.exec(e)[1] ?? "";
	};
} else Ss = function(e, t) {
	for (var n = [];;) {
		var r = Es(e, t);
		if (r === void 0 || Ns(r) || Ps(r)) break;
		n.push(r), t += r >= 65536 ? 2 : 1;
	}
	return ws.apply(void 0, n);
};
(function() {
	function e(e, t) {
		t === void 0 && (t = {}), this.message = e, this.position = {
			offset: 0,
			line: 1,
			column: 1
		}, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
	}
	return e.prototype.parse = function() {
		if (this.offset() !== 0) throw Error("parser can only be used once");
		return this.parseMessage(0, "", !1);
	}, e.prototype.parseMessage = function(e, t, n) {
		for (var r = []; !this.isEOF();) {
			var i = this.char();
			if (i === 123) {
				if ((a = this.parseArgument(e, n)).err) return a;
				r.push(a.val);
			} else {
				if (i === 125 && e > 0) break;
				if (i !== 35 || t !== "plural" && t !== "selectordinal") {
					if (i === 60 && !this.ignoreTag && this.peek() === 47) {
						if (n) break;
						return this.error(V.UNMATCHED_CLOSING_TAG, U(this.clonePosition(), this.clonePosition()));
					}
					if (i === 60 && !this.ignoreTag && js(this.peek() || 0)) {
						if ((a = this.parseTag(e, t)).err) return a;
						r.push(a.val);
					} else {
						var a;
						if ((a = this.parseLiteral(e, t)).err) return a;
						r.push(a.val);
					}
				} else {
					var o = this.clonePosition();
					this.bump(), r.push({
						type: H.pound,
						location: U(o, this.clonePosition())
					});
				}
			}
		}
		return {
			val: r,
			err: null
		};
	}, e.prototype.parseTag = function(e, t) {
		var n = this.clonePosition();
		this.bump();
		var r = this.parseTagName();
		if (this.bumpSpace(), this.bumpIf("/>")) return {
			val: {
				type: H.literal,
				value: `<${r}/>`,
				location: U(n, this.clonePosition())
			},
			err: null
		};
		if (this.bumpIf(">")) {
			var i = this.parseMessage(e + 1, t, !0);
			if (i.err) return i;
			var a = i.val, o = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !js(this.char())) return this.error(V.INVALID_TAG, U(o, this.clonePosition()));
				var s = this.clonePosition();
				return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: H.tag,
						value: r,
						children: a,
						location: U(n, this.clonePosition())
					},
					err: null
				} : this.error(V.INVALID_TAG, U(o, this.clonePosition()))) : this.error(V.UNMATCHED_CLOSING_TAG, U(s, this.clonePosition()));
			}
			return this.error(V.UNCLOSED_TAG, U(n, this.clonePosition()));
		}
		return this.error(V.INVALID_TAG, U(n, this.clonePosition()));
	}, e.prototype.parseTagName = function() {
		var e = this.offset();
		for (this.bump(); !this.isEOF() && Ms(this.char());) this.bump();
		return this.message.slice(e, this.offset());
	}, e.prototype.parseLiteral = function(e, t) {
		for (var n = this.clonePosition(), r = "";;) {
			var i = this.tryParseQuote(t);
			if (i) r += i;
			else {
				var a = this.tryParseUnquoted(e, t);
				if (a) r += a;
				else {
					var o = this.tryParseLeftAngleBracket();
					if (!o) break;
					r += o;
				}
			}
		}
		var s = U(n, this.clonePosition());
		return {
			val: {
				type: H.literal,
				value: r,
				location: s
			},
			err: null
		};
	}, e.prototype.tryParseLeftAngleBracket = function() {
		return this.isEOF() || this.char() !== 60 || !this.ignoreTag && (js(e = this.peek() || 0) || e === 47) ? null : (this.bump(), "<");
		var e;
	}, e.prototype.tryParseQuote = function(e) {
		if (this.isEOF() || this.char() !== 39) return null;
		switch (this.peek()) {
			case 39: return this.bump(), this.bump(), "'";
			case 123:
			case 60:
			case 62:
			case 125: break;
			case 35:
				if (e === "plural" || e === "selectordinal") break;
				return null;
			default: return null;
		}
		this.bump();
		var t = [this.char()];
		for (this.bump(); !this.isEOF();) {
			var n = this.char();
			if (n === 39) {
				if (this.peek() !== 39) {
					this.bump();
					break;
				}
				t.push(39), this.bump();
			} else t.push(n);
			this.bump();
		}
		return ws.apply(void 0, t);
	}, e.prototype.tryParseUnquoted = function(e, t) {
		if (this.isEOF()) return null;
		var n = this.char();
		return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), ws(n));
	}, e.prototype.parseArgument = function(e, t) {
		var n = this.clonePosition();
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(V.EXPECT_ARGUMENT_CLOSING_BRACE, U(n, this.clonePosition()));
		if (this.char() === 125) return this.bump(), this.error(V.EMPTY_ARGUMENT, U(n, this.clonePosition()));
		var r = this.parseIdentifierIfPossible().value;
		if (!r) return this.error(V.MALFORMED_ARGUMENT, U(n, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(V.EXPECT_ARGUMENT_CLOSING_BRACE, U(n, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: H.argument,
					value: r,
					location: U(n, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(V.EXPECT_ARGUMENT_CLOSING_BRACE, U(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
			default: return this.error(V.MALFORMED_ARGUMENT, U(n, this.clonePosition()));
		}
	}, e.prototype.parseIdentifierIfPossible = function() {
		var e = this.clonePosition(), t = this.offset(), n = Ss(this.message, t), r = t + n.length;
		return this.bumpTo(r), {
			value: n,
			location: U(e, this.clonePosition())
		};
	}, e.prototype.parseArgumentOptions = function(e, t, n, r) {
		var i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
		switch (a) {
			case "": return this.error(V.EXPECT_ARGUMENT_TYPE, U(i, o));
			case "number":
			case "date":
			case "time":
				this.bumpSpace();
				var s = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					var c = this.clonePosition();
					if ((g = this.parseSimpleArgStyleIfPossible()).err) return g;
					if ((f = Os(g.val)).length === 0) return this.error(V.EXPECT_ARGUMENT_STYLE, U(this.clonePosition(), this.clonePosition()));
					s = {
						style: f,
						styleLocation: U(c, this.clonePosition())
					};
				}
				if ((_ = this.tryParseArgumentClose(r)).err) return _;
				var l = U(r, this.clonePosition());
				if (s && Cs(s?.style, "::", 0)) {
					var u = Ds(s.style.slice(2));
					if (a === "number") return (g = this.parseNumberSkeletonFromString(u, s.styleLocation)).err ? g : {
						val: {
							type: H.number,
							value: n,
							location: l,
							style: g.val
						},
						err: null
					};
					if (u.length === 0) return this.error(V.EXPECT_DATE_TIME_SKELETON, l);
					var d = u;
					this.locale && (d = function(e, t) {
						for (var n = "", r = 0; r < e.length; r++) {
							var i = e.charAt(r);
							if (i === "j") {
								for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
								var o = 1 + (1 & a), s = a < 2 ? 1 : 3 + (a >> 1), c = ds(t);
								for (c != "H" && c != "k" || (s = 0); s-- > 0;) n += "a";
								for (; o-- > 0;) n = c + n;
							} else n += i === "J" ? "H" : i;
						}
						return n;
					}(u, this.locale));
					var f = {
						type: Jo.dateTime,
						pattern: d,
						location: s.styleLocation,
						parsedOptions: this.shouldParseSkeletons ? Qo(d) : {}
					};
					return {
						val: {
							type: a === "date" ? H.date : H.time,
							value: n,
							location: l,
							style: f
						},
						err: null
					};
				}
				return {
					val: {
						type: a === "number" ? H.number : a === "date" ? H.date : H.time,
						value: n,
						location: l,
						style: s?.style ?? null
					},
					err: null
				};
			case "plural":
			case "selectordinal":
			case "select":
				var p = this.clonePosition();
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(V.EXPECT_SELECT_ARGUMENT_OPTIONS, U(p, B({}, p)));
				this.bumpSpace();
				var m = this.parseIdentifierIfPossible(), h = 0;
				if (a !== "select" && m.value === "offset") {
					if (!this.bumpIf(":")) return this.error(V.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, U(this.clonePosition(), this.clonePosition()));
					var g;
					if (this.bumpSpace(), (g = this.tryParseDecimalInteger(V.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, V.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return g;
					this.bumpSpace(), m = this.parseIdentifierIfPossible(), h = g.val;
				}
				var _, v = this.tryParsePluralOrSelectOptions(e, a, t, m);
				if (v.err) return v;
				if ((_ = this.tryParseArgumentClose(r)).err) return _;
				var y = U(r, this.clonePosition());
				return a === "select" ? {
					val: {
						type: H.select,
						value: n,
						options: Ts(v.val),
						location: y
					},
					err: null
				} : {
					val: {
						type: H.plural,
						value: n,
						options: Ts(v.val),
						offset: h,
						pluralType: a === "plural" ? "cardinal" : "ordinal",
						location: y
					},
					err: null
				};
			default: return this.error(V.INVALID_ARGUMENT_TYPE, U(i, o));
		}
	}, e.prototype.tryParseArgumentClose = function(e) {
		return this.isEOF() || this.char() !== 125 ? this.error(V.EXPECT_ARGUMENT_CLOSING_BRACE, U(e, this.clonePosition())) : (this.bump(), {
			val: !0,
			err: null
		});
	}, e.prototype.parseSimpleArgStyleIfPossible = function() {
		for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
			case 39:
				this.bump();
				var n = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(V.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, U(n, this.clonePosition()));
				this.bump();
				break;
			case 123:
				e += 1, this.bump();
				break;
			case 125:
				if (!(e > 0)) return {
					val: this.message.slice(t.offset, this.offset()),
					err: null
				};
				--e;
				break;
			default: this.bump();
		}
		return {
			val: this.message.slice(t.offset, this.offset()),
			err: null
		};
	}, e.prototype.parseNumberSkeletonFromString = function(e, t) {
		var n = [];
		try {
			n = function(e) {
				if (e.length === 0) throw Error("Number skeleton cannot be empty");
				for (var t = [], n = 0, r = e.split($o).filter(function(e) {
					return e.length > 0;
				}); n < r.length; n++) {
					var i = r[n].split("/");
					if (i.length === 0) throw Error("Invalid number skeleton");
					for (var a = i[0], o = i.slice(1), s = 0, c = o; s < c.length; s++) if (c[s].length === 0) throw Error("Invalid number skeleton");
					t.push({
						stem: a,
						options: o
					});
				}
				return t;
			}(e);
		} catch {
			return this.error(V.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: Jo.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? ls(n) : {}
			},
			err: null
		};
	}, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
		for (var i, a = !1, o = [], s = /* @__PURE__ */ new Set(), c = r.value, l = r.location;;) {
			if (c.length === 0) {
				var u = this.clonePosition();
				if (t === "select" || !this.bumpIf("=")) break;
				var d = this.tryParseDecimalInteger(V.EXPECT_PLURAL_ARGUMENT_SELECTOR, V.INVALID_PLURAL_ARGUMENT_SELECTOR);
				if (d.err) return d;
				l = U(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
			}
			if (s.has(c)) return this.error(t === "select" ? V.DUPLICATE_SELECT_ARGUMENT_SELECTOR : V.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
			c === "other" && (a = !0), this.bumpSpace();
			var f = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(t === "select" ? V.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : V.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, U(this.clonePosition(), this.clonePosition()));
			var p = this.parseMessage(e + 1, t, n);
			if (p.err) return p;
			var m = this.tryParseArgumentClose(f);
			if (m.err) return m;
			o.push([c, {
				value: p.val,
				location: U(f, this.clonePosition())
			}]), s.add(c), this.bumpSpace(), c = (i = this.parseIdentifierIfPossible()).value, l = i.location;
		}
		return o.length === 0 ? this.error(t === "select" ? V.EXPECT_SELECT_ARGUMENT_SELECTOR : V.EXPECT_PLURAL_ARGUMENT_SELECTOR, U(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(V.MISSING_OTHER_CLAUSE, U(this.clonePosition(), this.clonePosition())) : {
			val: o,
			err: null
		};
	}, e.prototype.tryParseDecimalInteger = function(e, t) {
		var n = 1, r = this.clonePosition();
		this.bumpIf("+") || this.bumpIf("-") && (n = -1);
		for (var i = !1, a = 0; !this.isEOF();) {
			var o = this.char();
			if (!(o >= 48 && o <= 57)) break;
			i = !0, a = 10 * a + (o - 48), this.bump();
		}
		var s = U(r, this.clonePosition());
		return i ? bs(a *= n) ? {
			val: a,
			err: null
		} : this.error(t, s) : this.error(e, s);
	}, e.prototype.offset = function() {
		return this.position.offset;
	}, e.prototype.isEOF = function() {
		return this.offset() === this.message.length;
	}, e.prototype.clonePosition = function() {
		return {
			offset: this.position.offset,
			line: this.position.line,
			column: this.position.column
		};
	}, e.prototype.char = function() {
		var e = this.position.offset;
		if (e >= this.message.length) throw Error("out of bound");
		var t = Es(this.message, e);
		if (t === void 0) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
		return t;
	}, e.prototype.error = function(e, t) {
		return {
			val: null,
			err: {
				kind: e,
				message: this.message,
				location: t
			}
		};
	}, e.prototype.bump = function() {
		if (!this.isEOF()) {
			var e = this.char();
			e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
		}
	}, e.prototype.bumpIf = function(e) {
		if (Cs(this.message, e, this.offset())) {
			for (var t = 0; t < e.length; t++) this.bump();
			return !0;
		}
		return !1;
	}, e.prototype.bumpUntil = function(e) {
		var t = this.offset(), n = this.message.indexOf(e, t);
		return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
	}, e.prototype.bumpTo = function(e) {
		if (this.offset() > e) throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
		for (e = Math.min(e, this.message.length);;) {
			var t = this.offset();
			if (t === e) break;
			if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
			if (this.bump(), this.isEOF()) break;
		}
	}, e.prototype.bumpSpace = function() {
		for (; !this.isEOF() && Ns(this.char());) this.bump();
	}, e.prototype.peek = function() {
		if (this.isEOF()) return null;
		var e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}, e;
})();
function js(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Ms(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Ns(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Ps(e) {
	return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
var Fs, W = {};
function Is() {
	return Fs || (Fs = 1, Object.defineProperty(W, "__esModule", { value: !0 }), W.SKELETON_TYPE = W.TYPE = void 0, W.isLiteralElement = function(t) {
		return t.type === e.literal;
	}, W.isArgumentElement = function(t) {
		return t.type === e.argument;
	}, W.isNumberElement = function(t) {
		return t.type === e.number;
	}, W.isDateElement = function(t) {
		return t.type === e.date;
	}, W.isTimeElement = function(t) {
		return t.type === e.time;
	}, W.isSelectElement = function(t) {
		return t.type === e.select;
	}, W.isPluralElement = function(t) {
		return t.type === e.plural;
	}, W.isPoundElement = function(t) {
		return t.type === e.pound;
	}, W.isTagElement = function(t) {
		return t.type === e.tag;
	}, W.isNumberSkeleton = function(e) {
		return !(!e || typeof e != "object" || e.type !== t.number);
	}, W.isDateTimeSkeleton = function(e) {
		return !(!e || typeof e != "object" || e.type !== t.dateTime);
	}, W.createLiteralElement = function(t) {
		return {
			type: e.literal,
			value: t
		};
	}, W.createNumberElement = function(t, n) {
		return {
			type: e.number,
			value: t,
			style: n
		};
	}, function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	}(e || (W.TYPE = e = {})), function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	}(t || (W.SKELETON_TYPE = t = {}))), W;
	var e, t;
}
var Ls;
Is();
var Rs = {}, zs = function(e) {
	if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
	var t = e.default;
	if (typeof t == "function") {
		var n = function e() {
			var n = !1;
			try {
				n = this instanceof e;
			} catch {}
			return n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
		};
		n.prototype = t.prototype;
	} else n = {};
	return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
		var r = Object.getOwnPropertyDescriptor(e, t);
		Object.defineProperty(n, t, r.get ? r : {
			enumerable: !0,
			get: function() {
				return e[t];
			}
		});
	}), n;
}(Yo);
(function() {
	if (Ls) return Rs;
	Ls = 1, Object.defineProperty(Rs, "__esModule", { value: !0 }), Rs.printAST = n, Rs.doPrintAST = r, Rs.printDateTimeSkeleton = o;
	var e = zs, t = Is();
	function n(e) {
		return r(e, !1);
	}
	function r(s, c) {
		return s.map(function(l, u) {
			return (0, t.isLiteralElement)(l) ? function(e, t, n, r) {
				var a = e.value;
				return n || a[0] !== "'" || (a = `''${a.slice(1)}`), r || a[a.length - 1] !== "'" || (a = `${a.slice(0, a.length - 1)}''`), a = i(a), t ? a.replace("#", "'#'") : a;
			}(l, c, u === 0, u === s.length - 1) : (0, t.isArgumentElement)(l) ? function(e) {
				return `{${e.value}}`;
			}(l) : (0, t.isDateElement)(l) || (0, t.isTimeElement)(l) || (0, t.isNumberElement)(l) ? function(e) {
				return `{${e.value}, ${t.TYPE[e.type]}${e.style ? `, ${typeof (n = e.style) == "string" ? i(n) : n.type === t.SKELETON_TYPE.dateTime ? `::${o(n)}` : `::${n.tokens.map(a).join(" ")}`}` : ""}}`;
				var n;
			}(l) : (0, t.isPluralElement)(l) ? function(t) {
				var n = t.pluralType === "cardinal" ? "plural" : "selectordinal";
				return `{${[
					t.value,
					n,
					e.__spreadArray([t.offset ? `offset:${t.offset}` : ""], Object.keys(t.options).map(function(e) {
						return `${e}{${r(t.options[e].value, !0)}}`;
					}), !0).filter(Boolean).join(" ")
				].join(",")}}`;
			}(l) : (0, t.isSelectElement)(l) ? function(e) {
				return `{${[
					e.value,
					"select",
					Object.keys(e.options).map(function(t) {
						return `${t}{${r(e.options[t].value, !1)}}`;
					}).join(" ")
				].join(",")}}`;
			}(l) : (0, t.isPoundElement)(l) ? "#" : (0, t.isTagElement)(l) ? function(e) {
				return `<${e.value}>${n(e.children)}</${e.value}>`;
			}(l) : void 0;
		}).join("");
	}
	function i(e) {
		return e.replace(/([{}](?:[\s\S]*[{}])?)/, "'$1'");
	}
	function a(e) {
		var t = e.stem, n = e.options;
		return n.length === 0 ? t : `${t}${n.map(function(e) {
			return `/${e}`;
		}).join("")}`;
	}
	function o(e) {
		return e.pattern;
	}
	return Rs;
})();
var Bs = "_gt_";
RegExp(`^${Bs}\\d+$`), RegExp(`^${Bs}$`);
var Vs = "generaltranslation.locale";
e.use;
function Hs(e) {
	return l(u, { router: e.router });
}
var Us = f(({ request: e, router: t, responseHeaders: n }) => p({
	request: e,
	router: t,
	responseHeaders: n,
	children: l(Hs, { router: t })
})), Ws = f(({ router: e, responseHeaders: t }) => m({
	router: e,
	responseHeaders: t,
	children: l(Hs, { router: e })
})), Gs = se({
	StartServer: () => Hs,
	defaultRenderHandler: () => Ws,
	defaultStreamHandler: () => Us
});
import * as Ks from "@tanstack/start-server-core";
ce(Gs, Ks);
var qs = se({
	StartServer: () => Hs,
	defaultRenderHandler: () => Ws,
	defaultStreamHandler: () => Us
});
ce(qs, Gs);
var Js = {
	af: ["af"],
	am: ["am"],
	ar: [
		"ar",
		"ar-AE",
		"ar-EG",
		"ar-LB",
		"ar-MA",
		"ar-SA"
	],
	bg: ["bg"],
	bn: ["bn"],
	bs: ["bs"],
	ca: ["ca"],
	cs: ["cs"],
	cy: ["cy"],
	da: ["da"],
	de: [
		"de",
		"de-DE",
		"de-AT",
		"de-CH"
	],
	el: [
		"el",
		"el-EL",
		"el-CY"
	],
	en: [
		"en",
		"en-AU",
		"en-CA",
		"en-GB",
		"en-NZ",
		"en-US"
	],
	es: [
		"es",
		"es-ES",
		"es-419",
		"es-AR",
		"es-CL",
		"es-CO",
		"es-MX",
		"es-PE",
		"es-US",
		"es-VE"
	],
	et: ["et"],
	fa: ["fa"],
	fi: ["fi"],
	fil: ["fil"],
	fr: [
		"fr",
		"fr-FR",
		"fr-BE",
		"fr-CM",
		"fr-CA",
		"fr-CH",
		"fr-SN"
	],
	gu: ["gu"],
	ha: ["ha"],
	hi: ["hi"],
	he: ["he"],
	hr: ["hr"],
	hu: ["hu"],
	hy: ["hy"],
	id: ["id"],
	ig: ["ig"],
	is: ["is"],
	it: [
		"it",
		"it-IT",
		"it-CH"
	],
	ja: ["ja"],
	ka: ["ka"],
	kk: ["kk"],
	kn: ["kn"],
	ko: ["ko"],
	la: ["la"],
	lt: ["lt"],
	lv: ["lv"],
	mk: ["mk"],
	ml: ["ml"],
	mn: ["mn"],
	mr: ["mr"],
	ms: ["ms"],
	my: ["my"],
	nl: [
		"nl",
		"nl-NL",
		"nl-BE"
	],
	nb: ["nb", "nb-NO"],
	no: ["no", "no-NO"],
	nn: ["nn", "nn-NO"],
	pa: ["pa"],
	pl: ["pl"],
	pt: [
		"pt",
		"pt-BR",
		"pt-PT"
	],
	ro: ["ro"],
	ru: ["ru"],
	sk: ["sk"],
	sl: ["sl"],
	so: ["so"],
	sq: ["sq"],
	sr: ["sr"],
	sv: ["sv"],
	sw: [
		"sw",
		"sw-KE",
		"sw-TZ"
	],
	ta: ["ta"],
	te: ["te"],
	th: ["th"],
	tl: ["tl"],
	tr: ["tr"],
	uk: ["uk"],
	ur: ["ur"],
	uz: ["uz"],
	vi: ["vi"],
	yo: ["yo"],
	zh: [
		"zh",
		"zh-CN",
		"zh-Hans",
		"zh-Hant",
		"zh-HK",
		"zh-SG",
		"zh-TW"
	],
	qbr: ["qbr"]
};
function Ys(e) {
	if (!fi(e)) return null;
	e = mi(e);
	let { languageCode: t, ...n } = sa(e);
	if (Js[t]?.length) {
		let r = Js[t], i = ({ locale: e, languageCode: t, minimizedCode: n, regionCode: i, scriptCode: a }) => {
			let o = [
				e,
				`${t}-${i}`,
				`${t}-${a}`,
				n
			];
			for (let e of o) if (r.includes(e)) return e;
			return null;
		};
		return i({
			locale: e,
			languageCode: t,
			...n
		}) || i({
			locale: t,
			...sa(t)
		});
	}
	return null;
}
var Xs = {
	variable: "value",
	number: "n",
	datetime: "date",
	currency: "cost",
	"relative-time": "time"
};
function Zs(e = {}, t) {
	return e.name ? e.name : `_gt_${Xs[t] || "value"}_${e["data-_gt"]?.id}`;
}
var Qs = "en", $s = "DEFAULT_TERMINATOR_KEY", ec = {
	ellipsis: {
		fr: {
			terminator: "…",
			separator: " "
		},
		zh: {
			terminator: "……",
			separator: void 0
		},
		ja: {
			terminator: "……",
			separator: void 0
		},
		[$s]: {
			terminator: "…",
			separator: void 0
		}
	},
	none: { [$s]: {
		terminator: void 0,
		separator: void 0
	} }
}, tc = {
	Collator: Intl.Collator,
	DateTimeFormat: Intl.DateTimeFormat,
	DisplayNames: Intl.DisplayNames,
	ListFormat: Intl.ListFormat,
	Locale: Intl.Locale,
	NumberFormat: Intl.NumberFormat,
	PluralRules: Intl.PluralRules,
	RelativeTimeFormat: Intl.RelativeTimeFormat,
	Segmenter: Intl.Segmenter,
	CutoffFormat: class {
		constructor(e, t = {}) {
			try {
				let t = e ? Array.isArray(e) ? e.map((e) => String(e)) : [String(e)] : ["en"], n = Intl.getCanonicalLocales(t);
				this.locale = n.length ? n[0] : "en";
			} catch {
				this.locale = "en";
			}
			if (!ec[t.style ?? "ellipsis"]) throw Error(((e) => `generaltranslation Formatting Error: Invalid cutoff style: ${e}.`)(t.style ?? "ellipsis"));
			let n, r;
			if (t.maxChars !== void 0) {
				n = t.style ?? "ellipsis";
				let e = new Intl.Locale(this.locale).language;
				r = ec[n][e] || ec[n].DEFAULT_TERMINATOR_KEY;
			}
			let i = t.terminator ?? r?.terminator, a = i == null ? void 0 : t.separator ?? r?.separator;
			this.additionLength = (i?.length ?? 0) + (a?.length ?? 0), t.maxChars !== void 0 && Math.abs(t.maxChars) < this.additionLength && (i = void 0, a = void 0), this.options = {
				maxChars: t.maxChars,
				style: n,
				terminator: i,
				separator: a
			};
		}
		format(e) {
			return this.formatToParts(e).join("");
		}
		formatToParts(e) {
			let { maxChars: t, terminator: n, separator: r } = this.options, i = t === void 0 || Math.abs(t) >= e.length ? t : t >= 0 ? Math.max(0, t - this.additionLength) : Math.min(0, t + this.additionLength), a = i !== void 0 && i > -1 ? e.slice(0, i) : e.slice(i);
			return t == null || i == null || i === 0 || n == null || e.length <= Math.abs(t) ? [a] : i > 0 ? r == null ? [a, n] : [
				a,
				r,
				n
			] : r == null ? [n, a] : [
				n,
				r,
				a
			];
		}
		resolvedOptions() {
			return this.options;
		}
	}
};
new class {
	constructor() {
		this.cache = {};
	}
	_generateKey(e, t = {}) {
		return `${e ? Array.isArray(e) ? e.map((e) => String(e)).join(",") : String(e) : "undefined"}:${t ? JSON.stringify(t, Object.keys(t).sort()) : "{}"}`;
	}
	get(e, ...t) {
		let [n = "en", r = {}] = t, i = this._generateKey(n, r), a = this.cache[e]?.[i];
		return a === void 0 && (a = new tc[e](...t), this.cache[e] || (this.cache[e] = {}), this.cache[e][i] = a), a;
	}
}();
var nc = "https://cdn.gtx.dev", rc = "https://runtime2.gtx.dev";
function ic(e) {
	if (e === void 0) return;
	if (e === null) return "null";
	if (typeof e == "number") return isFinite(e) ? "" + e : "null";
	if (typeof e != "object") return JSON.stringify(e);
	if (Array.isArray(e)) {
		let t = "[";
		for (let n = 0; n < e.length; n++) n && (t += ","), t += ic(e[n]) || "null";
		return t + "]";
	}
	let t = Object.keys(e).sort(), n = "";
	for (let r of t) {
		let t = ic(e[r]);
		t && (n && (n += ","), n += JSON.stringify(r) + ":" + t);
	}
	return "{" + n + "}";
}
function ac(e) {
	return ic(e) ?? "";
}
function oc(e) {
	let t = e;
	if (t && typeof t == "object" && typeof t.k == "string") {
		let e = Object.keys(t);
		if (e.length === 1 || e.length === 2 && (typeof t.i == "number" || typeof t.v == "string") || e.length === 3 && typeof t.v == "string" && typeof t.i == "number") return !0;
	}
	return !1;
}
function sc(e, t, n = "") {
	let r = (i = e) instanceof Uint8Array || ArrayBuffer.isView(i) && i.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in i && i.BYTES_PER_ELEMENT === 1;
	var i;
	let a = e?.length;
	if (!r || t !== void 0) {
		let t = (n && `"${n}" `) + "expected Uint8Array, got " + (r ? `length=${a}` : "type=" + typeof e);
		throw r ? RangeError(t) : TypeError(t);
	}
	return e;
}
function cc(e, t = !0) {
	if (e.destroyed) throw Error("Hash instance has been destroyed");
	if (t && e.finished) throw Error("Hash#digest() has already been called");
}
function lc(...e) {
	for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function uc(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function dc(e, t) {
	return e << 32 - t | e >>> t;
}
var fc = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", pc = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function mc(e, t = {}) {
	let n = (t, n) => e(n).update(t).digest(), r = e(void 0);
	return n.outputLen = r.outputLen, n.blockLen = r.blockLen, n.canXOF = r.canXOF, n.create = (t) => e(t), Object.assign(n, t), Object.freeze(n);
}
var hc = (e) => ({ oid: Uint8Array.from([
	6,
	9,
	96,
	134,
	72,
	1,
	101,
	3,
	4,
	2,
	e
]) });
function gc(e, t, n) {
	return e & t ^ ~e & n;
}
function _c(e, t, n) {
	return e & t ^ e & n ^ t & n;
}
var vc = class {
	blockLen;
	outputLen;
	canXOF = !1;
	padOffset;
	isLE;
	buffer;
	view;
	finished = !1;
	length = 0;
	pos = 0;
	destroyed = !1;
	constructor(e, t, n, r) {
		this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = uc(this.buffer);
	}
	update(e) {
		cc(this), sc(e);
		let { view: t, buffer: n, blockLen: r } = this, i = e.length;
		for (let a = 0; a < i;) {
			let o = Math.min(r - this.pos, i - a);
			if (o === r) {
				let t = uc(e);
				for (; r <= i - a; a += r) this.process(t, a);
				continue;
			}
			n.set(e.subarray(a, a + o), this.pos), this.pos += o, a += o, this.pos === r && (this.process(t, 0), this.pos = 0);
		}
		return this.length += e.length, this.roundClean(), this;
	}
	digestInto(e) {
		cc(this), function(e, t) {
			sc(e, void 0, "digestInto() output");
			let n = t.outputLen;
			if (e.length < n) throw RangeError("\"digestInto() output\" expected to be of length >=" + n);
		}(e, this), this.finished = !0;
		let { buffer: t, view: n, blockLen: r, isLE: i } = this, { pos: a } = this;
		t[a++] = 128, lc(this.buffer.subarray(a)), this.padOffset > r - a && (this.process(n, 0), a = 0);
		for (let e = a; e < r; e++) t[e] = 0;
		n.setBigUint64(r - 8, BigInt(8 * this.length), i), this.process(n, 0);
		let o = uc(e), s = this.outputLen;
		if (s % 4) throw Error("_sha2: outputLen must be aligned to 32bit");
		let c = s / 4, l = this.get();
		if (c > l.length) throw Error("_sha2: outputLen bigger than state");
		for (let e = 0; e < c; e++) o.setUint32(4 * e, l[e], i);
	}
	digest() {
		let { buffer: e, outputLen: t } = this;
		this.digestInto(e);
		let n = e.slice(0, t);
		return this.destroy(), n;
	}
	_cloneInto(e) {
		e ||= new this.constructor(), e.set(...this.get());
		let { blockLen: t, buffer: n, length: r, finished: i, destroyed: a, pos: o } = this;
		return e.destroyed = a, e.finished = i, e.length = r, e.pos = o, r % t && e.buffer.set(n), e;
	}
	clone() {
		return this._cloneInto();
	}
}, yc = Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), bc = Uint32Array.from([
	1116352408,
	1899447441,
	3049323471,
	3921009573,
	961987163,
	1508970993,
	2453635748,
	2870763221,
	3624381080,
	310598401,
	607225278,
	1426881987,
	1925078388,
	2162078206,
	2614888103,
	3248222580,
	3835390401,
	4022224774,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	2554220882,
	2821834349,
	2952996808,
	3210313671,
	3336571891,
	3584528711,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	2177026350,
	2456956037,
	2730485921,
	2820302411,
	3259730800,
	3345764771,
	3516065817,
	3600352804,
	4094571909,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	2227730452,
	2361852424,
	2428436474,
	2756734187,
	3204031479,
	3329325298
]), xc = /* @__PURE__ */ new Uint32Array(64), Sc = class extends vc {
	constructor(e) {
		super(64, e, 8, !1);
	}
	get() {
		let { A: e, B: t, C: n, D: r, E: i, F: a, G: o, H: s } = this;
		return [
			e,
			t,
			n,
			r,
			i,
			a,
			o,
			s
		];
	}
	set(e, t, n, r, i, a, o, s) {
		this.A = 0 | e, this.B = 0 | t, this.C = 0 | n, this.D = 0 | r, this.E = 0 | i, this.F = 0 | a, this.G = 0 | o, this.H = 0 | s;
	}
	process(e, t) {
		for (let n = 0; n < 16; n++, t += 4) xc[n] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			let t = xc[e - 15], n = xc[e - 2], r = dc(t, 7) ^ dc(t, 18) ^ t >>> 3, i = dc(n, 17) ^ dc(n, 19) ^ n >>> 10;
			xc[e] = i + xc[e - 7] + r + xc[e - 16] | 0;
		}
		let { A: n, B: r, C: i, D: a, E: o, F: s, G: c, H: l } = this;
		for (let e = 0; e < 64; e++) {
			let t = l + (dc(o, 6) ^ dc(o, 11) ^ dc(o, 25)) + gc(o, s, c) + bc[e] + xc[e] | 0, u = (dc(n, 2) ^ dc(n, 13) ^ dc(n, 22)) + _c(n, r, i) | 0;
			l = c, c = s, s = o, o = a + t | 0, a = i, i = r, r = n, n = t + u | 0;
		}
		n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, o = o + this.E | 0, s = s + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(n, r, i, a, o, s, c, l);
	}
	roundClean() {
		lc(xc);
	}
	destroy() {
		this.destroyed = !0, this.set(0, 0, 0, 0, 0, 0, 0, 0), lc(this.buffer);
	}
}, Cc = class extends Sc {
	A = 0 | yc[0];
	B = 0 | yc[1];
	C = 0 | yc[2];
	D = 0 | yc[3];
	E = 0 | yc[4];
	F = 0 | yc[5];
	G = 0 | yc[6];
	H = 0 | yc[7];
	constructor() {
		super(32);
	}
}, wc = mc(() => new Cc(), hc(1)), Tc = function(e, t) {
	return Tc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, Tc(e, t);
};
function Ec(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	function n() {
		this.constructor = e;
	}
	Tc(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var G = function() {
	return G = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, G.apply(this, arguments);
};
function Dc(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") {
		var i = 0;
		for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	}
	return n;
}
function Oc(e, t, n, r) {
	var i, a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
	return a > 3 && o && Object.defineProperty(t, n, o), o;
}
function kc(e, t) {
	return function(n, r) {
		t(n, r, e);
	};
}
function Ac(e, t, n, r, i, a) {
	function o(e) {
		if (e !== void 0 && typeof e != "function") throw TypeError("Function expected");
		return e;
	}
	for (var s, c = r.kind, l = c === "getter" ? "get" : c === "setter" ? "set" : "value", u = !t && e ? r.static ? e : e.prototype : null, d = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}), f = !1, p = n.length - 1; p >= 0; p--) {
		var m = {};
		for (var h in r) m[h] = h === "access" ? {} : r[h];
		for (var h in r.access) m.access[h] = r.access[h];
		m.addInitializer = function(e) {
			if (f) throw TypeError("Cannot add initializers after decoration has completed");
			a.push(o(e || null));
		};
		var g = (0, n[p])(c === "accessor" ? {
			get: d.get,
			set: d.set
		} : d[l], m);
		if (c === "accessor") {
			if (g === void 0) continue;
			if (typeof g != "object" || !g) throw TypeError("Object expected");
			(s = o(g.get)) && (d.get = s), (s = o(g.set)) && (d.set = s), (s = o(g.init)) && i.unshift(s);
		} else (s = o(g)) && (c === "field" ? i.unshift(s) : d[l] = s);
	}
	u && Object.defineProperty(u, r.name, d), f = !0;
}
function jc(e, t, n) {
	for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
	return r ? n : void 0;
}
function Mc(e) {
	return typeof e == "symbol" ? e : `${e}`;
}
function Nc(e, t, n) {
	return typeof t == "symbol" && (t = t.description ? `[${t.description}]` : ""), Object.defineProperty(e, "name", {
		configurable: !0,
		value: n ? `${n} ${t}` : t
	});
}
function Pc(e, t) {
	if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function Fc(e, t, n, r) {
	return new (n ||= Promise)(function(i, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			var t;
			e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
				e(t);
			})).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function Ic(e, t) {
	var n, r, i, a = {
		label: 0,
		sent: function() {
			if (1 & i[0]) throw i[1];
			return i[1];
		},
		trys: [],
		ops: []
	}, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
	return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
		return this;
	}), o;
	function s(s) {
		return function(c) {
			return function(s) {
				if (n) throw TypeError("Generator is already executing.");
				for (; o && (o = 0, s[0] && (a = 0)), a;) try {
					if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
					switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
						case 0:
						case 1:
							i = s;
							break;
						case 4: return a.label++, {
							value: s[1],
							done: !1
						};
						case 5:
							a.label++, r = s[1], s = [0];
							continue;
						case 7:
							s = a.ops.pop(), a.trys.pop();
							continue;
						default:
							if (i = a.trys, !((i = i.length > 0 && i[i.length - 1]) || s[0] !== 6 && s[0] !== 2)) {
								a = 0;
								continue;
							}
							if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
								a.label = s[1];
								break;
							}
							if (s[0] === 6 && a.label < i[1]) {
								a.label = i[1], i = s;
								break;
							}
							if (i && a.label < i[2]) {
								a.label = i[2], a.ops.push(s);
								break;
							}
							i[2] && a.ops.pop(), a.trys.pop();
							continue;
					}
					s = t.call(e, a);
				} catch (e) {
					s = [6, e], r = 0;
				} finally {
					n = i = 0;
				}
				if (5 & s[0]) throw s[1];
				return {
					value: s[0] ? s[1] : void 0,
					done: !0
				};
			}([s, c]);
		};
	}
}
var Lc = Object.create ? function(e, t, n, r) {
	r === void 0 && (r = n);
	var i = Object.getOwnPropertyDescriptor(t, n);
	i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
		enumerable: !0,
		get: function() {
			return t[n];
		}
	}), Object.defineProperty(e, r, i);
} : function(e, t, n, r) {
	r === void 0 && (r = n), e[r] = t[n];
};
function Rc(e, t) {
	for (var n in e) n === "default" || Object.prototype.hasOwnProperty.call(t, n) || Lc(t, e, n);
}
function zc(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Bc(e, t) {
	var n = typeof Symbol == "function" && e[Symbol.iterator];
	if (!n) return e;
	var r, i, a = n.call(e), o = [];
	try {
		for (; (t === void 0 || t-- > 0) && !(r = a.next()).done;) o.push(r.value);
	} catch (e) {
		i = { error: e };
	} finally {
		try {
			r && !r.done && (n = a.return) && n.call(a);
		} finally {
			if (i) throw i.error;
		}
	}
	return o;
}
function Vc() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Bc(arguments[t]));
	return e;
}
function Hc() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	var r = Array(e), i = 0;
	for (t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function Uc(e, t, n) {
	if (n || arguments.length === 2) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r ||= Array.prototype.slice.call(t, 0, i), r[i] = t[i]);
	return e.concat(r || Array.prototype.slice.call(t));
}
function Wc(e) {
	return this instanceof Wc ? (this.v = e, this) : new Wc(e);
}
function Gc(e, t, n) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var r, i = n.apply(e, t || []), a = [];
	return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", function(e) {
		return function(t) {
			return Promise.resolve(t).then(e, l);
		};
	}), r[Symbol.asyncIterator] = function() {
		return this;
	}, r;
	function o(e, t) {
		i[e] && (r[e] = function(t) {
			return new Promise(function(n, r) {
				a.push([
					e,
					t,
					n,
					r
				]) > 1 || s(e, t);
			});
		}, t && (r[e] = t(r[e])));
	}
	function s(e, t) {
		try {
			(n = i[e](t)).value instanceof Wc ? Promise.resolve(n.value.v).then(c, l) : u(a[0][2], n);
		} catch (e) {
			u(a[0][3], e);
		}
		var n;
	}
	function c(e) {
		s("next", e);
	}
	function l(e) {
		s("throw", e);
	}
	function u(e, t) {
		e(t), a.shift(), a.length && s(a[0][0], a[0][1]);
	}
}
function Kc(e) {
	var t = {}, n;
	return r("next"), r("throw", function(e) {
		throw e;
	}), r("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function r(r, i) {
		t[r] = e[r] ? function(t) {
			return (n = !n) ? {
				value: Wc(e[r](t)),
				done: !1
			} : i ? i(t) : t;
		} : i;
	}
}
function qc(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var t, n = e[Symbol.asyncIterator];
	return n ? n.call(e) : (e = zc(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
		return this;
	}, t);
	function r(n) {
		t[n] = e[n] && function(t) {
			return new Promise(function(r, i) {
				(function(e, t, n, r) {
					Promise.resolve(r).then(function(t) {
						e({
							value: t,
							done: n
						});
					}, t);
				})(r, i, (t = e[n](t)).done, t.value);
			});
		};
	}
}
function Jc(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
var Yc = Object.create ? function(e, t) {
	Object.defineProperty(e, "default", {
		enumerable: !0,
		value: t
	});
} : function(e, t) {
	e.default = t;
}, Xc = function(e) {
	return Xc = Object.getOwnPropertyNames || function(e) {
		var t = [];
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
		return t;
	}, Xc(e);
};
function Zc(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (e != null) for (var n = Xc(e), r = 0; r < n.length; r++) n[r] !== "default" && Lc(t, e, n[r]);
	return Yc(t, e), t;
}
function Qc(e) {
	return e && e.__esModule ? e : { default: e };
}
function $c(e, t, n, r) {
	if (n === "a" && !r) throw TypeError("Private accessor was defined without a getter");
	if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
	return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function el(e, t, n, r, i) {
	if (r === "m") throw TypeError("Private method is not writable");
	if (r === "a" && !i) throw TypeError("Private accessor was defined without a setter");
	if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
	return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
}
function tl(e, t) {
	if (t === null || typeof t != "object" && typeof t != "function") throw TypeError("Cannot use 'in' operator on non-object");
	return typeof e == "function" ? t === e : e.has(t);
}
function nl(e, t, n) {
	if (t != null) {
		if (typeof t != "object" && typeof t != "function") throw TypeError("Object expected.");
		var r, i;
		if (n) {
			if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
			r = t[Symbol.asyncDispose];
		}
		if (r === void 0) {
			if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
			r = t[Symbol.dispose], n && (i = r);
		}
		if (typeof r != "function") throw TypeError("Object not disposable.");
		i && (r = function() {
			try {
				i.call(this);
			} catch (e) {
				return Promise.reject(e);
			}
		}), e.stack.push({
			value: t,
			dispose: r,
			async: n
		});
	} else n && e.stack.push({ async: !0 });
	return t;
}
var rl = typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
	var r = Error(n);
	return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
};
function il(e) {
	function t(t) {
		e.error = e.hasError ? new rl(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
	}
	var n, r = 0;
	return function i() {
		for (; n = e.stack.pop();) try {
			if (!n.async && r === 1) return r = 0, e.stack.push(n), Promise.resolve().then(i);
			if (n.dispose) {
				var a = n.dispose.call(n.value);
				if (n.async) return r |= 2, Promise.resolve(a).then(i, function(e) {
					return t(e), i();
				});
			} else r |= 1;
		} catch (e) {
			t(e);
		}
		if (r === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
		if (e.hasError) throw e.error;
	}();
}
function al(e, t) {
	return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, a) {
		return n ? t ? ".jsx" : ".js" : !r || i && a ? r + i + "." + a.toLowerCase() + "js" : e;
	}) : e;
}
var K, q, ol, sl = Object.freeze({
	__proto__: null,
	__addDisposableResource: nl,
	get __assign() {
		return G;
	},
	__asyncDelegator: Kc,
	__asyncGenerator: Gc,
	__asyncValues: qc,
	__await: Wc,
	__awaiter: Fc,
	__classPrivateFieldGet: $c,
	__classPrivateFieldIn: tl,
	__classPrivateFieldSet: el,
	__createBinding: Lc,
	__decorate: Oc,
	__disposeResources: il,
	__esDecorate: Ac,
	__exportStar: Rc,
	__extends: Ec,
	__generator: Ic,
	__importDefault: Qc,
	__importStar: Zc,
	__makeTemplateObject: Jc,
	__metadata: Pc,
	__param: kc,
	__propKey: Mc,
	__read: Bc,
	__rest: Dc,
	__rewriteRelativeImportExtension: al,
	__runInitializers: jc,
	__setFunctionName: Nc,
	__spread: Vc,
	__spreadArray: Uc,
	__spreadArrays: Hc,
	__values: zc,
	default: {
		__extends: Ec,
		__assign: G,
		__rest: Dc,
		__decorate: Oc,
		__param: kc,
		__esDecorate: Ac,
		__runInitializers: jc,
		__propKey: Mc,
		__setFunctionName: Nc,
		__metadata: Pc,
		__awaiter: Fc,
		__generator: Ic,
		__createBinding: Lc,
		__exportStar: Rc,
		__values: zc,
		__read: Bc,
		__spread: Vc,
		__spreadArrays: Hc,
		__spreadArray: Uc,
		__await: Wc,
		__asyncGenerator: Gc,
		__asyncDelegator: Kc,
		__asyncValues: qc,
		__makeTemplateObject: Jc,
		__importStar: Zc,
		__importDefault: Qc,
		__classPrivateFieldGet: $c,
		__classPrivateFieldSet: el,
		__classPrivateFieldIn: tl,
		__addDisposableResource: nl,
		__disposeResources: il,
		__rewriteRelativeImportExtension: al
	}
});
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(K ||= {}), function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
}(q ||= {}), function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
}(ol ||= {});
var cl = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, ll = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function ul(e) {
	var t = {};
	return e.replace(ll, function(e) {
		var n = e.length;
		switch (e[0]) {
			case "G":
				t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
				break;
			case "y":
				t.year = n === 2 ? "2-digit" : "numeric";
				break;
			case "Y":
			case "u":
			case "U":
			case "r": throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
			case "q":
			case "Q": throw RangeError("`q/Q` (quarter) patterns are not supported");
			case "M":
			case "L":
				t.month = [
					"numeric",
					"2-digit",
					"short",
					"long",
					"narrow"
				][n - 1];
				break;
			case "w":
			case "W": throw RangeError("`w/W` (week) patterns are not supported");
			case "d":
				t.day = ["numeric", "2-digit"][n - 1];
				break;
			case "D":
			case "F":
			case "g": throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
			case "E":
				t.weekday = n === 4 ? "long" : n === 5 ? "narrow" : "short";
				break;
			case "e":
				if (n < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][n - 4];
				break;
			case "c":
				if (n < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][n - 4];
				break;
			case "a":
				t.hour12 = !0;
				break;
			case "b":
			case "B": throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
			case "h":
				t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "H":
				t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "K":
				t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "k":
				t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "j":
			case "J":
			case "C": throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
			case "m":
				t.minute = ["numeric", "2-digit"][n - 1];
				break;
			case "s":
				t.second = ["numeric", "2-digit"][n - 1];
				break;
			case "S":
			case "A": throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
			case "z":
				t.timeZoneName = n < 4 ? "short" : "long";
				break;
			case "Z":
			case "O":
			case "v":
			case "V":
			case "X":
			case "x": throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
		}
		return "";
	}), t;
}
var dl = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function fl(e) {
	return e.replace(/^(.*?)-/, "");
}
var pl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, ml = /^(@+)?(\+|#+)?[rs]?$/g, hl = /(\*)(0+)|(#+)(0+)|(0+)/g, gl = /^(0+)$/;
function _l(e) {
	var t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(ml, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function vl(e) {
	switch (e) {
		case "sign-auto": return { signDisplay: "auto" };
		case "sign-accounting":
		case "()": return { currencySign: "accounting" };
		case "sign-always":
		case "+!": return { signDisplay: "always" };
		case "sign-accounting-always":
		case "()!": return {
			signDisplay: "always",
			currencySign: "accounting"
		};
		case "sign-except-zero":
		case "+?": return { signDisplay: "exceptZero" };
		case "sign-accounting-except-zero":
		case "()?": return {
			signDisplay: "exceptZero",
			currencySign: "accounting"
		};
		case "sign-never":
		case "+_": return { signDisplay: "never" };
	}
}
function yl(e) {
	var t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		var n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !gl.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function bl(e) {
	return vl(e) || {};
}
function xl(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n];
		switch (i.stem) {
			case "percent":
			case "%":
				t.style = "percent";
				continue;
			case "%x100":
				t.style = "percent", t.scale = 100;
				continue;
			case "currency":
				t.style = "currency", t.currency = i.options[0];
				continue;
			case "group-off":
			case ",_":
				t.useGrouping = !1;
				continue;
			case "precision-integer":
			case ".":
				t.maximumFractionDigits = 0;
				continue;
			case "measure-unit":
			case "unit":
				t.style = "unit", t.unit = fl(i.options[0]);
				continue;
			case "compact-short":
			case "K":
				t.notation = "compact", t.compactDisplay = "short";
				continue;
			case "compact-long":
			case "KK":
				t.notation = "compact", t.compactDisplay = "long";
				continue;
			case "scientific":
				t = G(G(G({}, t), { notation: "scientific" }), i.options.reduce(function(e, t) {
					return G(G({}, e), bl(t));
				}, {}));
				continue;
			case "engineering":
				t = G(G(G({}, t), { notation: "engineering" }), i.options.reduce(function(e, t) {
					return G(G({}, e), bl(t));
				}, {}));
				continue;
			case "notation-simple":
				t.notation = "standard";
				continue;
			case "unit-width-narrow":
				t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
				continue;
			case "unit-width-short":
				t.currencyDisplay = "code", t.unitDisplay = "short";
				continue;
			case "unit-width-full-name":
				t.currencyDisplay = "name", t.unitDisplay = "long";
				continue;
			case "unit-width-iso-code":
				t.currencyDisplay = "symbol";
				continue;
			case "scale":
				t.scale = parseFloat(i.options[0]);
				continue;
			case "rounding-mode-floor":
				t.roundingMode = "floor";
				continue;
			case "rounding-mode-ceiling":
				t.roundingMode = "ceil";
				continue;
			case "rounding-mode-down":
				t.roundingMode = "trunc";
				continue;
			case "rounding-mode-up":
				t.roundingMode = "expand";
				continue;
			case "rounding-mode-half-even":
				t.roundingMode = "halfEven";
				continue;
			case "rounding-mode-half-down":
				t.roundingMode = "halfTrunc";
				continue;
			case "rounding-mode-half-up":
				t.roundingMode = "halfExpand";
				continue;
			case "integer-width":
				if (i.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
				i.options[0].replace(hl, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else {
						if (i && a) throw Error("We currently do not support maximum integer digits");
						if (o) throw Error("We currently do not support exact integer digits");
					}
					return "";
				});
				continue;
		}
		if (gl.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
		else if (pl.test(i.stem)) {
			if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			i.stem.replace(pl, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			var a = i.options[0];
			a === "w" ? t = G(G({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = G(G({}, t), _l(a)));
		} else if (ml.test(i.stem)) t = G(G({}, t), _l(i.stem));
		else {
			var o = vl(i.stem);
			o && (t = G(G({}, t), o));
			var s = yl(i.stem);
			s && (t = G(G({}, t), s));
		}
	}
	return t;
}
var Sl = {
	"001": ["H", "h"],
	419: [
		"h",
		"H",
		"hB",
		"hb"
	],
	AC: [
		"H",
		"h",
		"hb",
		"hB"
	],
	AD: ["H", "hB"],
	AE: [
		"h",
		"hB",
		"hb",
		"H"
	],
	AF: [
		"H",
		"hb",
		"hB",
		"h"
	],
	AG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	AI: [
		"H",
		"h",
		"hb",
		"hB"
	],
	AL: [
		"h",
		"H",
		"hB"
	],
	AM: ["H", "hB"],
	AO: ["H", "hB"],
	AR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	AS: ["h", "H"],
	AT: ["H", "hB"],
	AU: [
		"h",
		"hb",
		"H",
		"hB"
	],
	AW: ["H", "hB"],
	AX: ["H"],
	AZ: [
		"H",
		"hB",
		"h"
	],
	BA: [
		"H",
		"hB",
		"h"
	],
	BB: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BD: [
		"h",
		"hB",
		"H"
	],
	BE: ["H", "hB"],
	BF: ["H", "hB"],
	BG: [
		"H",
		"hB",
		"h"
	],
	BH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	BI: ["H", "h"],
	BJ: ["H", "hB"],
	BL: ["H", "hB"],
	BM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BN: [
		"hb",
		"hB",
		"h",
		"H"
	],
	BO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	BQ: ["H"],
	BR: ["H", "hB"],
	BS: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BT: ["h", "H"],
	BW: [
		"H",
		"h",
		"hb",
		"hB"
	],
	BY: ["H", "h"],
	BZ: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CA: [
		"h",
		"hb",
		"H",
		"hB"
	],
	CC: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CD: ["hB", "H"],
	CF: [
		"H",
		"h",
		"hB"
	],
	CG: ["H", "hB"],
	CH: [
		"H",
		"hB",
		"h"
	],
	CI: ["H", "hB"],
	CK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CL: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CM: [
		"H",
		"h",
		"hB"
	],
	CN: [
		"H",
		"hB",
		"hb",
		"h"
	],
	CO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CP: ["H"],
	CR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CU: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CV: ["H", "hB"],
	CW: ["H", "hB"],
	CX: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CY: [
		"h",
		"H",
		"hb",
		"hB"
	],
	CZ: ["H"],
	DE: ["H", "hB"],
	DG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	DJ: ["h", "H"],
	DK: ["H"],
	DM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	DO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	DZ: [
		"h",
		"hB",
		"hb",
		"H"
	],
	EA: [
		"H",
		"h",
		"hB",
		"hb"
	],
	EC: [
		"h",
		"H",
		"hB",
		"hb"
	],
	EE: ["H", "hB"],
	EG: [
		"h",
		"hB",
		"hb",
		"H"
	],
	EH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	ER: ["h", "H"],
	ES: [
		"H",
		"hB",
		"h",
		"hb"
	],
	ET: [
		"hB",
		"hb",
		"h",
		"H"
	],
	FI: ["H"],
	FJ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	FK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	FM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	FO: ["H", "h"],
	FR: ["H", "hB"],
	GA: ["H", "hB"],
	GB: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GD: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GE: [
		"H",
		"hB",
		"h"
	],
	GF: ["H", "hB"],
	GG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GH: ["h", "H"],
	GI: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GL: ["H", "h"],
	GM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GN: ["H", "hB"],
	GP: ["H", "hB"],
	GQ: [
		"H",
		"hB",
		"h",
		"hb"
	],
	GR: [
		"h",
		"H",
		"hb",
		"hB"
	],
	GT: [
		"h",
		"H",
		"hB",
		"hb"
	],
	GU: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GW: ["H", "hB"],
	GY: [
		"h",
		"hb",
		"H",
		"hB"
	],
	HK: [
		"h",
		"hB",
		"hb",
		"H"
	],
	HN: [
		"h",
		"H",
		"hB",
		"hb"
	],
	HR: ["H", "hB"],
	HU: ["H", "h"],
	IC: [
		"H",
		"h",
		"hB",
		"hb"
	],
	ID: ["H"],
	IE: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IL: ["H", "hB"],
	IM: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IN: ["h", "H"],
	IO: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IQ: [
		"h",
		"hB",
		"hb",
		"H"
	],
	IR: ["hB", "H"],
	IS: ["H"],
	IT: ["H", "hB"],
	JE: [
		"H",
		"h",
		"hb",
		"hB"
	],
	JM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	JO: [
		"h",
		"hB",
		"hb",
		"H"
	],
	JP: [
		"H",
		"K",
		"h"
	],
	KE: [
		"hB",
		"hb",
		"H",
		"h"
	],
	KG: [
		"H",
		"h",
		"hB",
		"hb"
	],
	KH: [
		"hB",
		"h",
		"H",
		"hb"
	],
	KI: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KM: [
		"H",
		"h",
		"hB",
		"hb"
	],
	KN: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KP: [
		"h",
		"H",
		"hB",
		"hb"
	],
	KR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	KW: [
		"h",
		"hB",
		"hb",
		"H"
	],
	KY: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KZ: ["H", "hB"],
	LA: [
		"H",
		"hb",
		"hB",
		"h"
	],
	LB: [
		"h",
		"hB",
		"hb",
		"H"
	],
	LC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	LI: [
		"H",
		"hB",
		"h"
	],
	LK: [
		"H",
		"h",
		"hB",
		"hb"
	],
	LR: [
		"h",
		"hb",
		"H",
		"hB"
	],
	LS: ["h", "H"],
	LT: [
		"H",
		"h",
		"hb",
		"hB"
	],
	LU: [
		"H",
		"h",
		"hB"
	],
	LV: [
		"H",
		"hB",
		"hb",
		"h"
	],
	LY: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MA: [
		"H",
		"h",
		"hB",
		"hb"
	],
	MC: ["H", "hB"],
	MD: ["H", "hB"],
	ME: [
		"H",
		"hB",
		"h"
	],
	MF: ["H", "hB"],
	MG: ["H", "h"],
	MH: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	ML: ["H"],
	MM: [
		"hB",
		"hb",
		"H",
		"h"
	],
	MN: [
		"H",
		"h",
		"hb",
		"hB"
	],
	MO: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MP: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MQ: ["H", "hB"],
	MR: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MS: [
		"H",
		"h",
		"hb",
		"hB"
	],
	MT: ["H", "h"],
	MU: ["H", "h"],
	MV: ["H", "h"],
	MW: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MX: [
		"h",
		"H",
		"hB",
		"hb"
	],
	MY: [
		"hb",
		"hB",
		"h",
		"H"
	],
	MZ: ["H", "hB"],
	NA: [
		"h",
		"H",
		"hB",
		"hb"
	],
	NC: ["H", "hB"],
	NE: ["H"],
	NF: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NI: [
		"h",
		"H",
		"hB",
		"hb"
	],
	NL: ["H", "hB"],
	NO: ["H", "h"],
	NP: [
		"H",
		"h",
		"hB"
	],
	NR: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NU: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NZ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	OM: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PA: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PE: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PF: [
		"H",
		"h",
		"hB"
	],
	PG: ["h", "H"],
	PH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PK: [
		"h",
		"hB",
		"H"
	],
	PL: ["H", "h"],
	PM: ["H", "hB"],
	PN: [
		"H",
		"h",
		"hb",
		"hB"
	],
	PR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PS: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PT: ["H", "hB"],
	PW: ["h", "H"],
	PY: [
		"h",
		"H",
		"hB",
		"hb"
	],
	QA: [
		"h",
		"hB",
		"hb",
		"H"
	],
	RE: ["H", "hB"],
	RO: ["H", "hB"],
	RS: [
		"H",
		"hB",
		"h"
	],
	RU: ["H"],
	RW: ["H", "h"],
	SA: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SB: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SC: [
		"H",
		"h",
		"hB"
	],
	SD: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SE: ["H"],
	SG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SH: [
		"H",
		"h",
		"hb",
		"hB"
	],
	SI: ["H", "hB"],
	SJ: ["H"],
	SK: ["H"],
	SL: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SM: [
		"H",
		"h",
		"hB"
	],
	SN: [
		"H",
		"h",
		"hB"
	],
	SO: ["h", "H"],
	SR: ["H", "hB"],
	SS: [
		"h",
		"hb",
		"H",
		"hB"
	],
	ST: ["H", "hB"],
	SV: [
		"h",
		"H",
		"hB",
		"hb"
	],
	SX: [
		"H",
		"h",
		"hb",
		"hB"
	],
	SY: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SZ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TA: [
		"H",
		"h",
		"hb",
		"hB"
	],
	TC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TD: [
		"h",
		"H",
		"hB"
	],
	TF: [
		"H",
		"h",
		"hB"
	],
	TG: ["H", "hB"],
	TH: ["H", "h"],
	TJ: ["H", "h"],
	TL: [
		"H",
		"hB",
		"hb",
		"h"
	],
	TM: ["H", "h"],
	TN: [
		"h",
		"hB",
		"hb",
		"H"
	],
	TO: ["h", "H"],
	TR: ["H", "hB"],
	TT: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TW: [
		"hB",
		"hb",
		"h",
		"H"
	],
	TZ: [
		"hB",
		"hb",
		"H",
		"h"
	],
	UA: [
		"H",
		"hB",
		"h"
	],
	UG: [
		"hB",
		"hb",
		"H",
		"h"
	],
	UM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	US: [
		"h",
		"hb",
		"H",
		"hB"
	],
	UY: [
		"h",
		"H",
		"hB",
		"hb"
	],
	UZ: [
		"H",
		"hB",
		"h"
	],
	VA: [
		"H",
		"h",
		"hB"
	],
	VC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VE: [
		"h",
		"H",
		"hB",
		"hb"
	],
	VG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VI: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VN: ["H", "h"],
	VU: ["h", "H"],
	WF: ["H", "hB"],
	WS: ["h", "H"],
	XK: [
		"H",
		"hB",
		"h"
	],
	YE: [
		"h",
		"hB",
		"hb",
		"H"
	],
	YT: ["H", "hB"],
	ZA: [
		"H",
		"h",
		"hb",
		"hB"
	],
	ZM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	ZW: ["H", "h"],
	"af-ZA": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"ar-001": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"ca-ES": [
		"H",
		"h",
		"hB"
	],
	"en-001": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"en-HK": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"en-IL": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"en-MY": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"es-BR": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"es-ES": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"es-GQ": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"fr-CA": [
		"H",
		"h",
		"hB"
	],
	"gl-ES": [
		"H",
		"h",
		"hB"
	],
	"gu-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"hi-IN": [
		"hB",
		"h",
		"H"
	],
	"it-CH": [
		"H",
		"h",
		"hB"
	],
	"it-IT": [
		"H",
		"h",
		"hB"
	],
	"kn-IN": [
		"hB",
		"h",
		"H"
	],
	"ml-IN": [
		"hB",
		"h",
		"H"
	],
	"mr-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"pa-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"ta-IN": [
		"hB",
		"h",
		"hb",
		"H"
	],
	"te-IN": [
		"hB",
		"h",
		"H"
	],
	"zu-ZA": [
		"H",
		"hB",
		"hb",
		"h"
	]
};
function Cl(e) {
	var t = e.hourCycle;
	if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	var n, r = e.language;
	return r !== "root" && (n = e.maximize().region), (Sl[n || ""] || Sl[r || ""] || Sl[`${r}-001`] || Sl["001"])[0];
}
var wl = RegExp(`^${cl.source}*`), Tl = RegExp(`${cl.source}*\$`);
function J(e, t) {
	return {
		start: e,
		end: t
	};
}
var El = !!String.prototype.startsWith && "_a".startsWith("a", 1), Dl = !!String.fromCodePoint, Ol = !!Object.fromEntries, kl = !!String.prototype.codePointAt, Al = !!String.prototype.trimStart, jl = !!String.prototype.trimEnd, Ml = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
	return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Nl = !0;
try {
	Nl = Vl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")?.[0] === "a";
} catch {
	Nl = !1;
}
var Pl, Fl = El ? function(e, t, n) {
	return e.startsWith(t, n);
} : function(e, t, n) {
	return e.slice(n, n + t.length) === t;
}, Il = Dl ? String.fromCodePoint : function() {
	for (var e = [...arguments], t, n = "", r = e.length, i = 0; r > i;) {
		if ((t = e[i++]) > 1114111) throw RangeError(t + " is not a valid code point");
		n += t < 65536 ? String.fromCharCode(t) : String.fromCharCode(55296 + ((t -= 65536) >> 10), t % 1024 + 56320);
	}
	return n;
}, Ll = Ol ? Object.fromEntries : function(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n], a = i[0];
		t[a] = i[1];
	}
	return t;
}, Rl = kl ? function(e, t) {
	return e.codePointAt(t);
} : function(e, t) {
	var n = e.length;
	if (!(t < 0 || t >= n)) {
		var r, i = e.charCodeAt(t);
		return i < 55296 || i > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? i : r - 56320 + (i - 55296 << 10) + 65536;
	}
}, zl = Al ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(wl, "");
}, Bl = jl ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(Tl, "");
};
function Vl(e, t) {
	return new RegExp(e, t);
}
if (Nl) {
	var Hl = Vl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
	Pl = function(e, t) {
		return Hl.lastIndex = t, Hl.exec(e)[1] ?? "";
	};
} else Pl = function(e, t) {
	for (var n = [];;) {
		var r = Rl(e, t);
		if (r === void 0 || Kl(r) || ql(r)) break;
		n.push(r), t += r >= 65536 ? 2 : 1;
	}
	return Il.apply(void 0, n);
};
var Ul = function() {
	function e(e, t) {
		t === void 0 && (t = {}), this.message = e, this.position = {
			offset: 0,
			line: 1,
			column: 1
		}, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
	}
	return e.prototype.parse = function() {
		if (this.offset() !== 0) throw Error("parser can only be used once");
		return this.parseMessage(0, "", !1);
	}, e.prototype.parseMessage = function(e, t, n) {
		for (var r = []; !this.isEOF();) {
			var i = this.char();
			if (i === 123) {
				if ((a = this.parseArgument(e, n)).err) return a;
				r.push(a.val);
			} else {
				if (i === 125 && e > 0) break;
				if (i !== 35 || t !== "plural" && t !== "selectordinal") {
					if (i === 60 && !this.ignoreTag && this.peek() === 47) {
						if (n) break;
						return this.error(K.UNMATCHED_CLOSING_TAG, J(this.clonePosition(), this.clonePosition()));
					}
					if (i === 60 && !this.ignoreTag && Wl(this.peek() || 0)) {
						if ((a = this.parseTag(e, t)).err) return a;
						r.push(a.val);
					} else {
						var a;
						if ((a = this.parseLiteral(e, t)).err) return a;
						r.push(a.val);
					}
				} else {
					var o = this.clonePosition();
					this.bump(), r.push({
						type: q.pound,
						location: J(o, this.clonePosition())
					});
				}
			}
		}
		return {
			val: r,
			err: null
		};
	}, e.prototype.parseTag = function(e, t) {
		var n = this.clonePosition();
		this.bump();
		var r = this.parseTagName();
		if (this.bumpSpace(), this.bumpIf("/>")) return {
			val: {
				type: q.literal,
				value: `<${r}/>`,
				location: J(n, this.clonePosition())
			},
			err: null
		};
		if (this.bumpIf(">")) {
			var i = this.parseMessage(e + 1, t, !0);
			if (i.err) return i;
			var a = i.val, o = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !Wl(this.char())) return this.error(K.INVALID_TAG, J(o, this.clonePosition()));
				var s = this.clonePosition();
				return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: q.tag,
						value: r,
						children: a,
						location: J(n, this.clonePosition())
					},
					err: null
				} : this.error(K.INVALID_TAG, J(o, this.clonePosition()))) : this.error(K.UNMATCHED_CLOSING_TAG, J(s, this.clonePosition()));
			}
			return this.error(K.UNCLOSED_TAG, J(n, this.clonePosition()));
		}
		return this.error(K.INVALID_TAG, J(n, this.clonePosition()));
	}, e.prototype.parseTagName = function() {
		var e = this.offset();
		for (this.bump(); !this.isEOF() && Gl(this.char());) this.bump();
		return this.message.slice(e, this.offset());
	}, e.prototype.parseLiteral = function(e, t) {
		for (var n = this.clonePosition(), r = "";;) {
			var i = this.tryParseQuote(t);
			if (i) r += i;
			else {
				var a = this.tryParseUnquoted(e, t);
				if (a) r += a;
				else {
					var o = this.tryParseLeftAngleBracket();
					if (!o) break;
					r += o;
				}
			}
		}
		var s = J(n, this.clonePosition());
		return {
			val: {
				type: q.literal,
				value: r,
				location: s
			},
			err: null
		};
	}, e.prototype.tryParseLeftAngleBracket = function() {
		return this.isEOF() || this.char() !== 60 || !this.ignoreTag && (Wl(e = this.peek() || 0) || e === 47) ? null : (this.bump(), "<");
		var e;
	}, e.prototype.tryParseQuote = function(e) {
		if (this.isEOF() || this.char() !== 39) return null;
		switch (this.peek()) {
			case 39: return this.bump(), this.bump(), "'";
			case 123:
			case 60:
			case 62:
			case 125: break;
			case 35:
				if (e === "plural" || e === "selectordinal") break;
				return null;
			default: return null;
		}
		this.bump();
		var t = [this.char()];
		for (this.bump(); !this.isEOF();) {
			var n = this.char();
			if (n === 39) {
				if (this.peek() !== 39) {
					this.bump();
					break;
				}
				t.push(39), this.bump();
			} else t.push(n);
			this.bump();
		}
		return Il.apply(void 0, t);
	}, e.prototype.tryParseUnquoted = function(e, t) {
		if (this.isEOF()) return null;
		var n = this.char();
		return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), Il(n));
	}, e.prototype.parseArgument = function(e, t) {
		var n = this.clonePosition();
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(K.EXPECT_ARGUMENT_CLOSING_BRACE, J(n, this.clonePosition()));
		if (this.char() === 125) return this.bump(), this.error(K.EMPTY_ARGUMENT, J(n, this.clonePosition()));
		var r = this.parseIdentifierIfPossible().value;
		if (!r) return this.error(K.MALFORMED_ARGUMENT, J(n, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(K.EXPECT_ARGUMENT_CLOSING_BRACE, J(n, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: q.argument,
					value: r,
					location: J(n, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(K.EXPECT_ARGUMENT_CLOSING_BRACE, J(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
			default: return this.error(K.MALFORMED_ARGUMENT, J(n, this.clonePosition()));
		}
	}, e.prototype.parseIdentifierIfPossible = function() {
		var e = this.clonePosition(), t = this.offset(), n = Pl(this.message, t), r = t + n.length;
		return this.bumpTo(r), {
			value: n,
			location: J(e, this.clonePosition())
		};
	}, e.prototype.parseArgumentOptions = function(e, t, n, r) {
		var i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
		switch (a) {
			case "": return this.error(K.EXPECT_ARGUMENT_TYPE, J(i, o));
			case "number":
			case "date":
			case "time":
				this.bumpSpace();
				var s = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					var c = this.clonePosition();
					if ((g = this.parseSimpleArgStyleIfPossible()).err) return g;
					if ((f = Bl(g.val)).length === 0) return this.error(K.EXPECT_ARGUMENT_STYLE, J(this.clonePosition(), this.clonePosition()));
					s = {
						style: f,
						styleLocation: J(c, this.clonePosition())
					};
				}
				if ((_ = this.tryParseArgumentClose(r)).err) return _;
				var l = J(r, this.clonePosition());
				if (s && Fl(s?.style, "::", 0)) {
					var u = zl(s.style.slice(2));
					if (a === "number") return (g = this.parseNumberSkeletonFromString(u, s.styleLocation)).err ? g : {
						val: {
							type: q.number,
							value: n,
							location: l,
							style: g.val
						},
						err: null
					};
					if (u.length === 0) return this.error(K.EXPECT_DATE_TIME_SKELETON, l);
					var d = u;
					this.locale && (d = function(e, t) {
						for (var n = "", r = 0; r < e.length; r++) {
							var i = e.charAt(r);
							if (i === "j") {
								for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
								var o = 1 + (1 & a), s = a < 2 ? 1 : 3 + (a >> 1), c = Cl(t);
								for (c != "H" && c != "k" || (s = 0); s-- > 0;) n += "a";
								for (; o-- > 0;) n = c + n;
							} else n += i === "J" ? "H" : i;
						}
						return n;
					}(u, this.locale));
					var f = {
						type: ol.dateTime,
						pattern: d,
						location: s.styleLocation,
						parsedOptions: this.shouldParseSkeletons ? ul(d) : {}
					};
					return {
						val: {
							type: a === "date" ? q.date : q.time,
							value: n,
							location: l,
							style: f
						},
						err: null
					};
				}
				return {
					val: {
						type: a === "number" ? q.number : a === "date" ? q.date : q.time,
						value: n,
						location: l,
						style: s?.style ?? null
					},
					err: null
				};
			case "plural":
			case "selectordinal":
			case "select":
				var p = this.clonePosition();
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(K.EXPECT_SELECT_ARGUMENT_OPTIONS, J(p, G({}, p)));
				this.bumpSpace();
				var m = this.parseIdentifierIfPossible(), h = 0;
				if (a !== "select" && m.value === "offset") {
					if (!this.bumpIf(":")) return this.error(K.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, J(this.clonePosition(), this.clonePosition()));
					var g;
					if (this.bumpSpace(), (g = this.tryParseDecimalInteger(K.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, K.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return g;
					this.bumpSpace(), m = this.parseIdentifierIfPossible(), h = g.val;
				}
				var _, v = this.tryParsePluralOrSelectOptions(e, a, t, m);
				if (v.err) return v;
				if ((_ = this.tryParseArgumentClose(r)).err) return _;
				var y = J(r, this.clonePosition());
				return a === "select" ? {
					val: {
						type: q.select,
						value: n,
						options: Ll(v.val),
						location: y
					},
					err: null
				} : {
					val: {
						type: q.plural,
						value: n,
						options: Ll(v.val),
						offset: h,
						pluralType: a === "plural" ? "cardinal" : "ordinal",
						location: y
					},
					err: null
				};
			default: return this.error(K.INVALID_ARGUMENT_TYPE, J(i, o));
		}
	}, e.prototype.tryParseArgumentClose = function(e) {
		return this.isEOF() || this.char() !== 125 ? this.error(K.EXPECT_ARGUMENT_CLOSING_BRACE, J(e, this.clonePosition())) : (this.bump(), {
			val: !0,
			err: null
		});
	}, e.prototype.parseSimpleArgStyleIfPossible = function() {
		for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
			case 39:
				this.bump();
				var n = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(K.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, J(n, this.clonePosition()));
				this.bump();
				break;
			case 123:
				e += 1, this.bump();
				break;
			case 125:
				if (!(e > 0)) return {
					val: this.message.slice(t.offset, this.offset()),
					err: null
				};
				--e;
				break;
			default: this.bump();
		}
		return {
			val: this.message.slice(t.offset, this.offset()),
			err: null
		};
	}, e.prototype.parseNumberSkeletonFromString = function(e, t) {
		var n = [];
		try {
			n = function(e) {
				if (e.length === 0) throw Error("Number skeleton cannot be empty");
				for (var t = [], n = 0, r = e.split(dl).filter(function(e) {
					return e.length > 0;
				}); n < r.length; n++) {
					var i = r[n].split("/");
					if (i.length === 0) throw Error("Invalid number skeleton");
					for (var a = i[0], o = i.slice(1), s = 0, c = o; s < c.length; s++) if (c[s].length === 0) throw Error("Invalid number skeleton");
					t.push({
						stem: a,
						options: o
					});
				}
				return t;
			}(e);
		} catch {
			return this.error(K.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: ol.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? xl(n) : {}
			},
			err: null
		};
	}, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
		for (var i, a = !1, o = [], s = /* @__PURE__ */ new Set(), c = r.value, l = r.location;;) {
			if (c.length === 0) {
				var u = this.clonePosition();
				if (t === "select" || !this.bumpIf("=")) break;
				var d = this.tryParseDecimalInteger(K.EXPECT_PLURAL_ARGUMENT_SELECTOR, K.INVALID_PLURAL_ARGUMENT_SELECTOR);
				if (d.err) return d;
				l = J(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
			}
			if (s.has(c)) return this.error(t === "select" ? K.DUPLICATE_SELECT_ARGUMENT_SELECTOR : K.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
			c === "other" && (a = !0), this.bumpSpace();
			var f = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(t === "select" ? K.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : K.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, J(this.clonePosition(), this.clonePosition()));
			var p = this.parseMessage(e + 1, t, n);
			if (p.err) return p;
			var m = this.tryParseArgumentClose(f);
			if (m.err) return m;
			o.push([c, {
				value: p.val,
				location: J(f, this.clonePosition())
			}]), s.add(c), this.bumpSpace(), c = (i = this.parseIdentifierIfPossible()).value, l = i.location;
		}
		return o.length === 0 ? this.error(t === "select" ? K.EXPECT_SELECT_ARGUMENT_SELECTOR : K.EXPECT_PLURAL_ARGUMENT_SELECTOR, J(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(K.MISSING_OTHER_CLAUSE, J(this.clonePosition(), this.clonePosition())) : {
			val: o,
			err: null
		};
	}, e.prototype.tryParseDecimalInteger = function(e, t) {
		var n = 1, r = this.clonePosition();
		this.bumpIf("+") || this.bumpIf("-") && (n = -1);
		for (var i = !1, a = 0; !this.isEOF();) {
			var o = this.char();
			if (!(o >= 48 && o <= 57)) break;
			i = !0, a = 10 * a + (o - 48), this.bump();
		}
		var s = J(r, this.clonePosition());
		return i ? Ml(a *= n) ? {
			val: a,
			err: null
		} : this.error(t, s) : this.error(e, s);
	}, e.prototype.offset = function() {
		return this.position.offset;
	}, e.prototype.isEOF = function() {
		return this.offset() === this.message.length;
	}, e.prototype.clonePosition = function() {
		return {
			offset: this.position.offset,
			line: this.position.line,
			column: this.position.column
		};
	}, e.prototype.char = function() {
		var e = this.position.offset;
		if (e >= this.message.length) throw Error("out of bound");
		var t = Rl(this.message, e);
		if (t === void 0) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
		return t;
	}, e.prototype.error = function(e, t) {
		return {
			val: null,
			err: {
				kind: e,
				message: this.message,
				location: t
			}
		};
	}, e.prototype.bump = function() {
		if (!this.isEOF()) {
			var e = this.char();
			e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
		}
	}, e.prototype.bumpIf = function(e) {
		if (Fl(this.message, e, this.offset())) {
			for (var t = 0; t < e.length; t++) this.bump();
			return !0;
		}
		return !1;
	}, e.prototype.bumpUntil = function(e) {
		var t = this.offset(), n = this.message.indexOf(e, t);
		return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
	}, e.prototype.bumpTo = function(e) {
		if (this.offset() > e) throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
		for (e = Math.min(e, this.message.length);;) {
			var t = this.offset();
			if (t === e) break;
			if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
			if (this.bump(), this.isEOF()) break;
		}
	}, e.prototype.bumpSpace = function() {
		for (; !this.isEOF() && Kl(this.char());) this.bump();
	}, e.prototype.peek = function() {
		if (this.isEOF()) return null;
		var e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}, e;
}();
function Wl(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Gl(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Kl(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function ql(e) {
	return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Jl(e) {
	e.forEach(function(e) {
		if (delete e.location, function(e) {
			return e.type === q.select;
		}(e) || function(e) {
			return e.type === q.plural;
		}(e)) for (var t in e.options) delete e.options[t].location, Jl(e.options[t].value);
		else (function(e) {
			return e.type === q.number;
		})(e) && function(e) {
			return !(!e || typeof e != "object" || e.type !== ol.number);
		}(e.style) ? delete e.style.location : !function(e) {
			return e.type === q.date;
		}(e) && !function(e) {
			return e.type === q.time;
		}(e) || !function(e) {
			return !(!e || typeof e != "object" || e.type !== ol.dateTime);
		}(e.style) ? function(e) {
			return e.type === q.tag;
		}(e) && Jl(e.children) : delete e.style.location;
	});
}
function Yl(e) {
	if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
	var t = e.default;
	if (typeof t == "function") {
		var n = function e() {
			var n = !1;
			try {
				n = this instanceof e;
			} catch {}
			return n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
		};
		n.prototype = t.prototype;
	} else n = {};
	return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
		var r = Object.getOwnPropertyDescriptor(e, t);
		Object.defineProperty(n, t, r.get ? r : {
			enumerable: !0,
			get: function() {
				return e[t];
			}
		});
	}), n;
}
var Xl, Y = {};
function Zl() {
	if (Xl) return Y;
	var e, t;
	return Xl = 1, Object.defineProperty(Y, "__esModule", { value: !0 }), Y.SKELETON_TYPE = Y.TYPE = void 0, Y.isLiteralElement = function(t) {
		return t.type === e.literal;
	}, Y.isArgumentElement = function(t) {
		return t.type === e.argument;
	}, Y.isNumberElement = function(t) {
		return t.type === e.number;
	}, Y.isDateElement = function(t) {
		return t.type === e.date;
	}, Y.isTimeElement = function(t) {
		return t.type === e.time;
	}, Y.isSelectElement = function(t) {
		return t.type === e.select;
	}, Y.isPluralElement = function(t) {
		return t.type === e.plural;
	}, Y.isPoundElement = function(t) {
		return t.type === e.pound;
	}, Y.isTagElement = function(t) {
		return t.type === e.tag;
	}, Y.isNumberSkeleton = function(e) {
		return !(!e || typeof e != "object" || e.type !== t.number);
	}, Y.isDateTimeSkeleton = function(e) {
		return !(!e || typeof e != "object" || e.type !== t.dateTime);
	}, Y.createLiteralElement = function(t) {
		return {
			type: e.literal,
			value: t
		};
	}, Y.createNumberElement = function(t, n) {
		return {
			type: e.number,
			value: t,
			style: n
		};
	}, function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	}(e || (Y.TYPE = e = {})), function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	}(t || (Y.SKELETON_TYPE = t = {})), Y;
}
var Ql, $l = Zl(), eu = {}, tu = Yl(sl), nu = function() {
	if (Ql) return eu;
	Ql = 1, Object.defineProperty(eu, "__esModule", { value: !0 }), eu.printAST = n, eu.doPrintAST = r, eu.printDateTimeSkeleton = o;
	var e = tu, t = Zl();
	function n(e) {
		return r(e, !1);
	}
	function r(s, c) {
		return s.map(function(l, u) {
			return (0, t.isLiteralElement)(l) ? function(e, t, n, r) {
				var a = e.value;
				return n || a[0] !== "'" || (a = `''${a.slice(1)}`), r || a[a.length - 1] !== "'" || (a = `${a.slice(0, a.length - 1)}''`), a = i(a), t ? a.replace("#", "'#'") : a;
			}(l, c, u === 0, u === s.length - 1) : (0, t.isArgumentElement)(l) ? function(e) {
				return `{${e.value}}`;
			}(l) : (0, t.isDateElement)(l) || (0, t.isTimeElement)(l) || (0, t.isNumberElement)(l) ? function(e) {
				return `{${e.value}, ${t.TYPE[e.type]}${e.style ? `, ${n = e.style, typeof n == "string" ? i(n) : n.type === t.SKELETON_TYPE.dateTime ? `::${o(n)}` : `::${n.tokens.map(a).join(" ")}`}` : ""}}`;
				var n;
			}(l) : (0, t.isPluralElement)(l) ? function(t) {
				var n = t.pluralType === "cardinal" ? "plural" : "selectordinal";
				return `{${[
					t.value,
					n,
					e.__spreadArray([t.offset ? `offset:${t.offset}` : ""], Object.keys(t.options).map(function(e) {
						return `${e}{${r(t.options[e].value, !0)}}`;
					}), !0).filter(Boolean).join(" ")
				].join(",")}}`;
			}(l) : (0, t.isSelectElement)(l) ? function(e) {
				return `{${[
					e.value,
					"select",
					Object.keys(e.options).map(function(t) {
						return `${t}{${r(e.options[t].value, !1)}}`;
					}).join(" ")
				].join(",")}}`;
			}(l) : (0, t.isPoundElement)(l) ? "#" : (0, t.isTagElement)(l) ? function(e) {
				return `<${e.value}>${n(e.children)}</${e.value}>`;
			}(l) : void 0;
		}).join("");
	}
	function i(e) {
		return e.replace(/([{}](?:[\s\S]*[{}])?)/, "'$1'");
	}
	function a(e) {
		var t = e.stem, n = e.options;
		return n.length === 0 ? t : `${t}${n.map(function(e) {
			return `/${e}`;
		}).join("")}`;
	}
	function o(e) {
		return e.pattern;
	}
	return eu;
}(), ru = {
	variable: "v",
	number: "n",
	datetime: "d",
	currency: "c",
	"relative-time": "rt"
};
function iu(e) {
	return ru[e];
}
function au({ icuString: e, shouldVisit: t, visitor: n, options: { recurseIntoVisited: r = !0, ...i } }) {
	let a = function(e, t) {
		t === void 0 && (t = {}), t = G({
			shouldParseSkeletons: !0,
			requiresOtherClause: !0
		}, t);
		var n = new Ul(e, t).parse();
		if (n.err) {
			var r = SyntaxError(K[n.err.kind]);
			throw r.location = n.err.location, r.originalMessage = n.err.message, r;
		}
		return t != null && t.captureLocation || Jl(n.val), n.val;
	}(e, i);
	return o(a), a;
	function o(e) {
		e.map(s);
	}
	function s(e) {
		let i = !1;
		t(e) && (n(e), i = !0), i && !r || (e.type === q.select || e.type === q.plural ? Object.values(e.options).map((e) => e.value).map(o) : e.type === q.tag && o(e.children));
	}
}
var ou = "_gt_", su = RegExp(`^${ou}\\d+$`), cu = RegExp(`^${ou}$`);
function lu(e) {
	return e.type === $l.TYPE.select && su.test(e.value) && !!e.options.other && (e.options.other.value.length === 0 || e.options.other.value.length > 0 && e.options.other.value[0]?.type === $l.TYPE.literal);
}
function uu(e) {
	return e.type === $l.TYPE.select && cu.test(e.value) && !!e.options.other && (e.options.other.value.length === 0 || e.options.other.value.length > 0 && e.options.other.value[0]?.type === $l.TYPE.literal);
}
function du(e) {
	if (!e.includes("_gt_")) return e;
	let t = [];
	au({
		icuString: e,
		shouldVisit: uu,
		visitor: function(e) {
			t.push({
				start: e.location?.start.offset ?? 0,
				end: e.location?.end.offset ?? 0,
				otherStart: e.options.other.location?.start.offset ?? 0,
				otherEnd: e.options.other.location?.end.offset ?? 0
			});
		},
		options: {
			recurseIntoVisited: !1,
			captureLocation: !0
		}
	});
	let n = [], r = 0;
	for (let i = 0; i < t.length; i++) {
		let { start: a, end: o, otherStart: s, otherEnd: c } = t[i];
		n.push(e.slice(r, a)), n.push(e.slice(a, a + 4 + 1)), n.push(String(i + 1)), n.push(e.slice(a + 4 + 1, s)), n.push("{}"), n.push(e.slice(c, o)), r = o;
	}
	return n.push(e.slice(r, e.length)), n.join("");
}
function fu(e) {
	if (!e.includes("_gt_")) return {};
	let t = 1, n = {};
	return au({
		icuString: e,
		shouldVisit: uu,
		visitor: function(e) {
			n[e.value + t] = e.options.other.value.length ? e.options.other.value[0]?.value : "", t += 1;
		},
		options: { recurseIntoVisited: !1 }
	}), n;
}
function pu(e) {
	return e.includes("_gt_") ? nu.printAST(au({
		icuString: e,
		shouldVisit: lu,
		visitor: function(e) {
			e.type = $l.TYPE.argument, delete e.options;
		},
		options: { recurseIntoVisited: !1 }
	})) : e;
}
function X(e, t) {
	if (e == null) throw Error("Cannot index into an undefined dictionary");
	return e[t];
}
function mu(e, t, n) {
	e[t] = n;
}
var Z = "@generaltranslation/react-core", hu = `${Z} Error: Production environments cannot include an api key.`, gu = `${Z} Error: Fetching batched translations failed`, _u = (e, t) => e ? `${Z} Error: Translation failed for id: ${e}, hash: ${t} ` : `${Z} Error: Translation failed for hash: ${t}`, vu = (e, t) => `${Z} Error: error rendering string ${t ? `for id: "${t}"` : ""} original message: "${e}"`, yu = (e, t, n = "tx") => `${Z} Error: string translation error. ${n}("${e}")${t ? ` with id "${t}"` : ""} could not locate translation.`, bu = (e) => `${Z} Error: Dictionary subtree not found for id: "${e}"`, xu = (e) => `${Z} Error: Invalid ICU string dictionary entry found for id: "${e}"`, Su = `${Z} Warning: Translation cloud services require a project ID! Find yours at generaltranslation.com/dashboard.`, Cu = (e) => `${Z} Warning: No valid dictionary entry found for id: "${e}"`, wu = `${Z} Warning: A development API key is required for runtime translation!  Find your development API key: generaltranslation.com/dashboard.  (Or, disable this warning message by setting runtimeUrl to an empty string which disables runtime translation.)`, Tu = `${Z} Warning: Runtime translation timed out.`, Eu = `${Z} Warning: No dictionary was found. Ensure you are either passing your dictionary to the <GTProvider>.`;
function Du(e) {
	return /* @__PURE__ */ Error(`${Z}: The ${e} function was not overridden. This is likely the result of importing directly from "generaltranslation/react-core".`);
}
function Ou({}) {
	throw Du("readAuthFromEnv");
}
var ku = {
	pl: "placeholder",
	ti: "title",
	alt: "alt",
	arl: "aria-label",
	arb: "aria-labelledby",
	ard: "aria-describedby"
}, Au = (e) => {
	if (!e) return "";
	let { type: t, props: n } = e;
	if (t && typeof t == "function") {
		if ("displayName" in t && typeof t.displayName == "string" && t.displayName) return t.displayName;
		if ("name" in t && typeof t.name == "string" && t.name) return t.name;
	}
	return t && typeof t == "string" ? t : n.href ? "a" : n["data-_gt"]?.id ? `C${n["data-_gt"].id}` : "function";
}, ju = (e) => {
	let { props: t } = e, n = { t: Au(e) };
	if (t["data-_gt"]) {
		let e = t["data-_gt"], r = e.transformation;
		if (r === "variable") {
			let n = e.variableType || "variable", r = Zs(t, n), i = iu(n);
			return {
				i: e.id,
				k: r,
				v: i
			};
		}
		n.i = e.id, n.d = ((e, t, n) => {
			let r = Object.entries(ku).reduce((e, [n, r]) => (t[r] && (e[n] = t[r]), e), {});
			if (e === "plural" && n) {
				let e = {};
				Object.entries(n).forEach(([t, n]) => {
					e[t] = Nu(n);
				}), r = {
					...r,
					b: e,
					t: "p"
				};
			}
			if (e === "branch" && n) {
				let e = {};
				Object.entries(n).forEach(([t, n]) => {
					e[t] = Nu(n);
				}), r = {
					...r,
					b: e,
					t: "b"
				};
			}
			return Object.keys(r).length ? r : void 0;
		})(r, t, e.branches);
		let i = Object.entries(ku).reduce((e, [n, r]) => (t[r] && (e[n] = t[r]), e), {});
		if (r === "plural" && e.branches) {
			let t = {};
			Object.entries(e.branches).forEach(([e, n]) => {
				t[e] = Nu(n);
			}), i = {
				...i,
				b: t,
				t: "p"
			};
		}
		if (r === "branch" && e.branches) {
			let t = {};
			Object.entries(e.branches).forEach(([e, n]) => {
				t[e] = Nu(n);
			}), i = {
				...i,
				b: t,
				t: "b"
			};
		}
		n.d = Object.keys(i).length ? i : void 0;
	}
	return t.children && (n.c = Nu(t.children)), n;
}, Mu = (e) => {
	return n = e, t.isValidElement(n) ? ju(e) : typeof e == "number" ? e.toString() : e;
	var n;
};
function Nu(e) {
	return Array.isArray(e) ? e.map(Mu) : Mu(e);
}
function Pu(e) {
	if (typeof e == "string") return !0;
	if (Array.isArray(e)) {
		if (typeof e?.[0] != "string") return !1;
		let t = e?.[1];
		if (t === void 0 || t && typeof t == "object") return !0;
	}
	return !1;
}
function Fu(e, t) {
	let n = e, r = t.split(".");
	for (let e of r) {
		if (typeof n != "object" && !Array.isArray(n)) return;
		n = X(n, e);
	}
	return n;
}
function Iu(e) {
	if (Array.isArray(e)) {
		if (e.length === 1) return { entry: e[0] };
		if (e.length === 2) return {
			entry: e[0],
			metadata: e[1]
		};
	}
	return { entry: e };
}
var Lu = (e = "production") => ({
	method: "default",
	timeout: e === "development" ? 8e3 : 12e3
});
function Ru(e) {
	return e !== void 0 && (typeof e == "string" || !!Array.isArray(e) && (e.length === 1 || e.length === 2) && typeof e[0] == "string" && (e.length !== 2 || typeof e[1] == "object" && e[1] !== null && ("$context" in e[1] || "$maxChars" in e[1] || "$_hash" in e[1])));
}
var zu = (e) => typeof e == "string" || Array.isArray(e), Bu = (e) => typeof e == "object" && !!e && !Array.isArray(e);
function Vu(e, t) {
	if (Array.isArray(e)) return e.map((e, n) => Ru(e) ? t[n] : Vu(e, t[n]));
	let n = {
		...Object.fromEntries(Object.entries(e).filter(([, e]) => zu(e))),
		...Object.fromEntries(Object.entries(t).filter(([, e]) => zu(e)))
	}, r = Object.entries(e).filter(([, e]) => Bu(e)).map(([e]) => e), i = Object.entries(t).filter(([, e]) => Bu(e)).map(([e]) => e), a = /* @__PURE__ */ new Set([...r, ...i]);
	for (let r of a) n[r] = Vu(X(e, r) || {}, X(t, r) || {});
	return n;
}
function Hu({ dictionary: e, id: t }) {
	if (t === "") return e;
	let n = e, r = t.split(".");
	for (let e of r) n = X(n, e);
	return n;
}
var Uu = [
	"constructor",
	"prototype",
	"__proto__"
];
function Wu(e, t, n, r) {
	if (Ru(t)) return e;
	let i = n.split(".");
	i.forEach((e) => {
		if (function(e) {
			return !!Uu.includes(e);
		}(e)) throw Error(`Invalid key: ${e}`);
	}), t ||= {};
	for (let e of i.slice(0, -1)) X(t, e) ?? mu(t, e, Array.isArray(X(r, e)) ? [] : {}), t = X(t, e), r = X(r, e);
	mu(t, i[i.length - 1], e);
}
function Gu(e) {
	let t = {};
	return Array.isArray(e) && (t = []), Object.entries(e).forEach(([e, n]) => {
		if (Ru(n)) {
			let { entry: r } = Iu(n);
			mu(t, e, r);
		} else mu(t, e, Gu(n));
	}), t;
}
function Ku(e) {
	return function(e) {
		if (sc(e), fc) return e.toHex();
		let t = "";
		for (let n = 0; n < e.length; n++) t += pc[e[n]];
		return t;
	}(wc(function(e) {
		if (typeof e != "string") throw TypeError("string expected");
		return new Uint8Array(new TextEncoder().encode(e));
	}(e))).slice(0, 16);
}
function qu({ source: e, context: t, id: n, maxChars: r, dataFormat: i }, a = Ku) {
	let o;
	return o = i === "JSX" ? Yu(e) : e, a(ac({
		source: o,
		...n && { id: n },
		...t && { context: t },
		...r != null && { maxChars: Math.abs(r) },
		...i && { dataFormat: i }
	}));
}
var Ju = (e) => {
	if (e && typeof e == "object") {
		let t = {};
		if ("c" in e && e.c && (t.c = Yu(e.c)), "d" in e) {
			let n = e?.d;
			n?.b && (t.b = Object.fromEntries(Object.entries(n.b).map(([e, t]) => [e, Yu(t)]))), n?.t && (t.t = n.t);
		}
		return oc(e) ? {
			k: e.k,
			...e.v && { v: e.v }
		} : t;
	}
	return e;
};
function Yu(e) {
	return Array.isArray(e) ? e.map(Ju) : Ju(e);
}
function Xu(e, t = "") {
	let n = !1;
	return Object.entries(e).forEach(([r, i]) => {
		let a = t ? `${t}.${r}` : r;
		if (Ru(i)) {
			let { entry: t, metadata: o } = Iu(i);
			o?.$_hash || (o ||= {}, o.$_hash = qu({
				source: du(t),
				...o?.$context && { context: o.$context },
				...o?.$maxChars != null && { maxChars: Math.abs(o.$maxChars) },
				id: a,
				dataFormat: "ICU"
			}), mu(e, r, [t, o]), n = !0);
		} else {
			let { updateDictionary: e } = Xu(i, a);
			n ||= e;
		}
	}), {
		dictionary: e,
		updateDictionary: n
	};
}
function Zu(e, t, n) {
	let r = Hu({
		dictionary: e,
		id: n
	});
	if (!r) throw Error(bu(n));
	if (Ru(r)) throw Error(`${Z} Error: Cannot inject and merge a dictionary entry`);
	return function(e, t, n) {
		let r = Fu(e, n);
		if (!r) throw Error(bu(n));
		if (Ru(r)) throw Error(`${Z} Error: Cannot inject and merge a dictionary entry`);
		let i = n.split("."), a = i.slice(0, -1), o = i[i.length - 1], s = e;
		return a.forEach((e) => {
			s = X(s, e);
		}), mu(s, o, t), e;
	}(e, Vu(r, t), n);
}
function Qu(e, t, n = "") {
	let r = [];
	return Object.entries(e).forEach(([e, i]) => {
		let a = n ? `${n}.${e}` : e;
		if (Ru(i)) {
			let { entry: n, metadata: o } = Iu(i);
			X(t, e) || r.push({
				source: n,
				metadata: {
					$id: a,
					$context: o?.$context,
					$maxChars: o?.$maxChars,
					$_hash: o?.$_hash || ""
				}
			});
		} else r.push(...Qu(i, X(t, e) || (Array.isArray(i) ? [] : {}), a));
	}), r;
}
function $u(e) {
	if (e.lastIndexOf(":") === -1) return null;
	let t = e.slice(e.lastIndexOf(":") + 1);
	try {
		return JSON.parse(function(e) {
			if (typeof Buffer < "u") return Buffer.from(e, "base64").toString("utf8");
			let t = atob(e), n = new Uint8Array(t.length);
			for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
			return new TextDecoder().decode(n);
		}(t));
	} catch {
		return null;
	}
}
function ed(e) {
	return typeof e == "string" && e.lastIndexOf(":") !== -1 ? e.slice(0, e.lastIndexOf(":")) : e;
}
var td = r(void 0);
globalThis.__DANGEROUS_USE_REGISTRY__ ?? (globalThis.__DANGEROUS_USE_REGISTRY__ = /* @__PURE__ */ new Map());
try {
	Function("o", "k", "return o[k]")(e, "use");
} catch {}
function nd({ gt: e, locale: t, versionId: n, defaultLocale: r, runtimeUrl: l, renderSettings: u, setTranslations: d, environment: f, ...p }) {
	let m = !!e.projectId && !!l && !!e.devApiKey && f === "development";
	if (!m) {
		let e = (e) => Promise.reject(/* @__PURE__ */ Error(`${e}() failed because translation is disabled`));
		return {
			developmentApiEnabled: m,
			registerIcuForTranslation: () => e("registerIcuForTranslation"),
			registerJsxForTranslation: () => e("registerJsxForTranslation")
		};
	}
	let h = s({
		gt: e,
		locale: t,
		baseMetadata: {
			...p,
			projectId: e.projectId,
			sourceLocale: r
		},
		timeout: u.timeout
	});
	h.current.gt = e, h.current.locale = t, h.current.baseMetadata = {
		...p,
		projectId: e.projectId,
		sourceLocale: r
	}, h.current.timeout = u.timeout;
	let g = s(!1), _ = s(null), [v, y] = c(0), b = i((e) => {
		d((t) => {
			let n = Object.keys(e);
			if (n.length === 0) return t;
			let r = t ? { ...t } : {}, i = !1;
			for (let a of n) {
				let n = e[a], o = t?.[a];
				Object.is(o, n) || (r[a] = n, i = !0);
			}
			return i ? r : t;
		});
	}, [d]), x = i((e) => {
		_.current = {
			..._.current ?? {},
			...e
		}, g.current && y((e) => e + 1);
	}, []);
	a(() => {
		if (g.current = !0, _.current) {
			let e = _.current;
			_.current = null, b(e);
		}
		return () => {
			g.current = !1;
		};
	}, [b]), a(() => {
		if (!g.current) return;
		let e = _.current;
		e && (_.current = null, b(e));
	}, [v, b]);
	let S = s(0), C = s(/* @__PURE__ */ new Map()), ee = s(/* @__PURE__ */ new Map()), te = i(async (e) => {
		if (e.size === 0) return {};
		S.current += 1;
		let { gt: t, locale: n, baseMetadata: r, timeout: i } = h.current, a = Array.from(e.values()), o = {}, s = /* @__PURE__ */ new Map();
		try {
			let e = {};
			for (let t of a) {
				let { source: n, metadata: r } = t;
				e[r.hash] = {
					source: n,
					metadata: {
						...r,
						dataFormat: t.dataFormat
					}
				};
			}
			let c = await t.translateMany(e, {
				...r,
				targetLocale: n
			}, i);
			for (let e of a) {
				let { hash: t, id: n } = e.metadata, r = c[t];
				if (r && r.success) {
					let e = r.translation;
					o[t] = e, s.set(t, e);
				} else if (r && r.error) {
					let e = _u(n, t);
					console.warn(`${e} ${r.error || "An upstream error occurred."}`), o[t] = null, s.set(t, null);
				} else {
					let e = _u(n, t);
					console.warn(`${e} Unknown response format.`, r), o[t] = null, s.set(t, null);
				}
			}
		} catch (e) {
			e?.name === "AbortError" ? console.warn(Tu) : console.warn(gu, e), a.forEach((e) => {
				o[e.metadata.hash] = null, s.set(e.metadata.hash, null);
			});
		} finally {
			--S.current, a.forEach((e) => {
				let t = s.get(e.metadata.hash);
				t === void 0 ? (console.warn(`No translation result for ${e.metadata.hash}; resolving as null.`), e.resolve(null)) : e.resolve(t);
			});
		}
		return o;
	}, []), w = s(null), T = s(async () => {}), ne = i((e) => {
		x(e), C.current.size > 0 && (w.current = setTimeout(() => {
			w.current = null, T.current();
		}, 50));
	}, [x]), re = i(() => {
		T.current = async () => {
			if (S.current >= 100) return void (w.current = setTimeout(() => {
				w.current = null, T.current();
			}, 50));
			let e = C.current;
			if (e.size === 0) return;
			let t = Array.from(e.entries()).slice(0, Math.min(25, e.size)), n = new Map(t);
			t.forEach(([t]) => e.delete(t));
			let r = await te(n);
			ne(r);
		};
	}, [te, ne]), ie = i((e = !1) => {
		if (re(), e) return w.current &&= (clearTimeout(w.current), null), void T.current();
		w.current ||= setTimeout(() => {
			w.current = null, T.current();
		}, 50);
	}, [re]), ae = i((e) => (t) => {
		let n = `${t.metadata.hash}:${t.targetLocale}`, r = ee.current.get(n);
		if (r) return r;
		let i = new Promise((r) => {
			let i = e === "JSX" ? {
				dataFormat: "JSX",
				source: t.source,
				metadata: {
					...t.metadata,
					...t.metadata.maxChars != null && { maxChars: Math.abs(t.metadata.maxChars) }
				},
				resolve: r,
				reject: () => {}
			} : {
				dataFormat: "ICU",
				source: t.source,
				metadata: {
					...t.metadata,
					...t.metadata.maxChars != null && { maxChars: Math.abs(t.metadata.maxChars) }
				},
				resolve: r,
				reject: () => {}
			};
			C.current.set(n, i);
			let a = C.current.size >= 25 && S.current < 100;
			ie(a);
		}).finally(() => {
			ee.current.delete(n);
		});
		return ee.current.set(n, i), i;
	}, [ie]), oe = o(() => ae("ICU"), [ae]), se = o(() => ae("JSX"), [ae]);
	return a(() => () => {
		w.current && clearTimeout(w.current);
	}, []), {
		developmentApiEnabled: m,
		registerIcuForTranslation: oe,
		registerJsxForTranslation: se
	};
}
function rd({ gt: e, translations: t, locale: n, defaultLocale: r, translationRequired: i, developmentApiEnabled: a, registerIcuForTranslation: o, environment: s }) {
	function c({ message: t, variables: n, locales: r, fallback: i, id: a, maxChars: o, format: l }) {
		try {
			let a = fu(i || ""), s = e.formatMessage(Object.keys(a).length ? pu(t) : t, {
				locales: r,
				variables: {
					...n,
					...a,
					[ou]: "other"
				},
				dataFormat: l
			});
			return e.formatCutoff(s, { maxChars: o });
		} catch (l) {
			if (s === "production") console.warn(((e, t) => `${Z} Warning: failed to render string ${t ? `for id: "${t}"` : ""} original message: "${e}"`)(t, a), "Error: ", l);
			else {
				if (!i) throw Error(`${vu(t, a)} Error: ${l}`);
				console.error(vu(t, a), "Error: ", l);
			}
			return i ? c({
				message: i,
				locales: r,
				variables: n,
				id: a,
				maxChars: o
			}) : e.formatCutoff(t, { maxChars: o });
		}
	}
	function l(e, t = {}) {
		if (!e || typeof e != "string") return null;
		let { $id: n, $context: r, $maxChars: i, $_hash: a, $format: o, ...s } = t;
		return {
			id: n,
			context: r,
			maxChars: i,
			_hash: a,
			variables: s,
			calculateHash: () => qu({
				source: du(e),
				...r && { context: r },
				...i != null && { maxChars: Math.abs(i) },
				...n && { id: n },
				dataFormat: o || "ICU"
			}),
			renderMessage: (e, t, r) => c({
				message: e,
				locales: t,
				variables: s,
				id: n,
				fallback: r,
				maxChars: i,
				format: o
			})
		};
	}
	function u(e, n, r) {
		let i, a = "";
		return n && (i = t?.[n]), r && i === void 0 && (a = r, i = t?.[r]), i === void 0 && (a = e(), i = t?.[a]), {
			translationEntry: i,
			hash: a
		};
	}
	let d = (e, t = {}, s) => {
		let c = l(e, t);
		if (!c) return "";
		let { id: d, context: f, maxChars: p, _hash: m, calculateHash: h, renderMessage: g } = c;
		if (!i) return g(e, [r]);
		let { translationEntry: _, hash: v } = u(h, d, m);
		return _ === null ? g(e, [r]) : _ ? g(_, [n, r], e) : s?.[v] === void 0 ? a ? (o({
			source: du(e),
			targetLocale: n,
			metadata: {
				...f && { context: f },
				...d && { id: d },
				...p != null && { maxChars: p },
				hash: v || ""
			}
		}), g(e, [r])) : (console.warn(yu(e, d, "gt")), g(e, [r])) : s?.[v] ? g(s?.[v], [n, r], e) : g(e, [r]);
	};
	return {
		_gtFunction: d,
		_mFunction: (e, s = {}, l) => {
			if (!e) return e;
			let u = $u(e);
			if (!u || !u.$_hash || !u.$_source) return d(e, s, l);
			let { $_hash: f, $_source: p, $context: m, $hash: h, $id: g, $maxChars: _, $format: v, ...y } = u, b = (e, t, n) => c({
				message: e,
				locales: t,
				variables: y,
				fallback: n,
				maxChars: _,
				format: v
			});
			if (!i) return b(p, [r]);
			let x = t?.[u.$_hash];
			return x === null ? b(p, [r]) : x ? b(x, [n, r], p) : a ? l?.[f] === void 0 ? (o({
				source: du(p),
				targetLocale: n,
				metadata: {
					...m && { context: m },
					..._ != null && { maxChars: _ },
					hash: f
				}
			}), b(p, [r])) : l?.[f] ? b(l?.[f], [n, r], p) : b(p, [r]) : (console.warn(yu(p, ed(e), "m")), b(p, [r]));
		},
		_filterMessagesForPreload: (e) => {
			let t = [];
			for (let { message: n, ...r } of e) {
				let e = l(n, r);
				if (!e) continue;
				let { id: i, _hash: a, calculateHash: o } = e, { translationEntry: s, hash: c } = u(o, i, a);
				s || t.push({
					message: n,
					...r,
					$_hash: c
				});
			}
			return t;
		},
		_preloadMessages: async (e) => {
			let t = {};
			return await Promise.all(e.map(async ({ message: e, ...r }) => {
				let i = l(e, r);
				if (!i) return;
				let { id: a, context: s, maxChars: c, _hash: d, calculateHash: f } = i, { translationEntry: p, hash: m } = u(f, a, d);
				p && (t[m] = p), t[m] = await o({
					source: du(e),
					targetLocale: n,
					metadata: {
						...s && { context: s },
						...a && { id: a },
						...c != null && { maxChars: c },
						hash: m
					}
				});
			})), t;
		}
	};
}
function id(e, t, n, r, a, o, s, c, l, u, d) {
	return i((i, c = {}) => {
		if (!t) return "";
		let f = Fu(t, i);
		if (!f) return console.warn(Cu(i)), "";
		if (!Pu(f)) return console.warn(((e) => `${Z} Warning: Invalid dictionary entry found for id: "${e}"`)(i)), "";
		let { entry: p, metadata: m } = Iu(f);
		if (!p || typeof p != "string") return "";
		let { $format: h, ...g } = c, _ = (t, n, r) => {
			try {
				let i = fu(r || ""), a = e.formatMessage(Object.keys(i).length ? pu(t) : t, {
					locales: n,
					variables: {
						...g,
						...i,
						[ou]: "other"
					},
					dataFormat: h
				});
				return e.formatCutoff(a, { maxChars: m?.$maxChars ?? c.$maxChars });
			} catch (a) {
				if (d === "production") console.warn(((e) => `${Z} Warning: Invalid ICU string dictionary entry found for id: "${e}"`)(i), "Error: ", a);
				else {
					if (!r) throw Error(`${xu(i)} Error: ${a}`);
					console.error(xu(i), "Error: ", a);
				}
				return r ? _(r, n) : e.formatCutoff(t, { maxChars: m?.$maxChars ?? c.$maxChars });
			}
		};
		if (!s) return _(p, [o]);
		let v = Fu(n || {}, i);
		if (v && Pu(v)) {
			let { entry: e } = Iu(v);
			return _(e, [a, o]);
		}
		let y = r?.[i], b = "", x = () => qu({
			source: du(p),
			...m?.$context && { context: m.$context },
			...m?.$maxChars != null && { maxChars: Math.abs(m.$maxChars) },
			id: i,
			dataFormat: "ICU"
		});
		return y ||= (b = x(), r?.[b]), y ? _(y, [a, o], p) : (y === null || l && u({
			source: du(p),
			targetLocale: a,
			metadata: {
				...m?.$context && { context: m.$context },
				...m?.$maxChars != null && { maxChars: m.$maxChars },
				id: i,
				hash: b || x()
			}
		}), _(p, [o]));
	}, [
		t,
		n,
		r,
		a,
		o,
		s,
		l,
		u,
		c
	]);
}
function ad({ _locale: e, defaultLocale: t, locales: n, ssr: r, localeCookieName: i, customMapping: a, useDetermineLocale: s, enableI18n: c, reloadOnLocaleUpdate: l }) {
	let u = o(() => Array.from(/* @__PURE__ */ new Set([t, ...c ? n : []])), [
		t,
		n,
		c
	]), [d, f] = s({
		locale: e,
		defaultLocale: t,
		locales: u,
		ssr: r,
		localeCookieName: i,
		customMapping: a,
		enableI18n: c,
		reloadOnLocaleUpdate: l
	}), [p, m] = o(() => {
		let e = ca(t, d, u, a), n = e && ua(t, d);
		if (!a) {
			let e = [];
			if (u.forEach((t) => {
				fi(t) || e.push(t);
			}), e.length) throw Error(((e) => `${Z} Error: Invalid locale codes in your configuration. Specify a list of valid locales or use "customMapping" to define aliases for the following invalid locales: ${e.join(", ")}.`)(e));
		}
		if (a) {
			let e = [];
			if (u.forEach((t) => {
				fi(t, a) || e.push(t);
			}), e.length) throw Error(((e) => `${Z} Error: Invalid canonical locale codes in your configuration: ${e.join(", ")}.`)(e));
		}
		return [e, n];
	}, [
		t,
		d,
		u
	]);
	return {
		locale: d,
		setLocale: f,
		locales: u,
		translationRequired: p,
		dialectTranslationRequired: m
	};
}
function od({ devApiKey: e, projectId: t, runtimeUrl: n, loadTranslationsType: r, cacheUrl: i, locales: o, environment: s }) {
	a(() => {
		if (s === "production" && e) throw Error(hu);
		if (r === "custom" || !i && !n || t || s !== "development" || console.warn(Su), t && n && r !== "custom" && !e && s === "development" && console.warn(wu), n === rc || i === nc && r === "default") {
			let e = o.filter((e) => !Ys(e));
			e.length && console.warn(((e) => `${Z} Warning: The following locales are currently unsupported by our service: ${e.map((e) => {
				let { name: t } = sa(e);
				return `${e} (${t})`;
			}).join(", ")}`)(e));
		}
	}, [
		e,
		r,
		i,
		n,
		t,
		o
	]);
}
async function sd(e, t) {
	let n = Array.from(/* @__PURE__ */ new Set([e, sa(e).languageCode]));
	for (let e of n) try {
		let n = await t(e);
		if (n) return n;
	} catch {}
	console.warn(Eu);
}
function cd({ _translations: e, translationRequired: t, loadTranslationsType: n, loadTranslations: r, locale: i, cacheUrl: o, projectId: l, _versionId: u, gt: d }) {
	let [f, p] = c(e || (t && n !== "disabled" ? null : {})), m = s(!1);
	return a(() => {
		m.current ? p(t && n !== "disabled" ? null : {}) : m.current = !0;
	}, [i, n]), a(() => {
		if (f || !t || n === "disabled") return;
		let e = !0;
		return (async () => {
			let t;
			switch (n) {
				case "custom":
					if (r) try {
						t = await r(i);
					} catch (e) {
						console.error(((e = "") => `${Z} Error: Failed to fetch locally stored translations. If using a custom loadTranslations(${e}), make sure it is correctly implemented.`)(i), e);
					}
					break;
				case "default": try {
					t = await async function({ cacheUrl: e, projectId: t, locale: n, versionId: r, gt: i }) {
						return !t || !e || !n ? {} : (n = i.resolveCanonicalLocale(n), await (await fetch(r ? `${e}/${t}/${n}/${r}` : `${e}/${t}/${n}`)).json());
					}({
						cacheUrl: o || nc,
						projectId: l,
						locale: i,
						versionId: u,
						gt: d
					});
				} catch (e) {
					console.error(e);
				}
			}
			t ||= {}, e && p(t);
		})(), () => {
			e = !1;
		};
	}, [
		f,
		t,
		n,
		o,
		l,
		i,
		u,
		d
	]), {
		translations: f,
		setTranslations: p
	};
}
function ld(e, t, n, r, a, o, s, c, l, u, d, f) {
	return i((i, s, l = {}) => {
		if (s === "") throw Error(`${Z} Error: You cannot provide an empty id to t.obj()`);
		let p = Hu({
			dictionary: e,
			id: s
		});
		if (!p) return console.warn(Cu(s)), {};
		if (Ru(p)) return f(i, l);
		if (!c) return Gu(p);
		let m = function({ dictionary: e, id: t, sourceDictionary: n }) {
			if (t === "") return e;
			let r = e, i = n, a = t.split(".");
			for (let e of a) X(r, e) === void 0 && (Array.isArray(X(i, e)) ? mu(r, e, []) : mu(r, e, {})), r = X(r, e);
			return r;
		}({
			dictionary: t,
			id: s,
			sourceDictionary: t
		}), { dictionary: h, updateDictionary: g } = Xu(structuredClone(p), s), _ = Qu(h, m, s), { dictionary: v, updateDictionary: y } = function(e, t, n, r, i = "") {
			let a = !1, o = i ? i.split(".") : [];
			return r.forEach(({ metadata: r }) => {
				let { $_hash: i, $id: s } = r, c = o.length > 0 ? s.split(".").slice(o.length).join(".") : s, l = Fu(t, c), u;
				Ru(l) && (u = Iu(l).entry);
				let d = n[i] || u;
				d && (Wu(d, t, c, e), a = !0);
			}), {
				dictionary: t,
				updateDictionary: a
			};
		}(h, structuredClone(m), a || {}, _, s), b = function(e, t, n, r = "") {
			let i = r ? r.split(".") : [];
			return n.forEach(({ source: n, metadata: r }) => {
				let { $id: a } = r, o = i.length > 0 ? a.split(".").slice(i.length).join(".") : a, s = Fu(t, o), c;
				Ru(s) && (c = Iu(s).entry), Wu(c || n, t, o, e);
			}), t;
		}(h, structuredClone(v), _, s);
		return u && Promise.allSettled(_.map(async (e) => {
			let { source: t, metadata: n } = e, r = n?.$id;
			return [r, await d({
				source: du(t),
				targetLocale: o,
				metadata: {
					...n?.$context && { context: n.$context },
					...n?.$maxChars != null && { maxChars: n.$maxChars },
					id: r,
					hash: n?.$_hash
				}
			})];
		})).then((t) => {
			let n = t.filter((e) => e.status === "fulfilled").map((e) => e.value);
			n.length > 0 && r((t) => function(e, t, n) {
				return t.forEach(([t, r]) => {
					Wu(r, e, t, n);
				}), e;
			}(t, n, e));
		}), g && setTimeout(() => {
			n((e) => Zu(e, h, s));
		}, 0), y && setTimeout(() => {
			r((e) => Vu(e, v));
		}, 0), structuredClone(b);
	}, [
		e,
		a,
		o,
		s,
		c,
		l,
		u,
		d,
		t
	]);
}
function ud({ enableI18n: e }) {
	let [t] = c(e);
	return { enableI18n: t };
}
function dd() {
	throw Du("isSSREnabled");
}
function fd({}) {
	throw Du("useDetermineLocale");
}
function pd({}) {
	throw Du("useRegionState");
}
function md({ children: e, config: t, environment: r = "production", projectId: i = t?.projectId || "", devApiKey: s = t?.devApiKey || "", _versionId: u = t?._versionId, dictionary: d = t?.dictionary || {}, locales: f = t?.locales || [], defaultLocale: p = t?.defaultLocale || Qs, cacheUrl: m = t?.cacheUrl || nc, runtimeUrl: h = t?.runtimeUrl || rc, renderSettings: g = t?.renderSettings || Lu(r), ssr: _ = t?.ssr || dd(), localeCookieName: v = t?.localeCookieName || "generaltranslation.locale", locale: y = "", region: b, loadDictionary: x, loadTranslations: S, fallback: C, translations: ee = null, customMapping: te = t?.customMapping, enableI18n: w = t?.enableI18n === void 0 || t.enableI18n, enableI18nLoaded: T, reloadOnLocaleUpdate: ne, useEnableI18n: re = ud, readAuthFromEnv: ie = Ou, useDetermineLocale: ae = fd, useRegionState: oe = pd, ...se }) {
	y &&= z(y, te);
	let { projectId: E, devApiKey: ce } = ie({
		projectId: i,
		devApiKey: s
	}), { enableI18n: le } = re({
		enableI18n: w,
		enableI18nLoaded: T,
		enableI18nCookieName: "generaltranslation.enable-i18n",
		ssr: _
	}), { locale: D, setLocale: ue, locales: de, translationRequired: fe, dialectTranslationRequired: pe } = ad({
		_locale: y,
		defaultLocale: p,
		locales: f,
		ssr: _,
		localeCookieName: v,
		customMapping: te,
		useDetermineLocale: ae,
		enableI18n: le,
		reloadOnLocaleUpdate: ne
	}), { region: me, setRegion: O } = oe({
		_region: b,
		ssr: _,
		regionCookieName: "generaltranslation.region"
	}), he = o(() => new oa({
		devApiKey: ce,
		sourceLocale: p,
		targetLocale: D,
		projectId: E,
		baseUrl: h || void 0,
		customMapping: te
	}), [
		ce,
		p,
		E,
		h,
		te
	]), ge = o(() => (S ? "custom" : m && E && "default") || "disabled", [
		S,
		m,
		E
	]), { dictionary: _e, setDictionary: ve, dictionaryTranslations: ye, setDictionaryTranslations: be } = function({ _dictionary: e, _dictionaryTranslations: t = {}, loadDictionary: n, locale: r, defaultLocale: i }) {
		let [o, s] = c(e), [l, u] = c(t);
		return a(() => {
			if (!n) return;
			let e = !0;
			return (async () => {
				let t = await sd(i, n) || {}, a = await sd(r, n) || {};
				e && s(t || {}), e && u(a || {});
			})(), () => {
				e = !1;
			};
		}, [
			n,
			r,
			i
		]), {
			dictionary: o,
			setDictionary: s,
			dictionaryTranslations: l,
			setDictionaryTranslations: u
		};
	}({
		_dictionary: d,
		_dictionaryTranslations: {},
		loadDictionary: x,
		locale: D,
		defaultLocale: p
	});
	od({
		devApiKey: ce,
		projectId: E,
		runtimeUrl: h,
		loadTranslationsType: ge,
		cacheUrl: m,
		locales: f,
		environment: r
	});
	let { translations: xe, setTranslations: Se } = cd({
		_translations: ee,
		translationRequired: fe,
		loadTranslationsType: ge,
		loadTranslations: S,
		locale: D,
		cacheUrl: m,
		projectId: E,
		_versionId: u,
		gt: he
	}), { registerIcuForTranslation: Ce, registerJsxForTranslation: we, developmentApiEnabled: Te } = nd({
		gt: he,
		locale: D,
		versionId: u,
		defaultLocale: p,
		runtimeUrl: h,
		renderSettings: g,
		setTranslations: Se,
		environment: r,
		...se
	}), { _gtFunction: Ee, _mFunction: De, _filterMessagesForPreload: Oe, _preloadMessages: ke } = rd({
		gt: he,
		translations: xe,
		locale: D,
		defaultLocale: p,
		translationRequired: fe,
		developmentApiEnabled: Te,
		registerIcuForTranslation: Ce,
		environment: r
	}), Ae = id(he, _e, ye, xe, D, p, fe, pe, Te, Ce, r), k = ld(_e || {}, ye || {}, ve, be, xe, D, p, fe, pe, Te, Ce, Ae), je = !(fe && !xe || !D);
	return l(td.Provider, {
		value: {
			gt: he,
			registerIcuForTranslation: Ce,
			registerJsxForTranslation: we,
			_gtFunction: Ee,
			_mFunction: De,
			_filterMessagesForPreload: Oe,
			_preloadMessages: ke,
			_dictionaryFunction: Ae,
			_dictionaryObjFunction: k,
			developmentApiEnabled: Te,
			locale: D,
			locales: de,
			setLocale: ue,
			defaultLocale: p,
			region: me,
			setRegion: O,
			translations: xe,
			translationRequired: fe,
			dialectTranslationRequired: pe,
			projectId: E,
			renderSettings: g,
			_versionId: u
		},
		children: l(n, {
			fallback: C,
			children: je ? e : C
		})
	});
}
function hd({ projectId: e, devApiKey: t }) {
	try {
		return {
			projectId: e || "",
			devApiKey: t || void 0
		};
	} catch {}
	try {
		return {
			projectId: e || process.env.GT_PROJECT_ID || process.env.REACT_APP_GT_PROJECT_ID || process.env.NEXT_PUBLIC_GT_PROJECT_ID || process.env.GATSBY_GT_PROJECT_ID || "",
			devApiKey: t || process.env.GT_DEV_API_KEY || process.env.GT_API_KEY || process.env.REACT_APP_GT_DEV_API_KEY || process.env.REACT_APP_GT_API_KEY || process.env.NEXT_PUBLIC_GT_DEV_API_KEY || process.env.NEXT_PUBLIC_GT_API_KEY || process.env.GATSBY_GT_DEV_API_KEY || process.env.GATSBY_GT_API_KEY
		};
	} catch (e) {
		console.error(e);
	}
	return {
		projectId: "",
		devApiKey: ""
	};
}
function gd({ _region: e, regionCookieName: t }) {
	let n = typeof document < "u" ? document.cookie.split("; ").find((e) => e.startsWith(`${t}=`))?.split("=")[1] : void 0, r = e || n;
	return n && n !== r && typeof document < "u" && (document.cookie = `${t}=${r};path=/`), r;
}
function _d({ _region: e, ssr: t, regionCookieName: n }) {
	let [r, i] = c(t ? void 0 : gd({
		_region: e,
		regionCookieName: n
	}));
	return a(() => {
		i(gd({
			_region: e,
			regionCookieName: n
		}));
	}, [e, n]), {
		region: r,
		setRegion: (e) => {
			i(e), typeof document < "u" && (document.cookie = `${n}=${e || ""};path=/`);
		}
	};
}
function vd({ enableI18n: e, enableI18nCookieName: t, enableI18nLoaded: n, ssr: r }) {
	let i = n !== void 0, o = s(!0), [l, u] = c(function({ _enableI18n: e, asyncEnabled: t, enableI18nCookieName: n, ssr: r }) {
		if (!t || r) return e;
		let i = yd(n);
		return i === null ? e : i;
	}({
		_enableI18n: e,
		asyncEnabled: i,
		enableI18nCookieName: t,
		ssr: r
	}));
	return a(() => {
		if (r && i && o.current) {
			o.current = !1;
			let e = yd(t);
			e !== null && e !== l && u(e);
			return;
		}
		o.current = !1;
	}, [
		r,
		i,
		t,
		l
	]), a(() => {
		l !== e && (i ? n && (function({ enableI18n: e, enableI18nCookieName: t }) {
			typeof document > "u" || (document.cookie = `${t}=${e ? "true" : "false"};path=/;`);
		}({
			enableI18n: e,
			enableI18nCookieName: t
		}), u(e)) : u(e));
	}, [
		e,
		l,
		i,
		n,
		t
	]), { enableI18n: l };
}
function yd(e) {
	if (typeof document > "u") return null;
	let t = document.cookie.split("; ").find((t) => t.startsWith(`${e}=`))?.split("=")[1];
	return t === "true" || t !== "false" && null;
}
var bd = function(e, t) {
	return bd = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, bd(e, t);
};
function xd(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	function n() {
		this.constructor = e;
	}
	bd(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var Sd = function() {
	return Sd = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Sd.apply(this, arguments);
};
function Cd(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") {
		var i = 0;
		for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	}
	return n;
}
function wd(e, t, n, r) {
	var i, a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
	return a > 3 && o && Object.defineProperty(t, n, o), o;
}
function Td(e, t) {
	return function(n, r) {
		t(n, r, e);
	};
}
function Ed(e, t, n, r, i, a) {
	function o(e) {
		if (e !== void 0 && typeof e != "function") throw TypeError("Function expected");
		return e;
	}
	for (var s, c = r.kind, l = c === "getter" ? "get" : c === "setter" ? "set" : "value", u = !t && e ? r.static ? e : e.prototype : null, d = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}), f = !1, p = n.length - 1; p >= 0; p--) {
		var m = {};
		for (var h in r) m[h] = h === "access" ? {} : r[h];
		for (var h in r.access) m.access[h] = r.access[h];
		m.addInitializer = function(e) {
			if (f) throw TypeError("Cannot add initializers after decoration has completed");
			a.push(o(e || null));
		};
		var g = (0, n[p])(c === "accessor" ? {
			get: d.get,
			set: d.set
		} : d[l], m);
		if (c === "accessor") {
			if (g === void 0) continue;
			if (typeof g != "object" || !g) throw TypeError("Object expected");
			(s = o(g.get)) && (d.get = s), (s = o(g.set)) && (d.set = s), (s = o(g.init)) && i.unshift(s);
		} else (s = o(g)) && (c === "field" ? i.unshift(s) : d[l] = s);
	}
	u && Object.defineProperty(u, r.name, d), f = !0;
}
function Dd(e, t, n) {
	for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
	return r ? n : void 0;
}
function Od(e) {
	return typeof e == "symbol" ? e : `${e}`;
}
function kd(e, t, n) {
	return typeof t == "symbol" && (t = t.description ? `[${t.description}]` : ""), Object.defineProperty(e, "name", {
		configurable: !0,
		value: n ? `${n} ${t}` : t
	});
}
function Ad(e, t) {
	if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function jd(e, t, n, r) {
	return new (n ||= Promise)(function(i, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			var t;
			e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
				e(t);
			})).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function Md(e, t) {
	var n, r, i, a = {
		label: 0,
		sent: function() {
			if (1 & i[0]) throw i[1];
			return i[1];
		},
		trys: [],
		ops: []
	}, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
	return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
		return this;
	}), o;
	function s(s) {
		return function(c) {
			return function(s) {
				if (n) throw TypeError("Generator is already executing.");
				for (; o && (o = 0, s[0] && (a = 0)), a;) try {
					if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
					switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
						case 0:
						case 1:
							i = s;
							break;
						case 4: return a.label++, {
							value: s[1],
							done: !1
						};
						case 5:
							a.label++, r = s[1], s = [0];
							continue;
						case 7:
							s = a.ops.pop(), a.trys.pop();
							continue;
						default:
							if (i = a.trys, !((i = i.length > 0 && i[i.length - 1]) || s[0] !== 6 && s[0] !== 2)) {
								a = 0;
								continue;
							}
							if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
								a.label = s[1];
								break;
							}
							if (s[0] === 6 && a.label < i[1]) {
								a.label = i[1], i = s;
								break;
							}
							if (i && a.label < i[2]) {
								a.label = i[2], a.ops.push(s);
								break;
							}
							i[2] && a.ops.pop(), a.trys.pop();
							continue;
					}
					s = t.call(e, a);
				} catch (e) {
					s = [6, e], r = 0;
				} finally {
					n = i = 0;
				}
				if (5 & s[0]) throw s[1];
				return {
					value: s[0] ? s[1] : void 0,
					done: !0
				};
			}([s, c]);
		};
	}
}
var Nd = Object.create ? function(e, t, n, r) {
	r === void 0 && (r = n);
	var i = Object.getOwnPropertyDescriptor(t, n);
	i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
		enumerable: !0,
		get: function() {
			return t[n];
		}
	}), Object.defineProperty(e, r, i);
} : function(e, t, n, r) {
	r === void 0 && (r = n), e[r] = t[n];
};
function Pd(e, t) {
	for (var n in e) n === "default" || Object.prototype.hasOwnProperty.call(t, n) || Nd(t, e, n);
}
function Fd(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Id(e, t) {
	var n = typeof Symbol == "function" && e[Symbol.iterator];
	if (!n) return e;
	var r, i, a = n.call(e), o = [];
	try {
		for (; (t === void 0 || t-- > 0) && !(r = a.next()).done;) o.push(r.value);
	} catch (e) {
		i = { error: e };
	} finally {
		try {
			r && !r.done && (n = a.return) && n.call(a);
		} finally {
			if (i) throw i.error;
		}
	}
	return o;
}
function Ld() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Id(arguments[t]));
	return e;
}
function Rd() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	var r = Array(e), i = 0;
	for (t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function zd(e, t, n) {
	if (n || arguments.length === 2) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r ||= Array.prototype.slice.call(t, 0, i), r[i] = t[i]);
	return e.concat(r || Array.prototype.slice.call(t));
}
function Bd(e) {
	return this instanceof Bd ? (this.v = e, this) : new Bd(e);
}
function Vd(e, t, n) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var r, i = n.apply(e, t || []), a = [];
	return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", function(e) {
		return function(t) {
			return Promise.resolve(t).then(e, l);
		};
	}), r[Symbol.asyncIterator] = function() {
		return this;
	}, r;
	function o(e, t) {
		i[e] && (r[e] = function(t) {
			return new Promise(function(n, r) {
				a.push([
					e,
					t,
					n,
					r
				]) > 1 || s(e, t);
			});
		}, t && (r[e] = t(r[e])));
	}
	function s(e, t) {
		try {
			(n = i[e](t)).value instanceof Bd ? Promise.resolve(n.value.v).then(c, l) : u(a[0][2], n);
		} catch (e) {
			u(a[0][3], e);
		}
		var n;
	}
	function c(e) {
		s("next", e);
	}
	function l(e) {
		s("throw", e);
	}
	function u(e, t) {
		e(t), a.shift(), a.length && s(a[0][0], a[0][1]);
	}
}
function Hd(e) {
	var t = {}, n;
	return r("next"), r("throw", function(e) {
		throw e;
	}), r("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function r(r, i) {
		t[r] = e[r] ? function(t) {
			return (n = !n) ? {
				value: Bd(e[r](t)),
				done: !1
			} : i ? i(t) : t;
		} : i;
	}
}
function Ud(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var t, n = e[Symbol.asyncIterator];
	return n ? n.call(e) : (e = Fd(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
		return this;
	}, t);
	function r(n) {
		t[n] = e[n] && function(t) {
			return new Promise(function(r, i) {
				(function(e, t, n, r) {
					Promise.resolve(r).then(function(t) {
						e({
							value: t,
							done: n
						});
					}, t);
				})(r, i, (t = e[n](t)).done, t.value);
			});
		};
	}
}
function Wd(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
var Gd = Object.create ? function(e, t) {
	Object.defineProperty(e, "default", {
		enumerable: !0,
		value: t
	});
} : function(e, t) {
	e.default = t;
}, Kd = function(e) {
	return Kd = Object.getOwnPropertyNames || function(e) {
		var t = [];
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
		return t;
	}, Kd(e);
};
function qd(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (e != null) for (var n = Kd(e), r = 0; r < n.length; r++) n[r] !== "default" && Nd(t, e, n[r]);
	return Gd(t, e), t;
}
function Jd(e) {
	return e && e.__esModule ? e : { default: e };
}
function Yd(e, t, n, r) {
	if (n === "a" && !r) throw TypeError("Private accessor was defined without a getter");
	if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
	return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function Xd(e, t, n, r, i) {
	if (r === "m") throw TypeError("Private method is not writable");
	if (r === "a" && !i) throw TypeError("Private accessor was defined without a setter");
	if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
	return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
}
function Zd(e, t) {
	if (t === null || typeof t != "object" && typeof t != "function") throw TypeError("Cannot use 'in' operator on non-object");
	return typeof e == "function" ? t === e : e.has(t);
}
function Qd(e, t, n) {
	if (t != null) {
		if (typeof t != "object" && typeof t != "function") throw TypeError("Object expected.");
		var r, i;
		if (n) {
			if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
			r = t[Symbol.asyncDispose];
		}
		if (r === void 0) {
			if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
			r = t[Symbol.dispose], n && (i = r);
		}
		if (typeof r != "function") throw TypeError("Object not disposable.");
		i && (r = function() {
			try {
				i.call(this);
			} catch (e) {
				return Promise.reject(e);
			}
		}), e.stack.push({
			value: t,
			dispose: r,
			async: n
		});
	} else n && e.stack.push({ async: !0 });
	return t;
}
var $d = typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
	var r = Error(n);
	return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
};
function ef(e) {
	function t(t) {
		e.error = e.hasError ? new $d(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
	}
	var n, r = 0;
	return function i() {
		for (; n = e.stack.pop();) try {
			if (!n.async && r === 1) return r = 0, e.stack.push(n), Promise.resolve().then(i);
			if (n.dispose) {
				var a = n.dispose.call(n.value);
				if (n.async) return r |= 2, Promise.resolve(a).then(i, function(e) {
					return t(e), i();
				});
			} else r |= 1;
		} catch (e) {
			t(e);
		}
		if (r === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
		if (e.hasError) throw e.error;
	}();
}
function tf(e, t) {
	return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, a) {
		return n ? t ? ".jsx" : ".js" : !r || i && a ? r + i + "." + a.toLowerCase() + "js" : e;
	}) : e;
}
var nf, rf, af, of, sf = Object.freeze({
	__proto__: null,
	__addDisposableResource: Qd,
	get __assign() {
		return Sd;
	},
	__asyncDelegator: Hd,
	__asyncGenerator: Vd,
	__asyncValues: Ud,
	__await: Bd,
	__awaiter: jd,
	__classPrivateFieldGet: Yd,
	__classPrivateFieldIn: Zd,
	__classPrivateFieldSet: Xd,
	__createBinding: Nd,
	__decorate: wd,
	__disposeResources: ef,
	__esDecorate: Ed,
	__exportStar: Pd,
	__extends: xd,
	__generator: Md,
	__importDefault: Jd,
	__importStar: qd,
	__makeTemplateObject: Wd,
	__metadata: Ad,
	__param: Td,
	__propKey: Od,
	__read: Id,
	__rest: Cd,
	__rewriteRelativeImportExtension: tf,
	__runInitializers: Dd,
	__setFunctionName: kd,
	__spread: Ld,
	__spreadArray: zd,
	__spreadArrays: Rd,
	__values: Fd,
	default: {
		__extends: xd,
		__assign: Sd,
		__rest: Cd,
		__decorate: wd,
		__param: Td,
		__esDecorate: Ed,
		__runInitializers: Dd,
		__propKey: Od,
		__setFunctionName: kd,
		__metadata: Ad,
		__awaiter: jd,
		__generator: Md,
		__createBinding: Nd,
		__exportStar: Pd,
		__values: Fd,
		__read: Id,
		__spread: Ld,
		__spreadArrays: Rd,
		__spreadArray: zd,
		__await: Bd,
		__asyncGenerator: Vd,
		__asyncDelegator: Hd,
		__asyncValues: Ud,
		__makeTemplateObject: Wd,
		__importStar: qd,
		__importDefault: Jd,
		__classPrivateFieldGet: Yd,
		__classPrivateFieldSet: Xd,
		__classPrivateFieldIn: Zd,
		__addDisposableResource: Qd,
		__disposeResources: ef,
		__rewriteRelativeImportExtension: tf
	}
});
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(nf ||= {}), function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
}(rf ||= {}), function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
}(af ||= {});
try {
	(of = (/* @__PURE__ */ RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu")).exec("a")) == null || of[0];
} catch {}
function cf(e) {
	if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
	var t = e.default;
	if (typeof t == "function") {
		var n = function e() {
			var n = !1;
			try {
				n = this instanceof e;
			} catch {}
			return n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
		};
		n.prototype = t.prototype;
	} else n = {};
	return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
		var r = Object.getOwnPropertyDescriptor(e, t);
		Object.defineProperty(n, t, r.get ? r : {
			enumerable: !0,
			get: function() {
				return e[t];
			}
		});
	}), n;
}
var lf, Q = {};
function uf() {
	if (lf) return Q;
	var e, t;
	return lf = 1, Object.defineProperty(Q, "__esModule", { value: !0 }), Q.SKELETON_TYPE = Q.TYPE = void 0, Q.isLiteralElement = function(t) {
		return t.type === e.literal;
	}, Q.isArgumentElement = function(t) {
		return t.type === e.argument;
	}, Q.isNumberElement = function(t) {
		return t.type === e.number;
	}, Q.isDateElement = function(t) {
		return t.type === e.date;
	}, Q.isTimeElement = function(t) {
		return t.type === e.time;
	}, Q.isSelectElement = function(t) {
		return t.type === e.select;
	}, Q.isPluralElement = function(t) {
		return t.type === e.plural;
	}, Q.isPoundElement = function(t) {
		return t.type === e.pound;
	}, Q.isTagElement = function(t) {
		return t.type === e.tag;
	}, Q.isNumberSkeleton = function(e) {
		return !(!e || typeof e != "object" || e.type !== t.number);
	}, Q.isDateTimeSkeleton = function(e) {
		return !(!e || typeof e != "object" || e.type !== t.dateTime);
	}, Q.createLiteralElement = function(t) {
		return {
			type: e.literal,
			value: t
		};
	}, Q.createNumberElement = function(t, n) {
		return {
			type: e.number,
			value: t,
			style: n
		};
	}, function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	}(e || (Q.TYPE = e = {})), function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	}(t || (Q.SKELETON_TYPE = t = {})), Q;
}
uf();
var df, ff = {}, pf = cf(sf);
(function() {
	if (df) return ff;
	df = 1, Object.defineProperty(ff, "__esModule", { value: !0 }), ff.printAST = n, ff.doPrintAST = r, ff.printDateTimeSkeleton = o;
	var e = pf, t = uf();
	function n(e) {
		return r(e, !1);
	}
	function r(s, c) {
		return s.map(function(l, u) {
			return (0, t.isLiteralElement)(l) ? function(e, t, n, r) {
				var a = e.value;
				return n || a[0] !== "'" || (a = `''${a.slice(1)}`), r || a[a.length - 1] !== "'" || (a = `${a.slice(0, a.length - 1)}''`), a = i(a), t ? a.replace("#", "'#'") : a;
			}(l, c, u === 0, u === s.length - 1) : (0, t.isArgumentElement)(l) ? function(e) {
				return `{${e.value}}`;
			}(l) : (0, t.isDateElement)(l) || (0, t.isTimeElement)(l) || (0, t.isNumberElement)(l) ? function(e) {
				return `{${e.value}, ${t.TYPE[e.type]}${e.style ? `, ${n = e.style, typeof n == "string" ? i(n) : n.type === t.SKELETON_TYPE.dateTime ? `::${o(n)}` : `::${n.tokens.map(a).join(" ")}`}` : ""}}`;
				var n;
			}(l) : (0, t.isPluralElement)(l) ? function(t) {
				var n = t.pluralType === "cardinal" ? "plural" : "selectordinal";
				return `{${[
					t.value,
					n,
					e.__spreadArray([t.offset ? `offset:${t.offset}` : ""], Object.keys(t.options).map(function(e) {
						return `${e}{${r(t.options[e].value, !0)}}`;
					}), !0).filter(Boolean).join(" ")
				].join(",")}}`;
			}(l) : (0, t.isSelectElement)(l) ? function(e) {
				return `{${[
					e.value,
					"select",
					Object.keys(e.options).map(function(t) {
						return `${t}{${r(e.options[t].value, !1)}}`;
					}).join(" ")
				].join(",")}}`;
			}(l) : (0, t.isPoundElement)(l) ? "#" : (0, t.isTagElement)(l) ? function(e) {
				return `<${e.value}>${n(e.children)}</${e.value}>`;
			}(l) : void 0;
		}).join("");
	}
	function i(e) {
		return e.replace(/([{}](?:[\s\S]*[{}])?)/, "'$1'");
	}
	function a(e) {
		var t = e.stem, n = e.options;
		return n.length === 0 ? t : `${t}${n.map(function(e) {
			return `/${e}`;
		}).join("")}`;
	}
	function o(e) {
		return e.pattern;
	}
})();
function mf(e, t, n = "") {
	let r = (i = e) instanceof Uint8Array || ArrayBuffer.isView(i) && i.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in i && i.BYTES_PER_ELEMENT === 1;
	var i;
	let a = e?.length;
	if (!r || t !== void 0) {
		let t = (n && `"${n}" `) + "expected Uint8Array, got " + (r ? `length=${a}` : "type=" + typeof e);
		throw r ? RangeError(t) : TypeError(t);
	}
	return e;
}
function hf(e, t = !0) {
	if (e.destroyed) throw Error("Hash instance has been destroyed");
	if (t && e.finished) throw Error("Hash#digest() has already been called");
}
function gf(...e) {
	for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function _f(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function vf(e, t) {
	return e << 32 - t | e >>> t;
}
typeof Uint8Array.from([]).toHex == "function" && Uint8Array.fromHex, Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function yf(e, t, n) {
	return e & t ^ ~e & n;
}
function bf(e, t, n) {
	return e & t ^ e & n ^ t & n;
}
var xf = class {
	blockLen;
	outputLen;
	canXOF = !1;
	padOffset;
	isLE;
	buffer;
	view;
	finished = !1;
	length = 0;
	pos = 0;
	destroyed = !1;
	constructor(e, t, n, r) {
		this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = _f(this.buffer);
	}
	update(e) {
		hf(this), mf(e);
		let { view: t, buffer: n, blockLen: r } = this, i = e.length;
		for (let a = 0; a < i;) {
			let o = Math.min(r - this.pos, i - a);
			if (o === r) {
				let t = _f(e);
				for (; r <= i - a; a += r) this.process(t, a);
				continue;
			}
			n.set(e.subarray(a, a + o), this.pos), this.pos += o, a += o, this.pos === r && (this.process(t, 0), this.pos = 0);
		}
		return this.length += e.length, this.roundClean(), this;
	}
	digestInto(e) {
		hf(this), function(e, t) {
			mf(e, void 0, "digestInto() output");
			let n = t.outputLen;
			if (e.length < n) throw RangeError("\"digestInto() output\" expected to be of length >=" + n);
		}(e, this), this.finished = !0;
		let { buffer: t, view: n, blockLen: r, isLE: i } = this, { pos: a } = this;
		t[a++] = 128, gf(this.buffer.subarray(a)), this.padOffset > r - a && (this.process(n, 0), a = 0);
		for (let e = a; e < r; e++) t[e] = 0;
		n.setBigUint64(r - 8, BigInt(8 * this.length), i), this.process(n, 0);
		let o = _f(e), s = this.outputLen;
		if (s % 4) throw Error("_sha2: outputLen must be aligned to 32bit");
		let c = s / 4, l = this.get();
		if (c > l.length) throw Error("_sha2: outputLen bigger than state");
		for (let e = 0; e < c; e++) o.setUint32(4 * e, l[e], i);
	}
	digest() {
		let { buffer: e, outputLen: t } = this;
		this.digestInto(e);
		let n = e.slice(0, t);
		return this.destroy(), n;
	}
	_cloneInto(e) {
		e ||= new this.constructor(), e.set(...this.get());
		let { blockLen: t, buffer: n, length: r, finished: i, destroyed: a, pos: o } = this;
		return e.destroyed = a, e.finished = i, e.length = r, e.pos = o, r % t && e.buffer.set(n), e;
	}
	clone() {
		return this._cloneInto();
	}
}, Sf = Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), Cf = Uint32Array.from([
	1116352408,
	1899447441,
	3049323471,
	3921009573,
	961987163,
	1508970993,
	2453635748,
	2870763221,
	3624381080,
	310598401,
	607225278,
	1426881987,
	1925078388,
	2162078206,
	2614888103,
	3248222580,
	3835390401,
	4022224774,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	2554220882,
	2821834349,
	2952996808,
	3210313671,
	3336571891,
	3584528711,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	2177026350,
	2456956037,
	2730485921,
	2820302411,
	3259730800,
	3345764771,
	3516065817,
	3600352804,
	4094571909,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	2227730452,
	2361852424,
	2428436474,
	2756734187,
	3204031479,
	3329325298
]), wf = /* @__PURE__ */ new Uint32Array(64), Tf = class extends xf {
	constructor(e) {
		super(64, e, 8, !1);
	}
	get() {
		let { A: e, B: t, C: n, D: r, E: i, F: a, G: o, H: s } = this;
		return [
			e,
			t,
			n,
			r,
			i,
			a,
			o,
			s
		];
	}
	set(e, t, n, r, i, a, o, s) {
		this.A = 0 | e, this.B = 0 | t, this.C = 0 | n, this.D = 0 | r, this.E = 0 | i, this.F = 0 | a, this.G = 0 | o, this.H = 0 | s;
	}
	process(e, t) {
		for (let n = 0; n < 16; n++, t += 4) wf[n] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			let t = wf[e - 15], n = wf[e - 2], r = vf(t, 7) ^ vf(t, 18) ^ t >>> 3, i = vf(n, 17) ^ vf(n, 19) ^ n >>> 10;
			wf[e] = i + wf[e - 7] + r + wf[e - 16] | 0;
		}
		let { A: n, B: r, C: i, D: a, E: o, F: s, G: c, H: l } = this;
		for (let e = 0; e < 64; e++) {
			let t = l + (vf(o, 6) ^ vf(o, 11) ^ vf(o, 25)) + yf(o, s, c) + Cf[e] + wf[e] | 0, u = (vf(n, 2) ^ vf(n, 13) ^ vf(n, 22)) + bf(n, r, i) | 0;
			l = c, c = s, s = o, o = a + t | 0, a = i, i = r, r = n, n = t + u | 0;
		}
		n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, o = o + this.E | 0, s = s + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(n, r, i, a, o, s, c, l);
	}
	roundClean() {
		gf(wf);
	}
	destroy() {
		this.destroyed = !0, this.set(0, 0, 0, 0, 0, 0, 0, 0), gf(this.buffer);
	}
}, Ef = class extends Tf {
	A = 0 | Sf[0];
	B = 0 | Sf[1];
	C = 0 | Sf[2];
	D = 0 | Sf[3];
	E = 0 | Sf[4];
	F = 0 | Sf[5];
	G = 0 | Sf[6];
	H = 0 | Sf[7];
	constructor() {
		super(32);
	}
}, Df;
(function(e, t = {}) {
	let n = (t, n) => e(n).update(t).digest(), r = e(void 0);
	n.outputLen = r.outputLen, n.blockLen = r.blockLen, n.canXOF = r.canXOF, n.create = (t) => e(t), Object.assign(n, t), Object.freeze(n);
})(() => new Ef(), (Df = 1, { oid: Uint8Array.from([
	6,
	9,
	96,
	134,
	72,
	1,
	101,
	3,
	4,
	2,
	Df
]) }));
var Of = function(e, t) {
	return Of = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, Of(e, t);
};
function kf(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	function n() {
		this.constructor = e;
	}
	Of(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var Af = function() {
	return Af = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Af.apply(this, arguments);
};
function jf(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") {
		var i = 0;
		for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	}
	return n;
}
function Mf(e, t, n, r) {
	var i, a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
	return a > 3 && o && Object.defineProperty(t, n, o), o;
}
function Nf(e, t) {
	return function(n, r) {
		t(n, r, e);
	};
}
function Pf(e, t, n, r, i, a) {
	function o(e) {
		if (e !== void 0 && typeof e != "function") throw TypeError("Function expected");
		return e;
	}
	for (var s, c = r.kind, l = c === "getter" ? "get" : c === "setter" ? "set" : "value", u = !t && e ? r.static ? e : e.prototype : null, d = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}), f = !1, p = n.length - 1; p >= 0; p--) {
		var m = {};
		for (var h in r) m[h] = h === "access" ? {} : r[h];
		for (var h in r.access) m.access[h] = r.access[h];
		m.addInitializer = function(e) {
			if (f) throw TypeError("Cannot add initializers after decoration has completed");
			a.push(o(e || null));
		};
		var g = (0, n[p])(c === "accessor" ? {
			get: d.get,
			set: d.set
		} : d[l], m);
		if (c === "accessor") {
			if (g === void 0) continue;
			if (typeof g != "object" || !g) throw TypeError("Object expected");
			(s = o(g.get)) && (d.get = s), (s = o(g.set)) && (d.set = s), (s = o(g.init)) && i.unshift(s);
		} else (s = o(g)) && (c === "field" ? i.unshift(s) : d[l] = s);
	}
	u && Object.defineProperty(u, r.name, d), f = !0;
}
function Ff(e, t, n) {
	for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
	return r ? n : void 0;
}
function If(e) {
	return typeof e == "symbol" ? e : `${e}`;
}
function Lf(e, t, n) {
	return typeof t == "symbol" && (t = t.description ? `[${t.description}]` : ""), Object.defineProperty(e, "name", {
		configurable: !0,
		value: n ? `${n} ${t}` : t
	});
}
function Rf(e, t) {
	if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function zf(e, t, n, r) {
	return new (n ||= Promise)(function(i, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			var t;
			e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
				e(t);
			})).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function Bf(e, t) {
	var n, r, i, a = {
		label: 0,
		sent: function() {
			if (1 & i[0]) throw i[1];
			return i[1];
		},
		trys: [],
		ops: []
	}, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
	return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
		return this;
	}), o;
	function s(s) {
		return function(c) {
			return function(s) {
				if (n) throw TypeError("Generator is already executing.");
				for (; o && (o = 0, s[0] && (a = 0)), a;) try {
					if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
					switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
						case 0:
						case 1:
							i = s;
							break;
						case 4: return a.label++, {
							value: s[1],
							done: !1
						};
						case 5:
							a.label++, r = s[1], s = [0];
							continue;
						case 7:
							s = a.ops.pop(), a.trys.pop();
							continue;
						default:
							if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || s[0] !== 6 && s[0] !== 2)) {
								a = 0;
								continue;
							}
							if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
								a.label = s[1];
								break;
							}
							if (s[0] === 6 && a.label < i[1]) {
								a.label = i[1], i = s;
								break;
							}
							if (i && a.label < i[2]) {
								a.label = i[2], a.ops.push(s);
								break;
							}
							i[2] && a.ops.pop(), a.trys.pop();
							continue;
					}
					s = t.call(e, a);
				} catch (e) {
					s = [6, e], r = 0;
				} finally {
					n = i = 0;
				}
				if (5 & s[0]) throw s[1];
				return {
					value: s[0] ? s[1] : void 0,
					done: !0
				};
			}([s, c]);
		};
	}
}
var Vf = Object.create ? function(e, t, n, r) {
	r === void 0 && (r = n);
	var i = Object.getOwnPropertyDescriptor(t, n);
	i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
		enumerable: !0,
		get: function() {
			return t[n];
		}
	}), Object.defineProperty(e, r, i);
} : function(e, t, n, r) {
	r === void 0 && (r = n), e[r] = t[n];
};
function Hf(e, t) {
	for (var n in e) n === "default" || Object.prototype.hasOwnProperty.call(t, n) || Vf(t, e, n);
}
function Uf(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Wf(e, t) {
	var n = typeof Symbol == "function" && e[Symbol.iterator];
	if (!n) return e;
	var r, i, a = n.call(e), o = [];
	try {
		for (; (t === void 0 || t-- > 0) && !(r = a.next()).done;) o.push(r.value);
	} catch (e) {
		i = { error: e };
	} finally {
		try {
			r && !r.done && (n = a.return) && n.call(a);
		} finally {
			if (i) throw i.error;
		}
	}
	return o;
}
function Gf() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Wf(arguments[t]));
	return e;
}
function Kf() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	var r = Array(e), i = 0;
	for (t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function qf(e, t, n) {
	if (n || arguments.length === 2) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r ||= Array.prototype.slice.call(t, 0, i), r[i] = t[i]);
	return e.concat(r || Array.prototype.slice.call(t));
}
function Jf(e) {
	return this instanceof Jf ? (this.v = e, this) : new Jf(e);
}
function Yf(e, t, n) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var r, i = n.apply(e, t || []), a = [];
	return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", function(e) {
		return function(t) {
			return Promise.resolve(t).then(e, l);
		};
	}), r[Symbol.asyncIterator] = function() {
		return this;
	}, r;
	function o(e, t) {
		i[e] && (r[e] = function(t) {
			return new Promise(function(n, r) {
				a.push([
					e,
					t,
					n,
					r
				]) > 1 || s(e, t);
			});
		}, t && (r[e] = t(r[e])));
	}
	function s(e, t) {
		try {
			(n = i[e](t)).value instanceof Jf ? Promise.resolve(n.value.v).then(c, l) : u(a[0][2], n);
		} catch (e) {
			u(a[0][3], e);
		}
		var n;
	}
	function c(e) {
		s("next", e);
	}
	function l(e) {
		s("throw", e);
	}
	function u(e, t) {
		e(t), a.shift(), a.length && s(a[0][0], a[0][1]);
	}
}
function Xf(e) {
	var t = {}, n;
	return r("next"), r("throw", function(e) {
		throw e;
	}), r("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function r(r, i) {
		t[r] = e[r] ? function(t) {
			return (n = !n) ? {
				value: Jf(e[r](t)),
				done: !1
			} : i ? i(t) : t;
		} : i;
	}
}
function Zf(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var t, n = e[Symbol.asyncIterator];
	return n ? n.call(e) : (e = Uf(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
		return this;
	}, t);
	function r(n) {
		t[n] = e[n] && function(t) {
			return new Promise(function(r, i) {
				(function(e, t, n, r) {
					Promise.resolve(r).then(function(t) {
						e({
							value: t,
							done: n
						});
					}, t);
				})(r, i, (t = e[n](t)).done, t.value);
			});
		};
	}
}
function Qf(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
var $f = Object.create ? function(e, t) {
	Object.defineProperty(e, "default", {
		enumerable: !0,
		value: t
	});
} : function(e, t) {
	e.default = t;
}, ep = function(e) {
	return ep = Object.getOwnPropertyNames || function(e) {
		var t = [];
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
		return t;
	}, ep(e);
};
function tp(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (e != null) for (var n = ep(e), r = 0; r < n.length; r++) n[r] !== "default" && Vf(t, e, n[r]);
	return $f(t, e), t;
}
function np(e) {
	return e && e.__esModule ? e : { default: e };
}
function rp(e, t, n, r) {
	if (n === "a" && !r) throw TypeError("Private accessor was defined without a getter");
	if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
	return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function ip(e, t, n, r, i) {
	if (r === "m") throw TypeError("Private method is not writable");
	if (r === "a" && !i) throw TypeError("Private accessor was defined without a setter");
	if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
	return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
}
function ap(e, t) {
	if (t === null || typeof t != "object" && typeof t != "function") throw TypeError("Cannot use 'in' operator on non-object");
	return typeof e == "function" ? t === e : e.has(t);
}
function op(e, t, n) {
	if (t != null) {
		if (typeof t != "object" && typeof t != "function") throw TypeError("Object expected.");
		var r, i;
		if (n) {
			if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
			r = t[Symbol.asyncDispose];
		}
		if (r === void 0) {
			if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
			r = t[Symbol.dispose], n && (i = r);
		}
		if (typeof r != "function") throw TypeError("Object not disposable.");
		i && (r = function() {
			try {
				i.call(this);
			} catch (e) {
				return Promise.reject(e);
			}
		}), e.stack.push({
			value: t,
			dispose: r,
			async: n
		});
	} else n && e.stack.push({ async: !0 });
	return t;
}
var sp = typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
	var r = Error(n);
	return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
};
function cp(e) {
	function t(t) {
		e.error = e.hasError ? new sp(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
	}
	var n, r = 0;
	return function i() {
		for (; n = e.stack.pop();) try {
			if (!n.async && r === 1) return r = 0, e.stack.push(n), Promise.resolve().then(i);
			if (n.dispose) {
				var a = n.dispose.call(n.value);
				if (n.async) return r |= 2, Promise.resolve(a).then(i, function(e) {
					return t(e), i();
				});
			} else r |= 1;
		} catch (e) {
			t(e);
		}
		if (r === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
		if (e.hasError) throw e.error;
	}();
}
function lp(e, t) {
	return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, a) {
		return n ? t ? ".jsx" : ".js" : !r || i && a ? r + i + "." + a.toLowerCase() + "js" : e;
	}) : e;
}
var up, dp, fp, pp, mp = Object.freeze({
	__proto__: null,
	__addDisposableResource: op,
	get __assign() {
		return Af;
	},
	__asyncDelegator: Xf,
	__asyncGenerator: Yf,
	__asyncValues: Zf,
	__await: Jf,
	__awaiter: zf,
	__classPrivateFieldGet: rp,
	__classPrivateFieldIn: ap,
	__classPrivateFieldSet: ip,
	__createBinding: Vf,
	__decorate: Mf,
	__disposeResources: cp,
	__esDecorate: Pf,
	__exportStar: Hf,
	__extends: kf,
	__generator: Bf,
	__importDefault: np,
	__importStar: tp,
	__makeTemplateObject: Qf,
	__metadata: Rf,
	__param: Nf,
	__propKey: If,
	__read: Wf,
	__rest: jf,
	__rewriteRelativeImportExtension: lp,
	__runInitializers: Ff,
	__setFunctionName: Lf,
	__spread: Gf,
	__spreadArray: qf,
	__spreadArrays: Kf,
	__values: Uf,
	default: {
		__extends: kf,
		__assign: Af,
		__rest: jf,
		__decorate: Mf,
		__param: Nf,
		__esDecorate: Pf,
		__runInitializers: Ff,
		__propKey: If,
		__setFunctionName: Lf,
		__metadata: Rf,
		__awaiter: zf,
		__generator: Bf,
		__createBinding: Vf,
		__exportStar: Hf,
		__values: Uf,
		__read: Wf,
		__spread: Gf,
		__spreadArrays: Kf,
		__spreadArray: qf,
		__await: Jf,
		__asyncGenerator: Yf,
		__asyncDelegator: Xf,
		__asyncValues: Zf,
		__makeTemplateObject: Qf,
		__importStar: tp,
		__importDefault: np,
		__classPrivateFieldGet: rp,
		__classPrivateFieldSet: ip,
		__classPrivateFieldIn: ap,
		__addDisposableResource: op,
		__disposeResources: cp,
		__rewriteRelativeImportExtension: lp
	}
});
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(up ||= {}), function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
}(dp ||= {}), function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
}(fp ||= {});
try {
	(pp = function(e, t) {
		return new RegExp(e, t);
	}("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) == null || pp[0];
} catch {}
var hp, gp, $ = {};
function _p() {
	return hp || (hp = 1, Object.defineProperty($, "__esModule", { value: !0 }), $.SKELETON_TYPE = $.TYPE = void 0, $.isLiteralElement = function(t) {
		return t.type === e.literal;
	}, $.isArgumentElement = function(t) {
		return t.type === e.argument;
	}, $.isNumberElement = function(t) {
		return t.type === e.number;
	}, $.isDateElement = function(t) {
		return t.type === e.date;
	}, $.isTimeElement = function(t) {
		return t.type === e.time;
	}, $.isSelectElement = function(t) {
		return t.type === e.select;
	}, $.isPluralElement = function(t) {
		return t.type === e.plural;
	}, $.isPoundElement = function(t) {
		return t.type === e.pound;
	}, $.isTagElement = function(t) {
		return t.type === e.tag;
	}, $.isNumberSkeleton = function(e) {
		return !(!e || typeof e != "object" || e.type !== t.number);
	}, $.isDateTimeSkeleton = function(e) {
		return !(!e || typeof e != "object" || e.type !== t.dateTime);
	}, $.createLiteralElement = function(t) {
		return {
			type: e.literal,
			value: t
		};
	}, $.createNumberElement = function(t, n) {
		return {
			type: e.number,
			value: t,
			style: n
		};
	}, function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	}(e || ($.TYPE = e = {})), function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	}(t || ($.SKELETON_TYPE = t = {}))), $;
	var e, t;
}
_p();
var vp = {}, yp = function(e) {
	if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
	var t = e.default;
	if (typeof t == "function") {
		var n = function e() {
			var n = !1;
			try {
				n = this instanceof e;
			} catch {}
			return n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
		};
		n.prototype = t.prototype;
	} else n = {};
	return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
		var r = Object.getOwnPropertyDescriptor(e, t);
		Object.defineProperty(n, t, r.get ? r : {
			enumerable: !0,
			get: function() {
				return e[t];
			}
		});
	}), n;
}(mp);
(function() {
	if (gp) return vp;
	gp = 1, Object.defineProperty(vp, "__esModule", { value: !0 }), vp.printAST = n, vp.doPrintAST = r, vp.printDateTimeSkeleton = o;
	var e = yp, t = _p();
	function n(e) {
		return r(e, !1);
	}
	function r(s, c) {
		return s.map(function(l, u) {
			return (0, t.isLiteralElement)(l) ? function(e, t, n, r) {
				var a = e.value;
				return n || a[0] !== "'" || (a = `''${a.slice(1)}`), r || a[a.length - 1] !== "'" || (a = `${a.slice(0, a.length - 1)}''`), a = i(a), t ? a.replace("#", "'#'") : a;
			}(l, c, u === 0, u === s.length - 1) : (0, t.isArgumentElement)(l) ? function(e) {
				return `{${e.value}}`;
			}(l) : (0, t.isDateElement)(l) || (0, t.isTimeElement)(l) || (0, t.isNumberElement)(l) ? function(e) {
				return `{${e.value}, ${t.TYPE[e.type]}${e.style ? `, ${typeof (n = e.style) == "string" ? i(n) : n.type === t.SKELETON_TYPE.dateTime ? `::${o(n)}` : `::${n.tokens.map(a).join(" ")}`}` : ""}}`;
				var n;
			}(l) : (0, t.isPluralElement)(l) ? function(t) {
				var n = t.pluralType === "cardinal" ? "plural" : "selectordinal";
				return `{${[
					t.value,
					n,
					e.__spreadArray([t.offset ? `offset:${t.offset}` : ""], Object.keys(t.options).map(function(e) {
						return `${e}{${r(t.options[e].value, !0)}}`;
					}), !0).filter(Boolean).join(" ")
				].join(",")}}`;
			}(l) : (0, t.isSelectElement)(l) ? function(e) {
				return `{${[
					e.value,
					"select",
					Object.keys(e.options).map(function(t) {
						return `${t}{${r(e.options[t].value, !1)}}`;
					}).join(" ")
				].join(",")}}`;
			}(l) : (0, t.isPoundElement)(l) ? "#" : (0, t.isTagElement)(l) ? function(e) {
				return `<${e.value}>${n(e.children)}</${e.value}>`;
			}(l) : void 0;
		}).join("");
	}
	function i(e) {
		return e.replace(/([{}](?:[\s\S]*[{}])?)/, "'$1'");
	}
	function a(e) {
		var t = e.stem, n = e.options;
		return n.length === 0 ? t : `${t}${n.map(function(e) {
			return `/${e}`;
		}).join("")}`;
	}
	function o(e) {
		return e.pattern;
	}
})();
var bp = "gt-react";
function xp({ locale: e = "", defaultLocale: t = "en", locales: n = [], localeCookieName: r = "generaltranslation.locale", ssr: i = !0, customMapping: s, enableI18n: l, reloadOnLocaleUpdate: u = !1 }) {
	let d = o(() => z(e, s), [e, s]), f = o(() => n.map((e) => z(e, s)), [n, s]), [p, m] = c(() => l ? z(i ? d && la(d, f, s) || "" : Sp({
		_locale: d,
		locale: d,
		locales: f,
		defaultLocale: t,
		localeCookieName: r,
		customMapping: s,
		enableI18n: l
	}), s) : t), [h, g] = function({ locale: e, locales: t, defaultLocale: n, localeCookieName: r, _setLocale: i, customMapping: a, enableI18n: o, reloadOnLocaleUpdate: s }) {
		e = z(e, a);
		let c = (r) => {
			if (!o) return n;
			if (r === e) return e;
			let s = z(la(r, t, a) || e || n, a);
			return s !== r && console.warn(((e, t, n = "@generaltranslation/react-core") => `${n} Warning: "${t}" is not a supported locale. Update supported locales in your dashboard or gt.config.json. Falling back to "${e}".`)(s, r, bp)), i(s), s;
		};
		return [(t) => {
			if (!o) return;
			t = z(t);
			let n = c(t);
			typeof document < "u" && (document.cookie = `${r}=${n};path=/`), typeof window < "u" && t !== e && s && window.location.reload();
		}, c];
	}({
		locale: p,
		locales: f,
		defaultLocale: t,
		localeCookieName: r,
		_setLocale: m,
		customMapping: s,
		enableI18n: l,
		reloadOnLocaleUpdate: u
	});
	return a(() => {
		let e = Sp({
			_locale: d,
			locale: p,
			locales: f,
			defaultLocale: t,
			localeCookieName: r,
			customMapping: s,
			enableI18n: l
		});
		g(e);
	}, [
		d,
		p,
		f,
		t,
		r,
		l
	]), [p, h];
}
function Sp({ _locale: e, locale: t, locales: n, defaultLocale: r, localeCookieName: i, customMapping: a, enableI18n: o }) {
	if (!o) return r;
	if (e && e === t && la(e, n, a) === t) return z(e, a);
	let s = typeof document < "u" ? document.cookie.split("; ").find((e) => e.startsWith(`${i}=`))?.split("=")[1] : void 0;
	s &&= z(s, a);
	let c = typeof navigator > "u" ? [] : navigator != null && navigator.languages ? navigator.languages : navigator != null && navigator.language ? [navigator.language] : navigator != null && navigator.userLanguage ? [navigator == null ? void 0 : navigator.userLanguage] : [];
	c = c.map((e) => z(e, a));
	let l = la([
		...e ? [e] : [],
		...s ? [s] : [],
		...c
	], n, a) || r;
	return l &&= z(l, a), s && s !== l && typeof document < "u" && (document.cookie = `${i}=${l};path=/`), l;
}
function Cp(e) {
	return l(md, Object.assign({
		ssr: !(typeof process > "u" || !process.env.NEXT_RUNTIME) || (globalThis == null ? void 0 : globalThis.__NEXT_DATA__) !== void 0,
		environment: "development"
	}, e, {
		readAuthFromEnv: hd,
		useDetermineLocale: xp,
		useRegionState: _d,
		useEnableI18n: vd
	}));
}
var wp = d().server(function({ defaultLocale: e, locales: t, customMapping: n }) {
	let r = [], i = (0, qs.getCookie)(Vs);
	if (i && r.push(i), process.env._GENERALTRANSLATION_IGNORE_BROWSER_LOCALES === "false") {
		let e = (0, qs.getRequestHeader)("accept-language")?.split(",").map((e) => e.split(";")?.[0].trim()) || [];
		e && r.push(...e);
	}
	return r.length === 0 && process.env._GENERALTRANSLATION_IGNORE_BROWSER_LOCALES === "false" && console.warn("gt-tanstack-start(server): no locales could be determined for this request"), la(r, t, n) || e;
}).client(function({ defaultLocale: e, locales: t, customMapping: n }) {
	let r = [], i = document.cookie.split("; ").find((e) => e.startsWith("generaltranslation.locale="))?.split("=")[1];
	i && r.push(i);
	let a = navigator.language;
	return a && r.push(a), r.length === 0 && (console.warn("gt-tanstack-start(client): no locales could be determined for this request"), r.push(e)), la(r, t, n) || e;
}), Tp = class extends ya {
	constructor({ defaultLocale: e, locales: t, customMapping: n } = {}) {
		super(), this.type = "tanstack-i18n-storage-adapter", this.defaultLocale = e, this.locales = t, this.customMapping = n;
	}
	setConfig(e) {
		this.defaultLocale ||= e.defaultLocale, this.locales ||= e.locales, this.customMapping ||= e.customMapping;
	}
	getItem(e) {
		if (e === "locale") return wp({
			defaultLocale: this.defaultLocale || "en",
			locales: this.locales || ["en"],
			customMapping: this.customMapping
		});
	}
	setItem(e, t) {}
	removeItem(e) {}
}, Ep = class extends Ba {
	constructor(e) {
		super(e), this.storeAdapter.setConfig({
			defaultLocale: this.getDefaultLocale(),
			locales: this.getLocales(),
			customMapping: e.customMapping
		});
	}
	getProviderConfig() {
		return {
			defaultLocale: this.config.defaultLocale,
			locales: this.config.locales,
			customMapping: this.config.customMapping,
			enableI18n: this.config.enableI18n,
			loadTranslations: (e) => this.loadTranslations(e),
			_versionId: this.config._versionId
		};
	}
};
function Dp(e) {
	Ja(new Ep(Object.assign(Object.assign({}, e), { storeAdapter: new Tp() })));
}
var Op = { exports: {} }, kp, Ap, jp = {};
function Mp() {
	return kp || (kp = 1, function() {
		function e(t) {
			if (t == null) return null;
			if (typeof t == "function") return t.$$typeof === te ? null : t.displayName || t.name || null;
			if (typeof t == "string") return t;
			switch (t) {
				case m: return "Fragment";
				case g: return "Profiler";
				case h: return "StrictMode";
				case b: return "Suspense";
				case x: return "SuspenseList";
				case ee: return "Activity";
			}
			if (typeof t == "object") switch (typeof t.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), t.$$typeof) {
				case p: return "Portal";
				case v: return t.displayName || "Context";
				case _: return (t._context.displayName || "Context") + ".Consumer";
				case y:
					var n = t.render;
					return (t = t.displayName) || (t = (t = n.displayName || n.name || "") === "" ? "ForwardRef" : "ForwardRef(" + t + ")"), t;
				case S: return (n = t.displayName || null) === null ? e(t.type) || "Memo" : n;
				case C:
					n = t._payload, t = t._init;
					try {
						return e(t(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function r(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				var r = (t = console).error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function i(t) {
			if (t === m) return "<>";
			if (typeof t == "object" && t && t.$$typeof === C) return "<...>";
			try {
				var n = e(t);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function a() {
			return Error("react-stack-top-frame");
		}
		function o() {
			var t = e(this.type);
			return ie[t] || (ie[t] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), (t = this.props.ref) === void 0 ? null : t;
		}
		function s(t, n, i, a, s, l) {
			var d, p = n.children;
			if (p !== void 0) {
				if (a) {
					if (ne(p)) {
						for (a = 0; a < p.length; a++) c(p[a]);
						Object.freeze && Object.freeze(p);
					} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
				} else c(p);
			}
			if (T.call(n, "key")) {
				p = e(t);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				a = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", se[p + a] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", a, p, m, p), se[p + a] = !0);
			}
			if (p = null, i !== void 0 && (r(i), p = "" + i), function(e) {
				if (T.call(e, "key")) {
					var t = Object.getOwnPropertyDescriptor(e, "key").get;
					if (t && t.isReactWarning) return !1;
				}
				return e.key !== void 0;
			}(n) && (r(n.key), p = "" + n.key), "key" in n) for (var h in i = {}, n) h !== "key" && (i[h] = n[h]);
			else i = n;
			return p && function(e, t) {
				function n() {
					u || (u = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
				}
				n.isReactWarning = !0, Object.defineProperty(e, "key", {
					get: n,
					configurable: !0
				});
			}(i, typeof t == "function" ? t.displayName || t.name || "Unknown" : t), function(e, t, n, r, i, a) {
				var s = n.ref;
				return e = {
					$$typeof: f,
					type: e,
					key: t,
					props: n,
					_owner: r
				}, (s === void 0 ? null : s) === null ? Object.defineProperty(e, "ref", {
					enumerable: !1,
					value: null
				}) : Object.defineProperty(e, "ref", {
					enumerable: !1,
					get: o
				}), e._store = {}, Object.defineProperty(e._store, "validated", {
					configurable: !1,
					enumerable: !1,
					writable: !0,
					value: 0
				}), Object.defineProperty(e, "_debugInfo", {
					configurable: !1,
					enumerable: !1,
					writable: !0,
					value: null
				}), Object.defineProperty(e, "_debugStack", {
					configurable: !1,
					enumerable: !1,
					writable: !0,
					value: i
				}), Object.defineProperty(e, "_debugTask", {
					configurable: !1,
					enumerable: !1,
					writable: !0,
					value: a
				}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
			}(t, p, i, (d = w.A) === null ? null : d.getOwner(), s, l);
		}
		function c(e) {
			l(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === C && (e._payload.status === "fulfilled" ? l(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function l(e) {
			return typeof e == "object" && !!e && e.$$typeof === f;
		}
		var u, d = t, f = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), v = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), w = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, T = Object.prototype.hasOwnProperty, ne = Array.isArray, re = console.createTask ? console.createTask : function() {
			return null;
		}, ie = {}, ae = (d = { react_stack_bottom_frame: function(e) {
			return e();
		} }).react_stack_bottom_frame.bind(d, a)(), oe = re(i(a)), se = {};
		jp.Fragment = m, jp.jsx = function(e, t, n) {
			var r = 1e4 > w.recentlyCreatedOwnerStacks++;
			return s(e, t, n, !1, r ? Error("react-stack-top-frame") : ae, r ? re(i(e)) : oe);
		}, jp.jsxs = function(e, t, n) {
			var r = 1e4 > w.recentlyCreatedOwnerStacks++;
			return s(e, t, n, !0, r ? Error("react-stack-top-frame") : ae, r ? re(i(e)) : oe);
		};
	}()), jp;
}
var Np = (Ap || (Ap = 1, Op.exports = Mp()), Op.exports);
function Pp() {
	return typeof window > "u";
}
function Fp() {
	return qa().getLocale();
}
function Ip(e) {
	return e.locale ? e.locale : Pp() ? Fp() : void 0;
}
function Lp() {
	let e = qa();
	if (!function(e) {
		return e instanceof Ep;
	}(e)) throw Error("TanstackI18nManager not initialized. Invoke initializeGT() to initialize.");
	return e;
}
function Rp(e) {
	let t = Lp().getProviderConfig();
	return Np.jsx(Cp, Object.assign({ ssr: Pp() }, t, e, {
		reloadOnLocaleUpdate: !0,
		locale: Ip(e)
	}));
}
var zp = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/gt-react-app/scripts/EmptyComponent.tsx", Bp = () => null;
function Vp() {
	return h(Rp, {
		locale: "en",
		translations: {},
		children: h(Bp, {}, void 0, !1, {
			fileName: zp,
			lineNumber: 12,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: zp,
		lineNumber: 11,
		columnNumber: 5
	}, this);
}
var Hp = {
	en: _,
	fr: v,
	de: y,
	es: b,
	it: x,
	ja: S,
	ko: C,
	pt: ee,
	ru: te,
	zh: w
};
function Up(e) {
	return Hp[e] || Hp.en;
}
var Wp = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/gt-react-app/scripts/Wrapper.tsx";
Dp({
	...g,
	loadTranslations: Up
});
function Gp({ children: e }) {
	return h(Rp, {
		locale: "en",
		children: e
	}, void 0, !1, {
		fileName: Wp,
		lineNumber: 13,
		columnNumber: 10
	}, this);
}
var Kp = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/gt-react-app/scripts/EmptyComponent.wrapper.tsx";
function qp() {
	return h(Gp, { children: h(Vp, {}, void 0, !1, {
		fileName: Kp,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Kp,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { qp as default };
