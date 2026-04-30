import * as e from "vue";
import { Fragment as t, Text as n, computed as r, createElementBlock as i, createElementVNode as a, createVNode as o, defineComponent as s, getCurrentScope as c, h as l, inject as u, onBeforeMount as d, onMounted as f, onScopeDispose as p, onUnmounted as m, openBlock as h, ref as g, shallowRef as _, toDisplayString as v, unref as y, watch as b } from "vue";
function x(e, t) {
	typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
var S = {};
function C(e) {
	S[e] || (S[e] = !0, x(e));
}
var w = typeof window < "u", T, E;
if (process.env.NODE_ENV !== "production") {
	let e = w && window.performance;
	e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (T = (t) => {
		e.mark(t);
	}, E = (t, n, r) => {
		e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
	});
}
var ee = /\{([0-9a-zA-Z]+)\}/g;
function D(e, ...t) {
	return t.length === 1 && z(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(ee, (e, n) => t.hasOwnProperty(n) ? t[n] : "");
}
var O = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), k = (e, t, n) => te({
	l: e,
	k: t,
	s: n
}), te = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), A = (e) => typeof e == "number" && isFinite(e), ne = (e) => pe(e) === "[object Date]", re = (e) => pe(e) === "[object RegExp]", ie = (e) => B(e) && Object.keys(e).length === 0, j = Object.assign, ae = Object.create, M = (e = null) => ae(e), oe, se = () => oe ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : M();
function ce(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function le(e) {
	return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ue(e) {
	return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (e, t, n) => `${t}="${le(n)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (e, t, n) => `${t}='${le(n)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && x("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach((t) => {
		e = e.replace(t, "$1javascript&#58;");
	}), e;
}
var N = Object.prototype.hasOwnProperty;
function P(e, t) {
	return N.call(e, t);
}
var F = Array.isArray, I = (e) => typeof e == "function", L = (e) => typeof e == "string", R = (e) => typeof e == "boolean", z = (e) => typeof e == "object" && !!e, de = (e) => z(e) && I(e.then) && I(e.catch), fe = Object.prototype.toString, pe = (e) => fe.call(e), B = (e) => pe(e) === "[object Object]", me = (e) => e == null ? "" : F(e) || B(e) && e.toString === fe ? JSON.stringify(e, null, 2) : String(e);
function he(e, t = "") {
	return e.reduce((e, n, r) => r === 0 ? e + n : e + t + n, "");
}
var ge = 2;
function _e(e, t = 0, n = e.length) {
	let r = e.split(/\r?\n/), i = 0, a = [];
	for (let e = 0; e < r.length; e++) if (i += r[e].length + 1, i >= t) {
		for (let o = e - ge; o <= e + ge || n > i; o++) {
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
function ve() {
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
var ye = (e) => !z(e) || F(e);
function be(e, t) {
	if (ye(e) || ye(t)) throw Error("Invalid value");
	let n = [{
		src: e,
		des: t
	}];
	for (; n.length;) {
		let { src: e, des: t } = n.pop();
		Object.keys(e).forEach((r) => {
			r !== "__proto__" && (z(e[r]) && !z(t[r]) && (t[r] = Array.isArray(e[r]) ? [] : M()), ye(t[r]) || ye(e[r]) ? t[r] = e[r] : n.push({
				src: e[r],
				des: t[r]
			}));
		});
	}
}
function xe(e, t, n) {
	return {
		line: e,
		column: t,
		offset: n
	};
}
function Se(e, t, n) {
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
}, Ce = {
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
function we(e, t, n = {}) {
	let { domain: r, messages: i, args: a } = n, o = process.env.NODE_ENV === "production" ? e : D((i || Ce)[e] || "", ...a || []), s = SyntaxError(String(o));
	return s.code = e, t && (s.location = t), s.domain = r, s;
}
function Te(e) {
	throw e;
}
var Ee = /<\/?[\w\s="/.':;#-\/]+>/, De = (e) => Ee.test(e), H = " ", Oe = "\r", U = "\n", ke = "\u2028", Ae = "\u2029";
function W(e) {
	let t = e, n = 0, r = 1, i = 1, a = 0, o = (e) => t[e] === Oe && t[e + 1] === U, s = (e) => t[e] === U, c = (e) => t[e] === Ae, l = (e) => t[e] === ke, u = (e) => o(e) || s(e) || c(e) || l(e), d = () => n, f = () => r, p = () => i, m = () => a, h = (e) => o(e) || c(e) || l(e) ? U : t[e], g = () => h(n), _ = () => h(n + a);
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
var G = void 0, je = "'", Me = "tokenizer";
function Ne(e, t = {}) {
	let n = t.location !== !1, r = W(e), i = () => r.index(), a = () => xe(r.line(), r.column(), r.index()), o = a(), s = i(), c = {
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
		t.column += r, t.offset += r, u && u(we(e, n ? Se(a.startLoc, t) : null, {
			domain: Me,
			args: i
		}));
	}
	function f(e, t, r) {
		e.endLoc = a(), e.currentType = t;
		let i = { type: t };
		return n && (i.loc = Se(e.startLoc, e.endLoc)), r != null && (i.value = r), i;
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
		if (e === G) return !1;
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t === 95;
	}
	function v(e) {
		if (e === G) return !1;
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
		let r = e.currentPeek() === je;
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
	function T(e, t) {
		let { currentType: n } = t;
		if (n !== 9) return !1;
		let r = () => {
			let t = e.currentPeek();
			return t === "{" ? _(e.peek()) : t === "@" || t === "|" || t === ":" || t === "." || t === H || !t ? !1 : t === U ? (e.peek(), r()) : ee(e, !1);
		}, i = r();
		return e.resetPeek(), i;
	}
	function E(e) {
		h(e);
		let t = e.currentPeek() === "|";
		return e.resetPeek(), t;
	}
	function ee(e, t = !0) {
		let n = (t = !1, r = "") => {
			let i = e.currentPeek();
			return i === "{" || i === "@" || !i ? t : i === "|" ? !(r === H || r === U) : i === H ? (e.peek(), n(!0, H)) : i === U ? (e.peek(), n(!0, U)) : !0;
		}, r = n();
		return t && e.resetPeek(), r;
	}
	function D(e, t) {
		let n = e.currentChar();
		return n === G ? G : t(n) ? (e.next(), n) : null;
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
	function A(e) {
		return D(e, te);
	}
	function ne(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57;
	}
	function re(e) {
		return D(e, ne);
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
		for (; t = re(e);) n += t;
		return n;
	}
	function M(e) {
		let t = "";
		for (;;) {
			let n = e.currentChar();
			if (n === "\\") {
				let r = e.peek();
				r === "{" || r === "}" || r === "@" || r === "|" || r === "\\" ? (t += n + r, e.next(), e.next()) : (e.resetPeek(), t += n, e.next());
			} else if (n === "{" || n === "}" || n === "@" || n === "|" || !n) break;
			else if (n === H || n === U) if (ee(e)) t += n, e.next();
			else if (E(e)) break;
			else t += n, e.next();
			else t += n, e.next();
		}
		return t;
	}
	function oe(e) {
		g(e);
		let t = "", n = "";
		for (; t = A(e);) n += t;
		let r = e.currentChar();
		if (r && r !== "}" && r !== G && r !== H && r !== U && r !== "　") {
			let t = F(e);
			return d(V.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n + t), n + t;
		}
		return e.currentChar() === G && d(V.UNTERMINATED_CLOSING_BRACE, a(), 0), n;
	}
	function se(e) {
		g(e);
		let t = "";
		return e.currentChar() === "-" ? (e.next(), t += `-${ae(e)}`) : t += ae(e), e.currentChar() === G && d(V.UNTERMINATED_CLOSING_BRACE, a(), 0), t;
	}
	function ce(e) {
		return e !== je && e !== U;
	}
	function le(e) {
		g(e), m(e, "'");
		let t = "", n = "";
		for (; t = D(e, ce);) t === "\\" ? n += ue(e) : n += t;
		let r = e.currentChar();
		return r === U || r === G ? (d(V.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), r === U && (e.next(), m(e, "'")), n) : (m(e, "'"), n);
	}
	function ue(e) {
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
	function R(e) {
		g(e);
		let t = m(e, "|");
		return g(e), t;
	}
	function z(e, t) {
		let n = null;
		switch (e.currentChar()) {
			case "{": return t.braceNest >= 1 && d(V.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), e.next(), n = f(t, 2, "{"), g(e), t.braceNest++, n;
			case "}": return t.braceNest > 0 && t.currentType === 2 && d(V.EMPTY_PLACEHOLDER, a(), 0), e.next(), n = f(t, 3, "}"), t.braceNest--, t.braceNest > 0 && g(e), t.inLinked && t.braceNest === 0 && (t.inLinked = !1), n;
			case "@": return t.braceNest > 0 && d(V.UNTERMINATED_CLOSING_BRACE, a(), 0), n = de(e, t) || p(t), t.braceNest = 0, n;
			default: {
				let r = !0, i = !0, o = !0;
				if (E(e)) return t.braceNest > 0 && d(V.UNTERMINATED_CLOSING_BRACE, a(), 0), n = f(t, 1, R(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (t.braceNest > 0 && (t.currentType === 4 || t.currentType === 5 || t.currentType === 6)) return d(V.UNTERMINATED_CLOSING_BRACE, a(), 0), t.braceNest = 0, fe(e, t);
				if (r = y(e, t)) return n = f(t, 4, oe(e)), g(e), n;
				if (i = b(e, t)) return n = f(t, 5, se(e)), g(e), n;
				if (o = x(e, t)) return n = f(t, 6, le(e)), g(e), n;
				if (!r && !i && !o) return n = f(t, 12, F(e)), d(V.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n.value), g(e), n;
				break;
			}
		}
		return n;
	}
	function de(e, t) {
		let { currentType: n } = t, r = null, i = e.currentChar();
		switch ((n === 7 || n === 8 || n === 11 || n === 9) && (i === U || i === H) && d(V.INVALID_LINKED_FORMAT, a(), 0), i) {
			case "@": return e.next(), r = f(t, 7, "@"), t.inLinked = !0, r;
			case ".": return g(e), e.next(), f(t, 8, ".");
			case ":": return g(e), e.next(), f(t, 9, ":");
			default: return E(e) ? (r = f(t, 1, R(e)), t.braceNest = 0, t.inLinked = !1, r) : S(e, t) || w(e, t) ? (g(e), de(e, t)) : C(e, t) ? (g(e), f(t, 11, I(e))) : T(e, t) ? (g(e), i === "{" ? z(e, t) || r : f(t, 10, L(e))) : (n === 7 && d(V.INVALID_LINKED_FORMAT, a(), 0), t.braceNest = 0, t.inLinked = !1, fe(e, t));
		}
	}
	function fe(e, t) {
		let n = { type: 13 };
		if (t.braceNest > 0) return z(e, t) || p(t);
		if (t.inLinked) return de(e, t) || p(t);
		switch (e.currentChar()) {
			case "{": return z(e, t) || p(t);
			case "}": return d(V.UNBALANCED_CLOSING_BRACE, a(), 0), e.next(), f(t, 3, "}");
			case "@": return de(e, t) || p(t);
			default:
				if (E(e)) return n = f(t, 1, R(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (ee(e)) return f(t, 0, M(e));
				break;
		}
		return n;
	}
	function pe() {
		let { currentType: e, offset: t, startLoc: n, endLoc: o } = c;
		return c.lastType = e, c.lastOffset = t, c.lastStartLoc = n, c.lastEndLoc = o, c.offset = i(), c.startLoc = a(), r.currentChar() === G ? f(c, 13) : fe(r, c);
	}
	return {
		nextToken: pe,
		currentOffset: i,
		currentPosition: a,
		context: l
	};
}
var Pe = "parser", Fe = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g, Ie = /\\([\\@{}|])/g;
function Le(e, t) {
	return t;
}
function Re(e, t, n) {
	switch (e) {
		case "\\\\": return "\\";
		case "\\'": return "'";
		default: {
			let e = parseInt(t || n, 16);
			return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : "�";
		}
	}
}
function ze(e = {}) {
	let t = e.location !== !1, { onError: n } = e;
	function r(e, r, i, a, ...o) {
		let s = e.currentPosition();
		s.offset += a, s.column += a, n && n(we(r, t ? Se(i, s) : null, {
			domain: Pe,
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
		return r.value = t.replace(Ie, Le), a(r, e.currentOffset(), e.currentPosition()), r;
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
		return o.value = t.replace(Fe, Re), e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
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
		let o = Ne(n, j({}, e)), s = o.context(), c = i(0, s.offset, s.startLoc);
		return t && c.loc && (c.loc.source = n), c.body = h(o), e.onCacheKey && (c.cacheKey = e.onCacheKey(n)), s.currentType !== 13 && r(o, V.UNEXPECTED_LEXICAL_ANALYSIS, s.lastStartLoc, 0, n[s.offset] || ""), a(c, o.currentOffset(), o.currentPosition()), c;
	}
	return { parse: g };
}
function K(e) {
	if (e.type === 13) return "EOF";
	let t = (e.value || "").replace(/\r?\n/gu, "\\n");
	return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Be(e, t = {}) {
	let n = {
		ast: e,
		helpers: /* @__PURE__ */ new Set()
	};
	return {
		context: () => n,
		helper: (e) => (n.helpers.add(e), e)
	};
}
function Ve(e, t) {
	for (let n = 0; n < e.length; n++) He(e[n], t);
}
function He(e, t) {
	switch (e.type) {
		case 1:
			Ve(e.cases, t), t.helper("plural");
			break;
		case 2:
			Ve(e.items, t);
			break;
		case 6:
			He(e.key, t), t.helper("linked"), t.helper("type");
			break;
		case 5:
			t.helper("interpolate"), t.helper("list");
			break;
		case 4:
			t.helper("interpolate"), t.helper("named");
			break;
	}
}
function Ue(e, t = {}) {
	let n = Be(e);
	n.helper("normalize"), e.body && He(e.body, n);
	let r = n.context();
	e.helpers = Array.from(r.helpers);
}
function We(e) {
	let t = e.body;
	return t.type === 2 ? Ge(t) : t.cases.forEach((e) => Ge(e)), e;
}
function Ge(e) {
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
			e.static = he(t);
			for (let t = 0; t < e.items.length; t++) {
				let n = e.items[t];
				(n.type === 3 || n.type === 9) && delete n.value;
			}
		}
	}
}
var Ke = "minifier";
function qe(e) {
	switch (e.t = e.type, e.type) {
		case 0: {
			let t = e;
			qe(t.body), t.b = t.body, delete t.body;
			break;
		}
		case 1: {
			let t = e, n = t.cases;
			for (let e = 0; e < n.length; e++) qe(n[e]);
			t.c = n, delete t.cases;
			break;
		}
		case 2: {
			let t = e, n = t.items;
			for (let e = 0; e < n.length; e++) qe(n[e]);
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
			qe(t.key), t.k = t.key, delete t.key, t.modifier && (qe(t.modifier), t.m = t.modifier, delete t.modifier);
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
		default: if (process.env.NODE_ENV !== "production") throw we(V.UNHANDLED_MINIFIER_NODE_TYPE, null, {
			domain: Ke,
			args: [e.type]
		});
	}
	delete e.type;
}
var Je = "parser";
function Ye(e, t) {
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
function Xe(e, t) {
	let { helper: n } = e;
	e.push(`${n("linked")}(`), et(e, t.key), t.modifier ? (e.push(", "), et(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Ze(e, t) {
	let { helper: n, needIndent: r } = e;
	e.push(`${n("normalize")}([`), e.indent(r());
	let i = t.items.length;
	for (let n = 0; n < i && (et(e, t.items[n]), n !== i - 1); n++) e.push(", ");
	e.deindent(r()), e.push("])");
}
function Qe(e, t) {
	let { helper: n, needIndent: r } = e;
	if (t.cases.length > 1) {
		e.push(`${n("plural")}([`), e.indent(r());
		let i = t.cases.length;
		for (let n = 0; n < i && (et(e, t.cases[n]), n !== i - 1); n++) e.push(", ");
		e.deindent(r()), e.push("])");
	}
}
function $e(e, t) {
	t.body ? et(e, t.body) : e.push("null");
}
function et(e, t) {
	let { helper: n } = e;
	switch (t.type) {
		case 0:
			$e(e, t);
			break;
		case 1:
			Qe(e, t);
			break;
		case 2:
			Ze(e, t);
			break;
		case 6:
			Xe(e, t);
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
		default: if (process.env.NODE_ENV !== "production") throw we(V.UNHANDLED_CODEGEN_NODE_TYPE, null, {
			domain: Je,
			args: [t.type]
		});
	}
}
var tt = (e, t = {}) => {
	let n = L(t.mode) ? t.mode : "normal", r = L(t.filename) ? t.filename : "message.intl", i = !!t.sourceMap, a = t.breakLineCode == null ? n === "arrow" ? ";" : "\n" : t.breakLineCode, o = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], c = Ye(e, {
		mode: n,
		filename: r,
		sourceMap: i,
		breakLineCode: a,
		needIndent: o
	});
	c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(o), s.length > 0 && (c.push(`const { ${he(s.map((e) => `${e}: _${e}`), ", ")} } = ctx`), c.newline()), c.push("return "), et(c, e), c.deindent(o), c.push("}"), delete e.helpers;
	let { code: l, map: u } = c.context();
	return {
		ast: e,
		code: l,
		map: u ? u.toJSON() : void 0
	};
};
function nt(e, t = {}) {
	let n = j({}, t), r = !!n.jit, i = !!n.minify, a = n.optimize == null ? !0 : n.optimize, o = ze(n).parse(e);
	return r ? (a && We(o), i && qe(o), {
		ast: o,
		code: ""
	}) : (Ue(o, n), tt(o, n));
}
function q(e) {
	return z(e) && ft(e) === 0 && (P(e, "b") || P(e, "body"));
}
var rt = ["b", "body"];
function it(e) {
	return yt(e, rt);
}
var at = ["c", "cases"];
function ot(e) {
	return yt(e, at, []);
}
var st = ["s", "static"];
function ct(e) {
	return yt(e, st);
}
var lt = ["i", "items"];
function ut(e) {
	return yt(e, lt, []);
}
var dt = ["t", "type"];
function ft(e) {
	return yt(e, dt);
}
var pt = ["v", "value"];
function mt(e, t) {
	let n = yt(e, pt);
	if (n != null) return n;
	throw xt(t);
}
var ht = ["m", "modifier"];
function gt(e) {
	return yt(e, ht);
}
var _t = ["k", "key"];
function vt(e) {
	let t = yt(e, _t);
	if (t) return t;
	throw xt(6);
}
function yt(e, t, n) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (P(e, r) && e[r] != null) return e[r];
	}
	return n;
}
var bt = [
	...rt,
	...at,
	...st,
	...lt,
	..._t,
	...ht,
	...pt,
	...dt
];
function xt(e) {
	return /* @__PURE__ */ Error(`unhandled node type: ${e}`);
}
function St(e) {
	return (t) => Ct(t, e);
}
function Ct(e, t) {
	let n = it(t);
	if (n == null) throw xt(0);
	if (ft(n) === 1) {
		let t = ot(n);
		return e.plural(t.reduce((t, n) => [...t, wt(e, n)], []));
	} else return wt(e, n);
}
function wt(e, t) {
	let n = ct(t);
	if (n != null) return e.type === "text" ? n : e.normalize([n]);
	{
		let n = ut(t).reduce((t, n) => [...t, Tt(e, n)], []);
		return e.normalize(n);
	}
}
function Tt(e, t) {
	let n = ft(t);
	switch (n) {
		case 3: return mt(t, n);
		case 9: return mt(t, n);
		case 4: {
			let r = t;
			if (P(r, "k") && r.k) return e.interpolate(e.named(r.k));
			if (P(r, "key") && r.key) return e.interpolate(e.named(r.key));
			throw xt(n);
		}
		case 5: {
			let r = t;
			if (P(r, "i") && A(r.i)) return e.interpolate(e.list(r.i));
			if (P(r, "index") && A(r.index)) return e.interpolate(e.list(r.index));
			throw xt(n);
		}
		case 6: {
			let n = t, r = gt(n), i = vt(n);
			return e.linked(Tt(e, i), r ? Tt(e, r) : void 0, e.type);
		}
		case 7: return mt(t, n);
		case 8: return mt(t, n);
		default: throw Error(`unhandled node on format message part: ${n}`);
	}
}
var Et = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Dt(e, t) {
	t && De(e) && x(D(Et, { source: e }));
}
var Ot = (e) => e, kt = M();
function At(e, t = {}) {
	let n = !1, r = t.onError || Te;
	return t.onError = (e) => {
		n = !0, r(e);
	}, {
		...nt(e, t),
		detectError: n
	};
}
function jt(e, t) {
	if (L(e)) {
		let n = R(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
		process.env.NODE_ENV !== "production" && Dt(e, n);
		let r = (t.onCacheKey || Ot)(e), i = kt[r];
		if (i) return i;
		let { ast: a, detectError: o } = At(e, {
			...t,
			location: process.env.NODE_ENV !== "production",
			jit: !0
		}), s = St(a);
		return o ? s : kt[r] = s;
	} else {
		if (process.env.NODE_ENV !== "production" && !q(e)) return x(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
		let n = e.cacheKey;
		return n ? kt[n] || (kt[n] = St(e)) : St(e);
	}
}
var Mt = null;
function Nt(e) {
	Mt = e;
}
function Pt(e, t, n) {
	Mt && Mt.emit("i18n:init", {
		timestamp: Date.now(),
		i18n: e,
		version: t,
		meta: n
	});
}
var Ft = It("function:translate");
function It(e) {
	return (t) => Mt && Mt.emit(e, t);
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
function Y(e) {
	return we(e, null, process.env.NODE_ENV === "production" ? void 0 : { messages: Lt });
}
var Lt = {
	[J.INVALID_ARGUMENT]: "Invalid arguments",
	[J.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
	[J.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
	[J.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
	[J.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
	[J.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
	[J.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Rt(e, t) {
	return t.locale == null ? Bt(e.locale) : Bt(t.locale);
}
var zt;
function Bt(e) {
	if (L(e)) return e;
	if (I(e)) {
		if (e.resolvedOnce && zt != null) return zt;
		if (e.constructor.name === "Function") {
			let t = e();
			if (de(t)) throw Y(J.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
			return zt = t;
		} else throw Y(J.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	} else throw Y(J.NOT_SUPPORT_LOCALE_TYPE);
}
function Vt(e, t, n) {
	return [...new Set([n, ...F(t) ? t : z(t) ? Object.keys(t) : L(t) ? [t] : [n]])];
}
function Ht(e, t, n) {
	let r = L(n) ? n : on, i = e;
	i.__localeChainCache ||= /* @__PURE__ */ new Map();
	let a = i.__localeChainCache.get(r);
	if (!a) {
		a = [];
		let e = [n];
		for (; F(e);) e = Ut(a, e, t);
		let o = F(t) || !B(t) ? t : t.default ? t.default : null;
		e = L(o) ? [o] : o, F(e) && Ut(a, e, !1), i.__localeChainCache.set(r, a);
	}
	return a;
}
function Ut(e, t, n) {
	let r = !0;
	for (let i = 0; i < t.length && R(r); i++) {
		let a = t[i];
		L(a) && (r = Wt(e, t[i], n));
	}
	return r;
}
function Wt(e, t, n) {
	let r, i = t.split("-");
	do
		r = Gt(e, i.join("-"), n), i.splice(-1, 1);
	while (i.length && r === !0);
	return r;
}
function Gt(e, t, n) {
	let r = !1;
	if (!e.includes(t) && (r = !0, t)) {
		r = t[t.length - 1] !== "!";
		let i = t.replace(/!/g, "");
		e.push(i), (F(n) || B(n)) && n[i] && (r = n[i]);
	}
	return r;
}
var Kt = [];
Kt[0] = {
	w: [0],
	i: [3, 0],
	"[": [4],
	o: [7]
}, Kt[1] = {
	w: [1],
	".": [2],
	"[": [4],
	o: [7]
}, Kt[2] = {
	w: [2],
	i: [3, 0],
	0: [3, 0]
}, Kt[3] = {
	i: [3, 0],
	0: [3, 0],
	w: [1, 1],
	".": [2, 1],
	"[": [4, 1],
	o: [7, 1]
}, Kt[4] = {
	"'": [5, 0],
	"\"": [6, 0],
	"[": [4, 2],
	"]": [1, 3],
	o: 8,
	l: [4, 0]
}, Kt[5] = {
	"'": [4, 0],
	o: 8,
	l: [5, 0]
}, Kt[6] = {
	"\"": [4, 0],
	o: 8,
	l: [6, 0]
};
var qt = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Jt(e) {
	return qt.test(e);
}
function Yt(e) {
	let t = e.charCodeAt(0);
	return t === e.charCodeAt(e.length - 1) && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Xt(e) {
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
function Zt(e) {
	let t = e.trim();
	return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Jt(t) ? Yt(t) : "*" + t;
}
function Qt(e) {
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
			if (i = 0, o === void 0 || (o = Zt(o), o === !1)) return !1;
			f[1]();
		}
	};
	function p() {
		let t = e[n + 1];
		if (r === 5 && t === "'" || r === 6 && t === "\"") return n++, s = "\\" + t, f[0](), !0;
	}
	for (; r !== null;) if (n++, a = e[n], !(a === "\\" && p())) {
		if (c = Xt(a), d = Kt[r], l = d[c] || d.l || 8, l === 8 || (r = l[0], l[1] !== void 0 && (u = f[l[1]], u && (s = a, u() === !1)))) return;
		if (r === 7) return t;
	}
}
var $t = /* @__PURE__ */ new Map();
function en(e, t) {
	return z(e) ? e[t] : null;
}
function tn(e, t) {
	if (!z(e)) return null;
	let n = $t.get(t);
	if (n || (n = Qt(t), n && $t.set(t, n)), !n) return null;
	let r = n.length, i = e, a = 0;
	for (; a < r;) {
		let e = n[a];
		if (bt.includes(e) && q(i) || !z(i) || !P(i, e)) return null;
		let t = i[e];
		if (t === void 0 || I(i)) return null;
		i = t, a++;
	}
	return i;
}
var X = {
	NOT_FOUND_KEY: 1,
	FALLBACK_TO_TRANSLATE: 2,
	CANNOT_FORMAT_NUMBER: 3,
	FALLBACK_TO_NUMBER_FORMAT: 4,
	CANNOT_FORMAT_DATE: 5,
	FALLBACK_TO_DATE_FORMAT: 6,
	EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
	INVALID_NUMBER_ARGUMENT: 8,
	INVALID_DATE_ARGUMENT: 9
}, nn = {
	[X.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
	[X.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
	[X.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
	[X.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
	[X.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
	[X.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
	[X.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future.",
	[X.INVALID_NUMBER_ARGUMENT]: "Invalid argument for number formatting: expected a number but received '{value}'.",
	[X.INVALID_DATE_ARGUMENT]: "Invalid argument for datetime formatting: expected a Date, number, or ISO string but received '{value}'."
};
function rn(e, ...t) {
	return D(nn[e], ...t);
}
var an = "11.4.0", on = "en-US", sn = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function cn() {
	return {
		upper: (e, t) => t === "text" && L(e) ? e.toUpperCase() : t === "vnode" && z(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
		lower: (e, t) => t === "text" && L(e) ? e.toLowerCase() : t === "vnode" && z(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
		capitalize: (e, t) => t === "text" && L(e) ? sn(e) : t === "vnode" && z(e) && "__v_isVNode" in e ? sn(e.children) : e
	};
}
var ln;
function un(e) {
	ln = e;
}
var dn;
function fn(e) {
	dn = e;
}
var pn;
function mn(e) {
	pn = e;
}
var hn = null, gn = (e) => {
	hn = e;
}, _n = () => hn, vn = null, yn = (e) => {
	vn = e;
}, bn = () => vn, xn = 0;
function Sn(e = {}) {
	let t = I(e.onWarn) ? e.onWarn : x, n = L(e.version) ? e.version : an, r = L(e.locale) || I(e.locale) ? e.locale : on, i = I(r) ? on : r, a = F(e.fallbackLocale) || B(e.fallbackLocale) || L(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i, o = B(e.messages) ? e.messages : Cn(i), s = B(e.datetimeFormats) ? e.datetimeFormats : Cn(i), c = B(e.numberFormats) ? e.numberFormats : Cn(i), l = j(M(), e.modifiers, cn()), u = e.pluralRules || M(), d = I(e.missing) ? e.missing : null, f = R(e.missingWarn) || re(e.missingWarn) ? e.missingWarn : !0, p = R(e.fallbackWarn) || re(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, h = !!e.unresolving, g = I(e.postTranslation) ? e.postTranslation : null, _ = B(e.processor) ? e.processor : null, v = R(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, b = I(e.messageCompiler) ? e.messageCompiler : ln;
	process.env.NODE_ENV !== "production" && I(e.messageCompiler) && C(rn(X.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
	let S = I(e.messageResolver) ? e.messageResolver : dn || en, w = I(e.localeFallbacker) ? e.localeFallbacker : pn || Vt, T = z(e.fallbackContext) ? e.fallbackContext : void 0, E = e, ee = z(E.__datetimeFormatters) ? E.__datetimeFormatters : /* @__PURE__ */ new Map(), D = z(E.__numberFormatters) ? E.__numberFormatters : /* @__PURE__ */ new Map(), O = z(E.__meta) ? E.__meta : {};
	xn++;
	let k = {
		version: n,
		cid: xn,
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
		escapeParameter: y,
		messageCompiler: b,
		messageResolver: S,
		localeFallbacker: w,
		fallbackContext: T,
		onWarn: t,
		__meta: O
	};
	return k.datetimeFormats = s, k.numberFormats = c, k.__datetimeFormatters = ee, k.__numberFormatters = D, process.env.NODE_ENV !== "production" && (k.__v_emitter = E.__v_emitter == null ? void 0 : E.__v_emitter), process.env.NODE_ENV !== "production" && Pt(k, n, O), k;
}
var Cn = (e) => ({ [e]: M() });
function wn(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function Tn(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function En(e, t, n, r, i) {
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
		return L(r) ? r : t;
	} else return process.env.NODE_ENV !== "production" && Tn(r, t) && o(rn(X.NOT_FOUND_KEY, {
		key: t,
		locale: n
	})), t;
}
function Dn(e, t, n) {
	let r = e;
	r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function On(e, t) {
	return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function kn(e, t) {
	let n = t.indexOf(e);
	if (n === -1) return !1;
	for (let r = n + 1; r < t.length; r++) if (On(e, t[r])) return !0;
	return !1;
}
var An = typeof Intl < "u", jn = {
	dateTimeFormat: An && Intl.DateTimeFormat !== void 0,
	numberFormat: An && Intl.NumberFormat !== void 0
};
function Mn(e, ...t) {
	let { datetimeFormats: n, unresolving: r, fallbackLocale: i, onWarn: a, localeFallbacker: o } = e, { __datetimeFormatters: s } = e;
	if (process.env.NODE_ENV !== "production" && !jn.dateTimeFormat) return a(rn(X.CANNOT_FORMAT_DATE)), "";
	if (!L(t[0]) && !ne(t[0]) && !A(t[0])) return process.env.NODE_ENV !== "production" && a(rn(X.INVALID_DATE_ARGUMENT, { value: String(t[0]) })), "";
	let [c, l, u, d] = Pn(...t), f = R(u.missingWarn) ? u.missingWarn : e.missingWarn, p = R(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = Rt(e, u), g = o(e, i, h);
	if (!L(c) || c === "") return new Intl.DateTimeFormat(h.replace(/!/g, ""), d).format(l);
	let _ = {}, v, y = null, b = h, x = null, S = "datetime format";
	for (let t = 0; t < g.length; t++) {
		if (v = x = g[t], process.env.NODE_ENV !== "production" && h !== v && wn(p, c) && a(rn(X.FALLBACK_TO_DATE_FORMAT, {
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
		En(e, c, v, f, S), b = x;
	}
	if (!B(y) || !L(v)) return r ? -1 : c;
	let C = `${v}__${c}`;
	ie(d) || (C = `${C}__${JSON.stringify(d)}`);
	let w = s.get(C);
	return w || (w = new Intl.DateTimeFormat(v, j({}, y, d)), s.set(C, w)), m ? w.formatToParts(l) : w.format(l);
}
var Nn = [
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
function Pn(...e) {
	let [t, n, r, i] = e, a = M(), o = M(), s;
	if (L(t)) {
		let e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
		if (!e) throw Y(J.INVALID_ISO_DATE_ARGUMENT);
		let n = e[3] ? e[3].trim().startsWith("T") ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}` : e[1].trim();
		s = new Date(n);
		try {
			s.toISOString();
		} catch {
			throw Y(J.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (ne(t)) {
		if (isNaN(t.getTime())) throw Y(J.INVALID_DATE_ARGUMENT);
		s = t;
	} else if (A(t)) s = t;
	else throw Y(J.INVALID_ARGUMENT);
	return L(n) ? a.key = n : B(n) && Object.keys(n).forEach((e) => {
		Nn.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), L(r) ? a.locale = r : B(r) && (o = r), B(i) && (o = i), [
		a.key || "",
		s,
		a,
		o
	];
}
function Fn(e, t, n) {
	let r = e;
	for (let e in n) {
		let n = `${t}__${e}`;
		r.__datetimeFormatters.has(n) && r.__datetimeFormatters.delete(n);
	}
}
function In(e, ...t) {
	let { numberFormats: n, unresolving: r, fallbackLocale: i, onWarn: a, localeFallbacker: o } = e, { __numberFormatters: s } = e;
	if (process.env.NODE_ENV !== "production" && !jn.numberFormat) return a(rn(X.CANNOT_FORMAT_NUMBER)), "";
	if (!A(t[0])) return process.env.NODE_ENV !== "production" && a(rn(X.INVALID_NUMBER_ARGUMENT, { value: String(t[0]) })), "";
	let [c, l, u, d] = Rn(...t), f = R(u.missingWarn) ? u.missingWarn : e.missingWarn, p = R(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = Rt(e, u), g = o(e, i, h);
	if (!L(c) || c === "") return new Intl.NumberFormat(h.replace(/!/g, ""), d).format(l);
	let _ = {}, v, y = null, b = h, x = null, S = "number format";
	for (let t = 0; t < g.length; t++) {
		if (v = x = g[t], process.env.NODE_ENV !== "production" && h !== v && wn(p, c) && a(rn(X.FALLBACK_TO_NUMBER_FORMAT, {
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
		En(e, c, v, f, S), b = x;
	}
	if (!B(y) || !L(v)) return r ? -1 : c;
	let C = `${v}__${c}`;
	ie(d) || (C = `${C}__${JSON.stringify(d)}`);
	let w = s.get(C);
	return w || (w = new Intl.NumberFormat(v, j({}, y, d)), s.set(C, w)), m ? w.formatToParts(l) : w.format(l);
}
var Ln = [
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
function Rn(...e) {
	let [t, n, r, i] = e, a = M(), o = M();
	if (!A(t)) throw Y(J.INVALID_ARGUMENT);
	let s = t;
	return L(n) ? a.key = n : B(n) && Object.keys(n).forEach((e) => {
		Ln.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), L(r) ? a.locale = r : B(r) && (o = r), B(i) && (o = i), [
		a.key || "",
		s,
		a,
		o
	];
}
function zn(e, t, n) {
	let r = e;
	for (let e in n) {
		let n = `${t}__${e}`;
		r.__numberFormatters.has(n) && r.__numberFormatters.delete(n);
	}
}
var Bn = (e) => e, Vn = (e) => "", Hn = "text", Un = (e) => e.length === 0 ? "" : he(e), Wn = me;
function Gn(e, t) {
	return e = Math.abs(e), t === 2 ? e === 1 ? 0 : 1 : Math.min(e, 2);
}
function Kn(e) {
	let t = A(e.pluralIndex) ? e.pluralIndex : -1;
	return A(e.named?.count) ? e.named.count : A(e.named?.n) ? e.named.n : t;
}
function qn(e = {}) {
	let t = e.locale, n = Kn(e), r = L(t) && I(e.pluralRules?.[t]) ? e.pluralRules[t] : Gn, i = r === Gn ? void 0 : Gn, a = (e) => e[r(n, e.length, i)], o = e.list || [], s = (e) => o[e], c = e.named || M();
	A(e.pluralIndex) && (c.count ||= e.pluralIndex, c.n ||= e.pluralIndex);
	let l = (e) => c[e];
	function u(t, n) {
		return (I(e.messages) ? e.messages(t, !!n) : z(e.messages) ? e.messages[t] : !1) || (e.parent ? e.parent.message(t) : Vn);
	}
	let d = (t) => e.modifiers ? e.modifiers[t] : Bn, f = I(e.processor?.normalize) ? e.processor.normalize : Un, p = I(e.processor?.interpolate) ? e.processor.interpolate : Wn, m = {
		list: s,
		named: l,
		plural: a,
		linked: (e, ...t) => {
			let [n, r] = t, i = "text", a = "";
			t.length === 1 ? z(n) ? (a = n.modifier || a, i = n.type || i) : L(n) && (a = n || a) : t.length === 2 && (L(n) && (a = n || a), L(r) && (i = r || i));
			let o = u(e, !0)(m), s = o === "" || o === void 0 ? e : o, c = i === "vnode" && F(s) && a ? s[0] : s;
			return a ? d(a)(c, i) : c;
		},
		message: u,
		type: L(e.processor?.type) ? e.processor.type : Hn,
		interpolate: p,
		normalize: f,
		values: j(M(), o, c)
	};
	return m;
}
var Jn = () => "", Z = (e) => I(e);
function Yn(e, ...t) {
	let { fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: a, fallbackLocale: o, messages: s } = e, [c, l] = er(...t), u = R(l.missingWarn) ? l.missingWarn : e.missingWarn, d = R(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, f = R(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, p = !!l.resolvedMessage, m = L(l.default) || R(l.default) ? R(l.default) ? a ? c : () => c : l.default : n ? a ? c : () => c : null, h = n || m != null && (L(m) || I(m)), g = Rt(e, l);
	f && Xn(l);
	let [_, v, y] = p ? [
		c,
		g,
		s[g] || M()
	] : Zn(e, c, g, o, d, u), b = _, S = c;
	if (!p && !(L(b) || q(b) || Z(b)) && h && (b = m, S = b), !p && (!(L(b) || q(b) || Z(b)) || !L(v))) return i ? -1 : c;
	if (process.env.NODE_ENV !== "production" && L(b) && e.messageCompiler == null) return x(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
	let C = !1, w = Z(b) ? b : Qn(e, c, v, b, S, () => {
		C = !0;
	});
	if (C) return b;
	let T = $n(e, w, qn(rr(e, v, y, l))), E = r ? r(T, c) : T;
	if (f && L(E) && (E = ue(E)), process.env.NODE_ENV !== "production") {
		let t = {
			timestamp: Date.now(),
			key: L(c) ? c : Z(b) ? b.key : "",
			locale: v || (Z(b) ? b.locale : ""),
			format: L(b) ? b : Z(b) ? b.source : "",
			message: E
		};
		t.meta = j({}, e.__meta, _n() || {}), Ft(t);
	}
	return E;
}
function Xn(e) {
	F(e.list) ? e.list = e.list.map((e) => L(e) ? ce(e) : e) : z(e.named) && Object.keys(e.named).forEach((t) => {
		L(e.named[t]) && (e.named[t] = ce(e.named[t]));
	});
}
function Zn(e, t, n, r, i, a) {
	let { messages: o, onWarn: s, messageResolver: c, localeFallbacker: l } = e, u = l(e, r, n), d = M(), f, p = null, m = n, h = null, g = "translate";
	for (let r = 0; r < u.length; r++) {
		f = h = u[r], process.env.NODE_ENV !== "production" && n !== f && !On(n, f) && wn(i, t) && s(rn(X.FALLBACK_TO_TRANSLATE, {
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
		}), d = o[f] || M();
		let _ = null, v, y;
		if (process.env.NODE_ENV !== "production" && w && l && (_ = window.performance.now(), v = "intlify-message-resolve-start", y = "intlify-message-resolve-end", T && T(v)), (p = c(d, t)) === null && (p = d[t]), process.env.NODE_ENV !== "production" && w && l) {
			let e = window.performance.now();
			l && _ && p && l.emit("message-resolve", {
				type: "message-resolve",
				key: t,
				message: p,
				time: e - _,
				groupId: `${g}:${t}`
			}), v && y && T && E && (T(y), E("intlify message resolve", v, y));
		}
		if (L(p) || q(p) || Z(p)) break;
		if (!kn(f, u)) {
			let n = En(e, t, f, a, g);
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
function Qn(e, t, n, r, i, a) {
	let { messageCompiler: o, warnHtmlMessage: s } = e;
	if (Z(r)) {
		let e = r;
		return e.locale = e.locale || n, e.key = e.key || t, e;
	}
	if (o == null) {
		let e = (() => r);
		return e.locale = n, e.key = t, e;
	}
	let c = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter, l = null, u, d;
	process.env.NODE_ENV !== "production" && w && c && (l = window.performance.now(), u = "intlify-message-compilation-start", d = "intlify-message-compilation-end", T && T(u));
	let f = o(r, tr(e, n, i, r, s, a));
	if (process.env.NODE_ENV !== "production" && w && c) {
		let e = window.performance.now();
		c && l && c.emit("message-compilation", {
			type: "message-compilation",
			message: r,
			time: e - l,
			groupId: `translate:${t}`
		}), u && d && T && E && (T(d), E("intlify message compilation", u, d));
	}
	return f.locale = n, f.key = t, f.source = r, f;
}
function $n(e, t, n) {
	let r = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter, i = null, a, o;
	process.env.NODE_ENV !== "production" && w && r && (i = window.performance.now(), a = "intlify-message-evaluation-start", o = "intlify-message-evaluation-end", T && T(a));
	let s = t(n);
	if (process.env.NODE_ENV !== "production" && w && r) {
		let e = window.performance.now();
		r && i && r.emit("message-evaluation", {
			type: "message-evaluation",
			value: s,
			time: e - i,
			groupId: `translate:${t.key}`
		}), a && o && T && E && (T(o), E("intlify message evaluation", a, o));
	}
	return s;
}
function er(...e) {
	let [t, n, r] = e, i = M();
	if (!L(t) && !A(t) && !Z(t) && !q(t)) throw Y(J.INVALID_ARGUMENT);
	let a = A(t) ? String(t) : (Z(t), t);
	return A(n) ? i.plural = n : L(n) ? i.default = n : B(n) && !ie(n) ? i.named = n : F(n) && (i.list = n), A(r) ? i.plural = r : L(r) ? i.default = r : B(r) && j(i, r), [a, i];
}
function tr(e, t, n, r, i, a) {
	return {
		locale: t,
		key: n,
		warnHtmlMessage: i,
		onError: (t) => {
			if (a && a(t), process.env.NODE_ENV !== "production") {
				let i = nr(r), a = t.location && i && _e(i, t.location.start.offset, t.location.end.offset), o = e.__v_emitter;
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
		onCacheKey: (e) => k(t, n, e)
	};
}
function nr(e) {
	if (L(e)) return e;
	if (e.loc && e.loc.source) return e.loc.source;
}
function rr(e, t, n, r) {
	let { modifiers: i, pluralRules: a, messageResolver: o, fallbackLocale: s, fallbackWarn: c, missingWarn: l, fallbackContext: u } = e, d = {
		locale: t,
		modifiers: i,
		pluralRules: a,
		messages: (r, i) => {
			let a = o(n, r);
			if (a == null && (u || i)) {
				let [n, , i] = Zn(u || e, r, t, s, c, l);
				a = n ?? o(i, r);
			}
			if (L(a) || q(a)) {
				let n = !1, i = Qn(e, r, t, a, r, () => {
					n = !0;
				});
				return n ? Jn : i;
			} else if (Z(a)) return a;
			else return Jn;
		}
	};
	return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), A(r.plural) && (d.pluralIndex = r.plural), d;
}
var ir = "11.4.0", Q = {
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
function ar(e, ...t) {
	return we(e, null, process.env.NODE_ENV === "production" ? void 0 : {
		messages: or,
		args: t
	});
}
var or = {
	[Q.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
	[Q.INVALID_ARGUMENT]: "Invalid argument",
	[Q.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
	[Q.NOT_INSTALLED]: "Need to install with `app.use` function",
	[Q.UNEXPECTED_ERROR]: "Unexpected error",
	[Q.REQUIRED_VALUE]: "Required in value: {0}",
	[Q.INVALID_VALUE]: "Invalid value",
	[Q.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
	[Q.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
	[Q.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
	[Q.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, sr = O("__translateVNode"), cr = O("__datetimeParts"), lr = O("__numberParts"), ur = O("__enableEmitter"), dr = O("__disableEmitter"), fr = O("__setPluralRules");
O("__intlifyMeta");
var pr = O("__injectWithOption"), mr = O("__dispose"), $ = {
	FALLBACK_TO_ROOT: 10,
	NOT_FOUND_PARENT_SCOPE: 11,
	IGNORE_OBJ_FLATTEN: 12,
	DEPRECATE_LEGACY_MODE: 13,
	DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 14,
	DUPLICATE_USE_I18N_CALLING: 15
}, hr = {
	[$.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
	[$.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
	[$.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
	[$.DEPRECATE_LEGACY_MODE]: "Legacy API mode has been deprecated in v11. Use Composition API mode instead.\nAbout how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html",
	[$.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
	[$.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function gr(e, ...t) {
	return D(hr[e], ...t);
}
function _r(e) {
	if (!z(e) || q(e)) return e;
	for (let t in e) if (P(e, t)) if (!t.includes(".")) z(e[t]) && _r(e[t]);
	else {
		let n = t.split("."), r = n.length - 1, i = e, a = !1;
		for (let e = 0; e < r; e++) {
			if (n[e] === "__proto__") throw Error(`unsafe key: ${n[e]}`);
			if (n[e] in i || (i[n[e]] = M()), !z(i[n[e]])) {
				process.env.NODE_ENV !== "production" && x(gr($.IGNORE_OBJ_FLATTEN, { key: n[e] })), a = !0;
				break;
			}
			i = i[n[e]];
		}
		if (a || (q(i) ? bt.includes(n[r]) || delete e[t] : (i[n[r]] = e[t], delete e[t])), !q(i)) {
			let e = i[n[r]];
			z(e) && _r(e);
		}
	}
	return e;
}
function vr(e, t) {
	let { messages: n, __i18n: r, messageResolver: i, flatJson: a } = t, o = B(n) ? n : F(r) ? M() : { [e]: M() };
	if (F(r) && r.forEach((e) => {
		if ("locale" in e && "resource" in e) {
			let { locale: t, resource: n } = e;
			t ? (o[t] = o[t] || M(), be(n, o[t])) : be(n, o);
		} else L(e) && be(JSON.parse(e), o);
	}), i == null && a) for (let e in o) P(o, e) && _r(o[e]);
	return o;
}
function yr(e) {
	return e.type;
}
function br(e, t, n) {
	let r = z(t.messages) ? t.messages : M();
	"__i18nGlobal" in n && (r = vr(e.locale.value, {
		messages: r,
		__i18n: n.__i18nGlobal
	}));
	let i = Object.keys(r);
	if (i.length && i.forEach((t) => {
		e.mergeLocaleMessage(t, r[t]);
	}), z(t.datetimeFormats)) {
		let n = Object.keys(t.datetimeFormats);
		n.length && n.forEach((n) => {
			e.mergeDateTimeFormat(n, t.datetimeFormats[n]);
		});
	}
	if (z(t.numberFormats)) {
		let n = Object.keys(t.numberFormats);
		n.length && n.forEach((n) => {
			e.mergeNumberFormat(n, t.numberFormats[n]);
		});
	}
}
function xr(e) {
	return o(n, null, e, 0);
}
function Sr() {
	let t = "currentInstance";
	return t in e ? e[t] : e.getCurrentInstance();
}
var Cr = "__INTLIFY_META__", wr = () => [], Tr = () => !1, Er = 0;
function Dr(e) {
	return ((t, n, r, i) => e(n, r, Sr() || void 0, i));
}
var Or = () => {
	let e = Sr(), t = null;
	return e && (t = yr(e)[Cr]) ? { [Cr]: t } : null;
};
function kr(e = {}) {
	let { __root: t, __injectWithOption: n } = e, i = t === void 0, a = e.flatJson, o = w ? g : _, s = R(e.inheritLocale) ? e.inheritLocale : !0, c = o(t && s ? t.locale.value : L(e.locale) ? e.locale : on), l = o(t && s ? t.fallbackLocale.value : L(e.fallbackLocale) || F(e.fallbackLocale) || B(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value), u = o(vr(c.value, e)), d = o(B(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), f = o(B(e.numberFormats) ? e.numberFormats : { [c.value]: {} }), p = t ? t.missingWarn : R(e.missingWarn) || re(e.missingWarn) ? e.missingWarn : !0, m = t ? t.fallbackWarn : R(e.fallbackWarn) || re(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : R(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, y = I(e.missing) ? e.missing : null, S = I(e.missing) ? Dr(e.missing) : null, C = I(e.postTranslation) ? e.postTranslation : null, T = t ? t.warnHtmlMessage : R(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter, ee = t ? t.modifiers : B(e.modifiers) ? e.modifiers : {}, D = e.pluralRules || t && t.pluralRules, O;
	O = (() => {
		i && yn(null);
		let t = {
			version: ir,
			locale: c.value,
			fallbackLocale: l.value,
			messages: u.value,
			modifiers: ee,
			pluralRules: D,
			missing: S === null ? void 0 : S,
			missingWarn: p,
			fallbackWarn: m,
			fallbackFormat: v,
			unresolving: !0,
			postTranslation: C === null ? void 0 : C,
			warnHtmlMessage: T,
			escapeParameter: E,
			messageResolver: e.messageResolver,
			messageCompiler: e.messageCompiler,
			__meta: { framework: "vue" }
		};
		t.datetimeFormats = d.value, t.numberFormats = f.value, t.__datetimeFormatters = B(O) ? O.__datetimeFormatters : void 0, t.__numberFormatters = B(O) ? O.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (t.__v_emitter = B(O) ? O.__v_emitter : void 0);
		let n = Sn(t);
		return i && yn(n), n;
	})(), Dn(O, c.value, l.value);
	function k() {
		return [
			c.value,
			l.value,
			u.value,
			d.value,
			f.value
		];
	}
	let te = r({
		get: () => c.value,
		set: (e) => {
			O.locale = e, c.value = e;
		}
	}), ne = r({
		get: () => l.value,
		set: (e) => {
			O.fallbackLocale = e, l.value = e, Dn(O, c.value, e);
		}
	}), ie = r(() => u.value), ae = r(() => d.value), M = r(() => f.value);
	function oe() {
		return I(C) ? C : null;
	}
	function se(e) {
		C = e, O.postTranslation = e;
	}
	function ce() {
		return y;
	}
	function le(e) {
		e !== null && (S = Dr(e)), y = e, O.missing = S;
	}
	function ue(e, t) {
		return e !== "translate" || !t.resolvedMessage;
	}
	let N = (e, n, r, a, o, s) => {
		k();
		let c;
		try {
			process.env.NODE_ENV !== "production" && gn(Or()), i || (O.fallbackContext = t ? bn() : void 0), c = e(O);
		} finally {
			process.env.NODE_ENV !== "production" && gn(null), i || (O.fallbackContext = void 0);
		}
		if (r !== "translate exists" && A(c) && c === -1 || r === "translate exists" && !c) {
			let [e, i] = n();
			if (process.env.NODE_ENV !== "production" && t && L(e) && ue(r, i) && (h && (wn(m, e) || Tn(p, e)) && x(gr($.FALLBACK_TO_ROOT, {
				key: e,
				type: r
			})), process.env.NODE_ENV !== "production")) {
				let { __v_emitter: t } = O;
				t && h && t.emit("fallback", {
					type: r,
					key: e,
					to: "global",
					groupId: `${r}:${e}`
				});
			}
			return t && h ? a(t) : o(e);
		} else if (s(c)) return c;
		else throw ar(Q.UNEXPECTED_RETURN_TYPE);
	};
	function de(...e) {
		return N((t) => Reflect.apply(Yn, null, [t, ...e]), () => er(...e), "translate", (t) => Reflect.apply(t.t, t, [...e]), (e) => e, (e) => L(e));
	}
	function fe(...e) {
		let [t, n, r] = e;
		if (r && !z(r)) throw ar(Q.INVALID_ARGUMENT);
		return de(t, n, j({ resolvedMessage: !0 }, r || {}));
	}
	function pe(...e) {
		return N((t) => Reflect.apply(Mn, null, [t, ...e]), () => Pn(...e), "datetime format", (t) => Reflect.apply(t.d, t, [...e]), () => "", (e) => L(e) || F(e));
	}
	function me(...e) {
		return N((t) => Reflect.apply(In, null, [t, ...e]), () => Rn(...e), "number format", (t) => Reflect.apply(t.n, t, [...e]), () => "", (e) => L(e) || F(e));
	}
	function he(e) {
		return e.map((e) => L(e) || A(e) || R(e) ? xr(String(e)) : e);
	}
	let ge = {
		normalize: he,
		interpolate: (e) => e,
		type: "vnode"
	};
	function _e(...e) {
		return N((t) => {
			let n, r = t;
			try {
				r.processor = ge, n = Reflect.apply(Yn, null, [r, ...e]);
			} finally {
				r.processor = null;
			}
			return n;
		}, () => er(...e), "translate", (t) => t[sr](...e), (e) => [xr(e)], (e) => F(e));
	}
	function ve(...e) {
		return N((t) => Reflect.apply(In, null, [t, ...e]), () => Rn(...e), "number format", (t) => t[lr](...e), wr, (e) => L(e) || F(e));
	}
	function ye(...e) {
		return N((t) => Reflect.apply(Mn, null, [t, ...e]), () => Pn(...e), "datetime format", (t) => t[cr](...e), wr, (e) => L(e) || F(e));
	}
	function xe(e) {
		D = e, O.pluralRules = D;
	}
	function Se(e, t) {
		return N(() => {
			if (!e) return !1;
			let n = L(t) ? t : c.value, r = L(t) ? [n] : Ht(O, l.value, n);
			for (let t = 0; t < r.length; t++) {
				let n = we(r[t]), i = O.messageResolver(n, e);
				if (i === null && (i = n[e]), q(i) || Z(i) || L(i)) return !0;
			}
			return !1;
		}, () => [e], "translate exists", (n) => Reflect.apply(n.te, n, [e, t]), Tr, (e) => R(e));
	}
	function V(e) {
		let t = null, n = Ht(O, l.value, c.value);
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
		return V(e) ?? (t && t.tm(e) || {});
	}
	function we(e) {
		return u.value[e] || {};
	}
	function Te(e, t) {
		if (a) {
			let n = { [e]: t };
			for (let e in n) P(n, e) && _r(n[e]);
			t = n[e];
		}
		u.value[e] = t, O.messages = u.value;
	}
	function Ee(e, t) {
		u.value[e] = u.value[e] || {};
		let n = { [e]: t };
		if (a) for (let e in n) P(n, e) && _r(n[e]);
		t = n[e], be(t, u.value[e]), O.messages = u.value;
	}
	function De(e) {
		return d.value[e] || {};
	}
	function H(e, t) {
		d.value[e] = t, O.datetimeFormats = d.value, Fn(O, e, t);
	}
	function Oe(e, t) {
		d.value[e] = j(d.value[e] || {}, t), O.datetimeFormats = d.value, Fn(O, e, t);
	}
	function U(e) {
		return f.value[e] || {};
	}
	function ke(e, t) {
		f.value[e] = t, O.numberFormats = f.value, zn(O, e, t);
	}
	function Ae(e, t) {
		f.value[e] = j(f.value[e] || {}, t), O.numberFormats = f.value, zn(O, e, t);
	}
	Er++, t && w && (b(t.locale, (e) => {
		s && (c.value = e, O.locale = e, Dn(O, c.value, l.value));
	}), b(t.fallbackLocale, (e) => {
		s && (l.value = e, O.fallbackLocale = e, Dn(O, c.value, l.value));
	}));
	let W = {
		id: Er,
		locale: te,
		fallbackLocale: ne,
		get inheritLocale() {
			return s;
		},
		set inheritLocale(e) {
			s = e, e && t && (c.value = t.locale.value, l.value = t.fallbackLocale.value, Dn(O, c.value, l.value));
		},
		get availableLocales() {
			return Object.keys(u.value).sort();
		},
		messages: ie,
		get modifiers() {
			return ee;
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
			return h;
		},
		set fallbackRoot(e) {
			h = e;
		},
		get fallbackFormat() {
			return v;
		},
		set fallbackFormat(e) {
			v = e, O.fallbackFormat = v;
		},
		get warnHtmlMessage() {
			return T;
		},
		set warnHtmlMessage(e) {
			T = e, O.warnHtmlMessage = e;
		},
		get escapeParameter() {
			return E;
		},
		set escapeParameter(e) {
			E = e, O.escapeParameter = e;
		},
		t: de,
		getLocaleMessage: we,
		setLocaleMessage: Te,
		mergeLocaleMessage: Ee,
		getPostTranslationHandler: oe,
		setPostTranslationHandler: se,
		getMissingHandler: ce,
		setMissingHandler: le,
		[fr]: xe
	};
	return W.datetimeFormats = ae, W.numberFormats = M, W.rt = fe, W.te = Se, W.tm = Ce, W.d = pe, W.n = me, W.getDateTimeFormat = De, W.setDateTimeFormat = H, W.mergeDateTimeFormat = Oe, W.getNumberFormat = U, W.setNumberFormat = ke, W.mergeNumberFormat = Ae, W[pr] = n, W[sr] = _e, W[cr] = ye, W[lr] = ve, process.env.NODE_ENV !== "production" && (W[ur] = (e) => {
		O.__v_emitter = e;
	}, W[dr] = () => {
		O.__v_emitter = void 0;
	}), W;
}
var Ar;
function jr(e, t) {
	if (Ar) {
		let n;
		t && "groupId" in t && (n = t.groupId, delete t.groupId), Ar.addTimelineEvent({
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
var Mr = {
	tag: { type: [String, Object] },
	locale: { type: String },
	scope: {
		type: String,
		validator: (e) => e === "parent" || e === "global",
		default: "parent"
	},
	i18n: { type: Object }
};
function Nr({ slots: e }, n) {
	return n.length === 1 && n[0] === "default" ? (e.default ? e.default() : []).reduce((e, n) => [...e, ...n.type === t ? n.children : [n]], []) : n.reduce((t, n) => {
		let r = e[n];
		return r && (t[n] = r()), t;
	}, M());
}
function Pr() {
	return t;
}
s({
	name: "i18n-t",
	props: j({
		keypath: {
			type: String,
			required: !0
		},
		plural: {
			type: [Number, String],
			validator: (e) => A(e) || !isNaN(e)
		}
	}, Mr),
	setup(e, t) {
		let { slots: n, attrs: r } = t, i = e.i18n || Rr({
			useScope: e.scope,
			__useComponent: !0
		});
		return () => {
			let a = Object.keys(n).filter((e) => e[0] !== "_"), o = M();
			e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = L(e.plural) ? +e.plural : e.plural);
			let s = Nr(t, a), c = i[sr](e.keypath, s, o), u = j(M(), r);
			return l(L(e.tag) || z(e.tag) ? e.tag : Pr(), u, c);
		};
	}
});
function Fr(e) {
	return F(e) && !L(e[0]);
}
function Ir(e, t, n, r) {
	let { slots: i, attrs: a } = t;
	return () => {
		let t = { part: !0 }, o = M();
		e.locale && (t.locale = e.locale), L(e.format) ? t.key = e.format : z(e.format) && (L(e.format.key) && (t.key = e.format.key), o = Object.keys(e.format).reduce((t, r) => n.includes(r) ? j(M(), t, { [r]: e.format[r] }) : t, M()));
		let s = r(e.value, t, o), c = [t.key];
		F(s) ? c = s.map((e, t) => {
			let n = i[e.type], r = n ? n({
				[e.type]: e.value,
				index: t,
				parts: s
			}) : [e.value];
			return Fr(r) && (r[0].key = `${e.type}-${t}`), r;
		}) : L(s) && (c = [s]);
		let u = j(M(), a);
		return l(L(e.tag) || z(e.tag) ? e.tag : Pr(), u, c);
	};
}
s({
	name: "i18n-n",
	props: j({
		value: {
			type: Number,
			required: !0
		},
		format: { type: [String, Object] }
	}, Mr),
	setup(e, t) {
		let n = e.i18n || Rr({
			useScope: e.scope,
			__useComponent: !0
		});
		return Ir(e, t, Ln, (...e) => n[lr](...e));
	}
});
var Lr = O("global-vue-i18n");
function Rr(e = {}) {
	let t = Sr();
	if (t == null) throw ar(Q.MUST_BE_CALL_SETUP_TOP);
	if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw ar(Q.NOT_INSTALLED);
	let n = zr(t), r = Vr(n), i = yr(t), a = Br(e, i);
	if (a === "global") return br(r, e, i), r;
	if (a === "parent") {
		let i = Hr(n, t, e.__useComponent);
		return i ??= (process.env.NODE_ENV !== "production" && x(gr($.NOT_FOUND_PARENT_SCOPE)), r), i;
	}
	if (a === "isolated") {
		if (n.mode !== "composition") throw ar(Q.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
		let i = n, a = j({}, e);
		a.__root = Hr(n, t) || r;
		let o = kr(a);
		i.__composerExtend && (o[mr] = i.__composerExtend(o));
		let s = null;
		if (process.env.NODE_ENV !== "production") {
			s = ve();
			let e = o;
			e[ur] && e[ur](s), s.on("*", jr);
		}
		return c() && p(() => {
			if (process.env.NODE_ENV !== "production") {
				s && s.off("*", jr);
				let e = o;
				e[dr] && e[dr]();
			}
			let e = o[mr];
			e && (e(), delete o[mr]);
		}), o;
	}
	let o = n, s = o.__getInstance(t);
	if (s == null) {
		let n = j({}, e);
		"__i18n" in i && (n.__i18n = i.__i18n), r && (n.__root = r), s = kr(n), o.__composerExtend && (s[mr] = o.__composerExtend(s)), Wr(o, t, s), o.__setInstance(t, s);
	} else process.env.NODE_ENV !== "production" && a === "local" && x(gr($.DUPLICATE_USE_I18N_CALLING));
	return s;
}
function zr(e) {
	let t = u(e.isCE ? Lr : e.appContext.app.__VUE_I18N_SYMBOL__);
	if (!t) throw ar(e.isCE ? Q.NOT_INSTALLED_WITH_PROVIDE : Q.UNEXPECTED_ERROR);
	return t;
}
function Br(e, t) {
	return ie(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Vr(e) {
	return e.mode === "composition" ? e.global : e.global.__composer;
}
function Hr(e, t, n = !1) {
	let r = null, i = t.root, a = Ur(t, n);
	for (; a != null;) {
		let t = e;
		if (e.mode === "composition" && (r = t.__getInstance(a)), r != null || i === a) break;
		a = a.parent;
	}
	return r;
}
function Ur(e, t = !1) {
	return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Wr(e, t, n) {
	let r = null;
	f(() => {
		if (process.env.NODE_ENV !== "production") {
			t.__VUE_I18N__ = n, r = ve();
			let e = n;
			e[ur] && e[ur](r), r.on("*", jr);
		}
	}, t), m(() => {
		let i = n;
		process.env.NODE_ENV !== "production" && (r && r.off("*", jr), i[dr] && i[dr](), delete t.__VUE_I18N__), e.__deleteInstance(t);
		let a = i[mr];
		a && (a(), delete i[mr]);
	}, t);
}
if (s({
	name: "i18n-d",
	props: j({
		value: {
			type: [Number, Date],
			required: !0
		},
		format: { type: [String, Object] }
	}, Mr),
	setup(e, t) {
		let n = e.i18n || Rr({
			useScope: e.scope,
			__useComponent: !0
		});
		return Ir(e, t, Nn, (...e) => n[cr](...e));
	}
}), un(jt), fn(tn), mn(Ht), process.env.NODE_ENV !== "production") {
	let e = se();
	e.__INTLIFY__ = !0, Nt(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
function Gr(e) {
	d(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), f(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var Kr = { class: "grid gap-8 md:grid-cols-2" }, qr = { class: "rounded-lg border border-border bg-card p-6" }, Jr = { class: "mb-3 text-xl font-semibold text-foreground" }, Yr = { class: "text-sm text-muted-foreground" }, Xr = { class: "rounded-lg border border-border bg-card p-6" }, Zr = { class: "mb-3 text-xl font-semibold text-foreground" }, Qr = { class: "text-sm text-muted-foreground" }, $r = s({
	__name: "AboutGrid",
	setup(e) {
		Gr("AboutGrid");
		let { t } = Rr();
		return (e, n) => (h(), i("div", Kr, [a("div", qr, [a("h2", Jr, v(y(t)("about.grid.whyExistsTitle")), 1), a("p", Yr, v(y(t)("about.grid.whyExistsDesc")), 1)]), a("div", Xr, [a("h2", Zr, v(y(t)("about.grid.methodologyTitle")), 1), a("p", Qr, v(y(t)("about.grid.methodologyDesc")), 1)])]));
	}
});
export { $r as default };
