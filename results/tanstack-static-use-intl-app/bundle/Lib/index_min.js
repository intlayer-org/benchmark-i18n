import e, { cloneElement as t, createContext as n, isValidElement as r, use as i, useContext as a, useMemo as o } from "react";
import { jsx as s } from "react/jsx-runtime";
import { jsxDEV as c } from "react/jsx-dev-runtime";
import l from "../src/messages/de.ts";
import u from "../src/messages/en.ts";
import d from "../src/messages/es.ts";
import f from "../src/messages/fr.ts";
import p from "../src/messages/it.ts";
import m from "../src/messages/ja.ts";
import h from "../src/messages/ko.ts";
import g from "../src/messages/pt.ts";
import ee from "../src/messages/ru.ts";
import te from "../src/messages/zh.ts";
function _(e, t) {
	let n = t && t.cache ? t.cache : ue, r = t && t.serializer ? t.serializer : ce;
	return (t && t.strategy ? t.strategy : ae)(e, {
		cache: n,
		serializer: r
	});
}
function ne(e) {
	return e == null || typeof e == "number" || typeof e == "boolean";
}
function re(e, t, n, r) {
	let i = ne(r) ? r : n(r), a = t.get(i);
	return a === void 0 && (a = e.call(this, r), t.set(i, a)), a;
}
function ie(e, t, n) {
	let r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
	return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
}
function v(e, t, n, r, i) {
	return n.bind(t, e, r, i);
}
function ae(e, t) {
	let n = e.length === 1 ? re : ie;
	return v(e, this, n, t.cache.create(), t.serializer);
}
function oe(e, t) {
	return v(e, this, ie, t.cache.create(), t.serializer);
}
function se(e, t) {
	return v(e, this, re, t.cache.create(), t.serializer);
}
var ce = function() {
	return JSON.stringify(arguments);
}, le = class {
	constructor() {
		this.cache = Object.create(null);
	}
	get(e) {
		return this.cache[e];
	}
	set(e, t) {
		this.cache[e] = t;
	}
}, ue = { create: function() {
	return new le();
} }, y = {
	variadic: oe,
	monadic: se
}, b = class extends Error {
	constructor(e, t) {
		let n = e;
		t && (n += ": " + t), super(n), this.code = e, t && (this.originalMessage = t);
	}
}, x = function(e) {
	return e.MISSING_MESSAGE = "MISSING_MESSAGE", e.MISSING_FORMAT = "MISSING_FORMAT", e.ENVIRONMENT_FALLBACK = "ENVIRONMENT_FALLBACK", e.INSUFFICIENT_PATH = "INSUFFICIENT_PATH", e.INVALID_MESSAGE = "INVALID_MESSAGE", e.INVALID_KEY = "INVALID_KEY", e.FORMATTING_ERROR = "FORMATTING_ERROR", e;
}(x || {});
function de() {
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
function fe(e) {
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
function pe(e, t) {
	return _(e, {
		cache: fe(t),
		strategy: y.variadic
	});
}
function S(e, t) {
	return pe((...t) => new e(...t), t);
}
function me(e) {
	return {
		getDateTimeFormat: S(Intl.DateTimeFormat, e.dateTime),
		getNumberFormat: S(Intl.NumberFormat, e.number),
		getPluralRules: S(Intl.PluralRules, e.pluralRules),
		getRelativeTimeFormat: S(Intl.RelativeTimeFormat, e.relativeTime),
		getListFormat: S(Intl.ListFormat, e.list),
		getDisplayNames: S(Intl.DisplayNames, e.displayNames)
	};
}
var he = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function ge(e) {
	let t = {};
	return e.replace(he, (e) => {
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
var _e = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function ve(e) {
	if (e.length === 0) throw Error("Number skeleton cannot be empty");
	let t = e.split(_e).filter((e) => e.length > 0), n = [];
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
function ye(e) {
	return e.replace(/^(.*?)-/, "");
}
var be = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, C = /^(@+)?(\+|#+)?[rs]?$/g, xe = /(\*)(0+)|(#+)(0+)|(0+)/g, w = /^(0+)$/;
function T(e) {
	let t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(C, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function E(e) {
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
function Se(e) {
	let t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		let n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !w.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function D(e) {
	return E(e) || {};
}
function Ce(e) {
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
				t.style = "unit", t.unit = ye(n.options[0]);
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
						...D(t)
					}), {})
				};
				continue;
			case "engineering":
				t = {
					...t,
					notation: "engineering",
					...n.options.reduce((e, t) => ({
						...e,
						...D(t)
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
				n.options[0].replace(xe, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else if (i && a) throw Error("We currently do not support maximum integer digits");
					else if (o) throw Error("We currently do not support exact integer digits");
					return "";
				});
				continue;
		}
		if (w.test(n.stem)) {
			t.minimumIntegerDigits = n.stem.length;
			continue;
		}
		if (be.test(n.stem)) {
			if (n.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			n.stem.replace(be, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			let e = n.options[0];
			e === "w" ? t = {
				...t,
				trailingZeroDisplay: "stripIfInteger"
			} : e && (t = {
				...t,
				...T(e)
			});
			continue;
		}
		if (C.test(n.stem)) {
			t = {
				...t,
				...T(n.stem)
			};
			continue;
		}
		let e = E(n.stem);
		e && (t = {
			...t,
			...e
		});
		let r = Se(n.stem);
		r && (t = {
			...t,
			...r
		});
	}
	return t;
}
var O = function(e) {
	return e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", e;
}({}), k = function(e) {
	return e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag", e;
}({}), A = function(e) {
	return e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime", e;
}({});
function j(e) {
	return e.type === k.literal;
}
function we(e) {
	return e.type === k.argument;
}
function M(e) {
	return e.type === k.number;
}
function N(e) {
	return e.type === k.date;
}
function P(e) {
	return e.type === k.time;
}
function F(e) {
	return e.type === k.select;
}
function I(e) {
	return e.type === k.plural;
}
function Te(e) {
	return e.type === k.pound;
}
function Ee(e) {
	return e.type === k.tag;
}
function De(e) {
	return !!(e && typeof e == "object" && e.type === A.number);
}
function L(e) {
	return !!(e && typeof e == "object" && e.type === A.dateTime);
}
var Oe = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, R = {
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
function ke(e, t) {
	let n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e.charAt(r);
		if (i === "j") {
			let a = 0;
			for (; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
			let o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), c = Ae(t);
			for ((c == "H" || c == "k") && (s = 0); s-- > 0;) n += "a";
			for (; o-- > 0;) n = c + n;
		} else n += i === "J" ? "H" : i;
	}
	return n;
}
function Ae(e) {
	let t = e.hourCycle;
	if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	let n = e.language, r;
	return n !== "root" && (r = e.maximize().region), (R[r || ""] || R[n || ""] || R[`${n}-001`] || R["001"])[0];
}
var je = RegExp(`^${Oe.source}*`), Me = RegExp(`${Oe.source}*$`);
function z(e, t) {
	return {
		start: e,
		end: t
	};
}
var Ne = !!Object.fromEntries, Pe = !!String.prototype.trimStart, Fe = !!String.prototype.trimEnd, B = Ne ? Object.fromEntries : function(e) {
	let t = {};
	for (let [n, r] of e) t[n] = r;
	return t;
}, Ie = Pe ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(je, "");
}, Le = Fe ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(Me, "");
}, Re = /* @__PURE__ */ RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
function ze(e, t) {
	return Re.lastIndex = t, Re.exec(e)[1] ?? "";
}
var Be = class {
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
					type: k.pound,
					location: z(e, this.clonePosition())
				});
			} else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
				if (n) break;
				return this.error(O.UNMATCHED_CLOSING_TAG, z(this.clonePosition(), this.clonePosition()));
			} else if (i === 60 && !this.ignoreTag && V(this.peek() || 0)) {
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
				type: k.literal,
				value: `<${r}/>`,
				location: z(n, this.clonePosition())
			},
			err: null
		};
		if (this.bumpIf(">")) {
			let i = this.parseMessage(e + 1, t, !0);
			if (i.err) return i;
			let a = i.val, o = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !V(this.char())) return this.error(O.INVALID_TAG, z(o, this.clonePosition()));
				let e = this.clonePosition();
				return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: k.tag,
						value: r,
						children: a,
						location: z(n, this.clonePosition())
					},
					err: null
				} : this.error(O.INVALID_TAG, z(o, this.clonePosition()))) : this.error(O.UNMATCHED_CLOSING_TAG, z(e, this.clonePosition()));
			}
			return this.error(O.UNCLOSED_TAG, z(n, this.clonePosition()));
		}
		return this.error(O.INVALID_TAG, z(n, this.clonePosition()));
	}
	parseTagName() {
		let e = this.offset();
		for (this.bump(); !this.isEOF() && He(this.char());) this.bump();
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
		let i = z(n, this.clonePosition());
		return {
			val: {
				type: k.literal,
				value: r,
				location: i
			},
			err: null
		};
	}
	tryParseLeftAngleBracket() {
		return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !Ve(this.peek() || 0)) ? (this.bump(), "<") : null;
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
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(O.EXPECT_ARGUMENT_CLOSING_BRACE, z(n, this.clonePosition()));
		if (this.char() === 125) return this.bump(), this.error(O.EMPTY_ARGUMENT, z(n, this.clonePosition()));
		let r = this.parseIdentifierIfPossible().value;
		if (!r) return this.error(O.MALFORMED_ARGUMENT, z(n, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(O.EXPECT_ARGUMENT_CLOSING_BRACE, z(n, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: k.argument,
					value: r,
					location: z(n, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(O.EXPECT_ARGUMENT_CLOSING_BRACE, z(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
			default: return this.error(O.MALFORMED_ARGUMENT, z(n, this.clonePosition()));
		}
	}
	parseIdentifierIfPossible() {
		let e = this.clonePosition(), t = this.offset(), n = ze(this.message, t), r = t + n.length;
		return this.bumpTo(r), {
			value: n,
			location: z(e, this.clonePosition())
		};
	}
	parseArgumentOptions(e, t, n, r) {
		let i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
		switch (a) {
			case "": return this.error(O.EXPECT_ARGUMENT_TYPE, z(i, o));
			case "number":
			case "date":
			case "time": {
				this.bumpSpace();
				let e = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					let t = this.clonePosition(), n = this.parseSimpleArgStyleIfPossible();
					if (n.err) return n;
					let r = Le(n.val);
					if (r.length === 0) return this.error(O.EXPECT_ARGUMENT_STYLE, z(this.clonePosition(), this.clonePosition()));
					e = {
						style: r,
						styleLocation: z(t, this.clonePosition())
					};
				}
				let t = this.tryParseArgumentClose(r);
				if (t.err) return t;
				let i = z(r, this.clonePosition());
				if (e && e.style.startsWith("::")) {
					let t = Ie(e.style.slice(2));
					if (a === "number") {
						let r = this.parseNumberSkeletonFromString(t, e.styleLocation);
						return r.err ? r : {
							val: {
								type: k.number,
								value: n,
								location: i,
								style: r.val
							},
							err: null
						};
					}
					{
						if (t.length === 0) return this.error(O.EXPECT_DATE_TIME_SKELETON, i);
						let r = t;
						this.locale && (r = ke(t, this.locale));
						let o = {
							type: A.dateTime,
							pattern: r,
							location: e.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? ge(r) : {}
						};
						return {
							val: {
								type: a === "date" ? k.date : k.time,
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
						type: a === "number" ? k.number : a === "date" ? k.date : k.time,
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
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(O.EXPECT_SELECT_ARGUMENT_OPTIONS, z(i, { ...i }));
				this.bumpSpace();
				let o = this.parseIdentifierIfPossible(), s = 0;
				if (a !== "select" && o.value === "offset") {
					if (!this.bumpIf(":")) return this.error(O.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, z(this.clonePosition(), this.clonePosition()));
					this.bumpSpace();
					let e = this.tryParseDecimalInteger(O.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, O.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
					if (e.err) return e;
					this.bumpSpace(), o = this.parseIdentifierIfPossible(), s = e.val;
				}
				let c = this.tryParsePluralOrSelectOptions(e, a, t, o);
				if (c.err) return c;
				let l = this.tryParseArgumentClose(r);
				if (l.err) return l;
				let u = z(r, this.clonePosition());
				return a === "select" ? {
					val: {
						type: k.select,
						value: n,
						options: B(c.val),
						location: u
					},
					err: null
				} : {
					val: {
						type: k.plural,
						value: n,
						options: B(c.val),
						offset: s,
						pluralType: a === "plural" ? "cardinal" : "ordinal",
						location: u
					},
					err: null
				};
			}
			default: return this.error(O.INVALID_ARGUMENT_TYPE, z(i, o));
		}
	}
	tryParseArgumentClose(e) {
		return this.isEOF() || this.char() !== 125 ? this.error(O.EXPECT_ARGUMENT_CLOSING_BRACE, z(e, this.clonePosition())) : (this.bump(), {
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
				if (!this.bumpUntil("'")) return this.error(O.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, z(e, this.clonePosition()));
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
			n = ve(e);
		} catch {
			return this.error(O.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: A.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? Ce(n) : {}
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
					let t = this.tryParseDecimalInteger(O.EXPECT_PLURAL_ARGUMENT_SELECTOR, O.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (t.err) return t;
					c = z(e, this.clonePosition()), s = this.message.slice(e.offset, this.offset());
				} else break;
			}
			if (o.has(s)) return this.error(t === "select" ? O.DUPLICATE_SELECT_ARGUMENT_SELECTOR : O.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
			s === "other" && (i = !0), this.bumpSpace();
			let r = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(t === "select" ? O.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : O.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, z(this.clonePosition(), this.clonePosition()));
			let l = this.parseMessage(e + 1, t, n);
			if (l.err) return l;
			let u = this.tryParseArgumentClose(r);
			if (u.err) return u;
			a.push([s, {
				value: l.val,
				location: z(r, this.clonePosition())
			}]), o.add(s), this.bumpSpace(), {value: s, location: c} = this.parseIdentifierIfPossible();
		}
		return a.length === 0 ? this.error(t === "select" ? O.EXPECT_SELECT_ARGUMENT_SELECTOR : O.EXPECT_PLURAL_ARGUMENT_SELECTOR, z(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(O.MISSING_OTHER_CLAUSE, z(this.clonePosition(), this.clonePosition())) : {
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
		let o = z(r, this.clonePosition());
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
		for (; !this.isEOF() && Ue(this.char());) this.bump();
	}
	peek() {
		if (this.isEOF()) return null;
		let e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}
};
function V(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Ve(e) {
	return V(e) || e === 47;
}
function He(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Ue(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function H(e) {
	e.forEach((e) => {
		if (delete e.location, F(e) || I(e)) for (let t in e.options) delete e.options[t].location, H(e.options[t].value);
		else M(e) && De(e.style) || (N(e) || P(e)) && L(e.style) ? delete e.style.location : Ee(e) && H(e.children);
	});
}
function We(e, t = {}) {
	t = {
		shouldParseSkeletons: !0,
		requiresOtherClause: !0,
		...t
	};
	let n = new Be(e, t).parse();
	if (n.err) {
		let e = SyntaxError(O[n.err.kind]);
		throw e.location = n.err.location, e.originalMessage = n.err.message, e;
	}
	return t?.captureLocation || H(n.val), n.val;
}
var U = function(e) {
	return e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API", e;
}({}), W = class extends Error {
	constructor(e, t, n) {
		super(e), this.code = t, this.originalMessage = n;
	}
	toString() {
		return `[formatjs Error: ${this.code}] ${this.message}`;
	}
}, Ge = class extends W {
	constructor(e, t, n, r) {
		super(`Invalid values for "${e}": "${t}". Options are "${Object.keys(n).join("\", \"")}"`, U.INVALID_VALUE, r);
	}
}, Ke = class extends W {
	constructor(e, t, n) {
		super(`Value for "${e}" must be of type ${t}`, U.INVALID_VALUE, n);
	}
}, qe = class extends W {
	constructor(e, t) {
		super(`The intl string context variable "${e}" was not provided to the string "${t}"`, U.MISSING_VALUE, t);
	}
}, G = function(e) {
	return e[e.literal = 0] = "literal", e[e.object = 1] = "object", e;
}({});
function Je(e) {
	return e.length < 2 ? e : e.reduce((e, t) => {
		let n = e[e.length - 1];
		return !n || n.type !== G.literal || t.type !== G.literal ? e.push(t) : n.value += t.value, e;
	}, []);
}
function Ye(e) {
	return typeof e == "function";
}
function K(e, t, n, r, i, a, o) {
	if (e.length === 1 && j(e[0])) return [{
		type: G.literal,
		value: e[0].value
	}];
	let s = [];
	for (let c of e) {
		if (j(c)) {
			s.push({
				type: G.literal,
				value: c.value
			});
			continue;
		}
		if (Te(c)) {
			typeof a == "number" && s.push({
				type: G.literal,
				value: n.getNumberFormat(t).format(a)
			});
			continue;
		}
		let { value: e } = c;
		if (!(i && e in i)) throw new qe(e, o);
		let l = i[e];
		if (we(c)) {
			(!l || typeof l == "string" || typeof l == "number" || typeof l == "bigint") && (l = typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? String(l) : ""), s.push({
				type: typeof l == "string" ? G.literal : G.object,
				value: l
			});
			continue;
		}
		if (N(c)) {
			let e = typeof c.style == "string" ? r.date[c.style] : L(c.style) ? c.style.parsedOptions : void 0;
			s.push({
				type: G.literal,
				value: n.getDateTimeFormat(t, e).format(l)
			});
			continue;
		}
		if (P(c)) {
			let e = typeof c.style == "string" ? r.time[c.style] : L(c.style) ? c.style.parsedOptions : r.time.medium;
			s.push({
				type: G.literal,
				value: n.getDateTimeFormat(t, e).format(l)
			});
			continue;
		}
		if (M(c)) {
			let e = typeof c.style == "string" ? r.number[c.style] : De(c.style) ? c.style.parsedOptions : void 0;
			if (e && e.scale) {
				let t = e.scale || 1;
				if (typeof l == "bigint") {
					if (!Number.isInteger(t)) throw TypeError(`Cannot apply fractional scale ${t} to bigint value. Scale must be an integer when formatting bigint.`);
					l *= BigInt(t);
				} else l *= t;
			}
			s.push({
				type: G.literal,
				value: n.getNumberFormat(t, e).format(l)
			});
			continue;
		}
		if (Ee(c)) {
			let { children: e, value: l } = c, u = i[l];
			if (!Ye(u)) throw new Ke(l, "function", o);
			let d = u(K(e, t, n, r, i, a).map((e) => e.value));
			Array.isArray(d) || (d = [d]), s.push(...d.map((e) => ({
				type: typeof e == "string" ? G.literal : G.object,
				value: e
			})));
		}
		if (F(c)) {
			let e = l, a = (Object.prototype.hasOwnProperty.call(c.options, e) ? c.options[e] : void 0) || c.options.other;
			if (!a) throw new Ge(c.value, l, Object.keys(c.options), o);
			s.push(...K(a.value, t, n, r, i));
			continue;
		}
		if (I(c)) {
			let e = `=${l}`, a = Object.prototype.hasOwnProperty.call(c.options, e) ? c.options[e] : void 0;
			if (!a) {
				if (!Intl.PluralRules) throw new W("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", U.MISSING_INTL_API, o);
				let e = typeof l == "bigint" ? Number(l) : l, r = n.getPluralRules(t, { type: c.pluralType }).select(e - (c.offset || 0));
				a = (Object.prototype.hasOwnProperty.call(c.options, r) ? c.options[r] : void 0) || c.options.other;
			}
			if (!a) throw new Ge(c.value, l, Object.keys(c.options), o);
			let u = typeof l == "bigint" ? Number(l) : l;
			s.push(...K(a.value, t, n, r, i, u - (c.offset || 0)));
			continue;
		}
	}
	return Je(s);
}
function Xe(e, t) {
	return t ? {
		...e,
		...t,
		...Object.keys(e).reduce((n, r) => (n[r] = {
			...e[r],
			...t[r]
		}, n), {})
	} : e;
}
function Ze(e, t) {
	return t ? Object.keys(e).reduce((n, r) => (n[r] = Xe(e[r], t[r]), n), { ...e }) : e;
}
function q(e) {
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
function Qe(e = {
	number: {},
	dateTime: {},
	pluralRules: {}
}) {
	return {
		getNumberFormat: _((...e) => new Intl.NumberFormat(...e), {
			cache: q(e.number),
			strategy: y.variadic
		}),
		getDateTimeFormat: _((...e) => new Intl.DateTimeFormat(...e), {
			cache: q(e.dateTime),
			strategy: y.variadic
		}),
		getPluralRules: _((...e) => new Intl.PluralRules(...e), {
			cache: q(e.pluralRules),
			strategy: y.variadic
		})
	};
}
var J = class e {
	constructor(t, n = e.defaultLocale, r, i) {
		if (this.formatterCache = {
			number: {},
			dateTime: {},
			pluralRules: {}
		}, this.format = (e) => {
			let t = this.formatToParts(e);
			if (t.length === 1) return t[0].value;
			let n = t.reduce((e, t) => (!e.length || t.type !== G.literal || typeof e[e.length - 1] != "string" ? e.push(t.value) : e[e.length - 1] += t.value, e), []);
			return n.length <= 1 ? n[0] || "" : n;
		}, this.formatToParts = (e) => K(this.ast, this.locales, this.formatters, this.formats, e, void 0, this.message), this.resolvedOptions = () => ({ locale: this.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(this.locales)[0] }), this.getAst = () => this.ast, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
			if (this.message = t, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
			let { ...n } = i || {};
			this.ast = e.__parse(t, {
				...n,
				locale: this.resolvedLocale
			});
		} else this.ast = t;
		if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
		this.formats = Ze(e.formats, r), this.formatters = i && i.formatters || Qe(this.formatterCache);
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
		this.__parse = We;
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
};
function $e(e, t, n) {
	let r = J.formats.date, i = J.formats.time, a = {
		...e?.dateTime,
		...t?.dateTime
	}, o = {
		date: {
			...r,
			...a
		},
		time: {
			...i,
			...a
		},
		number: {
			...e?.number,
			...t?.number
		}
	};
	return n && ["date", "time"].forEach((e) => {
		let t = o[e];
		for (let [e, r] of Object.entries(t)) t[e] = {
			timeZone: n,
			...r
		};
	}), o;
}
function et(e, t) {
	return pe((...e) => new J(e[0], e[1], e[2], {
		formatters: t,
		...e[3]
	}), e.message);
}
function tt(e, t) {
	return t || /'[{}<#|']/.test(e) || /<|{/.test(e) ? void 0 : e;
}
function Y(...[e, t, n, i]) {
	if (Array.isArray(t)) throw new b(x.INVALID_MESSAGE, `Message at \`${e}\` resolved to an array, but only strings are supported. See https://next-intl.dev/docs/usage/translations#arrays-of-messages`);
	if (typeof t == "object") throw new b(x.INSUFFICIENT_PATH, `Message at \`${e}\` resolved to \`${typeof t}\`, but only strings are supported. Use a \`.\` to retrieve nested messages. See https://next-intl.dev/docs/usage/translations#structuring-messages`);
	if (typeof t == "string") {
		let e = tt(t, n);
		if (e) return e;
	}
	let { cache: a, formats: o, formatters: s, globalFormats: c, locale: l, timeZone: u } = i;
	s.getMessageFormat ||= et(a, s);
	let d;
	try {
		d = s.getMessageFormat(t, l, $e(c, o, u), { formatters: {
			...s,
			getDateTimeFormat(e, t) {
				return s.getDateTimeFormat(e, {
					...t,
					timeZone: t?.timeZone ?? u
				});
			}
		} });
	} catch (e) {
		throw new b(x.INVALID_MESSAGE, `${e.message} (${e.originalMessage})`);
	}
	let f = d.format(n);
	return r(f) || Array.isArray(f) || typeof f == "string" ? f : String(f);
}
Y.raw = !0;
function X(...e) {
	return e.filter(Boolean).join(".");
}
function nt(e) {
	return X(e.namespace, e.key);
}
function rt(e) {
	console.error(e);
}
function it(e) {
	let n = {};
	return Object.keys(e).forEach((i) => {
		let a = 0, o = e[i], s;
		s = typeof o == "function" ? (e) => {
			let n = o(e);
			return r(n) ? t(n, { key: i + a++ }) : n;
		} : o, n[i] = s;
	}), n;
}
function Z(e, t, n, r) {
	let i = X(r, n);
	if (!t) throw Error(`No messages available at \`${r}\`.`);
	let a = t;
	return n.split(".").forEach((t) => {
		let n = a[t];
		if (t == null || n == null) throw Error(`Could not resolve \`${i}\` in messages for locale \`${e}\`.`);
		a = n;
	}), a;
}
function at(e, t, n) {
	try {
		if (!t) throw Error("No messages were configured.");
		let r = n ? Z(e, t, n) : t;
		if (!r) throw Error(`No messages for namespace \`${n}\` found.`);
		return r;
	} catch (e) {
		return new b(x.MISSING_MESSAGE, e.message);
	}
}
function ot(e) {
	let t = at(e.locale, e.messages, e.namespace);
	return st({
		...e,
		messagesOrError: t
	});
}
function st({ cache: e, formats: t, formatters: n, getMessageFallback: r = nt, locale: i, messagesOrError: a, namespace: o, onError: s, timeZone: c }) {
	let l = a instanceof b;
	function u(e, t, n, i) {
		let a = new b(t, n);
		return s(a), i ?? r({
			error: a,
			key: e,
			namespace: o
		});
	}
	function d(d, f, p, m) {
		let h = m, g;
		if (l) {
			if (h) g = h;
			else return s(a), r({
				error: a,
				key: d,
				namespace: o
			});
		} else {
			let e = a;
			try {
				g = Z(i, e, d, o);
			} catch (e) {
				if (h) g = h;
				else return u(d, x.MISSING_MESSAGE, e.message, h);
			}
		}
		try {
			return Y(X(o, d), g, f && it(f), {
				cache: e,
				formatters: n,
				globalFormats: t,
				formats: p,
				locale: i,
				timeZone: c
			});
		} catch (e) {
			let t, n;
			return e instanceof b ? (t = e.code, n = e.originalMessage) : (t = x.FORMATTING_ERROR, n = e.message), u(d, t, n, h);
		}
	}
	function f(e, t, n, r) {
		let i = d(e, t, n, r);
		return typeof i == "string" ? i : u(e, x.INVALID_MESSAGE, `The message \`${e}\` in ${o ? `namespace \`${o}\`` : "messages"} didn't resolve to a string. If you want to format rich text, use \`t.rich\` instead.`);
	}
	return f.rich = d, f.markup = (e, t, n, i) => {
		let a = d(e, t, n, i);
		if (typeof a != "string") {
			let t = new b(x.FORMATTING_ERROR, "`t.markup` only accepts functions for formatting that receive and return strings.\n\nE.g. t.markup('markup', {b: (chunks) => `<b>${chunks}</b>`})");
			return s(t), r({
				error: t,
				key: e,
				namespace: o
			});
		}
		return a;
	}, f.raw = (e) => {
		if (!Y.raw) throw Error("`t.raw` is not supported when messages are precompiled.");
		if (l) return s(a), r({
			error: a,
			key: e,
			namespace: o
		});
		let t = a;
		try {
			return Z(i, t, e, o);
		} catch (t) {
			return u(e, x.MISSING_MESSAGE, t.message);
		}
	}, f.has = (e) => {
		if (l) return !1;
		try {
			return Z(i, a, e, o), !0;
		} catch {
			return !1;
		}
	}, f;
}
function ct(e, t) {
	return e === t ? void 0 : e.slice((t + ".").length);
}
var Q = 86400;
Q * 7, 365 / 12 * Q * 3, Q * 365;
function lt(e, t, n) {
	Object.entries(e).forEach(([e, r]) => {
		if (e.includes(".")) {
			let r = e;
			n && (r += ` (at ${n})`), t.push(r);
		}
		typeof r == "object" && r && lt(r, t, X(n, e));
	});
}
function ut(e, t) {
	let n = [];
	lt(e, n), n.length > 0 && t(new b(x.INVALID_KEY, `Namespace keys cannot contain the character "." as this is used to express nesting. Please remove it or replace it with another character.

Invalid ${n.length === 1 ? "key" : "keys"}: ${n.join(", ")}

If you're migrating from a flat structure, you can convert your messages as follows:

import {set} from "lodash";

const input = {
  "one.one": "1.1",
  "one.two": "1.2",
  "two.one.one": "2.1.1"
};

const output = Object.entries(input).reduce(
  (acc, [key, value]) => set(acc, key, value),
  {}
);













`));
}
function dt({ formats: e, getMessageFallback: t, messages: n, onError: r, ...i }) {
	let a = r || rt, o = t || nt;
	return n && ut(n, a), {
		...i,
		formats: e || void 0,
		messages: n || void 0,
		onError: a,
		getMessageFallback: o
	};
}
var $ = n(void 0);
function ft({ children: e, formats: t, getMessageFallback: n, locale: r, messages: i, now: c, onError: l, timeZone: u }) {
	let d = a($), f = o(() => d?.cache || de(), [r, d?.cache]), p = o(() => d?.formatters || me(f), [f, d?.formatters]), m = o(() => ({
		...dt({
			locale: r,
			formats: t === void 0 ? d?.formats : t,
			getMessageFallback: n || d?.getMessageFallback,
			messages: i === void 0 ? d?.messages : i,
			now: c || d?.now,
			onError: l || d?.onError,
			timeZone: u || d?.timeZone
		}),
		formatters: p,
		cache: f
	}), [
		f,
		t,
		p,
		n,
		r,
		i,
		c,
		l,
		d,
		u
	]);
	return s($.Provider, {
		value: m,
		children: e
	});
}
function pt() {
	let e = a($);
	if (!e) throw Error("No intl context found. Have you configured the provider? See https://next-intl.dev/docs/usage/configuration#server-client-components");
	return e;
}
var mt = !1, ht = typeof window > "u";
function gt(e, t, n) {
	let { cache: r, formats: i, formatters: a, getMessageFallback: s, locale: c, onError: l, timeZone: u } = pt(), d = e[n], f = ct(t, n);
	return !u && !mt && ht && (mt = !0, l(new b(x.ENVIRONMENT_FALLBACK, "There is no `timeZone` configured, this can lead to markup mismatches caused by environment differences. Consider adding a global default: https://next-intl.dev/docs/configuration#time-zone"))), o(() => ot({
		cache: r,
		formatters: a,
		getMessageFallback: s,
		messages: d,
		namespace: f,
		onError: l,
		formats: i,
		locale: c,
		timeZone: u
	}), [
		r,
		a,
		s,
		d,
		f,
		l,
		i,
		c,
		u
	]);
}
function _t(e) {
	let t = pt().messages;
	return gt({ "!": t }, e ? `!.${e}` : "!", "!");
}
var vt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/use-intl-app/scripts/EmptyComponent.tsx", yt = () => (_t(), null);
function bt() {
	return c(ft, {
		locale: "en",
		messages: {},
		timeZone: "UTC",
		children: c(yt, {}, void 0, !1, {
			fileName: vt,
			lineNumber: 13,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: vt,
		lineNumber: 12,
		columnNumber: 5
	}, this);
}
var xt = {
	de: l,
	en: u,
	es: d,
	fr: f,
	it: p,
	ja: m,
	ko: h,
	pt: g,
	ru: ee,
	zh: te
};
function St(e) {
	return xt[e] ?? xt.en;
}
var Ct = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/use-intl-app/scripts/Wrapper.tsx", wt = St("en");
function Tt({ children: t }) {
	let n = i(wt);
	return c(e.Suspense, {
		fallback: null,
		children: c(ft, {
			messages: n,
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: Ct,
			lineNumber: 12,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Ct,
		lineNumber: 11,
		columnNumber: 5
	}, this);
}
var Et = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/use-intl-app/scripts/EmptyComponent.wrapper.tsx";
function Dt() {
	return c(Tt, { children: c(bt, {}, void 0, !1, {
		fileName: Et,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Et,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Dt as default };
