import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var require_moo = __commonJSMin(((exports, module) => {
	(function(root, factory) {
		if (typeof define === "function" && define.amd) define([], factory);
		else if (typeof module === "object" && module.exports) module.exports = factory();
		else root.moo = factory();
	})(exports, function() {
		"use strict";
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		var toString = Object.prototype.toString;
		var hasSticky = typeof (/* @__PURE__ */ new RegExp()).sticky === "boolean";
		function isRegExp(o) {
			return o && toString.call(o) === "[object RegExp]";
		}
		function isObject(o) {
			return o && typeof o === "object" && !isRegExp(o) && !Array.isArray(o);
		}
		function reEscape(s) {
			return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, function(x) {
				if (x === "-") return "\\x2d";
				return "\\" + x;
			});
		}
		function reGroups(s) {
			return new RegExp("|" + s).exec("").length - 1;
		}
		function reCapture(s) {
			return "(" + s + ")";
		}
		function reUnion(regexps) {
			if (!regexps.length) return "(?!)";
			return "(?:" + regexps.map(function(s) {
				return "(?:" + s + ")";
			}).join("|") + ")";
		}
		function regexpOrLiteral(obj) {
			if (typeof obj === "string") return "(?:" + reEscape(obj) + ")";
			else if (isRegExp(obj)) {
				if (obj.ignoreCase) throw new Error("RegExp /i flag not allowed");
				if (obj.global) throw new Error("RegExp /g flag is implied");
				if (obj.sticky) throw new Error("RegExp /y flag is implied");
				if (obj.multiline) throw new Error("RegExp /m flag is implied");
				return obj.source;
			} else throw new Error("Not a pattern: " + obj);
		}
		function pad(s, length) {
			if (s.length > length) return s;
			return Array(length - s.length + 1).join(" ") + s;
		}
		function lastNLines(string, numLines) {
			var position = string.length;
			var lineBreaks = 0;
			while (true) {
				var idx = string.lastIndexOf("\n", position - 1);
				if (idx === -1) break;
				else lineBreaks++;
				position = idx;
				if (lineBreaks === numLines) break;
				if (position === 0) break;
			}
			var startPosition = lineBreaks < numLines ? 0 : position + 1;
			return string.substring(startPosition).split("\n");
		}
		function objectToRules(object) {
			var keys = Object.getOwnPropertyNames(object);
			var result = [];
			for (var i = 0; i < keys.length; i++) {
				var key = keys[i];
				var thing = object[key];
				var rules = [].concat(thing);
				if (key === "include") {
					for (var j = 0; j < rules.length; j++) result.push({ include: rules[j] });
					continue;
				}
				var match = [];
				rules.forEach(function(rule) {
					if (isObject(rule)) {
						if (match.length) result.push(ruleOptions(key, match));
						result.push(ruleOptions(key, rule));
						match = [];
					} else match.push(rule);
				});
				if (match.length) result.push(ruleOptions(key, match));
			}
			return result;
		}
		function arrayToRules(array) {
			var result = [];
			for (var i = 0; i < array.length; i++) {
				var obj = array[i];
				if (obj.include) {
					var include = [].concat(obj.include);
					for (var j = 0; j < include.length; j++) result.push({ include: include[j] });
					continue;
				}
				if (!obj.type) throw new Error("Rule has no type: " + JSON.stringify(obj));
				result.push(ruleOptions(obj.type, obj));
			}
			return result;
		}
		function ruleOptions(type, obj) {
			if (!isObject(obj)) obj = { match: obj };
			if (obj.include) throw new Error("Matching rules cannot also include states");
			var options = {
				defaultType: type,
				lineBreaks: !!obj.error || !!obj.fallback,
				pop: false,
				next: null,
				push: null,
				error: false,
				fallback: false,
				value: null,
				type: null,
				shouldThrow: false
			};
			for (var key in obj) if (hasOwnProperty.call(obj, key)) options[key] = obj[key];
			if (typeof options.type === "string" && type !== options.type) throw new Error("Type transform cannot be a string (type '" + options.type + "' for token '" + type + "')");
			var match = options.match;
			options.match = Array.isArray(match) ? match : match ? [match] : [];
			options.match.sort(function(a, b) {
				return isRegExp(a) && isRegExp(b) ? 0 : isRegExp(b) ? -1 : isRegExp(a) ? 1 : b.length - a.length;
			});
			return options;
		}
		function toRules(spec) {
			return Array.isArray(spec) ? arrayToRules(spec) : objectToRules(spec);
		}
		var defaultErrorRule = ruleOptions("error", {
			lineBreaks: true,
			shouldThrow: true
		});
		function compileRules(rules, hasStates) {
			var errorRule = null;
			var fast = Object.create(null);
			var fastAllowed = true;
			var unicodeFlag = null;
			var groups = [];
			var parts = [];
			for (var i = 0; i < rules.length; i++) if (rules[i].fallback) fastAllowed = false;
			for (var i = 0; i < rules.length; i++) {
				var options = rules[i];
				if (options.include) throw new Error("Inheritance is not allowed in stateless lexers");
				if (options.error || options.fallback) {
					if (errorRule) if (!options.fallback === !errorRule.fallback) throw new Error("Multiple " + (options.fallback ? "fallback" : "error") + " rules not allowed (for token '" + options.defaultType + "')");
					else throw new Error("fallback and error are mutually exclusive (for token '" + options.defaultType + "')");
					errorRule = options;
				}
				var match = options.match.slice();
				if (fastAllowed) while (match.length && typeof match[0] === "string" && match[0].length === 1) {
					var word = match.shift();
					fast[word.charCodeAt(0)] = options;
				}
				if (options.pop || options.push || options.next) {
					if (!hasStates) throw new Error("State-switching options are not allowed in stateless lexers (for token '" + options.defaultType + "')");
					if (options.fallback) throw new Error("State-switching options are not allowed on fallback tokens (for token '" + options.defaultType + "')");
				}
				if (match.length === 0) continue;
				fastAllowed = false;
				groups.push(options);
				for (var j = 0; j < match.length; j++) {
					var obj = match[j];
					if (!isRegExp(obj)) continue;
					if (unicodeFlag === null) unicodeFlag = obj.unicode;
					else if (unicodeFlag !== obj.unicode && options.fallback === false) throw new Error("If one rule is /u then all must be");
				}
				var pat = reUnion(match.map(regexpOrLiteral));
				var regexp = new RegExp(pat);
				if (regexp.test("")) throw new Error("RegExp matches empty string: " + regexp);
				if (reGroups(pat) > 0) throw new Error("RegExp has capture groups: " + regexp + "\nUse (?: … ) instead");
				if (!options.lineBreaks && regexp.test("\n")) throw new Error("Rule should declare lineBreaks: " + regexp);
				parts.push(reCapture(pat));
			}
			var fallbackRule = errorRule && errorRule.fallback;
			var flags = hasSticky && !fallbackRule ? "ym" : "gm";
			var suffix = hasSticky || fallbackRule ? "" : "|";
			if (unicodeFlag === true) flags += "u";
			return {
				regexp: new RegExp(reUnion(parts) + suffix, flags),
				groups,
				fast,
				error: errorRule || defaultErrorRule
			};
		}
		function compile(rules) {
			return new Lexer({ start: compileRules(toRules(rules)) }, "start");
		}
		function checkStateGroup(g, name, map) {
			var state = g && (g.push || g.next);
			if (state && !map[state]) throw new Error("Missing state '" + state + "' (in token '" + g.defaultType + "' of state '" + name + "')");
			if (g && g.pop && +g.pop !== 1) throw new Error("pop must be 1 (in token '" + g.defaultType + "' of state '" + name + "')");
		}
		function compileStates(states, start) {
			var all = states.$all ? toRules(states.$all) : [];
			delete states.$all;
			var keys = Object.getOwnPropertyNames(states);
			if (!start) start = keys[0];
			var ruleMap = Object.create(null);
			for (var i = 0; i < keys.length; i++) {
				var key = keys[i];
				ruleMap[key] = toRules(states[key]).concat(all);
			}
			for (var i = 0; i < keys.length; i++) {
				var key = keys[i];
				var rules = ruleMap[key];
				var included = Object.create(null);
				for (var j = 0; j < rules.length; j++) {
					var rule = rules[j];
					if (!rule.include) continue;
					var splice = [j, 1];
					if (rule.include !== key && !included[rule.include]) {
						included[rule.include] = true;
						var newRules = ruleMap[rule.include];
						if (!newRules) throw new Error("Cannot include nonexistent state '" + rule.include + "' (in state '" + key + "')");
						for (var k = 0; k < newRules.length; k++) {
							var newRule = newRules[k];
							if (rules.indexOf(newRule) !== -1) continue;
							splice.push(newRule);
						}
					}
					rules.splice.apply(rules, splice);
					j--;
				}
			}
			var map = Object.create(null);
			for (var i = 0; i < keys.length; i++) {
				var key = keys[i];
				map[key] = compileRules(ruleMap[key], true);
			}
			for (var i = 0; i < keys.length; i++) {
				var name = keys[i];
				var state = map[name];
				var groups = state.groups;
				for (var j = 0; j < groups.length; j++) checkStateGroup(groups[j], name, map);
				var fastKeys = Object.getOwnPropertyNames(state.fast);
				for (var j = 0; j < fastKeys.length; j++) checkStateGroup(state.fast[fastKeys[j]], name, map);
			}
			return new Lexer(map, start);
		}
		function keywordTransform(map) {
			var isMap = typeof Map !== "undefined";
			var reverseMap = isMap ? /* @__PURE__ */ new Map() : Object.create(null);
			var types = Object.getOwnPropertyNames(map);
			for (var i = 0; i < types.length; i++) {
				var tokenType = types[i];
				var item = map[tokenType];
				(Array.isArray(item) ? item : [item]).forEach(function(keyword) {
					if (typeof keyword !== "string") throw new Error("keyword must be string (in keyword '" + tokenType + "')");
					if (isMap) reverseMap.set(keyword, tokenType);
					else reverseMap[keyword] = tokenType;
				});
			}
			return function(k) {
				return isMap ? reverseMap.get(k) : reverseMap[k];
			};
		}
		var Lexer = function(states, state) {
			this.startState = state;
			this.states = states;
			this.buffer = "";
			this.stack = [];
			this.reset();
		};
		Lexer.prototype.reset = function(data, info) {
			this.buffer = data || "";
			this.index = 0;
			this.line = info ? info.line : 1;
			this.col = info ? info.col : 1;
			this.queuedToken = info ? info.queuedToken : null;
			this.queuedText = info ? info.queuedText : "";
			this.queuedThrow = info ? info.queuedThrow : null;
			this.setState(info ? info.state : this.startState);
			this.stack = info && info.stack ? info.stack.slice() : [];
			return this;
		};
		Lexer.prototype.save = function() {
			return {
				line: this.line,
				col: this.col,
				state: this.state,
				stack: this.stack.slice(),
				queuedToken: this.queuedToken,
				queuedText: this.queuedText,
				queuedThrow: this.queuedThrow
			};
		};
		Lexer.prototype.setState = function(state) {
			if (!state || this.state === state) return;
			this.state = state;
			var info = this.states[state];
			this.groups = info.groups;
			this.error = info.error;
			this.re = info.regexp;
			this.fast = info.fast;
		};
		Lexer.prototype.popState = function() {
			this.setState(this.stack.pop());
		};
		Lexer.prototype.pushState = function(state) {
			this.stack.push(this.state);
			this.setState(state);
		};
		var eat = hasSticky ? function(re, buffer) {
			return re.exec(buffer);
		} : function(re, buffer) {
			var match = re.exec(buffer);
			if (match[0].length === 0) return null;
			return match;
		};
		Lexer.prototype._getGroup = function(match) {
			var groupCount = this.groups.length;
			for (var i = 0; i < groupCount; i++) if (match[i + 1] !== void 0) return this.groups[i];
			throw new Error("Cannot find token type for matched text");
		};
		function tokenToString() {
			return this.value;
		}
		Lexer.prototype.next = function() {
			var index = this.index;
			if (this.queuedGroup) {
				var token = this._token(this.queuedGroup, this.queuedText, index);
				this.queuedGroup = null;
				this.queuedText = "";
				return token;
			}
			var buffer = this.buffer;
			if (index === buffer.length) return;
			var group = this.fast[buffer.charCodeAt(index)];
			if (group) return this._token(group, buffer.charAt(index), index);
			var re = this.re;
			re.lastIndex = index;
			var match = eat(re, buffer);
			var error = this.error;
			if (match == null) return this._token(error, buffer.slice(index, buffer.length), index);
			var group = this._getGroup(match);
			var text = match[0];
			if (error.fallback && match.index !== index) {
				this.queuedGroup = group;
				this.queuedText = text;
				return this._token(error, buffer.slice(index, match.index), index);
			}
			return this._token(group, text, index);
		};
		Lexer.prototype._token = function(group, text, offset) {
			var lineBreaks = 0;
			if (group.lineBreaks) {
				var matchNL = /\n/g;
				var nl = 1;
				if (text === "\n") lineBreaks = 1;
				else while (matchNL.exec(text)) {
					lineBreaks++;
					nl = matchNL.lastIndex;
				}
			}
			var token = {
				type: typeof group.type === "function" && group.type(text) || group.defaultType,
				value: typeof group.value === "function" ? group.value(text) : text,
				text,
				toString: tokenToString,
				offset,
				lineBreaks,
				line: this.line,
				col: this.col
			};
			var size = text.length;
			this.index += size;
			this.line += lineBreaks;
			if (lineBreaks !== 0) this.col = size - nl + 1;
			else this.col += size;
			if (group.shouldThrow) throw new Error(this.formatError(token, "invalid syntax"));
			if (group.pop) this.popState();
			else if (group.push) this.pushState(group.push);
			else if (group.next) this.setState(group.next);
			return token;
		};
		if (typeof Symbol !== "undefined" && Symbol.iterator) {
			var LexerIterator = function(lexer) {
				this.lexer = lexer;
			};
			LexerIterator.prototype.next = function() {
				var token = this.lexer.next();
				return {
					value: token,
					done: !token
				};
			};
			LexerIterator.prototype[Symbol.iterator] = function() {
				return this;
			};
			Lexer.prototype[Symbol.iterator] = function() {
				return new LexerIterator(this);
			};
		}
		Lexer.prototype.formatError = function(token, message) {
			if (token == null) {
				var text = this.buffer.slice(this.index);
				var token = {
					text,
					offset: this.index,
					lineBreaks: text.indexOf("\n") === -1 ? 0 : 1,
					line: this.line,
					col: this.col
				};
			}
			var numLinesAround = 2;
			var firstDisplayedLine = Math.max(token.line - numLinesAround, 1);
			var lastDisplayedLine = token.line + numLinesAround;
			var lastLineDigits = String(lastDisplayedLine).length;
			var displayedLines = lastNLines(this.buffer, this.line - token.line + numLinesAround + 1).slice(0, 5);
			var errorLines = [];
			errorLines.push(message + " at line " + token.line + " col " + token.col + ":");
			errorLines.push("");
			for (var i = 0; i < displayedLines.length; i++) {
				var line = displayedLines[i];
				var lineNo = firstDisplayedLine + i;
				errorLines.push(pad(String(lineNo), lastLineDigits) + "  " + line);
				if (lineNo === token.line) errorLines.push(pad("", lastLineDigits + token.col + 1) + "^");
			}
			return errorLines.join("\n");
		};
		Lexer.prototype.clone = function() {
			return new Lexer(this.states, this.state);
		};
		Lexer.prototype.has = function(tokenType) {
			return true;
		};
		return {
			compile,
			states: compileStates,
			error: Object.freeze({ error: true }),
			fallback: Object.freeze({ fallback: true }),
			keywords: keywordTransform
		};
	});
}));
var require_lexer = __commonJSMin(((exports) => {
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.lexer = exports.states = void 0;
	var moo_1 = __importDefault(require_moo());
	exports.states = {
		body: {
			doubleapos: {
				match: "''",
				value: () => "'"
			},
			quoted: {
				lineBreaks: true,
				match: /'[{}#](?:[^']|'')*'(?!')/u,
				value: (src) => src.slice(1, -1).replace(/''/g, "'")
			},
			argument: {
				lineBreaks: true,
				match: /\{\s*[^\p{Pat_Syn}\p{Pat_WS}]+\s*/u,
				push: "arg",
				value: (src) => src.substring(1).trim()
			},
			octothorpe: "#",
			end: {
				match: "}",
				pop: 1
			},
			content: {
				lineBreaks: true,
				match: /[^][^{}#']*/u
			}
		},
		arg: {
			select: {
				lineBreaks: true,
				match: /,\s*(?:plural|select|selectordinal)\s*,\s*/u,
				next: "select",
				value: (src) => src.split(",")[1].trim()
			},
			"func-args": {
				lineBreaks: true,
				match: /,\s*[^\p{Pat_Syn}\p{Pat_WS}]+\s*,/u,
				next: "body",
				value: (src) => src.split(",")[1].trim()
			},
			"func-simple": {
				lineBreaks: true,
				match: /,\s*[^\p{Pat_Syn}\p{Pat_WS}]+\s*/u,
				value: (src) => src.substring(1).trim()
			},
			end: {
				match: "}",
				pop: 1
			}
		},
		select: {
			offset: {
				lineBreaks: true,
				match: /\s*offset\s*:\s*\d+\s*/u,
				value: (src) => src.split(":")[1].trim()
			},
			case: {
				lineBreaks: true,
				match: /\s*(?:=\d+|[^\p{Pat_Syn}\p{Pat_WS}]+)\s*\{/u,
				push: "body",
				value: (src) => src.substring(0, src.indexOf("{")).trim()
			},
			end: {
				match: /\s*\}/u,
				pop: 1
			}
		}
	};
	exports.lexer = moo_1.default.states(exports.states);
}));
var import_parser = __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ParseError = void 0;
	exports.parse = parse;
	var lexer_js_1 = require_lexer();
	var getContext = (lt) => ({
		offset: lt.offset,
		line: lt.line,
		col: lt.col,
		text: lt.text,
		lineBreaks: lt.lineBreaks
	});
	var isSelectType = (type) => type === "plural" || type === "select" || type === "selectordinal";
	function strictArgStyleParam(lt, param) {
		let value = "";
		let text = "";
		for (const p of param) {
			const pText = p.ctx.text;
			text += pText;
			switch (p.type) {
				case "content":
					value += p.value;
					break;
				case "argument":
				case "function":
				case "octothorpe":
					value += pText;
					break;
				default: throw new ParseError(lt, `Unsupported part in strict mode function arg style: ${pText}`);
			}
		}
		return [{
			type: "content",
			value: value.trim(),
			ctx: Object.assign({}, param[0].ctx, { text })
		}];
	}
	var strictArgTypes = [
		"number",
		"date",
		"time",
		"spellout",
		"ordinal",
		"duration"
	];
	var defaultPluralKeys = [
		"zero",
		"one",
		"two",
		"few",
		"many",
		"other"
	];
	var ParseError = class extends Error {
		constructor(lt, msg) {
			super(lexer_js_1.lexer.formatError(lt, msg));
		}
	};
	exports.ParseError = ParseError;
	var Parser = class {
		constructor(src, opt) {
			var _a, _b, _c, _d;
			this.lexer = lexer_js_1.lexer.reset(src);
			this.cardinalKeys = (_a = opt === null || opt === void 0 ? void 0 : opt.cardinal) !== null && _a !== void 0 ? _a : defaultPluralKeys;
			this.ordinalKeys = (_b = opt === null || opt === void 0 ? void 0 : opt.ordinal) !== null && _b !== void 0 ? _b : defaultPluralKeys;
			this.strict = (_c = opt === null || opt === void 0 ? void 0 : opt.strict) !== null && _c !== void 0 ? _c : false;
			this.strictPluralKeys = (_d = opt === null || opt === void 0 ? void 0 : opt.strictPluralKeys) !== null && _d !== void 0 ? _d : true;
		}
		parse() {
			return this.parseBody(false, true);
		}
		checkSelectKey(lt, type, key) {
			if (key[0] === "=") {
				if (type === "select") throw new ParseError(lt, `The case ${key} is not valid with select`);
			} else if (type !== "select") {
				const keys = type === "plural" ? this.cardinalKeys : this.ordinalKeys;
				if (this.strictPluralKeys && keys.length > 0 && !keys.includes(key)) throw new ParseError(lt, `The ${type} case ${key} is not valid in this locale`);
			}
		}
		parseSelect({ value: arg }, inPlural, ctx, type) {
			const sel = {
				type,
				arg,
				cases: [],
				ctx
			};
			if (type === "plural" || type === "selectordinal") inPlural = true;
			else if (this.strict) inPlural = false;
			for (const lt of this.lexer) switch (lt.type) {
				case "offset":
					if (type === "select") throw new ParseError(lt, "Unexpected plural offset for select");
					if (sel.cases.length > 0) throw new ParseError(lt, "Plural offset must be set before cases");
					sel.pluralOffset = Number(lt.value);
					ctx.text += lt.text;
					ctx.lineBreaks += lt.lineBreaks;
					break;
				case "case":
					this.checkSelectKey(lt, type, lt.value);
					sel.cases.push({
						key: lt.value,
						tokens: this.parseBody(inPlural),
						ctx: getContext(lt)
					});
					break;
				case "end": return sel;
				default: throw new ParseError(lt, `Unexpected lexer token: ${lt.type}`);
			}
			throw new ParseError(null, "Unexpected message end");
		}
		parseArgToken(lt, inPlural) {
			const ctx = getContext(lt);
			const argType = this.lexer.next();
			if (!argType) throw new ParseError(null, "Unexpected message end");
			ctx.text += argType.text;
			ctx.lineBreaks += argType.lineBreaks;
			if (this.strict && (argType.type === "func-simple" || argType.type === "func-args") && !strictArgTypes.includes(argType.value)) throw new ParseError(lt, `Invalid strict mode function arg type: ${argType.value}`);
			switch (argType.type) {
				case "end": return {
					type: "argument",
					arg: lt.value,
					ctx
				};
				case "func-simple": {
					const end = this.lexer.next();
					if (!end) throw new ParseError(null, "Unexpected message end");
					if (end.type !== "end") throw new ParseError(end, `Unexpected lexer token: ${end.type}`);
					ctx.text += end.text;
					if (isSelectType(argType.value.toLowerCase())) throw new ParseError(argType, `Invalid type identifier: ${argType.value}`);
					return {
						type: "function",
						arg: lt.value,
						key: argType.value,
						ctx
					};
				}
				case "func-args": {
					if (isSelectType(argType.value.toLowerCase())) throw new ParseError(argType, `Invalid type identifier: ${argType.value}`);
					let param = this.parseBody(this.strict ? false : inPlural);
					if (this.strict && param.length > 0) param = strictArgStyleParam(lt, param);
					return {
						type: "function",
						arg: lt.value,
						key: argType.value,
						param,
						ctx
					};
				}
				case "select": if (isSelectType(argType.value)) return this.parseSelect(lt, inPlural, ctx, argType.value);
				else throw new ParseError(argType, `Unexpected select type ${argType.value}`);
				default: throw new ParseError(argType, `Unexpected lexer token: ${argType.type}`);
			}
		}
		parseBody(inPlural, atRoot) {
			const tokens = [];
			let content = null;
			for (const lt of this.lexer) if (lt.type === "argument") {
				if (content) content = null;
				tokens.push(this.parseArgToken(lt, inPlural));
			} else if (lt.type === "octothorpe" && inPlural) {
				if (content) content = null;
				tokens.push({
					type: "octothorpe",
					ctx: getContext(lt)
				});
			} else if (lt.type === "end" && !atRoot) return tokens;
			else {
				let value = lt.value;
				if (!inPlural && lt.type === "quoted" && value[0] === "#") {
					if (value.includes("{")) throw new ParseError(lt, `Unsupported escape pattern: ${value}`);
					value = lt.text;
				}
				if (content) {
					content.value += value;
					content.ctx.text += lt.text;
					content.ctx.lineBreaks += lt.lineBreaks;
				} else {
					content = {
						type: "content",
						value,
						ctx: getContext(lt)
					};
					tokens.push(content);
				}
			}
			if (atRoot) return tokens;
			throw new ParseError(null, "Unexpected message end");
		}
	};
	function parse(src, options = {}) {
		return new Parser(src, options).parse();
	}
}))();
var DateFormatError = class extends Error {
	constructor(msg, token, type) {
		super(msg);
		this.token = token;
		this.type = type || "error";
	}
};
var alpha = (width) => width < 4 ? "short" : width === 4 ? "long" : "narrow";
var numeric = (width) => width % 2 === 0 ? "2-digit" : "numeric";
function yearOptions(token, onError) {
	switch (token.char) {
		case "y": return { year: numeric(token.width) };
		case "r": return {
			calendar: "gregory",
			year: "numeric"
		};
		default:
			onError(`${token.desc} is not supported; falling back to year:numeric`, DateFormatError.WARNING);
			return { year: "numeric" };
	}
}
function monthStyle(token, onError) {
	switch (token.width) {
		case 1: return "numeric";
		case 2: return "2-digit";
		case 3: return "short";
		case 4: return "long";
		case 5: return "narrow";
		default:
			onError(`${token.desc} is not supported with width ${token.width}`);
			return;
	}
}
function dayStyle(token, onError) {
	const { char, desc, width } = token;
	if (char === "d") return numeric(width);
	else {
		onError(`${desc} is not supported`);
		return;
	}
}
function weekdayStyle(token, onError) {
	const { char, desc, width } = token;
	if ((char === "c" || char === "e") && width < 3) onError(`Numeric value is not supported for ${desc}; falling back to weekday:short`, DateFormatError.WARNING);
	return alpha(width);
}
function hourOptions(token) {
	const hour = numeric(token.width);
	let hourCycle;
	switch (token.char) {
		case "h":
			hourCycle = "h12";
			break;
		case "H":
			hourCycle = "h23";
			break;
		case "k":
			hourCycle = "h24";
			break;
		case "K":
			hourCycle = "h11";
			break;
	}
	return hourCycle ? {
		hour,
		hourCycle
	} : { hour };
}
function timeZoneNameStyle(token, onError) {
	const { char, desc, width } = token;
	switch (char) {
		case "v":
		case "z": return width === 4 ? "long" : "short";
		case "V":
			if (width === 4) return "long";
			onError(`${desc} is not supported with width ${width}`);
			return;
		case "X":
			onError(`${desc} is not supported`);
			return;
	}
	return "short";
}
function compileOptions(token, onError) {
	switch (token.field) {
		case "era": return { era: alpha(token.width) };
		case "year": return yearOptions(token, onError);
		case "month": return { month: monthStyle(token, onError) };
		case "day": return { day: dayStyle(token, onError) };
		case "weekday": return { weekday: weekdayStyle(token, onError) };
		case "period": return;
		case "hour": return hourOptions(token);
		case "min": return { minute: numeric(token.width) };
		case "sec": return { second: numeric(token.width) };
		case "tz": return { timeZoneName: timeZoneNameStyle(token, onError) };
		case "quarter":
		case "week":
		case "sec-frac":
		case "ms": onError(`${token.desc} is not supported`);
	}
}
function getDateFormatOptions(tokens, timeZone, onError = (error) => {
	throw error;
}) {
	const options = { timeZone };
	const fields = [];
	for (const token of tokens) {
		const { error, field, str } = token;
		if (error) {
			const dte = new DateFormatError(error.message, token);
			dte.stack = error.stack;
			onError(dte);
		}
		if (str) onError(new DateFormatError(`Ignoring string part: ${str}`, token, DateFormatError.WARNING));
		if (field) if (fields.indexOf(field) === -1) fields.push(field);
		else onError(new DateFormatError(`Duplicate ${field} token`, token));
		const opt = compileOptions(token, (msg, isWarning) => onError(new DateFormatError(msg, token, isWarning)));
		if (opt) Object.assign(options, opt);
	}
	return options;
}
var fields = {
	G: {
		field: "era",
		desc: "Era"
	},
	y: {
		field: "year",
		desc: "Year"
	},
	Y: {
		field: "year",
		desc: "Year of \"Week of Year\""
	},
	u: {
		field: "year",
		desc: "Extended year"
	},
	U: {
		field: "year",
		desc: "Cyclic year name"
	},
	r: {
		field: "year",
		desc: "Related Gregorian year"
	},
	Q: {
		field: "quarter",
		desc: "Quarter"
	},
	q: {
		field: "quarter",
		desc: "Stand-alone quarter"
	},
	M: {
		field: "month",
		desc: "Month in year"
	},
	L: {
		field: "month",
		desc: "Stand-alone month in year"
	},
	w: {
		field: "week",
		desc: "Week of year"
	},
	W: {
		field: "week",
		desc: "Week of month"
	},
	d: {
		field: "day",
		desc: "Day in month"
	},
	D: {
		field: "day",
		desc: "Day of year"
	},
	F: {
		field: "day",
		desc: "Day of week in month"
	},
	g: {
		field: "day",
		desc: "Modified julian day"
	},
	E: {
		field: "weekday",
		desc: "Day of week"
	},
	e: {
		field: "weekday",
		desc: "Local day of week"
	},
	c: {
		field: "weekday",
		desc: "Stand-alone local day of week"
	},
	a: {
		field: "period",
		desc: "AM/PM marker"
	},
	b: {
		field: "period",
		desc: "AM/PM/noon/midnight marker"
	},
	B: {
		field: "period",
		desc: "Flexible day period"
	},
	h: {
		field: "hour",
		desc: "Hour in AM/PM (1~12)"
	},
	H: {
		field: "hour",
		desc: "Hour in day (0~23)"
	},
	k: {
		field: "hour",
		desc: "Hour in day (1~24)"
	},
	K: {
		field: "hour",
		desc: "Hour in AM/PM (0~11)"
	},
	j: {
		field: "hour",
		desc: "Hour in preferred cycle"
	},
	J: {
		field: "hour",
		desc: "Hour in preferred cycle without marker"
	},
	C: {
		field: "hour",
		desc: "Hour in preferred cycle with flexible marker"
	},
	m: {
		field: "min",
		desc: "Minute in hour"
	},
	s: {
		field: "sec",
		desc: "Second in minute"
	},
	S: {
		field: "sec-frac",
		desc: "Fractional second"
	},
	A: {
		field: "ms",
		desc: "Milliseconds in day"
	},
	z: {
		field: "tz",
		desc: "Time Zone: specific non-location"
	},
	Z: {
		field: "tz",
		desc: "Time Zone"
	},
	O: {
		field: "tz",
		desc: "Time Zone: localized"
	},
	v: {
		field: "tz",
		desc: "Time Zone: generic non-location"
	},
	V: {
		field: "tz",
		desc: "Time Zone: ID"
	},
	X: {
		field: "tz",
		desc: "Time Zone: ISO8601 with Z"
	},
	x: {
		field: "tz",
		desc: "Time Zone: ISO8601"
	}
};
var isLetter = (char) => char >= "A" && char <= "Z" || char >= "a" && char <= "z";
function readFieldToken(src, pos) {
	const char = src[pos];
	let width = 1;
	while (src[++pos] === char) ++width;
	const field = fields[char];
	if (!field) {
		const msg = `The letter ${char} is not a valid field identifier`;
		return {
			char,
			error: new Error(msg),
			width
		};
	}
	return {
		char,
		field: field.field,
		desc: field.desc,
		width
	};
}
function readQuotedToken(src, pos) {
	let str = src[++pos];
	let width = 2;
	if (str === "'") return {
		char: "'",
		str,
		width
	};
	while (true) {
		const next = src[++pos];
		++width;
		if (next === void 0) {
			const msg = `Unterminated quoted literal in pattern: ${str || src}`;
			return {
				char: "'",
				error: new Error(msg),
				str,
				width
			};
		} else if (next === "'") if (src[++pos] !== "'") return {
			char: "'",
			str,
			width
		};
		else ++width;
		str += next;
	}
}
function readToken(src, pos) {
	const char = src[pos];
	if (!char) return null;
	if (isLetter(char)) return readFieldToken(src, pos);
	if (char === "'") return readQuotedToken(src, pos);
	let str = char;
	let width = 1;
	while (true) {
		const next = src[++pos];
		if (!next || isLetter(next) || next === "'") return {
			char,
			str,
			width
		};
		str += next;
		width += 1;
	}
}
function parseDateTokens(src) {
	const tokens = [];
	let pos = 0;
	while (true) {
		const token = readToken(src, pos);
		if (!token) return tokens;
		tokens.push(token);
		pos += token.width;
	}
}
function processTokens(tokens, mapText) {
	if (!tokens.filter((token) => token.type !== "content").length) return tokens.map((token) => mapText(token.value));
	return tokens.map((token) => {
		if (token.type === "content") return mapText(token.value);
		else if (token.type === "octothorpe") return "#";
		else if (token.type === "argument") return [token.arg];
		else if (token.type === "function") {
			const _param = token?.param?.[0];
			if (token.key === "date" && _param) {
				const opts = compileDateExpression(_param.value.trim(), (e) => {
					throw new Error(`Unable to compile date expression: ${e.message}`);
				});
				return [
					token.arg,
					token.key,
					opts
				];
			}
			if (_param) return [
				token.arg,
				token.key,
				_param.value.trim()
			];
			else return [token.arg, token.key];
		}
		const offset = token.pluralOffset;
		const formatProps = {};
		token.cases.forEach(({ key, tokens: tokens2 }) => {
			const prop = key[0] === "=" ? key.slice(1) : key;
			formatProps[prop] = processTokens(tokens2, mapText);
		});
		return [
			token.arg,
			token.type,
			{
				offset,
				...formatProps
			}
		];
	});
}
function compileDateExpression(format, onError) {
	if (/^::/.test(format)) return getDateFormatOptions(parseDateTokens(format.substring(2)), void 0, onError);
	return format;
}
function compileMessageOrThrow(message, mapText = (v) => v) {
	return processTokens((0, import_parser.parse)(message), mapText);
}
function compileMessage(message, mapText = (v) => v) {
	try {
		return compileMessageOrThrow(message, mapText);
	} catch (e) {
		console.error(`${e.message} 

Message: ${message}`);
		return [message];
	}
}
var isString = (s) => typeof s === "string";
var isFunction = (f) => typeof f === "function";
var cache = /* @__PURE__ */ new Map();
var defaultLocale = "en";
function normalizeLocales(locales) {
	return [...Array.isArray(locales) ? locales : [locales], defaultLocale];
}
function date(locales, value, format) {
	const _locales = normalizeLocales(locales);
	if (!format) format = "default";
	let o;
	if (typeof format === "string") {
		o = {
			day: "numeric",
			month: "short",
			year: "numeric"
		};
		switch (format) {
			case "full": o.weekday = "long";
			case "long":
				o.month = "long";
				break;
			case "short":
				o.month = "numeric";
				break;
		}
	} else o = format;
	return getMemoized(() => cacheKey("date", _locales, format), () => new Intl.DateTimeFormat(_locales, o)).format(isString(value) ? new Date(value) : value);
}
function time(locales, value, format) {
	let o;
	if (!format) format = "default";
	if (typeof format === "string") {
		o = {
			second: "numeric",
			minute: "numeric",
			hour: "numeric"
		};
		switch (format) {
			case "full":
			case "long":
				o.timeZoneName = "short";
				break;
			case "short": delete o.second;
		}
	} else o = format;
	return date(locales, value, o);
}
function number(locales, value, format) {
	const _locales = normalizeLocales(locales);
	return getMemoized(() => cacheKey("number", _locales, format), () => new Intl.NumberFormat(_locales, format)).format(value);
}
function plural(locales, ordinal, value, { offset = 0, ...rules }) {
	const _locales = normalizeLocales(locales);
	const plurals = ordinal ? getMemoized(() => cacheKey("plural-ordinal", _locales), () => new Intl.PluralRules(_locales, { type: "ordinal" })) : getMemoized(() => cacheKey("plural-cardinal", _locales), () => new Intl.PluralRules(_locales, { type: "cardinal" }));
	return rules[value] ?? rules[plurals.select(value - offset)] ?? rules.other;
}
function getMemoized(getKey, construct) {
	const key = getKey();
	let formatter = cache.get(key);
	if (!formatter) {
		formatter = construct();
		cache.set(key, formatter);
	}
	return formatter;
}
function cacheKey(type, locales, options) {
	return `${type}-${locales.join("-")}-${JSON.stringify(options)}`;
}
var ESCAPE_SEQUENCE_REGEX = /\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/;
var decodeEscapeSequences = (str) => {
	return str.replace(/\\u([a-fA-F0-9]{4})|\\x([a-fA-F0-9]{2})/g, (_, unicode, hex) => {
		if (unicode) {
			const codePoint = parseInt(unicode, 16);
			return String.fromCharCode(codePoint);
		} else {
			const codePoint = parseInt(hex, 16);
			return String.fromCharCode(codePoint);
		}
	});
};
var OCTOTHORPE_PH = "%__lingui_octothorpe__%";
var getDefaultFormats = (locale, passedLocales, formats = {}) => {
	const locales = passedLocales || locale;
	const style = (format) => {
		if (typeof format === "object") return format;
		return formats[format];
	};
	const replaceOctothorpe = (value, message) => {
		const valueStr = number(locales, value, Object.keys(formats).length ? style("number") : void 0);
		return message.replace(new RegExp(OCTOTHORPE_PH, "g"), valueStr);
	};
	return {
		plural: (value, cases) => {
			const { offset = 0 } = cases;
			const message = plural(locales, false, value, cases);
			return replaceOctothorpe(value - offset, message);
		},
		selectordinal: (value, cases) => {
			const { offset = 0 } = cases;
			const message = plural(locales, true, value, cases);
			return replaceOctothorpe(value - offset, message);
		},
		select: selectFormatter,
		number: (value, format) => number(locales, value, style(format) || { style: format }),
		date: (value, format) => date(locales, value, style(format) || format),
		time: (value, format) => time(locales, value, style(format) || format)
	};
};
var selectFormatter = (value, rules) => rules[value] ?? rules.other;
function interpolate(translation, locale, locales) {
	return (values = {}, formats) => {
		const formatters = getDefaultFormats(locale, locales, formats);
		const formatMessage = (tokens, replaceOctothorpe = false) => {
			if (!Array.isArray(tokens)) return tokens;
			return tokens.reduce((message, token) => {
				if (token === "#" && replaceOctothorpe) return message + OCTOTHORPE_PH;
				if (isString(token)) return message + token;
				const [name, type, format] = token;
				let interpolatedFormat = {};
				if (type === "plural" || type === "selectordinal" || type === "select") Object.entries(format).forEach(([key, value2]) => {
					interpolatedFormat[key] = formatMessage(value2, type === "plural" || type === "selectordinal");
				});
				else interpolatedFormat = format;
				let value;
				if (type) {
					const formatter = formatters[type];
					value = formatter(values[name], interpolatedFormat);
				} else value = values[name];
				if (value == null) return message;
				return message + value;
			}, "");
		};
		const result = formatMessage(translation);
		if (isString(result) && ESCAPE_SEQUENCE_REGEX.test(result)) return decodeEscapeSequences(result);
		if (isString(result)) return result;
		return result ? String(result) : "";
	};
}
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
	__defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
	return value;
};
var EventEmitter = class {
	constructor() {
		__publicField$1(this, "_events", {});
	}
	on(event, listener) {
		var _a;
		(_a = this._events)[event] ?? (_a[event] = []);
		this._events[event].push(listener);
		return () => this.removeListener(event, listener);
	}
	removeListener(event, listener) {
		const maybeListeners = this._getListeners(event);
		if (!maybeListeners) return;
		const index = maybeListeners.indexOf(listener);
		if (~index) maybeListeners.splice(index, 1);
	}
	emit(event, ...args) {
		const maybeListeners = this._getListeners(event);
		if (!maybeListeners) return;
		maybeListeners.map((listener) => listener.apply(this, args));
	}
	_getListeners(event) {
		const maybeListeners = this._events[event];
		return Array.isArray(maybeListeners) ? maybeListeners : false;
	}
};
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __publicField = (obj, key, value) => {
	__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
	return value;
};
var I18n = class extends EventEmitter {
	constructor(params) {
		super();
		__publicField(this, "_locale", "");
		__publicField(this, "_locales");
		__publicField(this, "_localeData", {});
		__publicField(this, "_messages", {});
		__publicField(this, "_missing");
		__publicField(this, "_messageCompiler");
		__publicField(this, "t", this._.bind(this));
		if (process.env.NODE_ENV !== "production") this.setMessagesCompiler(compileMessage);
		if (params.missing != null) this._missing = params.missing;
		if (params.messages != null) this.load(params.messages);
		if (params.localeData != null) this.loadLocaleData(params.localeData);
		if (typeof params.locale === "string" || params.locales) this.activate(params.locale ?? defaultLocale, params.locales);
	}
	get locale() {
		return this._locale;
	}
	get locales() {
		return this._locales;
	}
	get messages() {
		return this._messages[this._locale] ?? {};
	}
	get localeData() {
		return this._localeData[this._locale] ?? {};
	}
	_loadLocaleData(locale, localeData) {
		const maybeLocaleData = this._localeData[locale];
		if (!maybeLocaleData) this._localeData[locale] = localeData;
		else Object.assign(maybeLocaleData, localeData);
	}
	setMessagesCompiler(compiler) {
		this._messageCompiler = compiler;
		return this;
	}
	loadLocaleData(localeOrAllData, localeData) {
		if (typeof localeOrAllData === "string") this._loadLocaleData(localeOrAllData, localeData);
		else Object.keys(localeOrAllData).forEach((locale) => this._loadLocaleData(locale, localeOrAllData[locale]));
		this.emit("change");
	}
	_load(locale, messages) {
		const maybeMessages = this._messages[locale];
		if (!maybeMessages) this._messages[locale] = messages;
		else Object.assign(maybeMessages, messages);
	}
	load(localeOrMessages, messages) {
		if (typeof localeOrMessages == "string" && typeof messages === "object") this._load(localeOrMessages, messages);
		else Object.entries(localeOrMessages).forEach(([locale, messages2]) => this._load(locale, messages2));
		this.emit("change");
	}
	loadAndActivate({ locale, locales, messages }) {
		this._locale = locale;
		this._locales = locales || void 0;
		this._messages[this._locale] = messages;
		this.emit("change");
	}
	activate(locale, locales) {
		if (process.env.NODE_ENV !== "production") {
			if (!this._messages[locale]) console.warn(`Messages for locale "${locale}" not loaded.`);
		}
		this._locale = locale;
		this._locales = locales;
		this.emit("change");
	}
	_(id, values, options) {
		if (!this.locale) throw new Error("Lingui: Attempted to call a translation function without setting a locale.\nMake sure to call `i18n.activate(locale)` before using Lingui functions.\nThis issue may also occur due to a race condition in your initialization logic.");
		let message = options?.message;
		if (!id) id = "";
		if (!isString(id)) {
			values = id.values || values;
			message = id.message;
			id = id.id;
		}
		const messageForId = this.messages[id];
		const messageMissing = messageForId === void 0;
		const missing = this._missing;
		if (missing && messageMissing) return isFunction(missing) ? missing(this._locale, id) : missing;
		if (messageMissing) this.emit("missing", {
			id,
			locale: this._locale
		});
		let translation = messageForId || message || id;
		if (isString(translation)) if (this._messageCompiler) translation = this._messageCompiler(translation);
		else console.warn(`Uncompiled message detected! Message:

> ${translation}

That means you use raw catalog or your catalog doesn't have a translation for the message and fallback was used.
ICU features such as interpolation and plurals will not work properly for that message. 

Please compile your catalog first. 
`);
		if (isString(translation) && ESCAPE_SEQUENCE_REGEX.test(translation)) return decodeEscapeSequences(translation);
		if (isString(translation)) return translation;
		return interpolate(translation, this._locale, this._locales)(values, options?.formats);
	}
	date(value, format) {
		return date(this._locales || this._locale, value, format);
	}
	number(value, format) {
		return number(this._locales || this._locale, value, format);
	}
};
function setupI18n(params = {}) {
	return new I18n(params);
}
setupI18n();
var LinguiContext = createContext(null);
var useLinguiInternal = (devErrorMessage) => {
	const context = useContext(LinguiContext);
	if (process.env.NODE_ENV !== "production") {
		if (context == null) throw new Error(devErrorMessage ?? "useLingui hook was used without I18nProvider.");
	}
	return context;
};
function useLingui() {
	return useLinguiInternal();
}
var I18nProvider = ({ i18n, defaultComponent, children }) => {
	const latestKnownLocale = useRef(i18n.locale);
	const makeContext = useCallback(() => ({
		i18n,
		defaultComponent,
		_: i18n.t.bind(i18n)
	}), [i18n, defaultComponent]);
	const [context, setContext] = useState(makeContext());
	useEffect(() => {
		const updateContext = () => {
			latestKnownLocale.current = i18n.locale;
			setContext(makeContext());
		};
		const unsubscribe = i18n.on("change", updateContext);
		if (latestKnownLocale.current !== i18n.locale) updateContext();
		return unsubscribe;
	}, [i18n, makeContext]);
	if (!latestKnownLocale.current) {
		process.env.NODE_ENV === "development" && console.log("I18nProvider rendered `null`. A call to `i18n.activate` needs to happen in order for translations to be activated and for the I18nProvider to render.This is not an error but an informational message logged only in development.");
		return null;
	}
	return jsx(LinguiContext.Provider, {
		value: context,
		children
	});
};
var TestComponent = () => {
	const { _, i18n } = useLingui();
	i18n.locale;
	return null;
};
function EmptyComponent() {
	const i18n = setupI18n();
	i18n.load("en", {});
	i18n.activate("en");
	return jsx(I18nProvider, {
		i18n,
		children: jsx(TestComponent, {})
	});
}
export { EmptyComponent as default };
