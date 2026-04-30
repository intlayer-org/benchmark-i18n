import * as e from "vue";
import { Fragment as t, Text as n, computed as r, createBlock as i, createElementBlock as a, createElementVNode as o, createTextVNode as s, createVNode as c, defineComponent as l, getCurrentScope as u, h as d, inject as f, onMounted as p, onScopeDispose as m, onUnmounted as h, openBlock as g, ref as _, renderList as v, resolveComponent as y, shallowRef as b, toDisplayString as x, unref as S, watch as C, withCtx as w } from "vue";
import { useRoute as T } from "vue-router";
function E(e, t) {
	typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
var D = {};
function O(e) {
	D[e] || (D[e] = !0, E(e));
}
var k = typeof window < "u", A, j;
if (process.env.NODE_ENV !== "production") {
	let e = k && window.performance;
	e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (A = (t) => {
		e.mark(t);
	}, j = (t, n, r) => {
		e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
	});
}
var ee = /\{([0-9a-zA-Z]+)\}/g;
function te(e, ...t) {
	return t.length === 1 && H(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(ee, (e, n) => t.hasOwnProperty(n) ? t[n] : "");
}
var M = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), ne = (e, t, n) => re({
	l: e,
	k: t,
	s: n
}), re = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), N = (e) => typeof e == "number" && isFinite(e), ie = (e) => he(e) === "[object Date]", ae = (e) => he(e) === "[object RegExp]", oe = (e) => U(e) && Object.keys(e).length === 0, P = Object.assign, se = Object.create, F = (e = null) => se(e), I, ce = () => I ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : F();
function le(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function ue(e) {
	return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function de(e) {
	return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (e, t, n) => `${t}="${ue(n)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (e, t, n) => `${t}='${ue(n)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && E("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach((t) => {
		e = e.replace(t, "$1javascript&#58;");
	}), e;
}
var fe = Object.prototype.hasOwnProperty;
function L(e, t) {
	return fe.call(e, t);
}
var R = Array.isArray, z = (e) => typeof e == "function", B = (e) => typeof e == "string", V = (e) => typeof e == "boolean", H = (e) => typeof e == "object" && !!e, pe = (e) => H(e) && z(e.then) && z(e.catch), me = Object.prototype.toString, he = (e) => me.call(e), U = (e) => he(e) === "[object Object]", ge = (e) => e == null ? "" : R(e) || U(e) && e.toString === me ? JSON.stringify(e, null, 2) : String(e);
function _e(e, t = "") {
	return e.reduce((e, n, r) => r === 0 ? e + n : e + t + n, "");
}
var ve = 2;
function ye(e, t = 0, n = e.length) {
	let r = e.split(/\r?\n/), i = 0, a = [];
	for (let e = 0; e < r.length; e++) if (i += r[e].length + 1, i >= t) {
		for (let o = e - ve; o <= e + ve || n > i; o++) {
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
function be() {
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
var xe = (e) => !H(e) || R(e);
function Se(e, t) {
	if (xe(e) || xe(t)) throw Error("Invalid value");
	let n = [{
		src: e,
		des: t
	}];
	for (; n.length;) {
		let { src: e, des: t } = n.pop();
		Object.keys(e).forEach((r) => {
			r !== "__proto__" && (H(e[r]) && !H(t[r]) && (t[r] = Array.isArray(e[r]) ? [] : F()), xe(t[r]) || xe(e[r]) ? t[r] = e[r] : n.push({
				src: e[r],
				des: t[r]
			}));
		});
	}
}
function Ce(e, t, n) {
	return {
		line: e,
		column: t,
		offset: n
	};
}
function we(e, t, n) {
	let r = {
		start: e,
		end: t
	};
	return n != null && (r.source = n), r;
}
var W = {
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
}, Te = {
	[W.EXPECTED_TOKEN]: "Expected token: '{0}'",
	[W.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
	[W.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
	[W.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
	[W.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
	[W.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
	[W.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
	[W.EMPTY_PLACEHOLDER]: "Empty placeholder",
	[W.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
	[W.INVALID_LINKED_FORMAT]: "Invalid linked format",
	[W.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
	[W.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
	[W.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
	[W.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
	[W.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
	[W.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Ee(e, t, n = {}) {
	let { domain: r, messages: i, args: a } = n, o = process.env.NODE_ENV === "production" ? e : te((i || Te)[e] || "", ...a || []), s = SyntaxError(String(o));
	return s.code = e, t && (s.location = t), s.domain = r, s;
}
function De(e) {
	throw e;
}
var Oe = /<\/?[\w\s="/.':;#-\/]+>/, ke = (e) => Oe.test(e), G = " ", Ae = "\r", K = "\n", je = "\u2028", Me = "\u2029";
function Ne(e) {
	let t = e, n = 0, r = 1, i = 1, a = 0, o = (e) => t[e] === Ae && t[e + 1] === K, s = (e) => t[e] === K, c = (e) => t[e] === Me, l = (e) => t[e] === je, u = (e) => o(e) || s(e) || c(e) || l(e), d = () => n, f = () => r, p = () => i, m = () => a, h = (e) => o(e) || c(e) || l(e) ? K : t[e], g = () => h(n), _ = () => h(n + a);
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
var Pe = void 0, Fe = "'", Ie = "tokenizer";
function Le(e, t = {}) {
	let n = t.location !== !1, r = Ne(e), i = () => r.index(), a = () => Ce(r.line(), r.column(), r.index()), o = a(), s = i(), c = {
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
		t.column += r, t.offset += r, u && u(Ee(e, n ? we(a.startLoc, t) : null, {
			domain: Ie,
			args: i
		}));
	}
	function f(e, t, r) {
		e.endLoc = a(), e.currentType = t;
		let i = { type: t };
		return n && (i.loc = we(e.startLoc, e.endLoc)), r != null && (i.value = r), i;
	}
	let p = (e) => f(e, 13);
	function m(e, t) {
		return e.currentChar() === t ? (e.next(), t) : (d(W.EXPECTED_TOKEN, a(), 0, t), "");
	}
	function h(e) {
		let t = "";
		for (; e.currentPeek() === G || e.currentPeek() === K;) t += e.currentPeek(), e.peek();
		return t;
	}
	function g(e) {
		let t = h(e);
		return e.skipToPeek(), t;
	}
	function _(e) {
		if (e === Pe) return !1;
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t === 95;
	}
	function v(e) {
		if (e === Pe) return !1;
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
		let r = e.currentPeek() === Fe;
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
			return t === "{" ? _(e.peek()) : t === "@" || t === "|" || t === ":" || t === "." || t === G || !t ? !1 : t === K ? (e.peek(), r()) : D(e, !1);
		}, i = r();
		return e.resetPeek(), i;
	}
	function E(e) {
		h(e);
		let t = e.currentPeek() === "|";
		return e.resetPeek(), t;
	}
	function D(e, t = !0) {
		let n = (t = !1, r = "") => {
			let i = e.currentPeek();
			return i === "{" || i === "@" || !i ? t : i === "|" ? !(r === G || r === K) : i === G ? (e.peek(), n(!0, G)) : i === K ? (e.peek(), n(!0, K)) : !0;
		}, r = n();
		return t && e.resetPeek(), r;
	}
	function O(e, t) {
		let n = e.currentChar();
		return n === Pe ? Pe : t(n) ? (e.next(), n) : null;
	}
	function k(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36;
	}
	function A(e) {
		return O(e, k);
	}
	function j(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36 || t === 45;
	}
	function ee(e) {
		return O(e, j);
	}
	function te(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57;
	}
	function M(e) {
		return O(e, te);
	}
	function ne(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
	}
	function re(e) {
		return O(e, ne);
	}
	function N(e) {
		let t = "", n = "";
		for (; t = M(e);) n += t;
		return n;
	}
	function ie(e) {
		let t = "";
		for (;;) {
			let n = e.currentChar();
			if (n === "\\") {
				let r = e.peek();
				r === "{" || r === "}" || r === "@" || r === "|" || r === "\\" ? (t += n + r, e.next(), e.next()) : (e.resetPeek(), t += n, e.next());
			} else if (n === "{" || n === "}" || n === "@" || n === "|" || !n) break;
			else if (n === G || n === K) if (D(e)) t += n, e.next();
			else if (E(e)) break;
			else t += n, e.next();
			else t += n, e.next();
		}
		return t;
	}
	function ae(e) {
		g(e);
		let t = "", n = "";
		for (; t = ee(e);) n += t;
		let r = e.currentChar();
		if (r && r !== "}" && r !== Pe && r !== G && r !== K && r !== "　") {
			let t = le(e);
			return d(W.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n + t), n + t;
		}
		return e.currentChar() === Pe && d(W.UNTERMINATED_CLOSING_BRACE, a(), 0), n;
	}
	function oe(e) {
		g(e);
		let t = "";
		return e.currentChar() === "-" ? (e.next(), t += `-${N(e)}`) : t += N(e), e.currentChar() === Pe && d(W.UNTERMINATED_CLOSING_BRACE, a(), 0), t;
	}
	function P(e) {
		return e !== Fe && e !== K;
	}
	function se(e) {
		g(e), m(e, "'");
		let t = "", n = "";
		for (; t = O(e, P);) t === "\\" ? n += F(e) : n += t;
		let r = e.currentChar();
		return r === K || r === Pe ? (d(W.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), r === K && (e.next(), m(e, "'")), n) : (m(e, "'"), n);
	}
	function F(e) {
		let t = e.currentChar();
		switch (t) {
			case "\\":
			case "'": return e.next(), `\\${t}`;
			case "u": return I(e, t, 4);
			case "U": return I(e, t, 6);
			default: return d(W.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, t), "";
		}
	}
	function I(e, t, n) {
		m(e, t);
		let r = "";
		for (let i = 0; i < n; i++) {
			let n = re(e);
			if (!n) {
				d(W.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${t}${r}${e.currentChar()}`);
				break;
			}
			r += n;
		}
		return `\\${t}${r}`;
	}
	function ce(e) {
		return e !== "{" && e !== "}" && e !== G && e !== K;
	}
	function le(e) {
		g(e);
		let t = "", n = "";
		for (; t = O(e, ce);) n += t;
		return n;
	}
	function ue(e) {
		let t = "", n = "";
		for (; t = A(e);) n += t;
		return n;
	}
	function de(e) {
		let t = (n) => {
			let r = e.currentChar();
			return r === "{" || r === "@" || r === "|" || r === "(" || r === ")" || !r || r === G ? n : (n += r, e.next(), t(n));
		};
		return t("");
	}
	function fe(e) {
		g(e);
		let t = m(e, "|");
		return g(e), t;
	}
	function L(e, t) {
		let n = null;
		switch (e.currentChar()) {
			case "{": return t.braceNest >= 1 && d(W.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), e.next(), n = f(t, 2, "{"), g(e), t.braceNest++, n;
			case "}": return t.braceNest > 0 && t.currentType === 2 && d(W.EMPTY_PLACEHOLDER, a(), 0), e.next(), n = f(t, 3, "}"), t.braceNest--, t.braceNest > 0 && g(e), t.inLinked && t.braceNest === 0 && (t.inLinked = !1), n;
			case "@": return t.braceNest > 0 && d(W.UNTERMINATED_CLOSING_BRACE, a(), 0), n = R(e, t) || p(t), t.braceNest = 0, n;
			default: {
				let r = !0, i = !0, o = !0;
				if (E(e)) return t.braceNest > 0 && d(W.UNTERMINATED_CLOSING_BRACE, a(), 0), n = f(t, 1, fe(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (t.braceNest > 0 && (t.currentType === 4 || t.currentType === 5 || t.currentType === 6)) return d(W.UNTERMINATED_CLOSING_BRACE, a(), 0), t.braceNest = 0, z(e, t);
				if (r = y(e, t)) return n = f(t, 4, ae(e)), g(e), n;
				if (i = b(e, t)) return n = f(t, 5, oe(e)), g(e), n;
				if (o = x(e, t)) return n = f(t, 6, se(e)), g(e), n;
				if (!r && !i && !o) return n = f(t, 12, le(e)), d(W.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n.value), g(e), n;
				break;
			}
		}
		return n;
	}
	function R(e, t) {
		let { currentType: n } = t, r = null, i = e.currentChar();
		switch ((n === 7 || n === 8 || n === 11 || n === 9) && (i === K || i === G) && d(W.INVALID_LINKED_FORMAT, a(), 0), i) {
			case "@": return e.next(), r = f(t, 7, "@"), t.inLinked = !0, r;
			case ".": return g(e), e.next(), f(t, 8, ".");
			case ":": return g(e), e.next(), f(t, 9, ":");
			default: return E(e) ? (r = f(t, 1, fe(e)), t.braceNest = 0, t.inLinked = !1, r) : S(e, t) || w(e, t) ? (g(e), R(e, t)) : C(e, t) ? (g(e), f(t, 11, ue(e))) : T(e, t) ? (g(e), i === "{" ? L(e, t) || r : f(t, 10, de(e))) : (n === 7 && d(W.INVALID_LINKED_FORMAT, a(), 0), t.braceNest = 0, t.inLinked = !1, z(e, t));
		}
	}
	function z(e, t) {
		let n = { type: 13 };
		if (t.braceNest > 0) return L(e, t) || p(t);
		if (t.inLinked) return R(e, t) || p(t);
		switch (e.currentChar()) {
			case "{": return L(e, t) || p(t);
			case "}": return d(W.UNBALANCED_CLOSING_BRACE, a(), 0), e.next(), f(t, 3, "}");
			case "@": return R(e, t) || p(t);
			default:
				if (E(e)) return n = f(t, 1, fe(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (D(e)) return f(t, 0, ie(e));
				break;
		}
		return n;
	}
	function B() {
		let { currentType: e, offset: t, startLoc: n, endLoc: o } = c;
		return c.lastType = e, c.lastOffset = t, c.lastStartLoc = n, c.lastEndLoc = o, c.offset = i(), c.startLoc = a(), r.currentChar() === Pe ? f(c, 13) : z(r, c);
	}
	return {
		nextToken: B,
		currentOffset: i,
		currentPosition: a,
		context: l
	};
}
var Re = "parser", ze = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g, Be = /\\([\\@{}|])/g;
function Ve(e, t) {
	return t;
}
function He(e, t, n) {
	switch (e) {
		case "\\\\": return "\\";
		case "\\'": return "'";
		default: {
			let e = parseInt(t || n, 16);
			return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : "�";
		}
	}
}
function Ue(e = {}) {
	let t = e.location !== !1, { onError: n } = e;
	function r(e, r, i, a, ...o) {
		let s = e.currentPosition();
		s.offset += a, s.column += a, n && n(Ee(r, t ? we(i, s) : null, {
			domain: Re,
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
		return r.value = t.replace(Be, Ve), a(r, e.currentOffset(), e.currentPosition()), r;
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
		return o.value = t.replace(ze, He), e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
	}
	function u(e) {
		let t = e.nextToken(), n = e.context(), { lastOffset: o, lastStartLoc: s } = n, c = i(8, o, s);
		return t.type === 11 ? (t.value ?? r(e, W.UNEXPECTED_LEXICAL_ANALYSIS, n.lastStartLoc, 0, q(t)), c.value = t.value || "", a(c, e.currentOffset(), e.currentPosition()), { node: c }) : (r(e, W.UNEXPECTED_EMPTY_LINKED_MODIFIER, n.lastStartLoc, 0), c.value = "", a(c, o, s), {
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
		switch (o.type !== 9 && r(e, W.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(o)), o = e.nextToken(), o.type === 2 && (o = e.nextToken()), o.type) {
			case 10:
				o.value ?? r(e, W.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(o)), n.key = d(e, o.value || "");
				break;
			case 4:
				o.value ?? r(e, W.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(o)), n.key = c(e, o.value || "");
				break;
			case 5:
				o.value ?? r(e, W.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(o)), n.key = s(e, o.value || "");
				break;
			case 6:
				o.value ?? r(e, W.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(o)), n.key = l(e, o.value || "");
				break;
			default: {
				r(e, W.UNEXPECTED_EMPTY_LINKED_KEY, t.lastStartLoc, 0);
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
					i.value ?? r(e, W.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(i)), n.items.push(o(e, i.value || ""));
					break;
				case 5:
					i.value ?? r(e, W.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(i)), n.items.push(s(e, i.value || ""));
					break;
				case 4:
					i.value ?? r(e, W.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(i)), n.items.push(c(e, i.value || ""));
					break;
				case 6:
					i.value ?? r(e, W.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, q(i)), n.items.push(l(e, i.value || ""));
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
		return c && r(e, W.MUST_HAVE_MESSAGES_IN_PLURAL, n, 0), a(l, e.currentOffset(), e.currentPosition()), l;
	}
	function h(e) {
		let t = e.context(), { offset: n, startLoc: r } = t, i = p(e);
		return t.currentType === 13 ? i : m(e, n, r, i);
	}
	function g(n) {
		let o = Le(n, P({}, e)), s = o.context(), c = i(0, s.offset, s.startLoc);
		return t && c.loc && (c.loc.source = n), c.body = h(o), e.onCacheKey && (c.cacheKey = e.onCacheKey(n)), s.currentType !== 13 && r(o, W.UNEXPECTED_LEXICAL_ANALYSIS, s.lastStartLoc, 0, n[s.offset] || ""), a(c, o.currentOffset(), o.currentPosition()), c;
	}
	return { parse: g };
}
function q(e) {
	if (e.type === 13) return "EOF";
	let t = (e.value || "").replace(/\r?\n/gu, "\\n");
	return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function We(e, t = {}) {
	let n = {
		ast: e,
		helpers: /* @__PURE__ */ new Set()
	};
	return {
		context: () => n,
		helper: (e) => (n.helpers.add(e), e)
	};
}
function Ge(e, t) {
	for (let n = 0; n < e.length; n++) Ke(e[n], t);
}
function Ke(e, t) {
	switch (e.type) {
		case 1:
			Ge(e.cases, t), t.helper("plural");
			break;
		case 2:
			Ge(e.items, t);
			break;
		case 6:
			Ke(e.key, t), t.helper("linked"), t.helper("type");
			break;
		case 5:
			t.helper("interpolate"), t.helper("list");
			break;
		case 4:
			t.helper("interpolate"), t.helper("named");
			break;
	}
}
function qe(e, t = {}) {
	let n = We(e);
	n.helper("normalize"), e.body && Ke(e.body, n);
	let r = n.context();
	e.helpers = Array.from(r.helpers);
}
function Je(e) {
	let t = e.body;
	return t.type === 2 ? Ye(t) : t.cases.forEach((e) => Ye(e)), e;
}
function Ye(e) {
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
			e.static = _e(t);
			for (let t = 0; t < e.items.length; t++) {
				let n = e.items[t];
				(n.type === 3 || n.type === 9) && delete n.value;
			}
		}
	}
}
var Xe = "minifier";
function Ze(e) {
	switch (e.t = e.type, e.type) {
		case 0: {
			let t = e;
			Ze(t.body), t.b = t.body, delete t.body;
			break;
		}
		case 1: {
			let t = e, n = t.cases;
			for (let e = 0; e < n.length; e++) Ze(n[e]);
			t.c = n, delete t.cases;
			break;
		}
		case 2: {
			let t = e, n = t.items;
			for (let e = 0; e < n.length; e++) Ze(n[e]);
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
			Ze(t.key), t.k = t.key, delete t.key, t.modifier && (Ze(t.modifier), t.m = t.modifier, delete t.modifier);
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
		default: if (process.env.NODE_ENV !== "production") throw Ee(W.UNHANDLED_MINIFIER_NODE_TYPE, null, {
			domain: Xe,
			args: [e.type]
		});
	}
	delete e.type;
}
var Qe = "parser";
function $e(e, t) {
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
function et(e, t) {
	let { helper: n } = e;
	e.push(`${n("linked")}(`), it(e, t.key), t.modifier ? (e.push(", "), it(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function tt(e, t) {
	let { helper: n, needIndent: r } = e;
	e.push(`${n("normalize")}([`), e.indent(r());
	let i = t.items.length;
	for (let n = 0; n < i && (it(e, t.items[n]), n !== i - 1); n++) e.push(", ");
	e.deindent(r()), e.push("])");
}
function nt(e, t) {
	let { helper: n, needIndent: r } = e;
	if (t.cases.length > 1) {
		e.push(`${n("plural")}([`), e.indent(r());
		let i = t.cases.length;
		for (let n = 0; n < i && (it(e, t.cases[n]), n !== i - 1); n++) e.push(", ");
		e.deindent(r()), e.push("])");
	}
}
function rt(e, t) {
	t.body ? it(e, t.body) : e.push("null");
}
function it(e, t) {
	let { helper: n } = e;
	switch (t.type) {
		case 0:
			rt(e, t);
			break;
		case 1:
			nt(e, t);
			break;
		case 2:
			tt(e, t);
			break;
		case 6:
			et(e, t);
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
		default: if (process.env.NODE_ENV !== "production") throw Ee(W.UNHANDLED_CODEGEN_NODE_TYPE, null, {
			domain: Qe,
			args: [t.type]
		});
	}
}
var at = (e, t = {}) => {
	let n = B(t.mode) ? t.mode : "normal", r = B(t.filename) ? t.filename : "message.intl", i = !!t.sourceMap, a = t.breakLineCode == null ? n === "arrow" ? ";" : "\n" : t.breakLineCode, o = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], c = $e(e, {
		mode: n,
		filename: r,
		sourceMap: i,
		breakLineCode: a,
		needIndent: o
	});
	c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(o), s.length > 0 && (c.push(`const { ${_e(s.map((e) => `${e}: _${e}`), ", ")} } = ctx`), c.newline()), c.push("return "), it(c, e), c.deindent(o), c.push("}"), delete e.helpers;
	let { code: l, map: u } = c.context();
	return {
		ast: e,
		code: l,
		map: u ? u.toJSON() : void 0
	};
};
function ot(e, t = {}) {
	let n = P({}, t), r = !!n.jit, i = !!n.minify, a = n.optimize == null ? !0 : n.optimize, o = Ue(n).parse(e);
	return r ? (a && Je(o), i && Ze(o), {
		ast: o,
		code: ""
	}) : (qe(o, n), at(o, n));
}
function J(e) {
	return H(e) && gt(e) === 0 && (L(e, "b") || L(e, "body"));
}
var st = ["b", "body"];
function ct(e) {
	return Ct(e, st);
}
var lt = ["c", "cases"];
function ut(e) {
	return Ct(e, lt, []);
}
var dt = ["s", "static"];
function ft(e) {
	return Ct(e, dt);
}
var pt = ["i", "items"];
function mt(e) {
	return Ct(e, pt, []);
}
var ht = ["t", "type"];
function gt(e) {
	return Ct(e, ht);
}
var _t = ["v", "value"];
function vt(e, t) {
	let n = Ct(e, _t);
	if (n != null) return n;
	throw Tt(t);
}
var yt = ["m", "modifier"];
function bt(e) {
	return Ct(e, yt);
}
var xt = ["k", "key"];
function St(e) {
	let t = Ct(e, xt);
	if (t) return t;
	throw Tt(6);
}
function Ct(e, t, n) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (L(e, r) && e[r] != null) return e[r];
	}
	return n;
}
var wt = [
	...st,
	...lt,
	...dt,
	...pt,
	...xt,
	...yt,
	..._t,
	...ht
];
function Tt(e) {
	return /* @__PURE__ */ Error(`unhandled node type: ${e}`);
}
function Et(e) {
	return (t) => Dt(t, e);
}
function Dt(e, t) {
	let n = ct(t);
	if (n == null) throw Tt(0);
	if (gt(n) === 1) {
		let t = ut(n);
		return e.plural(t.reduce((t, n) => [...t, Ot(e, n)], []));
	} else return Ot(e, n);
}
function Ot(e, t) {
	let n = ft(t);
	if (n != null) return e.type === "text" ? n : e.normalize([n]);
	{
		let n = mt(t).reduce((t, n) => [...t, kt(e, n)], []);
		return e.normalize(n);
	}
}
function kt(e, t) {
	let n = gt(t);
	switch (n) {
		case 3: return vt(t, n);
		case 9: return vt(t, n);
		case 4: {
			let r = t;
			if (L(r, "k") && r.k) return e.interpolate(e.named(r.k));
			if (L(r, "key") && r.key) return e.interpolate(e.named(r.key));
			throw Tt(n);
		}
		case 5: {
			let r = t;
			if (L(r, "i") && N(r.i)) return e.interpolate(e.list(r.i));
			if (L(r, "index") && N(r.index)) return e.interpolate(e.list(r.index));
			throw Tt(n);
		}
		case 6: {
			let n = t, r = bt(n), i = St(n);
			return e.linked(kt(e, i), r ? kt(e, r) : void 0, e.type);
		}
		case 7: return vt(t, n);
		case 8: return vt(t, n);
		default: throw Error(`unhandled node on format message part: ${n}`);
	}
}
var At = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function jt(e, t) {
	t && ke(e) && E(te(At, { source: e }));
}
var Mt = (e) => e, Nt = F();
function Pt(e, t = {}) {
	let n = !1, r = t.onError || De;
	return t.onError = (e) => {
		n = !0, r(e);
	}, {
		...ot(e, t),
		detectError: n
	};
}
function Ft(e, t) {
	if (B(e)) {
		let n = V(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
		process.env.NODE_ENV !== "production" && jt(e, n);
		let r = (t.onCacheKey || Mt)(e), i = Nt[r];
		if (i) return i;
		let { ast: a, detectError: o } = Pt(e, {
			...t,
			location: process.env.NODE_ENV !== "production",
			jit: !0
		}), s = Et(a);
		return o ? s : Nt[r] = s;
	} else {
		if (process.env.NODE_ENV !== "production" && !J(e)) return E(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
		let n = e.cacheKey;
		return n ? Nt[n] || (Nt[n] = Et(e)) : Et(e);
	}
}
var It = null;
function Lt(e) {
	It = e;
}
function Rt(e, t, n) {
	It && It.emit("i18n:init", {
		timestamp: Date.now(),
		i18n: e,
		version: t,
		meta: n
	});
}
var zt = Bt("function:translate");
function Bt(e) {
	return (t) => It && It.emit(e, t);
}
var Y = {
	INVALID_ARGUMENT: 17,
	INVALID_DATE_ARGUMENT: 18,
	INVALID_ISO_DATE_ARGUMENT: 19,
	NOT_SUPPORT_NON_STRING_MESSAGE: 20,
	NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
	NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
	NOT_SUPPORT_LOCALE_TYPE: 23
};
function Vt(e) {
	return Ee(e, null, process.env.NODE_ENV === "production" ? void 0 : { messages: Ht });
}
var Ht = {
	[Y.INVALID_ARGUMENT]: "Invalid arguments",
	[Y.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
	[Y.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
	[Y.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
	[Y.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
	[Y.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
	[Y.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Ut(e, t) {
	return t.locale == null ? Gt(e.locale) : Gt(t.locale);
}
var Wt;
function Gt(e) {
	if (B(e)) return e;
	if (z(e)) {
		if (e.resolvedOnce && Wt != null) return Wt;
		if (e.constructor.name === "Function") {
			let t = e();
			if (pe(t)) throw Vt(Y.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
			return Wt = t;
		} else throw Vt(Y.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	} else throw Vt(Y.NOT_SUPPORT_LOCALE_TYPE);
}
function Kt(e, t, n) {
	return [...new Set([n, ...R(t) ? t : H(t) ? Object.keys(t) : B(t) ? [t] : [n]])];
}
function qt(e, t, n) {
	let r = B(n) ? n : dn, i = e;
	i.__localeChainCache ||= /* @__PURE__ */ new Map();
	let a = i.__localeChainCache.get(r);
	if (!a) {
		a = [];
		let e = [n];
		for (; R(e);) e = Jt(a, e, t);
		let o = R(t) || !U(t) ? t : t.default ? t.default : null;
		e = B(o) ? [o] : o, R(e) && Jt(a, e, !1), i.__localeChainCache.set(r, a);
	}
	return a;
}
function Jt(e, t, n) {
	let r = !0;
	for (let i = 0; i < t.length && V(r); i++) {
		let a = t[i];
		B(a) && (r = Yt(e, t[i], n));
	}
	return r;
}
function Yt(e, t, n) {
	let r, i = t.split("-");
	do
		r = Xt(e, i.join("-"), n), i.splice(-1, 1);
	while (i.length && r === !0);
	return r;
}
function Xt(e, t, n) {
	let r = !1;
	if (!e.includes(t) && (r = !0, t)) {
		r = t[t.length - 1] !== "!";
		let i = t.replace(/!/g, "");
		e.push(i), (R(n) || U(n)) && n[i] && (r = n[i]);
	}
	return r;
}
var Zt = [];
Zt[0] = {
	w: [0],
	i: [3, 0],
	"[": [4],
	o: [7]
}, Zt[1] = {
	w: [1],
	".": [2],
	"[": [4],
	o: [7]
}, Zt[2] = {
	w: [2],
	i: [3, 0],
	0: [3, 0]
}, Zt[3] = {
	i: [3, 0],
	0: [3, 0],
	w: [1, 1],
	".": [2, 1],
	"[": [4, 1],
	o: [7, 1]
}, Zt[4] = {
	"'": [5, 0],
	"\"": [6, 0],
	"[": [4, 2],
	"]": [1, 3],
	o: 8,
	l: [4, 0]
}, Zt[5] = {
	"'": [4, 0],
	o: 8,
	l: [5, 0]
}, Zt[6] = {
	"\"": [4, 0],
	o: 8,
	l: [6, 0]
};
var Qt = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function $t(e) {
	return Qt.test(e);
}
function en(e) {
	let t = e.charCodeAt(0);
	return t === e.charCodeAt(e.length - 1) && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function tn(e) {
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
function nn(e) {
	let t = e.trim();
	return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : $t(t) ? en(t) : "*" + t;
}
function rn(e) {
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
			if (i = 0, o === void 0 || (o = nn(o), o === !1)) return !1;
			f[1]();
		}
	};
	function p() {
		let t = e[n + 1];
		if (r === 5 && t === "'" || r === 6 && t === "\"") return n++, s = "\\" + t, f[0](), !0;
	}
	for (; r !== null;) if (n++, a = e[n], !(a === "\\" && p())) {
		if (c = tn(a), d = Zt[r], l = d[c] || d.l || 8, l === 8 || (r = l[0], l[1] !== void 0 && (u = f[l[1]], u && (s = a, u() === !1)))) return;
		if (r === 7) return t;
	}
}
var an = /* @__PURE__ */ new Map();
function on(e, t) {
	return H(e) ? e[t] : null;
}
function sn(e, t) {
	if (!H(e)) return null;
	let n = an.get(t);
	if (n || (n = rn(t), n && an.set(t, n)), !n) return null;
	let r = n.length, i = e, a = 0;
	for (; a < r;) {
		let e = n[a];
		if (wt.includes(e) && J(i) || !H(i) || !L(i, e)) return null;
		let t = i[e];
		if (t === void 0 || z(i)) return null;
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
}, cn = {
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
function ln(e, ...t) {
	return te(cn[e], ...t);
}
var un = "11.4.0", dn = "en-US", fn = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function pn() {
	return {
		upper: (e, t) => t === "text" && B(e) ? e.toUpperCase() : t === "vnode" && H(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
		lower: (e, t) => t === "text" && B(e) ? e.toLowerCase() : t === "vnode" && H(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
		capitalize: (e, t) => t === "text" && B(e) ? fn(e) : t === "vnode" && H(e) && "__v_isVNode" in e ? fn(e.children) : e
	};
}
var mn;
function hn(e) {
	mn = e;
}
var gn;
function _n(e) {
	gn = e;
}
var vn;
function yn(e) {
	vn = e;
}
var bn = null, xn = (e) => {
	bn = e;
}, Sn = () => bn, Cn = null, wn = (e) => {
	Cn = e;
}, Tn = () => Cn, En = 0;
function Dn(e = {}) {
	let t = z(e.onWarn) ? e.onWarn : E, n = B(e.version) ? e.version : un, r = B(e.locale) || z(e.locale) ? e.locale : dn, i = z(r) ? dn : r, a = R(e.fallbackLocale) || U(e.fallbackLocale) || B(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i, o = U(e.messages) ? e.messages : On(i), s = U(e.datetimeFormats) ? e.datetimeFormats : On(i), c = U(e.numberFormats) ? e.numberFormats : On(i), l = P(F(), e.modifiers, pn()), u = e.pluralRules || F(), d = z(e.missing) ? e.missing : null, f = V(e.missingWarn) || ae(e.missingWarn) ? e.missingWarn : !0, p = V(e.fallbackWarn) || ae(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, h = !!e.unresolving, g = z(e.postTranslation) ? e.postTranslation : null, _ = U(e.processor) ? e.processor : null, v = V(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, b = z(e.messageCompiler) ? e.messageCompiler : mn;
	process.env.NODE_ENV !== "production" && z(e.messageCompiler) && O(ln(X.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
	let x = z(e.messageResolver) ? e.messageResolver : gn || on, S = z(e.localeFallbacker) ? e.localeFallbacker : vn || Kt, C = H(e.fallbackContext) ? e.fallbackContext : void 0, w = e, T = H(w.__datetimeFormatters) ? w.__datetimeFormatters : /* @__PURE__ */ new Map(), D = H(w.__numberFormatters) ? w.__numberFormatters : /* @__PURE__ */ new Map(), k = H(w.__meta) ? w.__meta : {};
	En++;
	let A = {
		version: n,
		cid: En,
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
		messageResolver: x,
		localeFallbacker: S,
		fallbackContext: C,
		onWarn: t,
		__meta: k
	};
	return A.datetimeFormats = s, A.numberFormats = c, A.__datetimeFormatters = T, A.__numberFormatters = D, process.env.NODE_ENV !== "production" && (A.__v_emitter = w.__v_emitter == null ? void 0 : w.__v_emitter), process.env.NODE_ENV !== "production" && Rt(A, n, k), A;
}
var On = (e) => ({ [e]: F() });
function kn(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function An(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function jn(e, t, n, r, i) {
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
		return B(r) ? r : t;
	} else return process.env.NODE_ENV !== "production" && An(r, t) && o(ln(X.NOT_FOUND_KEY, {
		key: t,
		locale: n
	})), t;
}
function Mn(e, t, n) {
	let r = e;
	r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Nn(e, t) {
	return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Pn(e, t) {
	let n = t.indexOf(e);
	if (n === -1) return !1;
	for (let r = n + 1; r < t.length; r++) if (Nn(e, t[r])) return !0;
	return !1;
}
var Fn = typeof Intl < "u", In = {
	dateTimeFormat: Fn && Intl.DateTimeFormat !== void 0,
	numberFormat: Fn && Intl.NumberFormat !== void 0
};
function Ln(e, ...t) {
	let { datetimeFormats: n, unresolving: r, fallbackLocale: i, onWarn: a, localeFallbacker: o } = e, { __datetimeFormatters: s } = e;
	if (process.env.NODE_ENV !== "production" && !In.dateTimeFormat) return a(ln(X.CANNOT_FORMAT_DATE)), "";
	if (!B(t[0]) && !ie(t[0]) && !N(t[0])) return process.env.NODE_ENV !== "production" && a(ln(X.INVALID_DATE_ARGUMENT, { value: String(t[0]) })), "";
	let [c, l, u, d] = zn(...t), f = V(u.missingWarn) ? u.missingWarn : e.missingWarn, p = V(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = Ut(e, u), g = o(e, i, h);
	if (!B(c) || c === "") return new Intl.DateTimeFormat(h.replace(/!/g, ""), d).format(l);
	let _ = {}, v, y = null, b = h, x = null, S = "datetime format";
	for (let t = 0; t < g.length; t++) {
		if (v = x = g[t], process.env.NODE_ENV !== "production" && h !== v && kn(p, c) && a(ln(X.FALLBACK_TO_DATE_FORMAT, {
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
		if (_ = n[v] || {}, y = _[c], U(y)) break;
		jn(e, c, v, f, S), b = x;
	}
	if (!U(y) || !B(v)) return r ? -1 : c;
	let C = `${v}__${c}`;
	oe(d) || (C = `${C}__${JSON.stringify(d)}`);
	let w = s.get(C);
	return w || (w = new Intl.DateTimeFormat(v, P({}, y, d)), s.set(C, w)), m ? w.formatToParts(l) : w.format(l);
}
var Rn = [
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
function zn(...e) {
	let [t, n, r, i] = e, a = F(), o = F(), s;
	if (B(t)) {
		let e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
		if (!e) throw Vt(Y.INVALID_ISO_DATE_ARGUMENT);
		let n = e[3] ? e[3].trim().startsWith("T") ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}` : e[1].trim();
		s = new Date(n);
		try {
			s.toISOString();
		} catch {
			throw Vt(Y.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (ie(t)) {
		if (isNaN(t.getTime())) throw Vt(Y.INVALID_DATE_ARGUMENT);
		s = t;
	} else if (N(t)) s = t;
	else throw Vt(Y.INVALID_ARGUMENT);
	return B(n) ? a.key = n : U(n) && Object.keys(n).forEach((e) => {
		Rn.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), B(r) ? a.locale = r : U(r) && (o = r), U(i) && (o = i), [
		a.key || "",
		s,
		a,
		o
	];
}
function Bn(e, t, n) {
	let r = e;
	for (let e in n) {
		let n = `${t}__${e}`;
		r.__datetimeFormatters.has(n) && r.__datetimeFormatters.delete(n);
	}
}
function Vn(e, ...t) {
	let { numberFormats: n, unresolving: r, fallbackLocale: i, onWarn: a, localeFallbacker: o } = e, { __numberFormatters: s } = e;
	if (process.env.NODE_ENV !== "production" && !In.numberFormat) return a(ln(X.CANNOT_FORMAT_NUMBER)), "";
	if (!N(t[0])) return process.env.NODE_ENV !== "production" && a(ln(X.INVALID_NUMBER_ARGUMENT, { value: String(t[0]) })), "";
	let [c, l, u, d] = Un(...t), f = V(u.missingWarn) ? u.missingWarn : e.missingWarn, p = V(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = Ut(e, u), g = o(e, i, h);
	if (!B(c) || c === "") return new Intl.NumberFormat(h.replace(/!/g, ""), d).format(l);
	let _ = {}, v, y = null, b = h, x = null, S = "number format";
	for (let t = 0; t < g.length; t++) {
		if (v = x = g[t], process.env.NODE_ENV !== "production" && h !== v && kn(p, c) && a(ln(X.FALLBACK_TO_NUMBER_FORMAT, {
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
		if (_ = n[v] || {}, y = _[c], U(y)) break;
		jn(e, c, v, f, S), b = x;
	}
	if (!U(y) || !B(v)) return r ? -1 : c;
	let C = `${v}__${c}`;
	oe(d) || (C = `${C}__${JSON.stringify(d)}`);
	let w = s.get(C);
	return w || (w = new Intl.NumberFormat(v, P({}, y, d)), s.set(C, w)), m ? w.formatToParts(l) : w.format(l);
}
var Hn = [
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
function Un(...e) {
	let [t, n, r, i] = e, a = F(), o = F();
	if (!N(t)) throw Vt(Y.INVALID_ARGUMENT);
	let s = t;
	return B(n) ? a.key = n : U(n) && Object.keys(n).forEach((e) => {
		Hn.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), B(r) ? a.locale = r : U(r) && (o = r), U(i) && (o = i), [
		a.key || "",
		s,
		a,
		o
	];
}
function Wn(e, t, n) {
	let r = e;
	for (let e in n) {
		let n = `${t}__${e}`;
		r.__numberFormatters.has(n) && r.__numberFormatters.delete(n);
	}
}
var Gn = (e) => e, Kn = (e) => "", qn = "text", Jn = (e) => e.length === 0 ? "" : _e(e), Yn = ge;
function Xn(e, t) {
	return e = Math.abs(e), t === 2 ? e === 1 ? 0 : 1 : Math.min(e, 2);
}
function Zn(e) {
	let t = N(e.pluralIndex) ? e.pluralIndex : -1;
	return N(e.named?.count) ? e.named.count : N(e.named?.n) ? e.named.n : t;
}
function Qn(e = {}) {
	let t = e.locale, n = Zn(e), r = B(t) && z(e.pluralRules?.[t]) ? e.pluralRules[t] : Xn, i = r === Xn ? void 0 : Xn, a = (e) => e[r(n, e.length, i)], o = e.list || [], s = (e) => o[e], c = e.named || F();
	N(e.pluralIndex) && (c.count ||= e.pluralIndex, c.n ||= e.pluralIndex);
	let l = (e) => c[e];
	function u(t, n) {
		return (z(e.messages) ? e.messages(t, !!n) : H(e.messages) ? e.messages[t] : !1) || (e.parent ? e.parent.message(t) : Kn);
	}
	let d = (t) => e.modifiers ? e.modifiers[t] : Gn, f = z(e.processor?.normalize) ? e.processor.normalize : Jn, p = z(e.processor?.interpolate) ? e.processor.interpolate : Yn, m = {
		list: s,
		named: l,
		plural: a,
		linked: (e, ...t) => {
			let [n, r] = t, i = "text", a = "";
			t.length === 1 ? H(n) ? (a = n.modifier || a, i = n.type || i) : B(n) && (a = n || a) : t.length === 2 && (B(n) && (a = n || a), B(r) && (i = r || i));
			let o = u(e, !0)(m), s = o === "" || o === void 0 ? e : o, c = i === "vnode" && R(s) && a ? s[0] : s;
			return a ? d(a)(c, i) : c;
		},
		message: u,
		type: B(e.processor?.type) ? e.processor.type : qn,
		interpolate: p,
		normalize: f,
		values: P(F(), o, c)
	};
	return m;
}
var $n = () => "", Z = (e) => z(e);
function er(e, ...t) {
	let { fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: a, fallbackLocale: o, messages: s } = e, [c, l] = ar(...t), u = V(l.missingWarn) ? l.missingWarn : e.missingWarn, d = V(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, f = V(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, p = !!l.resolvedMessage, m = B(l.default) || V(l.default) ? V(l.default) ? a ? c : () => c : l.default : n ? a ? c : () => c : null, h = n || m != null && (B(m) || z(m)), g = Ut(e, l);
	f && tr(l);
	let [_, v, y] = p ? [
		c,
		g,
		s[g] || F()
	] : nr(e, c, g, o, d, u), b = _, x = c;
	if (!p && !(B(b) || J(b) || Z(b)) && h && (b = m, x = b), !p && (!(B(b) || J(b) || Z(b)) || !B(v))) return i ? -1 : c;
	if (process.env.NODE_ENV !== "production" && B(b) && e.messageCompiler == null) return E(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
	let S = !1, C = Z(b) ? b : rr(e, c, v, b, x, () => {
		S = !0;
	});
	if (S) return b;
	let w = ir(e, C, Qn(cr(e, v, y, l))), T = r ? r(w, c) : w;
	if (f && B(T) && (T = de(T)), process.env.NODE_ENV !== "production") {
		let t = {
			timestamp: Date.now(),
			key: B(c) ? c : Z(b) ? b.key : "",
			locale: v || (Z(b) ? b.locale : ""),
			format: B(b) ? b : Z(b) ? b.source : "",
			message: T
		};
		t.meta = P({}, e.__meta, Sn() || {}), zt(t);
	}
	return T;
}
function tr(e) {
	R(e.list) ? e.list = e.list.map((e) => B(e) ? le(e) : e) : H(e.named) && Object.keys(e.named).forEach((t) => {
		B(e.named[t]) && (e.named[t] = le(e.named[t]));
	});
}
function nr(e, t, n, r, i, a) {
	let { messages: o, onWarn: s, messageResolver: c, localeFallbacker: l } = e, u = l(e, r, n), d = F(), f, p = null, m = n, h = null, g = "translate";
	for (let r = 0; r < u.length; r++) {
		f = h = u[r], process.env.NODE_ENV !== "production" && n !== f && !Nn(n, f) && kn(i, t) && s(ln(X.FALLBACK_TO_TRANSLATE, {
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
		}), d = o[f] || F();
		let _ = null, v, y;
		if (process.env.NODE_ENV !== "production" && k && l && (_ = window.performance.now(), v = "intlify-message-resolve-start", y = "intlify-message-resolve-end", A && A(v)), (p = c(d, t)) === null && (p = d[t]), process.env.NODE_ENV !== "production" && k && l) {
			let e = window.performance.now();
			l && _ && p && l.emit("message-resolve", {
				type: "message-resolve",
				key: t,
				message: p,
				time: e - _,
				groupId: `${g}:${t}`
			}), v && y && A && j && (A(y), j("intlify message resolve", v, y));
		}
		if (B(p) || J(p) || Z(p)) break;
		if (!Pn(f, u)) {
			let n = jn(e, t, f, a, g);
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
function rr(e, t, n, r, i, a) {
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
	process.env.NODE_ENV !== "production" && k && c && (l = window.performance.now(), u = "intlify-message-compilation-start", d = "intlify-message-compilation-end", A && A(u));
	let f = o(r, or(e, n, i, r, s, a));
	if (process.env.NODE_ENV !== "production" && k && c) {
		let e = window.performance.now();
		c && l && c.emit("message-compilation", {
			type: "message-compilation",
			message: r,
			time: e - l,
			groupId: `translate:${t}`
		}), u && d && A && j && (A(d), j("intlify message compilation", u, d));
	}
	return f.locale = n, f.key = t, f.source = r, f;
}
function ir(e, t, n) {
	let r = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter, i = null, a, o;
	process.env.NODE_ENV !== "production" && k && r && (i = window.performance.now(), a = "intlify-message-evaluation-start", o = "intlify-message-evaluation-end", A && A(a));
	let s = t(n);
	if (process.env.NODE_ENV !== "production" && k && r) {
		let e = window.performance.now();
		r && i && r.emit("message-evaluation", {
			type: "message-evaluation",
			value: s,
			time: e - i,
			groupId: `translate:${t.key}`
		}), a && o && A && j && (A(o), j("intlify message evaluation", a, o));
	}
	return s;
}
function ar(...e) {
	let [t, n, r] = e, i = F();
	if (!B(t) && !N(t) && !Z(t) && !J(t)) throw Vt(Y.INVALID_ARGUMENT);
	let a = N(t) ? String(t) : (Z(t), t);
	return N(n) ? i.plural = n : B(n) ? i.default = n : U(n) && !oe(n) ? i.named = n : R(n) && (i.list = n), N(r) ? i.plural = r : B(r) ? i.default = r : U(r) && P(i, r), [a, i];
}
function or(e, t, n, r, i, a) {
	return {
		locale: t,
		key: n,
		warnHtmlMessage: i,
		onError: (t) => {
			if (a && a(t), process.env.NODE_ENV !== "production") {
				let i = sr(r), a = t.location && i && ye(i, t.location.start.offset, t.location.end.offset), o = e.__v_emitter;
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
		onCacheKey: (e) => ne(t, n, e)
	};
}
function sr(e) {
	if (B(e)) return e;
	if (e.loc && e.loc.source) return e.loc.source;
}
function cr(e, t, n, r) {
	let { modifiers: i, pluralRules: a, messageResolver: o, fallbackLocale: s, fallbackWarn: c, missingWarn: l, fallbackContext: u } = e, d = {
		locale: t,
		modifiers: i,
		pluralRules: a,
		messages: (r, i) => {
			let a = o(n, r);
			if (a == null && (u || i)) {
				let [n, , i] = nr(u || e, r, t, s, c, l);
				a = n ?? o(i, r);
			}
			if (B(a) || J(a)) {
				let n = !1, i = rr(e, r, t, a, r, () => {
					n = !0;
				});
				return n ? $n : i;
			} else if (Z(a)) return a;
			else return $n;
		}
	};
	return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), N(r.plural) && (d.pluralIndex = r.plural), d;
}
var lr = "11.4.0", Q = {
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
function ur(e, ...t) {
	return Ee(e, null, process.env.NODE_ENV === "production" ? void 0 : {
		messages: dr,
		args: t
	});
}
var dr = {
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
}, fr = M("__translateVNode"), pr = M("__datetimeParts"), mr = M("__numberParts"), hr = M("__enableEmitter"), gr = M("__disableEmitter"), _r = M("__setPluralRules");
M("__intlifyMeta");
var vr = M("__injectWithOption"), yr = M("__dispose"), $ = {
	FALLBACK_TO_ROOT: 10,
	NOT_FOUND_PARENT_SCOPE: 11,
	IGNORE_OBJ_FLATTEN: 12,
	DEPRECATE_LEGACY_MODE: 13,
	DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 14,
	DUPLICATE_USE_I18N_CALLING: 15
}, br = {
	[$.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
	[$.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
	[$.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
	[$.DEPRECATE_LEGACY_MODE]: "Legacy API mode has been deprecated in v11. Use Composition API mode instead.\nAbout how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html",
	[$.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
	[$.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function xr(e, ...t) {
	return te(br[e], ...t);
}
function Sr(e) {
	if (!H(e) || J(e)) return e;
	for (let t in e) if (L(e, t)) if (!t.includes(".")) H(e[t]) && Sr(e[t]);
	else {
		let n = t.split("."), r = n.length - 1, i = e, a = !1;
		for (let e = 0; e < r; e++) {
			if (n[e] === "__proto__") throw Error(`unsafe key: ${n[e]}`);
			if (n[e] in i || (i[n[e]] = F()), !H(i[n[e]])) {
				process.env.NODE_ENV !== "production" && E(xr($.IGNORE_OBJ_FLATTEN, { key: n[e] })), a = !0;
				break;
			}
			i = i[n[e]];
		}
		if (a || (J(i) ? wt.includes(n[r]) || delete e[t] : (i[n[r]] = e[t], delete e[t])), !J(i)) {
			let e = i[n[r]];
			H(e) && Sr(e);
		}
	}
	return e;
}
function Cr(e, t) {
	let { messages: n, __i18n: r, messageResolver: i, flatJson: a } = t, o = U(n) ? n : R(r) ? F() : { [e]: F() };
	if (R(r) && r.forEach((e) => {
		if ("locale" in e && "resource" in e) {
			let { locale: t, resource: n } = e;
			t ? (o[t] = o[t] || F(), Se(n, o[t])) : Se(n, o);
		} else B(e) && Se(JSON.parse(e), o);
	}), i == null && a) for (let e in o) L(o, e) && Sr(o[e]);
	return o;
}
function wr(e) {
	return e.type;
}
function Tr(e, t, n) {
	let r = H(t.messages) ? t.messages : F();
	"__i18nGlobal" in n && (r = Cr(e.locale.value, {
		messages: r,
		__i18n: n.__i18nGlobal
	}));
	let i = Object.keys(r);
	if (i.length && i.forEach((t) => {
		e.mergeLocaleMessage(t, r[t]);
	}), H(t.datetimeFormats)) {
		let n = Object.keys(t.datetimeFormats);
		n.length && n.forEach((n) => {
			e.mergeDateTimeFormat(n, t.datetimeFormats[n]);
		});
	}
	if (H(t.numberFormats)) {
		let n = Object.keys(t.numberFormats);
		n.length && n.forEach((n) => {
			e.mergeNumberFormat(n, t.numberFormats[n]);
		});
	}
}
function Er(e) {
	return c(n, null, e, 0);
}
function Dr() {
	let t = "currentInstance";
	return t in e ? e[t] : e.getCurrentInstance();
}
var Or = "__INTLIFY_META__", kr = () => [], Ar = () => !1, jr = 0;
function Mr(e) {
	return ((t, n, r, i) => e(n, r, Dr() || void 0, i));
}
var Nr = () => {
	let e = Dr(), t = null;
	return e && (t = wr(e)[Or]) ? { [Or]: t } : null;
};
function Pr(e = {}) {
	let { __root: t, __injectWithOption: n } = e, i = t === void 0, a = e.flatJson, o = k ? _ : b, s = V(e.inheritLocale) ? e.inheritLocale : !0, c = o(t && s ? t.locale.value : B(e.locale) ? e.locale : dn), l = o(t && s ? t.fallbackLocale.value : B(e.fallbackLocale) || R(e.fallbackLocale) || U(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value), u = o(Cr(c.value, e)), d = o(U(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), f = o(U(e.numberFormats) ? e.numberFormats : { [c.value]: {} }), p = t ? t.missingWarn : V(e.missingWarn) || ae(e.missingWarn) ? e.missingWarn : !0, m = t ? t.fallbackWarn : V(e.fallbackWarn) || ae(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : V(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, v = z(e.missing) ? e.missing : null, y = z(e.missing) ? Mr(e.missing) : null, x = z(e.postTranslation) ? e.postTranslation : null, S = t ? t.warnHtmlMessage : V(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, w = !!e.escapeParameter, T = t ? t.modifiers : U(e.modifiers) ? e.modifiers : {}, D = e.pluralRules || t && t.pluralRules, O;
	O = (() => {
		i && wn(null);
		let t = {
			version: lr,
			locale: c.value,
			fallbackLocale: l.value,
			messages: u.value,
			modifiers: T,
			pluralRules: D,
			missing: y === null ? void 0 : y,
			missingWarn: p,
			fallbackWarn: m,
			fallbackFormat: g,
			unresolving: !0,
			postTranslation: x === null ? void 0 : x,
			warnHtmlMessage: S,
			escapeParameter: w,
			messageResolver: e.messageResolver,
			messageCompiler: e.messageCompiler,
			__meta: { framework: "vue" }
		};
		t.datetimeFormats = d.value, t.numberFormats = f.value, t.__datetimeFormatters = U(O) ? O.__datetimeFormatters : void 0, t.__numberFormatters = U(O) ? O.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (t.__v_emitter = U(O) ? O.__v_emitter : void 0);
		let n = Dn(t);
		return i && wn(n), n;
	})(), Mn(O, c.value, l.value);
	function A() {
		return [
			c.value,
			l.value,
			u.value,
			d.value,
			f.value
		];
	}
	let j = r({
		get: () => c.value,
		set: (e) => {
			O.locale = e, c.value = e;
		}
	}), ee = r({
		get: () => l.value,
		set: (e) => {
			O.fallbackLocale = e, l.value = e, Mn(O, c.value, e);
		}
	}), te = r(() => u.value), M = r(() => d.value), ne = r(() => f.value);
	function re() {
		return z(x) ? x : null;
	}
	function ie(e) {
		x = e, O.postTranslation = e;
	}
	function oe() {
		return v;
	}
	function se(e) {
		e !== null && (y = Mr(e)), v = e, O.missing = y;
	}
	function F(e, t) {
		return e !== "translate" || !t.resolvedMessage;
	}
	let I = (e, n, r, a, o, s) => {
		A();
		let c;
		try {
			process.env.NODE_ENV !== "production" && xn(Nr()), i || (O.fallbackContext = t ? Tn() : void 0), c = e(O);
		} finally {
			process.env.NODE_ENV !== "production" && xn(null), i || (O.fallbackContext = void 0);
		}
		if (r !== "translate exists" && N(c) && c === -1 || r === "translate exists" && !c) {
			let [e, i] = n();
			if (process.env.NODE_ENV !== "production" && t && B(e) && F(r, i) && (h && (kn(m, e) || An(p, e)) && E(xr($.FALLBACK_TO_ROOT, {
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
		else throw ur(Q.UNEXPECTED_RETURN_TYPE);
	};
	function ce(...e) {
		return I((t) => Reflect.apply(er, null, [t, ...e]), () => ar(...e), "translate", (t) => Reflect.apply(t.t, t, [...e]), (e) => e, (e) => B(e));
	}
	function le(...e) {
		let [t, n, r] = e;
		if (r && !H(r)) throw ur(Q.INVALID_ARGUMENT);
		return ce(t, n, P({ resolvedMessage: !0 }, r || {}));
	}
	function ue(...e) {
		return I((t) => Reflect.apply(Ln, null, [t, ...e]), () => zn(...e), "datetime format", (t) => Reflect.apply(t.d, t, [...e]), () => "", (e) => B(e) || R(e));
	}
	function de(...e) {
		return I((t) => Reflect.apply(Vn, null, [t, ...e]), () => Un(...e), "number format", (t) => Reflect.apply(t.n, t, [...e]), () => "", (e) => B(e) || R(e));
	}
	function fe(e) {
		return e.map((e) => B(e) || N(e) || V(e) ? Er(String(e)) : e);
	}
	let pe = {
		normalize: fe,
		interpolate: (e) => e,
		type: "vnode"
	};
	function me(...e) {
		return I((t) => {
			let n, r = t;
			try {
				r.processor = pe, n = Reflect.apply(er, null, [r, ...e]);
			} finally {
				r.processor = null;
			}
			return n;
		}, () => ar(...e), "translate", (t) => t[fr](...e), (e) => [Er(e)], (e) => R(e));
	}
	function he(...e) {
		return I((t) => Reflect.apply(Vn, null, [t, ...e]), () => Un(...e), "number format", (t) => t[mr](...e), kr, (e) => B(e) || R(e));
	}
	function ge(...e) {
		return I((t) => Reflect.apply(Ln, null, [t, ...e]), () => zn(...e), "datetime format", (t) => t[pr](...e), kr, (e) => B(e) || R(e));
	}
	function _e(e) {
		D = e, O.pluralRules = D;
	}
	function ve(e, t) {
		return I(() => {
			if (!e) return !1;
			let n = B(t) ? t : c.value, r = B(t) ? [n] : qt(O, l.value, n);
			for (let t = 0; t < r.length; t++) {
				let n = xe(r[t]), i = O.messageResolver(n, e);
				if (i === null && (i = n[e]), J(i) || Z(i) || B(i)) return !0;
			}
			return !1;
		}, () => [e], "translate exists", (n) => Reflect.apply(n.te, n, [e, t]), Ar, (e) => V(e));
	}
	function ye(e) {
		let t = null, n = qt(O, l.value, c.value);
		for (let r = 0; r < n.length; r++) {
			let i = u.value[n[r]] || {}, a = O.messageResolver(i, e);
			if (a != null) {
				t = a;
				break;
			}
		}
		return t;
	}
	function be(e) {
		return ye(e) ?? (t && t.tm(e) || {});
	}
	function xe(e) {
		return u.value[e] || {};
	}
	function Ce(e, t) {
		if (a) {
			let n = { [e]: t };
			for (let e in n) L(n, e) && Sr(n[e]);
			t = n[e];
		}
		u.value[e] = t, O.messages = u.value;
	}
	function we(e, t) {
		u.value[e] = u.value[e] || {};
		let n = { [e]: t };
		if (a) for (let e in n) L(n, e) && Sr(n[e]);
		t = n[e], Se(t, u.value[e]), O.messages = u.value;
	}
	function W(e) {
		return d.value[e] || {};
	}
	function Te(e, t) {
		d.value[e] = t, O.datetimeFormats = d.value, Bn(O, e, t);
	}
	function Ee(e, t) {
		d.value[e] = P(d.value[e] || {}, t), O.datetimeFormats = d.value, Bn(O, e, t);
	}
	function De(e) {
		return f.value[e] || {};
	}
	function Oe(e, t) {
		f.value[e] = t, O.numberFormats = f.value, Wn(O, e, t);
	}
	function ke(e, t) {
		f.value[e] = P(f.value[e] || {}, t), O.numberFormats = f.value, Wn(O, e, t);
	}
	jr++, t && k && (C(t.locale, (e) => {
		s && (c.value = e, O.locale = e, Mn(O, c.value, l.value));
	}), C(t.fallbackLocale, (e) => {
		s && (l.value = e, O.fallbackLocale = e, Mn(O, c.value, l.value));
	}));
	let G = {
		id: jr,
		locale: j,
		fallbackLocale: ee,
		get inheritLocale() {
			return s;
		},
		set inheritLocale(e) {
			s = e, e && t && (c.value = t.locale.value, l.value = t.fallbackLocale.value, Mn(O, c.value, l.value));
		},
		get availableLocales() {
			return Object.keys(u.value).sort();
		},
		messages: te,
		get modifiers() {
			return T;
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
			return g;
		},
		set fallbackFormat(e) {
			g = e, O.fallbackFormat = g;
		},
		get warnHtmlMessage() {
			return S;
		},
		set warnHtmlMessage(e) {
			S = e, O.warnHtmlMessage = e;
		},
		get escapeParameter() {
			return w;
		},
		set escapeParameter(e) {
			w = e, O.escapeParameter = e;
		},
		t: ce,
		getLocaleMessage: xe,
		setLocaleMessage: Ce,
		mergeLocaleMessage: we,
		getPostTranslationHandler: re,
		setPostTranslationHandler: ie,
		getMissingHandler: oe,
		setMissingHandler: se,
		[_r]: _e
	};
	return G.datetimeFormats = M, G.numberFormats = ne, G.rt = le, G.te = ve, G.tm = be, G.d = ue, G.n = de, G.getDateTimeFormat = W, G.setDateTimeFormat = Te, G.mergeDateTimeFormat = Ee, G.getNumberFormat = De, G.setNumberFormat = Oe, G.mergeNumberFormat = ke, G[vr] = n, G[fr] = me, G[pr] = ge, G[mr] = he, process.env.NODE_ENV !== "production" && (G[hr] = (e) => {
		O.__v_emitter = e;
	}, G[gr] = () => {
		O.__v_emitter = void 0;
	}), G;
}
var Fr;
function Ir(e, t) {
	if (Fr) {
		let n;
		t && "groupId" in t && (n = t.groupId, delete t.groupId), Fr.addTimelineEvent({
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
var Lr = {
	tag: { type: [String, Object] },
	locale: { type: String },
	scope: {
		type: String,
		validator: (e) => e === "parent" || e === "global",
		default: "parent"
	},
	i18n: { type: Object }
};
function Rr({ slots: e }, n) {
	return n.length === 1 && n[0] === "default" ? (e.default ? e.default() : []).reduce((e, n) => [...e, ...n.type === t ? n.children : [n]], []) : n.reduce((t, n) => {
		let r = e[n];
		return r && (t[n] = r()), t;
	}, F());
}
function zr() {
	return t;
}
l({
	name: "i18n-t",
	props: P({
		keypath: {
			type: String,
			required: !0
		},
		plural: {
			type: [Number, String],
			validator: (e) => N(e) || !isNaN(e)
		}
	}, Lr),
	setup(e, t) {
		let { slots: n, attrs: r } = t, i = e.i18n || Ur({
			useScope: e.scope,
			__useComponent: !0
		});
		return () => {
			let a = Object.keys(n).filter((e) => e[0] !== "_"), o = F();
			e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = B(e.plural) ? +e.plural : e.plural);
			let s = Rr(t, a), c = i[fr](e.keypath, s, o), l = P(F(), r);
			return d(B(e.tag) || H(e.tag) ? e.tag : zr(), l, c);
		};
	}
});
function Br(e) {
	return R(e) && !B(e[0]);
}
function Vr(e, t, n, r) {
	let { slots: i, attrs: a } = t;
	return () => {
		let t = { part: !0 }, o = F();
		e.locale && (t.locale = e.locale), B(e.format) ? t.key = e.format : H(e.format) && (B(e.format.key) && (t.key = e.format.key), o = Object.keys(e.format).reduce((t, r) => n.includes(r) ? P(F(), t, { [r]: e.format[r] }) : t, F()));
		let s = r(e.value, t, o), c = [t.key];
		R(s) ? c = s.map((e, t) => {
			let n = i[e.type], r = n ? n({
				[e.type]: e.value,
				index: t,
				parts: s
			}) : [e.value];
			return Br(r) && (r[0].key = `${e.type}-${t}`), r;
		}) : B(s) && (c = [s]);
		let l = P(F(), a);
		return d(B(e.tag) || H(e.tag) ? e.tag : zr(), l, c);
	};
}
l({
	name: "i18n-n",
	props: P({
		value: {
			type: Number,
			required: !0
		},
		format: { type: [String, Object] }
	}, Lr),
	setup(e, t) {
		let n = e.i18n || Ur({
			useScope: e.scope,
			__useComponent: !0
		});
		return Vr(e, t, Hn, (...e) => n[mr](...e));
	}
});
var Hr = M("global-vue-i18n");
function Ur(e = {}) {
	let t = Dr();
	if (t == null) throw ur(Q.MUST_BE_CALL_SETUP_TOP);
	if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw ur(Q.NOT_INSTALLED);
	let n = Wr(t), r = Kr(n), i = wr(t), a = Gr(e, i);
	if (a === "global") return Tr(r, e, i), r;
	if (a === "parent") {
		let i = qr(n, t, e.__useComponent);
		return i ??= (process.env.NODE_ENV !== "production" && E(xr($.NOT_FOUND_PARENT_SCOPE)), r), i;
	}
	if (a === "isolated") {
		if (n.mode !== "composition") throw ur(Q.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
		let i = n, a = P({}, e);
		a.__root = qr(n, t) || r;
		let o = Pr(a);
		i.__composerExtend && (o[yr] = i.__composerExtend(o));
		let s = null;
		if (process.env.NODE_ENV !== "production") {
			s = be();
			let e = o;
			e[hr] && e[hr](s), s.on("*", Ir);
		}
		return u() && m(() => {
			if (process.env.NODE_ENV !== "production") {
				s && s.off("*", Ir);
				let e = o;
				e[gr] && e[gr]();
			}
			let e = o[yr];
			e && (e(), delete o[yr]);
		}), o;
	}
	let o = n, s = o.__getInstance(t);
	if (s == null) {
		let n = P({}, e);
		"__i18n" in i && (n.__i18n = i.__i18n), r && (n.__root = r), s = Pr(n), o.__composerExtend && (s[yr] = o.__composerExtend(s)), Yr(o, t, s), o.__setInstance(t, s);
	} else process.env.NODE_ENV !== "production" && a === "local" && E(xr($.DUPLICATE_USE_I18N_CALLING));
	return s;
}
function Wr(e) {
	let t = f(e.isCE ? Hr : e.appContext.app.__VUE_I18N_SYMBOL__);
	if (!t) throw ur(e.isCE ? Q.NOT_INSTALLED_WITH_PROVIDE : Q.UNEXPECTED_ERROR);
	return t;
}
function Gr(e, t) {
	return oe(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Kr(e) {
	return e.mode === "composition" ? e.global : e.global.__composer;
}
function qr(e, t, n = !1) {
	let r = null, i = t.root, a = Jr(t, n);
	for (; a != null;) {
		let t = e;
		if (e.mode === "composition" && (r = t.__getInstance(a)), r != null || i === a) break;
		a = a.parent;
	}
	return r;
}
function Jr(e, t = !1) {
	return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Yr(e, t, n) {
	let r = null;
	p(() => {
		if (process.env.NODE_ENV !== "production") {
			t.__VUE_I18N__ = n, r = be();
			let e = n;
			e[hr] && e[hr](r), r.on("*", Ir);
		}
	}, t), h(() => {
		let i = n;
		process.env.NODE_ENV !== "production" && (r && r.off("*", Ir), i[gr] && i[gr](), delete t.__VUE_I18N__), e.__deleteInstance(t);
		let a = i[yr];
		a && (a(), delete i[yr]);
	}, t);
}
if (l({
	name: "i18n-d",
	props: P({
		value: {
			type: [Number, Date],
			required: !0
		},
		format: { type: [String, Object] }
	}, Lr),
	setup(e, t) {
		let n = e.i18n || Ur({
			useScope: e.scope,
			__useComponent: !0
		});
		return Vr(e, t, Rn, (...e) => n[pr](...e));
	}
}), hn(Ft), _n(sn), yn(qt), process.env.NODE_ENV !== "production") {
	let e = ce();
	e.__INTLIFY__ = !0, Lt(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
var Xr = { class: "mt-20 border-t border-border bg-card" }, Zr = { class: "container py-8" }, Qr = { class: "grid gap-8 md:grid-cols-3" }, $r = { class: "mb-2 text-sm font-semibold text-foreground" }, ei = { class: "text-sm text-muted-foreground" }, ti = { class: "mb-2 text-sm font-semibold text-foreground" }, ni = { class: "space-y-1" }, ri = ["href"], ii = { class: "mb-2 text-sm font-semibold text-foreground" }, ai = { class: "text-sm text-muted-foreground" }, oi = { class: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground" }, si = l({
	__name: "Footer",
	setup(e) {
		let { t: n } = Ur(), c = T(), l = r(() => c.params.locale || "en"), u = r(() => [
			{
				label: n("footer.github"),
				href: "https://github.com/intlayer-org/benchmark-i18n",
				isInternal: !1
			},
			{
				label: n("footer.methodology"),
				to: `/${l.value}/about`,
				isInternal: !0
			},
			{
				label: n("footer.contributing"),
				to: `/${l.value}/contact`,
				isInternal: !0
			}
		]);
		return (e, r) => {
			let c = y("router-link");
			return g(), a("footer", Xr, [o("div", Zr, [o("div", Qr, [
				o("div", null, [o("h3", $r, x(S(n)("footer.title")), 1), o("p", ei, x(S(n)("footer.description")), 1)]),
				o("div", null, [o("h3", ti, x(S(n)("footer.resources")), 1), o("ul", ni, [(g(!0), a(t, null, v(u.value, (e) => (g(), a("li", { key: e.label }, [e.isInternal ? (g(), i(c, {
					key: 0,
					to: e.to,
					class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
				}, {
					default: w(() => [s(x(e.label), 1)]),
					_: 2
				}, 1032, ["to"])) : (g(), a("a", {
					key: 1,
					href: e.href,
					target: "_blank",
					rel: "noreferrer",
					class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
				}, x(e.label), 9, ri))]))), 128))])]),
				o("div", null, [o("h3", ii, x(S(n)("footer.contact")), 1), o("p", ai, x(S(n)("shared.contactEmail")), 1)])
			]), o("div", oi, x(S(n)("footer.builtWith")), 1)])]);
		};
	}
});
export { si as default };
