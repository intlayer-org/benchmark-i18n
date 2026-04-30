import * as e from "vue";
import { Fragment as t, Text as n, computed as r, createElementBlock as i, createElementVNode as a, createVNode as o, defineComponent as s, effectScope as c, getCurrentInstance as l, getCurrentScope as u, h as d, inject as f, isRef as p, onMounted as m, onScopeDispose as h, onUnmounted as g, openBlock as _, ref as v, renderList as y, renderSlot as b, shallowRef as x, toDisplayString as S, watch as C } from "vue";
import w from "../../../../locales/fr.json";
import T from "../../../../locales/es.json";
import ee from "../../../../locales/de.json";
import E from "../../../../locales/it.json";
import D from "../../../../locales/pt.json";
import te from "../../../../locales/zh.json";
import ne from "../../../../locales/ja.json";
import re from "../../../../locales/ko.json";
import ie from "../../../../locales/ru.json";
var ae = s({
	__name: "TeamGrid",
	setup(e, { expose: t }) {
		t();
		let n = {
			members: [
				{
					name: "Sarah Chen",
					role: "Founder & Lead Engineer",
					bio: "Former Google engineer with 10 years of experience building internationalization systems at scale."
				},
				{
					name: "Marcus Weber",
					role: "Performance Engineer",
					bio: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel."
				},
				{
					name: "Aisha Patel",
					role: "Developer Advocate",
					bio: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext."
				},
				{
					name: "Tomás Rodríguez",
					role: "Full-Stack Developer",
					bio: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui."
				},
				{
					name: "Yuki Tanaka",
					role: "Data Analyst",
					bio: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT."
				},
				{
					name: "Elena Kowalski",
					role: "Community Manager",
					bio: "Manages community contributions, partnerships, and events. Background in open source governance."
				}
			],
			getInitials: (e) => e.split(" ").map((e) => e[0]).join("")
		};
		return Object.defineProperty(n, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), n;
	}
}), oe = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, se = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, ce = { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground" }, le = { class: "text-base font-semibold text-foreground" }, ue = { class: "mb-2 text-xs font-medium text-primary" }, de = { class: "text-sm text-muted-foreground" };
function fe(e, n, r, o, s, c) {
	return _(), i("div", se, [(_(), i(t, null, y(o.members, (e) => a("div", {
		key: e.name,
		class: "rounded-lg border border-border bg-card p-6 text-center"
	}, [
		a("div", ce, S(o.getInitials(e.name)), 1),
		a("h3", le, S(e.name), 1),
		a("p", ue, S(e.role), 1),
		a("p", de, S(e.bio), 1)
	])), 64))]);
}
var pe = oe(ae, [["render", fe], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-i18n-app/src/components/pages/team/TeamGrid.vue"]]);
function O(e, t) {
	typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
var me = {};
function he(e) {
	me[e] || (me[e] = !0, O(e));
}
var k = typeof window < "u", A, ge;
if (process.env.NODE_ENV !== "production") {
	let e = k && window.performance;
	e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (A = (t) => {
		e.mark(t);
	}, ge = (t, n, r) => {
		e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
	});
}
var _e = /\{([0-9a-zA-Z]+)\}/g;
function ve(e, ...t) {
	return t.length === 1 && B(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(_e, (e, n) => t.hasOwnProperty(n) ? t[n] : "");
}
var j = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), ye = (e, t, n) => be({
	l: e,
	k: t,
	s: n
}), be = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), M = (e) => typeof e == "number" && isFinite(e), xe = (e) => Me(e) === "[object Date]", Se = (e) => Me(e) === "[object RegExp]", Ce = (e) => H(e) && Object.keys(e).length === 0, N = Object.assign, we = Object.create, P = (e = null) => we(e), Te, Ee = () => Te ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : P();
function De(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Oe(e) {
	return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ke(e) {
	return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (e, t, n) => `${t}="${Oe(n)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (e, t, n) => `${t}='${Oe(n)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && O("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach((t) => {
		e = e.replace(t, "$1javascript&#58;");
	}), e;
}
var Ae = Object.prototype.hasOwnProperty;
function F(e, t) {
	return Ae.call(e, t);
}
var I = Array.isArray, L = (e) => typeof e == "function", R = (e) => typeof e == "string", z = (e) => typeof e == "boolean", B = (e) => typeof e == "object" && !!e, je = (e) => B(e) && L(e.then) && L(e.catch), V = Object.prototype.toString, Me = (e) => V.call(e), H = (e) => Me(e) === "[object Object]", Ne = (e) => e == null ? "" : I(e) || H(e) && e.toString === V ? JSON.stringify(e, null, 2) : String(e);
function Pe(e, t = "") {
	return e.reduce((e, n, r) => r === 0 ? e + n : e + t + n, "");
}
var Fe = 2;
function Ie(e, t = 0, n = e.length) {
	let r = e.split(/\r?\n/), i = 0, a = [];
	for (let e = 0; e < r.length; e++) if (i += r[e].length + 1, i >= t) {
		for (let o = e - Fe; o <= e + Fe || n > i; o++) {
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
function Le() {
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
var Re = (e) => !B(e) || I(e);
function ze(e, t) {
	if (Re(e) || Re(t)) throw Error("Invalid value");
	let n = [{
		src: e,
		des: t
	}];
	for (; n.length;) {
		let { src: e, des: t } = n.pop();
		Object.keys(e).forEach((r) => {
			r !== "__proto__" && (B(e[r]) && !B(t[r]) && (t[r] = Array.isArray(e[r]) ? [] : P()), Re(t[r]) || Re(e[r]) ? t[r] = e[r] : n.push({
				src: e[r],
				des: t[r]
			}));
		});
	}
}
function Be(e, t, n) {
	return {
		line: e,
		column: t,
		offset: n
	};
}
function Ve(e, t, n) {
	let r = {
		start: e,
		end: t
	};
	return n != null && (r.source = n), r;
}
var U = {
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
}, He = {
	[U.EXPECTED_TOKEN]: "Expected token: '{0}'",
	[U.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
	[U.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
	[U.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
	[U.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
	[U.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
	[U.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
	[U.EMPTY_PLACEHOLDER]: "Empty placeholder",
	[U.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
	[U.INVALID_LINKED_FORMAT]: "Invalid linked format",
	[U.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
	[U.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
	[U.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
	[U.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
	[U.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
	[U.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Ue(e, t, n = {}) {
	let { domain: r, messages: i, args: a } = n, o = process.env.NODE_ENV === "production" ? e : ve((i || He)[e] || "", ...a || []), s = SyntaxError(String(o));
	return s.code = e, t && (s.location = t), s.domain = r, s;
}
function We(e) {
	throw e;
}
var Ge = /<\/?[\w\s="/.':;#-\/]+>/, Ke = (e) => Ge.test(e), W = " ", qe = "\r", G = "\n", Je = "\u2028", Ye = "\u2029";
function Xe(e) {
	let t = e, n = 0, r = 1, i = 1, a = 0, o = (e) => t[e] === qe && t[e + 1] === G, s = (e) => t[e] === G, c = (e) => t[e] === Ye, l = (e) => t[e] === Je, u = (e) => o(e) || s(e) || c(e) || l(e), d = () => n, f = () => r, p = () => i, m = () => a, h = (e) => o(e) || c(e) || l(e) ? G : t[e], g = () => h(n), _ = () => h(n + a);
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
var Ze = void 0, Qe = "'", $e = "tokenizer";
function et(e, t = {}) {
	let n = t.location !== !1, r = Xe(e), i = () => r.index(), a = () => Be(r.line(), r.column(), r.index()), o = a(), s = i(), c = {
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
		t.column += r, t.offset += r, u && u(Ue(e, n ? Ve(a.startLoc, t) : null, {
			domain: $e,
			args: i
		}));
	}
	function f(e, t, r) {
		e.endLoc = a(), e.currentType = t;
		let i = { type: t };
		return n && (i.loc = Ve(e.startLoc, e.endLoc)), r != null && (i.value = r), i;
	}
	let p = (e) => f(e, 13);
	function m(e, t) {
		return e.currentChar() === t ? (e.next(), t) : (d(U.EXPECTED_TOKEN, a(), 0, t), "");
	}
	function h(e) {
		let t = "";
		for (; e.currentPeek() === W || e.currentPeek() === G;) t += e.currentPeek(), e.peek();
		return t;
	}
	function g(e) {
		let t = h(e);
		return e.skipToPeek(), t;
	}
	function _(e) {
		if (e === Ze) return !1;
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t === 95;
	}
	function v(e) {
		if (e === Ze) return !1;
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
		let r = e.currentPeek() === Qe;
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
			return t === "{" ? _(e.peek()) : t === "@" || t === "|" || t === ":" || t === "." || t === W || !t ? !1 : t === G ? (e.peek(), r()) : E(e, !1);
		}, i = r();
		return e.resetPeek(), i;
	}
	function ee(e) {
		h(e);
		let t = e.currentPeek() === "|";
		return e.resetPeek(), t;
	}
	function E(e, t = !0) {
		let n = (t = !1, r = "") => {
			let i = e.currentPeek();
			return i === "{" || i === "@" || !i ? t : i === "|" ? !(r === W || r === G) : i === W ? (e.peek(), n(!0, W)) : i === G ? (e.peek(), n(!0, G)) : !0;
		}, r = n();
		return t && e.resetPeek(), r;
	}
	function D(e, t) {
		let n = e.currentChar();
		return n === Ze ? Ze : t(n) ? (e.next(), n) : null;
	}
	function te(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36;
	}
	function ne(e) {
		return D(e, te);
	}
	function re(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36 || t === 45;
	}
	function ie(e) {
		return D(e, re);
	}
	function ae(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57;
	}
	function oe(e) {
		return D(e, ae);
	}
	function se(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
	}
	function ce(e) {
		return D(e, se);
	}
	function le(e) {
		let t = "", n = "";
		for (; t = oe(e);) n += t;
		return n;
	}
	function ue(e) {
		let t = "";
		for (;;) {
			let n = e.currentChar();
			if (n === "\\") {
				let r = e.peek();
				r === "{" || r === "}" || r === "@" || r === "|" || r === "\\" ? (t += n + r, e.next(), e.next()) : (e.resetPeek(), t += n, e.next());
			} else if (n === "{" || n === "}" || n === "@" || n === "|" || !n) break;
			else if (n === W || n === G) if (E(e)) t += n, e.next();
			else if (ee(e)) break;
			else t += n, e.next();
			else t += n, e.next();
		}
		return t;
	}
	function de(e) {
		g(e);
		let t = "", n = "";
		for (; t = ie(e);) n += t;
		let r = e.currentChar();
		if (r && r !== "}" && r !== Ze && r !== W && r !== G && r !== "　") {
			let t = A(e);
			return d(U.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n + t), n + t;
		}
		return e.currentChar() === Ze && d(U.UNTERMINATED_CLOSING_BRACE, a(), 0), n;
	}
	function fe(e) {
		g(e);
		let t = "";
		return e.currentChar() === "-" ? (e.next(), t += `-${le(e)}`) : t += le(e), e.currentChar() === Ze && d(U.UNTERMINATED_CLOSING_BRACE, a(), 0), t;
	}
	function pe(e) {
		return e !== Qe && e !== G;
	}
	function O(e) {
		g(e), m(e, "'");
		let t = "", n = "";
		for (; t = D(e, pe);) t === "\\" ? n += me(e) : n += t;
		let r = e.currentChar();
		return r === G || r === Ze ? (d(U.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), r === G && (e.next(), m(e, "'")), n) : (m(e, "'"), n);
	}
	function me(e) {
		let t = e.currentChar();
		switch (t) {
			case "\\":
			case "'": return e.next(), `\\${t}`;
			case "u": return he(e, t, 4);
			case "U": return he(e, t, 6);
			default: return d(U.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, t), "";
		}
	}
	function he(e, t, n) {
		m(e, t);
		let r = "";
		for (let i = 0; i < n; i++) {
			let n = ce(e);
			if (!n) {
				d(U.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${t}${r}${e.currentChar()}`);
				break;
			}
			r += n;
		}
		return `\\${t}${r}`;
	}
	function k(e) {
		return e !== "{" && e !== "}" && e !== W && e !== G;
	}
	function A(e) {
		g(e);
		let t = "", n = "";
		for (; t = D(e, k);) n += t;
		return n;
	}
	function ge(e) {
		let t = "", n = "";
		for (; t = ne(e);) n += t;
		return n;
	}
	function _e(e) {
		let t = (n) => {
			let r = e.currentChar();
			return r === "{" || r === "@" || r === "|" || r === "(" || r === ")" || !r || r === W ? n : (n += r, e.next(), t(n));
		};
		return t("");
	}
	function ve(e) {
		g(e);
		let t = m(e, "|");
		return g(e), t;
	}
	function j(e, t) {
		let n = null;
		switch (e.currentChar()) {
			case "{": return t.braceNest >= 1 && d(U.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), e.next(), n = f(t, 2, "{"), g(e), t.braceNest++, n;
			case "}": return t.braceNest > 0 && t.currentType === 2 && d(U.EMPTY_PLACEHOLDER, a(), 0), e.next(), n = f(t, 3, "}"), t.braceNest--, t.braceNest > 0 && g(e), t.inLinked && t.braceNest === 0 && (t.inLinked = !1), n;
			case "@": return t.braceNest > 0 && d(U.UNTERMINATED_CLOSING_BRACE, a(), 0), n = ye(e, t) || p(t), t.braceNest = 0, n;
			default: {
				let r = !0, i = !0, o = !0;
				if (ee(e)) return t.braceNest > 0 && d(U.UNTERMINATED_CLOSING_BRACE, a(), 0), n = f(t, 1, ve(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (t.braceNest > 0 && (t.currentType === 4 || t.currentType === 5 || t.currentType === 6)) return d(U.UNTERMINATED_CLOSING_BRACE, a(), 0), t.braceNest = 0, be(e, t);
				if (r = y(e, t)) return n = f(t, 4, de(e)), g(e), n;
				if (i = b(e, t)) return n = f(t, 5, fe(e)), g(e), n;
				if (o = x(e, t)) return n = f(t, 6, O(e)), g(e), n;
				if (!r && !i && !o) return n = f(t, 12, A(e)), d(U.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n.value), g(e), n;
				break;
			}
		}
		return n;
	}
	function ye(e, t) {
		let { currentType: n } = t, r = null, i = e.currentChar();
		switch ((n === 7 || n === 8 || n === 11 || n === 9) && (i === G || i === W) && d(U.INVALID_LINKED_FORMAT, a(), 0), i) {
			case "@": return e.next(), r = f(t, 7, "@"), t.inLinked = !0, r;
			case ".": return g(e), e.next(), f(t, 8, ".");
			case ":": return g(e), e.next(), f(t, 9, ":");
			default: return ee(e) ? (r = f(t, 1, ve(e)), t.braceNest = 0, t.inLinked = !1, r) : S(e, t) || w(e, t) ? (g(e), ye(e, t)) : C(e, t) ? (g(e), f(t, 11, ge(e))) : T(e, t) ? (g(e), i === "{" ? j(e, t) || r : f(t, 10, _e(e))) : (n === 7 && d(U.INVALID_LINKED_FORMAT, a(), 0), t.braceNest = 0, t.inLinked = !1, be(e, t));
		}
	}
	function be(e, t) {
		let n = { type: 13 };
		if (t.braceNest > 0) return j(e, t) || p(t);
		if (t.inLinked) return ye(e, t) || p(t);
		switch (e.currentChar()) {
			case "{": return j(e, t) || p(t);
			case "}": return d(U.UNBALANCED_CLOSING_BRACE, a(), 0), e.next(), f(t, 3, "}");
			case "@": return ye(e, t) || p(t);
			default:
				if (ee(e)) return n = f(t, 1, ve(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (E(e)) return f(t, 0, ue(e));
				break;
		}
		return n;
	}
	function M() {
		let { currentType: e, offset: t, startLoc: n, endLoc: o } = c;
		return c.lastType = e, c.lastOffset = t, c.lastStartLoc = n, c.lastEndLoc = o, c.offset = i(), c.startLoc = a(), r.currentChar() === Ze ? f(c, 13) : be(r, c);
	}
	return {
		nextToken: M,
		currentOffset: i,
		currentPosition: a,
		context: l
	};
}
var tt = "parser", nt = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g, rt = /\\([\\@{}|])/g;
function it(e, t) {
	return t;
}
function at(e, t, n) {
	switch (e) {
		case "\\\\": return "\\";
		case "\\'": return "'";
		default: {
			let e = parseInt(t || n, 16);
			return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : "�";
		}
	}
}
function ot(e = {}) {
	let t = e.location !== !1, { onError: n } = e;
	function r(e, r, i, a, ...o) {
		let s = e.currentPosition();
		s.offset += a, s.column += a, n && n(Ue(r, t ? Ve(i, s) : null, {
			domain: tt,
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
		return r.value = t.replace(rt, it), a(r, e.currentOffset(), e.currentPosition()), r;
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
		return o.value = t.replace(nt, at), e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
	}
	function u(e) {
		let t = e.nextToken(), n = e.context(), { lastOffset: o, lastStartLoc: s } = n, c = i(8, o, s);
		return t.type === 11 ? (t.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, n.lastStartLoc, 0, K(t)), c.value = t.value || "", a(c, e.currentOffset(), e.currentPosition()), { node: c }) : (r(e, U.UNEXPECTED_EMPTY_LINKED_MODIFIER, n.lastStartLoc, 0), c.value = "", a(c, o, s), {
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
		switch (o.type !== 9 && r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(o)), o = e.nextToken(), o.type === 2 && (o = e.nextToken()), o.type) {
			case 10:
				o.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(o)), n.key = d(e, o.value || "");
				break;
			case 4:
				o.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(o)), n.key = c(e, o.value || "");
				break;
			case 5:
				o.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(o)), n.key = s(e, o.value || "");
				break;
			case 6:
				o.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(o)), n.key = l(e, o.value || "");
				break;
			default: {
				r(e, U.UNEXPECTED_EMPTY_LINKED_KEY, t.lastStartLoc, 0);
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
					i.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(i)), n.items.push(o(e, i.value || ""));
					break;
				case 5:
					i.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(i)), n.items.push(s(e, i.value || ""));
					break;
				case 4:
					i.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(i)), n.items.push(c(e, i.value || ""));
					break;
				case 6:
					i.value ?? r(e, U.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, K(i)), n.items.push(l(e, i.value || ""));
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
		return c && r(e, U.MUST_HAVE_MESSAGES_IN_PLURAL, n, 0), a(l, e.currentOffset(), e.currentPosition()), l;
	}
	function h(e) {
		let t = e.context(), { offset: n, startLoc: r } = t, i = p(e);
		return t.currentType === 13 ? i : m(e, n, r, i);
	}
	function g(n) {
		let o = et(n, N({}, e)), s = o.context(), c = i(0, s.offset, s.startLoc);
		return t && c.loc && (c.loc.source = n), c.body = h(o), e.onCacheKey && (c.cacheKey = e.onCacheKey(n)), s.currentType !== 13 && r(o, U.UNEXPECTED_LEXICAL_ANALYSIS, s.lastStartLoc, 0, n[s.offset] || ""), a(c, o.currentOffset(), o.currentPosition()), c;
	}
	return { parse: g };
}
function K(e) {
	if (e.type === 13) return "EOF";
	let t = (e.value || "").replace(/\r?\n/gu, "\\n");
	return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function st(e, t = {}) {
	let n = {
		ast: e,
		helpers: /* @__PURE__ */ new Set()
	};
	return {
		context: () => n,
		helper: (e) => (n.helpers.add(e), e)
	};
}
function ct(e, t) {
	for (let n = 0; n < e.length; n++) lt(e[n], t);
}
function lt(e, t) {
	switch (e.type) {
		case 1:
			ct(e.cases, t), t.helper("plural");
			break;
		case 2:
			ct(e.items, t);
			break;
		case 6:
			lt(e.key, t), t.helper("linked"), t.helper("type");
			break;
		case 5:
			t.helper("interpolate"), t.helper("list");
			break;
		case 4:
			t.helper("interpolate"), t.helper("named");
			break;
	}
}
function ut(e, t = {}) {
	let n = st(e);
	n.helper("normalize"), e.body && lt(e.body, n);
	let r = n.context();
	e.helpers = Array.from(r.helpers);
}
function dt(e) {
	let t = e.body;
	return t.type === 2 ? ft(t) : t.cases.forEach((e) => ft(e)), e;
}
function ft(e) {
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
			e.static = Pe(t);
			for (let t = 0; t < e.items.length; t++) {
				let n = e.items[t];
				(n.type === 3 || n.type === 9) && delete n.value;
			}
		}
	}
}
var pt = "minifier";
function mt(e) {
	switch (e.t = e.type, e.type) {
		case 0: {
			let t = e;
			mt(t.body), t.b = t.body, delete t.body;
			break;
		}
		case 1: {
			let t = e, n = t.cases;
			for (let e = 0; e < n.length; e++) mt(n[e]);
			t.c = n, delete t.cases;
			break;
		}
		case 2: {
			let t = e, n = t.items;
			for (let e = 0; e < n.length; e++) mt(n[e]);
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
			mt(t.key), t.k = t.key, delete t.key, t.modifier && (mt(t.modifier), t.m = t.modifier, delete t.modifier);
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
		default: if (process.env.NODE_ENV !== "production") throw Ue(U.UNHANDLED_MINIFIER_NODE_TYPE, null, {
			domain: pt,
			args: [e.type]
		});
	}
	delete e.type;
}
var ht = "parser";
function gt(e, t) {
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
function _t(e, t) {
	let { helper: n } = e;
	e.push(`${n("linked")}(`), xt(e, t.key), t.modifier ? (e.push(", "), xt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function vt(e, t) {
	let { helper: n, needIndent: r } = e;
	e.push(`${n("normalize")}([`), e.indent(r());
	let i = t.items.length;
	for (let n = 0; n < i && (xt(e, t.items[n]), n !== i - 1); n++) e.push(", ");
	e.deindent(r()), e.push("])");
}
function yt(e, t) {
	let { helper: n, needIndent: r } = e;
	if (t.cases.length > 1) {
		e.push(`${n("plural")}([`), e.indent(r());
		let i = t.cases.length;
		for (let n = 0; n < i && (xt(e, t.cases[n]), n !== i - 1); n++) e.push(", ");
		e.deindent(r()), e.push("])");
	}
}
function bt(e, t) {
	t.body ? xt(e, t.body) : e.push("null");
}
function xt(e, t) {
	let { helper: n } = e;
	switch (t.type) {
		case 0:
			bt(e, t);
			break;
		case 1:
			yt(e, t);
			break;
		case 2:
			vt(e, t);
			break;
		case 6:
			_t(e, t);
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
		default: if (process.env.NODE_ENV !== "production") throw Ue(U.UNHANDLED_CODEGEN_NODE_TYPE, null, {
			domain: ht,
			args: [t.type]
		});
	}
}
var St = (e, t = {}) => {
	let n = R(t.mode) ? t.mode : "normal", r = R(t.filename) ? t.filename : "message.intl", i = !!t.sourceMap, a = t.breakLineCode == null ? n === "arrow" ? ";" : "\n" : t.breakLineCode, o = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], c = gt(e, {
		mode: n,
		filename: r,
		sourceMap: i,
		breakLineCode: a,
		needIndent: o
	});
	c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(o), s.length > 0 && (c.push(`const { ${Pe(s.map((e) => `${e}: _${e}`), ", ")} } = ctx`), c.newline()), c.push("return "), xt(c, e), c.deindent(o), c.push("}"), delete e.helpers;
	let { code: l, map: u } = c.context();
	return {
		ast: e,
		code: l,
		map: u ? u.toJSON() : void 0
	};
};
function Ct(e, t = {}) {
	let n = N({}, t), r = !!n.jit, i = !!n.minify, a = n.optimize == null ? !0 : n.optimize, o = ot(n).parse(e);
	return r ? (a && dt(o), i && mt(o), {
		ast: o,
		code: ""
	}) : (ut(o, n), St(o, n));
}
function q(e) {
	return B(e) && Nt(e) === 0 && (F(e, "b") || F(e, "body"));
}
var wt = ["b", "body"];
function Tt(e) {
	return Bt(e, wt);
}
var Et = ["c", "cases"];
function Dt(e) {
	return Bt(e, Et, []);
}
var Ot = ["s", "static"];
function kt(e) {
	return Bt(e, Ot);
}
var At = ["i", "items"];
function jt(e) {
	return Bt(e, At, []);
}
var Mt = ["t", "type"];
function Nt(e) {
	return Bt(e, Mt);
}
var Pt = ["v", "value"];
function Ft(e, t) {
	let n = Bt(e, Pt);
	if (n != null) return n;
	throw Ht(t);
}
var It = ["m", "modifier"];
function Lt(e) {
	return Bt(e, It);
}
var Rt = ["k", "key"];
function zt(e) {
	let t = Bt(e, Rt);
	if (t) return t;
	throw Ht(6);
}
function Bt(e, t, n) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (F(e, r) && e[r] != null) return e[r];
	}
	return n;
}
var Vt = [
	...wt,
	...Et,
	...Ot,
	...At,
	...Rt,
	...It,
	...Pt,
	...Mt
];
function Ht(e) {
	return /* @__PURE__ */ Error(`unhandled node type: ${e}`);
}
function Ut(e) {
	return (t) => Wt(t, e);
}
function Wt(e, t) {
	let n = Tt(t);
	if (n == null) throw Ht(0);
	if (Nt(n) === 1) {
		let t = Dt(n);
		return e.plural(t.reduce((t, n) => [...t, Gt(e, n)], []));
	} else return Gt(e, n);
}
function Gt(e, t) {
	let n = kt(t);
	if (n != null) return e.type === "text" ? n : e.normalize([n]);
	{
		let n = jt(t).reduce((t, n) => [...t, Kt(e, n)], []);
		return e.normalize(n);
	}
}
function Kt(e, t) {
	let n = Nt(t);
	switch (n) {
		case 3: return Ft(t, n);
		case 9: return Ft(t, n);
		case 4: {
			let r = t;
			if (F(r, "k") && r.k) return e.interpolate(e.named(r.k));
			if (F(r, "key") && r.key) return e.interpolate(e.named(r.key));
			throw Ht(n);
		}
		case 5: {
			let r = t;
			if (F(r, "i") && M(r.i)) return e.interpolate(e.list(r.i));
			if (F(r, "index") && M(r.index)) return e.interpolate(e.list(r.index));
			throw Ht(n);
		}
		case 6: {
			let n = t, r = Lt(n), i = zt(n);
			return e.linked(Kt(e, i), r ? Kt(e, r) : void 0, e.type);
		}
		case 7: return Ft(t, n);
		case 8: return Ft(t, n);
		default: throw Error(`unhandled node on format message part: ${n}`);
	}
}
var qt = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Jt(e, t) {
	t && Ke(e) && O(ve(qt, { source: e }));
}
var Yt = (e) => e, Xt = P();
function Zt(e, t = {}) {
	let n = !1, r = t.onError || We;
	return t.onError = (e) => {
		n = !0, r(e);
	}, {
		...Ct(e, t),
		detectError: n
	};
}
function Qt(e, t) {
	if (R(e)) {
		let n = z(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
		process.env.NODE_ENV !== "production" && Jt(e, n);
		let r = (t.onCacheKey || Yt)(e), i = Xt[r];
		if (i) return i;
		let { ast: a, detectError: o } = Zt(e, {
			...t,
			location: process.env.NODE_ENV !== "production",
			jit: !0
		}), s = Ut(a);
		return o ? s : Xt[r] = s;
	} else {
		if (process.env.NODE_ENV !== "production" && !q(e)) return O(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
		let n = e.cacheKey;
		return n ? Xt[n] || (Xt[n] = Ut(e)) : Ut(e);
	}
}
var $t = null;
function en(e) {
	$t = e;
}
function tn(e, t, n) {
	$t && $t.emit("i18n:init", {
		timestamp: Date.now(),
		i18n: e,
		version: t,
		meta: n
	});
}
var nn = rn("function:translate");
function rn(e) {
	return (t) => $t && $t.emit(e, t);
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
function an(e) {
	return Ue(e, null, process.env.NODE_ENV === "production" ? void 0 : { messages: on });
}
var on = {
	[J.INVALID_ARGUMENT]: "Invalid arguments",
	[J.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
	[J.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
	[J.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
	[J.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
	[J.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
	[J.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function sn(e, t) {
	return t.locale == null ? ln(e.locale) : ln(t.locale);
}
var cn;
function ln(e) {
	if (R(e)) return e;
	if (L(e)) {
		if (e.resolvedOnce && cn != null) return cn;
		if (e.constructor.name === "Function") {
			let t = e();
			if (je(t)) throw an(J.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
			return cn = t;
		} else throw an(J.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	} else throw an(J.NOT_SUPPORT_LOCALE_TYPE);
}
function un(e, t, n) {
	return [...new Set([n, ...I(t) ? t : B(t) ? Object.keys(t) : R(t) ? [t] : [n]])];
}
function dn(e, t, n) {
	let r = R(n) ? n : On, i = e;
	i.__localeChainCache ||= /* @__PURE__ */ new Map();
	let a = i.__localeChainCache.get(r);
	if (!a) {
		a = [];
		let e = [n];
		for (; I(e);) e = fn(a, e, t);
		let o = I(t) || !H(t) ? t : t.default ? t.default : null;
		e = R(o) ? [o] : o, I(e) && fn(a, e, !1), i.__localeChainCache.set(r, a);
	}
	return a;
}
function fn(e, t, n) {
	let r = !0;
	for (let i = 0; i < t.length && z(r); i++) {
		let a = t[i];
		R(a) && (r = pn(e, t[i], n));
	}
	return r;
}
function pn(e, t, n) {
	let r, i = t.split("-");
	do
		r = mn(e, i.join("-"), n), i.splice(-1, 1);
	while (i.length && r === !0);
	return r;
}
function mn(e, t, n) {
	let r = !1;
	if (!e.includes(t) && (r = !0, t)) {
		r = t[t.length - 1] !== "!";
		let i = t.replace(/!/g, "");
		e.push(i), (I(n) || H(n)) && n[i] && (r = n[i]);
	}
	return r;
}
var hn = [];
hn[0] = {
	w: [0],
	i: [3, 0],
	"[": [4],
	o: [7]
}, hn[1] = {
	w: [1],
	".": [2],
	"[": [4],
	o: [7]
}, hn[2] = {
	w: [2],
	i: [3, 0],
	0: [3, 0]
}, hn[3] = {
	i: [3, 0],
	0: [3, 0],
	w: [1, 1],
	".": [2, 1],
	"[": [4, 1],
	o: [7, 1]
}, hn[4] = {
	"'": [5, 0],
	"\"": [6, 0],
	"[": [4, 2],
	"]": [1, 3],
	o: 8,
	l: [4, 0]
}, hn[5] = {
	"'": [4, 0],
	o: 8,
	l: [5, 0]
}, hn[6] = {
	"\"": [4, 0],
	o: 8,
	l: [6, 0]
};
var gn = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function _n(e) {
	return gn.test(e);
}
function vn(e) {
	let t = e.charCodeAt(0);
	return t === e.charCodeAt(e.length - 1) && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function yn(e) {
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
function bn(e) {
	let t = e.trim();
	return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : _n(t) ? vn(t) : "*" + t;
}
function xn(e) {
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
			if (i = 0, o === void 0 || (o = bn(o), o === !1)) return !1;
			f[1]();
		}
	};
	function p() {
		let t = e[n + 1];
		if (r === 5 && t === "'" || r === 6 && t === "\"") return n++, s = "\\" + t, f[0](), !0;
	}
	for (; r !== null;) if (n++, a = e[n], !(a === "\\" && p())) {
		if (c = yn(a), d = hn[r], l = d[c] || d.l || 8, l === 8 || (r = l[0], l[1] !== void 0 && (u = f[l[1]], u && (s = a, u() === !1)))) return;
		if (r === 7) return t;
	}
}
var Sn = /* @__PURE__ */ new Map();
function Cn(e, t) {
	return B(e) ? e[t] : null;
}
function wn(e, t) {
	if (!B(e)) return null;
	let n = Sn.get(t);
	if (n || (n = xn(t), n && Sn.set(t, n)), !n) return null;
	let r = n.length, i = e, a = 0;
	for (; a < r;) {
		let e = n[a];
		if (Vt.includes(e) && q(i) || !B(i) || !F(i, e)) return null;
		let t = i[e];
		if (t === void 0 || L(i)) return null;
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
}, Tn = {
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
function En(e, ...t) {
	return ve(Tn[e], ...t);
}
var Dn = "11.4.0", On = "en-US", kn = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function An() {
	return {
		upper: (e, t) => t === "text" && R(e) ? e.toUpperCase() : t === "vnode" && B(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
		lower: (e, t) => t === "text" && R(e) ? e.toLowerCase() : t === "vnode" && B(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
		capitalize: (e, t) => t === "text" && R(e) ? kn(e) : t === "vnode" && B(e) && "__v_isVNode" in e ? kn(e.children) : e
	};
}
var jn;
function Mn(e) {
	jn = e;
}
var Nn;
function Pn(e) {
	Nn = e;
}
var Fn;
function In(e) {
	Fn = e;
}
var Ln = null, Rn = (e) => {
	Ln = e;
}, zn = () => Ln, Bn = null, Vn = (e) => {
	Bn = e;
}, Hn = () => Bn, Un = 0;
function Wn(e = {}) {
	let t = L(e.onWarn) ? e.onWarn : O, n = R(e.version) ? e.version : Dn, r = R(e.locale) || L(e.locale) ? e.locale : On, i = L(r) ? On : r, a = I(e.fallbackLocale) || H(e.fallbackLocale) || R(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i, o = H(e.messages) ? e.messages : Gn(i), s = H(e.datetimeFormats) ? e.datetimeFormats : Gn(i), c = H(e.numberFormats) ? e.numberFormats : Gn(i), l = N(P(), e.modifiers, An()), u = e.pluralRules || P(), d = L(e.missing) ? e.missing : null, f = z(e.missingWarn) || Se(e.missingWarn) ? e.missingWarn : !0, p = z(e.fallbackWarn) || Se(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, h = !!e.unresolving, g = L(e.postTranslation) ? e.postTranslation : null, _ = H(e.processor) ? e.processor : null, v = z(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, b = L(e.messageCompiler) ? e.messageCompiler : jn;
	process.env.NODE_ENV !== "production" && L(e.messageCompiler) && he(En(Y.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
	let x = L(e.messageResolver) ? e.messageResolver : Nn || Cn, S = L(e.localeFallbacker) ? e.localeFallbacker : Fn || un, C = B(e.fallbackContext) ? e.fallbackContext : void 0, w = e, T = B(w.__datetimeFormatters) ? w.__datetimeFormatters : /* @__PURE__ */ new Map(), ee = B(w.__numberFormatters) ? w.__numberFormatters : /* @__PURE__ */ new Map(), E = B(w.__meta) ? w.__meta : {};
	Un++;
	let D = {
		version: n,
		cid: Un,
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
		__meta: E
	};
	return D.datetimeFormats = s, D.numberFormats = c, D.__datetimeFormatters = T, D.__numberFormatters = ee, process.env.NODE_ENV !== "production" && (D.__v_emitter = w.__v_emitter == null ? void 0 : w.__v_emitter), process.env.NODE_ENV !== "production" && tn(D, n, E), D;
}
var Gn = (e) => ({ [e]: P() });
function Kn(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function qn(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function Jn(e, t, n, r, i) {
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
		return R(r) ? r : t;
	} else return process.env.NODE_ENV !== "production" && qn(r, t) && o(En(Y.NOT_FOUND_KEY, {
		key: t,
		locale: n
	})), t;
}
function Yn(e, t, n) {
	let r = e;
	r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Xn(e, t) {
	return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Zn(e, t) {
	let n = t.indexOf(e);
	if (n === -1) return !1;
	for (let r = n + 1; r < t.length; r++) if (Xn(e, t[r])) return !0;
	return !1;
}
var Qn = typeof Intl < "u", $n = {
	dateTimeFormat: Qn && Intl.DateTimeFormat !== void 0,
	numberFormat: Qn && Intl.NumberFormat !== void 0
};
function er(e, ...t) {
	let { datetimeFormats: n, unresolving: r, fallbackLocale: i, onWarn: a, localeFallbacker: o } = e, { __datetimeFormatters: s } = e;
	if (process.env.NODE_ENV !== "production" && !$n.dateTimeFormat) return a(En(Y.CANNOT_FORMAT_DATE)), "";
	if (!R(t[0]) && !xe(t[0]) && !M(t[0])) return process.env.NODE_ENV !== "production" && a(En(Y.INVALID_DATE_ARGUMENT, { value: String(t[0]) })), "";
	let [c, l, u, d] = nr(...t), f = z(u.missingWarn) ? u.missingWarn : e.missingWarn, p = z(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = sn(e, u), g = o(e, i, h);
	if (!R(c) || c === "") return new Intl.DateTimeFormat(h.replace(/!/g, ""), d).format(l);
	let _ = {}, v, y = null, b = h, x = null, S = "datetime format";
	for (let t = 0; t < g.length; t++) {
		if (v = x = g[t], process.env.NODE_ENV !== "production" && h !== v && Kn(p, c) && a(En(Y.FALLBACK_TO_DATE_FORMAT, {
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
		if (_ = n[v] || {}, y = _[c], H(y)) break;
		Jn(e, c, v, f, S), b = x;
	}
	if (!H(y) || !R(v)) return r ? -1 : c;
	let C = `${v}__${c}`;
	Ce(d) || (C = `${C}__${JSON.stringify(d)}`);
	let w = s.get(C);
	return w || (w = new Intl.DateTimeFormat(v, N({}, y, d)), s.set(C, w)), m ? w.formatToParts(l) : w.format(l);
}
var tr = [
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
function nr(...e) {
	let [t, n, r, i] = e, a = P(), o = P(), s;
	if (R(t)) {
		let e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
		if (!e) throw an(J.INVALID_ISO_DATE_ARGUMENT);
		let n = e[3] ? e[3].trim().startsWith("T") ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}` : e[1].trim();
		s = new Date(n);
		try {
			s.toISOString();
		} catch {
			throw an(J.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (xe(t)) {
		if (isNaN(t.getTime())) throw an(J.INVALID_DATE_ARGUMENT);
		s = t;
	} else if (M(t)) s = t;
	else throw an(J.INVALID_ARGUMENT);
	return R(n) ? a.key = n : H(n) && Object.keys(n).forEach((e) => {
		tr.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), R(r) ? a.locale = r : H(r) && (o = r), H(i) && (o = i), [
		a.key || "",
		s,
		a,
		o
	];
}
function rr(e, t, n) {
	let r = e;
	for (let e in n) {
		let n = `${t}__${e}`;
		r.__datetimeFormatters.has(n) && r.__datetimeFormatters.delete(n);
	}
}
function ir(e, ...t) {
	let { numberFormats: n, unresolving: r, fallbackLocale: i, onWarn: a, localeFallbacker: o } = e, { __numberFormatters: s } = e;
	if (process.env.NODE_ENV !== "production" && !$n.numberFormat) return a(En(Y.CANNOT_FORMAT_NUMBER)), "";
	if (!M(t[0])) return process.env.NODE_ENV !== "production" && a(En(Y.INVALID_NUMBER_ARGUMENT, { value: String(t[0]) })), "";
	let [c, l, u, d] = or(...t), f = z(u.missingWarn) ? u.missingWarn : e.missingWarn, p = z(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = sn(e, u), g = o(e, i, h);
	if (!R(c) || c === "") return new Intl.NumberFormat(h.replace(/!/g, ""), d).format(l);
	let _ = {}, v, y = null, b = h, x = null, S = "number format";
	for (let t = 0; t < g.length; t++) {
		if (v = x = g[t], process.env.NODE_ENV !== "production" && h !== v && Kn(p, c) && a(En(Y.FALLBACK_TO_NUMBER_FORMAT, {
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
		if (_ = n[v] || {}, y = _[c], H(y)) break;
		Jn(e, c, v, f, S), b = x;
	}
	if (!H(y) || !R(v)) return r ? -1 : c;
	let C = `${v}__${c}`;
	Ce(d) || (C = `${C}__${JSON.stringify(d)}`);
	let w = s.get(C);
	return w || (w = new Intl.NumberFormat(v, N({}, y, d)), s.set(C, w)), m ? w.formatToParts(l) : w.format(l);
}
var ar = [
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
function or(...e) {
	let [t, n, r, i] = e, a = P(), o = P();
	if (!M(t)) throw an(J.INVALID_ARGUMENT);
	let s = t;
	return R(n) ? a.key = n : H(n) && Object.keys(n).forEach((e) => {
		ar.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), R(r) ? a.locale = r : H(r) && (o = r), H(i) && (o = i), [
		a.key || "",
		s,
		a,
		o
	];
}
function sr(e, t, n) {
	let r = e;
	for (let e in n) {
		let n = `${t}__${e}`;
		r.__numberFormatters.has(n) && r.__numberFormatters.delete(n);
	}
}
var cr = (e) => e, lr = (e) => "", ur = "text", dr = (e) => e.length === 0 ? "" : Pe(e), fr = Ne;
function pr(e, t) {
	return e = Math.abs(e), t === 2 ? e === 1 ? 0 : 1 : Math.min(e, 2);
}
function mr(e) {
	let t = M(e.pluralIndex) ? e.pluralIndex : -1;
	return M(e.named?.count) ? e.named.count : M(e.named?.n) ? e.named.n : t;
}
function hr(e = {}) {
	let t = e.locale, n = mr(e), r = R(t) && L(e.pluralRules?.[t]) ? e.pluralRules[t] : pr, i = r === pr ? void 0 : pr, a = (e) => e[r(n, e.length, i)], o = e.list || [], s = (e) => o[e], c = e.named || P();
	M(e.pluralIndex) && (c.count ||= e.pluralIndex, c.n ||= e.pluralIndex);
	let l = (e) => c[e];
	function u(t, n) {
		return (L(e.messages) ? e.messages(t, !!n) : B(e.messages) ? e.messages[t] : !1) || (e.parent ? e.parent.message(t) : lr);
	}
	let d = (t) => e.modifiers ? e.modifiers[t] : cr, f = L(e.processor?.normalize) ? e.processor.normalize : dr, p = L(e.processor?.interpolate) ? e.processor.interpolate : fr, m = {
		list: s,
		named: l,
		plural: a,
		linked: (e, ...t) => {
			let [n, r] = t, i = "text", a = "";
			t.length === 1 ? B(n) ? (a = n.modifier || a, i = n.type || i) : R(n) && (a = n || a) : t.length === 2 && (R(n) && (a = n || a), R(r) && (i = r || i));
			let o = u(e, !0)(m), s = o === "" || o === void 0 ? e : o, c = i === "vnode" && I(s) && a ? s[0] : s;
			return a ? d(a)(c, i) : c;
		},
		message: u,
		type: R(e.processor?.type) ? e.processor.type : ur,
		interpolate: p,
		normalize: f,
		values: N(P(), o, c)
	};
	return m;
}
var gr = () => "", X = (e) => L(e);
function _r(e, ...t) {
	let { fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: a, fallbackLocale: o, messages: s } = e, [c, l] = Sr(...t), u = z(l.missingWarn) ? l.missingWarn : e.missingWarn, d = z(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, f = z(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, p = !!l.resolvedMessage, m = R(l.default) || z(l.default) ? z(l.default) ? a ? c : () => c : l.default : n ? a ? c : () => c : null, h = n || m != null && (R(m) || L(m)), g = sn(e, l);
	f && vr(l);
	let [_, v, y] = p ? [
		c,
		g,
		s[g] || P()
	] : yr(e, c, g, o, d, u), b = _, x = c;
	if (!p && !(R(b) || q(b) || X(b)) && h && (b = m, x = b), !p && (!(R(b) || q(b) || X(b)) || !R(v))) return i ? -1 : c;
	if (process.env.NODE_ENV !== "production" && R(b) && e.messageCompiler == null) return O(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
	let S = !1, C = X(b) ? b : br(e, c, v, b, x, () => {
		S = !0;
	});
	if (S) return b;
	let w = xr(e, C, hr(Tr(e, v, y, l))), T = r ? r(w, c) : w;
	if (f && R(T) && (T = ke(T)), process.env.NODE_ENV !== "production") {
		let t = {
			timestamp: Date.now(),
			key: R(c) ? c : X(b) ? b.key : "",
			locale: v || (X(b) ? b.locale : ""),
			format: R(b) ? b : X(b) ? b.source : "",
			message: T
		};
		t.meta = N({}, e.__meta, zn() || {}), nn(t);
	}
	return T;
}
function vr(e) {
	I(e.list) ? e.list = e.list.map((e) => R(e) ? De(e) : e) : B(e.named) && Object.keys(e.named).forEach((t) => {
		R(e.named[t]) && (e.named[t] = De(e.named[t]));
	});
}
function yr(e, t, n, r, i, a) {
	let { messages: o, onWarn: s, messageResolver: c, localeFallbacker: l } = e, u = l(e, r, n), d = P(), f, p = null, m = n, h = null, g = "translate";
	for (let r = 0; r < u.length; r++) {
		f = h = u[r], process.env.NODE_ENV !== "production" && n !== f && !Xn(n, f) && Kn(i, t) && s(En(Y.FALLBACK_TO_TRANSLATE, {
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
		}), d = o[f] || P();
		let _ = null, v, y;
		if (process.env.NODE_ENV !== "production" && k && l && (_ = window.performance.now(), v = "intlify-message-resolve-start", y = "intlify-message-resolve-end", A && A(v)), (p = c(d, t)) === null && (p = d[t]), process.env.NODE_ENV !== "production" && k && l) {
			let e = window.performance.now();
			l && _ && p && l.emit("message-resolve", {
				type: "message-resolve",
				key: t,
				message: p,
				time: e - _,
				groupId: `${g}:${t}`
			}), v && y && A && ge && (A(y), ge("intlify message resolve", v, y));
		}
		if (R(p) || q(p) || X(p)) break;
		if (!Zn(f, u)) {
			let n = Jn(e, t, f, a, g);
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
function br(e, t, n, r, i, a) {
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
	process.env.NODE_ENV !== "production" && k && c && (l = window.performance.now(), u = "intlify-message-compilation-start", d = "intlify-message-compilation-end", A && A(u));
	let f = o(r, Cr(e, n, i, r, s, a));
	if (process.env.NODE_ENV !== "production" && k && c) {
		let e = window.performance.now();
		c && l && c.emit("message-compilation", {
			type: "message-compilation",
			message: r,
			time: e - l,
			groupId: `translate:${t}`
		}), u && d && A && ge && (A(d), ge("intlify message compilation", u, d));
	}
	return f.locale = n, f.key = t, f.source = r, f;
}
function xr(e, t, n) {
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
		}), a && o && A && ge && (A(o), ge("intlify message evaluation", a, o));
	}
	return s;
}
function Sr(...e) {
	let [t, n, r] = e, i = P();
	if (!R(t) && !M(t) && !X(t) && !q(t)) throw an(J.INVALID_ARGUMENT);
	let a = M(t) ? String(t) : (X(t), t);
	return M(n) ? i.plural = n : R(n) ? i.default = n : H(n) && !Ce(n) ? i.named = n : I(n) && (i.list = n), M(r) ? i.plural = r : R(r) ? i.default = r : H(r) && N(i, r), [a, i];
}
function Cr(e, t, n, r, i, a) {
	return {
		locale: t,
		key: n,
		warnHtmlMessage: i,
		onError: (t) => {
			if (a && a(t), process.env.NODE_ENV !== "production") {
				let i = wr(r), a = t.location && i && Ie(i, t.location.start.offset, t.location.end.offset), o = e.__v_emitter;
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
		onCacheKey: (e) => ye(t, n, e)
	};
}
function wr(e) {
	if (R(e)) return e;
	if (e.loc && e.loc.source) return e.loc.source;
}
function Tr(e, t, n, r) {
	let { modifiers: i, pluralRules: a, messageResolver: o, fallbackLocale: s, fallbackWarn: c, missingWarn: l, fallbackContext: u } = e, d = {
		locale: t,
		modifiers: i,
		pluralRules: a,
		messages: (r, i) => {
			let a = o(n, r);
			if (a == null && (u || i)) {
				let [n, , i] = yr(u || e, r, t, s, c, l);
				a = n ?? o(i, r);
			}
			if (R(a) || q(a)) {
				let n = !1, i = br(e, r, t, a, r, () => {
					n = !0;
				});
				return n ? gr : i;
			} else if (X(a)) return a;
			else return gr;
		}
	};
	return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), M(r.plural) && (d.pluralIndex = r.plural), d;
}
function Er() {
	return Dr().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Dr() {
	return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
var Or = typeof Proxy == "function", kr = "devtools-plugin:setup", Ar = "plugin:settings:set", jr, Mr;
function Nr() {
	return jr === void 0 && (typeof window < "u" && window.performance ? (jr = !0, Mr = window.performance) : typeof globalThis < "u" && globalThis.perf_hooks?.performance ? (jr = !0, Mr = globalThis.perf_hooks.performance) : jr = !1), jr;
}
function Pr() {
	return Nr() ? Mr.now() : Date.now();
}
var Fr = class {
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
				return Pr();
			}
		}, t && t.on(Ar, (e, t) => {
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
function Ir(e, t) {
	let n = e, r = Dr(), i = Er(), a = Or && n.enableEarlyProxy;
	if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a)) i.emit(kr, e, t);
	else {
		let e = a ? new Fr(n, i) : null;
		(r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
			pluginDescriptor: n,
			setupFn: t,
			proxy: e
		}), e && t(e.proxiedTarget);
	}
}
var Lr = "11.4.0", Z = {
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
	return Ue(e, null, process.env.NODE_ENV === "production" ? void 0 : {
		messages: Rr,
		args: t
	});
}
var Rr = {
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
}, zr = j("__translateVNode"), Br = j("__datetimeParts"), Vr = j("__numberParts"), Hr = j("__enableEmitter"), Ur = j("__disableEmitter"), Wr = j("__setPluralRules");
j("__intlifyMeta");
var Gr = j("__injectWithOption"), Kr = j("__dispose"), $ = {
	FALLBACK_TO_ROOT: 10,
	NOT_FOUND_PARENT_SCOPE: 11,
	IGNORE_OBJ_FLATTEN: 12,
	DEPRECATE_LEGACY_MODE: 13,
	DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 14,
	DUPLICATE_USE_I18N_CALLING: 15
}, qr = {
	[$.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
	[$.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
	[$.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
	[$.DEPRECATE_LEGACY_MODE]: "Legacy API mode has been deprecated in v11. Use Composition API mode instead.\nAbout how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html",
	[$.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
	[$.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function Jr(e, ...t) {
	return ve(qr[e], ...t);
}
function Yr(e) {
	if (!B(e) || q(e)) return e;
	for (let t in e) if (F(e, t)) if (!t.includes(".")) B(e[t]) && Yr(e[t]);
	else {
		let n = t.split("."), r = n.length - 1, i = e, a = !1;
		for (let e = 0; e < r; e++) {
			if (n[e] === "__proto__") throw Error(`unsafe key: ${n[e]}`);
			if (n[e] in i || (i[n[e]] = P()), !B(i[n[e]])) {
				process.env.NODE_ENV !== "production" && O(Jr($.IGNORE_OBJ_FLATTEN, { key: n[e] })), a = !0;
				break;
			}
			i = i[n[e]];
		}
		if (a || (q(i) ? Vt.includes(n[r]) || delete e[t] : (i[n[r]] = e[t], delete e[t])), !q(i)) {
			let e = i[n[r]];
			B(e) && Yr(e);
		}
	}
	return e;
}
function Xr(e, t) {
	let { messages: n, __i18n: r, messageResolver: i, flatJson: a } = t, o = H(n) ? n : I(r) ? P() : { [e]: P() };
	if (I(r) && r.forEach((e) => {
		if ("locale" in e && "resource" in e) {
			let { locale: t, resource: n } = e;
			t ? (o[t] = o[t] || P(), ze(n, o[t])) : ze(n, o);
		} else R(e) && ze(JSON.parse(e), o);
	}), i == null && a) for (let e in o) F(o, e) && Yr(o[e]);
	return o;
}
function Zr(e) {
	return e.type;
}
function Qr(e, t, n) {
	let r = B(t.messages) ? t.messages : P();
	"__i18nGlobal" in n && (r = Xr(e.locale.value, {
		messages: r,
		__i18n: n.__i18nGlobal
	}));
	let i = Object.keys(r);
	if (i.length && i.forEach((t) => {
		e.mergeLocaleMessage(t, r[t]);
	}), B(t.datetimeFormats)) {
		let n = Object.keys(t.datetimeFormats);
		n.length && n.forEach((n) => {
			e.mergeDateTimeFormat(n, t.datetimeFormats[n]);
		});
	}
	if (B(t.numberFormats)) {
		let n = Object.keys(t.numberFormats);
		n.length && n.forEach((n) => {
			e.mergeNumberFormat(n, t.numberFormats[n]);
		});
	}
}
function $r(e) {
	return o(n, null, e, 0);
}
function ei() {
	let t = "currentInstance";
	return t in e ? e[t] : e.getCurrentInstance();
}
var ti = "__INTLIFY_META__", ni = () => [], ri = () => !1, ii = 0;
function ai(e) {
	return ((t, n, r, i) => e(n, r, ei() || void 0, i));
}
var oi = () => {
	let e = ei(), t = null;
	return e && (t = Zr(e)[ti]) ? { [ti]: t } : null;
};
function si(e = {}) {
	let { __root: t, __injectWithOption: n } = e, i = t === void 0, a = e.flatJson, o = k ? v : x, s = z(e.inheritLocale) ? e.inheritLocale : !0, c = o(t && s ? t.locale.value : R(e.locale) ? e.locale : On), l = o(t && s ? t.fallbackLocale.value : R(e.fallbackLocale) || I(e.fallbackLocale) || H(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value), u = o(Xr(c.value, e)), d = o(H(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), f = o(H(e.numberFormats) ? e.numberFormats : { [c.value]: {} }), p = t ? t.missingWarn : z(e.missingWarn) || Se(e.missingWarn) ? e.missingWarn : !0, m = t ? t.fallbackWarn : z(e.fallbackWarn) || Se(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : z(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, _ = L(e.missing) ? e.missing : null, y = L(e.missing) ? ai(e.missing) : null, b = L(e.postTranslation) ? e.postTranslation : null, S = t ? t.warnHtmlMessage : z(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, w = !!e.escapeParameter, T = t ? t.modifiers : H(e.modifiers) ? e.modifiers : {}, ee = e.pluralRules || t && t.pluralRules, E;
	E = (() => {
		i && Vn(null);
		let t = {
			version: Lr,
			locale: c.value,
			fallbackLocale: l.value,
			messages: u.value,
			modifiers: T,
			pluralRules: ee,
			missing: y === null ? void 0 : y,
			missingWarn: p,
			fallbackWarn: m,
			fallbackFormat: g,
			unresolving: !0,
			postTranslation: b === null ? void 0 : b,
			warnHtmlMessage: S,
			escapeParameter: w,
			messageResolver: e.messageResolver,
			messageCompiler: e.messageCompiler,
			__meta: { framework: "vue" }
		};
		t.datetimeFormats = d.value, t.numberFormats = f.value, t.__datetimeFormatters = H(E) ? E.__datetimeFormatters : void 0, t.__numberFormatters = H(E) ? E.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (t.__v_emitter = H(E) ? E.__v_emitter : void 0);
		let n = Wn(t);
		return i && Vn(n), n;
	})(), Yn(E, c.value, l.value);
	function D() {
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
			E.locale = e, c.value = e;
		}
	}), ne = r({
		get: () => l.value,
		set: (e) => {
			E.fallbackLocale = e, l.value = e, Yn(E, c.value, e);
		}
	}), re = r(() => u.value), ie = r(() => d.value), ae = r(() => f.value);
	function oe() {
		return L(b) ? b : null;
	}
	function se(e) {
		b = e, E.postTranslation = e;
	}
	function ce() {
		return _;
	}
	function le(e) {
		e !== null && (y = ai(e)), _ = e, E.missing = y;
	}
	function ue(e, t) {
		return e !== "translate" || !t.resolvedMessage;
	}
	let de = (e, n, r, a, o, s) => {
		D();
		let c;
		try {
			process.env.NODE_ENV !== "production" && Rn(oi()), i || (E.fallbackContext = t ? Hn() : void 0), c = e(E);
		} finally {
			process.env.NODE_ENV !== "production" && Rn(null), i || (E.fallbackContext = void 0);
		}
		if (r !== "translate exists" && M(c) && c === -1 || r === "translate exists" && !c) {
			let [e, i] = n();
			if (process.env.NODE_ENV !== "production" && t && R(e) && ue(r, i) && (h && (Kn(m, e) || qn(p, e)) && O(Jr($.FALLBACK_TO_ROOT, {
				key: e,
				type: r
			})), process.env.NODE_ENV !== "production")) {
				let { __v_emitter: t } = E;
				t && h && t.emit("fallback", {
					type: r,
					key: e,
					to: "global",
					groupId: `${r}:${e}`
				});
			}
			return t && h ? a(t) : o(e);
		} else if (s(c)) return c;
		else throw Q(Z.UNEXPECTED_RETURN_TYPE);
	};
	function fe(...e) {
		return de((t) => Reflect.apply(_r, null, [t, ...e]), () => Sr(...e), "translate", (t) => Reflect.apply(t.t, t, [...e]), (e) => e, (e) => R(e));
	}
	function pe(...e) {
		let [t, n, r] = e;
		if (r && !B(r)) throw Q(Z.INVALID_ARGUMENT);
		return fe(t, n, N({ resolvedMessage: !0 }, r || {}));
	}
	function me(...e) {
		return de((t) => Reflect.apply(er, null, [t, ...e]), () => nr(...e), "datetime format", (t) => Reflect.apply(t.d, t, [...e]), () => "", (e) => R(e) || I(e));
	}
	function he(...e) {
		return de((t) => Reflect.apply(ir, null, [t, ...e]), () => or(...e), "number format", (t) => Reflect.apply(t.n, t, [...e]), () => "", (e) => R(e) || I(e));
	}
	function A(e) {
		return e.map((e) => R(e) || M(e) || z(e) ? $r(String(e)) : e);
	}
	let ge = {
		normalize: A,
		interpolate: (e) => e,
		type: "vnode"
	};
	function _e(...e) {
		return de((t) => {
			let n, r = t;
			try {
				r.processor = ge, n = Reflect.apply(_r, null, [r, ...e]);
			} finally {
				r.processor = null;
			}
			return n;
		}, () => Sr(...e), "translate", (t) => t[zr](...e), (e) => [$r(e)], (e) => I(e));
	}
	function ve(...e) {
		return de((t) => Reflect.apply(ir, null, [t, ...e]), () => or(...e), "number format", (t) => t[Vr](...e), ni, (e) => R(e) || I(e));
	}
	function j(...e) {
		return de((t) => Reflect.apply(er, null, [t, ...e]), () => nr(...e), "datetime format", (t) => t[Br](...e), ni, (e) => R(e) || I(e));
	}
	function ye(e) {
		ee = e, E.pluralRules = ee;
	}
	function be(e, t) {
		return de(() => {
			if (!e) return !1;
			let n = R(t) ? t : c.value, r = R(t) ? [n] : dn(E, l.value, n);
			for (let t = 0; t < r.length; t++) {
				let n = we(r[t]), i = E.messageResolver(n, e);
				if (i === null && (i = n[e]), q(i) || X(i) || R(i)) return !0;
			}
			return !1;
		}, () => [e], "translate exists", (n) => Reflect.apply(n.te, n, [e, t]), ri, (e) => z(e));
	}
	function xe(e) {
		let t = null, n = dn(E, l.value, c.value);
		for (let r = 0; r < n.length; r++) {
			let i = u.value[n[r]] || {}, a = E.messageResolver(i, e);
			if (a != null) {
				t = a;
				break;
			}
		}
		return t;
	}
	function Ce(e) {
		return xe(e) ?? (t && t.tm(e) || {});
	}
	function we(e) {
		return u.value[e] || {};
	}
	function P(e, t) {
		if (a) {
			let n = { [e]: t };
			for (let e in n) F(n, e) && Yr(n[e]);
			t = n[e];
		}
		u.value[e] = t, E.messages = u.value;
	}
	function Te(e, t) {
		u.value[e] = u.value[e] || {};
		let n = { [e]: t };
		if (a) for (let e in n) F(n, e) && Yr(n[e]);
		t = n[e], ze(t, u.value[e]), E.messages = u.value;
	}
	function Ee(e) {
		return d.value[e] || {};
	}
	function De(e, t) {
		d.value[e] = t, E.datetimeFormats = d.value, rr(E, e, t);
	}
	function Oe(e, t) {
		d.value[e] = N(d.value[e] || {}, t), E.datetimeFormats = d.value, rr(E, e, t);
	}
	function ke(e) {
		return f.value[e] || {};
	}
	function Ae(e, t) {
		f.value[e] = t, E.numberFormats = f.value, sr(E, e, t);
	}
	function je(e, t) {
		f.value[e] = N(f.value[e] || {}, t), E.numberFormats = f.value, sr(E, e, t);
	}
	ii++, t && k && (C(t.locale, (e) => {
		s && (c.value = e, E.locale = e, Yn(E, c.value, l.value));
	}), C(t.fallbackLocale, (e) => {
		s && (l.value = e, E.fallbackLocale = e, Yn(E, c.value, l.value));
	}));
	let V = {
		id: ii,
		locale: te,
		fallbackLocale: ne,
		get inheritLocale() {
			return s;
		},
		set inheritLocale(e) {
			s = e, e && t && (c.value = t.locale.value, l.value = t.fallbackLocale.value, Yn(E, c.value, l.value));
		},
		get availableLocales() {
			return Object.keys(u.value).sort();
		},
		messages: re,
		get modifiers() {
			return T;
		},
		get pluralRules() {
			return ee || {};
		},
		get isGlobal() {
			return i;
		},
		get missingWarn() {
			return p;
		},
		set missingWarn(e) {
			p = e, E.missingWarn = p;
		},
		get fallbackWarn() {
			return m;
		},
		set fallbackWarn(e) {
			m = e, E.fallbackWarn = m;
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
			g = e, E.fallbackFormat = g;
		},
		get warnHtmlMessage() {
			return S;
		},
		set warnHtmlMessage(e) {
			S = e, E.warnHtmlMessage = e;
		},
		get escapeParameter() {
			return w;
		},
		set escapeParameter(e) {
			w = e, E.escapeParameter = e;
		},
		t: fe,
		getLocaleMessage: we,
		setLocaleMessage: P,
		mergeLocaleMessage: Te,
		getPostTranslationHandler: oe,
		setPostTranslationHandler: se,
		getMissingHandler: ce,
		setMissingHandler: le,
		[Wr]: ye
	};
	return V.datetimeFormats = ie, V.numberFormats = ae, V.rt = pe, V.te = be, V.tm = Ce, V.d = me, V.n = he, V.getDateTimeFormat = Ee, V.setDateTimeFormat = De, V.mergeDateTimeFormat = Oe, V.getNumberFormat = ke, V.setNumberFormat = Ae, V.mergeNumberFormat = je, V[Gr] = n, V[zr] = _e, V[Br] = j, V[Vr] = ve, process.env.NODE_ENV !== "production" && (V[Hr] = (e) => {
		E.__v_emitter = e;
	}, V[Ur] = () => {
		E.__v_emitter = void 0;
	}), V;
}
var ci = "vue-i18n: composer properties", li = {
	"vue-devtools-plugin-vue-i18n": "Vue I18n DevTools",
	"vue-i18n-resource-inspector": "Vue I18n DevTools",
	"vue-i18n-timeline": "Vue I18n"
}, ui = { "vue-i18n-resource-inspector": "Search for scopes ..." }, di = { "vue-i18n-timeline": 16764185 }, fi;
async function pi(e, t) {
	return new Promise((n, r) => {
		try {
			Ir({
				id: "vue-devtools-plugin-vue-i18n",
				label: li["vue-devtools-plugin-vue-i18n"],
				packageName: "vue-i18n",
				homepage: "https://vue-i18n.intlify.dev",
				logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
				componentStateTypes: [ci],
				app: e
			}, (r) => {
				fi = r, r.on.visitComponentTree(({ componentInstance: e, treeNode: n }) => {
					hi(e, n, t);
				}), r.on.inspectComponent(({ componentInstance: e, instanceData: n }) => {
					e.__VUE_I18N__ && n && (t.mode === "legacy" ? e.__VUE_I18N__ !== t.global.__composer && gi(n, e.__VUE_I18N__) : gi(n, e.__VUE_I18N__));
				}), r.addInspector({
					id: "vue-i18n-resource-inspector",
					label: li["vue-i18n-resource-inspector"],
					icon: "language",
					treeFilterPlaceholder: ui["vue-i18n-resource-inspector"]
				}), r.on.getInspectorTree((n) => {
					n.app === e && n.inspectorId === "vue-i18n-resource-inspector" && Si(n, t);
				});
				let i = /* @__PURE__ */ new Map();
				r.on.getInspectorState(async (n) => {
					if (n.app === e && n.inspectorId === "vue-i18n-resource-inspector") if (r.unhighlightElement(), Ti(n, t), n.nodeId === "global") {
						if (!i.has(n.app)) {
							let [e] = await r.getComponentInstances(n.app);
							i.set(n.app, e);
						}
						r.highlightElement(i.get(n.app));
					} else {
						let e = Ci(n.nodeId, t);
						e && r.highlightElement(e);
					}
				}), r.on.editInspectorState((n) => {
					n.app === e && n.inspectorId === "vue-i18n-resource-inspector" && Oi(n, t);
				}), r.addTimelineLayer({
					id: "vue-i18n-timeline",
					label: li["vue-i18n-timeline"],
					color: di["vue-i18n-timeline"]
				}), n(!0);
			});
		} catch (e) {
			console.error(e), r(!1);
		}
	});
}
function mi(e) {
	return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function hi(e, t, n) {
	let r = n.mode === "composition" ? n.global : n.global.__composer;
	if (e && e.__VUE_I18N__ && e.__VUE_I18N__ !== r) {
		let n = {
			label: `i18n (${mi(e)} Scope)`,
			textColor: 0,
			backgroundColor: 16764185
		};
		t.tags.push(n);
	}
}
function gi(e, t) {
	let n = ci;
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
		value: _i(t.messages.value)
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
function _i(e) {
	let t = {};
	return Object.keys(e).forEach((n) => {
		let r = e[n];
		L(r) && "source" in r ? t[n] = xi(r) : q(r) && r.loc && r.loc.source ? t[n] = r.loc.source : B(r) ? t[n] = _i(r) : t[n] = r;
	}), t;
}
var vi = {
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"&": "&amp;"
};
function yi(e) {
	return e.replace(/[<>"&]/g, bi);
}
function bi(e) {
	return vi[e] || e;
}
function xi(e) {
	return { _custom: {
		type: "function",
		display: `<span>ƒ</span> ${e.source ? `("${yi(e.source)}")` : "(?)"}`
	} };
}
function Si(e, t) {
	e.rootNodes.push({
		id: "global",
		label: "Global Scope"
	});
	let n = t.mode === "composition" ? t.global : t.global.__composer;
	for (let [r, i] of t.__instances) {
		let a = t.mode === "composition" ? i : i.__composer;
		n !== a && e.rootNodes.push({
			id: a.id.toString(),
			label: `${mi(r)} Scope`
		});
	}
}
function Ci(e, t) {
	let n = null;
	if (e !== "global") {
		for (let [r, i] of t.__instances.entries()) if (i.id.toString() === e) {
			n = r;
			break;
		}
	}
	return n;
}
function wi(e, t) {
	if (e === "global") return t.mode === "composition" ? t.global : t.global.__composer;
	{
		let n = Array.from(t.__instances.values()).find((t) => t.id.toString() === e);
		return n ? t.mode === "composition" ? n : n.__composer : null;
	}
}
function Ti(e, t) {
	let n = wi(e.nodeId, t);
	return n && (e.state = Ei(n)), null;
}
function Ei(e) {
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
		value: _i(e.messages.value)
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
function Di(e, t) {
	if (fi) {
		let n;
		t && "groupId" in t && (n = t.groupId, delete t.groupId), fi.addTimelineEvent({
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
function Oi(e, t) {
	let n = wi(e.nodeId, t);
	if (n) {
		let [t] = e.path;
		t === "locale" && R(e.state.value) ? n.locale.value = e.state.value : t === "fallbackLocale" && (R(e.state.value) || I(e.state.value) || B(e.state.value)) ? n.fallbackLocale.value = e.state.value : t === "inheritLocale" && z(e.state.value) && (n.inheritLocale = e.state.value);
	}
}
var ki = {
	tag: { type: [String, Object] },
	locale: { type: String },
	scope: {
		type: String,
		validator: (e) => e === "parent" || e === "global",
		default: "parent"
	},
	i18n: { type: Object }
};
function Ai({ slots: e }, n) {
	return n.length === 1 && n[0] === "default" ? (e.default ? e.default() : []).reduce((e, n) => [...e, ...n.type === t ? n.children : [n]], []) : n.reduce((t, n) => {
		let r = e[n];
		return r && (t[n] = r()), t;
	}, P());
}
function ji() {
	return t;
}
var Mi = s({
	name: "i18n-t",
	props: N({
		keypath: {
			type: String,
			required: !0
		},
		plural: {
			type: [Number, String],
			validator: (e) => M(e) || !isNaN(e)
		}
	}, ki),
	setup(e, t) {
		let { slots: n, attrs: r } = t, i = e.i18n || Ui({
			useScope: e.scope,
			__useComponent: !0
		});
		return () => {
			let a = Object.keys(n).filter((e) => e[0] !== "_"), o = P();
			e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = R(e.plural) ? +e.plural : e.plural);
			let s = Ai(t, a), c = i[zr](e.keypath, s, o), l = N(P(), r);
			return d(R(e.tag) || B(e.tag) ? e.tag : ji(), l, c);
		};
	}
});
function Ni(e) {
	return I(e) && !R(e[0]);
}
function Pi(e, t, n, r) {
	let { slots: i, attrs: a } = t;
	return () => {
		let t = { part: !0 }, o = P();
		e.locale && (t.locale = e.locale), R(e.format) ? t.key = e.format : B(e.format) && (R(e.format.key) && (t.key = e.format.key), o = Object.keys(e.format).reduce((t, r) => n.includes(r) ? N(P(), t, { [r]: e.format[r] }) : t, P()));
		let s = r(e.value, t, o), c = [t.key];
		I(s) ? c = s.map((e, t) => {
			let n = i[e.type], r = n ? n({
				[e.type]: e.value,
				index: t,
				parts: s
			}) : [e.value];
			return Ni(r) && (r[0].key = `${e.type}-${t}`), r;
		}) : R(s) && (c = [s]);
		let l = N(P(), a);
		return d(R(e.tag) || B(e.tag) ? e.tag : ji(), l, c);
	};
}
var Fi = s({
	name: "i18n-n",
	props: N({
		value: {
			type: Number,
			required: !0
		},
		format: { type: [String, Object] }
	}, ki),
	setup(e, t) {
		let n = e.i18n || Ui({
			useScope: e.scope,
			__useComponent: !0
		});
		return Pi(e, t, ar, (...e) => n[Vr](...e));
	}
});
function Ii(e, t) {
	let n = e;
	if (e.mode === "composition") return n.__getInstance(t) || e.global;
	{
		let r = n.__getInstance(t);
		return r == null ? e.global.__composer : r.__composer;
	}
}
function Li(e) {
	let t = (t) => {
		process.env.NODE_ENV !== "production" && he(Jr($.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE));
		let { instance: n, value: r } = t;
		if (!n || !n.$) throw Q(Z.UNEXPECTED_ERROR);
		let i = Ii(e, n.$), a = Ri(r);
		return [Reflect.apply(i.t, i, [...zi(a)]), i];
	};
	return {
		created: (e, n) => {
			let [r, i] = t(n);
			k && (e.__i18nWatcher = C(i.locale, () => {
				n.instance && n.instance.$forceUpdate();
			})), e.__composer = i, e.textContent = r;
		},
		unmounted: (e) => {
			k && e.__i18nWatcher && (e.__i18nWatcher(), e.__i18nWatcher = void 0, delete e.__i18nWatcher), e.__composer && (e.__composer = void 0, delete e.__composer);
		},
		beforeUpdate: (e, { value: t }) => {
			if (e.__composer) {
				let n = e.__composer, r = Ri(t);
				e.textContent = Reflect.apply(n.t, n, [...zi(r)]);
			}
		},
		getSSRProps: (e) => {
			let [n] = t(e);
			return { textContent: n };
		}
	};
}
function Ri(e) {
	if (R(e)) return { path: e };
	if (H(e)) {
		if (!("path" in e)) throw Q(Z.REQUIRED_VALUE, "path");
		return e;
	} else throw Q(Z.INVALID_VALUE);
}
function zi(e) {
	let { path: t, locale: n, args: r, choice: i, plural: a } = e, o = {}, s = r || {};
	return R(n) && (o.locale = n), M(i) && (o.plural = i), M(a) && (o.plural = a), [
		t,
		s,
		o
	];
}
function Bi(e, t, ...n) {
	let r = H(n[0]) ? n[0] : {};
	(!z(r.globalInstall) || r.globalInstall) && ([Mi.name, "I18nT"].forEach((t) => e.component(t, Mi)), [Fi.name, "I18nN"].forEach((t) => e.component(t, Fi)), [ea.name, "I18nD"].forEach((t) => e.component(t, ea))), e.directive("t", Li(t));
}
var Vi = j("global-vue-i18n");
function Hi(e = {}) {
	process.env.NODE_ENV;
	let t = z(e.globalInjection) ? e.globalInjection : !0, n = /* @__PURE__ */ new Map(), [r, i] = Wi(e, !1), a = j(process.env.NODE_ENV === "production" ? "" : "vue-i18n");
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
			if (process.env.NODE_ENV !== "production" && (e.__VUE_I18N__ = l), e.__VUE_I18N_SYMBOL__ = a, e.provide(e.__VUE_I18N_SYMBOL__, l), H(n[0])) {
				let e = n[0];
				l.__composerExtend = e.__composerExtend, l.__vueI18nExtend = e.__vueI18nExtend;
			}
			let r = null;
			t && (r = $i(e, l.global)), Bi(e, l, ...n);
			let o = e.unmount;
			if (e.unmount = () => {
				r && r(), l.dispose(), o();
			}, process.env.NODE_ENV !== "production") {
				if (!await pi(e, l)) throw Q(Z.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
				let t = Le();
				{
					let e = i;
					e[Hr] && e[Hr](t);
				}
				t.on("*", Di);
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
function Ui(e = {}) {
	let t = ei();
	if (t == null) throw Q(Z.MUST_BE_CALL_SETUP_TOP);
	if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Q(Z.NOT_INSTALLED);
	let n = Gi(t), r = qi(n), i = Zr(t), a = Ki(e, i);
	if (a === "global") return Qr(r, e, i), r;
	if (a === "parent") {
		let i = Ji(n, t, e.__useComponent);
		return i ??= (process.env.NODE_ENV !== "production" && O(Jr($.NOT_FOUND_PARENT_SCOPE)), r), i;
	}
	if (a === "isolated") {
		if (n.mode !== "composition") throw Q(Z.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
		let i = n, a = N({}, e);
		a.__root = Ji(n, t) || r;
		let o = si(a);
		i.__composerExtend && (o[Kr] = i.__composerExtend(o));
		let s = null;
		if (process.env.NODE_ENV !== "production") {
			s = Le();
			let e = o;
			e[Hr] && e[Hr](s), s.on("*", Di);
		}
		return u() && h(() => {
			if (process.env.NODE_ENV !== "production") {
				s && s.off("*", Di);
				let e = o;
				e[Ur] && e[Ur]();
			}
			let e = o[Kr];
			e && (e(), delete o[Kr]);
		}), o;
	}
	let o = n, s = o.__getInstance(t);
	if (s == null) {
		let n = N({}, e);
		"__i18n" in i && (n.__i18n = i.__i18n), r && (n.__root = r), s = si(n), o.__composerExtend && (s[Kr] = o.__composerExtend(s)), Xi(o, t, s), o.__setInstance(t, s);
	} else process.env.NODE_ENV !== "production" && a === "local" && O(Jr($.DUPLICATE_USE_I18N_CALLING));
	return s;
}
function Wi(e, t) {
	let n = c(), r = n.run(() => si(e));
	if (r == null) throw Q(Z.UNEXPECTED_ERROR);
	return [n, r];
}
function Gi(e) {
	let t = f(e.isCE ? Vi : e.appContext.app.__VUE_I18N_SYMBOL__);
	if (!t) throw Q(e.isCE ? Z.NOT_INSTALLED_WITH_PROVIDE : Z.UNEXPECTED_ERROR);
	return t;
}
function Ki(e, t) {
	return Ce(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function qi(e) {
	return e.mode === "composition" ? e.global : e.global.__composer;
}
function Ji(e, t, n = !1) {
	let r = null, i = t.root, a = Yi(t, n);
	for (; a != null;) {
		let t = e;
		if (e.mode === "composition" && (r = t.__getInstance(a)), r != null || i === a) break;
		a = a.parent;
	}
	return r;
}
function Yi(e, t = !1) {
	return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Xi(e, t, n) {
	let r = null;
	m(() => {
		if (process.env.NODE_ENV !== "production") {
			t.__VUE_I18N__ = n, r = Le();
			let e = n;
			e[Hr] && e[Hr](r), r.on("*", Di);
		}
	}, t), g(() => {
		let i = n;
		process.env.NODE_ENV !== "production" && (r && r.off("*", Di), i[Ur] && i[Ur](), delete t.__VUE_I18N__), e.__deleteInstance(t);
		let a = i[Kr];
		a && (a(), delete i[Kr]);
	}, t);
}
var Zi = [
	"locale",
	"fallbackLocale",
	"availableLocales"
], Qi = [
	"t",
	"rt",
	"d",
	"n",
	"tm",
	"te"
];
function $i(e, t) {
	let n = Object.create(null);
	return Zi.forEach((e) => {
		let r = Object.getOwnPropertyDescriptor(t, e);
		if (!r) throw Q(Z.UNEXPECTED_ERROR);
		let i = p(r.value) ? {
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
	}), e.config.globalProperties.$i18n = n, Qi.forEach((n) => {
		let r = Object.getOwnPropertyDescriptor(t, n);
		if (!r || !r.value) throw Q(Z.UNEXPECTED_ERROR);
		Object.defineProperty(e.config.globalProperties, `$${n}`, r);
	}), () => {
		delete e.config.globalProperties.$i18n, Qi.forEach((t) => {
			delete e.config.globalProperties[`$${t}`];
		});
	};
}
var ea = s({
	name: "i18n-d",
	props: N({
		value: {
			type: [Number, Date],
			required: !0
		},
		format: { type: [String, Object] }
	}, ki),
	setup(e, t) {
		let n = e.i18n || Ui({
			useScope: e.scope,
			__useComponent: !0
		});
		return Pi(e, t, tr, (...e) => n[Br](...e));
	}
});
if (Mn(Qt), Pn(wn), In(dn), process.env.NODE_ENV !== "production") {
	let e = Ee();
	e.__INTLIFY__ = !0, en(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
var ta = Hi({
	legacy: !1,
	locale: "en",
	fallbackLocale: "en",
	messages: {
		en: {
			shared: {
				appName: {
					type: 0,
					start: 0,
					end: 10,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 11,
							offset: 10
						},
						source: "i18n Bench"
					},
					body: {
						type: 2,
						start: 0,
						end: 10,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 11,
								offset: 10
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 10,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 11,
									offset: 10
								}
							}
						}],
						static: "i18n Bench"
					}
				},
				siteName: {
					type: 0,
					start: 0,
					end: 14,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 15,
							offset: 14
						},
						source: "i18n Benchmark"
					},
					body: {
						type: 2,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							}
						}],
						static: "i18n Benchmark"
					}
				},
				contactEmail: {
					type: 0,
					start: 0,
					end: 24,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 25,
							offset: 24
						},
						source: "contact{'@'}intlayer.org"
					},
					body: {
						type: 2,
						start: 0,
						end: 24,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 25,
								offset: 24
							}
						},
						items: [
							{
								type: 3,
								start: 0,
								end: 7,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 8,
										offset: 7
									}
								}
							},
							{
								type: 9,
								start: 7,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 8,
										offset: 7
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							},
							{
								type: 3,
								start: 12,
								end: 24,
								loc: {
									start: {
										line: 1,
										column: 13,
										offset: 12
									},
									end: {
										line: 1,
										column: 25,
										offset: 24
									}
								}
							}
						],
						static: "contact@intlayer.org"
					}
				},
				goToGithub: {
					type: 0,
					start: 0,
					end: 12,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 13,
							offset: 12
						},
						source: "Go to GitHub"
					},
					body: {
						type: 2,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							}
						}],
						static: "Go to GitHub"
					}
				}
			},
			header: {
				home: {
					type: 0,
					start: 0,
					end: 4,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 5,
							offset: 4
						},
						source: "Home"
					},
					body: {
						type: 2,
						start: 0,
						end: 4,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 5,
								offset: 4
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 4,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 5,
									offset: 4
								}
							}
						}],
						static: "Home"
					}
				},
				methodology: {
					type: 0,
					start: 0,
					end: 11,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 12,
							offset: 11
						},
						source: "Methodology"
					},
					body: {
						type: 2,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							}
						}],
						static: "Methodology"
					}
				},
				mockPages: {
					type: 0,
					start: 0,
					end: 10,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 11,
							offset: 10
						},
						source: "Mock Pages"
					},
					body: {
						type: 2,
						start: 0,
						end: 10,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 11,
								offset: 10
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 10,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 11,
									offset: 10
								}
							}
						}],
						static: "Mock Pages"
					}
				},
				products: {
					type: 0,
					start: 0,
					end: 8,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 9,
							offset: 8
						},
						source: "Products"
					},
					body: {
						type: 2,
						start: 0,
						end: 8,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 9,
								offset: 8
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 8,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 9,
									offset: 8
								}
							}
						}],
						static: "Products"
					}
				},
				pricing: {
					type: 0,
					start: 0,
					end: 7,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 8,
							offset: 7
						},
						source: "Pricing"
					},
					body: {
						type: 2,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							}
						}],
						static: "Pricing"
					}
				},
				team: {
					type: 0,
					start: 0,
					end: 4,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 5,
							offset: 4
						},
						source: "Team"
					},
					body: {
						type: 2,
						start: 0,
						end: 4,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 5,
								offset: 4
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 4,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 5,
									offset: 4
								}
							}
						}],
						static: "Team"
					}
				},
				blog: {
					type: 0,
					start: 0,
					end: 4,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 5,
							offset: 4
						},
						source: "Blog"
					},
					body: {
						type: 2,
						start: 0,
						end: 4,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 5,
								offset: 4
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 4,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 5,
									offset: 4
								}
							}
						}],
						static: "Blog"
					}
				},
				careers: {
					type: 0,
					start: 0,
					end: 7,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 8,
							offset: 7
						},
						source: "Careers"
					},
					body: {
						type: 2,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							}
						}],
						static: "Careers"
					}
				},
				faq: {
					type: 0,
					start: 0,
					end: 3,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 4,
							offset: 3
						},
						source: "FAQ"
					},
					body: {
						type: 2,
						start: 0,
						end: 3,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 4,
								offset: 3
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 3,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 4,
									offset: 3
								}
							}
						}],
						static: "FAQ"
					}
				},
				contact: {
					type: 0,
					start: 0,
					end: 7,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 8,
							offset: 7
						},
						source: "Contact"
					},
					body: {
						type: 2,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							}
						}],
						static: "Contact"
					}
				},
				settings: {
					type: 0,
					start: 0,
					end: 8,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 9,
							offset: 8
						},
						source: "Settings"
					},
					body: {
						type: 2,
						start: 0,
						end: 8,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 9,
								offset: 8
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 8,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 9,
									offset: 8
								}
							}
						}],
						static: "Settings"
					}
				}
			},
			footer: {
				title: {
					type: 0,
					start: 0,
					end: 14,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 15,
							offset: 14
						},
						source: "i18n Benchmark"
					},
					body: {
						type: 2,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							}
						}],
						static: "i18n Benchmark"
					}
				},
				description: {
					type: 0,
					start: 0,
					end: 151,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 152,
							offset: 151
						},
						source: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
					},
					body: {
						type: 2,
						start: 0,
						end: 151,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 152,
								offset: 151
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 151,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 152,
									offset: 151
								}
							}
						}],
						static: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
					}
				},
				resources: {
					type: 0,
					start: 0,
					end: 9,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 10,
							offset: 9
						},
						source: "Resources"
					},
					body: {
						type: 2,
						start: 0,
						end: 9,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 10,
								offset: 9
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 9,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 10,
									offset: 9
								}
							}
						}],
						static: "Resources"
					}
				},
				github: {
					type: 0,
					start: 0,
					end: 6,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 7,
							offset: 6
						},
						source: "GitHub"
					},
					body: {
						type: 2,
						start: 0,
						end: 6,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 7,
								offset: 6
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 6,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 7,
									offset: 6
								}
							}
						}],
						static: "GitHub"
					}
				},
				methodology: {
					type: 0,
					start: 0,
					end: 11,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 12,
							offset: 11
						},
						source: "Methodology"
					},
					body: {
						type: 2,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							}
						}],
						static: "Methodology"
					}
				},
				contributing: {
					type: 0,
					start: 0,
					end: 12,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 13,
							offset: 12
						},
						source: "Contributing"
					},
					body: {
						type: 2,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							}
						}],
						static: "Contributing"
					}
				},
				contact: {
					type: 0,
					start: 0,
					end: 7,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 8,
							offset: 7
						},
						source: "Contact"
					},
					body: {
						type: 2,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							}
						}],
						static: "Contact"
					}
				},
				builtWith: {
					type: 0,
					start: 0,
					end: 82,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 83,
							offset: 82
						},
						source: "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router."
					},
					body: {
						type: 2,
						start: 0,
						end: 82,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 83,
								offset: 82
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 82,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 83,
									offset: 82
								}
							}
						}],
						static: "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router."
					}
				}
			},
			themeToggle: {
				auto: {
					type: 0,
					start: 0,
					end: 11,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 12,
							offset: 11
						},
						source: "Theme: Auto"
					},
					body: {
						type: 2,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							}
						}],
						static: "Theme: Auto"
					}
				},
				dark: {
					type: 0,
					start: 0,
					end: 11,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 12,
							offset: 11
						},
						source: "Theme: Dark"
					},
					body: {
						type: 2,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							}
						}],
						static: "Theme: Dark"
					}
				},
				light: {
					type: 0,
					start: 0,
					end: 12,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 13,
							offset: 12
						},
						source: "Theme: Light"
					},
					body: {
						type: 2,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							}
						}],
						static: "Theme: Light"
					}
				},
				labelAuto: {
					type: 0,
					start: 0,
					end: 57,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 58,
							offset: 57
						},
						source: "Theme mode: auto (system). Click to switch to light mode."
					},
					body: {
						type: 2,
						start: 0,
						end: 57,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 58,
								offset: 57
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 57,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 58,
									offset: 57
								}
							}
						}],
						static: "Theme mode: auto (system). Click to switch to light mode."
					}
				},
				labelOther: {
					type: 0,
					start: 0,
					end: 41,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 42,
							offset: 41
						},
						source: "Theme mode: {mode}. Click to switch mode."
					},
					body: {
						type: 2,
						start: 0,
						end: 41,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 42,
								offset: 41
							}
						},
						items: [
							{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								},
								value: "Theme mode: "
							},
							{
								type: 4,
								start: 12,
								end: 18,
								loc: {
									start: {
										line: 1,
										column: 13,
										offset: 12
									},
									end: {
										line: 1,
										column: 19,
										offset: 18
									}
								},
								key: "mode"
							},
							{
								type: 3,
								start: 18,
								end: 41,
								loc: {
									start: {
										line: 1,
										column: 19,
										offset: 18
									},
									end: {
										line: 1,
										column: 42,
										offset: 41
									}
								},
								value: ". Click to switch mode."
							}
						]
					}
				}
			},
			mockBanner: {
				type: 0,
				start: 0,
				end: 114,
				loc: {
					start: {
						line: 1,
						column: 1,
						offset: 0
					},
					end: {
						line: 1,
						column: 115,
						offset: 114
					},
					source: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
				},
				body: {
					type: 2,
					start: 0,
					end: 114,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 115,
							offset: 114
						}
					},
					items: [{
						type: 3,
						start: 0,
						end: 114,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 115,
								offset: 114
							}
						}
					}],
					static: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
				}
			},
			home: {
				hero: {
					title: {
						type: 0,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							},
							source: "i18n Benchmark"
						},
						body: {
							type: 2,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 14,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 15,
										offset: 14
									}
								}
							}],
							static: "i18n Benchmark"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 157,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 158,
								offset: 157
							},
							source: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity."
						},
						body: {
							type: 2,
							start: 0,
							end: 157,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 158,
									offset: 157
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 157,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 158,
										offset: 157
									}
								}
							}],
							static: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity."
						}
					},
					viewResults: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "View Results"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "View Results"
						}
					},
					methodology: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Methodology"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Methodology"
						}
					}
				},
				whyItMatters: {
					title: {
						type: 0,
						start: 0,
						end: 24,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 25,
								offset: 24
							},
							source: "Why These Metrics Matter"
						},
						body: {
							type: 2,
							start: 0,
							end: 24,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 25,
									offset: 24
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 24,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 25,
										offset: 24
									}
								}
							}],
							static: "Why These Metrics Matter"
						}
					},
					bundleSizeTitle: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Bundle Size"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Bundle Size"
						}
					},
					bundleSizeDesc: {
						type: 0,
						start: 0,
						end: 314,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 315,
								offset: 314
							},
							source: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves."
						},
						body: {
							type: 2,
							start: 0,
							end: 314,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 315,
									offset: 314
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 314,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 315,
										offset: 314
									}
								}
							}],
							static: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves."
						}
					},
					renderingTitle: {
						type: 0,
						start: 0,
						end: 21,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 22,
								offset: 21
							},
							source: "Rendering & Hydration"
						},
						body: {
							type: 2,
							start: 0,
							end: 21,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 22,
									offset: 21
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 21,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 22,
										offset: 21
									}
								}
							}],
							static: "Rendering & Hydration"
						}
					},
					renderingDesc: {
						type: 0,
						start: 0,
						end: 336,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 337,
								offset: 336
							},
							source: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI)."
						},
						body: {
							type: 2,
							start: 0,
							end: 336,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 337,
									offset: 336
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 336,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 337,
										offset: 336
									}
								}
							}],
							static: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI)."
						}
					},
					dynamicLoadingTitle: {
						type: 0,
						start: 0,
						end: 15,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 16,
								offset: 15
							},
							source: "Dynamic Loading"
						},
						body: {
							type: 2,
							start: 0,
							end: 15,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 16,
									offset: 15
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 15,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 16,
										offset: 15
									}
								}
							}],
							static: "Dynamic Loading"
						}
					},
					dynamicLoadingDesc: {
						type: 0,
						start: 0,
						end: 339,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 340,
								offset: 339
							},
							source: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
						},
						body: {
							type: 2,
							start: 0,
							end: 339,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 340,
									offset: 339
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 339,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 340,
										offset: 339
									}
								}
							}],
							static: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
						}
					}
				},
				understandingImpact: {
					title: {
						type: 0,
						start: 0,
						end: 24,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 25,
								offset: 24
							},
							source: "Understanding the Impact"
						},
						body: {
							type: 2,
							start: 0,
							end: 24,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 25,
									offset: 24
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 24,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 25,
										offset: 24
									}
								}
							}],
							static: "Understanding the Impact"
						}
					},
					singleJsonTitle: {
						type: 0,
						start: 0,
						end: 44,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 45,
								offset: 44
							},
							source: "Why a single large JSON can hurt performance"
						},
						body: {
							type: 2,
							start: 0,
							end: 44,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 45,
									offset: 44
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 44,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 45,
										offset: 44
									}
								}
							}],
							static: "Why a single large JSON can hurt performance"
						}
					},
					singleJsonIntro: {
						type: 0,
						start: 0,
						end: 236,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 237,
								offset: 236
							},
							source: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:"
						},
						body: {
							type: 2,
							start: 0,
							end: 236,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 237,
									offset: 236
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 236,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 237,
										offset: 236
									}
								}
							}],
							static: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:"
						}
					},
					singleJsonBullet1: {
						type: 0,
						start: 0,
						end: 70,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 71,
								offset: 70
							},
							source: "The JSON must be parsed on every page load — blocking the main thread."
						},
						body: {
							type: 2,
							start: 0,
							end: 70,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 71,
									offset: 70
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 70,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 71,
										offset: 70
									}
								}
							}],
							static: "The JSON must be parsed on every page load — blocking the main thread."
						}
					},
					singleJsonBullet2: {
						type: 0,
						start: 0,
						end: 161,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 162,
								offset: 161
							},
							source: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change."
						},
						body: {
							type: 2,
							start: 0,
							end: 161,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 162,
									offset: 161
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 161,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 162,
										offset: 161
									}
								}
							}],
							static: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change."
						}
					},
					singleJsonBullet3: {
						type: 0,
						start: 0,
						end: 153,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 154,
								offset: 153
							},
							source: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated."
						},
						body: {
							type: 2,
							start: 0,
							end: 153,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 154,
									offset: 153
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 153,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 154,
										offset: 153
									}
								}
							}],
							static: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated."
						}
					},
					tradeOffsTitle: {
						type: 0,
						start: 0,
						end: 33,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 34,
								offset: 33
							},
							source: "The trade-offs of dynamic loading"
						},
						body: {
							type: 2,
							start: 0,
							end: 33,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 34,
									offset: 33
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 33,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 34,
										offset: 33
									}
								}
							}],
							static: "The trade-offs of dynamic loading"
						}
					},
					tradeOffsIntro: {
						type: 0,
						start: 0,
						end: 140,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 141,
								offset: 140
							},
							source: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:"
						},
						body: {
							type: 2,
							start: 0,
							end: 140,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 141,
									offset: 140
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 140,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 141,
										offset: 140
									}
								}
							}],
							static: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:"
						}
					},
					waterfallLabel: {
						type: 0,
						start: 0,
						end: 19,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 20,
								offset: 19
							},
							source: "Waterfall requests:"
						},
						body: {
							type: 2,
							start: 0,
							end: 19,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 20,
									offset: 19
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 19,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 20,
										offset: 19
									}
								}
							}],
							static: "Waterfall requests:"
						}
					},
					waterfallDesc: {
						type: 0,
						start: 0,
						end: 103,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 104,
								offset: 103
							},
							source: "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
						},
						body: {
							type: 2,
							start: 0,
							end: 103,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 104,
									offset: 103
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 103,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 104,
										offset: 103
									}
								}
							}],
							static: "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
						}
					},
					foucLabel: {
						type: 0,
						start: 0,
						end: 37,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 38,
								offset: 37
							},
							source: "Flash of untranslated content (FOUC):"
						},
						body: {
							type: 2,
							start: 0,
							end: 37,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 38,
									offset: 37
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 37,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 38,
										offset: 37
									}
								}
							}],
							static: "Flash of untranslated content (FOUC):"
						}
					},
					foucDesc: {
						type: 0,
						start: 0,
						end: 87,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 88,
								offset: 87
							},
							source: "users may briefly see translation keys or a fallback language before the chunk arrives."
						},
						body: {
							type: 2,
							start: 0,
							end: 87,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 88,
									offset: 87
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 87,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 88,
										offset: 87
									}
								}
							}],
							static: "users may briefly see translation keys or a fallback language before the chunk arrives."
						}
					},
					cacheLabel: {
						type: 0,
						start: 0,
						end: 19,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 20,
								offset: 19
							},
							source: "Cache invalidation:"
						},
						body: {
							type: 2,
							start: 0,
							end: 19,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 20,
									offset: 19
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 19,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 20,
										offset: 19
									}
								}
							}],
							static: "Cache invalidation:"
						}
					},
					cacheDesc: {
						type: 0,
						start: 0,
						end: 130,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 131,
								offset: 130
							},
							source: "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
						},
						body: {
							type: 2,
							start: 0,
							end: 130,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 131,
									offset: 130
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 130,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 131,
										offset: 130
									}
								}
							}],
							static: "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
						}
					},
					measuresTitle: {
						type: 0,
						start: 0,
						end: 28,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 29,
								offset: 28
							},
							source: "What this benchmark measures"
						},
						body: {
							type: 2,
							start: 0,
							end: 28,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 29,
									offset: 28
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 28,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 29,
										offset: 28
									}
								}
							}],
							static: "What this benchmark measures"
						}
					},
					measuresDesc: {
						type: 0,
						start: 0,
						end: 388,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 389,
								offset: 388
							},
							source: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
						},
						body: {
							type: 2,
							start: 0,
							end: 388,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 389,
									offset: 388
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 388,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 389,
										offset: 388
									}
								}
							}],
							static: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
						}
					}
				},
				resultsTable: {
					title: {
						type: 0,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							},
							source: "Sample Results"
						},
						body: {
							type: 2,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 14,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 15,
										offset: 14
									}
								}
							}],
							static: "Sample Results"
						}
					},
					library: {
						type: 0,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							},
							source: "Library"
						},
						body: {
							type: 2,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 7,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 8,
										offset: 7
									}
								}
							}],
							static: "Library"
						}
					},
					bundleSize: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Bundle Size"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Bundle Size"
						}
					},
					lookupTime: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Lookup Time"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Lookup Time"
						}
					},
					lazyLoading: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "Lazy Loading"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "Lazy Loading"
						}
					},
					yes: {
						type: 0,
						start: 0,
						end: 3,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 4,
								offset: 3
							},
							source: "Yes"
						},
						body: {
							type: 2,
							start: 0,
							end: 3,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 4,
									offset: 3
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 3,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 4,
										offset: 3
									}
								}
							}],
							static: "Yes"
						}
					},
					manual: {
						type: 0,
						start: 0,
						end: 6,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 7,
								offset: 6
							},
							source: "Manual"
						},
						body: {
							type: 2,
							start: 0,
							end: 6,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 7,
									offset: 6
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 6,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 7,
										offset: 6
									}
								}
							}],
							static: "Manual"
						}
					},
					builtIn: {
						type: 0,
						start: 0,
						end: 8,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 9,
								offset: 8
							},
							source: "Built-in"
						},
						body: {
							type: 2,
							start: 0,
							end: 8,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 9,
									offset: 8
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 8,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 9,
										offset: 8
									}
								}
							}],
							static: "Built-in"
						}
					}
				}
			},
			about: {
				header: {
					title: {
						type: 0,
						start: 0,
						end: 20,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 21,
								offset: 20
							},
							source: "About This Benchmark"
						},
						body: {
							type: 2,
							start: 0,
							end: 20,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 21,
									offset: 20
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 20,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 21,
										offset: 20
									}
								}
							}],
							static: "About This Benchmark"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 224,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 225,
								offset: 224
							},
							source: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
						},
						body: {
							type: 2,
							start: 0,
							end: 224,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 225,
									offset: 224
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 224,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 225,
										offset: 224
									}
								}
							}],
							static: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
						}
					}
				},
				grid: {
					whyExistsTitle: {
						type: 0,
						start: 0,
						end: 15,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 16,
								offset: 15
							},
							source: "Why This Exists"
						},
						body: {
							type: 2,
							start: 0,
							end: 15,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 16,
									offset: 15
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 15,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 16,
										offset: 15
									}
								}
							}],
							static: "Why This Exists"
						}
					},
					whyExistsDesc: {
						type: 0,
						start: 0,
						end: 401,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 402,
								offset: 401
							},
							source: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data."
						},
						body: {
							type: 2,
							start: 0,
							end: 401,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 402,
									offset: 401
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 401,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 402,
										offset: 401
									}
								}
							}],
							static: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data."
						}
					},
					methodologyTitle: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Methodology"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Methodology"
						}
					},
					methodologyDesc: {
						type: 0,
						start: 0,
						end: 301,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 302,
								offset: 301
							},
							source: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
						},
						body: {
							type: 2,
							start: 0,
							end: 301,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 302,
									offset: 301
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 301,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 302,
										offset: 301
									}
								}
							}],
							static: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
						}
					}
				},
				whatWeMeasure: {
					title: {
						type: 0,
						start: 0,
						end: 15,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 16,
								offset: 15
							},
							source: "What We Measure"
						},
						body: {
							type: 2,
							start: 0,
							end: 15,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 16,
									offset: 15
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 15,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 16,
										offset: 15
									}
								}
							}],
							static: "What We Measure"
						}
					},
					bundleSizeImpact: {
						type: 0,
						start: 0,
						end: 18,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 19,
								offset: 18
							},
							source: "Bundle size impact"
						},
						body: {
							type: 2,
							start: 0,
							end: 18,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 19,
									offset: 18
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 18,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 19,
										offset: 18
									}
								}
							}],
							static: "Bundle size impact"
						}
					},
					bundleSizeImpactDesc: {
						type: 0,
						start: 0,
						end: 161,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 162,
								offset: 161
							},
							source: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks."
						},
						body: {
							type: 2,
							start: 0,
							end: 161,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 162,
									offset: 161
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 161,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 162,
										offset: 161
									}
								}
							}],
							static: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks."
						}
					},
					renderingOverhead: {
						type: 0,
						start: 0,
						end: 18,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 19,
								offset: 18
							},
							source: "Rendering overhead"
						},
						body: {
							type: 2,
							start: 0,
							end: 18,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 19,
									offset: 18
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 18,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 19,
										offset: 18
									}
								}
							}],
							static: "Rendering overhead"
						}
					},
					renderingOverheadDesc: {
						type: 0,
						start: 0,
						end: 186,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 187,
								offset: 186
							},
							source: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree."
						},
						body: {
							type: 2,
							start: 0,
							end: 186,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 187,
									offset: 186
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 186,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 187,
										offset: 186
									}
								}
							}],
							static: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree."
						}
					},
					hydrationCost: {
						type: 0,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							},
							source: "Hydration cost"
						},
						body: {
							type: 2,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 14,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 15,
										offset: 14
									}
								}
							}],
							static: "Hydration cost"
						}
					},
					hydrationCostDesc: {
						type: 0,
						start: 0,
						end: 165,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 166,
								offset: 165
							},
							source: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive."
						},
						body: {
							type: 2,
							start: 0,
							end: 165,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 166,
									offset: 165
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 165,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 166,
										offset: 165
									}
								}
							}],
							static: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive."
						}
					},
					lazyLoading: {
						type: 0,
						start: 0,
						end: 26,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 27,
								offset: 26
							},
							source: "Lazy loading effectiveness"
						},
						body: {
							type: 2,
							start: 0,
							end: 26,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 27,
									offset: 26
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 26,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 27,
										offset: 26
									}
								}
							}],
							static: "Lazy loading effectiveness"
						}
					},
					lazyLoadingDesc: {
						type: 0,
						start: 0,
						end: 167,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 168,
								offset: 167
							},
							source: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity)."
						},
						body: {
							type: 2,
							start: 0,
							end: 167,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 168,
									offset: 167
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 167,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 168,
										offset: 167
									}
								}
							}],
							static: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity)."
						}
					},
					localeSwitch: {
						type: 0,
						start: 0,
						end: 19,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 20,
								offset: 19
							},
							source: "Locale switch speed"
						},
						body: {
							type: 2,
							start: 0,
							end: 19,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 20,
									offset: 19
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 19,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 20,
										offset: 19
									}
								}
							}],
							static: "Locale switch speed"
						}
					},
					localeSwitchDesc: {
						type: 0,
						start: 0,
						end: 153,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 154,
								offset: 153
							},
							source: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM."
						},
						body: {
							type: 2,
							start: 0,
							end: 153,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 154,
									offset: 153
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 153,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 154,
										offset: 153
									}
								}
							}],
							static: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM."
						}
					}
				}
			},
			blog: {
				header: {
					title: {
						type: 0,
						start: 0,
						end: 4,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 5,
								offset: 4
							},
							source: "Blog"
						},
						body: {
							type: 2,
							start: 0,
							end: 4,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 5,
									offset: 4
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 4,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 5,
										offset: 4
									}
								}
							}],
							static: "Blog"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 58,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 59,
								offset: 58
							},
							source: "Insights, tutorials, and analysis from the i18n community."
						},
						body: {
							type: 2,
							start: 0,
							end: 58,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 59,
									offset: 58
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 58,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 59,
										offset: 58
									}
								}
							}],
							static: "Insights, tutorials, and analysis from the i18n community."
						}
					}
				},
				list: {
					readMore: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Read More →"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Read More →"
						}
					},
					post1Title: {
						type: 0,
						start: 0,
						end: 45,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 46,
								offset: 45
							},
							source: "Comparing i18n Libraries in 2026: A Deep Dive"
						},
						body: {
							type: 2,
							start: 0,
							end: 45,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 46,
									offset: 45
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 45,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 46,
										offset: 45
									}
								}
							}],
							static: "Comparing i18n Libraries in 2026: A Deep Dive"
						}
					},
					post1Date: {
						type: 0,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							},
							source: "March 15, 2026"
						},
						body: {
							type: 2,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 14,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 15,
										offset: 14
									}
								}
							}],
							static: "March 15, 2026"
						}
					},
					post1Excerpt: {
						type: 0,
						start: 0,
						end: 127,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 128,
								offset: 127
							},
							source: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results."
						},
						body: {
							type: 2,
							start: 0,
							end: 127,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 128,
									offset: 127
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 127,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 128,
										offset: 127
									}
								}
							}],
							static: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results."
						}
					},
					post1Category: {
						type: 0,
						start: 0,
						end: 9,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 10,
								offset: 9
							},
							source: "Benchmark"
						},
						body: {
							type: 2,
							start: 0,
							end: 9,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 10,
									offset: 9
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 9,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 10,
										offset: 9
									}
								}
							}],
							static: "Benchmark"
						}
					},
					post2Title: {
						type: 0,
						start: 0,
						end: 37,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 38,
								offset: 37
							},
							source: "How to Reduce Your i18n Bundle by 60%"
						},
						body: {
							type: 2,
							start: 0,
							end: 37,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 38,
									offset: 37
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 37,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 38,
										offset: 37
									}
								}
							}],
							static: "How to Reduce Your i18n Bundle by 60%"
						}
					},
					post2Date: {
						type: 0,
						start: 0,
						end: 13,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 14,
								offset: 13
							},
							source: "March 8, 2026"
						},
						body: {
							type: 2,
							start: 0,
							end: 13,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 14,
									offset: 13
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 13,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 14,
										offset: 13
									}
								}
							}],
							static: "March 8, 2026"
						}
					},
					post2Excerpt: {
						type: 0,
						start: 0,
						end: 127,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 128,
								offset: 127
							},
							source: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations."
						},
						body: {
							type: 2,
							start: 0,
							end: 127,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 128,
									offset: 127
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 127,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 128,
										offset: 127
									}
								}
							}],
							static: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations."
						}
					},
					post2Category: {
						type: 0,
						start: 0,
						end: 8,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 9,
								offset: 8
							},
							source: "Tutorial"
						},
						body: {
							type: 2,
							start: 0,
							end: 8,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 9,
									offset: 8
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 8,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 9,
										offset: 8
									}
								}
							}],
							static: "Tutorial"
						}
					},
					post3Title: {
						type: 0,
						start: 0,
						end: 42,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 43,
								offset: 42
							},
							source: "The State of Internationalization in React"
						},
						body: {
							type: 2,
							start: 0,
							end: 42,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 43,
									offset: 42
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 42,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 43,
										offset: 42
									}
								}
							}],
							static: "The State of Internationalization in React"
						}
					},
					post3Date: {
						type: 0,
						start: 0,
						end: 17,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 18,
								offset: 17
							},
							source: "February 28, 2026"
						},
						body: {
							type: 2,
							start: 0,
							end: 17,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 18,
									offset: 17
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 17,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 18,
										offset: 17
									}
								}
							}],
							static: "February 28, 2026"
						}
					},
					post3Excerpt: {
						type: 0,
						start: 0,
						end: 114,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 115,
								offset: 114
							},
							source: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences."
						},
						body: {
							type: 2,
							start: 0,
							end: 114,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 115,
									offset: 114
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 114,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 115,
										offset: 114
									}
								}
							}],
							static: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences."
						}
					},
					post3Category: {
						type: 0,
						start: 0,
						end: 8,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 9,
								offset: 8
							},
							source: "Analysis"
						},
						body: {
							type: 2,
							start: 0,
							end: 8,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 9,
									offset: 8
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 8,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 9,
										offset: 8
									}
								}
							}],
							static: "Analysis"
						}
					},
					post4Title: {
						type: 0,
						start: 0,
						end: 38,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 39,
								offset: 38
							},
							source: "Migrating from react-i18next to Lingui"
						},
						body: {
							type: 2,
							start: 0,
							end: 38,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 39,
									offset: 38
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 38,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 39,
										offset: 38
									}
								}
							}],
							static: "Migrating from react-i18next to Lingui"
						}
					},
					post4Date: {
						type: 0,
						start: 0,
						end: 17,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 18,
								offset: 17
							},
							source: "February 15, 2026"
						},
						body: {
							type: 2,
							start: 0,
							end: 17,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 18,
									offset: 17
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 17,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 18,
										offset: 17
									}
								}
							}],
							static: "February 15, 2026"
						}
					},
					post4Excerpt: {
						type: 0,
						start: 0,
						end: 109,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 110,
								offset: 109
							},
							source: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui."
						},
						body: {
							type: 2,
							start: 0,
							end: 109,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 110,
									offset: 109
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 109,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 110,
										offset: 109
									}
								}
							}],
							static: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui."
						}
					},
					post4Category: {
						type: 0,
						start: 0,
						end: 8,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 9,
								offset: 8
							},
							source: "Tutorial"
						},
						body: {
							type: 2,
							start: 0,
							end: 8,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 9,
									offset: 8
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 8,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 9,
										offset: 8
									}
								}
							}],
							static: "Tutorial"
						}
					},
					post5Title: {
						type: 0,
						start: 0,
						end: 41,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 42,
								offset: 41
							},
							source: "Server Components and i18n: What Changes?"
						},
						body: {
							type: 2,
							start: 0,
							end: 41,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 42,
									offset: 41
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 41,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 42,
										offset: 41
									}
								}
							}],
							static: "Server Components and i18n: What Changes?"
						}
					},
					post5Date: {
						type: 0,
						start: 0,
						end: 16,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 17,
								offset: 16
							},
							source: "February 1, 2026"
						},
						body: {
							type: 2,
							start: 0,
							end: 16,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 17,
									offset: 16
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 16,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 17,
										offset: 16
									}
								}
							}],
							static: "February 1, 2026"
						}
					},
					post5Excerpt: {
						type: 0,
						start: 0,
						end: 120,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 121,
								offset: 120
							},
							source: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices."
						},
						body: {
							type: 2,
							start: 0,
							end: 120,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 121,
									offset: 120
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 120,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 121,
										offset: 120
									}
								}
							}],
							static: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices."
						}
					},
					post5Category: {
						type: 0,
						start: 0,
						end: 8,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 9,
								offset: 8
							},
							source: "Analysis"
						},
						body: {
							type: 2,
							start: 0,
							end: 8,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 9,
									offset: 8
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 8,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 9,
										offset: 8
									}
								}
							}],
							static: "Analysis"
						}
					},
					post6Title: {
						type: 0,
						start: 0,
						end: 34,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 35,
								offset: 34
							},
							source: "Benchmark Methodology: How We Test"
						},
						body: {
							type: 2,
							start: 0,
							end: 34,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 35,
									offset: 34
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 34,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 35,
										offset: 34
									}
								}
							}],
							static: "Benchmark Methodology: How We Test"
						}
					},
					post6Date: {
						type: 0,
						start: 0,
						end: 16,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 17,
								offset: 16
							},
							source: "January 20, 2026"
						},
						body: {
							type: 2,
							start: 0,
							end: 16,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 17,
									offset: 16
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 16,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 17,
										offset: 16
									}
								}
							}],
							static: "January 20, 2026"
						}
					},
					post6Excerpt: {
						type: 0,
						start: 0,
						end: 122,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 123,
								offset: 122
							},
							source: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility."
						},
						body: {
							type: 2,
							start: 0,
							end: 122,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 123,
									offset: 122
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 122,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 123,
										offset: 122
									}
								}
							}],
							static: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility."
						}
					},
					post6Category: {
						type: 0,
						start: 0,
						end: 4,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 5,
								offset: 4
							},
							source: "Meta"
						},
						body: {
							type: 2,
							start: 0,
							end: 4,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 5,
									offset: 4
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 4,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 5,
										offset: 4
									}
								}
							}],
							static: "Meta"
						}
					}
				}
			},
			careers: {
				header: {
					title: {
						type: 0,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							},
							source: "Careers"
						},
						body: {
							type: 2,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 7,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 8,
										offset: 7
									}
								}
							}],
							static: "Careers"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 148,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 149,
								offset: 148
							},
							source: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
						},
						body: {
							type: 2,
							start: 0,
							end: 148,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 149,
									offset: 148
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 148,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 149,
										offset: 148
									}
								}
							}],
							static: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
						}
					}
				},
				benefits: {
					remoteLabel: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "Remote-first"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "Remote-first"
						}
					},
					remoteValue: {
						type: 0,
						start: 0,
						end: 31,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 32,
								offset: 31
							},
							source: "Work from anywhere in the world"
						},
						body: {
							type: 2,
							start: 0,
							end: 31,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 32,
									offset: 31
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 31,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 32,
										offset: 31
									}
								}
							}],
							static: "Work from anywhere in the world"
						}
					},
					payLabel: {
						type: 0,
						start: 0,
						end: 15,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 16,
								offset: 15
							},
							source: "Competitive pay"
						},
						body: {
							type: 2,
							start: 0,
							end: 15,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 16,
									offset: 15
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 15,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 16,
										offset: 15
									}
								}
							}],
							static: "Competitive pay"
						}
					},
					payValue: {
						type: 0,
						start: 0,
						end: 26,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 27,
								offset: 26
							},
							source: "Top-of-market compensation"
						},
						body: {
							type: 2,
							start: 0,
							end: 26,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 27,
									offset: 26
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 26,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 27,
										offset: 26
									}
								}
							}],
							static: "Top-of-market compensation"
						}
					},
					ossLabel: {
						type: 0,
						start: 0,
						end: 16,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 17,
								offset: 16
							},
							source: "Open source time"
						},
						body: {
							type: 2,
							start: 0,
							end: 16,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 17,
									offset: 16
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 16,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 17,
										offset: 16
									}
								}
							}],
							static: "Open source time"
						}
					},
					ossValue: {
						type: 0,
						start: 0,
						end: 30,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 31,
								offset: 30
							},
							source: "20% time for OSS contributions"
						},
						body: {
							type: 2,
							start: 0,
							end: 30,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 31,
									offset: 30
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 30,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 31,
										offset: 30
									}
								}
							}],
							static: "20% time for OSS contributions"
						}
					}
				},
				openPositions: {
					title: {
						type: 0,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							},
							source: "Open Positions"
						},
						body: {
							type: 2,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 14,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 15,
										offset: 14
									}
								}
							}],
							static: "Open Positions"
						}
					},
					applyNow: {
						type: 0,
						start: 0,
						end: 9,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 10,
								offset: 9
							},
							source: "Apply Now"
						},
						body: {
							type: 2,
							start: 0,
							end: 9,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 10,
									offset: 9
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 9,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 10,
										offset: 9
									}
								}
							}],
							static: "Apply Now"
						}
					},
					remote: {
						type: 0,
						start: 0,
						end: 6,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 7,
								offset: 6
							},
							source: "Remote"
						},
						body: {
							type: 2,
							start: 0,
							end: 6,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 7,
									offset: 6
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 6,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 7,
										offset: 6
									}
								}
							}],
							static: "Remote"
						}
					},
					fullTime: {
						type: 0,
						start: 0,
						end: 9,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 10,
								offset: 9
							},
							source: "Full-time"
						},
						body: {
							type: 2,
							start: 0,
							end: 9,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 10,
									offset: 9
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 9,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 10,
										offset: 9
									}
								}
							}],
							static: "Full-time"
						}
					},
					partTime: {
						type: 0,
						start: 0,
						end: 9,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 10,
								offset: 9
							},
							source: "Part-time"
						},
						body: {
							type: 2,
							start: 0,
							end: 9,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 10,
									offset: 9
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 9,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 10,
										offset: 9
									}
								}
							}],
							static: "Part-time"
						}
					},
					engineering: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Engineering"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Engineering"
						}
					},
					documentation: {
						type: 0,
						start: 0,
						end: 13,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 14,
								offset: 13
							},
							source: "Documentation"
						},
						body: {
							type: 2,
							start: 0,
							end: 13,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 14,
									offset: 13
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 13,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 14,
										offset: 13
									}
								}
							}],
							static: "Documentation"
						}
					},
					community: {
						type: 0,
						start: 0,
						end: 9,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 10,
								offset: 9
							},
							source: "Community"
						},
						body: {
							type: 2,
							start: 0,
							end: 9,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 10,
									offset: 9
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 9,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 10,
										offset: 9
									}
								}
							}],
							static: "Community"
						}
					},
					sfRemote: {
						type: 0,
						start: 0,
						end: 22,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 23,
								offset: 22
							},
							source: "San Francisco / Remote"
						},
						body: {
							type: 2,
							start: 0,
							end: 22,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 23,
									offset: 22
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 22,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 23,
										offset: 22
									}
								}
							}],
							static: "San Francisco / Remote"
						}
					},
					frontendTitle: {
						type: 0,
						start: 0,
						end: 24,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 25,
								offset: 24
							},
							source: "Senior Frontend Engineer"
						},
						body: {
							type: 2,
							start: 0,
							end: 24,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 25,
									offset: 24
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 24,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 25,
										offset: 24
									}
								}
							}],
							static: "Senior Frontend Engineer"
						}
					},
					frontendDesc: {
						type: 0,
						start: 0,
						end: 100,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 101,
								offset: 100
							},
							source: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite."
						},
						body: {
							type: 2,
							start: 0,
							end: 100,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 101,
									offset: 100
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 100,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 101,
										offset: 100
									}
								}
							}],
							static: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite."
						}
					},
					backendTitle: {
						type: 0,
						start: 0,
						end: 16,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 17,
								offset: 16
							},
							source: "Backend Engineer"
						},
						body: {
							type: 2,
							start: 0,
							end: 16,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 17,
									offset: 16
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 16,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 17,
										offset: 16
									}
								}
							}],
							static: "Backend Engineer"
						}
					},
					backendDesc: {
						type: 0,
						start: 0,
						end: 98,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 99,
								offset: 98
							},
							source: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily."
						},
						body: {
							type: 2,
							start: 0,
							end: 98,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 99,
									offset: 98
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 98,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 99,
										offset: 98
									}
								}
							}],
							static: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily."
						}
					},
					writerTitle: {
						type: 0,
						start: 0,
						end: 16,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 17,
								offset: 16
							},
							source: "Technical Writer"
						},
						body: {
							type: 2,
							start: 0,
							end: 16,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 17,
									offset: 16
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 16,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 17,
										offset: 16
									}
								}
							}],
							static: "Technical Writer"
						}
					},
					writerDesc: {
						type: 0,
						start: 0,
						end: 89,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 90,
								offset: 89
							},
							source: "Create comprehensive guides, API references, and tutorials for our benchmarking platform."
						},
						body: {
							type: 2,
							start: 0,
							end: 89,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 90,
									offset: 89
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 89,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 90,
										offset: 89
									}
								}
							}],
							static: "Create comprehensive guides, API references, and tutorials for our benchmarking platform."
						}
					},
					devrelTitle: {
						type: 0,
						start: 0,
						end: 15,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 16,
								offset: 15
							},
							source: "DevRel Engineer"
						},
						body: {
							type: 2,
							start: 0,
							end: 15,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 16,
									offset: 15
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 15,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 16,
										offset: 15
									}
								}
							}],
							static: "DevRel Engineer"
						}
					},
					devrelDesc: {
						type: 0,
						start: 0,
						end: 99,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 100,
								offset: 99
							},
							source: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions."
						},
						body: {
							type: 2,
							start: 0,
							end: 99,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 100,
									offset: 99
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 99,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 100,
										offset: 99
									}
								}
							}],
							static: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions."
						}
					},
					qaTitle: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "QA Engineer"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "QA Engineer"
						}
					},
					qaDesc: {
						type: 0,
						start: 0,
						end: 97,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 98,
								offset: 97
							},
							source: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation."
						},
						body: {
							type: 2,
							start: 0,
							end: 97,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 98,
									offset: 97
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 97,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 98,
										offset: 97
									}
								}
							}],
							static: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation."
						}
					}
				}
			},
			contact: {
				header: {
					title: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "Get in Touch"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "Get in Touch"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 78,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 79,
								offset: 78
							},
							source: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
						},
						body: {
							type: 2,
							start: 0,
							end: 78,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 79,
									offset: 78
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 78,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 79,
										offset: 78
									}
								}
							}],
							static: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
						}
					}
				},
				form: {
					name: {
						type: 0,
						start: 0,
						end: 4,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 5,
								offset: 4
							},
							source: "Name"
						},
						body: {
							type: 2,
							start: 0,
							end: 4,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 5,
									offset: 4
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 4,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 5,
										offset: 4
									}
								}
							}],
							static: "Name"
						}
					},
					yourName: {
						type: 0,
						start: 0,
						end: 9,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 10,
								offset: 9
							},
							source: "Your name"
						},
						body: {
							type: 2,
							start: 0,
							end: 9,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 10,
									offset: 9
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 9,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 10,
										offset: 9
									}
								}
							}],
							static: "Your name"
						}
					},
					email: {
						type: 0,
						start: 0,
						end: 5,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 6,
								offset: 5
							},
							source: "Email"
						},
						body: {
							type: 2,
							start: 0,
							end: 5,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 6,
									offset: 5
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 5,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 6,
										offset: 5
									}
								}
							}],
							static: "Email"
						}
					},
					emailPlaceholder: {
						type: 0,
						start: 0,
						end: 19,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 20,
								offset: 19
							},
							source: "you{'@'}example.com"
						},
						body: {
							type: 2,
							start: 0,
							end: 19,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 20,
									offset: 19
								}
							},
							items: [
								{
									type: 3,
									start: 0,
									end: 3,
									loc: {
										start: {
											line: 1,
											column: 1,
											offset: 0
										},
										end: {
											line: 1,
											column: 4,
											offset: 3
										}
									}
								},
								{
									type: 9,
									start: 3,
									end: 8,
									loc: {
										start: {
											line: 1,
											column: 4,
											offset: 3
										},
										end: {
											line: 1,
											column: 9,
											offset: 8
										}
									}
								},
								{
									type: 3,
									start: 8,
									end: 19,
									loc: {
										start: {
											line: 1,
											column: 9,
											offset: 8
										},
										end: {
											line: 1,
											column: 20,
											offset: 19
										}
									}
								}
							],
							static: "you@example.com"
						}
					},
					topic: {
						type: 0,
						start: 0,
						end: 5,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 6,
								offset: 5
							},
							source: "Topic"
						},
						body: {
							type: 2,
							start: 0,
							end: 5,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 6,
									offset: 5
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 5,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 6,
										offset: 5
									}
								}
							}],
							static: "Topic"
						}
					},
					bugReport: {
						type: 0,
						start: 0,
						end: 10,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 11,
								offset: 10
							},
							source: "Bug Report"
						},
						body: {
							type: 2,
							start: 0,
							end: 10,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 11,
									offset: 10
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 10,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 11,
										offset: 10
									}
								}
							}],
							static: "Bug Report"
						}
					},
					newBenchmarkIdea: {
						type: 0,
						start: 0,
						end: 18,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 19,
								offset: 18
							},
							source: "New Benchmark Idea"
						},
						body: {
							type: 2,
							start: 0,
							end: 18,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 19,
									offset: 18
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 18,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 19,
										offset: 18
									}
								}
							}],
							static: "New Benchmark Idea"
						}
					},
					methodologyQuestion: {
						type: 0,
						start: 0,
						end: 20,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 21,
								offset: 20
							},
							source: "Methodology Question"
						},
						body: {
							type: 2,
							start: 0,
							end: 20,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 21,
									offset: 20
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 20,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 21,
										offset: 20
									}
								}
							}],
							static: "Methodology Question"
						}
					},
					contribution: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "Contribution"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "Contribution"
						}
					},
					other: {
						type: 0,
						start: 0,
						end: 5,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 6,
								offset: 5
							},
							source: "Other"
						},
						body: {
							type: 2,
							start: 0,
							end: 5,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 6,
									offset: 5
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 5,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 6,
										offset: 5
									}
								}
							}],
							static: "Other"
						}
					},
					message: {
						type: 0,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							},
							source: "Message"
						},
						body: {
							type: 2,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 7,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 8,
										offset: 7
									}
								}
							}],
							static: "Message"
						}
					},
					messagePlaceholder: {
						type: 0,
						start: 0,
						end: 33,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 34,
								offset: 33
							},
							source: "Describe your question or idea..."
						},
						body: {
							type: 2,
							start: 0,
							end: 33,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 34,
									offset: 33
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 33,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 34,
										offset: 33
									}
								}
							}],
							static: "Describe your question or idea..."
						}
					},
					sendMessage: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "Send Message"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "Send Message"
						}
					}
				}
			},
			faq: {
				header: {
					title: {
						type: 0,
						start: 0,
						end: 26,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 27,
								offset: 26
							},
							source: "Frequently Asked Questions"
						},
						body: {
							type: 2,
							start: 0,
							end: 26,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 27,
									offset: 26
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 26,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 27,
										offset: 26
									}
								}
							}],
							static: "Frequently Asked Questions"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 49,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 50,
								offset: 49
							},
							source: "Everything you need to know about i18n Benchmark."
						},
						body: {
							type: 2,
							start: 0,
							end: 49,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 50,
									offset: 49
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 49,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 50,
										offset: 49
									}
								}
							}],
							static: "Everything you need to know about i18n Benchmark."
						}
					}
				},
				list: {
					q1: {
						type: 0,
						start: 0,
						end: 23,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 24,
								offset: 23
							},
							source: "What is i18n Benchmark?"
						},
						body: {
							type: 2,
							start: 0,
							end: 23,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 24,
									offset: 23
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 23,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 24,
										offset: 23
									}
								}
							}],
							static: "What is i18n Benchmark?"
						}
					},
					a1: {
						type: 0,
						start: 0,
						end: 206,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 207,
								offset: 206
							},
							source: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications."
						},
						body: {
							type: 2,
							start: 0,
							end: 206,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 207,
									offset: 206
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 206,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 207,
										offset: 206
									}
								}
							}],
							static: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications."
						}
					},
					q2: {
						type: 0,
						start: 0,
						end: 29,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 30,
								offset: 29
							},
							source: "How are benchmarks conducted?"
						},
						body: {
							type: 2,
							start: 0,
							end: 29,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 30,
									offset: 29
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 29,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 30,
										offset: 29
									}
								}
							}],
							static: "How are benchmarks conducted?"
						}
					},
					a2: {
						type: 0,
						start: 0,
						end: 228,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 229,
								offset: 228
							},
							source: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository."
						},
						body: {
							type: 2,
							start: 0,
							end: 228,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 229,
									offset: 228
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 228,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 229,
										offset: 228
									}
								}
							}],
							static: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository."
						}
					},
					q3: {
						type: 0,
						start: 0,
						end: 40,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 41,
								offset: 40
							},
							source: "Which libraries are currently supported?"
						},
						body: {
							type: 2,
							start: 0,
							end: 40,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 41,
									offset: 40
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 40,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 41,
										offset: 40
									}
								}
							}],
							static: "Which libraries are currently supported?"
						}
					},
					a3: {
						type: 0,
						start: 0,
						end: 165,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 166,
								offset: 165
							},
							source: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, {'@'}fluent/react, and Tolgee."
						},
						body: {
							type: 2,
							start: 0,
							end: 165,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 166,
									offset: 165
								}
							},
							items: [
								{
									type: 3,
									start: 0,
									end: 135,
									loc: {
										start: {
											line: 1,
											column: 1,
											offset: 0
										},
										end: {
											line: 1,
											column: 136,
											offset: 135
										}
									}
								},
								{
									type: 9,
									start: 135,
									end: 140,
									loc: {
										start: {
											line: 1,
											column: 136,
											offset: 135
										},
										end: {
											line: 1,
											column: 141,
											offset: 140
										}
									}
								},
								{
									type: 3,
									start: 140,
									end: 165,
									loc: {
										start: {
											line: 1,
											column: 141,
											offset: 140
										},
										end: {
											line: 1,
											column: 166,
											offset: 165
										}
									}
								}
							],
							static: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee."
						}
					},
					q4: {
						type: 0,
						start: 0,
						end: 31,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 32,
								offset: 31
							},
							source: "Can I submit my own benchmarks?"
						},
						body: {
							type: 2,
							start: 0,
							end: 31,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 32,
									offset: 31
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 31,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 32,
										offset: 31
									}
								}
							}],
							static: "Can I submit my own benchmarks?"
						}
					},
					a4: {
						type: 0,
						start: 0,
						end: 205,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 206,
								offset: 205
							},
							source: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions."
						},
						body: {
							type: 2,
							start: 0,
							end: 205,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 206,
									offset: 205
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 205,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 206,
										offset: 205
									}
								}
							}],
							static: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions."
						}
					},
					q5: {
						type: 0,
						start: 0,
						end: 33,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 34,
								offset: 33
							},
							source: "How often are benchmarks updated?"
						},
						body: {
							type: 2,
							start: 0,
							end: 33,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 34,
									offset: 33
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 33,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 34,
										offset: 33
									}
								}
							}],
							static: "How often are benchmarks updated?"
						}
					},
					a5: {
						type: 0,
						start: 0,
						end: 147,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 148,
								offset: 147
							},
							source: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle."
						},
						body: {
							type: 2,
							start: 0,
							end: 147,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 148,
									offset: 147
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 147,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 148,
										offset: 147
									}
								}
							}],
							static: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle."
						}
					},
					q6: {
						type: 0,
						start: 0,
						end: 21,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 22,
								offset: 21
							},
							source: "Is the data reliable?"
						},
						body: {
							type: 2,
							start: 0,
							end: 21,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 22,
									offset: 21
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 21,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 22,
										offset: 21
									}
								}
							}],
							static: "Is the data reliable?"
						}
					},
					a6: {
						type: 0,
						start: 0,
						end: 183,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 184,
								offset: 183
							},
							source: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency."
						},
						body: {
							type: 2,
							start: 0,
							end: 183,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 184,
									offset: 183
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 183,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 184,
										offset: 183
									}
								}
							}],
							static: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency."
						}
					},
					q7: {
						type: 0,
						start: 0,
						end: 33,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 34,
								offset: 33
							},
							source: "Do you offer consulting services?"
						},
						body: {
							type: 2,
							start: 0,
							end: 33,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 34,
									offset: 33
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 33,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 34,
										offset: 33
									}
								}
							}],
							static: "Do you offer consulting services?"
						}
					},
					a7: {
						type: 0,
						start: 0,
						end: 184,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 185,
								offset: 184
							},
							source: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints."
						},
						body: {
							type: 2,
							start: 0,
							end: 184,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 185,
									offset: 184
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 184,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 185,
										offset: 184
									}
								}
							}],
							static: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints."
						}
					},
					q8: {
						type: 0,
						start: 0,
						end: 21,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 22,
								offset: 21
							},
							source: "How can I contribute?"
						},
						body: {
							type: 2,
							start: 0,
							end: 21,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 22,
									offset: 21
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 21,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 22,
										offset: 21
									}
								}
							}],
							static: "How can I contribute?"
						}
					},
					a8: {
						type: 0,
						start: 0,
						end: 180,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 181,
								offset: 180
							},
							source: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
						},
						body: {
							type: 2,
							start: 0,
							end: 180,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 181,
									offset: 180
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 180,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 181,
										offset: 180
									}
								}
							}],
							static: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
						}
					}
				}
			},
			pricing: {
				header: {
					title: {
						type: 0,
						start: 0,
						end: 27,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 28,
								offset: 27
							},
							source: "Simple, Transparent Pricing"
						},
						body: {
							type: 2,
							start: 0,
							end: 27,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 28,
									offset: 27
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 27,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 28,
										offset: 27
									}
								}
							}],
							static: "Simple, Transparent Pricing"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 52,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 53,
								offset: 52
							},
							source: "Choose the plan that fits your team. No hidden fees."
						},
						body: {
							type: 2,
							start: 0,
							end: 52,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 53,
									offset: 52
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 52,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 53,
										offset: 52
									}
								}
							}],
							static: "Choose the plan that fits your team. No hidden fees."
						}
					}
				},
				tiers: {
					starterName: {
						type: 0,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							},
							source: "Starter"
						},
						body: {
							type: 2,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 7,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 8,
										offset: 7
									}
								}
							}],
							static: "Starter"
						}
					},
					starterPrice: {
						type: 0,
						start: 0,
						end: 2,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 3,
								offset: 2
							},
							source: "$0"
						},
						body: {
							type: 2,
							start: 0,
							end: 2,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 3,
									offset: 2
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 2,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 3,
										offset: 2
									}
								}
							}],
							static: "$0"
						}
					},
					starterPeriod: {
						type: 0,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							},
							source: "forever"
						},
						body: {
							type: 2,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 7,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 8,
										offset: 7
									}
								}
							}],
							static: "forever"
						}
					},
					starterFeature1: {
						type: 0,
						start: 0,
						end: 20,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 21,
								offset: 20
							},
							source: "5 benchmark runs/day"
						},
						body: {
							type: 2,
							start: 0,
							end: 20,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 21,
									offset: 20
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 20,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 21,
										offset: 20
									}
								}
							}],
							static: "5 benchmark runs/day"
						}
					},
					starterFeature2: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "3 libraries"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "3 libraries"
						}
					},
					starterFeature3: {
						type: 0,
						start: 0,
						end: 17,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 18,
								offset: 17
							},
							source: "Community support"
						},
						body: {
							type: 2,
							start: 0,
							end: 17,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 18,
									offset: 17
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 17,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 18,
										offset: 17
									}
								}
							}],
							static: "Community support"
						}
					},
					starterFeature4: {
						type: 0,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							},
							source: "Public results"
						},
						body: {
							type: 2,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 14,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 15,
										offset: 14
									}
								}
							}],
							static: "Public results"
						}
					},
					proName: {
						type: 0,
						start: 0,
						end: 3,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 4,
								offset: 3
							},
							source: "Pro"
						},
						body: {
							type: 2,
							start: 0,
							end: 3,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 4,
									offset: 3
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 3,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 4,
										offset: 3
									}
								}
							}],
							static: "Pro"
						}
					},
					proPrice: {
						type: 0,
						start: 0,
						end: 3,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 4,
								offset: 3
							},
							source: "$29"
						},
						body: {
							type: 2,
							start: 0,
							end: 3,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 4,
									offset: 3
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 3,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 4,
										offset: 3
									}
								}
							}],
							static: "$29"
						}
					},
					proPeriod: {
						type: 0,
						start: 0,
						end: 6,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 7,
								offset: 6
							},
							source: "/month"
						},
						body: {
							type: 2,
							start: 0,
							end: 6,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 7,
									offset: 6
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 6,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 7,
										offset: 6
									}
								}
							}],
							static: "/month"
						}
					},
					proFeature1: {
						type: 0,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							},
							source: "Unlimited runs"
						},
						body: {
							type: 2,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 14,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 15,
										offset: 14
									}
								}
							}],
							static: "Unlimited runs"
						}
					},
					proFeature2: {
						type: 0,
						start: 0,
						end: 13,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 14,
								offset: 13
							},
							source: "All libraries"
						},
						body: {
							type: 2,
							start: 0,
							end: 13,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 14,
									offset: 13
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 13,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 14,
										offset: 13
									}
								}
							}],
							static: "All libraries"
						}
					},
					proFeature3: {
						type: 0,
						start: 0,
						end: 16,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 17,
								offset: 16
							},
							source: "Priority support"
						},
						body: {
							type: 2,
							start: 0,
							end: 16,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 17,
									offset: 16
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 16,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 17,
										offset: 16
									}
								}
							}],
							static: "Priority support"
						}
					},
					proFeature4: {
						type: 0,
						start: 0,
						end: 15,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 16,
								offset: 15
							},
							source: "Private results"
						},
						body: {
							type: 2,
							start: 0,
							end: 15,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 16,
									offset: 15
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 15,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 16,
										offset: 15
									}
								}
							}],
							static: "Private results"
						}
					},
					proFeature5: {
						type: 0,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							},
							source: "CI integration"
						},
						body: {
							type: 2,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 14,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 15,
										offset: 14
									}
								}
							}],
							static: "CI integration"
						}
					},
					proFeature6: {
						type: 0,
						start: 0,
						end: 15,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 16,
								offset: 15
							},
							source: "Historical data"
						},
						body: {
							type: 2,
							start: 0,
							end: 15,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 16,
									offset: 15
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 15,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 16,
										offset: 15
									}
								}
							}],
							static: "Historical data"
						}
					},
					enterpriseName: {
						type: 0,
						start: 0,
						end: 10,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 11,
								offset: 10
							},
							source: "Enterprise"
						},
						body: {
							type: 2,
							start: 0,
							end: 10,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 11,
									offset: 10
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 10,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 11,
										offset: 10
									}
								}
							}],
							static: "Enterprise"
						}
					},
					enterprisePrice: {
						type: 0,
						start: 0,
						end: 6,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 7,
								offset: 6
							},
							source: "Custom"
						},
						body: {
							type: 2,
							start: 0,
							end: 6,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 7,
									offset: 6
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 6,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 7,
										offset: 6
									}
								}
							}],
							static: "Custom"
						}
					},
					enterpriseFeature1: {
						type: 0,
						start: 0,
						end: 17,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 18,
								offset: 17
							},
							source: "Everything in Pro"
						},
						body: {
							type: 2,
							start: 0,
							end: 17,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 18,
									offset: 17
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 17,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 18,
										offset: 17
									}
								}
							}],
							static: "Everything in Pro"
						}
					},
					enterpriseFeature2: {
						type: 0,
						start: 0,
						end: 17,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 18,
								offset: 17
							},
							source: "On-premise option"
						},
						body: {
							type: 2,
							start: 0,
							end: 17,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 18,
									offset: 17
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 17,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 18,
										offset: 17
									}
								}
							}],
							static: "On-premise option"
						}
					},
					enterpriseFeature3: {
						type: 0,
						start: 0,
						end: 10,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 11,
								offset: 10
							},
							source: "SSO & SAML"
						},
						body: {
							type: 2,
							start: 0,
							end: 10,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 11,
									offset: 10
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 10,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 11,
										offset: 10
									}
								}
							}],
							static: "SSO & SAML"
						}
					},
					enterpriseFeature4: {
						type: 0,
						start: 0,
						end: 25,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 26,
								offset: 25
							},
							source: "Dedicated account manager"
						},
						body: {
							type: 2,
							start: 0,
							end: 25,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 26,
									offset: 25
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 25,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 26,
										offset: 25
									}
								}
							}],
							static: "Dedicated account manager"
						}
					},
					enterpriseFeature5: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Custom SLAs"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Custom SLAs"
						}
					},
					enterpriseFeature6: {
						type: 0,
						start: 0,
						end: 10,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 11,
								offset: 10
							},
							source: "Audit logs"
						},
						body: {
							type: 2,
							start: 0,
							end: 10,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 11,
									offset: 10
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 10,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 11,
										offset: 10
									}
								}
							}],
							static: "Audit logs"
						}
					},
					enterpriseFeature7: {
						type: 0,
						start: 0,
						end: 17,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 18,
								offset: 17
							},
							source: "Training sessions"
						},
						body: {
							type: 2,
							start: 0,
							end: 17,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 18,
									offset: 17
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 17,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 18,
										offset: 17
									}
								}
							}],
							static: "Training sessions"
						}
					},
					contactSales: {
						type: 0,
						start: 0,
						end: 13,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 14,
								offset: 13
							},
							source: "Contact Sales"
						},
						body: {
							type: 2,
							start: 0,
							end: 13,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 14,
									offset: 13
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 13,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 14,
										offset: 13
									}
								}
							}],
							static: "Contact Sales"
						}
					},
					getStarted: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Get Started"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Get Started"
						}
					}
				}
			},
			products: {
				header: {
					title: {
						type: 0,
						start: 0,
						end: 8,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 9,
								offset: 8
							},
							source: "Products"
						},
						body: {
							type: 2,
							start: 0,
							end: 8,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 9,
									offset: 8
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 8,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 9,
										offset: 8
									}
								}
							}],
							static: "Products"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 68,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 69,
								offset: 68
							},
							source: "Tools and services to streamline your internationalization workflow."
						},
						body: {
							type: 2,
							start: 0,
							end: 68,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 69,
									offset: 68
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 68,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 69,
										offset: 68
									}
								}
							}],
							static: "Tools and services to streamline your internationalization workflow."
						}
					}
				},
				grid: {
					learnMore: {
						type: 0,
						start: 0,
						end: 10,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 11,
								offset: 10
							},
							source: "Learn More"
						},
						body: {
							type: 2,
							start: 0,
							end: 10,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 11,
									offset: 10
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 10,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 11,
										offset: 10
									}
								}
							}],
							static: "Learn More"
						}
					},
					cliName: {
						type: 0,
						start: 0,
						end: 13,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 14,
								offset: 13
							},
							source: "Benchmark CLI"
						},
						body: {
							type: 2,
							start: 0,
							end: 13,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 14,
									offset: 13
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 13,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 14,
										offset: 13
									}
								}
							}],
							static: "Benchmark CLI"
						}
					},
					cliDesc: {
						type: 0,
						start: 0,
						end: 93,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 94,
								offset: 93
							},
							source: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration."
						},
						body: {
							type: 2,
							start: 0,
							end: 93,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 94,
									offset: 93
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 93,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 94,
										offset: 93
									}
								}
							}],
							static: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration."
						}
					},
					cliPrice: {
						type: 0,
						start: 0,
						end: 4,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 5,
								offset: 4
							},
							source: "Free"
						},
						body: {
							type: 2,
							start: 0,
							end: 4,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 5,
									offset: 4
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 4,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 5,
										offset: 4
									}
								}
							}],
							static: "Free"
						}
					},
					cloudName: {
						type: 0,
						start: 0,
						end: 15,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 16,
								offset: 15
							},
							source: "Benchmark Cloud"
						},
						body: {
							type: 2,
							start: 0,
							end: 15,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 16,
									offset: 15
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 15,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 16,
										offset: 15
									}
								}
							}],
							static: "Benchmark Cloud"
						}
					},
					cloudDesc: {
						type: 0,
						start: 0,
						end: 89,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 90,
								offset: 89
							},
							source: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards."
						},
						body: {
							type: 2,
							start: 0,
							end: 89,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 90,
									offset: 89
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 89,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 90,
										offset: 89
									}
								}
							}],
							static: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards."
						}
					},
					cloudPrice: {
						type: 0,
						start: 0,
						end: 6,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 7,
								offset: 6
							},
							source: "$29/mo"
						},
						body: {
							type: 2,
							start: 0,
							end: 6,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 7,
									offset: 6
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 6,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 7,
										offset: 6
									}
								}
							}],
							static: "$29/mo"
						}
					},
					enterpriseName: {
						type: 0,
						start: 0,
						end: 20,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 21,
								offset: 20
							},
							source: "Benchmark Enterprise"
						},
						body: {
							type: 2,
							start: 0,
							end: 20,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 21,
									offset: 20
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 20,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 21,
										offset: 20
									}
								}
							}],
							static: "Benchmark Enterprise"
						}
					},
					enterpriseDesc: {
						type: 0,
						start: 0,
						end: 79,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 80,
								offset: 79
							},
							source: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support."
						},
						body: {
							type: 2,
							start: 0,
							end: 79,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 80,
									offset: 79
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 79,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 80,
										offset: 79
									}
								}
							}],
							static: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support."
						}
					},
					enterprisePrice: {
						type: 0,
						start: 0,
						end: 10,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 11,
								offset: 10
							},
							source: "Contact Us"
						},
						body: {
							type: 2,
							start: 0,
							end: 10,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 11,
									offset: 10
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 10,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 11,
										offset: 10
									}
								}
							}],
							static: "Contact Us"
						}
					},
					migrationName: {
						type: 0,
						start: 0,
						end: 19,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 20,
								offset: 19
							},
							source: "Migration Assistant"
						},
						body: {
							type: 2,
							start: 0,
							end: 19,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 20,
									offset: 19
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 19,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 20,
										offset: 19
									}
								}
							}],
							static: "Migration Assistant"
						}
					},
					migrationDesc: {
						type: 0,
						start: 0,
						end: 91,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 92,
								offset: 91
							},
							source: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime."
						},
						body: {
							type: 2,
							start: 0,
							end: 91,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 92,
									offset: 91
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 91,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 92,
										offset: 91
									}
								}
							}],
							static: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime."
						}
					},
					migrationPrice: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "$99 one-time"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "$99 one-time"
						}
					},
					qaName: {
						type: 0,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							},
							source: "Translation QA"
						},
						body: {
							type: 2,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 14,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 15,
										offset: 14
									}
								}
							}],
							static: "Translation QA"
						}
					},
					qaDesc: {
						type: 0,
						start: 0,
						end: 92,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 93,
								offset: 92
							},
							source: "Automated quality checks for missing translations, pluralization issues, and context errors."
						},
						body: {
							type: 2,
							start: 0,
							end: 92,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 93,
									offset: 92
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 92,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 93,
										offset: 92
									}
								}
							}],
							static: "Automated quality checks for missing translations, pluralization issues, and context errors."
						}
					},
					qaPrice: {
						type: 0,
						start: 0,
						end: 6,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 7,
								offset: 6
							},
							source: "$19/mo"
						},
						body: {
							type: 2,
							start: 0,
							end: 6,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 7,
									offset: 6
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 6,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 7,
										offset: 6
									}
								}
							}],
							static: "$19/mo"
						}
					},
					optimizerName: {
						type: 0,
						start: 0,
						end: 16,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 17,
								offset: 16
							},
							source: "Bundle Optimizer"
						},
						body: {
							type: 2,
							start: 0,
							end: 16,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 17,
									offset: 16
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 16,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 17,
										offset: 16
									}
								}
							}],
							static: "Bundle Optimizer"
						}
					},
					optimizerDesc: {
						type: 0,
						start: 0,
						end: 92,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 93,
								offset: 92
							},
							source: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting."
						},
						body: {
							type: 2,
							start: 0,
							end: 92,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 93,
									offset: 92
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 92,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 93,
										offset: 92
									}
								}
							}],
							static: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting."
						}
					},
					optimizerPrice: {
						type: 0,
						start: 0,
						end: 6,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 7,
								offset: 6
							},
							source: "$49/mo"
						},
						body: {
							type: 2,
							start: 0,
							end: 6,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 7,
									offset: 6
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 6,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 7,
										offset: 6
									}
								}
							}],
							static: "$49/mo"
						}
					}
				}
			},
			settings: {
				header: {
					title: {
						type: 0,
						start: 0,
						end: 8,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 9,
								offset: 8
							},
							source: "Settings"
						},
						body: {
							type: 2,
							start: 0,
							end: 8,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 9,
									offset: 8
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 8,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 9,
										offset: 8
									}
								}
							}],
							static: "Settings"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 50,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 51,
								offset: 50
							},
							source: "Manage your account preferences and configuration."
						},
						body: {
							type: 2,
							start: 0,
							end: 50,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 51,
									offset: 50
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 50,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 51,
										offset: 50
									}
								}
							}],
							static: "Manage your account preferences and configuration."
						}
					}
				},
				profile: {
					title: {
						type: 0,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							},
							source: "Profile"
						},
						body: {
							type: 2,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 7,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 8,
										offset: 7
									}
								}
							}],
							static: "Profile"
						}
					},
					displayName: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "Display Name"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "Display Name"
						}
					},
					email: {
						type: 0,
						start: 0,
						end: 5,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 6,
								offset: 5
							},
							source: "Email"
						},
						body: {
							type: 2,
							start: 0,
							end: 5,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 6,
									offset: 5
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 5,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 6,
										offset: 5
									}
								}
							}],
							static: "Email"
						}
					}
				},
				preferences: {
					title: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Preferences"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Preferences"
						}
					},
					emailNotifications: {
						type: 0,
						start: 0,
						end: 19,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 20,
								offset: 19
							},
							source: "Email Notifications"
						},
						body: {
							type: 2,
							start: 0,
							end: 19,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 20,
									offset: 19
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 19,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 20,
										offset: 19
									}
								}
							}],
							static: "Email Notifications"
						}
					},
					weeklyReports: {
						type: 0,
						start: 0,
						end: 32,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 33,
								offset: 32
							},
							source: "Receive weekly benchmark reports"
						},
						body: {
							type: 2,
							start: 0,
							end: 32,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 33,
									offset: 32
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 32,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 33,
										offset: 32
									}
								}
							}],
							static: "Receive weekly benchmark reports"
						}
					},
					toggleNotifications: {
						type: 0,
						start: 0,
						end: 20,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 21,
								offset: 20
							},
							source: "Toggle notifications"
						},
						body: {
							type: 2,
							start: 0,
							end: 20,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 21,
									offset: 20
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 20,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 21,
										offset: 20
									}
								}
							}],
							static: "Toggle notifications"
						}
					},
					darkMode: {
						type: 0,
						start: 0,
						end: 9,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 10,
								offset: 9
							},
							source: "Dark Mode"
						},
						body: {
							type: 2,
							start: 0,
							end: 9,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 10,
									offset: 9
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 9,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 10,
										offset: 9
									}
								}
							}],
							static: "Dark Mode"
						}
					},
					darkColorScheme: {
						type: 0,
						start: 0,
						end: 21,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 22,
								offset: 21
							},
							source: "Use dark color scheme"
						},
						body: {
							type: 2,
							start: 0,
							end: 21,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 22,
									offset: 21
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 21,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 22,
										offset: 21
									}
								}
							}],
							static: "Use dark color scheme"
						}
					},
					toggleDarkMode: {
						type: 0,
						start: 0,
						end: 16,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 17,
								offset: 16
							},
							source: "Toggle dark mode"
						},
						body: {
							type: 2,
							start: 0,
							end: 16,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 17,
									offset: 16
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 16,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 17,
										offset: 16
									}
								}
							}],
							static: "Toggle dark mode"
						}
					},
					defaultLanguage: {
						type: 0,
						start: 0,
						end: 16,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 17,
								offset: 16
							},
							source: "Default Language"
						},
						body: {
							type: 2,
							start: 0,
							end: 16,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 17,
									offset: 16
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 16,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 17,
										offset: 16
									}
								}
							}],
							static: "Default Language"
						}
					},
					english: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "English (en)"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "English (en)"
						}
					},
					french: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "French (fr)"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "French (fr)"
						}
					},
					german: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "German (de)"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "German (de)"
						}
					},
					spanish: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "Spanish (es)"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "Spanish (es)"
						}
					},
					japanese: {
						type: 0,
						start: 0,
						end: 13,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 14,
								offset: 13
							},
							source: "Japanese (ja)"
						},
						body: {
							type: 2,
							start: 0,
							end: 13,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 14,
									offset: 13
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 13,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 14,
										offset: 13
									}
								}
							}],
							static: "Japanese (ja)"
						}
					},
					chinese: {
						type: 0,
						start: 0,
						end: 26,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 27,
								offset: 26
							},
							source: "Chinese Simplified (zh-CN)"
						},
						body: {
							type: 2,
							start: 0,
							end: 26,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 27,
									offset: 26
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 26,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 27,
										offset: 26
									}
								}
							}],
							static: "Chinese Simplified (zh-CN)"
						}
					},
					arabic: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Arabic (ar)"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Arabic (ar)"
						}
					}
				},
				apiAccess: {
					title: {
						type: 0,
						start: 0,
						end: 10,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 11,
								offset: 10
							},
							source: "API Access"
						},
						body: {
							type: 2,
							start: 0,
							end: 10,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 11,
									offset: 10
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 10,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 11,
										offset: 10
									}
								}
							}],
							static: "API Access"
						}
					},
					apiKey: {
						type: 0,
						start: 0,
						end: 7,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 8,
								offset: 7
							},
							source: "API Key"
						},
						body: {
							type: 2,
							start: 0,
							end: 7,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 8,
									offset: 7
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 7,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 8,
										offset: 7
									}
								}
							}],
							static: "API Key"
						}
					},
					copy: {
						type: 0,
						start: 0,
						end: 4,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 5,
								offset: 4
							},
							source: "Copy"
						},
						body: {
							type: 2,
							start: 0,
							end: 4,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 5,
									offset: 4
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 4,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 5,
										offset: 4
									}
								}
							}],
							static: "Copy"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 61,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 62,
								offset: 61
							},
							source: "Use this key to access the benchmarking API programmatically."
						},
						body: {
							type: 2,
							start: 0,
							end: 61,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 62,
									offset: 61
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 61,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 62,
										offset: 61
									}
								}
							}],
							static: "Use this key to access the benchmarking API programmatically."
						}
					}
				},
				footer: {
					cancel: {
						type: 0,
						start: 0,
						end: 6,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 7,
								offset: 6
							},
							source: "Cancel"
						},
						body: {
							type: 2,
							start: 0,
							end: 6,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 7,
									offset: 6
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 6,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 7,
										offset: 6
									}
								}
							}],
							static: "Cancel"
						}
					},
					saveChanges: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "Save Changes"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "Save Changes"
						}
					}
				}
			},
			team: {
				header: {
					title: {
						type: 0,
						start: 0,
						end: 8,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 9,
								offset: 8
							},
							source: "Our Team"
						},
						body: {
							type: 2,
							start: 0,
							end: 8,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 9,
									offset: 8
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 8,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 9,
										offset: 8
									}
								}
							}],
							static: "Our Team"
						}
					},
					description: {
						type: 0,
						start: 0,
						end: 107,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 108,
								offset: 107
							},
							source: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
						},
						body: {
							type: 2,
							start: 0,
							end: 107,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 108,
									offset: 107
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 107,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 108,
										offset: 107
									}
								}
							}],
							static: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
						}
					}
				},
				grid: {
					member1Name: {
						type: 0,
						start: 0,
						end: 10,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 11,
								offset: 10
							},
							source: "Sarah Chen"
						},
						body: {
							type: 2,
							start: 0,
							end: 10,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 11,
									offset: 10
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 10,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 11,
										offset: 10
									}
								}
							}],
							static: "Sarah Chen"
						}
					},
					member1Role: {
						type: 0,
						start: 0,
						end: 23,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 24,
								offset: 23
							},
							source: "Founder & Lead Engineer"
						},
						body: {
							type: 2,
							start: 0,
							end: 23,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 24,
									offset: 23
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 23,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 24,
										offset: 23
									}
								}
							}],
							static: "Founder & Lead Engineer"
						}
					},
					member1Bio: {
						type: 0,
						start: 0,
						end: 98,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 99,
								offset: 98
							},
							source: "Former Google engineer with 10 years of experience building internationalization systems at scale."
						},
						body: {
							type: 2,
							start: 0,
							end: 98,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 99,
									offset: 98
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 98,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 99,
										offset: 98
									}
								}
							}],
							static: "Former Google engineer with 10 years of experience building internationalization systems at scale."
						}
					},
					member2Name: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "Marcus Weber"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "Marcus Weber"
						}
					},
					member2Role: {
						type: 0,
						start: 0,
						end: 20,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 21,
								offset: 20
							},
							source: "Performance Engineer"
						},
						body: {
							type: 2,
							start: 0,
							end: 20,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 21,
									offset: 20
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 20,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 21,
										offset: 20
									}
								}
							}],
							static: "Performance Engineer"
						}
					},
					member2Bio: {
						type: 0,
						start: 0,
						end: 102,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 103,
								offset: 102
							},
							source: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel."
						},
						body: {
							type: 2,
							start: 0,
							end: 102,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 103,
									offset: 102
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 102,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 103,
										offset: 102
									}
								}
							}],
							static: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel."
						}
					},
					member3Name: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Aisha Patel"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Aisha Patel"
						}
					},
					member3Role: {
						type: 0,
						start: 0,
						end: 18,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 19,
								offset: 18
							},
							source: "Developer Advocate"
						},
						body: {
							type: 2,
							start: 0,
							end: 18,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 19,
									offset: 18
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 18,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 19,
										offset: 18
									}
								}
							}],
							static: "Developer Advocate"
						}
					},
					member3Bio: {
						type: 0,
						start: 0,
						end: 97,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 98,
								offset: 97
							},
							source: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext."
						},
						body: {
							type: 2,
							start: 0,
							end: 97,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 98,
									offset: 97
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 97,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 98,
										offset: 97
									}
								}
							}],
							static: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext."
						}
					},
					member4Name: {
						type: 0,
						start: 0,
						end: 15,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 16,
								offset: 15
							},
							source: "Tomás Rodríguez"
						},
						body: {
							type: 2,
							start: 0,
							end: 15,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 16,
									offset: 15
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 15,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 16,
										offset: 15
									}
								}
							}],
							static: "Tomás Rodríguez"
						}
					},
					member4Role: {
						type: 0,
						start: 0,
						end: 20,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 21,
								offset: 20
							},
							source: "Full-Stack Developer"
						},
						body: {
							type: 2,
							start: 0,
							end: 20,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 21,
									offset: 20
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 20,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 21,
										offset: 20
									}
								}
							}],
							static: "Full-Stack Developer"
						}
					},
					member4Bio: {
						type: 0,
						start: 0,
						end: 96,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 97,
								offset: 96
							},
							source: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui."
						},
						body: {
							type: 2,
							start: 0,
							end: 96,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 97,
									offset: 96
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 96,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 97,
										offset: 96
									}
								}
							}],
							static: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui."
						}
					},
					member5Name: {
						type: 0,
						start: 0,
						end: 11,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 12,
								offset: 11
							},
							source: "Yuki Tanaka"
						},
						body: {
							type: 2,
							start: 0,
							end: 11,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 12,
									offset: 11
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 11,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 12,
										offset: 11
									}
								}
							}],
							static: "Yuki Tanaka"
						}
					},
					member5Role: {
						type: 0,
						start: 0,
						end: 12,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 13,
								offset: 12
							},
							source: "Data Analyst"
						},
						body: {
							type: 2,
							start: 0,
							end: 12,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 13,
									offset: 12
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 12,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 13,
										offset: 12
									}
								}
							}],
							static: "Data Analyst"
						}
					},
					member5Bio: {
						type: 0,
						start: 0,
						end: 87,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 88,
								offset: 87
							},
							source: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT."
						},
						body: {
							type: 2,
							start: 0,
							end: 87,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 88,
									offset: 87
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 87,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 88,
										offset: 87
									}
								}
							}],
							static: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT."
						}
					},
					member6Name: {
						type: 0,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							},
							source: "Elena Kowalski"
						},
						body: {
							type: 2,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 14,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 15,
										offset: 14
									}
								}
							}],
							static: "Elena Kowalski"
						}
					},
					member6Role: {
						type: 0,
						start: 0,
						end: 17,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 18,
								offset: 17
							},
							source: "Community Manager"
						},
						body: {
							type: 2,
							start: 0,
							end: 17,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 18,
									offset: 17
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 17,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 18,
										offset: 17
									}
								}
							}],
							static: "Community Manager"
						}
					},
					member6Bio: {
						type: 0,
						start: 0,
						end: 96,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 97,
								offset: 96
							},
							source: "Manages community contributions, partnerships, and events. Background in open source governance."
						},
						body: {
							type: 2,
							start: 0,
							end: 96,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 97,
									offset: 96
								}
							},
							items: [{
								type: 3,
								start: 0,
								end: 96,
								loc: {
									start: {
										line: 1,
										column: 1,
										offset: 0
									},
									end: {
										line: 1,
										column: 97,
										offset: 96
									}
								}
							}],
							static: "Manages community contributions, partnerships, and events. Background in open source governance."
						}
					}
				}
			},
			notFound: {
				title: {
					type: 0,
					start: 0,
					end: 3,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 4,
							offset: 3
						},
						source: "404"
					},
					body: {
						type: 2,
						start: 0,
						end: 3,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 4,
								offset: 3
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 3,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 4,
									offset: 3
								}
							}
						}],
						static: "404"
					}
				},
				description: {
					type: 0,
					start: 0,
					end: 20,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 21,
							offset: 20
						},
						source: "Oops! Page not found"
					},
					body: {
						type: 2,
						start: 0,
						end: 20,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 21,
								offset: 20
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 20,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 21,
									offset: 20
								}
							}
						}],
						static: "Oops! Page not found"
					}
				},
				returnHome: {
					type: 0,
					start: 0,
					end: 14,
					loc: {
						start: {
							line: 1,
							column: 1,
							offset: 0
						},
						end: {
							line: 1,
							column: 15,
							offset: 14
						},
						source: "Return to Home"
					},
					body: {
						type: 2,
						start: 0,
						end: 14,
						loc: {
							start: {
								line: 1,
								column: 1,
								offset: 0
							},
							end: {
								line: 1,
								column: 15,
								offset: 14
							}
						},
						items: [{
							type: 3,
							start: 0,
							end: 14,
							loc: {
								start: {
									line: 1,
									column: 1,
									offset: 0
								},
								end: {
									line: 1,
									column: 15,
									offset: 14
								}
							}
						}],
						static: "Return to Home"
					}
				}
			}
		},
		fr: w,
		es: T,
		de: ee,
		it: E,
		pt: D,
		zh: te,
		ja: ne,
		ko: re,
		ru: ie
	}
}), na = s({
	__name: "Wrapper",
	setup(e, { expose: t }) {
		t();
		let n = l()?.appContext.app;
		n && !n.config.globalProperties.$i18n && n.use(ta);
		let r = { app: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
});
function ra(e, t, n, r, i, a) {
	return b(e.$slots, "default");
}
var ia = oe(na, [["render", ra], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-i18n-app/scripts/Wrapper.vue"]]), aa = { render() {
	return d(ia, {}, { default: () => d(pe) });
} };
export { aa as default };
