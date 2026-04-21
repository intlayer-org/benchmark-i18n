import { createContext as e, useCallback as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useRef as o, useState as s } from "react";
import c from "next/link";
import { useParams as l, usePathname as u, useRouter as d } from "next/navigation";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
import { ChevronDown as m } from "lucide-react";
var h = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), g = (e) => /^https?:\/\//.test(e ?? "");
function _(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var v = ({ href: e, children: t, ...n }) => {
	let r = l().locale ?? "en";
	return e == null || typeof e != "string" || g(e) ? f(c, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}) : f(c, {
		href: _(e, r),
		prefetch: !1,
		...n,
		children: t
	});
}, y = e(null), b = (e) => {
	let t = n(y);
	if (process.env.NODE_ENV !== "production" && t == null) throw Error(e ?? "useLingui hook was used without I18nProvider.");
	return t;
};
function x() {
	return b();
}
var S = ({ i18n: e, defaultComponent: n, children: i }) => {
	let a = o(e.locale), c = t(() => ({
		i18n: e,
		defaultComponent: n,
		_: e.t.bind(e)
	}), [e, n]), [l, u] = s(c());
	return r(() => {
		let t = () => {
			a.current = e.locale, u(c());
		}, n = e.on("change", t);
		return a.current !== e.locale && t(), n;
	}, [e, c]), a.current ? f(y.Provider, {
		value: l,
		children: i
	}) : (process.env.NODE_ENV === "development" && console.log("I18nProvider rendered `null`. A call to `i18n.activate` needs to happen in order for translations to be activated and for the I18nProvider to render.This is not an error but an informational message logged only in development."), null);
};
function C() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function w(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function T() {
	let { i18n: e } = x(), [t, n] = s("auto");
	r(() => {
		let e = C();
		n(e), w(e);
	}, []), r(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => w("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function i() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		n(e), w(e), window.localStorage.setItem("theme", e);
	}
	let a = t === "auto" ? e._("theme-toggle.themeModeAutoSystemClick") : t === "light" ? e._("theme-toggle.themeModeLightClick") : e._("theme-toggle.themeModeDarkClick");
	return f("button", {
		type: "button",
		onClick: i,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t === "auto" ? e._("theme-toggle.themeAuto") : t === "dark" ? e._("theme-toggle.themeDark") : e._("theme-toggle.themeLight")
	});
}
var E = h(((e, t) => {
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
			} else throw Error("Not a pattern: " + e);
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
			if (!(!e || this.state === e)) {
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
})), ee = h(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.lexer = e.states = void 0;
	var n = t(E());
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
})), D = h(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ParseError = void 0, e.parse = l;
	var t = ee(), n = (e) => ({
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
					let n = this.parseBody(this.strict ? !1 : t);
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
}))(), O = class extends Error {
	constructor(e, t, n) {
		super(e), this.token = t, this.type = n || "error";
	}
}, k = (e) => e < 4 ? "short" : e === 4 ? "long" : "narrow", A = (e) => e % 2 == 0 ? "2-digit" : "numeric";
function te(e, t) {
	switch (e.char) {
		case "y": return { year: A(e.width) };
		case "r": return {
			calendar: "gregory",
			year: "numeric"
		};
		default: return t(`${e.desc} is not supported; falling back to year:numeric`, O.WARNING), { year: "numeric" };
	}
}
function ne(e, t) {
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
function re(e, t) {
	let { char: n, desc: r, width: i } = e;
	if (n === "d") return A(i);
	t(`${r} is not supported`);
}
function ie(e, t) {
	let { char: n, desc: r, width: i } = e;
	return (n === "c" || n === "e") && i < 3 && t(`Numeric value is not supported for ${r}; falling back to weekday:short`, O.WARNING), k(i);
}
function ae(e) {
	let t = A(e.width), n;
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
		case "K":
			n = "h11";
			break;
	}
	return n ? {
		hour: t,
		hourCycle: n
	} : { hour: t };
}
function oe(e, t) {
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
function j(e, t) {
	switch (e.field) {
		case "era": return { era: k(e.width) };
		case "year": return te(e, t);
		case "month": return { month: ne(e, t) };
		case "day": return { day: re(e, t) };
		case "weekday": return { weekday: ie(e, t) };
		case "period": return;
		case "hour": return ae(e);
		case "min": return { minute: A(e.width) };
		case "sec": return { second: A(e.width) };
		case "tz": return { timeZoneName: oe(e, t) };
		case "quarter":
		case "week":
		case "sec-frac":
		case "ms": t(`${e.desc} is not supported`);
	}
}
function se(e, t, n = (e) => {
	throw e;
}) {
	let r = { timeZone: t }, i = [];
	for (let t of e) {
		let { error: e, field: a, str: o } = t;
		if (e) {
			let r = new O(e.message, t);
			r.stack = e.stack, n(r);
		}
		o && n(new O(`Ignoring string part: ${o}`, t, O.WARNING)), a && (i.indexOf(a) === -1 ? i.push(a) : n(new O(`Duplicate ${a} token`, t)));
		let s = j(t, (e, r) => n(new O(e, t, r)));
		s && Object.assign(r, s);
	}
	return r;
}
var M = {
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
}, N = (e) => e >= "A" && e <= "Z" || e >= "a" && e <= "z";
function ce(e, t) {
	let n = e[t], r = 1;
	for (; e[++t] === n;) ++r;
	let i = M[n];
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
function le(e, t) {
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
		} else if (i === "'") {
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
function ue(e, t) {
	let n = e[t];
	if (!n) return null;
	if (N(n)) return ce(e, t);
	if (n === "'") return le(e, t);
	let r = n, i = 1;
	for (;;) {
		let a = e[++t];
		if (!a || N(a) || a === "'") return {
			char: n,
			str: r,
			width: i
		};
		r += a, i += 1;
	}
}
function de(e) {
	let t = [], n = 0;
	for (;;) {
		let r = ue(e, n);
		if (!r) return t;
		t.push(r), n += r.width;
	}
}
function P(e, t) {
	return e.filter((e) => e.type !== "content").length ? e.map((e) => {
		if (e.type === "content") return t(e.value);
		if (e.type === "octothorpe") return "#";
		if (e.type === "argument") return [e.arg];
		if (e.type === "function") {
			let t = e?.param?.[0];
			if (e.key === "date" && t) {
				let n = F(t.value.trim(), (e) => {
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
			r[i] = P(n, t);
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
function F(e, t) {
	return /^::/.test(e) ? se(de(e.substring(2)), void 0, t) : e;
}
function I(e, t = (e) => e) {
	return P((0, D.parse)(e), t);
}
function L(e, t = (e) => e) {
	try {
		return I(e, t);
	} catch (t) {
		return console.error(`${t.message} 

Message: ${e}`), [e];
	}
}
var R = (e) => typeof e == "string", z = (e) => typeof e == "function", B = /* @__PURE__ */ new Map(), V = "en";
function H(e) {
	return [...Array.isArray(e) ? e : [e], V];
}
function U(e, t, n) {
	let r = H(e);
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
		case "short":
			i.month = "numeric";
			break;
	}
	else i = n;
	return K(() => q("date", r, n), () => new Intl.DateTimeFormat(r, i)).format(R(t) ? new Date(t) : t);
}
function fe(e, t, n) {
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
	return U(e, t, r);
}
function W(e, t, n) {
	let r = H(e);
	return K(() => q("number", r, n), () => new Intl.NumberFormat(r, n)).format(t);
}
function G(e, t, n, { offset: r = 0, ...i }) {
	let a = H(e), o = t ? K(() => q("plural-ordinal", a), () => new Intl.PluralRules(a, { type: "ordinal" })) : K(() => q("plural-cardinal", a), () => new Intl.PluralRules(a, { type: "cardinal" }));
	return i[n] ?? i[o.select(n - r)] ?? i.other;
}
function K(e, t) {
	let n = e(), r = B.get(n);
	return r || (r = t(), B.set(n, r)), r;
}
function q(e, t, n) {
	return `${e}-${t.join("-")}-${JSON.stringify(n)}`;
}
var J = /\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/, Y = (e) => e.replace(/\\u([a-fA-F0-9]{4})|\\x([a-fA-F0-9]{2})/g, (e, t, n) => {
	if (t) {
		let e = parseInt(t, 16);
		return String.fromCharCode(e);
	} else {
		let e = parseInt(n, 16);
		return String.fromCharCode(e);
	}
}), X = "%__lingui_octothorpe__%", pe = (e, t, n = {}) => {
	let r = t || e, i = (e) => typeof e == "object" ? e : n[e], a = (e, t) => {
		let a = W(r, e, Object.keys(n).length ? i("number") : void 0);
		return t.replace(new RegExp(X, "g"), a);
	};
	return {
		plural: (e, t) => {
			let { offset: n = 0 } = t, i = G(r, !1, e, t);
			return a(e - n, i);
		},
		selectordinal: (e, t) => {
			let { offset: n = 0 } = t, i = G(r, !0, e, t);
			return a(e - n, i);
		},
		select: me,
		number: (e, t) => W(r, e, i(t) || { style: t }),
		date: (e, t) => U(r, e, i(t) || t),
		time: (e, t) => fe(r, e, i(t) || t)
	};
}, me = (e, t) => t[e] ?? t.other;
function he(e, t, n) {
	return (r = {}, i) => {
		let a = pe(t, n, i), o = (e, t = !1) => Array.isArray(e) ? e.reduce((e, n) => {
			if (n === "#" && t) return e + X;
			if (R(n)) return e + n;
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
		return R(s) && J.test(s) ? Y(s) : R(s) ? s : s ? String(s) : "";
	};
}
var ge = Object.defineProperty, _e = (e, t, n) => t in e ? ge(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, ve = (e, t, n) => (_e(e, typeof t == "symbol" ? t : t + "", n), n), ye = class {
	constructor() {
		ve(this, "_events", {});
	}
	on(e, t) {
		var n;
		return (n = this._events)[e] ?? (n[e] = []), this._events[e].push(t), () => this.removeListener(e, t);
	}
	removeListener(e, t) {
		let n = this._getListeners(e);
		if (!n) return;
		let r = n.indexOf(t);
		~r && n.splice(r, 1);
	}
	emit(e, ...t) {
		let n = this._getListeners(e);
		n && n.map((e) => e.apply(this, t));
	}
	_getListeners(e) {
		let t = this._events[e];
		return Array.isArray(t) ? t : !1;
	}
}, be = Object.defineProperty, Z = (e, t, n) => t in e ? be(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Q = (e, t, n) => (Z(e, typeof t == "symbol" ? t : t + "", n), n), xe = class extends ye {
	constructor(e) {
		super(), Q(this, "_locale", ""), Q(this, "_locales"), Q(this, "_localeData", {}), Q(this, "_messages", {}), Q(this, "_missing"), Q(this, "_messageCompiler"), Q(this, "t", this._.bind(this)), process.env.NODE_ENV !== "production" && this.setMessagesCompiler(L), e.missing != null && (this._missing = e.missing), e.messages != null && this.load(e.messages), e.localeData != null && this.loadLocaleData(e.localeData), (typeof e.locale == "string" || e.locales) && this.activate(e.locale ?? V, e.locales);
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
	_loadLocaleData(e, t) {
		let n = this._localeData[e];
		n ? Object.assign(n, t) : this._localeData[e] = t;
	}
	setMessagesCompiler(e) {
		return this._messageCompiler = e, this;
	}
	loadLocaleData(e, t) {
		typeof e == "string" ? this._loadLocaleData(e, t) : Object.keys(e).forEach((t) => this._loadLocaleData(t, e[t])), this.emit("change");
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
		e ||= "", R(e) || (t = e.values || t, r = e.message, e = e.id);
		let i = this.messages[e], a = i === void 0, o = this._missing;
		if (o && a) return z(o) ? o(this._locale, e) : o;
		a && this.emit("missing", {
			id: e,
			locale: this._locale
		});
		let s = i || r || e;
		return R(s) && (this._messageCompiler ? s = this._messageCompiler(s) : console.warn(`Uncompiled message detected! Message:

> ${s}

That means you use raw catalog or your catalog doesn't have a translation for the message and fallback was used.
ICU features such as interpolation and plurals will not work properly for that message. 

Please compile your catalog first. 
`)), R(s) && J.test(s) ? Y(s) : R(s) ? s : he(s, this._locale, this._locales)(t, n?.formats);
	}
	date(e, t) {
		return U(this._locales || this._locale, e, t);
	}
	number(e, t) {
		return W(this._locales || this._locale, e, t);
	}
};
function $(e = {}) {
	return new xe(e);
}
$();
var Se = [
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
function Ce(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function we(e, t) {
	let n = $();
	return n.load(e, t), n.activate(e), n;
}
function Te() {
	let e = l().locale ?? "en", t = u(), n = d(), r = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return f("div", {
		className: "flex items-center gap-2",
		children: f("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: Se.map((e) => f("option", {
				value: e,
				children: Ce(e)
			}, e))
		})
	});
}
function Ee(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), i(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function De() {
	let { i18n: e } = x();
	Ee("Header");
	let [t, n] = s(!1), r = l(), i = u(), a = r.locale ?? "en", o = [
		{
			href: "/products",
			label: e._("header.products")
		},
		{
			href: "/pricing",
			label: e._("header.pricing")
		},
		{
			href: "/team",
			label: e._("header.team")
		},
		{
			href: "/blog",
			label: e._("header.blog")
		},
		{
			href: "/careers",
			label: e._("header.careers")
		},
		{
			href: "/faq",
			label: e._("header.faq")
		},
		{
			href: "/contact",
			label: e._("header.contact")
		},
		{
			href: "/settings",
			label: e._("header.settings")
		}
	];
	return f("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: p("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [p("div", {
				className: "flex items-center gap-8",
				children: [f(v, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Benchmark"
				}), p("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						f(v, {
							href: "/",
							className: `nav-link${((e) => i === _(e, a))("/") ? " is-active" : ""}`,
							children: e._("header.home")
						}),
						f(v, {
							href: "/about",
							className: `nav-link${((e) => {
								let t = _(e, a);
								return i.startsWith(t) && (e !== "/" || i === t);
							})("/about") ? " is-active" : ""}`,
							children: e._("header.methodology")
						}),
						p("div", {
							className: "relative",
							children: [p("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: [e._("header.mockPages"), f(m, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								})]
							}), t && f("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								children: f("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: o.map((e) => f(v, {
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
			}), p("div", {
				className: "flex items-center gap-4",
				children: [
					p("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [f("span", {
							className: "sr-only",
							children: e._("header.goToGithub")
						}), f("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: f("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					f(Te, {}),
					f(T, {})
				]
			})]
		})
	});
}
function Oe() {
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
function ke(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Ae({ children: e, locale: t, messages: n }) {
	let o = a(() => we(t, n), [t, n]), [c] = s(() => typeof performance < "u" ? performance.now() : 0);
	return i(() => {
		ke("AppRoot", c);
	}, [c]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		Oe();
	}, []), f(S, {
		i18n: o,
		children: e
	});
}
var je = JSON.parse("{\"about-grid.choosingAnI18nLibraryIs\":[\"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\"],\"about-grid.methodology\":[\"Methodology\"],\"about-grid.theSame10PageApp\":[\"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\"],\"about-grid.whyThisExists\":[\"Why This Exists\"],\"about-header.aboutThisBenchmark\":[\"About This Benchmark\"],\"about-header.thisIsAnOpenSource\":[\"This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.\"],\"what-we-measure.bundleSizeImpact\":[\"Bundle size impact\"],\"what-we-measure.duringSsrTranslationDataIs\":[\"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\"],\"what-we-measure.howFastTheAppCan\":[\"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\"],\"what-we-measure.howMuchExtraTimeThe\":[\"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\"],\"what-we-measure.hydrationCost\":[\"Hydration cost\"],\"what-we-measure.lazyLoadingEffectiveness\":[\"Lazy loading effectiveness\"],\"what-we-measure.localeSwitchSpeed\":[\"Locale switch speed\"],\"what-we-measure.renderingOverhead\":[\"Rendering overhead\"],\"what-we-measure.theAdditionalJavascriptBytesSent\":[\"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\"],\"what-we-measure.whatWeMeasure\":[\"What We Measure\"],\"what-we-measure.whetherSplittingTranslationsByRoute\":[\"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\"]}"), Me = JSON.parse("{\"blog-header.insightsTutorialsAndAnalysisFrom\":[\"Insights, tutorials, and analysis from the i18n community.\"],\"blog-list.aStepByStepGuide\":[\"A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\"],\"blog-list.aTransparentLookAtOur\":[\"A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\"],\"blog-list.anOverviewOfTheCurrent\":[\"An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\"],\"blog-list.benchmarkMethodologyHowWeTest\":[\"Benchmark Methodology: How We Test\"],\"blog-list.comparingI18nLibrariesIn2026\":[\"Comparing i18n Libraries in 2026: A Deep Dive\"],\"blog-list.february12026\":[\"February 1, 2026\"],\"blog-list.february152026\":[\"February 15, 2026\"],\"blog-list.february282026\":[\"February 28, 2026\"],\"blog-list.howToReduceYourI18n\":[\"How to Reduce Your i18n Bundle by 60%\"],\"blog-list.january202026\":[\"January 20, 2026\"],\"blog-list.march82026\":[\"March 8, 2026\"],\"blog-list.migratingFromReactI18nextTo\":[\"Migrating from react-i18next to Lingui\"],\"blog-list.practicalStrategiesForOptimizingTranslation\":[\"Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\"],\"blog-list.reactServerComponentsIntroduceNew\":[\"React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\"],\"blog-list.readMore\":[\"Read More →\"],\"blog-list.serverComponentsAndI18nWhat\":[\"Server Components and i18n: What Changes?\"],\"blog-list.theStateOfInternationalizationIn\":[\"The State of Internationalization in React\"],\"blog-list.weTested12DifferentInternationalization\":[\"We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\"]}"), Ne = JSON.parse("{\"careers-benefits.competitivePay\":[\"Competitive pay\"],\"careers-benefits.openSourceTime\":[\"Open source time\"],\"careers-benefits.topOfMarketCompensation\":[\"Top-of-market compensation\"],\"careers-benefits.workFromAnywhereInThe\":[\"Work from anywhere in the world\"],\"careers-header.joinOurMissionToImprove\":[\"Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.\"],\"careers-header.title\":[\"Careers\"],\"open-positions.applyNow\":[\"Apply Now\"],\"open-positions.backendEngineer\":[\"Backend Engineer\"],\"open-positions.buildAndMaintainOurBenchmarking\":[\"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\"],\"open-positions.community\":[\"Community\"],\"open-positions.createComprehensiveGuidesApiReferences\":[\"Create comprehensive guides, API references, and tutorials for our benchmarking platform.\"],\"open-positions.designAndScaleOurCloud\":[\"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\"],\"open-positions.devrelEngineer\":[\"DevRel Engineer\"],\"open-positions.documentation\":[\"Documentation\"],\"open-positions.engageWithTheI18nCommunity\":[\"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\"],\"open-positions.engineering\":[\"Engineering\"],\"open-positions.ensureTheAccuracyAndReliability\":[\"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\"],\"open-positions.fullTime\":[\"Full-time\"],\"open-positions.openPositions\":[\"Open Positions\"],\"open-positions.partTime\":[\"Part-time\"],\"open-positions.qaEngineer\":[\"QA Engineer\"],\"open-positions.remote\":[\"Remote\"],\"open-positions.sanFranciscoRemote\":[\"San Francisco / Remote\"],\"open-positions.seniorFrontendEngineer\":[\"Senior Frontend Engineer\"],\"open-positions.technicalWriter\":[\"Technical Writer\"]}"), Pe = JSON.parse("{\"contact-form.bugReport\":[\"Bug Report\"],\"contact-form.describeYourQuestionOrIdea\":[\"Describe your question or idea...\"],\"contact-form.methodologyQuestion\":[\"Methodology Question\"],\"contact-form.newBenchmarkIdea\":[\"New Benchmark Idea\"],\"contact-form.sendMessage\":[\"Send Message\"],\"contact-form.yourName\":[\"Your name\"],\"contact-header.getInTouch\":[\"Get in Touch\"],\"contact-header.haveIdeasFoundABug\":[\"Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at\"]}"), Fe = JSON.parse("{\"faq-header1.everythingYouNeedToKnow\":[\"Everything you need to know about i18n Benchmark.\"],\"faq-header1.frequentlyAskedQuestions\":[\"Frequently Asked Questions\"],\"faq-list.canISubmitMyOwn\":[\"Can I submit my own benchmarks?\"],\"faq-list.doYouOfferConsultingServices\":[\"Do you offer consulting services?\"],\"faq-list.howAreBenchmarksConducted\":[\"How are benchmarks conducted?\"],\"faq-list.howCanIContribute\":[\"How can I contribute?\"],\"faq-list.howOftenAreBenchmarksUpdated\":[\"How often are benchmarks updated?\"],\"faq-list.isTheDataReliable\":[\"Is the data reliable?\"],\"faq-list.thereAreManyWaysTo\":[\"There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\"],\"faq-list.weFollowRigorousStatisticalMethodology\":[\"We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\"],\"faq-list.weReRunAllBenchmarks\":[\"We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\"],\"faq-list.weRunStandardizedTestsIn\":[\"We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\"],\"faq-list.weSupportReactI18nextReact\":[\"We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\"],\"faq-list.whatIsI18nBenchmark\":[\"What is i18n Benchmark?\"],\"faq-list.whatIsI18nBenchmarkAnswer\":[\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\"],\"faq-list.whichLibrariesAreCurrentlySupported\":[\"Which libraries are currently supported?\"],\"faq-list.yesCommunityBenchmarkSubmissionsAre\":[\"Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\"],\"faq-list.yesOurEnterprisePlanIncludes\":[\"Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\"]}"), Ie = JSON.parse("{\"hero.aTestApplicationDesignedTo\":[\"A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.\"],\"hero.viewResults\":[\"View Results\"],\"results-table.bundleSize\":[\"Bundle Size\"],\"results-table.lazyLoading\":[\"Lazy Loading\"],\"results-table.lookupTime\":[\"Lookup Time\"],\"results-table.sampleResults\":[\"Sample Results\"],\"understanding-impact.cacheInvalidation\":[\"Cache invalidation:\"],\"understanding-impact.contextBasedArchitecturesCanCause\":[\"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\"],\"understanding-impact.duringServerSideRenderingThe\":[\"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\"],\"understanding-impact.flashOfUntranslatedContentFouc\":[\"Flash of untranslated content (FOUC):\"],\"understanding-impact.manyI18nLibrariesStoreTranslations\":[\"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\"],\"understanding-impact.splittingTranslationsIntoPerRoute\":[\"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\"],\"understanding-impact.theJsonMustBeParsed\":[\"The JSON must be parsed on every page load — blocking the main thread.\"],\"understanding-impact.theTradeOffsOfDynamic\":[\"The trade-offs of dynamic loading\"],\"understanding-impact.thisTestAppProvidesA\":[\"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\"],\"understanding-impact.understandingTheImpact\":[\"Understanding the Impact\"],\"understanding-impact.waterfallRequests\":[\"Waterfall requests:\"],\"understanding-impact.whatThisBenchmarkMeasures\":[\"What this benchmark measures\"],\"understanding-impact.whyASingleLargeJson\":[\"Why a single large JSON can hurt performance\"],\"why-it-matters.bundleSize\":[\"Bundle Size\"],\"why-it-matters.connectingALargeJsonDictionary\":[\"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\"],\"why-it-matters.dynamicLoading\":[\"Dynamic Loading\"],\"why-it-matters.loadingAllTranslationsUpfrontOverloads\":[\"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\"],\"why-it-matters.renderingHydration\":[\"Rendering & Hydration\"],\"why-it-matters.theBundleIsTheData\":[\"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\"],\"why-it-matters.whyTheseMetricsMatter\":[\"Why These Metrics Matter\"]}"), Le = JSON.parse("{\"pricing-header.chooseThePlanThatFits\":[\"Choose the plan that fits your team. No hidden fees.\"],\"pricing-header.simpleTransparentPricing\":[\"Simple, Transparent Pricing\"],\"pricing-tiers.allLibraries\":[\"All libraries\"],\"pricing-tiers.auditLogs\":[\"Audit logs\"],\"pricing-tiers.benchmarkRunPerDay\":[[\"runs\"],\" benchmark runs/day\"],\"pricing-tiers.ciIntegration\":[\"CI integration\"],\"pricing-tiers.communitySupport\":[\"Community support\"],\"pricing-tiers.contactSales\":[\"Contact Sales\"],\"pricing-tiers.customPrice\":[\"Custom\"],\"pricing-tiers.customSlas\":[\"Custom SLAs\"],\"pricing-tiers.dedicatedAccountManager\":[\"Dedicated account manager\"],\"pricing-tiers.enterprise\":[\"Enterprise\"],\"pricing-tiers.everythingInPro\":[\"Everything in Pro\"],\"pricing-tiers.forever\":[\"forever\"],\"pricing-tiers.getStarted\":[\"Get Started\"],\"pricing-tiers.historicalData\":[\"Historical data\"],\"pricing-tiers.librariesNumber\":[[\"libs\"],\" libraries\"],\"pricing-tiers.month\":[\"/month\"],\"pricing-tiers.onPremiseOption\":[\"On-premise option\"],\"pricing-tiers.price0\":[\"$0\"],\"pricing-tiers.price29\":[\"$29\"],\"pricing-tiers.prioritySupport\":[\"Priority support\"],\"pricing-tiers.privateResults\":[\"Private results\"],\"pricing-tiers.pro\":[\"Pro\"],\"pricing-tiers.publicResults\":[\"Public results\"],\"pricing-tiers.ssoSaml\":[\"SSO & SAML\"],\"pricing-tiers.starter\":[\"Starter\"],\"pricing-tiers.trainingSessions\":[\"Training sessions\"],\"pricing-tiers.unlimitedRuns\":[\"Unlimited runs\"]}"), Re = JSON.parse("{\"products-grid.aiPoweredToolThatHelps\":[\"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\"],\"products-grid.analyzesAndOptimizesYourI18n\":[\"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\"],\"products-grid.automatedCloudBasedBenchmarkingWith\":[\"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\"],\"products-grid.automatedQualityChecksForMissing\":[\"Automated quality checks for missing translations, pluralization issues, and context errors.\"],\"products-grid.benchmarkCli\":[\"Benchmark CLI\"],\"products-grid.benchmarkCloud\":[\"Benchmark Cloud\"],\"products-grid.benchmarkEnterprise\":[\"Benchmark Enterprise\"],\"products-grid.bundleOptimizer\":[\"Bundle Optimizer\"],\"products-grid.contactUs\":[\"Contact Us\"],\"products-grid.learnMore\":[\"Learn More\"],\"products-grid.migrationAssistant\":[\"Migration Assistant\"],\"products-grid.onPremiseDeploymentWithSso\":[\"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\"],\"products-grid.runBenchmarksLocallyFromYour\":[\"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\"],\"products-grid.translationQa\":[\"Translation QA\"],\"products-header.toolsAndServicesToStreamline\":[\"Tools and services to streamline your internationalization workflow.\"]}"), ze = JSON.parse("{\"route.couldNotMeasureHydrationDuration\":[\"Could not measure hydration duration:\"],\"route.oopsPageNotFound\":[\"Oops! Page not found\"],\"route.returnToHome\":[\"Return to Home\"]}"), Be = JSON.parse("{\"api-access-section.apiAccess\":[\"API Access\"],\"api-access-section.apiKey\":[\"API Key\"],\"api-access-section.useThisKeyToAccess\":[\"Use this key to access the benchmarking API programmatically.\"],\"preferences-section.arabicAr\":[\"Arabic (ar)\"],\"preferences-section.chineseSimplifiedZhCn\":[\"Chinese Simplified (zh-CN)\"],\"preferences-section.darkMode\":[\"Dark Mode\"],\"preferences-section.defaultLanguage\":[\"Default Language\"],\"preferences-section.emailNotifications\":[\"Email Notifications\"],\"preferences-section.englishEn\":[\"English (en)\"],\"preferences-section.frenchFr\":[\"French (fr)\"],\"preferences-section.germanDe\":[\"German (de)\"],\"preferences-section.japaneseJa\":[\"Japanese (ja)\"],\"preferences-section.receiveWeeklyBenchmarkReports\":[\"Receive weekly benchmark reports\"],\"preferences-section.spanishEs\":[\"Spanish (es)\"],\"preferences-section.toggleDarkMode\":[\"Toggle dark mode\"],\"preferences-section.toggleNotifications\":[\"Toggle notifications\"],\"preferences-section.useDarkColorScheme\":[\"Use dark color scheme\"],\"profile-section.displayName\":[\"Display Name\"],\"settings-footer.saveChanges\":[\"Save Changes\"],\"settings-header.manageYourAccountPreferencesAnd\":[\"Manage your account preferences and configuration.\"]}"), Ve = JSON.parse("{\"footer.anOpenSourceTestApplication\":[\"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.\"],\"footer.builtWith\":[\"i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.\"],\"footer.contact\":[\"Contact\"],\"footer.contributing\":[\"Contributing\"],\"footer.github\":[\"GitHub\"],\"footer.methodology\":[\"Methodology\"],\"footer.resources\":[\"Resources\"],\"header.blog\":[\"Blog\"],\"header.careers\":[\"Careers\"],\"header.contact\":[\"Contact\"],\"header.faq\":[\"FAQ\"],\"header.goToGithub\":[\"Go to GitHub\"],\"header.home\":[\"Home\"],\"header.methodology\":[\"Methodology\"],\"header.mockPages\":[\"Mock Pages\"],\"header.pricing\":[\"Pricing\"],\"header.products\":[\"Products\"],\"header.settings\":[\"Settings\"],\"header.team\":[\"Team\"],\"mockBanner\":[\"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.\"],\"theme-toggle.themeAuto\":[\"Theme: Auto\"],\"theme-toggle.themeDark\":[\"Theme: Dark\"],\"theme-toggle.themeLight\":[\"Theme: Light\"],\"theme-toggle.themeModeAutoSystemClick\":[\"Theme mode: auto (system). Click to switch to light mode.\"],\"theme-toggle.themeModeDarkClick\":[\"Theme mode: dark. Click to switch to auto (system) mode.\"],\"theme-toggle.themeModeLightClick\":[\"Theme mode: light. Click to switch to dark mode.\"]}"), He = JSON.parse("{\"team-grid.aishaPatel\":[\"Aisha Patel\"],\"team-grid.communityManager\":[\"Community Manager\"],\"team-grid.dataAnalyst\":[\"Data Analyst\"],\"team-grid.developerAdvocate\":[\"Developer Advocate\"],\"team-grid.elenaKowalski\":[\"Elena Kowalski\"],\"team-grid.ensuresStatisticalRigorInAll\":[\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\"],\"team-grid.formerGoogleEngineerWith10\":[\"Former Google engineer with 10 years of experience building internationalization systems at scale.\"],\"team-grid.founderLeadEngineer\":[\"Founder & Lead Engineer\"],\"team-grid.fullStackDeveloper\":[\"Full-Stack Developer\"],\"team-grid.maintainsTheBenchmarkingInfrastructureAnd\":[\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\"],\"team-grid.managesCommunityContributionsPartnershipsAnd\":[\"Manages community contributions, partnerships, and events. Background in open source governance.\"],\"team-grid.marcusWeber\":[\"Marcus Weber\"],\"team-grid.passionateAboutDeveloperExperienceAnd\":[\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\"],\"team-grid.performanceEngineer\":[\"Performance Engineer\"],\"team-grid.sarahChen\":[\"Sarah Chen\"],\"team-grid.specializesInJavascriptPerformanceOptimization\":[\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\"],\"team-grid.tomasRodriguez\":[\"Tomás Rodríguez\"],\"team-grid.yukiTanaka\":[\"Yuki Tanaka\"],\"team-header.meetThePeopleBehindI18n\":[\"Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.\"],\"team-header.ourTeam\":[\"Our Team\"]}"), Ue = {
	...je,
	...Me,
	...Ne,
	...Pe,
	...Fe,
	...Ie,
	...Le,
	...Re,
	...ze,
	...Be,
	...Ve,
	...He
};
function We({ children: e }) {
	return f(Ae, {
		locale: "en",
		messages: Ue,
		children: e
	});
}
function Ge() {
	return f(We, { children: f(De, {}) });
}
export { Ge as default };
