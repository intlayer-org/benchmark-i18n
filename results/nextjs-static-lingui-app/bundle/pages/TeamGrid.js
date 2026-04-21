import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "next/navigation";
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
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
function TeamGrid() {
	const { i18n } = useLingui();
	return jsx("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: [
			{
				name: i18n._({
					id: "team.sarahChen",
					message: "Sarah Chen"
				}),
				role: i18n._({
					id: "team.founderLeadEngineer",
					message: "Founder & Lead Engineer"
				}),
				bio: i18n._({
					id: "team.sarahBio",
					message: "Former Google engineer with 10 years of experience building internationalization systems at scale."
				})
			},
			{
				name: i18n._({
					id: "team.marcusWeber",
					message: "Marcus Weber"
				}),
				role: i18n._({
					id: "team.performanceEngineer",
					message: "Performance Engineer"
				}),
				bio: i18n._({
					id: "team.marcusBio",
					message: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel."
				})
			},
			{
				name: i18n._({
					id: "team.aishaPatel",
					message: "Aisha Patel"
				}),
				role: i18n._({
					id: "team.developerAdvocate",
					message: "Developer Advocate"
				}),
				bio: i18n._({
					id: "team.aishaBio",
					message: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext."
				})
			},
			{
				name: i18n._({
					id: "team.tomasRodriguez",
					message: "Tomás Rodríguez"
				}),
				role: i18n._({
					id: "team.fullStackDeveloper",
					message: "Full-Stack Developer"
				}),
				bio: i18n._({
					id: "team.tomasBio",
					message: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui."
				})
			},
			{
				name: i18n._({
					id: "team.yukiTanaka",
					message: "Yuki Tanaka"
				}),
				role: i18n._({
					id: "team.dataAnalyst",
					message: "Data Analyst"
				}),
				bio: i18n._({
					id: "team.yukiBio",
					message: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT."
				})
			},
			{
				name: i18n._({
					id: "team.elenaKowalski",
					message: "Elena Kowalski"
				}),
				role: i18n._({
					id: "team.communityManager",
					message: "Community Manager"
				}),
				bio: i18n._({
					id: "team.elenaBio",
					message: "Manages community contributions, partnerships, and events. Background in open source governance."
				})
			}
		].map((m) => jsxs("div", {
			className: "rounded-lg border border-border bg-card p-6 text-center",
			children: [
				jsx("div", {
					className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground",
					children: m.name.split(" ").map((n) => n[0]).join("")
				}),
				jsx("h3", {
					className: "text-base font-semibold text-foreground",
					children: m.name
				}),
				jsx("p", {
					className: "mb-2 text-xs font-medium text-primary",
					children: m.role
				}),
				jsx("p", {
					className: "text-sm text-muted-foreground",
					children: m.bio
				})
			]
		}, m.name))
	});
}
function recordHydrationDuration() {
	if (typeof window === "undefined") return;
	console.log("--- BROWSER: RootDocument mounted");
	performance.mark("hydration_end");
	try {
		if (performance.getEntriesByName("hydration_start").length > 0) {
			performance.measure("hydration_duration", "hydration_start", "hydration_end");
			console.log("--- BROWSER: hydration_duration measured");
			const duration = performance.getEntriesByName("hydration_duration")[0]?.duration;
			if (duration) console.log(`Hydration Duration: ${duration.toFixed(2)}ms`);
		} else console.warn("--- BROWSER: hydration_start NOT FOUND");
	} catch (err) {
		console.warn("Could not measure hydration duration:", err);
	}
}
function recordRenderTime(id, startTime) {
	if (typeof window === "undefined") return;
	const renderTime = performance.now() - startTime;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
	window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
	window.__RENDER_METRICS__[id].push(renderTime);
}
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
var defaultLocale$1 = "en";
function normalizeLocales(locales) {
	return [...Array.isArray(locales) ? locales : [locales], defaultLocale$1];
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
		if (typeof params.locale === "string" || params.locales) this.activate(params.locale ?? defaultLocale$1, params.locales);
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
var messageModules = {
	en: JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\"],\"about-grid.methodology\":[\"Methodology\"],\"about-grid.theSame10PageApp\":[\"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\"],\"about-grid.whyThisExists\":[\"Why This Exists\"],\"about-header.aboutThisBenchmark\":[\"About This Benchmark\"],\"about-header.thisIsAnOpenSource\":[\"This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.\"],\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"Insights, tutorials, and analysis from the i18n community.\"],\"blog-list.aStepByStepGuide\":[\"A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\"],\"blog-list.aTransparentLookAtOur\":[\"A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\"],\"blog-list.anOverviewOfTheCurrent\":[\"An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"Benchmark Methodology: How We Test\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"Comparing i18n Libraries in 2026: A Deep Dive\"],\"blog-list.february12026\":[\"February 1, 2026\"],\"blog-list.february152026\":[\"February 15, 2026\"],\"blog-list.february282026\":[\"February 28, 2026\"],\"blog-list.howToReduceYourI18n\":[\"How to Reduce Your i18n Bundle by 60%\"],\"blog-list.january202026\":[\"January 20, 2026\"],\"blog-list.march82026\":[\"March 8, 2026\"],\"blog-list.migratingFromReactI18nextTo\":[\"Migrating from react-i18next to Lingui\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\"],\"blog-list.readMore\":[\"Read More →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"Server Components and i18n: What Changes?\"],\"blog-list.theStateOfInternationalizationIn\":[\"The State of Internationalization in React\"],\"blog-list.weTested12DifferentInternationalization\":[\"We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\"],\"careers-benefits.competitivePay\":[\"Competitive pay\"],\"careers-benefits.openSourceTime\":[\"Open source time\"],\"careers-benefits.topOfMarketCompensation\":[\"Top-of-market compensation\"],\"careers-benefits.twentyPercentTime\":[\"20% time for OSS\"],\"careers-header.joinOurMissionToImprove\":[\"Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.\"],\"careers-header.title\":[\"Careers\"],\"contact-form.bugReport\":[\"Bug Report\"],\"contact-form.contribution\":[\"Contribution\"],\"contact-form.describeYourQuestionOrIdea\":[\"Describe your question or idea...\"],\"contact-form.email\":[\"Email\"],\"contact-form.message\":[\"Message\"],\"contact-form.methodologyQuestion\":[\"Methodology Question\"],\"contact-form.newBenchmarkIdea\":[\"New Benchmark Idea\"],\"contact-form.other\":[\"Other\"],\"contact-form.sendMessage\":[\"Send Message\"],\"contact-form.topic\":[\"Topic\"],\"contact-form.yourName\":[\"Your name\"],\"contact-header.getInTouch\":[\"Get in Touch\"],\"contact-header.haveIdeasFoundABug\":[\"Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at\"],\"faq-header.subtitle\":[\"Everything you need to know about i18n Benchmark.\"],\"faq-header.title\":[\"Frequently Asked Questions\"],\"faq-list.canISubmitMyOwn\":[\"Can I submit my own benchmarks?\"],\"faq-list.doYouOfferConsultingServices\":[\"Do you offer consulting services?\"],\"faq-list.howAreBenchmarksConducted\":[\"How are benchmarks conducted?\"],\"faq-list.howCanIContribute\":[\"How can I contribute?\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"How often are benchmarks updated?\"],\"faq-list.isTheDataReliable\":[\"Is the data reliable?\"],\"faq-list.thereAreManyWaysTo\":[\"There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\"],\"faq-list.weReRunAllBenchmarks\":[\"We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\"],\"faq-list.weRunStandardizedTestsIn\":[\"We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\"],\"faq-list.weSupportReactI18nextReact\":[\"We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\"],\"faq-list.whatIsI18nBenchmark\":[\"What is i18n Benchmark?\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"Which libraries are currently supported?\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\"],\"footer.anOpenSourceTestApplication\":[\"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.\"],\"footer.builtWith\":[\"i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.\"],\"footer.contact\":[\"Contact\"],\"footer.contributing\":[\"Contributing\"],\"footer.github\":[\"GitHub\"],\"footer.i18nBenchmark\":[\"i18n Benchmark\"],\"footer.methodology\":[\"Methodology\"],\"footer.resources\":[\"Resources\"],\"header.blog\":[\"Blog\"],\"header.careers\":[\"Careers\"],\"header.contact\":[\"Contact\"],\"header.faq\":[\"FAQ\"],\"header.goToGithub\":[\"Go to GitHub\"],\"header.home\":[\"Home\"],\"header.i18nBench\":[\"i18n Bench\"],\"header.methodology\":[\"Methodology\"],\"header.mockPages\":[\"Mock Pages\"],\"header.pricing\":[\"Pricing\"],\"header.products\":[\"Products\"],\"header.settings\":[\"Settings\"],\"header.team\":[\"Team\"],\"hero.aTestApplicationDesignedTo\":[\"A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.\"],\"hero.title\":[\"i18n Benchmark\"],\"hero.viewResults\":[\"View Results\"],\"mockBanner\":[\"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.\"],\"open-positions.applyNow\":[\"Apply Now\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\"],\"open-positions.engineering\":[\"Engineering\"],\"open-positions.fullTime\":[\"Full-time\"],\"open-positions.openPositions\":[\"Open Positions\"],\"open-positions.remote\":[\"Remote\"],\"open-positions.seniorFrontendEngineer\":[\"Senior Frontend Engineer\"],\"pricing-header.chooseThePlanThatFits\":[\"Choose the plan that fits your team. No hidden fees.\"],\"pricing-header.simpleTransparentPricing\":[\"Simple, Transparent Pricing\"],\"pricing-tiers.allLibraries\":[\"All libraries\"],\"pricing-tiers.auditLogs\":[\"Audit logs\"],\"pricing-tiers.benchmarkRunPerDay\":[\"5 benchmark runs/day\"],\"pricing-tiers.ciIntegration\":[\"CI integration\"],\"pricing-tiers.communitySupport\":[\"Community support\"],\"pricing-tiers.contactSales\":[\"Contact Sales\"],\"pricing-tiers.customPrice\":[\"Custom\"],\"pricing-tiers.customSlas\":[\"Custom SLAs\"],\"pricing-tiers.dedicatedAccountManager\":[\"Dedicated account manager\"],\"pricing-tiers.enterprise\":[\"Enterprise\"],\"pricing-tiers.everythingInPro\":[\"Everything in Pro\"],\"pricing-tiers.forever\":[\"forever\"],\"pricing-tiers.getStarted\":[\"Get Started\"],\"pricing-tiers.historicalData\":[\"Historical data\"],\"pricing-tiers.librariesNumber\":[\"3 libraries\"],\"pricing-tiers.month\":[\"/month\"],\"pricing-tiers.onPremiseOption\":[\"On-premise option\"],\"pricing-tiers.price0\":[\"$0\"],\"pricing-tiers.price29\":[\"$29\"],\"pricing-tiers.prioritySupport\":[\"Priority support\"],\"pricing-tiers.privateResults\":[\"Private results\"],\"pricing-tiers.pro\":[\"Pro\"],\"pricing-tiers.publicResults\":[\"Public results\"],\"pricing-tiers.ssoSaml\":[\"SSO & SAML\"],\"pricing-tiers.starter\":[\"Starter\"],\"pricing-tiers.trainingSessions\":[\"Training sessions\"],\"pricing-tiers.unlimitedRuns\":[\"Unlimited runs\"],\"products-header.subtitle\":[\"Tools and services to streamline your internationalization workflow.\"],\"products-header.title\":[\"Products\"],\"products.benchmarkCli\":[\"Benchmark CLI\"],\"products.benchmarkCliDesc\":[\"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\"],\"products.benchmarkCloud\":[\"Benchmark Cloud\"],\"products.benchmarkCloudDesc\":[\"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\"],\"products.benchmarkEnterprise\":[\"Benchmark Enterprise\"],\"products.benchmarkEnterpriseDesc\":[\"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\"],\"products.bundleOptimizer\":[\"Bundle Optimizer\"],\"products.bundleOptimizerDesc\":[\"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\"],\"products.contactUs\":[\"Contact Us\"],\"products.free\":[\"Free\"],\"products.learnMore\":[\"Learn More\"],\"products.migrationAssistant\":[\"Migration Assistant\"],\"products.migrationAssistantDesc\":[\"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\"],\"products.price.benchmarkCloud\":[\"$29/mo\"],\"products.price.bundleOptimizer\":[\"$49/mo\"],\"products.price.migrationAssistant\":[\"$99 one-time\"],\"products.price.translationQa\":[\"$19/mo\"],\"products.translationQa\":[\"Translation QA\"],\"products.translationQaDesc\":[\"Automated quality checks for missing translations, pluralization issues, and context errors.\"],\"results-table.bundleSize\":[\"Bundle Size\"],\"results-table.lazyLoading\":[\"Lazy Loading\"],\"results-table.library\":[\"Library\"],\"results-table.lookupTime\":[\"Lookup Time\"],\"results-table.sampleResults\":[\"Sample Results\"],\"settings-header.subtitle\":[\"Manage your account preferences and configuration.\"],\"settings-header.title\":[\"Settings\"],\"settings.apiAccess.apiKey\":[\"API Key\"],\"settings.apiAccess.copy\":[\"Copy\"],\"settings.apiAccess.title\":[\"API Access\"],\"settings.apiAccess.useKeyDescription\":[\"Use this key to access the benchmarking API programmatically.\"],\"settings.footer.cancel\":[\"Cancel\"],\"settings.footer.saveChanges\":[\"Save Changes\"],\"settings.preferences.arabic\":[\"Arabic\"],\"settings.preferences.chinese\":[\"Chinese\"],\"settings.preferences.darkMode\":[\"Dark Mode\"],\"settings.preferences.defaultLanguage\":[\"Default Language\"],\"settings.preferences.emailNotifications\":[\"Email Notifications\"],\"settings.preferences.english\":[\"English\"],\"settings.preferences.french\":[\"French\"],\"settings.preferences.german\":[\"German\"],\"settings.preferences.japanese\":[\"Japanese\"],\"settings.preferences.receiveWeeklyReports\":[\"Receive weekly benchmark reports\"],\"settings.preferences.spanish\":[\"Spanish\"],\"settings.preferences.title\":[\"Preferences\"],\"settings.preferences.useDarkScheme\":[\"Use dark color scheme\"],\"settings.profile.displayName\":[\"Display Name\"],\"settings.profile.email\":[\"Email\"],\"settings.profile.title\":[\"Profile\"],\"team-header.subtitle\":[\"Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.\"],\"team-header.title\":[\"Our Team\"],\"team.aishaBio\":[\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\"],\"team.aishaPatel\":[\"Aisha Patel\"],\"team.communityManager\":[\"Community Manager\"],\"team.dataAnalyst\":[\"Data Analyst\"],\"team.developerAdvocate\":[\"Developer Advocate\"],\"team.elenaBio\":[\"Manages community contributions, partnerships, and events. Background in open source governance.\"],\"team.elenaKowalski\":[\"Elena Kowalski\"],\"team.founderLeadEngineer\":[\"Founder & Lead Engineer\"],\"team.fullStackDeveloper\":[\"Full-Stack Developer\"],\"team.marcusBio\":[\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\"],\"team.marcusWeber\":[\"Marcus Weber\"],\"team.performanceEngineer\":[\"Performance Engineer\"],\"team.sarahBio\":[\"Former Google engineer with 10 years of experience building internationalization systems at scale.\"],\"team.sarahChen\":[\"Sarah Chen\"],\"team.tomasBio\":[\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\"],\"team.tomasRodriguez\":[\"Tomás Rodríguez\"],\"team.yukiBio\":[\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\"],\"team.yukiTanaka\":[\"Yuki Tanaka\"],\"theme-toggle.themeAuto\":[\"Theme: Auto\"],\"theme-toggle.themeDark\":[\"Theme: Dark\"],\"theme-toggle.themeLight\":[\"Theme: Light\"],\"theme-toggle.themeModeAutoSystemClick\":[\"Theme mode: auto (system). Click to switch to light mode.\"],\"theme-toggle.themeModeDarkClick\":[\"Theme mode: dark. Click to switch to auto (system) mode.\"],\"theme-toggle.themeModeLightClick\":[\"Theme mode: light. Click to switch to dark mode.\"],\"understanding-impact.cacheInvalidation\":[\"Cache invalidation:\"],\"understanding-impact.cacheInvalidationDesc\":[\"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\"],\"understanding-impact.duringServerSideRenderingThe\":[\"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"Flash of untranslated content (FOUC):\"],\"understanding-impact.flashOfUntranslatedContentFoucDesc\":[\"users may briefly see translation keys or a fallback language before the chunk arrives.\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\"],\"understanding-impact.theJsonMustBeParsed\":[\"The JSON must be parsed on every page load — blocking the main thread.\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"The trade-offs of dynamic loading\"],\"understanding-impact.thisTestAppProvidesA\":[\"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\"],\"understanding-impact.understandingTheImpact\":[\"Understanding the Impact\"],\"understanding-impact.waterfallRequests\":[\"Waterfall requests:\"],\"understanding-impact.waterfallRequestsDesc\":[\"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"What this benchmark measures\"],\"understanding-impact.whyASingleLargeJson\":[\"Why a single large JSON can hurt performance\"],\"what-we-measure.bundleSizeImpact\":[\"Bundle size impact\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\"],\"what-we-measure.howFastTheAppCan\":[\"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\"],\"what-we-measure.howMuchExtraTimeThe\":[\"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\"],\"what-we-measure.hydrationCost\":[\"Hydration cost\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"Lazy loading effectiveness\"],\"what-we-measure.localeSwitchSpeed\":[\"Locale switch speed\"],\"what-we-measure.renderingOverhead\":[\"Rendering overhead\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\"],\"what-we-measure.whatWeMeasure\":[\"What We Measure\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\"],\"why-it-matters.bundleSize\":[\"Bundle Size\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\"],\"why-it-matters.dynamicLoading\":[\"Dynamic Loading\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\"],\"why-it-matters.renderingHydration\":[\"Rendering & Hydration\"],\"why-it-matters.theBundleIsTheData\":[\"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\"],\"why-it-matters.whyTheseMetricsMatter\":[\"Why These Metrics Matter\"]}"),
	fr: JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"Choisir une bibliothèque i18n est une décision architecturale ayant des conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en termes de performances : quel poids la bibliothèque ajoute-t-elle au bundle ? Comment cela affecte-t-il le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement différé aide-t-il réellement ou déplace-t-il simplement le coût ? Ce benchmark répond à ces questions avec des données réelles.\"],\"about-grid.methodology\":[\"Méthodologie\"],\"about-grid.theSame10PageApp\":[\"La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les métriques de chargement et utilisons React Profiler pour capturer les temps de rendu lors des changements de langue. Tous les tests sont effectués en CI sur un matériel identique pour garantir des résultats reproductibles.\"],\"about-grid.whyThisExists\":[\"Pourquoi cela existe\"],\"about-header.aboutThisBenchmark\":[\"À propos de ce benchmark\"],\"about-header.thisIsAnOpenSource\":[\"Il s'agit d'une application de test open source, pas d'un produit ou d'une entreprise. Son seul but est de fournir une application React multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques.\"],\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"Aperçus, tutoriels et analyses de la communauté i18n.\"],\"blog-list.aStepByStepGuide\":[\"Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.\"],\"blog-list.aTransparentLookAtOur\":[\"Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.\"],\"blog-list.anOverviewOfTheCurrent\":[\"Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"Méthodologie du benchmark : comment nous testons\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"Comparaison des bibliothèques i18n en 2026 : une analyse approfondie\"],\"blog-list.february12026\":[\"1er février 2026\"],\"blog-list.february152026\":[\"15 février 2026\"],\"blog-list.february282026\":[\"28 février 2026\"],\"blog-list.howToReduceYourI18n\":[\"Comment réduire votre bundle i18n de 60 %\"],\"blog-list.january202026\":[\"20 janvier 2026\"],\"blog-list.march82026\":[\"8 mars 2026\"],\"blog-list.migratingFromReactI18nextTo\":[\"Migration de react-i18next vers Lingui\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"Stratégies pratiques pour optimiser les bundles de traduction, notamment le chargement différé, le fractionnement du code et les optimisations au moment de la compilation.\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.\"],\"blog-list.readMore\":[\"Lire la suite →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"Server Components et i18n : Qu'est-ce qui change ?\"],\"blog-list.theStateOfInternationalizationIn\":[\"L'état de l'internationalisation dans React\"],\"blog-list.weTested12DifferentInternationalization\":[\"Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et le DX. Voici les résultats surprenants.\"],\"careers-benefits.competitivePay\":[\"Salaire compétitif\"],\"careers-benefits.openSourceTime\":[\"Temps pour l'Open Source\"],\"careers-benefits.topOfMarketCompensation\":[\"Rémunération attractive\"],\"careers-benefits.twentyPercentTime\":[\"20 % de temps pour l'OSS\"],\"careers-header.joinOurMissionToImprove\":[\"Rejoignez notre mission pour améliorer l'écosystème de l'internationalisation. Nous sommes une équipe privilégiant le télétravail qui valorise l'impact, la transparence et l'apprentissage continu.\"],\"careers-header.title\":[\"Carrières\"],\"contact-form.bugReport\":[\"Rapport de bug\"],\"contact-form.contribution\":[\"Contribution\"],\"contact-form.describeYourQuestionOrIdea\":[\"Décrivez votre question ou idée...\"],\"contact-form.email\":[\"E-mail\"],\"contact-form.message\":[\"Message\"],\"contact-form.methodologyQuestion\":[\"Question sur la méthodologie\"],\"contact-form.newBenchmarkIdea\":[\"Nouvelle idée de benchmark\"],\"contact-form.other\":[\"Autre\"],\"contact-form.sendMessage\":[\"Envoyer le message\"],\"contact-form.topic\":[\"Sujet\"],\"contact-form.yourName\":[\"Votre nom\"],\"contact-header.getInTouch\":[\"Contactez-nous\"],\"contact-header.haveIdeasFoundABug\":[\"Vous avez des idées, trouvé un bug ou voulez proposer un benchmark ? Contactez-nous à\"],\"faq-header.subtitle\":[\"Tout ce que vous devez savoir sur i18n Benchmark.\"],\"faq-header.title\":[\"Foire aux questions\"],\"faq-list.canISubmitMyOwn\":[\"Puis-je soumettre mes propres benchmarks ?\"],\"faq-list.doYouOfferConsultingServices\":[\"Proposez-vous des services de conseil ?\"],\"faq-list.howAreBenchmarksConducted\":[\"Comment les benchmarks sont-ils menés ?\"],\"faq-list.howCanIContribute\":[\"Comment puis-je contribuer ?\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"À quelle fréquence les benchmarks sont-ils mis à jour ?\"],\"faq-list.isTheDataReliable\":[\"Les données sont-elles fiables ?\"],\"faq-list.thereAreManyWaysTo\":[\"Il existe de nombreuses façons de contribuer : proposer des benchmarks, améliorer la documentation, signaler des bugs, suggérer de nouvelles métriques ou sponsoriser le projet. Consultez notre dépôt GitHub pour plus de détails.\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"Nous suivons une méthodologie statistique rigoureuse incluant des phases de préchauffage, la détection des valeurs aberrantes et des intervalles de confiance. Toutes les données brutes sont publiées avec l'analyse pour une transparence totale.\"],\"faq-list.weReRunAllBenchmarks\":[\"Nous réexécutons tous les benchmarks chaque semaine pour les dernières versions stables de chaque bibliothèque. Les versions majeures déclenchent un cycle de retraitement immédiat.\"],\"faq-list.weRunStandardizedTestsIn\":[\"Nous effectuons des tests standardisés dans des environnements isolés avec un matériel identique. Chaque benchmark est répété plusieurs fois pour garantir sa pertinence statistique. Toutes les configurations de test sont publiques sur notre dépôt GitHub.\"],\"faq-list.weSupportReactI18nextReact\":[\"Nous supportons react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react et Tolgee.\"],\"faq-list.whatIsI18nBenchmark\":[\"Qu'est-ce que i18n Benchmark ?\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"i18n Benchmark est une suite de tests open source qui mesure et compare les performances, la taille des bundles et l'expérience développeur des bibliothèques d'internationalisation pour les applications JavaScript et React.\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"Quelles bibliothèques sont actuellement supportées ?\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"Oui ! Nous accueillons avec plaisir les soumissions de benchmarks de la communauté. Veuillez forker le dépôt, ajouter votre benchmark en suivant notre guide de contribution, et soumettre une pull request. Notre équipe examinera et fusionnera les soumissions qualifiées.\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"Oui, notre offre Entreprise comprend des heures de conseil pour les équipes évaluant des solutions i18n. Nous pouvons fournir des recommandations personnalisées basées sur votre cas d'utilisation, votre échelle et vos contraintes.\"],\"footer.anOpenSourceTestApplication\":[\"Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.\"],\"footer.builtWith\":[\"i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.\"],\"footer.contact\":[\"Contact\"],\"footer.contributing\":[\"Contribuer\"],\"footer.github\":[\"GitHub\"],\"footer.i18nBenchmark\":[\"i18n Benchmark\"],\"footer.methodology\":[\"Méthodologie\"],\"footer.resources\":[\"Ressources\"],\"header.blog\":[\"Blog\"],\"header.careers\":[\"Carrières\"],\"header.contact\":[\"Contact\"],\"header.faq\":[\"FAQ\"],\"header.goToGithub\":[\"Aller sur GitHub\"],\"header.home\":[\"Accueil\"],\"header.i18nBench\":[\"i18n Bench\"],\"header.methodology\":[\"Méthodologie\"],\"header.mockPages\":[\"Pages de test\"],\"header.pricing\":[\"Tarifs\"],\"header.products\":[\"Produits\"],\"header.settings\":[\"Paramètres\"],\"header.team\":[\"Équipe\"],\"hero.aTestApplicationDesignedTo\":[\"Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.\"],\"hero.title\":[\"i18n Benchmark\"],\"hero.viewResults\":[\"Voir les résultats\"],\"mockBanner\":[\"⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.\"],\"open-positions.applyNow\":[\"Postuler maintenant\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement à l'aide de React, TypeScript et Vite.\"],\"open-positions.engineering\":[\"Ingénierie\"],\"open-positions.fullTime\":[\"Temps plein\"],\"open-positions.openPositions\":[\"Postes ouverts\"],\"open-positions.remote\":[\"Télétravail\"],\"open-positions.seniorFrontendEngineer\":[\"Ingénieur Frontend Senior\"],\"pricing-header.chooseThePlanThatFits\":[\"Choisissez l'offre qui convient à votre équipe. Pas de frais cachés.\"],\"pricing-header.simpleTransparentPricing\":[\"Une tarification simple et transparente\"],\"pricing-tiers.allLibraries\":[\"Toutes les bibliothèques\"],\"pricing-tiers.auditLogs\":[\"Journaux d'audit\"],\"pricing-tiers.benchmarkRunPerDay\":[[\"runs\"],\" benchmarks/jour\"],\"pricing-tiers.ciIntegration\":[\"Intégration CI\"],\"pricing-tiers.communitySupport\":[\"Support communautaire\"],\"pricing-tiers.contactSales\":[\"Contacter le service commercial\"],\"pricing-tiers.customPrice\":[\"Sur mesure\"],\"pricing-tiers.customSlas\":[\"SLA personnalisés\"],\"pricing-tiers.dedicatedAccountManager\":[\"Gestionnaire de compte dédié\"],\"pricing-tiers.enterprise\":[\"Entreprise\"],\"pricing-tiers.everythingInPro\":[\"Tout ce qui est inclus dans l'offre Pro\"],\"pricing-tiers.forever\":[\"à vie\"],\"pricing-tiers.getStarted\":[\"Démarrer\"],\"pricing-tiers.historicalData\":[\"Données historiques\"],\"pricing-tiers.librariesNumber\":[[\"libs\"],\" bibliothèques\"],\"pricing-tiers.month\":[\"/mois\"],\"pricing-tiers.onPremiseOption\":[\"Option de déploiement sur site\"],\"pricing-tiers.price0\":[\"0 €\"],\"pricing-tiers.price29\":[\"29 €\"],\"pricing-tiers.prioritySupport\":[\"Support prioritaire\"],\"pricing-tiers.privateResults\":[\"Résultats privés\"],\"pricing-tiers.pro\":[\"Pro\"],\"pricing-tiers.publicResults\":[\"Résultats publics\"],\"pricing-tiers.ssoSaml\":[\"SSO & SAML\"],\"pricing-tiers.starter\":[\"Starter\"],\"pricing-tiers.trainingSessions\":[\"Sessions de formation\"],\"pricing-tiers.unlimitedRuns\":[\"Tests illimités\"],\"products-header.subtitle\":[\"Outils et services pour optimiser votre flux de travail d'internationalisation.\"],\"products-header.title\":[\"Produits\"],\"products.benchmarkCli\":[\"Benchmark CLI\"],\"products.benchmarkCliDesc\":[\"Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.\"],\"products.benchmarkCloud\":[\"Benchmark Cloud\"],\"products.benchmarkCloudDesc\":[\"Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.\"],\"products.benchmarkEnterprise\":[\"Benchmark Enterprise\"],\"products.benchmarkEnterpriseDesc\":[\"Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.\"],\"products.bundleOptimizer\":[\"Optimiseur de bundle\"],\"products.bundleOptimizerDesc\":[\"Analyse et optimise votre bundle i18n pour la production avec le tree-shaking et le fractionnement du code.\"],\"products.contactUs\":[\"Nous contacter\"],\"products.free\":[\"Gratuit\"],\"products.learnMore\":[\"En savoir plus\"],\"products.migrationAssistant\":[\"Assistant de migration\"],\"products.migrationAssistantDesc\":[\"Outil alimenté par l'IA qui aide à migrer votre codebase entre les bibliothèques i18n sans interruption de service.\"],\"products.price.benchmarkCloud\":[\"29 €/mois\"],\"products.price.bundleOptimizer\":[\"49 €/mois\"],\"products.price.migrationAssistant\":[\"99 € une seule fois\"],\"products.price.translationQa\":[\"19 €/mois\"],\"products.translationQa\":[\"Translation QA\"],\"products.translationQaDesc\":[\"Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.\"],\"results-table.bundleSize\":[\"Taille du bundle\"],\"results-table.lazyLoading\":[\"Chargement différé\"],\"results-table.library\":[\"Bibliothèque\"],\"results-table.lookupTime\":[\"Temps de recherche\"],\"results-table.sampleResults\":[\"Exemples de résultats\"],\"settings-header.subtitle\":[\"Gérez vos paramètres de compte et vos préférences.\"],\"settings-header.title\":[\"Paramètres\"],\"settings.apiAccess.apiKey\":[\"Clé API\"],\"settings.apiAccess.copy\":[\"Copier\"],\"settings.apiAccess.title\":[\"Accès API\"],\"settings.apiAccess.useKeyDescription\":[\"Utilisez cette clé pour accéder par programmation à l'API de benchmarking.\"],\"settings.footer.cancel\":[\"Annuler\"],\"settings.footer.saveChanges\":[\"Enregistrer les modifications\"],\"settings.preferences.arabic\":[\"Arabe\"],\"settings.preferences.chinese\":[\"Chinois\"],\"settings.preferences.darkMode\":[\"Mode sombre\"],\"settings.preferences.defaultLanguage\":[\"Langue par défaut\"],\"settings.preferences.emailNotifications\":[\"Notifications par e-mail\"],\"settings.preferences.english\":[\"Anglais\"],\"settings.preferences.french\":[\"Français\"],\"settings.preferences.german\":[\"Allemand\"],\"settings.preferences.japanese\":[\"Japonais\"],\"settings.preferences.receiveWeeklyReports\":[\"Recevoir des rapports hebdomadaires de benchmark\"],\"settings.preferences.spanish\":[\"Espagnol\"],\"settings.preferences.title\":[\"Préférences\"],\"settings.preferences.useDarkScheme\":[\"Utiliser le thème sombre\"],\"settings.profile.displayName\":[\"Nom d'affichage\"],\"settings.profile.email\":[\"E-mail\"],\"settings.profile.title\":[\"Profil\"],\"team-header.subtitle\":[\"Rencontrez les visages derrière i18n Benchmark. Une équipe diversifiée unie par une passion commune pour les outils de développement exceptionnels.\"],\"team-header.title\":[\"Notre équipe\"],\"team.aishaBio\":[\"Passionnée par l'expérience développeur et l'éducation. Intervenante à React Conf, JSConf et i18nNext.\"],\"team.aishaPatel\":[\"Aisha Patel\"],\"team.communityManager\":[\"Responsable de communauté\"],\"team.dataAnalyst\":[\"Analyste de données\"],\"team.developerAdvocate\":[\"Developer Advocate\"],\"team.elenaBio\":[\"Gère les contributions de la communauté, les partenariats et les événements. Background en gouvernance open source.\"],\"team.elenaKowalski\":[\"Elena Kowalski\"],\"team.founderLeadEngineer\":[\"Fondatrice & Ingénieure principale\"],\"team.fullStackDeveloper\":[\"Développeur Full Stack\"],\"team.marcusBio\":[\"Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.\"],\"team.marcusWeber\":[\"Marcus Weber\"],\"team.performanceEngineer\":[\"Ingénieur performance\"],\"team.sarahBio\":[\"Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.\"],\"team.sarahChen\":[\"Sarah Chen\"],\"team.tomasBio\":[\"Maintient notre infrastructure de benchmarking et nos pipelines CI/CD. Contributeur open source pour Lingui.\"],\"team.tomasRodriguez\":[\"Tomas Rodriguez\"],\"team.yukiBio\":[\"Garantit la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.\"],\"team.yukiTanaka\":[\"Yuki Tanaka\"],\"theme-toggle.themeAuto\":[\"Thème : Auto\"],\"theme-toggle.themeDark\":[\"Thème : Sombre\"],\"theme-toggle.themeLight\":[\"Thème : Clair\"],\"theme-toggle.themeModeAutoSystemClick\":[\"Mode thématique : auto (système). Cliquez pour passer en mode clair.\"],\"theme-toggle.themeModeDarkClick\":[\"Mode thématique : sombre. Cliquez pour passer en mode auto (système).\"],\"theme-toggle.themeModeLightClick\":[\"Mode thématique : clair. Cliquez pour passer en mode sombre.\"],\"understanding-impact.cacheInvalidation\":[\"Invalidation du cache :\"],\"understanding-impact.cacheInvalidationDesc\":[\"La mise à jour des traductions nécessite des stratégies d'invalidation du cache pour garantir que les utilisateurs reçoivent le nouveau contenu sans retélécharger les morceaux non modifiés.\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.\"],\"understanding-impact.duringServerSideRenderingThe\":[\"Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"Flash de contenu non traduit (FOUC) :\"],\"understanding-impact.flashOfUntranslatedContentFoucDesc\":[\"Les utilisateurs peuvent voir brièvement les clés de traduction ou la langue par défaut avant que le morceau ne soit chargé.\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :\"],\"understanding-impact.theJsonMustBeParsed\":[\"Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"Les compromis du chargement dynamique\"],\"understanding-impact.thisTestAppProvidesA\":[\"Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.\"],\"understanding-impact.understandingTheImpact\":[\"Comprendre l'impact\"],\"understanding-impact.waterfallRequests\":[\"Requêtes en cascade :\"],\"understanding-impact.waterfallRequestsDesc\":[\"Comme l'application doit d'abord se charger et déterminer la langue avant de récupérer le chunk correspondant, vous ajoutez des allers-retours réseau.\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"Ce que ce benchmark mesure\"],\"understanding-impact.whyASingleLargeJson\":[\"Pourquoi un seul JSON volumineux peut nuire aux performances\"],\"what-we-measure.bundleSizeImpact\":[\"Impact sur la taille du bundle\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"Pendant le SSR, les données de traduction sont sérialisées dans le HTML. Les dictionnaire volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment en que la page devient interactive.\"],\"what-we-measure.howFastTheAppCan\":[\"À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération des nouvelles traductions, le rendu des composants et la mise à jour du DOM.\"],\"what-we-measure.howMuchExtraTimeThe\":[\"Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arbre des composants.\"],\"what-we-measure.hydrationCost\":[\"Coût d'hydratation\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"Efficacité du chargement différé\"],\"what-we-measure.localeSwitchSpeed\":[\"Vitesse de changement de langue\"],\"what-we-measure.renderingOverhead\":[\"Surcharge de rendu\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.\"],\"what-we-measure.whatWeMeasure\":[\"Ce que nous mesurons\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"Si le fractionnement des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).\"],\"why-it-matters.bundleSize\":[\"Taille du bundle\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arbre. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).\"],\"why-it-matters.dynamicLoading\":[\"Chargement dynamique\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"Le chargement de toutes les traductions à l'avance surcharge le payload initial. Le chargement dynamique (lazy) divise les traductions par route ou par namespace, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel.\"],\"why-it-matters.renderingHydration\":[\"Rendu & Hydratation\"],\"why-it-matters.theBundleIsTheData\":[\"Le bundle représente les données envoyées à chaque utilisateur dans le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur des connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.\"],\"why-it-matters.whyTheseMetricsMatter\":[\"Pourquoi ces mesures sont importantes\"]}"),
	es: JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo traslada el coste? Este benchmark responde a estas preguntas con datos reales.\"],\"about-grid.methodology\":[\"Metodología\"],\"about-grid.theSame10PageApp\":[\"La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en un hardware consistente para garantizar resultados reproducibles.\"],\"about-grid.whyThisExists\":[\"Por qué existe\"],\"about-header.aboutThisBenchmark\":[\"Sobre este benchmark\"],\"about-header.thisIsAnOpenSource\":[\"Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React multipágina realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas.\"],\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"Información, tutoriales y análisis de la comunidad i18n.\"],\"blog-list.aStepByStepGuide\":[\"Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.\"],\"blog-list.aTransparentLookAtOur\":[\"Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.\"],\"blog-list.anOverviewOfTheCurrent\":[\"Una visión general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"Metodología del benchmark: cómo probamos\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"Comparación de bibliotecas i18n en 2026: un análisis profundo\"],\"blog-list.february12026\":[\"1 de febrero de 2026\"],\"blog-list.february152026\":[\"15 de febrero de 2026\"],\"blog-list.february282026\":[\"28 de febrero de 2026\"],\"blog-list.howToReduceYourI18n\":[\"Cómo reducir tu bundle i18n en un 60%\"],\"blog-list.january202026\":[\"20 de enero de 2026\"],\"blog-list.march82026\":[\"8 de marzo de 2026\"],\"blog-list.migratingFromReactI18nextTo\":[\"Migración de react-i18next a Lingui\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\"],\"blog-list.readMore\":[\"Leer más →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"Server Components e i18n: ¿qué cambia?\"],\"blog-list.theStateOfInternationalizationIn\":[\"El estado de la internacionalización en React\"],\"blog-list.weTested12DifferentInternationalization\":[\"Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los resultados sorprendentes.\"],\"careers-benefits.competitivePay\":[\"Pago competitivo\"],\"careers-benefits.openSourceTime\":[\"Tiempo para open source\"],\"careers-benefits.topOfMarketCompensation\":[\"Compensación competitiva\"],\"careers-benefits.twentyPercentTime\":[\"20% tiempo para OSS\"],\"careers-header.joinOurMissionToImprove\":[\"Únete a nuestra misión de mejorar el ecosistema de internacionalización. Somos un equipo remoto que valora el impacto, la transparencia y el aprendizaje continuo.\"],\"careers-header.title\":[\"Carreras\"],\"contact-form.bugReport\":[\"Informe de bug\"],\"contact-form.contribution\":[\"Contribución\"],\"contact-form.describeYourQuestionOrIdea\":[\"Describe tu pregunta o idea...\"],\"contact-form.email\":[\"Correo electrónico\"],\"contact-form.message\":[\"Mensaje\"],\"contact-form.methodologyQuestion\":[\"Pregunta sobre metodología\"],\"contact-form.newBenchmarkIdea\":[\"Nueva idea de benchmark\"],\"contact-form.other\":[\"Otro\"],\"contact-form.sendMessage\":[\"Enviar mensaje\"],\"contact-form.topic\":[\"Tema\"],\"contact-form.yourName\":[\"Tu nombre\"],\"contact-header.getInTouch\":[\"Ponte en contacto\"],\"contact-header.haveIdeasFoundABug\":[\"¿Tienes ideas, has encontrado un bug o quieres contribuir con un benchmark? Contáctanos en\"],\"faq-header.subtitle\":[\"Todo lo que necesitas saber sobre i18n Benchmark.\"],\"faq-header.title\":[\"Preguntas frecuentes\"],\"faq-list.canISubmitMyOwn\":[\"¿Puedo enviar mis propios benchmarks?\"],\"faq-list.doYouOfferConsultingServices\":[\"¿Ofrecen servicios de consultoría?\"],\"faq-list.howAreBenchmarksConducted\":[\"¿Cómo se realizan los benchmarks?\"],\"faq-list.howCanIContribute\":[\"¿Cómo puedo contribuir?\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"¿Con qué frecuencia se actualizan los benchmarks?\"],\"faq-list.isTheDataReliable\":[\"¿Son fiables los datos?\"],\"faq-list.thereAreManyWaysTo\":[\"Existen muchas formas de implementar la internacionalización, y cada una tiene sus propias compensaciones en cuanto a rendimiento y experiencia del desarrollador.\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza.\"],\"faq-list.weReRunAllBenchmarks\":[\"Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables.\"],\"faq-list.weRunStandardizedTestsIn\":[\"Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente.\"],\"faq-list.weSupportReactI18nextReact\":[\"Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.\"],\"faq-list.whatIsI18nBenchmark\":[\"¿Qué es i18n Benchmark?\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización.\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"¿Qué bibliotecas están soportadas actualmente?\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"¡Sí! Damos la bienvenida a las contribuciones de la comunidad. Por favor, haz un fork del repositorio y envía un pull request.\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones de i18n.\"],\"footer.anOpenSourceTestApplication\":[\"Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.\"],\"footer.builtWith\":[\"i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.\"],\"footer.contact\":[\"Contacto\"],\"footer.contributing\":[\"Contribuir\"],\"footer.github\":[\"GitHub\"],\"footer.i18nBenchmark\":[\"i18n Benchmark\"],\"footer.methodology\":[\"Metodología\"],\"footer.resources\":[\"Recursos\"],\"header.blog\":[\"Blog\"],\"header.careers\":[\"Carreras\"],\"header.contact\":[\"Contacto\"],\"header.faq\":[\"FAQ\"],\"header.goToGithub\":[\"Ir a GitHub\"],\"header.home\":[\"Inicio\"],\"header.i18nBench\":[\"i18n Bench\"],\"header.methodology\":[\"Metodología\"],\"header.mockPages\":[\"Páginas de prueba\"],\"header.pricing\":[\"Precios\"],\"header.products\":[\"Productos\"],\"header.settings\":[\"Ajustes\"],\"header.team\":[\"Equipo\"],\"hero.aTestApplicationDesignedTo\":[\"Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.\"],\"hero.title\":[\"i18n Benchmark\"],\"hero.viewResults\":[\"Ver resultados\"],\"mockBanner\":[\"⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.\"],\"open-positions.applyNow\":[\"Aplicar ahora\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"Construir y mantener nuestro panel de benchmarking y herramientas de desarrollo usando React, TypeScript y Vite.\"],\"open-positions.engineering\":[\"Ingeniería\"],\"open-positions.fullTime\":[\"Tiempo completo\"],\"open-positions.openPositions\":[\"Posiciones abiertas\"],\"open-positions.remote\":[\"Remoto\"],\"open-positions.seniorFrontendEngineer\":[\"Ingeniero Frontend Senior\"],\"pricing-header.chooseThePlanThatFits\":[\"Elige el plan que se adapte a tu equipo. Sin cargos ocultos.\"],\"pricing-header.simpleTransparentPricing\":[\"Precios simples y transparentes\"],\"pricing-tiers.allLibraries\":[\"Todas las bibliotecas\"],\"pricing-tiers.auditLogs\":[\"Registros de auditoría\"],\"pricing-tiers.benchmarkRunPerDay\":[[\"runs\"],\" ejecuciones de benchmark/día\"],\"pricing-tiers.ciIntegration\":[\"Integración CI\"],\"pricing-tiers.communitySupport\":[\"Soporte comunitario\"],\"pricing-tiers.contactSales\":[\"Contactar con ventas\"],\"pricing-tiers.customPrice\":[\"Personalizado\"],\"pricing-tiers.customSlas\":[\"SLAs personalizados\"],\"pricing-tiers.dedicatedAccountManager\":[\"Gestor de cuenta dedicado\"],\"pricing-tiers.enterprise\":[\"Enterprise\"],\"pricing-tiers.everythingInPro\":[\"Todo lo de Pro\"],\"pricing-tiers.forever\":[\"para siempre\"],\"pricing-tiers.getStarted\":[\"Comenzar\"],\"pricing-tiers.historicalData\":[\"Datos históricos\"],\"pricing-tiers.librariesNumber\":[[\"libs\"],\" bibliotecas\"],\"pricing-tiers.month\":[\"/mes\"],\"pricing-tiers.onPremiseOption\":[\"Opción on-premise\"],\"pricing-tiers.price0\":[\"$0\"],\"pricing-tiers.price29\":[\"$29\"],\"pricing-tiers.prioritySupport\":[\"Soporte prioritario\"],\"pricing-tiers.privateResults\":[\"Resultados privados\"],\"pricing-tiers.pro\":[\"Pro\"],\"pricing-tiers.publicResults\":[\"Resultados públicos\"],\"pricing-tiers.ssoSaml\":[\"SSO y SAML\"],\"pricing-tiers.starter\":[\"Starter\"],\"pricing-tiers.trainingSessions\":[\"Sesiones de formación\"],\"pricing-tiers.unlimitedRuns\":[\"Ejecuciones ilimitadas\"],\"products-header.subtitle\":[\"Herramientas de nivel empresarial para optimizar, auditar y escalar tu estrategia de internacionalización.\"],\"products-header.title\":[\"Productos\"],\"products.benchmarkCli\":[\"Benchmark CLI\"],\"products.benchmarkCliDesc\":[\"Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.\"],\"products.benchmarkCloud\":[\"Benchmark Cloud\"],\"products.benchmarkCloudDesc\":[\"Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.\"],\"products.benchmarkEnterprise\":[\"Benchmark Enterprise\"],\"products.benchmarkEnterpriseDesc\":[\"Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.\"],\"products.bundleOptimizer\":[\"Optimizador de bundle\"],\"products.bundleOptimizerDesc\":[\"Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.\"],\"products.contactUs\":[\"Contáctanos\"],\"products.free\":[\"Gratis\"],\"products.learnMore\":[\"Saber más\"],\"products.migrationAssistant\":[\"Asistente de migración\"],\"products.migrationAssistantDesc\":[\"Herramienta impulsada por IA que ayuda a migrar tu código entre bibliotecas i18n sin tiempo de inactividad.\"],\"products.price.benchmarkCloud\":[\"$29/mes\"],\"products.price.bundleOptimizer\":[\"$49/mes\"],\"products.price.migrationAssistant\":[\"$99 pago único\"],\"products.price.translationQa\":[\"$19/mes\"],\"products.translationQa\":[\"QA de traducción\"],\"products.translationQaDesc\":[\"Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.\"],\"results-table.bundleSize\":[\"Tamaño del bundle\"],\"results-table.lazyLoading\":[\"Carga diferida\"],\"results-table.library\":[\"Biblioteca\"],\"results-table.lookupTime\":[\"Tiempo de búsqueda\"],\"results-table.sampleResults\":[\"Resultados de muestra\"],\"settings-header.subtitle\":[\"Gestiona las preferencias de tu cuenta y la configuración.\"],\"settings-header.title\":[\"Ajustes\"],\"settings.apiAccess.apiKey\":[\"Clave API\"],\"settings.apiAccess.copy\":[\"Copiar\"],\"settings.apiAccess.title\":[\"Acceso API\"],\"settings.apiAccess.useKeyDescription\":[\"Usa esta clave para acceder a la API de benchmarking de forma programática.\"],\"settings.footer.cancel\":[\"Cancelar\"],\"settings.footer.saveChanges\":[\"Guardar cambios\"],\"settings.preferences.arabic\":[\"Árabe\"],\"settings.preferences.chinese\":[\"Chino\"],\"settings.preferences.darkMode\":[\"Modo oscuro\"],\"settings.preferences.defaultLanguage\":[\"Idioma predeterminado\"],\"settings.preferences.emailNotifications\":[\"Notificaciones por correo\"],\"settings.preferences.english\":[\"Inglés\"],\"settings.preferences.french\":[\"Francés\"],\"settings.preferences.german\":[\"Alemán\"],\"settings.preferences.japanese\":[\"Japonés\"],\"settings.preferences.receiveWeeklyReports\":[\"Recibir informes semanales de benchmark\"],\"settings.preferences.spanish\":[\"Español\"],\"settings.preferences.title\":[\"Preferencias\"],\"settings.preferences.useDarkScheme\":[\"Usar esquema de colores oscuros\"],\"settings.profile.displayName\":[\"Nombre visible\"],\"settings.profile.email\":[\"Correo electrónico\"],\"settings.profile.title\":[\"Perfil\"],\"team-header.subtitle\":[\"Conoce a las personas detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las herramientas de desarrollo.\"],\"team-header.title\":[\"Nuestro equipo\"],\"team.aishaBio\":[\"Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.\"],\"team.aishaPatel\":[\"Aisha Patel\"],\"team.communityManager\":[\"Community Manager\"],\"team.dataAnalyst\":[\"Analista de datos\"],\"team.developerAdvocate\":[\"Developer Advocate\"],\"team.elenaBio\":[\"Gestiona contribuciones de la comunidad, asociaciones y eventos. Experiencia en gobernanza de código abierto.\"],\"team.elenaKowalski\":[\"Elena Kowalski\"],\"team.founderLeadEngineer\":[\"Fundadora e Ingeniera Principal\"],\"team.fullStackDeveloper\":[\"Desarrollador Full-Stack\"],\"team.marcusBio\":[\"Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.\"],\"team.marcusWeber\":[\"Marcus Weber\"],\"team.performanceEngineer\":[\"Ingeniero de rendimiento\"],\"team.sarahBio\":[\"Ex ingeniera de Google con 10 años de experiencia construyendo sistemas de internacionalización a escala.\"],\"team.sarahChen\":[\"Sarah Chen\"],\"team.tomasBio\":[\"Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Contribuidor de código abierto a Lingui.\"],\"team.tomasRodriguez\":[\"Tomas Rodriguez\"],\"team.yukiBio\":[\"Garantiza el rigor estadístico en todos los resultados del benchmark. PhD en Estadística Aplicada del MIT.\"],\"team.yukiTanaka\":[\"Yuki Tanaka\"],\"theme-toggle.themeAuto\":[\"Tema: Auto\"],\"theme-toggle.themeDark\":[\"Tema: Oscuro\"],\"theme-toggle.themeLight\":[\"Tema: Claro\"],\"theme-toggle.themeModeAutoSystemClick\":[\"Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.\"],\"theme-toggle.themeModeDarkClick\":[\"Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).\"],\"theme-toggle.themeModeLightClick\":[\"Modo de tema: claro. Haz clic para cambiar al modo oscuro.\"],\"understanding-impact.cacheInvalidation\":[\"Invalidación de la caché:\"],\"understanding-impact.cacheInvalidationDesc\":[\"la actualización de las traducciones requiere estrategias de invalidación de caché para garantizar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos sin cambios.\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.\"],\"understanding-impact.duringServerSideRenderingThe\":[\"Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"Parpadeo de contenido no traducido (FOUC):\"],\"understanding-impact.flashOfUntranslatedContentFoucDesc\":[\"los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:\"],\"understanding-impact.theJsonMustBeParsed\":[\"El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"Las compensaciones de la carga dinámica\"],\"understanding-impact.thisTestAppProvidesA\":[\"Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\"],\"understanding-impact.understandingTheImpact\":[\"Entendiendo el impacto\"],\"understanding-impact.waterfallRequests\":[\"Solicitudes en cascada:\"],\"understanding-impact.waterfallRequestsDesc\":[\"la aplicación debe cargar primero, determinar el idioma y luego obtener el fragmento correcto, lo que añade viajes de ida y vuelta a la red.\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"Qué mide este benchmark\"],\"understanding-impact.whyASingleLargeJson\":[\"Por qué un solo JSON grande puede perjudicar el rendimiento\"],\"what-we-measure.bundleSizeImpact\":[\"Impacto en el tamaño del bundle\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.\"],\"what-we-measure.howFastTheAppCan\":[\"Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.\"],\"what-we-measure.howMuchExtraTimeThe\":[\"Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar renderizados innecesarios en todo el árbol de componentes.\"],\"what-we-measure.hydrationCost\":[\"Coste de hidratación\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"Eficacia de la carga diferida\"],\"what-we-measure.localeSwitchSpeed\":[\"Velocidad de cambio de idioma\"],\"what-we-measure.renderingOverhead\":[\"Sobrecarga de renderizado\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluye la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.\"],\"what-we-measure.whatWeMeasure\":[\"Qué medimos\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).\"],\"why-it-matters.bundleSize\":[\"Tamaño del bundle\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).\"],\"why-it-matters.dynamicLoading\":[\"Carga dinámica\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.\"],\"why-it-matters.renderingHydration\":[\"Renderizado e hidratación\"],\"why-it-matters.theBundleIsTheData\":[\"El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.\"],\"why-it-matters.whyTheseMetricsMatter\":[\"Por qué son importantes estas métricas\"]}"),
	de: JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt sie sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading wirklich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit echten Daten.\"],\"about-grid.methodology\":[\"Methodik\"],\"about-grid.theSame10PageApp\":[\"Dieselbe 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Gebietsschemawechsel zu erfassen. Alle Tests werden in der CI auf konsistenter Hardware ausgeführt, um reproduzierbare Ergebnisse zu gewährleisten.\"],\"about-grid.whyThisExists\":[\"Warum dieses Projekt existiert\"],\"about-header.aboutThisBenchmark\":[\"Über diesen Benchmark\"],\"about-header.thisIsAnOpenSource\":[\"Dies ist eine Open-Source-Testanwendung — kein Produkt oder Unternehmen. Ihr einziger Zweck ist es, eine realistische, mehrseitige React-App bereitzustellen, in der verschiedene i18n-Bibliotheken unter identischen Bedingungen integriert und gemessen werden können.\"],\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"Einblicke, Tutorials und Analysen aus der i18n-Community.\"],\"blog-list.aStepByStepGuide\":[\"Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\"],\"blog-list.aTransparentLookAtOur\":[\"Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\"],\"blog-list.anOverviewOfTheCurrent\":[\"Eine Übersicht über das aktuelle i18n-Ökosystem in React, die Trends, aufkommende Muster und Community-Präferenzen abdeckt.\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"Benchmark-Methodik: Wie wir testen\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"i18n-Bibliotheken im Vergleich 2026: Ein tiefer Einblick\"],\"blog-list.february12026\":[\"1. Februar 2026\"],\"blog-list.february152026\":[\"15. Februar 2026\"],\"blog-list.february282026\":[\"28. Februar 2026\"],\"blog-list.howToReduceYourI18n\":[\"So reduzieren Sie Ihr i18n-Bundle um 60 %\"],\"blog-list.january202026\":[\"20. Januar 2026\"],\"blog-list.march82026\":[\"8. März 2026\"],\"blog-list.migratingFromReactI18nextTo\":[\"Migration von react-i18next zu Lingui\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Compile-Time-Optimierungen.\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\"],\"blog-list.readMore\":[\"Weiterlesen →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"Server Components und i18n: Was ändert sich?\"],\"blog-list.theStateOfInternationalizationIn\":[\"Der Stand der Internationalisierung in React\"],\"blog-list.weTested12DifferentInternationalization\":[\"Wir haben 12 verschiedene Internationalisierungs-Bibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.\"],\"careers-benefits.competitivePay\":[\"Wettbewerbsfähige Bezahlung\"],\"careers-benefits.openSourceTime\":[\"Open-Source-Zeit\"],\"careers-benefits.topOfMarketCompensation\":[\"Branchenführende Vergütung\"],\"careers-benefits.twentyPercentTime\":[\"20% Zeit für OSS\"],\"careers-header.joinOurMissionToImprove\":[\"Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wirkung, Transparenz und kontinuierliches Lernen schätzt.\"],\"careers-header.title\":[\"Karriere\"],\"contact-form.bugReport\":[\"Fehlerbericht\"],\"contact-form.contribution\":[\"Beitrag\"],\"contact-form.describeYourQuestionOrIdea\":[\"Beschreiben Sie Ihre Frage oder Idee...\"],\"contact-form.email\":[\"E-Mail\"],\"contact-form.message\":[\"Nachricht\"],\"contact-form.methodologyQuestion\":[\"Frage zur Methodik\"],\"contact-form.newBenchmarkIdea\":[\"Neue Benchmark-Idee\"],\"contact-form.other\":[\"Sonstiges\"],\"contact-form.sendMessage\":[\"Nachricht senden\"],\"contact-form.topic\":[\"Thema\"],\"contact-form.yourName\":[\"Ihr Name\"],\"contact-header.getInTouch\":[\"Kontakt aufnehmen\"],\"contact-header.haveIdeasFoundABug\":[\"Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter\"],\"faq-header.subtitle\":[\"Alles, was Sie über i18n Benchmark wissen müssen.\"],\"faq-header.title\":[\"Häufig gestellte Fragen\"],\"faq-list.canISubmitMyOwn\":[\"Kann ich meine eigenen Benchmarks einreichen?\"],\"faq-list.doYouOfferConsultingServices\":[\"Bieten Sie Beratungsdienstleistungen an?\"],\"faq-list.howAreBenchmarksConducted\":[\"Wie werden Benchmarks durchgeführt?\"],\"faq-list.howCanIContribute\":[\"Wie kann ich beitragen?\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"Wie oft werden Benchmarks aktualisiert?\"],\"faq-list.isTheDataReliable\":[\"Sind die Daten zuverlässig?\"],\"faq-list.thereAreManyWaysTo\":[\"Es gibt viele Möglichkeiten, zur Internationalisierung beizutragen, von der Meldung von Fehlern bis hin zur Einreichung neuer Benchmark-Szenarien.\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"Wir folgen einer strengen statistischen Methodik, die Aufwärmphasen, Ausreißererkennung und Konfidenzintervalle umfasst.\"],\"faq-list.weReRunAllBenchmarks\":[\"Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut durch.\"],\"faq-list.weRunStandardizedTestsIn\":[\"Wir führen standardisierte Tests in isolierten Umgebungen unter Verwendung konsistenter Hardware durch.\"],\"faq-list.weSupportReactI18nextReact\":[\"Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.\"],\"faq-list.whatIsI18nBenchmark\":[\"Was ist i18n Benchmark?\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, Bundle-Größe und Entwicklererfahrung von Internationalisierungs-Bibliotheken misst und vergleicht.\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"Welche Bibliotheken werden derzeit unterstützt?\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"Ja! Community-Benchmark-Einreichungen sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Beitragsleitfaden hinzu und reichen Sie einen Pull-Request ein.\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren.\"],\"footer.anOpenSourceTestApplication\":[\"Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.\"],\"footer.builtWith\":[\"i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.\"],\"footer.contact\":[\"Kontakt\"],\"footer.contributing\":[\"Beitragen\"],\"footer.github\":[\"GitHub\"],\"footer.i18nBenchmark\":[\"i18n Benchmark\"],\"footer.methodology\":[\"Methodik\"],\"footer.resources\":[\"Ressourcen\"],\"header.blog\":[\"Blog\"],\"header.careers\":[\"Karriere\"],\"header.contact\":[\"Kontakt\"],\"header.faq\":[\"FAQ\"],\"header.goToGithub\":[\"Zu GitHub\"],\"header.home\":[\"Startseite\"],\"header.i18nBench\":[\"i18n Bench\"],\"header.methodology\":[\"Methodik\"],\"header.mockPages\":[\"Testseiten\"],\"header.pricing\":[\"Preise\"],\"header.products\":[\"Produkte\"],\"header.settings\":[\"Einstellungen\"],\"header.team\":[\"Team\"],\"hero.aTestApplicationDesignedTo\":[\"Eine Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladeleistung und Rendering-Reaktivität.\"],\"hero.title\":[\"i18n Benchmark\"],\"hero.viewResults\":[\"Ergebnisse anzeigen\"],\"mockBanner\":[\"⚠️ Diese Seite enthält fiktive Daten nur zu Benchmarking-Zwecken. Sie steht in keiner Verbindung zu einem realen Unternehmen oder einer Dienstleistung.\"],\"open-positions.applyNow\":[\"Jetzt bewerben\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"Erstellen und Verwalten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.\"],\"open-positions.engineering\":[\"Engineering\"],\"open-positions.fullTime\":[\"Vollzeit\"],\"open-positions.openPositions\":[\"Offene Stellen\"],\"open-positions.remote\":[\"Remote\"],\"open-positions.seniorFrontendEngineer\":[\"Senior Frontend Engineer\"],\"pricing-header.chooseThePlanThatFits\":[\"Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.\"],\"pricing-header.simpleTransparentPricing\":[\"Einfache, transparente Preisgestaltung\"],\"pricing-tiers.allLibraries\":[\"Alle Bibliotheken\"],\"pricing-tiers.auditLogs\":[\"Audit-Protokolle\"],\"pricing-tiers.benchmarkRunPerDay\":[[\"runs\"],\" Benchmark-Durchläufe/Tag\"],\"pricing-tiers.ciIntegration\":[\"CI-Integration\"],\"pricing-tiers.communitySupport\":[\"Community-Support\"],\"pricing-tiers.contactSales\":[\"Vertrieb kontaktieren\"],\"pricing-tiers.customPrice\":[\"Individueller Preis\"],\"pricing-tiers.customSlas\":[\"Benutzerdefinierte SLAs\"],\"pricing-tiers.dedicatedAccountManager\":[\"Dedizierter Account-Manager\"],\"pricing-tiers.enterprise\":[\"Enterprise\"],\"pricing-tiers.everythingInPro\":[\"Alles in Pro\"],\"pricing-tiers.forever\":[\"für immer\"],\"pricing-tiers.getStarted\":[\"Loslegen\"],\"pricing-tiers.historicalData\":[\"Historische Daten\"],\"pricing-tiers.librariesNumber\":[[\"libs\"],\" Bibliotheken\"],\"pricing-tiers.month\":[\"/Monat\"],\"pricing-tiers.onPremiseOption\":[\"On-Premise-Option\"],\"pricing-tiers.price0\":[\"0 €\"],\"pricing-tiers.price29\":[\"29 €\"],\"pricing-tiers.prioritySupport\":[\"Priorisierter Support\"],\"pricing-tiers.privateResults\":[\"Private Ergebnisse\"],\"pricing-tiers.pro\":[\"Pro\"],\"pricing-tiers.publicResults\":[\"Öffentliche Ergebnisse\"],\"pricing-tiers.ssoSaml\":[\"SSO & SAML\"],\"pricing-tiers.starter\":[\"Starter\"],\"pricing-tiers.trainingSessions\":[\"Schulungssitzungen\"],\"pricing-tiers.unlimitedRuns\":[\"Unbegrenzte Ausführungen\"],\"products-header.subtitle\":[\"Leistungsstarke Tools zur Optimierung Ihrer Internationalisierungs-Strategie.\"],\"products-header.title\":[\"Produkte\"],\"products.benchmarkCli\":[\"Benchmark CLI\"],\"products.benchmarkCliDesc\":[\"Führen Sie Benchmarks lokal über Ihr Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.\"],\"products.benchmarkCloud\":[\"Benchmark Cloud\"],\"products.benchmarkCloudDesc\":[\"Automatisches cloudbasiertes Benchmarking mit historischer Verfolgung, Warnungen und Teampanels.\"],\"products.benchmarkEnterprise\":[\"Benchmark Enterprise\"],\"products.benchmarkEnterpriseDesc\":[\"On-Premise-Bereitstellung mit SSO, Audit-Protokollen, benutzerdefinierten SLAs und dediziertem Support.\"],\"products.bundleOptimizer\":[\"Bundle Optimizer\"],\"products.bundleOptimizerDesc\":[\"Analysieren und optimieren Sie Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.\"],\"products.contactUs\":[\"Kontaktieren Sie uns\"],\"products.free\":[\"Kostenlos\"],\"products.learnMore\":[\"Mehr erfahren\"],\"products.migrationAssistant\":[\"Migrations-Assistent\"],\"products.migrationAssistantDesc\":[\"KI-gestütztes Tool zur Unterstützung bei der Migration von Codebasen zwischen i18n-Bibliotheken ohne Ausfallzeiten.\"],\"products.price.benchmarkCloud\":[\"29 €/Monat\"],\"products.price.bundleOptimizer\":[\"49 €/Monat\"],\"products.price.migrationAssistant\":[\"99 € einmalig\"],\"products.price.translationQa\":[\"19 €/Monat\"],\"products.translationQa\":[\"Übersetzungs-QA\"],\"products.translationQaDesc\":[\"Automatische Qualitätskontrollen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.\"],\"results-table.bundleSize\":[\"Bundle-Größe\"],\"results-table.lazyLoading\":[\"Lazy Loading\"],\"results-table.library\":[\"Bibliothek\"],\"results-table.lookupTime\":[\"Suchzeit\"],\"results-table.sampleResults\":[\"Beispielergebnisse\"],\"settings-header.subtitle\":[\"Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.\"],\"settings-header.title\":[\"Einstellungen\"],\"settings.apiAccess.apiKey\":[\"API-Schlüssel\"],\"settings.apiAccess.copy\":[\"Kopieren\"],\"settings.apiAccess.title\":[\"API-Zugriff\"],\"settings.apiAccess.useKeyDescription\":[\"Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.\"],\"settings.footer.cancel\":[\"Abbrechen\"],\"settings.footer.saveChanges\":[\"Änderungen speichern\"],\"settings.preferences.arabic\":[\"Arabisch\"],\"settings.preferences.chinese\":[\"Chinesisch\"],\"settings.preferences.darkMode\":[\"Dunkelmodus\"],\"settings.preferences.defaultLanguage\":[\"Standardsprache\"],\"settings.preferences.emailNotifications\":[\"E-Mail-Benachrichtigungen\"],\"settings.preferences.english\":[\"Englisch\"],\"settings.preferences.french\":[\"Französisch\"],\"settings.preferences.german\":[\"Deutsch\"],\"settings.preferences.japanese\":[\"Japanisch\"],\"settings.preferences.receiveWeeklyReports\":[\"Wöchentliche Benchmarking-Berichte erhalten\"],\"settings.preferences.spanish\":[\"Spanisch\"],\"settings.preferences.title\":[\"Einstellungen\"],\"settings.preferences.useDarkScheme\":[\"Dunkles Farbschema verwenden\"],\"settings.profile.displayName\":[\"Anzeigename\"],\"settings.profile.email\":[\"E-Mail\"],\"settings.profile.title\":[\"Profil\"],\"team-header.subtitle\":[\"Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, vereint durch eine gemeinsame Leidenschaft für großartige Entwicklertools.\"],\"team-header.title\":[\"Unser Team\"],\"team.aishaBio\":[\"Leidenschaftlich für Entwicklererfahrung und Bildung. Sprecherin bei React Conf, JSConf und i18nNext.\"],\"team.aishaPatel\":[\"Aisha Patel\"],\"team.communityManager\":[\"Community-Manager\"],\"team.dataAnalyst\":[\"Datenanalyst\"],\"team.developerAdvocate\":[\"Developer Advocate\"],\"team.elenaBio\":[\"Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\"],\"team.elenaKowalski\":[\"Elena Kowalski\"],\"team.founderLeadEngineer\":[\"Gründer & Lead Engineer\"],\"team.fullStackDeveloper\":[\"Full-Stack-Entwickler\"],\"team.marcusBio\":[\"Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.\"],\"team.marcusWeber\":[\"Marcus Weber\"],\"team.performanceEngineer\":[\"Performance Engineer\"],\"team.sarahBio\":[\"Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen im großen Stil.\"],\"team.sarahChen\":[\"Sarah Chen\"],\"team.tomasBio\":[\"Verwaltet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Beitragender zu Lingui.\"],\"team.tomasRodriguez\":[\"Tomas Rodriguez\"],\"team.yukiBio\":[\"Gewährleistet statistische Strenge in allen Benchmarking-Ergebnissen. PhD in Angewandter Statistik vom MIT.\"],\"team.yukiTanaka\":[\"Yuki Tanaka\"],\"theme-toggle.themeAuto\":[\"Thema: Auto\"],\"theme-toggle.themeDark\":[\"Thema: Dunkel\"],\"theme-toggle.themeLight\":[\"Thema: Hell\"],\"theme-toggle.themeModeAutoSystemClick\":[\"Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.\"],\"theme-toggle.themeModeDarkClick\":[\"Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.\"],\"theme-toggle.themeModeLightClick\":[\"Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.\"],\"understanding-impact.cacheInvalidation\":[\"Cache-Invalidierung:\"],\"understanding-impact.cacheInvalidationDesc\":[\"Cache-Invalidierung: Das Aktualisieren von Übersetzungen erfordert Cache-Busting-Strategien, um sicherzustellen, dass Benutzer neue Inhalte erhalten, ohne unveränderte Teilstücke erneut herunterzuladen.\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.\"],\"understanding-impact.duringServerSideRenderingThe\":[\"Während des serverseitigen Renderings wird das vollständige Wörterbuch in den HTML-Payload serialisiert, wodurch sich die Dokumentgröße erhöht, die heruntergeladen und hydratisiert werden muss.\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"Aufblitzen von nicht übersetztem Inhalt (FOUC):\"],\"understanding-impact.flashOfUntranslatedContentFoucDesc\":[\"Flash of Untranslated Content (FOUC): Benutzer sehen möglicherweise kurz Übersetzungsschlüssel oder eine Fallback-Sprache, bevor das Teilstück eintrifft.\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"Das Aufteilen von Übersetzungen in Teilstücke pro Route oder Namensraum kann den initialen Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:\"],\"understanding-impact.theJsonMustBeParsed\":[\"Das JSON muss bei jedem Seitenladen geparst werden — was den Haupt-Thread blockiert.\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"Die Kompromisse beim dynamischen Laden\"],\"understanding-impact.thisTestAppProvidesA\":[\"Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.\"],\"understanding-impact.understandingTheImpact\":[\"Die Auswirkungen verstehen\"],\"understanding-impact.waterfallRequests\":[\"Anfragekaskaden:\"],\"understanding-impact.waterfallRequestsDesc\":[\"Anfragekaskaden: Da die App zuerst geladen werden und das Gebietsschema bestimmen muss, bevor der entsprechende Chunk abgerufen werden kann, entstehen zusätzliche Netzwerk-Roundtrips.\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"Was dieser Benchmark misst\"],\"understanding-impact.whyASingleLargeJson\":[\"Warum ein einziges großes JSON die Leistung beeinträchtigen kann\"],\"what-we-measure.bundleSizeImpact\":[\"Auswirkung auf die Bundle-Größe\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen den HTML-Payload und verlangsamen die Hydratisierung — den Moment, in dem die Seite interaktiv wird.\"],\"what-we-measure.howFastTheAppCan\":[\"Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.\"],\"what-we-measure.howMuchExtraTimeThe\":[\"Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontext-Provider injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.\"],\"what-we-measure.hydrationCost\":[\"Hydratisierungskosten\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"Effektivität von Lazy Loading\"],\"what-we-measure.localeSwitchSpeed\":[\"Geschwindigkeit des Gebietsschemawechsels\"],\"what-we-measure.renderingOverhead\":[\"Rendering-Overhead\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"Die zusätzlichen JavaScript-Bytes, die an die Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Download-Zeit bei langsamen Netzwerken aus.\"],\"what-we-measure.whatWeMeasure\":[\"Was wir messen\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"Ob das Aufteilen von Übersetzungen nach Route oder Namensraum die initiale Last tatsächlich reduziert und welche Kompromisse dies mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).\"],\"why-it-matters.bundleSize\":[\"Bundle-Größe\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratisierung führt das Parsen und Anhängen massiver Übersetzungsobjekte zu Latenzzeiten, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.\"],\"why-it-matters.dynamicLoading\":[\"Dynamisches Laden\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"Das Laden aller Übersetzungen im Voraus überlastet den initialen Payload. Dynamisches (Lazy) Loading teilt Übersetzungen nach Route oder Namensraum auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen von nicht übersetzten Inhalten (FOUC) und Cache-Komplexität. Die Messung beider Strategien ist essenziell.\"],\"why-it-matters.renderingHydration\":[\"Rendering & Hydratisierung\"],\"why-it-matters.theBundleIsTheData\":[\"Das Bundle sind die Daten, die an jeden Benutzer weltweit gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von einigen Kilobytes bis zu zig Kilobytes an Laufzeitcode, plus die Übersetzungsdateien selbst.\"],\"why-it-matters.whyTheseMetricsMatter\":[\"Warum diese Metriken wichtig sind\"]}"),
	it: JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.\"],\"about-grid.methodology\":[\"Metodologia\"],\"about-grid.theSame10PageApp\":[\"La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.\"],\"about-grid.whyThisExists\":[\"Perché esiste questo progetto\"],\"about-header.aboutThisBenchmark\":[\"Informazioni su questo benchmark\"],\"about-header.thisIsAnOpenSource\":[\"Questa è un'applicazione di test open-source, non un prodotto o un'azienda. Il suo unico scopo è fornire un'applicazione React multi-pagina realistica dove diverse librerie i18n possono essere integrate e misurate in condizioni identiche.\"],\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"Approfondimenti, tutorial e analisi dalla comunità i18n.\"],\"blog-list.aStepByStepGuide\":[\"Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\"],\"blog-list.aTransparentLookAtOur\":[\"Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.\"],\"blog-list.anOverviewOfTheCurrent\":[\"Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"Metodologia del benchmark: come testiamo\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"Confronto tra librerie i18n nel 2026: un approfondimento\"],\"blog-list.february12026\":[\"1 febbraio 2026\"],\"blog-list.february152026\":[\"15 febbraio 2026\"],\"blog-list.february282026\":[\"28 febbraio 2026\"],\"blog-list.howToReduceYourI18n\":[\"Come ridurre il bundle i18n del 60%\"],\"blog-list.january202026\":[\"20 gennaio 2026\"],\"blog-list.march82026\":[\"8 marzo 2026\"],\"blog-list.migratingFromReactI18nextTo\":[\"Migrazione da react-i18next a Lingui\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni in fase di compilazione.\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.\"],\"blog-list.readMore\":[\"Leggi di più →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"Server Components e i18n: cosa cambia?\"],\"blog-list.theStateOfInternationalizationIn\":[\"Lo stato dell'internazionalizzazione in React\"],\"blog-list.weTested12DifferentInternationalization\":[\"Abbiamo testato 12 diverse librerie di internazionalizzazione su prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.\"],\"careers-benefits.competitivePay\":[\"Retribuzione competitiva\"],\"careers-benefits.openSourceTime\":[\"Tempo per l'open source\"],\"careers-benefits.topOfMarketCompensation\":[\"Retribuzione ai vertici del mercato\"],\"careers-benefits.twentyPercentTime\":[\"20% di tempo per l'OSS\"],\"careers-header.joinOurMissionToImprove\":[\"Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team che lavora principalmente in remoto e che valorizza l'impatto, la trasparenza e l'apprendimento continuo.\"],\"careers-header.title\":[\"Carriere\"],\"contact-form.bugReport\":[\"Segnalazione di bug\"],\"contact-form.contribution\":[\"Contributo\"],\"contact-form.describeYourQuestionOrIdea\":[\"Descrivi la tua domanda o idea...\"],\"contact-form.email\":[\"Email\"],\"contact-form.message\":[\"Messaggio\"],\"contact-form.methodologyQuestion\":[\"Domanda sulla metodologia\"],\"contact-form.newBenchmarkIdea\":[\"Nuova idea di benchmark\"],\"contact-form.other\":[\"Altro\"],\"contact-form.sendMessage\":[\"Invia messaggio\"],\"contact-form.topic\":[\"Argomento\"],\"contact-form.yourName\":[\"Il tuo nome\"],\"contact-header.getInTouch\":[\"Mettiti in contatto\"],\"contact-header.haveIdeasFoundABug\":[\"Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo\"],\"faq-header.subtitle\":[\"Tutto quello che c'è da sapere su i18n Benchmark.\"],\"faq-header.title\":[\"Domande frequenti\"],\"faq-list.canISubmitMyOwn\":[\"Posso inviare i miei benchmark?\"],\"faq-list.doYouOfferConsultingServices\":[\"Offrite servizi di consulenza ?\"],\"faq-list.howAreBenchmarksConducted\":[\"Come vengono condotti i benchmark?\"],\"faq-list.howCanIContribute\":[\"Come posso contribuire?\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"Quanto spesso vengono aggiornati i benchmark?\"],\"faq-list.isTheDataReliable\":[\"I dati sono affidabili?\"],\"faq-list.thereAreManyWaysTo\":[\"Ci sono molti modi per contribuire al progetto.\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"Seguiamo una rigorosa metodologia statistica che include fasi di riscaldamento, rilevamento di valori anomali e intervalli di confidenza.\"],\"faq-list.weReRunAllBenchmarks\":[\"Eseguiamo nuovamente tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ciascuna libreria.\"],\"faq-list.weRunStandardizedTestsIn\":[\"Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente.\"],\"faq-list.weSupportReactI18nextReact\":[\"Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\"],\"faq-list.whatIsI18nBenchmark\":[\"Cos'è i18n Benchmark?\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"i18n Benchmark è una suite di benchmarking open-source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione.\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"Quali librerie sono attualmente supportate?\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"Sì! Siamo aperti ai contributi della community. Fai un fork della repository e invia una pull request.\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano le soluzioni i18n.\"],\"footer.anOpenSourceTestApplication\":[\"Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.\"],\"footer.builtWith\":[\"i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.\"],\"footer.contact\":[\"Contatti\"],\"footer.contributing\":[\"Contribuire\"],\"footer.github\":[\"GitHub\"],\"footer.i18nBenchmark\":[\"i18n Benchmark\"],\"footer.methodology\":[\"Metodologia\"],\"footer.resources\":[\"Risorse\"],\"header.blog\":[\"Blog\"],\"header.careers\":[\"Carriere\"],\"header.contact\":[\"Contatti\"],\"header.faq\":[\"FAQ\"],\"header.goToGithub\":[\"Vai su GitHub\"],\"header.home\":[\"Home\"],\"header.i18nBench\":[\"i18n Bench\"],\"header.methodology\":[\"Metodologia\"],\"header.mockPages\":[\"Pagine di test\"],\"header.pricing\":[\"Prezzi\"],\"header.products\":[\"Prodotti\"],\"header.settings\":[\"Impostazioni\"],\"header.team\":[\"Team\"],\"hero.aTestApplicationDesignedTo\":[\"Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.\"],\"hero.title\":[\"i18n Benchmark\"],\"hero.viewResults\":[\"Visualizza i risultati\"],\"mockBanner\":[\"⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.\"],\"open-positions.applyNow\":[\"Candidati ora\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"Costruire e mantenere la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.\"],\"open-positions.engineering\":[\"Ingegneria\"],\"open-positions.fullTime\":[\"Tempo pieno\"],\"open-positions.openPositions\":[\"Posizioni aperte\"],\"open-positions.remote\":[\"Remoto\"],\"open-positions.seniorFrontendEngineer\":[\"Senior Frontend Engineer\"],\"pricing-header.chooseThePlanThatFits\":[\"Scegli il piano adatto al tuo team. Nessun costo nascosto.\"],\"pricing-header.simpleTransparentPricing\":[\"Simple, Transparent Pricing\"],\"pricing-tiers.allLibraries\":[\"Tutte le librerie\"],\"pricing-tiers.auditLogs\":[\"Registri di audit\"],\"pricing-tiers.benchmarkRunPerDay\":[[\"runs\"],\" benchmark eseguiti al giorno\"],\"pricing-tiers.ciIntegration\":[\"Integrazione CI\"],\"pricing-tiers.communitySupport\":[\"Supporto della community\"],\"pricing-tiers.contactSales\":[\"Contatta l'ufficio vendite\"],\"pricing-tiers.customPrice\":[\"Personalizzato\"],\"pricing-tiers.customSlas\":[\"SLA personalizzati\"],\"pricing-tiers.dedicatedAccountManager\":[\"Account manager dedicato\"],\"pricing-tiers.enterprise\":[\"Enterprise\"],\"pricing-tiers.everythingInPro\":[\"Tutto quello che c'è in Pro\"],\"pricing-tiers.forever\":[\"per sempre\"],\"pricing-tiers.getStarted\":[\"Per iniziare\"],\"pricing-tiers.historicalData\":[\"Dati storici\"],\"pricing-tiers.librariesNumber\":[[\"libs\"],\" librerie\"],\"pricing-tiers.month\":[\"/mese\"],\"pricing-tiers.onPremiseOption\":[\"Opzione on-premise\"],\"pricing-tiers.price0\":[\"0 €\"],\"pricing-tiers.price29\":[\"29 €\"],\"pricing-tiers.prioritySupport\":[\"Supporto prioritario\"],\"pricing-tiers.privateResults\":[\"Risultati privati\"],\"pricing-tiers.pro\":[\"Pro\"],\"pricing-tiers.publicResults\":[\"Risultati pubblici\"],\"pricing-tiers.ssoSaml\":[\"SSO e SAML\"],\"pricing-tiers.starter\":[\"Starter\"],\"pricing-tiers.trainingSessions\":[\"Sessioni di formazione\"],\"pricing-tiers.unlimitedRuns\":[\"Esecuzioni illimitate\"],\"products-header.subtitle\":[\"Strumenti per misurare, ottimizzare e mantenere le tue soluzioni di internazionalizzazione.\"],\"products-header.title\":[\"Prodotti\"],\"products.benchmarkCli\":[\"Benchmark CLI\"],\"products.benchmarkCliDesc\":[\"Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.\"],\"products.benchmarkCloud\":[\"Benchmark Cloud\"],\"products.benchmarkCloudDesc\":[\"Benchmarking automatizzato basato su cloud con monitoraggio storico, avvisi e dashboard per il team.\"],\"products.benchmarkEnterprise\":[\"Benchmark Enterprise\"],\"products.benchmarkEnterpriseDesc\":[\"Distribuzione on-premise con SSO, registri di audit, SLA personalizzati e supporto dedicato.\"],\"products.bundleOptimizer\":[\"Ottimizzatore di bundle\"],\"products.bundleOptimizerDesc\":[\"Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.\"],\"products.contactUs\":[\"Contattaci\"],\"products.free\":[\"Gratuito\"],\"products.learnMore\":[\"Per saperne di più\"],\"products.migrationAssistant\":[\"Assistente alla migrazione\"],\"products.migrationAssistantDesc\":[\"Strumento basato sull'IA che aiuta a migrare il tuo codebase tra librerie i18n senza tempi di inattività.\"],\"products.price.benchmarkCloud\":[\"29 €/mese\"],\"products.price.bundleOptimizer\":[\"49 €/mese\"],\"products.price.migrationAssistant\":[\"99 € una tantum\"],\"products.price.translationQa\":[\"19 €/mese\"],\"products.translationQa\":[\"QA delle traduzioni\"],\"products.translationQaDesc\":[\"Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.\"],\"results-table.bundleSize\":[\"Dimensione del bundle\"],\"results-table.lazyLoading\":[\"Caricamento lazy\"],\"results-table.library\":[\"Libreria\"],\"results-table.lookupTime\":[\"Tempo di ricerca\"],\"results-table.sampleResults\":[\"Risultati di esempio\"],\"settings-header.subtitle\":[\"Gestisci le preferenze del tuo account e la configurazione.\"],\"settings-header.title\":[\"Impostazioni\"],\"settings.apiAccess.apiKey\":[\"Chiave API\"],\"settings.apiAccess.copy\":[\"Copia\"],\"settings.apiAccess.title\":[\"Accesso API\"],\"settings.apiAccess.useKeyDescription\":[\"Usa questa chiave per accedere alle API di benchmarking in modo programmatico.\"],\"settings.footer.cancel\":[\"Annulla\"],\"settings.footer.saveChanges\":[\"Salva le modifiche\"],\"settings.preferences.arabic\":[\"Arabo\"],\"settings.preferences.chinese\":[\"Cinese\"],\"settings.preferences.darkMode\":[\"Modalità scura\"],\"settings.preferences.defaultLanguage\":[\"Lingua predefinita\"],\"settings.preferences.emailNotifications\":[\"Notifiche email\"],\"settings.preferences.english\":[\"Inglese\"],\"settings.preferences.french\":[\"Francese\"],\"settings.preferences.german\":[\"Tedesco\"],\"settings.preferences.japanese\":[\"Giapponese\"],\"settings.preferences.receiveWeeklyReports\":[\"Ricevi rapporti settimanali sui benchmark\"],\"settings.preferences.spanish\":[\"Spagnolo\"],\"settings.preferences.title\":[\"Preferenze\"],\"settings.preferences.useDarkScheme\":[\"Usa lo schema di colori scuri\"],\"settings.profile.displayName\":[\"Nome visualizzato\"],\"settings.profile.email\":[\"Email\"],\"settings.profile.title\":[\"Profilo\"],\"team-header.subtitle\":[\"Incontra le persone dietro i18n Benchmark. Un team vario unito da una passione condivisa per i grandi strumenti per sviluppatori.\"],\"team-header.title\":[\"Il nostro team\"],\"team.aishaBio\":[\"Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.\"],\"team.aishaPatel\":[\"Aisha Patel\"],\"team.communityManager\":[\"Community Manager\"],\"team.dataAnalyst\":[\"Analista di dati\"],\"team.developerAdvocate\":[\"Developer Advocate\"],\"team.elenaBio\":[\"Gestisce i contributi della community, le partnership e gli eventi. Background in governance open source.\"],\"team.elenaKowalski\":[\"Elena Kowalski\"],\"team.founderLeadEngineer\":[\"Fondatore e ingegnere capo\"],\"team.fullStackDeveloper\":[\"Sviluppatore Full-Stack\"],\"team.marcusBio\":[\"Specializzato nell'ottimizzazione delle prestazioni di JavaScript e nella metodologia di benchmarking. In precedenza presso Vercel.\"],\"team.marcusWeber\":[\"Marcus Weber\"],\"team.performanceEngineer\":[\"Ingegnere delle prestazioni\"],\"team.sarahBio\":[\"Ex ingegnere Google con 10 anni di esperienza nella creazione di sistemi di internazionalizzazione su scala.\"],\"team.sarahChen\":[\"Sarah Chen\"],\"team.tomasBio\":[\"Mantiene l'infrastruttura di benchmarking e la pipeline di CI/CD. Contributore open source di Lingui.\"],\"team.tomasRodriguez\":[\"Tomas Rodriguez\"],\"team.yukiBio\":[\"Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato di ricerca in statistica applicata presso il MIT.\"],\"team.yukiTanaka\":[\"Yuki Tanaka\"],\"theme-toggle.themeAuto\":[\"Tema: Auto\"],\"theme-toggle.themeDark\":[\"Tema: Scuro\"],\"theme-toggle.themeLight\":[\"Tema: Chiaro\"],\"theme-toggle.themeModeAutoSystemClick\":[\"Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.\"],\"theme-toggle.themeModeDarkClick\":[\"Modalità tema: scura. Clicca per passare alla modalità auto (sistema).\"],\"theme-toggle.themeModeLightClick\":[\"Modalità tema: chiara. Clicca per passare alla modalità scura.\"],\"understanding-impact.cacheInvalidation\":[\"Invalidazione della cache:\"],\"understanding-impact.cacheInvalidationDesc\":[\"l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza scaricare nuovamente chunk invariati.\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.\"],\"understanding-impact.duringServerSideRenderingThe\":[\"Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idrato.\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"Flash di contenuti non tradotti (FOUC):\"],\"understanding-impact.flashOfUntranslatedContentFoucDesc\":[\"gli utenti possono visualizzare brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\"],\"understanding-impact.theJsonMustBeParsed\":[\"Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"I compromessi del caricamento dinamico\"],\"understanding-impact.thisTestAppProvidesA\":[\"Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.\"],\"understanding-impact.understandingTheImpact\":[\"Capire l'impatto\"],\"understanding-impact.waterfallRequests\":[\"Waterfall requests:\"],\"understanding-impact.waterfallRequestsDesc\":[\"l'app deve prima caricarsi, determinare la localizzazione e quindi recuperare il chunk giusto, aggiungendo round-trip di rete.\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"Cosa misura questo benchmark\"],\"understanding-impact.whyASingleLargeJson\":[\"Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\"],\"what-we-measure.bundleSizeImpact\":[\"Impatto sulla dimensione del bundle\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.\"],\"what-we-measure.howFastTheAppCan\":[\"Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.\"],\"what-we-measure.howMuchExtraTimeThe\":[\"Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.\"],\"what-we-measure.hydrationCost\":[\"Costo di idratazione\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"Efficacia del caricamento pigro\"],\"what-we-measure.localeSwitchSpeed\":[\"Velocità di cambio lingua\"],\"what-we-measure.renderingOverhead\":[\"Sovrapprezzo di rendering\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"I byte JavaScript aggiuntivi inviati agli utenti quando la libreria i18n e i suoi file di traduzione sono inclusi. Ciò influisce direttamente sul tempo di download sulle reti lente.\"],\"what-we-measure.whatWeMeasure\":[\"Cosa misuriamo\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).\"],\"why-it-matters.bundleSize\":[\"Dimensione del bundle\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).\"],\"why-it-matters.dynamicLoading\":[\"Caricamento dinamico\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.\"],\"why-it-matters.renderingHydration\":[\"Rendering e idratazione\"],\"why-it-matters.theBundleIsTheData\":[\"Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.\"],\"why-it-matters.whyTheseMetricsMatter\":[\"Perché queste metriche sono importanti\"]}"),
	pt: JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências de longo prazo. A maioria das comparações se concentra na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao pacote? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento tardio realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.\"],\"about-grid.methodology\":[\"Metodologia\"],\"about-grid.theSame10PageApp\":[\"O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), realizamos auditorias do Lighthouse para métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis.\"],\"about-grid.whyThisExists\":[\"Por que isso existe\"],\"about-header.aboutThisBenchmark\":[\"Sobre este benchmark\"],\"about-header.thisIsAnOpenSource\":[\"Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo React realista e de várias páginas onde diferentes bibliotecas i18n possam ser integradas e medidas em condições idênticas.\"],\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"Insights, tutoriais e análises da comunidade i18n.\"],\"blog-list.aStepByStepGuide\":[\"Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\"],\"blog-list.aTransparentLookAtOur\":[\"Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.\"],\"blog-list.anOverviewOfTheCurrent\":[\"Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"Metodologia de Benchmark: como testamos\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"Comparando Bibliotecas i18n em 2026: Uma Análise Profunda\"],\"blog-list.february12026\":[\"1 de fevereiro de 2026\"],\"blog-list.february152026\":[\"15 de fevereiro de 2026\"],\"blog-list.february282026\":[\"28 de fevereiro de 2026\"],\"blog-list.howToReduceYourI18n\":[\"Como reduzir seu bundle i18n em 60%\"],\"blog-list.january202026\":[\"20 de janeiro de 2026\"],\"blog-list.march82026\":[\"8 de março de 2026\"],\"blog-list.migratingFromReactI18nextTo\":[\"Migrando do react-i18next para o Lingui\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de compilação.\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.\"],\"blog-list.readMore\":[\"Leia mais →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"Server Components e i18n: o que muda?\"],\"blog-list.theStateOfInternationalizationIn\":[\"O estado da internacionalização no React\"],\"blog-list.weTested12DifferentInternationalization\":[\"Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.\"],\"careers-benefits.competitivePay\":[\"Remuneração competitiva\"],\"careers-benefits.openSourceTime\":[\"Tempo para código aberto\"],\"careers-benefits.topOfMarketCompensation\":[\"Remuneração acima do mercado\"],\"careers-benefits.twentyPercentTime\":[\"20% do tempo para OSS\"],\"careers-header.joinOurMissionToImprove\":[\"Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe que prioriza o trabalho remoto e valoriza o impacto, a transparência e o aprendizado contínuo.\"],\"careers-header.title\":[\"Carreiras\"],\"contact-form.bugReport\":[\"Relatório de bug\"],\"contact-form.contribution\":[\"Contribuição\"],\"contact-form.describeYourQuestionOrIdea\":[\"Descreva sua pergunta ou ideia...\"],\"contact-form.email\":[\"E-mail\"],\"contact-form.message\":[\"Mensagem\"],\"contact-form.methodologyQuestion\":[\"Pergunta sobre metodologia\"],\"contact-form.newBenchmarkIdea\":[\"Nova ideia de benchmark\"],\"contact-form.other\":[\"Outros\"],\"contact-form.sendMessage\":[\"Enviar mensagem\"],\"contact-form.topic\":[\"Assunto\"],\"contact-form.yourName\":[\"Seu nome\"],\"contact-header.getInTouch\":[\"Entre em contato\"],\"contact-header.haveIdeasFoundABug\":[\"Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em\"],\"faq-header.subtitle\":[\"Tudo o que você precisa saber sobre o benchmark i18n.\"],\"faq-header.title\":[\"Perguntas Frequentes\"],\"faq-list.canISubmitMyOwn\":[\"Posso enviar meus próprios benchmarks?\"],\"faq-list.doYouOfferConsultingServices\":[\"Vocês oferecem serviços de consultoria?\"],\"faq-list.howAreBenchmarksConducted\":[\"Como os benchmarks são conduzidos?\"],\"faq-list.howCanIContribute\":[\"Como posso contribuir?\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"Com que frequência os benchmarks são atualizados?\"],\"faq-list.isTheDataReliable\":[\"Os dados são confiáveis?\"],\"faq-list.thereAreManyWaysTo\":[\"Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para obter detalhes.\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de valores atípicos e intervalos de confiança. Todos os dados brutos são publicados com a análise para total transparência.\"],\"faq-list.weReRunAllBenchmarks\":[\"Executamos novamente todos os benchmarks semanalmente contra as últimas versões estáveis de cada biblioteca. Os lançamentos de versões principais acionam um ciclo de re-benchmarking imediato.\"],\"faq-list.weRunStandardizedTestsIn\":[\"Executamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório GitHub.\"],\"faq-list.weSupportReactI18nextReact\":[\"Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\"],\"faq-list.whatIsI18nBenchmark\":[\"O que é o i18n Benchmark?\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do pacote e a experiência do desenvolvedor das bibliotecas de internacionalização para aplicativos JavaScript e React.\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"Quais bibliotecas são suportadas atualmente?\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"Sim! Congratulamo-nos com o envio de benchmarks da comunidade. Por favor, faça um fork do repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe analisará e mesclará envios qualificados.\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base no seu caso de uso específico, escala e restrições.\"],\"footer.anOpenSourceTestApplication\":[\"Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.\"],\"footer.builtWith\":[\"i18n Benchmark — Projeto de código aberto. Construído com React, Vite & TanStack Router.\"],\"footer.contact\":[\"Contato\"],\"footer.contributing\":[\"Contribuir\"],\"footer.github\":[\"GitHub\"],\"footer.i18nBenchmark\":[\"i18n Benchmark\"],\"footer.methodology\":[\"Metodologia\"],\"footer.resources\":[\"Recursos\"],\"header.blog\":[\"Blog\"],\"header.careers\":[\"Carreiras\"],\"header.contact\":[\"Contato\"],\"header.faq\":[\"FAQ\"],\"header.goToGithub\":[\"Ir para GitHub\"],\"header.home\":[\"Início\"],\"header.i18nBench\":[\"i18n Bench\"],\"header.methodology\":[\"Metodologia\"],\"header.mockPages\":[\"Páginas de teste\"],\"header.pricing\":[\"Preços\"],\"header.products\":[\"Produtos\"],\"header.settings\":[\"Configurações\"],\"header.team\":[\"Equipe\"],\"hero.aTestApplicationDesignedTo\":[\"Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.\"],\"hero.title\":[\"i18n Benchmark\"],\"hero.viewResults\":[\"Ver Resultados\"],\"mockBanner\":[\"⚠️ Esta página contém dados simulados apenas para fins de benchmarking. Não está relacionada com nenhum negócio ou serviço real.\"],\"open-positions.applyNow\":[\"Candidatar-se agora\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"Construir e manter nossos dashboards de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.\"],\"open-positions.engineering\":[\"Engenharia\"],\"open-positions.fullTime\":[\"Tempo integral\"],\"open-positions.openPositions\":[\"Vagas abertas\"],\"open-positions.remote\":[\"Remoto\"],\"open-positions.seniorFrontendEngineer\":[\"Engenheiro Frontend Sênior\"],\"pricing-header.chooseThePlanThatFits\":[\"Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.\"],\"pricing-header.simpleTransparentPricing\":[\"Preços Simples e Trasparentes\"],\"pricing-tiers.allLibraries\":[\"Todas as bibliotecas\"],\"pricing-tiers.auditLogs\":[\"Logs de auditoria\"],\"pricing-tiers.benchmarkRunPerDay\":[[\"runs\"],\" benchmarks por dia\"],\"pricing-tiers.ciIntegration\":[\"Integração CI\"],\"pricing-tiers.communitySupport\":[\"Suporte da comunidade\"],\"pricing-tiers.contactSales\":[\"Contatar Vendas\"],\"pricing-tiers.customPrice\":[\"Preço personalizado\"],\"pricing-tiers.customSlas\":[\"SLAs personalizados\"],\"pricing-tiers.dedicatedAccountManager\":[\"Gerente de conta dedicado\"],\"pricing-tiers.enterprise\":[\"Enterprise\"],\"pricing-tiers.everythingInPro\":[\"Tudo no Pro\"],\"pricing-tiers.forever\":[\"para sempre\"],\"pricing-tiers.getStarted\":[\"Começar\"],\"pricing-tiers.historicalData\":[\"Dados históricos\"],\"pricing-tiers.librariesNumber\":[[\"libs\"],\" bibliotecas\"],\"pricing-tiers.month\":[\"/mês\"],\"pricing-tiers.onPremiseOption\":[\"Opção on-premise\"],\"pricing-tiers.price0\":[\"R$ 0\"],\"pricing-tiers.price29\":[\"R$ 145\"],\"pricing-tiers.prioritySupport\":[\"Suporte prioritário\"],\"pricing-tiers.privateResults\":[\"Resultados privados\"],\"pricing-tiers.pro\":[\"Pro\"],\"pricing-tiers.publicResults\":[\"Resultados públicos\"],\"pricing-tiers.ssoSaml\":[\"SSO & SAML\"],\"pricing-tiers.starter\":[\"Starter\"],\"pricing-tiers.trainingSessions\":[\"Sessões de treinamento\"],\"pricing-tiers.unlimitedRuns\":[\"Execuções ilimitadas\"],\"products-header.subtitle\":[\"Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização.\"],\"products-header.title\":[\"Produtos\"],\"products.benchmarkCli\":[\"Benchmark CLI\"],\"products.benchmarkCliDesc\":[\"Execute benchmarks localmente a partir do seu terminal. Suporta configurações personalizadas e integração com CI.\"],\"products.benchmarkCloud\":[\"Benchmark Cloud\"],\"products.benchmarkCloudDesc\":[\"Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e dashboards de equipe.\"],\"products.benchmarkEnterprise\":[\"Benchmark Enterprise\"],\"products.benchmarkEnterpriseDesc\":[\"Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.\"],\"products.bundleOptimizer\":[\"Bundle Optimizer\"],\"products.bundleOptimizerDesc\":[\"Analise e otimize seus bundles i18n para produção usando tree-shaking e divisão de código.\"],\"products.contactUs\":[\"Contate-nos\"],\"products.free\":[\"Grátis\"],\"products.learnMore\":[\"Saiba mais\"],\"products.migrationAssistant\":[\"Assistente de Migração\"],\"products.migrationAssistantDesc\":[\"Ferramenta baseada em IA para ajudar a migrar bases de código entre bibliotecas i18n sem tempo de inatividade.\"],\"products.price.benchmarkCloud\":[\"R$ 145/mês\"],\"products.price.bundleOptimizer\":[\"R$ 249/mês\"],\"products.price.migrationAssistant\":[\"R$ 495 (pagamento único)\"],\"products.price.translationQa\":[\"R$ 79/mês\"],\"products.translationQa\":[\"Tradução QA\"],\"products.translationQaDesc\":[\"Verificações automáticas de qualidade para traduções ausentes, problemas de plural e erros de contexto.\"],\"results-table.bundleSize\":[\"Tamanho do bundle\"],\"results-table.lazyLoading\":[\"Carregamento lento\"],\"results-table.library\":[\"Biblioteca\"],\"results-table.lookupTime\":[\"Tempo de consulta\"],\"results-table.sampleResults\":[\"Resultados de amostra\"],\"settings-header.subtitle\":[\"Gerencie as configurações e preferências da sua conta.\"],\"settings-header.title\":[\"Configurações\"],\"settings.apiAccess.apiKey\":[\"Chave da API\"],\"settings.apiAccess.copy\":[\"Copiar\"],\"settings.apiAccess.title\":[\"Acesso à API\"],\"settings.apiAccess.useKeyDescription\":[\"Use esta chave para acessar a API de benchmarking programaticamente.\"],\"settings.footer.cancel\":[\"Cancelar\"],\"settings.footer.saveChanges\":[\"Salvar alterações\"],\"settings.preferences.arabic\":[\"Árabe\"],\"settings.preferences.chinese\":[\"Chinês\"],\"settings.preferences.darkMode\":[\"Modo escuro\"],\"settings.preferences.defaultLanguage\":[\"Idioma padrão\"],\"settings.preferences.emailNotifications\":[\"Notificações por e-mail\"],\"settings.preferences.english\":[\"Inglês\"],\"settings.preferences.french\":[\"Francês\"],\"settings.preferences.german\":[\"Alemão\"],\"settings.preferences.japanese\":[\"Japonês\"],\"settings.preferences.receiveWeeklyReports\":[\"Receber relatórios semanais de benchmark\"],\"settings.preferences.spanish\":[\"Espanhol\"],\"settings.preferences.title\":[\"Preferências\"],\"settings.preferences.useDarkScheme\":[\"Usar esquema de cores escuro\"],\"settings.profile.displayName\":[\"Nome de exibição\"],\"settings.profile.email\":[\"E-mail\"],\"settings.profile.title\":[\"Perfil\"],\"team-header.subtitle\":[\"Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor.\"],\"team-header.title\":[\"Nossa Equipe\"],\"team.aishaBio\":[\"Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.\"],\"team.aishaPatel\":[\"Aisha Patel\"],\"team.communityManager\":[\"Gerente de Comunidade\"],\"team.dataAnalyst\":[\"Analista de Dados\"],\"team.developerAdvocate\":[\"Developer Advocate\"],\"team.elenaBio\":[\"Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\"],\"team.elenaKowalski\":[\"Elena Kowalski\"],\"team.founderLeadEngineer\":[\"Fundadora e Engenheira Líder\"],\"team.fullStackDeveloper\":[\"Desenvolvedor Full Stack\"],\"team.marcusBio\":[\"Especializado em otimização de desempenho de JavaScript e metodologia de benchmarking. Ex-Vercel.\"],\"team.marcusWeber\":[\"Marcus Weber\"],\"team.performanceEngineer\":[\"Engenheiro de Performance\"],\"team.sarahBio\":[\"Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em larga escala.\"],\"team.sarahChen\":[\"Sarah Chen\"],\"team.tomasBio\":[\"Mantém nossa infraestrutura de benchmarking e pipelines de CI/CD. Contribuidor de código aberto para o Lingui.\"],\"team.tomasRodriguez\":[\"Tomas Rodriguez\"],\"team.yukiBio\":[\"Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.\"],\"team.yukiTanaka\":[\"Yuki Tanaka\"],\"theme-toggle.themeAuto\":[\"Tema: Auto\"],\"theme-toggle.themeDark\":[\"Tema: Escuro\"],\"theme-toggle.themeLight\":[\"Tema: Claro\"],\"theme-toggle.themeModeAutoSystemClick\":[\"Modo de tema: automático (sistema). Clique para mudar para o modo claro.\"],\"theme-toggle.themeModeDarkClick\":[\"Modo de tema: escuro. Clique para mudar para o modo automático (sistema).\"],\"theme-toggle.themeModeLightClick\":[\"Modo de tema: claro. Clique para mudar para o modo escuro.\"],\"understanding-impact.cacheInvalidation\":[\"Invalidação de cache:\"],\"understanding-impact.cacheInvalidationDesc\":[\"A atualização das traduções requer uma estratégia de invalidação de cache que garanta que os usuários recebam o novo conteúdo sem baixar novamente os blocos inalterados.\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"As arquiteturas baseadas no contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.\"],\"understanding-impact.duringServerSideRenderingThe\":[\"Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"Flash de conteúdo não traduzido (FOUC):\"],\"understanding-impact.flashOfUntranslatedContentFoucDesc\":[\"Os usuários podem ver brevemente chaves de tradução ou o idioma de fallback antes que o bloco chegue.\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:\"],\"understanding-impact.theJsonMustBeParsed\":[\"O JSON deve ser analisado em cada carga de página — bloqueando a linha de execução principal.\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"As compensações do carregamento dinâmico\"],\"understanding-impact.thisTestAppProvidesA\":[\"Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento tardio. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.\"],\"understanding-impact.understandingTheImpact\":[\"Entendendo o impacto\"],\"understanding-impact.waterfallRequests\":[\"Pedidos em cascata:\"],\"understanding-impact.waterfallRequestsDesc\":[\"Como o aplicativo deve primeiro carregar e decidir a localidade antes de buscar o bloco apropriado, você adiciona viagens de ida e volta à rede.\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"O que este benchmark mede\"],\"understanding-impact.whyASingleLargeJson\":[\"Por que um único JSON grande pode prejudicar o desempenho\"],\"what-we-measure.bundleSizeImpact\":[\"Impacto no tamanho do bundle\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.\"],\"what-we-measure.howFastTheAppCan\":[\"Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.\"],\"what-we-measure.howMuchExtraTimeThe\":[\"Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções via um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.\"],\"what-we-measure.hydrationCost\":[\"Costo de hidratação\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"Eficácia do carregamento lento\"],\"what-we-measure.localeSwitchSpeed\":[\"Velocidade de troca de idioma\"],\"what-we-measure.renderingOverhead\":[\"Sobrecarga de renderização\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.\"],\"what-we-measure.whatWeMeasure\":[\"O que medimos\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascada, FOUC, complexidade de cache).\"],\"why-it-matters.bundleSize\":[\"Tamanho do Bundle\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode desencadear novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).\"],\"why-it-matters.dynamicLoading\":[\"Carregamento Dinâmico\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento tardio introduz suas próprias compensações: solicitações em cascada, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.\"],\"why-it-matters.renderingHydration\":[\"Renderização e Hidratação\"],\"why-it-matters.theBundleIsTheData\":[\"O bundle representa os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução.\"],\"why-it-matters.whyTheseMetricsMatter\":[\"Por que essas métricas são importantes\"]}"),
	zh: JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"选择 i18n 库是一项具有长期影响的架构决策。大多数比较侧重于 API 的易用性，但很少衡量性能成本：库为包增加了多少权重？加载数千个翻译键时它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试用真实数据回答了这些问题。\"],\"about-grid.methodology\":[\"方法论\"],\"about-grid.theSame10PageApp\":[\"同一个 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行 Lighthouse 审计以获取加载指标，并使用 React Profiler 捕获语言切换期间的渲染时间。所有测试都在一致的硬件上在 CI 中运行，以确保结果的可复现性。\"],\"about-grid.whyThisExists\":[\"为什么存在这个基准测试\"],\"about-header.aboutThisBenchmark\":[\"关于本基准测试\"],\"about-header.thisIsAnOpenSource\":[\"这是一个开源测试应用程序 —— 不是产品 or 公司。其唯一目的是提供一个现实的多页面 React 应用程序，可以在相同条件下集成和衡量不同的 i18n 库。\"],\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"来自 i18n 社区的见解、教程和分析。\"],\"blog-list.aStepByStepGuide\":[\"关于如何将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。\"],\"blog-list.aTransparentLookAtOur\":[\"透明地了解我们的基准测试方法，包括测试环境、统计方法和可复现性。\"],\"blog-list.anOverviewOfTheCurrent\":[\"React 当前 i18n 生态系统概述，涵盖趋势、新兴模式和社区偏好。\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"基准测试方法论：我们如何测试\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"2026 年 i18n 库对比：深度解析\"],\"blog-list.february12026\":[\"2026年2月1日\"],\"blog-list.february152026\":[\"2026年2月15日\"],\"blog-list.february282026\":[\"2026年2月28日\"],\"blog-list.howToReduceYourI18n\":[\"如何将您的 i18n 包减少 60%\"],\"blog-list.january202026\":[\"2026年1月20日\"],\"blog-list.march82026\":[\"2026年3月8日\"],\"blog-list.migratingFromReactI18nextTo\":[\"从 react-i18next 迁移到 Lingui\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"React Server Components 为国际化引入了新模式。我们探讨其影响和最佳实践。\"],\"blog-list.readMore\":[\"阅读更多 →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"服务器组件与 i18n：有哪些变化？\"],\"blog-list.theStateOfInternationalizationIn\":[\"React 国际化的现状\"],\"blog-list.weTested12DifferentInternationalization\":[\"我们在性能、包大小和 DX 方面测试了 12 个不同的国际化库。以下是令人惊讶的结果。\"],\"careers-benefits.competitivePay\":[\"具有竞争力的薪酬\"],\"careers-benefits.openSourceTime\":[\"开源贡献时间\"],\"careers-benefits.topOfMarketCompensation\":[\"市场领先的奖酬\"],\"careers-benefits.twentyPercentTime\":[\"20% 开源贡献时间\"],\"careers-header.joinOurMissionToImprove\":[\"加入我们改进国际化生态系统的使命。我们是一个远程优先的团队，重视影响力、透明度和持续学习。\"],\"careers-header.title\":[\"职业生涯\"],\"contact-form.bugReport\":[\"Bug 报告\"],\"contact-form.contribution\":[\"贡献\"],\"contact-form.describeYourQuestionOrIdea\":[\"描述您的问题或想法...\"],\"contact-form.email\":[\"电子邮箱\"],\"contact-form.message\":[\"消息内容\"],\"contact-form.methodologyQuestion\":[\"方法论问题\"],\"contact-form.newBenchmarkIdea\":[\"新基准测试想法\"],\"contact-form.other\":[\"其他\"],\"contact-form.sendMessage\":[\"发送消息\"],\"contact-form.topic\":[\"话题\"],\"contact-form.yourName\":[\"您的姓名\"],\"contact-header.getInTouch\":[\"联系我们\"],\"contact-header.haveIdeasFoundABug\":[\"有想法、发现了 Bug 或想贡献基准测试？请联系我们：\"],\"faq-header.subtitle\":[\"关于 i18n 基准测试您需要了解的一切。\"],\"faq-header.title\":[\"常见问题\"],\"faq-list.canISubmitMyOwn\":[\"我可以提交自己的基准测试吗？\"],\"faq-list.doYouOfferConsultingServices\":[\"你们提供咨询服务吗？\"],\"faq-list.howAreBenchmarksConducted\":[\"基准测试是如何进行的？\"],\"faq-list.howCanIContribute\":[\"我如何贡献？\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"基准测试多久更新一次？\"],\"faq-list.isTheDataReliable\":[\"数据可靠吗？\"],\"faq-list.thereAreManyWaysTo\":[\"有很多贡献方式：提交基准测试、改进文档、报告 bug、提出新指标或赞助项目。详情请访问我们的 GitHub 仓库。\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"我们遵循严谨的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都会随分析报告一起发布，以确保完全透明。\"],\"faq-list.weReRunAllBenchmarks\":[\"我们每周针对每个库的最新稳定版本重新运行所有基准测试。主版本发布会触发立即的基准测试周期。\"],\"faq-list.weRunStandardizedTestsIn\":[\"我们使用一致的硬件在隔离环境中运行标准化测试。每个基准测试都会重复多次以确保统计显著性。所有测试配置都在我们的 GitHub 仓库中公开。\"],\"faq-list.weSupportReactI18nextReact\":[\"我们支持 react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react 和 Tolgee。\"],\"faq-list.whatIsI18nBenchmark\":[\"什么是 i18n Benchmark？\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"i18n Benchmark 是一个开源基准测试套件，用于测量和比较 JavaScript 和 React 应用程序的国际化库的性能、包大小和开发人员体验。\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"目前支持哪些库？\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"是的！我们欢迎社区提交基准测试。请点击 Fork 仓库，按照我们的贡献指南添加您的基准测试，并提交 Pull Request。我们的团队将审核并合并合格的提交。\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"是的，我们的企业版计划为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和约束提供量身定制的建议。\"],\"footer.anOpenSourceTestApplication\":[\"一个用于测量国际化库对包大小、加载时间和应用反应性实际影响的开源测试应用程序。\"],\"footer.builtWith\":[\"i18n Benchmark — 开源项目。使用 React, Vite & TanStack Router 构建。\"],\"footer.contact\":[\"联系我们\"],\"footer.contributing\":[\"贡献\"],\"footer.github\":[\"GitHub\"],\"footer.i18nBenchmark\":[\"i18n Benchmark\"],\"footer.methodology\":[\"方法论\"],\"footer.resources\":[\"资源\"],\"header.blog\":[\"博客\"],\"header.careers\":[\"职业生涯\"],\"header.contact\":[\"联系我们\"],\"header.faq\":[\"常见问题\"],\"header.goToGithub\":[\"访问 GitHub\"],\"header.home\":[\"首页\"],\"header.i18nBench\":[\"i18n Bench\"],\"header.methodology\":[\"方法论\"],\"header.mockPages\":[\"模拟页面\"],\"header.pricing\":[\"价格\"],\"header.products\":[\"产品\"],\"header.settings\":[\"设置\"],\"header.team\":[\"团队\"],\"hero.aTestApplicationDesignedTo\":[\"一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。\"],\"hero.title\":[\"i18n Benchmark\"],\"hero.viewResults\":[\"查看结果\"],\"mockBanner\":[\"⚠️ 此页面包含仅用于基准测试目的的模拟数据。它与任何真实的商业或服务无关。\"],\"open-positions.applyNow\":[\"立即申请\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"使用 React、TypeScript 和 Vite 构建和维护我们的基准测试控制面板及开发者工具。\"],\"open-positions.engineering\":[\"工程部\"],\"open-positions.fullTime\":[\"全职\"],\"open-positions.openPositions\":[\"开放职位\"],\"open-positions.remote\":[\"远程办公\"],\"open-positions.seniorFrontendEngineer\":[\"高级前端工程师\"],\"pricing-header.chooseThePlanThatFits\":[\"选择适合您团队的计划。无隐藏费用。\"],\"pricing-header.simpleTransparentPricing\":[\"简单透明的定价\"],\"pricing-tiers.allLibraries\":[\"所有库\"],\"pricing-tiers.auditLogs\":[\"审计日志\"],\"pricing-tiers.benchmarkRunPerDay\":[\"每天 \",[\"runs\"],\" 次基准测试\"],\"pricing-tiers.ciIntegration\":[\"CI 集成\"],\"pricing-tiers.communitySupport\":[\"社区支持\"],\"pricing-tiers.contactSales\":[\"联系销售\"],\"pricing-tiers.customPrice\":[\"定制价格\"],\"pricing-tiers.customSlas\":[\"定制 SLA\"],\"pricing-tiers.dedicatedAccountManager\":[\"专属客户经理\"],\"pricing-tiers.enterprise\":[\"企业版\"],\"pricing-tiers.everythingInPro\":[\"Pro 版的所有功能\"],\"pricing-tiers.forever\":[\"永久\"],\"pricing-tiers.getStarted\":[\"开始使用\"],\"pricing-tiers.historicalData\":[\"历史数据\"],\"pricing-tiers.librariesNumber\":[[\"libs\"],\" 个库\"],\"pricing-tiers.month\":[\"/月\"],\"pricing-tiers.onPremiseOption\":[\"本地部署选项\"],\"pricing-tiers.price0\":[\"¥ 0\"],\"pricing-tiers.price29\":[\"¥ 299\"],\"pricing-tiers.prioritySupport\":[\"优先支持\"],\"pricing-tiers.privateResults\":[\"私有结果\"],\"pricing-tiers.pro\":[\"Pro\"],\"pricing-tiers.publicResults\":[\"公开结果\"],\"pricing-tiers.ssoSaml\":[\"SSO 和 SAML\"],\"pricing-tiers.starter\":[\"入门版 (Starter)\"],\"pricing-tiers.trainingSessions\":[\"培训课程\"],\"pricing-tiers.unlimitedRuns\":[\"无限次运行\"],\"products-header.subtitle\":[\"用于简化国际化工作流程的工具和服务。\"],\"products-header.title\":[\"产品\"],\"products.benchmarkCli\":[\"基准测试 CLI\"],\"products.benchmarkCliDesc\":[\"从终端在本地运行基准测试。支持自定义配置和 CI 集成。\"],\"products.benchmarkCloud\":[\"基准测试云\"],\"products.benchmarkCloudDesc\":[\"自动化云端基准测试，包含历史追踪、警报和团队控制面板。\"],\"products.benchmarkEnterprise\":[\"基准测试企业版\"],\"products.benchmarkEnterpriseDesc\":[\"本地部署选项，包含 SSO、审计日志、定制 SLA 和专属支持。\"],\"products.bundleOptimizer\":[\"包优化器 (Bundle Optimizer)\"],\"products.bundleOptimizerDesc\":[\"通过 tree-shaking 和代码拆分来分析并优化生产环境的 i18n 包。\"],\"products.contactUs\":[\"联系我们\"],\"products.free\":[\"免费\"],\"products.learnMore\":[\"了解更多\"],\"products.migrationAssistant\":[\"迁移助手\"],\"products.migrationAssistantDesc\":[\"基于 AI 的工具，帮助在 i18n 库之间迁移代码库，实现零停机时间。\"],\"products.price.benchmarkCloud\":[\"¥ 299/月\"],\"products.price.bundleOptimizer\":[\"¥ 499/月\"],\"products.price.migrationAssistant\":[\"¥ 999 (一次性支付)\"],\"products.price.translationQa\":[\"¥ 159/月\"],\"products.translationQa\":[\"翻译 QA\"],\"products.translationQaDesc\":[\"针对缺失翻译、复数问题和上下文错误的自动化质量检查。\"],\"results-table.bundleSize\":[\"包大小\"],\"results-table.lazyLoading\":[\"延迟加载\"],\"results-table.library\":[\"库\"],\"results-table.lookupTime\":[\"查找时间\"],\"results-table.sampleResults\":[\"样本结果\"],\"settings-header.subtitle\":[\"管理您的账户设置和偏好。\"],\"settings-header.title\":[\"设置\"],\"settings.apiAccess.apiKey\":[\"API 密钥\"],\"settings.apiAccess.copy\":[\"复制\"],\"settings.apiAccess.title\":[\"API 访问\"],\"settings.apiAccess.useKeyDescription\":[\"使用此密钥以编程方式访问基准测试 API。\"],\"settings.footer.cancel\":[\"取消\"],\"settings.footer.saveChanges\":[\"保存更改\"],\"settings.preferences.arabic\":[\"阿拉伯语\"],\"settings.preferences.chinese\":[\"中文\"],\"settings.preferences.darkMode\":[\"暗黑模式\"],\"settings.preferences.defaultLanguage\":[\"默认语言\"],\"settings.preferences.emailNotifications\":[\"邮件通知\"],\"settings.preferences.english\":[\"英语\"],\"settings.preferences.french\":[\"法语\"],\"settings.preferences.german\":[\"德语\"],\"settings.preferences.japanese\":[\"日语\"],\"settings.preferences.receiveWeeklyReports\":[\"接收每周基准测试报告\"],\"settings.preferences.spanish\":[\"西班牙语\"],\"settings.preferences.title\":[\"偏好设置\"],\"settings.preferences.useDarkScheme\":[\"使用深色方案\"],\"settings.profile.displayName\":[\"显示名称\"],\"settings.profile.email\":[\"电子邮箱\"],\"settings.profile.title\":[\"个人资料\"],\"team-header.subtitle\":[\"认识 i18n Benchmark 背后的人。一支多元化的团队，因对出色开发者工具的共同热爱而团结在一起。\"],\"team-header.title\":[\"我们的团队\"],\"team.aishaBio\":[\"热衷于开发者体验和教育。React Conf、JSConf 和 i18nNext 的讲师。\"],\"team.aishaPatel\":[\"艾莎·帕特尔 (Aisha Patel)\"],\"team.communityManager\":[\"社区经理\"],\"team.dataAnalyst\":[\"数据分析师\"],\"team.developerAdvocate\":[\"开发者倡导者 (Developer Advocate)\"],\"team.elenaBio\":[\"管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\"],\"team.elenaKowalski\":[\"艾琳娜·科瓦尔斯基 (Elena Kowalski)\"],\"team.founderLeadEngineer\":[\"创始人兼首席工程师\"],\"team.fullStackDeveloper\":[\"全栈开发人员\"],\"team.marcusBio\":[\"擅长 JavaScript 性能优化和基准测试方法论。曾在 Vercel 工作。\"],\"team.marcusWeber\":[\"马库斯·韦伯 (Marcus Weber)\"],\"team.performanceEngineer\":[\"性能工程师\"],\"team.sarahBio\":[\"前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。\"],\"team.sarahChen\":[\"莎拉·陈 (Sarah Chen)\"],\"team.tomasBio\":[\"维护我们的基准测试基础设施和 CI/CD 管道。Lingui 的开源贡献者。\"],\"team.tomasRodriguez\":[\"托马斯·罗德里格斯 (Tomas Rodriguez)\"],\"team.yukiBio\":[\"确保所有基准测试结果的统计严谨性。毕业于麻省理工学院 (MIT)，拥有应用统计学博士学位。\"],\"team.yukiTanaka\":[\"田中雪 (Yuki Tanaka)\"],\"theme-toggle.themeAuto\":[\"主题：自动\"],\"theme-toggle.themeDark\":[\"主题：暗黑\"],\"theme-toggle.themeLight\":[\"主题：明亮\"],\"theme-toggle.themeModeAutoSystemClick\":[\"主题模式：自动（系统）。点击切换到明亮模式。\"],\"theme-toggle.themeModeDarkClick\":[\"主题模式：暗黑。点击切换到自动（系统）模式。\"],\"theme-toggle.themeModeLightClick\":[\"主题模式：明亮。点击切换到暗黑模式。\"],\"understanding-impact.cacheInvalidation\":[\"缓存失效：\"],\"understanding-impact.cacheInvalidationDesc\":[\"更新翻译需要缓存失效策略，以确保用户收到最新内容，而无需重新下载未更改的块。\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"基于上下文的架构在语言环境更改时会导致级联重新渲染，因为即使特定键没有更改，每个消费者都会收到通知。\"],\"understanding-impact.duringServerSideRenderingThe\":[\"在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"未翻译内容闪烁 (FOUC)：\"],\"understanding-impact.flashOfUntranslatedContentFoucDesc\":[\"用户在块到达之前可能会短暂看到翻译键或回退语言。\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会持有对整个字典的引用。这意味着：\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"将翻译拆分为每个路由或每个命名空间的块可以显著减少初始负载。但它引入了新的挑战：\"],\"understanding-impact.theJsonMustBeParsed\":[\"JSON 必须在每次页面加载时进行解析 —— 阻塞主线程。\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"动态加载的权衡\"],\"understanding-impact.thisTestAppProvidesA\":[\"此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的权重、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。\"],\"understanding-impact.understandingTheImpact\":[\"理解影响\"],\"understanding-impact.waterfallRequests\":[\"瀑布流请求：\"],\"understanding-impact.waterfallRequestsDesc\":[\"由于应用必须先加载并确定语言环境，然后才能获取相应的块，因此您增加了网络往返时间。\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"本基准测试测量什么\"],\"understanding-impact.whyASingleLargeJson\":[\"为什么单个大型 JSON 会损害性能\"],\"what-we-measure.bundleSizeImpact\":[\"包大小影响\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 —— 即页面变得可交互的时刻。\"],\"what-we-measure.howFastTheAppCan\":[\"应用在运行时从一种语言切换到另一种语言的速度 —— 包括获取新翻译、重新渲染组件和更新 DOM。\"],\"what-we-measure.howMuchExtraTimeThe\":[\"库为 React 渲染周期增加了多少额外时间。通过单个上下文提供者注入翻译的库可能会在整个组件树中导致不必要的重新渲染。\"],\"what-we-measure.hydrationCost\":[\"注水成本\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"延迟加载有效性\"],\"what-we-measure.localeSwitchSpeed\":[\"语言切换速度\"],\"what-we-measure.renderingOverhead\":[\"渲染开销\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。\"],\"what-we-measure.whatWeMeasure\":[\"我们测量什么\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"按路由或命名空间拆分翻译是否真的减少了初始负载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。\"],\"why-it-matters.bundleSize\":[\"包大小\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"将大型 JSON 字典连接到每个组件会创建一个隐藏的依赖：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加庞大的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。\"],\"why-it-matters.dynamicLoading\":[\"动态加载\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。\"],\"why-it-matters.renderingHydration\":[\"渲染与注水\"],\"why-it-matters.theBundleIsTheData\":[\"包是发送给全球每个用户的数据。更大的包意味着更长的下载时间——特别是在许多地区常见的慢速 3G 连接上。i18n 库的权重差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。\"],\"why-it-matters.whyTheseMetricsMatter\":[\"为什么这些指标很重要\"]}"),
	ja: JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使い勝手に焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリがバンドルにどれだけの重量を加えるのか？数千の翻訳キーが読み込まれたとき、レンダリングにどのような影響を与えるのか？遅延読み込みは実際に役立つのか、それとも単にコストをシフトさせているだけなのか？このベンチマークは、実際のデータでそれらの疑問に答えます。\"],\"about-grid.methodology\":[\"方法論\"],\"about-grid.theSame10PageApp\":[\"同じ10ページのアプリがライブラリごとに1回構築されます。rollup-plugin-visualizerを介してプロダクションバンドルを測定し、ロード指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダリング時間をキャプチャします。すべてのテストは、再現可能な結果を確実にするために、一貫したハードウェアを使用してCI上で実行されます。\"],\"about-grid.whyThisExists\":[\"なぜこれが存在するのか\"],\"about-header.aboutThisBenchmark\":[\"このベンチマークについて\"],\"about-header.thisIsAnOpenSource\":[\"これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、同一の条件下でさまざまなi18nライブラリを統合して測定できる、現実的なマルチページのReactアプリを提供することです。\"],\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"i18nコミュニティからの洞察、チュートリアル、分析。\"],\"blog-list.aStepByStepGuide\":[\"50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。\"],\"blog-list.aTransparentLookAtOur\":[\"テスト環境、統計手法、再現性を含む、私たちのベンチマーク方法論の透明性のある考察。\"],\"blog-list.anOverviewOfTheCurrent\":[\"トレンド、新興パターン、コミュニティの好みを網羅した、Reactにおける現在のi18nエコシステムの概要。\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"ベンチマーク方法論：私たちのテスト方法\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"2026年のi18nライブラリ比較：ディープダイブ\"],\"blog-list.february12026\":[\"2026年2月1日\"],\"blog-list.february152026\":[\"2026年2月15日\"],\"blog-list.february282026\":[\"2026年2月28日\"],\"blog-list.howToReduceYourI18n\":[\"i18nバンドルを60％削減する方法\"],\"blog-list.january202026\":[\"2026年1月20日\"],\"blog-list.march82026\":[\"2026年3月8日\"],\"blog-list.migratingFromReactI18nextTo\":[\"react-i18nextからLinguiへの移行\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"遅延読み込み、コード分割、コンパイル時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。\"],\"blog-list.readMore\":[\"続きを読む →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"Server Componentsとi18n：何が変わるのか？\"],\"blog-list.theStateOfInternationalizationIn\":[\"Reactにおける国際化の現状\"],\"blog-list.weTested12DifferentInternationalization\":[\"パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。\"],\"careers-benefits.competitivePay\":[\"競争力のある報酬\"],\"careers-benefits.openSourceTime\":[\"オープンソースの時間\"],\"careers-benefits.topOfMarketCompensation\":[\"市場トップクラスの報酬\"],\"careers-benefits.twentyPercentTime\":[\"OSSのための20%の時間\"],\"careers-header.joinOurMissionToImprove\":[\"国際化エコシステムを改善するという私たちのミッションに参加してください。私たちは、影響、透明性、継続的な学習を重視するリモートファーストのチームです。\"],\"careers-header.title\":[\"採用情報\"],\"contact-form.bugReport\":[\"バグ報告\"],\"contact-form.contribution\":[\"貢献\"],\"contact-form.describeYourQuestionOrIdea\":[\"質問やアイデアの詳細を記入してください...\"],\"contact-form.email\":[\"メールアドレス\"],\"contact-form.message\":[\"メッセージ\"],\"contact-form.methodologyQuestion\":[\"方法論に関する質問\"],\"contact-form.newBenchmarkIdea\":[\"新しいベンチマークのアイデア\"],\"contact-form.other\":[\"その他\"],\"contact-form.sendMessage\":[\"メッセージを送信\"],\"contact-form.topic\":[\"トピック\"],\"contact-form.yourName\":[\"お名前\"],\"contact-header.getInTouch\":[\"お問い合わせ\"],\"contact-header.haveIdeasFoundABug\":[\"アイデアがある、バグを見つけた、またはベンチマークを提供したいですか？こちらまでご連絡ください：\"],\"faq-header.subtitle\":[\"i18nベンチマークについて知っておくべきすべてのこと。\"],\"faq-header.title\":[\"よくある質問\"],\"faq-list.canISubmitMyOwn\":[\"独自のベンチマークを提出できますか？\"],\"faq-list.doYouOfferConsultingServices\":[\"コンサルティングサービスは提供していますか？\"],\"faq-list.howAreBenchmarksConducted\":[\"ベンチマークはどのように行われますか？\"],\"faq-list.howCanIContribute\":[\"どのように貢献できますか？\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"ベンチマークはどのくらいの頻度で更新されますか？\"],\"faq-list.isTheDataReliable\":[\"データは信頼できますか？\"],\"faq-list.thereAreManyWaysTo\":[\"貢献する方法はたくさんあります。ベンチマークの提出、ドキュメントの改善、バグ報告、新しい指標の提案、またはプロジェクトのスポンサーなどです。詳細については、GitHubリポジトリをご覧ください。\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"ウォームアップ実行、外れ値検出、信頼区間を含む厳密な統計手法に従います。すべての生データは、完全な透明性のために分析と共に公開されます。\"],\"faq-list.weReRunAllBenchmarks\":[\"各ライブラリの最新の安定バージョンに対して毎週すべてのベンチマークを再実行します。メジャーバージョンのリリースにより、即時の再ベンチマークサイクルが開始されます。\"],\"faq-list.weRunStandardizedTestsIn\":[\"一貫したハードウェアを使用して、隔離された環境で標準化されたテストを実行します。各ベンチマークは統計的な有意性を確保するために複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。\"],\"faq-list.weSupportReactI18nextReact\":[\"react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。\"],\"faq-list.whatIsI18nBenchmark\":[\"i18n Benchmarkとは何ですか？\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"i18n Benchmarkは、JavaScriptおよびReactアプリケーション向けの国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者エクスペリエンスを測定および比較するオープンソースのベンチマークスイートです。\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"現在、どのライブラリがサポートされていますか？\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"はい！コミュニティからのベンチマーク提出を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。私たちのチームが適格な提出物をレビューしてマージします。\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"はい、エンタープライズプランには、i18nソリューションを評価するチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、および制約に基づいてカスタマイズされた推奨事項を提供できます。\"],\"footer.anOpenSourceTestApplication\":[\"国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーション。\"],\"footer.builtWith\":[\"i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築されています。\"],\"footer.contact\":[\"お問い合わせ\"],\"footer.contributing\":[\"貢献する\"],\"footer.github\":[\"GitHub\"],\"footer.i18nBenchmark\":[\"i18n Benchmark\"],\"footer.methodology\":[\"方法論\"],\"footer.resources\":[\"リソース\"],\"header.blog\":[\"ブログ\"],\"header.careers\":[\"採用情報\"],\"header.contact\":[\"お問い合わせ\"],\"header.faq\":[\"FAQ\"],\"header.goToGithub\":[\"GitHubへ\"],\"header.home\":[\"ホーム\"],\"header.i18nBench\":[\"i18n Bench\"],\"header.methodology\":[\"方法論\"],\"header.mockPages\":[\"モックページ\"],\"header.pricing\":[\"料金\"],\"header.products\":[\"製品\"],\"header.settings\":[\"設定\"],\"header.team\":[\"チーム\"],\"hero.aTestApplicationDesignedTo\":[\"国際化ライブラリがバンドルサイズ、ロード性能、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。\"],\"hero.title\":[\"i18n Benchmark\"],\"hero.viewResults\":[\"結果を見る\"],\"mockBanner\":[\"⚠️ このページには、ベンチマーク目的のみのモックデータが含まれています。実際のビジネスやサービスとは関係ありません。\"],\"open-positions.applyNow\":[\"今すぐ応募\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールを構築および維持します。\"],\"open-positions.engineering\":[\"エンジニアリング\"],\"open-positions.fullTime\":[\"正社員\"],\"open-positions.openPositions\":[\"募集中の職種\"],\"open-positions.remote\":[\"リモート\"],\"open-positions.seniorFrontendEngineer\":[\"シニアフロントエンドエンジニア\"],\"pricing-header.chooseThePlanThatFits\":[\"チームに最適なプランをお選びください。隠れた費用はありません。\"],\"pricing-header.simpleTransparentPricing\":[\"シンプルで透明な価格設定\"],\"pricing-tiers.allLibraries\":[\"すべてのライブラリ\"],\"pricing-tiers.auditLogs\":[\"監査ログ\"],\"pricing-tiers.benchmarkRunPerDay\":[\"1日あたり \",[\"runs\"],\" 回のベンチマーク実行\"],\"pricing-tiers.ciIntegration\":[\"CI統合\"],\"pricing-tiers.communitySupport\":[\"コミュニティサポート\"],\"pricing-tiers.contactSales\":[\"営業に問い合わせる\"],\"pricing-tiers.customPrice\":[\"カスタム\"],\"pricing-tiers.customSlas\":[\"カスタムSLA\"],\"pricing-tiers.dedicatedAccountManager\":[\"専任のアカウントマネージャー\"],\"pricing-tiers.enterprise\":[\"エンタープライズ\"],\"pricing-tiers.everythingInPro\":[\"Proプランのすべて\"],\"pricing-tiers.forever\":[\"永久\"],\"pricing-tiers.getStarted\":[\"始める\"],\"pricing-tiers.historicalData\":[\"履歴データ\"],\"pricing-tiers.librariesNumber\":[[\"libs\"],\" 個のライブラリ\"],\"pricing-tiers.month\":[\"／月\"],\"pricing-tiers.onPremiseOption\":[\"オンプレミスオプション\"],\"pricing-tiers.price0\":[\"¥0\"],\"pricing-tiers.price29\":[\"¥3,500\"],\"pricing-tiers.prioritySupport\":[\"優先サポート\"],\"pricing-tiers.privateResults\":[\"非公開結果\"],\"pricing-tiers.pro\":[\"Pro\"],\"pricing-tiers.publicResults\":[\"公開結果\"],\"pricing-tiers.ssoSaml\":[\"SSO ＆ SAML\"],\"pricing-tiers.starter\":[\"スターター\"],\"pricing-tiers.trainingSessions\":[\"トレーニングセッション\"],\"pricing-tiers.unlimitedRuns\":[\"無制限の実行\"],\"products-header.subtitle\":[\"国際化ワークフローを合理化するためのツールとサービス。\"],\"products-header.title\":[\"製品\"],\"products.benchmarkCli\":[\"ベンチマークCLI\"],\"products.benchmarkCliDesc\":[\"ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。\"],\"products.benchmarkCloud\":[\"ベンチマーククラウド\"],\"products.benchmarkCloudDesc\":[\"履歴追跡、アラート、チームダッシュボードを備えた自動化されたクラウドベースのベンチマーク。\"],\"products.benchmarkEnterprise\":[\"ベンチマークエンタープライズ\"],\"products.benchmarkEnterpriseDesc\":[\"SSO、監査ログ、カスタムSLA、専任のサポートを備えたオンプレミス展開。\"],\"products.bundleOptimizer\":[\"バンドルオプティマイザー\"],\"products.bundleOptimizerDesc\":[\"ツリーシェイキングとコード分割を使用して、プロダクション用にi18nバンドルを分析および最適化します。\"],\"products.contactUs\":[\"お問い合わせ\"],\"products.free\":[\"無料\"],\"products.learnMore\":[\"詳細を見る\"],\"products.migrationAssistant\":[\"移行アシスタント\"],\"products.migrationAssistantDesc\":[\"ダウンタイムなしでi18nライブラリ間のコードベース移行を支援するAI搭載ツール。\"],\"products.price.benchmarkCloud\":[\"¥3,500／月\"],\"products.price.bundleOptimizer\":[\"¥6,000／月\"],\"products.price.migrationAssistant\":[\"¥12,000（一度きり）\"],\"products.price.translationQa\":[\"¥1,900／月\"],\"products.translationQa\":[\"翻訳QA\"],\"products.translationQaDesc\":[\"翻訳の欠落、複数形の問題、コンテキストエラーに関する自動品質チェック。\"],\"results-table.bundleSize\":[\"バンドルサイズ\"],\"results-table.lazyLoading\":[\"遅延読み込み\"],\"results-table.library\":[\"ライブラリ\"],\"results-table.lookupTime\":[\"ルックアップ時間\"],\"results-table.sampleResults\":[\"サンプル結果\"],\"settings-header.subtitle\":[\"アカウントの設定と構成を管理します。\"],\"settings-header.title\":[\"設定\"],\"settings.apiAccess.apiKey\":[\"APIキー\"],\"settings.apiAccess.copy\":[\"コピー\"],\"settings.apiAccess.title\":[\"APIアクセス\"],\"settings.apiAccess.useKeyDescription\":[\"ベンチマークAPIにプログラムでアクセスするには、このキーを使用してください。\"],\"settings.footer.cancel\":[\"キャンセル\"],\"settings.footer.saveChanges\":[\"変更を保存\"],\"settings.preferences.arabic\":[\"アラビア語\"],\"settings.preferences.chinese\":[\"中国語\"],\"settings.preferences.darkMode\":[\"ダークモード\"],\"settings.preferences.defaultLanguage\":[\"デフォルトの言語\"],\"settings.preferences.emailNotifications\":[\"メール通知\"],\"settings.preferences.english\":[\"英語\"],\"settings.preferences.french\":[\"フランス語\"],\"settings.preferences.german\":[\"ドイツ語\"],\"settings.preferences.japanese\":[\"日本語\"],\"settings.preferences.receiveWeeklyReports\":[\"毎週のベンチマークレポートを受け取る\"],\"settings.preferences.spanish\":[\"スペイン語\"],\"settings.preferences.title\":[\"設定\"],\"settings.preferences.useDarkScheme\":[\"ダークカラースキームを使用する\"],\"settings.profile.displayName\":[\"表示名\"],\"settings.profile.email\":[\"メールアドレス\"],\"settings.profile.title\":[\"プロフィール\"],\"team-header.subtitle\":[\"i18n Benchmarkを支える人々を紹介します。素晴らしい開発者ツールに対する共通の情熱によって結ばれた多様なチームです。\"],\"team-header.title\":[\"私たちのチーム\"],\"team.aishaBio\":[\"開発者エクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、i18nNextのスピーカー。\"],\"team.aishaPatel\":[\"アイシャ・パテル\"],\"team.communityManager\":[\"コミュニティマネージャー\"],\"team.dataAnalyst\":[\"データアナリスト\"],\"team.developerAdvocate\":[\"デベロッパーアドボケイト\"],\"team.elenaBio\":[\"コミュニティへの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴があります。\"],\"team.elenaKowalski\":[\"エレナ・コワルスキー\"],\"team.founderLeadEngineer\":[\"創設者 兼 リードエンジニア\"],\"team.fullStackDeveloper\":[\"フルスタックデベロッパー\"],\"team.marcusBio\":[\"JavaScriptのパフォーマンス最適化とベンチマーク方法論を専門としています。以前はVercelに在籍。\"],\"team.marcusWeber\":[\"マルクス・ウェーバー\"],\"team.performanceEngineer\":[\"パフォーマンスエンジニア\"],\"team.sarahBio\":[\"元Googleエンジニアで、大規模な国際化システムの構築に10年の経験があります。\"],\"team.sarahChen\":[\"サラ・チェン\"],\"team.tomasBio\":[\"ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。\"],\"team.tomasRodriguez\":[\"トマス・ロドリゲス\"],\"team.yukiBio\":[\"すべてのベンチマーク結果における統計的厳密さを保証します。MITで応用統計学の博士号を取得。\"],\"team.yukiTanaka\":[\"田中ゆき\"],\"theme-toggle.themeAuto\":[\"テーマ：自動\"],\"theme-toggle.themeDark\":[\"テーマ：ダーク\"],\"theme-toggle.themeLight\":[\"テーマ：ライト\"],\"theme-toggle.themeModeAutoSystemClick\":[\"テーマモード：自動（システム）。クリックしてライトモードに切り替えます。\"],\"theme-toggle.themeModeDarkClick\":[\"テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。\"],\"theme-toggle.themeModeLightClick\":[\"テーマモード：ライト。クリックしてダークモードに切り替えます。\"],\"understanding-impact.cacheInvalidation\":[\"キャッシュの無効化:\"],\"understanding-impact.cacheInvalidationDesc\":[\"翻訳を更新するには、変更されていないチャンクを再ダウンロードせずにユーザーが新しいコンテンツを確実に取得できるようにするための、キャッシュ無効化戦略が必要です。\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的な再レンダリングが発生する可能性があります。\"],\"understanding-impact.duringServerSideRenderingThe\":[\"サーバーサイドレンダリング中、辞書全体が HTML ペイロードにシリアライズされ、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"未翻訳コンテンツのフラッシュ (FOUC):\"],\"understanding-impact.flashOfUntranslatedContentFoucDesc\":[\"チャンクが到着する前に、ユーザーに翻訳キーやフォールバック言語が一瞬表示されることがあります。\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"多くの i18n ライブラリは、React コンテキストを介して提供される単一の JSON オブジェクトに翻訳を保存します。このオブジェクトが巨大（数千のキー）な場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"翻訳をルートごと、または名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：\"],\"understanding-impact.theJsonMustBeParsed\":[\"JSON はページ読み込みのたびにパースされる必要があり、メインスレッドをブロックします。\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"動的読み込みのトレードオフ\"],\"understanding-impact.thisTestAppProvidesA\":[\"このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツのパースとレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。\"],\"understanding-impact.understandingTheImpact\":[\"影響を理解する\"],\"understanding-impact.waterfallRequests\":[\"ウォーターフォールリクエスト:\"],\"understanding-impact.waterfallRequestsDesc\":[\"アプリはまずロードし、ロケールを決定してから、適切なチャンクをフェッチする必要があるため、ネットワークのラウンドトリップが追加されます。\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"このベンチマークが測定するもの\"],\"understanding-impact.whyASingleLargeJson\":[\"ひとつの巨大な JSON がパフォーマンスを低下させる理由\"],\"what-we-measure.bundleSizeImpact\":[\"バンドルサイズへの影響\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"SSR中、翻訳データはHTMLにシリアライズされます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。\"],\"what-we-measure.howFastTheAppCan\":[\"実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるか。これには、新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。\"],\"what-we-measure.howMuchExtraTimeThe\":[\"ライブラリがReactのレンダリングサイクルに加える追加時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。\"],\"what-we-measure.hydrationCost\":[\"ハイドレーションコスト\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"遅延読み込みの有効性\"],\"what-we-measure.localeSwitchSpeed\":[\"ロケール切り替え速度\"],\"what-we-measure.renderingOverhead\":[\"レンダリングオーバーヘッド\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"i18nライブラリとその翻訳ファイルが含まれる際にユーザーに送信される追加のJavaScriptバイト。これは低速なネットワークでのダウンロード時間に直接影響します。\"],\"what-we-measure.whatWeMeasure\":[\"私たちが測定するもの\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"ルートまたは名前空間ごとに翻訳を分割することが実際に初期ロードを削減するのか、そしてどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）をもたらすのか。\"],\"why-it-matters.bundleSize\":[\"バンドルサイズ\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更がツリー全体の再レンダリングを引き起こす可能性があります。SSRのハイドレーション中、巨大な翻訳オブジェクトのパースとアタッチにより、ページがインタラクティブになるまでの遅延が発生し、Time to Interactive (TTI) に直接影響します。\"],\"why-it-matters.dynamicLoading\":[\"動的ローディング\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"すべての翻訳を事前に読み込むと、初期のペイロードが過負荷になります。動的（遅延）読み込みは、ルートまたは名前空間ごとに翻訳を分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、未翻訳コンテンツのフラッシュ、キャッシュの複雑化といった独自のトレードオフがあります。両方の戦略を測定することが不可欠です。\"],\"why-it-matters.renderingHydration\":[\"レンダリングとハイドレーション\"],\"why-it-matters.theBundleIsTheData\":[\"バンドルは、世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。特に多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリはその重量が劇的に異なります。ランタイムコードだけで数キロバイトから数十キロバイト、さらに翻訳ファイル自体が加わります。\"],\"why-it-matters.whyTheseMetricsMatter\":[\"これらの指標が重要な理由\"]}"),
	ko: JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"i18n 라이브러리를 선택하는 것은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API의 사용 편의성에 중점을 두지만, 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 무게를 더하는가? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 주는가? 지연 로딩이 실제로 도움이 되는가 아니면 단순히 비용을 나중으로 미루는 것인가? 이 벤치마크는 실제 데이터를 사용하여 이러한 질문에 답합니다.\"],\"about-grid.methodology\":[\"방법론\"],\"about-grid.theSame10PageApp\":[\"동일한 10페이지 앱이 라이브러리마다 한 번씩 구축됩니다. rollup-plugin-visualizer를 통해 프로덕션 번들을 측정하고, 로딩 지표에 대한 Lighthouse 감사를 실행하며, React Profiler를 사용하여 로케일 전환 중 렌더링 시간을 캡처합니다. 모든 테스트는 재현 가능한 결과를 보장하기 위해 일관된 하드웨어의 CI에서 실행됩니다.\"],\"about-grid.whyThisExists\":[\"이것이 존재하는 이유\"],\"about-header.aboutThisBenchmark\":[\"이 벤치마크에 대하여\"],\"about-header.thisIsAnOpenSource\":[\"이것은 제품이나 회사가 아닌 오픈 소스 테스트 애플리케이션입니다. 유일한 목적은 동일한 조건에서 서로 다른 i18n 라이브러리를 통합하고 측정할 수 있는 현실적인 다중 페이지 React 앱을 제공하는 것입니다.\"],\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"i18n 커뮤니티의 인사이트, 튜토리얼 및 분석.\"],\"blog-list.aStepByStepGuide\":[\"50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 방법에 대한 단계별 가이드.\"],\"blog-list.aTransparentLookAtOur\":[\"테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰.\"],\"blog-list.anOverviewOfTheCurrent\":[\"동향, 신흥 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 생태계 개요입니다.\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"벤치마크 방법론: 테스트 방법\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"2026년 i18n 라이브러리 비교: 심층 분석\"],\"blog-list.february12026\":[\"2026년 1월 1일\"],\"blog-list.february152026\":[\"2026년 2월 15일\"],\"blog-list.february282026\":[\"2026년 2월 28일\"],\"blog-list.howToReduceYourI18n\":[\"i18n 번들을 60% 줄이는 방법\"],\"blog-list.january202026\":[\"2026년 1월 20일\"],\"blog-list.march82026\":[\"2026년 3월 8일\"],\"blog-list.migratingFromReactI18nextTo\":[\"react-i18next에서 Lingui로 마이그레이션하기\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"React Server Components는 국제화를 위한 새로운 패턴을 도입합니다. 그 의미 및 모범 사례를 살펴봅니다.\"],\"blog-list.readMore\":[\"더 읽어보기 →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"Server Components 및 i18n: 무엇이 달라지나요?\"],\"blog-list.theStateOfInternationalizationIn\":[\"React 국제화의 현주소\"],\"blog-list.weTested12DifferentInternationalization\":[\"저희는 성능, 번들 크기 및 DX 전반에 걸쳐 12개의 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과가 여기 있습니다.\"],\"careers-benefits.competitivePay\":[\"경쟁력 있는 급여\"],\"careers-benefits.openSourceTime\":[\"오픈 소스 활동 기회\"],\"careers-benefits.topOfMarketCompensation\":[\"시장 최고 수준의 보상\"],\"careers-benefits.twentyPercentTime\":[\"OSS를 위한 20%의 시간\"],\"careers-header.joinOurMissionToImprove\":[\"국제화 생태계를 개선하기 위한 우리의 사명에 동참하세요. 저희는 영향력, 투명성 및 지속적인 학습을 소중히 여기는 원격 근무 우선 팀입니다.\"],\"careers-header.title\":[\"채용\"],\"contact-form.bugReport\":[\"버그 보고\"],\"contact-form.contribution\":[\"기여\"],\"contact-form.describeYourQuestionOrIdea\":[\"질문이나 아이디어를 설명해주세요...\"],\"contact-form.email\":[\"이메일\"],\"contact-form.message\":[\"메시지\"],\"contact-form.methodologyQuestion\":[\"방법론 질문\"],\"contact-form.newBenchmarkIdea\":[\"새로운 벤치마크 아이디어\"],\"contact-form.other\":[\"기타\"],\"contact-form.sendMessage\":[\"메시지 보내기\"],\"contact-form.topic\":[\"주제\"],\"contact-form.yourName\":[\"이름\"],\"contact-header.getInTouch\":[\"연락하기\"],\"contact-header.haveIdeasFoundABug\":[\"아이디어가 있거나 버그를 발견했나요? 아니면 벤치마크를 기여하고 싶으신가요? 다음 주소로 연락주세요.\"],\"faq-header.subtitle\":[\"i18n 벤치마크에 대해 알아야 할 모든 것.\"],\"faq-header.title\":[\"자주 묻는 질문\"],\"faq-list.canISubmitMyOwn\":[\"함께 벤치마크를 제출할 수 있나요?\"],\"faq-list.doYouOfferConsultingServices\":[\"컨설팅 서비스를 제공하나요?\"],\"faq-list.howAreBenchmarksConducted\":[\"벤치마크는 어떻게 진행되나요?\"],\"faq-list.howCanIContribute\":[\"어떻게 기여할 수 있나요?\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"벤치마크는 얼마나 자주 업데이트되나요?\"],\"faq-list.isTheDataReliable\":[\"데이터를 신뢰할 수 있나요?\"],\"faq-list.thereAreManyWaysTo\":[\"벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 등 기여할 수 있는 방법은 많습니다. 자세한 내용은 GitHub 리포지토리를 방문하세요.\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"저희는 웜업(warm-up) 실행, 이상치 감지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 모든 원시 데이터는 완전한 투명성을 위해 분석과 함께 공개됩니다.\"],\"faq-list.weReRunAllBenchmarks\":[\"매주 각 라이브러리의 최신 안정 버전에 대해 모든 벤치마크를 다시 실행합니다. 메이저 버전 릴리스는 즉각적인 재벤치마크 주기를 트리거합니다.\"],\"faq-list.weRunStandardizedTestsIn\":[\"일관된 하드웨어를 사용하여 격리된 환경에서 표준화된 테스트를 실행합니다. 각 벤치마크는 통계적 유의성을 보장하기 위해 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 리포지토리에서 공개적으로 사용할 수 있습니다.\"],\"faq-list.weSupportReactI18nextReact\":[\"react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 및 Tolgee를 지원합니다.\"],\"faq-list.whatIsI18nBenchmark\":[\"i18n Benchmark란 무엇인가요?\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"i18n Benchmark는 JavaScript 및 React 애플리케이션을 위한 국제화 라이브러리의 성능, 번들 크기 및 개발자 경험을 측정하고 비교하는 오픈 소스 벤치마킹 제품군입니다.\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"현재 어떤 라이브러리가 지원되나요?\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"네! 커뮤니티의 벤치마크 제출을 환영합니다. 리포지토리를 포크하고 기여 가이드에 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출해 주세요. 저희 팀이 제출물을 검토하고 병합할 것입니다.\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"예, 엔터프라이즈 플랜에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다.\"],\"footer.anOpenSourceTestApplication\":[\"국제화 라이브러리가 번들 크기, 로딩 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.\"],\"footer.builtWith\":[\"i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.\"],\"footer.contact\":[\"문의하기\"],\"footer.contributing\":[\"기여하기\"],\"footer.github\":[\"GitHub\"],\"footer.i18nBenchmark\":[\"i18n Benchmark\"],\"footer.methodology\":[\"방법론\"],\"footer.resources\":[\"리소스\"],\"header.blog\":[\"블로그\"],\"header.careers\":[\"채용\"],\"header.contact\":[\"문의하기\"],\"header.faq\":[\"FAQ\"],\"header.goToGithub\":[\"GitHub으로 이동\"],\"header.home\":[\"홈\"],\"header.i18nBench\":[\"i18n Bench\"],\"header.methodology\":[\"방법론\"],\"header.mockPages\":[\"모의 페이지\"],\"header.pricing\":[\"요금\"],\"header.products\":[\"제품\"],\"header.settings\":[\"설정\"],\"header.team\":[\"팀\"],\"hero.aTestApplicationDesignedTo\":[\"국제화 라이브러리가 번들 크기, 로딩 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.\"],\"hero.title\":[\"i18n Benchmark\"],\"hero.viewResults\":[\"결과 보기\"],\"mockBanner\":[\"⚠️ 이 페이지에는 벤치마킹 목적으로만 사용되는 모의 데이터가 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.\"],\"open-positions.applyNow\":[\"지금 지원하기\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드와 개발자 도구를 구축하고 유지 관리합니다.\"],\"open-positions.engineering\":[\"엔지니어링\"],\"open-positions.fullTime\":[\"정규직\"],\"open-positions.openPositions\":[\"채용 중인 포지션\"],\"open-positions.remote\":[\"원격 근무\"],\"open-positions.seniorFrontendEngineer\":[\"시니어 프론트엔드 엔지니어\"],\"pricing-header.chooseThePlanThatFits\":[\"팀에 맞는 플랜을 선택하세요. 숨겨진 수수료는 없습니다.\"],\"pricing-header.simpleTransparentPricing\":[\"심플하고 투명한 요금제\"],\"pricing-tiers.allLibraries\":[\"모든 라이브러리\"],\"pricing-tiers.auditLogs\":[\"감사 로그\"],\"pricing-tiers.benchmarkRunPerDay\":[\"하루 \",[\"runs\"],\"회 벤치마크 실행\"],\"pricing-tiers.ciIntegration\":[\"CI 통합\"],\"pricing-tiers.communitySupport\":[\"커뮤니티 지원\"],\"pricing-tiers.contactSales\":[\"영업팀에 문의\"],\"pricing-tiers.customPrice\":[\"맞춤형\"],\"pricing-tiers.customSlas\":[\"맞춤형 SLA\"],\"pricing-tiers.dedicatedAccountManager\":[\"전담 계정 관리자\"],\"pricing-tiers.enterprise\":[\"엔터프라이즈\"],\"pricing-tiers.everythingInPro\":[\"Pro의 모든 기능\"],\"pricing-tiers.forever\":[\"평생\"],\"pricing-tiers.getStarted\":[\"시작하기\"],\"pricing-tiers.historicalData\":[\"기록 데이터\"],\"pricing-tiers.librariesNumber\":[[\"libs\"],\"개 라이브러리\"],\"pricing-tiers.month\":[\"/월\"],\"pricing-tiers.onPremiseOption\":[\"온프레미스 옵션\"],\"pricing-tiers.price0\":[\"₩0\"],\"pricing-tiers.price29\":[\"₩29.000\"],\"pricing-tiers.prioritySupport\":[\"우선 지원\"],\"pricing-tiers.privateResults\":[\"비공개 결과\"],\"pricing-tiers.pro\":[\"Pro\"],\"pricing-tiers.publicResults\":[\"공개 결과\"],\"pricing-tiers.ssoSaml\":[\"SSO 및 SAML\"],\"pricing-tiers.starter\":[\"스타터\"],\"pricing-tiers.trainingSessions\":[\"교육 세션\"],\"pricing-tiers.unlimitedRuns\":[\"제한 없는 실행\"],\"products-header.subtitle\":[\"국제화 워크플로를 합리화하기 위한 도구 및 서비스.\"],\"products-header.title\":[\"제품\"],\"products.benchmarkCli\":[\"벤치마크 CLI\"],\"products.benchmarkCliDesc\":[\"터미널에서 로컬로 벤치마크를 실행하세요. 맞춤형 구성 및 CI 통합을 지원합니다.\"],\"products.benchmarkCloud\":[\"벤치마크 클라우드\"],\"products.benchmarkCloudDesc\":[\"기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹 서비스입니다.\"],\"products.benchmarkEnterprise\":[\"벤치마크 엔터프라이즈\"],\"products.benchmarkEnterpriseDesc\":[\"SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포 옵션입니다.\"],\"products.bundleOptimizer\":[\"번들 옵티마이저\"],\"products.bundleOptimizerDesc\":[\"트리 쉐이킹 및 코드 분할을 사용하여 프로덕션용 i18n 번들을 분석하고 최적화합니다.\"],\"products.contactUs\":[\"문의하기\"],\"products.free\":[\"무료\"],\"products.learnMore\":[\"더 알아보기\"],\"products.migrationAssistant\":[\"마이그레이션 어시스턴트\"],\"products.migrationAssistantDesc\":[\"다운타임 없이 i18n 라이브러리 간의 코드베이스 마이그레이션을 돕는 AI 기반 도구입니다.\"],\"products.price.benchmarkCloud\":[\"₩29.000/월\"],\"products.price.bundleOptimizer\":[\"₩49.000/월\"],\"products.price.migrationAssistant\":[\"₩99.000 (1회)\"],\"products.price.translationQa\":[\"₩19.000/월\"],\"products.translationQa\":[\"번역 QA\"],\"products.translationQaDesc\":[\"누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동 품질 점검입니다.\"],\"results-table.bundleSize\":[\"번들 크기\"],\"results-table.lazyLoading\":[\"지연 로딩\"],\"results-table.library\":[\"라이브러리\"],\"results-table.lookupTime\":[\"조회 시간\"],\"results-table.sampleResults\":[\"샘플 결과\"],\"settings-header.subtitle\":[\"계정 설정 및 구성을 관리하세요.\"],\"settings-header.title\":[\"설정\"],\"settings.apiAccess.apiKey\":[\"API 키\"],\"settings.apiAccess.copy\":[\"복사\"],\"settings.apiAccess.title\":[\"API 액세스\"],\"settings.apiAccess.useKeyDescription\":[\"벤치마킹 API에 프로그래밍 방식으로 액세스하려면 이 키를 사용하세요.\"],\"settings.footer.cancel\":[\"취소\"],\"settings.footer.saveChanges\":[\"변경 사항 저장\"],\"settings.preferences.arabic\":[\"아랍어\"],\"settings.preferences.chinese\":[\"중국어\"],\"settings.preferences.darkMode\":[\"다크 모드\"],\"settings.preferences.defaultLanguage\":[\"기본 언어\"],\"settings.preferences.emailNotifications\":[\"이메일 알림\"],\"settings.preferences.english\":[\"영어\"],\"settings.preferences.french\":[\"프랑스어\"],\"settings.preferences.german\":[\"독일어\"],\"settings.preferences.japanese\":[\"일본어\"],\"settings.preferences.receiveWeeklyReports\":[\"주간 벤치마크 보고서 수신\"],\"settings.preferences.spanish\":[\"스페인어\"],\"settings.preferences.title\":[\"환경 설정\"],\"settings.preferences.useDarkScheme\":[\"다크 테마 사용\"],\"settings.profile.displayName\":[\"표시 이름\"],\"settings.profile.email\":[\"이메일\"],\"settings.profile.title\":[\"프로필\"],\"team-header.subtitle\":[\"i18n Benchmark를 만드는 사람들을 만나보세요. 훌륭한 개발자 도구에 대한 열정으로 뭉친 다양한 팀입니다.\"],\"team-header.title\":[\"우리 팀\"],\"team.aishaBio\":[\"개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.\"],\"team.aishaPatel\":[\"아이샤 파텔\"],\"team.communityManager\":[\"커뮤니티 매니저\"],\"team.dataAnalyst\":[\"데이터 분석가\"],\"team.developerAdvocate\":[\"데벨로퍼 애드보케이트\"],\"team.elenaBio\":[\"커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 분야의 배경을 가지고 있습니다.\"],\"team.elenaKowalski\":[\"엘레나 코발스키\"],\"team.founderLeadEngineer\":[\"설립자 및 리드 엔지니어\"],\"team.fullStackDeveloper\":[\"풀스택 개발자\"],\"team.marcusBio\":[\"JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전 Vercel 근무.\"],\"team.marcusWeber\":[\"마르쿠스 베버\"],\"team.performanceEngineer\":[\"성능 엔지니어\"],\"team.sarahBio\":[\"구글 엔지니어 출신으로 대규모 국제화 시스템 구축 분야에서 10년의 경력을 보유하고 있습니다.\"],\"team.sarahChen\":[\"사라 첸\"],\"team.tomasBio\":[\"벤치마킹 인프라와 CI/CD 파이프라인을 유지 관리합니다. Lingui의 오픈 소스 기여자입니다.\"],\"team.tomasRodriguez\":[\"토마스 로드리게스\"],\"team.yukiBio\":[\"모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.\"],\"team.yukiTanaka\":[\"유키 타나카\"],\"theme-toggle.themeAuto\":[\"테마: 자동\"],\"theme-toggle.themeDark\":[\"테마: 다크\"],\"theme-toggle.themeLight\":[\"테마: 라이트\"],\"theme-toggle.themeModeAutoSystemClick\":[\"테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.\"],\"theme-toggle.themeModeDarkClick\":[\"테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.\"],\"theme-toggle.themeModeLightClick\":[\"테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.\"],\"understanding-impact.cacheInvalidation\":[\"캐시 무효화:\"],\"understanding-impact.cacheInvalidationDesc\":[\"번역을 업데이트하려면 사용자가 변경되지 않은 청크를 다시 다운로드하지 않고도 최신 콘텐츠를 받을 수 있도록 하는 캐시 무효화 전략이 필요합니다.\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"컨텍스트 기반 아키텍처는 로케일이 변경될 때 연쇄적인 리렌더링을 일으킬 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자에게 알림이 가기 때문입니다.\"],\"understanding-impact.duringServerSideRenderingThe\":[\"서버 사이드 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어, 다운로드 및 수화가 필요한 문서 크기가 증가합니다.\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"번역되지 않은 콘텐츠의 깜빡임 (FOUC):\"],\"understanding-impact.flashOfUntranslatedContentFoucDesc\":[\"사용자는 청크가 도착하기 전에 번역 키나 폴백 언어를 잠시 볼 수 있습니다.\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 컴포넌트는 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:\"],\"understanding-impact.theJsonMustBeParsed\":[\"JSON은 모든 페이지 로드 시 파싱되어야 하며, 이는 메인 스레드를 차단합니다.\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"동적 로딩의 트레이드오프\"],\"understanding-impact.thisTestAppProvidesA\":[\"이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 그리고 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.\"],\"understanding-impact.understandingTheImpact\":[\"영향 이해하기\"],\"understanding-impact.waterfallRequests\":[\"워터폴(Waterfall) 요청:\"],\"understanding-impact.waterfallRequestsDesc\":[\"앱이 먼저 로드되고 로케일을 결정한 다음 적절한 청크를 가져와야 하므로 네트워크 왕복이 추가됩니다.\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"이 벤치마크가 측정하는 것\"],\"understanding-impact.whyASingleLargeJson\":[\"단일 대형 JSON이 성능을 저하시키는 이유\"],\"what-we-measure.bundleSizeImpact\":[\"번들 크기 영향\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대용량 사전은 HTML 페이로드를 증가시키고 페이지가 상호작용 가능해지는 순간인 수화 속도를 늦춥니다.\"],\"what-we-measure.howFastTheAppCan\":[\"실행 중에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환될 수 있는지를 측정합니다. 여기에는 새 번역 가져오기, 컴포넌트 리렌더링 및 DOM 업데이트가 포함됩니다.\"],\"what-we-measure.howMuchExtraTimeThe\":[\"라이브러리가 React의 렌더링 주기에 추가하는 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 컴포넌트 트리 전체에서 불필요한 리렌더링을 일으킬 수 있습니다.\"],\"what-we-measure.hydrationCost\":[\"수화 비용\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"지연 로딩 효과\"],\"what-we-measure.localeSwitchSpeed\":[\"로케일 전환 속도\"],\"what-we-measure.renderingOverhead\":[\"렌더링 오버헤드\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.\"],\"what-we-measure.whatWeMeasure\":[\"측정 항목\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)를 유발하는지 측정합니다.\"],\"why-it-matters.bundleSize\":[\"번들 크기\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"모든 컴포넌트에 대규모 JSON 사전(dictionary)을 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트의 모든 변경 사항은 전체 트리에서 리렌더링을 유발할 수 있습니다. SSR 수화 단계에서 방대한 번역 객체를 파싱하고 연결하면 페이지가 상호작용 가능해지는 시간까지 지연이 발생하며, 이는 Time to Interactive(TTI)에 직접적인 영향을 미칩니다.\"],\"why-it-matters.dynamicLoading\":[\"동적 로딩\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 내용만 전송합니다. 그러나 지연 로딩은 워터폴 요청, 번역되지 않은 콘텐츠의 깜빡임(FOUC), 캐시 복잡성 등 자체적인 트레이드오프를 수반합니다. 두 전략을 모두 측정하는 것이 필수적입니다.\"],\"why-it-matters.renderingHydration\":[\"렌더링 및 수화(Hydration)\"],\"why-it-matters.theBundleIsTheData\":[\"번들은 전 세계 모든 사용자에게 전송되는 데이터를 나타냅니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 발생하는 느린 3G 연결에서 더욱 그렇습니다. i18n 라이브러리는 런타임 코드만으로도 수 킬로바이트에서 수십 킬로바이트까지 무게가 크게 다르며, 여기에 번역 파일 자체가 추가됩니다.\"],\"why-it-matters.whyTheseMetricsMatter\":[\"이 지표가 중요한 이유\"]}"),
	ru: JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточены на эргономике API, но немногие измеряют стоимость производительности: какой вес библиотека добавляет в бандл? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Помогает ли ленивая загрузка на самом деле или просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.\"],\"about-grid.methodology\":[\"Методология\"],\"about-grid.theSame10PageApp\":[\"Одно и то же 10-страничное приложение создается для каждой библиотеки. Мы измеряем производственный бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для регистрации времени рендеринга при переключении языков. Все тесты выполняются в CI на одинаковом оборудовании для обеспечения воспроизводимых результатов.\"],\"about-grid.whyThisExists\":[\"Почему это существует\"],\"about-header.aboutThisBenchmark\":[\"Об этом бенчмарке\"],\"about-header.thisIsAnOpenSource\":[\"Это открытое приложение для тестирования, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное приложение на React, в котором можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.\"],\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"Инсайты, руководства и анализ от сообщества i18n.\"],\"blog-list.aStepByStepGuide\":[\"Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.\"],\"blog-list.aTransparentLookAtOur\":[\"Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\"],\"blog-list.anOverviewOfTheCurrent\":[\"Обзор текущей экосистемы i18n в React, охватывающий тенденции, возникающие паттерны и предпочтения сообщества.\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"Методология бенчмарка: как мы тестируем\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"Сравнение библиотек i18n в 2026 году: глубокое погружение\"],\"blog-list.february12026\":[\"1 февраля 2026 года\"],\"blog-list.february152026\":[\"15 февраля 2026 года\"],\"blog-list.february282026\":[\"28 февраля 2026 года\"],\"blog-list.howToReduceYourI18n\":[\"Как уменьшить бандл i18n на 60%\"],\"blog-list.january202026\":[\"20 января 2026 года\"],\"blog-list.march82026\":[\"8 марта 2026 года\"],\"blog-list.migratingFromReactI18nextTo\":[\"Миграция с react-i18next на Lingui\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"Практические стратегии для оптимизации бандлов перевода, включая ленивую загрузку, разделение кода и оптимизации во время компиляции.\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.\"],\"blog-list.readMore\":[\"Читать далее →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"Server Components и i18n: что меняется?\"],\"blog-list.theStateOfInternationalizationIn\":[\"Состояние интернационализации в React\"],\"blog-list.weTested12DifferentInternationalization\":[\"Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.\"],\"careers-benefits.competitivePay\":[\"Конкурентная зарплата\"],\"careers-benefits.openSourceTime\":[\"Время на Open Source\"],\"careers-benefits.topOfMarketCompensation\":[\"Зарплата выше рыночной\"],\"careers-benefits.twentyPercentTime\":[\"20% времени на OSS\"],\"careers-header.joinOurMissionToImprove\":[\"Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы команда, работающая удаленно, которая ценит влияние, прозрачность и непрерывное обучение.\"],\"careers-header.title\":[\"Карьера\"],\"contact-form.bugReport\":[\"Отчет об ошибке\"],\"contact-form.contribution\":[\"Вклад\"],\"contact-form.describeYourQuestionOrIdea\":[\"Опишите ваш вопрос или идею...\"],\"contact-form.email\":[\"Электронная почта\"],\"contact-form.message\":[\"Сообщение\"],\"contact-form.methodologyQuestion\":[\"Вопрос по методологии\"],\"contact-form.newBenchmarkIdea\":[\"Новая идея для бенчмарка\"],\"contact-form.other\":[\"Другое\"],\"contact-form.sendMessage\":[\"Отправить сообщение\"],\"contact-form.topic\":[\"Тема\"],\"contact-form.yourName\":[\"Ваше имя\"],\"contact-header.getInTouch\":[\"Свяжитесь с нами\"],\"contact-header.haveIdeasFoundABug\":[\"Есть идеи, нашли баг или хотите предложить бенчмарк? Свяжитесь с нами по адресу\"],\"faq-header.subtitle\":[\"Всё, что вам нужно знать о бенчмарке i18n.\"],\"faq-header.title\":[\"Часто задаваемые вопросы\"],\"faq-list.canISubmitMyOwn\":[\"Могу ли я предложить свой бенчмарк?\"],\"faq-list.doYouOfferConsultingServices\":[\"Предоставляете ли вы консалтинговые услуги?\"],\"faq-list.howAreBenchmarksConducted\":[\"Как проводятся бенчмарки?\"],\"faq-list.howCanIContribute\":[\"Как я могу внести свой вклад?\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"Как часто обновляются бенчмарки?\"],\"faq-list.isTheDataReliable\":[\"Надежны ли данные?\"],\"faq-list.thereAreManyWaysTo\":[\"Есть много способов внести свой вклад: предложить бенчмарки, улучшить документацию, сообщить о багах, предложить новые метрики или стать спонсором проекта. Посетите наш репозиторий GitHub для получения подробной информации.\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с анализом для полной прозрачности.\"],\"faq-list.weReRunAllBenchmarks\":[\"Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выпуски основных версий запускают немедленный цикл повторного тестирования.\"],\"faq-list.weRunStandardizedTestsIn\":[\"Мы проводим стандартизированные тесты в изолированных средах с использованием одинакового оборудования. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории GitHub.\"],\"faq-list.weSupportReactI18nextReact\":[\"Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.\"],\"faq-list.whatIsI18nBenchmark\":[\"Что такое i18n Benchmark?\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"i18n Benchmark — это открытый набор тестов, который измеряет и сравнивает производительность, размер пакета и опыт разработчика библиотек интернационализации для приложений на JavaScript и React.\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"Какие библиотеки поддерживаются в данный момент?\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"Да! Мы приветствуем бенчмарки от сообщества. Пожалуйста, сделайте форк репозитория, добавьте свой бенчмарк, следуя нашему руководству по вкладу, и отправьте pull request. Наша команда рассмотрит и примет подходящие предложения.\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"Да, наш план Enterprise включает консультационные часы для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации на основе вашего конкретного случая использования, масштаба и ограничений.\"],\"footer.anOpenSourceTestApplication\":[\"Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.\"],\"footer.builtWith\":[\"i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.\"],\"footer.contact\":[\"Контакт\"],\"footer.contributing\":[\"Вклад\"],\"footer.github\":[\"GitHub\"],\"footer.i18nBenchmark\":[\"i18n Benchmark\"],\"footer.methodology\":[\"Методология\"],\"footer.resources\":[\"Ресурсы\"],\"header.blog\":[\"Блог\"],\"header.careers\":[\"Карьера\"],\"header.contact\":[\"Контакт\"],\"header.faq\":[\"FAQ\"],\"header.goToGithub\":[\"Перейти на GitHub\"],\"header.home\":[\"Главная\"],\"header.i18nBench\":[\"i18n Bench\"],\"header.methodology\":[\"Методология\"],\"header.mockPages\":[\"Тестовые страницы\"],\"header.pricing\":[\"Цены\"],\"header.products\":[\"Продукты\"],\"header.settings\":[\"Настройки\"],\"header.team\":[\"Команда\"],\"hero.aTestApplicationDesignedTo\":[\"Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.\"],\"hero.title\":[\"i18n Benchmark\"],\"hero.viewResults\":[\"Посмотреть результаты\"],\"mockBanner\":[\"⚠️ Эта страница содержит имитационные данные только для целей тестирования. Она не связана с каким-либо реальным бизнесом или услугой.\"],\"open-positions.applyNow\":[\"Подать заявку\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"Создание и поддержка наших дашбордов для бенчмаркинга и инструментов для разработчиков на React, TypeScript и Vite.\"],\"open-positions.engineering\":[\"Инженерия\"],\"open-positions.fullTime\":[\"Полная занятость\"],\"open-positions.openPositions\":[\"Открытые вакансии\"],\"open-positions.remote\":[\"Удаленная работа\"],\"open-positions.seniorFrontendEngineer\":[\"Старший фронтенд-инженер\"],\"pricing-header.chooseThePlanThatFits\":[\"Выберите план, который подходит вашей команде. Никаких скрытых комиссий.\"],\"pricing-header.simpleTransparentPricing\":[\"Простое и прозрачное ценообразование\"],\"pricing-tiers.allLibraries\":[\"Все библиотеки\"],\"pricing-tiers.auditLogs\":[\"Логи аудита\"],\"pricing-tiers.benchmarkRunPerDay\":[[\"runs\"],\" прогонов бенчмарков в день\"],\"pricing-tiers.ciIntegration\":[\"Интеграция с CI\"],\"pricing-tiers.communitySupport\":[\"Сообщество поддержки\"],\"pricing-tiers.contactSales\":[\"Связаться с отделом продаж\"],\"pricing-tiers.customPrice\":[\"Индивидуальная цена\"],\"pricing-tiers.customSlas\":[\"Кастомные SLA\"],\"pricing-tiers.dedicatedAccountManager\":[\"Персональный менеджер\"],\"pricing-tiers.enterprise\":[\"Enterprise\"],\"pricing-tiers.everythingInPro\":[\"Всё, что есть в Pro\"],\"pricing-tiers.forever\":[\"навсегда\"],\"pricing-tiers.getStarted\":[\"Начать\"],\"pricing-tiers.historicalData\":[\"Исторические данные\"],\"pricing-tiers.librariesNumber\":[\"Библиотек: \",[\"libs\"]],\"pricing-tiers.month\":[\"/мес\"],\"pricing-tiers.onPremiseOption\":[\"Вариант локального развертывания\"],\"pricing-tiers.price0\":[\"0 ₽\"],\"pricing-tiers.price29\":[\"3 500 ₽\"],\"pricing-tiers.prioritySupport\":[\"Приоритетная поддержка\"],\"pricing-tiers.privateResults\":[\"Приватные результаты\"],\"pricing-tiers.pro\":[\"Pro\"],\"pricing-tiers.publicResults\":[\"Публичные результаты\"],\"pricing-tiers.ssoSaml\":[\"SSO и SAML\"],\"pricing-tiers.starter\":[\"Starter\"],\"pricing-tiers.trainingSessions\":[\"Обучающие сессии\"],\"pricing-tiers.unlimitedRuns\":[\"Неограниченное количество запусков\"],\"products-header.subtitle\":[\"Инструменты и услуги для оптимизации вашего рабочего процесса интернационализации.\"],\"products-header.title\":[\"Продукты\"],\"products.benchmarkCli\":[\"Benchmark CLI\"],\"products.benchmarkCliDesc\":[\"Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.\"],\"products.benchmarkCloud\":[\"Benchmark Cloud\"],\"products.benchmarkCloudDesc\":[\"Автоматизированный облачный бенчмаркинг с историческим отслеживанием, оповещениями и командными дашбордами.\"],\"products.benchmarkEnterprise\":[\"Benchmark Enterprise\"],\"products.benchmarkEnterpriseDesc\":[\"Локальное развертывание с использованием SSO, логов аудита, кастомных SLA и персональной поддержки.\"],\"products.bundleOptimizer\":[\"Bundle Optimizer\"],\"products.bundleOptimizerDesc\":[\"Анализируйте и оптимизируйте свои i18n бандлы для продакшна с помощью tree-shaking и разделения кода.\"],\"products.contactUs\":[\"Свяжитесь с нами\"],\"products.free\":[\"Бесплатно\"],\"products.learnMore\":[\"Узнать больше\"],\"products.migrationAssistant\":[\"Помощник по миграции\"],\"products.migrationAssistantDesc\":[\"Инструмент на базе ИИ для помощи в миграции кодовых баз между библиотеками i18n без простоев.\"],\"products.price.benchmarkCloud\":[\"3 500 ₽ / мес\"],\"products.price.bundleOptimizer\":[\"6 000 ₽ / мес\"],\"products.price.migrationAssistant\":[\"12 000 ₽ (единоразово)\"],\"products.price.translationQa\":[\"1 900 ₽ / мес\"],\"products.translationQa\":[\"Translation QA\"],\"products.translationQaDesc\":[\"Автоматические проверки качества на предмет отсутствующих переводов, проблем с формами множественного числа и контекстных ошибок.\"],\"results-table.bundleSize\":[\"Размер бандла\"],\"results-table.lazyLoading\":[\"Ленивая загрузка\"],\"results-table.library\":[\"Библиотека\"],\"results-table.lookupTime\":[\"Время поиска\"],\"results-table.sampleResults\":[\"Примеры результатов\"],\"settings-header.subtitle\":[\"Управляйте настройками и предпочтениями своего аккаунта.\"],\"settings-header.title\":[\"Настройки\"],\"settings.apiAccess.apiKey\":[\"Ключ API\"],\"settings.apiAccess.copy\":[\"Копировать\"],\"settings.apiAccess.title\":[\"Доступ к API\"],\"settings.apiAccess.useKeyDescription\":[\"Используйте этот ключ для программного доступа к API бенчмаркинга.\"],\"settings.footer.cancel\":[\"Отмена\"],\"settings.footer.saveChanges\":[\"Сохранить изменения\"],\"settings.preferences.arabic\":[\"Арабский\"],\"settings.preferences.chinese\":[\"Китайский\"],\"settings.preferences.darkMode\":[\"Темная тема\"],\"settings.preferences.defaultLanguage\":[\"Язык по умолчанию\"],\"settings.preferences.emailNotifications\":[\"Email-уведомления\"],\"settings.preferences.english\":[\"Английский\"],\"settings.preferences.french\":[\"Французский\"],\"settings.preferences.german\":[\"Немецкий\"],\"settings.preferences.japanese\":[\"Японский\"],\"settings.preferences.receiveWeeklyReports\":[\"Получать еженедельные отчеты о бенчмарках\"],\"settings.preferences.spanish\":[\"Испанский\"],\"settings.preferences.title\":[\"Предпочтения\"],\"settings.preferences.useDarkScheme\":[\"Использовать темную схему\"],\"settings.profile.displayName\":[\"Отображаемое имя\"],\"settings.profile.email\":[\"Электронная почта\"],\"settings.profile.title\":[\"Профиль\"],\"team-header.subtitle\":[\"Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к отличным инструментам для разработчиков.\"],\"team-header.title\":[\"Наша команда\"],\"team.aishaBio\":[\"Увлечена опытом разработчиков и образованием. Спикер React Conf, JSConf и i18nNext.\"],\"team.aishaPatel\":[\"Айша Патель\"],\"team.communityManager\":[\"Комьюнити-менеджер\"],\"team.dataAnalyst\":[\"Аналитик данных\"],\"team.developerAdvocate\":[\"Developer Advocate\"],\"team.elenaBio\":[\"Управляет вкладом сообщества, партнерствами и мероприятиями. Имеет опыт управления открытым исходным кодом.\"],\"team.elenaKowalski\":[\"Елена Ковальски\"],\"team.founderLeadEngineer\":[\"Основатель и ведущий инженер\"],\"team.fullStackDeveloper\":[\"Full Stack разработчик\"],\"team.marcusBio\":[\"Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.\"],\"team.marcusWeber\":[\"Маркус Вебер\"],\"team.performanceEngineer\":[\"Инженер по производительности\"],\"team.sarahBio\":[\"Бывший инженер Google с 10-летним опытом построения крупномасштабных систем интернационализации.\"],\"team.sarahChen\":[\"Сара Чен\"],\"team.tomasBio\":[\"Поддерживает нашу инфраструктуру бенчмаркинга и конвейеры CI/CD. Автор открытого кода для Lingui.\"],\"team.tomasRodriguez\":[\"Томас Родригес\"],\"team.yukiBio\":[\"Обеспечивает статистическую строгость всех результатов бенчмарков. Доктор прикладной статистики (MIT).\"],\"team.yukiTanaka\":[\"Юки Танака\"],\"theme-toggle.themeAuto\":[\"Тема: Авто\"],\"theme-toggle.themeDark\":[\"Тема: Темная\"],\"theme-toggle.themeLight\":[\"Тема: Светлая\"],\"theme-toggle.themeModeAutoSystemClick\":[\"Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.\"],\"theme-toggle.themeModeDarkClick\":[\"Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.\"],\"theme-toggle.themeModeLightClick\":[\"Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.\"],\"understanding-impact.cacheInvalidation\":[\"Инвалидация кэша:\"],\"understanding-impact.cacheInvalidationDesc\":[\"Обновление переводов требует стратегии инвалидации кэша, гарантирующей получение пользователями нового контента без повторной загрузки неизмененных чанков.\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.\"],\"understanding-impact.duringServerSideRenderingThe\":[\"Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"Мерцание непереведенного контента (FOUC):\"],\"understanding-impact.flashOfUntranslatedContentFoucDesc\":[\"Пользователи могут кратковременно видеть ключи перевода или язык по умолчанию до загрузки чанка.\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:\"],\"understanding-impact.theJsonMustBeParsed\":[\"JSON должен парситься при каждой загрузке страницы — блокируя основной поток.\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"Компромиссы динамической загрузки\"],\"understanding-impact.thisTestAppProvidesA\":[\"Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.\"],\"understanding-impact.understandingTheImpact\":[\"Понимание влияния\"],\"understanding-impact.waterfallRequests\":[\"Каскадные запросы (Waterfall requests):\"],\"understanding-impact.waterfallRequestsDesc\":[\"Поскольку приложение сначала должно загрузиться и определить локаль перед получением соответствующего чанка, вы добавляете сетевые задержки (round-trips).\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"Что измеряет этот бенчмарк\"],\"understanding-impact.whyASingleLargeJson\":[\"Почему один большой JSON может снизить производительность\"],\"what-we-measure.bundleSizeImpact\":[\"Влияние на размер бандла\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML и замедляют гидратацию — момент, когда страница становится интерактивной.\"],\"what-we-measure.howFastTheAppCan\":[\"Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.\"],\"what-we-measure.howMuchExtraTimeThe\":[\"Сколько дополнительного времени библиотека добавляет в цикл рендеринга React. Библиотеки, которые внедряют переводы через одного провайдера контекста, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.\"],\"what-we-measure.hydrationCost\":[\"Стоимость гидратации\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"Эффективность ленивой загрузки\"],\"what-we-measure.localeSwitchSpeed\":[\"Скорость переключения языка\"],\"what-we-measure.renderingOverhead\":[\"Затраты на рендеринг\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.\"],\"what-we-measure.whatWeMeasure\":[\"Что мы измеряем\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования).\"],\"why-it-matters.bundleSize\":[\"Размер бандла\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода добавляют задержку до того, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).\"],\"why-it-matters.dynamicLoading\":[\"Динамическая загрузка\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно для текущей страницы. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfall), мерцание непереведенного контента и сложность кэширования. Измерение обеих стратегий необходимо.\"],\"why-it-matters.renderingHydration\":[\"Рендеринг и гидратация\"],\"why-it-matters.theBundleIsTheData\":[\"Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой размер бандла означает более долгое время загрузки, особенно при медленном 3G-соединении, характерном для многих регионов. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт рантайм-кода, плюс сами файлы переводов.\"],\"why-it-matters.whyTheseMetricsMatter\":[\"Почему эти показатели важны\"]}")
};
function getMessages(locale) {
	return messageModules[locale] || messageModules["en"];
}
function initLingui(locale, messages) {
	const lingui = setupI18n();
	lingui.load(locale, messages);
	lingui.activate(locale);
	return lingui;
}
function AppProviders({ children }) {
	const locale = useParams().locale ?? "en";
	const messages = useMemo(() => getMessages(locale), [locale]);
	const i18n = useMemo(() => initLingui(locale, messages), [locale, messages]);
	const [renderStart] = useState(() => typeof performance !== "undefined" ? performance.now() : 0);
	useLayoutEffect(() => {
		recordRenderTime("AppRoot", renderStart);
	}, [renderStart]);
	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return jsx(I18nProvider, {
		i18n,
		children
	});
}
function Wrapper({ children }) {
	return jsx(AppProviders, { children });
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(TeamGrid, {}) });
}
export { Wrapped as default };
