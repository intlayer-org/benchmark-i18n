import * as React$1 from "react";
import React, { use, useId } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import de from "../../../messages/de.json";
import es from "../../../messages/es.json";
import fr from "../../../messages/fr.json";
import it from "../../../messages/it.json";
import ja from "../../../messages/ja.json";
import ko from "../../../messages/ko.json";
import pt from "../../../messages/pt.json";
import ru from "../../../messages/ru.json";
import zh from "../../../messages/zh.json";
function memoize(fn, options) {
	const cache = options && options.cache ? options.cache : cacheDefault;
	const serializer = options && options.serializer ? options.serializer : serializerDefault;
	return (options && options.strategy ? options.strategy : strategyDefault)(fn, {
		cache,
		serializer
	});
}
function isPrimitive(value) {
	return value == null || typeof value === "number" || typeof value === "boolean";
}
function monadic(fn, cache, serializer, arg) {
	const cacheKey = isPrimitive(arg) ? arg : serializer(arg);
	let computedValue = cache.get(cacheKey);
	if (typeof computedValue === "undefined") {
		computedValue = fn.call(this, arg);
		cache.set(cacheKey, computedValue);
	}
	return computedValue;
}
function variadic(fn, cache, serializer) {
	const args = Array.prototype.slice.call(arguments, 3);
	const cacheKey = serializer(args);
	let computedValue = cache.get(cacheKey);
	if (typeof computedValue === "undefined") {
		computedValue = fn.apply(this, args);
		cache.set(cacheKey, computedValue);
	}
	return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
	return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
	const strategy = fn.length === 1 ? monadic : variadic;
	return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
	return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
	return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
var serializerDefault = function() {
	return JSON.stringify(arguments);
};
var ObjectWithoutPrototypeCache = class {
	cache;
	constructor() {
		this.cache = Object.create(null);
	}
	get(key) {
		return this.cache[key];
	}
	set(key, value) {
		this.cache[key] = value;
	}
};
var cacheDefault = { create: function create() {
	return new ObjectWithoutPrototypeCache();
} };
var strategies = {
	variadic: strategyVariadic,
	monadic: strategyMonadic
};
var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function parseDateTimeSkeleton(skeleton) {
	const result = {};
	skeleton.replace(DATE_TIME_REGEX, (match) => {
		const len = match.length;
		switch (match[0]) {
			case "G":
				result.era = len === 4 ? "long" : len === 5 ? "narrow" : "short";
				break;
			case "y":
				result.year = len === 2 ? "2-digit" : "numeric";
				break;
			case "Y":
			case "u":
			case "U":
			case "r": throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
			case "q":
			case "Q": throw new RangeError("`q/Q` (quarter) patterns are not supported");
			case "M":
			case "L":
				result.month = [
					"numeric",
					"2-digit",
					"short",
					"long",
					"narrow"
				][len - 1];
				break;
			case "w":
			case "W": throw new RangeError("`w/W` (week) patterns are not supported");
			case "d":
				result.day = ["numeric", "2-digit"][len - 1];
				break;
			case "D":
			case "F":
			case "g": throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
			case "E":
				result.weekday = len === 4 ? "long" : len === 5 ? "narrow" : "short";
				break;
			case "e":
				if (len < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
				result.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][len - 4];
				break;
			case "c":
				if (len < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
				result.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][len - 4];
				break;
			case "a":
				result.hour12 = true;
				break;
			case "b":
			case "B": throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
			case "h":
				result.hourCycle = "h12";
				result.hour = ["numeric", "2-digit"][len - 1];
				break;
			case "H":
				result.hourCycle = "h23";
				result.hour = ["numeric", "2-digit"][len - 1];
				break;
			case "K":
				result.hourCycle = "h11";
				result.hour = ["numeric", "2-digit"][len - 1];
				break;
			case "k":
				result.hourCycle = "h24";
				result.hour = ["numeric", "2-digit"][len - 1];
				break;
			case "j":
			case "J":
			case "C": throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
			case "m":
				result.minute = ["numeric", "2-digit"][len - 1];
				break;
			case "s":
				result.second = ["numeric", "2-digit"][len - 1];
				break;
			case "S":
			case "A": throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
			case "z":
				result.timeZoneName = len < 4 ? "short" : "long";
				break;
			case "Z":
			case "O":
			case "v":
			case "V":
			case "X":
			case "x": throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
		}
		return "";
	});
	return result;
}
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function parseNumberSkeletonFromString(skeleton) {
	if (skeleton.length === 0) throw new Error("Number skeleton cannot be empty");
	const stringTokens = skeleton.split(WHITE_SPACE_REGEX).filter((x) => x.length > 0);
	const tokens = [];
	for (const stringToken of stringTokens) {
		let stemAndOptions = stringToken.split("/");
		if (stemAndOptions.length === 0) throw new Error("Invalid number skeleton");
		const [stem, ...options] = stemAndOptions;
		for (const option of options) if (option.length === 0) throw new Error("Invalid number skeleton");
		tokens.push({
			stem,
			options
		});
	}
	return tokens;
}
function icuUnitToEcma(unit) {
	return unit.replace(/^(.*?)-/, "");
}
var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
function parseSignificantPrecision(str) {
	const result = {};
	if (str[str.length - 1] === "r") result.roundingPriority = "morePrecision";
	else if (str[str.length - 1] === "s") result.roundingPriority = "lessPrecision";
	str.replace(SIGNIFICANT_PRECISION_REGEX, function(_, g1, g2) {
		if (typeof g2 !== "string") {
			result.minimumSignificantDigits = g1.length;
			result.maximumSignificantDigits = g1.length;
		} else if (g2 === "+") result.minimumSignificantDigits = g1.length;
		else if (g1[0] === "#") result.maximumSignificantDigits = g1.length;
		else {
			result.minimumSignificantDigits = g1.length;
			result.maximumSignificantDigits = g1.length + (typeof g2 === "string" ? g2.length : 0);
		}
		return "";
	});
	return result;
}
function parseSign(str) {
	switch (str) {
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
function parseConciseScientificAndEngineeringStem(stem) {
	let result;
	if (stem[0] === "E" && stem[1] === "E") {
		result = { notation: "engineering" };
		stem = stem.slice(2);
	} else if (stem[0] === "E") {
		result = { notation: "scientific" };
		stem = stem.slice(1);
	}
	if (result) {
		const signDisplay = stem.slice(0, 2);
		if (signDisplay === "+!") {
			result.signDisplay = "always";
			stem = stem.slice(2);
		} else if (signDisplay === "+?") {
			result.signDisplay = "exceptZero";
			stem = stem.slice(2);
		}
		if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) throw new Error("Malformed concise eng/scientific notation");
		result.minimumIntegerDigits = stem.length;
	}
	return result;
}
function parseNotationOptions(opt) {
	const result = {};
	const signOpts = parseSign(opt);
	if (signOpts) return signOpts;
	return result;
}
function parseNumberSkeleton(tokens) {
	let result = {};
	for (const token of tokens) {
		switch (token.stem) {
			case "percent":
			case "%":
				result.style = "percent";
				continue;
			case "%x100":
				result.style = "percent";
				result.scale = 100;
				continue;
			case "currency":
				result.style = "currency";
				result.currency = token.options[0];
				continue;
			case "group-off":
			case ",_":
				result.useGrouping = false;
				continue;
			case "precision-integer":
			case ".":
				result.maximumFractionDigits = 0;
				continue;
			case "measure-unit":
			case "unit":
				result.style = "unit";
				result.unit = icuUnitToEcma(token.options[0]);
				continue;
			case "compact-short":
			case "K":
				result.notation = "compact";
				result.compactDisplay = "short";
				continue;
			case "compact-long":
			case "KK":
				result.notation = "compact";
				result.compactDisplay = "long";
				continue;
			case "scientific":
				result = {
					...result,
					notation: "scientific",
					...token.options.reduce((all, opt) => ({
						...all,
						...parseNotationOptions(opt)
					}), {})
				};
				continue;
			case "engineering":
				result = {
					...result,
					notation: "engineering",
					...token.options.reduce((all, opt) => ({
						...all,
						...parseNotationOptions(opt)
					}), {})
				};
				continue;
			case "notation-simple":
				result.notation = "standard";
				continue;
			case "unit-width-narrow":
				result.currencyDisplay = "narrowSymbol";
				result.unitDisplay = "narrow";
				continue;
			case "unit-width-short":
				result.currencyDisplay = "code";
				result.unitDisplay = "short";
				continue;
			case "unit-width-full-name":
				result.currencyDisplay = "name";
				result.unitDisplay = "long";
				continue;
			case "unit-width-iso-code":
				result.currencyDisplay = "symbol";
				continue;
			case "scale":
				result.scale = parseFloat(token.options[0]);
				continue;
			case "rounding-mode-floor":
				result.roundingMode = "floor";
				continue;
			case "rounding-mode-ceiling":
				result.roundingMode = "ceil";
				continue;
			case "rounding-mode-down":
				result.roundingMode = "trunc";
				continue;
			case "rounding-mode-up":
				result.roundingMode = "expand";
				continue;
			case "rounding-mode-half-even":
				result.roundingMode = "halfEven";
				continue;
			case "rounding-mode-half-down":
				result.roundingMode = "halfTrunc";
				continue;
			case "rounding-mode-half-up":
				result.roundingMode = "halfExpand";
				continue;
			case "integer-width":
				if (token.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
				token.options[0].replace(INTEGER_WIDTH_REGEX, function(_, g1, g2, g3, g4, g5) {
					if (g1) result.minimumIntegerDigits = g2.length;
					else if (g3 && g4) throw new Error("We currently do not support maximum integer digits");
					else if (g5) throw new Error("We currently do not support exact integer digits");
					return "";
				});
				continue;
		}
		if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
			result.minimumIntegerDigits = token.stem.length;
			continue;
		}
		if (FRACTION_PRECISION_REGEX.test(token.stem)) {
			if (token.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
			token.stem.replace(FRACTION_PRECISION_REGEX, function(_, g1, g2, g3, g4, g5) {
				if (g2 === "*") result.minimumFractionDigits = g1.length;
				else if (g3 && g3[0] === "#") result.maximumFractionDigits = g3.length;
				else if (g4 && g5) {
					result.minimumFractionDigits = g4.length;
					result.maximumFractionDigits = g4.length + g5.length;
				} else {
					result.minimumFractionDigits = g1.length;
					result.maximumFractionDigits = g1.length;
				}
				return "";
			});
			const opt = token.options[0];
			if (opt === "w") result = {
				...result,
				trailingZeroDisplay: "stripIfInteger"
			};
			else if (opt) result = {
				...result,
				...parseSignificantPrecision(opt)
			};
			continue;
		}
		if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
			result = {
				...result,
				...parseSignificantPrecision(token.stem)
			};
			continue;
		}
		const signOpts = parseSign(token.stem);
		if (signOpts) result = {
			...result,
			...signOpts
		};
		const conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
		if (conciseScientificAndEngineeringOpts) result = {
			...result,
			...conciseScientificAndEngineeringOpts
		};
	}
	return result;
}
var TYPE = function(TYPE) {
	TYPE[TYPE["literal"] = 0] = "literal";
	TYPE[TYPE["argument"] = 1] = "argument";
	TYPE[TYPE["number"] = 2] = "number";
	TYPE[TYPE["date"] = 3] = "date";
	TYPE[TYPE["time"] = 4] = "time";
	TYPE[TYPE["select"] = 5] = "select";
	TYPE[TYPE["plural"] = 6] = "plural";
	TYPE[TYPE["pound"] = 7] = "pound";
	TYPE[TYPE["tag"] = 8] = "tag";
	return TYPE;
}({});
var SKELETON_TYPE = function(SKELETON_TYPE) {
	SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
	SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
	return SKELETON_TYPE;
}({});
function isLiteralElement(el) {
	return el.type === TYPE.literal;
}
function isArgumentElement(el) {
	return el.type === TYPE.argument;
}
function isNumberElement(el) {
	return el.type === TYPE.number;
}
function isDateElement(el) {
	return el.type === TYPE.date;
}
function isTimeElement(el) {
	return el.type === TYPE.time;
}
function isSelectElement(el) {
	return el.type === TYPE.select;
}
function isPluralElement(el) {
	return el.type === TYPE.plural;
}
function isPoundElement(el) {
	return el.type === TYPE.pound;
}
function isTagElement(el) {
	return el.type === TYPE.tag;
}
function isNumberSkeleton(el) {
	return !!(el && typeof el === "object" && el.type === SKELETON_TYPE.number);
}
function isDateTimeSkeleton(el) {
	return !!(el && typeof el === "object" && el.type === SKELETON_TYPE.dateTime);
}
var ErrorKind = function(ErrorKind) {
	ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
	ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
	ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
	ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
	ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
	ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
	ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
	ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
	ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
	ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
	ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
	ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
	ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
	ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
	ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
	ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
	ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
	ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
	ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
	ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
	ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
	ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
	ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
	ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
	ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
	ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
	return ErrorKind;
}({});
var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var timeData = {
	"001": ["H", "h"],
	"419": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"AC": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"AD": ["H", "hB"],
	"AE": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"AF": [
		"H",
		"hb",
		"hB",
		"h"
	],
	"AG": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"AI": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"AL": [
		"h",
		"H",
		"hB"
	],
	"AM": ["H", "hB"],
	"AO": ["H", "hB"],
	"AR": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"AS": ["h", "H"],
	"AT": ["H", "hB"],
	"AU": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"AW": ["H", "hB"],
	"AX": ["H"],
	"AZ": [
		"H",
		"hB",
		"h"
	],
	"BA": [
		"H",
		"hB",
		"h"
	],
	"BB": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"BD": [
		"h",
		"hB",
		"H"
	],
	"BE": ["H", "hB"],
	"BF": ["H", "hB"],
	"BG": [
		"H",
		"hB",
		"h"
	],
	"BH": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"BI": ["H", "h"],
	"BJ": ["H", "hB"],
	"BL": ["H", "hB"],
	"BM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"BN": [
		"hb",
		"hB",
		"h",
		"H"
	],
	"BO": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"BQ": ["H"],
	"BR": ["H", "hB"],
	"BS": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"BT": ["h", "H"],
	"BW": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"BY": ["H", "h"],
	"BZ": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"CA": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"CC": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"CD": ["hB", "H"],
	"CF": [
		"H",
		"h",
		"hB"
	],
	"CG": ["H", "hB"],
	"CH": [
		"H",
		"hB",
		"h"
	],
	"CI": ["H", "hB"],
	"CK": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"CL": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"CM": [
		"H",
		"h",
		"hB"
	],
	"CN": [
		"H",
		"hB",
		"hb",
		"h"
	],
	"CO": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"CP": ["H"],
	"CR": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"CU": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"CV": ["H", "hB"],
	"CW": ["H", "hB"],
	"CX": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"CY": [
		"h",
		"H",
		"hb",
		"hB"
	],
	"CZ": ["H"],
	"DE": ["H", "hB"],
	"DG": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"DJ": ["h", "H"],
	"DK": ["H"],
	"DM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"DO": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"DZ": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"EA": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"EC": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"EE": ["H", "hB"],
	"EG": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"EH": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"ER": ["h", "H"],
	"ES": [
		"H",
		"hB",
		"h",
		"hb"
	],
	"ET": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"FI": ["H"],
	"FJ": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"FK": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"FM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"FO": ["H", "h"],
	"FR": ["H", "hB"],
	"GA": ["H", "hB"],
	"GB": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"GD": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"GE": [
		"H",
		"hB",
		"h"
	],
	"GF": ["H", "hB"],
	"GG": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"GH": ["h", "H"],
	"GI": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"GL": ["H", "h"],
	"GM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"GN": ["H", "hB"],
	"GP": ["H", "hB"],
	"GQ": [
		"H",
		"hB",
		"h",
		"hb"
	],
	"GR": [
		"h",
		"H",
		"hb",
		"hB"
	],
	"GS": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"GT": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"GU": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"GW": ["H", "hB"],
	"GY": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"HK": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"HN": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"HR": ["H", "hB"],
	"HU": ["H", "h"],
	"IC": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"ID": ["H"],
	"IE": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"IL": ["H", "hB"],
	"IM": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"IN": ["h", "H"],
	"IO": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"IQ": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"IR": ["hB", "H"],
	"IS": ["H"],
	"IT": ["H", "hB"],
	"JE": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"JM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"JO": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"JP": [
		"H",
		"K",
		"h"
	],
	"KE": [
		"hB",
		"hb",
		"H",
		"h"
	],
	"KG": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"KH": [
		"hB",
		"h",
		"H",
		"hb"
	],
	"KI": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"KM": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"KN": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"KP": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"KR": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"KW": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"KY": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"KZ": ["H", "hB"],
	"LA": [
		"H",
		"hb",
		"hB",
		"h"
	],
	"LB": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"LC": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"LI": [
		"H",
		"hB",
		"h"
	],
	"LK": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"LR": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"LS": ["h", "H"],
	"LT": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"LU": [
		"H",
		"h",
		"hB"
	],
	"LV": [
		"H",
		"hB",
		"hb",
		"h"
	],
	"LY": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"MA": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"MC": ["H", "hB"],
	"MD": ["H", "hB"],
	"ME": [
		"H",
		"hB",
		"h"
	],
	"MF": ["H", "hB"],
	"MG": ["H", "h"],
	"MH": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"MK": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"ML": ["H"],
	"MM": [
		"hB",
		"hb",
		"H",
		"h"
	],
	"MN": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"MO": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"MP": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"MQ": ["H", "hB"],
	"MR": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"MS": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"MT": ["H", "h"],
	"MU": ["H", "h"],
	"MV": ["H", "h"],
	"MW": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"MX": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"MY": [
		"hb",
		"hB",
		"h",
		"H"
	],
	"MZ": ["H", "hB"],
	"NA": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"NC": ["H", "hB"],
	"NE": ["H"],
	"NF": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"NG": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"NI": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"NL": ["H", "hB"],
	"NO": ["H", "h"],
	"NP": [
		"H",
		"h",
		"hB"
	],
	"NR": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"NU": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"NZ": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"OM": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"PA": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"PE": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"PF": [
		"H",
		"h",
		"hB"
	],
	"PG": ["h", "H"],
	"PH": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"PK": [
		"h",
		"hB",
		"H"
	],
	"PL": ["H", "h"],
	"PM": ["H", "hB"],
	"PN": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"PR": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"PS": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"PT": ["H", "hB"],
	"PW": ["h", "H"],
	"PY": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"QA": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"RE": ["H", "hB"],
	"RO": ["H", "hB"],
	"RS": [
		"H",
		"hB",
		"h"
	],
	"RU": ["H"],
	"RW": ["H", "h"],
	"SA": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"SB": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"SC": [
		"H",
		"h",
		"hB"
	],
	"SD": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"SE": ["H"],
	"SG": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"SH": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"SI": ["H", "hB"],
	"SJ": ["H"],
	"SK": ["H"],
	"SL": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"SM": [
		"H",
		"h",
		"hB"
	],
	"SN": [
		"H",
		"h",
		"hB"
	],
	"SO": ["h", "H"],
	"SR": ["H", "hB"],
	"SS": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"ST": ["H", "hB"],
	"SV": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"SX": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"SY": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"SZ": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"TA": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"TC": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"TD": [
		"h",
		"H",
		"hB"
	],
	"TF": [
		"H",
		"h",
		"hB"
	],
	"TG": ["H", "hB"],
	"TH": ["H", "h"],
	"TJ": ["H", "h"],
	"TL": [
		"H",
		"hB",
		"hb",
		"h"
	],
	"TM": ["H", "h"],
	"TN": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"TO": ["h", "H"],
	"TR": ["H", "hB"],
	"TT": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"TW": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"TZ": [
		"hB",
		"hb",
		"H",
		"h"
	],
	"UA": [
		"H",
		"hB",
		"h"
	],
	"UG": [
		"hB",
		"hb",
		"H",
		"h"
	],
	"UM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"US": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"UY": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"UZ": [
		"H",
		"hB",
		"h"
	],
	"VA": [
		"H",
		"h",
		"hB"
	],
	"VC": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"VE": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"VG": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"VI": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"VN": ["H", "h"],
	"VU": ["h", "H"],
	"WF": ["H", "hB"],
	"WS": ["h", "H"],
	"XK": [
		"H",
		"hB",
		"h"
	],
	"YE": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"YT": ["H", "hB"],
	"ZA": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"ZM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"ZW": ["H", "h"],
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
function getBestPattern(skeleton, locale) {
	let skeletonCopy = "";
	for (let patternPos = 0; patternPos < skeleton.length; patternPos++) {
		const patternChar = skeleton.charAt(patternPos);
		if (patternChar === "j") {
			let extraLength = 0;
			while (patternPos + 1 < skeleton.length && skeleton.charAt(patternPos + 1) === patternChar) {
				extraLength++;
				patternPos++;
			}
			let hourLen = 1 + (extraLength & 1);
			let dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
			let dayPeriodChar = "a";
			let hourChar = getDefaultHourSymbolFromLocale(locale);
			if (hourChar == "H" || hourChar == "k") dayPeriodLen = 0;
			while (dayPeriodLen-- > 0) skeletonCopy += dayPeriodChar;
			while (hourLen-- > 0) skeletonCopy = hourChar + skeletonCopy;
		} else if (patternChar === "J") skeletonCopy += "H";
		else skeletonCopy += patternChar;
	}
	return skeletonCopy;
}
function getDefaultHourSymbolFromLocale(locale) {
	let hourCycle = locale.hourCycle;
	if (hourCycle === void 0 && locale.hourCycles && locale.hourCycles.length) hourCycle = locale.hourCycles[0];
	if (hourCycle) switch (hourCycle) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw new Error("Invalid hourCycle");
	}
	const languageTag = locale.language;
	let regionTag;
	if (languageTag !== "root") regionTag = locale.maximize().region;
	return (timeData[regionTag || ""] || timeData[languageTag || ""] || timeData[`${languageTag}-001`] || timeData["001"])[0];
}
var SPACE_SEPARATOR_START_REGEX = new RegExp(`^${SPACE_SEPARATOR_REGEX.source}*`);
var SPACE_SEPARATOR_END_REGEX = new RegExp(`${SPACE_SEPARATOR_REGEX.source}*$`);
function createLocation(start, end) {
	return {
		start,
		end
	};
}
var hasNativeFromEntries = !!Object.fromEntries;
var hasTrimStart = !!String.prototype.trimStart;
var hasTrimEnd = !!String.prototype.trimEnd;
var fromEntries = hasNativeFromEntries ? Object.fromEntries : function fromEntries(entries) {
	const obj = {};
	for (const [k, v] of entries) obj[k] = v;
	return obj;
};
var trimStart = hasTrimStart ? function trimStart(s) {
	return s.trimStart();
} : function trimStart(s) {
	return s.replace(SPACE_SEPARATOR_START_REGEX, "");
};
var trimEnd = hasTrimEnd ? function trimEnd(s) {
	return s.trimEnd();
} : function trimEnd(s) {
	return s.replace(SPACE_SEPARATOR_END_REGEX, "");
};
var IDENTIFIER_PREFIX_RE = /* @__PURE__ */ new RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
function matchIdentifierAtIndex(s, index) {
	IDENTIFIER_PREFIX_RE.lastIndex = index;
	return IDENTIFIER_PREFIX_RE.exec(s)[1] ?? "";
}
var Parser = class {
	message;
	position;
	locale;
	ignoreTag;
	requiresOtherClause;
	shouldParseSkeletons;
	constructor(message, options = {}) {
		this.message = message;
		this.position = {
			offset: 0,
			line: 1,
			column: 1
		};
		this.ignoreTag = !!options.ignoreTag;
		this.locale = options.locale;
		this.requiresOtherClause = !!options.requiresOtherClause;
		this.shouldParseSkeletons = !!options.shouldParseSkeletons;
	}
	parse() {
		if (this.offset() !== 0) throw Error("parser can only be used once");
		return this.parseMessage(0, "", false);
	}
	parseMessage(nestingLevel, parentArgType, expectingCloseTag) {
		let elements = [];
		while (!this.isEOF()) {
			const char = this.char();
			if (char === 123) {
				const result = this.parseArgument(nestingLevel, expectingCloseTag);
				if (result.err) return result;
				elements.push(result.val);
			} else if (char === 125 && nestingLevel > 0) break;
			else if (char === 35 && (parentArgType === "plural" || parentArgType === "selectordinal")) {
				const position = this.clonePosition();
				this.bump();
				elements.push({
					type: TYPE.pound,
					location: createLocation(position, this.clonePosition())
				});
			} else if (char === 60 && !this.ignoreTag && this.peek() === 47) if (expectingCloseTag) break;
			else return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
			else if (char === 60 && !this.ignoreTag && _isAlpha(this.peek() || 0)) {
				const result = this.parseTag(nestingLevel, parentArgType);
				if (result.err) return result;
				elements.push(result.val);
			} else {
				const result = this.parseLiteral(nestingLevel, parentArgType);
				if (result.err) return result;
				elements.push(result.val);
			}
		}
		return {
			val: elements,
			err: null
		};
	}
	parseTag(nestingLevel, parentArgType) {
		const startPosition = this.clonePosition();
		this.bump();
		const tagName = this.parseTagName();
		this.bumpSpace();
		if (this.bumpIf("/>")) return {
			val: {
				type: TYPE.literal,
				value: `<${tagName}/>`,
				location: createLocation(startPosition, this.clonePosition())
			},
			err: null
		};
		else if (this.bumpIf(">")) {
			const childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
			if (childrenResult.err) return childrenResult;
			const children = childrenResult.val;
			const endTagStartPosition = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !_isAlpha(this.char())) return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
				const closingTagNameStartPosition = this.clonePosition();
				if (tagName !== this.parseTagName()) return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
				this.bumpSpace();
				if (!this.bumpIf(">")) return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
				return {
					val: {
						type: TYPE.tag,
						value: tagName,
						children,
						location: createLocation(startPosition, this.clonePosition())
					},
					err: null
				};
			} else return this.error(ErrorKind.UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
		} else return this.error(ErrorKind.INVALID_TAG, createLocation(startPosition, this.clonePosition()));
	}
	parseTagName() {
		const startOffset = this.offset();
		this.bump();
		while (!this.isEOF() && _isPotentialElementNameChar(this.char())) this.bump();
		return this.message.slice(startOffset, this.offset());
	}
	parseLiteral(nestingLevel, parentArgType) {
		const start = this.clonePosition();
		let value = "";
		while (true) {
			const parseQuoteResult = this.tryParseQuote(parentArgType);
			if (parseQuoteResult) {
				value += parseQuoteResult;
				continue;
			}
			const parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
			if (parseUnquotedResult) {
				value += parseUnquotedResult;
				continue;
			}
			const parseLeftAngleResult = this.tryParseLeftAngleBracket();
			if (parseLeftAngleResult) {
				value += parseLeftAngleResult;
				continue;
			}
			break;
		}
		const location = createLocation(start, this.clonePosition());
		return {
			val: {
				type: TYPE.literal,
				value,
				location
			},
			err: null
		};
	}
	tryParseLeftAngleBracket() {
		if (!this.isEOF() && this.char() === 60 && (this.ignoreTag || !_isAlphaOrSlash(this.peek() || 0))) {
			this.bump();
			return "<";
		}
		return null;
	}
	tryParseQuote(parentArgType) {
		if (this.isEOF() || this.char() !== 39) return null;
		switch (this.peek()) {
			case 39:
				this.bump();
				this.bump();
				return "'";
			case 123:
			case 60:
			case 62:
			case 125: break;
			case 35:
				if (parentArgType === "plural" || parentArgType === "selectordinal") break;
				return null;
			default: return null;
		}
		this.bump();
		const codePoints = [this.char()];
		this.bump();
		while (!this.isEOF()) {
			const ch = this.char();
			if (ch === 39) if (this.peek() === 39) {
				codePoints.push(39);
				this.bump();
			} else {
				this.bump();
				break;
			}
			else codePoints.push(ch);
			this.bump();
		}
		return String.fromCodePoint(...codePoints);
	}
	tryParseUnquoted(nestingLevel, parentArgType) {
		if (this.isEOF()) return null;
		const ch = this.char();
		if (ch === 60 || ch === 123 || ch === 35 && (parentArgType === "plural" || parentArgType === "selectordinal") || ch === 125 && nestingLevel > 0) return null;
		else {
			this.bump();
			return String.fromCodePoint(ch);
		}
	}
	parseArgument(nestingLevel, expectingCloseTag) {
		const openingBracePosition = this.clonePosition();
		this.bump();
		this.bumpSpace();
		if (this.isEOF()) return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
		if (this.char() === 125) {
			this.bump();
			return this.error(ErrorKind.EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
		}
		let value = this.parseIdentifierIfPossible().value;
		if (!value) return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
		this.bumpSpace();
		if (this.isEOF()) return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
		switch (this.char()) {
			case 125:
				this.bump();
				return {
					val: {
						type: TYPE.argument,
						value,
						location: createLocation(openingBracePosition, this.clonePosition())
					},
					err: null
				};
			case 44:
				this.bump();
				this.bumpSpace();
				if (this.isEOF()) return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
				return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
			default: return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
		}
	}
	parseIdentifierIfPossible() {
		const startingPosition = this.clonePosition();
		const startOffset = this.offset();
		const value = matchIdentifierAtIndex(this.message, startOffset);
		const endOffset = startOffset + value.length;
		this.bumpTo(endOffset);
		return {
			value,
			location: createLocation(startingPosition, this.clonePosition())
		};
	}
	parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition) {
		let typeStartPosition = this.clonePosition();
		let argType = this.parseIdentifierIfPossible().value;
		let typeEndPosition = this.clonePosition();
		switch (argType) {
			case "": return this.error(ErrorKind.EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
			case "number":
			case "date":
			case "time": {
				this.bumpSpace();
				let styleAndLocation = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					const styleStartPosition = this.clonePosition();
					const result = this.parseSimpleArgStyleIfPossible();
					if (result.err) return result;
					const style = trimEnd(result.val);
					if (style.length === 0) return this.error(ErrorKind.EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
					styleAndLocation = {
						style,
						styleLocation: createLocation(styleStartPosition, this.clonePosition())
					};
				}
				const argCloseResult = this.tryParseArgumentClose(openingBracePosition);
				if (argCloseResult.err) return argCloseResult;
				const location = createLocation(openingBracePosition, this.clonePosition());
				if (styleAndLocation && styleAndLocation.style.startsWith("::")) {
					let skeleton = trimStart(styleAndLocation.style.slice(2));
					if (argType === "number") {
						const result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
						if (result.err) return result;
						return {
							val: {
								type: TYPE.number,
								value,
								location,
								style: result.val
							},
							err: null
						};
					} else {
						if (skeleton.length === 0) return this.error(ErrorKind.EXPECT_DATE_TIME_SKELETON, location);
						let dateTimePattern = skeleton;
						if (this.locale) dateTimePattern = getBestPattern(skeleton, this.locale);
						const style = {
							type: SKELETON_TYPE.dateTime,
							pattern: dateTimePattern,
							location: styleAndLocation.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? parseDateTimeSkeleton(dateTimePattern) : {}
						};
						return {
							val: {
								type: argType === "date" ? TYPE.date : TYPE.time,
								value,
								location,
								style
							},
							err: null
						};
					}
				}
				return {
					val: {
						type: argType === "number" ? TYPE.number : argType === "date" ? TYPE.date : TYPE.time,
						value,
						location,
						style: styleAndLocation?.style ?? null
					},
					err: null
				};
			}
			case "plural":
			case "selectordinal":
			case "select": {
				const typeEndPosition = this.clonePosition();
				this.bumpSpace();
				if (!this.bumpIf(",")) return this.error(ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition, { ...typeEndPosition }));
				this.bumpSpace();
				let identifierAndLocation = this.parseIdentifierIfPossible();
				let pluralOffset = 0;
				if (argType !== "select" && identifierAndLocation.value === "offset") {
					if (!this.bumpIf(":")) return this.error(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
					this.bumpSpace();
					const result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
					if (result.err) return result;
					this.bumpSpace();
					identifierAndLocation = this.parseIdentifierIfPossible();
					pluralOffset = result.val;
				}
				const optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
				if (optionsResult.err) return optionsResult;
				const argCloseResult = this.tryParseArgumentClose(openingBracePosition);
				if (argCloseResult.err) return argCloseResult;
				const location = createLocation(openingBracePosition, this.clonePosition());
				if (argType === "select") return {
					val: {
						type: TYPE.select,
						value,
						options: fromEntries(optionsResult.val),
						location
					},
					err: null
				};
				else return {
					val: {
						type: TYPE.plural,
						value,
						options: fromEntries(optionsResult.val),
						offset: pluralOffset,
						pluralType: argType === "plural" ? "cardinal" : "ordinal",
						location
					},
					err: null
				};
			}
			default: return this.error(ErrorKind.INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
		}
	}
	tryParseArgumentClose(openingBracePosition) {
		if (this.isEOF() || this.char() !== 125) return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
		this.bump();
		return {
			val: true,
			err: null
		};
	}
	parseSimpleArgStyleIfPossible() {
		let nestedBraces = 0;
		const startPosition = this.clonePosition();
		while (!this.isEOF()) switch (this.char()) {
			case 39: {
				this.bump();
				let apostrophePosition = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
				this.bump();
				break;
			}
			case 123:
				nestedBraces += 1;
				this.bump();
				break;
			case 125:
				if (nestedBraces > 0) nestedBraces -= 1;
				else return {
					val: this.message.slice(startPosition.offset, this.offset()),
					err: null
				};
				break;
			default:
				this.bump();
				break;
		}
		return {
			val: this.message.slice(startPosition.offset, this.offset()),
			err: null
		};
	}
	parseNumberSkeletonFromString(skeleton, location) {
		let tokens = [];
		try {
			tokens = parseNumberSkeletonFromString(skeleton);
		} catch {
			return this.error(ErrorKind.INVALID_NUMBER_SKELETON, location);
		}
		return {
			val: {
				type: SKELETON_TYPE.number,
				tokens,
				location,
				parsedOptions: this.shouldParseSkeletons ? parseNumberSkeleton(tokens) : {}
			},
			err: null
		};
	}
	tryParsePluralOrSelectOptions(nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
		let hasOtherClause = false;
		const options = [];
		const parsedSelectors = /* @__PURE__ */ new Set();
		let { value: selector, location: selectorLocation } = parsedFirstIdentifier;
		while (true) {
			if (selector.length === 0) {
				const startPosition = this.clonePosition();
				if (parentArgType !== "select" && this.bumpIf("=")) {
					const result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (result.err) return result;
					selectorLocation = createLocation(startPosition, this.clonePosition());
					selector = this.message.slice(startPosition.offset, this.offset());
				} else break;
			}
			if (parsedSelectors.has(selector)) return this.error(parentArgType === "select" ? ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
			if (selector === "other") hasOtherClause = true;
			this.bumpSpace();
			const openingBracePosition = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(parentArgType === "select" ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
			const fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
			if (fragmentResult.err) return fragmentResult;
			const argCloseResult = this.tryParseArgumentClose(openingBracePosition);
			if (argCloseResult.err) return argCloseResult;
			options.push([selector, {
				value: fragmentResult.val,
				location: createLocation(openingBracePosition, this.clonePosition())
			}]);
			parsedSelectors.add(selector);
			this.bumpSpace();
			({value: selector, location: selectorLocation} = this.parseIdentifierIfPossible());
		}
		if (options.length === 0) return this.error(parentArgType === "select" ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
		if (this.requiresOtherClause && !hasOtherClause) return this.error(ErrorKind.MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
		return {
			val: options,
			err: null
		};
	}
	tryParseDecimalInteger(expectNumberError, invalidNumberError) {
		let sign = 1;
		const startingPosition = this.clonePosition();
		if (this.bumpIf("+")) {} else if (this.bumpIf("-")) sign = -1;
		let hasDigits = false;
		let decimal = 0;
		while (!this.isEOF()) {
			const ch = this.char();
			if (ch >= 48 && ch <= 57) {
				hasDigits = true;
				decimal = decimal * 10 + (ch - 48);
				this.bump();
			} else break;
		}
		const location = createLocation(startingPosition, this.clonePosition());
		if (!hasDigits) return this.error(expectNumberError, location);
		decimal *= sign;
		if (!Number.isSafeInteger(decimal)) return this.error(invalidNumberError, location);
		return {
			val: decimal,
			err: null
		};
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
		const offset = this.position.offset;
		if (offset >= this.message.length) throw Error("out of bound");
		const code = this.message.codePointAt(offset);
		if (code === void 0) throw Error(`Offset ${offset} is at invalid UTF-16 code unit boundary`);
		return code;
	}
	error(kind, location) {
		return {
			val: null,
			err: {
				kind,
				message: this.message,
				location
			}
		};
	}
	bump() {
		if (this.isEOF()) return;
		const code = this.char();
		if (code === 10) {
			this.position.line += 1;
			this.position.column = 1;
			this.position.offset += 1;
		} else {
			this.position.column += 1;
			this.position.offset += code < 65536 ? 1 : 2;
		}
	}
	bumpIf(prefix) {
		if (this.message.startsWith(prefix, this.offset())) {
			for (let i = 0; i < prefix.length; i++) this.bump();
			return true;
		}
		return false;
	}
	bumpUntil(pattern) {
		const currentOffset = this.offset();
		const index = this.message.indexOf(pattern, currentOffset);
		if (index >= 0) {
			this.bumpTo(index);
			return true;
		} else {
			this.bumpTo(this.message.length);
			return false;
		}
	}
	bumpTo(targetOffset) {
		if (this.offset() > targetOffset) throw Error(`targetOffset ${targetOffset} must be greater than or equal to the current offset ${this.offset()}`);
		targetOffset = Math.min(targetOffset, this.message.length);
		while (true) {
			const offset = this.offset();
			if (offset === targetOffset) break;
			if (offset > targetOffset) throw Error(`targetOffset ${targetOffset} is at invalid UTF-16 code unit boundary`);
			this.bump();
			if (this.isEOF()) break;
		}
	}
	bumpSpace() {
		while (!this.isEOF() && _isWhiteSpace(this.char())) this.bump();
	}
	peek() {
		if (this.isEOF()) return null;
		const code = this.char();
		const offset = this.offset();
		return this.message.charCodeAt(offset + (code >= 65536 ? 2 : 1)) ?? null;
	}
};
function _isAlpha(codepoint) {
	return codepoint >= 97 && codepoint <= 122 || codepoint >= 65 && codepoint <= 90;
}
function _isAlphaOrSlash(codepoint) {
	return _isAlpha(codepoint) || codepoint === 47;
}
function _isPotentialElementNameChar(c) {
	return c === 45 || c === 46 || c >= 48 && c <= 57 || c === 95 || c >= 97 && c <= 122 || c >= 65 && c <= 90 || c == 183 || c >= 192 && c <= 214 || c >= 216 && c <= 246 || c >= 248 && c <= 893 || c >= 895 && c <= 8191 || c >= 8204 && c <= 8205 || c >= 8255 && c <= 8256 || c >= 8304 && c <= 8591 || c >= 11264 && c <= 12271 || c >= 12289 && c <= 55295 || c >= 63744 && c <= 64975 || c >= 65008 && c <= 65533 || c >= 65536 && c <= 983039;
}
function _isWhiteSpace(c) {
	return c >= 9 && c <= 13 || c === 32 || c === 133 || c >= 8206 && c <= 8207 || c === 8232 || c === 8233;
}
function pruneLocation(els) {
	els.forEach((el) => {
		delete el.location;
		if (isSelectElement(el) || isPluralElement(el)) for (const k in el.options) {
			delete el.options[k].location;
			pruneLocation(el.options[k].value);
		}
		else if (isNumberElement(el) && isNumberSkeleton(el.style)) delete el.style.location;
		else if ((isDateElement(el) || isTimeElement(el)) && isDateTimeSkeleton(el.style)) delete el.style.location;
		else if (isTagElement(el)) pruneLocation(el.children);
	});
}
function parse(message, opts = {}) {
	opts = {
		shouldParseSkeletons: true,
		requiresOtherClause: true,
		...opts
	};
	const result = new Parser(message, opts).parse();
	if (result.err) {
		const error = SyntaxError(ErrorKind[result.err.kind]);
		error.location = result.err.location;
		error.originalMessage = result.err.message;
		throw error;
	}
	if (!opts?.captureLocation) pruneLocation(result.val);
	return result.val;
}
var ErrorCode = function(ErrorCode) {
	ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
	ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
	ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
	return ErrorCode;
}({});
var FormatError = class extends Error {
	code;
	originalMessage;
	constructor(msg, code, originalMessage) {
		super(msg);
		this.code = code;
		this.originalMessage = originalMessage;
	}
	toString() {
		return `[formatjs Error: ${this.code}] ${this.message}`;
	}
};
var InvalidValueError = class extends FormatError {
	constructor(variableId, value, options, originalMessage) {
		super(`Invalid values for "${variableId}": "${value}". Options are "${Object.keys(options).join("\", \"")}"`, ErrorCode.INVALID_VALUE, originalMessage);
	}
};
var InvalidValueTypeError = class extends FormatError {
	constructor(value, type, originalMessage) {
		super(`Value for "${value}" must be of type ${type}`, ErrorCode.INVALID_VALUE, originalMessage);
	}
};
var MissingValueError = class extends FormatError {
	constructor(variableId, originalMessage) {
		super(`The intl string context variable "${variableId}" was not provided to the string "${originalMessage}"`, ErrorCode.MISSING_VALUE, originalMessage);
	}
};
var PART_TYPE = function(PART_TYPE) {
	PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
	PART_TYPE[PART_TYPE["object"] = 1] = "object";
	return PART_TYPE;
}({});
function mergeLiteral(parts) {
	if (parts.length < 2) return parts;
	return parts.reduce((all, part) => {
		const lastPart = all[all.length - 1];
		if (!lastPart || lastPart.type !== PART_TYPE.literal || part.type !== PART_TYPE.literal) all.push(part);
		else lastPart.value += part.value;
		return all;
	}, []);
}
function isFormatXMLElementFn(el) {
	return typeof el === "function";
}
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, originalMessage) {
	if (els.length === 1 && isLiteralElement(els[0])) return [{
		type: PART_TYPE.literal,
		value: els[0].value
	}];
	const result = [];
	for (const el of els) {
		if (isLiteralElement(el)) {
			result.push({
				type: PART_TYPE.literal,
				value: el.value
			});
			continue;
		}
		if (isPoundElement(el)) {
			if (typeof currentPluralValue === "number") result.push({
				type: PART_TYPE.literal,
				value: formatters.getNumberFormat(locales).format(currentPluralValue)
			});
			continue;
		}
		const { value: varName } = el;
		if (!(values && varName in values)) throw new MissingValueError(varName, originalMessage);
		let value = values[varName];
		if (isArgumentElement(el)) {
			if (!value || typeof value === "string" || typeof value === "number" || typeof value === "bigint") value = typeof value === "string" || typeof value === "number" || typeof value === "bigint" ? String(value) : "";
			result.push({
				type: typeof value === "string" ? PART_TYPE.literal : PART_TYPE.object,
				value
			});
			continue;
		}
		if (isDateElement(el)) {
			const style = typeof el.style === "string" ? formats.date[el.style] : isDateTimeSkeleton(el.style) ? el.style.parsedOptions : void 0;
			result.push({
				type: PART_TYPE.literal,
				value: formatters.getDateTimeFormat(locales, style).format(value)
			});
			continue;
		}
		if (isTimeElement(el)) {
			const style = typeof el.style === "string" ? formats.time[el.style] : isDateTimeSkeleton(el.style) ? el.style.parsedOptions : formats.time.medium;
			result.push({
				type: PART_TYPE.literal,
				value: formatters.getDateTimeFormat(locales, style).format(value)
			});
			continue;
		}
		if (isNumberElement(el)) {
			const style = typeof el.style === "string" ? formats.number[el.style] : isNumberSkeleton(el.style) ? el.style.parsedOptions : void 0;
			if (style && style.scale) {
				const scale = style.scale || 1;
				if (typeof value === "bigint") {
					if (!Number.isInteger(scale)) throw new TypeError(`Cannot apply fractional scale ${scale} to bigint value. Scale must be an integer when formatting bigint.`);
					value = value * BigInt(scale);
				} else value = value * scale;
			}
			result.push({
				type: PART_TYPE.literal,
				value: formatters.getNumberFormat(locales, style).format(value)
			});
			continue;
		}
		if (isTagElement(el)) {
			const { children, value } = el;
			const formatFn = values[value];
			if (!isFormatXMLElementFn(formatFn)) throw new InvalidValueTypeError(value, "function", originalMessage);
			let chunks = formatFn(formatToParts(children, locales, formatters, formats, values, currentPluralValue).map((p) => p.value));
			if (!Array.isArray(chunks)) chunks = [chunks];
			result.push(...chunks.map((c) => {
				return {
					type: typeof c === "string" ? PART_TYPE.literal : PART_TYPE.object,
					value: c
				};
			}));
		}
		if (isSelectElement(el)) {
			const key = value;
			const opt = (Object.prototype.hasOwnProperty.call(el.options, key) ? el.options[key] : void 0) || el.options.other;
			if (!opt) throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
			result.push(...formatToParts(opt.value, locales, formatters, formats, values));
			continue;
		}
		if (isPluralElement(el)) {
			const exactKey = `=${value}`;
			let opt = Object.prototype.hasOwnProperty.call(el.options, exactKey) ? el.options[exactKey] : void 0;
			if (!opt) {
				if (!Intl.PluralRules) throw new FormatError(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ErrorCode.MISSING_INTL_API, originalMessage);
				const numericValue = typeof value === "bigint" ? Number(value) : value;
				const rule = formatters.getPluralRules(locales, { type: el.pluralType }).select(numericValue - (el.offset || 0));
				opt = (Object.prototype.hasOwnProperty.call(el.options, rule) ? el.options[rule] : void 0) || el.options.other;
			}
			if (!opt) throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
			const numericValue = typeof value === "bigint" ? Number(value) : value;
			result.push(...formatToParts(opt.value, locales, formatters, formats, values, numericValue - (el.offset || 0)));
			continue;
		}
	}
	return mergeLiteral(result);
}
function mergeConfig(c1, c2) {
	if (!c2) return c1;
	return {
		...c1,
		...c2,
		...Object.keys(c1).reduce((all, k) => {
			all[k] = {
				...c1[k],
				...c2[k]
			};
			return all;
		}, {})
	};
}
function mergeConfigs(defaultConfig, configs) {
	if (!configs) return defaultConfig;
	return Object.keys(defaultConfig).reduce((all, k) => {
		all[k] = mergeConfig(defaultConfig[k], configs[k]);
		return all;
	}, { ...defaultConfig });
}
function createFastMemoizeCache$1(store) {
	return { create() {
		return {
			get(key) {
				return store[key];
			},
			set(key, value) {
				store[key] = value;
			}
		};
	} };
}
function createDefaultFormatters(cache = {
	number: {},
	dateTime: {},
	pluralRules: {}
}) {
	return {
		getNumberFormat: memoize((...args) => new Intl.NumberFormat(...args), {
			cache: createFastMemoizeCache$1(cache.number),
			strategy: strategies.variadic
		}),
		getDateTimeFormat: memoize((...args) => new Intl.DateTimeFormat(...args), {
			cache: createFastMemoizeCache$1(cache.dateTime),
			strategy: strategies.variadic
		}),
		getPluralRules: memoize((...args) => new Intl.PluralRules(...args), {
			cache: createFastMemoizeCache$1(cache.pluralRules),
			strategy: strategies.variadic
		})
	};
}
var IntlMessageFormat = class IntlMessageFormat {
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
	constructor(message, locales = IntlMessageFormat.defaultLocale, overrideFormats, opts) {
		this.locales = locales;
		this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
		if (typeof message === "string") {
			this.message = message;
			if (!IntlMessageFormat.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
			const { ...parseOpts } = opts || {};
			this.ast = IntlMessageFormat.__parse(message, {
				...parseOpts,
				locale: this.resolvedLocale
			});
		} else this.ast = message;
		if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
		this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
		this.formatters = opts && opts.formatters || createDefaultFormatters(this.formatterCache);
	}
	format = (values) => {
		const parts = this.formatToParts(values);
		if (parts.length === 1) return parts[0].value;
		const result = parts.reduce((all, part) => {
			if (!all.length || part.type !== PART_TYPE.literal || typeof all[all.length - 1] !== "string") all.push(part.value);
			else all[all.length - 1] += part.value;
			return all;
		}, []);
		if (result.length <= 1) return result[0] || "";
		return result;
	};
	formatToParts = (values) => formatToParts(this.ast, this.locales, this.formatters, this.formats, values, void 0, this.message);
	resolvedOptions = () => ({ locale: this.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(this.locales)[0] });
	getAst = () => this.ast;
	static memoizedDefaultLocale = null;
	static get defaultLocale() {
		if (!IntlMessageFormat.memoizedDefaultLocale) IntlMessageFormat.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
		return IntlMessageFormat.memoizedDefaultLocale;
	}
	static resolveLocale = (locales) => {
		if (typeof Intl.Locale === "undefined") return;
		const supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
		if (supportedLocales.length > 0) return new Intl.Locale(supportedLocales[0]);
		return new Intl.Locale(typeof locales === "string" ? locales : locales[0]);
	};
	static __parse = parse;
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
var IntlErrorCode = function(IntlErrorCode) {
	IntlErrorCode["FORMAT_ERROR"] = "FORMAT_ERROR";
	IntlErrorCode["UNSUPPORTED_FORMATTER"] = "UNSUPPORTED_FORMATTER";
	IntlErrorCode["INVALID_CONFIG"] = "INVALID_CONFIG";
	IntlErrorCode["MISSING_DATA"] = "MISSING_DATA";
	IntlErrorCode["MISSING_TRANSLATION"] = "MISSING_TRANSLATION";
	return IntlErrorCode;
}({});
var IntlError = class IntlError extends Error {
	code;
	constructor(code, message, exception) {
		const err = exception ? exception instanceof Error ? exception : new Error(String(exception)) : void 0;
		super(`[@formatjs/intl Error ${code}] ${message}
${err ? `\n${err.message}\n${err.stack}` : ""}`);
		this.code = code;
		if (typeof Error.captureStackTrace === "function") Error.captureStackTrace(this, IntlError);
	}
};
var UnsupportedFormatterError = class extends IntlError {
	constructor(message, exception) {
		super(IntlErrorCode.UNSUPPORTED_FORMATTER, message, exception);
	}
};
var InvalidConfigError = class extends IntlError {
	constructor(message, exception) {
		super(IntlErrorCode.INVALID_CONFIG, message, exception);
	}
};
var MissingDataError = class extends IntlError {
	constructor(message, exception) {
		super(IntlErrorCode.MISSING_DATA, message, exception);
	}
};
var IntlFormatError = class extends IntlError {
	descriptor;
	locale;
	constructor(message, locale, exception) {
		super(IntlErrorCode.FORMAT_ERROR, `${message}
Locale: ${locale}
`, exception);
		this.locale = locale;
	}
};
var MessageFormatError = class extends IntlFormatError {
	descriptor;
	locale;
	constructor(message, locale, descriptor, exception) {
		super(`${message}
MessageID: ${descriptor?.id}
Default Message: ${descriptor?.defaultMessage}
Description: ${descriptor?.description}
`, locale, exception);
		this.descriptor = descriptor;
		this.locale = locale;
	}
};
var MissingTranslationError = class extends IntlError {
	descriptor;
	constructor(descriptor, locale) {
		super(IntlErrorCode.MISSING_TRANSLATION, `Missing message: "${descriptor.id}" for locale "${locale}", using ${descriptor.defaultMessage ? `default message (${typeof descriptor.defaultMessage === "string" ? descriptor.defaultMessage : descriptor.defaultMessage.map((e) => e.value ?? JSON.stringify(e)).join()})` : "id"} as fallback.`);
		this.descriptor = descriptor;
	}
};
function invariant$1(condition, message, Err = Error) {
	if (!condition) throw new Err(message);
}
function filterProps(props, allowlist, defaults = {}) {
	return allowlist.reduce((filtered, name) => {
		if (name in props) filtered[name] = props[name];
		else if (name in defaults) filtered[name] = defaults[name];
		return filtered;
	}, {});
}
var defaultErrorHandler = (error) => {
	if (process.env.NODE_ENV !== "production") console.error(error);
};
var defaultWarnHandler = (warning) => {
	if (process.env.NODE_ENV !== "production") console.warn(warning);
};
var DEFAULT_INTL_CONFIG$1 = {
	formats: {},
	messages: {},
	timeZone: void 0,
	defaultLocale: "en",
	defaultFormats: {},
	fallbackOnEmptyString: true,
	onError: defaultErrorHandler,
	onWarn: defaultWarnHandler
};
function createIntlCache() {
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
function createFastMemoizeCache(store) {
	return { create() {
		return {
			get(key) {
				return store[key];
			},
			set(key, value) {
				store[key] = value;
			}
		};
	} };
}
function createFormatters(cache = createIntlCache()) {
	const RelativeTimeFormat = Intl.RelativeTimeFormat;
	const ListFormat = Intl.ListFormat;
	const DisplayNames = Intl.DisplayNames;
	const getDateTimeFormat = memoize((...args) => new Intl.DateTimeFormat(...args), {
		cache: createFastMemoizeCache(cache.dateTime),
		strategy: strategies.variadic
	});
	const getNumberFormat = memoize((...args) => new Intl.NumberFormat(...args), {
		cache: createFastMemoizeCache(cache.number),
		strategy: strategies.variadic
	});
	const getPluralRules = memoize((...args) => new Intl.PluralRules(...args), {
		cache: createFastMemoizeCache(cache.pluralRules),
		strategy: strategies.variadic
	});
	return {
		getDateTimeFormat,
		getNumberFormat,
		getMessageFormat: memoize((message, locales, overrideFormats, opts) => new IntlMessageFormat(message, locales, overrideFormats, {
			formatters: {
				getNumberFormat,
				getDateTimeFormat,
				getPluralRules
			},
			...opts
		}), {
			cache: createFastMemoizeCache(cache.message),
			strategy: strategies.variadic
		}),
		getRelativeTimeFormat: memoize((...args) => new RelativeTimeFormat(...args), {
			cache: createFastMemoizeCache(cache.relativeTime),
			strategy: strategies.variadic
		}),
		getPluralRules,
		getListFormat: memoize((...args) => new ListFormat(...args), {
			cache: createFastMemoizeCache(cache.list),
			strategy: strategies.variadic
		}),
		getDisplayNames: memoize((...args) => new DisplayNames(...args), {
			cache: createFastMemoizeCache(cache.displayNames),
			strategy: strategies.variadic
		})
	};
}
function getNamedFormat(formats, type, name, onError) {
	const formatType = formats && formats[type];
	let format;
	if (formatType) format = formatType[name];
	if (format) return format;
	onError(new UnsupportedFormatterError(`No ${type} format named: ${name}`));
}
function setTimeZoneInOptions(opts, timeZone) {
	return Object.keys(opts).reduce((all, k) => {
		all[k] = {
			timeZone,
			...opts[k]
		};
		return all;
	}, {});
}
function deepMergeOptions(opts1, opts2) {
	return Object.keys({
		...opts1,
		...opts2
	}).reduce((all, k) => {
		all[k] = {
			...opts1[k],
			...opts2[k]
		};
		return all;
	}, {});
}
function deepMergeFormatsAndSetTimeZone(f1, timeZone) {
	if (!timeZone) return f1;
	const mfFormats = IntlMessageFormat.formats;
	return {
		...mfFormats,
		...f1,
		date: deepMergeOptions(setTimeZoneInOptions(mfFormats.date, timeZone), setTimeZoneInOptions(f1.date || {}, timeZone)),
		time: deepMergeOptions(setTimeZoneInOptions(mfFormats.time, timeZone), setTimeZoneInOptions(f1.time || {}, timeZone))
	};
}
var formatMessage$1 = ({ locale, formats, messages, defaultLocale, defaultFormats, fallbackOnEmptyString, onError, timeZone, defaultRichTextElements }, state, messageDescriptor = { id: "" }, values, opts) => {
	const { id: msgId, defaultMessage } = messageDescriptor;
	invariant$1(!!msgId, `[@formatjs/intl] An \`id\` must be provided to format a message. You can either:
1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)
or [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR
2. Configure your \`eslint\` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)
to autofix this issue`);
	const id = String(msgId);
	const message = messages && Object.prototype.hasOwnProperty.call(messages, id) && messages[id];
	if (Array.isArray(message) && message.length === 1 && message[0].type === TYPE.literal) return message[0].value;
	values = {
		...defaultRichTextElements,
		...values
	};
	formats = deepMergeFormatsAndSetTimeZone(formats, timeZone);
	defaultFormats = deepMergeFormatsAndSetTimeZone(defaultFormats, timeZone);
	if (!message) {
		if (fallbackOnEmptyString === false && message === "") return message;
		if (!defaultMessage || locale && locale.toLowerCase() !== defaultLocale.toLowerCase()) onError(new MissingTranslationError(messageDescriptor, locale));
		if (defaultMessage) try {
			return state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts).format(values);
		} catch (e) {
			onError(new MessageFormatError(`Error formatting default message for: "${id}", rendering default message verbatim`, locale, messageDescriptor, e));
			return typeof defaultMessage === "string" ? defaultMessage : id;
		}
		return id;
	}
	try {
		return state.getMessageFormat(message, locale, formats, {
			formatters: state,
			...opts
		}).format(values);
	} catch (e) {
		onError(new MessageFormatError(`Error formatting message: "${id}", using ${defaultMessage ? "default message" : "id"} as fallback.`, locale, messageDescriptor, e));
	}
	if (defaultMessage) try {
		return state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts).format(values);
	} catch (e) {
		onError(new MessageFormatError(`Error formatting the default message for: "${id}", rendering message verbatim`, locale, messageDescriptor, e));
	}
	if (typeof message === "string") return message;
	if (typeof defaultMessage === "string") return defaultMessage;
	return id;
};
var DATE_TIME_FORMAT_OPTIONS = [
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
function getFormatter$2({ locale, formats, onError, timeZone }, type, getDateTimeFormat, options = {}) {
	const { format } = options;
	let filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, {
		...timeZone && { timeZone },
		...format && getNamedFormat(formats, type, format, onError)
	});
	if (type === "time" && !filteredOptions.hour && !filteredOptions.minute && !filteredOptions.second && !filteredOptions.timeStyle && !filteredOptions.dateStyle) filteredOptions = {
		...filteredOptions,
		hour: "numeric",
		minute: "numeric"
	};
	return getDateTimeFormat(locale, filteredOptions);
}
function formatDate(config, getDateTimeFormat, value, options = {}) {
	const date = typeof value === "string" ? new Date(value || 0) : value;
	try {
		return getFormatter$2(config, "date", getDateTimeFormat, options).format(date);
	} catch (e) {
		config.onError(new IntlFormatError("Error formatting date.", config.locale, e));
	}
	return String(date);
}
function formatTime(config, getDateTimeFormat, value, options = {}) {
	const date = typeof value === "string" ? new Date(value || 0) : value;
	try {
		return getFormatter$2(config, "time", getDateTimeFormat, options).format(date);
	} catch (e) {
		config.onError(new IntlFormatError("Error formatting time.", config.locale, e));
	}
	return String(date);
}
function formatDateTimeRange(config, getDateTimeFormat, from, to, options = {}) {
	const fromDate = typeof from === "string" ? new Date(from || 0) : from;
	const toDate = typeof to === "string" ? new Date(to || 0) : to;
	try {
		return getFormatter$2(config, "dateTimeRange", getDateTimeFormat, options).formatRange(fromDate, toDate);
	} catch (e) {
		config.onError(new IntlFormatError("Error formatting date time range.", config.locale, e));
	}
	return String(fromDate);
}
function formatDateToParts(config, getDateTimeFormat, value, options = {}) {
	const date = typeof value === "string" ? new Date(value || 0) : value;
	try {
		return getFormatter$2(config, "date", getDateTimeFormat, options).formatToParts(date);
	} catch (e) {
		config.onError(new IntlFormatError("Error formatting date.", config.locale, e));
	}
	return [];
}
function formatTimeToParts(config, getDateTimeFormat, value, options = {}) {
	const date = typeof value === "string" ? new Date(value || 0) : value;
	try {
		return getFormatter$2(config, "time", getDateTimeFormat, options).formatToParts(date);
	} catch (e) {
		config.onError(new IntlFormatError("Error formatting time.", config.locale, e));
	}
	return [];
}
var DISPLAY_NAMES_OPTONS = [
	"style",
	"type",
	"fallback",
	"languageDisplay"
];
function formatDisplayName({ locale, onError }, getDisplayNames, value, options) {
	if (!Intl.DisplayNames) onError(new FormatError(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, ErrorCode.MISSING_INTL_API));
	const filteredOptions = filterProps(options, DISPLAY_NAMES_OPTONS);
	try {
		return getDisplayNames(locale, filteredOptions).of(value);
	} catch (e) {
		onError(new IntlFormatError("Error formatting display name.", locale, e));
	}
}
var LIST_FORMAT_OPTIONS = ["type", "style"];
var now = Date.now();
function generateToken(i) {
	return `${now}_${i}_${now}`;
}
function formatList(opts, getListFormat, values, options = {}) {
	const results = formatListToParts(opts, getListFormat, values, options).reduce((all, el) => {
		const val = el.value;
		if (typeof val !== "string") all.push(val);
		else if (typeof all[all.length - 1] === "string") all[all.length - 1] += val;
		else all.push(val);
		return all;
	}, []);
	return results.length === 1 ? results[0] : results.length === 0 ? "" : results;
}
function formatListToParts({ locale, onError }, getListFormat, values, options = {}) {
	if (!Intl.ListFormat) onError(new FormatError(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, ErrorCode.MISSING_INTL_API));
	const filteredOptions = filterProps(options, LIST_FORMAT_OPTIONS);
	try {
		const richValues = {};
		const serializedValues = Array.from(values).map((v, i) => {
			if (typeof v === "object" && v !== null) {
				const id = generateToken(i);
				richValues[id] = v;
				return id;
			}
			return String(v);
		});
		return getListFormat(locale, filteredOptions).formatToParts(serializedValues).map((part) => part.type === "literal" ? part : {
			...part,
			value: richValues[part.value] || part.value
		});
	} catch (e) {
		onError(new IntlFormatError("Error formatting list.", locale, e));
	}
	return values;
}
var PLURAL_FORMAT_OPTIONS = ["type"];
function formatPlural({ locale, onError }, getPluralRules, value, options = {}) {
	if (!Intl.PluralRules) onError(new FormatError(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ErrorCode.MISSING_INTL_API));
	const filteredOptions = filterProps(options, PLURAL_FORMAT_OPTIONS);
	try {
		return getPluralRules(locale, filteredOptions).select(value);
	} catch (e) {
		onError(new IntlFormatError("Error formatting plural.", locale, e));
	}
	return "other";
}
var RELATIVE_TIME_FORMAT_OPTIONS = ["numeric", "style"];
function getFormatter$1({ locale, formats, onError }, getRelativeTimeFormat, options = {}) {
	const { format } = options;
	return getRelativeTimeFormat(locale, filterProps(options, RELATIVE_TIME_FORMAT_OPTIONS, !!format && getNamedFormat(formats, "relative", format, onError) || {}));
}
function formatRelativeTime(config, getRelativeTimeFormat, value, unit, options = {}) {
	if (!unit) unit = "second";
	if (!Intl.RelativeTimeFormat) config.onError(new FormatError(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, ErrorCode.MISSING_INTL_API));
	try {
		return getFormatter$1(config, getRelativeTimeFormat, options).format(value, unit);
	} catch (e) {
		config.onError(new IntlFormatError("Error formatting relative time.", config.locale, e));
	}
	return String(value);
}
var NUMBER_FORMAT_OPTIONS = [
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
function getFormatter({ locale, formats, onError }, getNumberFormat, options = {}) {
	const { format } = options;
	return getNumberFormat(locale, filterProps(options, NUMBER_FORMAT_OPTIONS, format && getNamedFormat(formats, "number", format, onError) || {}));
}
function formatNumber(config, getNumberFormat, value, options = {}) {
	try {
		return getFormatter(config, getNumberFormat, options).format(value);
	} catch (e) {
		config.onError(new IntlFormatError("Error formatting number.", config.locale, e));
	}
	return String(value);
}
function formatNumberToParts(config, getNumberFormat, value, options = {}) {
	try {
		return getFormatter(config, getNumberFormat, options).formatToParts(value);
	} catch (e) {
		config.onError(new IntlFormatError("Error formatting number.", config.locale, e));
	}
	return [];
}
function messagesContainString(messages) {
	return typeof (messages ? messages[Object.keys(messages)[0]] : void 0) === "string";
}
function verifyConfigMessages(config) {
	if (config.onWarn && config.defaultRichTextElements && messagesContainString(config.messages || {})) config.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`);
}
function createIntl$1(config, cache) {
	const formatters = createFormatters(cache);
	const resolvedConfig = {
		...DEFAULT_INTL_CONFIG$1,
		...config
	};
	const { locale, defaultLocale, onError } = resolvedConfig;
	if (!locale) {
		if (onError) onError(new InvalidConfigError(`"locale" was not configured, using "${defaultLocale}" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details`));
		resolvedConfig.locale = resolvedConfig.defaultLocale || "en";
	} else if (!Intl.NumberFormat.supportedLocalesOf(locale).length && onError) onError(new MissingDataError(`Missing locale data for locale: "${locale}" in Intl.NumberFormat. Using default locale: "${defaultLocale}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`));
	else if (!Intl.DateTimeFormat.supportedLocalesOf(locale).length && onError) onError(new MissingDataError(`Missing locale data for locale: "${locale}" in Intl.DateTimeFormat. Using default locale: "${defaultLocale}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`));
	verifyConfigMessages(resolvedConfig);
	return {
		...resolvedConfig,
		formatters,
		formatNumber: formatNumber.bind(null, resolvedConfig, formatters.getNumberFormat),
		formatNumberToParts: formatNumberToParts.bind(null, resolvedConfig, formatters.getNumberFormat),
		formatRelativeTime: formatRelativeTime.bind(null, resolvedConfig, formatters.getRelativeTimeFormat),
		formatDate: formatDate.bind(null, resolvedConfig, formatters.getDateTimeFormat),
		formatDateToParts: formatDateToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat),
		formatTime: formatTime.bind(null, resolvedConfig, formatters.getDateTimeFormat),
		formatDateTimeRange: formatDateTimeRange.bind(null, resolvedConfig, formatters.getDateTimeFormat),
		formatTimeToParts: formatTimeToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat),
		formatPlural: formatPlural.bind(null, resolvedConfig, formatters.getPluralRules),
		formatMessage: formatMessage$1.bind(null, resolvedConfig, formatters),
		$t: formatMessage$1.bind(null, resolvedConfig, formatters),
		formatList: formatList.bind(null, resolvedConfig, formatters.getListFormat),
		formatListToParts: formatListToParts.bind(null, resolvedConfig, formatters.getListFormat),
		formatDisplayName: formatDisplayName.bind(null, resolvedConfig, formatters.getDisplayNames)
	};
}
function invariant(condition, message, Err = Error) {
	if (!condition) throw new Err(message);
}
function invariantIntlContext(intl) {
	invariant(intl, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var DEFAULT_INTL_CONFIG = {
	...DEFAULT_INTL_CONFIG$1,
	textComponent: React$1.Fragment
};
var toKeyedReactNodeArray = (children) => {
	return React$1.Children.toArray(children).map((child, index) => {
		if (React$1.isValidElement(child)) return jsx(React$1.Fragment, { children: child }, index);
		return child;
	});
};
function assignUniqueKeysToParts(formatXMLElementFn) {
	return function(parts) {
		return formatXMLElementFn(toKeyedReactNodeArray(parts));
	};
}
function shallowEqual(objA, objB) {
	if (objA === objB) return true;
	if (!objA || !objB) return false;
	var aKeys = Object.keys(objA);
	var bKeys = Object.keys(objB);
	var len = aKeys.length;
	if (bKeys.length !== len) return false;
	for (var i = 0; i < len; i++) {
		var key = aKeys[i];
		if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) return false;
	}
	return true;
}
var IntlContext = React$1.createContext(null);
var Provider = IntlContext.Provider;
function useIntl() {
	const intl = React$1.useContext(IntlContext);
	invariantIntlContext(intl);
	return intl;
}
function assignUniqueKeysToFormatXMLElementFnArgument(values) {
	if (!values) return values;
	return Object.keys(values).reduce((acc, k) => {
		const v = values[k];
		acc[k] = isFormatXMLElementFn(v) ? assignUniqueKeysToParts(v) : v;
		return acc;
	}, {});
}
var formatMessage = (config, formatters, descriptor, rawValues, ...rest) => {
	const chunks = formatMessage$1(config, formatters, descriptor, assignUniqueKeysToFormatXMLElementFnArgument(rawValues), ...rest);
	if (Array.isArray(chunks)) return toKeyedReactNodeArray(chunks);
	return chunks;
};
var createIntl = ({ defaultRichTextElements: rawDefaultRichTextElements, ...config }, cache) => {
	const defaultRichTextElements = assignUniqueKeysToFormatXMLElementFnArgument(rawDefaultRichTextElements);
	const coreIntl = createIntl$1({
		...DEFAULT_INTL_CONFIG,
		...config,
		defaultRichTextElements
	}, cache);
	const resolvedConfig = {
		locale: coreIntl.locale,
		timeZone: coreIntl.timeZone,
		fallbackOnEmptyString: coreIntl.fallbackOnEmptyString,
		formats: coreIntl.formats,
		defaultLocale: coreIntl.defaultLocale,
		defaultFormats: coreIntl.defaultFormats,
		messages: coreIntl.messages,
		onError: coreIntl.onError,
		defaultRichTextElements
	};
	return {
		...coreIntl,
		formatMessage: formatMessage.bind(null, resolvedConfig, coreIntl.formatters),
		$t: formatMessage.bind(null, resolvedConfig, coreIntl.formatters)
	};
};
function processIntlConfig(config) {
	return {
		locale: config.locale,
		timeZone: config.timeZone,
		fallbackOnEmptyString: config.fallbackOnEmptyString,
		formats: config.formats,
		textComponent: config.textComponent,
		messages: config.messages,
		defaultLocale: config.defaultLocale,
		defaultFormats: config.defaultFormats,
		onError: config.onError,
		onWarn: config.onWarn,
		wrapRichTextChunksInFragment: config.wrapRichTextChunksInFragment,
		defaultRichTextElements: config.defaultRichTextElements
	};
}
function IntlProviderImpl(props) {
	const cacheRef = React$1.useRef(createIntlCache());
	const prevConfigRef = React$1.useRef(void 0);
	const intlRef = React$1.useRef(void 0);
	const filteredProps = {};
	for (const key in props) if (props[key] !== void 0) filteredProps[key] = props[key];
	const config = processIntlConfig({
		...DEFAULT_INTL_CONFIG,
		...filteredProps
	});
	if (!prevConfigRef.current || !shallowEqual(prevConfigRef.current, config)) {
		prevConfigRef.current = config;
		intlRef.current = createIntl(config, cacheRef.current);
	}
	invariantIntlContext(intlRef.current);
	return jsx(Provider, {
		value: intlRef.current,
		children: props.children
	});
}
IntlProviderImpl.displayName = "IntlProvider";
var IntlProvider = IntlProviderImpl;
function PreferencesSection() {
	const intl = useIntl();
	const languageId = useId();
	return jsxs("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [jsx("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: intl.formatMessage({ id: "preferences-section.preferences" })
		}), jsxs("div", {
			className: "space-y-4",
			children: [
				jsxs("div", {
					className: "flex items-center justify-between",
					children: [jsxs("div", { children: [jsx("p", {
						className: "text-sm font-medium text-foreground",
						children: intl.formatMessage({ id: "preferences-section.emailNotifications" })
					}), jsx("p", {
						className: "text-xs text-muted-foreground",
						children: intl.formatMessage({ id: "preferences-section.receiveWeeklyBenchmarkReports" })
					})] }), jsx("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": intl.formatMessage({ id: "preferences-section.toggleNotifications" }),
						children: jsx("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" })
					})]
				}),
				jsxs("div", {
					className: "flex items-center justify-between",
					children: [jsxs("div", { children: [jsx("p", {
						className: "text-sm font-medium text-foreground",
						children: intl.formatMessage({ id: "preferences-section.darkMode" })
					}), jsx("p", {
						className: "text-xs text-muted-foreground",
						children: intl.formatMessage({ id: "preferences-section.useDarkColorScheme" })
					})] }), jsx("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": intl.formatMessage({ id: "preferences-section.toggleDarkMode" }),
						children: jsx("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" })
					})]
				}),
				jsxs("div", { children: [jsx("label", {
					htmlFor: languageId,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: intl.formatMessage({ id: "preferences-section.defaultLanguage" })
				}), jsxs("select", {
					id: languageId,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						jsx("option", { children: intl.formatMessage({ id: "preferences-section.englishEn" }) }),
						jsx("option", { children: intl.formatMessage({ id: "preferences-section.frenchFr" }) }),
						jsx("option", { children: intl.formatMessage({ id: "preferences-section.germanDe" }) }),
						jsx("option", { children: intl.formatMessage({ id: "preferences-section.spanishEs" }) }),
						jsx("option", { children: intl.formatMessage({ id: "preferences-section.japaneseJa" }) }),
						jsx("option", { children: intl.formatMessage({ id: "preferences-section.chineseSimplifiedZhCn" }) }),
						jsx("option", { children: intl.formatMessage({ id: "preferences-section.arabicAr" }) })
					]
				})] })
			]
		})]
	});
}
var messageModules = {
	de,
	en: {
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
		"route.oopsPageNotFound": "Oops! Page not found",
		"route.returnToHome": "Return to Home",
		"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:",
		"theme-toggle.themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
		"theme-toggle.themeModeLightClick": "Theme mode: light. Click to switch to dark mode.",
		"theme-toggle.themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
		"theme-toggle.themeAuto": "Theme: Auto",
		"theme-toggle.themeDark": "Theme: Dark",
		"theme-toggle.themeLight": "Theme: Light",
		"hero.aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
		"hero.viewResults": "View Results",
		"why-it-matters.whyTheseMetricsMatter": "Why These Metrics Matter",
		"why-it-matters.bundleSize": "Bundle Size",
		"why-it-matters.theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
		"why-it-matters.renderingHydration": "Rendering & Hydration",
		"why-it-matters.connectingALargeJsonDictionary": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
		"why-it-matters.dynamicLoading": "Dynamic Loading",
		"why-it-matters.loadingAllTranslationsUpfrontOverloads": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
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
		"about-header.aboutThisBenchmark": "About This Benchmark",
		"about-header.thisIsAnOpenSource": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.",
		"about-grid.whyThisExists": "Why This Exists",
		"about-grid.choosingAnI18nLibraryIs": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
		"about-grid.methodology": "Methodology",
		"about-grid.theSame10PageApp": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
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
		"what-we-measure.whatWeMeasure": "What We Measure",
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
		"blog-list.readMore": "Read More →",
		"careers-header.title": "Careers",
		"careers-header.joinOurMissionToImprove": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.",
		"careers-benefits.workFromAnywhereInThe": "Work from anywhere in the world",
		"careers-benefits.competitivePay": "Competitive pay",
		"careers-benefits.topOfMarketCompensation": "Top-of-market compensation",
		"careers-benefits.openSourceTime": "Open source time",
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
		"contact-header.getInTouch": "Get in Touch",
		"contact-header.haveIdeasFoundABug": "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at",
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
		"faq-list.thereAreManyWaysTo": "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.",
		"pricing-header.simpleTransparentPricing": "Simple, Transparent Pricing",
		"pricing-header.chooseThePlanThatFits": "Choose the plan that fits your team. No hidden fees.",
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
		"products-header.toolsAndServicesToStreamline": "Tools and services to streamline your internationalization workflow.",
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
		"team-grid.managesCommunityContributionsPartnershipsAnd": "Manages community contributions, partnerships, and events. Background in open source governance.",
		"settings-header.manageYourAccountPreferencesAnd": "Manage your account preferences and configuration.",
		"profile-section.profile": "Profile",
		"profile-section.displayName": "Display Name",
		"profile-section.email": "Email",
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
		"api-access-section.apiAccess": "API Access",
		"api-access-section.apiKey": "API Key",
		"api-access-section.useThisKeyToAccess": "Use this key to access the benchmarking API programmatically.",
		"api-access-section.copy": "Copy",
		"settings-footer.cancel": "Cancel",
		"settings-footer.saveChanges": "Save Changes",
		mockBanner: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
	},
	es,
	fr,
	it,
	ja,
	ko,
	pt,
	ru,
	zh
};
function getMessages(locale) {
	return messageModules[locale] ?? messageModules["en"];
}
var messagesPromise = getMessages("en");
function Wrapper({ children }) {
	const messages = use(messagesPromise);
	return jsx(React.Suspense, {
		fallback: null,
		children: jsx(IntlProvider, {
			messages,
			locale: "en",
			defaultLocale: "en",
			children
		})
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(PreferencesSection, {}) });
}
export { Wrapped as default };
