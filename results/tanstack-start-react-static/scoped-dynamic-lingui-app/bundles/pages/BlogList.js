import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
//#endregion
//#region ../../node_modules/.bun/@lingui+react@5.9.5+4eaac984f6d8e0a2/node_modules/@lingui/react/dist/index.mjs
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
	return /* @__PURE__ */ jsx(LinguiContext.Provider, {
		value: context,
		children
	});
};
//#endregion
//#region src/components/pages/blog/BlogList.tsx
function BlogList() {
	const { i18n } = useLingui();
	const t = (id) => i18n._(`blog-list.${id}`);
	return /* @__PURE__ */ jsx("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: [
			{
				title: t("comparingI18nLibrariesIn2026"),
				date: "March 15, 2026",
				excerpt: t("weTested12DifferentInternationalization"),
				category: "Benchmark"
			},
			{
				title: t("howToReduceYourI18n"),
				date: t("march82026"),
				excerpt: t("practicalStrategiesForOptimizingTranslation"),
				category: "Tutorial"
			},
			{
				title: t("theStateOfInternationalizationIn"),
				date: t("february282026"),
				excerpt: t("anOverviewOfTheCurrent"),
				category: "Analysis"
			},
			{
				title: t("migratingFromReactI18nextTo"),
				date: t("february152026"),
				excerpt: t("aStepByStepGuide"),
				category: "Tutorial"
			},
			{
				title: t("serverComponentsAndI18nWhat"),
				date: t("february12026"),
				excerpt: t("reactServerComponentsIntroduceNew"),
				category: "Analysis"
			},
			{
				title: t("benchmarkMethodologyHowWeTest"),
				date: t("january202026"),
				excerpt: t("aTransparentLookAtOur"),
				category: "Meta"
			}
		].map((p) => /* @__PURE__ */ jsxs("article", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mb-3 flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("span", {
						className: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground",
						children: p.category
					}), /* @__PURE__ */ jsx("span", {
						className: "text-xs text-muted-foreground",
						children: p.date
					})]
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: p.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mb-4 text-sm text-muted-foreground",
					children: p.excerpt
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					className: "text-sm font-medium text-primary hover:underline",
					children: t("readMore")
				})
			]
		}, p.title))
	});
}
//#endregion
//#region \0rolldown_dynamic_import_helper.js
var _rolldown_dynamic_import_helper_default = (glob, path, segments) => {
	const query = path.lastIndexOf("?");
	const v = glob[query === -1 || query < path.lastIndexOf("/") ? path : path.slice(0, query)];
	if (v) return typeof v === "function" ? v() : Promise.resolve(v);
	return new Promise((_, reject) => {
		(typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path + (path.split("/").length !== segments ? ". Note that variables only represent file names one level deep." : ""))));
	});
};
//#endregion
//#region ../../node_modules/.bun/moo@0.5.3/node_modules/moo/moo.js
var require_moo = /* @__PURE__ */ __commonJSMin(((exports, module) => {
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
//#endregion
//#region ../../node_modules/.bun/@messageformat+parser@5.1.1/node_modules/@messageformat/parser/lib/lexer.js
var require_lexer = /* @__PURE__ */ __commonJSMin(((exports) => {
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
//#endregion
//#region ../../node_modules/.bun/@lingui+message-utils@5.9.5/node_modules/@lingui/message-utils/dist/compileMessage.mjs
var import_parser = (/* @__PURE__ */ __commonJSMin(((exports) => {
	/**
	* An AST parser for ICU MessageFormat strings
	*
	* @packageDocumentation
	* @example
	* ```
	* import { parse } from '@messageformat/parser
	*
	* parse('So {wow}.')
	* [ { type: 'content', value: 'So ' },
	*   { type: 'argument', arg: 'wow' },
	*   { type: 'content', value: '.' } ]
	*
	*
	* parse('Such { thing }. { count, selectordinal, one {First} two {Second}' +
	*       '                  few {Third} other {#th} } word.')
	* [ { type: 'content', value: 'Such ' },
	*   { type: 'argument', arg: 'thing' },
	*   { type: 'content', value: '. ' },
	*   { type: 'selectordinal',
	*     arg: 'count',
	*     cases: [
	*       { key: 'one', tokens: [ { type: 'content', value: 'First' } ] },
	*       { key: 'two', tokens: [ { type: 'content', value: 'Second' } ] },
	*       { key: 'few', tokens: [ { type: 'content', value: 'Third' } ] },
	*       { key: 'other',
	*         tokens: [ { type: 'octothorpe' }, { type: 'content', value: 'th' } ] }
	*     ] },
	*   { type: 'content', value: ' word.' } ]
	*
	*
	* parse('Many{type,select,plural{ numbers}selectordinal{ counting}' +
	*                          'select{ choices}other{ some {type}}}.')
	* [ { type: 'content', value: 'Many' },
	*   { type: 'select',
	*     arg: 'type',
	*     cases: [
	*       { key: 'plural', tokens: [ { type: 'content', value: 'numbers' } ] },
	*       { key: 'selectordinal', tokens: [ { type: 'content', value: 'counting' } ] },
	*       { key: 'select', tokens: [ { type: 'content', value: 'choices' } ] },
	*       { key: 'other',
	*         tokens: [ { type: 'content', value: 'some ' }, { type: 'argument', arg: 'type' } ] }
	*     ] },
	*   { type: 'content', value: '.' } ]
	*
	*
	* parse('{Such compliance')
	* // ParseError: invalid syntax at line 1 col 7:
	* //
	* //  {Such compliance
	* //        ^
	*
	*
	* const msg = '{words, plural, zero{No words} one{One word} other{# words}}'
	* parse(msg)
	* [ { type: 'plural',
	*     arg: 'words',
	*     cases: [
	*       { key: 'zero', tokens: [ { type: 'content', value: 'No words' } ] },
	*       { key: 'one', tokens: [ { type: 'content', value: 'One word' } ] },
	*       { key: 'other',
	*         tokens: [ { type: 'octothorpe' }, { type: 'content', value: ' words' } ] }
	*     ] } ]
	*
	*
	* parse(msg, { cardinal: [ 'one', 'other' ], ordinal: [ 'one', 'two', 'few', 'other' ] })
	* // ParseError: The plural case zero is not valid in this locale at line 1 col 17:
	* //
	* //   {words, plural, zero{
	* //                   ^
	* ```
	*/
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
	/**
	* Thrown by {@link parse} on error
	*
	* @public
	*/
	var ParseError = class extends Error {
		/** @internal */
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
				/* istanbul ignore next: never happens */
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
					/* istanbul ignore if: never happens */
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
				case "select":
 /* istanbul ignore else: never happens */
				if (isSelectType(argType.value)) return this.parseSelect(lt, inPlural, ctx, argType.value);
				else throw new ParseError(argType, `Unexpected select type ${argType.value}`);
				/* istanbul ignore next: never happens */
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
	/**
	* Parse an input string into an array of tokens
	*
	* @public
	* @remarks
	* The parser only supports the default `DOUBLE_OPTIONAL`
	* {@link http://www.icu-project.org/apiref/icu4c/messagepattern_8h.html#af6e0757e0eb81c980b01ee5d68a9978b | apostrophe mode}.
	*/
	function parse(src, options = {}) {
		return new Parser(src, options).parse();
	}
})))();
/**
* Parent class for errors.
*
* @remarks
* Errors with `type: "warning"` do not necessarily indicate that the parser
* encountered an error. In addition to a human-friendly `message`, may also
* includes the `token` at which the error was encountered.
*
* @public
*/
var DateFormatError = class extends Error {
	/** @internal */
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
/**
* Parse an {@link http://userguide.icu-project.org/formatparse/datetime | ICU
* DateFormat skeleton} string into a {@link DateToken} array.
*
* @remarks
* Errors will not be thrown, but if encountered are included as the relevant
* token's `error` value.
*
* @public
* @param src - The skeleton string
*
* @example
* ```js
* import { parseDateTokens } from '@messageformat/date-skeleton'
*
* parseDateTokens('GrMMMdd', console.error)
* // [
* //   { char: 'G', field: 'era', desc: 'Era', width: 1 },
* //   { char: 'r', field: 'year', desc: 'Related Gregorian year', width: 1 },
* //   { char: 'M', field: 'month', desc: 'Month in year', width: 3 },
* //   { char: 'd', field: 'day', desc: 'Day in month', width: 2 }
* // ]
* ```
*/
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
//#endregion
//#region ../../node_modules/.bun/@lingui+core@5.9.5+87bf3809faf02874/node_modules/@lingui/core/dist/index.mjs
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
		/**
		* Alias for {@see I18n._}
		*/
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
	/**
	* @deprecated this has no effect. Please remove this from the code. Deprecated in v4
	*/
	get localeData() {
		return this._localeData[this._locale] ?? {};
	}
	_loadLocaleData(locale, localeData) {
		const maybeLocaleData = this._localeData[locale];
		if (!maybeLocaleData) this._localeData[locale] = localeData;
		else Object.assign(maybeLocaleData, localeData);
	}
	/**
	* Registers a `MessageCompiler` to enable the use of uncompiled catalogs at runtime.
	*
	* In production builds, the `MessageCompiler` is typically excluded to reduce bundle size.
	* By default, message catalogs should be precompiled during the build process. However,
	* if you need to compile catalogs at runtime, you can use this method to set a message compiler.
	*
	* Example usage:
	*
	* ```ts
	* import { compileMessage } from "@lingui/message-utils/compileMessage";
	*
	* i18n.setMessagesCompiler(compileMessage);
	* ```
	*/
	setMessagesCompiler(compiler) {
		this._messageCompiler = compiler;
		return this;
	}
	/**
	* @deprecated Plurals automatically used from Intl.PluralRules you can safely remove this call. Deprecated in v4
	*/
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
	/**
	* @param options {@link LoadAndActivateOptions}
	*/
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
//#endregion
//#region src/i18n/lingui.ts
async function getMessages(locale, namespaces = ["shared", "route"]) {
	const allMessages = {};
	for (const ns of namespaces) try {
		const module = await _rolldown_dynamic_import_helper_default(/* @__PURE__ */ Object.assign({
			"../locales/de/about.mjs": () => import("./about-8MEVvYlv.js"),
			"../locales/de/blog.mjs": () => import("./blog-znN460SK.js"),
			"../locales/de/careers.mjs": () => import("./careers-BSTHWDdO.js"),
			"../locales/de/contact.mjs": () => import("./contact-q8CwyBAJ.js"),
			"../locales/de/faq.mjs": () => import("./faq-sbgoF9x8.js"),
			"../locales/de/home.mjs": () => import("./home-CC_HOVVl.js"),
			"../locales/de/messages.mjs": () => import("./messages-BxIVh2UQ.js"),
			"../locales/de/pricing.mjs": () => import("./pricing-CSiZH-W_.js"),
			"../locales/de/products.mjs": () => import("./products-B3CjHV2l.js"),
			"../locales/de/route.mjs": () => import("./route--QmJgymV.js"),
			"../locales/de/settings.mjs": () => import("./settings-B50Ek34y.js"),
			"../locales/de/shared.mjs": () => import("./shared-DWHNspI6.js"),
			"../locales/de/team.mjs": () => import("./team-DENuMY9F.js"),
			"../locales/en/about.mjs": () => import("./about-99qyo7aq.js"),
			"../locales/en/blog.mjs": () => import("./blog-CSQak4gt.js"),
			"../locales/en/careers.mjs": () => import("./careers-Bu5muFCu.js"),
			"../locales/en/contact.mjs": () => import("./contact-wlFMGVPm.js"),
			"../locales/en/faq.mjs": () => import("./faq-CbmizIXX.js"),
			"../locales/en/home.mjs": () => import("./home-Dwvu_Cjw.js"),
			"../locales/en/messages.mjs": () => import("./messages-CJnjqIfE.js"),
			"../locales/en/pricing.mjs": () => import("./pricing-BSmiYsVz.js"),
			"../locales/en/products.mjs": () => import("./products-BJ7qG9Th.js"),
			"../locales/en/route.mjs": () => import("./route-CbqU9utO.js"),
			"../locales/en/settings.mjs": () => import("./settings-DeeFEYMg.js"),
			"../locales/en/shared.mjs": () => import("./shared-31Se45Sa.js"),
			"../locales/en/team.mjs": () => import("./team-C50HMHkv.js"),
			"../locales/es/about.mjs": () => import("./about-shEot6o6.js"),
			"../locales/es/blog.mjs": () => import("./blog--7Ybyo52.js"),
			"../locales/es/careers.mjs": () => import("./careers-DRX6QAQT.js"),
			"../locales/es/contact.mjs": () => import("./contact-BgQ6n8uD.js"),
			"../locales/es/faq.mjs": () => import("./faq-DOUeckla.js"),
			"../locales/es/home.mjs": () => import("./home-CsCP2H7N.js"),
			"../locales/es/messages.mjs": () => import("./messages-CxsZ48az.js"),
			"../locales/es/pricing.mjs": () => import("./pricing-DbV5zASX.js"),
			"../locales/es/products.mjs": () => import("./products-BDJ1gfpC.js"),
			"../locales/es/route.mjs": () => import("./route-CDCfTSzb.js"),
			"../locales/es/settings.mjs": () => import("./settings-Br0YT1A-2.js"),
			"../locales/es/shared.mjs": () => import("./shared-1rWTQelW2.js"),
			"../locales/es/team.mjs": () => import("./team-DCNDJ7212.js"),
			"../locales/fr/about.mjs": () => import("./about-CKToBko62.js"),
			"../locales/fr/blog.mjs": () => import("./blog-2yFZnrih2.js"),
			"../locales/fr/careers.mjs": () => import("./careers-CAgkku-Z2.js"),
			"../locales/fr/contact.mjs": () => import("./contact-ccnHeDLz2.js"),
			"../locales/fr/faq.mjs": () => import("./faq-BTL0ghd22.js"),
			"../locales/fr/home.mjs": () => import("./home-BRMX70Qd2.js"),
			"../locales/fr/messages.mjs": () => import("./messages-O4VapnbW2.js"),
			"../locales/fr/pricing.mjs": () => import("./pricing-eE2AECbs2.js"),
			"../locales/fr/products.mjs": () => import("./products-CwgY-d_P2.js"),
			"../locales/fr/route.mjs": () => import("./route-PcpZ5b172.js"),
			"../locales/fr/settings.mjs": () => import("./settings-C73j9DeG2.js"),
			"../locales/fr/shared.mjs": () => import("./shared-bnBfdUOC2.js"),
			"../locales/fr/team.mjs": () => import("./team-DHkq1Wko2.js"),
			"../locales/it/about.mjs": () => import("./about-CyaKbDz22.js"),
			"../locales/it/blog.mjs": () => import("./blog-DDw3Z7Ku2.js"),
			"../locales/it/careers.mjs": () => import("./careers-Co8Oq-bO2.js"),
			"../locales/it/contact.mjs": () => import("./contact-B5oFNGX72.js"),
			"../locales/it/faq.mjs": () => import("./faq-BmJMW6WB2.js"),
			"../locales/it/home.mjs": () => import("./home-Cpeg52Uc2.js"),
			"../locales/it/messages.mjs": () => import("./messages-1k4vT48w2.js"),
			"../locales/it/pricing.mjs": () => import("./pricing-CXsjw65e2.js"),
			"../locales/it/products.mjs": () => import("./products-DJZkYh1x2.js"),
			"../locales/it/route.mjs": () => import("./route-IpMVPCpC2.js"),
			"../locales/it/settings.mjs": () => import("./settings-BVCdyrEZ.js"),
			"../locales/it/shared.mjs": () => import("./shared-CMG_jiTe.js"),
			"../locales/it/team.mjs": () => import("./team-CJmCeI4e.js"),
			"../locales/ja/about.mjs": () => import("./about-BiLoI5oA.js"),
			"../locales/ja/blog.mjs": () => import("./blog-Ccnq6Ikb.js"),
			"../locales/ja/careers.mjs": () => import("./careers-7uB7H4IR.js"),
			"../locales/ja/contact.mjs": () => import("./contact-YCMU2WUQ.js"),
			"../locales/ja/faq.mjs": () => import("./faq-oKNDPtL8.js"),
			"../locales/ja/home.mjs": () => import("./home-Ks8yJ-n2.js"),
			"../locales/ja/messages.mjs": () => import("./messages-By2_Koaq.js"),
			"../locales/ja/pricing.mjs": () => import("./pricing-S-tYXUGA.js"),
			"../locales/ja/products.mjs": () => import("./products-ss3NYkuR.js"),
			"../locales/ja/route.mjs": () => import("./route-B7hU-Tot.js"),
			"../locales/ja/settings.mjs": () => import("./settings-DliIszUA.js"),
			"../locales/ja/shared.mjs": () => import("./shared-EKT8Lh2w.js"),
			"../locales/ja/team.mjs": () => import("./team-BoGpkxPX.js"),
			"../locales/ko/about.mjs": () => import("./about-B2S7G4NU.js"),
			"../locales/ko/blog.mjs": () => import("./blog-Z4myC2d7.js"),
			"../locales/ko/careers.mjs": () => import("./careers-DhWLnGgP.js"),
			"../locales/ko/contact.mjs": () => import("./contact-B7F8ulZc.js"),
			"../locales/ko/faq.mjs": () => import("./faq-BJ29yfux.js"),
			"../locales/ko/home.mjs": () => import("./home-LcYnDPVH.js"),
			"../locales/ko/messages.mjs": () => import("./messages-Bt4mAbpB.js"),
			"../locales/ko/pricing.mjs": () => import("./pricing-FvgBIMSR.js"),
			"../locales/ko/products.mjs": () => import("./products-ByGaAL3f.js"),
			"../locales/ko/route.mjs": () => import("./route-8gKiknQX.js"),
			"../locales/ko/settings.mjs": () => import("./settings-CZNCDv0R.js"),
			"../locales/ko/shared.mjs": () => import("./shared-DIGPHfbY.js"),
			"../locales/ko/team.mjs": () => import("./team-CpRAeJOw.js"),
			"../locales/pt/about.mjs": () => import("./about-DpHlL6zJ.js"),
			"../locales/pt/blog.mjs": () => import("./blog-Dqf_fD5B.js"),
			"../locales/pt/careers.mjs": () => import("./careers-_yYBQrT0.js"),
			"../locales/pt/contact.mjs": () => import("./contact-CKegSC_w.js"),
			"../locales/pt/faq.mjs": () => import("./faq-Cq7kCsiN.js"),
			"../locales/pt/home.mjs": () => import("./home-CEyPn2-Q.js"),
			"../locales/pt/messages.mjs": () => import("./messages-BydaaV8p.js"),
			"../locales/pt/pricing.mjs": () => import("./pricing-S7OI6h4q.js"),
			"../locales/pt/products.mjs": () => import("./products-yMnioJNH.js"),
			"../locales/pt/route.mjs": () => import("./route-BbFO8kqn2.js"),
			"../locales/pt/settings.mjs": () => import("./settings-BPHzAkJB2.js"),
			"../locales/pt/shared.mjs": () => import("./shared-CqGimabV2.js"),
			"../locales/pt/team.mjs": () => import("./team-DCov7TL22.js"),
			"../locales/ru/about.mjs": () => import("./about-BoUgY4dE2.js"),
			"../locales/ru/blog.mjs": () => import("./blog-B-4K6VgI2.js"),
			"../locales/ru/careers.mjs": () => import("./careers-Dn5SsJxQ2.js"),
			"../locales/ru/contact.mjs": () => import("./contact-DCwy4Kjo2.js"),
			"../locales/ru/faq.mjs": () => import("./faq-BXCm7kFo2.js"),
			"../locales/ru/home.mjs": () => import("./home-CrambBSx2.js"),
			"../locales/ru/messages.mjs": () => import("./messages-DibQcdge2.js"),
			"../locales/ru/pricing.mjs": () => import("./pricing-BNO8hyZv2.js"),
			"../locales/ru/products.mjs": () => import("./products-CbbjNuHG2.js"),
			"../locales/ru/route.mjs": () => import("./route-CMpryecY2.js"),
			"../locales/ru/settings.mjs": () => import("./settings-DBHMVSgs2.js"),
			"../locales/ru/shared.mjs": () => import("./shared-D9zN6y0S2.js"),
			"../locales/ru/team.mjs": () => import("./team-DLIoVG7z2.js"),
			"../locales/zh/about.mjs": () => import("./about-DEJd9KYF2.js"),
			"../locales/zh/blog.mjs": () => import("./blog-Cj4_QYuy2.js"),
			"../locales/zh/careers.mjs": () => import("./careers-BwmrYVpW2.js"),
			"../locales/zh/contact.mjs": () => import("./contact-DMkFoP0b2.js"),
			"../locales/zh/faq.mjs": () => import("./faq-DimqUIIh2.js"),
			"../locales/zh/home.mjs": () => import("./home-CDFSs9wU2.js"),
			"../locales/zh/messages.mjs": () => import("./messages-Bm0UGbiA2.js"),
			"../locales/zh/pricing.mjs": () => import("./pricing-JqmOEPVy2.js"),
			"../locales/zh/products.mjs": () => import("./products-BF38woRp2.js"),
			"../locales/zh/route.mjs": () => import("./route-BNIRIpgb.js"),
			"../locales/zh/settings.mjs": () => import("./settings-DhjXrqKW.js"),
			"../locales/zh/shared.mjs": () => import("./shared-4hek3lEa.js"),
			"../locales/zh/team.mjs": () => import("./team-BfUs8kkN.js")
		}), `../locales/${locale}/${ns}.mjs`, 4);
		Object.assign(allMessages, module.messages);
	} catch (e) {
		console.warn(`Could not load namespace ${ns} for locale ${locale}`);
	}
	return allMessages;
}
function initLingui(locale, messages) {
	const lingui = setupI18n();
	lingui.load(locale, messages);
	lingui.activate(locale);
	return lingui;
}
//#endregion
//#region scripts/Wrapper.tsx
function Wrapper({ children }) {
	const messages = useMemo(() => getMessages("en"), []);
	return /* @__PURE__ */ jsx(I18nProvider, {
		i18n: useMemo(() => initLingui("en", messages), [messages]),
		children
	});
}
//#endregion
//#region src/components/pages/blog/BlogList.wrapper.tsx
function Wrapped() {
	return /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx(BlogList, {}) });
}
//#endregion
export { Wrapped as default };
//#region src/locales/de/about.mjs
var messages = JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die API-Ergonomie, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie beeinflusst sie das Rendering, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit echten Daten.\"],\"about-grid.methodology\":[\"Methodik\"],\"about-grid.theSame10PageApp\":[\"Die gleiche 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lade-Metriken durch und verwenden React Profiler, um die Renderzeiten während der Sprachumschaltung zu erfassen. Alle Tests laufen in der CI auf identischer Hardware, um reproduzierbare Ergebnisse zu gewährleisten.\"],\"about-grid.whyThisExists\":[\"Warum dies existiert\"],\"about-header.aboutThisBenchmark\":[\"Über diesen Benchmark\"],\"about-header.thisIsAnOpenSource\":[\"Dies ist eine Open-Source-Testanwendung — kein Produkt oder Unternehmen. Ihr einziger Zweck ist es, eine realistische mehrseitige React-App bereitzustellen, in der verschiedene i18n-Bibliotheken integriert und unter identischen Bedingungen gemessen werden können.\"],\"what-we-measure.bundleSizeImpact\":[\"Auswirkung auf die Bundle-Größe\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"Während des SSR werden Übersetzungsdaten in das HTML serialisiert. Große Wörterbücher erhöhen die HTML-Payload und verlangsamen die Hydratation — den Moment, in dem die Seite interaktiv wird.\"],\"what-we-measure.howFastTheAppCan\":[\"Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderings von Komponenten und der Aktualisierung des DOM.\"],\"what-we-measure.howMuchExtraTimeThe\":[\"Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Context Provider injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.\"],\"what-we-measure.hydrationCost\":[\"Hydratationskosten\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"Effektivität von Lazy Loading\"],\"what-we-measure.localeSwitchSpeed\":[\"Geschwindigkeit des Sprachwechsels\"],\"what-we-measure.renderingOverhead\":[\"Rendering-Overhead\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"Die zusätzlichen JavaScript-Bytes, die an die Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Download-Zeit in langsamen Netzwerken aus.\"],\"what-we-measure.whatWeMeasure\":[\"Was wir messen\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Belastung tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).\"]}");
//#endregion
export { messages };
//#region src/locales/en/about.mjs
var messages = JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\"],\"about-grid.methodology\":[\"Methodology\"],\"about-grid.theSame10PageApp\":[\"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\"],\"about-grid.whyThisExists\":[\"Why This Exists\"],\"about-header.aboutThisBenchmark\":[\"About This Benchmark\"],\"about-header.thisIsAnOpenSource\":[\"This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.\"],\"what-we-measure.bundleSizeImpact\":[\"Bundle size impact\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\"],\"what-we-measure.howFastTheAppCan\":[\"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\"],\"what-we-measure.howMuchExtraTimeThe\":[\"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\"],\"what-we-measure.hydrationCost\":[\"Hydration cost\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"Lazy loading effectiveness\"],\"what-we-measure.localeSwitchSpeed\":[\"Locale switch speed\"],\"what-we-measure.renderingOverhead\":[\"Rendering overhead\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\"],\"what-we-measure.whatWeMeasure\":[\"What We Measure\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\"]}");
//#endregion
export { messages };
//#region src/locales/ko/about.mjs
var messages = JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"i18n 라이브러리를 선택하는 것은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API의 사용 편의성에 중점을 두지만, 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 무게를 더하는가? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 주는가? 지연 로딩이 실제로 도움이 되는가 아니면 단순히 비용을 나중으로 미루는 것인가? 이 벤치마크는 실제 데이터를 사용하여 이러한 질문에 답합니다.\"],\"about-grid.methodology\":[\"방법론\"],\"about-grid.theSame10PageApp\":[\"동일한 10페이지 앱이 라이브러리마다 한 번씩 구축됩니다. rollup-plugin-visualizer를 통해 프로덕션 번들을 측정하고, 로딩 지표에 대한 Lighthouse 감사를 실행하며, React Profiler를 사용하여 로케일 전환 중 렌더링 시간을 캡처합니다. 모든 테스트는 재현 가능한 결과를 보장하기 위해 일관된 하드웨어의 CI에서 실행됩니다.\"],\"about-grid.whyThisExists\":[\"이것이 존재하는 이유\"],\"about-header.aboutThisBenchmark\":[\"이 벤치마크에 대하여\"],\"about-header.thisIsAnOpenSource\":[\"이것은 제품이나 회사가 아닌 오픈 소스 테스트 애플리케이션입니다. 유일한 목적은 동일한 조건에서 서로 다른 i18n 라이브러리를 통합하고 측정할 수 있는 현실적인 다중 페이지 React 앱을 제공하는 것입니다.\"],\"what-we-measure.bundleSizeImpact\":[\"번들 크기 영향\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대용량 사전은 HTML 페이로드를 증가시키고 페이지가 상호작용 가능해지는 순간인 수화 속도를 늦춥니다.\"],\"what-we-measure.howFastTheAppCan\":[\"실행 중에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환될 수 있는지를 측정합니다. 여기에는 새 번역 가져오기, 컴포넌트 리렌더링 및 DOM 업데이트가 포함됩니다.\"],\"what-we-measure.howMuchExtraTimeThe\":[\"라이브러리가 React의 렌더링 주기에 추가하는 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 컴포넌트 트리 전체에서 불필요한 리렌더링을 일으킬 수 있습니다.\"],\"what-we-measure.hydrationCost\":[\"수화 비용\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"지연 로딩 효과\"],\"what-we-measure.localeSwitchSpeed\":[\"로케일 전환 속도\"],\"what-we-measure.renderingOverhead\":[\"렌더링 오버헤드\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.\"],\"what-we-measure.whatWeMeasure\":[\"측정 항목\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)를 유발하는지 측정합니다.\"]}");
//#endregion
export { messages };
//#region src/locales/ja/about.mjs
var messages = JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使い勝手に焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリがバンドルにどれだけの重量を加えるのか？数千の翻訳キーが読み込まれたとき、レンダリングにどのような影響を与えるのか？遅延読み込みは実際に役立つのか、それとも単にコストをシフトさせているだけなのか？このベンチマークは、実際のデータでそれらの疑問に答えます。\"],\"about-grid.methodology\":[\"方法論\"],\"about-grid.theSame10PageApp\":[\"同じ10ページのアプリがライブラリごとに1回構築されます。rollup-plugin-visualizerを介してプロダクションバンドルを測定し、ロード指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダリング時間をキャプチャします。すべてのテストは、再現可能な結果を確実にするために、一貫したハードウェアを使用してCI上で実行されます。\"],\"about-grid.whyThisExists\":[\"なぜこれが存在するのか\"],\"about-header.aboutThisBenchmark\":[\"このベンチマークについて\"],\"about-header.thisIsAnOpenSource\":[\"これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、Identicalな条件下でさまざまなi18nライブラリを統合して測定できる、現実的なマルチページのReactアプリを提供することです。\"],\"what-we-measure.bundleSizeImpact\":[\"バンドルサイズへの影響\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"SSR中、翻訳データはHTMLにシリアライズされます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。\"],\"what-we-measure.howFastTheAppCan\":[\"実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるか。これには、新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。\"],\"what-we-measure.howMuchExtraTimeThe\":[\"ライブラリがReactのレンダリングサイクルに加える追加時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。\"],\"what-we-measure.hydrationCost\":[\"ハイドレーションコスト\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"遅延読み込みの有効性\"],\"what-we-measure.localeSwitchSpeed\":[\"ロケール切り替え速度\"],\"what-we-measure.renderingOverhead\":[\"レンダリングオーバーヘッド\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"i18nライブラリとその翻訳ファイルが含まれる際にユーザーに送信される追加のJavaScriptバイト。これは低速なネットワークでのダウンロード時間に直接影響します。\"],\"what-we-measure.whatWeMeasure\":[\"私たちが測定するもの\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"ルートまたは名前空間ごとに翻訳を分割することが実際に初期ロードを削減するのか、そしてどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）をもたらすのか。\"]}");
//#endregion
export { messages };
//#region src/locales/ru/about.mjs
var messages = JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточены на эргономике API, но немногие измеряют стоимость производительности: какой вес библиотека добавляет в бандл? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Помогает ли ленивая загрузка на самом деле или просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.\"],\"about-grid.methodology\":[\"Методология\"],\"about-grid.theSame10PageApp\":[\"Одно и то же 10-страничное приложение создается для каждой библиотеки. Мы измеряем производственный бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для регистрации времени рендеринга при переключении языков. Все тесты выполняются в CI на одинаковом оборудовании для обеспечения воспроизводимых результатов.\"],\"about-grid.whyThisExists\":[\"Почему это существует\"],\"about-header.aboutThisBenchmark\":[\"Об этом бенчмарке\"],\"about-header.thisIsAnOpenSource\":[\"Это открытое приложение для тестирования, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное приложение на React, в котором можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.\"],\"what-we-measure.bundleSizeImpact\":[\"Влияние на размер бандла\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML и замедляют гидратацию — момент, когда страница становится интерактивной.\"],\"what-we-measure.howFastTheAppCan\":[\"Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.\"],\"what-we-measure.howMuchExtraTimeThe\":[\"Сколько дополнительного времени библиотека добавляет в цикл рендеринга React. Библиотеки, которые внедряют переводы через одного провайдера контекста, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.\"],\"what-we-measure.hydrationCost\":[\"Стоимость гидратации\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"Эффективность ленивой загрузки\"],\"what-we-measure.localeSwitchSpeed\":[\"Скорость переключения языка\"],\"what-we-measure.renderingOverhead\":[\"Затраты на рендеринг\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.\"],\"what-we-measure.whatWeMeasure\":[\"Что мы измеряем\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования).\"]}");
//#endregion
export { messages };
//#region src/locales/fr/about.mjs
var messages = JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"Choisir une bibliothèque i18n est une décision architecturale ayant des conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en termes de performances : quel poids la bibliothèque ajoute-t-elle au bundle ? Comment cela affecte-t-il le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement différé aide-t-il réellement ou déplace-t-il simplement le coût ? Ce benchmark répond à ces questions avec des données réelles.\"],\"about-grid.methodology\":[\"Méthodologie\"],\"about-grid.theSame10PageApp\":[\"La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les métriques de chargement et utilisons React Profiler pour capturer les temps de rendu lors des changements de langue. Tous les tests sont effectués en CI sur un matériel identique pour garantir des résultats reproductibles.\"],\"about-grid.whyThisExists\":[\"Pourquoi cela existe\"],\"about-header.aboutThisBenchmark\":[\"À propos de ce benchmark\"],\"about-header.thisIsAnOpenSource\":[\"Il s'agit d'une application de test open source, pas d'un produit ou d'une entreprise. Son seul but est de fournir une application React multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques.\"],\"what-we-measure.bundleSizeImpact\":[\"Impact sur la taille du bundle\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"Pendant le SSR, les données de traduction sont sérialisées dans le HTML. Les dictionnaire volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment où la page devient interactive.\"],\"what-we-measure.howFastTheAppCan\":[\"À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération des nouvelles traductions, le rendu des composants et la mise à jour du DOM.\"],\"what-we-measure.howMuchExtraTimeThe\":[\"Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arbre des composants.\"],\"what-we-measure.hydrationCost\":[\"Coût d'hydratation\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"Efficacité du chargement différé\"],\"what-we-measure.localeSwitchSpeed\":[\"Vitesse de changement de langue\"],\"what-we-measure.renderingOverhead\":[\"Surcharge de rendu\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.\"],\"what-we-measure.whatWeMeasure\":[\"Ce que nous mesurons\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"Si le fractionnement des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).\"]}");
//#endregion
export { messages };
//#region src/locales/it/about.mjs
var messages = JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.\"],\"about-grid.methodology\":[\"Metodologia\"],\"about-grid.theSame10PageApp\":[\"La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.\"],\"about-grid.whyThisExists\":[\"Perché esiste questo progetto\"],\"about-header.aboutThisBenchmark\":[\"Informazioni su questo benchmark\"],\"about-header.thisIsAnOpenSource\":[\"Questa è un'applicazione di test open-source, non un prodotto o un'azienda. Il suo unico scopo è fornire un'applicazione React multi-pagina realistica dove diverse librerie i18n possono essere integrate e misurate in condizioni identiche.\"],\"what-we-measure.bundleSizeImpact\":[\"Impatto sulla dimensione del bundle\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.\"],\"what-we-measure.howFastTheAppCan\":[\"Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.\"],\"what-we-measure.howMuchExtraTimeThe\":[\"Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.\"],\"what-we-measure.hydrationCost\":[\"Costo di idratazione\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"Efficacia del caricamento pigro\"],\"what-we-measure.localeSwitchSpeed\":[\"Velocità di cambio lingua\"],\"what-we-measure.renderingOverhead\":[\"Sovrapprezzo di rendering\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"I byte JavaScript aggiuntivi inviati agli utenti quando la libreria i18n e i suoi file di traduzione sono inclusi. Ciò influisce direttamente sul tempo di download sulle reti lente.\"],\"what-we-measure.whatWeMeasure\":[\"Cosa misuriamo\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).\"]}");
//#endregion
export { messages };
//#region src/locales/zh/about.mjs
var messages = JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"选择 i18n 库是一项具有长期影响的架构决策。大多数比较侧重于 API 的易用性，但很少衡量性能成本：库为包增加了多少权重？加载数千个翻译键时它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试用真实数据回答了这些问题。\"],\"about-grid.methodology\":[\"方法论\"],\"about-grid.theSame10PageApp\":[\"同一个 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行 Lighthouse 审计以获取加载指标，并使用 React Profiler 捕获语言切换期间的渲染时间。所有测试都在一致的硬件上在 CI 中运行，以确保结果的可复现性。\"],\"about-grid.whyThisExists\":[\"为什么存在这个基准测试\"],\"about-header.aboutThisBenchmark\":[\"关于本基准测试\"],\"about-header.thisIsAnOpenSource\":[\"这是一个开源测试应用程序 —— 不是产品或公司。其唯一目的是提供一个现实的多页面 React 应用程序，可以在相同条件下集成和衡量不同的 i18n 库。\"],\"what-we-measure.bundleSizeImpact\":[\"包大小影响\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 —— 即页面变得可交互的时刻。\"],\"what-we-measure.howFastTheAppCan\":[\"应用在运行时从一种语言切换到另一种语言的速度 —— 包括获取新翻译、重新渲染组件和更新 DOM。\"],\"what-we-measure.howMuchExtraTimeThe\":[\"库为 React 渲染周期增加了多少额外时间。通过单个上下文提供者注入翻译的库可能会在整个组件树中导致不必要的重新渲染。\"],\"what-we-measure.hydrationCost\":[\"注水成本\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"延迟加载有效性\"],\"what-we-measure.localeSwitchSpeed\":[\"语言切换速度\"],\"what-we-measure.renderingOverhead\":[\"渲染开销\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。\"],\"what-we-measure.whatWeMeasure\":[\"我们测量什么\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"按路由或命名空间拆分翻译是否真的减少了初始负载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。\"]}");
//#endregion
export { messages };
//#region src/locales/pt/about.mjs
var messages = JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências de longo prazo. A maioria das comparações se concentra na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao pacote? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento preguiçoso realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.\"],\"about-grid.methodology\":[\"Metodologia\"],\"about-grid.theSame10PageApp\":[\"O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), realizamos auditorias do Lighthouse para métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis.\"],\"about-grid.whyThisExists\":[\"Por que isso existe\"],\"about-header.aboutThisBenchmark\":[\"Sobre este benchmark\"],\"about-header.thisIsAnOpenSource\":[\"Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo React realista e de várias páginas onde diferentes bibliotecas i18n possam ser integradas e medidas em condições idênticas.\"],\"what-we-measure.bundleSizeImpact\":[\"Impacto no tamanho do bundle\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.\"],\"what-we-measure.howFastTheAppCan\":[\"Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.\"],\"what-we-measure.howMuchExtraTimeThe\":[\"Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções via um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.\"],\"what-we-measure.hydrationCost\":[\"Custo de hidratação\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"Eficácia do carregamento lento\"],\"what-we-measure.localeSwitchSpeed\":[\"Velocidade de troca de idioma\"],\"what-we-measure.renderingOverhead\":[\"Sobrecarga de renderização\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.\"],\"what-we-measure.whatWeMeasure\":[\"O que medimos\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascada, FOUC, complexidade de cache).\"]}");
//#endregion
export { messages };
//#region src/locales/es/about.mjs
var messages = JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el costo de rendimiento: ¿cuánto peso añade la biblioteca al paquete? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Ayuda realmente la carga diferida o simplemente traslada el costo? Este benchmark responde a esas preguntas con datos reales.\"],\"about-grid.methodology\":[\"Metodología\"],\"about-grid.theSame10PageApp\":[\"La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el paquete de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en hardware consistente para garantizar resultados reproducibles.\"],\"about-grid.whyThisExists\":[\"Por qué existe esto\"],\"about-header.aboutThisBenchmark\":[\"Sobre este benchmark\"],\"about-header.thisIsAnOpenSource\":[\"Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React de varias páginas realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas.\"],\"what-we-measure.bundleSizeImpact\":[\"Impacto en el tamaño del paquete\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan la carga útil de HTML y ralentizan la hidratación: el momento en que la página se vuelve interactiva.\"],\"what-we-measure.howFastTheAppCan\":[\"Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.\"],\"what-we-measure.howMuchExtraTimeThe\":[\"Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar renderizados innecesarios en todo el árbol de componentes.\"],\"what-we-measure.hydrationCost\":[\"Costo de hidratación\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"Eficacia de la carga diferida\"],\"what-we-measure.localeSwitchSpeed\":[\"Velocidad de cambio de idioma\"],\"what-we-measure.renderingOverhead\":[\"Sobrecarga de renderizado\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"Los bytes de JavaScript adicionales enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.\"],\"what-we-measure.whatWeMeasure\":[\"Lo que medimos\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"Si dividir las traducciones por ruta o espacio de nombres reduce realmente la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).\"]}");
//#endregion
export { messages };
//#region src/locales/es/blog.mjs
var messages = JSON.parse("{\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"Información, tutoriales y análisis de la comunidad i18n.\"],\"blog-list.aStepByStepGuide\":[\"Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.\"],\"blog-list.aTransparentLookAtOur\":[\"Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.\"],\"blog-list.anOverviewOfTheCurrent\":[\"Una visión general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"Metodología de benchmark: cómo probamos\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"Comparación de bibliotecas i18n en 2026: una inmersión profunda\"],\"blog-list.february12026\":[\"1 de febrero de 2026\"],\"blog-list.february152026\":[\"15 de febrero de 2026\"],\"blog-list.february282026\":[\"28 de febrero de 2026\"],\"blog-list.howToReduceYourI18n\":[\"Cómo reducir su paquete i18n en un 60%\"],\"blog-list.january202026\":[\"20 de enero de 2026\"],\"blog-list.march82026\":[\"8 de marzo de 2026\"],\"blog-list.migratingFromReactI18nextTo\":[\"Migración de react-i18next a Lingui\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"Estrategias prácticas para optimizar los paquetes de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"React Server Components introduce nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\"],\"blog-list.readMore\":[\"Leer más →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"Server Components e i18n: ¿Qué cambia?\"],\"blog-list.theStateOfInternationalizationIn\":[\"El estado de la internacionalización en React\"],\"blog-list.weTested12DifferentInternationalization\":[\"Probamos 12 bibliotecas de internacionalización diferentes en rendimiento, tamaño de paquete y DX. Aquí están los resultados sorprendentes.\"]}");
//#endregion
export { messages };
//#region src/locales/fr/blog.mjs
var messages = JSON.parse("{\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"Aperçus, tutoriels et analyses de la communauté i18n.\"],\"blog-list.aStepByStepGuide\":[\"Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.\"],\"blog-list.aTransparentLookAtOur\":[\"Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.\"],\"blog-list.anOverviewOfTheCurrent\":[\"Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"Méthodologie du benchmark : comment nous testons\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"Comparaison des bibliothèques i18n en 2026 : une analyse approfondie\"],\"blog-list.february12026\":[\"1er février 2026\"],\"blog-list.february152026\":[\"15 février 2026\"],\"blog-list.february282026\":[\"28 février 2026\"],\"blog-list.howToReduceYourI18n\":[\"Comment réduire votre bundle i18n de 60 %\"],\"blog-list.january202026\":[\"20 janvier 2026\"],\"blog-list.march82026\":[\"8 mars 2026\"],\"blog-list.migratingFromReactI18nextTo\":[\"Migration de react-i18next vers Lingui\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"Stratégies pratiques pour optimiser les bundles de traduction, notamment le chargement différé, le fractionnement du code et les optimisations au moment de la compilation.\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.\"],\"blog-list.readMore\":[\"Lire la suite →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"Server Components et i18n : Qu'est-ce qui change ?\"],\"blog-list.theStateOfInternationalizationIn\":[\"L'état de l'internationalisation dans React\"],\"blog-list.weTested12DifferentInternationalization\":[\"Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et le DX. Voici les résultats surprenants.\"]}");
//#endregion
export { messages };
//#region src/locales/ru/blog.mjs
var messages = JSON.parse("{\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"Инсайты, руководства и анализ от сообщества i18n.\"],\"blog-list.aStepByStepGuide\":[\"Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.\"],\"blog-list.aTransparentLookAtOur\":[\"Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\"],\"blog-list.anOverviewOfTheCurrent\":[\"Обзор текущей экосистемы i18n в React, охватывающий тенденции, возникающие паттерны и предпочтения сообщества.\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"Методология бенчмарка: как мы тестируем\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"Сравнение библиотек i18n в 2026 году: глубокое погружение\"],\"blog-list.february12026\":[\"1 февраля 2026 года\"],\"blog-list.february152026\":[\"15 февраля 2026 года\"],\"blog-list.february282026\":[\"28 февраля 2026 года\"],\"blog-list.howToReduceYourI18n\":[\"Как уменьшить бандл i18n на 60%\"],\"blog-list.january202026\":[\"20 января 2026 года\"],\"blog-list.march82026\":[\"8 марта 2026 года\"],\"blog-list.migratingFromReactI18nextTo\":[\"Миграция с react-i18next на Lingui\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"Практические стратегии для оптимизации бандлов перевода, включая ленивую загрузку, разделение кода и оптимизации во время компиляции.\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.\"],\"blog-list.readMore\":[\"Читать далее →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"Server Components и i18n: что меняется?\"],\"blog-list.theStateOfInternationalizationIn\":[\"Состояние интернационализации в React\"],\"blog-list.weTested12DifferentInternationalization\":[\"Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.\"]}");
//#endregion
export { messages };
//#region src/locales/en/blog.mjs
var messages = JSON.parse("{\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"Insights, tutorials, and analysis from the i18n community.\"],\"blog-list.aStepByStepGuide\":[\"A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\"],\"blog-list.aTransparentLookAtOur\":[\"A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\"],\"blog-list.anOverviewOfTheCurrent\":[\"An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"Benchmark Methodology: How We Test\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"Comparing i18n Libraries in 2026: A Deep Dive\"],\"blog-list.february12026\":[\"February 1, 2026\"],\"blog-list.february152026\":[\"February 15, 2026\"],\"blog-list.february282026\":[\"February 28, 2026\"],\"blog-list.howToReduceYourI18n\":[\"How to Reduce Your i18n Bundle by 60%\"],\"blog-list.january202026\":[\"January 20, 2026\"],\"blog-list.march82026\":[\"March 8, 2026\"],\"blog-list.migratingFromReactI18nextTo\":[\"Migrating from react-i18next to Lingui\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\"],\"blog-list.readMore\":[\"Read More →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"Server Components and i18n: What Changes?\"],\"blog-list.theStateOfInternationalizationIn\":[\"The State of Internationalization in React\"],\"blog-list.weTested12DifferentInternationalization\":[\"We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\"]}");
//#endregion
export { messages };
//#region src/locales/ja/blog.mjs
var messages = JSON.parse("{\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"i18nコミュニティからの洞察、チュートリアル、分析。\"],\"blog-list.aStepByStepGuide\":[\"50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。\"],\"blog-list.aTransparentLookAtOur\":[\"テスト環境、統計手法、再現性を含む、私たちのベンチマーク方法論の透明性のある考察。\"],\"blog-list.anOverviewOfTheCurrent\":[\"トレンド、新興パターン、コミュニティの好みを網羅した、Reactにおける現在のi18nエコシステムの概要。\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"ベンチマーク方法論：私たちのテスト方法\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"2026年のi18nライブラリ比較：ディープダイブ\"],\"blog-list.february12026\":[\"2026年2月1日\"],\"blog-list.february152026\":[\"2026年2月15日\"],\"blog-list.february282026\":[\"2026年2月28日\"],\"blog-list.howToReduceYourI18n\":[\"i18nバンドルを60％削減する方法\"],\"blog-list.january202026\":[\"2026年1月20日\"],\"blog-list.march82026\":[\"2026年3月8日特段\"],\"blog-list.migratingFromReactI18nextTo\":[\"react-i18nextからLinguiへの移行\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"遅延読み込み、コード分割、コンパイル時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。\"],\"blog-list.readMore\":[\"続きを読む →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"Server Componentsとi18n：何が変わるのか？\"],\"blog-list.theStateOfInternationalizationIn\":[\"Reactにおける国際化の現状\"],\"blog-list.weTested12DifferentInternationalization\":[\"パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。\"]}");
//#endregion
export { messages };
//#region src/locales/zh/blog.mjs
var messages = JSON.parse("{\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"来自 i18n 社区的见解、教程和分析。\"],\"blog-list.aStepByStepGuide\":[\"关于如何将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。\"],\"blog-list.aTransparentLookAtOur\":[\"透明地了解我们的基准测试方法，包括测试环境、统计方法和可复现性。\"],\"blog-list.anOverviewOfTheCurrent\":[\"React 当前 i18n 生态系统概述，涵盖趋势、新兴模式和社区偏好。\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"基准测试方法论：我们如何测试\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"2026 年 i18n 库对比：深度解析\"],\"blog-list.february12026\":[\"2026年2月1日\"],\"blog-list.february152026\":[\"2026年2月15日\"],\"blog-list.february282026\":[\"2026年2月28日\"],\"blog-list.howToReduceYourI18n\":[\"如何将您的 i18n 包减少 60%\"],\"blog-list.january202026\":[\"2026年1月20日\"],\"blog-list.march82026\":[\"2026年3月8日\"],\"blog-list.migratingFromReactI18nextTo\":[\"从 react-i18next 迁移到 Lingui\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"React Server Components 为国际化引入了新模式。我们探讨其影响和最佳实践。\"],\"blog-list.readMore\":[\"阅读更多 →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"服务器组件与 i18n：有哪些变化？\"],\"blog-list.theStateOfInternationalizationIn\":[\"React 国际化的现状\"],\"blog-list.weTested12DifferentInternationalization\":[\"我们在性能、包大小和 DX 方面测试了 12 个不同的国际化库。以下是令人惊讶的结果。\"]}");
//#endregion
export { messages };
//#region src/locales/it/blog.mjs
var messages = JSON.parse("{\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"Approfondimenti, tutorial e analisi dalla comunità i18n.\"],\"blog-list.aStepByStepGuide\":[\"Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\"],\"blog-list.aTransparentLookAtOur\":[\"Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.\"],\"blog-list.anOverviewOfTheCurrent\":[\"Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"Metodologia del benchmark: come testiamo\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"Confronto tra librerie i18n nel 2026: un approfondimento\"],\"blog-list.february12026\":[\"1 febbraio 2026\"],\"blog-list.february152026\":[\"15 febbraio 2026\"],\"blog-list.february282026\":[\"28 febbraio 2026\"],\"blog-list.howToReduceYourI18n\":[\"Come ridurre il bundle i18n del 60%\"],\"blog-list.january202026\":[\"20 gennaio 2026\"],\"blog-list.march82026\":[\"8 marzo 2026\"],\"blog-list.migratingFromReactI18nextTo\":[\"Migrazione da react-i18next a Lingui\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni in fase di compilazione.\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.\"],\"blog-list.readMore\":[\"Leggi di più →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"Server Components e i18n: cosa cambia?\"],\"blog-list.theStateOfInternationalizationIn\":[\"Lo stato dell'internazionalizzazione in React\"],\"blog-list.weTested12DifferentInternationalization\":[\"Abbiamo testato 12 diverse librerie di internazionalizzazione su prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.\"]}");
//#endregion
export { messages };
//#region src/locales/pt/blog.mjs
var messages = JSON.parse("{\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"Insights, tutoriais e análises da comunidade i18n.\"],\"blog-list.aStepByStepGuide\":[\"Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\"],\"blog-list.aTransparentLookAtOur\":[\"Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.\"],\"blog-list.anOverviewOfTheCurrent\":[\"Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"Metodologia de Benchmark: como testamos\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"Comparando Bibliotecas i18n em 2026: Uma Análise Profunda\"],\"blog-list.february12026\":[\"1 de fevereiro de 2026\"],\"blog-list.february152026\":[\"15 de fevereiro de 2026\"],\"blog-list.february282026\":[\"28 de fevereiro de 2026\"],\"blog-list.howToReduceYourI18n\":[\"Como reduzir seu bundle i18n em 60%\"],\"blog-list.january202026\":[\"20 de janeiro de 2026\"],\"blog-list.march82026\":[\"8 de março de 2026\"],\"blog-list.migratingFromReactI18nextTo\":[\"Migrando do react-i18next para o Lingui\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de compilação.\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.\"],\"blog-list.readMore\":[\"Leia mais →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"Server Components e i18n: o que muda?\"],\"blog-list.theStateOfInternationalizationIn\":[\"O estado da internacionalização no React\"],\"blog-list.weTested12DifferentInternationalization\":[\"Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.\"]}");
//#endregion
export { messages };
//#region src/locales/ko/blog.mjs
var messages = JSON.parse("{\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"i18n 커뮤니티의 인사이트, 튜토리얼 및 분석.\"],\"blog-list.aStepByStepGuide\":[\"50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 방법에 대한 단계별 가이드.\"],\"blog-list.aTransparentLookAtOur\":[\"테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰.\"],\"blog-list.anOverviewOfTheCurrent\":[\"동향, 신흥 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 생태계 개요입니다.\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"벤치마크 방법론: 테스트 방법\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"2026년 i18n 라이브러리 비교: 심층 분석\"],\"blog-list.february12026\":[\"2026년 1월 1일\"],\"blog-list.february152026\":[\"2026년 2월 15일\"],\"blog-list.february282026\":[\"2026년 2월 28일\"],\"blog-list.howToReduceYourI18n\":[\"i18n 번들을 60% 줄이는 방법\"],\"blog-list.january202026\":[\"2026년 1월 20일\"],\"blog-list.march82026\":[\"2026년 3월 8일\"],\"blog-list.migratingFromReactI18nextTo\":[\"react-i18next에서 Lingui로 마이그레이션하기\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"React Server Components는 국제화를 위한 새로운 패턴을 도입합니다. 그 의미와 모범 사례를 살펴봅니다.\"],\"blog-list.readMore\":[\"더 읽어보기 →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"Server Components 및 i18n: 무엇이 달라지나요?\"],\"blog-list.theStateOfInternationalizationIn\":[\"React 국제화의 현주소\"],\"blog-list.weTested12DifferentInternationalization\":[\"저희는 성능, 번들 크기 및 DX 전반에 걸쳐 12개의 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과가 여기 있습니다.\"]}");
//#endregion
export { messages };
//#region src/locales/de/blog.mjs
var messages = JSON.parse("{\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"Einblicke, Tutorials und Analysen aus der i18n-Community.\"],\"blog-list.aStepByStepGuide\":[\"Schritt-für-Schritt-Anleitung für die Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\"],\"blog-list.aTransparentLookAtOur\":[\"Ein transparenter Einblick in unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\"],\"blog-list.anOverviewOfTheCurrent\":[\"Ein Überblick über das aktuelle i18n-Ökosystem in React, einschließlich Trends, aufkommender Muster und Community-Präferenzen.\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"Benchmark-Methodik: Wie wir testen\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"i18n-Bibliotheken im Jahr 2026 im Vergleich: Ein tiefer Einblick\"],\"blog-list.february12026\":[\"1. Februar 2026\"],\"blog-list.february152026\":[\"15. Februar 2026\"],\"blog-list.february282026\":[\"28. Februar 2026\"],\"blog-list.howToReduceYourI18n\":[\"So reduzieren Sie Ihr i18n-Bundle um 60 %\"],\"blog-list.january202026\":[\"20. Januar 2026\"],\"blog-list.march82026\":[\"8. März 2026\"],\"blog-list.migratingFromReactI18nextTo\":[\"Migration von react-i18next zu Lingui\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Erstellungszeit.\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\"],\"blog-list.readMore\":[\"Mehr lesen →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"Server Components und i18n: Was ändert sich?\"],\"blog-list.theStateOfInternationalizationIn\":[\"Der Stand der Internationalisierung in React\"],\"blog-list.weTested12DifferentInternationalization\":[\"Wir haben 12 verschiedene Internationalisierungsbibliotheken hinsichtlich Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.\"]}");
//#endregion
export { messages };
//#region src/locales/ja/careers.mjs
var messages = JSON.parse("{\"careers-benefits.competitivePay\":[\"競争力のある給与\"],\"careers-benefits.openSourceTime\":[\"オープンソースへの貢献時間\"],\"careers-benefits.topOfMarketCompensation\":[\"市場最高水準の報酬\"],\"careers-benefits.workFromAnywhereInThe\":[\"世界中のどこからでも働けます\"],\"careers-header.joinOurMissionToImprove\":[\"国際化エコシステムを改善するという私たちのミッションに参加してください。私たちは、影響、透明性、継続的な学習を重視するリモートファーストの開発チームです。\"],\"careers-header.title\":[\"採用情報\"],\"open-positions.applyNow\":[\"今すぐ応募\"],\"open-positions.backendEngineer\":[\"バックエンドエンジニア\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"React、TypeScript、Viteを使用して、私たちのベンチマークダッシュボードと開発者ツールを構築および維持します。\"],\"open-positions.community\":[\"コミュニティ\"],\"open-positions.createComprehensiveGuidesApiReferences\":[\"私たちのベンチマークプラットフォームのための包括的なガイド、APIリファレンス、チュートリアルを作成します。\"],\"open-positions.designAndScaleOurCloud\":[\"毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計およびスケールさせます。\"],\"open-positions.devrelEngineer\":[\"DevRelエンジニア\"],\"open-positions.documentation\":[\"ドキュメンテーション\"],\"open-positions.engageWithTheI18nCommunity\":[\"講演、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと交流します。\"],\"open-positions.engineering\":[\"エンジニアリング\"],\"open-positions.ensureTheAccuracyAndReliability\":[\"厳格なテストと改修を通じて、ベンチマーク結果の正確性と信頼性を確保します。\"],\"open-positions.fullTime\":[\"正社員\"],\"open-positions.openPositions\":[\"募集中の職種\"],\"open-positions.partTime\":[\"アルバイト\"],\"open-positions.qaEngineer\":[\"QAエンジニア\"],\"open-positions.remote\":[\"リモート\"],\"open-positions.sanFranciscoRemote\":[\"サンフランシスコ / リモート\"],\"open-positions.seniorFrontendEngineer\":[\"シニアフロントエンドエンジニア\"],\"open-positions.technicalWriter\":[\"テクニカルライター\"]}");
//#endregion
export { messages };
//#region src/locales/de/careers.mjs
var messages = JSON.parse("{\"careers-benefits.competitivePay\":[\"Wettbewerbsfähige Bezahlung\"],\"careers-benefits.openSourceTime\":[\"Zeit für Open Source\"],\"careers-benefits.topOfMarketCompensation\":[\"Überdurchschnittliche Vergütung\"],\"careers-benefits.workFromAnywhereInThe\":[\"Arbeiten Sie von überall auf der Welt\"],\"careers-header.joinOurMissionToImprove\":[\"Helfen Sie uns bei unserer Mission, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt.\"],\"careers-header.title\":[\"Karriere\"],\"open-positions.applyNow\":[\"Jetzt bewerben\"],\"open-positions.backendEngineer\":[\"Backend Engineer\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"Erstellen und warten Sie unser Benchmarking-Dashboard und Entwickler-Tools mit React, TypeScript und Vite.\"],\"open-positions.community\":[\"Community\"],\"open-positions.createComprehensiveGuidesApiReferences\":[\"Erstellen Sie umfassende Anleitungen, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.\"],\"open-positions.designAndScaleOurCloud\":[\"Konzipieren und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen bewältigt.\"],\"open-positions.devrelEngineer\":[\"DevRel Engineer\"],\"open-positions.documentation\":[\"Dokumentation\"],\"open-positions.engageWithTheI18nCommunity\":[\"Tauschen Sie sich mit der i18n-Community durch Vorträge, Workshops, Blog-Beiträge und Open-Source-Beiträge aus.\"],\"open-positions.engineering\":[\"Engineering\"],\"open-positions.ensureTheAccuracyAndReliability\":[\"Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen.\"],\"open-positions.fullTime\":[\"Vollzeit\"],\"open-positions.openPositions\":[\"Offene Stellen\"],\"open-positions.partTime\":[\"Teilzeit\"],\"open-positions.qaEngineer\":[\"QA-Ingenieur\"],\"open-positions.remote\":[\"Remote\"],\"open-positions.sanFranciscoRemote\":[\"San Francisco / Remote\"],\"open-positions.seniorFrontendEngineer\":[\"Senior Frontend Engineer\"],\"open-positions.technicalWriter\":[\"Technischer Redakteur\"]}");
//#endregion
export { messages };
//#region src/locales/en/careers.mjs
var messages = JSON.parse("{\"careers-benefits.competitivePay\":[\"Competitive pay\"],\"careers-benefits.openSourceTime\":[\"Open source time\"],\"careers-benefits.topOfMarketCompensation\":[\"Top-of-market compensation\"],\"careers-benefits.workFromAnywhereInThe\":[\"Work from anywhere in the world\"],\"careers-header.joinOurMissionToImprove\":[\"Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.\"],\"careers-header.title\":[\"Careers\"],\"open-positions.applyNow\":[\"Apply Now\"],\"open-positions.backendEngineer\":[\"Backend Engineer\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\"],\"open-positions.community\":[\"Community\"],\"open-positions.createComprehensiveGuidesApiReferences\":[\"Create comprehensive guides, API references, and tutorials for our benchmarking platform.\"],\"open-positions.designAndScaleOurCloud\":[\"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\"],\"open-positions.devrelEngineer\":[\"DevRel Engineer\"],\"open-positions.documentation\":[\"Documentation\"],\"open-positions.engageWithTheI18nCommunity\":[\"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\"],\"open-positions.engineering\":[\"Engineering\"],\"open-positions.ensureTheAccuracyAndReliability\":[\"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\"],\"open-positions.fullTime\":[\"Full-time\"],\"open-positions.openPositions\":[\"Open Positions\"],\"open-positions.partTime\":[\"Part-time\"],\"open-positions.qaEngineer\":[\"QA Engineer\"],\"open-positions.remote\":[\"Remote\"],\"open-positions.sanFranciscoRemote\":[\"San Francisco / Remote\"],\"open-positions.seniorFrontendEngineer\":[\"Senior Frontend Engineer\"],\"open-positions.technicalWriter\":[\"Technical Writer\"]}");
//#endregion
export { messages };
//#region src/locales/zh/careers.mjs
var messages = JSON.parse("{\"careers-benefits.competitivePay\":[\"具有竞争力的薪酬\"],\"careers-benefits.openSourceTime\":[\"开源贡献时间\"],\"careers-benefits.topOfMarketCompensation\":[\"市场顶尖的薪资待遇\"],\"careers-benefits.workFromAnywhereInThe\":[\"在全球任何地方工作\"],\"careers-header.joinOurMissionToImprove\":[\"加入我们改进国际化生态系统的使命。我们是一个远程优先的团队，重视影响力、透明度和持续学习。\"],\"careers-header.title\":[\"职业生涯\"],\"open-positions.applyNow\":[\"立即申请\"],\"open-positions.backendEngineer\":[\"后端工程师\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"使用 React, TypeScript 和 Vite 构建并维护我们的基准测试仪表板和开发人员工具。\"],\"open-positions.community\":[\"社区\"],\"open-positions.createComprehensiveGuidesApiReferences\":[\"为我们的基准测试平台创建全面的指南、API 参考和教程。\"],\"open-positions.designAndScaleOurCloud\":[\"设计并扩展我们的云基准测试基础设施，每天处理数千次自动化运行。\"],\"open-positions.devrelEngineer\":[\"开发者关系工程师\"],\"open-positions.documentation\":[\"文档\"],\"open-positions.engageWithTheI18nCommunity\":[\"通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。\"],\"open-positions.engineering\":[\"工程\"],\"open-positions.ensureTheAccuracyAndReliability\":[\"通过严格的测试和验证确保基准测试结果的准确性和可靠性。\"],\"open-positions.fullTime\":[\"全职\"],\"open-positions.openPositions\":[\"开放职位\"],\"open-positions.partTime\":[\"兼职\"],\"open-positions.qaEngineer\":[\"测试工程师\"],\"open-positions.remote\":[\"远程\"],\"open-positions.sanFranciscoRemote\":[\"旧金山 / 远程\"],\"open-positions.seniorFrontendEngineer\":[\"高级前端工程师\"],\"open-positions.technicalWriter\":[\"技术作家\"]}");
//#endregion
export { messages };
//#region src/locales/fr/careers.mjs
var messages = JSON.parse("{\"careers-benefits.competitivePay\":[\"Rémunération compétitive\"],\"careers-benefits.openSourceTime\":[\"Temps dédié à l'open source\"],\"careers-benefits.topOfMarketCompensation\":[\"Rémunération au-dessus du marché\"],\"careers-benefits.workFromAnywhereInThe\":[\"Travaillez de n'importe où dans le monde\"],\"careers-header.joinOurMissionToImprove\":[\"Rejoignez notre mission pour améliorer l'écosystème de l'internationalisation. Nous sommes une équipe privilégiant le télétravail qui valorise l'impact, la transparence et l'apprentissage continu.\"],\"careers-header.title\":[\"Carrières\"],\"open-positions.applyNow\":[\"Postuler maintenant\"],\"open-positions.backendEngineer\":[\"Ingénieur Backend\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.\"],\"open-positions.community\":[\"Communauté\"],\"open-positions.createComprehensiveGuidesApiReferences\":[\"Créer des guides complets, des références d'API et des tutoriels pour notre plateforme de benchmarking.\"],\"open-positions.designAndScaleOurCloud\":[\"Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de passages automatisés par jour.\"],\"open-positions.devrelEngineer\":[\"Ingénieur DevRel\"],\"open-positions.documentation\":[\"Documentation\"],\"open-positions.engageWithTheI18nCommunity\":[\"Interagir avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.\"],\"open-positions.engineering\":[\"Ingénierie\"],\"open-positions.ensureTheAccuracyAndReliability\":[\"Garantir l'exactitude et la fiabilité des résultats de benchmark par des tests et des validations rigoureux.\"],\"open-positions.fullTime\":[\"Temps plein\"],\"open-positions.openPositions\":[\"Postes ouverts\"],\"open-positions.partTime\":[\"Temps partiel\"],\"open-positions.qaEngineer\":[\"Ingénieur QA\"],\"open-positions.remote\":[\"À distance\"],\"open-positions.sanFranciscoRemote\":[\"San Francisco / À distance\"],\"open-positions.seniorFrontendEngineer\":[\"Ingénieur Frontend Senior\"],\"open-positions.technicalWriter\":[\"Rédacteur technique\"]}");
//#endregion
export { messages };
//#region src/locales/it/careers.mjs
var messages = JSON.parse("{\"careers-benefits.competitivePay\":[\"Retribuzione competitiva\"],\"careers-benefits.openSourceTime\":[\"Tempo dedicato all'open source\"],\"careers-benefits.topOfMarketCompensation\":[\"Compensazione ai vertici del mercato\"],\"careers-benefits.workFromAnywhereInThe\":[\"Lavora da qualsiasi parte del mondo\"],\"careers-header.joinOurMissionToImprove\":[\"Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team che lavora principalmente in remoto e che valorizza l'impatto, la trasparenza e l'apprendimento continuo.\"],\"careers-header.title\":[\"Carriere\"],\"open-positions.applyNow\":[\"Candidati ora\"],\"open-positions.backendEngineer\":[\"Ingegnere Backend\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.\"],\"open-positions.community\":[\"Comunità\"],\"open-positions.createComprehensiveGuidesApiReferences\":[\"Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.\"],\"open-positions.designAndScaleOurCloud\":[\"Progetta e scala la nostra infrastruttura di benchmarking cloud gestendo migliaia di esecuzioni automatiche giornaliere.\"],\"open-positions.devrelEngineer\":[\"Ingegnere DevOps\"],\"open-positions.documentation\":[\"Documentazione\"],\"open-positions.engageWithTheI18nCommunity\":[\"Interagisci con la comunità i18n attraverso conferenze, workshop, post sul blog e contributi open source.\"],\"open-positions.engineering\":[\"Ingegneria\"],\"open-positions.ensureTheAccuracyAndReliability\":[\"Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.\"],\"open-positions.fullTime\":[\"Tempo pieno\"],\"open-positions.openPositions\":[\"Posizioni aperte\"],\"open-positions.partTime\":[\"Part-time\"],\"open-positions.qaEngineer\":[\"Ingegnere QA\"],\"open-positions.remote\":[\"Remoto\"],\"open-positions.sanFranciscoRemote\":[\"San Francisco / Remoto\"],\"open-positions.seniorFrontendEngineer\":[\"Ingegnere Frontend Senior\"],\"open-positions.technicalWriter\":[\"Scrittore tecnico\"]}");
//#endregion
export { messages };
//#region src/locales/es/careers.mjs
var messages = JSON.parse("{\"careers-benefits.competitivePay\":[\"Pago competitivo\"],\"careers-benefits.openSourceTime\":[\"Tiempo dedicado al código abierto\"],\"careers-benefits.topOfMarketCompensation\":[\"Compensación por encima del mercado\"],\"careers-benefits.workFromAnywhereInThe\":[\"Trabaje desde cualquier parte del mundo\"],\"careers-header.joinOurMissionToImprove\":[\"Únase a nuestra misión para mejorar el ecosistema de internacionalización. Somos un equipo que prioriza el trabajo remoto y valora el impacto, la transparencia y el aprendizaje continuo.\"],\"careers-header.title\":[\"Carreras\"],\"open-positions.applyNow\":[\"Solicitar ahora\"],\"open-positions.backendEngineer\":[\"Ingeniero Backend\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"Construir y mantener nuestro panel de benchmarking y herramientas de desarrollo utilizando React, TypeScript y Vite.\"],\"open-positions.community\":[\"Comunidad\"],\"open-positions.createComprehensiveGuidesApiReferences\":[\"Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.\"],\"open-positions.designAndScaleOurCloud\":[\"Diseñar y escalar nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automáticas diarias.\"],\"open-positions.devrelEngineer\":[\"Ingeniero DevRel\"],\"open-positions.documentation\":[\"Documentación\"],\"open-positions.engageWithTheI18nCommunity\":[\"Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.\"],\"open-positions.engineering\":[\"Ingeniería\"],\"open-positions.ensureTheAccuracyAndReliability\":[\"Garantizar la precisión y confiabilidad de los resultados de benchmark mediante pruebas y validaciones rigurosas.\"],\"open-positions.fullTime\":[\"Tiempo completo\"],\"open-positions.openPositions\":[\"Puestos abiertos\"],\"open-positions.partTime\":[\"Tiempo parcial\"],\"open-positions.qaEngineer\":[\"Ingeniero QA\"],\"open-positions.remote\":[\"Remoto\"],\"open-positions.sanFranciscoRemote\":[\"San Francisco / Remoto\"],\"open-positions.seniorFrontendEngineer\":[\"Ingeniero Frontend Senior\"],\"open-positions.technicalWriter\":[\"Redactor técnico\"]}");
//#endregion
export { messages };
//#region src/locales/ko/careers.mjs
var messages = JSON.parse("{\"careers-benefits.competitivePay\":[\"경쟁력 있는 급여\"],\"careers-benefits.openSourceTime\":[\"오픈 소스 기여 시간\"],\"careers-benefits.topOfMarketCompensation\":[\"업계 최고 수준의 보상\"],\"careers-benefits.workFromAnywhereInThe\":[\"전 세계 어디서나 근무 가능\"],\"careers-header.joinOurMissionToImprove\":[\"국제화 생태계를 개선하기 위한 우리의 사명에 동참하세요. 저희는 영향력, 투명성 및 지속적인 학습을 소중히 여기는 원격 근무 우선 팀입니다.\"],\"careers-header.title\":[\"채용\"],\"open-positions.applyNow\":[\"지금 지원하기\"],\"open-positions.backendEngineer\":[\"백엔드 엔지니어\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.\"],\"open-positions.community\":[\"커뮤니티\"],\"open-positions.createComprehensiveGuidesApiReferences\":[\"벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 작성합니다.\"],\"open-positions.designAndScaleOurCloud\":[\"매일 수천 개의 자동화된 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.\"],\"open-positions.devrelEngineer\":[\"DevRel 엔지니어\"],\"open-positions.documentation\":[\"문서화\"],\"open-positions.engageWithTheI18nCommunity\":[\"발표, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통합니다.\"],\"open-positions.engineering\":[\"엔지니어링\"],\"open-positions.ensureTheAccuracyAndReliability\":[\"철저한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.\"],\"open-positions.fullTime\":[\"정규직\"],\"open-positions.openPositions\":[\"채용 중인 포지션\"],\"open-positions.partTime\":[\"아르바이트\"],\"open-positions.qaEngineer\":[\"QA 엔지니어\"],\"open-positions.remote\":[\"원격\"],\"open-positions.sanFranciscoRemote\":[\"샌프란시스코 / 원격\"],\"open-positions.seniorFrontendEngineer\":[\"시니어 프론트엔드 엔지니어\"],\"open-positions.technicalWriter\":[\"테크니컬 라이터\"]}");
//#endregion
export { messages };
//#region src/locales/ru/careers.mjs
var messages = JSON.parse("{\"careers-benefits.competitivePay\":[\"Конкурентоспособная оплата\"],\"careers-benefits.openSourceTime\":[\"Время на open source\"],\"careers-benefits.topOfMarketCompensation\":[\"Компенсация выше рыночной\"],\"careers-benefits.workFromAnywhereInThe\":[\"Работайте из любой точки мира\"],\"careers-header.joinOurMissionToImprove\":[\"Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы команда, работающая удаленно, которая ценит влияние, прозрачность и непрерывное обучение.\"],\"careers-header.title\":[\"Карьера\"],\"open-positions.applyNow\":[\"Подать заявку\"],\"open-positions.backendEngineer\":[\"Бэкенд-инженер\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"Создание и поддержка нашей панели тестирования и инструментов разработчика с использованием React, TypeScript и Vite.\"],\"open-positions.community\":[\"Сообщество\"],\"open-positions.createComprehensiveGuidesApiReferences\":[\"Создание подробных руководств, справочников по API и учебных пособий для нашей платформы тестирования.\"],\"open-positions.designAndScaleOurCloud\":[\"Проектирование и масштабирование нашей облачной инфраструктуры для тестирования, обрабатывающей тысячи автоматических запусков ежедневно.\"],\"open-positions.devrelEngineer\":[\"DevRel-инженер\"],\"open-positions.documentation\":[\"Документация\"],\"open-positions.engageWithTheI18nCommunity\":[\"Взаимодействие с сообществом i18n через выступления, семинары, посты в блоге и вклад в открытый исходный код.\"],\"open-positions.engineering\":[\"Разработка\"],\"open-positions.ensureTheAccuracyAndReliability\":[\"Обеспечение точности и надежности результатов тестирования посредством строгого тестирования и валидации.\"],\"open-positions.fullTime\":[\"Полный рабочий день\"],\"open-positions.openPositions\":[\"Открытые вакансии\"],\"open-positions.partTime\":[\"Неполный рабочий день\"],\"open-positions.qaEngineer\":[\"QA-инженер\"],\"open-positions.remote\":[\"Удаленно\"],\"open-positions.sanFranciscoRemote\":[\"Сан-Франциско / Удаленно\"],\"open-positions.seniorFrontendEngineer\":[\"Старший фронтенд-инженер\"],\"open-positions.technicalWriter\":[\"Технический писатель\"]}");
//#endregion
export { messages };
//#region src/locales/pt/careers.mjs
var messages = JSON.parse("{\"careers-benefits.competitivePay\":[\"Remuneração competitiva\"],\"careers-benefits.openSourceTime\":[\"Tempo dedicado ao código aberto\"],\"careers-benefits.topOfMarketCompensation\":[\"Remuneração acima da média do mercado\"],\"careers-benefits.workFromAnywhereInThe\":[\"Trabalhe de qualquer lugar do mundo\"],\"careers-header.joinOurMissionToImprove\":[\"Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe que prioriza o trabalho remoto e valoriza o impacto, a transparência e o aprendizado contínuo.\"],\"careers-header.title\":[\"Carreiras\"],\"open-positions.applyNow\":[\"Candidatar-se agora\"],\"open-positions.backendEngineer\":[\"Engenheiro Backend\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"Construir e manter nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.\"],\"open-positions.community\":[\"Comunidade\"],\"open-positions.createComprehensiveGuidesApiReferences\":[\"Criar guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.\"],\"open-positions.designAndScaleOurCloud\":[\"Projetar e escalar nossa infraestrutura de benchmarking na nuvem, lidando com milhares de execuções automatizadas diariamente.\"],\"open-positions.devrelEngineer\":[\"Engenheiro DevRel\"],\"open-positions.documentation\":[\"Documentação\"],\"open-positions.engageWithTheI18nCommunity\":[\"Interagir com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.\"],\"open-positions.engineering\":[\"Engenharia\"],\"open-positions.ensureTheAccuracyAndReliability\":[\"Garantir a precisão e confiabilidade dos resultados de benchmark por meio de testes e validações rigorosos.\"],\"open-positions.fullTime\":[\"Tempo integral\"],\"open-positions.openPositions\":[\"Vagas abertas\"],\"open-positions.partTime\":[\"Tempo parcial\"],\"open-positions.qaEngineer\":[\"Engenheiro QA\"],\"open-positions.remote\":[\"Remoto\"],\"open-positions.sanFranciscoRemote\":[\"San Francisco / Remoto\"],\"open-positions.seniorFrontendEngineer\":[\"Engenheiro Frontend Sênior\"],\"open-positions.technicalWriter\":[\"Redator Técnico\"]}");
//#endregion
export { messages };
//#region src/locales/it/contact.mjs
var messages = JSON.parse("{\"contact-form.bugReport\":[\"Segnalazione di bug\"],\"contact-form.describeYourQuestionOrIdea\":[\"Descrivi la tua domanda o idea...\"],\"contact-form.methodologyQuestion\":[\"Domanda sulla metodologia\"],\"contact-form.newBenchmarkIdea\":[\"Nuova idea di benchmark\"],\"contact-form.sendMessage\":[\"Invia messaggio\"],\"contact-form.yourName\":[\"Il tuo nome\"],\"contact-header.getInTouch\":[\"Mettiti in contatto\"],\"contact-header.haveIdeasFoundABug\":[\"Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo\"]}");
//#endregion
export { messages };
//#region src/locales/ko/contact.mjs
var messages = JSON.parse("{\"contact-form.bugReport\":[\"버그 보고\"],\"contact-form.describeYourQuestionOrIdea\":[\"질문이나 아이디어를 설명해주세요...\"],\"contact-form.methodologyQuestion\":[\"방법론 질문\"],\"contact-form.newBenchmarkIdea\":[\"새로운 벤치마크 아이디어\"],\"contact-form.sendMessage\":[\"메시지 보내기\"],\"contact-form.yourName\":[\"이름\"],\"contact-header.getInTouch\":[\"연락하기\"],\"contact-header.haveIdeasFoundABug\":[\"아이디어가 있거나 버그를 발견했나요? 아니면 벤치마크를 기여하고 싶으신가요? 다음 주소로 연락주세요.\"]}");
//#endregion
export { messages };
//#region src/locales/es/contact.mjs
var messages = JSON.parse("{\"contact-form.bugReport\":[\"Informe de error\"],\"contact-form.describeYourQuestionOrIdea\":[\"Describa su pregunta o idea...\"],\"contact-form.methodologyQuestion\":[\"Pregunta de metodología\"],\"contact-form.newBenchmarkIdea\":[\"Nueva idea de benchmark\"],\"contact-form.sendMessage\":[\"Enviar mensaje\"],\"contact-form.yourName\":[\"Su nombre\"],\"contact-header.getInTouch\":[\"Póngase en contacto\"],\"contact-header.haveIdeasFoundABug\":[\"¿Tiene ideas, encontró un error o quiere contribuir con un benchmark? Contáctenos en\"]}");
//#endregion
export { messages };
//#region src/locales/pt/contact.mjs
var messages = JSON.parse("{\"contact-form.bugReport\":[\"Relatório de bug\"],\"contact-form.describeYourQuestionOrIdea\":[\"Descreva sua pergunta ou ideia...\"],\"contact-form.methodologyQuestion\":[\"Pergunta sobre metodologia\"],\"contact-form.newBenchmarkIdea\":[\"Nova ideia de benchmark\"],\"contact-form.sendMessage\":[\"Enviar mensagem\"],\"contact-form.yourName\":[\"Seu nome\"],\"contact-header.getInTouch\":[\"Entre em contato\"],\"contact-header.haveIdeasFoundABug\":[\"Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em\"]}");
//#endregion
export { messages };
//#region src/locales/ru/contact.mjs
var messages = JSON.parse("{\"contact-form.bugReport\":[\"Отчет об ошибке\"],\"contact-form.describeYourQuestionOrIdea\":[\"Опишите ваш вопрос или идею...\"],\"contact-form.methodologyQuestion\":[\"Вопрос по методологии\"],\"contact-form.newBenchmarkIdea\":[\"Новая идея для бенчмарка\"],\"contact-form.sendMessage\":[\"Отправить сообщение\"],\"contact-form.yourName\":[\"Ваше имя\"],\"contact-header.getInTouch\":[\"Свяжитесь с нами\"],\"contact-header.haveIdeasFoundABug\":[\"Есть идеи, нашли баг или хотите предложить бенчмарк? Свяжитесь с нами по адресу\"]}");
//#endregion
export { messages };
//#region src/locales/zh/contact.mjs
var messages = JSON.parse("{\"contact-form.bugReport\":[\"Bug 报告\"],\"contact-form.describeYourQuestionOrIdea\":[\"描述您的问题或想法...\"],\"contact-form.methodologyQuestion\":[\"方法论问题\"],\"contact-form.newBenchmarkIdea\":[\"新基准测试想法\"],\"contact-form.sendMessage\":[\"发送消息\"],\"contact-form.yourName\":[\"您的姓名\"],\"contact-header.getInTouch\":[\"联系我们\"],\"contact-header.haveIdeasFoundABug\":[\"有想法、发现了 Bug 或想贡献基准测试？请联系我们：\"]}");
//#endregion
export { messages };
//#region src/locales/ja/contact.mjs
var messages = JSON.parse("{\"contact-form.bugReport\":[\"バグ報告\"],\"contact-form.describeYourQuestionOrIdea\":[\"質問やアイデアの詳細を記入してください...\"],\"contact-form.methodologyQuestion\":[\"方法論に関する質問\"],\"contact-form.newBenchmarkIdea\":[\"新しいベンチマークのアイデア\"],\"contact-form.sendMessage\":[\"メッセージを送信\"],\"contact-form.yourName\":[\"お名前\"],\"contact-header.getInTouch\":[\"お問い合わせ\"],\"contact-header.haveIdeasFoundABug\":[\"アイデアがある、バグを見つけた、またはベンチマークを提供したいですか？こちらまでご連絡ください：\"]}");
//#endregion
export { messages };
//#region src/locales/fr/contact.mjs
var messages = JSON.parse("{\"contact-form.bugReport\":[\"Rapport de bug\"],\"contact-form.describeYourQuestionOrIdea\":[\"Décrivez votre question ou idée...\"],\"contact-form.methodologyQuestion\":[\"Question sur la méthodologie\"],\"contact-form.newBenchmarkIdea\":[\"Nouvelle idée de benchmark\"],\"contact-form.sendMessage\":[\"Envoyer le message\"],\"contact-form.yourName\":[\"Votre nom\"],\"contact-header.getInTouch\":[\"Contactez-nous\"],\"contact-header.haveIdeasFoundABug\":[\"Vous avez des idées, trouvé un bug ou voulez proposer un benchmark ? Contactez-nous à\"]}");
//#endregion
export { messages };
//#region src/locales/de/contact.mjs
var messages = JSON.parse("{\"contact-form.bugReport\":[\"Fehlerbericht\"],\"contact-form.describeYourQuestionOrIdea\":[\"Beschreiben Sie Ihre Frage oder Idee...\"],\"contact-form.methodologyQuestion\":[\"Frage zur Methodik\"],\"contact-form.newBenchmarkIdea\":[\"Neue Benchmark-Idee\"],\"contact-form.sendMessage\":[\"Nachricht senden\"],\"contact-form.yourName\":[\"Ihr Name\"],\"contact-header.getInTouch\":[\"Kontakt aufnehmen\"],\"contact-header.haveIdeasFoundABug\":[\"Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter\"]}");
//#endregion
export { messages };
//#region src/locales/en/contact.mjs
var messages = JSON.parse("{\"contact-form.bugReport\":[\"Bug Report\"],\"contact-form.describeYourQuestionOrIdea\":[\"Describe your question or idea...\"],\"contact-form.methodologyQuestion\":[\"Methodology Question\"],\"contact-form.newBenchmarkIdea\":[\"New Benchmark Idea\"],\"contact-form.sendMessage\":[\"Send Message\"],\"contact-form.yourName\":[\"Your name\"],\"contact-header.getInTouch\":[\"Get in Touch\"],\"contact-header.haveIdeasFoundABug\":[\"Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at\"]}");
//#endregion
export { messages };
//#region src/locales/ko/faq.mjs
var messages = JSON.parse("{\"faq-header1.everythingYouNeedToKnow\":[\"i18n Benchmark에 대해 알아야 할 모든 것.\"],\"faq-header1.frequentlyAskedQuestions\":[\"자주 묻는 질문\"],\"faq-list.canISubmitMyOwn\":[\"저만의 벤치마크를 제출할 수 있나요?\"],\"faq-list.doYouOfferConsultingServices\":[\"컨설팅 서비스를 제공하나요?\"],\"faq-list.howAreBenchmarksConducted\":[\"벤치마크는 어떻게 진행되나요?\"],\"faq-list.howCanIContribute\":[\"어떻게 기여할 수 있나요?\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"벤치마크는 얼마나 자주 업데이트되나요?\"],\"faq-list.isTheDataReliable\":[\"데이터는 신뢰할 수 있나요?\"],\"faq-list.thereAreManyWaysTo\":[\"기여하는 방법은 다양합니다: 벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 또는 프로젝트 후원. 자세한 내용은 GitHub 저장소를 방문하세요.\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"웜업 실행, 이상치 감지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 모든 원시 데이터는 완전한 투명성을 위해 분석 결과와 함께 게시됩니다.\"],\"faq-list.weReRunAllBenchmarks\":[\"매주 각 라이브러리의 최신 안정 버전에 대해 모든 벤치마크를 다시 실행합니다. 주요 버전이 릴리스되면 즉시 재벤치마크 주기가 시작됩니다.\"],\"faq-list.weRunStandardizedTestsIn\":[\"일관된 하드웨어를 사용하는 격리된 환경에서 표준화된 테스트를 실행합니다. 각 벤치마크는 통계적 유의성을 확보하기 위해 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 저장소에 공개되어 있습니다.\"],\"faq-list.weSupportReactI18nextReact\":[\"react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee를 지원합니다.\"],\"faq-list.whatIsI18nBenchmark\":[\"i18n Benchmark란 무엇인가요?\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"i18n Benchmark는 JavaScript 및 React 애플리케이션용 국제화 라이브러리의 성능, 번들 크기 및 개발자 경험을 측정하고 비교하는 오픈 소스 벤치마킹 제품군입니다.\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"현재 어떤 라이브러리가 지원되나요?\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"네! 커뮤니티의 벤치마크 제출을 환영합니다. 저장소를 포크하고 기여 가이드에 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출하세요. 저희 팀이 검토 후 마지(merge)할 것입니다.\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"네, 엔터프라이즈 플랜에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 특정 사례, 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다.\"]}");
//#endregion
export { messages };
//#region src/locales/fr/faq.mjs
var messages = JSON.parse("{\"faq-header1.everythingYouNeedToKnow\":[\"Tout ce que vous devez savoir sur i18n Benchmark.\"],\"faq-header1.frequentlyAskedQuestions\":[\"Foire aux questions\"],\"faq-list.canISubmitMyOwn\":[\"Puis-je soumettre mes propres benchmarks ?\"],\"faq-list.doYouOfferConsultingServices\":[\"Offrez-vous des services de conseil ?\"],\"faq-list.howAreBenchmarksConducted\":[\"Comment les benchmarks sont-ils menés ?\"],\"faq-list.howCanIContribute\":[\"Comment puis-je contribuer ?\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"À quelle fréquence les benchmarks sont-ils mis à jour ?\"],\"faq-list.isTheDataReliable\":[\"Les données sont-elles fiables ?\"],\"faq-list.thereAreManyWaysTo\":[\"Il y a de nombreuses façons de contribuer : soumettre des benchmarks, améliorer la documentation, signaler des bugs, suggérer de nouvelles métriques ou parrainer le projet. Visitez notre dépôt GitHub pour plus de détails.\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"Nous suivons une méthodologie statistique rigoureuse, incluant des phases de préchauffage, la détection des valeurs aberrantes et des intervalles de confiance. Toutes les données brutes sont publiées avec notre analyse pour une transparence totale.\"],\"faq-list.weReRunAllBenchmarks\":[\"Nous relançons tous les benchmarks chaque semaine avec les dernières versions stables de chaque bibliothèque. Les sorties de versions majeures déclenchent un cycle de re-benchmarking immédiat.\"],\"faq-list.weRunStandardizedTestsIn\":[\"Nous effectuons des tests standardisés dans des environnements isolés en utilisant un matériel cohérent. Chaque benchmark est répété plusieurs fois pour garantir une signification statistique. Toutes les configurations de test sont disponibles publiquement dans notre dépôt GitHub.\"],\"faq-list.weSupportReactI18nextReact\":[\"Nous supportons react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react et Tolgee.\"],\"faq-list.whatIsI18nBenchmark\":[\"Qu'est-ce qu'i18n Benchmark ?\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"i18n Benchmark est une suite de tests open source qui mesure et compare les performances, la taille du bundle et l'expérience développeur des bibliothèques d'internationalisation pour les applications JavaScript et React.\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"Quelles bibliothèques sont actuellement supportées ?\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"Oui ! Les soumissions de benchmarks par la communauté sont les bienvenues. Forkez notre dépôt, ajoutez votre benchmark en suivant notre guide de contribution et soumettez une pull request. Notre équipe examinera et fusionnera les soumissions qualifiées.\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"Oui, notre offre Enterprise inclut des heures de conseil pour les équipes évaluant les solutions i18n. Nous pouvons fournir des recommandations personnalisées basées sur votre cas d'utilisation, votre échelle et vos contraintes spécifiques.\"]}");
//#endregion
export { messages };
//#region src/locales/ru/faq.mjs
var messages = JSON.parse("{\"faq-header1.everythingYouNeedToKnow\":[\"Все, что вам нужно знать об i18n Benchmark.\"],\"faq-header1.frequentlyAskedQuestions\":[\"Часто задаваемые вопросы\"],\"faq-list.canISubmitMyOwn\":[\"Могу ли я отправить свои собственные бенчмарки?\"],\"faq-list.doYouOfferConsultingServices\":[\"Предлагаете ли вы консультационные услуги?\"],\"faq-list.howAreBenchmarksConducted\":[\"Как проводятся бенчмарки?\"],\"faq-list.howCanIContribute\":[\"Как я могу помочь?\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"Как часто обновляются бенчмарки?\"],\"faq-list.isTheDataReliable\":[\"Надежны ли данные?\"],\"faq-list.thereAreManyWaysTo\":[\"Есть много способов внести свой вклад: отправить бенчмарки, улучшить документацию, сообщить о багах, предложить новые метрики или спонсировать проект. Посетите наш репозиторий GitHub для более подробной информации.\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с нашим анализом для полной прозрачности.\"],\"faq-list.weReRunAllBenchmarks\":[\"Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий вызывает немедленный цикл повторного тестирования.\"],\"faq-list.weRunStandardizedTestsIn\":[\"Мы проводим стандартизированные тесты в изолированных средах с использованием единообразного оборудования. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов открыты в нашем репозитории GitHub.\"],\"faq-list.weSupportReactI18nextReact\":[\"Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.\"],\"faq-list.whatIsI18nBenchmark\":[\"Что такое i18n Benchmark?\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"i18n Benchmark — это набор тестов с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчика библиотек интернационализации для приложений JavaScript и React.\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"Какие библиотеки поддерживаются в настоящее время?\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"Да! Мы приветствуем отправку бенчмарков от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя нашему руководству по внесению вклада, и отправьте пулл-реквест. Наша команда рассмотрит и примет квалифицированные заявки.\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"Да, наш корпоративный план включает консультационные часы для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации, основанные на вашем конкретном случае использования, масштабе и ограничениях.\"]}");
//#endregion
export { messages };
//#region src/locales/it/faq.mjs
var messages = JSON.parse("{\"faq-header1.everythingYouNeedToKnow\":[\"Tutto quello che c'è da sapere su i18n Benchmark.\"],\"faq-header1.frequentlyAskedQuestions\":[\"Domande frequenti\"],\"faq-list.canISubmitMyOwn\":[\"Posso inviare i miei benchmark?\"],\"faq-list.doYouOfferConsultingServices\":[\"Offrite servizi di consulenza?\"],\"faq-list.howAreBenchmarksConducted\":[\"Come vengono condotti i benchmark?\"],\"faq-list.howCanIContribute\":[\"Come posso contribuire?\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"Con quale frequenza vengono aggiornati i benchmark?\"],\"faq-list.isTheDataReliable\":[\"I dati sono affidabili?\"],\"faq-list.thereAreManyWaysTo\":[\"Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"Seguiamo una rigorosa metodologia statistica che include corse di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per una completa trasparenza.\"],\"faq-list.weReRunAllBenchmarks\":[\"Eseguiamo nuovamente tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. Le versioni principali in uscita attivano un immediato ciclo di re-benchmark.\"],\"faq-list.weRunStandardizedTestsIn\":[\"Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni di test sono disponibili pubblicamente nel nostro repository GitHub.\"],\"faq-list.weSupportReactI18nextReact\":[\"Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\"],\"faq-list.whatIsI18nBenchmark\":[\"Cos'è i18n Benchmark?\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"i18n Benchmark è una suite di test open source che misura e confronta le prestazioni, la dimensione del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"Quali librerie sono attualmente supportate?\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano le soluzioni i18n. Possiamo fornire raccomandazioni personalizzate basate sul caso d'uso specifico, sulla scala e sui vincoli.\"]}");
//#endregion
export { messages };
//#region src/locales/en/faq.mjs
var messages = JSON.parse("{\"faq-header1.everythingYouNeedToKnow\":[\"Everything you need to know about i18n Benchmark.\"],\"faq-header1.frequentlyAskedQuestions\":[\"Frequently Asked Questions\"],\"faq-list.canISubmitMyOwn\":[\"Can I submit my own benchmarks?\"],\"faq-list.doYouOfferConsultingServices\":[\"Do you offer consulting services?\"],\"faq-list.howAreBenchmarksConducted\":[\"How are benchmarks conducted?\"],\"faq-list.howCanIContribute\":[\"How can I contribute?\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"How often are benchmarks updated?\"],\"faq-list.isTheDataReliable\":[\"Is the data reliable?\"],\"faq-list.thereAreManyWaysTo\":[\"There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\"],\"faq-list.weReRunAllBenchmarks\":[\"We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\"],\"faq-list.weRunStandardizedTestsIn\":[\"We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\"],\"faq-list.weSupportReactI18nextReact\":[\"We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\"],\"faq-list.whatIsI18nBenchmark\":[\"What is i18n Benchmark?\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"Which libraries are currently supported?\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\"]}");
//#endregion
export { messages };
//#region src/locales/pt/faq.mjs
var messages = JSON.parse("{\"faq-header1.everythingYouNeedToKnow\":[\"Tudo o que você precisa saber sobre o i18n Benchmark.\"],\"faq-header1.frequentlyAskedQuestions\":[\"Perguntas Frequentes\"],\"faq-list.canISubmitMyOwn\":[\"Posso enviar meus próprios benchmarks?\"],\"faq-list.doYouOfferConsultingServices\":[\"Vocês oferecem serviços de consultoria?\"],\"faq-list.howAreBenchmarksConducted\":[\"Como os benchmarks são conduzidos?\"],\"faq-list.howCanIContribute\":[\"Como posso contribuir?\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"Com que frequência os benchmarks são atualizados?\"],\"faq-list.isTheDataReliable\":[\"Os dados são confiáveis?\"],\"faq-list.thereAreManyWaysTo\":[\"Existem muitas maneiras de contribuir: envie benchmarks, melhore a documentação, relate bugs, sugira novas métricas ou patrocine o projeto. Visite nosso repositório no GitHub para mais detalhes.\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de outliers e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.\"],\"faq-list.weReRunAllBenchmarks\":[\"Executamos novamente todos os benchmarks semanalmente com as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo imediato de re-benchmark.\"],\"faq-list.weRunStandardizedTestsIn\":[\"Executamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório no GitHub.\"],\"faq-list.weSupportReactI18nextReact\":[\"Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\"],\"faq-list.whatIsI18nBenchmark\":[\"O que é o i18n Benchmark?\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"O i18n Benchmark é uma suíte de testes de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor de bibliotecas de internacionalização para aplicativos JavaScript e React.\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"Quais bibliotecas são suportadas atualmente?\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"Sim! Submissões de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base em seu caso de uso, escala e restrições específicas.\"]}");
//#endregion
export { messages };
//#region src/locales/es/faq.mjs
var messages = JSON.parse("{\"faq-header1.everythingYouNeedToKnow\":[\"Todo lo que necesita saber sobre i18n Benchmark.\"],\"faq-header1.frequentlyAskedQuestions\":[\"Preguntas frecuentes\"],\"faq-list.canISubmitMyOwn\":[\"¿Puedo enviar mis propios benchmarks?\"],\"faq-list.doYouOfferConsultingServices\":[\"¿Ofrecen servicios de consultoría?\"],\"faq-list.howAreBenchmarksConducted\":[\"¿Cómo se realizan los benchmarks?\"],\"faq-list.howCanIContribute\":[\"¿Cómo puedo contribuir?\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"¿Con qué frecuencia se actualizarán los benchmarks?\"],\"faq-list.isTheDataReliable\":[\"¿Son fiables los datos?\"],\"faq-list.thereAreManyWaysTo\":[\"Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para obtener más detalles.\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una transparencia total.\"],\"faq-list.weReRunAllBenchmarks\":[\"Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.\"],\"faq-list.weRunStandardizedTestsIn\":[\"Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para garantizar la significancia estadística. Todas las configuraciones de prueba están disponibles públicamente en nuestro repositorio de GitHub.\"],\"faq-list.weSupportReactI18nextReact\":[\"Admitimos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.\"],\"faq-list.whatIsI18nBenchmark\":[\"¿Qué es i18n Benchmark?\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"i18n Benchmark es una suite de pruebas de código abierto que mide y compara el rendimiento, el tamaño del paquete y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"¿Qué bibliotecas se admiten actualmente?\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"¡Sí! Los envíos de benchmarks de la comunidad son bienvenidos. Bifurque nuestro repositorio, añada su benchmark siguiendo nuestra guía de contribución y envíe una pull request. Nuestro equipo revisará y fusionará los envíos que califiquen.\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones.\"]}");
//#endregion
export { messages };
//#region src/locales/zh/faq.mjs
var messages = JSON.parse("{\"faq-header1.everythingYouNeedToKnow\":[\"关于 i18n Benchmark 您需要了解的一切。\"],\"faq-header1.frequentlyAskedQuestions\":[\"常见问题\"],\"faq-list.canISubmitMyOwn\":[\"我可以提交自己的基准测试吗？\"],\"faq-list.doYouOfferConsultingServices\":[\"你们提供咨询服务吗？\"],\"faq-list.howAreBenchmarksConducted\":[\"如何进行基准测试？\"],\"faq-list.howCanIContribute\":[\"我该如何贡献？\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"基准测试多久更新一次？\"],\"faq-list.isTheDataReliable\":[\"数据可靠吗？\"],\"faq-list.thereAreManyWaysTo\":[\"有很多贡献方式：提交基准测试、改进文档、报告 Bug、建议新指标或赞助项目。访问我们的 GitHub 仓库了解更多详情。\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都会随我们的分析一起发布，以确保完全透明。\"],\"faq-list.weReRunAllBenchmarks\":[\"我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本更新将立即触发重新测试周期。\"],\"faq-list.weRunStandardizedTestsIn\":[\"我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都会重复多次，以确保统计显著性。所有测试配置都可以在我们的 GitHub 仓库中公开访问。\"],\"faq-list.weSupportReactI18nextReact\":[\"我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。\"],\"faq-list.whatIsI18nBenchmark\":[\"什么是 i18n Benchmark？\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"i18n Benchmark 是一个开源基准测试套件，用于测量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"目前支持哪些库？\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"是的！欢迎社区提交基准测试。Fork 我们的仓库，按照我们的贡献指南添加您的基准测试，并提交 Pull Request。我们的团队将审查并合并合格的提交。\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和约束提供量身定制的建议。\"]}");
//#endregion
export { messages };
//#region src/locales/ja/faq.mjs
var messages = JSON.parse("{\"faq-header1.everythingYouNeedToKnow\":[\"i18n Benchmarkについて知っておくべきすべてのこと。\"],\"faq-header1.frequentlyAskedQuestions\":[\"よくある質問\"],\"faq-list.canISubmitMyOwn\":[\"自分のベンチマークを提出できますか？\"],\"faq-list.doYouOfferConsultingServices\":[\"コンサルティングサービスは提供していますか？\"],\"faq-list.howAreBenchmarksConducted\":[\"ベンチマークはどのように行われますか？\"],\"faq-list.howCanIContribute\":[\"どのように貢献できますか？\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"ベンチマークはどのくらいの頻度で更新されますか？\"],\"faq-list.isTheDataReliable\":[\"データは信頼できますか？\"],\"faq-list.thereAreManyWaysTo\":[\"貢献する方法はたくさんあります。ベンチマークの提出、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。すべての生データは、完全な透明性を確保するために分析結果とともに公開されます。\"],\"faq-list.weReRunAllBenchmarks\":[\"各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。\"],\"faq-list.weRunStandardizedTestsIn\":[\"一貫したハードウェアを使用し、隔離された環境で標準化されたテストを実行します。各ベンチマークは、統計的な有意性を確保するために複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。\"],\"faq-list.weSupportReactI18nextReact\":[\"react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。\"],\"faq-list.whatIsI18nBenchmark\":[\"i18n Benchmarkとは何ですか？\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"i18n Benchmarkは、JavaScriptおよびReactアプリケーション向けの国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者エクスペリエンスを測定および比較するオープンソースのベンチマークスイートです。\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"現在サポートされているライブラリは何ですか？\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"はい！コミュニティからのベンチマークの提出を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。私たちのチームが内容を確認し、適格なものをマージします。\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"はい、Enterpriseプランにはi18nソリューションを評価するチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいたカスタマイズされた推奨事項を提供できます。\"]}");
//#endregion
export { messages };
//#region src/locales/de/faq.mjs
var messages = JSON.parse("{\"faq-header1.everythingYouNeedToKnow\":[\"Alles, was Sie über i18n Benchmark wissen müssen.\"],\"faq-header1.frequentlyAskedQuestions\":[\"Häufig gestellte Fragen\"],\"faq-list.canISubmitMyOwn\":[\"Kann ich meine eigenen Benchmarks einreichen?\"],\"faq-list.doYouOfferConsultingServices\":[\"Bieten Sie Beratungsdienstleistungen an?\"],\"faq-list.howAreBenchmarksConducted\":[\"Wie werden Benchmarks durchgeführt?\"],\"faq-list.howCanIContribute\":[\"Wie kann ich beitragen?\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"Wie oft werden Benchmarks aktualisiert?\"],\"faq-list.isTheDataReliable\":[\"Sind die Daten zuverlässig?\"],\"faq-list.thereAreManyWaysTo\":[\"Es gibt viele Möglichkeiten, beizutragen: Benchmarks einreichen, die Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Läufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.\"],\"faq-list.weReRunAllBenchmarks\":[\"Wir führen alle Benchmarks wöchentlich für die neuesten stabilen Versionen jeder Bibliothek erneut aus. Major-Version-Releases lösen einen sofortigen Re-Benchmark-Zyklus aus.\"],\"faq-list.weRunStandardizedTestsIn\":[\"Wir führen standardisierte Tests in isolierten Umgebungen mit einheitlicher Hardware durch. Jeder Benchmark wird mehrmals wiederholt, um die statistische Signifikanz zu gewährleisten. Alle Testkonfigurationen sind in unserem GitHub-Repository öffentlich verfügbar.\"],\"faq-list.weSupportReactI18nextReact\":[\"Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.\"],\"faq-list.whatIsI18nBenchmark\":[\"Was ist i18n Benchmark?\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"Welche Bibliotheken werden derzeit unterstützt?\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"Ja! Community-Benchmark-Einreichungen sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird qualifizierende Einreichungen prüfen und mergen.\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"Ja, unser Enterprise-Plan enthält Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Ihrer Skalierung und Ihren Einschränkungen geben.\"]}");
//#endregion
export { messages };
//#region src/locales/fr/home.mjs
var messages = JSON.parse("{\"hero.aTestApplicationDesignedTo\":[\"Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.\"],\"hero.viewResults\":[\"Voir les résultats\"],\"results-table.bundleSize\":[\"Taille du bundle\"],\"results-table.lazyLoading\":[\"Chargement différé\"],\"results-table.lookupTime\":[\"Temps de recherche\"],\"results-table.sampleResults\":[\"Exemples de résultats\"],\"understanding-impact.cacheInvalidation\":[\"Invalidation du cache :\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.\"],\"understanding-impact.duringServerSideRenderingThe\":[\"Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"Flash de contenu non traduit (FOUC) :\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :\"],\"understanding-impact.theJsonMustBeParsed\":[\"Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"Les compromis du chargement dynamique\"],\"understanding-impact.thisTestAppProvidesA\":[\"Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.\"],\"understanding-impact.understandingTheImpact\":[\"Comprendre l'impact\"],\"understanding-impact.waterfallRequests\":[\"Requêtes en cascade :\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"Ce que ce benchmark mesure\"],\"understanding-impact.whyASingleLargeJson\":[\"Pourquoi un seul JSON volumineux peut nuire aux performances\"],\"why-it-matters.bundleSize\":[\"Taille du bundle\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arbre. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).\"],\"why-it-matters.dynamicLoading\":[\"Chargement dynamique\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"Le chargement de toutes les traductions à l'avance surcharge le payload initial. Le chargement dynamique (lazy) divise les traductions par route ou par namespace, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel.\"],\"why-it-matters.renderingHydration\":[\"Rendu & Hydratation\"],\"why-it-matters.theBundleIsTheData\":[\"Le bundle représente les données envoyées à chaque utilisateur dans le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur des connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.\"],\"why-it-matters.whyTheseMetricsMatter\":[\"Pourquoi ces mesures sont importantes\"]}");
//#endregion
export { messages };
//#region src/locales/de/home.mjs
var messages = JSON.parse("{\"hero.aTestApplicationDesignedTo\":[\"Eine Testanwendung, die darauf ausgelegt ist, die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.\"],\"hero.viewResults\":[\"Ergebnisse anzeigen\"],\"results-table.bundleSize\":[\"Bundle-Größe\"],\"results-table.lazyLoading\":[\"Lazy Loading\"],\"results-table.lookupTime\":[\"Suchzeit\"],\"results-table.sampleResults\":[\"Beispielergebnisse\"],\"understanding-impact.cacheInvalidation\":[\"Cache-Invalidierung:\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.\"],\"understanding-impact.duringServerSideRenderingThe\":[\"Während des serverseitigen Renderings wird das vollständige Wörterbuch in die HTML-Payload serialisiert, wodurch die Größe des Dokuments erhöht wird, das heruntergeladen und hydratisiert werden muss.\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"Aufblitzen von nicht übersetztem Inhalt (FOUC):\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"Das Aufteilen der Übersetzungen in Chunks pro Route oder Namespace kann die anfängliche Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:\"],\"understanding-impact.theJsonMustBeParsed\":[\"Das JSON muss bei jedem Seitenladen analysiert werden — was den Hauptthread blockiert.\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"Die Kompromisse beim dynamischen Laden\"],\"understanding-impact.thisTestAppProvidesA\":[\"Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischem Inhalt —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.\"],\"understanding-impact.understandingTheImpact\":[\"Die Auswirkungen verstehen\"],\"understanding-impact.waterfallRequests\":[\"Waterfall-Anfragen:\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"Was dieser Benchmark misst\"],\"understanding-impact.whyASingleLargeJson\":[\"Warum ein einziges großes JSON die Leistung beeinträchtigen kann\"],\"why-it-matters.bundleSize\":[\"Bundle-Größe\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratisierung fügt das Parsen und Anhängen massiver Übersetzungsobjekte Latenz hinzu, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.\"],\"why-it-matters.dynamicLoading\":[\"Dynamisches Laden\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"Das Vorabladen aller Übersetzungen überlastet die anfängliche Payload. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen nicht übersetzter Inhalte und Komplexität des Cachings. Die Messung beider Strategien ist unerlässlich.\"],\"why-it-matters.renderingHydration\":[\"Rendering & Hydratation\"],\"why-it-matters.theBundleIsTheData\":[\"Das Bundle stellt die Daten dar, die an jeden Benutzer weltweit gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — insbesondere bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, zusätzlich zu den Übersetzungsdateien selbst.\"],\"why-it-matters.whyTheseMetricsMatter\":[\"Warum diese Kennzahlen wichtig sind\"]}");
//#endregion
export { messages };
//#region src/locales/zh/home.mjs
var messages = JSON.parse("{\"hero.aTestApplicationDesignedTo\":[\"一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。\"],\"hero.viewResults\":[\"查看结果\"],\"results-table.bundleSize\":[\"包大小\"],\"results-table.lazyLoading\":[\"延迟加载\"],\"results-table.lookupTime\":[\"查找时间\"],\"results-table.sampleResults\":[\"样本结果\"],\"understanding-impact.cacheInvalidation\":[\"缓存失效：\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"基于上下文的架构在语言环境更改时会导致级联重新渲染，因为即使特定键没有更改，每个消费者都会收到通知。\"],\"understanding-impact.duringServerSideRenderingThe\":[\"在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"未翻译内容闪烁 (FOUC)：\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会持有对整个字典的引用。这意味着：\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"将翻译拆分为每个路由或每个命名空间的块可以显著减少初始负载。但它引入了新的挑战：\"],\"understanding-impact.theJsonMustBeParsed\":[\"JSON 必须在每次页面加载时进行解析 —— 阻塞主线程。\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"动态加载的权衡\"],\"understanding-impact.thisTestAppProvidesA\":[\"此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的权重、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。\"],\"understanding-impact.understandingTheImpact\":[\"理解影响\"],\"understanding-impact.waterfallRequests\":[\"瀑布流请求：\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"本基准测试测量什么\"],\"understanding-impact.whyASingleLargeJson\":[\"为什么单个大型 JSON 会损害性能\"],\"why-it-matters.bundleSize\":[\"包大小\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"将大型 JSON 字典连接到每个组件会创建一个隐藏的依赖：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加庞大的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。\"],\"why-it-matters.dynamicLoading\":[\"动态加载\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。\"],\"why-it-matters.renderingHydration\":[\"渲染与注水\"],\"why-it-matters.theBundleIsTheData\":[\"包是发送给全球每个用户的数据。更大的包意味着更长的下载时间——特别是在许多地区常见的慢速 3G 连接上。i18n 库的权重差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。\"],\"why-it-matters.whyTheseMetricsMatter\":[\"为什么这些指标很重要\"]}");
//#endregion
export { messages };
//#region src/locales/pt/home.mjs
var messages = JSON.parse("{\"hero.aTestApplicationDesignedTo\":[\"Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.\"],\"hero.viewResults\":[\"Ver Resultados\"],\"results-table.bundleSize\":[\"Tamanho do bundle\"],\"results-table.lazyLoading\":[\"Carregamento lento\"],\"results-table.lookupTime\":[\"Tempo de consulta\"],\"results-table.sampleResults\":[\"Resultados de amostra\"],\"understanding-impact.cacheInvalidation\":[\"Invalidação da cache:\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"As arquiteturas baseadas no contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.\"],\"understanding-impact.duringServerSideRenderingThe\":[\"Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser descarregado e hidratado.\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"Flash de conteúdo não traduzido (FOUC):\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:\"],\"understanding-impact.theJsonMustBeParsed\":[\"O JSON deve ser analisado em cada carga de página — bloqueando a thread principal.\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"As compensações do carregamento dinâmico\"],\"understanding-impact.thisTestAppProvidesA\":[\"Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto a analisar e renderizar conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento preguiçoso. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.\"],\"understanding-impact.understandingTheImpact\":[\"Entendendo o impacto\"],\"understanding-impact.waterfallRequests\":[\"Pedidos em cascata:\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"O que este benchmark mede\"],\"understanding-impact.whyASingleLargeJson\":[\"Por que um único JSON grande pode prejudicar o desempenho\"],\"why-it-matters.bundleSize\":[\"Tamanho do Bundle\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode desencadear novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).\"],\"why-it-matters.dynamicLoading\":[\"Carregamento Dinâmico\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento preguiçoso introduz suas próprias compensações: solicitações em cascada, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.\"],\"why-it-matters.renderingHydration\":[\"Renderização e Hidratação\"],\"why-it-matters.theBundleIsTheData\":[\"O bundle representa os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução mesmos.\"],\"why-it-matters.whyTheseMetricsMatter\":[\"Por que essas métricas são importantes\"]}");
//#endregion
export { messages };
//#region src/locales/it/home.mjs
var messages = JSON.parse("{\"hero.aTestApplicationDesignedTo\":[\"Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.\"],\"hero.viewResults\":[\"Visualizza i risultati\"],\"results-table.bundleSize\":[\"Dimensione del bundle\"],\"results-table.lazyLoading\":[\"Caricamento lazy\"],\"results-table.lookupTime\":[\"Tempo di ricerca\"],\"results-table.sampleResults\":[\"Risultati di esempio\"],\"understanding-impact.cacheInvalidation\":[\"Invalidazione della cache:\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.\"],\"understanding-impact.duringServerSideRenderingThe\":[\"Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idrato.\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"Flash di contenuti non tradotti (FOUC):\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\"],\"understanding-impact.theJsonMustBeParsed\":[\"Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"I compromessi del caricamento dinamico\"],\"understanding-impact.thisTestAppProvidesA\":[\"Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.\"],\"understanding-impact.understandingTheImpact\":[\"Capire l'impatto\"],\"understanding-impact.waterfallRequests\":[\"Richieste a cascata:\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"Cosa misura questo benchmark\"],\"understanding-impact.whyASingleLargeJson\":[\"Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\"],\"why-it-matters.bundleSize\":[\"Dimensione del bundle\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).\"],\"why-it-matters.dynamicLoading\":[\"Caricamento dinamico\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.\"],\"why-it-matters.renderingHydration\":[\"Rendering e idratazione\"],\"why-it-matters.theBundleIsTheData\":[\"Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.\"],\"why-it-matters.whyTheseMetricsMatter\":[\"Perché queste metriche sono importanti\"]}");
//#endregion
export { messages };
//#region src/locales/ru/home.mjs
var messages = JSON.parse("{\"hero.aTestApplicationDesignedTo\":[\"Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.\"],\"hero.viewResults\":[\"Посмотреть результаты\"],\"results-table.bundleSize\":[\"Размер бандла\"],\"results-table.lazyLoading\":[\"Ленивая загрузка\"],\"results-table.lookupTime\":[\"Время поиска\"],\"results-table.sampleResults\":[\"Примеры результатов\"],\"understanding-impact.cacheInvalidation\":[\"Инвалидация кэша:\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.\"],\"understanding-impact.duringServerSideRenderingThe\":[\"Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"Мерцание непереведенного контента (FOUC):\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:\"],\"understanding-impact.theJsonMustBeParsed\":[\"JSON должен парситься при каждой загрузке страницы — блокируя основной поток.\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"Компромиссы динамической загрузки\"],\"understanding-impact.thisTestAppProvidesA\":[\"Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.\"],\"understanding-impact.understandingTheImpact\":[\"Понимание влияния\"],\"understanding-impact.waterfallRequests\":[\"Каскадные запросы (Waterfall requests):\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"Что измеряет этот бенчмарк\"],\"understanding-impact.whyASingleLargeJson\":[\"Почему один большой JSON может снизить производительность\"],\"why-it-matters.bundleSize\":[\"Размер бандла\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода добавляют задержку до того, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).\"],\"why-it-matters.dynamicLoading\":[\"Динамическая загрузка\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно для текущей страницы. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfall), мерцание непереведенного контента и сложность кэширования. Измерение обеих стратегий необходимо.\"],\"why-it-matters.renderingHydration\":[\"Рендеринг и гидратация\"],\"why-it-matters.theBundleIsTheData\":[\"Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой размер бандла означает более долгое время загрузки, особенно при медленном 3G-соединении, характерном для многих регионов. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт рантайм-кода, плюс сами файлы переводов.\"],\"why-it-matters.whyTheseMetricsMatter\":[\"Почему эти показатели важны\"]}");
//#endregion
export { messages };
//#region src/locales/es/home.mjs
var messages = JSON.parse("{\"hero.aTestApplicationDesignedTo\":[\"Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el rendimiento de carga y la reactividad de renderizado.\"],\"hero.viewResults\":[\"Ver resultados\"],\"results-table.bundleSize\":[\"Tamaño del paquete\"],\"results-table.lazyLoading\":[\"Carga diferida\"],\"results-table.lookupTime\":[\"Tiempo de búsqueda\"],\"results-table.sampleResults\":[\"Resultados de muestra\"],\"understanding-impact.cacheInvalidation\":[\"Invalidación de la caché:\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el local, porque cada consumidor es notificado incluso si sus claves específicas no han cambiado.\"],\"understanding-impact.duringServerSideRenderingThe\":[\"Durante la renderización del lado del servidor, el diccionario completo se serializa en la carga útil de HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"Parpadeo de contenido no traducido (FOUC):\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"Muchas bibliotecas i18n almacenan las traducciones en un solo objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente la carga útil inicial. Pero introduce nuevos desafíos:\"],\"understanding-impact.theJsonMustBeParsed\":[\"El JSON debe ser analizado en cada carga de página — bloqueando el hilo principal.\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"Las compensaciones de la carga dinámica\"],\"understanding-impact.thisTestAppProvidesA\":[\"Esta aplicación de prueba proporciona un entorno controlado — 10 páginas con contenido realista — para comparar las bibliotecas i18n en tres ejes: el peso que añaden a su paquete de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\"],\"understanding-impact.understandingTheImpact\":[\"Entendiendo el impacto\"],\"understanding-impact.waterfallRequests\":[\"Solicitudes en cascada:\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"Lo que mide este benchmark\"],\"understanding-impact.whyASingleLargeJson\":[\"Por qué un solo JSON grande puede perjudicar el rendimiento\"],\"why-it-matters.bundleSize\":[\"Tamaño del paquete\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"Conectar un gran diccionario JSON a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página se vuelva interactiva — impactando directamente el tiempo de interacción (TTI).\"],\"why-it-matters.dynamicLoading\":[\"Carga dinámica\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"Cargar todas las traducciones por adelantado sobrecarga la carga útil inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, el lazy loading introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.\"],\"why-it-matters.renderingHydration\":[\"Renderizado e hidratación\"],\"why-it-matters.theBundleIsTheData\":[\"El paquete representa los datos enviados a cada usuario en todo el mundo. Un paquete más grande significa tiempos de descarga más largos — especialmente en conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código de tiempo de ejecución, además de los propios archivos de traducción.\"],\"why-it-matters.whyTheseMetricsMatter\":[\"Por qué son importantes estas métricas\"]}");
//#endregion
export { messages };
//#region src/locales/en/home.mjs
var messages = JSON.parse("{\"hero.aTestApplicationDesignedTo\":[\"A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.\"],\"hero.viewResults\":[\"View Results\"],\"results-table.bundleSize\":[\"Bundle Size\"],\"results-table.lazyLoading\":[\"Lazy Loading\"],\"results-table.lookupTime\":[\"Lookup Time\"],\"results-table.sampleResults\":[\"Sample Results\"],\"understanding-impact.cacheInvalidation\":[\"Cache invalidation:\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\"],\"understanding-impact.duringServerSideRenderingThe\":[\"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"Flash of untranslated content (FOUC):\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\"],\"understanding-impact.theJsonMustBeParsed\":[\"The JSON must be parsed on every page load — blocking the main thread.\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"The trade-offs of dynamic loading\"],\"understanding-impact.thisTestAppProvidesA\":[\"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\"],\"understanding-impact.understandingTheImpact\":[\"Understanding the Impact\"],\"understanding-impact.waterfallRequests\":[\"Waterfall requests:\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"What this benchmark measures\"],\"understanding-impact.whyASingleLargeJson\":[\"Why a single large JSON can hurt performance\"],\"why-it-matters.bundleSize\":[\"Bundle Size\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\"],\"why-it-matters.dynamicLoading\":[\"Dynamic Loading\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\"],\"why-it-matters.renderingHydration\":[\"Rendering & Hydration\"],\"why-it-matters.theBundleIsTheData\":[\"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\"],\"why-it-matters.whyTheseMetricsMatter\":[\"Why These Metrics Matter\"]}");
//#endregion
export { messages };
//#region src/locales/ja/home.mjs
var messages = JSON.parse("{\"hero.aTestApplicationDesignedTo\":[\"国際化ライブラリがバンドルサイズ、ロード性能、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。\"],\"hero.viewResults\":[\"結果を見る\"],\"results-table.bundleSize\":[\"バンドルサイズ\"],\"results-table.lazyLoading\":[\"遅延読み込み\"],\"results-table.lookupTime\":[\"ルックアップ時間\"],\"results-table.sampleResults\":[\"サンプル結果\"],\"understanding-impact.cacheInvalidation\":[\"キャッシュの無効化:\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的な再レンダリングが発生する可能性があります。\"],\"understanding-impact.duringServerSideRenderingThe\":[\"サーバーサイドレンダリング中、辞書全体が HTML ペイロードにシリアライズされ、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"未翻訳コンテンツのフラッシュ (FOUC):\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"多くの i18n ライブラリは、React コンテキストを介して提供される単一の JSON オブジェクトに翻訳を保存します。このオブジェクトが巨大（数千のキー）な場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"翻訳をルートごと、または名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：\"],\"understanding-impact.theJsonMustBeParsed\":[\"JSON はページ読み込みのたびにパースされる必要があり、メインスレッドをブロックします。\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"動的読み込みのトレードオフ\"],\"understanding-impact.thisTestAppProvidesA\":[\"このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツのパースとレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。\"],\"understanding-impact.understandingTheImpact\":[\"影響を理解する\"],\"understanding-impact.waterfallRequests\":[\"ウォーターフォールリクエスト:\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"このベンチマークが測定するもの\"],\"understanding-impact.whyASingleLargeJson\":[\"ひとつの巨大な JSON がパフォーマンスを低下させる理由\"],\"why-it-matters.bundleSize\":[\"バンドルサイズ\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更がツリー全体の再レンダリングを引き起こす可能性があります。SSRのハイドレーション中、巨大な翻訳オブジェクトのパースとアタッチにより、ページがインタラクティブになるまでの遅延が発生し、Time to Interactive (TTI) に直接影響します。\"],\"why-it-matters.dynamicLoading\":[\"動的ローディング\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"すべての翻訳を事前に読み込むと、初期のペイロードが過負荷になります。動的（遅延）読み込みは、ルートまたは名前空間ごとに翻訳を分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、未翻訳コンテンツのフラッシュ、キャッシュの複雑化といった独自のトレードオフがあります。両方の戦略を測定することが不可欠です。\"],\"why-it-matters.renderingHydration\":[\"レンダリングとハイドレーション\"],\"why-it-matters.theBundleIsTheData\":[\"バンドルは、世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。特に多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリはその重量が劇的に異なります。ランタイムコードだけで数キロバイトから数十キロバイト、さらに翻訳ファイル自体が加わります。\"],\"why-it-matters.whyTheseMetricsMatter\":[\"これらの指標が重要な理由\"]}");
//#endregion
export { messages };
//#region src/locales/ko/home.mjs
var messages = JSON.parse("{\"hero.aTestApplicationDesignedTo\":[\"국제화 라이브러리가 번들 크기, 로딩 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.\"],\"hero.viewResults\":[\"결과 보기\"],\"results-table.bundleSize\":[\"번들 크기\"],\"results-table.lazyLoading\":[\"지연 로딩\"],\"results-table.lookupTime\":[\"조회 시간\"],\"results-table.sampleResults\":[\"샘플 결과\"],\"understanding-impact.cacheInvalidation\":[\"캐시 무효화:\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"컨텍스트 기반 아키텍처는 로케일이 변경될 때 연쇄적인 리렌더링을 일으킬 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자에게 알림이 가기 때문입니다.\"],\"understanding-impact.duringServerSideRenderingThe\":[\"서버 사이드 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어, 다운로드 및 수화가 필요한 문서 크기가 증가합니다.\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"번역되지 않은 콘텐츠의 깜빡임 (FOUC):\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 컴포넌트는 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:\"],\"understanding-impact.theJsonMustBeParsed\":[\"JSON은 모든 페이지 로드 시 파싱되어야 하며, 이는 메인 스레드를 차단합니다.\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"동적 로딩의 트레이드오프\"],\"understanding-impact.thisTestAppProvidesA\":[\"이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 그리고 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.\"],\"understanding-impact.understandingTheImpact\":[\"영향 이해하기\"],\"understanding-impact.waterfallRequests\":[\"워터폴(Waterfall) 요청:\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"이 벤치마크가 측정하는 것\"],\"understanding-impact.whyASingleLargeJson\":[\"단일 대형 JSON이 성능을 저하시키는 이유\"],\"why-it-matters.bundleSize\":[\"번들 크기\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"모든 컴포넌트에 대규모 JSON 사전(dictionary)을 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트의 모든 변경 사항은 전체 트리에서 리렌더링을 유발할 수 있습니다. SSR 수화 단계에서 방대한 번역 객체를 파싱하고 연결하면 페이지가 상호작용 가능해지기까지 지연이 발생하며, 이는 Time to Interactive(TTI)에 직접적인 영향을 미칩니다.\"],\"why-it-matters.dynamicLoading\":[\"동적 로딩\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 내용만 전송합니다. 그러나 지연 로딩은 워터폴 요청, 번역되지 않은 콘텐츠의 깜빡임(FOUC), 캐시 복잡성 등 자체적인 트레이드오프를 수반합니다. 두 전략을 모두 측정하는 것이 필수적입니다.\"],\"why-it-matters.renderingHydration\":[\"렌더링 및 수화(Hydration)\"],\"why-it-matters.theBundleIsTheData\":[\"번들은 전 세계 모든 사용자에게 전송되는 데이터를 나타냅니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 발생하는 느린 3G 연결에서 더욱 그렇습니다. i18n 라이브러리는 런타임 코드만으로도 수 킬로바이트에서 수십 킬로바이트까지 무게가 크게 다르며, 여기에 번역 파일 자체가 추가됩니다.\"],\"why-it-matters.whyTheseMetricsMatter\":[\"이 지표가 중요한 이유\"]}");
//#endregion
export { messages };
//#region src/locales/it/messages.mjs
var messages = JSON.parse("{}");
//#endregion
export { messages };
//#region src/locales/zh/messages.mjs
var messages = JSON.parse("{}");
//#endregion
export { messages };
//#region src/locales/ko/messages.mjs
var messages = JSON.parse("{}");
//#endregion
export { messages };
//#region src/locales/de/messages.mjs
var messages = JSON.parse("{}");
//#endregion
export { messages };
//#region src/locales/ja/messages.mjs
var messages = JSON.parse("{}");
//#endregion
export { messages };
//#region src/locales/pt/messages.mjs
var messages = JSON.parse("{}");
//#endregion
export { messages };
//#region src/locales/en/messages.mjs
var messages = JSON.parse("{}");
//#endregion
export { messages };
//#region src/locales/es/messages.mjs
var messages = JSON.parse("{}");
//#endregion
export { messages };
//#region src/locales/ru/messages.mjs
var messages = JSON.parse("{}");
//#endregion
export { messages };
//#region src/locales/fr/messages.mjs
var messages = JSON.parse("{}");
//#endregion
export { messages };
//#region src/locales/ru/pricing.mjs
var messages = JSON.parse("{\"pricing-header.chooseThePlanThatFits\":[\"Выберите план, который подходит вашей команде. Никаких скрытых комиссий.\"],\"pricing-header.simpleTransparentPricing\":[\"Простое и прозрачное ценообразование\"],\"pricing-tiers.allLibraries\":[\"Все библиотеки\"],\"pricing-tiers.auditLogs\":[\"Журналы аудита\"],\"pricing-tiers.benchmarkRunPerDay\":[[\"runs\"],\" запусков бенчмарка в день\"],\"pricing-tiers.ciIntegration\":[\"Интеграция с CI\"],\"pricing-tiers.communitySupport\":[\"Сообщество поддержки\"],\"pricing-tiers.contactSales\":[\"Связаться с отделом продаж\"],\"pricing-tiers.customPrice\":[\"Индивидуальная цена\"],\"pricing-tiers.customSlas\":[\"Индивидуальные SLA\"],\"pricing-tiers.dedicatedAccountManager\":[\"Выделенный менеджер\"],\"pricing-tiers.enterprise\":[\"Корпоративный\"],\"pricing-tiers.everythingInPro\":[\"Все возможности Pro\"],\"pricing-tiers.forever\":[\"навсегда\"],\"pricing-tiers.getStarted\":[\"Начать\"],\"pricing-tiers.historicalData\":[\"Исторические данные\"],\"pricing-tiers.librariesNumber\":[[\"libs\"],\" библиотек\"],\"pricing-tiers.month\":[\"/месяц\"],\"pricing-tiers.onPremiseOption\":[\"Локальное развертывание\"],\"pricing-tiers.price0\":[\"0 $\"],\"pricing-tiers.price29\":[\"29 $\"],\"pricing-tiers.prioritySupport\":[\"Приоритетная поддержка\"],\"pricing-tiers.privateResults\":[\"Приватные результаты\"],\"pricing-tiers.pro\":[\"Pro\"],\"pricing-tiers.publicResults\":[\"Публичные результаты\"],\"pricing-tiers.ssoSaml\":[\"SSO и SAML\"],\"pricing-tiers.starter\":[\"Starter\"],\"pricing-tiers.trainingSessions\":[\"Сессии обучения\"],\"pricing-tiers.unlimitedRuns\":[\"Неограниченное количество запусков\"]}");
//#endregion
export { messages };
//#region src/locales/en/pricing.mjs
var messages = JSON.parse("{\"pricing-header.chooseThePlanThatFits\":[\"Choose the plan that fits your team. No hidden fees.\"],\"pricing-header.simpleTransparentPricing\":[\"Simple, Transparent Pricing\"],\"pricing-tiers.allLibraries\":[\"All libraries\"],\"pricing-tiers.auditLogs\":[\"Audit logs\"],\"pricing-tiers.benchmarkRunPerDay\":[[\"runs\"],\" benchmark runs/day\"],\"pricing-tiers.ciIntegration\":[\"CI integration\"],\"pricing-tiers.communitySupport\":[\"Community support\"],\"pricing-tiers.contactSales\":[\"Contact Sales\"],\"pricing-tiers.customPrice\":[\"Custom\"],\"pricing-tiers.customSlas\":[\"Custom SLAs\"],\"pricing-tiers.dedicatedAccountManager\":[\"Dedicated account manager\"],\"pricing-tiers.enterprise\":[\"Enterprise\"],\"pricing-tiers.everythingInPro\":[\"Everything in Pro\"],\"pricing-tiers.forever\":[\"forever\"],\"pricing-tiers.getStarted\":[\"Get Started\"],\"pricing-tiers.historicalData\":[\"Historical data\"],\"pricing-tiers.librariesNumber\":[[\"libs\"],\" libraries\"],\"pricing-tiers.month\":[\"/month\"],\"pricing-tiers.onPremiseOption\":[\"On-premise option\"],\"pricing-tiers.price0\":[\"$0\"],\"pricing-tiers.price29\":[\"$29\"],\"pricing-tiers.prioritySupport\":[\"Priority support\"],\"pricing-tiers.privateResults\":[\"Private results\"],\"pricing-tiers.pro\":[\"Pro\"],\"pricing-tiers.publicResults\":[\"Public results\"],\"pricing-tiers.ssoSaml\":[\"SSO & SAML\"],\"pricing-tiers.starter\":[\"Starter\"],\"pricing-tiers.trainingSessions\":[\"Training sessions\"],\"pricing-tiers.unlimitedRuns\":[\"Unlimited runs\"]}");
//#endregion
export { messages };
//#region src/locales/de/pricing.mjs
var messages = JSON.parse("{\"pricing-header.chooseThePlanThatFits\":[\"Wählen Sie das Paket, das zu Ihrem Team passt. Keine versteckten Gebühren.\"],\"pricing-header.simpleTransparentPricing\":[\"Einfache, transparente Preise\"],\"pricing-tiers.allLibraries\":[\"Alle Bibliotheken\"],\"pricing-tiers.auditLogs\":[\"Audit-Protokolle\"],\"pricing-tiers.benchmarkRunPerDay\":[[\"runs\"],\" Benchmark-Durchläufe/Tag\"],\"pricing-tiers.ciIntegration\":[\"CI-Integration\"],\"pricing-tiers.communitySupport\":[\"Community-Support\"],\"pricing-tiers.contactSales\":[\"Vertrieb kontaktieren\"],\"pricing-tiers.customPrice\":[\"Individuell\"],\"pricing-tiers.customSlas\":[\"Benutzerdefinierte SLAs\"],\"pricing-tiers.dedicatedAccountManager\":[\"Dedizierter Account-Manager\"],\"pricing-tiers.enterprise\":[\"Enterprise\"],\"pricing-tiers.everythingInPro\":[\"Alles in Pro\"],\"pricing-tiers.forever\":[\"für immer\"],\"pricing-tiers.getStarted\":[\"Loslegen\"],\"pricing-tiers.historicalData\":[\"Historische Daten\"],\"pricing-tiers.librariesNumber\":[[\"libs\"],\" Bibliotheken\"],\"pricing-tiers.month\":[\"/Monat\"],\"pricing-tiers.onPremiseOption\":[\"On-Premise-Option\"],\"pricing-tiers.price0\":[\"0 $\"],\"pricing-tiers.price29\":[\"29 $\"],\"pricing-tiers.prioritySupport\":[\"Priorisierter Support\"],\"pricing-tiers.privateResults\":[\"Private Ergebnisse\"],\"pricing-tiers.pro\":[\"Pro\"],\"pricing-tiers.publicResults\":[\"Öffentliche Ergebnisse\"],\"pricing-tiers.ssoSaml\":[\"SSO & SAML\"],\"pricing-tiers.starter\":[\"Starter\"],\"pricing-tiers.trainingSessions\":[\"Schulungen\"],\"pricing-tiers.unlimitedRuns\":[\"Unbegrenzte Durchläufe\"]}");
//#endregion
export { messages };
//#region src/locales/it/pricing.mjs
var messages = JSON.parse("{\"pricing-header.chooseThePlanThatFits\":[\"Scegli il piano adatto al tuo team. Nessun costo nascosto.\"],\"pricing-header.simpleTransparentPricing\":[\"Prezzi Semplici e Trasparenti\"],\"pricing-tiers.allLibraries\":[\"Tutte le librerie\"],\"pricing-tiers.auditLogs\":[\"Registri di controllo\"],\"pricing-tiers.benchmarkRunPerDay\":[[\"runs\"],\" esecuzioni benchmark/giorno\"],\"pricing-tiers.ciIntegration\":[\"Integrazione CI\"],\"pricing-tiers.communitySupport\":[\"Supporto della comunità\"],\"pricing-tiers.contactSales\":[\"Contatta l'ufficio vendite\"],\"pricing-tiers.customPrice\":[\"Personalizzato\"],\"pricing-tiers.customSlas\":[\"SLA personalizzati\"],\"pricing-tiers.dedicatedAccountManager\":[\"Account manager dedicato\"],\"pricing-tiers.enterprise\":[\"Enterprise\"],\"pricing-tiers.everythingInPro\":[\"Tutto quello che c'è in Pro\"],\"pricing-tiers.forever\":[\"per sempre\"],\"pricing-tiers.getStarted\":[\"Inizia ora\"],\"pricing-tiers.historicalData\":[\"Dati storici\"],\"pricing-tiers.librariesNumber\":[[\"libs\"],\" librerie\"],\"pricing-tiers.month\":[\"/mese\"],\"pricing-tiers.onPremiseOption\":[\"Opzione in locale\"],\"pricing-tiers.price0\":[\"0 $\"],\"pricing-tiers.price29\":[\"29 $\"],\"pricing-tiers.prioritySupport\":[\"Supporto prioritario\"],\"pricing-tiers.privateResults\":[\"Risultati privati\"],\"pricing-tiers.pro\":[\"Pro\"],\"pricing-tiers.publicResults\":[\"Risultati pubblici\"],\"pricing-tiers.ssoSaml\":[\"SSO e SAML\"],\"pricing-tiers.starter\":[\"Starter\"],\"pricing-tiers.trainingSessions\":[\"Sessioni di formazione\"],\"pricing-tiers.unlimitedRuns\":[\"Esecuzioni illimitate\"]}");
//#endregion
export { messages };
//#region src/locales/es/pricing.mjs
var messages = JSON.parse("{\"pricing-header.chooseThePlanThatFits\":[\"Elija el plan que se adapte a su equipo. Sin cargos ocultos.\"],\"pricing-header.simpleTransparentPricing\":[\"Precios simples y transparentes\"],\"pricing-tiers.allLibraries\":[\"Todas las bibliotecas\"],\"pricing-tiers.auditLogs\":[\"Registros de auditoría\"],\"pricing-tiers.benchmarkRunPerDay\":[[\"runs\"],\" ejecuciones de benchmark al día\"],\"pricing-tiers.ciIntegration\":[\"Integración de CI\"],\"pricing-tiers.communitySupport\":[\"Soporte de la comunidad\"],\"pricing-tiers.contactSales\":[\"Contactar a ventas\"],\"pricing-tiers.customPrice\":[\"Personalizado\"],\"pricing-tiers.customSlas\":[\"SLA personalizados\"],\"pricing-tiers.dedicatedAccountManager\":[\"Gerente de cuenta dedicado\"],\"pricing-tiers.enterprise\":[\"Enterprise\"],\"pricing-tiers.everythingInPro\":[\"Todo lo que incluye Pro\"],\"pricing-tiers.forever\":[\"para siempre\"],\"pricing-tiers.getStarted\":[\"Comenzar\"],\"pricing-tiers.historicalData\":[\"Datos históricos\"],\"pricing-tiers.librariesNumber\":[[\"libs\"],\" bibliotecas\"],\"pricing-tiers.month\":[\"/mes\"],\"pricing-tiers.onPremiseOption\":[\"Opción en las instalaciones\"],\"pricing-tiers.price0\":[\"0 $\"],\"pricing-tiers.price29\":[\"29 $\"],\"pricing-tiers.prioritySupport\":[\"Soporte prioritario\"],\"pricing-tiers.privateResults\":[\"Resultados privados\"],\"pricing-tiers.pro\":[\"Pro\"],\"pricing-tiers.publicResults\":[\"Resultados públicos\"],\"pricing-tiers.ssoSaml\":[\"SSO y SAML\"],\"pricing-tiers.starter\":[\"Starter\"],\"pricing-tiers.trainingSessions\":[\"Sesiones de entrenamiento\"],\"pricing-tiers.unlimitedRuns\":[\"Ejecuciones ilimitadas\"]}");
//#endregion
export { messages };
//#region src/locales/ko/pricing.mjs
var messages = JSON.parse("{\"pricing-header.chooseThePlanThatFits\":[\"팀에 맞는 플랜을 선택하세요. 숨겨진 수수료는 없습니다.\"],\"pricing-header.simpleTransparentPricing\":[\"심플하고 투명한 요금제\"],\"pricing-tiers.allLibraries\":[\"모든 라이브러리\"],\"pricing-tiers.auditLogs\":[\"감사 로그\"],\"pricing-tiers.benchmarkRunPerDay\":[\"하루 \",[\"runs\"],\"회 벤치마크 실행\"],\"pricing-tiers.ciIntegration\":[\"CI 통합\"],\"pricing-tiers.communitySupport\":[\"커뮤니티 지원\"],\"pricing-tiers.contactSales\":[\"영업팀 문의\"],\"pricing-tiers.customPrice\":[\"커스텀\"],\"pricing-tiers.customSlas\":[\"맞춤형 SLA\"],\"pricing-tiers.dedicatedAccountManager\":[\"전담 어카운트 매니저\"],\"pricing-tiers.enterprise\":[\"엔터프라이즈\"],\"pricing-tiers.everythingInPro\":[\"Pro의 모든 기능 포함\"],\"pricing-tiers.forever\":[\"영원히\"],\"pricing-tiers.getStarted\":[\"시작하기\"],\"pricing-tiers.historicalData\":[\"기록 데이터\"],\"pricing-tiers.librariesNumber\":[[\"libs\"],\"개 라이브러리\"],\"pricing-tiers.month\":[\"/월\"],\"pricing-tiers.onPremiseOption\":[\"온프레미스 옵션\"],\"pricing-tiers.price0\":[\"₩0\"],\"pricing-tiers.price29\":[\"₩39,000\"],\"pricing-tiers.prioritySupport\":[\"우선 지원\"],\"pricing-tiers.privateResults\":[\"결과 비공개\"],\"pricing-tiers.pro\":[\"프로\"],\"pricing-tiers.publicResults\":[\"결과 공개\"],\"pricing-tiers.ssoSaml\":[\"SSO 및 SAML\"],\"pricing-tiers.starter\":[\"스타터\"],\"pricing-tiers.trainingSessions\":[\"교육 세션\"],\"pricing-tiers.unlimitedRuns\":[\"무제한 실행\"]}");
//#endregion
export { messages };
//#region src/locales/zh/pricing.mjs
var messages = JSON.parse("{\"pricing-header.chooseThePlanThatFits\":[\"选择适合您团队的计划。无隐藏费用。\"],\"pricing-header.simpleTransparentPricing\":[\"简单透明的定价\"],\"pricing-tiers.allLibraries\":[\"所有库\"],\"pricing-tiers.auditLogs\":[\"审计日志\"],\"pricing-tiers.benchmarkRunPerDay\":[\"每天 \",[\"runs\"],\" 次基准测试运行\"],\"pricing-tiers.ciIntegration\":[\"CI 集成\"],\"pricing-tiers.communitySupport\":[\"社区支持\"],\"pricing-tiers.contactSales\":[\"联系销售\"],\"pricing-tiers.customPrice\":[\"定制\"],\"pricing-tiers.customSlas\":[\"定制 SLA\"],\"pricing-tiers.dedicatedAccountManager\":[\"专属客户经理\"],\"pricing-tiers.enterprise\":[\"企业版\"],\"pricing-tiers.everythingInPro\":[\"包含专业版所有功能\"],\"pricing-tiers.forever\":[\"永久\"],\"pricing-tiers.getStarted\":[\"立即开始\"],\"pricing-tiers.historicalData\":[\"历史数据\"],\"pricing-tiers.librariesNumber\":[[\"libs\"],\" 个库\"],\"pricing-tiers.month\":[\"/月\"],\"pricing-tiers.onPremiseOption\":[\"本地部署选项\"],\"pricing-tiers.price0\":[\"¥0\"],\"pricing-tiers.price29\":[\"¥199\"],\"pricing-tiers.prioritySupport\":[\"优先支持\"],\"pricing-tiers.privateResults\":[\"私有结果\"],\"pricing-tiers.pro\":[\"专业版\"],\"pricing-tiers.publicResults\":[\"公开结果\"],\"pricing-tiers.ssoSaml\":[\"SSO 和 SAML\"],\"pricing-tiers.starter\":[\"入门版\"],\"pricing-tiers.trainingSessions\":[\"培训课程\"],\"pricing-tiers.unlimitedRuns\":[\"无限次运行\"]}");
//#endregion
export { messages };
//#region src/locales/ja/pricing.mjs
var messages = JSON.parse("{\"pricing-header.chooseThePlanThatFits\":[\"チームに最適なプランをお選びください。隠れた費用はありません。\"],\"pricing-header.simpleTransparentPricing\":[\"シンプルで透明な価格設定\"],\"pricing-tiers.allLibraries\":[\"すべてのライブラリ\"],\"pricing-tiers.auditLogs\":[\"監査ログ\"],\"pricing-tiers.benchmarkRunPerDay\":[\"1日あたり \",[\"runs\"],\" 回のベンチマーク実行\"],\"pricing-tiers.ciIntegration\":[\"CI統合\"],\"pricing-tiers.communitySupport\":[\"コミュニティサポート\"],\"pricing-tiers.contactSales\":[\"営業に連絡\"],\"pricing-tiers.customPrice\":[\"カスタム\"],\"pricing-tiers.customSlas\":[\"カスタムSLA\"],\"pricing-tiers.dedicatedAccountManager\":[\"専任のアカウントマネージャー\"],\"pricing-tiers.enterprise\":[\"エンタープライズ\"],\"pricing-tiers.everythingInPro\":[\"Proプランの全機能\"],\"pricing-tiers.forever\":[\"永久に\"],\"pricing-tiers.getStarted\":[\"今すぐ始める\"],\"pricing-tiers.historicalData\":[\"履歴データ\"],\"pricing-tiers.librariesNumber\":[[\"libs\"],\" 個のライブラリ\"],\"pricing-tiers.month\":[\"/月\"],\"pricing-tiers.onPremiseOption\":[\"オンプレミスオプション\"],\"pricing-tiers.price0\":[\"¥0\"],\"pricing-tiers.price29\":[\"¥3,500\"],\"pricing-tiers.prioritySupport\":[\"優先サポート\"],\"pricing-tiers.privateResults\":[\"プライベート結果\"],\"pricing-tiers.pro\":[\"プロ\"],\"pricing-tiers.publicResults\":[\"公開結果\"],\"pricing-tiers.ssoSaml\":[\"SSO & SAML\"],\"pricing-tiers.starter\":[\"スターター\"],\"pricing-tiers.trainingSessions\":[\"トレーニングセッション\"],\"pricing-tiers.unlimitedRuns\":[\"無制限の実行\"]}");
//#endregion
export { messages };
//#region src/locales/pt/pricing.mjs
var messages = JSON.parse("{\"pricing-header.chooseThePlanThatFits\":[\"Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.\"],\"pricing-header.simpleTransparentPricing\":[\"Preços Simples e Transparentes\"],\"pricing-tiers.allLibraries\":[\"Todas as bibliotecas\"],\"pricing-tiers.auditLogs\":[\"Logs de auditoria\"],\"pricing-tiers.benchmarkRunPerDay\":[[\"runs\"],\" execuções de benchmark por dia\"],\"pricing-tiers.ciIntegration\":[\"Integração CI\"],\"pricing-tiers.communitySupport\":[\"Suporte da comunidade\"],\"pricing-tiers.contactSales\":[\"Contatar Vendas\"],\"pricing-tiers.customPrice\":[\"Personalizado\"],\"pricing-tiers.customSlas\":[\"SLAs personalizados\"],\"pricing-tiers.dedicatedAccountManager\":[\"Gerente de conta dedicado\"],\"pricing-tiers.enterprise\":[\"Enterprise\"],\"pricing-tiers.everythingInPro\":[\"Tudo o que está no Pro\"],\"pricing-tiers.forever\":[\"para sempre\"],\"pricing-tiers.getStarted\":[\"Começar\"],\"pricing-tiers.historicalData\":[\"Dados históricos\"],\"pricing-tiers.librariesNumber\":[[\"libs\"],\" bibliotecas\"],\"pricing-tiers.month\":[\"/mês\"],\"pricing-tiers.onPremiseOption\":[\"Opção on-premise\"],\"pricing-tiers.price0\":[\"0 $\"],\"pricing-tiers.price29\":[\"29 $\"],\"pricing-tiers.prioritySupport\":[\"Suporte prioritário\"],\"pricing-tiers.privateResults\":[\"Resultados privados\"],\"pricing-tiers.pro\":[\"Pro\"],\"pricing-tiers.publicResults\":[\"Resultados públicos\"],\"pricing-tiers.ssoSaml\":[\"SSO & SAML\"],\"pricing-tiers.starter\":[\"Starter\"],\"pricing-tiers.trainingSessions\":[\"Sessões de treinamento\"],\"pricing-tiers.unlimitedRuns\":[\"Execuções ilimitadas\"]}");
//#endregion
export { messages };
//#region src/locales/fr/pricing.mjs
var messages = JSON.parse("{\"pricing-header.chooseThePlanThatFits\":[\"Choisissez l'offre qui convient à votre équipe. Pas de frais cachés.\"],\"pricing-header.simpleTransparentPricing\":[\"Une tarification simple et transparente\"],\"pricing-tiers.allLibraries\":[\"Toutes les bibliothèques\"],\"pricing-tiers.auditLogs\":[\"Journaux d'audit\"],\"pricing-tiers.benchmarkRunPerDay\":[[\"runs\"],\" passages de benchmark / jour\"],\"pricing-tiers.ciIntegration\":[\"Intégration CI\"],\"pricing-tiers.communitySupport\":[\"Support communautaire\"],\"pricing-tiers.contactSales\":[\"Contacter le service commercial\"],\"pricing-tiers.customPrice\":[\"Sur mesure\"],\"pricing-tiers.customSlas\":[\"SLA personnalisés\"],\"pricing-tiers.dedicatedAccountManager\":[\"Gestionnaire de compte dédié\"],\"pricing-tiers.enterprise\":[\"Enterprise\"],\"pricing-tiers.everythingInPro\":[\"Tout ce qui est dans Pro\"],\"pricing-tiers.forever\":[\"pour toujours\"],\"pricing-tiers.getStarted\":[\"Démarrer\"],\"pricing-tiers.historicalData\":[\"Données historiques\"],\"pricing-tiers.librariesNumber\":[[\"libs\"],\" bibliothèques\"],\"pricing-tiers.month\":[\"/ mois\"],\"pricing-tiers.onPremiseOption\":[\"Option sur site (on-premise)\"],\"pricing-tiers.price0\":[\"0 €\"],\"pricing-tiers.price29\":[\"29 €\"],\"pricing-tiers.prioritySupport\":[\"Support prioritaire\"],\"pricing-tiers.privateResults\":[\"Résultats privés\"],\"pricing-tiers.pro\":[\"Pro\"],\"pricing-tiers.publicResults\":[\"Résultats publics\"],\"pricing-tiers.ssoSaml\":[\"SSO & SAML\"],\"pricing-tiers.starter\":[\"Starter\"],\"pricing-tiers.trainingSessions\":[\"Sessions de formation\"],\"pricing-tiers.unlimitedRuns\":[\"Passages illimités\"]}");
//#endregion
export { messages };
//#region src/locales/de/products.mjs
var messages = JSON.parse("{\"products-grid.aiPoweredToolThatHelps\":[\"KI-gestütztes Tool, das bei der Migration Ihrer Codebasis zwischen i18n-Bibliotheken ohne Ausfallzeiten hilft.\"],\"products-grid.analyzesAndOptimizesYourI18n\":[\"Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.\"],\"products-grid.automatedCloudBasedBenchmarkingWith\":[\"Automatisiertes cloudbasiertes Benchmarking mit historischer Verfolgung, Warnungen und Team-Dashboards.\"],\"products-grid.automatedQualityChecksForMissing\":[\"Automatisierte Qualitätsprüfungen auf fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.\"],\"products-grid.benchmarkCli\":[\"Benchmark CLI\"],\"products-grid.benchmarkCloud\":[\"Benchmark Cloud\"],\"products-grid.benchmarkEnterprise\":[\"Benchmark Enterprise\"],\"products-grid.bundleOptimizer\":[\"Bundle-Optimierer\"],\"products-grid.contactUs\":[\"Kontaktieren Sie uns\"],\"products-grid.learnMore\":[\"Mehr erfahren\"],\"products-grid.migrationAssistant\":[\"Migrationsassistent\"],\"products-grid.onPremiseDeploymentWithSso\":[\"On-Premise-Bereitstellung mit SSO, Audit-Protokollen, benutzerdefinierten SLAs und dediziertem Support.\"],\"products-grid.runBenchmarksLocallyFromYour\":[\"Führen Sie Benchmarks lokal über Ihr Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.\"],\"products-grid.translationQa\":[\"Übersetzungs-QA\"],\"products-header.toolsAndServicesToStreamline\":[\"Tools und Services zur Optimierung Ihres Internationalisierungs-Workflows.\"]}");
//#endregion
export { messages };
//#region src/locales/es/products.mjs
var messages = JSON.parse("{\"products-grid.aiPoweredToolThatHelps\":[\"Herramienta impulsada por IA que ayuda a migrar su base de código entre bibliotecas i18n sin tiempo de inactividad.\"],\"products-grid.analyzesAndOptimizesYourI18n\":[\"Analiza y optimiza su paquete i18n para producción con tree-shaking y división de código.\"],\"products-grid.automatedCloudBasedBenchmarkingWith\":[\"Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y tableros de equipo.\"],\"products-grid.automatedQualityChecksForMissing\":[\"Verificaciones de calidad automatizadas para traducciones faltantes, problemas de pluralización y errores de contexto.\"],\"products-grid.benchmarkCli\":[\"CLI de Benchmark\"],\"products-grid.benchmarkCloud\":[\"Benchmark Cloud\"],\"products-grid.benchmarkEnterprise\":[\"Benchmark Enterprise\"],\"products-grid.bundleOptimizer\":[\"Optimizador de paquetes\"],\"products-grid.contactUs\":[\"Contáctenos\"],\"products-grid.learnMore\":[\"Más información\"],\"products-grid.migrationAssistant\":[\"Asistente de migración\"],\"products-grid.onPremiseDeploymentWithSso\":[\"Despliegue local con SSO, registros de auditoría, SLA personalizados y soporte dedicado.\"],\"products-grid.runBenchmarksLocallyFromYour\":[\"Ejecute benchmarks localmente desde su terminal. Admite configuraciones personalizadas e integración de CI.\"],\"products-grid.translationQa\":[\"QA de traducción\"],\"products-header.toolsAndServicesToStreamline\":[\"Herramientas y servicios para agilizar su flujo de trabajo de internacionalización.\"]}");
//#endregion
export { messages };
//#region src/locales/zh/products.mjs
var messages = JSON.parse("{\"products-grid.aiPoweredToolThatHelps\":[\"人工智能驱动的工具，帮助您在国际化库之间无缝迁移代码库。\"],\"products-grid.analyzesAndOptimizesYourI18n\":[\"通过 Tree-shaking 和代码拆分分析并优化您的生产环境 i18n 包。\"],\"products-grid.automatedCloudBasedBenchmarkingWith\":[\"自动化的云基准测试，支持历史追踪、警报和团队仪表板。\"],\"products-grid.automatedQualityChecksForMissing\":[\"针对缺失翻译、复数形式问题和上下文错误的自动化质量检查。\"],\"products-grid.benchmarkCli\":[\"基准测试 CLI\"],\"products-grid.benchmarkCloud\":[\"云基准测试\"],\"products-grid.benchmarkEnterprise\":[\"企业级基准测试\"],\"products-grid.bundleOptimizer\":[\"包优化器\"],\"products-grid.contactUs\":[\"联系我们\"],\"products-grid.learnMore\":[\"了解更多\"],\"products-grid.migrationAssistant\":[\"迁移助手\"],\"products-grid.onPremiseDeploymentWithSso\":[\"支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。\"],\"products-grid.runBenchmarksLocallyFromYour\":[\"在终端本地运行基准测试。支持自定义配置和 CI 集成。\"],\"products-grid.translationQa\":[\"翻译质量保证\"],\"products-header.toolsAndServicesToStreamline\":[\"简化国际化工作流程的工具和服务。\"]}");
//#endregion
export { messages };
//#region src/locales/en/products.mjs
var messages = JSON.parse("{\"products-grid.aiPoweredToolThatHelps\":[\"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\"],\"products-grid.analyzesAndOptimizesYourI18n\":[\"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\"],\"products-grid.automatedCloudBasedBenchmarkingWith\":[\"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\"],\"products-grid.automatedQualityChecksForMissing\":[\"Automated quality checks for missing translations, pluralization issues, and context errors.\"],\"products-grid.benchmarkCli\":[\"Benchmark CLI\"],\"products-grid.benchmarkCloud\":[\"Benchmark Cloud\"],\"products-grid.benchmarkEnterprise\":[\"Benchmark Enterprise\"],\"products-grid.bundleOptimizer\":[\"Bundle Optimizer\"],\"products-grid.contactUs\":[\"Contact Us\"],\"products-grid.learnMore\":[\"Learn More\"],\"products-grid.migrationAssistant\":[\"Migration Assistant\"],\"products-grid.onPremiseDeploymentWithSso\":[\"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\"],\"products-grid.runBenchmarksLocallyFromYour\":[\"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\"],\"products-grid.translationQa\":[\"Translation QA\"],\"products-header.toolsAndServicesToStreamline\":[\"Tools and services to streamline your internationalization workflow.\"]}");
//#endregion
export { messages };
//#region src/locales/ko/products.mjs
var messages = JSON.parse("{\"products-grid.aiPoweredToolThatHelps\":[\"다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하도록 도와주는 AI 기반 도구입니다.\"],\"products-grid.analyzesAndOptimizesYourI18n\":[\"트리 쉐이킹(tree-shaking) 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.\"],\"products-grid.automatedCloudBasedBenchmarkingWith\":[\"기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.\"],\"products-grid.automatedQualityChecksForMissing\":[\"누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동화된 품질 검사.\"],\"products-grid.benchmarkCli\":[\"Benchmark CLI\"],\"products-grid.benchmarkCloud\":[\"Benchmark Cloud\"],\"products-grid.benchmarkEnterprise\":[\"Benchmark Enterprise\"],\"products-grid.bundleOptimizer\":[\"번들 옵티마이저\"],\"products-grid.contactUs\":[\"문의하기\"],\"products-grid.learnMore\":[\"더 알아보기\"],\"products-grid.migrationAssistant\":[\"마이그레이션 어시스턴트\"],\"products-grid.onPremiseDeploymentWithSso\":[\"SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포.\"],\"products-grid.runBenchmarksLocallyFromYour\":[\"터미널에서 로컬로 벤치마크를 실행합니다. 맞춤형 구성 및 CI 통합을 지원합니다.\"],\"products-grid.translationQa\":[\"번역 QA\"],\"products-header.toolsAndServicesToStreamline\":[\"국제화 워크플로우를 간소화하기 위한 도구 및 서비스.\"]}");
//#endregion
export { messages };
//#region src/locales/ru/products.mjs
var messages = JSON.parse("{\"products-grid.aiPoweredToolThatHelps\":[\"Инструмент на базе ИИ, помогающий мигрировать вашу кодовую базу между библиотеками i18n без простоев.\"],\"products-grid.analyzesAndOptimizesYourI18n\":[\"Анализирует и оптимизирует ваш бандл i18n для продакшна с использованием tree-shaking и разделения кода.\"],\"products-grid.automatedCloudBasedBenchmarkingWith\":[\"Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными панелями.\"],\"products-grid.automatedQualityChecksForMissing\":[\"Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с плюрализацией и контекстных ошибок.\"],\"products-grid.benchmarkCli\":[\"CLI для бенчмаркинга\"],\"products-grid.benchmarkCloud\":[\"Облачный бенчмаркинг\"],\"products-grid.benchmarkEnterprise\":[\"Корпоративный бенчмаркинг\"],\"products-grid.bundleOptimizer\":[\"Оптимизатор бандлов\"],\"products-grid.contactUs\":[\"Связаться с нами\"],\"products-grid.learnMore\":[\"Узнать больше\"],\"products-grid.migrationAssistant\":[\"Помощник по миграции\"],\"products-grid.onPremiseDeploymentWithSso\":[\"Локальное развертывание с поддержкой SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.\"],\"products-grid.runBenchmarksLocallyFromYour\":[\"Запуск тестов локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.\"],\"products-grid.translationQa\":[\"Контроль качества перевода\"],\"products-header.toolsAndServicesToStreamline\":[\"Инструменты и услуги для оптимизации рабочего процесса интернационализации.\"]}");
//#endregion
export { messages };
//#region src/locales/fr/products.mjs
var messages = JSON.parse("{\"products-grid.aiPoweredToolThatHelps\":[\"Outil alimenté par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.\"],\"products-grid.analyzesAndOptimizesYourI18n\":[\"Analyse et optimise votre bundle i18n pour la production avec élimination des codes morts (tree-shaking) et fractionnement du code.\"],\"products-grid.automatedCloudBasedBenchmarkingWith\":[\"Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.\"],\"products-grid.automatedQualityChecksForMissing\":[\"Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.\"],\"products-grid.benchmarkCli\":[\"CLI Benchmark\"],\"products-grid.benchmarkCloud\":[\"Benchmark Cloud\"],\"products-grid.benchmarkEnterprise\":[\"Benchmark Enterprise\"],\"products-grid.bundleOptimizer\":[\"Optimiseur de bundle\"],\"products-grid.contactUs\":[\"Contactez-nous\"],\"products-grid.learnMore\":[\"En savoir plus\"],\"products-grid.migrationAssistant\":[\"Assistant de migration\"],\"products-grid.onPremiseDeploymentWithSso\":[\"Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.\"],\"products-grid.runBenchmarksLocallyFromYour\":[\"Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.\"],\"products-grid.translationQa\":[\"QA de traduction\"],\"products-header.toolsAndServicesToStreamline\":[\"Des outils et services pour rationaliser votre flux de travail d'internationalisation.\"]}");
//#endregion
export { messages };
//#region src/locales/it/products.mjs
var messages = JSON.parse("{\"products-grid.aiPoweredToolThatHelps\":[\"Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n con tempi di inattività minimi.\"],\"products-grid.analyzesAndOptimizesYourI18n\":[\"Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.\"],\"products-grid.automatedCloudBasedBenchmarkingWith\":[\"Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.\"],\"products-grid.automatedQualityChecksForMissing\":[\"Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.\"],\"products-grid.benchmarkCli\":[\"CLI del Benchmark\"],\"products-grid.benchmarkCloud\":[\"Benchmark Cloud\"],\"products-grid.benchmarkEnterprise\":[\"Benchmark Enterprise\"],\"products-grid.bundleOptimizer\":[\"Ottimizzatore del Bundle\"],\"products-grid.contactUs\":[\"Contattaci\"],\"products-grid.learnMore\":[\"Scopri di più\"],\"products-grid.migrationAssistant\":[\"Assistente alla Migrazione\"],\"products-grid.onPremiseDeploymentWithSso\":[\"Distribuzione in locale con SSO, log di controllo, SLA personalizzati e supporto dedicato.\"],\"products-grid.runBenchmarksLocallyFromYour\":[\"Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.\"],\"products-grid.translationQa\":[\"QA delle Traduzioni\"],\"products-header.toolsAndServicesToStreamline\":[\"Strumenti e servizi per snellire il flusso di lavoro dell'internazionalizzazione.\"]}");
//#endregion
export { messages };
//#region src/locales/ja/products.mjs
var messages = JSON.parse("{\"products-grid.aiPoweredToolThatHelps\":[\"ダウンタイムなしでi18nライブラリ間でコードベースを移行するのに役立つAI搭載ツール。\"],\"products-grid.analyzesAndOptimizesYourI18n\":[\"Tree-shakingとコード分割により、プロダクション向けのi18nバンドルを分析および最適化します。\"],\"products-grid.automatedCloudBasedBenchmarkingWith\":[\"履歴追跡、アラート、チームダッシュボードを備えた自動クラウドベースのベンチマーク。\"],\"products-grid.automatedQualityChecksForMissing\":[\"翻訳の欠落、複数形の問題、およびコンテキストエラーの自動品質チェック。\"],\"products-grid.benchmarkCli\":[\"Benchmark CLI\"],\"products-grid.benchmarkCloud\":[\"Benchmark Cloud\"],\"products-grid.benchmarkEnterprise\":[\"Benchmark Enterprise\"],\"products-grid.bundleOptimizer\":[\"バンドルオプティマイザー\"],\"products-grid.contactUs\":[\"お問い合わせ\"],\"products-grid.learnMore\":[\"詳細を見る\"],\"products-grid.migrationAssistant\":[\"移行アシスタント\"],\"products-grid.onPremiseDeploymentWithSso\":[\"SSO、監査ログ、カスタムSLA、および専用サポートを備えたオンプレミス展開。\"],\"products-grid.runBenchmarksLocallyFromYour\":[\"ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。\"],\"products-grid.translationQa\":[\"翻訳QA\"],\"products-header.toolsAndServicesToStreamline\":[\"国際化ワークフローを合理化するためのツールとサービス。\"]}");
//#endregion
export { messages };
//#region src/locales/pt/products.mjs
var messages = JSON.parse("{\"products-grid.aiPoweredToolThatHelps\":[\"Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.\"],\"products-grid.analyzesAndOptimizesYourI18n\":[\"Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.\"],\"products-grid.automatedCloudBasedBenchmarkingWith\":[\"Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.\"],\"products-grid.automatedQualityChecksForMissing\":[\"Verificações automatizadas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.\"],\"products-grid.benchmarkCli\":[\"CLI de Benchmark\"],\"products-grid.benchmarkCloud\":[\"Benchmark Cloud\"],\"products-grid.benchmarkEnterprise\":[\"Benchmark Enterprise\"],\"products-grid.bundleOptimizer\":[\"Otimizador de Bundle\"],\"products-grid.contactUs\":[\"Contate-nos\"],\"products-grid.learnMore\":[\"Saiba Mais\"],\"products-grid.migrationAssistant\":[\"Assistente de Migração\"],\"products-grid.onPremiseDeploymentWithSso\":[\"Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.\"],\"products-grid.runBenchmarksLocallyFromYour\":[\"Execute benchmarks localmente pelo seu terminal. Suporta configurações personalizadas e integração CI.\"],\"products-grid.translationQa\":[\"QA de Tradução\"],\"products-header.toolsAndServicesToStreamline\":[\"Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização.\"]}");
//#endregion
export { messages };
//#region src/locales/de/route.mjs
var messages = JSON.parse("{\"route.couldNotMeasureHydrationDuration\":[\"Hydratationsdauer konnte nicht gemessen werden:\"],\"route.oopsPageNotFound\":[\"Hoppla! Seite nicht gefunden\"],\"route.returnToHome\":[\"Zurück zur Startseite\"]}");
//#endregion
export { messages };
//#region src/locales/ko/route.mjs
var messages = JSON.parse("{\"route.couldNotMeasureHydrationDuration\":[\"수화 지속 시간을 측정할 수 없습니다:\"],\"route.oopsPageNotFound\":[\"앗! 페이지를 찾을 수 없습니다\"],\"route.returnToHome\":[\"홈으로 돌아가기\"]}");
//#endregion
export { messages };
//#region src/locales/ja/route.mjs
var messages = JSON.parse("{\"route.couldNotMeasureHydrationDuration\":[\"ハイドレーション時間を測定できませんでした：\"],\"route.oopsPageNotFound\":[\"おっと！ページが見つかりません\"],\"route.returnToHome\":[\"ホームに戻る\"]}");
//#endregion
export { messages };
//#region src/locales/zh/route.mjs
var messages = JSON.parse("{\"route.couldNotMeasureHydrationDuration\":[\"无法测量注水时长：\"],\"route.oopsPageNotFound\":[\"哎呀！页面未找到\"],\"route.returnToHome\":[\"返回首页\"]}");
//#endregion
export { messages };
//#region src/locales/pt/route.mjs
var messages = JSON.parse("{\"route.couldNotMeasureHydrationDuration\":[\"Não foi possível medir a duração da hidratação:\"],\"route.oopsPageNotFound\":[\"Ops! Página não encontrada\"],\"route.returnToHome\":[\"Voltar para o Início\"]}");
//#endregion
export { messages };
//#region src/locales/es/route.mjs
var messages = JSON.parse("{\"route.couldNotMeasureHydrationDuration\":[\"No se pudo medir la duración de la hidratación:\"],\"route.oopsPageNotFound\":[\"¡Ups! Página no encontrada\"],\"route.returnToHome\":[\"Volver al inicio\"]}");
//#endregion
export { messages };
//#region src/locales/ru/route.mjs
var messages = JSON.parse("{\"route.couldNotMeasureHydrationDuration\":[\"Не удалось измерить продолжительность гидратации:\"],\"route.oopsPageNotFound\":[\"Упс! Страница не найдена\"],\"route.returnToHome\":[\"Вернуться на главную\"]}");
//#endregion
export { messages };
//#region src/locales/en/route.mjs
var messages = JSON.parse("{\"route.couldNotMeasureHydrationDuration\":[\"Could not measure hydration duration:\"],\"route.oopsPageNotFound\":[\"Oops! Page not found\"],\"route.returnToHome\":[\"Return to Home\"]}");
//#endregion
export { messages };
//#region src/locales/it/route.mjs
var messages = JSON.parse("{\"route.couldNotMeasureHydrationDuration\":[\"Impossibile misurare la durata dell'idratazione:\"],\"route.oopsPageNotFound\":[\"Ops! Pagina non trovata\"],\"route.returnToHome\":[\"Torna alla Home\"]}");
//#endregion
export { messages };
//#region src/locales/fr/route.mjs
var messages = JSON.parse("{\"route.couldNotMeasureHydrationDuration\":[\"Impossible de mesurer la durée d'hydratation :\"],\"route.oopsPageNotFound\":[\"Oups ! Page non trouvée\"],\"route.returnToHome\":[\"Retour à l'accueil\"]}");
//#endregion
export { messages };
//#region src/locales/de/settings.mjs
var messages = JSON.parse("{\"api-access-section.apiAccess\":[\"API-Zugriff\"],\"api-access-section.apiKey\":[\"API-Schlüssel\"],\"api-access-section.copy\":[\"Kopieren\"],\"api-access-section.useThisKeyToAccess\":[\"Verwenden Sie diesen Schlüssel für den programmgesteuerten Zugriff auf die Benchmarking-API.\"],\"preferences-section.arabicAr\":[\"Arabisch (ar)\"],\"preferences-section.chineseSimplifiedZhCn\":[\"Chinesisch vereinfacht (zh-CN)\"],\"preferences-section.darkMode\":[\"Dunkelmodus\"],\"preferences-section.defaultLanguage\":[\"Standardsprache\"],\"preferences-section.emailNotifications\":[\"E-Mail-Benachrichtigungen\"],\"preferences-section.englishEn\":[\"Englisch (en)\"],\"preferences-section.frenchFr\":[\"Französisch (fr)\"],\"preferences-section.germanDe\":[\"Deutsch (de)\"],\"preferences-section.japaneseJa\":[\"Japanisch (ja)\"],\"preferences-section.receiveWeeklyBenchmarkReports\":[\"Wöchentliche Benchmark-Berichte erhalten\"],\"preferences-section.spanishEs\":[\"Spanisch (es)\"],\"preferences-section.toggleDarkMode\":[\"Dunkelmodus umschalten\"],\"preferences-section.toggleNotifications\":[\"Benachrichtigungen umschalten\"],\"preferences-section.useDarkColorScheme\":[\"Dunkles Farbschema verwenden\"],\"profile-section.displayName\":[\"Anzeigename\"],\"profile-section.email\":[\"E-Mail\"],\"profile-section.profile\":[\"Profil\"],\"settings-footer.cancel\":[\"Abbrechen\"],\"settings-footer.saveChanges\":[\"Änderungen speichern\"],\"settings-header.manageYourAccountPreferencesAnd\":[\"Verwalten Sie Ihre Kontoeinstellungen und -konfigurationen.\"]}");
//#endregion
export { messages };
//#region src/locales/pt/settings.mjs
var messages = JSON.parse("{\"api-access-section.apiAccess\":[\"Acesso à API\"],\"api-access-section.apiKey\":[\"Chave da API\"],\"api-access-section.copy\":[\"Copiar\"],\"api-access-section.useThisKeyToAccess\":[\"Utilize esta chave para acessar a API de benchmarking de forma programática.\"],\"preferences-section.arabicAr\":[\"Árabe (ar)\"],\"preferences-section.chineseSimplifiedZhCn\":[\"Chinês simplificado (zh-CN)\"],\"preferences-section.darkMode\":[\"Modo Escuro\"],\"preferences-section.defaultLanguage\":[\"Idioma Padrão\"],\"preferences-section.emailNotifications\":[\"Notificações por e-mail\"],\"preferences-section.englishEn\":[\"Inglês (en)\"],\"preferences-section.frenchFr\":[\"Francês (fr)\"],\"preferences-section.germanDe\":[\"Alemão (de)\"],\"preferences-section.japaneseJa\":[\"Japonês (ja)\"],\"preferences-section.receiveWeeklyBenchmarkReports\":[\"Receber relatórios semanais de benchmarks\"],\"preferences-section.spanishEs\":[\"Espanhol (es)\"],\"preferences-section.toggleDarkMode\":[\"Alternar modo escuro\"],\"preferences-section.toggleNotifications\":[\"Alternar notificações\"],\"preferences-section.useDarkColorScheme\":[\"Usar esquema de cores escuras\"],\"profile-section.displayName\":[\"Nome de exibição\"],\"profile-section.email\":[\"E-mail\"],\"profile-section.profile\":[\"Perfil\"],\"settings-footer.cancel\":[\"Cancelar\"],\"settings-footer.saveChanges\":[\"Salvar alterações\"],\"settings-header.manageYourAccountPreferencesAnd\":[\"Gerencie as preferências de sua conta e a configuração.\"]}");
//#endregion
export { messages };
//#region src/locales/it/settings.mjs
var messages = JSON.parse("{\"api-access-section.apiAccess\":[\"Accesso API\"],\"api-access-section.apiKey\":[\"Chiave API\"],\"api-access-section.copy\":[\"Copia\"],\"api-access-section.useThisKeyToAccess\":[\"Usa questa chiave per accedere programmaticamente alle API di benchmarking.\"],\"preferences-section.arabicAr\":[\"Arabo (ar)\"],\"preferences-section.chineseSimplifiedZhCn\":[\"Cinese semplificato (zh-CN)\"],\"preferences-section.darkMode\":[\"Modalità scura\"],\"preferences-section.defaultLanguage\":[\"Lingua predefinita\"],\"preferences-section.emailNotifications\":[\"Notifiche via email\"],\"preferences-section.englishEn\":[\"Inglese (en)\"],\"preferences-section.frenchFr\":[\"Francese (fr)\"],\"preferences-section.germanDe\":[\"Tedesco (de)\"],\"preferences-section.japaneseJa\":[\"Giapponese (ja)\"],\"preferences-section.receiveWeeklyBenchmarkReports\":[\"Ricevi rapporti settimanali sui benchmark\"],\"preferences-section.spanishEs\":[\"Spagnolo (es)\"],\"preferences-section.toggleDarkMode\":[\"Attiva/disattiva modalità scura\"],\"preferences-section.toggleNotifications\":[\"Attiva/disattiva notifiche\"],\"preferences-section.useDarkColorScheme\":[\"Usa lo schema colori scuro\"],\"profile-section.displayName\":[\"Nome visualizzato\"],\"profile-section.email\":[\"Email\"],\"profile-section.profile\":[\"Profilo\"],\"settings-footer.cancel\":[\"Annulla\"],\"settings-footer.saveChanges\":[\"Salva modifiche\"],\"settings-header.manageYourAccountPreferencesAnd\":[\"Gestisci le preferenze del tuo account e la configurazione.\"]}");
//#endregion
export { messages };
//#region src/locales/es/settings.mjs
var messages = JSON.parse("{\"api-access-section.apiAccess\":[\"Acceso API\"],\"api-access-section.apiKey\":[\"Clave API\"],\"api-access-section.copy\":[\"Copiar\"],\"api-access-section.useThisKeyToAccess\":[\"Utilice esta clave para acceder a la API de benchmarking de forma programática.\"],\"preferences-section.arabicAr\":[\"Árabe (ar)\"],\"preferences-section.chineseSimplifiedZhCn\":[\"Chino simplificado (zh-CN)\"],\"preferences-section.darkMode\":[\"Modo oscuro\"],\"preferences-section.defaultLanguage\":[\"Idioma predeterminado\"],\"preferences-section.emailNotifications\":[\"Notificaciones por correo electrónico\"],\"preferences-section.englishEn\":[\"Inglés (en)\"],\"preferences-section.frenchFr\":[\"Francés (fr)\"],\"preferences-section.germanDe\":[\"Alemán (de)\"],\"preferences-section.japaneseJa\":[\"Japonés (ja)\"],\"preferences-section.receiveWeeklyBenchmarkReports\":[\"Recibir informes semanales de benchmark\"],\"preferences-section.spanishEs\":[\"Español (es)\"],\"preferences-section.toggleDarkMode\":[\"Alternar modo oscuro\"],\"preferences-section.toggleNotifications\":[\"Alternar notificaciones\"],\"preferences-section.useDarkColorScheme\":[\"Usar esquema de colores oscuros\"],\"profile-section.displayName\":[\"Nombre de pantalla\"],\"profile-section.email\":[\"Correo electrónico\"],\"profile-section.profile\":[\"Perfil\"],\"settings-footer.cancel\":[\"Cancelar\"],\"settings-footer.saveChanges\":[\"Guardar cambios\"],\"settings-header.manageYourAccountPreferencesAnd\":[\"Gestione sus preferencias de cuenta y configuración.\"]}");
//#endregion
export { messages };
//#region src/locales/fr/settings.mjs
var messages = JSON.parse("{\"api-access-section.apiAccess\":[\"Accès API\"],\"api-access-section.apiKey\":[\"Clé API\"],\"api-access-section.copy\":[\"Copier\"],\"api-access-section.useThisKeyToAccess\":[\"Utilisez cette clé pour accéder à l'API de benchmarking par programmation.\"],\"preferences-section.arabicAr\":[\"Arabe (ar)\"],\"preferences-section.chineseSimplifiedZhCn\":[\"Chinois simplifié (zh-CN)\"],\"preferences-section.darkMode\":[\"Mode sombre\"],\"preferences-section.defaultLanguage\":[\"Langue par défaut\"],\"preferences-section.emailNotifications\":[\"Notifications par email\"],\"preferences-section.englishEn\":[\"Anglais (en)\"],\"preferences-section.frenchFr\":[\"Français (fr)\"],\"preferences-section.germanDe\":[\"Allemand (de)\"],\"preferences-section.japaneseJa\":[\"Japonais (ja)\"],\"preferences-section.receiveWeeklyBenchmarkReports\":[\"Recevoir des rapports hebdomadaires de benchmark\"],\"preferences-section.spanishEs\":[\"Espagnol (es)\"],\"preferences-section.toggleDarkMode\":[\"Basculer le mode sombre\"],\"preferences-section.toggleNotifications\":[\"Basculer les notifications\"],\"preferences-section.useDarkColorScheme\":[\"Utiliser le schéma de couleurs sombres\"],\"profile-section.displayName\":[\"Nom d'affichage\"],\"profile-section.email\":[\"Email\"],\"profile-section.profile\":[\"Profil\"],\"settings-footer.cancel\":[\"Annuler\"],\"settings-footer.saveChanges\":[\"Enregistrer les modifications\"],\"settings-header.manageYourAccountPreferencesAnd\":[\"Gérez vos préférences de compte et votre configuration.\"]}");
//#endregion
export { messages };
//#region src/locales/ko/settings.mjs
var messages = JSON.parse("{\"api-access-section.apiAccess\":[\"API 액세스\"],\"api-access-section.apiKey\":[\"API 키\"],\"api-access-section.copy\":[\"복사\"],\"api-access-section.useThisKeyToAccess\":[\"이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오.\"],\"preferences-section.arabicAr\":[\"아랍어 (ar)\"],\"preferences-section.chineseSimplifiedZhCn\":[\"중국어 간체 (zh-CN)\"],\"preferences-section.darkMode\":[\"다크 모드\"],\"preferences-section.defaultLanguage\":[\"기본 언어\"],\"preferences-section.emailNotifications\":[\"이메일 알림\"],\"preferences-section.englishEn\":[\"영어 (en)\"],\"preferences-section.frenchFr\":[\"프랑스어 (fr)\"],\"preferences-section.germanDe\":[\"독일어 (de)\"],\"preferences-section.japaneseJa\":[\"일본어 (ja)\"],\"preferences-section.receiveWeeklyBenchmarkReports\":[\"주간 벤치마크 보고서 받기\"],\"preferences-section.spanishEs\":[\"스페인어 (es)\"],\"preferences-section.toggleDarkMode\":[\"다크 모드 토글\"],\"preferences-section.toggleNotifications\":[\"알림 토글\"],\"preferences-section.useDarkColorScheme\":[\"어두운 색상 테마 사용\"],\"profile-section.displayName\":[\"표시 이름\"],\"profile-section.email\":[\"이메일 주소\"],\"profile-section.profile\":[\"프로필\"],\"settings-footer.cancel\":[\"취소\"],\"settings-footer.saveChanges\":[\"변경 사항 저장\"],\"settings-header.manageYourAccountPreferencesAnd\":[\"계정 기본 설정 및 구성을 관리합니다.\"]}");
//#endregion
export { messages };
//#region src/locales/ru/settings.mjs
var messages = JSON.parse("{\"api-access-section.apiAccess\":[\"Доступ к API\"],\"api-access-section.apiKey\":[\"Ключ API\"],\"api-access-section.copy\":[\"Копировать\"],\"api-access-section.useThisKeyToAccess\":[\"Используйте этот ключ для программного доступа к API бенчмаркинга.\"],\"preferences-section.arabicAr\":[\"Арабский (ar)\"],\"preferences-section.chineseSimplifiedZhCn\":[\"Китайский упрощенный (zh-CN)\"],\"preferences-section.darkMode\":[\"Темный режим\"],\"preferences-section.defaultLanguage\":[\"Язык по умолчанию\"],\"preferences-section.emailNotifications\":[\"Уведомления по эл. почте\"],\"preferences-section.englishEn\":[\"Английский (en)\"],\"preferences-section.frenchFr\":[\"Французский (fr)\"],\"preferences-section.germanDe\":[\"Немецкий (de)\"],\"preferences-section.japaneseJa\":[\"Японский (ja)\"],\"preferences-section.receiveWeeklyBenchmarkReports\":[\"Получать еженедельные отчеты о бенчмарках\"],\"preferences-section.spanishEs\":[\"Испанский (es)\"],\"preferences-section.toggleDarkMode\":[\"Переключить темный режим\"],\"preferences-section.toggleNotifications\":[\"Переключить уведомления\"],\"preferences-section.useDarkColorScheme\":[\"Использовать темную цветовую схему\"],\"profile-section.displayName\":[\"Отображаемое имя\"],\"profile-section.email\":[\"Эл. почта\"],\"profile-section.profile\":[\"Профиль\"],\"settings-footer.cancel\":[\"Отмена\"],\"settings-footer.saveChanges\":[\"Сохранить изменения\"],\"settings-header.manageYourAccountPreferencesAnd\":[\"Управляйте настройками и конфигурацией своего аккаунта.\"]}");
//#endregion
export { messages };
//#region src/locales/en/settings.mjs
var messages = JSON.parse("{\"api-access-section.apiAccess\":[\"API Access\"],\"api-access-section.apiKey\":[\"API Key\"],\"api-access-section.useThisKeyToAccess\":[\"Use this key to access the benchmarking API programmatically.\"],\"preferences-section.arabicAr\":[\"Arabic (ar)\"],\"preferences-section.chineseSimplifiedZhCn\":[\"Chinese Simplified (zh-CN)\"],\"preferences-section.darkMode\":[\"Dark Mode\"],\"preferences-section.defaultLanguage\":[\"Default Language\"],\"preferences-section.emailNotifications\":[\"Email Notifications\"],\"preferences-section.englishEn\":[\"English (en)\"],\"preferences-section.frenchFr\":[\"French (fr)\"],\"preferences-section.germanDe\":[\"German (de)\"],\"preferences-section.japaneseJa\":[\"Japanese (ja)\"],\"preferences-section.receiveWeeklyBenchmarkReports\":[\"Receive weekly benchmark reports\"],\"preferences-section.spanishEs\":[\"Spanish (es)\"],\"preferences-section.toggleDarkMode\":[\"Toggle dark mode\"],\"preferences-section.toggleNotifications\":[\"Toggle notifications\"],\"preferences-section.useDarkColorScheme\":[\"Use dark color scheme\"],\"profile-section.displayName\":[\"Display Name\"],\"settings-footer.saveChanges\":[\"Save Changes\"],\"settings-header.manageYourAccountPreferencesAnd\":[\"Manage your account preferences and configuration.\"]}");
//#endregion
export { messages };
//#region src/locales/zh/settings.mjs
var messages = JSON.parse("{\"api-access-section.apiAccess\":[\"API 访问\"],\"api-access-section.apiKey\":[\"API 密钥\"],\"api-access-section.copy\":[\"复制\"],\"api-access-section.useThisKeyToAccess\":[\"使用此密钥从程序访问基准测试 API。\"],\"preferences-section.arabicAr\":[\"阿拉伯语 (ar)\"],\"preferences-section.chineseSimplifiedZhCn\":[\"简体中文 (zh-CN)\"],\"preferences-section.darkMode\":[\"深色模式\"],\"preferences-section.defaultLanguage\":[\"默认语言\"],\"preferences-section.emailNotifications\":[\"邮件通知\"],\"preferences-section.englishEn\":[\"英语 (en)\"],\"preferences-section.frenchFr\":[\"法语 (fr)\"],\"preferences-section.germanDe\":[\"德语 (de)\"],\"preferences-section.japaneseJa\":[\"日语 (ja)\"],\"preferences-section.receiveWeeklyBenchmarkReports\":[\"接收每周基准测试报告\"],\"preferences-section.spanishEs\":[\"西班牙语 (es)\"],\"preferences-section.toggleDarkMode\":[\"切换深色模式\"],\"preferences-section.toggleNotifications\":[\"切换通知\"],\"preferences-section.useDarkColorScheme\":[\"使用深色配色方案\"],\"profile-section.displayName\":[\"显示名称\"],\"profile-section.email\":[\"电子邮件地址\"],\"profile-section.profile\":[\"个人资料\"],\"settings-footer.cancel\":[\"取消\"],\"settings-footer.saveChanges\":[\"保存更改\"],\"settings-header.manageYourAccountPreferencesAnd\":[\"管理您的账户偏好和配置。\"]}");
//#endregion
export { messages };
//#region src/locales/ja/settings.mjs
var messages = JSON.parse("{\"api-access-section.apiAccess\":[\"APIアクセス\"],\"api-access-section.apiKey\":[\"APIキー\"],\"api-access-section.copy\":[\"コピー\"],\"api-access-section.useThisKeyToAccess\":[\"このキーを使用して、プログラムからベンチマークAPIにアクセスします。\"],\"preferences-section.arabicAr\":[\"アラビア語 (ar)\"],\"preferences-section.chineseSimplifiedZhCn\":[\"中国語 簡体字 (zh-CN)\"],\"preferences-section.darkMode\":[\"ダークモード\"],\"preferences-section.defaultLanguage\":[\"既定の言語\"],\"preferences-section.emailNotifications\":[\"メール通知\"],\"preferences-section.englishEn\":[\"英語 (en)\"],\"preferences-section.frenchFr\":[\"フランス語 (fr)\"],\"preferences-section.germanDe\":[\"ドイツ語 (de)\"],\"preferences-section.japaneseJa\":[\"日本語 (ja)\"],\"preferences-section.receiveWeeklyBenchmarkReports\":[\"毎週のベンチマークレポートを受け取る\"],\"preferences-section.spanishEs\":[\"スペイン語 (es)\"],\"preferences-section.toggleDarkMode\":[\"ダークモードの切り替え\"],\"preferences-section.toggleNotifications\":[\"通知の切り替え\"],\"preferences-section.useDarkColorScheme\":[\"ダークカラーの配色を使用する\"],\"profile-section.displayName\":[\"表示名\"],\"profile-section.email\":[\"メールアドレス\"],\"profile-section.profile\":[\"プロファイル\"],\"settings-footer.cancel\":[\"キャンセル\"],\"settings-footer.saveChanges\":[\"変更を保存\"],\"settings-header.manageYourAccountPreferencesAnd\":[\"アカウントの優先設定と構成を管理します。\"]}");
//#endregion
export { messages };
//#region src/locales/es/shared.mjs
var messages = JSON.parse("{\"footer.anOpenSourceTestApplication\":[\"Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación.\"],\"footer.builtWith\":[\"i18n Benchmark — Proyecto de código abierto. Construido con React, Vite & TanStack Router.\"],\"footer.contact\":[\"Contacto\"],\"footer.contributing\":[\"Contribuir\"],\"footer.github\":[\"GitHub\"],\"footer.methodology\":[\"Metodología\"],\"footer.resources\":[\"Recursos\"],\"header.blog\":[\"Blog\"],\"header.careers\":[\"Carreras\"],\"header.contact\":[\"Contacto\"],\"header.faq\":[\"FAQ\"],\"header.goToGithub\":[\"Ir a GitHub\"],\"header.home\":[\"Inicio\"],\"header.methodology\":[\"Metodología\"],\"header.mockPages\":[\"Páginas de prueba\"],\"header.pricing\":[\"Precios\"],\"header.products\":[\"Productos\"],\"header.settings\":[\"Configuración\"],\"header.team\":[\"Equipo\"],\"mockBanner\":[\"⚠️ Esta página contiene datos simulados solo con fines de benchmarking. No está relacionada con ningún negocio o servicio real.\"],\"theme-toggle.themeAuto\":[\"Tema: Auto\"],\"theme-toggle.themeDark\":[\"Tema: Oscuro\"],\"theme-toggle.themeLight\":[\"Tema: Claro\"],\"theme-toggle.themeModeAutoSystemClick\":[\"Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.\"],\"theme-toggle.themeModeDarkClick\":[\"Modo de tema: oscuro. Haga clic para cambiar al modo automático (sistema).\"],\"theme-toggle.themeModeLightClick\":[\"Modo de tema: claro. Haga clic para cambiar al modo oscuro.\"]}");
//#endregion
export { messages };
//#region src/locales/en/shared.mjs
var messages = JSON.parse("{\"footer.anOpenSourceTestApplication\":[\"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.\"],\"footer.builtWith\":[\"i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.\"],\"footer.contact\":[\"Contact\"],\"footer.contributing\":[\"Contributing\"],\"footer.github\":[\"GitHub\"],\"footer.methodology\":[\"Methodology\"],\"footer.resources\":[\"Resources\"],\"header.blog\":[\"Blog\"],\"header.careers\":[\"Careers\"],\"header.contact\":[\"Contact\"],\"header.faq\":[\"FAQ\"],\"header.goToGithub\":[\"Go to GitHub\"],\"header.home\":[\"Home\"],\"header.methodology\":[\"Methodology\"],\"header.mockPages\":[\"Mock Pages\"],\"header.pricing\":[\"Pricing\"],\"header.products\":[\"Products\"],\"header.settings\":[\"Settings\"],\"header.team\":[\"Team\"],\"mockBanner\":[\"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.\"],\"theme-toggle.themeAuto\":[\"Theme: Auto\"],\"theme-toggle.themeDark\":[\"Theme: Dark\"],\"theme-toggle.themeLight\":[\"Theme: Light\"],\"theme-toggle.themeModeAutoSystemClick\":[\"Theme mode: auto (system). Click to switch to light mode.\"],\"theme-toggle.themeModeDarkClick\":[\"Theme mode: dark. Click to switch to auto (system) mode.\"],\"theme-toggle.themeModeLightClick\":[\"Theme mode: light. Click to switch to dark mode.\"]}");
//#endregion
export { messages };
//#region src/locales/zh/shared.mjs
var messages = JSON.parse("{\"footer.anOpenSourceTestApplication\":[\"一个用于测量国际化库对包大小、加载时间和应用反应性实际影响的开源测试应用程序。\"],\"footer.builtWith\":[\"i18n Benchmark — 开源项目。使用 React, Vite & TanStack Router 构建。\"],\"footer.contact\":[\"联系我们\"],\"footer.contributing\":[\"贡献\"],\"footer.github\":[\"GitHub\"],\"footer.methodology\":[\"方法论\"],\"footer.resources\":[\"资源\"],\"header.blog\":[\"博客\"],\"header.careers\":[\"职业生涯\"],\"header.contact\":[\"联系我们\"],\"header.faq\":[\"常见问题\"],\"header.goToGithub\":[\"访问 GitHub\"],\"header.home\":[\"首页\"],\"header.methodology\":[\"方法论\"],\"header.mockPages\":[\"模拟页面\"],\"header.pricing\":[\"价格\"],\"header.products\":[\"产品\"],\"header.settings\":[\"设置\"],\"header.team\":[\"团队\"],\"mockBanner\":[\"⚠️ 此页面包含仅用于基准测试目的的模拟数据。它与任何真实的商业或服务无关。\"],\"theme-toggle.themeAuto\":[\"主题：自动\"],\"theme-toggle.themeDark\":[\"主题：暗黑\"],\"theme-toggle.themeLight\":[\"主题：明亮\"],\"theme-toggle.themeModeAutoSystemClick\":[\"主题模式：自动（系统）。点击切换到明亮模式。\"],\"theme-toggle.themeModeDarkClick\":[\"主题模式：暗黑。点击切换到自动（系统）模式。\"],\"theme-toggle.themeModeLightClick\":[\"主题模式：明亮。点击切换到暗黑模式。\"]}");
//#endregion
export { messages };
//#region src/locales/it/shared.mjs
var messages = JSON.parse("{\"footer.anOpenSourceTestApplication\":[\"Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.\"],\"footer.builtWith\":[\"i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.\"],\"footer.contact\":[\"Contatti\"],\"footer.contributing\":[\"Contribuire\"],\"footer.github\":[\"GitHub\"],\"footer.methodology\":[\"Metodologia\"],\"footer.resources\":[\"Risorse\"],\"header.blog\":[\"Blog\"],\"header.careers\":[\"Carriere\"],\"header.contact\":[\"Contatti\"],\"header.faq\":[\"FAQ\"],\"header.goToGithub\":[\"Vai su GitHub\"],\"header.home\":[\"Home\"],\"header.methodology\":[\"Metodologia\"],\"header.mockPages\":[\"Pagine di test\"],\"header.pricing\":[\"Prezzi\"],\"header.products\":[\"Prodotti\"],\"header.settings\":[\"Impostazioni\"],\"header.team\":[\"Team\"],\"mockBanner\":[\"⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.\"],\"theme-toggle.themeAuto\":[\"Tema: Auto\"],\"theme-toggle.themeDark\":[\"Tema: Scuro\"],\"theme-toggle.themeLight\":[\"Tema: Chiaro\"],\"theme-toggle.themeModeAutoSystemClick\":[\"Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.\"],\"theme-toggle.themeModeDarkClick\":[\"Modalità tema: scura. Clicca per passare alla modalità auto (sistema).\"],\"theme-toggle.themeModeLightClick\":[\"Modalità tema: chiara. Clicca per passare alla modalità scura.\"]}");
//#endregion
export { messages };
//#region src/locales/pt/shared.mjs
var messages = JSON.parse("{\"footer.anOpenSourceTestApplication\":[\"Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.\"],\"footer.builtWith\":[\"i18n Benchmark — Projeto de código aberto. Construído com React, Vite & TanStack Router.\"],\"footer.contact\":[\"Contato\"],\"footer.contributing\":[\"Contribuir\"],\"footer.github\":[\"GitHub\"],\"footer.methodology\":[\"Metodologia\"],\"footer.resources\":[\"Recursos\"],\"header.blog\":[\"Blog\"],\"header.careers\":[\"Carreiras\"],\"header.contact\":[\"Contato\"],\"header.faq\":[\"FAQ\"],\"header.goToGithub\":[\"Ir para GitHub\"],\"header.home\":[\"Início\"],\"header.methodology\":[\"Metodologia\"],\"header.mockPages\":[\"Páginas de teste\"],\"header.pricing\":[\"Preços\"],\"header.products\":[\"Produtos\"],\"header.settings\":[\"Configurações\"],\"header.team\":[\"Equipe\"],\"mockBanner\":[\"⚠️ Esta página contém dados simulados apenas para fins de benchmarking. Ela não está relacionada a nenhum negócio ou serviço real.\"],\"theme-toggle.themeAuto\":[\"Tema: Auto\"],\"theme-toggle.themeDark\":[\"Tema: Escuro\"],\"theme-toggle.themeLight\":[\"Tema: Claro\"],\"theme-toggle.themeModeAutoSystemClick\":[\"Modo de tema: automático (sistema). Clique para mudar para o modo claro.\"],\"theme-toggle.themeModeDarkClick\":[\"Modo de tema: escuro. Clique para mudar para o modo automático (sistema).\"],\"theme-toggle.themeModeLightClick\":[\"Modo de tema: claro. Clique para mudar para o modo escuro.\"]}");
//#endregion
export { messages };
//#region src/locales/ru/shared.mjs
var messages = JSON.parse("{\"footer.anOpenSourceTestApplication\":[\"Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.\"],\"footer.builtWith\":[\"i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.\"],\"footer.contact\":[\"Контакт\"],\"footer.contributing\":[\"Вклад\"],\"footer.github\":[\"GitHub\"],\"footer.methodology\":[\"Методология\"],\"footer.resources\":[\"Ресурсы\"],\"header.blog\":[\"Блог\"],\"header.careers\":[\"Карьера\"],\"header.contact\":[\"Контакт\"],\"header.faq\":[\"FAQ\"],\"header.goToGithub\":[\"Перейти на GitHub\"],\"header.home\":[\"Главная\"],\"header.methodology\":[\"Методология\"],\"header.mockPages\":[\"Тестовые страницы\"],\"header.pricing\":[\"Цены\"],\"header.products\":[\"Продукты\"],\"header.settings\":[\"Настройки\"],\"header.team\":[\"Команда\"],\"mockBanner\":[\"⚠️ Эта страница содержит имитационные данные только для целей тестирования. Она не связана с каким-либо реальным бизнесом или услугой.\"],\"theme-toggle.themeAuto\":[\"Тема: Авто\"],\"theme-toggle.themeDark\":[\"Тема: Темная\"],\"theme-toggle.themeLight\":[\"Тема: Светлая\"],\"theme-toggle.themeModeAutoSystemClick\":[\"Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.\"],\"theme-toggle.themeModeDarkClick\":[\"Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.\"],\"theme-toggle.themeModeLightClick\":[\"Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.\"]}");
//#endregion
export { messages };
//#region src/locales/ko/shared.mjs
var messages = JSON.parse("{\"footer.anOpenSourceTestApplication\":[\"국제화 라이브러리가 번들 크기, 로딩 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.\"],\"footer.builtWith\":[\"i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.\"],\"footer.contact\":[\"문의하기\"],\"footer.contributing\":[\"기여하기\"],\"footer.github\":[\"GitHub\"],\"footer.methodology\":[\"방법론\"],\"footer.resources\":[\"리소스\"],\"header.blog\":[\"블로그\"],\"header.careers\":[\"채용\"],\"header.contact\":[\"문의하기\"],\"header.faq\":[\"FAQ\"],\"header.goToGithub\":[\"GitHub으로 이동\"],\"header.home\":[\"홈\"],\"header.methodology\":[\"방법론\"],\"header.mockPages\":[\"모의 페이지\"],\"header.pricing\":[\"요금\"],\"header.products\":[\"제품\"],\"header.settings\":[\"설정\"],\"header.team\":[\"팀\"],\"mockBanner\":[\"⚠️ 이 페이지에는 벤치마킹 목적으로만 사용되는 모의 데이터가 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.\"],\"theme-toggle.themeAuto\":[\"테마: 자동\"],\"theme-toggle.themeDark\":[\"테마: 다크\"],\"theme-toggle.themeLight\":[\"테마: 라이트\"],\"theme-toggle.themeModeAutoSystemClick\":[\"테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.\"],\"theme-toggle.themeModeDarkClick\":[\"테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.\"],\"theme-toggle.themeModeLightClick\":[\"테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.\"]}");
//#endregion
export { messages };
//#region src/locales/de/shared.mjs
var messages = JSON.parse("{\"footer.anOpenSourceTestApplication\":[\"Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladezeit und die Reaktivität der App.\"],\"footer.builtWith\":[\"i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.\"],\"footer.contact\":[\"Kontakt\"],\"footer.contributing\":[\"Beitragen\"],\"footer.github\":[\"GitHub\"],\"footer.methodology\":[\"Methodik\"],\"footer.resources\":[\"Ressourcen\"],\"header.blog\":[\"Blog\"],\"header.careers\":[\"Karriere\"],\"header.contact\":[\"Kontakt\"],\"header.faq\":[\"FAQ\"],\"header.goToGithub\":[\"Zu GitHub\"],\"header.home\":[\"Startseite\"],\"header.methodology\":[\"Methodik\"],\"header.mockPages\":[\"Testseiten\"],\"header.pricing\":[\"Preise\"],\"header.products\":[\"Produkte\"],\"header.settings\":[\"Einstellungen\"],\"header.team\":[\"Team\"],\"mockBanner\":[\"⚠️ Diese Seite enthält fiktive Daten, die nur Benchmark-Zwecken dienen. Sie stehen in keinem Zusammenhang mit realen Unternehmen oder Dienstleistungen.\"],\"theme-toggle.themeAuto\":[\"Thema: Auto\"],\"theme-toggle.themeDark\":[\"Thema: Dunkel\"],\"theme-toggle.themeLight\":[\"Thema: Hell\"],\"theme-toggle.themeModeAutoSystemClick\":[\"Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.\"],\"theme-toggle.themeModeDarkClick\":[\"Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.\"],\"theme-toggle.themeModeLightClick\":[\"Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.\"]}");
//#endregion
export { messages };
//#region src/locales/ja/shared.mjs
var messages = JSON.parse("{\"footer.anOpenSourceTestApplication\":[\"国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーション。\"],\"footer.builtWith\":[\"i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築されています。\"],\"footer.contact\":[\"お問い合わせ\"],\"footer.contributing\":[\"貢献する\"],\"footer.github\":[\"GitHub\"],\"footer.methodology\":[\"方法論\"],\"footer.resources\":[\"リソース\"],\"header.blog\":[\"ブログ\"],\"header.careers\":[\"採用情報\"],\"header.contact\":[\"お問い合わせ\"],\"header.faq\":[\"FAQ\"],\"header.goToGithub\":[\"GitHubへ\"],\"header.home\":[\"ホーム\"],\"header.methodology\":[\"方法論\"],\"header.mockPages\":[\"モックページ\"],\"header.pricing\":[\"料金\"],\"header.products\":[\"製品\"],\"header.settings\":[\"設定\"],\"header.team\":[\"チーム\"],\"mockBanner\":[\"⚠️ このページには、ベンチマーク目的のみのモックデータが含まれています。実際のビジネスやサービスとは関係ありません。\"],\"theme-toggle.themeAuto\":[\"テーマ：自動\"],\"theme-toggle.themeDark\":[\"テーマ：ダーク\"],\"theme-toggle.themeLight\":[\"テーマ：ライト\"],\"theme-toggle.themeModeAutoSystemClick\":[\"テーマモード：自動（システム）。クリックしてライトモードに切り替えます。\"],\"theme-toggle.themeModeDarkClick\":[\"テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。\"],\"theme-toggle.themeModeLightClick\":[\"テーマモード：ライト。クリックしてダークモードに切り替えます。\"]}");
//#endregion
export { messages };
//#region src/locales/fr/shared.mjs
var messages = JSON.parse("{\"footer.anOpenSourceTestApplication\":[\"Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.\"],\"footer.builtWith\":[\"i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.\"],\"footer.contact\":[\"Contact\"],\"footer.contributing\":[\"Contribuer\"],\"footer.github\":[\"GitHub\"],\"footer.methodology\":[\"Méthodologie\"],\"footer.resources\":[\"Ressources\"],\"header.blog\":[\"Blog\"],\"header.careers\":[\"Carrières\"],\"header.contact\":[\"Contact\"],\"header.faq\":[\"FAQ\"],\"header.goToGithub\":[\"Aller sur GitHub\"],\"header.home\":[\"Accueil\"],\"header.methodology\":[\"Méthodologie\"],\"header.mockPages\":[\"Pages de test\"],\"header.pricing\":[\"Tarifs\"],\"header.products\":[\"Produits\"],\"header.settings\":[\"Paramètres\"],\"header.team\":[\"Équipe\"],\"mockBanner\":[\"⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.\"],\"theme-toggle.themeAuto\":[\"Thème : Auto\"],\"theme-toggle.themeDark\":[\"Thème : Sombre\"],\"theme-toggle.themeLight\":[\"Thème : Clair\"],\"theme-toggle.themeModeAutoSystemClick\":[\"Mode thématique : auto (système). Cliquez pour passer en mode clair.\"],\"theme-toggle.themeModeDarkClick\":[\"Mode thématique : sombre. Cliquez pour passer en mode auto (système).\"],\"theme-toggle.themeModeLightClick\":[\"Mode thématique : clair. Cliquez pour passer en mode sombre.\"]}");
//#endregion
export { messages };
//#region src/locales/zh/team.mjs
var messages = JSON.parse("{\"team-grid.aishaPatel\":[\"Aisha Patel\"],\"team-grid.communityManager\":[\"社区经理\"],\"team-grid.dataAnalyst\":[\"数据分析师\"],\"team-grid.developerAdvocate\":[\"开发者倡导者\"],\"team-grid.elenaKowalski\":[\"Elena Kowalski\"],\"team-grid.ensuresStatisticalRigorInAll\":[\"确保所有基准测试结果的统计严谨性。麻省理工学院 (MIT) 应用统计学博士。\"],\"team-grid.formerGoogleEngineerWith10\":[\"前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。\"],\"team-grid.founderLeadEngineer\":[\"创始人兼首席工程师\"],\"team-grid.fullStackDeveloper\":[\"全栈开发人员\"],\"team-grid.maintainsTheBenchmarkingInfrastructureAnd\":[\"负责维护基准测试基础设施和 CI/CD 流水线。Lingui 开源贡献者。\"],\"team-grid.managesCommunityContributionsPartnershipsAnd\":[\"负责管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\"],\"team-grid.marcusWeber\":[\"Marcus Weber\"],\"team-grid.passionateAboutDeveloperExperienceAnd\":[\"热衷于开发者体验和教育。React Conf, JSConf 和 i18nNext 的演讲者。\"],\"team-grid.performanceEngineer\":[\"性能工程师\"],\"team-grid.sarahChen\":[\"Sarah Chen\"],\"team-grid.specializesInJavascriptPerformanceOptimization\":[\"专注于 JavaScript 性能优化和基准测试方法论。此前曾职于 Vercel。\"],\"team-grid.tomasRodriguez\":[\"Tomás Rodríguez\"],\"team-grid.yukiTanaka\":[\"Yuki Tanaka\"],\"team-header.meetThePeopleBehindI18n\":[\"认识 i18n Benchmark 背后的团队。一支多元化的团队，因对出色开发人员工具的共同热爱而凝聚在一起。\"],\"team-header.ourTeam\":[\"我们的团队\"]}");
//#endregion
export { messages };
//#region src/locales/ja/team.mjs
var messages = JSON.parse("{\"team-grid.aishaPatel\":[\"Aisha Patel\"],\"team-grid.communityManager\":[\"コミュニティマネージャー\"],\"team-grid.dataAnalyst\":[\"データアナリスト\"],\"team-grid.developerAdvocate\":[\"デベロッパーアドボケイト\"],\"team-grid.elenaKowalski\":[\"Elena Kowalski\"],\"team-grid.ensuresStatisticalRigorInAll\":[\"すべてのベンチマーク結果における統計的な厳密さを保証します。MITで応用統計学の博士号を取得。\"],\"team-grid.formerGoogleEngineerWith10\":[\"計大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。\"],\"team-grid.founderLeadEngineer\":[\"創設者 & リードエンジニア\"],\"team-grid.fullStackDeveloper\":[\"フルスタックデベロッパー\"],\"team-grid.maintainsTheBenchmarkingInfrastructureAnd\":[\"ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。\"],\"team-grid.managesCommunityContributionsPartnershipsAnd\":[\"コミュニティの貢献、パートナーシップ、イベントを管理。オープンソースガバナンスの経歴を持つ。\"],\"team-grid.marcusWeber\":[\"Marcus Weber\"],\"team-grid.passionateAboutDeveloperExperienceAnd\":[\"開発者エクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、およびi18nNextのスピーカー。\"],\"team-grid.performanceEngineer\":[\"パフォーマンスエンジニア\"],\"team-grid.sarahChen\":[\"Sarah Chen\"],\"team-grid.specializesInJavascriptPerformanceOptimization\":[\"JavaScriptのパフォーマンス最適化とベンチマーク方法論を専門としています。以前はVercelに在籍。\"],\"team-grid.tomasRodriguez\":[\"Tomás Rodríguez\"],\"team-grid.yukiTanaka\":[\"Yuki Tanaka\"],\"team-header.meetThePeopleBehindI18n\":[\"i18n Benchmarkを支える人々を紹介します。優れた開発者ツールへの共通の情熱によって結ばれた多様なチームです。\"],\"team-header.ourTeam\":[\"私たちのチーム\"]}");
//#endregion
export { messages };
//#region src/locales/en/team.mjs
var messages = JSON.parse("{\"team-grid.aishaPatel\":[\"Aisha Patel\"],\"team-grid.communityManager\":[\"Community Manager\"],\"team-grid.dataAnalyst\":[\"Data Analyst\"],\"team-grid.developerAdvocate\":[\"Developer Advocate\"],\"team-grid.elenaKowalski\":[\"Elena Kowalski\"],\"team-grid.ensuresStatisticalRigorInAll\":[\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\"],\"team-grid.formerGoogleEngineerWith10\":[\"Former Google engineer with 10 years of experience building internationalization systems at scale.\"],\"team-grid.founderLeadEngineer\":[\"Founder & Lead Engineer\"],\"team-grid.fullStackDeveloper\":[\"Full-Stack Developer\"],\"team-grid.maintainsTheBenchmarkingInfrastructureAnd\":[\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\"],\"team-grid.managesCommunityContributionsPartnershipsAnd\":[\"Manages community contributions, partnerships, and events. Background in open source governance.\"],\"team-grid.marcusWeber\":[\"Marcus Weber\"],\"team-grid.passionateAboutDeveloperExperienceAnd\":[\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\"],\"team-grid.performanceEngineer\":[\"Performance Engineer\"],\"team-grid.sarahChen\":[\"Sarah Chen\"],\"team-grid.specializesInJavascriptPerformanceOptimization\":[\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\"],\"team-grid.tomasRodriguez\":[\"Tomás Rodríguez\"],\"team-grid.yukiTanaka\":[\"Yuki Tanaka\"],\"team-header.meetThePeopleBehindI18n\":[\"Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.\"],\"team-header.ourTeam\":[\"Our Team\"]}");
//#endregion
export { messages };
//#region src/locales/it/team.mjs
var messages = JSON.parse("{\"team-grid.aishaPatel\":[\"Aisha Patel\"],\"team-grid.communityManager\":[\"Responsabile della comunità\"],\"team-grid.dataAnalyst\":[\"Analista dati\"],\"team-grid.developerAdvocate\":[\"Developer Advocate\"],\"team-grid.elenaKowalski\":[\"Elena Kowalski\"],\"team-grid.ensuresStatisticalRigorInAll\":[\"Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.\"],\"team-grid.formerGoogleEngineerWith10\":[\"Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.\"],\"team-grid.founderLeadEngineer\":[\"Fondatrice e Responsabile tecnico\"],\"team-grid.fullStackDeveloper\":[\"Sviluppatore Full-Stack\"],\"team-grid.maintainsTheBenchmarkingInfrastructureAnd\":[\"Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.\"],\"team-grid.managesCommunityContributionsPartnershipsAnd\":[\"Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.\"],\"team-grid.marcusWeber\":[\"Marcus Weber\"],\"team-grid.passionateAboutDeveloperExperienceAnd\":[\"Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.\"],\"team-grid.performanceEngineer\":[\"Ingegnere delle prestazioni\"],\"team-grid.sarahChen\":[\"Sarah Chen\"],\"team-grid.specializesInJavascriptPerformanceOptimization\":[\"Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.\"],\"team-grid.tomasRodriguez\":[\"Tomás Rodríguez\"],\"team-grid.yukiTanaka\":[\"Yuki Tanaka\"],\"team-header.meetThePeopleBehindI18n\":[\"Incontra le persone che stanno dietro i18n Benchmark. Un team eterogeneo unito dalla passione comune per i grandi strumenti per gli sviluppatori.\"],\"team-header.ourTeam\":[\"Il nostro team\"]}");
//#endregion
export { messages };
//#region src/locales/ko/team.mjs
var messages = JSON.parse("{\"team-grid.aishaPatel\":[\"Aisha Patel\"],\"team-grid.communityManager\":[\"커뮤니티 매니저\"],\"team-grid.dataAnalyst\":[\"데이터 분석가\"],\"team-grid.developerAdvocate\":[\"개발자 에반젤리스트\"],\"team-grid.elenaKowalski\":[\"Elena Kowalski\"],\"team-grid.ensuresStatisticalRigorInAll\":[\"모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.\"],\"team-grid.formerGoogleEngineerWith10\":[\"규모 있는 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.\"],\"team-grid.founderLeadEngineer\":[\"설립자 겸 수석 엔지니어\"],\"team-grid.fullStackDeveloper\":[\"풀스택 개발자\"],\"team-grid.maintainsTheBenchmarkingInfrastructureAnd\":[\"벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui 오픈 소스 기여자입니다.\"],\"team-grid.managesCommunityContributionsPartnershipsAnd\":[\"커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 분야의 배경을 가지고 있습니다.\"],\"team-grid.marcusWeber\":[\"Marcus Weber\"],\"team-grid.passionateAboutDeveloperExperienceAnd\":[\"개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.\"],\"team-grid.performanceEngineer\":[\"성능 엔지니어\"],\"team-grid.sarahChen\":[\"Sarah Chen\"],\"team-grid.specializesInJavascriptPerformanceOptimization\":[\"JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.\"],\"team-grid.tomasRodriguez\":[\"Tomás Rodríguez\"],\"team-grid.yukiTanaka\":[\"Yuki Tanaka\"],\"team-header.meetThePeopleBehindI18n\":[\"i18n Benchmark를 만드는 사람들을 만나보세요. 훌륭한 개발자 도구에 대한 공통된 열정으로 뭉친 다양한 팀입니다.\"],\"team-header.ourTeam\":[\"저희 팀\"]}");
//#endregion
export { messages };
//#region src/locales/es/team.mjs
var messages = JSON.parse("{\"team-grid.aishaPatel\":[\"Aisha Patel\"],\"team-grid.communityManager\":[\"Gerente de comunidad\"],\"team-grid.dataAnalyst\":[\"Analista de datos\"],\"team-grid.developerAdvocate\":[\"Abogada de desarrolladores\"],\"team-grid.elenaKowalski\":[\"Elena Kowalski\"],\"team-grid.ensuresStatisticalRigorInAll\":[\"Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.\"],\"team-grid.formerGoogleEngineerWith10\":[\"Ex ingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.\"],\"team-grid.founderLeadEngineer\":[\"Fundadora e ingeniera principal\"],\"team-grid.fullStackDeveloper\":[\"Desarrollador Full-Stack\"],\"team-grid.maintainsTheBenchmarkingInfrastructureAnd\":[\"Mantiene la infraestructura de benchmarking y la canalización de CI/CD. Colaborador de código abierto de Lingui.\"],\"team-grid.managesCommunityContributionsPartnershipsAnd\":[\"Gestiona contribuciones de la comunidad, asociaciones y eventos. Trayectoria en gobernanza de código abierto.\"],\"team-grid.marcusWeber\":[\"Marcus Weber\"],\"team-grid.passionateAboutDeveloperExperienceAnd\":[\"Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.\"],\"team-grid.performanceEngineer\":[\"Ingeniero de rendimiento\"],\"team-grid.sarahChen\":[\"Sarah Chen\"],\"team-grid.specializesInJavascriptPerformanceOptimization\":[\"Especialista en optimización del rendimiento de JavaScript y metodología de benchmarking. Anteriormente en Vercel.\"],\"team-grid.tomasRodriguez\":[\"Tomás Rodríguez\"],\"team-grid.yukiTanaka\":[\"Yuki Tanaka\"],\"team-header.meetThePeopleBehindI18n\":[\"Conozca a las personas que están detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas para desarrolladores.\"],\"team-header.ourTeam\":[\"Nuestro equipo\"]}");
//#endregion
export { messages };
//#region src/locales/pt/team.mjs
var messages = JSON.parse("{\"team-grid.aishaPatel\":[\"Aisha Patel\"],\"team-grid.communityManager\":[\"Gerente de Comunidade\"],\"team-grid.dataAnalyst\":[\"Analista de Dados\"],\"team-grid.developerAdvocate\":[\"Developer Advocate\"],\"team-grid.elenaKowalski\":[\"Elena Kowalski\"],\"team-grid.ensuresStatisticalRigorInAll\":[\"Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em estatística aplicada pelo MIT.\"],\"team-grid.formerGoogleEngineerWith10\":[\"Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\"],\"team-grid.founderLeadEngineer\":[\"Fundadora e Engenheira Líder\"],\"team-grid.fullStackDeveloper\":[\"Desenvolvedor Full-Stack\"],\"team-grid.maintainsTheBenchmarkingInfrastructureAnd\":[\"Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Contribuidor open source para Lingui.\"],\"team-grid.managesCommunityContributionsPartnershipsAnd\":[\"Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\"],\"team-grid.marcusWeber\":[\"Marcus Weber\"],\"team-grid.passionateAboutDeveloperExperienceAnd\":[\"Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.\"],\"team-grid.performanceEngineer\":[\"Engenheiro de Performance\"],\"team-grid.sarahChen\":[\"Sarah Chen\"],\"team-grid.specializesInJavascriptPerformanceOptimization\":[\"Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\"],\"team-grid.tomasRodriguez\":[\"Tomás Rodríguez\"],\"team-grid.yukiTanaka\":[\"Yuki Tanaka\"],\"team-header.meetThePeopleBehindI18n\":[\"Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas para desenvolvedores.\"],\"team-header.ourTeam\":[\"Nossa Equipe\"]}");
//#endregion
export { messages };
//#region src/locales/de/team.mjs
var messages = JSON.parse("{\"team-grid.aishaPatel\":[\"Aisha Patel\"],\"team-grid.communityManager\":[\"Community-Managerin\"],\"team-grid.dataAnalyst\":[\"Datenanalystin\"],\"team-grid.developerAdvocate\":[\"Developer Advocate\"],\"team-grid.elenaKowalski\":[\"Elena Kowalski\"],\"team-grid.ensuresStatisticalRigorInAll\":[\"Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. PhD in angewandter Statistik vom MIT.\"],\"team-grid.formerGoogleEngineerWith10\":[\"Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen im großen Maßstab.\"],\"team-grid.founderLeadEngineer\":[\"Gründerin & Leitende Ingenieurin\"],\"team-grid.fullStackDeveloper\":[\"Full-Stack-Entwickler\"],\"team-grid.maintainsTheBenchmarkingInfrastructureAnd\":[\"Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.\"],\"team-grid.managesCommunityContributionsPartnershipsAnd\":[\"Verwaltet Community-Beiträge, Partnerschaften und Events. Hintergrund in Open-Source-Governance.\"],\"team-grid.marcusWeber\":[\"Marcus Weber\"],\"team-grid.passionateAboutDeveloperExperienceAnd\":[\"Begeistert von Entwicklererfahrung und Bildung. Sprecherin bei React Conf, JSConf und i18nNext.\"],\"team-grid.performanceEngineer\":[\"Performance-Ingenieur\"],\"team-grid.sarahChen\":[\"Sarah Chen\"],\"team-grid.specializesInJavascriptPerformanceOptimization\":[\"Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.\"],\"team-grid.tomasRodriguez\":[\"Tomás Rodríguez\"],\"team-grid.yukiTanaka\":[\"Yuki Tanaka\"],\"team-header.meetThePeopleBehindI18n\":[\"Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, vereint durch die Leidenschaft für großartige Entwicklertools.\"],\"team-header.ourTeam\":[\"Unser Team\"]}");
//#endregion
export { messages };
//#region src/locales/fr/team.mjs
var messages = JSON.parse("{\"team-grid.aishaPatel\":[\"Aisha Patel\"],\"team-grid.communityManager\":[\"Responsable de communauté\"],\"team-grid.dataAnalyst\":[\"Analyste de données\"],\"team-grid.developerAdvocate\":[\"Developer Advocate\"],\"team-grid.elenaKowalski\":[\"Elena Kowalski\"],\"team-grid.ensuresStatisticalRigorInAll\":[\"Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.\"],\"team-grid.formerGoogleEngineerWith10\":[\"Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.\"],\"team-grid.founderLeadEngineer\":[\"Fondatrice & Ingénieure principale\"],\"team-grid.fullStackDeveloper\":[\"Développeur Full-Stack\"],\"team-grid.maintainsTheBenchmarkingInfrastructureAnd\":[\"Entretient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.\"],\"team-grid.managesCommunityContributionsPartnershipsAnd\":[\"Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.\"],\"team-grid.marcusWeber\":[\"Marcus Weber\"],\"team-grid.passionateAboutDeveloperExperienceAnd\":[\"Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.\"],\"team-grid.performanceEngineer\":[\"Ingénieur performance\"],\"team-grid.sarahChen\":[\"Sarah Chen\"],\"team-grid.specializesInJavascriptPerformanceOptimization\":[\"Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.\"],\"team-grid.tomasRodriguez\":[\"Tomás Rodríguez\"],\"team-grid.yukiTanaka\":[\"Yuki Tanaka\"],\"team-header.meetThePeopleBehindI18n\":[\"Rencontrez les personnes derrière i18n Benchmark. Une équipe diversifiée unie par une passion commune pour d'excellents outils de développement.\"],\"team-header.ourTeam\":[\"Notre équipe\"]}");
//#endregion
export { messages };
//#region src/locales/ru/team.mjs
var messages = JSON.parse("{\"team-grid.aishaPatel\":[\"Айша Патель\"],\"team-grid.communityManager\":[\"Комьюнити-менеджер\"],\"team-grid.dataAnalyst\":[\"Аналитик данных\"],\"team-grid.developerAdvocate\":[\"Адвокат разработчиков\"],\"team-grid.elenaKowalski\":[\"Елена Ковальски\"],\"team-grid.ensuresStatisticalRigorInAll\":[\"Обеспечивает статистическую строгость всех результатов тестирования. Доктор прикладной статистики из MIT.\"],\"team-grid.formerGoogleEngineerWith10\":[\"Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.\"],\"team-grid.founderLeadEngineer\":[\"Основатель и ведущий инженер\"],\"team-grid.fullStackDeveloper\":[\"Фулстек-разработчик\"],\"team-grid.maintainsTheBenchmarkingInfrastructureAnd\":[\"Поддерживает инфраструктуру тестирования и CI/CD пайплайн. Участник разработки Lingui с открытым исходным кодом.\"],\"team-grid.managesCommunityContributionsPartnershipsAnd\":[\"Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.\"],\"team-grid.marcusWeber\":[\"Маркус Вебер\"],\"team-grid.passionateAboutDeveloperExperienceAnd\":[\"Увлечена опытом разработчиков и обучением. Спикер на React Conf, JSConf и i18nNext.\"],\"team-grid.performanceEngineer\":[\"Инженер по производительности\"],\"team-grid.sarahChen\":[\"Сара Чен\"],\"team-grid.specializesInJavascriptPerformanceOptimization\":[\"Специализируется на оптимизации производительности JavaScript и методологии тестирования. Ранее работал в Vercel.\"],\"team-grid.tomasRodriguez\":[\"Томас Родригес\"],\"team-grid.yukiTanaka\":[\"Юки Танака\"],\"team-header.meetThePeopleBehindI18n\":[\"Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к отличным инструментам для разработчиков.\"],\"team-header.ourTeam\":[\"Наша команда\"]}");
//#endregion
export { messages };
