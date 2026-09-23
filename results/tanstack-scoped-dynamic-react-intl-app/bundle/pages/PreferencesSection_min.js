import * as e from "react";
import t, { use as n, useId as r } from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
function o(e, t) {
	let n = t && t.cache ? t.cache : g, r = t && t.serializer ? t.serializer : m;
	return (t && t.strategy ? t.strategy : d)(e, {
		cache: n,
		serializer: r
	});
}
function s(e) {
	return e == null || typeof e == "number" || typeof e == "boolean";
}
function c(e, t, n, r) {
	let i = s(r) ? r : n(r), a = t.get(i);
	return a === void 0 && (a = e.call(this, r), t.set(i, a)), a;
}
function l(e, t, n) {
	let r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
	return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
}
function u(e, t, n, r, i) {
	return n.bind(t, e, r, i);
}
function d(e, t) {
	let n = e.length === 1 ? c : l;
	return u(e, this, n, t.cache.create(), t.serializer);
}
function f(e, t) {
	return u(e, this, l, t.cache.create(), t.serializer);
}
function p(e, t) {
	return u(e, this, c, t.cache.create(), t.serializer);
}
var m = function() {
	return JSON.stringify(arguments);
}, h = class {
	cache;
	constructor() {
		this.cache = Object.create(null);
	}
	get(e) {
		return this.cache[e];
	}
	set(e, t) {
		this.cache[e] = t;
	}
}, g = { create: function() {
	return new h();
} }, _ = {
	variadic: f,
	monadic: p
}, ee = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function te(e) {
	let t = {};
	return e.replace(ee, (e) => {
		let n = e.length;
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
var ne = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function re(e) {
	if (e.length === 0) throw Error("Number skeleton cannot be empty");
	let t = e.split(ne).filter((e) => e.length > 0), n = [];
	for (let e of t) {
		let t = e.split("/");
		if (t.length === 0) throw Error("Invalid number skeleton");
		let [r, ...i] = t;
		for (let e of i) if (e.length === 0) throw Error("Invalid number skeleton");
		n.push({
			stem: r,
			options: i
		});
	}
	return n;
}
function ie(e) {
	return e.replace(/^(.*?)-/, "");
}
var v = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, y = /^(@+)?(\+|#+)?[rs]?$/g, ae = /(\*)(0+)|(#+)(0+)|(0+)/g, oe = /^(0+)$/;
function b(e) {
	let t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(y, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function x(e) {
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
function se(e) {
	let t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		let n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !oe.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function S(e) {
	return x(e) || {};
}
function ce(e) {
	let t = {};
	for (let n of e) {
		switch (n.stem) {
			case "percent":
			case "%":
				t.style = "percent";
				continue;
			case "%x100":
				t.style = "percent", t.scale = 100;
				continue;
			case "currency":
				t.style = "currency", t.currency = n.options[0];
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
				t.style = "unit", t.unit = ie(n.options[0]);
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
				t = {
					...t,
					notation: "scientific",
					...n.options.reduce((e, t) => ({
						...e,
						...S(t)
					}), {})
				};
				continue;
			case "engineering":
				t = {
					...t,
					notation: "engineering",
					...n.options.reduce((e, t) => ({
						...e,
						...S(t)
					}), {})
				};
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
				t.scale = parseFloat(n.options[0]);
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
				if (n.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
				n.options[0].replace(ae, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else if (i && a) throw Error("We currently do not support maximum integer digits");
					else if (o) throw Error("We currently do not support exact integer digits");
					return "";
				});
				continue;
		}
		if (oe.test(n.stem)) {
			t.minimumIntegerDigits = n.stem.length;
			continue;
		}
		if (v.test(n.stem)) {
			if (n.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			n.stem.replace(v, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			let e = n.options[0];
			e === "w" ? t = {
				...t,
				trailingZeroDisplay: "stripIfInteger"
			} : e && (t = {
				...t,
				...b(e)
			});
			continue;
		}
		if (y.test(n.stem)) {
			t = {
				...t,
				...b(n.stem)
			};
			continue;
		}
		let e = x(n.stem);
		e && (t = {
			...t,
			...e
		});
		let r = se(n.stem);
		r && (t = {
			...t,
			...r
		});
	}
	return t;
}
var C = function(e) {
	return e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag", e;
}({}), w = function(e) {
	return e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime", e;
}({});
function le(e) {
	return e.type === C.literal;
}
function ue(e) {
	return e.type === C.argument;
}
function de(e) {
	return e.type === C.number;
}
function fe(e) {
	return e.type === C.date;
}
function pe(e) {
	return e.type === C.time;
}
function T(e) {
	return e.type === C.select;
}
function me(e) {
	return e.type === C.plural;
}
function he(e) {
	return e.type === C.pound;
}
function ge(e) {
	return e.type === C.tag;
}
function _e(e) {
	return !!(e && typeof e == "object" && e.type === w.number);
}
function E(e) {
	return !!(e && typeof e == "object" && e.type === w.dateTime);
}
var D = function(e) {
	return e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", e;
}({}), O = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, k = {
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
	GS: [
		"H",
		"h",
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
	"ku-SY": ["H", "hB"],
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
function ve(e, t) {
	let n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e.charAt(r);
		if (i === "j") {
			let a = 0;
			for (; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
			let o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), c = ye(t);
			for ((c == "H" || c == "k") && (s = 0); s-- > 0;) n += "a";
			for (; o-- > 0;) n = c + n;
		} else i === "J" ? n += "H" : n += i;
	}
	return n;
}
function ye(e) {
	let t = e.hourCycle;
	if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	let n = e.language, r;
	return n !== "root" && (r = e.maximize().region), (k[r || ""] || k[n || ""] || k[`${n}-001`] || k["001"])[0];
}
var be = RegExp(`^${O.source}*`), xe = RegExp(`${O.source}*$`);
function A(e, t) {
	return {
		start: e,
		end: t
	};
}
var Se = !!Object.fromEntries, Ce = !!String.prototype.trimStart, we = !!String.prototype.trimEnd, j = Se ? Object.fromEntries : function(e) {
	let t = {};
	for (let [n, r] of e) t[n] = r;
	return t;
}, Te = Ce ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(be, "");
}, Ee = we ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(xe, "");
}, M = /* @__PURE__ */ RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
function De(e, t) {
	return M.lastIndex = t, M.exec(e)[1] ?? "";
}
var Oe = class {
	message;
	position;
	locale;
	ignoreTag;
	requiresOtherClause;
	shouldParseSkeletons;
	constructor(e, t = {}) {
		this.message = e, this.position = {
			offset: 0,
			line: 1,
			column: 1
		}, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
	}
	parse() {
		if (this.offset() !== 0) throw Error("parser can only be used once");
		return this.parseMessage(0, "", !1);
	}
	parseMessage(e, t, n) {
		let r = [];
		for (; !this.isEOF();) {
			let i = this.char();
			if (i === 123) {
				let t = this.parseArgument(e, n);
				if (t.err) return t;
				r.push(t.val);
			} else if (i === 125 && e > 0) break;
			else if (i === 35 && (t === "plural" || t === "selectordinal")) {
				let e = this.clonePosition();
				this.bump(), r.push({
					type: C.pound,
					location: A(e, this.clonePosition())
				});
			} else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
				if (n) break;
				return this.error(D.UNMATCHED_CLOSING_TAG, A(this.clonePosition(), this.clonePosition()));
			} else if (i === 60 && !this.ignoreTag && N(this.peek() || 0)) {
				let n = this.parseTag(e, t);
				if (n.err) return n;
				r.push(n.val);
			} else {
				let n = this.parseLiteral(e, t);
				if (n.err) return n;
				r.push(n.val);
			}
		}
		return {
			val: r,
			err: null
		};
	}
	parseTag(e, t) {
		let n = this.clonePosition();
		this.bump();
		let r = this.parseTagName();
		if (this.bumpSpace(), this.bumpIf("/>")) return {
			val: {
				type: C.literal,
				value: `<${r}/>`,
				location: A(n, this.clonePosition())
			},
			err: null
		};
		if (this.bumpIf(">")) {
			let i = this.parseMessage(e + 1, t, !0);
			if (i.err) return i;
			let a = i.val, o = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !N(this.char())) return this.error(D.INVALID_TAG, A(o, this.clonePosition()));
				let e = this.clonePosition();
				return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: C.tag,
						value: r,
						children: a,
						location: A(n, this.clonePosition())
					},
					err: null
				} : this.error(D.INVALID_TAG, A(o, this.clonePosition()))) : this.error(D.UNMATCHED_CLOSING_TAG, A(e, this.clonePosition()));
			} else return this.error(D.UNCLOSED_TAG, A(n, this.clonePosition()));
		} else return this.error(D.INVALID_TAG, A(n, this.clonePosition()));
	}
	parseTagName() {
		let e = this.offset();
		for (this.bump(); !this.isEOF() && Ae(this.char());) this.bump();
		return this.message.slice(e, this.offset());
	}
	parseLiteral(e, t) {
		let n = this.clonePosition(), r = "";
		for (;;) {
			let n = this.tryParseQuote(t);
			if (n) {
				r += n;
				continue;
			}
			let i = this.tryParseUnquoted(e, t);
			if (i) {
				r += i;
				continue;
			}
			let a = this.tryParseLeftAngleBracket();
			if (a) {
				r += a;
				continue;
			}
			break;
		}
		let i = A(n, this.clonePosition());
		return {
			val: {
				type: C.literal,
				value: r,
				location: i
			},
			err: null
		};
	}
	tryParseLeftAngleBracket() {
		return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !ke(this.peek() || 0)) ? (this.bump(), "<") : null;
	}
	tryParseQuote(e) {
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
		let t = [this.char()];
		for (this.bump(); !this.isEOF();) {
			let e = this.char();
			if (e === 39) if (this.peek() === 39) t.push(39), this.bump();
			else {
				this.bump();
				break;
			}
			else t.push(e);
			this.bump();
		}
		return String.fromCodePoint(...t);
	}
	tryParseUnquoted(e, t) {
		if (this.isEOF()) return null;
		let n = this.char();
		return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), String.fromCodePoint(n));
	}
	parseArgument(e, t) {
		let n = this.clonePosition();
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(D.EXPECT_ARGUMENT_CLOSING_BRACE, A(n, this.clonePosition()));
		if (this.char() === 125) return this.bump(), this.error(D.EMPTY_ARGUMENT, A(n, this.clonePosition()));
		let r = this.parseIdentifierIfPossible().value;
		if (!r) return this.error(D.MALFORMED_ARGUMENT, A(n, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(D.EXPECT_ARGUMENT_CLOSING_BRACE, A(n, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: C.argument,
					value: r,
					location: A(n, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(D.EXPECT_ARGUMENT_CLOSING_BRACE, A(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
			default: return this.error(D.MALFORMED_ARGUMENT, A(n, this.clonePosition()));
		}
	}
	parseIdentifierIfPossible() {
		let e = this.clonePosition(), t = this.offset(), n = De(this.message, t), r = t + n.length;
		return this.bumpTo(r), {
			value: n,
			location: A(e, this.clonePosition())
		};
	}
	parseArgumentOptions(e, t, n, r) {
		let i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
		switch (a) {
			case "": return this.error(D.EXPECT_ARGUMENT_TYPE, A(i, o));
			case "number":
			case "date":
			case "time": {
				this.bumpSpace();
				let e = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					let t = this.clonePosition(), n = this.parseSimpleArgStyleIfPossible();
					if (n.err) return n;
					let r = Ee(n.val);
					if (r.length === 0) return this.error(D.EXPECT_ARGUMENT_STYLE, A(this.clonePosition(), this.clonePosition()));
					e = {
						style: r,
						styleLocation: A(t, this.clonePosition())
					};
				}
				let t = this.tryParseArgumentClose(r);
				if (t.err) return t;
				let i = A(r, this.clonePosition());
				if (e && e.style.startsWith("::")) {
					let t = Te(e.style.slice(2));
					if (a === "number") {
						let r = this.parseNumberSkeletonFromString(t, e.styleLocation);
						return r.err ? r : {
							val: {
								type: C.number,
								value: n,
								location: i,
								style: r.val
							},
							err: null
						};
					} else {
						if (t.length === 0) return this.error(D.EXPECT_DATE_TIME_SKELETON, i);
						let r = t;
						this.locale && (r = ve(t, this.locale));
						let o = {
							type: w.dateTime,
							pattern: r,
							location: e.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? te(r) : {}
						};
						return {
							val: {
								type: a === "date" ? C.date : C.time,
								value: n,
								location: i,
								style: o
							},
							err: null
						};
					}
				}
				return {
					val: {
						type: a === "number" ? C.number : a === "date" ? C.date : C.time,
						value: n,
						location: i,
						style: e?.style ?? null
					},
					err: null
				};
			}
			case "plural":
			case "selectordinal":
			case "select": {
				let i = this.clonePosition();
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(D.EXPECT_SELECT_ARGUMENT_OPTIONS, A(i, { ...i }));
				this.bumpSpace();
				let o = this.parseIdentifierIfPossible(), s = 0;
				if (a !== "select" && o.value === "offset") {
					if (!this.bumpIf(":")) return this.error(D.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, A(this.clonePosition(), this.clonePosition()));
					this.bumpSpace();
					let e = this.tryParseDecimalInteger(D.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, D.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
					if (e.err) return e;
					this.bumpSpace(), o = this.parseIdentifierIfPossible(), s = e.val;
				}
				let c = this.tryParsePluralOrSelectOptions(e, a, t, o);
				if (c.err) return c;
				let l = this.tryParseArgumentClose(r);
				if (l.err) return l;
				let u = A(r, this.clonePosition());
				return a === "select" ? {
					val: {
						type: C.select,
						value: n,
						options: j(c.val),
						location: u
					},
					err: null
				} : {
					val: {
						type: C.plural,
						value: n,
						options: j(c.val),
						offset: s,
						pluralType: a === "plural" ? "cardinal" : "ordinal",
						location: u
					},
					err: null
				};
			}
			default: return this.error(D.INVALID_ARGUMENT_TYPE, A(i, o));
		}
	}
	tryParseArgumentClose(e) {
		return this.isEOF() || this.char() !== 125 ? this.error(D.EXPECT_ARGUMENT_CLOSING_BRACE, A(e, this.clonePosition())) : (this.bump(), {
			val: !0,
			err: null
		});
	}
	parseSimpleArgStyleIfPossible() {
		let e = 0, t = this.clonePosition();
		for (; !this.isEOF();) switch (this.char()) {
			case 39: {
				this.bump();
				let e = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(D.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, A(e, this.clonePosition()));
				this.bump();
				break;
			}
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
			default:
				this.bump();
				break;
		}
		return {
			val: this.message.slice(t.offset, this.offset()),
			err: null
		};
	}
	parseNumberSkeletonFromString(e, t) {
		let n = [];
		try {
			n = re(e);
		} catch {
			return this.error(D.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: w.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? ce(n) : {}
			},
			err: null
		};
	}
	tryParsePluralOrSelectOptions(e, t, n, r) {
		let i = !1, a = [], o = /* @__PURE__ */ new Set(), { value: s, location: c } = r;
		for (;;) {
			if (s.length === 0) {
				let e = this.clonePosition();
				if (t !== "select" && this.bumpIf("=")) {
					let t = this.tryParseDecimalInteger(D.EXPECT_PLURAL_ARGUMENT_SELECTOR, D.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (t.err) return t;
					c = A(e, this.clonePosition()), s = this.message.slice(e.offset, this.offset());
				} else break;
			}
			if (o.has(s)) return this.error(t === "select" ? D.DUPLICATE_SELECT_ARGUMENT_SELECTOR : D.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
			s === "other" && (i = !0), this.bumpSpace();
			let r = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(t === "select" ? D.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : D.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, A(this.clonePosition(), this.clonePosition()));
			let l = this.parseMessage(e + 1, t, n);
			if (l.err) return l;
			let u = this.tryParseArgumentClose(r);
			if (u.err) return u;
			a.push([s, {
				value: l.val,
				location: A(r, this.clonePosition())
			}]), o.add(s), this.bumpSpace(), {value: s, location: c} = this.parseIdentifierIfPossible();
		}
		return a.length === 0 ? this.error(t === "select" ? D.EXPECT_SELECT_ARGUMENT_SELECTOR : D.EXPECT_PLURAL_ARGUMENT_SELECTOR, A(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(D.MISSING_OTHER_CLAUSE, A(this.clonePosition(), this.clonePosition())) : {
			val: a,
			err: null
		};
	}
	tryParseDecimalInteger(e, t) {
		let n = 1, r = this.clonePosition();
		this.bumpIf("+") || this.bumpIf("-") && (n = -1);
		let i = !1, a = 0;
		for (; !this.isEOF();) {
			let e = this.char();
			if (e >= 48 && e <= 57) i = !0, a = a * 10 + (e - 48), this.bump();
			else break;
		}
		let o = A(r, this.clonePosition());
		return i ? (a *= n, Number.isSafeInteger(a) ? {
			val: a,
			err: null
		} : this.error(t, o)) : this.error(e, o);
	}
	offset() {
		return this.position.offset;
	}
	isEOF() {
		return this.offset() === this.message.length;
	}
	clonePosition() {
		return {
			offset: this.position.offset,
			line: this.position.line,
			column: this.position.column
		};
	}
	char() {
		let e = this.position.offset;
		if (e >= this.message.length) throw Error("out of bound");
		let t = this.message.codePointAt(e);
		if (t === void 0) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
		return t;
	}
	error(e, t) {
		return {
			val: null,
			err: {
				kind: e,
				message: this.message,
				location: t
			}
		};
	}
	bump() {
		if (this.isEOF()) return;
		let e = this.char();
		e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
	}
	bumpIf(e) {
		if (this.message.startsWith(e, this.offset())) {
			for (let t = 0; t < e.length; t++) this.bump();
			return !0;
		}
		return !1;
	}
	bumpUntil(e) {
		let t = this.offset(), n = this.message.indexOf(e, t);
		return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
	}
	bumpTo(e) {
		if (this.offset() > e) throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
		for (e = Math.min(e, this.message.length);;) {
			let t = this.offset();
			if (t === e) break;
			if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
			if (this.bump(), this.isEOF()) break;
		}
	}
	bumpSpace() {
		for (; !this.isEOF() && je(this.char());) this.bump();
	}
	peek() {
		if (this.isEOF()) return null;
		let e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}
};
function N(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function ke(e) {
	return N(e) || e === 47;
}
function Ae(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function je(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function P(e) {
	e.forEach((e) => {
		if (delete e.location, T(e) || me(e)) for (let t in e.options) delete e.options[t].location, P(e.options[t].value);
		else de(e) && _e(e.style) || (fe(e) || pe(e)) && E(e.style) ? delete e.style.location : ge(e) && P(e.children);
	});
}
function Me(e, t = {}) {
	t = {
		shouldParseSkeletons: !0,
		requiresOtherClause: !0,
		...t
	};
	let n = new Oe(e, t).parse();
	if (n.err) {
		let e = SyntaxError(D[n.err.kind]);
		throw e.location = n.err.location, e.originalMessage = n.err.message, e;
	}
	return t?.captureLocation || P(n.val), n.val;
}
var F = function(e) {
	return e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API", e;
}({}), I = class extends Error {
	code;
	originalMessage;
	constructor(e, t, n) {
		super(e), this.code = t, this.originalMessage = n;
	}
	toString() {
		return `[formatjs Error: ${this.code}] ${this.message}`;
	}
}, L = class extends I {
	constructor(e, t, n, r) {
		super(`Invalid values for "${e}": "${t}". Options are "${Object.keys(n).join("\", \"")}"`, F.INVALID_VALUE, r);
	}
}, Ne = class extends I {
	constructor(e, t, n) {
		super(`Value for "${e}" must be of type ${t}`, F.INVALID_VALUE, n);
	}
}, Pe = class extends I {
	constructor(e, t) {
		super(`The intl string context variable "${e}" was not provided to the string "${t}"`, F.MISSING_VALUE, t);
	}
}, R = function(e) {
	return e[e.literal = 0] = "literal", e[e.object = 1] = "object", e;
}({});
function Fe(e) {
	return e.length < 2 ? e : e.reduce((e, t) => {
		let n = e[e.length - 1];
		return !n || n.type !== R.literal || t.type !== R.literal ? e.push(t) : n.value += t.value, e;
	}, []);
}
function z(e) {
	return typeof e == "function";
}
function B(e, t, n, r, i, a, o) {
	if (e.length === 1 && le(e[0])) return [{
		type: R.literal,
		value: e[0].value
	}];
	let s = [];
	for (let c of e) {
		if (le(c)) {
			s.push({
				type: R.literal,
				value: c.value
			});
			continue;
		}
		if (he(c)) {
			typeof a == "number" && s.push({
				type: R.literal,
				value: n.getNumberFormat(t).format(a)
			});
			continue;
		}
		let { value: e } = c;
		if (!(i && e in i)) throw new Pe(e, o);
		let l = i[e];
		if (ue(c)) {
			(!l || typeof l == "string" || typeof l == "number" || typeof l == "bigint") && (l = typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? String(l) : ""), s.push({
				type: typeof l == "string" ? R.literal : R.object,
				value: l
			});
			continue;
		}
		if (fe(c)) {
			let e = typeof c.style == "string" ? r.date[c.style] : E(c.style) ? c.style.parsedOptions : void 0;
			s.push({
				type: R.literal,
				value: n.getDateTimeFormat(t, e).format(l)
			});
			continue;
		}
		if (pe(c)) {
			let e = typeof c.style == "string" ? r.time[c.style] : E(c.style) ? c.style.parsedOptions : r.time.medium;
			s.push({
				type: R.literal,
				value: n.getDateTimeFormat(t, e).format(l)
			});
			continue;
		}
		if (de(c)) {
			let e = typeof c.style == "string" ? r.number[c.style] : _e(c.style) ? c.style.parsedOptions : void 0;
			if (e && e.scale) {
				let t = e.scale || 1;
				if (typeof l == "bigint") {
					if (!Number.isInteger(t)) throw TypeError(`Cannot apply fractional scale ${t} to bigint value. Scale must be an integer when formatting bigint.`);
					l *= BigInt(t);
				} else l *= t;
			}
			s.push({
				type: R.literal,
				value: n.getNumberFormat(t, e).format(l)
			});
			continue;
		}
		if (ge(c)) {
			let { children: e, value: l } = c, u = i[l];
			if (!z(u)) throw new Ne(l, "function", o);
			let d = u(B(e, t, n, r, i, a).map((e) => e.value));
			Array.isArray(d) || (d = [d]), s.push(...d.map((e) => ({
				type: typeof e == "string" ? R.literal : R.object,
				value: e
			})));
		}
		if (T(c)) {
			let e = l, a = (Object.prototype.hasOwnProperty.call(c.options, e) ? c.options[e] : void 0) || c.options.other;
			if (!a) throw new L(c.value, l, Object.keys(c.options), o);
			s.push(...B(a.value, t, n, r, i));
			continue;
		}
		if (me(c)) {
			let e = `=${l}`, a = Object.prototype.hasOwnProperty.call(c.options, e) ? c.options[e] : void 0;
			if (!a) {
				if (!Intl.PluralRules) throw new I("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", F.MISSING_INTL_API, o);
				let e = typeof l == "bigint" ? Number(l) : l, r = n.getPluralRules(t, { type: c.pluralType }).select(e - (c.offset || 0));
				a = (Object.prototype.hasOwnProperty.call(c.options, r) ? c.options[r] : void 0) || c.options.other;
			}
			if (!a) throw new L(c.value, l, Object.keys(c.options), o);
			let u = typeof l == "bigint" ? Number(l) : l;
			s.push(...B(a.value, t, n, r, i, u - (c.offset || 0)));
			continue;
		}
	}
	return Fe(s);
}
function Ie(e, t) {
	return t ? {
		...e,
		...t,
		...Object.keys(e).reduce((n, r) => (n[r] = {
			...e[r],
			...t[r]
		}, n), {})
	} : e;
}
function Le(e, t) {
	return t ? Object.keys(e).reduce((n, r) => (n[r] = Ie(e[r], t[r]), n), { ...e }) : e;
}
function V(e) {
	return { create() {
		return {
			get(t) {
				return e[t];
			},
			set(t, n) {
				e[t] = n;
			}
		};
	} };
}
function Re(e = {
	number: {},
	dateTime: {},
	pluralRules: {}
}) {
	return {
		getNumberFormat: o((...e) => new Intl.NumberFormat(...e), {
			cache: V(e.number),
			strategy: _.variadic
		}),
		getDateTimeFormat: o((...e) => new Intl.DateTimeFormat(...e), {
			cache: V(e.dateTime),
			strategy: _.variadic
		}),
		getPluralRules: o((...e) => new Intl.PluralRules(...e), {
			cache: V(e.pluralRules),
			strategy: _.variadic
		})
	};
}
var H = class e {
	ast;
	locales;
	resolvedLocale;
	formatters;
	formats;
	message;
	formatterCache = {
		number: {},
		dateTime: {},
		pluralRules: {}
	};
	constructor(t, n = e.defaultLocale, r, i) {
		if (this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
			if (this.message = t, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
			let { ...n } = i || {};
			this.ast = e.__parse(t, {
				...n,
				locale: this.resolvedLocale
			});
		} else this.ast = t;
		if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
		this.formats = Le(e.formats, r), this.formatters = i && i.formatters || Re(this.formatterCache);
	}
	format = (e) => {
		let t = this.formatToParts(e);
		if (t.length === 1) return t[0].value;
		let n = t.reduce((e, t) => (!e.length || t.type !== R.literal || typeof e[e.length - 1] != "string" ? e.push(t.value) : e[e.length - 1] += t.value, e), []);
		return n.length <= 1 ? n[0] || "" : n;
	};
	formatToParts = (e) => B(this.ast, this.locales, this.formatters, this.formats, e, void 0, this.message);
	resolvedOptions = () => ({ locale: this.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(this.locales)[0] });
	getAst = () => this.ast;
	static memoizedDefaultLocale = null;
	static get defaultLocale() {
		return e.memoizedDefaultLocale ||= new Intl.NumberFormat().resolvedOptions().locale, e.memoizedDefaultLocale;
	}
	static resolveLocale = (e) => {
		if (Intl.Locale === void 0) return;
		let t = Intl.NumberFormat.supportedLocalesOf(e);
		return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
	};
	static __parse = Me;
	static formats = {
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
	};
}, U = function(e) {
	return e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION", e;
}({}), W = class e extends Error {
	code;
	constructor(t, n, r) {
		let i = r ? r instanceof Error ? r : Error(String(r)) : void 0;
		super(`[@formatjs/intl Error ${t}] ${n}
${i ? `\n${i.message}\n${i.stack}` : ""}`), this.code = t, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, e);
	}
}, ze = class extends W {
	constructor(e, t) {
		super(U.UNSUPPORTED_FORMATTER, e, t);
	}
}, Be = class extends W {
	constructor(e, t) {
		super(U.INVALID_CONFIG, e, t);
	}
}, G = class extends W {
	constructor(e, t) {
		super(U.MISSING_DATA, e, t);
	}
}, K = class extends W {
	descriptor;
	locale;
	constructor(e, t, n) {
		super(U.FORMAT_ERROR, `${e}
Locale: ${t}
`, n), this.locale = t;
	}
}, q = class extends K {
	descriptor;
	locale;
	constructor(e, t, n, r) {
		super(`${e}
MessageID: ${n?.id}
Default Message: ${n?.defaultMessage}
Description: ${n?.description}
`, t, r), this.descriptor = n, this.locale = t;
	}
}, Ve = class extends W {
	descriptor;
	constructor(e, t) {
		super(U.MISSING_TRANSLATION, `Missing message: "${e.id}" for locale "${t}", using ${e.defaultMessage ? `default message (${typeof e.defaultMessage == "string" ? e.defaultMessage : e.defaultMessage.map((e) => e.value ?? JSON.stringify(e)).join()})` : "id"} as fallback.`), this.descriptor = e;
	}
};
function He(e, t, n = Error) {
	if (!e) throw new n(t);
}
function J(e, t, n = {}) {
	return t.reduce((t, r) => (r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t), {});
}
var Ue = {
	formats: {},
	messages: {},
	timeZone: void 0,
	defaultLocale: "en",
	defaultFormats: {},
	fallbackOnEmptyString: !0,
	onError: (e) => {
		process.env.NODE_ENV !== "production" && console.error(e);
	},
	onWarn: (e) => {
		process.env.NODE_ENV !== "production" && console.warn(e);
	}
};
function We() {
	return {
		dateTime: {},
		number: {},
		message: {},
		relativeTime: {},
		pluralRules: {},
		list: {},
		displayNames: {}
	};
}
function Y(e) {
	return { create() {
		return {
			get(t) {
				return e[t];
			},
			set(t, n) {
				e[t] = n;
			}
		};
	} };
}
function Ge(e = We()) {
	let t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = o((...e) => new Intl.DateTimeFormat(...e), {
		cache: Y(e.dateTime),
		strategy: _.variadic
	}), a = o((...e) => new Intl.NumberFormat(...e), {
		cache: Y(e.number),
		strategy: _.variadic
	}), s = o((...e) => new Intl.PluralRules(...e), {
		cache: Y(e.pluralRules),
		strategy: _.variadic
	});
	return {
		getDateTimeFormat: i,
		getNumberFormat: a,
		getMessageFormat: o((e, t, n, r) => new H(e, t, n, {
			formatters: {
				getNumberFormat: a,
				getDateTimeFormat: i,
				getPluralRules: s
			},
			...r
		}), {
			cache: Y(e.message),
			strategy: _.variadic
		}),
		getRelativeTimeFormat: o((...e) => new t(...e), {
			cache: Y(e.relativeTime),
			strategy: _.variadic
		}),
		getPluralRules: s,
		getListFormat: o((...e) => new n(...e), {
			cache: Y(e.list),
			strategy: _.variadic
		}),
		getDisplayNames: o((...e) => new r(...e), {
			cache: Y(e.displayNames),
			strategy: _.variadic
		})
	};
}
function X(e, t, n, r) {
	let i = e && e[t], a;
	if (i && (a = i[n]), a) return a;
	r(new ze(`No ${t} format named: ${n}`));
}
function Z(e, t) {
	return Object.keys(e).reduce((n, r) => (n[r] = {
		timeZone: t,
		...e[r]
	}, n), {});
}
function Ke(e, t) {
	return Object.keys({
		...e,
		...t
	}).reduce((n, r) => (n[r] = {
		...e[r],
		...t[r]
	}, n), {});
}
function qe(e, t) {
	if (!t) return e;
	let n = H.formats;
	return {
		...n,
		...e,
		date: Ke(Z(n.date, t), Z(e.date || {}, t)),
		time: Ke(Z(n.time, t), Z(e.time || {}, t))
	};
}
var Q = ({ locale: e, formats: t, messages: n, defaultLocale: r, defaultFormats: i, fallbackOnEmptyString: a, onError: o, timeZone: s, defaultRichTextElements: c }, l, u = { id: "" }, d, f) => {
	let { id: p, defaultMessage: m } = u;
	He(!!p, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
	let h = String(p), g = n && Object.prototype.hasOwnProperty.call(n, h) && n[h];
	if (Array.isArray(g) && g.length === 1 && g[0].type === C.literal) return g[0].value;
	if (d = {
		...c,
		...d
	}, t = qe(t, s), i = qe(i, s), !g) {
		if (a === !1 && g === "") return g;
		if ((!m || e && e.toLowerCase() !== r.toLowerCase()) && o(new Ve(u, e)), m) try {
			return l.getMessageFormat(m, r, i, f).format(d);
		} catch (t) {
			return o(new q(`Error formatting default message for: "${h}", rendering default message verbatim`, e, u, t)), typeof m == "string" ? m : h;
		}
		return h;
	}
	try {
		return l.getMessageFormat(g, e, t, {
			formatters: l,
			...f
		}).format(d);
	} catch (t) {
		o(new q(`Error formatting message: "${h}", using ${m ? "default message" : "id"} as fallback.`, e, u, t));
	}
	if (m) try {
		return l.getMessageFormat(m, r, i, f).format(d);
	} catch (t) {
		o(new q(`Error formatting the default message for: "${h}", rendering message verbatim`, e, u, t));
	}
	return typeof g == "string" ? g : typeof m == "string" ? m : h;
}, Je = [
	"formatMatcher",
	"timeZone",
	"hour12",
	"weekday",
	"era",
	"year",
	"month",
	"day",
	"hour",
	"minute",
	"second",
	"timeZoneName",
	"hourCycle",
	"dateStyle",
	"timeStyle",
	"calendar",
	"numberingSystem",
	"fractionalSecondDigits"
];
function $({ locale: e, formats: t, onError: n, timeZone: r }, i, a, o = {}) {
	let { format: s } = o, c = J(o, Je, {
		...r && { timeZone: r },
		...s && X(t, i, s, n)
	});
	return i === "time" && !c.hour && !c.minute && !c.second && !c.timeStyle && !c.dateStyle && (c = {
		...c,
		hour: "numeric",
		minute: "numeric"
	}), a(e, c);
}
function Ye(e, t, n, r = {}) {
	let i = typeof n == "string" ? new Date(n || 0) : n;
	try {
		return $(e, "date", t, r).format(i);
	} catch (t) {
		e.onError(new K("Error formatting date.", e.locale, t));
	}
	return String(i);
}
function Xe(e, t, n, r = {}) {
	let i = typeof n == "string" ? new Date(n || 0) : n;
	try {
		return $(e, "time", t, r).format(i);
	} catch (t) {
		e.onError(new K("Error formatting time.", e.locale, t));
	}
	return String(i);
}
function Ze(e, t, n, r, i = {}) {
	let a = typeof n == "string" ? new Date(n || 0) : n, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return $(e, "dateTimeRange", t, i).formatRange(a, o);
	} catch (t) {
		e.onError(new K("Error formatting date time range.", e.locale, t));
	}
	return String(a);
}
function Qe(e, t, n, r = {}) {
	let i = typeof n == "string" ? new Date(n || 0) : n;
	try {
		return $(e, "date", t, r).formatToParts(i);
	} catch (t) {
		e.onError(new K("Error formatting date.", e.locale, t));
	}
	return [];
}
function $e(e, t, n, r = {}) {
	let i = typeof n == "string" ? new Date(n || 0) : n;
	try {
		return $(e, "time", t, r).formatToParts(i);
	} catch (t) {
		e.onError(new K("Error formatting time.", e.locale, t));
	}
	return [];
}
var et = [
	"style",
	"type",
	"fallback",
	"languageDisplay"
];
function tt({ locale: e, onError: t }, n, r, i) {
	Intl.DisplayNames || t(new I("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", F.MISSING_INTL_API));
	let a = J(i, et);
	try {
		return n(e, a).of(r);
	} catch (n) {
		t(new K("Error formatting display name.", e, n));
	}
}
var nt = ["type", "style"], rt = Date.now();
function it(e) {
	return `${rt}_${e}_${rt}`;
}
function at(e, t, n, r = {}) {
	let i = ot(e, t, n, r).reduce((e, t) => {
		let n = t.value;
		return typeof n == "string" && typeof e[e.length - 1] == "string" ? e[e.length - 1] += n : e.push(n), e;
	}, []);
	return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function ot({ locale: e, onError: t }, n, r, i = {}) {
	Intl.ListFormat || t(new I("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", F.MISSING_INTL_API));
	let a = J(i, nt);
	try {
		let t = {}, i = Array.from(r).map((e, n) => {
			if (typeof e == "object" && e) {
				let r = it(n);
				return t[r] = e, r;
			}
			return String(e);
		});
		return n(e, a).formatToParts(i).map((e) => e.type === "literal" ? e : {
			...e,
			value: t[e.value] || e.value
		});
	} catch (n) {
		t(new K("Error formatting list.", e, n));
	}
	return r;
}
var st = ["type"];
function ct({ locale: e, onError: t }, n, r, i = {}) {
	Intl.PluralRules || t(new I("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", F.MISSING_INTL_API));
	let a = J(i, st);
	try {
		return n(e, a).select(r);
	} catch (n) {
		t(new K("Error formatting plural.", e, n));
	}
	return "other";
}
var lt = ["numeric", "style"];
function ut({ locale: e, formats: t, onError: n }, r, i = {}) {
	let { format: a } = i;
	return r(e, J(i, lt, !!a && X(t, "relative", a, n) || {}));
}
function dt(e, t, n, r, i = {}) {
	r ||= "second", Intl.RelativeTimeFormat || e.onError(new I("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", F.MISSING_INTL_API));
	try {
		return ut(e, t, i).format(n, r);
	} catch (t) {
		e.onError(new K("Error formatting relative time.", e.locale, t));
	}
	return String(n);
}
var ft = [
	"style",
	"currency",
	"unit",
	"unitDisplay",
	"useGrouping",
	"minimumIntegerDigits",
	"minimumFractionDigits",
	"maximumFractionDigits",
	"minimumSignificantDigits",
	"maximumSignificantDigits",
	"compactDisplay",
	"currencyDisplay",
	"currencySign",
	"notation",
	"signDisplay",
	"unit",
	"unitDisplay",
	"numberingSystem",
	"trailingZeroDisplay",
	"roundingPriority",
	"roundingIncrement",
	"roundingMode"
];
function pt({ locale: e, formats: t, onError: n }, r, i = {}) {
	let { format: a } = i;
	return r(e, J(i, ft, a && X(t, "number", a, n) || {}));
}
function mt(e, t, n, r = {}) {
	try {
		return pt(e, t, r).format(n);
	} catch (t) {
		e.onError(new K("Error formatting number.", e.locale, t));
	}
	return String(n);
}
function ht(e, t, n, r = {}) {
	try {
		return pt(e, t, r).formatToParts(n);
	} catch (t) {
		e.onError(new K("Error formatting number.", e.locale, t));
	}
	return [];
}
function gt(e) {
	return typeof (e ? e[Object.keys(e)[0]] : void 0) == "string";
}
function _t(e) {
	e.onWarn && e.defaultRichTextElements && gt(e.messages || {}) && e.onWarn("[@formatjs/intl] \"defaultRichTextElements\" was specified but \"message\" was not pre-compiled. \nPlease consider using \"@formatjs/cli\" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution");
}
function vt(e, t) {
	let n = Ge(t), r = {
		...Ue,
		...e
	}, { locale: i, defaultLocale: a, onError: o } = r;
	return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && o ? o(new G(`Missing locale data for locale: "${i}" in Intl.NumberFormat. Using default locale: "${a}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`)) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && o && o(new G(`Missing locale data for locale: "${i}" in Intl.DateTimeFormat. Using default locale: "${a}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`)) : (o && o(new Be(`"locale" was not configured, using "${a}" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details`)), r.locale = r.defaultLocale || "en"), _t(r), {
		...r,
		formatters: n,
		formatNumber: mt.bind(null, r, n.getNumberFormat),
		formatNumberToParts: ht.bind(null, r, n.getNumberFormat),
		formatRelativeTime: dt.bind(null, r, n.getRelativeTimeFormat),
		formatDate: Ye.bind(null, r, n.getDateTimeFormat),
		formatDateToParts: Qe.bind(null, r, n.getDateTimeFormat),
		formatTime: Xe.bind(null, r, n.getDateTimeFormat),
		formatDateTimeRange: Ze.bind(null, r, n.getDateTimeFormat),
		formatTimeToParts: $e.bind(null, r, n.getDateTimeFormat),
		formatPlural: ct.bind(null, r, n.getPluralRules),
		formatMessage: Q.bind(null, r, n),
		$t: Q.bind(null, r, n),
		formatList: at.bind(null, r, n.getListFormat),
		formatListToParts: ot.bind(null, r, n.getListFormat),
		formatDisplayName: tt.bind(null, r, n.getDisplayNames)
	};
}
function yt(e, t, n = Error) {
	if (!e) throw new n(t);
}
function bt(e) {
	yt(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var xt = {
	...Ue,
	textComponent: e.Fragment
}, St = (t) => e.Children.toArray(t).map((t, n) => e.isValidElement(t) ? i(e.Fragment, { children: t }, n) : t);
function Ct(e) {
	return function(t) {
		return e(St(t));
	};
}
function wt(e, t) {
	if (e === t) return !0;
	if (!e || !t) return !1;
	var n = Object.keys(e), r = Object.keys(t), i = n.length;
	if (r.length !== i) return !1;
	for (var a = 0; a < i; a++) {
		var o = n[a];
		if (e[o] !== t[o] || !Object.prototype.hasOwnProperty.call(t, o)) return !1;
	}
	return !0;
}
var Tt = e.createContext(null), Et = Tt.Provider;
function Dt() {
	let t = e.useContext(Tt);
	return bt(t), t;
}
function Ot(e) {
	return e && Object.keys(e).reduce((t, n) => {
		let r = e[n];
		return t[n] = z(r) ? Ct(r) : r, t;
	}, {});
}
var kt = (e, t, n, r, ...i) => {
	let a = Q(e, t, n, Ot(r), ...i);
	return Array.isArray(a) ? St(a) : a;
}, At = ({ defaultRichTextElements: e, ...t }, n) => {
	let r = Ot(e), i = vt({
		...xt,
		...t,
		defaultRichTextElements: r
	}, n), a = {
		locale: i.locale,
		timeZone: i.timeZone,
		fallbackOnEmptyString: i.fallbackOnEmptyString,
		formats: i.formats,
		defaultLocale: i.defaultLocale,
		defaultFormats: i.defaultFormats,
		messages: i.messages,
		onError: i.onError,
		defaultRichTextElements: r
	};
	return {
		...i,
		formatMessage: kt.bind(null, a, i.formatters),
		$t: kt.bind(null, a, i.formatters)
	};
};
function jt(e) {
	return {
		locale: e.locale,
		timeZone: e.timeZone,
		fallbackOnEmptyString: e.fallbackOnEmptyString,
		formats: e.formats,
		textComponent: e.textComponent,
		messages: e.messages,
		defaultLocale: e.defaultLocale,
		defaultFormats: e.defaultFormats,
		onError: e.onError,
		onWarn: e.onWarn,
		wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
		defaultRichTextElements: e.defaultRichTextElements
	};
}
function Mt(t) {
	let n = e.useRef(We()), r = e.useRef(void 0), a = e.useRef(void 0), o = {};
	for (let e in t) t[e] !== void 0 && (o[e] = t[e]);
	let s = jt({
		...xt,
		...o
	});
	return (!r.current || !wt(r.current, s)) && (r.current = s, a.current = At(s, n.current)), bt(a.current), i(Et, {
		value: a.current,
		children: t.children
	});
}
Mt.displayName = "IntlProvider";
var Nt = Mt;
function Pt() {
	let e = Dt(), t = r();
	return a("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [i("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: e.formatMessage({ id: "preferences-section.preferences" })
		}), a("div", {
			className: "space-y-4",
			children: [
				a("div", {
					className: "flex items-center justify-between",
					children: [a("div", { children: [i("p", {
						className: "text-sm font-medium text-foreground",
						children: e.formatMessage({ id: "preferences-section.emailNotifications" })
					}), i("p", {
						className: "text-xs text-muted-foreground",
						children: e.formatMessage({ id: "preferences-section.receiveWeeklyBenchmarkReports" })
					})] }), i("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": e.formatMessage({ id: "preferences-section.toggleNotifications" }),
						children: i("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" })
					})]
				}),
				a("div", {
					className: "flex items-center justify-between",
					children: [a("div", { children: [i("p", {
						className: "text-sm font-medium text-foreground",
						children: e.formatMessage({ id: "preferences-section.darkMode" })
					}), i("p", {
						className: "text-xs text-muted-foreground",
						children: e.formatMessage({ id: "preferences-section.useDarkColorScheme" })
					})] }), i("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": e.formatMessage({ id: "preferences-section.toggleDarkMode" }),
						children: i("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" })
					})]
				}),
				a("div", { children: [i("label", {
					htmlFor: t,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: e.formatMessage({ id: "preferences-section.defaultLanguage" })
				}), a("select", {
					id: t,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						i("option", { children: e.formatMessage({ id: "preferences-section.englishEn" }) }),
						i("option", { children: e.formatMessage({ id: "preferences-section.frenchFr" }) }),
						i("option", { children: e.formatMessage({ id: "preferences-section.germanDe" }) }),
						i("option", { children: e.formatMessage({ id: "preferences-section.spanishEs" }) }),
						i("option", { children: e.formatMessage({ id: "preferences-section.japaneseJa" }) }),
						i("option", { children: e.formatMessage({ id: "preferences-section.chineseSimplifiedZhCn" }) }),
						i("option", { children: e.formatMessage({ id: "preferences-section.arabicAr" }) })
					]
				})] })
			]
		})]
	});
}
var Ft = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
};
async function It(e, t = ["shared", "route"]) {
	let n = {};
	for (let r of t) try {
		let t = await Ft(Object.assign({
			"../messages/de/about.json": () => import("../../../messages/de/about.json"),
			"../messages/de/blog.json": () => import("../../../messages/de/blog.json"),
			"../messages/de/careers.json": () => import("../../../messages/de/careers.json"),
			"../messages/de/contact.json": () => import("../../../messages/de/contact.json"),
			"../messages/de/faq.json": () => import("../../../messages/de/faq.json"),
			"../messages/de/home.json": () => import("../../../messages/de/home.json"),
			"../messages/de/pricing.json": () => import("../../../messages/de/pricing.json"),
			"../messages/de/products.json": () => import("../../../messages/de/products.json"),
			"../messages/de/route.json": () => import("../../../messages/de/route.json"),
			"../messages/de/settings.json": () => import("../../../messages/de/settings.json"),
			"../messages/de/shared.json": () => import("../../../messages/de/shared.json"),
			"../messages/de/team.json": () => import("../../../messages/de/team.json"),
			"../messages/en/about.json": () => import("./about-DGl0ofka.js"),
			"../messages/en/blog.json": () => import("./blog-Lz5WCcm7.js"),
			"../messages/en/careers.json": () => import("./careers-C7fCERzT.js"),
			"../messages/en/contact.json": () => import("./contact-BvodRLkx.js"),
			"../messages/en/faq.json": () => import("./faq-CEqyJQ5O.js"),
			"../messages/en/home.json": () => import("./home-CVHSFRQq.js"),
			"../messages/en/pricing.json": () => import("./pricing-BoxWUPtD.js"),
			"../messages/en/products.json": () => import("./products-CalFKazM.js"),
			"../messages/en/route.json": () => import("./route-5-5GFmRv.js"),
			"../messages/en/settings.json": () => import("./settings-BcdUIlzb.js"),
			"../messages/en/shared.json": () => import("./shared-A7jof5em.js"),
			"../messages/en/team.json": () => import("./team-BnHu4vwv.js"),
			"../messages/es/about.json": () => import("../../../messages/es/about.json"),
			"../messages/es/blog.json": () => import("../../../messages/es/blog.json"),
			"../messages/es/careers.json": () => import("../../../messages/es/careers.json"),
			"../messages/es/contact.json": () => import("../../../messages/es/contact.json"),
			"../messages/es/faq.json": () => import("../../../messages/es/faq.json"),
			"../messages/es/home.json": () => import("../../../messages/es/home.json"),
			"../messages/es/pricing.json": () => import("../../../messages/es/pricing.json"),
			"../messages/es/products.json": () => import("../../../messages/es/products.json"),
			"../messages/es/route.json": () => import("../../../messages/es/route.json"),
			"../messages/es/settings.json": () => import("../../../messages/es/settings.json"),
			"../messages/es/shared.json": () => import("../../../messages/es/shared.json"),
			"../messages/es/team.json": () => import("../../../messages/es/team.json"),
			"../messages/fr/about.json": () => import("../../../messages/fr/about.json"),
			"../messages/fr/blog.json": () => import("../../../messages/fr/blog.json"),
			"../messages/fr/careers.json": () => import("../../../messages/fr/careers.json"),
			"../messages/fr/contact.json": () => import("../../../messages/fr/contact.json"),
			"../messages/fr/faq.json": () => import("../../../messages/fr/faq.json"),
			"../messages/fr/home.json": () => import("../../../messages/fr/home.json"),
			"../messages/fr/pricing.json": () => import("../../../messages/fr/pricing.json"),
			"../messages/fr/products.json": () => import("../../../messages/fr/products.json"),
			"../messages/fr/route.json": () => import("../../../messages/fr/route.json"),
			"../messages/fr/settings.json": () => import("../../../messages/fr/settings.json"),
			"../messages/fr/shared.json": () => import("../../../messages/fr/shared.json"),
			"../messages/fr/team.json": () => import("../../../messages/fr/team.json"),
			"../messages/it/about.json": () => import("../../../messages/it/about.json"),
			"../messages/it/blog.json": () => import("../../../messages/it/blog.json"),
			"../messages/it/careers.json": () => import("../../../messages/it/careers.json"),
			"../messages/it/contact.json": () => import("../../../messages/it/contact.json"),
			"../messages/it/faq.json": () => import("../../../messages/it/faq.json"),
			"../messages/it/home.json": () => import("../../../messages/it/home.json"),
			"../messages/it/pricing.json": () => import("../../../messages/it/pricing.json"),
			"../messages/it/products.json": () => import("../../../messages/it/products.json"),
			"../messages/it/route.json": () => import("../../../messages/it/route.json"),
			"../messages/it/settings.json": () => import("../../../messages/it/settings.json"),
			"../messages/it/shared.json": () => import("../../../messages/it/shared.json"),
			"../messages/it/team.json": () => import("../../../messages/it/team.json"),
			"../messages/ja/about.json": () => import("../../../messages/ja/about.json"),
			"../messages/ja/blog.json": () => import("../../../messages/ja/blog.json"),
			"../messages/ja/careers.json": () => import("../../../messages/ja/careers.json"),
			"../messages/ja/contact.json": () => import("../../../messages/ja/contact.json"),
			"../messages/ja/faq.json": () => import("../../../messages/ja/faq.json"),
			"../messages/ja/home.json": () => import("../../../messages/ja/home.json"),
			"../messages/ja/pricing.json": () => import("../../../messages/ja/pricing.json"),
			"../messages/ja/products.json": () => import("../../../messages/ja/products.json"),
			"../messages/ja/route.json": () => import("../../../messages/ja/route.json"),
			"../messages/ja/settings.json": () => import("../../../messages/ja/settings.json"),
			"../messages/ja/shared.json": () => import("../../../messages/ja/shared.json"),
			"../messages/ja/team.json": () => import("../../../messages/ja/team.json"),
			"../messages/ko/about.json": () => import("../../../messages/ko/about.json"),
			"../messages/ko/blog.json": () => import("../../../messages/ko/blog.json"),
			"../messages/ko/careers.json": () => import("../../../messages/ko/careers.json"),
			"../messages/ko/contact.json": () => import("../../../messages/ko/contact.json"),
			"../messages/ko/faq.json": () => import("../../../messages/ko/faq.json"),
			"../messages/ko/home.json": () => import("../../../messages/ko/home.json"),
			"../messages/ko/pricing.json": () => import("../../../messages/ko/pricing.json"),
			"../messages/ko/products.json": () => import("../../../messages/ko/products.json"),
			"../messages/ko/route.json": () => import("../../../messages/ko/route.json"),
			"../messages/ko/settings.json": () => import("../../../messages/ko/settings.json"),
			"../messages/ko/shared.json": () => import("../../../messages/ko/shared.json"),
			"../messages/ko/team.json": () => import("../../../messages/ko/team.json"),
			"../messages/pt/about.json": () => import("../../../messages/pt/about.json"),
			"../messages/pt/blog.json": () => import("../../../messages/pt/blog.json"),
			"../messages/pt/careers.json": () => import("../../../messages/pt/careers.json"),
			"../messages/pt/contact.json": () => import("../../../messages/pt/contact.json"),
			"../messages/pt/faq.json": () => import("../../../messages/pt/faq.json"),
			"../messages/pt/home.json": () => import("../../../messages/pt/home.json"),
			"../messages/pt/pricing.json": () => import("../../../messages/pt/pricing.json"),
			"../messages/pt/products.json": () => import("../../../messages/pt/products.json"),
			"../messages/pt/route.json": () => import("../../../messages/pt/route.json"),
			"../messages/pt/settings.json": () => import("../../../messages/pt/settings.json"),
			"../messages/pt/shared.json": () => import("../../../messages/pt/shared.json"),
			"../messages/pt/team.json": () => import("../../../messages/pt/team.json"),
			"../messages/ru/about.json": () => import("../../../messages/ru/about.json"),
			"../messages/ru/blog.json": () => import("../../../messages/ru/blog.json"),
			"../messages/ru/careers.json": () => import("../../../messages/ru/careers.json"),
			"../messages/ru/contact.json": () => import("../../../messages/ru/contact.json"),
			"../messages/ru/faq.json": () => import("../../../messages/ru/faq.json"),
			"../messages/ru/home.json": () => import("../../../messages/ru/home.json"),
			"../messages/ru/pricing.json": () => import("../../../messages/ru/pricing.json"),
			"../messages/ru/products.json": () => import("../../../messages/ru/products.json"),
			"../messages/ru/route.json": () => import("../../../messages/ru/route.json"),
			"../messages/ru/settings.json": () => import("../../../messages/ru/settings.json"),
			"../messages/ru/shared.json": () => import("../../../messages/ru/shared.json"),
			"../messages/ru/team.json": () => import("../../../messages/ru/team.json"),
			"../messages/zh/about.json": () => import("../../../messages/zh/about.json"),
			"../messages/zh/blog.json": () => import("../../../messages/zh/blog.json"),
			"../messages/zh/careers.json": () => import("../../../messages/zh/careers.json"),
			"../messages/zh/contact.json": () => import("../../../messages/zh/contact.json"),
			"../messages/zh/faq.json": () => import("../../../messages/zh/faq.json"),
			"../messages/zh/home.json": () => import("../../../messages/zh/home.json"),
			"../messages/zh/pricing.json": () => import("../../../messages/zh/pricing.json"),
			"../messages/zh/products.json": () => import("../../../messages/zh/products.json"),
			"../messages/zh/route.json": () => import("../../../messages/zh/route.json"),
			"../messages/zh/settings.json": () => import("../../../messages/zh/settings.json"),
			"../messages/zh/shared.json": () => import("../../../messages/zh/shared.json"),
			"../messages/zh/team.json": () => import("../../../messages/zh/team.json")
		}), `../messages/${e}/${r}.json`, 4);
		Object.assign(n, t.default);
	} catch {
		console.warn(`Could not load namespace ${r} for locale ${e}`);
	}
	return n;
}
var Lt = It("en");
function Rt({ children: e }) {
	let r = n(Lt);
	return i(t.Suspense, {
		fallback: null,
		children: i(Nt, {
			messages: r,
			locale: "en",
			defaultLocale: "en",
			children: e
		})
	});
}
function zt() {
	return i(Rt, { children: i(Pt, {}) });
}
export { zt as default };
var e = {
	"about-grid.whyThisExists": "Why This Exists",
	"about-grid.choosingAnI18nLibraryIs": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	"about-grid.methodology": "Methodology",
	"about-grid.theSame10PageApp": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
	"about-header.aboutThisBenchmark": "About This Benchmark",
	"about-header.thisIsAnOpenSource": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.",
	"what-we-measure.bundleSizeImpact": "Bundle size impact",
	"what-we-measure.theAdditionalJavascriptBytesSent": "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
	"what-we-measure.renderingOverhead": "Rendering overhead",
	"what-we-measure.howMuchExtraTimeThe": "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
	"what-we-measure.hydrationCost": "Hydration cost",
	"what-we-measure.duringSsrTranslationDataIs": "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	"what-we-measure.lazyLoadingEffectiveness": "Lazy loading effectiveness",
	"what-we-measure.whetherSplittingTranslationsByRoute": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	"what-we-measure.localeSwitchSpeed": "Locale switch speed",
	"what-we-measure.howFastTheAppCan": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	"what-we-measure.whatWeMeasure": "What We Measure"
};
export { e as default };
var e = {
	"blog-header.insightsTutorialsAndAnalysisFrom": "Insights, tutorials, and analysis from the i18n community.",
	"blog-list.comparingI18nLibrariesIn2026": "Comparing i18n Libraries in 2026: A Deep Dive",
	"blog-list.weTested12DifferentInternationalization": "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
	"blog-list.howToReduceYourI18n": "How to Reduce Your i18n Bundle by 60%",
	"blog-list.march82026": "March 8, 2026",
	"blog-list.practicalStrategiesForOptimizingTranslation": "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
	"blog-list.theStateOfInternationalizationIn": "The State of Internationalization in React",
	"blog-list.february282026": "February 28, 2026",
	"blog-list.anOverviewOfTheCurrent": "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
	"blog-list.migratingFromReactI18nextTo": "Migrating from react-i18next to Lingui",
	"blog-list.february152026": "February 15, 2026",
	"blog-list.aStepByStepGuide": "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	"blog-list.serverComponentsAndI18nWhat": "Server Components and i18n: What Changes?",
	"blog-list.february12026": "February 1, 2026",
	"blog-list.reactServerComponentsIntroduceNew": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	"blog-list.benchmarkMethodologyHowWeTest": "Benchmark Methodology: How We Test",
	"blog-list.january202026": "January 20, 2026",
	"blog-list.aTransparentLookAtOur": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	"blog-list.readMore": "Read More →"
};
export { e as default };
var e = {
	"open-positions.seniorFrontendEngineer": "Senior Frontend Engineer",
	"open-positions.buildAndMaintainOurBenchmarking": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
	"open-positions.backendEngineer": "Backend Engineer",
	"open-positions.designAndScaleOurCloud": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
	"open-positions.technicalWriter": "Technical Writer",
	"open-positions.createComprehensiveGuidesApiReferences": "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
	"open-positions.devrelEngineer": "DevRel Engineer",
	"open-positions.sanFranciscoRemote": "San Francisco / Remote",
	"open-positions.engageWithTheI18nCommunity": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
	"open-positions.qaEngineer": "QA Engineer",
	"open-positions.ensureTheAccuracyAndReliability": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
	"open-positions.openPositions": "Open Positions",
	"open-positions.applyNow": "Apply Now",
	"open-positions.remote": "Remote",
	"open-positions.fullTime": "Full-time",
	"open-positions.partTime": "Part-time",
	"open-positions.engineering": "Engineering",
	"open-positions.documentation": "Documentation",
	"open-positions.community": "Community",
	"careers-benefits.workFromAnywhereInThe": "Work from anywhere in the world",
	"careers-benefits.competitivePay": "Competitive pay",
	"careers-benefits.topOfMarketCompensation": "Top-of-market compensation",
	"careers-benefits.openSourceTime": "Open source time",
	"careers-header.title": "Careers",
	"careers-header.joinOurMissionToImprove": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
};
export { e as default };
var e = {
	"contact-form.name": "Name",
	"contact-form.yourName": "Your name",
	"contact-form.email": "Email",
	"contact-form.emailPlaceholder": "you@example.com",
	"contact-form.topic": "Topic",
	"contact-form.bugReport": "Bug Report",
	"contact-form.newBenchmarkIdea": "New Benchmark Idea",
	"contact-form.methodologyQuestion": "Methodology Question",
	"contact-form.contribution": "Contribution",
	"contact-form.other": "Other",
	"contact-form.message": "Message",
	"contact-form.describeYourQuestionOrIdea": "Describe your question or idea...",
	"contact-form.sendMessage": "Send Message",
	"contact-header.getInTouch": "Get in Touch",
	"contact-header.haveIdeasFoundABug": "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
};
export { e as default };
var e = {
	"faq-header1.frequentlyAskedQuestions": "Frequently Asked Questions",
	"faq-header1.everythingYouNeedToKnow": "Everything you need to know about i18n Benchmark.",
	"faq-list.whatIsI18nBenchmark": "What is i18n Benchmark?",
	"faq-list.whatIsI18nBenchmarkAnswer": "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.",
	"faq-list.howAreBenchmarksConducted": "How are benchmarks conducted?",
	"faq-list.weRunStandardizedTestsIn": "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
	"faq-list.whichLibrariesAreCurrentlySupported": "Which libraries are currently supported?",
	"faq-list.weSupportReactI18nextReact": "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
	"faq-list.canISubmitMyOwn": "Can I submit my own benchmarks?",
	"faq-list.yesCommunityBenchmarkSubmissionsAre": "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
	"faq-list.howOftenAreBenchmarksUpdated": "How often are benchmarks updated?",
	"faq-list.weReRunAllBenchmarks": "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
	"faq-list.isTheDataReliable": "Is the data reliable?",
	"faq-list.weFollowRigorousStatisticalMethodology": "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
	"faq-list.doYouOfferConsultingServices": "Do you offer consulting services?",
	"faq-list.yesOurEnterprisePlanIncludes": "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
	"faq-list.howCanIContribute": "How can I contribute?",
	"faq-list.thereAreManyWaysTo": "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
};
export { e as default };
var e = {
	"results-table.sampleResults": "Sample Results",
	"results-table.library": "Library",
	"results-table.bundleSize": "Bundle Size",
	"results-table.lookupTime": "Lookup Time",
	"results-table.lazyLoading": "Lazy Loading",
	"understanding-impact.understandingTheImpact": "Understanding the Impact",
	"understanding-impact.whyASingleLargeJson": "Why a single large JSON can hurt performance",
	"understanding-impact.manyI18nLibrariesStoreTranslations": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	"understanding-impact.theJsonMustBeParsed": "The JSON must be parsed on every page load — blocking the main thread.",
	"understanding-impact.contextBasedArchitecturesCanCause": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	"understanding-impact.duringServerSideRenderingThe": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
	"understanding-impact.theTradeOffsOfDynamic": "The trade-offs of dynamic loading",
	"understanding-impact.splittingTranslationsIntoPerRoute": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
	"understanding-impact.waterfallRequests": "Waterfall requests:",
	"understanding-impact.theAppMustFirstLoad": "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
	"understanding-impact.flashOfUntranslatedContentFouc": "Flash of untranslated content (FOUC):",
	"understanding-impact.usersMayBrieflySee": "users may briefly see translation keys or a fallback language before the chunk arrives.",
	"understanding-impact.cacheInvalidation": "Cache invalidation:",
	"understanding-impact.updatingTranslationsRequiresCacheBusting": "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
	"understanding-impact.whatThisBenchmarkMeasures": "What this benchmark measures",
	"understanding-impact.thisTestAppProvidesA": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
	"why-it-matters.whyTheseMetricsMatter": "Why These Metrics Matter",
	"why-it-matters.bundleSize": "Bundle Size",
	"why-it-matters.theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	"why-it-matters.renderingHydration": "Rendering & Hydration",
	"why-it-matters.connectingALargeJsonDictionary": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	"why-it-matters.dynamicLoading": "Dynamic Loading",
	"why-it-matters.loadingAllTranslationsUpfrontOverloads": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
	"hero.aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	"hero.viewResults": "View Results"
};
export { e as default };
var e = {
	"pricing-tiers.starter": "Starter",
	"pricing-tiers.price0": "$0",
	"pricing-tiers.forever": "forever",
	"pricing-tiers.benchmarkRunPerDay": "{runs} benchmark runs/day",
	"pricing-tiers.librariesNumber": "{libs} libraries",
	"pricing-tiers.communitySupport": "Community support",
	"pricing-tiers.publicResults": "Public results",
	"pricing-tiers.pro": "Pro",
	"pricing-tiers.price29": "$29",
	"pricing-tiers.month": "/month",
	"pricing-tiers.unlimitedRuns": "Unlimited runs",
	"pricing-tiers.allLibraries": "All libraries",
	"pricing-tiers.prioritySupport": "Priority support",
	"pricing-tiers.privateResults": "Private results",
	"pricing-tiers.ciIntegration": "CI integration",
	"pricing-tiers.historicalData": "Historical data",
	"pricing-tiers.enterprise": "Enterprise",
	"pricing-tiers.customPrice": "Custom",
	"pricing-tiers.everythingInPro": "Everything in Pro",
	"pricing-tiers.onPremiseOption": "On-premise option",
	"pricing-tiers.ssoSaml": "SSO & SAML",
	"pricing-tiers.dedicatedAccountManager": "Dedicated account manager",
	"pricing-tiers.customSlas": "Custom SLAs",
	"pricing-tiers.auditLogs": "Audit logs",
	"pricing-tiers.trainingSessions": "Training sessions",
	"pricing-tiers.contactSales": "Contact Sales",
	"pricing-tiers.getStarted": "Get Started",
	"pricing-header.simpleTransparentPricing": "Simple, Transparent Pricing",
	"pricing-header.chooseThePlanThatFits": "Choose the plan that fits your team. No hidden fees."
};
export { e as default };
var e = {
	"products-grid.benchmarkCli": "Benchmark CLI",
	"products-grid.runBenchmarksLocallyFromYour": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
	"products-grid.benchmarkCloud": "Benchmark Cloud",
	"products-grid.automatedCloudBasedBenchmarkingWith": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
	"products-grid.benchmarkEnterprise": "Benchmark Enterprise",
	"products-grid.onPremiseDeploymentWithSso": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
	"products-grid.contactUs": "Contact Us",
	"products-grid.migrationAssistant": "Migration Assistant",
	"products-grid.aiPoweredToolThatHelps": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
	"products-grid.translationQa": "Translation QA",
	"products-grid.automatedQualityChecksForMissing": "Automated quality checks for missing translations, pluralization issues, and context errors.",
	"products-grid.bundleOptimizer": "Bundle Optimizer",
	"products-grid.analyzesAndOptimizesYourI18n": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
	"products-grid.learnMore": "Learn More",
	"products-header.toolsAndServicesToStreamline": "Tools and services to streamline your internationalization workflow."
};
export { e as default };
var e = {
	"route.oopsPageNotFound": "Oops! Page not found",
	"route.returnToHome": "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:"
};
export { e as default };
var e = {
	"preferences-section.preferences": "Preferences",
	"preferences-section.emailNotifications": "Email Notifications",
	"preferences-section.receiveWeeklyBenchmarkReports": "Receive weekly benchmark reports",
	"preferences-section.toggleNotifications": "Toggle notifications",
	"preferences-section.darkMode": "Dark Mode",
	"preferences-section.useDarkColorScheme": "Use dark color scheme",
	"preferences-section.toggleDarkMode": "Toggle dark mode",
	"preferences-section.defaultLanguage": "Default Language",
	"preferences-section.englishEn": "English (en)",
	"preferences-section.frenchFr": "French (fr)",
	"preferences-section.germanDe": "German (de)",
	"preferences-section.spanishEs": "Spanish (es)",
	"preferences-section.japaneseJa": "Japanese (ja)",
	"preferences-section.chineseSimplifiedZhCn": "Chinese Simplified (zh-CN)",
	"preferences-section.arabicAr": "Arabic (ar)",
	"settings-header.manageYourAccountPreferencesAnd": "Manage your account preferences and configuration.",
	"settings-footer.cancel": "Cancel",
	"settings-footer.saveChanges": "Save Changes",
	"profile-section.profile": "Profile",
	"profile-section.displayName": "Display Name",
	"profile-section.email": "Email",
	"api-access-section.apiAccess": "API Access",
	"api-access-section.apiKey": "API Key",
	"api-access-section.useThisKeyToAccess": "Use this key to access the benchmarking API programmatically.",
	"api-access-section.copy": "Copy"
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
	"theme-toggle.themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
	"theme-toggle.themeModeLightClick": "Theme mode: light. Click to switch to dark mode.",
	"theme-toggle.themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
	"theme-toggle.themeAuto": "Theme: Auto",
	"theme-toggle.themeDark": "Theme: Dark",
	"theme-toggle.themeLight": "Theme: Light",
	"mock-banner.mockBanner": "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
};
export { e as default };
var e = {
	"team-header.ourTeam": "Our Team",
	"team-header.meetThePeopleBehindI18n": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.",
	"team-grid.sarahChen": "Sarah Chen",
	"team-grid.founderLeadEngineer": "Founder & Lead Engineer",
	"team-grid.formerGoogleEngineerWith10": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	"team-grid.marcusWeber": "Marcus Weber",
	"team-grid.performanceEngineer": "Performance Engineer",
	"team-grid.specializesInJavascriptPerformanceOptimization": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	"team-grid.aishaPatel": "Aisha Patel",
	"team-grid.developerAdvocate": "Developer Advocate",
	"team-grid.passionateAboutDeveloperExperienceAnd": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	"team-grid.tomasRodriguez": "Tomás Rodríguez",
	"team-grid.fullStackDeveloper": "Full-Stack Developer",
	"team-grid.maintainsTheBenchmarkingInfrastructureAnd": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	"team-grid.yukiTanaka": "Yuki Tanaka",
	"team-grid.dataAnalyst": "Data Analyst",
	"team-grid.ensuresStatisticalRigorInAll": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	"team-grid.elenaKowalski": "Elena Kowalski",
	"team-grid.communityManager": "Community Manager",
	"team-grid.managesCommunityContributionsPartnershipsAnd": "Manages community contributions, partnerships, and events. Background in open source governance."
};
export { e as default };
