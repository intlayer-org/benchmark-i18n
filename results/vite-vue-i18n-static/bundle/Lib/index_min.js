import * as e from "vue";
import { Fragment as t, Text as n, computed as r, createVNode as i, defineComponent as a, effectScope as o, getCurrentInstance as s, getCurrentScope as c, h as l, inject as u, isRef as d, onMounted as f, onScopeDispose as p, onUnmounted as m, ref as h, renderSlot as g, shallowRef as _, watch as v } from "vue";
function y(e, t) {
	typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
var b = {};
function x(e) {
	b[e] || (b[e] = !0, y(e));
}
var S = typeof window < "u", C, w;
if (process.env.NODE_ENV !== "production") {
	let e = S && window.performance;
	e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (C = (t) => {
		e.mark(t);
	}, w = (t, n, r) => {
		e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
	});
}
var ee = /\{([0-9a-zA-Z]+)\}/g;
function T(e, ...t) {
	return t.length === 1 && L(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(ee, (e, n) => t.hasOwnProperty(n) ? t[n] : "");
}
var E = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), D = (e, t, n) => O({
	l: e,
	k: t,
	s: n
}), O = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), k = (e) => typeof e == "number" && isFinite(e), te = (e) => z(e) === "[object Date]", ne = (e) => z(e) === "[object RegExp]", re = (e) => B(e) && Object.keys(e).length === 0, A = Object.assign, ie = Object.create, j = (e = null) => ie(e), ae, oe = () => ae ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : j();
function se(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function ce(e) {
	return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function le(e) {
	return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (e, t, n) => `${t}="${ce(n)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (e, t, n) => `${t}='${ce(n)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && y("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach((t) => {
		e = e.replace(t, "$1javascript&#58;");
	}), e;
}
var ue = Object.prototype.hasOwnProperty;
function M(e, t) {
	return ue.call(e, t);
}
var N = Array.isArray, P = (e) => typeof e == "function", F = (e) => typeof e == "string", I = (e) => typeof e == "boolean", L = (e) => typeof e == "object" && !!e, de = (e) => L(e) && P(e.then) && P(e.catch), R = Object.prototype.toString, z = (e) => R.call(e), B = (e) => z(e) === "[object Object]", fe = (e) => e == null ? "" : N(e) || B(e) && e.toString === R ? JSON.stringify(e, null, 2) : String(e);
function pe(e, t = "") {
	return e.reduce((e, n, r) => r === 0 ? e + n : e + t + n, "");
}
var me = 2;
function he(e, t = 0, n = e.length) {
	let r = e.split(/\r?\n/), i = 0, a = [];
	for (let e = 0; e < r.length; e++) if (i += r[e].length + 1, i >= t) {
		for (let o = e - me; o <= e + me || n > i; o++) {
			if (o < 0 || o >= r.length) continue;
			let s = o + 1;
			a.push(`${s}${" ".repeat(3 - String(s).length)}|  ${r[o]}`);
			let c = r[o].length;
			if (o === e) {
				let e = t - (i - c) + 1, r = Math.max(1, n > i ? c - e : n - t);
				a.push("   |  " + " ".repeat(e) + "^".repeat(r));
			} else if (o > e) {
				if (n > i) {
					let e = Math.max(Math.min(n - i, c), 1);
					a.push("   |  " + "^".repeat(e));
				}
				i += c + 1;
			}
		}
		break;
	}
	return a.join("\n");
}
function ge() {
	let e = /* @__PURE__ */ new Map();
	return {
		events: e,
		on(t, n) {
			let r = e.get(t);
			r && r.push(n) || e.set(t, [n]);
		},
		off(t, n) {
			let r = e.get(t);
			r && r.splice(r.indexOf(n) >>> 0, 1);
		},
		emit(t, n) {
			(e.get(t) || []).slice().map((e) => e(n)), (e.get("*") || []).slice().map((e) => e(t, n));
		}
	};
}
var _e = (e) => !L(e) || N(e);
function ve(e, t) {
	if (_e(e) || _e(t)) throw Error("Invalid value");
	let n = [{
		src: e,
		des: t
	}];
	for (; n.length;) {
		let { src: e, des: t } = n.pop();
		Object.keys(e).forEach((r) => {
			r !== "__proto__" && (L(e[r]) && !L(t[r]) && (t[r] = Array.isArray(e[r]) ? [] : j()), _e(t[r]) || _e(e[r]) ? t[r] = e[r] : n.push({
				src: e[r],
				des: t[r]
			}));
		});
	}
}
function ye(e, t, n) {
	return {
		line: e,
		column: t,
		offset: n
	};
}
function be(e, t, n) {
	let r = {
		start: e,
		end: t
	};
	return n != null && (r.source = n), r;
}
var V = {
	EXPECTED_TOKEN: 1,
	INVALID_TOKEN_IN_PLACEHOLDER: 2,
	UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
	UNKNOWN_ESCAPE_SEQUENCE: 4,
	INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
	UNBALANCED_CLOSING_BRACE: 6,
	UNTERMINATED_CLOSING_BRACE: 7,
	EMPTY_PLACEHOLDER: 8,
	NOT_ALLOW_NEST_PLACEHOLDER: 9,
	INVALID_LINKED_FORMAT: 10,
	MUST_HAVE_MESSAGES_IN_PLURAL: 11,
	UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
	UNEXPECTED_EMPTY_LINKED_KEY: 13,
	UNEXPECTED_LEXICAL_ANALYSIS: 14,
	UNHANDLED_CODEGEN_NODE_TYPE: 15,
	UNHANDLED_MINIFIER_NODE_TYPE: 16
}, xe = {
	[V.EXPECTED_TOKEN]: "Expected token: '{0}'",
	[V.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
	[V.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
	[V.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
	[V.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
	[V.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
	[V.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
	[V.EMPTY_PLACEHOLDER]: "Empty placeholder",
	[V.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
	[V.INVALID_LINKED_FORMAT]: "Invalid linked format",
	[V.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
	[V.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
	[V.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
	[V.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
	[V.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
	[V.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Se(e, t, n = {}) {
	let { domain: r, messages: i, args: a } = n, o = process.env.NODE_ENV === "production" ? e : T((i || xe)[e] || "", ...a || []), s = SyntaxError(String(o));
	return s.code = e, t && (s.location = t), s.domain = r, s;
}
function Ce(e) {
	throw e;
}
var we = /<\/?[\w\s="/.':;#-\/]+>/, Te = (e) => we.test(e), H = " ", Ee = "\r", U = "\n", De = "\u2028", Oe = "\u2029";
function ke(e) {
	let t = e, n = 0, r = 1, i = 1, a = 0, o = (e) => t[e] === Ee && t[e + 1] === U, s = (e) => t[e] === U, c = (e) => t[e] === Oe, l = (e) => t[e] === De, u = (e) => o(e) || s(e) || c(e) || l(e), d = () => n, f = () => r, p = () => i, m = () => a, h = (e) => o(e) || c(e) || l(e) ? U : t[e], g = () => h(n), _ = () => h(n + a);
	function v() {
		return a = 0, u(n) && (r++, i = 0), o(n) && n++, n++, i++, t[n];
	}
	function y() {
		return o(n + a) && a++, a++, t[n + a];
	}
	function b() {
		n = 0, r = 1, i = 1, a = 0;
	}
	function x(e = 0) {
		a = e;
	}
	function S() {
		let e = n + a;
		for (; e !== n;) v();
		a = 0;
	}
	return {
		index: d,
		line: f,
		column: p,
		peekOffset: m,
		charAt: h,
		currentChar: g,
		currentPeek: _,
		next: v,
		peek: y,
		reset: b,
		resetPeek: x,
		skipToPeek: S
	};
}
var W = void 0, G = "'", Ae = "tokenizer";
function je(e, t = {}) {
	let n = t.location !== !1, r = ke(e), i = () => r.index(), a = () => ye(r.line(), r.column(), r.index()), o = a(), s = i(), c = {
		currentType: 13,
		offset: s,
		startLoc: o,
		endLoc: o,
		lastType: 13,
		lastOffset: s,
		lastStartLoc: o,
		lastEndLoc: o,
		braceNest: 0,
		inLinked: !1,
		text: ""
	}, l = () => c, { onError: u } = t;
	function d(e, t, r, ...i) {
		let a = l();
		t.column += r, t.offset += r, u && u(Se(e, n ? be(a.startLoc, t) : null, {
			domain: Ae,
			args: i
		}));
	}
	function f(e, t, r) {
		e.endLoc = a(), e.currentType = t;
		let i = { type: t };
		return n && (i.loc = be(e.startLoc, e.endLoc)), r != null && (i.value = r), i;
	}
	let p = (e) => f(e, 13);
	function m(e, t) {
		return e.currentChar() === t ? (e.next(), t) : (d(V.EXPECTED_TOKEN, a(), 0, t), "");
	}
	function h(e) {
		let t = "";
		for (; e.currentPeek() === H || e.currentPeek() === U;) t += e.currentPeek(), e.peek();
		return t;
	}
	function g(e) {
		let t = h(e);
		return e.skipToPeek(), t;
	}
	function _(e) {
		if (e === W) return !1;
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t === 95;
	}
	function v(e) {
		if (e === W) return !1;
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57;
	}
	function y(e, t) {
		let { currentType: n } = t;
		if (n !== 2) return !1;
		h(e);
		let r = _(e.currentPeek());
		return e.resetPeek(), r;
	}
	function b(e, t) {
		let { currentType: n } = t;
		if (n !== 2) return !1;
		h(e);
		let r = v(e.currentPeek() === "-" ? e.peek() : e.currentPeek());
		return e.resetPeek(), r;
	}
	function x(e, t) {
		let { currentType: n } = t;
		if (n !== 2) return !1;
		h(e);
		let r = e.currentPeek() === G;
		return e.resetPeek(), r;
	}
	function S(e, t) {
		let { currentType: n } = t;
		if (n !== 7) return !1;
		h(e);
		let r = e.currentPeek() === ".";
		return e.resetPeek(), r;
	}
	function C(e, t) {
		let { currentType: n } = t;
		if (n !== 8) return !1;
		h(e);
		let r = _(e.currentPeek());
		return e.resetPeek(), r;
	}
	function w(e, t) {
		let { currentType: n } = t;
		if (!(n === 7 || n === 11)) return !1;
		h(e);
		let r = e.currentPeek() === ":";
		return e.resetPeek(), r;
	}
	function ee(e, t) {
		let { currentType: n } = t;
		if (n !== 9) return !1;
		let r = () => {
			let t = e.currentPeek();
			return t === "{" ? _(e.peek()) : t === "@" || t === "|" || t === ":" || t === "." || t === H || !t ? !1 : t === U ? (e.peek(), r()) : E(e, !1);
		}, i = r();
		return e.resetPeek(), i;
	}
	function T(e) {
		h(e);
		let t = e.currentPeek() === "|";
		return e.resetPeek(), t;
	}
	function E(e, t = !0) {
		let n = (t = !1, r = "") => {
			let i = e.currentPeek();
			return i === "{" || i === "@" || !i ? t : i === "|" ? !(r === H || r === U) : i === H ? (e.peek(), n(!0, H)) : i === U ? (e.peek(), n(!0, U)) : !0;
		}, r = n();
		return t && e.resetPeek(), r;
	}
	function D(e, t) {
		let n = e.currentChar();
		return n === W ? W : t(n) ? (e.next(), n) : null;
	}
	function O(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36;
	}
	function k(e) {
		return D(e, O);
	}
	function te(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36 || t === 45;
	}
	function ne(e) {
		return D(e, te);
	}
	function re(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57;
	}
	function A(e) {
		return D(e, re);
	}
	function ie(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
	}
	function j(e) {
		return D(e, ie);
	}
	function ae(e) {
		let t = "", n = "";
		for (; t = A(e);) n += t;
		return n;
	}
	function oe(e) {
		let t = "";
		for (;;) {
			let n = e.currentChar();
			if (n === "\\") {
				let r = e.peek();
				r === "{" || r === "}" || r === "@" || r === "|" || r === "\\" ? (t += n + r, e.next(), e.next()) : (e.resetPeek(), t += n, e.next());
			} else if (n === "{" || n === "}" || n === "@" || n === "|" || !n) break;
			else if (n === H || n === U) if (E(e)) t += n, e.next();
			else if (T(e)) break;
			else t += n, e.next();
			else t += n, e.next();
		}
		return t;
	}
	function se(e) {
		g(e);
		let t = "", n = "";
		for (; t = ne(e);) n += t;
		let r = e.currentChar();
		if (r && r !== "}" && r !== W && r !== H && r !== U && r !== "　") {
			let t = F(e);
			return d(V.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n + t), n + t;
		}
		return e.currentChar() === W && d(V.UNTERMINATED_CLOSING_BRACE, a(), 0), n;
	}
	function ce(e) {
		g(e);
		let t = "";
		return e.currentChar() === "-" ? (e.next(), t += `-${ae(e)}`) : t += ae(e), e.currentChar() === W && d(V.UNTERMINATED_CLOSING_BRACE, a(), 0), t;
	}
	function le(e) {
		return e !== G && e !== U;
	}
	function ue(e) {
		g(e), m(e, "'");
		let t = "", n = "";
		for (; t = D(e, le);) t === "\\" ? n += M(e) : n += t;
		let r = e.currentChar();
		return r === U || r === W ? (d(V.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), r === U && (e.next(), m(e, "'")), n) : (m(e, "'"), n);
	}
	function M(e) {
		let t = e.currentChar();
		switch (t) {
			case "\\":
			case "'": return e.next(), `\\${t}`;
			case "u": return N(e, t, 4);
			case "U": return N(e, t, 6);
			default: return d(V.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, t), "";
		}
	}
	function N(e, t, n) {
		m(e, t);
		let r = "";
		for (let i = 0; i < n; i++) {
			let n = j(e);
			if (!n) {
				d(V.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${t}${r}${e.currentChar()}`);
				break;
			}
			r += n;
		}
		return `\\${t}${r}`;
	}
	function P(e) {
		return e !== "{" && e !== "}" && e !== H && e !== U;
	}
	function F(e) {
		g(e);
		let t = "", n = "";
		for (; t = D(e, P);) n += t;
		return n;
	}
	function I(e) {
		let t = "", n = "";
		for (; t = k(e);) n += t;
		return n;
	}
	function L(e) {
		let t = (n) => {
			let r = e.currentChar();
			return r === "{" || r === "@" || r === "|" || r === "(" || r === ")" || !r || r === H ? n : (n += r, e.next(), t(n));
		};
		return t("");
	}
	function de(e) {
		g(e);
		let t = m(e, "|");
		return g(e), t;
	}
	function R(e, t) {
		let n = null;
		switch (e.currentChar()) {
			case "{": return t.braceNest >= 1 && d(V.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), e.next(), n = f(t, 2, "{"), g(e), t.braceNest++, n;
			case "}": return t.braceNest > 0 && t.currentType === 2 && d(V.EMPTY_PLACEHOLDER, a(), 0), e.next(), n = f(t, 3, "}"), t.braceNest--, t.braceNest > 0 && g(e), t.inLinked && t.braceNest === 0 && (t.inLinked = !1), n;
			case "@": return t.braceNest > 0 && d(V.UNTERMINATED_CLOSING_BRACE, a(), 0), n = z(e, t) || p(t), t.braceNest = 0, n;
			default: {
				let r = !0, i = !0, o = !0;
				if (T(e)) return t.braceNest > 0 && d(V.UNTERMINATED_CLOSING_BRACE, a(), 0), n = f(t, 1, de(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (t.braceNest > 0 && (t.currentType === 4 || t.currentType === 5 || t.currentType === 6)) return d(V.UNTERMINATED_CLOSING_BRACE, a(), 0), t.braceNest = 0, B(e, t);
				if (r = y(e, t)) return n = f(t, 4, se(e)), g(e), n;
				if (i = b(e, t)) return n = f(t, 5, ce(e)), g(e), n;
				if (o = x(e, t)) return n = f(t, 6, ue(e)), g(e), n;
				if (!r && !i && !o) return n = f(t, 12, F(e)), d(V.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n.value), g(e), n;
				break;
			}
		}
		return n;
	}
	function z(e, t) {
		let { currentType: n } = t, r = null, i = e.currentChar();
		switch ((n === 7 || n === 8 || n === 11 || n === 9) && (i === U || i === H) && d(V.INVALID_LINKED_FORMAT, a(), 0), i) {
			case "@": return e.next(), r = f(t, 7, "@"), t.inLinked = !0, r;
			case ".": return g(e), e.next(), f(t, 8, ".");
			case ":": return g(e), e.next(), f(t, 9, ":");
			default: return T(e) ? (r = f(t, 1, de(e)), t.braceNest = 0, t.inLinked = !1, r) : S(e, t) || w(e, t) ? (g(e), z(e, t)) : C(e, t) ? (g(e), f(t, 11, I(e))) : ee(e, t) ? (g(e), i === "{" ? R(e, t) || r : f(t, 10, L(e))) : (n === 7 && d(V.INVALID_LINKED_FORMAT, a(), 0), t.braceNest = 0, t.inLinked = !1, B(e, t));
		}
	}
	function B(e, t) {
		let n = { type: 13 };
		if (t.braceNest > 0) return R(e, t) || p(t);
		if (t.inLinked) return z(e, t) || p(t);
		switch (e.currentChar()) {
			case "{": return R(e, t) || p(t);
			case "}": return d(V.UNBALANCED_CLOSING_BRACE, a(), 0), e.next(), f(t, 3, "}");
			case "@": return z(e, t) || p(t);
			default:
				if (T(e)) return n = f(t, 1, de(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (E(e)) return f(t, 0, oe(e));
				break;
		}
		return n;
	}
	function fe() {
		let { currentType: e, offset: t, startLoc: n, endLoc: o } = c;
		return c.lastType = e, c.lastOffset = t, c.lastStartLoc = n, c.lastEndLoc = o, c.offset = i(), c.startLoc = a(), r.currentChar() === W ? f(c, 13) : B(r, c);
	}
	return {
		nextToken: fe,
		currentOffset: i,
		currentPosition: a,
		context: l
	};
}
var Me = "parser", Ne = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g, Pe = /\\([\\@{}|])/g;
function Fe(e, t) {
	return t;
}
function Ie(e, t, n) {
	switch (e) {
		case "\\\\": return "\\";
		case "\\'": return "'";
		default: {
			let e = parseInt(t || n, 16);
			return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : "�";
		}
	}
}
function Le(e = {}) {
	let t = e.location !== !1, { onError: n } = e;
	function r(e, r, i, a, ...o) {
		let s = e.currentPosition();
		s.offset += a, s.column += a, n && n(Se(r, t ? be(i, s) : null, {
			domain: Me,
			args: o
		}));
	}
	function i(e, n, r) {
		let i = { type: e };
		return t && (i.start = n, i.end = n, i.loc = {
			start: r,
			end: r
		}), i;
	}
	function a(e, n, r, i) {
		t && (e.end = n, e.loc && (e.loc.end = r));
	}
	function o(e, t) {
		let n = e.context(), r = i(3, n.offset, n.startLoc);
		return r.value = t.replace(Pe, Fe), a(r, e.currentOffset(), e.currentPosition()), r;
	}
	function s(e, t) {
		let { lastOffset: n, lastStartLoc: r } = e.context(), o = i(5, n, r);
		return o.index = parseInt(t, 10), e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
	}
	function c(e, t) {
		let { lastOffset: n, lastStartLoc: r } = e.context(), o = i(4, n, r);
		return o.key = t, e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
	}
	function l(e, t) {
		let { lastOffset: n, lastStartLoc: r } = e.context(), o = i(9, n, r);
		return o.value = t.replace(Ne, Ie), e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
	}
	function u(e) {
		let t = e.nextToken(), n = e.context(), { lastOffset: o, lastStartLoc: s } = n, c = i(8, o, s);
		return t.type === 11 ? (t.value ?? r(e, V.UNEXPECTED_LEXICAL_ANALYSIS, n.lastStartLoc, 0, K(t)), c.value = t.value || "", a(c, e.currentOffset(), e.currentPosition()), { node: c }) : (r(e, V.UNEXPECTED_EMPTY_LINKED_MODIFIER, n.lastStartLoc, 0), c.value = "", a(c, o, s), {
			nextConsumeToken: t,
			node: c
		});
	}
	function d(e, t) {
		let n = e.context(), r = i(7, n.offset, n.startLoc);
		return r.value = t, a(r, e.currentOffset(), e.currentPosition()), r;
	}
	function f(e) {
		let t = e.context(), n = i(6, t.offset, t.startLoc), o = e.nextToken();
		if (o.type === 8) {
			let t = u(e);
			n.modifier = t.node, o = t.nextConsumeToken || e.nextToken();
		}
		switch (o.type !== 9 && r(e, V.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(o)), o = e.nextToken(), o.type === 2 && (o = e.nextToken()), o.type) {
			case 10:
				o.value ?? r(e, V.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(o)), n.key = d(e, o.value || "");
				break;
			case 4:
				o.value ?? r(e, V.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(o)), n.key = c(e, o.value || "");
				break;
			case 5:
				o.value ?? r(e, V.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(o)), n.key = s(e, o.value || "");
				break;
			case 6:
				o.value ?? r(e, V.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(o)), n.key = l(e, o.value || "");
				break;
			default: {
				r(e, V.UNEXPECTED_EMPTY_LINKED_KEY, t.lastStartLoc, 0);
				let s = e.context(), c = i(7, s.offset, s.startLoc);
				return c.value = "", a(c, s.offset, s.startLoc), n.key = c, a(n, s.offset, s.startLoc), {
					nextConsumeToken: o,
					node: n
				};
			}
		}
		return a(n, e.currentOffset(), e.currentPosition()), { node: n };
	}
	function p(e) {
		let t = e.context(), n = i(2, t.currentType === 1 ? e.currentOffset() : t.offset, t.currentType === 1 ? t.endLoc : t.startLoc);
		n.items = [];
		let u = null;
		do {
			let i = u || e.nextToken();
			switch (u = null, i.type) {
				case 0:
					i.value ?? r(e, V.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(i)), n.items.push(o(e, i.value || ""));
					break;
				case 5:
					i.value ?? r(e, V.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(i)), n.items.push(s(e, i.value || ""));
					break;
				case 4:
					i.value ?? r(e, V.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(i)), n.items.push(c(e, i.value || ""));
					break;
				case 6:
					i.value ?? r(e, V.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(i)), n.items.push(l(e, i.value || ""));
					break;
				case 7: {
					let t = f(e);
					n.items.push(t.node), u = t.nextConsumeToken || null;
					break;
				}
			}
		} while (t.currentType !== 13 && t.currentType !== 1);
		return a(n, t.currentType === 1 ? t.lastOffset : e.currentOffset(), t.currentType === 1 ? t.lastEndLoc : e.currentPosition()), n;
	}
	function m(e, t, n, o) {
		let s = e.context(), c = o.items.length === 0, l = i(1, t, n);
		l.cases = [], l.cases.push(o);
		do {
			let t = p(e);
			c ||= t.items.length === 0, l.cases.push(t);
		} while (s.currentType !== 13);
		return c && r(e, V.MUST_HAVE_MESSAGES_IN_PLURAL, n, 0), a(l, e.currentOffset(), e.currentPosition()), l;
	}
	function h(e) {
		let t = e.context(), { offset: n, startLoc: r } = t, i = p(e);
		return t.currentType === 13 ? i : m(e, n, r, i);
	}
	function g(n) {
		let o = je(n, A({}, e)), s = o.context(), c = i(0, s.offset, s.startLoc);
		return t && c.loc && (c.loc.source = n), c.body = h(o), e.onCacheKey && (c.cacheKey = e.onCacheKey(n)), s.currentType !== 13 && r(o, V.UNEXPECTED_LEXICAL_ANALYSIS, s.lastStartLoc, 0, n[s.offset] || ""), a(c, o.currentOffset(), o.currentPosition()), c;
	}
	return { parse: g };
}
function K(e) {
	if (e.type === 13) return "EOF";
	let t = (e.value || "").replace(/\r?\n/gu, "\\n");
	return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Re(e, t = {}) {
	let n = {
		ast: e,
		helpers: /* @__PURE__ */ new Set()
	};
	return {
		context: () => n,
		helper: (e) => (n.helpers.add(e), e)
	};
}
function ze(e, t) {
	for (let n = 0; n < e.length; n++) Be(e[n], t);
}
function Be(e, t) {
	switch (e.type) {
		case 1:
			ze(e.cases, t), t.helper("plural");
			break;
		case 2:
			ze(e.items, t);
			break;
		case 6:
			Be(e.key, t), t.helper("linked"), t.helper("type");
			break;
		case 5:
			t.helper("interpolate"), t.helper("list");
			break;
		case 4:
			t.helper("interpolate"), t.helper("named");
			break;
	}
}
function Ve(e, t = {}) {
	let n = Re(e);
	n.helper("normalize"), e.body && Be(e.body, n);
	let r = n.context();
	e.helpers = Array.from(r.helpers);
}
function He(e) {
	let t = e.body;
	return t.type === 2 ? Ue(t) : t.cases.forEach((e) => Ue(e)), e;
}
function Ue(e) {
	if (e.items.length === 1) {
		let t = e.items[0];
		(t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
	} else {
		let t = [];
		for (let n = 0; n < e.items.length; n++) {
			let r = e.items[n];
			if (!(r.type === 3 || r.type === 9) || r.value == null) break;
			t.push(r.value);
		}
		if (t.length === e.items.length) {
			e.static = pe(t);
			for (let t = 0; t < e.items.length; t++) {
				let n = e.items[t];
				(n.type === 3 || n.type === 9) && delete n.value;
			}
		}
	}
}
var We = "minifier";
function Ge(e) {
	switch (e.t = e.type, e.type) {
		case 0: {
			let t = e;
			Ge(t.body), t.b = t.body, delete t.body;
			break;
		}
		case 1: {
			let t = e, n = t.cases;
			for (let e = 0; e < n.length; e++) Ge(n[e]);
			t.c = n, delete t.cases;
			break;
		}
		case 2: {
			let t = e, n = t.items;
			for (let e = 0; e < n.length; e++) Ge(n[e]);
			t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
			break;
		}
		case 3:
		case 9:
		case 8:
		case 7: {
			let t = e;
			t.value && (t.v = t.value, delete t.value);
			break;
		}
		case 6: {
			let t = e;
			Ge(t.key), t.k = t.key, delete t.key, t.modifier && (Ge(t.modifier), t.m = t.modifier, delete t.modifier);
			break;
		}
		case 5: {
			let t = e;
			t.i = t.index, delete t.index;
			break;
		}
		case 4: {
			let t = e;
			t.k = t.key, delete t.key;
			break;
		}
		default: if (process.env.NODE_ENV !== "production") throw Se(V.UNHANDLED_MINIFIER_NODE_TYPE, null, {
			domain: We,
			args: [e.type]
		});
	}
	delete e.type;
}
var Ke = "parser";
function qe(e, t) {
	let { sourceMap: n, filename: r, breakLineCode: i, needIndent: a } = t, o = t.location !== !1, s = {
		filename: r,
		code: "",
		column: 1,
		line: 1,
		offset: 0,
		map: void 0,
		breakLineCode: i,
		needIndent: a,
		indentLevel: 0
	};
	o && e.loc && (s.source = e.loc.source);
	let c = () => s;
	function l(e, t) {
		s.code += e;
	}
	function u(e, t = !0) {
		let n = t ? i : "";
		l(a ? n + "  ".repeat(e) : n);
	}
	function d(e = !0) {
		let t = ++s.indentLevel;
		e && u(t);
	}
	function f(e = !0) {
		let t = --s.indentLevel;
		e && u(t);
	}
	function p() {
		u(s.indentLevel);
	}
	return {
		context: c,
		push: l,
		indent: d,
		deindent: f,
		newline: p,
		helper: (e) => `_${e}`,
		needIndent: () => s.needIndent
	};
}
function Je(e, t) {
	let { helper: n } = e;
	e.push(`${n("linked")}(`), Qe(e, t.key), t.modifier ? (e.push(", "), Qe(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Ye(e, t) {
	let { helper: n, needIndent: r } = e;
	e.push(`${n("normalize")}([`), e.indent(r());
	let i = t.items.length;
	for (let n = 0; n < i && (Qe(e, t.items[n]), n !== i - 1); n++) e.push(", ");
	e.deindent(r()), e.push("])");
}
function Xe(e, t) {
	let { helper: n, needIndent: r } = e;
	if (t.cases.length > 1) {
		e.push(`${n("plural")}([`), e.indent(r());
		let i = t.cases.length;
		for (let n = 0; n < i && (Qe(e, t.cases[n]), n !== i - 1); n++) e.push(", ");
		e.deindent(r()), e.push("])");
	}
}
function Ze(e, t) {
	t.body ? Qe(e, t.body) : e.push("null");
}
function Qe(e, t) {
	let { helper: n } = e;
	switch (t.type) {
		case 0:
			Ze(e, t);
			break;
		case 1:
			Xe(e, t);
			break;
		case 2:
			Ye(e, t);
			break;
		case 6:
			Je(e, t);
			break;
		case 8:
			e.push(JSON.stringify(t.value), t);
			break;
		case 7:
			e.push(JSON.stringify(t.value), t);
			break;
		case 5:
			e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
			break;
		case 4:
			e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
			break;
		case 9:
			e.push(JSON.stringify(t.value), t);
			break;
		case 3:
			e.push(JSON.stringify(t.value), t);
			break;
		default: if (process.env.NODE_ENV !== "production") throw Se(V.UNHANDLED_CODEGEN_NODE_TYPE, null, {
			domain: Ke,
			args: [t.type]
		});
	}
}
var $e = (e, t = {}) => {
	let n = F(t.mode) ? t.mode : "normal", r = F(t.filename) ? t.filename : "message.intl", i = !!t.sourceMap, a = t.breakLineCode == null ? n === "arrow" ? ";" : "\n" : t.breakLineCode, o = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], c = qe(e, {
		mode: n,
		filename: r,
		sourceMap: i,
		breakLineCode: a,
		needIndent: o
	});
	c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(o), s.length > 0 && (c.push(`const { ${pe(s.map((e) => `${e}: _${e}`), ", ")} } = ctx`), c.newline()), c.push("return "), Qe(c, e), c.deindent(o), c.push("}"), delete e.helpers;
	let { code: l, map: u } = c.context();
	return {
		ast: e,
		code: l,
		map: u ? u.toJSON() : void 0
	};
};
function et(e, t = {}) {
	let n = A({}, t), r = !!n.jit, i = !!n.minify, a = n.optimize == null ? !0 : n.optimize, o = Le(n).parse(e);
	return r ? (a && He(o), i && Ge(o), {
		ast: o,
		code: ""
	}) : (Ve(o, n), $e(o, n));
}
function q(e) {
	return L(e) && ut(e) === 0 && (M(e, "b") || M(e, "body"));
}
var tt = ["b", "body"];
function nt(e) {
	return _t(e, tt);
}
var rt = ["c", "cases"];
function it(e) {
	return _t(e, rt, []);
}
var at = ["s", "static"];
function ot(e) {
	return _t(e, at);
}
var st = ["i", "items"];
function ct(e) {
	return _t(e, st, []);
}
var lt = ["t", "type"];
function ut(e) {
	return _t(e, lt);
}
var dt = ["v", "value"];
function ft(e, t) {
	let n = _t(e, dt);
	if (n != null) return n;
	throw yt(t);
}
var pt = ["m", "modifier"];
function mt(e) {
	return _t(e, pt);
}
var ht = ["k", "key"];
function gt(e) {
	let t = _t(e, ht);
	if (t) return t;
	throw yt(6);
}
function _t(e, t, n) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (M(e, r) && e[r] != null) return e[r];
	}
	return n;
}
var vt = [
	...tt,
	...rt,
	...at,
	...st,
	...ht,
	...pt,
	...dt,
	...lt
];
function yt(e) {
	return /* @__PURE__ */ Error(`unhandled node type: ${e}`);
}
function bt(e) {
	return (t) => xt(t, e);
}
function xt(e, t) {
	let n = nt(t);
	if (n == null) throw yt(0);
	if (ut(n) === 1) {
		let t = it(n);
		return e.plural(t.reduce((t, n) => [...t, St(e, n)], []));
	} else return St(e, n);
}
function St(e, t) {
	let n = ot(t);
	if (n != null) return e.type === "text" ? n : e.normalize([n]);
	{
		let n = ct(t).reduce((t, n) => [...t, Ct(e, n)], []);
		return e.normalize(n);
	}
}
function Ct(e, t) {
	let n = ut(t);
	switch (n) {
		case 3: return ft(t, n);
		case 9: return ft(t, n);
		case 4: {
			let r = t;
			if (M(r, "k") && r.k) return e.interpolate(e.named(r.k));
			if (M(r, "key") && r.key) return e.interpolate(e.named(r.key));
			throw yt(n);
		}
		case 5: {
			let r = t;
			if (M(r, "i") && k(r.i)) return e.interpolate(e.list(r.i));
			if (M(r, "index") && k(r.index)) return e.interpolate(e.list(r.index));
			throw yt(n);
		}
		case 6: {
			let n = t, r = mt(n), i = gt(n);
			return e.linked(Ct(e, i), r ? Ct(e, r) : void 0, e.type);
		}
		case 7: return ft(t, n);
		case 8: return ft(t, n);
		default: throw Error(`unhandled node on format message part: ${n}`);
	}
}
var wt = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Tt(e, t) {
	t && Te(e) && y(T(wt, { source: e }));
}
var Et = (e) => e, Dt = j();
function Ot(e, t = {}) {
	let n = !1, r = t.onError || Ce;
	return t.onError = (e) => {
		n = !0, r(e);
	}, {
		...et(e, t),
		detectError: n
	};
}
function kt(e, t) {
	if (F(e)) {
		let n = I(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
		process.env.NODE_ENV !== "production" && Tt(e, n);
		let r = (t.onCacheKey || Et)(e), i = Dt[r];
		if (i) return i;
		let { ast: a, detectError: o } = Ot(e, {
			...t,
			location: process.env.NODE_ENV !== "production",
			jit: !0
		}), s = bt(a);
		return o ? s : Dt[r] = s;
	} else {
		if (process.env.NODE_ENV !== "production" && !q(e)) return y(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
		let n = e.cacheKey;
		return n ? Dt[n] || (Dt[n] = bt(e)) : bt(e);
	}
}
var At = null;
function jt(e) {
	At = e;
}
function Mt(e, t, n) {
	At && At.emit("i18n:init", {
		timestamp: Date.now(),
		i18n: e,
		version: t,
		meta: n
	});
}
var Nt = Pt("function:translate");
function Pt(e) {
	return (t) => At && At.emit(e, t);
}
var J = {
	INVALID_ARGUMENT: 17,
	INVALID_DATE_ARGUMENT: 18,
	INVALID_ISO_DATE_ARGUMENT: 19,
	NOT_SUPPORT_NON_STRING_MESSAGE: 20,
	NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
	NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
	NOT_SUPPORT_LOCALE_TYPE: 23
};
function Ft(e) {
	return Se(e, null, process.env.NODE_ENV === "production" ? void 0 : { messages: It });
}
var It = {
	[J.INVALID_ARGUMENT]: "Invalid arguments",
	[J.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
	[J.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
	[J.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
	[J.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
	[J.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
	[J.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Lt(e, t) {
	return t.locale == null ? zt(e.locale) : zt(t.locale);
}
var Rt;
function zt(e) {
	if (F(e)) return e;
	if (P(e)) {
		if (e.resolvedOnce && Rt != null) return Rt;
		if (e.constructor.name === "Function") {
			let t = e();
			if (de(t)) throw Ft(J.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
			return Rt = t;
		} else throw Ft(J.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	} else throw Ft(J.NOT_SUPPORT_LOCALE_TYPE);
}
function Bt(e, t, n) {
	return [...new Set([n, ...N(t) ? t : L(t) ? Object.keys(t) : F(t) ? [t] : [n]])];
}
function Vt(e, t, n) {
	let r = F(n) ? n : an, i = e;
	i.__localeChainCache ||= /* @__PURE__ */ new Map();
	let a = i.__localeChainCache.get(r);
	if (!a) {
		a = [];
		let e = [n];
		for (; N(e);) e = Ht(a, e, t);
		let o = N(t) || !B(t) ? t : t.default ? t.default : null;
		e = F(o) ? [o] : o, N(e) && Ht(a, e, !1), i.__localeChainCache.set(r, a);
	}
	return a;
}
function Ht(e, t, n) {
	let r = !0;
	for (let i = 0; i < t.length && I(r); i++) {
		let a = t[i];
		F(a) && (r = Ut(e, t[i], n));
	}
	return r;
}
function Ut(e, t, n) {
	let r, i = t.split("-");
	do
		r = Wt(e, i.join("-"), n), i.splice(-1, 1);
	while (i.length && r === !0);
	return r;
}
function Wt(e, t, n) {
	let r = !1;
	if (!e.includes(t) && (r = !0, t)) {
		r = t[t.length - 1] !== "!";
		let i = t.replace(/!/g, "");
		e.push(i), (N(n) || B(n)) && n[i] && (r = n[i]);
	}
	return r;
}
var Gt = [];
Gt[0] = {
	w: [0],
	i: [3, 0],
	"[": [4],
	o: [7]
}, Gt[1] = {
	w: [1],
	".": [2],
	"[": [4],
	o: [7]
}, Gt[2] = {
	w: [2],
	i: [3, 0],
	0: [3, 0]
}, Gt[3] = {
	i: [3, 0],
	0: [3, 0],
	w: [1, 1],
	".": [2, 1],
	"[": [4, 1],
	o: [7, 1]
}, Gt[4] = {
	"'": [5, 0],
	"\"": [6, 0],
	"[": [4, 2],
	"]": [1, 3],
	o: 8,
	l: [4, 0]
}, Gt[5] = {
	"'": [4, 0],
	o: 8,
	l: [5, 0]
}, Gt[6] = {
	"\"": [4, 0],
	o: 8,
	l: [6, 0]
};
var Kt = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function qt(e) {
	return Kt.test(e);
}
function Jt(e) {
	let t = e.charCodeAt(0);
	return t === e.charCodeAt(e.length - 1) && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Yt(e) {
	if (e == null) return "o";
	switch (e.charCodeAt(0)) {
		case 91:
		case 93:
		case 46:
		case 34:
		case 39: return e;
		case 95:
		case 36:
		case 45: return "i";
		case 9:
		case 10:
		case 13:
		case 160:
		case 65279:
		case 8232:
		case 8233: return "w";
	}
	return "i";
}
function Xt(e) {
	let t = e.trim();
	return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : qt(t) ? Jt(t) : "*" + t;
}
function Zt(e) {
	let t = [], n = -1, r = 0, i = 0, a, o, s, c, l, u, d, f = [];
	f[0] = () => {
		o === void 0 ? o = s : o += s;
	}, f[1] = () => {
		o !== void 0 && (t.push(o), o = void 0);
	}, f[2] = () => {
		f[0](), i++;
	}, f[3] = () => {
		if (i > 0) i--, r = 4, f[0]();
		else {
			if (i = 0, o === void 0 || (o = Xt(o), o === !1)) return !1;
			f[1]();
		}
	};
	function p() {
		let t = e[n + 1];
		if (r === 5 && t === "'" || r === 6 && t === "\"") return n++, s = "\\" + t, f[0](), !0;
	}
	for (; r !== null;) if (n++, a = e[n], !(a === "\\" && p())) {
		if (c = Yt(a), d = Gt[r], l = d[c] || d.l || 8, l === 8 || (r = l[0], l[1] !== void 0 && (u = f[l[1]], u && (s = a, u() === !1)))) return;
		if (r === 7) return t;
	}
}
var Qt = /* @__PURE__ */ new Map();
function $t(e, t) {
	return L(e) ? e[t] : null;
}
function en(e, t) {
	if (!L(e)) return null;
	let n = Qt.get(t);
	if (n || (n = Zt(t), n && Qt.set(t, n)), !n) return null;
	let r = n.length, i = e, a = 0;
	for (; a < r;) {
		let e = n[a];
		if (vt.includes(e) && q(i) || !L(i) || !M(i, e)) return null;
		let t = i[e];
		if (t === void 0 || P(i)) return null;
		i = t, a++;
	}
	return i;
}
var Y = {
	NOT_FOUND_KEY: 1,
	FALLBACK_TO_TRANSLATE: 2,
	CANNOT_FORMAT_NUMBER: 3,
	FALLBACK_TO_NUMBER_FORMAT: 4,
	CANNOT_FORMAT_DATE: 5,
	FALLBACK_TO_DATE_FORMAT: 6,
	EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
	INVALID_NUMBER_ARGUMENT: 8,
	INVALID_DATE_ARGUMENT: 9
}, tn = {
	[Y.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
	[Y.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
	[Y.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
	[Y.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
	[Y.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
	[Y.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
	[Y.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future.",
	[Y.INVALID_NUMBER_ARGUMENT]: "Invalid argument for number formatting: expected a number but received '{value}'.",
	[Y.INVALID_DATE_ARGUMENT]: "Invalid argument for datetime formatting: expected a Date, number, or ISO string but received '{value}'."
};
function nn(e, ...t) {
	return T(tn[e], ...t);
}
var rn = "11.4.0", an = "en-US", on = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function sn() {
	return {
		upper: (e, t) => t === "text" && F(e) ? e.toUpperCase() : t === "vnode" && L(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
		lower: (e, t) => t === "text" && F(e) ? e.toLowerCase() : t === "vnode" && L(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
		capitalize: (e, t) => t === "text" && F(e) ? on(e) : t === "vnode" && L(e) && "__v_isVNode" in e ? on(e.children) : e
	};
}
var cn;
function ln(e) {
	cn = e;
}
var un;
function dn(e) {
	un = e;
}
var fn;
function pn(e) {
	fn = e;
}
var mn = null, hn = (e) => {
	mn = e;
}, gn = () => mn, _n = null, vn = (e) => {
	_n = e;
}, yn = () => _n, bn = 0;
function xn(e = {}) {
	let t = P(e.onWarn) ? e.onWarn : y, n = F(e.version) ? e.version : rn, r = F(e.locale) || P(e.locale) ? e.locale : an, i = P(r) ? an : r, a = N(e.fallbackLocale) || B(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i, o = B(e.messages) ? e.messages : Sn(i), s = B(e.datetimeFormats) ? e.datetimeFormats : Sn(i), c = B(e.numberFormats) ? e.numberFormats : Sn(i), l = A(j(), e.modifiers, sn()), u = e.pluralRules || j(), d = P(e.missing) ? e.missing : null, f = I(e.missingWarn) || ne(e.missingWarn) ? e.missingWarn : !0, p = I(e.fallbackWarn) || ne(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, h = !!e.unresolving, g = P(e.postTranslation) ? e.postTranslation : null, _ = B(e.processor) ? e.processor : null, v = I(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, b = !!e.escapeParameter, S = P(e.messageCompiler) ? e.messageCompiler : cn;
	process.env.NODE_ENV !== "production" && P(e.messageCompiler) && x(nn(Y.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
	let C = P(e.messageResolver) ? e.messageResolver : un || $t, w = P(e.localeFallbacker) ? e.localeFallbacker : fn || Bt, ee = L(e.fallbackContext) ? e.fallbackContext : void 0, T = e, E = L(T.__datetimeFormatters) ? T.__datetimeFormatters : /* @__PURE__ */ new Map(), D = L(T.__numberFormatters) ? T.__numberFormatters : /* @__PURE__ */ new Map(), O = L(T.__meta) ? T.__meta : {};
	bn++;
	let k = {
		version: n,
		cid: bn,
		locale: r,
		fallbackLocale: a,
		messages: o,
		modifiers: l,
		pluralRules: u,
		missing: d,
		missingWarn: f,
		fallbackWarn: p,
		fallbackFormat: m,
		unresolving: h,
		postTranslation: g,
		processor: _,
		warnHtmlMessage: v,
		escapeParameter: b,
		messageCompiler: S,
		messageResolver: C,
		localeFallbacker: w,
		fallbackContext: ee,
		onWarn: t,
		__meta: O
	};
	return k.datetimeFormats = s, k.numberFormats = c, k.__datetimeFormatters = E, k.__numberFormatters = D, process.env.NODE_ENV !== "production" && (k.__v_emitter = T.__v_emitter == null ? void 0 : T.__v_emitter), process.env.NODE_ENV !== "production" && Mt(k, n, O), k;
}
var Sn = (e) => ({ [e]: j() });
function Cn(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function wn(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function Tn(e, t, n, r, i) {
	let { missing: a, onWarn: o } = e;
	if (process.env.NODE_ENV !== "production") {
		let r = e.__v_emitter;
		r && r.emit("missing", {
			locale: n,
			key: t,
			type: i,
			groupId: `${i}:${t}`
		});
	}
	if (a !== null) {
		let r = a(e, n, t, i);
		return F(r) ? r : t;
	} else return process.env.NODE_ENV !== "production" && wn(r, t) && o(nn(Y.NOT_FOUND_KEY, {
		key: t,
		locale: n
	})), t;
}
function En(e, t, n) {
	let r = e;
	r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Dn(e, t) {
	return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function On(e, t) {
	let n = t.indexOf(e);
	if (n === -1) return !1;
	for (let r = n + 1; r < t.length; r++) if (Dn(e, t[r])) return !0;
	return !1;
}
var kn = typeof Intl < "u", An = {
	dateTimeFormat: kn && Intl.DateTimeFormat !== void 0,
	numberFormat: kn && Intl.NumberFormat !== void 0
};
function jn(e, ...t) {
	let { datetimeFormats: n, unresolving: r, fallbackLocale: i, onWarn: a, localeFallbacker: o } = e, { __datetimeFormatters: s } = e;
	if (process.env.NODE_ENV !== "production" && !An.dateTimeFormat) return a(nn(Y.CANNOT_FORMAT_DATE)), "";
	if (!F(t[0]) && !te(t[0]) && !k(t[0])) return process.env.NODE_ENV !== "production" && a(nn(Y.INVALID_DATE_ARGUMENT, { value: String(t[0]) })), "";
	let [c, l, u, d] = Nn(...t), f = I(u.missingWarn) ? u.missingWarn : e.missingWarn, p = I(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = Lt(e, u), g = o(e, i, h);
	if (!F(c) || c === "") return new Intl.DateTimeFormat(h.replace(/!/g, ""), d).format(l);
	let _ = {}, v, y = null, b = h, x = null, S = "datetime format";
	for (let t = 0; t < g.length; t++) {
		if (v = x = g[t], process.env.NODE_ENV !== "production" && h !== v && Cn(p, c) && a(nn(Y.FALLBACK_TO_DATE_FORMAT, {
			key: c,
			target: v
		})), process.env.NODE_ENV !== "production" && h !== v) {
			let t = e.__v_emitter;
			t && t.emit("fallback", {
				type: S,
				key: c,
				from: b,
				to: x,
				groupId: `${S}:${c}`
			});
		}
		if (_ = n[v] || {}, y = _[c], B(y)) break;
		Tn(e, c, v, f, S), b = x;
	}
	if (!B(y) || !F(v)) return r ? -1 : c;
	let C = `${v}__${c}`;
	re(d) || (C = `${C}__${JSON.stringify(d)}`);
	let w = s.get(C);
	return w || (w = new Intl.DateTimeFormat(v, A({}, y, d)), s.set(C, w)), m ? w.formatToParts(l) : w.format(l);
}
var Mn = [
	"localeMatcher",
	"weekday",
	"era",
	"year",
	"month",
	"day",
	"hour",
	"minute",
	"second",
	"timeZoneName",
	"formatMatcher",
	"hour12",
	"timeZone",
	"dateStyle",
	"timeStyle",
	"calendar",
	"dayPeriod",
	"numberingSystem",
	"hourCycle",
	"fractionalSecondDigits"
];
function Nn(...e) {
	let [t, n, r, i] = e, a = j(), o = j(), s;
	if (F(t)) {
		let e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
		if (!e) throw Ft(J.INVALID_ISO_DATE_ARGUMENT);
		let n = e[3] ? e[3].trim().startsWith("T") ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}` : e[1].trim();
		s = new Date(n);
		try {
			s.toISOString();
		} catch {
			throw Ft(J.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (te(t)) {
		if (isNaN(t.getTime())) throw Ft(J.INVALID_DATE_ARGUMENT);
		s = t;
	} else if (k(t)) s = t;
	else throw Ft(J.INVALID_ARGUMENT);
	return F(n) ? a.key = n : B(n) && Object.keys(n).forEach((e) => {
		Mn.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), F(r) ? a.locale = r : B(r) && (o = r), B(i) && (o = i), [
		a.key || "",
		s,
		a,
		o
	];
}
function Pn(e, t, n) {
	let r = e;
	for (let e in n) {
		let n = `${t}__${e}`;
		r.__datetimeFormatters.has(n) && r.__datetimeFormatters.delete(n);
	}
}
function Fn(e, ...t) {
	let { numberFormats: n, unresolving: r, fallbackLocale: i, onWarn: a, localeFallbacker: o } = e, { __numberFormatters: s } = e;
	if (process.env.NODE_ENV !== "production" && !An.numberFormat) return a(nn(Y.CANNOT_FORMAT_NUMBER)), "";
	if (!k(t[0])) return process.env.NODE_ENV !== "production" && a(nn(Y.INVALID_NUMBER_ARGUMENT, { value: String(t[0]) })), "";
	let [c, l, u, d] = Ln(...t), f = I(u.missingWarn) ? u.missingWarn : e.missingWarn, p = I(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = Lt(e, u), g = o(e, i, h);
	if (!F(c) || c === "") return new Intl.NumberFormat(h.replace(/!/g, ""), d).format(l);
	let _ = {}, v, y = null, b = h, x = null, S = "number format";
	for (let t = 0; t < g.length; t++) {
		if (v = x = g[t], process.env.NODE_ENV !== "production" && h !== v && Cn(p, c) && a(nn(Y.FALLBACK_TO_NUMBER_FORMAT, {
			key: c,
			target: v
		})), process.env.NODE_ENV !== "production" && h !== v) {
			let t = e.__v_emitter;
			t && t.emit("fallback", {
				type: S,
				key: c,
				from: b,
				to: x,
				groupId: `${S}:${c}`
			});
		}
		if (_ = n[v] || {}, y = _[c], B(y)) break;
		Tn(e, c, v, f, S), b = x;
	}
	if (!B(y) || !F(v)) return r ? -1 : c;
	let C = `${v}__${c}`;
	re(d) || (C = `${C}__${JSON.stringify(d)}`);
	let w = s.get(C);
	return w || (w = new Intl.NumberFormat(v, A({}, y, d)), s.set(C, w)), m ? w.formatToParts(l) : w.format(l);
}
var In = [
	"localeMatcher",
	"style",
	"currency",
	"currencyDisplay",
	"currencySign",
	"useGrouping",
	"minimumIntegerDigits",
	"minimumFractionDigits",
	"maximumFractionDigits",
	"minimumSignificantDigits",
	"maximumSignificantDigits",
	"compactDisplay",
	"notation",
	"signDisplay",
	"unit",
	"unitDisplay",
	"roundingMode",
	"roundingPriority",
	"roundingIncrement",
	"trailingZeroDisplay"
];
function Ln(...e) {
	let [t, n, r, i] = e, a = j(), o = j();
	if (!k(t)) throw Ft(J.INVALID_ARGUMENT);
	let s = t;
	return F(n) ? a.key = n : B(n) && Object.keys(n).forEach((e) => {
		In.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), F(r) ? a.locale = r : B(r) && (o = r), B(i) && (o = i), [
		a.key || "",
		s,
		a,
		o
	];
}
function Rn(e, t, n) {
	let r = e;
	for (let e in n) {
		let n = `${t}__${e}`;
		r.__numberFormatters.has(n) && r.__numberFormatters.delete(n);
	}
}
var zn = (e) => e, Bn = (e) => "", Vn = "text", Hn = (e) => e.length === 0 ? "" : pe(e), Un = fe;
function Wn(e, t) {
	return e = Math.abs(e), t === 2 ? e === 1 ? 0 : 1 : Math.min(e, 2);
}
function Gn(e) {
	let t = k(e.pluralIndex) ? e.pluralIndex : -1;
	return k(e.named?.count) ? e.named.count : k(e.named?.n) ? e.named.n : t;
}
function Kn(e = {}) {
	let t = e.locale, n = Gn(e), r = F(t) && P(e.pluralRules?.[t]) ? e.pluralRules[t] : Wn, i = r === Wn ? void 0 : Wn, a = (e) => e[r(n, e.length, i)], o = e.list || [], s = (e) => o[e], c = e.named || j();
	k(e.pluralIndex) && (c.count ||= e.pluralIndex, c.n ||= e.pluralIndex);
	let l = (e) => c[e];
	function u(t, n) {
		return (P(e.messages) ? e.messages(t, !!n) : L(e.messages) ? e.messages[t] : !1) || (e.parent ? e.parent.message(t) : Bn);
	}
	let d = (t) => e.modifiers ? e.modifiers[t] : zn, f = P(e.processor?.normalize) ? e.processor.normalize : Hn, p = P(e.processor?.interpolate) ? e.processor.interpolate : Un, m = {
		list: s,
		named: l,
		plural: a,
		linked: (e, ...t) => {
			let [n, r] = t, i = "text", a = "";
			t.length === 1 ? L(n) ? (a = n.modifier || a, i = n.type || i) : F(n) && (a = n || a) : t.length === 2 && (F(n) && (a = n || a), F(r) && (i = r || i));
			let o = u(e, !0)(m), s = o === "" || o === void 0 ? e : o, c = i === "vnode" && N(s) && a ? s[0] : s;
			return a ? d(a)(c, i) : c;
		},
		message: u,
		type: F(e.processor?.type) ? e.processor.type : Vn,
		interpolate: p,
		normalize: f,
		values: A(j(), o, c)
	};
	return m;
}
var qn = () => "", X = (e) => P(e);
function Jn(e, ...t) {
	let { fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: a, fallbackLocale: o, messages: s } = e, [c, l] = $n(...t), u = I(l.missingWarn) ? l.missingWarn : e.missingWarn, d = I(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, f = I(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, p = !!l.resolvedMessage, m = F(l.default) || I(l.default) ? I(l.default) ? a ? c : () => c : l.default : n ? a ? c : () => c : null, h = n || m != null && (F(m) || P(m)), g = Lt(e, l);
	f && Yn(l);
	let [_, v, b] = p ? [
		c,
		g,
		s[g] || j()
	] : Xn(e, c, g, o, d, u), x = _, S = c;
	if (!p && !(F(x) || q(x) || X(x)) && h && (x = m, S = x), !p && (!(F(x) || q(x) || X(x)) || !F(v))) return i ? -1 : c;
	if (process.env.NODE_ENV !== "production" && F(x) && e.messageCompiler == null) return y(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
	let C = !1, w = X(x) ? x : Zn(e, c, v, x, S, () => {
		C = !0;
	});
	if (C) return x;
	let ee = Qn(e, w, Kn(nr(e, v, b, l))), T = r ? r(ee, c) : ee;
	if (f && F(T) && (T = le(T)), process.env.NODE_ENV !== "production") {
		let t = {
			timestamp: Date.now(),
			key: F(c) ? c : X(x) ? x.key : "",
			locale: v || (X(x) ? x.locale : ""),
			format: F(x) ? x : X(x) ? x.source : "",
			message: T
		};
		t.meta = A({}, e.__meta, gn() || {}), Nt(t);
	}
	return T;
}
function Yn(e) {
	N(e.list) ? e.list = e.list.map((e) => F(e) ? se(e) : e) : L(e.named) && Object.keys(e.named).forEach((t) => {
		F(e.named[t]) && (e.named[t] = se(e.named[t]));
	});
}
function Xn(e, t, n, r, i, a) {
	let { messages: o, onWarn: s, messageResolver: c, localeFallbacker: l } = e, u = l(e, r, n), d = j(), f, p = null, m = n, h = null, g = "translate";
	for (let r = 0; r < u.length; r++) {
		f = h = u[r], process.env.NODE_ENV !== "production" && n !== f && !Dn(n, f) && Cn(i, t) && s(nn(Y.FALLBACK_TO_TRANSLATE, {
			key: t,
			target: f
		}));
		let l = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter;
		process.env.NODE_ENV !== "production" && n !== f && l && l.emit("fallback", {
			type: g,
			key: t,
			from: m,
			to: h,
			groupId: `${g}:${t}`
		}), d = o[f] || j();
		let _ = null, v, y;
		if (process.env.NODE_ENV !== "production" && S && l && (_ = window.performance.now(), v = "intlify-message-resolve-start", y = "intlify-message-resolve-end", C && C(v)), (p = c(d, t)) === null && (p = d[t]), process.env.NODE_ENV !== "production" && S && l) {
			let e = window.performance.now();
			l && _ && p && l.emit("message-resolve", {
				type: "message-resolve",
				key: t,
				message: p,
				time: e - _,
				groupId: `${g}:${t}`
			}), v && y && C && w && (C(y), w("intlify message resolve", v, y));
		}
		if (F(p) || q(p) || X(p)) break;
		if (!On(f, u)) {
			let n = Tn(e, t, f, a, g);
			n !== t && (p = n);
		}
		m = h;
	}
	return [
		p,
		f,
		d
	];
}
function Zn(e, t, n, r, i, a) {
	let { messageCompiler: o, warnHtmlMessage: s } = e;
	if (X(r)) {
		let e = r;
		return e.locale = e.locale || n, e.key = e.key || t, e;
	}
	if (o == null) {
		let e = (() => r);
		return e.locale = n, e.key = t, e;
	}
	let c = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter, l = null, u, d;
	process.env.NODE_ENV !== "production" && S && c && (l = window.performance.now(), u = "intlify-message-compilation-start", d = "intlify-message-compilation-end", C && C(u));
	let f = o(r, er(e, n, i, r, s, a));
	if (process.env.NODE_ENV !== "production" && S && c) {
		let e = window.performance.now();
		c && l && c.emit("message-compilation", {
			type: "message-compilation",
			message: r,
			time: e - l,
			groupId: `translate:${t}`
		}), u && d && C && w && (C(d), w("intlify message compilation", u, d));
	}
	return f.locale = n, f.key = t, f.source = r, f;
}
function Qn(e, t, n) {
	let r = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter, i = null, a, o;
	process.env.NODE_ENV !== "production" && S && r && (i = window.performance.now(), a = "intlify-message-evaluation-start", o = "intlify-message-evaluation-end", C && C(a));
	let s = t(n);
	if (process.env.NODE_ENV !== "production" && S && r) {
		let e = window.performance.now();
		r && i && r.emit("message-evaluation", {
			type: "message-evaluation",
			value: s,
			time: e - i,
			groupId: `translate:${t.key}`
		}), a && o && C && w && (C(o), w("intlify message evaluation", a, o));
	}
	return s;
}
function $n(...e) {
	let [t, n, r] = e, i = j();
	if (!F(t) && !k(t) && !X(t) && !q(t)) throw Ft(J.INVALID_ARGUMENT);
	let a = k(t) ? String(t) : (X(t), t);
	return k(n) ? i.plural = n : F(n) ? i.default = n : B(n) && !re(n) ? i.named = n : N(n) && (i.list = n), k(r) ? i.plural = r : F(r) ? i.default = r : B(r) && A(i, r), [a, i];
}
function er(e, t, n, r, i, a) {
	return {
		locale: t,
		key: n,
		warnHtmlMessage: i,
		onError: (t) => {
			if (a && a(t), process.env.NODE_ENV !== "production") {
				let i = tr(r), a = t.location && i && he(i, t.location.start.offset, t.location.end.offset), o = e.__v_emitter;
				o && i && o.emit("compile-error", {
					message: i,
					error: t.message,
					start: t.location && t.location.start.offset,
					end: t.location && t.location.end.offset,
					groupId: `translate:${n}`
				});
				let s = `Message compilation error: ${t.message}`;
				throw SyntaxError(a ? `${s}\n${a}` : s);
			}
			throw t;
		},
		onCacheKey: (e) => D(t, n, e)
	};
}
function tr(e) {
	if (F(e)) return e;
	if (e.loc && e.loc.source) return e.loc.source;
}
function nr(e, t, n, r) {
	let { modifiers: i, pluralRules: a, messageResolver: o, fallbackLocale: s, fallbackWarn: c, missingWarn: l, fallbackContext: u } = e, d = {
		locale: t,
		modifiers: i,
		pluralRules: a,
		messages: (r, i) => {
			let a = o(n, r);
			if (a == null && (u || i)) {
				let [n, , i] = Xn(u || e, r, t, s, c, l);
				a = n ?? o(i, r);
			}
			if (F(a) || q(a)) {
				let n = !1, i = Zn(e, r, t, a, r, () => {
					n = !0;
				});
				return n ? qn : i;
			} else if (X(a)) return a;
			else return qn;
		}
	};
	return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), k(r.plural) && (d.pluralIndex = r.plural), d;
}
function rr() {
	return ir().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ir() {
	return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
var ar = typeof Proxy == "function", or = "devtools-plugin:setup", sr = "plugin:settings:set", cr, lr;
function ur() {
	return cr === void 0 && (typeof window < "u" && window.performance ? (cr = !0, lr = window.performance) : typeof globalThis < "u" && globalThis.perf_hooks?.performance ? (cr = !0, lr = globalThis.perf_hooks.performance) : cr = !1), cr;
}
function dr() {
	return ur() ? lr.now() : Date.now();
}
var fr = class {
	constructor(e, t) {
		this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = e, this.hook = t;
		let n = {};
		if (e.settings) for (let t in e.settings) n[t] = e.settings[t].defaultValue;
		let r = `__vue-devtools-plugin-settings__${e.id}`, i = Object.assign({}, n);
		try {
			let e = localStorage.getItem(r), t = JSON.parse(e);
			Object.assign(i, t);
		} catch {}
		this.fallbacks = {
			getSettings() {
				return i;
			},
			setSettings(e) {
				try {
					localStorage.setItem(r, JSON.stringify(e));
				} catch {}
				i = e;
			},
			now() {
				return dr();
			}
		}, t && t.on(sr, (e, t) => {
			e === this.plugin.id && this.fallbacks.setSettings(t);
		}), this.proxiedOn = new Proxy({}, { get: (e, t) => this.target ? this.target.on[t] : (...e) => {
			this.onQueue.push({
				method: t,
				args: e
			});
		} }), this.proxiedTarget = new Proxy({}, { get: (e, t) => this.target ? this.target[t] : t === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(t) ? (...e) => (this.targetQueue.push({
			method: t,
			args: e,
			resolve: () => {}
		}), this.fallbacks[t](...e)) : (...e) => new Promise((n) => {
			this.targetQueue.push({
				method: t,
				args: e,
				resolve: n
			});
		}) });
	}
	async setRealTarget(e) {
		this.target = e;
		for (let e of this.onQueue) this.target.on[e.method](...e.args);
		for (let e of this.targetQueue) e.resolve(await this.target[e.method](...e.args));
	}
};
function pr(e, t) {
	let n = e, r = ir(), i = rr(), a = ar && n.enableEarlyProxy;
	if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a)) i.emit(or, e, t);
	else {
		let e = a ? new fr(n, i) : null;
		(r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
			pluginDescriptor: n,
			setupFn: t,
			proxy: e
		}), e && t(e.proxiedTarget);
	}
}
var mr = "11.4.0", Z = {
	UNEXPECTED_RETURN_TYPE: 24,
	INVALID_ARGUMENT: 25,
	MUST_BE_CALL_SETUP_TOP: 26,
	NOT_INSTALLED: 27,
	REQUIRED_VALUE: 28,
	INVALID_VALUE: 29,
	CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
	NOT_INSTALLED_WITH_PROVIDE: 31,
	UNEXPECTED_ERROR: 32,
	NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
	NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
};
function Q(e, ...t) {
	return Se(e, null, process.env.NODE_ENV === "production" ? void 0 : {
		messages: hr,
		args: t
	});
}
var hr = {
	[Z.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
	[Z.INVALID_ARGUMENT]: "Invalid argument",
	[Z.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
	[Z.NOT_INSTALLED]: "Need to install with `app.use` function",
	[Z.UNEXPECTED_ERROR]: "Unexpected error",
	[Z.REQUIRED_VALUE]: "Required in value: {0}",
	[Z.INVALID_VALUE]: "Invalid value",
	[Z.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
	[Z.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
	[Z.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
	[Z.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, gr = E("__translateVNode"), _r = E("__datetimeParts"), vr = E("__numberParts"), yr = E("__enableEmitter"), br = E("__disableEmitter"), xr = E("__setPluralRules");
E("__intlifyMeta");
var Sr = E("__injectWithOption"), Cr = E("__dispose"), $ = {
	FALLBACK_TO_ROOT: 10,
	NOT_FOUND_PARENT_SCOPE: 11,
	IGNORE_OBJ_FLATTEN: 12,
	DEPRECATE_LEGACY_MODE: 13,
	DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 14,
	DUPLICATE_USE_I18N_CALLING: 15
}, wr = {
	[$.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
	[$.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
	[$.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
	[$.DEPRECATE_LEGACY_MODE]: "Legacy API mode has been deprecated in v11. Use Composition API mode instead.\nAbout how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html",
	[$.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
	[$.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function Tr(e, ...t) {
	return T(wr[e], ...t);
}
function Er(e) {
	if (!L(e) || q(e)) return e;
	for (let t in e) if (M(e, t)) if (!t.includes(".")) L(e[t]) && Er(e[t]);
	else {
		let n = t.split("."), r = n.length - 1, i = e, a = !1;
		for (let e = 0; e < r; e++) {
			if (n[e] === "__proto__") throw Error(`unsafe key: ${n[e]}`);
			if (n[e] in i || (i[n[e]] = j()), !L(i[n[e]])) {
				process.env.NODE_ENV !== "production" && y(Tr($.IGNORE_OBJ_FLATTEN, { key: n[e] })), a = !0;
				break;
			}
			i = i[n[e]];
		}
		if (a || (q(i) ? vt.includes(n[r]) || delete e[t] : (i[n[r]] = e[t], delete e[t])), !q(i)) {
			let e = i[n[r]];
			L(e) && Er(e);
		}
	}
	return e;
}
function Dr(e, t) {
	let { messages: n, __i18n: r, messageResolver: i, flatJson: a } = t, o = B(n) ? n : N(r) ? j() : { [e]: j() };
	if (N(r) && r.forEach((e) => {
		if ("locale" in e && "resource" in e) {
			let { locale: t, resource: n } = e;
			t ? (o[t] = o[t] || j(), ve(n, o[t])) : ve(n, o);
		} else F(e) && ve(JSON.parse(e), o);
	}), i == null && a) for (let e in o) M(o, e) && Er(o[e]);
	return o;
}
function Or(e) {
	return e.type;
}
function kr(e, t, n) {
	let r = L(t.messages) ? t.messages : j();
	"__i18nGlobal" in n && (r = Dr(e.locale.value, {
		messages: r,
		__i18n: n.__i18nGlobal
	}));
	let i = Object.keys(r);
	if (i.length && i.forEach((t) => {
		e.mergeLocaleMessage(t, r[t]);
	}), L(t.datetimeFormats)) {
		let n = Object.keys(t.datetimeFormats);
		n.length && n.forEach((n) => {
			e.mergeDateTimeFormat(n, t.datetimeFormats[n]);
		});
	}
	if (L(t.numberFormats)) {
		let n = Object.keys(t.numberFormats);
		n.length && n.forEach((n) => {
			e.mergeNumberFormat(n, t.numberFormats[n]);
		});
	}
}
function Ar(e) {
	return i(n, null, e, 0);
}
function jr() {
	let t = "currentInstance";
	return t in e ? e[t] : e.getCurrentInstance();
}
var Mr = "__INTLIFY_META__", Nr = () => [], Pr = () => !1, Fr = 0;
function Ir(e) {
	return ((t, n, r, i) => e(n, r, jr() || void 0, i));
}
var Lr = () => {
	let e = jr(), t = null;
	return e && (t = Or(e)[Mr]) ? { [Mr]: t } : null;
};
function Rr(e = {}) {
	let { __root: t, __injectWithOption: n } = e, i = t === void 0, a = e.flatJson, o = S ? h : _, s = I(e.inheritLocale) ? e.inheritLocale : !0, c = o(t && s ? t.locale.value : F(e.locale) ? e.locale : an), l = o(t && s ? t.fallbackLocale.value : F(e.fallbackLocale) || N(e.fallbackLocale) || B(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value), u = o(Dr(c.value, e)), d = o(B(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), f = o(B(e.numberFormats) ? e.numberFormats : { [c.value]: {} }), p = t ? t.missingWarn : I(e.missingWarn) || ne(e.missingWarn) ? e.missingWarn : !0, m = t ? t.fallbackWarn : I(e.fallbackWarn) || ne(e.fallbackWarn) ? e.fallbackWarn : !0, g = t ? t.fallbackRoot : I(e.fallbackRoot) ? e.fallbackRoot : !0, b = !!e.fallbackFormat, x = P(e.missing) ? e.missing : null, C = P(e.missing) ? Ir(e.missing) : null, w = P(e.postTranslation) ? e.postTranslation : null, ee = t ? t.warnHtmlMessage : I(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, T = !!e.escapeParameter, E = t ? t.modifiers : B(e.modifiers) ? e.modifiers : {}, D = e.pluralRules || t && t.pluralRules, O;
	O = (() => {
		i && vn(null);
		let t = {
			version: mr,
			locale: c.value,
			fallbackLocale: l.value,
			messages: u.value,
			modifiers: E,
			pluralRules: D,
			missing: C === null ? void 0 : C,
			missingWarn: p,
			fallbackWarn: m,
			fallbackFormat: b,
			unresolving: !0,
			postTranslation: w === null ? void 0 : w,
			warnHtmlMessage: ee,
			escapeParameter: T,
			messageResolver: e.messageResolver,
			messageCompiler: e.messageCompiler,
			__meta: { framework: "vue" }
		};
		t.datetimeFormats = d.value, t.numberFormats = f.value, t.__datetimeFormatters = B(O) ? O.__datetimeFormatters : void 0, t.__numberFormatters = B(O) ? O.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (t.__v_emitter = B(O) ? O.__v_emitter : void 0);
		let n = xn(t);
		return i && vn(n), n;
	})(), En(O, c.value, l.value);
	function te() {
		return [
			c.value,
			l.value,
			u.value,
			d.value,
			f.value
		];
	}
	let re = r({
		get: () => c.value,
		set: (e) => {
			O.locale = e, c.value = e;
		}
	}), ie = r({
		get: () => l.value,
		set: (e) => {
			O.fallbackLocale = e, l.value = e, En(O, c.value, e);
		}
	}), j = r(() => u.value), ae = r(() => d.value), oe = r(() => f.value);
	function se() {
		return P(w) ? w : null;
	}
	function ce(e) {
		w = e, O.postTranslation = e;
	}
	function le() {
		return x;
	}
	function ue(e) {
		e !== null && (C = Ir(e)), x = e, O.missing = C;
	}
	function de(e, t) {
		return e !== "translate" || !t.resolvedMessage;
	}
	let R = (e, n, r, a, o, s) => {
		te();
		let c;
		try {
			process.env.NODE_ENV !== "production" && hn(Lr()), i || (O.fallbackContext = t ? yn() : void 0), c = e(O);
		} finally {
			process.env.NODE_ENV !== "production" && hn(null), i || (O.fallbackContext = void 0);
		}
		if (r !== "translate exists" && k(c) && c === -1 || r === "translate exists" && !c) {
			let [e, i] = n();
			if (process.env.NODE_ENV !== "production" && t && F(e) && de(r, i) && (g && (Cn(m, e) || wn(p, e)) && y(Tr($.FALLBACK_TO_ROOT, {
				key: e,
				type: r
			})), process.env.NODE_ENV !== "production")) {
				let { __v_emitter: t } = O;
				t && g && t.emit("fallback", {
					type: r,
					key: e,
					to: "global",
					groupId: `${r}:${e}`
				});
			}
			return t && g ? a(t) : o(e);
		} else if (s(c)) return c;
		else throw Q(Z.UNEXPECTED_RETURN_TYPE);
	};
	function z(...e) {
		return R((t) => Reflect.apply(Jn, null, [t, ...e]), () => $n(...e), "translate", (t) => Reflect.apply(t.t, t, [...e]), (e) => e, (e) => F(e));
	}
	function fe(...e) {
		let [t, n, r] = e;
		if (r && !L(r)) throw Q(Z.INVALID_ARGUMENT);
		return z(t, n, A({ resolvedMessage: !0 }, r || {}));
	}
	function pe(...e) {
		return R((t) => Reflect.apply(jn, null, [t, ...e]), () => Nn(...e), "datetime format", (t) => Reflect.apply(t.d, t, [...e]), () => "", (e) => F(e) || N(e));
	}
	function me(...e) {
		return R((t) => Reflect.apply(Fn, null, [t, ...e]), () => Ln(...e), "number format", (t) => Reflect.apply(t.n, t, [...e]), () => "", (e) => F(e) || N(e));
	}
	function he(e) {
		return e.map((e) => F(e) || k(e) || I(e) ? Ar(String(e)) : e);
	}
	let ge = {
		normalize: he,
		interpolate: (e) => e,
		type: "vnode"
	};
	function _e(...e) {
		return R((t) => {
			let n, r = t;
			try {
				r.processor = ge, n = Reflect.apply(Jn, null, [r, ...e]);
			} finally {
				r.processor = null;
			}
			return n;
		}, () => $n(...e), "translate", (t) => t[gr](...e), (e) => [Ar(e)], (e) => N(e));
	}
	function ye(...e) {
		return R((t) => Reflect.apply(Fn, null, [t, ...e]), () => Ln(...e), "number format", (t) => t[vr](...e), Nr, (e) => F(e) || N(e));
	}
	function be(...e) {
		return R((t) => Reflect.apply(jn, null, [t, ...e]), () => Nn(...e), "datetime format", (t) => t[_r](...e), Nr, (e) => F(e) || N(e));
	}
	function V(e) {
		D = e, O.pluralRules = D;
	}
	function xe(e, t) {
		return R(() => {
			if (!e) return !1;
			let n = F(t) ? t : c.value, r = F(t) ? [n] : Vt(O, l.value, n);
			for (let t = 0; t < r.length; t++) {
				let n = we(r[t]), i = O.messageResolver(n, e);
				if (i === null && (i = n[e]), q(i) || X(i) || F(i)) return !0;
			}
			return !1;
		}, () => [e], "translate exists", (n) => Reflect.apply(n.te, n, [e, t]), Pr, (e) => I(e));
	}
	function Se(e) {
		let t = null, n = Vt(O, l.value, c.value);
		for (let r = 0; r < n.length; r++) {
			let i = u.value[n[r]] || {}, a = O.messageResolver(i, e);
			if (a != null) {
				t = a;
				break;
			}
		}
		return t;
	}
	function Ce(e) {
		return Se(e) ?? (t && t.tm(e) || {});
	}
	function we(e) {
		return u.value[e] || {};
	}
	function Te(e, t) {
		if (a) {
			let n = { [e]: t };
			for (let e in n) M(n, e) && Er(n[e]);
			t = n[e];
		}
		u.value[e] = t, O.messages = u.value;
	}
	function H(e, t) {
		u.value[e] = u.value[e] || {};
		let n = { [e]: t };
		if (a) for (let e in n) M(n, e) && Er(n[e]);
		t = n[e], ve(t, u.value[e]), O.messages = u.value;
	}
	function Ee(e) {
		return d.value[e] || {};
	}
	function U(e, t) {
		d.value[e] = t, O.datetimeFormats = d.value, Pn(O, e, t);
	}
	function De(e, t) {
		d.value[e] = A(d.value[e] || {}, t), O.datetimeFormats = d.value, Pn(O, e, t);
	}
	function Oe(e) {
		return f.value[e] || {};
	}
	function ke(e, t) {
		f.value[e] = t, O.numberFormats = f.value, Rn(O, e, t);
	}
	function W(e, t) {
		f.value[e] = A(f.value[e] || {}, t), O.numberFormats = f.value, Rn(O, e, t);
	}
	Fr++, t && S && (v(t.locale, (e) => {
		s && (c.value = e, O.locale = e, En(O, c.value, l.value));
	}), v(t.fallbackLocale, (e) => {
		s && (l.value = e, O.fallbackLocale = e, En(O, c.value, l.value));
	}));
	let G = {
		id: Fr,
		locale: re,
		fallbackLocale: ie,
		get inheritLocale() {
			return s;
		},
		set inheritLocale(e) {
			s = e, e && t && (c.value = t.locale.value, l.value = t.fallbackLocale.value, En(O, c.value, l.value));
		},
		get availableLocales() {
			return Object.keys(u.value).sort();
		},
		messages: j,
		get modifiers() {
			return E;
		},
		get pluralRules() {
			return D || {};
		},
		get isGlobal() {
			return i;
		},
		get missingWarn() {
			return p;
		},
		set missingWarn(e) {
			p = e, O.missingWarn = p;
		},
		get fallbackWarn() {
			return m;
		},
		set fallbackWarn(e) {
			m = e, O.fallbackWarn = m;
		},
		get fallbackRoot() {
			return g;
		},
		set fallbackRoot(e) {
			g = e;
		},
		get fallbackFormat() {
			return b;
		},
		set fallbackFormat(e) {
			b = e, O.fallbackFormat = b;
		},
		get warnHtmlMessage() {
			return ee;
		},
		set warnHtmlMessage(e) {
			ee = e, O.warnHtmlMessage = e;
		},
		get escapeParameter() {
			return T;
		},
		set escapeParameter(e) {
			T = e, O.escapeParameter = e;
		},
		t: z,
		getLocaleMessage: we,
		setLocaleMessage: Te,
		mergeLocaleMessage: H,
		getPostTranslationHandler: se,
		setPostTranslationHandler: ce,
		getMissingHandler: le,
		setMissingHandler: ue,
		[xr]: V
	};
	return G.datetimeFormats = ae, G.numberFormats = oe, G.rt = fe, G.te = xe, G.tm = Ce, G.d = pe, G.n = me, G.getDateTimeFormat = Ee, G.setDateTimeFormat = U, G.mergeDateTimeFormat = De, G.getNumberFormat = Oe, G.setNumberFormat = ke, G.mergeNumberFormat = W, G[Sr] = n, G[gr] = _e, G[_r] = be, G[vr] = ye, process.env.NODE_ENV !== "production" && (G[yr] = (e) => {
		O.__v_emitter = e;
	}, G[br] = () => {
		O.__v_emitter = void 0;
	}), G;
}
var zr = "vue-i18n: composer properties", Br = {
	"vue-devtools-plugin-vue-i18n": "Vue I18n DevTools",
	"vue-i18n-resource-inspector": "Vue I18n DevTools",
	"vue-i18n-timeline": "Vue I18n"
}, Vr = { "vue-i18n-resource-inspector": "Search for scopes ..." }, Hr = { "vue-i18n-timeline": 16764185 }, Ur;
async function Wr(e, t) {
	return new Promise((n, r) => {
		try {
			pr({
				id: "vue-devtools-plugin-vue-i18n",
				label: Br["vue-devtools-plugin-vue-i18n"],
				packageName: "vue-i18n",
				homepage: "https://vue-i18n.intlify.dev",
				logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
				componentStateTypes: [zr],
				app: e
			}, (r) => {
				Ur = r, r.on.visitComponentTree(({ componentInstance: e, treeNode: n }) => {
					Kr(e, n, t);
				}), r.on.inspectComponent(({ componentInstance: e, instanceData: n }) => {
					e.__VUE_I18N__ && n && (t.mode === "legacy" ? e.__VUE_I18N__ !== t.global.__composer && qr(n, e.__VUE_I18N__) : qr(n, e.__VUE_I18N__));
				}), r.addInspector({
					id: "vue-i18n-resource-inspector",
					label: Br["vue-i18n-resource-inspector"],
					icon: "language",
					treeFilterPlaceholder: Vr["vue-i18n-resource-inspector"]
				}), r.on.getInspectorTree((n) => {
					n.app === e && n.inspectorId === "vue-i18n-resource-inspector" && $r(n, t);
				});
				let i = /* @__PURE__ */ new Map();
				r.on.getInspectorState(async (n) => {
					if (n.app === e && n.inspectorId === "vue-i18n-resource-inspector") if (r.unhighlightElement(), ni(n, t), n.nodeId === "global") {
						if (!i.has(n.app)) {
							let [e] = await r.getComponentInstances(n.app);
							i.set(n.app, e);
						}
						r.highlightElement(i.get(n.app));
					} else {
						let e = ei(n.nodeId, t);
						e && r.highlightElement(e);
					}
				}), r.on.editInspectorState((n) => {
					n.app === e && n.inspectorId === "vue-i18n-resource-inspector" && ai(n, t);
				}), r.addTimelineLayer({
					id: "vue-i18n-timeline",
					label: Br["vue-i18n-timeline"],
					color: Hr["vue-i18n-timeline"]
				}), n(!0);
			});
		} catch (e) {
			console.error(e), r(!1);
		}
	});
}
function Gr(e) {
	return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function Kr(e, t, n) {
	let r = n.mode === "composition" ? n.global : n.global.__composer;
	if (e && e.__VUE_I18N__ && e.__VUE_I18N__ !== r) {
		let n = {
			label: `i18n (${Gr(e)} Scope)`,
			textColor: 0,
			backgroundColor: 16764185
		};
		t.tags.push(n);
	}
}
function qr(e, t) {
	let n = zr;
	e.state.push({
		type: n,
		key: "locale",
		editable: !0,
		value: t.locale.value
	}), e.state.push({
		type: n,
		key: "availableLocales",
		editable: !1,
		value: t.availableLocales
	}), e.state.push({
		type: n,
		key: "fallbackLocale",
		editable: !0,
		value: t.fallbackLocale.value
	}), e.state.push({
		type: n,
		key: "inheritLocale",
		editable: !0,
		value: t.inheritLocale
	}), e.state.push({
		type: n,
		key: "messages",
		editable: !1,
		value: Jr(t.messages.value)
	}), e.state.push({
		type: n,
		key: "datetimeFormats",
		editable: !1,
		value: t.datetimeFormats.value
	}), e.state.push({
		type: n,
		key: "numberFormats",
		editable: !1,
		value: t.numberFormats.value
	});
}
function Jr(e) {
	let t = {};
	return Object.keys(e).forEach((n) => {
		let r = e[n];
		P(r) && "source" in r ? t[n] = Qr(r) : q(r) && r.loc && r.loc.source ? t[n] = r.loc.source : L(r) ? t[n] = Jr(r) : t[n] = r;
	}), t;
}
var Yr = {
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"&": "&amp;"
};
function Xr(e) {
	return e.replace(/[<>"&]/g, Zr);
}
function Zr(e) {
	return Yr[e] || e;
}
function Qr(e) {
	return { _custom: {
		type: "function",
		display: `<span>ƒ</span> ${e.source ? `("${Xr(e.source)}")` : "(?)"}`
	} };
}
function $r(e, t) {
	e.rootNodes.push({
		id: "global",
		label: "Global Scope"
	});
	let n = t.mode === "composition" ? t.global : t.global.__composer;
	for (let [r, i] of t.__instances) {
		let a = t.mode === "composition" ? i : i.__composer;
		n !== a && e.rootNodes.push({
			id: a.id.toString(),
			label: `${Gr(r)} Scope`
		});
	}
}
function ei(e, t) {
	let n = null;
	if (e !== "global") {
		for (let [r, i] of t.__instances.entries()) if (i.id.toString() === e) {
			n = r;
			break;
		}
	}
	return n;
}
function ti(e, t) {
	if (e === "global") return t.mode === "composition" ? t.global : t.global.__composer;
	{
		let n = Array.from(t.__instances.values()).find((t) => t.id.toString() === e);
		return n ? t.mode === "composition" ? n : n.__composer : null;
	}
}
function ni(e, t) {
	let n = ti(e.nodeId, t);
	return n && (e.state = ri(n)), null;
}
function ri(e) {
	let t = {}, n = "Locale related info";
	t[n] = [
		{
			type: n,
			key: "locale",
			editable: !0,
			value: e.locale.value
		},
		{
			type: n,
			key: "fallbackLocale",
			editable: !0,
			value: e.fallbackLocale.value
		},
		{
			type: n,
			key: "availableLocales",
			editable: !1,
			value: e.availableLocales
		},
		{
			type: n,
			key: "inheritLocale",
			editable: !0,
			value: e.inheritLocale
		}
	];
	let r = "Locale messages info";
	t[r] = [{
		type: r,
		key: "messages",
		editable: !1,
		value: Jr(e.messages.value)
	}];
	{
		let n = "Datetime formats info";
		t[n] = [{
			type: n,
			key: "datetimeFormats",
			editable: !1,
			value: e.datetimeFormats.value
		}];
		let r = "Datetime formats info";
		t[r] = [{
			type: r,
			key: "numberFormats",
			editable: !1,
			value: e.numberFormats.value
		}];
	}
	return t;
}
function ii(e, t) {
	if (Ur) {
		let n;
		t && "groupId" in t && (n = t.groupId, delete t.groupId), Ur.addTimelineEvent({
			layerId: "vue-i18n-timeline",
			event: {
				title: e,
				groupId: n,
				time: Date.now(),
				meta: {},
				data: t || {},
				logType: e === "compile-error" ? "error" : e === "fallback" || e === "missing" ? "warning" : "default"
			}
		});
	}
}
function ai(e, t) {
	let n = ti(e.nodeId, t);
	if (n) {
		let [t] = e.path;
		t === "locale" && F(e.state.value) ? n.locale.value = e.state.value : t === "fallbackLocale" && (F(e.state.value) || N(e.state.value) || L(e.state.value)) ? n.fallbackLocale.value = e.state.value : t === "inheritLocale" && I(e.state.value) && (n.inheritLocale = e.state.value);
	}
}
var oi = {
	tag: { type: [String, Object] },
	locale: { type: String },
	scope: {
		type: String,
		validator: (e) => e === "parent" || e === "global",
		default: "parent"
	},
	i18n: { type: Object }
};
function si({ slots: e }, n) {
	return n.length === 1 && n[0] === "default" ? (e.default ? e.default() : []).reduce((e, n) => [...e, ...n.type === t ? n.children : [n]], []) : n.reduce((t, n) => {
		let r = e[n];
		return r && (t[n] = r()), t;
	}, j());
}
function ci() {
	return t;
}
var li = a({
	name: "i18n-t",
	props: A({
		keypath: {
			type: String,
			required: !0
		},
		plural: {
			type: [Number, String],
			validator: (e) => k(e) || !isNaN(e)
		}
	}, oi),
	setup(e, t) {
		let { slots: n, attrs: r } = t, i = e.i18n || bi({
			useScope: e.scope,
			__useComponent: !0
		});
		return () => {
			let a = Object.keys(n).filter((e) => e[0] !== "_"), o = j();
			e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = F(e.plural) ? +e.plural : e.plural);
			let s = si(t, a), c = i[gr](e.keypath, s, o), u = A(j(), r);
			return l(F(e.tag) || L(e.tag) ? e.tag : ci(), u, c);
		};
	}
});
function ui(e) {
	return N(e) && !F(e[0]);
}
function di(e, t, n, r) {
	let { slots: i, attrs: a } = t;
	return () => {
		let t = { part: !0 }, o = j();
		e.locale && (t.locale = e.locale), F(e.format) ? t.key = e.format : L(e.format) && (F(e.format.key) && (t.key = e.format.key), o = Object.keys(e.format).reduce((t, r) => n.includes(r) ? A(j(), t, { [r]: e.format[r] }) : t, j()));
		let s = r(e.value, t, o), c = [t.key];
		N(s) ? c = s.map((e, t) => {
			let n = i[e.type], r = n ? n({
				[e.type]: e.value,
				index: t,
				parts: s
			}) : [e.value];
			return ui(r) && (r[0].key = `${e.type}-${t}`), r;
		}) : F(s) && (c = [s]);
		let u = A(j(), a);
		return l(F(e.tag) || L(e.tag) ? e.tag : ci(), u, c);
	};
}
var fi = a({
	name: "i18n-n",
	props: A({
		value: {
			type: Number,
			required: !0
		},
		format: { type: [String, Object] }
	}, oi),
	setup(e, t) {
		let n = e.i18n || bi({
			useScope: e.scope,
			__useComponent: !0
		});
		return di(e, t, In, (...e) => n[vr](...e));
	}
});
function pi(e, t) {
	let n = e;
	if (e.mode === "composition") return n.__getInstance(t) || e.global;
	{
		let r = n.__getInstance(t);
		return r == null ? e.global.__composer : r.__composer;
	}
}
function mi(e) {
	let t = (t) => {
		process.env.NODE_ENV !== "production" && x(Tr($.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE));
		let { instance: n, value: r } = t;
		if (!n || !n.$) throw Q(Z.UNEXPECTED_ERROR);
		let i = pi(e, n.$), a = hi(r);
		return [Reflect.apply(i.t, i, [...gi(a)]), i];
	};
	return {
		created: (e, n) => {
			let [r, i] = t(n);
			S && (e.__i18nWatcher = v(i.locale, () => {
				n.instance && n.instance.$forceUpdate();
			})), e.__composer = i, e.textContent = r;
		},
		unmounted: (e) => {
			S && e.__i18nWatcher && (e.__i18nWatcher(), e.__i18nWatcher = void 0, delete e.__i18nWatcher), e.__composer && (e.__composer = void 0, delete e.__composer);
		},
		beforeUpdate: (e, { value: t }) => {
			if (e.__composer) {
				let n = e.__composer, r = hi(t);
				e.textContent = Reflect.apply(n.t, n, [...gi(r)]);
			}
		},
		getSSRProps: (e) => {
			let [n] = t(e);
			return { textContent: n };
		}
	};
}
function hi(e) {
	if (F(e)) return { path: e };
	if (B(e)) {
		if (!("path" in e)) throw Q(Z.REQUIRED_VALUE, "path");
		return e;
	} else throw Q(Z.INVALID_VALUE);
}
function gi(e) {
	let { path: t, locale: n, args: r, choice: i, plural: a } = e, o = {}, s = r || {};
	return F(n) && (o.locale = n), k(i) && (o.plural = i), k(a) && (o.plural = a), [
		t,
		s,
		o
	];
}
function _i(e, t, ...n) {
	let r = B(n[0]) ? n[0] : {};
	(!I(r.globalInstall) || r.globalInstall) && ([li.name, "I18nT"].forEach((t) => e.component(t, li)), [fi.name, "I18nN"].forEach((t) => e.component(t, fi)), [ji.name, "I18nD"].forEach((t) => e.component(t, ji))), e.directive("t", mi(t));
}
var vi = E("global-vue-i18n");
function yi(e = {}) {
	process.env.NODE_ENV;
	let t = I(e.globalInjection) ? e.globalInjection : !0, n = /* @__PURE__ */ new Map(), [r, i] = xi(e, !1), a = E(process.env.NODE_ENV === "production" ? "" : "vue-i18n");
	function o(e) {
		return n.get(e) || null;
	}
	function s(e, t) {
		n.set(e, t);
	}
	function c(e) {
		n.delete(e);
	}
	let l = {
		get mode() {
			return "composition";
		},
		async install(e, ...n) {
			if (process.env.NODE_ENV !== "production" && (e.__VUE_I18N__ = l), e.__VUE_I18N_SYMBOL__ = a, e.provide(e.__VUE_I18N_SYMBOL__, l), B(n[0])) {
				let e = n[0];
				l.__composerExtend = e.__composerExtend, l.__vueI18nExtend = e.__vueI18nExtend;
			}
			let r = null;
			t && (r = Ai(e, l.global)), _i(e, l, ...n);
			let o = e.unmount;
			if (e.unmount = () => {
				r && r(), l.dispose(), o();
			}, process.env.NODE_ENV !== "production") {
				if (!await Wr(e, l)) throw Q(Z.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
				let t = ge();
				{
					let e = i;
					e[yr] && e[yr](t);
				}
				t.on("*", ii);
			}
		},
		get global() {
			return i;
		},
		dispose() {
			r.stop();
		},
		__instances: n,
		__getInstance: o,
		__setInstance: s,
		__deleteInstance: c
	};
	return l;
}
function bi(e = {}) {
	let t = jr();
	if (t == null) throw Q(Z.MUST_BE_CALL_SETUP_TOP);
	if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Q(Z.NOT_INSTALLED);
	let n = Si(t), r = wi(n), i = Or(t), a = Ci(e, i);
	if (a === "global") return kr(r, e, i), r;
	if (a === "parent") {
		let i = Ti(n, t, e.__useComponent);
		return i ??= (process.env.NODE_ENV !== "production" && y(Tr($.NOT_FOUND_PARENT_SCOPE)), r), i;
	}
	if (a === "isolated") {
		if (n.mode !== "composition") throw Q(Z.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
		let i = n, a = A({}, e);
		a.__root = Ti(n, t) || r;
		let o = Rr(a);
		i.__composerExtend && (o[Cr] = i.__composerExtend(o));
		let s = null;
		if (process.env.NODE_ENV !== "production") {
			s = ge();
			let e = o;
			e[yr] && e[yr](s), s.on("*", ii);
		}
		return c() && p(() => {
			if (process.env.NODE_ENV !== "production") {
				s && s.off("*", ii);
				let e = o;
				e[br] && e[br]();
			}
			let e = o[Cr];
			e && (e(), delete o[Cr]);
		}), o;
	}
	let o = n, s = o.__getInstance(t);
	if (s == null) {
		let n = A({}, e);
		"__i18n" in i && (n.__i18n = i.__i18n), r && (n.__root = r), s = Rr(n), o.__composerExtend && (s[Cr] = o.__composerExtend(s)), Di(o, t, s), o.__setInstance(t, s);
	} else process.env.NODE_ENV !== "production" && a === "local" && y(Tr($.DUPLICATE_USE_I18N_CALLING));
	return s;
}
function xi(e, t) {
	let n = o(), r = n.run(() => Rr(e));
	if (r == null) throw Q(Z.UNEXPECTED_ERROR);
	return [n, r];
}
function Si(e) {
	let t = u(e.isCE ? vi : e.appContext.app.__VUE_I18N_SYMBOL__);
	if (!t) throw Q(e.isCE ? Z.NOT_INSTALLED_WITH_PROVIDE : Z.UNEXPECTED_ERROR);
	return t;
}
function Ci(e, t) {
	return re(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function wi(e) {
	return e.mode === "composition" ? e.global : e.global.__composer;
}
function Ti(e, t, n = !1) {
	let r = null, i = t.root, a = Ei(t, n);
	for (; a != null;) {
		let t = e;
		if (e.mode === "composition" && (r = t.__getInstance(a)), r != null || i === a) break;
		a = a.parent;
	}
	return r;
}
function Ei(e, t = !1) {
	return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Di(e, t, n) {
	let r = null;
	f(() => {
		if (process.env.NODE_ENV !== "production") {
			t.__VUE_I18N__ = n, r = ge();
			let e = n;
			e[yr] && e[yr](r), r.on("*", ii);
		}
	}, t), m(() => {
		let i = n;
		process.env.NODE_ENV !== "production" && (r && r.off("*", ii), i[br] && i[br](), delete t.__VUE_I18N__), e.__deleteInstance(t);
		let a = i[Cr];
		a && (a(), delete i[Cr]);
	}, t);
}
var Oi = [
	"locale",
	"fallbackLocale",
	"availableLocales"
], ki = [
	"t",
	"rt",
	"d",
	"n",
	"tm",
	"te"
];
function Ai(e, t) {
	let n = Object.create(null);
	return Oi.forEach((e) => {
		let r = Object.getOwnPropertyDescriptor(t, e);
		if (!r) throw Q(Z.UNEXPECTED_ERROR);
		let i = d(r.value) ? {
			get() {
				return r.value.value;
			},
			set(e) {
				r.value.value = e;
			}
		} : { get() {
			return r.get && r.get();
		} };
		Object.defineProperty(n, e, i);
	}), e.config.globalProperties.$i18n = n, ki.forEach((n) => {
		let r = Object.getOwnPropertyDescriptor(t, n);
		if (!r || !r.value) throw Q(Z.UNEXPECTED_ERROR);
		Object.defineProperty(e.config.globalProperties, `$${n}`, r);
	}), () => {
		delete e.config.globalProperties.$i18n, ki.forEach((t) => {
			delete e.config.globalProperties[`$${t}`];
		});
	};
}
var ji = a({
	name: "i18n-d",
	props: A({
		value: {
			type: [Number, Date],
			required: !0
		},
		format: { type: [String, Object] }
	}, oi),
	setup(e, t) {
		let n = e.i18n || bi({
			useScope: e.scope,
			__useComponent: !0
		});
		return di(e, t, Mn, (...e) => n[_r](...e));
	}
});
if (ln(kt), dn(en), pn(Vt), process.env.NODE_ENV !== "production") {
	let e = oe();
	e.__INTLIFY__ = !0, jt(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
var Mi = a({
	__name: "EmptyComponent",
	setup(e, { expose: t }) {
		t();
		let { t: n } = bi(), r = {
			t: n,
			value: n("header.home")
		};
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), Ni = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
};
function Pi(e, t, n, r, i, a) {
	return null;
}
var Fi = Ni(Mi, [["render", Pi], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-i18n-app/scripts/EmptyComponent.vue"]]), Ii = a({
	__name: "LibWrapper",
	setup(e, { expose: t }) {
		t();
		let n = yi({
			legacy: !1,
			locale: "en",
			messages: { en: { header: { home: "Home" } } }
		}), r = s()?.appContext.app;
		r && !r.config.globalProperties.$i18n && r.use(n);
		let i = {
			i18n: n,
			app: r
		};
		return Object.defineProperty(i, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), i;
	}
});
function Li(e, t, n, r, i, a) {
	return g(e.$slots, "default");
}
var Ri = Ni(Ii, [["render", Li], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-i18n-app/scripts/LibWrapper.vue"]]), zi = { render() {
	return l(Ri, {}, { default: () => l(Fi) });
} };
export { zi as default };
