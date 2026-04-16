import { Profiler as e, cloneElement as t, createContext as n, isValidElement as r, useContext as i, useEffect as a, useLayoutEffect as o, useMemo as s, useState as c } from "react";
import { useParams as l, usePathname as u, useRouter as d } from "next/navigation";
import f from "next/link";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
import { ChevronDown as h } from "lucide-react";
//#region components/Link.tsx
var ee = (e) => /^https?:\/\//.test(e ?? ""), g = ({ href: e, children: t, ...n }) => {
	let r = l().locale ?? "en", i = ee(e.toString());
	return p(f, {
		href: e && !i && !e.toString().startsWith(`/${r}`) ? `/${r}${e}` : e,
		...n,
		children: t
	});
};
//#endregion
//#region ../../../node_modules/.bun/@formatjs+fast-memoize@3.1.1/node_modules/@formatjs/fast-memoize/index.js
function _(e, t) {
	let n = t && t.cache ? t.cache : le, r = t && t.serializer ? t.serializer : se;
	return (t && t.strategy ? t.strategy : ie)(e, {
		cache: n,
		serializer: r
	});
}
function te(e) {
	return e == null || typeof e == "number" || typeof e == "boolean";
}
function ne(e, t, n, r) {
	let i = te(r) ? r : n(r), a = t.get(i);
	return a === void 0 && (a = e.call(this, r), t.set(i, a)), a;
}
function re(e, t, n) {
	let r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
	return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
}
function v(e, t, n, r, i) {
	return n.bind(t, e, r, i);
}
function ie(e, t) {
	let n = e.length === 1 ? ne : re;
	return v(e, this, n, t.cache.create(), t.serializer);
}
function ae(e, t) {
	return v(e, this, re, t.cache.create(), t.serializer);
}
function oe(e, t) {
	return v(e, this, ne, t.cache.create(), t.serializer);
}
var se = function() {
	return JSON.stringify(arguments);
}, ce = class {
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
}, le = { create: function() {
	return new ce();
} }, y = {
	variadic: ae,
	monadic: oe
}, b = class extends Error {
	constructor(e, t) {
		let n = e;
		t && (n += ": " + t), super(n), this.code = e, t && (this.originalMessage = t);
	}
}, x = function(e) {
	return e.MISSING_MESSAGE = "MISSING_MESSAGE", e.MISSING_FORMAT = "MISSING_FORMAT", e.ENVIRONMENT_FALLBACK = "ENVIRONMENT_FALLBACK", e.INSUFFICIENT_PATH = "INSUFFICIENT_PATH", e.INVALID_MESSAGE = "INVALID_MESSAGE", e.INVALID_KEY = "INVALID_KEY", e.FORMATTING_ERROR = "FORMATTING_ERROR", e;
}(x || {});
function ue() {
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
function de(e, t) {
	return _(e, {
		cache: (n = t, { create: () => ({
			get: (e) => n[e],
			set(e, t) {
				n[e] = t;
			}
		}) }),
		strategy: y.variadic
	});
	var n;
}
function S(e, t) {
	return de(((...t) => new e(...t)), t);
}
function fe(e) {
	return {
		getDateTimeFormat: S(Intl.DateTimeFormat, e.dateTime),
		getNumberFormat: S(Intl.NumberFormat, e.number),
		getPluralRules: S(Intl.PluralRules, e.pluralRules),
		getRelativeTimeFormat: S(Intl.RelativeTimeFormat, e.relativeTime),
		getListFormat: S(Intl.ListFormat, e.list),
		getDisplayNames: S(Intl.DisplayNames, e.displayNames)
	};
}
//#endregion
//#region ../../../node_modules/.bun/@formatjs+icu-skeleton-parser@2.1.3/node_modules/@formatjs/icu-skeleton-parser/date-time.js
var pe = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function me(e) {
	let t = {};
	return e.replace(pe, (e) => {
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
//#endregion
//#region ../../../node_modules/.bun/@formatjs+icu-skeleton-parser@2.1.3/node_modules/@formatjs/icu-skeleton-parser/regex.generated.js
var he = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
//#endregion
//#region ../../../node_modules/.bun/@formatjs+icu-skeleton-parser@2.1.3/node_modules/@formatjs/icu-skeleton-parser/number.js
function ge(e) {
	if (e.length === 0) throw Error("Number skeleton cannot be empty");
	let t = e.split(he).filter((e) => e.length > 0), n = [];
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
function _e(e) {
	return e.replace(/^(.*?)-/, "");
}
var ve = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, C = /^(@+)?(\+|#+)?[rs]?$/g, ye = /(\*)(0+)|(#+)(0+)|(0+)/g, w = /^(0+)$/;
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
function be(e) {
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
function xe(e) {
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
				t.style = "unit", t.unit = _e(n.options[0]);
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
				n.options[0].replace(ye, function(e, n, r, i, a, o) {
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
		if (ve.test(n.stem)) {
			if (n.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			n.stem.replace(ve, function(e, n, r, i, a, o) {
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
		let r = be(n.stem);
		r && (t = {
			...t,
			...r
		});
	}
	return t;
}
//#endregion
//#region ../../../node_modules/.bun/@formatjs+icu-messageformat-parser@3.5.3/node_modules/@formatjs/icu-messageformat-parser/types.js
var O = function(e) {
	return e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag", e;
}({}), k = function(e) {
	return e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime", e;
}({});
function A(e) {
	return e.type === O.literal;
}
function Se(e) {
	return e.type === O.argument;
}
function j(e) {
	return e.type === O.number;
}
function M(e) {
	return e.type === O.date;
}
function N(e) {
	return e.type === O.time;
}
function P(e) {
	return e.type === O.select;
}
function F(e) {
	return e.type === O.plural;
}
function Ce(e) {
	return e.type === O.pound;
}
function I(e) {
	return e.type === O.tag;
}
function we(e) {
	return !!(e && typeof e == "object" && e.type === k.number);
}
function L(e) {
	return !!(e && typeof e == "object" && e.type === k.dateTime);
}
//#endregion
//#region ../../../node_modules/.bun/@formatjs+icu-messageformat-parser@3.5.3/node_modules/@formatjs/icu-messageformat-parser/error.js
var R = function(e) {
	return e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", e;
}({}), Te = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, z = {
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
//#endregion
//#region ../../../node_modules/.bun/@formatjs+icu-messageformat-parser@3.5.3/node_modules/@formatjs/icu-messageformat-parser/date-time-pattern-generator.js
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
		} else i === "J" ? n += "H" : n += i;
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
	return n !== "root" && (r = e.maximize().region), (z[r || ""] || z[n || ""] || z[`${n}-001`] || z["001"])[0];
}
//#endregion
//#region ../../../node_modules/.bun/@formatjs+icu-messageformat-parser@3.5.3/node_modules/@formatjs/icu-messageformat-parser/parser.js
var Oe = RegExp(`^${Te.source}*`), ke = RegExp(`${Te.source}*$`);
function B(e, t) {
	return {
		start: e,
		end: t
	};
}
var Ae = !!Object.fromEntries, je = !!String.prototype.trimStart, Me = !!String.prototype.trimEnd, Ne = Ae ? Object.fromEntries : function(e) {
	let t = {};
	for (let [n, r] of e) t[n] = r;
	return t;
}, Pe = je ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(Oe, "");
}, Fe = Me ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(ke, "");
}, Ie = /* @__PURE__ */ RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
function Le(e, t) {
	return Ie.lastIndex = t, Ie.exec(e)[1] ?? "";
}
var Re = class {
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
					type: O.pound,
					location: B(e, this.clonePosition())
				});
			} else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
				if (n) break;
				return this.error(R.UNMATCHED_CLOSING_TAG, B(this.clonePosition(), this.clonePosition()));
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
				type: O.literal,
				value: `<${r}/>`,
				location: B(n, this.clonePosition())
			},
			err: null
		};
		if (this.bumpIf(">")) {
			let i = this.parseMessage(e + 1, t, !0);
			if (i.err) return i;
			let a = i.val, o = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !V(this.char())) return this.error(R.INVALID_TAG, B(o, this.clonePosition()));
				let e = this.clonePosition();
				return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: O.tag,
						value: r,
						children: a,
						location: B(n, this.clonePosition())
					},
					err: null
				} : this.error(R.INVALID_TAG, B(o, this.clonePosition()))) : this.error(R.UNMATCHED_CLOSING_TAG, B(e, this.clonePosition()));
			} else return this.error(R.UNCLOSED_TAG, B(n, this.clonePosition()));
		} else return this.error(R.INVALID_TAG, B(n, this.clonePosition()));
	}
	parseTagName() {
		let e = this.offset();
		for (this.bump(); !this.isEOF() && Be(this.char());) this.bump();
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
		let i = B(n, this.clonePosition());
		return {
			val: {
				type: O.literal,
				value: r,
				location: i
			},
			err: null
		};
	}
	tryParseLeftAngleBracket() {
		return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !ze(this.peek() || 0)) ? (this.bump(), "<") : null;
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
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(R.EXPECT_ARGUMENT_CLOSING_BRACE, B(n, this.clonePosition()));
		if (this.char() === 125) return this.bump(), this.error(R.EMPTY_ARGUMENT, B(n, this.clonePosition()));
		let r = this.parseIdentifierIfPossible().value;
		if (!r) return this.error(R.MALFORMED_ARGUMENT, B(n, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(R.EXPECT_ARGUMENT_CLOSING_BRACE, B(n, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: O.argument,
					value: r,
					location: B(n, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(R.EXPECT_ARGUMENT_CLOSING_BRACE, B(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
			default: return this.error(R.MALFORMED_ARGUMENT, B(n, this.clonePosition()));
		}
	}
	parseIdentifierIfPossible() {
		let e = this.clonePosition(), t = this.offset(), n = Le(this.message, t), r = t + n.length;
		return this.bumpTo(r), {
			value: n,
			location: B(e, this.clonePosition())
		};
	}
	parseArgumentOptions(e, t, n, r) {
		let i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
		switch (a) {
			case "": return this.error(R.EXPECT_ARGUMENT_TYPE, B(i, o));
			case "number":
			case "date":
			case "time": {
				this.bumpSpace();
				let e = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					let t = this.clonePosition(), n = this.parseSimpleArgStyleIfPossible();
					if (n.err) return n;
					let r = Fe(n.val);
					if (r.length === 0) return this.error(R.EXPECT_ARGUMENT_STYLE, B(this.clonePosition(), this.clonePosition()));
					e = {
						style: r,
						styleLocation: B(t, this.clonePosition())
					};
				}
				let t = this.tryParseArgumentClose(r);
				if (t.err) return t;
				let i = B(r, this.clonePosition());
				if (e && e.style.startsWith("::")) {
					let t = Pe(e.style.slice(2));
					if (a === "number") {
						let r = this.parseNumberSkeletonFromString(t, e.styleLocation);
						return r.err ? r : {
							val: {
								type: O.number,
								value: n,
								location: i,
								style: r.val
							},
							err: null
						};
					} else {
						if (t.length === 0) return this.error(R.EXPECT_DATE_TIME_SKELETON, i);
						let r = t;
						this.locale && (r = Ee(t, this.locale));
						let o = {
							type: k.dateTime,
							pattern: r,
							location: e.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? me(r) : {}
						};
						return {
							val: {
								type: a === "date" ? O.date : O.time,
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
						type: a === "number" ? O.number : a === "date" ? O.date : O.time,
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
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(R.EXPECT_SELECT_ARGUMENT_OPTIONS, B(i, { ...i }));
				this.bumpSpace();
				let o = this.parseIdentifierIfPossible(), s = 0;
				if (a !== "select" && o.value === "offset") {
					if (!this.bumpIf(":")) return this.error(R.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, B(this.clonePosition(), this.clonePosition()));
					this.bumpSpace();
					let e = this.tryParseDecimalInteger(R.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, R.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
					if (e.err) return e;
					this.bumpSpace(), o = this.parseIdentifierIfPossible(), s = e.val;
				}
				let c = this.tryParsePluralOrSelectOptions(e, a, t, o);
				if (c.err) return c;
				let l = this.tryParseArgumentClose(r);
				if (l.err) return l;
				let u = B(r, this.clonePosition());
				return a === "select" ? {
					val: {
						type: O.select,
						value: n,
						options: Ne(c.val),
						location: u
					},
					err: null
				} : {
					val: {
						type: O.plural,
						value: n,
						options: Ne(c.val),
						offset: s,
						pluralType: a === "plural" ? "cardinal" : "ordinal",
						location: u
					},
					err: null
				};
			}
			default: return this.error(R.INVALID_ARGUMENT_TYPE, B(i, o));
		}
	}
	tryParseArgumentClose(e) {
		return this.isEOF() || this.char() !== 125 ? this.error(R.EXPECT_ARGUMENT_CLOSING_BRACE, B(e, this.clonePosition())) : (this.bump(), {
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
				if (!this.bumpUntil("'")) return this.error(R.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, B(e, this.clonePosition()));
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
			n = ge(e);
		} catch {
			return this.error(R.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: k.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? xe(n) : {}
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
					let t = this.tryParseDecimalInteger(R.EXPECT_PLURAL_ARGUMENT_SELECTOR, R.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (t.err) return t;
					c = B(e, this.clonePosition()), s = this.message.slice(e.offset, this.offset());
				} else break;
			}
			if (o.has(s)) return this.error(t === "select" ? R.DUPLICATE_SELECT_ARGUMENT_SELECTOR : R.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
			s === "other" && (i = !0), this.bumpSpace();
			let r = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(t === "select" ? R.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : R.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, B(this.clonePosition(), this.clonePosition()));
			let l = this.parseMessage(e + 1, t, n);
			if (l.err) return l;
			let u = this.tryParseArgumentClose(r);
			if (u.err) return u;
			a.push([s, {
				value: l.val,
				location: B(r, this.clonePosition())
			}]), o.add(s), this.bumpSpace(), {value: s, location: c} = this.parseIdentifierIfPossible();
		}
		return a.length === 0 ? this.error(t === "select" ? R.EXPECT_SELECT_ARGUMENT_SELECTOR : R.EXPECT_PLURAL_ARGUMENT_SELECTOR, B(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(R.MISSING_OTHER_CLAUSE, B(this.clonePosition(), this.clonePosition())) : {
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
		let o = B(r, this.clonePosition());
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
		for (; !this.isEOF() && Ve(this.char());) this.bump();
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
function ze(e) {
	return V(e) || e === 47;
}
function Be(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Ve(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
//#endregion
//#region ../../../node_modules/.bun/@formatjs+icu-messageformat-parser@3.5.3/node_modules/@formatjs/icu-messageformat-parser/index.js
function H(e) {
	e.forEach((e) => {
		if (delete e.location, P(e) || F(e)) for (let t in e.options) delete e.options[t].location, H(e.options[t].value);
		else j(e) && we(e.style) || (M(e) || N(e)) && L(e.style) ? delete e.style.location : I(e) && H(e.children);
	});
}
function He(e, t = {}) {
	t = {
		shouldParseSkeletons: !0,
		requiresOtherClause: !0,
		...t
	};
	let n = new Re(e, t).parse();
	if (n.err) {
		let e = SyntaxError(R[n.err.kind]);
		throw e.location = n.err.location, e.originalMessage = n.err.message, e;
	}
	return t?.captureLocation || H(n.val), n.val;
}
//#endregion
//#region ../../../node_modules/.bun/intl-messageformat@11.2.0/node_modules/intl-messageformat/src/error.js
var U = function(e) {
	return e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API", e;
}({}), W = class extends Error {
	code;
	originalMessage;
	constructor(e, t, n) {
		super(e), this.code = t, this.originalMessage = n;
	}
	toString() {
		return `[formatjs Error: ${this.code}] ${this.message}`;
	}
}, Ue = class extends W {
	constructor(e, t, n, r) {
		super(`Invalid values for "${e}": "${t}". Options are "${Object.keys(n).join("\", \"")}"`, U.INVALID_VALUE, r);
	}
}, We = class extends W {
	constructor(e, t, n) {
		super(`Value for "${e}" must be of type ${t}`, U.INVALID_VALUE, n);
	}
}, Ge = class extends W {
	constructor(e, t) {
		super(`The intl string context variable "${e}" was not provided to the string "${t}"`, U.MISSING_VALUE, t);
	}
}, G = function(e) {
	return e[e.literal = 0] = "literal", e[e.object = 1] = "object", e;
}({});
function Ke(e) {
	return e.length < 2 ? e : e.reduce((e, t) => {
		let n = e[e.length - 1];
		return !n || n.type !== G.literal || t.type !== G.literal ? e.push(t) : n.value += t.value, e;
	}, []);
}
function qe(e) {
	return typeof e == "function";
}
function K(e, t, n, r, i, a, o) {
	if (e.length === 1 && A(e[0])) return [{
		type: G.literal,
		value: e[0].value
	}];
	let s = [];
	for (let c of e) {
		if (A(c)) {
			s.push({
				type: G.literal,
				value: c.value
			});
			continue;
		}
		if (Ce(c)) {
			typeof a == "number" && s.push({
				type: G.literal,
				value: n.getNumberFormat(t).format(a)
			});
			continue;
		}
		let { value: e } = c;
		if (!(i && e in i)) throw new Ge(e, o);
		let l = i[e];
		if (Se(c)) {
			(!l || typeof l == "string" || typeof l == "number" || typeof l == "bigint") && (l = typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? String(l) : ""), s.push({
				type: typeof l == "string" ? G.literal : G.object,
				value: l
			});
			continue;
		}
		if (M(c)) {
			let e = typeof c.style == "string" ? r.date[c.style] : L(c.style) ? c.style.parsedOptions : void 0;
			s.push({
				type: G.literal,
				value: n.getDateTimeFormat(t, e).format(l)
			});
			continue;
		}
		if (N(c)) {
			let e = typeof c.style == "string" ? r.time[c.style] : L(c.style) ? c.style.parsedOptions : r.time.medium;
			s.push({
				type: G.literal,
				value: n.getDateTimeFormat(t, e).format(l)
			});
			continue;
		}
		if (j(c)) {
			let e = typeof c.style == "string" ? r.number[c.style] : we(c.style) ? c.style.parsedOptions : void 0;
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
		if (I(c)) {
			let { children: e, value: l } = c, u = i[l];
			if (!qe(u)) throw new We(l, "function", o);
			let d = u(K(e, t, n, r, i, a).map((e) => e.value));
			Array.isArray(d) || (d = [d]), s.push(...d.map((e) => ({
				type: typeof e == "string" ? G.literal : G.object,
				value: e
			})));
		}
		if (P(c)) {
			let e = l, a = (Object.prototype.hasOwnProperty.call(c.options, e) ? c.options[e] : void 0) || c.options.other;
			if (!a) throw new Ue(c.value, l, Object.keys(c.options), o);
			s.push(...K(a.value, t, n, r, i));
			continue;
		}
		if (F(c)) {
			let e = `=${l}`, a = Object.prototype.hasOwnProperty.call(c.options, e) ? c.options[e] : void 0;
			if (!a) {
				if (!Intl.PluralRules) throw new W("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", U.MISSING_INTL_API, o);
				let e = typeof l == "bigint" ? Number(l) : l, r = n.getPluralRules(t, { type: c.pluralType }).select(e - (c.offset || 0));
				a = (Object.prototype.hasOwnProperty.call(c.options, r) ? c.options[r] : void 0) || c.options.other;
			}
			if (!a) throw new Ue(c.value, l, Object.keys(c.options), o);
			let u = typeof l == "bigint" ? Number(l) : l;
			s.push(...K(a.value, t, n, r, i, u - (c.offset || 0)));
			continue;
		}
	}
	return Ke(s);
}
//#endregion
//#region ../../../node_modules/.bun/intl-messageformat@11.2.0/node_modules/intl-messageformat/src/core.js
function Je(e, t) {
	return t ? {
		...e,
		...t,
		...Object.keys(e).reduce((n, r) => (n[r] = {
			...e[r],
			...t[r]
		}, n), {})
	} : e;
}
function Ye(e, t) {
	return t ? Object.keys(e).reduce((n, r) => (n[r] = Je(e[r], t[r]), n), { ...e }) : e;
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
function Xe(e = {
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
		this.formats = Ye(e.formats, r), this.formatters = i && i.formatters || Xe(this.formatterCache);
	}
	format = (e) => {
		let t = this.formatToParts(e);
		if (t.length === 1) return t[0].value;
		let n = t.reduce((e, t) => (!e.length || t.type !== G.literal || typeof e[e.length - 1] != "string" ? e.push(t.value) : e[e.length - 1] += t.value, e), []);
		return n.length <= 1 ? n[0] || "" : n;
	};
	formatToParts = (e) => K(this.ast, this.locales, this.formatters, this.formats, e, void 0, this.message);
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
	static __parse = He;
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
};
//#endregion
//#region ../../../node_modules/.bun/use-intl@4.9.1+b1ab299f0a400331/node_modules/use-intl/dist/esm/production/format-message/index.js
function Ze(...[e, t, n, i]) {
	if (Array.isArray(t)) throw new b(x.INVALID_MESSAGE, void 0);
	if (typeof t == "object") throw new b(x.INSUFFICIENT_PATH, void 0);
	if (typeof t == "string") {
		let e = function(e, t) {
			return t || /'[{}]/.test(e) ? void 0 : e;
		}(t, n);
		if (e) return e;
	}
	let { cache: a, formats: o, formatters: s, globalFormats: c, locale: l, timeZone: u } = i, d;
	s.getMessageFormat ||= function(e, t) {
		return de(((...e) => new J(e[0], e[1], e[2], {
			formatters: t,
			...e[3]
		})), e.message);
	}(a, s);
	try {
		d = s.getMessageFormat(t, l, function(e, t, n) {
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
			return n && ["date", "time"].forEach(((e) => {
				let t = o[e];
				for (let [e, r] of Object.entries(t)) t[e] = {
					timeZone: n,
					...r
				};
			})), o;
		}(c, o, u), { formatters: {
			...s,
			getDateTimeFormat: (e, t) => s.getDateTimeFormat(e, {
				...t,
				timeZone: t?.timeZone ?? u
			})
		} });
	} catch {
		throw new b(x.INVALID_MESSAGE, void 0);
	}
	let f = d.format(n);
	return r(f) || Array.isArray(f) || typeof f == "string" ? f : String(f);
}
Ze.raw = !0;
//#endregion
//#region ../../../node_modules/.bun/use-intl@4.9.1+b1ab299f0a400331/node_modules/use-intl/dist/esm/production/initializeConfig-Brh10fyG.js
function Y(...e) {
	return e.filter(Boolean).join(".");
}
function Qe(e) {
	return Y(e.namespace, e.key);
}
function $e(e) {
	console.error(e);
}
function X(e, t, n, r) {
	let i = Y(r, n);
	if (!t) throw Error(i);
	let a = t;
	return n.split(".").forEach(((t) => {
		let n = a[t];
		if (t == null || n == null) throw Error(i + ` (${e})`);
		a = n;
	})), a;
}
function et(e) {
	let n = function(e, t, n) {
		try {
			if (!t) throw Error(void 0);
			let r = n ? X(e, t, n) : t;
			if (!r) throw Error(n);
			return r;
		} catch (e) {
			return new b(x.MISSING_MESSAGE, e.message);
		}
	}(e.locale, e.messages, e.namespace);
	return function({ cache: e, formats: n, formatters: i, getMessageFallback: a = Qe, locale: o, messagesOrError: s, namespace: c, onError: l, timeZone: u }) {
		let d = s instanceof b;
		function f(e, t, n, r) {
			let i = new b(t, n);
			return l(i), r ?? a({
				error: i,
				key: e,
				namespace: c
			});
		}
		function p(p, m, h, ee) {
			let g = ee, _;
			if (d) {
				if (!g) return l(s), a({
					error: s,
					key: p,
					namespace: c
				});
				_ = g;
			} else {
				let e = s;
				try {
					_ = X(o, e, p, c);
				} catch (e) {
					if (!g) return f(p, x.MISSING_MESSAGE, e.message, g);
					_ = g;
				}
			}
			try {
				return Ze(Y(c, p), _, m && function(e) {
					let n = {};
					return Object.keys(e).forEach(((i) => {
						let a = 0, o = e[i], s;
						s = typeof o == "function" ? (e) => {
							let n = o(e);
							return r(n) ? t(n, { key: i + a++ }) : n;
						} : o, n[i] = s;
					})), n;
				}(m), {
					cache: e,
					formatters: i,
					globalFormats: n,
					formats: h,
					locale: o,
					timeZone: u
				});
			} catch (e) {
				let t, n;
				return e instanceof b ? (t = e.code, n = e.originalMessage) : (t = x.FORMATTING_ERROR, n = e.message), f(p, t, n, g);
			}
		}
		function m(e, t, n, r) {
			let i = p(e, t, n, r);
			return typeof i == "string" ? i : f(e, x.INVALID_MESSAGE, void 0);
		}
		return m.rich = p, m.markup = (e, t, n, r) => p(e, t, n, r), m.raw = (e) => {
			if (d) return l(s), a({
				error: s,
				key: e,
				namespace: c
			});
			let t = s;
			try {
				return X(o, t, e, c);
			} catch (t) {
				return f(e, x.MISSING_MESSAGE, t.message);
			}
		}, m.has = (e) => {
			if (d) return !1;
			try {
				return X(o, s, e, c), !0;
			} catch {
				return !1;
			}
		}, m;
	}({
		...e,
		messagesOrError: n
	});
}
function tt(e, t) {
	return e === t ? void 0 : e.slice((t + ".").length);
}
var nt = 86400;
7 * nt, 365 * nt;
function rt({ formats: e, getMessageFallback: t, messages: n, onError: r, ...i }) {
	return {
		...i,
		formats: e || void 0,
		messages: n || void 0,
		onError: r || $e,
		getMessageFallback: t || Qe
	};
}
//#endregion
//#region ../../../node_modules/.bun/use-intl@4.9.1+b1ab299f0a400331/node_modules/use-intl/dist/esm/production/react.js
var Z = n(void 0);
function it({ children: e, formats: t, getMessageFallback: n, locale: r, messages: a, now: o, onError: c, timeZone: l }) {
	let u = i(Z), d = s((() => u?.cache || ue()), [r, u?.cache]), f = s((() => u?.formatters || fe(d)), [d, u?.formatters]), m = s((() => ({
		...rt({
			locale: r,
			formats: t === void 0 ? u?.formats : t,
			getMessageFallback: n || u?.getMessageFallback,
			messages: a === void 0 ? u?.messages : a,
			now: o || u?.now,
			onError: c || u?.onError,
			timeZone: l || u?.timeZone
		}),
		formatters: f,
		cache: d
	})), [
		d,
		t,
		f,
		n,
		r,
		a,
		o,
		c,
		u,
		l
	]);
	return p(Z.Provider, {
		value: m,
		children: e
	});
}
function at() {
	let e = i(Z);
	if (!e) throw Error(void 0);
	return e;
}
var ot = !1, st = typeof window > "u";
function ct(e) {
	return function(e, t, n) {
		let { cache: r, formats: i, formatters: a, getMessageFallback: o, locale: c, onError: l, timeZone: u } = at(), d = e[n], f = tt(t, n);
		return u || ot || !st || (ot = !0, l(new b(x.ENVIRONMENT_FALLBACK, void 0))), s((() => et({
			cache: r,
			formatters: a,
			getMessageFallback: o,
			messages: d,
			namespace: f,
			onError: l,
			formats: i,
			locale: c,
			timeZone: u
		})), [
			r,
			a,
			o,
			d,
			f,
			l,
			i,
			c,
			u
		]);
	}({ "!": at().messages }, e ? `!.${e}` : "!", "!");
}
//#endregion
//#region ../../../node_modules/.bun/next-intl@4.9.1+77ae5f1145ea432b/node_modules/next-intl/dist/esm/production/react-client/index.js
function lt(e, t) {
	return (...e) => {
		try {
			return t(...e);
		} catch {
			throw Error(void 0);
		}
	};
}
var ut = lt(0, ct);
//#endregion
//#region ../../../node_modules/.bun/next-intl@4.9.1+77ae5f1145ea432b/node_modules/next-intl/dist/esm/production/shared/NextIntlClientProvider.js
function dt({ locale: e, ...t }) {
	if (!e) throw Error(void 0);
	return p(it, {
		locale: e,
		...t
	});
}
//#endregion
//#region components/ThemeToggle.tsx
function ft() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function Q(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function pt() {
	let e = ut(), [t, n] = c("auto");
	a(() => {
		let e = ft();
		n(e), Q(e);
	}, []), a(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => Q("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function r() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		n(e), Q(e), window.localStorage.setItem("theme", e);
	}
	let i = e(t === "auto" ? "theme-toggle.themeModeAutoSystemClick" : t === "light" ? "theme-toggle.themeModeLightClick" : "theme-toggle.themeModeDarkClick");
	return p("button", {
		type: "button",
		onClick: r,
		"aria-label": i,
		title: i,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e(t === "auto" ? "theme-toggle.themeAuto" : t === "dark" ? "theme-toggle.themeDark" : "theme-toggle.themeLight")
	});
}
//#endregion
//#region i18n/config.ts
var mt = [
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
];
function ht(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
//#endregion
//#region components/LocaleSwitcher.tsx
function gt() {
	let e = l().locale ?? "en", t = u(), n = d(), r = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return p("div", {
		className: "flex items-center gap-2",
		children: p("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: mt.map((e) => p("option", {
				value: e,
				children: ht(e)
			}, e))
		})
	});
}
//#endregion
//#region hooks/usePerformanceMeasure.ts
function _t(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), o(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
//#endregion
//#region components/Header.tsx
function vt() {
	let e = ut();
	_t("Header");
	let [t, n] = c(!1), r = l().locale ?? "en", i = u(), a = [
		{
			href: "/products",
			label: e("header.products")
		},
		{
			href: "/pricing",
			label: e("header.pricing")
		},
		{
			href: "/team",
			label: e("header.team")
		},
		{
			href: "/blog",
			label: e("header.blog")
		},
		{
			href: "/careers",
			label: e("header.careers")
		},
		{
			href: "/faq",
			label: e("header.faq")
		},
		{
			href: "/contact",
			label: e("footer.contact")
		},
		{
			href: "/settings",
			label: e("header.settings")
		}
	];
	return p("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: m("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [m("div", {
				className: "flex items-center gap-8",
				children: [p(g, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), m("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						p(g, {
							href: "/",
							className: `nav-link${((e) => i === e)(`/${r}`) ? " is-active" : ""}`,
							children: e("header.home")
						}),
						p(g, {
							href: "/about",
							className: `nav-link${((e) => i.startsWith(e))(`/${r}/about`) ? " is-active" : ""}`,
							children: e("footer.methodology")
						}),
						m("div", {
							className: "relative",
							children: [m("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: [e("header.mockPages"), p(h, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								})]
							}), t && p("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								children: p("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: a.map((e) => p(g, {
										href: e.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => n(!1),
										children: e.label
									}, e.href))
								})
							})]
						})
					]
				})]
			}), m("div", {
				className: "flex items-center gap-4",
				children: [
					m("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [p("span", {
							className: "sr-only",
							children: e("header.goToGithub")
						}), p("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: p("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					p(gt, {}),
					p(pt, {})
				]
			})]
		})
	});
}
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
function yt() {
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
function bt(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
//#endregion
//#region components/AppProviders.tsx
function xt({ children: t, locale: n, messages: r }) {
	return a(() => {
		document.documentElement.lang = n;
	}, [n]), a(() => {
		yt();
	}, []), p(e, {
		id: "AppRoot",
		onRender: bt,
		children: p(dt, {
			locale: n,
			messages: r,
			timeZone: "UTC",
			children: t
		})
	});
}
//#endregion
//#region i18n/getMessages.ts
var St = [
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
], Ct = {
	en: {
		about: () => import("./about-Cn0WchWc.js"),
		blog: () => import("./blog-CpNNKnT5.js"),
		careers: () => import("./careers-Ccu_aHEN.js"),
		contact: () => import("./contact-BMa5xScd.js"),
		faq: () => import("./faq-swrlaZdx.js"),
		home: () => import("./home-B70y1X9i.js"),
		pricing: () => import("./pricing-OrWvsOGs.js"),
		products: () => import("./products-mUZTVQE4.js"),
		route: () => import("./route-C6dwtBPg.js"),
		settings: () => import("./settings-a-YuwYiU.js"),
		shared: () => import("./shared-BpjFztzS.js"),
		team: () => import("./team-B8teXIrr.js")
	},
	fr: {
		about: () => import("../messages/fr/about.json"),
		blog: () => import("../messages/fr/blog.json"),
		careers: () => import("../messages/fr/careers.json"),
		contact: () => import("../messages/fr/contact.json"),
		faq: () => import("../messages/fr/faq.json"),
		home: () => import("../messages/fr/home.json"),
		pricing: () => import("../messages/fr/pricing.json"),
		products: () => import("../messages/fr/products.json"),
		route: () => import("../messages/fr/route.json"),
		settings: () => import("../messages/fr/settings.json"),
		shared: () => import("../messages/fr/shared.json"),
		team: () => import("../messages/fr/team.json")
	},
	es: {
		about: () => import("../messages/es/about.json"),
		blog: () => import("../messages/es/blog.json"),
		careers: () => import("../messages/es/careers.json"),
		contact: () => import("../messages/es/contact.json"),
		faq: () => import("../messages/es/faq.json"),
		home: () => import("../messages/es/home.json"),
		pricing: () => import("../messages/es/pricing.json"),
		products: () => import("../messages/es/products.json"),
		route: () => import("../messages/es/route.json"),
		settings: () => import("../messages/es/settings.json"),
		shared: () => import("../messages/es/shared.json"),
		team: () => import("../messages/es/team.json")
	},
	de: {
		about: () => import("../messages/de/about.json"),
		blog: () => import("../messages/de/blog.json"),
		careers: () => import("../messages/de/careers.json"),
		contact: () => import("../messages/de/contact.json"),
		faq: () => import("../messages/de/faq.json"),
		home: () => import("../messages/de/home.json"),
		pricing: () => import("../messages/de/pricing.json"),
		products: () => import("../messages/de/products.json"),
		route: () => import("../messages/de/route.json"),
		settings: () => import("../messages/de/settings.json"),
		shared: () => import("../messages/de/shared.json"),
		team: () => import("../messages/de/team.json")
	},
	it: {
		about: () => import("../messages/it/about.json"),
		blog: () => import("../messages/it/blog.json"),
		careers: () => import("../messages/it/careers.json"),
		contact: () => import("../messages/it/contact.json"),
		faq: () => import("../messages/it/faq.json"),
		home: () => import("../messages/it/home.json"),
		pricing: () => import("../messages/it/pricing.json"),
		products: () => import("../messages/it/products.json"),
		route: () => import("../messages/it/route.json"),
		settings: () => import("../messages/it/settings.json"),
		shared: () => import("../messages/it/shared.json"),
		team: () => import("../messages/it/team.json")
	},
	pt: {
		about: () => import("../messages/pt/about.json"),
		blog: () => import("../messages/pt/blog.json"),
		careers: () => import("../messages/pt/careers.json"),
		contact: () => import("../messages/pt/contact.json"),
		faq: () => import("../messages/pt/faq.json"),
		home: () => import("../messages/pt/home.json"),
		pricing: () => import("../messages/pt/pricing.json"),
		products: () => import("../messages/pt/products.json"),
		route: () => import("../messages/pt/route.json"),
		settings: () => import("../messages/pt/settings.json"),
		shared: () => import("../messages/pt/shared.json"),
		team: () => import("../messages/pt/team.json")
	},
	zh: {
		about: () => import("../messages/zh/about.json"),
		blog: () => import("../messages/zh/blog.json"),
		careers: () => import("../messages/zh/careers.json"),
		contact: () => import("../messages/zh/contact.json"),
		faq: () => import("../messages/zh/faq.json"),
		home: () => import("../messages/zh/home.json"),
		pricing: () => import("../messages/zh/pricing.json"),
		products: () => import("../messages/zh/products.json"),
		route: () => import("../messages/zh/route.json"),
		settings: () => import("../messages/zh/settings.json"),
		shared: () => import("../messages/zh/shared.json"),
		team: () => import("../messages/zh/team.json")
	},
	ja: {
		about: () => import("../messages/ja/about.json"),
		blog: () => import("../messages/ja/blog.json"),
		careers: () => import("../messages/ja/careers.json"),
		contact: () => import("../messages/ja/contact.json"),
		faq: () => import("../messages/ja/faq.json"),
		home: () => import("../messages/ja/home.json"),
		pricing: () => import("../messages/ja/pricing.json"),
		products: () => import("../messages/ja/products.json"),
		route: () => import("../messages/ja/route.json"),
		settings: () => import("../messages/ja/settings.json"),
		shared: () => import("../messages/ja/shared.json"),
		team: () => import("../messages/ja/team.json")
	},
	ko: {
		about: () => import("../messages/ko/about.json"),
		blog: () => import("../messages/ko/blog.json"),
		careers: () => import("../messages/ko/careers.json"),
		contact: () => import("../messages/ko/contact.json"),
		faq: () => import("../messages/ko/faq.json"),
		home: () => import("../messages/ko/home.json"),
		pricing: () => import("../messages/ko/pricing.json"),
		products: () => import("../messages/ko/products.json"),
		route: () => import("../messages/ko/route.json"),
		settings: () => import("../messages/ko/settings.json"),
		shared: () => import("../messages/ko/shared.json"),
		team: () => import("../messages/ko/team.json")
	},
	ru: {
		about: () => import("../messages/ru/about.json"),
		blog: () => import("../messages/ru/blog.json"),
		careers: () => import("../messages/ru/careers.json"),
		contact: () => import("../messages/ru/contact.json"),
		faq: () => import("../messages/ru/faq.json"),
		home: () => import("../messages/ru/home.json"),
		pricing: () => import("../messages/ru/pricing.json"),
		products: () => import("../messages/ru/products.json"),
		route: () => import("../messages/ru/route.json"),
		settings: () => import("../messages/ru/settings.json"),
		shared: () => import("../messages/ru/shared.json"),
		team: () => import("../messages/ru/team.json")
	}
};
async function wt(e, t) {
	return (await (Ct[e]?.[t] ?? Ct.en[t])()).default;
}
function Tt(e) {
	let t = {};
	for (let [n, r] of Object.entries(e)) {
		let e = n.split("."), i = t;
		for (let t = 0; t < e.length - 1; t++) {
			let n = e[t], r = i[n];
			(typeof r != "object" || !r || Array.isArray(r)) && (i[n] = {}), i = i[n];
		}
		i[e[e.length - 1]] = r;
	}
	return t;
}
function $(e, t) {
	let n = { ...e };
	for (let [e, r] of Object.entries(t)) {
		let t = n[e];
		typeof r == "object" && r && !Array.isArray(r) && typeof t == "object" && t && !Array.isArray(t) ? n[e] = $(t, r) : n[e] = r;
	}
	return n;
}
function Et(e) {
	return e.reduce((e, t) => $(e, t), {});
}
async function Dt(e, t) {
	let n = new Set(t);
	n.add("shared");
	let r = [];
	for (let t of n) {
		let n = await wt(e, t);
		r.push(Tt(n));
	}
	return Et(r);
}
async function Ot(e) {
	return Dt(e, St);
}
//#endregion
//#region scripts/Wrapper.tsx
var kt = "en";
async function At({ children: e }) {
	return p(xt, {
		locale: kt,
		messages: await Ot(kt),
		children: e
	});
}
//#endregion
//#region components/Header.wrapper.tsx
function jt() {
	return p(At, { children: p(vt, {}) });
}
//#endregion
export { jt as default };
//#region messages/en/about.json
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
//#endregion
export { e as default };
//#region messages/en/blog.json
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
//#endregion
export { e as default };
//#region messages/en/careers.json
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
	"careers-header.joinOurMissionToImprove": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.",
	"careers-benefits.twentyPercentTime": "20% time for OSS"
};
//#endregion
export { e as default };
//#region messages/en/contact.json
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
//#endregion
export { e as default };
//#region messages/en/faq.json
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
//#endregion
export { e as default };
//#region messages/en/home.json
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
//#endregion
export { e as default };
//#region messages/en/pricing.json
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
//#endregion
export { e as default };
//#region messages/en/products.json
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
	"products-header.toolsAndServicesToStreamline": "Tools and services to streamline your internationalization workflow.",
	"products-grid.free": "Free",
	"products-grid.price29mo": "$29/mo",
	"products-grid.price99oneTime": "$99 one-time",
	"products-grid.price19mo": "$19/mo",
	"products-grid.price49mo": "$49/mo"
};
//#endregion
export { e as default };
//#region messages/en/route.json
var e = {
	"route.oopsPageNotFound": "Oops! Page not found",
	"route.returnToHome": "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:"
};
//#endregion
export { e as default };
//#region messages/en/settings.json
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
//#endregion
export { e as default };
//#region messages/en/shared.json
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
//#endregion
export { e as default };
//#region messages/en/team.json
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
//#endregion
export { e as default };
