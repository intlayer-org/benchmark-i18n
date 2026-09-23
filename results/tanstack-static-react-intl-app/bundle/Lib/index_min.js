import * as e from "react";
import t, { use as n } from "react";
import { Fragment as r, jsx as i } from "react/jsx-runtime";
import a from "../src/messages/de.json";
import o from "../src/messages/en.json";
import s from "../src/messages/es.json";
import c from "../src/messages/fr.json";
import l from "../src/messages/it.json";
import u from "../src/messages/ja.json";
import d from "../src/messages/ko.json";
import f from "../src/messages/pt.json";
import p from "../src/messages/ru.json";
import m from "../src/messages/zh.json";
function h(e, t) {
	let n = t && t.cache ? t.cache : oe, r = t && t.serializer ? t.serializer : ie;
	return (t && t.strategy ? t.strategy : te)(e, {
		cache: n,
		serializer: r
	});
}
function g(e) {
	return e == null || typeof e == "number" || typeof e == "boolean";
}
function _(e, t, n, r) {
	let i = g(r) ? r : n(r), a = t.get(i);
	return a === void 0 && (a = e.call(this, r), t.set(i, a)), a;
}
function ee(e, t, n) {
	let r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
	return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
}
function v(e, t, n, r, i) {
	return n.bind(t, e, r, i);
}
function te(e, t) {
	let n = e.length === 1 ? _ : ee;
	return v(e, this, n, t.cache.create(), t.serializer);
}
function ne(e, t) {
	return v(e, this, ee, t.cache.create(), t.serializer);
}
function re(e, t) {
	return v(e, this, _, t.cache.create(), t.serializer);
}
var ie = function() {
	return JSON.stringify(arguments);
}, ae = class {
	constructor() {
		this.cache = Object.create(null);
	}
	get(e) {
		return this.cache[e];
	}
	set(e, t) {
		this.cache[e] = t;
	}
}, oe = { create: function() {
	return new ae();
} }, y = {
	variadic: ne,
	monadic: re
}, se = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function ce(e) {
	let t = {};
	return e.replace(se, (e) => {
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
				][n - 3];
				break;
			case "c":
				if (n < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][n - 3];
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
var le = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function ue(e) {
	if (e.length === 0) throw Error("Number skeleton cannot be empty");
	let t = e.split(le).filter((e) => e.length > 0), n = [];
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
function de(e) {
	return e.replace(/^(.*?)-/, "");
}
var fe = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, pe = /^(@+)?(\+|#+)?[rs]?$/g, me = /(\*)(0+)|(#+)(0+)|(0+)/g, he = /^(0+)$/;
function ge(e) {
	let t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(pe, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function _e(e) {
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
function ve(e) {
	let t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		let n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !he.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function ye(e) {
	return _e(e) || {};
}
function be(e) {
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
				t.style = "unit", t.unit = de(n.options[0]);
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
						...ye(t)
					}), {})
				};
				continue;
			case "engineering":
				t = {
					...t,
					notation: "engineering",
					...n.options.reduce((e, t) => ({
						...e,
						...ye(t)
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
				n.options[0].replace(me, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else if (i && a) throw Error("We currently do not support maximum integer digits");
					else if (o) throw Error("We currently do not support exact integer digits");
					return "";
				});
				continue;
		}
		if (he.test(n.stem)) {
			t.minimumIntegerDigits = n.stem.length;
			continue;
		}
		if (fe.test(n.stem)) {
			if (n.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			n.stem.replace(fe, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			let e = n.options[0];
			e === "w" ? t = {
				...t,
				trailingZeroDisplay: "stripIfInteger"
			} : e && (t = {
				...t,
				...ge(e)
			});
			continue;
		}
		if (pe.test(n.stem)) {
			t = {
				...t,
				...ge(n.stem)
			};
			continue;
		}
		let e = _e(n.stem);
		e && (t = {
			...t,
			...e
		});
		let r = ve(n.stem);
		r && (t = {
			...t,
			...r
		});
	}
	return t;
}
var xe = function(e) {
	return e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", e;
}({}), Se = function(e) {
	return e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag", e;
}({});
function b(e) {
	return e.type === 0;
}
function Ce(e) {
	return e.type === 1;
}
function we(e) {
	return e.type === 2;
}
function x(e) {
	return e.type === 3;
}
function S(e) {
	return e.type === 4;
}
function C(e) {
	return e.type === 5;
}
function w(e) {
	return e.type === 6;
}
function Te(e) {
	return e.type === 7;
}
function T(e) {
	return e.type === 8;
}
function E(e) {
	return !!(e && typeof e == "object" && e.type === 0);
}
function D(e) {
	return !!(e && typeof e == "object" && e.type === 1);
}
var O = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, k = {
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
function Ee(e, t) {
	let n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e.charAt(r);
		if (i === "j") {
			let a = 0;
			for (; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
			let o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), c = De(t);
			for ((c == "H" || c == "k") && (s = 0); s-- > 0;) n += "a";
			for (; o-- > 0;) n = c + n;
		} else n += i === "J" ? "H" : i;
	}
	return n;
}
function De(e) {
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
var Oe = RegExp(`^${O.source}*`), ke = RegExp(`${O.source}*$`);
function A(e, t) {
	return {
		start: e,
		end: t
	};
}
var Ae = !!Object.fromEntries, je = !!String.prototype.trimStart, Me = !!String.prototype.trimEnd, j = Ae ? Object.fromEntries : function(e) {
	let t = {};
	for (let [n, r] of e) t[n] = r;
	return t;
}, Ne = je ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(Oe, "");
}, Pe = Me ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(ke, "");
}, M = /* @__PURE__ */ RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
function Fe(e, t) {
	return M.lastIndex = t, M.exec(e)[1] ?? "";
}
function Ie(e) {
	if (e.length === 0) return null;
	let t = 1, n = 1;
	for (let r = 0; r < e.length;) {
		let i = e.charCodeAt(r);
		switch (i) {
			case 35:
			case 39:
			case 60:
			case 123:
			case 125: return null;
		}
		if (i === 10) t++, n = 1, r++;
		else if (n++, i >= 55296 && i <= 56319 && r + 1 < e.length) {
			let t = e.charCodeAt(r + 1);
			r += t >= 56320 && t <= 57343 ? 2 : 1;
		} else r++;
	}
	return {
		offset: e.length,
		line: t,
		column: n
	};
}
var Le = class {
	constructor(e, t = {}) {
		this.message = e, this.position = {
			offset: 0,
			line: 1,
			column: 1
		}, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
	}
	parse() {
		if (this.offset() !== 0) throw Error("parser can only be used once");
		if (this.message.length > 0) {
			let e = this.message.charCodeAt(0);
			if (e !== 35 && e !== 39 && e !== 60 && e !== 123 && e !== 125) {
				let e = Ie(this.message);
				if (e) {
					let t = this.clonePosition();
					return this.position = e, {
						val: [{
							type: 0,
							value: this.message,
							location: A(t, this.clonePosition())
						}],
						err: null
					};
				}
			}
		}
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
					type: 7,
					location: A(e, this.clonePosition())
				});
			} else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
				if (n) break;
				return this.error(26, A(this.clonePosition(), this.clonePosition()));
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
				type: 0,
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
				if (this.isEOF() || !N(this.char())) return this.error(23, A(o, this.clonePosition()));
				let e = this.clonePosition();
				return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: 8,
						value: r,
						children: a,
						location: A(n, this.clonePosition())
					},
					err: null
				} : this.error(23, A(o, this.clonePosition()))) : this.error(26, A(e, this.clonePosition()));
			}
			return this.error(27, A(n, this.clonePosition()));
		}
		return this.error(23, A(n, this.clonePosition()));
	}
	parseTagName() {
		let e = this.offset();
		for (this.bump(); !this.isEOF() && ze(this.char());) this.bump();
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
				type: 0,
				value: r,
				location: i
			},
			err: null
		};
	}
	tryParseLeftAngleBracket() {
		return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !Re(this.peek() || 0)) ? (this.bump(), "<") : null;
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
			if (e === 39) {
				if (this.peek() === 39) t.push(39), this.bump();
				else {
					this.bump();
					break;
				}
			} else t.push(e);
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
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(1, A(n, this.clonePosition()));
		if (this.char() === 125) return this.bump(), this.error(2, A(n, this.clonePosition()));
		let r = this.parseIdentifierIfPossible().value;
		if (!r) return this.error(3, A(n, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(1, A(n, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: 1,
					value: r,
					location: A(n, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(1, A(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
			default: return this.error(3, A(n, this.clonePosition()));
		}
	}
	parseIdentifierIfPossible() {
		let e = this.clonePosition(), t = this.offset(), n = Fe(this.message, t), r = t + n.length;
		return this.bumpTo(r), {
			value: n,
			location: A(e, this.clonePosition())
		};
	}
	parseArgumentOptions(e, t, n, r) {
		let i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
		switch (a) {
			case "": return this.error(4, A(i, o));
			case "number":
			case "date":
			case "time": {
				this.bumpSpace();
				let e = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					let t = this.clonePosition(), n = this.parseSimpleArgStyleIfPossible();
					if (n.err) return n;
					let r = Pe(n.val);
					if (r.length === 0) return this.error(6, A(this.clonePosition(), this.clonePosition()));
					e = {
						style: r,
						styleLocation: A(t, this.clonePosition())
					};
				}
				let t = this.tryParseArgumentClose(r);
				if (t.err) return t;
				let i = A(r, this.clonePosition());
				if (e && e.style.startsWith("::")) {
					let t = Ne(e.style.slice(2));
					if (a === "number") {
						let r = this.parseNumberSkeletonFromString(t, e.styleLocation);
						return r.err ? r : {
							val: {
								type: 2,
								value: n,
								location: i,
								style: r.val
							},
							err: null
						};
					}
					{
						if (t.length === 0) return this.error(10, i);
						let r = t;
						this.locale && (r = Ee(t, this.locale));
						let o = {
							type: 1,
							pattern: r,
							location: e.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? ce(r) : {}
						};
						return {
							val: {
								type: a === "date" ? 3 : 4,
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
						type: a === "number" ? 2 : a === "date" ? 3 : 4,
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
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(12, A(i, { ...i }));
				this.bumpSpace();
				let o = this.parseIdentifierIfPossible(), s = 0;
				if (a !== "select" && o.value === "offset") {
					if (!this.bumpIf(":")) return this.error(13, A(this.clonePosition(), this.clonePosition()));
					this.bumpSpace();
					let e = this.tryParseDecimalInteger(13, 14);
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
						type: 5,
						value: n,
						options: j(c.val),
						location: u
					},
					err: null
				} : {
					val: {
						type: 6,
						value: n,
						options: j(c.val),
						offset: s,
						pluralType: a === "plural" ? "cardinal" : "ordinal",
						location: u
					},
					err: null
				};
			}
			default: return this.error(5, A(i, o));
		}
	}
	tryParseArgumentClose(e) {
		return this.isEOF() || this.char() !== 125 ? this.error(1, A(e, this.clonePosition())) : (this.bump(), {
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
				if (!this.bumpUntil("'")) return this.error(11, A(e, this.clonePosition()));
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
			default: this.bump();
		}
		return {
			val: this.message.slice(t.offset, this.offset()),
			err: null
		};
	}
	parseNumberSkeletonFromString(e, t) {
		let n = [];
		try {
			n = ue(e);
		} catch {
			return this.error(7, t);
		}
		return {
			val: {
				type: 0,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? be(n) : {}
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
					let t = this.tryParseDecimalInteger(16, 19);
					if (t.err) return t;
					c = A(e, this.clonePosition()), s = this.message.slice(e.offset, this.offset());
				} else break;
			}
			if (o.has(s)) return this.error(t === "select" ? 21 : 20, c);
			s === "other" && (i = !0), this.bumpSpace();
			let r = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(t === "select" ? 17 : 18, A(this.clonePosition(), this.clonePosition()));
			let l = this.parseMessage(e + 1, t, n);
			if (l.err) return l;
			let u = this.tryParseArgumentClose(r);
			if (u.err) return u;
			a.push([s, {
				value: l.val,
				location: A(r, this.clonePosition())
			}]), o.add(s), this.bumpSpace(), {value: s, location: c} = this.parseIdentifierIfPossible();
		}
		return a.length === 0 ? this.error(t === "select" ? 15 : 16, A(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(22, A(this.clonePosition(), this.clonePosition())) : {
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
		for (; !this.isEOF() && Be(this.char());) this.bump();
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
function Re(e) {
	return N(e) || e === 47;
}
function ze(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Be(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function P(e) {
	e.forEach((e) => {
		if (delete e.location, C(e) || w(e)) for (let t in e.options) delete e.options[t].location, P(e.options[t].value);
		else we(e) && E(e.style) || (x(e) || S(e)) && D(e.style) ? delete e.style.location : T(e) && P(e.children);
	});
}
function Ve(e, t = {}) {
	t = {
		shouldParseSkeletons: !0,
		requiresOtherClause: !0,
		...t
	};
	let n = new Le(e, t).parse();
	if (n.err) {
		let e = SyntaxError(xe[n.err.kind]);
		throw e.location = n.err.location, e.originalMessage = n.err.message, e;
	}
	return t?.captureLocation || P(n.val), n.val;
}
var F = function(e) {
	return e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API", e;
}({}), I = class extends Error {
	constructor(e, t, n) {
		super(e), this.code = t, this.originalMessage = n;
	}
	toString() {
		return `[formatjs Error: ${this.code}] ${this.message}`;
	}
}, L = class extends I {
	constructor(e, t, n, r) {
		super(`Invalid values for "${e}": "${t}". Options are "${Object.keys(n).join("\", \"")}"`, "INVALID_VALUE", r);
	}
}, He = class extends I {
	constructor(e, t, n) {
		super(`Value for "${e}" must be of type ${t}`, "INVALID_VALUE", n);
	}
}, Ue = class extends I {
	constructor(e, t) {
		super(`The intl string context variable "${e}" was not provided to the string "${t}"`, "MISSING_VALUE", t);
	}
};
function We(e) {
	return e.length < 2 ? e : e.reduce((e, t) => {
		let n = e[e.length - 1];
		return !n || n.type !== 0 || t.type !== 0 ? e.push(t) : n.value += t.value, e;
	}, []);
}
function Ge(e) {
	return typeof e == "function";
}
function R(e, t, n, r, i, a, o) {
	if (e.length === 1 && b(e[0])) return [{
		type: 0,
		value: e[0].value
	}];
	let s = [];
	for (let c of e) {
		if (b(c)) {
			s.push({
				type: 0,
				value: c.value
			});
			continue;
		}
		if (Te(c)) {
			typeof a == "number" && s.push({
				type: 0,
				value: n.getNumberFormat(t).format(a)
			});
			continue;
		}
		let { value: e } = c;
		if (!(i && e in i)) throw new Ue(e, o);
		let l = i[e];
		if (Ce(c)) {
			(!l || typeof l == "string" || typeof l == "number" || typeof l == "bigint") && (l = typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? String(l) : ""), s.push({
				type: typeof l == "string" ? 0 : 1,
				value: l
			});
			continue;
		}
		if (x(c)) {
			let e = typeof c.style == "string" ? r.date[c.style] : D(c.style) ? c.style.parsedOptions : void 0;
			s.push({
				type: 0,
				value: n.getDateTimeFormat(t, e).format(l)
			});
			continue;
		}
		if (S(c)) {
			let e = typeof c.style == "string" ? r.time[c.style] : D(c.style) ? c.style.parsedOptions : r.time.medium;
			s.push({
				type: 0,
				value: n.getDateTimeFormat(t, e).format(l)
			});
			continue;
		}
		if (we(c)) {
			let e = typeof c.style == "string" ? r.number[c.style] : E(c.style) ? c.style.parsedOptions : void 0;
			if (e && e.scale) {
				let t = e.scale || 1;
				if (typeof l == "bigint") {
					if (!Number.isInteger(t)) throw TypeError(`Cannot apply fractional scale ${t} to bigint value. Scale must be an integer when formatting bigint.`);
					l *= BigInt(t);
				} else l *= t;
			}
			s.push({
				type: 0,
				value: n.getNumberFormat(t, e).format(l)
			});
			continue;
		}
		if (T(c)) {
			let { children: e, value: l } = c, u = i[l];
			if (!Ge(u)) throw new He(l, "function", o);
			let d = u(R(e, t, n, r, i, a).map((e) => e.value));
			Array.isArray(d) || (d = [d]), s.push(...d.map((e) => ({
				type: typeof e == "string" ? 0 : 1,
				value: e
			})));
		}
		if (C(c)) {
			let e = l, a = (Object.prototype.hasOwnProperty.call(c.options, e) ? c.options[e] : void 0) || c.options.other;
			if (!a) throw new L(c.value, l, Object.keys(c.options), o);
			s.push(...R(a.value, t, n, r, i));
			continue;
		}
		if (w(c)) {
			let e = `=${l}`, a = Object.prototype.hasOwnProperty.call(c.options, e) ? c.options[e] : void 0;
			if (!a) {
				if (!Intl.PluralRules) throw new I("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", "MISSING_INTL_API", o);
				let e = typeof l == "bigint" ? Number(l) : l, r = n.getPluralRules(t, { type: c.pluralType }).select(e - (c.offset || 0));
				a = (Object.prototype.hasOwnProperty.call(c.options, r) ? c.options[r] : void 0) || c.options.other;
			}
			if (!a) throw new L(c.value, l, Object.keys(c.options), o);
			let u = typeof l == "bigint" ? Number(l) : l;
			s.push(...R(a.value, t, n, r, i, u - (c.offset || 0)));
			continue;
		}
	}
	return We(s);
}
function Ke(e, t) {
	return t ? {
		...e,
		...t,
		...Object.keys(e).reduce((n, r) => (n[r] = {
			...e[r],
			...t[r]
		}, n), {})
	} : e;
}
function qe(e, t) {
	return t ? Object.keys(e).reduce((n, r) => (n[r] = Ke(e[r], t[r]), n), { ...e }) : e;
}
function z(e) {
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
function Je(e = {
	number: {},
	dateTime: {},
	pluralRules: {}
}) {
	return {
		getNumberFormat: h((...e) => new Intl.NumberFormat(...e), {
			cache: z(e.number),
			strategy: y.variadic
		}),
		getDateTimeFormat: h((...e) => new Intl.DateTimeFormat(...e), {
			cache: z(e.dateTime),
			strategy: y.variadic
		}),
		getPluralRules: h((...e) => new Intl.PluralRules(...e), {
			cache: z(e.pluralRules),
			strategy: y.variadic
		})
	};
}
var Ye = class e {
	constructor(t, n = e.defaultLocale, r, i) {
		if (this.formatterCache = {
			number: {},
			dateTime: {},
			pluralRules: {}
		}, this.format = (e) => {
			let t = this.formatToParts(e);
			if (t.length === 1) return t[0].value;
			let n = t.reduce((e, t) => (!e.length || t.type !== 0 || typeof e[e.length - 1] != "string" ? e.push(t.value) : e[e.length - 1] += t.value, e), []);
			return n.length <= 1 ? n[0] || "" : n;
		}, this.formatToParts = (e) => R(this.ast, this.locales, this.formatters, this.formats, e, void 0, this.message), this.resolvedOptions = () => ({ locale: this.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(this.locales)[0] }), this.getAst = () => this.ast, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
			if (this.message = t, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
			let { ...n } = i || {};
			this.ast = e.__parse(t, {
				...n,
				locale: this.resolvedLocale
			});
		} else this.ast = t;
		if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
		this.formats = qe(e.formats, r), this.formatters = i && i.formatters || Je(this.formatterCache);
	}
	static {
		this.memoizedDefaultLocale = null;
	}
	static get defaultLocale() {
		return e.memoizedDefaultLocale ||= new Intl.NumberFormat().resolvedOptions().locale, e.memoizedDefaultLocale;
	}
	static {
		this.resolveLocale = (e) => {
			if (Intl.Locale === void 0) return;
			let t = Intl.NumberFormat.supportedLocalesOf(e);
			return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
		};
	}
	static {
		this.__parse = Ve;
	}
	static {
		this.formats = {
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
	}
}, B = class e extends Error {
	constructor(t, n, r) {
		let i = r ? r instanceof Error ? r : Error(String(r)) : void 0;
		super(`[@formatjs/intl Error ${t}] ${n}
${i ? `\n${i.message}\n${i.stack}` : ""}`), this.code = t, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, e);
	}
}, Xe = class extends B {
	constructor(e, t) {
		super("UNSUPPORTED_FORMATTER", e, t);
	}
}, Ze = class extends B {
	constructor(e, t) {
		super("INVALID_CONFIG", e, t);
	}
}, Qe = class extends B {
	constructor(e, t) {
		super("MISSING_DATA", e, t);
	}
}, V = class extends B {
	constructor(e, t, n) {
		super("FORMAT_ERROR", `${e}
Locale: ${t}
`, n), this.locale = t;
	}
}, H = class extends V {
	constructor(e, t, n, r) {
		super(`${e}
MessageID: ${n?.id}
Default Message: ${n?.defaultMessage}
Description: ${n?.description}
`, t, r), this.descriptor = n, this.locale = t;
	}
}, $e = class extends B {
	constructor(e, t) {
		super("MISSING_TRANSLATION", `Missing message: "${e.id}" for locale "${t}", using ${e.defaultMessage ? `default message (${typeof e.defaultMessage == "string" ? e.defaultMessage : e.defaultMessage.map((e) => e.value ?? JSON.stringify(e)).join()})` : "id"} as fallback.`), this.descriptor = e;
	}
};
function et(e, t, n = Error) {
	if (!e) throw new n(t);
}
function U(e, t, n = {}) {
	return t.reduce((t, r) => (r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t), {});
}
var tt = {
	formats: {},
	messages: {},
	timeZone: void 0,
	defaultLocale: "en",
	defaultFormats: {},
	fallbackOnEmptyString: !0,
	onError: (e) => {},
	onWarn: (e) => {}
};
function nt() {
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
function W(e) {
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
function rt(e = nt()) {
	let t = Intl.RelativeTimeFormat, n = Intl.ListFormat, r = Intl.DisplayNames, i = h((...e) => new Intl.DateTimeFormat(...e), {
		cache: W(e.dateTime),
		strategy: y.variadic
	}), a = h((...e) => new Intl.NumberFormat(...e), {
		cache: W(e.number),
		strategy: y.variadic
	}), o = h((...e) => new Intl.PluralRules(...e), {
		cache: W(e.pluralRules),
		strategy: y.variadic
	});
	return {
		getDateTimeFormat: i,
		getNumberFormat: a,
		getMessageFormat: h((e, t, n, r) => new Ye(e, t, n, {
			formatters: {
				getNumberFormat: a,
				getDateTimeFormat: i,
				getPluralRules: o
			},
			...r
		}), {
			cache: W(e.message),
			strategy: y.variadic
		}),
		getRelativeTimeFormat: h((...e) => new t(...e), {
			cache: W(e.relativeTime),
			strategy: y.variadic
		}),
		getPluralRules: o,
		getListFormat: h((...e) => new n(...e), {
			cache: W(e.list),
			strategy: y.variadic
		}),
		getDisplayNames: h((...e) => new r(...e), {
			cache: W(e.displayNames),
			strategy: y.variadic
		})
	};
}
function G(e, t, n, r) {
	let i = e && e[t], a;
	if (i && (a = i[n]), a) return a;
	r(new Xe(`No ${t} format named: ${n}`));
}
function K(e, t) {
	return Object.keys(e).reduce((n, r) => (n[r] = {
		timeZone: t,
		...e[r]
	}, n), {});
}
function it(e, t) {
	return Object.keys({
		...e,
		...t
	}).reduce((n, r) => (n[r] = {
		...e[r],
		...t[r]
	}, n), {});
}
function at(e, t) {
	if (!t) return e;
	let n = Ye.formats;
	return {
		...n,
		...e,
		date: it(K(n.date, t), K(e.date || {}, t)),
		time: it(K(n.time, t), K(e.time || {}, t))
	};
}
function ot(e) {
	let { defaultMessage: t } = e;
	try {
		return t === void 0 ? `\nMessage Descriptor: ${JSON.stringify(e)}` : `\nDefault Message: ${typeof t == "string" ? t : JSON.stringify(t)}`;
	} catch {
		return "";
	}
}
var q = ({ locale: e, formats: t, messages: n, defaultLocale: r, defaultFormats: i, fallbackOnEmptyString: a, onError: o, timeZone: s, defaultRichTextElements: c }, l, u = { id: "" }, d, f) => {
	let { id: p, defaultMessage: m } = u;
	p || et(!1, `[@formatjs/intl] An \`id\` must be provided to format a message. You can either:
1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)
or [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR
2. Configure your \`eslint\` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)
to autofix this issue${ot(u)}`);
	let h = String(p), g = n && Object.prototype.hasOwnProperty.call(n, h) && n[h];
	if (Array.isArray(g) && g.length === 1 && g[0].type === Se.literal) return g[0].value;
	if (d = {
		...c,
		...d
	}, t = at(t, s), i = at(i, s), !g) {
		if (a === !1 && g === "") return g;
		if ((!m || e && e.toLowerCase() !== r.toLowerCase()) && o(new $e(u, e)), m) try {
			return l.getMessageFormat(m, r, i, f).format(d);
		} catch (t) {
			return o(new H(`Error formatting default message for: "${h}", rendering default message verbatim`, e, u, t)), typeof m == "string" ? m : h;
		}
		return h;
	}
	try {
		return l.getMessageFormat(g, e, t, {
			formatters: l,
			...f
		}).format(d);
	} catch (t) {
		o(new H(`Error formatting message: "${h}", using ${m ? "default message" : "id"} as fallback.`, e, u, t));
	}
	if (m) try {
		return l.getMessageFormat(m, r, i, f).format(d);
	} catch (t) {
		o(new H(`Error formatting the default message for: "${h}", rendering message verbatim`, e, u, t));
	}
	return typeof g == "string" ? g : typeof m == "string" ? m : h;
}, st = [
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
function J({ locale: e, formats: t, onError: n, timeZone: r }, i, a, o = {}) {
	let { format: s } = o, c = U(o, st, {
		...r && { timeZone: r },
		...s && G(t, i, s, n)
	});
	return i === "time" && !c.hour && !c.minute && !c.second && !c.timeStyle && !c.dateStyle && (c = {
		...c,
		hour: "numeric",
		minute: "numeric"
	}), a(e, c);
}
function ct(e, t, n, r = {}) {
	let i = typeof n == "string" ? new Date(n || 0) : n;
	try {
		return J(e, "date", t, r).format(i);
	} catch (t) {
		e.onError(new V("Error formatting date.", e.locale, t));
	}
	return String(i);
}
function lt(e, t, n, r = {}) {
	let i = typeof n == "string" ? new Date(n || 0) : n;
	try {
		return J(e, "time", t, r).format(i);
	} catch (t) {
		e.onError(new V("Error formatting time.", e.locale, t));
	}
	return String(i);
}
function ut(e, t, n, r, i = {}) {
	let a = typeof n == "string" ? new Date(n || 0) : n, o = typeof r == "string" ? new Date(r || 0) : r;
	try {
		return J(e, "dateTimeRange", t, i).formatRange(a, o);
	} catch (t) {
		e.onError(new V("Error formatting date time range.", e.locale, t));
	}
	return String(a);
}
function dt(e, t, n, r = {}) {
	let i = typeof n == "string" ? new Date(n || 0) : n;
	try {
		return J(e, "date", t, r).formatToParts(i);
	} catch (t) {
		e.onError(new V("Error formatting date.", e.locale, t));
	}
	return [];
}
function ft(e, t, n, r = {}) {
	let i = typeof n == "string" ? new Date(n || 0) : n;
	try {
		return J(e, "time", t, r).formatToParts(i);
	} catch (t) {
		e.onError(new V("Error formatting time.", e.locale, t));
	}
	return [];
}
var pt = [
	"style",
	"type",
	"fallback",
	"languageDisplay"
];
function mt({ locale: e, onError: t }, n, r, i) {
	Intl.DisplayNames || t(new I("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", F.MISSING_INTL_API));
	let a = U(i, pt);
	try {
		return n(e, a).of(r);
	} catch (n) {
		t(new V("Error formatting display name.", e, n));
	}
}
var ht = ["type", "style"], gt = Date.now();
function _t(e) {
	return `${gt}_${e}_${gt}`;
}
function vt(e, t, n, r = {}) {
	let i = yt(e, t, n, r).reduce((e, t) => {
		let n = t.value;
		return typeof n == "string" && typeof e[e.length - 1] == "string" ? e[e.length - 1] += n : e.push(n), e;
	}, []);
	return i.length === 1 ? i[0] : i.length === 0 ? "" : i;
}
function yt({ locale: e, onError: t }, n, r, i = {}) {
	Intl.ListFormat || t(new I("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", F.MISSING_INTL_API));
	let a = U(i, ht);
	try {
		let t = {}, i = Array.from(r).map((e, n) => {
			if (typeof e == "object" && e) {
				let r = _t(n);
				return t[r] = e, r;
			}
			return String(e);
		});
		return n(e, a).formatToParts(i).map((e) => e.type === "literal" ? e : {
			...e,
			value: t[e.value] || e.value
		});
	} catch (n) {
		t(new V("Error formatting list.", e, n));
	}
	return r;
}
var bt = ["type"];
function xt({ locale: e, onError: t }, n, r, i = {}) {
	Intl.PluralRules || t(new I("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", F.MISSING_INTL_API));
	let a = U(i, bt);
	try {
		return n(e, a).select(r);
	} catch (n) {
		t(new V("Error formatting plural.", e, n));
	}
	return "other";
}
var St = ["numeric", "style"];
function Ct({ locale: e, formats: t, onError: n }, r, i = {}) {
	let { format: a } = i;
	return r(e, U(i, St, !!a && G(t, "relative", a, n) || {}));
}
function wt(e, t, n, r, i = {}) {
	r ||= "second", Intl.RelativeTimeFormat || e.onError(new I("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", F.MISSING_INTL_API));
	try {
		return Ct(e, t, i).format(n, r);
	} catch (t) {
		e.onError(new V("Error formatting relative time.", e.locale, t));
	}
	return String(n);
}
var Tt = [
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
function Et({ locale: e, formats: t, onError: n }, r, i = {}) {
	let { format: a } = i;
	return r(e, U(i, Tt, a && G(t, "number", a, n) || {}));
}
function Dt(e, t, n, r = {}) {
	try {
		return Et(e, t, r).format(n);
	} catch (t) {
		e.onError(new V("Error formatting number.", e.locale, t));
	}
	return String(n);
}
function Ot(e, t, n, r = {}) {
	try {
		return Et(e, t, r).formatToParts(n);
	} catch (t) {
		e.onError(new V("Error formatting number.", e.locale, t));
	}
	return [];
}
function kt(e) {
	return typeof (e ? e[Object.keys(e)[0]] : void 0) == "string";
}
function At(e) {
	e.onWarn && e.defaultRichTextElements && kt(e.messages || {}) && e.onWarn("[@formatjs/intl] \"defaultRichTextElements\" was specified but \"message\" was not pre-compiled. \nPlease consider using \"@formatjs/cli\" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution");
}
function jt(e, t) {
	let n = rt(t), r = {
		...tt,
		...e
	}, { locale: i, defaultLocale: a, onError: o } = r;
	return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && o ? o(new Qe(`Missing locale data for locale: "${i}" in Intl.NumberFormat. Using default locale: "${a}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`)) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && o && o(new Qe(`Missing locale data for locale: "${i}" in Intl.DateTimeFormat. Using default locale: "${a}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`)) : (o && o(new Ze(`"locale" was not configured, using "${a}" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details`)), r.locale = r.defaultLocale || "en"), At(r), {
		...r,
		formatters: n,
		formatNumber: Dt.bind(null, r, n.getNumberFormat),
		formatNumberToParts: Ot.bind(null, r, n.getNumberFormat),
		formatRelativeTime: wt.bind(null, r, n.getRelativeTimeFormat),
		formatDate: ct.bind(null, r, n.getDateTimeFormat),
		formatDateToParts: dt.bind(null, r, n.getDateTimeFormat),
		formatTime: lt.bind(null, r, n.getDateTimeFormat),
		formatDateTimeRange: ut.bind(null, r, n.getDateTimeFormat),
		formatTimeToParts: ft.bind(null, r, n.getDateTimeFormat),
		formatPlural: xt.bind(null, r, n.getPluralRules),
		formatMessage: q.bind(null, r, n),
		$t: q.bind(null, r, n),
		formatList: vt.bind(null, r, n.getListFormat),
		formatListToParts: yt.bind(null, r, n.getListFormat),
		formatDisplayName: mt.bind(null, r, n.getDisplayNames)
	};
}
function Mt(e, t, n = Error) {
	if (!e) throw new n(t);
}
function Nt(e) {
	Mt(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var Pt = {
	...tt,
	textComponent: e.Fragment
}, Ft = (t) => e.Children.toArray(t).map((t, n) => e.isValidElement(t) ? i(e.Fragment, { children: t }, n) : t);
function It(e) {
	return function(t) {
		return e(Ft(t));
	};
}
function Y(e, t) {
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
var Lt = e.createContext(null), Rt = Lt.Provider;
function X() {
	let t = e.useContext(Lt);
	return Nt(t), t;
}
var zt = function(e) {
	return e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName", e;
}(zt || {}), Bt = function(e) {
	return e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts", e;
}(Bt || {});
function Vt(e) {
	let t = (t) => {
		let n = X(), { value: r, children: i, ...a } = t, o = typeof r == "string" ? new Date(r || 0) : r;
		return i(e === "formatDate" ? n.formatDateToParts(o, a) : n.formatTimeToParts(o, a));
	};
	return t.displayName = Bt[e], t;
}
function Z(t) {
	let n = (n) => {
		let r = X(), { value: a, children: o, ...s } = n, c = r[t](a, s);
		if (typeof o == "function") return o(c);
		let l = r.textComponent || e.Fragment;
		return i(l, { children: c });
	};
	return n.displayName = zt[t], n;
}
function Q(e) {
	return e && Object.keys(e).reduce((t, n) => {
		let r = e[n];
		return t[n] = Ge(r) ? It(r) : r, t;
	}, {});
}
var Ht = (e, t, n, r, ...i) => {
	let a = q(e, t, n, Q(r), ...i);
	return Array.isArray(a) ? Ft(a) : a;
}, Ut = ({ defaultRichTextElements: e, ...t }, n) => {
	let r = Q(e), i = jt({
		...Pt,
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
		formatMessage: Ht.bind(null, a, i.formatters),
		$t: Ht.bind(null, a, i.formatters)
	};
};
function Wt(e, t) {
	let { values: n, ...r } = e, { values: i, ...a } = t;
	return Y(i, n) && Y(r, a);
}
function Gt(t) {
	let { formatMessage: n, textComponent: a = e.Fragment } = X(), { id: o, description: s, defaultMessage: c, values: l, children: u, tagName: d = a, ignoreTag: f } = t, p = n({
		id: o,
		description: s,
		defaultMessage: c
	}, l, { ignoreTag: f });
	return typeof u == "function" ? u(Array.isArray(p) ? p : [p]) : i(d || r, { children: p });
}
Gt.displayName = "FormattedMessage";
var Kt = e.memo(Gt, Wt);
Kt.displayName = "MemoizedFormattedMessage";
function qt(e) {
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
function Jt(t) {
	let n = e.useRef(nt()), r = e.useRef(void 0), a = e.useRef(void 0), o = {};
	for (let e in t) t[e] !== void 0 && (o[e] = t[e]);
	let s = qt({
		...Pt,
		...o
	});
	return (!r.current || !Y(r.current, s)) && (r.current = s, a.current = Ut(s, n.current)), Nt(a.current), i(Rt, {
		value: a.current,
		children: t.children
	});
}
Jt.displayName = "IntlProvider";
var Yt = Jt;
Z("formatDate"), Z("formatTime"), Z("formatNumber"), Z("formatList"), Z("formatDisplayName"), Vt("formatDate"), Vt("formatTime");
var Xt = () => (X().locale, null);
function Zt() {
	return i(Yt, {
		locale: "en",
		defaultLocale: "en",
		messages: {},
		children: i(Xt, {})
	});
}
var $ = {
	de: a,
	en: o,
	es: s,
	fr: c,
	it: l,
	ja: u,
	ko: d,
	pt: f,
	ru: p,
	zh: m
};
function Qt(e) {
	return $[e] ?? $.en;
}
var $t = Qt("en");
function en({ children: e }) {
	let r = n($t);
	return i(t.Suspense, {
		fallback: null,
		children: i(Yt, {
			messages: r,
			locale: "en",
			defaultLocale: "en",
			children: e
		})
	});
}
function tn() {
	return i(en, { children: i(Zt, {}) });
}
export { tn as default };
