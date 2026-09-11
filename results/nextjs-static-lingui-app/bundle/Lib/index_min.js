import { createContext as e, useContext as t, useEffect as n, useLayoutEffect as r, useMemo as i, useState as a } from "react";
import { jsx as o } from "react/jsx-runtime";
import { jsxDEV as s } from "react/jsx-dev-runtime";
import { useParams as c } from "next/navigation";
import { messages as l } from "../locales/en/messages.mjs";
import { messages as u } from "../locales/fr/messages.mjs";
import { messages as d } from "../locales/es/messages.mjs";
import { messages as f } from "../locales/de/messages.mjs";
import { messages as p } from "../locales/it/messages.mjs";
import { messages as m } from "../locales/pt/messages.mjs";
import { messages as h } from "../locales/zh/messages.mjs";
import { messages as g } from "../locales/ja/messages.mjs";
import { messages as _ } from "../locales/ko/messages.mjs";
import { messages as v } from "../locales/ru/messages.mjs";
var y = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), b = ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), x = y(((e, t) => {
	(function(e, n) {
		typeof define == "function" && define.amd ? define([], n) : typeof t == "object" && t.exports ? t.exports = n() : e.moo = n();
	})(e, function() {
		var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = typeof (/* @__PURE__ */ RegExp()).sticky == "boolean";
		function r(e) {
			return e && t.call(e) === "[object RegExp]";
		}
		function i(e) {
			return e && typeof e == "object" && !r(e) && !Array.isArray(e);
		}
		function a(e) {
			return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, function(e) {
				return e === "-" ? "\\x2d" : "\\" + e;
			});
		}
		function o(e) {
			return RegExp("|" + e).exec("").length - 1;
		}
		function s(e) {
			return "(" + e + ")";
		}
		function c(e) {
			return e.length ? "(?:" + e.map(function(e) {
				return "(?:" + e + ")";
			}).join("|") + ")" : "(?!)";
		}
		function l(e) {
			if (typeof e == "string") return "(?:" + a(e) + ")";
			if (r(e)) {
				if (e.ignoreCase) throw Error("RegExp /i flag not allowed");
				if (e.global) throw Error("RegExp /g flag is implied");
				if (e.sticky) throw Error("RegExp /y flag is implied");
				if (e.multiline) throw Error("RegExp /m flag is implied");
				return e.source;
			}
			throw Error("Not a pattern: " + e);
		}
		function u(e, t) {
			return e.length > t ? e : Array(t - e.length + 1).join(" ") + e;
		}
		function d(e, t) {
			for (var n = e.length, r = 0;;) {
				var i = e.lastIndexOf("\n", n - 1);
				if (i === -1 || (r++, n = i, r === t) || n === 0) break;
			}
			var a = r < t ? 0 : n + 1;
			return e.substring(a).split("\n");
		}
		function f(e) {
			for (var t = Object.getOwnPropertyNames(e), n = [], r = 0; r < t.length; r++) {
				var a = t[r], o = e[a], s = [].concat(o);
				if (a === "include") {
					for (var c = 0; c < s.length; c++) n.push({ include: s[c] });
					continue;
				}
				var l = [];
				s.forEach(function(e) {
					i(e) ? (l.length && n.push(m(a, l)), n.push(m(a, e)), l = []) : l.push(e);
				}), l.length && n.push(m(a, l));
			}
			return n;
		}
		function p(e) {
			for (var t = [], n = 0; n < e.length; n++) {
				var r = e[n];
				if (r.include) {
					for (var i = [].concat(r.include), a = 0; a < i.length; a++) t.push({ include: i[a] });
					continue;
				}
				if (!r.type) throw Error("Rule has no type: " + JSON.stringify(r));
				t.push(m(r.type, r));
			}
			return t;
		}
		function m(t, n) {
			if (i(n) || (n = { match: n }), n.include) throw Error("Matching rules cannot also include states");
			var a = {
				defaultType: t,
				lineBreaks: !!n.error || !!n.fallback,
				pop: !1,
				next: null,
				push: null,
				error: !1,
				fallback: !1,
				value: null,
				type: null,
				shouldThrow: !1
			};
			for (var o in n) e.call(n, o) && (a[o] = n[o]);
			if (typeof a.type == "string" && t !== a.type) throw Error("Type transform cannot be a string (type '" + a.type + "' for token '" + t + "')");
			var s = a.match;
			return a.match = Array.isArray(s) ? s : s ? [s] : [], a.match.sort(function(e, t) {
				return r(e) && r(t) ? 0 : r(t) ? -1 : r(e) ? 1 : t.length - e.length;
			}), a;
		}
		function h(e) {
			return Array.isArray(e) ? p(e) : f(e);
		}
		var g = m("error", {
			lineBreaks: !0,
			shouldThrow: !0
		});
		function _(e, t) {
			for (var i = null, a = Object.create(null), u = !0, d = null, f = [], p = [], m = 0; m < e.length; m++) e[m].fallback && (u = !1);
			for (var m = 0; m < e.length; m++) {
				var h = e[m];
				if (h.include) throw Error("Inheritance is not allowed in stateless lexers");
				if (h.error || h.fallback) {
					if (i) throw !h.fallback == !i.fallback ? Error("Multiple " + (h.fallback ? "fallback" : "error") + " rules not allowed (for token '" + h.defaultType + "')") : Error("fallback and error are mutually exclusive (for token '" + h.defaultType + "')");
					i = h;
				}
				var _ = h.match.slice();
				if (u) for (; _.length && typeof _[0] == "string" && _[0].length === 1;) {
					var v = _.shift();
					a[v.charCodeAt(0)] = h;
				}
				if (h.pop || h.push || h.next) {
					if (!t) throw Error("State-switching options are not allowed in stateless lexers (for token '" + h.defaultType + "')");
					if (h.fallback) throw Error("State-switching options are not allowed on fallback tokens (for token '" + h.defaultType + "')");
				}
				if (_.length !== 0) {
					u = !1, f.push(h);
					for (var y = 0; y < _.length; y++) {
						var b = _[y];
						if (r(b)) {
							if (d === null) d = b.unicode;
							else if (d !== b.unicode && h.fallback === !1) throw Error("If one rule is /u then all must be");
						}
					}
					var x = c(_.map(l)), S = new RegExp(x);
					if (S.test("")) throw Error("RegExp matches empty string: " + S);
					if (o(x) > 0) throw Error("RegExp has capture groups: " + S + "\nUse (?: … ) instead");
					if (!h.lineBreaks && S.test("\n")) throw Error("Rule should declare lineBreaks: " + S);
					p.push(s(x));
				}
			}
			var C = i && i.fallback, w = n && !C ? "ym" : "gm", T = n || C ? "" : "|";
			return d === !0 && (w += "u"), {
				regexp: new RegExp(c(p) + T, w),
				groups: f,
				fast: a,
				error: i || g
			};
		}
		function v(e) {
			return new S({ start: _(h(e)) }, "start");
		}
		function y(e, t, n) {
			var r = e && (e.push || e.next);
			if (r && !n[r]) throw Error("Missing state '" + r + "' (in token '" + e.defaultType + "' of state '" + t + "')");
			if (e && e.pop && +e.pop != 1) throw Error("pop must be 1 (in token '" + e.defaultType + "' of state '" + t + "')");
		}
		function b(e, t) {
			var n = e.$all ? h(e.$all) : [];
			delete e.$all;
			var r = Object.getOwnPropertyNames(e);
			t ||= r[0];
			for (var i = Object.create(null), a = 0; a < r.length; a++) {
				var o = r[a];
				i[o] = h(e[o]).concat(n);
			}
			for (var a = 0; a < r.length; a++) for (var o = r[a], s = i[o], c = Object.create(null), l = 0; l < s.length; l++) {
				var u = s[l];
				if (u.include) {
					var d = [l, 1];
					if (u.include !== o && !c[u.include]) {
						c[u.include] = !0;
						var f = i[u.include];
						if (!f) throw Error("Cannot include nonexistent state '" + u.include + "' (in state '" + o + "')");
						for (var p = 0; p < f.length; p++) {
							var m = f[p];
							s.indexOf(m) === -1 && d.push(m);
						}
					}
					s.splice.apply(s, d), l--;
				}
			}
			for (var g = Object.create(null), a = 0; a < r.length; a++) {
				var o = r[a];
				g[o] = _(i[o], !0);
			}
			for (var a = 0; a < r.length; a++) {
				for (var v = r[a], b = g[v], x = b.groups, l = 0; l < x.length; l++) y(x[l], v, g);
				for (var C = Object.getOwnPropertyNames(b.fast), l = 0; l < C.length; l++) y(b.fast[C[l]], v, g);
			}
			return new S(g, t);
		}
		function x(e) {
			for (var t = typeof Map < "u", n = t ? /* @__PURE__ */ new Map() : Object.create(null), r = Object.getOwnPropertyNames(e), i = 0; i < r.length; i++) {
				var a = r[i], o = e[a];
				(Array.isArray(o) ? o : [o]).forEach(function(e) {
					if (typeof e != "string") throw Error("keyword must be string (in keyword '" + a + "')");
					t ? n.set(e, a) : n[e] = a;
				});
			}
			return function(e) {
				return t ? n.get(e) : n[e];
			};
		}
		var S = function(e, t) {
			this.startState = t, this.states = e, this.buffer = "", this.stack = [], this.reset();
		};
		S.prototype.reset = function(e, t) {
			return this.buffer = e || "", this.index = 0, this.line = t ? t.line : 1, this.col = t ? t.col : 1, this.queuedToken = t ? t.queuedToken : null, this.queuedText = t ? t.queuedText : "", this.queuedThrow = t ? t.queuedThrow : null, this.setState(t ? t.state : this.startState), this.stack = t && t.stack ? t.stack.slice() : [], this;
		}, S.prototype.save = function() {
			return {
				line: this.line,
				col: this.col,
				state: this.state,
				stack: this.stack.slice(),
				queuedToken: this.queuedToken,
				queuedText: this.queuedText,
				queuedThrow: this.queuedThrow
			};
		}, S.prototype.setState = function(e) {
			if (e && this.state !== e) {
				this.state = e;
				var t = this.states[e];
				this.groups = t.groups, this.error = t.error, this.re = t.regexp, this.fast = t.fast;
			}
		}, S.prototype.popState = function() {
			this.setState(this.stack.pop());
		}, S.prototype.pushState = function(e) {
			this.stack.push(this.state), this.setState(e);
		};
		var C = n ? function(e, t) {
			return e.exec(t);
		} : function(e, t) {
			var n = e.exec(t);
			return n[0].length === 0 ? null : n;
		};
		S.prototype._getGroup = function(e) {
			for (var t = this.groups.length, n = 0; n < t; n++) if (e[n + 1] !== void 0) return this.groups[n];
			throw Error("Cannot find token type for matched text");
		};
		function w() {
			return this.value;
		}
		if (S.prototype.next = function() {
			var e = this.index;
			if (this.queuedGroup) {
				var t = this._token(this.queuedGroup, this.queuedText, e);
				return this.queuedGroup = null, this.queuedText = "", t;
			}
			var n = this.buffer;
			if (e !== n.length) {
				var r = this.fast[n.charCodeAt(e)];
				if (r) return this._token(r, n.charAt(e), e);
				var i = this.re;
				i.lastIndex = e;
				var a = C(i, n), o = this.error;
				if (a == null) return this._token(o, n.slice(e, n.length), e);
				var r = this._getGroup(a), s = a[0];
				return o.fallback && a.index !== e ? (this.queuedGroup = r, this.queuedText = s, this._token(o, n.slice(e, a.index), e)) : this._token(r, s, e);
			}
		}, S.prototype._token = function(e, t, n) {
			var r = 0;
			if (e.lineBreaks) {
				var i = /\n/g, a = 1;
				if (t === "\n") r = 1;
				else for (; i.exec(t);) r++, a = i.lastIndex;
			}
			var o = {
				type: typeof e.type == "function" && e.type(t) || e.defaultType,
				value: typeof e.value == "function" ? e.value(t) : t,
				text: t,
				toString: w,
				offset: n,
				lineBreaks: r,
				line: this.line,
				col: this.col
			}, s = t.length;
			if (this.index += s, this.line += r, r === 0 ? this.col += s : this.col = s - a + 1, e.shouldThrow) throw Error(this.formatError(o, "invalid syntax"));
			return e.pop ? this.popState() : e.push ? this.pushState(e.push) : e.next && this.setState(e.next), o;
		}, typeof Symbol < "u" && Symbol.iterator) {
			var T = function(e) {
				this.lexer = e;
			};
			T.prototype.next = function() {
				var e = this.lexer.next();
				return {
					value: e,
					done: !e
				};
			}, T.prototype[Symbol.iterator] = function() {
				return this;
			}, S.prototype[Symbol.iterator] = function() {
				return new T(this);
			};
		}
		return S.prototype.formatError = function(e, t) {
			if (e == null) var n = this.buffer.slice(this.index), e = {
				text: n,
				offset: this.index,
				lineBreaks: n.indexOf("\n") === -1 ? 0 : 1,
				line: this.line,
				col: this.col
			};
			var r = 2, i = Math.max(e.line - r, 1), a = e.line + r, o = String(a).length, s = d(this.buffer, this.line - e.line + r + 1).slice(0, 5), c = [];
			c.push(t + " at line " + e.line + " col " + e.col + ":"), c.push("");
			for (var l = 0; l < s.length; l++) {
				var f = s[l], p = i + l;
				c.push(u(String(p), o) + "  " + f), p === e.line && c.push(u("", o + e.col + 1) + "^");
			}
			return c.join("\n");
		}, S.prototype.clone = function() {
			return new S(this.states, this.state);
		}, S.prototype.has = function(e) {
			return !0;
		}, {
			compile: v,
			states: b,
			error: Object.freeze({ error: !0 }),
			fallback: Object.freeze({ fallback: !0 }),
			keywords: x
		};
	});
})), S = y(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.lexer = e.states = void 0;
	var n = t(x());
	e.states = {
		body: {
			doubleapos: {
				match: "''",
				value: () => "'"
			},
			quoted: {
				lineBreaks: !0,
				match: /'[{}#](?:[^']|'')*'(?!')/u,
				value: (e) => e.slice(1, -1).replace(/''/g, "'")
			},
			argument: {
				lineBreaks: !0,
				match: /\{\s*[^\p{Pat_Syn}\p{Pat_WS}]+\s*/u,
				push: "arg",
				value: (e) => e.substring(1).trim()
			},
			octothorpe: "#",
			end: {
				match: "}",
				pop: 1
			},
			content: {
				lineBreaks: !0,
				match: /[^][^{}#']*/u
			}
		},
		arg: {
			select: {
				lineBreaks: !0,
				match: /,\s*(?:plural|select|selectordinal)\s*,\s*/u,
				next: "select",
				value: (e) => e.split(",")[1].trim()
			},
			"func-args": {
				lineBreaks: !0,
				match: /,\s*[^\p{Pat_Syn}\p{Pat_WS}]+\s*,/u,
				next: "body",
				value: (e) => e.split(",")[1].trim()
			},
			"func-simple": {
				lineBreaks: !0,
				match: /,\s*[^\p{Pat_Syn}\p{Pat_WS}]+\s*/u,
				value: (e) => e.substring(1).trim()
			},
			end: {
				match: "}",
				pop: 1
			}
		},
		select: {
			offset: {
				lineBreaks: !0,
				match: /\s*offset\s*:\s*\d+\s*/u,
				value: (e) => e.split(":")[1].trim()
			},
			case: {
				lineBreaks: !0,
				match: /\s*(?:=\d+|[^\p{Pat_Syn}\p{Pat_WS}]+)\s*\{/u,
				push: "body",
				value: (e) => e.substring(0, e.indexOf("{")).trim()
			},
			end: {
				match: /\s*\}/u,
				pop: 1
			}
		}
	}, e.lexer = n.default.states(e.states);
})), C = y(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ParseError = void 0, e.parse = l;
	var t = S(), n = (e) => ({
		offset: e.offset,
		line: e.line,
		col: e.col,
		text: e.text,
		lineBreaks: e.lineBreaks
	}), r = (e) => e === "plural" || e === "select" || e === "selectordinal";
	function i(e, t) {
		let n = "", r = "";
		for (let i of t) {
			let t = i.ctx.text;
			switch (r += t, i.type) {
				case "content":
					n += i.value;
					break;
				case "argument":
				case "function":
				case "octothorpe":
					n += t;
					break;
				default: throw new s(e, `Unsupported part in strict mode function arg style: ${t}`);
			}
		}
		return [{
			type: "content",
			value: n.trim(),
			ctx: Object.assign({}, t[0].ctx, { text: r })
		}];
	}
	var a = [
		"number",
		"date",
		"time",
		"spellout",
		"ordinal",
		"duration"
	], o = [
		"zero",
		"one",
		"two",
		"few",
		"many",
		"other"
	], s = class extends Error {
		constructor(e, n) {
			super(t.lexer.formatError(e, n));
		}
	};
	e.ParseError = s;
	var c = class {
		constructor(e, n) {
			this.lexer = t.lexer.reset(e), this.cardinalKeys = n?.cardinal ?? o, this.ordinalKeys = n?.ordinal ?? o, this.strict = n?.strict ?? !1, this.strictPluralKeys = n?.strictPluralKeys ?? !0;
		}
		parse() {
			return this.parseBody(!1, !0);
		}
		checkSelectKey(e, t, n) {
			if (n[0] === "=") {
				if (t === "select") throw new s(e, `The case ${n} is not valid with select`);
			} else if (t !== "select") {
				let r = t === "plural" ? this.cardinalKeys : this.ordinalKeys;
				if (this.strictPluralKeys && r.length > 0 && !r.includes(n)) throw new s(e, `The ${t} case ${n} is not valid in this locale`);
			}
		}
		parseSelect({ value: e }, t, r, i) {
			let a = {
				type: i,
				arg: e,
				cases: [],
				ctx: r
			};
			i === "plural" || i === "selectordinal" ? t = !0 : this.strict && (t = !1);
			for (let e of this.lexer) switch (e.type) {
				case "offset":
					if (i === "select") throw new s(e, "Unexpected plural offset for select");
					if (a.cases.length > 0) throw new s(e, "Plural offset must be set before cases");
					a.pluralOffset = Number(e.value), r.text += e.text, r.lineBreaks += e.lineBreaks;
					break;
				case "case":
					this.checkSelectKey(e, i, e.value), a.cases.push({
						key: e.value,
						tokens: this.parseBody(t),
						ctx: n(e)
					});
					break;
				case "end": return a;
				default: throw new s(e, `Unexpected lexer token: ${e.type}`);
			}
			throw new s(null, "Unexpected message end");
		}
		parseArgToken(e, t) {
			let o = n(e), c = this.lexer.next();
			if (!c) throw new s(null, "Unexpected message end");
			if (o.text += c.text, o.lineBreaks += c.lineBreaks, this.strict && (c.type === "func-simple" || c.type === "func-args") && !a.includes(c.value)) throw new s(e, `Invalid strict mode function arg type: ${c.value}`);
			switch (c.type) {
				case "end": return {
					type: "argument",
					arg: e.value,
					ctx: o
				};
				case "func-simple": {
					let t = this.lexer.next();
					if (!t) throw new s(null, "Unexpected message end");
					if (t.type !== "end") throw new s(t, `Unexpected lexer token: ${t.type}`);
					if (o.text += t.text, r(c.value.toLowerCase())) throw new s(c, `Invalid type identifier: ${c.value}`);
					return {
						type: "function",
						arg: e.value,
						key: c.value,
						ctx: o
					};
				}
				case "func-args": {
					if (r(c.value.toLowerCase())) throw new s(c, `Invalid type identifier: ${c.value}`);
					let n = this.parseBody(!this.strict && t);
					return this.strict && n.length > 0 && (n = i(e, n)), {
						type: "function",
						arg: e.value,
						key: c.value,
						param: n,
						ctx: o
					};
				}
				case "select":
					if (r(c.value)) return this.parseSelect(e, t, o, c.value);
					throw new s(c, `Unexpected select type ${c.value}`);
				default: throw new s(c, `Unexpected lexer token: ${c.type}`);
			}
		}
		parseBody(e, t) {
			let r = [], i = null;
			for (let a of this.lexer) if (a.type === "argument") i &&= null, r.push(this.parseArgToken(a, e));
			else if (a.type === "octothorpe" && e) i &&= null, r.push({
				type: "octothorpe",
				ctx: n(a)
			});
			else if (a.type === "end" && !t) return r;
			else {
				let t = a.value;
				if (!e && a.type === "quoted" && t[0] === "#") {
					if (t.includes("{")) throw new s(a, `Unsupported escape pattern: ${t}`);
					t = a.text;
				}
				i ? (i.value += t, i.ctx.text += a.text, i.ctx.lineBreaks += a.lineBreaks) : (i = {
					type: "content",
					value: t,
					ctx: n(a)
				}, r.push(i));
			}
			if (t) return r;
			throw new s(null, "Unexpected message end");
		}
	};
	function l(e, t = {}) {
		return new c(e, t).parse();
	}
}))(), w = class extends Error {
	constructor(e, t, n) {
		super(e), this.token = t, this.type = n || "error";
	}
}, T = (e) => e < 4 ? "short" : e === 4 ? "long" : "narrow", E = (e) => e % 2 == 0 ? "2-digit" : "numeric";
function D(e, t) {
	switch (e.char) {
		case "y": return { year: E(e.width) };
		case "r": return {
			calendar: "gregory",
			year: "numeric"
		};
		default: return t(`${e.desc} is not supported; falling back to year:numeric`, w.WARNING), { year: "numeric" };
	}
}
function ee(e, t) {
	switch (e.width) {
		case 1: return "numeric";
		case 2: return "2-digit";
		case 3: return "short";
		case 4: return "long";
		case 5: return "narrow";
		default:
			t(`${e.desc} is not supported with width ${e.width}`);
			return;
	}
}
function te(e, t) {
	let { char: n, desc: r, width: i } = e;
	if (n === "d") return E(i);
	t(`${r} is not supported`);
}
function ne(e, t) {
	let { char: n, desc: r, width: i } = e;
	return (n === "c" || n === "e") && i < 3 && t(`Numeric value is not supported for ${r}; falling back to weekday:short`, w.WARNING), T(i);
}
function re(e) {
	let t = E(e.width), n;
	switch (e.char) {
		case "h":
			n = "h12";
			break;
		case "H":
			n = "h23";
			break;
		case "k":
			n = "h24";
			break;
		case "K": n = "h11";
	}
	return n ? {
		hour: t,
		hourCycle: n
	} : { hour: t };
}
function ie(e, t) {
	let { char: n, desc: r, width: i } = e;
	switch (n) {
		case "v":
		case "z": return i === 4 ? "long" : "short";
		case "V":
			if (i === 4) return "long";
			t(`${r} is not supported with width ${i}`);
			return;
		case "X":
			t(`${r} is not supported`);
			return;
	}
	return "short";
}
function O(e, t) {
	switch (e.field) {
		case "era": return { era: T(e.width) };
		case "year": return D(e, t);
		case "month": return { month: ee(e, t) };
		case "day": return { day: te(e, t) };
		case "weekday": return { weekday: ne(e, t) };
		case "period": return;
		case "hour": return re(e);
		case "min": return { minute: E(e.width) };
		case "sec": return { second: E(e.width) };
		case "tz": return { timeZoneName: ie(e, t) };
		case "quarter":
		case "week":
		case "sec-frac":
		case "ms": t(`${e.desc} is not supported`);
	}
}
function k(e, t, n = (e) => {
	throw e;
}) {
	let r = { timeZone: t }, i = [];
	for (let t of e) {
		let { error: e, field: a, str: o } = t;
		if (e) {
			let r = new w(e.message, t);
			r.stack = e.stack, n(r);
		}
		o && n(new w(`Ignoring string part: ${o}`, t, w.WARNING)), a && (i.indexOf(a) === -1 ? i.push(a) : n(new w(`Duplicate ${a} token`, t)));
		let s = O(t, (e, r) => n(new w(e, t, r)));
		s && Object.assign(r, s);
	}
	return r;
}
var A = {
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
}, j = (e) => e >= "A" && e <= "Z" || e >= "a" && e <= "z";
function ae(e, t) {
	let n = e[t], r = 1;
	for (; e[++t] === n;) ++r;
	let i = A[n];
	if (!i) {
		let e = `The letter ${n} is not a valid field identifier`;
		return {
			char: n,
			error: Error(e),
			width: r
		};
	}
	return {
		char: n,
		field: i.field,
		desc: i.desc,
		width: r
	};
}
function oe(e, t) {
	let n = e[++t], r = 2;
	if (n === "'") return {
		char: "'",
		str: n,
		width: r
	};
	for (;;) {
		let i = e[++t];
		if (++r, i === void 0) {
			let t = `Unterminated quoted literal in pattern: ${n || e}`;
			return {
				char: "'",
				error: Error(t),
				str: n,
				width: r
			};
		}
		if (i === "'") {
			if (e[++t] !== "'") return {
				char: "'",
				str: n,
				width: r
			};
			++r;
		}
		n += i;
	}
}
function se(e, t) {
	let n = e[t];
	if (!n) return null;
	if (j(n)) return ae(e, t);
	if (n === "'") return oe(e, t);
	let r = n, i = 1;
	for (;;) {
		let a = e[++t];
		if (!a || j(a) || a === "'") return {
			char: n,
			str: r,
			width: i
		};
		r += a, i += 1;
	}
}
function ce(e) {
	let t = [], n = 0;
	for (;;) {
		let r = se(e, n);
		if (!r) return t;
		t.push(r), n += r.width;
	}
}
function M(e, t) {
	return e.filter((e) => e.type !== "content").length ? e.map((e) => {
		if (e.type === "content") return t(e.value);
		if (e.type === "octothorpe") return "#";
		if (e.type === "argument") return [e.arg];
		if (e.type === "function") {
			let t = e?.param?.[0];
			if (e.key === "date" && t) {
				let n = le(t.value.trim(), (e) => {
					throw Error(`Unable to compile date expression: ${e.message}`);
				});
				return [
					e.arg,
					e.key,
					n
				];
			}
			return t ? [
				e.arg,
				e.key,
				t.value.trim()
			] : [e.arg, e.key];
		}
		let n = e.pluralOffset, r = {};
		return e.cases.forEach(({ key: e, tokens: n }) => {
			let i = e[0] === "=" ? e.slice(1) : e;
			r[i] = M(n, t);
		}), [
			e.arg,
			e.type,
			{
				offset: n,
				...r
			}
		];
	}) : e.map((e) => t(e.value));
}
function le(e, t) {
	return /^::/.test(e) ? k(ce(e.substring(2)), void 0, t) : e;
}
function ue(e, t = (e) => e) {
	return M((0, C.parse)(e), t);
}
function de(e, t = (e) => e) {
	try {
		return ue(e, t);
	} catch (t) {
		return console.error(`${t.message} 

Message: ${e}`), [e];
	}
}
var N = (e) => typeof e == "string", fe = (e) => typeof e == "function", P = /* @__PURE__ */ new Map(), F = "en";
function I(e) {
	return [...Array.isArray(e) ? e : [e], F];
}
function L(e, t, n) {
	let r = I(e);
	n ||= "default";
	let i;
	if (typeof n == "string") switch (i = {
		day: "numeric",
		month: "short",
		year: "numeric"
	}, n) {
		case "full": i.weekday = "long";
		case "long":
			i.month = "long";
			break;
		case "short": i.month = "numeric";
	}
	else i = n;
	return V(() => H("date", r, n), () => new Intl.DateTimeFormat(r, i)).format(N(t) ? new Date(t) : t);
}
function R(e, t, n) {
	let r;
	if (n ||= "default", typeof n == "string") switch (r = {
		second: "numeric",
		minute: "numeric",
		hour: "numeric"
	}, n) {
		case "full":
		case "long":
			r.timeZoneName = "short";
			break;
		case "short": delete r.second;
	}
	else r = n;
	return L(e, t, r);
}
function z(e, t, n) {
	let r = I(e);
	return V(() => H("number", r, n), () => new Intl.NumberFormat(r, n)).format(t);
}
function B(e, t, n, { offset: r = 0, ...i }) {
	let a = I(e), o = t ? V(() => H("plural-ordinal", a), () => new Intl.PluralRules(a, { type: "ordinal" })) : V(() => H("plural-cardinal", a), () => new Intl.PluralRules(a, { type: "cardinal" }));
	return i[n] ?? i[o.select(n - r)] ?? i.other;
}
function V(e, t) {
	let n = e(), r = P.get(n);
	return r || (r = t(), P.set(n, r)), r;
}
function H(e, t, n) {
	return `${e}-${t.join("-")}-${JSON.stringify(n)}`;
}
var U = /\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/, W = (e) => e.replace(/\\u([a-fA-F0-9]{4})|\\x([a-fA-F0-9]{2})/g, (e, t, n) => {
	if (t) {
		let e = parseInt(t, 16);
		return String.fromCharCode(e);
	}
	{
		let e = parseInt(n, 16);
		return String.fromCharCode(e);
	}
}), G = "%__lingui_octothorpe__%", pe = (e, t, n = {}) => {
	let r = t || e, i = (e) => typeof e == "object" ? e : n[e], a = (e, t) => {
		let a = Object.keys(n).length ? i("number") : void 0, o = z(r, e, a);
		return t.replace(new RegExp(G, "g"), o);
	};
	return {
		plural: (e, t) => {
			let { offset: n = 0 } = t, i = B(r, !1, e, t);
			return a(e - n, i);
		},
		selectordinal: (e, t) => {
			let { offset: n = 0 } = t, i = B(r, !0, e, t);
			return a(e - n, i);
		},
		select: me,
		number: (e, t) => z(r, e, i(t) || { style: t }),
		date: (e, t) => L(r, e, i(t) || t),
		time: (e, t) => R(r, e, i(t) || t)
	};
}, me = (e, t) => t[e] ?? t.other;
function he(e, t, n) {
	return (r = {}, i) => {
		let a = pe(t, n, i), o = (e, t = !1) => Array.isArray(e) ? e.reduce((e, n) => {
			if (n === "#" && t) return e + G;
			if (N(n)) return e + n;
			let [i, s, c] = n, l = {};
			s === "plural" || s === "selectordinal" || s === "select" ? Object.entries(c).forEach(([e, t]) => {
				l[e] = o(t, s === "plural" || s === "selectordinal");
			}) : l = c;
			let u;
			if (s) {
				let e = a[s];
				u = e(r[i], l);
			} else u = r[i];
			return u == null ? e : e + u;
		}, "") : e, s = o(e);
		return N(s) && U.test(s) ? W(s) : N(s) ? s : s ? String(s) : "";
	};
}
var ge = class {
	_events = {};
	on(e, t) {
		return this._events[e] ??= /* @__PURE__ */ new Set(), this._events[e].add(t), () => this.removeListener(e, t);
	}
	removeListener(e, t) {
		let n = this._events[e];
		n?.delete(t), n?.size === 0 && delete this._events[e];
	}
	emit(e, ...t) {
		let n = this._events[e];
		if (n) for (let e of [...n]) e.apply(this, t);
	}
}, _e = class extends ge {
	_locale = "";
	_locales;
	_messages = {};
	_missing;
	_messageCompiler;
	constructor(e) {
		super(), process.env.NODE_ENV !== "production" && this.setMessagesCompiler(de), e.missing != null && (this._missing = e.missing), e.messages != null && this.load(e.messages), (typeof e.locale == "string" || e.locales) && this.activate(e.locale ?? F, e.locales);
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
	setMessagesCompiler(e) {
		return this._messageCompiler = e, this;
	}
	_load(e, t) {
		let n = this._messages[e];
		n ? Object.assign(n, t) : this._messages[e] = t;
	}
	load(e, t) {
		typeof e == "string" && typeof t == "object" ? this._load(e, t) : Object.entries(e).forEach(([e, t]) => this._load(e, t)), this.emit("change");
	}
	loadAndActivate({ locale: e, locales: t, messages: n }) {
		this._locale = e, this._locales = t || void 0, this._messages[this._locale] = n, this.emit("change");
	}
	activate(e, t) {
		process.env.NODE_ENV !== "production" && (this._messages[e] || console.warn(`Messages for locale "${e}" not loaded.`)), this._locale = e, this._locales = t, this.emit("change");
	}
	_(e, t, n) {
		if (!this.locale) throw Error("Lingui: Attempted to call a translation function without setting a locale.\nMake sure to call `i18n.activate(locale)` before using Lingui functions.\nThis issue may also occur due to a race condition in your initialization logic.");
		let r = n?.message;
		e ||= "", N(e) || (t = e.values || t, r = e.message, e = e.id);
		let i = this.messages[e], a = i === void 0, o = this._missing;
		if (o && a) return fe(o) ? o(this._locale, e) : o;
		a && this.emit("missing", {
			id: e,
			locale: this._locale
		});
		let s = i || r || e;
		return N(s) && (this._messageCompiler ? s = this._messageCompiler(s) : console.warn(`Uncompiled message detected! Message:

> ${s}

That means you use raw catalog or your catalog doesn't have a translation for the message and fallback was used.
ICU features such as interpolation and plurals will not work properly for that message.

Please compile your catalog first.
`)), N(s) && U.test(s) ? W(s) : N(s) ? s : he(s, this._locale, this._locales)(t, n?.formats);
	}
	t = this._.bind(this);
	date(e, t) {
		return L(this._locales || this._locale, e, t);
	}
	number(e, t) {
		return z(this._locales || this._locale, e, t);
	}
};
function K(e = {}) {
	return new _e(e);
}
K();
var ve = y(((e) => {
	var t = b("react");
	function n(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var r = typeof Object.is == "function" ? Object.is : n, i = t.useState, a = t.useEffect, o = t.useLayoutEffect, s = t.useDebugValue;
	function c(e, t) {
		var n = t(), r = i({ inst: {
			value: n,
			getSnapshot: t
		} }), c = r[0].inst, u = r[1];
		return o(function() {
			c.value = n, c.getSnapshot = t, l(c) && u({ inst: c });
		}, [
			e,
			n,
			t
		]), a(function() {
			return l(c) && u({ inst: c }), e(function() {
				l(c) && u({ inst: c });
			});
		}, [e]), s(n), n;
	}
	function l(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !r(e, n);
		} catch {
			return !0;
		}
	}
	function u(e, t) {
		return t();
	}
	var d = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? u : c;
	e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? d : t.useSyncExternalStore;
})), ye = y(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function n(e, t) {
			d || a.startTransition === void 0 || (d = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
			var n = t();
			if (!f) {
				var i = t();
				o(n, i) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
			}
			i = s({ inst: {
				value: n,
				getSnapshot: t
			} });
			var p = i[0].inst, m = i[1];
			return l(function() {
				p.value = n, p.getSnapshot = t, r(p) && m({ inst: p });
			}, [
				e,
				n,
				t
			]), c(function() {
				return r(p) && m({ inst: p }), e(function() {
					r(p) && m({ inst: p });
				});
			}, [e]), u(n), n;
		}
		function r(e) {
			var t = e.getSnapshot;
			e = e.value;
			try {
				var n = t();
				return !o(e, n);
			} catch {
				return !0;
			}
		}
		function i(e, t) {
			return t();
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var a = b("react"), o = typeof Object.is == "function" ? Object.is : t, s = a.useState, c = a.useEffect, l = a.useLayoutEffect, u = a.useDebugValue, d = !1, f = !1, p = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? i : n;
		e.useSyncExternalStore = a.useSyncExternalStore === void 0 ? p : a.useSyncExternalStore, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), be = y(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? ve() : ye();
}))(), q = e(null), xe = (e) => {
	let n = t(q);
	if (process.env.NODE_ENV !== "production" && n == null) throw Error(e ?? "useLingui hook was used without I18nProvider.\n\nThis often happens when multiple instances of @lingui/react are installed (e.g. due to a version mismatch or misconfiguration in a monorepo). Verify you have only one version installed by running: npm ls @lingui/react (or pnpm why @lingui/react / yarn why @lingui/react).");
	return n;
};
function Se() {
	return xe();
}
var J = (e, t) => ({
	i18n: new Proxy(e, {}),
	defaultComponent: t,
	_: e.t.bind(e)
}), Ce = (e, t) => {
	let n = e.locale, r = J(e, t), i = () => {
		n = e.locale, r = J(e, t);
	};
	return {
		getSnapshot: () => (n !== e.locale && i(), r),
		subscribe: (t) => e.on("change", () => {
			i(), t();
		})
	};
}, Y = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = i(() => Ce(e, t), [e, t]), a = (0, be.useSyncExternalStore)(r.subscribe, r.getSnapshot, r.getSnapshot);
	return a.i18n.locale ? o(q.Provider, {
		value: a,
		children: n
	}) : (process.env.NODE_ENV === "development" && console.log("I18nProvider rendered `null`. A call to `i18n.activate` needs to happen in order for translations to be activated and for the I18nProvider to render.This is not an error but an informational message logged only in development."), null);
}, X = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/lingui-app/scripts/EmptyComponent.tsx", we = () => {
	let { _: e, i18n: t } = Se();
	return t.locale, null;
};
function Te() {
	let e = K();
	return e.load("en", {}), e.activate("en"), s(Y, {
		i18n: e,
		children: s(we, {}, void 0, !1, {
			fileName: X,
			lineNumber: 21,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: X,
		lineNumber: 20,
		columnNumber: 5
	}, this);
}
function Ee() {
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
function De(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var Z = {
	en: l,
	fr: u,
	es: d,
	de: f,
	it: p,
	pt: m,
	zh: h,
	ja: g,
	ko: _,
	ru: v
};
function Oe(e) {
	return Z[e] || Z.en;
}
function Q(e, t) {
	let n = K();
	return n.load(e, t), n.activate(e), n;
}
var ke = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/lingui-app/components/AppProviders.tsx";
function Ae({ children: e }) {
	let t = c().locale ?? "en", o = i(() => Oe(t), [t]), l = i(() => Q(t, o), [t, o]), [u] = a(() => typeof performance < "u" ? performance.now() : 0);
	return r(() => {
		De("AppRoot", u);
	}, [u]), n(() => {
		document.documentElement.lang = t;
	}, [t]), n(() => {
		Ee();
	}, []), s(Y, {
		i18n: l,
		children: e
	}, void 0, !1, {
		fileName: ke,
		lineNumber: 35,
		columnNumber: 7
	}, this);
}
var je = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/lingui-app/scripts/Wrapper.tsx";
function Me({ children: e }) {
	return s(Ae, { children: e }, void 0, !1, {
		fileName: je,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/lingui-app/scripts/EmptyComponent.wrapper.tsx";
function Ne() {
	return s(Me, { children: s(Te, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Ne as default };
