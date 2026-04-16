import { Profiler, useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, { get: (a, b) => (typeof require !== "undefined" ? require : a)[b] }) : x)(function(x) {
	if (typeof require !== "undefined") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + x + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
//#endregion
//#region __vite-browser-external
var require___vite_browser_external = __commonJSMin(((exports, module) => {
	module.exports = {};
}));
//#endregion
//#region ../../../node_modules/.bun/generaltranslation@8.2.3/node_modules/generaltranslation/dist/index.cjs.min.cjs
var require_index_cjs_min$2 = __commonJSMin(((exports) => {
	var e = function(t, r) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
		}, e(t, r);
	};
	function t(t, r) {
		if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
		function n() {
			this.constructor = t;
		}
		e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
	}
	var r = function() {
		return r = Object.assign || function(e) {
			for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
			return e;
		}, r.apply(this, arguments);
	};
	function n(e, t) {
		var r = {};
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
		if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
			var o = 0;
			for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
		}
		return r;
	}
	function o(e, t, r, n) {
		var o, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
		if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
		else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
		return i > 3 && a && Object.defineProperty(t, r, a), a;
	}
	function i(e, t) {
		return function(r, n) {
			t(r, n, e);
		};
	}
	function a(e, t, r, n, o, i) {
		function a(e) {
			if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
			return e;
		}
		for (var s, c = n.kind, u = "getter" === c ? "get" : "setter" === c ? "set" : "value", l = !t && e ? n.static ? e : e.prototype : null, h = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}), f = !1, p = r.length - 1; p >= 0; p--) {
			var d = {};
			for (var v in n) d[v] = "access" === v ? {} : n[v];
			for (var v in n.access) d.access[v] = n.access[v];
			d.addInitializer = function(e) {
				if (f) throw new TypeError("Cannot add initializers after decoration has completed");
				i.push(a(e || null));
			};
			var g = (0, r[p])("accessor" === c ? {
				get: h.get,
				set: h.set
			} : h[u], d);
			if ("accessor" === c) {
				if (void 0 === g) continue;
				if (null === g || "object" != typeof g) throw new TypeError("Object expected");
				(s = a(g.get)) && (h.get = s), (s = a(g.set)) && (h.set = s), (s = a(g.init)) && o.unshift(s);
			} else (s = a(g)) && ("field" === c ? o.unshift(s) : h[u] = s);
		}
		l && Object.defineProperty(l, n.name, h), f = !0;
	}
	function s(e, t, r) {
		for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
		return n ? r : void 0;
	}
	function c(e) {
		return "symbol" == typeof e ? e : "".concat(e);
	}
	function u(e, t, r) {
		return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
			configurable: !0,
			value: r ? "".concat(r, " ", t) : t
		});
	}
	function l(e, t) {
		if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
	}
	function h(e, t, r, n) {
		return new (r || (r = Promise))(function(o, i) {
			function a(e) {
				try {
					c(n.next(e));
				} catch (e) {
					i(e);
				}
			}
			function s(e) {
				try {
					c(n.throw(e));
				} catch (e) {
					i(e);
				}
			}
			function c(e) {
				var t;
				e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
					e(t);
				})).then(a, s);
			}
			c((n = n.apply(e, t || [])).next());
		});
	}
	function f(e, t) {
		var r, n, o, i = {
			label: 0,
			sent: function() {
				if (1 & o[0]) throw o[1];
				return o[1];
			},
			trys: [],
			ops: []
		}, a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
		return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
			return this;
		}), a;
		function s(s) {
			return function(c) {
				return function(s) {
					if (r) throw new TypeError("Generator is already executing.");
					for (; a && (a = 0, s[0] && (i = 0)), i;) try {
						if (r = 1, n && (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done) return o;
						switch (n = 0, o && (s = [2 & s[0], o.value]), s[0]) {
							case 0:
							case 1:
								o = s;
								break;
							case 4: return i.label++, {
								value: s[1],
								done: !1
							};
							case 5:
								i.label++, n = s[1], s = [0];
								continue;
							case 7:
								s = i.ops.pop(), i.trys.pop();
								continue;
							default:
								if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
									i = 0;
									continue;
								}
								if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
									i.label = s[1];
									break;
								}
								if (6 === s[0] && i.label < o[1]) {
									i.label = o[1], o = s;
									break;
								}
								if (o && i.label < o[2]) {
									i.label = o[2], i.ops.push(s);
									break;
								}
								o[2] && i.ops.pop(), i.trys.pop();
								continue;
						}
						s = t.call(e, i);
					} catch (e) {
						s = [6, e], n = 0;
					} finally {
						r = o = 0;
					}
					if (5 & s[0]) throw s[1];
					return {
						value: s[0] ? s[1] : void 0,
						done: !0
					};
				}([s, c]);
			};
		}
	}
	var p = Object.create ? function(e, t, r, n) {
		void 0 === n && (n = r);
		var o = Object.getOwnPropertyDescriptor(t, r);
		o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
			enumerable: !0,
			get: function() {
				return t[r];
			}
		}), Object.defineProperty(e, n, o);
	} : function(e, t, r, n) {
		void 0 === n && (n = r), e[n] = t[r];
	};
	function d(e, t) {
		for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || p(t, e, r);
	}
	function v(e) {
		var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
		if (r) return r.call(e);
		if (e && "number" == typeof e.length) return { next: function() {
			return e && n >= e.length && (e = void 0), {
				value: e && e[n++],
				done: !e
			};
		} };
		throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}
	function g(e, t) {
		var r = "function" == typeof Symbol && e[Symbol.iterator];
		if (!r) return e;
		var n, o, i = r.call(e), a = [];
		try {
			for (; (void 0 === t || t-- > 0) && !(n = i.next()).done;) a.push(n.value);
		} catch (e) {
			o = { error: e };
		} finally {
			try {
				n && !n.done && (r = i.return) && r.call(i);
			} finally {
				if (o) throw o.error;
			}
		}
		return a;
	}
	function m() {
		for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
		return e;
	}
	function y() {
		for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
		var n = Array(e), o = 0;
		for (t = 0; t < r; t++) for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) n[o] = i[a];
		return n;
	}
	function _(e, t, r) {
		if (r || 2 === arguments.length) for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
		return e.concat(n || Array.prototype.slice.call(t));
	}
	function E(e) {
		return this instanceof E ? (this.v = e, this) : new E(e);
	}
	function b(e, t, r) {
		if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
		var n, o = r.apply(e, t || []), i = [];
		return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", function(e) {
			return function(t) {
				return Promise.resolve(t).then(e, u);
			};
		}), n[Symbol.asyncIterator] = function() {
			return this;
		}, n;
		function a(e, t) {
			o[e] && (n[e] = function(t) {
				return new Promise(function(r, n) {
					i.push([
						e,
						t,
						r,
						n
					]) > 1 || s(e, t);
				});
			}, t && (n[e] = t(n[e])));
		}
		function s(e, t) {
			try {
				(r = o[e](t)).value instanceof E ? Promise.resolve(r.value.v).then(c, u) : l(i[0][2], r);
			} catch (e) {
				l(i[0][3], e);
			}
			var r;
		}
		function c(e) {
			s("next", e);
		}
		function u(e) {
			s("throw", e);
		}
		function l(e, t) {
			e(t), i.shift(), i.length && s(i[0][0], i[0][1]);
		}
	}
	function T(e) {
		var t, r;
		return t = {}, n("next"), n("throw", function(e) {
			throw e;
		}), n("return"), t[Symbol.iterator] = function() {
			return this;
		}, t;
		function n(n, o) {
			t[n] = e[n] ? function(t) {
				return (r = !r) ? {
					value: E(e[n](t)),
					done: !1
				} : o ? o(t) : t;
			} : o;
		}
	}
	function L(e) {
		if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
		var t, r = e[Symbol.asyncIterator];
		return r ? r.call(e) : (e = v(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
			return this;
		}, t);
		function n(r) {
			t[r] = e[r] && function(t) {
				return new Promise(function(n, o) {
					(function(e, t, r, n) {
						Promise.resolve(n).then(function(t) {
							e({
								value: t,
								done: r
							});
						}, t);
					})(n, o, (t = e[r](t)).done, t.value);
				});
			};
		}
	}
	function A(e, t) {
		return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
	}
	var w = Object.create ? function(e, t) {
		Object.defineProperty(e, "default", {
			enumerable: !0,
			value: t
		});
	} : function(e, t) {
		e.default = t;
	}, S = function(e) {
		return S = Object.getOwnPropertyNames || function(e) {
			var t = [];
			for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
			return t;
		}, S(e);
	};
	function B(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (null != e) for (var r = S(e), n = 0; n < r.length; n++) "default" !== r[n] && p(t, e, r[n]);
		return w(t, e), t;
	}
	function C(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function I(e, t, r, n) {
		if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
		if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
		return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
	}
	function H(e, t, r, n, o) {
		if ("m" === n) throw new TypeError("Private method is not writable");
		if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
		if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r;
	}
	function N(e, t) {
		if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
		return "function" == typeof e ? t === e : e.has(t);
	}
	function P(e, t, r) {
		if (null != t) {
			if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
			var n, o;
			if (r) {
				if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
				n = t[Symbol.asyncDispose];
			}
			if (void 0 === n) {
				if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
				n = t[Symbol.dispose], r && (o = n);
			}
			if ("function" != typeof n) throw new TypeError("Object not disposable.");
			o && (n = function() {
				try {
					o.call(this);
				} catch (e) {
					return Promise.reject(e);
				}
			}), e.stack.push({
				value: t,
				dispose: n,
				async: r
			});
		} else r && e.stack.push({ async: !0 });
		return t;
	}
	var M = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
		var n = new Error(r);
		return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
	};
	function R(e) {
		function t(t) {
			e.error = e.hasError ? new M(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
		}
		var r, n = 0;
		return function o() {
			for (; r = e.stack.pop();) try {
				if (!r.async && 1 === n) return n = 0, e.stack.push(r), Promise.resolve().then(o);
				if (r.dispose) {
					var i = r.dispose.call(r.value);
					if (r.async) return n |= 2, Promise.resolve(i).then(o, function(e) {
						return t(e), o();
					});
				} else n |= 1;
			} catch (e) {
				t(e);
			}
			if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
			if (e.hasError) throw e.error;
		}();
	}
	function x(e, t) {
		return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, r, n, o, i) {
			return r ? t ? ".jsx" : ".js" : !n || o && i ? n + o + "." + i.toLowerCase() + "js" : e;
		}) : e;
	}
	var O, D, k, U, F, G, z = Object.freeze({
		__proto__: null,
		__addDisposableResource: P,
		get __assign() {
			return r;
		},
		__asyncDelegator: T,
		__asyncGenerator: b,
		__asyncValues: L,
		__await: E,
		__awaiter: h,
		__classPrivateFieldGet: I,
		__classPrivateFieldIn: N,
		__classPrivateFieldSet: H,
		__createBinding: p,
		__decorate: o,
		__disposeResources: R,
		__esDecorate: a,
		__exportStar: d,
		__extends: t,
		__generator: f,
		__importDefault: C,
		__importStar: B,
		__makeTemplateObject: A,
		__metadata: l,
		__param: i,
		__propKey: c,
		__read: g,
		__rest: n,
		__rewriteRelativeImportExtension: x,
		__runInitializers: s,
		__setFunctionName: u,
		__spread: m,
		__spreadArray: _,
		__spreadArrays: y,
		__values: v,
		default: {
			__extends: t,
			__assign: r,
			__rest: n,
			__decorate: o,
			__param: i,
			__esDecorate: a,
			__runInitializers: s,
			__propKey: c,
			__setFunctionName: u,
			__metadata: l,
			__awaiter: h,
			__generator: f,
			__createBinding: p,
			__exportStar: d,
			__values: v,
			__read: g,
			__spread: m,
			__spreadArrays: y,
			__spreadArray: _,
			__await: E,
			__asyncGenerator: b,
			__asyncDelegator: T,
			__asyncValues: L,
			__makeTemplateObject: A,
			__importStar: B,
			__importDefault: C,
			__classPrivateFieldGet: I,
			__classPrivateFieldSet: H,
			__classPrivateFieldIn: N,
			__addDisposableResource: P,
			__disposeResources: R,
			__rewriteRelativeImportExtension: x
		}
	}), K = "en", V = 6e4, X = "ellipsis", W = "DEFAULT_TERMINATOR_KEY", Y = {
		ellipsis: (O = {
			fr: {
				terminator: "…",
				separator: " "
			},
			zh: {
				terminator: "……",
				separator: void 0
			},
			ja: {
				terminator: "……",
				separator: void 0
			}
		}, O[W] = {
			terminator: "…",
			separator: void 0
		}, O),
		none: (D = {}, D[W] = {
			terminator: void 0,
			separator: void 0
		}, D)
	}, Z = function() {
		function e(e, t) {
			var r, n, o, i, a, s, c, u, l;
			void 0 === t && (t = {});
			try {
				var h = e ? Array.isArray(e) ? e.map(function(e) {
					return String(e);
				}) : [String(e)] : [K], f = Intl.getCanonicalLocales(h);
				this.locale = f.length ? f[0] : K;
			} catch (e) {
				this.locale = K;
			}
			if (!Y[null !== (r = t.style) && void 0 !== r ? r : X]) throw new Error(function(e) {
				return "generaltranslation Formatting Error: Invalid cutoff style: ".concat(e, ".");
			}(null !== (n = t.style) && void 0 !== n ? n : X));
			if (void 0 !== t.maxChars) {
				u = null !== (o = t.style) && void 0 !== o ? o : X;
				var p = new Intl.Locale(this.locale).language;
				l = Y[u][p] || Y[u][W];
			}
			var d = null !== (i = t.terminator) && void 0 !== i ? i : null == l ? void 0 : l.terminator, v = null != d ? null !== (a = t.separator) && void 0 !== a ? a : null == l ? void 0 : l.separator : void 0;
			this.additionLength = (null !== (s = null == d ? void 0 : d.length) && void 0 !== s ? s : 0) + (null !== (c = null == v ? void 0 : v.length) && void 0 !== c ? c : 0), void 0 !== t.maxChars && Math.abs(t.maxChars) < this.additionLength && (d = void 0, v = void 0), this.options = {
				maxChars: t.maxChars,
				style: u,
				terminator: d,
				separator: v
			};
		}
		return e.prototype.format = function(e) {
			return this.formatToParts(e).join("");
		}, e.prototype.formatToParts = function(e) {
			var t = this.options, r = t.maxChars, n = t.terminator, o = t.separator, i = void 0 === r || Math.abs(r) >= e.length ? r : r >= 0 ? Math.max(0, r - this.additionLength) : Math.min(0, r + this.additionLength), a = void 0 !== i && i > -1 ? e.slice(0, i) : e.slice(i);
			return null == r || null == i || 0 === i || null == n || e.length <= Math.abs(r) ? [a] : i > 0 ? null != o ? [
				a,
				o,
				n
			] : [a, n] : null != o ? [
				n,
				o,
				a
			] : [n, a];
		}, e.prototype.resolvedOptions = function() {
			return this.options;
		}, e;
	}(), J = {
		Collator: Intl.Collator,
		DateTimeFormat: Intl.DateTimeFormat,
		DisplayNames: Intl.DisplayNames,
		ListFormat: Intl.ListFormat,
		Locale: Intl.Locale,
		NumberFormat: Intl.NumberFormat,
		PluralRules: Intl.PluralRules,
		RelativeTimeFormat: Intl.RelativeTimeFormat,
		Segmenter: Intl.Segmenter,
		CutoffFormat: Z
	}, Q = new (function() {
		function e() {
			this.cache = {};
		}
		return e.prototype._generateKey = function(e, t) {
			void 0 === t && (t = {});
			var r = e ? Array.isArray(e) ? e.map(function(e) {
				return String(e);
			}).join(",") : String(e) : "undefined", n = t ? JSON.stringify(t, Object.keys(t).sort()) : "{}";
			return "".concat(r, ":").concat(n);
		}, e.prototype.get = function(e) {
			for (var t, r, n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
			var i = n[0], a = void 0 === i ? K : i, s = n[1], c = void 0 === s ? {} : s, u = this._generateKey(a, c), l = null === (r = this.cache[e]) || void 0 === r ? void 0 : r[u];
			return void 0 === l && (l = new ((t = J[e]).bind.apply(t, _([void 0], n, !1)))(), this.cache[e] || (this.cache[e] = {}), this.cache[e][u] = l), l;
		}, e;
	}())(), $ = "https://api2.gtx.dev";
	function ee(e) {
		if ("undefined" != typeof Buffer) return Buffer.from(e, "utf8").toString("base64");
		for (var t = new TextEncoder().encode(e), r = "", n = 0; n < t.length; n++) r += String.fromCharCode(t[n]);
		return btoa(r);
	}
	function te(e) {
		if ("undefined" != typeof Buffer) return Buffer.from(e, "base64").toString("utf8");
		for (var t = atob(e), r = new Uint8Array(t.length), n = 0; n < t.length; n++) r[n] = t.charCodeAt(n);
		return new TextDecoder().decode(r);
	}
	(function(e) {
		e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
	})(k || (k = {})), function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	}(U || (U = {})), function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	}(F || (F = {}));
	try {
		null === (G = (/* @__PURE__ */ new RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu")).exec("a")) || void 0 === G || G[0];
	} catch (e) {}
	var re = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
	function ne(e) {
		return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
	}
	function oe(e) {
		if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
		var t = e.default;
		if ("function" == typeof t) {
			var r = function e() {
				var r = !1;
				try {
					r = this instanceof e;
				} catch {}
				return r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
			};
			r.prototype = t.prototype;
		} else r = {};
		return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
			var n = Object.getOwnPropertyDescriptor(e, t);
			Object.defineProperty(r, t, n.get ? n : {
				enumerable: !0,
				get: function() {
					return e[t];
				}
			});
		}), r;
	}
	var ie, ae = {};
	function se() {
		if (ie) return ae;
		var e, t;
		return ie = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.SKELETON_TYPE = ae.TYPE = void 0, ae.isLiteralElement = function(t) {
			return t.type === e.literal;
		}, ae.isArgumentElement = function(t) {
			return t.type === e.argument;
		}, ae.isNumberElement = function(t) {
			return t.type === e.number;
		}, ae.isDateElement = function(t) {
			return t.type === e.date;
		}, ae.isTimeElement = function(t) {
			return t.type === e.time;
		}, ae.isSelectElement = function(t) {
			return t.type === e.select;
		}, ae.isPluralElement = function(t) {
			return t.type === e.plural;
		}, ae.isPoundElement = function(t) {
			return t.type === e.pound;
		}, ae.isTagElement = function(t) {
			return t.type === e.tag;
		}, ae.isNumberSkeleton = function(e) {
			return !(!e || "object" != typeof e || e.type !== t.number);
		}, ae.isDateTimeSkeleton = function(e) {
			return !(!e || "object" != typeof e || e.type !== t.dateTime);
		}, ae.createLiteralElement = function(t) {
			return {
				type: e.literal,
				value: t
			};
		}, ae.createNumberElement = function(t, r) {
			return {
				type: e.number,
				value: t,
				style: r
			};
		}, function(e) {
			e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
		}(e || (ae.TYPE = e = {})), function(e) {
			e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
		}(t || (ae.SKELETON_TYPE = t = {})), ae;
	}
	se();
	var ce, ue, le, he = {}, fe = oe(z);
	(function() {
		if (ce) return he;
		ce = 1, Object.defineProperty(he, "__esModule", { value: !0 }), he.printAST = r, he.doPrintAST = n, he.printDateTimeSkeleton = a;
		var e = fe, t = se();
		function r(e) {
			return n(e, !1);
		}
		function n(s, c) {
			return s.map(function(u, l) {
				return (0, t.isLiteralElement)(u) ? function(e, t, r, n) {
					var a = e.value;
					r || "'" !== a[0] || (a = "''".concat(a.slice(1)));
					n || "'" !== a[a.length - 1] || (a = "".concat(a.slice(0, a.length - 1), "''"));
					return a = o(a), t ? a.replace("#", "'#'") : a;
				}(u, c, 0 === l, l === s.length - 1) : (0, t.isArgumentElement)(u) ? function(e) {
					var t = e.value;
					return "{".concat(t, "}");
				}(u) : (0, t.isDateElement)(u) || (0, t.isTimeElement)(u) || (0, t.isNumberElement)(u) ? function(e) {
					return "{".concat(e.value, ", ").concat(t.TYPE[e.type]).concat(e.style ? ", ".concat((r = e.style, "string" == typeof r ? o(r) : r.type === t.SKELETON_TYPE.dateTime ? "::".concat(a(r)) : "::".concat(r.tokens.map(i).join(" ")))) : "", "}");
					var r;
				}(u) : (0, t.isPluralElement)(u) ? function(t) {
					var r = "cardinal" === t.pluralType ? "plural" : "selectordinal", o = [
						t.value,
						r,
						e.__spreadArray([t.offset ? "offset:".concat(t.offset) : ""], Object.keys(t.options).map(function(e) {
							return "".concat(e, "{").concat(n(t.options[e].value, !0), "}");
						}), !0).filter(Boolean).join(" ")
					].join(",");
					return "{".concat(o, "}");
				}(u) : (0, t.isSelectElement)(u) ? function(e) {
					var t = [
						e.value,
						"select",
						Object.keys(e.options).map(function(t) {
							return "".concat(t, "{").concat(n(e.options[t].value, !1), "}");
						}).join(" ")
					].join(",");
					return "{".concat(t, "}");
				}(u) : (0, t.isPoundElement)(u) ? "#" : (0, t.isTagElement)(u) ? function(e) {
					return "<".concat(e.value, ">").concat(r(e.children), "</").concat(e.value, ">");
				}(u) : void 0;
			}).join("");
		}
		function o(e) {
			return e.replace(/([{}](?:[\s\S]*[{}])?)/, "'$1'");
		}
		function i(e) {
			var t = e.stem, r = e.options;
			return 0 === r.length ? t : "".concat(t).concat(r.map(function(e) {
				return "/".concat(e);
			}).join(""));
		}
		function a(e) {
			return e.pattern;
		}
	})();
	var de = ne((le || (le = 1, ue = function(e, t) {
		t || (t = {}), "function" == typeof t && (t = { cmp: t });
		var r, n = "boolean" == typeof t.cycles && t.cycles, o = t.cmp && (r = t.cmp, function(e) {
			return function(t, n) {
				var o = {
					key: t,
					value: e[t]
				}, i = {
					key: n,
					value: e[n]
				};
				return r(o, i);
			};
		}), i = [];
		return function e(t) {
			if (t && t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON()), void 0 !== t) {
				if ("number" == typeof t) return isFinite(t) ? "" + t : "null";
				if ("object" != typeof t) return JSON.stringify(t);
				var r, a;
				if (Array.isArray(t)) {
					for (a = "[", r = 0; r < t.length; r++) r && (a += ","), a += e(t[r]) || "null";
					return a + "]";
				}
				if (null === t) return "null";
				if (-1 !== i.indexOf(t)) {
					if (n) return JSON.stringify("__cycle__");
					throw new TypeError("Converting circular structure to JSON");
				}
				var s = i.push(t) - 1, c = Object.keys(t).sort(o && o(t));
				for (a = "", r = 0; r < c.length; r++) {
					var u = c[r], l = e(t[u]);
					l && (a && (a += ","), a += JSON.stringify(u) + ":" + l);
				}
				return i.splice(s, 1), "{" + a + "}";
			}
		}(e);
	}), ue)), ve = { exports: {} };
	var ge, me = { exports: {} };
	function ye() {
		return ge || (ge = 1, me.exports = function() {
			var e = e || function(e, t) {
				var r;
				if ("undefined" != typeof window && window.crypto && (r = window.crypto), "undefined" != typeof self && self.crypto && (r = self.crypto), "undefined" != typeof globalThis && globalThis.crypto && (r = globalThis.crypto), !r && "undefined" != typeof window && window.msCrypto && (r = window.msCrypto), !r && void 0 !== re && re.crypto && (r = re.crypto), !r) try {
					r = require___vite_browser_external();
				} catch (e) {}
				var n = function() {
					if (r) {
						if ("function" == typeof r.getRandomValues) try {
							return r.getRandomValues(new Uint32Array(1))[0];
						} catch (e) {}
						if ("function" == typeof r.randomBytes) try {
							return r.randomBytes(4).readInt32LE();
						} catch (e) {}
					}
					throw new Error("Native crypto module could not be used to get secure random number.");
				}, o = Object.create || function() {
					function e() {}
					return function(t) {
						var r;
						return e.prototype = t, r = new e(), e.prototype = null, r;
					};
				}(), i = {}, a = i.lib = {}, s = a.Base = {
					extend: function(e) {
						var t = o(this);
						return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
							t.$super.init.apply(this, arguments);
						}), t.init.prototype = t, t.$super = this, t;
					},
					create: function() {
						var e = this.extend();
						return e.init.apply(e, arguments), e;
					},
					init: function() {},
					mixIn: function(e) {
						for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
						e.hasOwnProperty("toString") && (this.toString = e.toString);
					},
					clone: function() {
						return this.init.prototype.extend(this);
					}
				}, c = a.WordArray = s.extend({
					init: function(e, r) {
						e = this.words = e || [], this.sigBytes = r != t ? r : 4 * e.length;
					},
					toString: function(e) {
						return (e || l).stringify(this);
					},
					concat: function(e) {
						var t = this.words, r = e.words, n = this.sigBytes, o = e.sigBytes;
						if (this.clamp(), n % 4) for (var i = 0; i < o; i++) {
							var a = r[i >>> 2] >>> 24 - i % 4 * 8 & 255;
							t[n + i >>> 2] |= a << 24 - (n + i) % 4 * 8;
						}
						else for (var s = 0; s < o; s += 4) t[n + s >>> 2] = r[s >>> 2];
						return this.sigBytes += o, this;
					},
					clamp: function() {
						var t = this.words, r = this.sigBytes;
						t[r >>> 2] &= 4294967295 << 32 - r % 4 * 8, t.length = e.ceil(r / 4);
					},
					clone: function() {
						var e = s.clone.call(this);
						return e.words = this.words.slice(0), e;
					},
					random: function(e) {
						for (var t = [], r = 0; r < e; r += 4) t.push(n());
						return new c.init(t, e);
					}
				}), u = i.enc = {}, l = u.Hex = {
					stringify: function(e) {
						for (var t = e.words, r = e.sigBytes, n = [], o = 0; o < r; o++) {
							var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
							n.push((i >>> 4).toString(16)), n.push((15 & i).toString(16));
						}
						return n.join("");
					},
					parse: function(e) {
						for (var t = e.length, r = [], n = 0; n < t; n += 2) r[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
						return new c.init(r, t / 2);
					}
				}, h = u.Latin1 = {
					stringify: function(e) {
						for (var t = e.words, r = e.sigBytes, n = [], o = 0; o < r; o++) {
							var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
							n.push(String.fromCharCode(i));
						}
						return n.join("");
					},
					parse: function(e) {
						for (var t = e.length, r = [], n = 0; n < t; n++) r[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
						return new c.init(r, t);
					}
				}, f = u.Utf8 = {
					stringify: function(e) {
						try {
							return decodeURIComponent(escape(h.stringify(e)));
						} catch (e) {
							throw new Error("Malformed UTF-8 data");
						}
					},
					parse: function(e) {
						return h.parse(unescape(encodeURIComponent(e)));
					}
				}, p = a.BufferedBlockAlgorithm = s.extend({
					reset: function() {
						this._data = new c.init(), this._nDataBytes = 0;
					},
					_append: function(e) {
						"string" == typeof e && (e = f.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
					},
					_process: function(t) {
						var r, n = this._data, o = n.words, i = n.sigBytes, a = this.blockSize, s = i / (4 * a), u = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * a, l = e.min(4 * u, i);
						if (u) {
							for (var h = 0; h < u; h += a) this._doProcessBlock(o, h);
							r = o.splice(0, u), n.sigBytes -= l;
						}
						return new c.init(r, l);
					},
					clone: function() {
						var e = s.clone.call(this);
						return e._data = this._data.clone(), e;
					},
					_minBufferSize: 0
				});
				a.Hasher = p.extend({
					cfg: s.extend(),
					init: function(e) {
						this.cfg = this.cfg.extend(e), this.reset();
					},
					reset: function() {
						p.reset.call(this), this._doReset();
					},
					update: function(e) {
						return this._append(e), this._process(), this;
					},
					finalize: function(e) {
						return e && this._append(e), this._doFinalize();
					},
					blockSize: 16,
					_createHelper: function(e) {
						return function(t, r) {
							return new e.init(r).finalize(t);
						};
					},
					_createHmacHelper: function(e) {
						return function(t, r) {
							return new d.HMAC.init(e, r).finalize(t);
						};
					}
				});
				var d = i.algo = {};
				return i;
			}(Math);
			return e;
		}()), me.exports;
	}
	var _e, Ee = { exports: {} };
	function be() {
		return _e || (_e = 1, Ee.exports = function(e) {
			return n = (r = e).lib, o = n.Base, i = n.WordArray, (a = r.x64 = {}).Word = o.extend({ init: function(e, t) {
				this.high = e, this.low = t;
			} }), a.WordArray = o.extend({
				init: function(e, r) {
					e = this.words = e || [], this.sigBytes = r != t ? r : 8 * e.length;
				},
				toX32: function() {
					for (var e = this.words, t = e.length, r = [], n = 0; n < t; n++) {
						var o = e[n];
						r.push(o.high), r.push(o.low);
					}
					return i.create(r, this.sigBytes);
				},
				clone: function() {
					for (var e = o.clone.call(this), t = e.words = this.words.slice(0), r = t.length, n = 0; n < r; n++) t[n] = t[n].clone();
					return e;
				}
			}), e;
			var t, r, n, o, i, a;
		}(ye())), Ee.exports;
	}
	var Te, Le = { exports: {} };
	function Ae() {
		return Te || (Te = 1, Le.exports = function(e) {
			return function() {
				if ("function" == typeof ArrayBuffer) {
					var t = e.lib.WordArray, r = t.init, n = t.init = function(e) {
						if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), (e instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), e instanceof Uint8Array) {
							for (var t = e.byteLength, n = [], o = 0; o < t; o++) n[o >>> 2] |= e[o] << 24 - o % 4 * 8;
							r.call(this, n, t);
						} else r.apply(this, arguments);
					};
					n.prototype = t;
				}
			}(), e.lib.WordArray;
		}(ye())), Le.exports;
	}
	var we, Se = { exports: {} };
	function Be() {
		return we || (we = 1, Se.exports = function(e) {
			return function() {
				var t = e, r = t.lib.WordArray, n = t.enc;
				function o(e) {
					return e << 8 & 4278255360 | e >>> 8 & 16711935;
				}
				n.Utf16 = n.Utf16BE = {
					stringify: function(e) {
						for (var t = e.words, r = e.sigBytes, n = [], o = 0; o < r; o += 2) {
							var i = t[o >>> 2] >>> 16 - o % 4 * 8 & 65535;
							n.push(String.fromCharCode(i));
						}
						return n.join("");
					},
					parse: function(e) {
						for (var t = e.length, n = [], o = 0; o < t; o++) n[o >>> 1] |= e.charCodeAt(o) << 16 - o % 2 * 16;
						return r.create(n, 2 * t);
					}
				}, n.Utf16LE = {
					stringify: function(e) {
						for (var t = e.words, r = e.sigBytes, n = [], i = 0; i < r; i += 2) {
							var a = o(t[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
							n.push(String.fromCharCode(a));
						}
						return n.join("");
					},
					parse: function(e) {
						for (var t = e.length, n = [], i = 0; i < t; i++) n[i >>> 1] |= o(e.charCodeAt(i) << 16 - i % 2 * 16);
						return r.create(n, 2 * t);
					}
				};
			}(), e.enc.Utf16;
		}(ye())), Se.exports;
	}
	var Ce, Ie = { exports: {} };
	function He() {
		return Ce || (Ce = 1, Ie.exports = function(e) {
			return function() {
				var t = e, r = t.lib.WordArray;
				function n(e, t, n) {
					for (var o = [], i = 0, a = 0; a < t; a++) if (a % 4) {
						var s = n[e.charCodeAt(a - 1)] << a % 4 * 2 | n[e.charCodeAt(a)] >>> 6 - a % 4 * 2;
						o[i >>> 2] |= s << 24 - i % 4 * 8, i++;
					}
					return r.create(o, i);
				}
				t.enc.Base64 = {
					stringify: function(e) {
						var t = e.words, r = e.sigBytes, n = this._map;
						e.clamp();
						for (var o = [], i = 0; i < r; i += 3) for (var a = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, s = 0; s < 4 && i + .75 * s < r; s++) o.push(n.charAt(a >>> 6 * (3 - s) & 63));
						var c = n.charAt(64);
						if (c) for (; o.length % 4;) o.push(c);
						return o.join("");
					},
					parse: function(e) {
						var t = e.length, r = this._map, o = this._reverseMap;
						if (!o) {
							o = this._reverseMap = [];
							for (var i = 0; i < r.length; i++) o[r.charCodeAt(i)] = i;
						}
						var a = r.charAt(64);
						if (a) {
							var s = e.indexOf(a);
							-1 !== s && (t = s);
						}
						return n(e, t, o);
					},
					_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
				};
			}(), e.enc.Base64;
		}(ye())), Ie.exports;
	}
	var Ne, Pe = { exports: {} };
	function Me() {
		return Ne || (Ne = 1, Pe.exports = function(e) {
			return function() {
				var t = e, r = t.lib.WordArray;
				function n(e, t, n) {
					for (var o = [], i = 0, a = 0; a < t; a++) if (a % 4) {
						var s = n[e.charCodeAt(a - 1)] << a % 4 * 2 | n[e.charCodeAt(a)] >>> 6 - a % 4 * 2;
						o[i >>> 2] |= s << 24 - i % 4 * 8, i++;
					}
					return r.create(o, i);
				}
				t.enc.Base64url = {
					stringify: function(e, t) {
						void 0 === t && (t = !0);
						var r = e.words, n = e.sigBytes, o = t ? this._safe_map : this._map;
						e.clamp();
						for (var i = [], a = 0; a < n; a += 3) for (var s = (r[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (r[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | r[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, c = 0; c < 4 && a + .75 * c < n; c++) i.push(o.charAt(s >>> 6 * (3 - c) & 63));
						var u = o.charAt(64);
						if (u) for (; i.length % 4;) i.push(u);
						return i.join("");
					},
					parse: function(e, t) {
						void 0 === t && (t = !0);
						var r = e.length, o = t ? this._safe_map : this._map, i = this._reverseMap;
						if (!i) {
							i = this._reverseMap = [];
							for (var a = 0; a < o.length; a++) i[o.charCodeAt(a)] = a;
						}
						var s = o.charAt(64);
						if (s) {
							var c = e.indexOf(s);
							-1 !== c && (r = c);
						}
						return n(e, r, i);
					},
					_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
					_safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
				};
			}(), e.enc.Base64url;
		}(ye())), Pe.exports;
	}
	var Re, xe = { exports: {} };
	function Oe() {
		return Re || (Re = 1, xe.exports = function(e) {
			return function(t) {
				var r = e, n = r.lib, o = n.WordArray, i = n.Hasher, a = r.algo, s = [];
				(function() {
					for (var e = 0; e < 64; e++) s[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0;
				})();
				var c = a.MD5 = i.extend({
					_doReset: function() {
						this._hash = new o.init([
							1732584193,
							4023233417,
							2562383102,
							271733878
						]);
					},
					_doProcessBlock: function(e, t) {
						for (var r = 0; r < 16; r++) {
							var n = t + r, o = e[n];
							e[n] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
						}
						var i = this._hash.words, a = e[t + 0], c = e[t + 1], p = e[t + 2], d = e[t + 3], v = e[t + 4], g = e[t + 5], m = e[t + 6], y = e[t + 7], _ = e[t + 8], E = e[t + 9], b = e[t + 10], T = e[t + 11], L = e[t + 12], A = e[t + 13], w = e[t + 14], S = e[t + 15], B = i[0], C = i[1], I = i[2], H = i[3];
						B = u(B, C, I, H, a, 7, s[0]), H = u(H, B, C, I, c, 12, s[1]), I = u(I, H, B, C, p, 17, s[2]), C = u(C, I, H, B, d, 22, s[3]), B = u(B, C, I, H, v, 7, s[4]), H = u(H, B, C, I, g, 12, s[5]), I = u(I, H, B, C, m, 17, s[6]), C = u(C, I, H, B, y, 22, s[7]), B = u(B, C, I, H, _, 7, s[8]), H = u(H, B, C, I, E, 12, s[9]), I = u(I, H, B, C, b, 17, s[10]), C = u(C, I, H, B, T, 22, s[11]), B = u(B, C, I, H, L, 7, s[12]), H = u(H, B, C, I, A, 12, s[13]), I = u(I, H, B, C, w, 17, s[14]), B = l(B, C = u(C, I, H, B, S, 22, s[15]), I, H, c, 5, s[16]), H = l(H, B, C, I, m, 9, s[17]), I = l(I, H, B, C, T, 14, s[18]), C = l(C, I, H, B, a, 20, s[19]), B = l(B, C, I, H, g, 5, s[20]), H = l(H, B, C, I, b, 9, s[21]), I = l(I, H, B, C, S, 14, s[22]), C = l(C, I, H, B, v, 20, s[23]), B = l(B, C, I, H, E, 5, s[24]), H = l(H, B, C, I, w, 9, s[25]), I = l(I, H, B, C, d, 14, s[26]), C = l(C, I, H, B, _, 20, s[27]), B = l(B, C, I, H, A, 5, s[28]), H = l(H, B, C, I, p, 9, s[29]), I = l(I, H, B, C, y, 14, s[30]), B = h(B, C = l(C, I, H, B, L, 20, s[31]), I, H, g, 4, s[32]), H = h(H, B, C, I, _, 11, s[33]), I = h(I, H, B, C, T, 16, s[34]), C = h(C, I, H, B, w, 23, s[35]), B = h(B, C, I, H, c, 4, s[36]), H = h(H, B, C, I, v, 11, s[37]), I = h(I, H, B, C, y, 16, s[38]), C = h(C, I, H, B, b, 23, s[39]), B = h(B, C, I, H, A, 4, s[40]), H = h(H, B, C, I, a, 11, s[41]), I = h(I, H, B, C, d, 16, s[42]), C = h(C, I, H, B, m, 23, s[43]), B = h(B, C, I, H, E, 4, s[44]), H = h(H, B, C, I, L, 11, s[45]), I = h(I, H, B, C, S, 16, s[46]), B = f(B, C = h(C, I, H, B, p, 23, s[47]), I, H, a, 6, s[48]), H = f(H, B, C, I, y, 10, s[49]), I = f(I, H, B, C, w, 15, s[50]), C = f(C, I, H, B, g, 21, s[51]), B = f(B, C, I, H, L, 6, s[52]), H = f(H, B, C, I, d, 10, s[53]), I = f(I, H, B, C, b, 15, s[54]), C = f(C, I, H, B, c, 21, s[55]), B = f(B, C, I, H, _, 6, s[56]), H = f(H, B, C, I, S, 10, s[57]), I = f(I, H, B, C, m, 15, s[58]), C = f(C, I, H, B, A, 21, s[59]), B = f(B, C, I, H, v, 6, s[60]), H = f(H, B, C, I, T, 10, s[61]), I = f(I, H, B, C, p, 15, s[62]), C = f(C, I, H, B, E, 21, s[63]), i[0] = i[0] + B | 0, i[1] = i[1] + C | 0, i[2] = i[2] + I | 0, i[3] = i[3] + H | 0;
					},
					_doFinalize: function() {
						var e = this._data, r = e.words, n = 8 * this._nDataBytes, o = 8 * e.sigBytes;
						r[o >>> 5] |= 128 << 24 - o % 32;
						var i = t.floor(n / 4294967296), a = n;
						r[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), r[14 + (o + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), e.sigBytes = 4 * (r.length + 1), this._process();
						for (var s = this._hash, c = s.words, u = 0; u < 4; u++) {
							var l = c[u];
							c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
						}
						return s;
					},
					clone: function() {
						var e = i.clone.call(this);
						return e._hash = this._hash.clone(), e;
					}
				});
				function u(e, t, r, n, o, i, a) {
					var s = e + (t & r | ~t & n) + o + a;
					return (s << i | s >>> 32 - i) + t;
				}
				function l(e, t, r, n, o, i, a) {
					var s = e + (t & n | r & ~n) + o + a;
					return (s << i | s >>> 32 - i) + t;
				}
				function h(e, t, r, n, o, i, a) {
					var s = e + (t ^ r ^ n) + o + a;
					return (s << i | s >>> 32 - i) + t;
				}
				function f(e, t, r, n, o, i, a) {
					var s = e + (r ^ (t | ~n)) + o + a;
					return (s << i | s >>> 32 - i) + t;
				}
				r.MD5 = i._createHelper(c), r.HmacMD5 = i._createHmacHelper(c);
			}(Math), e.MD5;
		}(ye())), xe.exports;
	}
	var De, ke = { exports: {} };
	function Ue() {
		return De || (De = 1, ke.exports = function(e) {
			return r = (t = e).lib, n = r.WordArray, o = r.Hasher, i = t.algo, a = [], s = i.SHA1 = o.extend({
				_doReset: function() {
					this._hash = new n.init([
						1732584193,
						4023233417,
						2562383102,
						271733878,
						3285377520
					]);
				},
				_doProcessBlock: function(e, t) {
					for (var r = this._hash.words, n = r[0], o = r[1], i = r[2], s = r[3], c = r[4], u = 0; u < 80; u++) {
						if (u < 16) a[u] = 0 | e[t + u];
						else {
							var l = a[u - 3] ^ a[u - 8] ^ a[u - 14] ^ a[u - 16];
							a[u] = l << 1 | l >>> 31;
						}
						var h = (n << 5 | n >>> 27) + c + a[u];
						h += u < 20 ? 1518500249 + (o & i | ~o & s) : u < 40 ? 1859775393 + (o ^ i ^ s) : u < 60 ? (o & i | o & s | i & s) - 1894007588 : (o ^ i ^ s) - 899497514, c = s, s = i, i = o << 30 | o >>> 2, o = n, n = h;
					}
					r[0] = r[0] + n | 0, r[1] = r[1] + o | 0, r[2] = r[2] + i | 0, r[3] = r[3] + s | 0, r[4] = r[4] + c | 0;
				},
				_doFinalize: function() {
					var e = this._data, t = e.words, r = 8 * this._nDataBytes, n = 8 * e.sigBytes;
					return t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = Math.floor(r / 4294967296), t[15 + (n + 64 >>> 9 << 4)] = r, e.sigBytes = 4 * t.length, this._process(), this._hash;
				},
				clone: function() {
					var e = o.clone.call(this);
					return e._hash = this._hash.clone(), e;
				}
			}), t.SHA1 = o._createHelper(s), t.HmacSHA1 = o._createHmacHelper(s), e.SHA1;
			var t, r, n, o, i, a, s;
		}(ye())), ke.exports;
	}
	var Fe, Ge = { exports: {} };
	function je() {
		return Fe || (Fe = 1, Ge.exports = function(e) {
			return function(t) {
				var r = e, n = r.lib, o = n.WordArray, i = n.Hasher, a = r.algo, s = [], c = [];
				(function() {
					function e(e) {
						for (var r = t.sqrt(e), n = 2; n <= r; n++) if (!(e % n)) return !1;
						return !0;
					}
					function r(e) {
						return 4294967296 * (e - (0 | e)) | 0;
					}
					for (var n = 2, o = 0; o < 64;) e(n) && (o < 8 && (s[o] = r(t.pow(n, .5))), c[o] = r(t.pow(n, 1 / 3)), o++), n++;
				})();
				var u = [], l = a.SHA256 = i.extend({
					_doReset: function() {
						this._hash = new o.init(s.slice(0));
					},
					_doProcessBlock: function(e, t) {
						for (var r = this._hash.words, n = r[0], o = r[1], i = r[2], a = r[3], s = r[4], l = r[5], h = r[6], f = r[7], p = 0; p < 64; p++) {
							if (p < 16) u[p] = 0 | e[t + p];
							else {
								var d = u[p - 15], v = (d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3, g = u[p - 2], m = (g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10;
								u[p] = v + u[p - 7] + m + u[p - 16];
							}
							var y = n & o ^ n & i ^ o & i, _ = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22), E = f + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & l ^ ~s & h) + c[p] + u[p];
							f = h, h = l, l = s, s = a + E | 0, a = i, i = o, o = n, n = E + (_ + y) | 0;
						}
						r[0] = r[0] + n | 0, r[1] = r[1] + o | 0, r[2] = r[2] + i | 0, r[3] = r[3] + a | 0, r[4] = r[4] + s | 0, r[5] = r[5] + l | 0, r[6] = r[6] + h | 0, r[7] = r[7] + f | 0;
					},
					_doFinalize: function() {
						var e = this._data, r = e.words, n = 8 * this._nDataBytes, o = 8 * e.sigBytes;
						return r[o >>> 5] |= 128 << 24 - o % 32, r[14 + (o + 64 >>> 9 << 4)] = t.floor(n / 4294967296), r[15 + (o + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * r.length, this._process(), this._hash;
					},
					clone: function() {
						var e = i.clone.call(this);
						return e._hash = this._hash.clone(), e;
					}
				});
				r.SHA256 = i._createHelper(l), r.HmacSHA256 = i._createHmacHelper(l);
			}(Math), e.SHA256;
		}(ye())), Ge.exports;
	}
	var ze, Ke = { exports: {} };
	var Ve, Xe = { exports: {} };
	function We() {
		return Ve || (Ve = 1, Xe.exports = function(e) {
			return function() {
				var t = e, r = t.lib.Hasher, n = t.x64, o = n.Word, i = n.WordArray, a = t.algo;
				function s() {
					return o.create.apply(o, arguments);
				}
				var c = [
					s(1116352408, 3609767458),
					s(1899447441, 602891725),
					s(3049323471, 3964484399),
					s(3921009573, 2173295548),
					s(961987163, 4081628472),
					s(1508970993, 3053834265),
					s(2453635748, 2937671579),
					s(2870763221, 3664609560),
					s(3624381080, 2734883394),
					s(310598401, 1164996542),
					s(607225278, 1323610764),
					s(1426881987, 3590304994),
					s(1925078388, 4068182383),
					s(2162078206, 991336113),
					s(2614888103, 633803317),
					s(3248222580, 3479774868),
					s(3835390401, 2666613458),
					s(4022224774, 944711139),
					s(264347078, 2341262773),
					s(604807628, 2007800933),
					s(770255983, 1495990901),
					s(1249150122, 1856431235),
					s(1555081692, 3175218132),
					s(1996064986, 2198950837),
					s(2554220882, 3999719339),
					s(2821834349, 766784016),
					s(2952996808, 2566594879),
					s(3210313671, 3203337956),
					s(3336571891, 1034457026),
					s(3584528711, 2466948901),
					s(113926993, 3758326383),
					s(338241895, 168717936),
					s(666307205, 1188179964),
					s(773529912, 1546045734),
					s(1294757372, 1522805485),
					s(1396182291, 2643833823),
					s(1695183700, 2343527390),
					s(1986661051, 1014477480),
					s(2177026350, 1206759142),
					s(2456956037, 344077627),
					s(2730485921, 1290863460),
					s(2820302411, 3158454273),
					s(3259730800, 3505952657),
					s(3345764771, 106217008),
					s(3516065817, 3606008344),
					s(3600352804, 1432725776),
					s(4094571909, 1467031594),
					s(275423344, 851169720),
					s(430227734, 3100823752),
					s(506948616, 1363258195),
					s(659060556, 3750685593),
					s(883997877, 3785050280),
					s(958139571, 3318307427),
					s(1322822218, 3812723403),
					s(1537002063, 2003034995),
					s(1747873779, 3602036899),
					s(1955562222, 1575990012),
					s(2024104815, 1125592928),
					s(2227730452, 2716904306),
					s(2361852424, 442776044),
					s(2428436474, 593698344),
					s(2756734187, 3733110249),
					s(3204031479, 2999351573),
					s(3329325298, 3815920427),
					s(3391569614, 3928383900),
					s(3515267271, 566280711),
					s(3940187606, 3454069534),
					s(4118630271, 4000239992),
					s(116418474, 1914138554),
					s(174292421, 2731055270),
					s(289380356, 3203993006),
					s(460393269, 320620315),
					s(685471733, 587496836),
					s(852142971, 1086792851),
					s(1017036298, 365543100),
					s(1126000580, 2618297676),
					s(1288033470, 3409855158),
					s(1501505948, 4234509866),
					s(1607167915, 987167468),
					s(1816402316, 1246189591)
				], u = [];
				(function() {
					for (var e = 0; e < 80; e++) u[e] = s();
				})();
				var l = a.SHA512 = r.extend({
					_doReset: function() {
						this._hash = new i.init([
							new o.init(1779033703, 4089235720),
							new o.init(3144134277, 2227873595),
							new o.init(1013904242, 4271175723),
							new o.init(2773480762, 1595750129),
							new o.init(1359893119, 2917565137),
							new o.init(2600822924, 725511199),
							new o.init(528734635, 4215389547),
							new o.init(1541459225, 327033209)
						]);
					},
					_doProcessBlock: function(e, t) {
						for (var r = this._hash.words, n = r[0], o = r[1], i = r[2], a = r[3], s = r[4], l = r[5], h = r[6], f = r[7], p = n.high, d = n.low, v = o.high, g = o.low, m = i.high, y = i.low, _ = a.high, E = a.low, b = s.high, T = s.low, L = l.high, A = l.low, w = h.high, S = h.low, B = f.high, C = f.low, I = p, H = d, N = v, P = g, M = m, R = y, x = _, O = E, D = b, k = T, U = L, F = A, G = w, j = S, z = B, K = C, V = 0; V < 80; V++) {
							var X, W, Y = u[V];
							if (V < 16) W = Y.high = 0 | e[t + 2 * V], X = Y.low = 0 | e[t + 2 * V + 1];
							else {
								var Z = u[V - 15], J = Z.high, q = Z.low, Q = (J >>> 1 | q << 31) ^ (J >>> 8 | q << 24) ^ J >>> 7, $ = (q >>> 1 | J << 31) ^ (q >>> 8 | J << 24) ^ (q >>> 7 | J << 25), ee = u[V - 2], te = ee.high, re = ee.low, ne = (te >>> 19 | re << 13) ^ (te << 3 | re >>> 29) ^ te >>> 6, oe = (re >>> 19 | te << 13) ^ (re << 3 | te >>> 29) ^ (re >>> 6 | te << 26), ie = u[V - 7], ae = ie.high, se = ie.low, ce = u[V - 16], ue = ce.high, le = ce.low;
								W = (W = (W = Q + ae + ((X = $ + se) >>> 0 < $ >>> 0 ? 1 : 0)) + ne + ((X += oe) >>> 0 < oe >>> 0 ? 1 : 0)) + ue + ((X += le) >>> 0 < le >>> 0 ? 1 : 0), Y.high = W, Y.low = X;
							}
							var he, fe = D & U ^ ~D & G, pe = k & F ^ ~k & j, de = I & N ^ I & M ^ N & M, ve = H & P ^ H & R ^ P & R, ge = (I >>> 28 | H << 4) ^ (I << 30 | H >>> 2) ^ (I << 25 | H >>> 7), me = (H >>> 28 | I << 4) ^ (H << 30 | I >>> 2) ^ (H << 25 | I >>> 7), ye = (D >>> 14 | k << 18) ^ (D >>> 18 | k << 14) ^ (D << 23 | k >>> 9), _e = (k >>> 14 | D << 18) ^ (k >>> 18 | D << 14) ^ (k << 23 | D >>> 9), Ee = c[V], be = Ee.high, Te = Ee.low, Le = z + ye + ((he = K + _e) >>> 0 < K >>> 0 ? 1 : 0), Ae = me + ve;
							z = G, K = j, G = U, j = F, U = D, F = k, D = x + (Le = (Le = (Le = Le + fe + ((he += pe) >>> 0 < pe >>> 0 ? 1 : 0)) + be + ((he += Te) >>> 0 < Te >>> 0 ? 1 : 0)) + W + ((he += X) >>> 0 < X >>> 0 ? 1 : 0)) + ((k = O + he | 0) >>> 0 < O >>> 0 ? 1 : 0) | 0, x = M, O = R, M = N, R = P, N = I, P = H, I = Le + (ge + de + (Ae >>> 0 < me >>> 0 ? 1 : 0)) + ((H = he + Ae | 0) >>> 0 < he >>> 0 ? 1 : 0) | 0;
						}
						d = n.low = d + H, n.high = p + I + (d >>> 0 < H >>> 0 ? 1 : 0), g = o.low = g + P, o.high = v + N + (g >>> 0 < P >>> 0 ? 1 : 0), y = i.low = y + R, i.high = m + M + (y >>> 0 < R >>> 0 ? 1 : 0), E = a.low = E + O, a.high = _ + x + (E >>> 0 < O >>> 0 ? 1 : 0), T = s.low = T + k, s.high = b + D + (T >>> 0 < k >>> 0 ? 1 : 0), A = l.low = A + F, l.high = L + U + (A >>> 0 < F >>> 0 ? 1 : 0), S = h.low = S + j, h.high = w + G + (S >>> 0 < j >>> 0 ? 1 : 0), C = f.low = C + K, f.high = B + z + (C >>> 0 < K >>> 0 ? 1 : 0);
					},
					_doFinalize: function() {
						var e = this._data, t = e.words, r = 8 * this._nDataBytes, n = 8 * e.sigBytes;
						return t[n >>> 5] |= 128 << 24 - n % 32, t[30 + (n + 128 >>> 10 << 5)] = Math.floor(r / 4294967296), t[31 + (n + 128 >>> 10 << 5)] = r, e.sigBytes = 4 * t.length, this._process(), this._hash.toX32();
					},
					clone: function() {
						var e = r.clone.call(this);
						return e._hash = this._hash.clone(), e;
					},
					blockSize: 32
				});
				t.SHA512 = r._createHelper(l), t.HmacSHA512 = r._createHmacHelper(l);
			}(), e.SHA512;
		}(ye(), be())), Xe.exports;
	}
	var Ye, Ze = { exports: {} };
	var Je, qe = { exports: {} };
	function Qe() {
		return Je || (Je = 1, qe.exports = function(e) {
			return function(t) {
				var r = e, n = r.lib, o = n.WordArray, i = n.Hasher, a = r.x64.Word, s = r.algo, c = [], u = [], l = [];
				(function() {
					for (var e = 1, t = 0, r = 0; r < 24; r++) {
						c[e + 5 * t] = (r + 1) * (r + 2) / 2 % 64;
						var n = (2 * e + 3 * t) % 5;
						e = t % 5, t = n;
					}
					for (e = 0; e < 5; e++) for (t = 0; t < 5; t++) u[e + 5 * t] = t + (2 * e + 3 * t) % 5 * 5;
					for (var o = 1, i = 0; i < 24; i++) {
						for (var s = 0, h = 0, f = 0; f < 7; f++) {
							if (1 & o) {
								var p = (1 << f) - 1;
								p < 32 ? h ^= 1 << p : s ^= 1 << p - 32;
							}
							128 & o ? o = o << 1 ^ 113 : o <<= 1;
						}
						l[i] = a.create(s, h);
					}
				})();
				var h = [];
				(function() {
					for (var e = 0; e < 25; e++) h[e] = a.create();
				})();
				var f = s.SHA3 = i.extend({
					cfg: i.cfg.extend({ outputLength: 512 }),
					_doReset: function() {
						for (var e = this._state = [], t = 0; t < 25; t++) e[t] = new a.init();
						this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
					},
					_doProcessBlock: function(e, t) {
						for (var r = this._state, n = this.blockSize / 2, o = 0; o < n; o++) {
							var i = e[t + 2 * o], a = e[t + 2 * o + 1];
							i = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), a = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), (C = r[o]).high ^= a, C.low ^= i;
						}
						for (var s = 0; s < 24; s++) {
							for (var f = 0; f < 5; f++) {
								for (var p = 0, d = 0, v = 0; v < 5; v++) p ^= (C = r[f + 5 * v]).high, d ^= C.low;
								var g = h[f];
								g.high = p, g.low = d;
							}
							for (f = 0; f < 5; f++) {
								var m = h[(f + 4) % 5], y = h[(f + 1) % 5], _ = y.high, E = y.low;
								for (p = m.high ^ (_ << 1 | E >>> 31), d = m.low ^ (E << 1 | _ >>> 31), v = 0; v < 5; v++) (C = r[f + 5 * v]).high ^= p, C.low ^= d;
							}
							for (var b = 1; b < 25; b++) {
								var T = (C = r[b]).high, L = C.low, A = c[b];
								A < 32 ? (p = T << A | L >>> 32 - A, d = L << A | T >>> 32 - A) : (p = L << A - 32 | T >>> 64 - A, d = T << A - 32 | L >>> 64 - A);
								var w = h[u[b]];
								w.high = p, w.low = d;
							}
							var S = h[0], B = r[0];
							for (S.high = B.high, S.low = B.low, f = 0; f < 5; f++) for (v = 0; v < 5; v++) {
								var C = r[b = f + 5 * v], I = h[b], H = h[(f + 1) % 5 + 5 * v], N = h[(f + 2) % 5 + 5 * v];
								C.high = I.high ^ ~H.high & N.high, C.low = I.low ^ ~H.low & N.low;
							}
							C = r[0];
							var P = l[s];
							C.high ^= P.high, C.low ^= P.low;
						}
					},
					_doFinalize: function() {
						var e = this._data, r = e.words;
						this._nDataBytes;
						var n = 8 * e.sigBytes, i = 32 * this.blockSize;
						r[n >>> 5] |= 1 << 24 - n % 32, r[(t.ceil((n + 1) / i) * i >>> 5) - 1] |= 128, e.sigBytes = 4 * r.length, this._process();
						for (var a = this._state, s = this.cfg.outputLength / 8, c = s / 8, u = [], l = 0; l < c; l++) {
							var h = a[l], f = h.high, p = h.low;
							f = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8), p = 16711935 & (p << 8 | p >>> 24) | 4278255360 & (p << 24 | p >>> 8), u.push(p), u.push(f);
						}
						return new o.init(u, s);
					},
					clone: function() {
						for (var e = i.clone.call(this), t = e._state = this._state.slice(0), r = 0; r < 25; r++) t[r] = t[r].clone();
						return e;
					}
				});
				r.SHA3 = i._createHelper(f), r.HmacSHA3 = i._createHmacHelper(f);
			}(Math), e.SHA3;
		}(ye(), be())), qe.exports;
	}
	var $e, et = { exports: {} };
	var tt, rt = { exports: {} };
	function nt() {
		return tt || (tt = 1, rt.exports = function(e) {
			var t, r = (t = e).lib.Base, n = t.enc.Utf8;
			t.algo.HMAC = r.extend({
				init: function(e, t) {
					e = this._hasher = new e.init(), "string" == typeof t && (t = n.parse(t));
					var r = e.blockSize, o = 4 * r;
					t.sigBytes > o && (t = e.finalize(t)), t.clamp();
					for (var i = this._oKey = t.clone(), a = this._iKey = t.clone(), s = i.words, c = a.words, u = 0; u < r; u++) s[u] ^= 1549556828, c[u] ^= 909522486;
					i.sigBytes = a.sigBytes = o, this.reset();
				},
				reset: function() {
					var e = this._hasher;
					e.reset(), e.update(this._iKey);
				},
				update: function(e) {
					return this._hasher.update(e), this;
				},
				finalize: function(e) {
					var t = this._hasher, r = t.finalize(e);
					return t.reset(), t.finalize(this._oKey.clone().concat(r));
				}
			});
		}(ye())), rt.exports;
	}
	var ot, it = { exports: {} };
	var at, st = { exports: {} };
	function ct() {
		return at || (at = 1, st.exports = function(e) {
			return r = (t = e).lib, n = r.Base, o = r.WordArray, i = t.algo, a = i.MD5, s = i.EvpKDF = n.extend({
				cfg: n.extend({
					keySize: 4,
					hasher: a,
					iterations: 1
				}),
				init: function(e) {
					this.cfg = this.cfg.extend(e);
				},
				compute: function(e, t) {
					for (var r, n = this.cfg, i = n.hasher.create(), a = o.create(), s = a.words, c = n.keySize, u = n.iterations; s.length < c;) {
						r && i.update(r), r = i.update(e).finalize(t), i.reset();
						for (var l = 1; l < u; l++) r = i.finalize(r), i.reset();
						a.concat(r);
					}
					return a.sigBytes = 4 * c, a;
				}
			}), t.EvpKDF = function(e, t, r) {
				return s.create(r).compute(e, t);
			}, e.EvpKDF;
			var t, r, n, o, i, a, s;
		}(ye(), Ue(), nt())), st.exports;
	}
	var ut, lt = { exports: {} };
	function ht() {
		return ut || (ut = 1, lt.exports = function(e) {
			e.lib.Cipher || function(t) {
				var r = e, n = r.lib, o = n.Base, i = n.WordArray, a = n.BufferedBlockAlgorithm, s = r.enc;
				s.Utf8;
				var c = s.Base64, u = r.algo.EvpKDF, l = n.Cipher = a.extend({
					cfg: o.extend(),
					createEncryptor: function(e, t) {
						return this.create(this._ENC_XFORM_MODE, e, t);
					},
					createDecryptor: function(e, t) {
						return this.create(this._DEC_XFORM_MODE, e, t);
					},
					init: function(e, t, r) {
						this.cfg = this.cfg.extend(r), this._xformMode = e, this._key = t, this.reset();
					},
					reset: function() {
						a.reset.call(this), this._doReset();
					},
					process: function(e) {
						return this._append(e), this._process();
					},
					finalize: function(e) {
						return e && this._append(e), this._doFinalize();
					},
					keySize: 4,
					ivSize: 4,
					_ENC_XFORM_MODE: 1,
					_DEC_XFORM_MODE: 2,
					_createHelper: function() {
						function e(e) {
							return "string" == typeof e ? _ : m;
						}
						return function(t) {
							return {
								encrypt: function(r, n, o) {
									return e(n).encrypt(t, r, n, o);
								},
								decrypt: function(r, n, o) {
									return e(n).decrypt(t, r, n, o);
								}
							};
						};
					}()
				});
				n.StreamCipher = l.extend({
					_doFinalize: function() {
						return this._process(!0);
					},
					blockSize: 1
				});
				var h = r.mode = {}, f = n.BlockCipherMode = o.extend({
					createEncryptor: function(e, t) {
						return this.Encryptor.create(e, t);
					},
					createDecryptor: function(e, t) {
						return this.Decryptor.create(e, t);
					},
					init: function(e, t) {
						this._cipher = e, this._iv = t;
					}
				}), p = h.CBC = function() {
					var e = f.extend();
					function r(e, r, n) {
						var o, i = this._iv;
						i ? (o = i, this._iv = t) : o = this._prevBlock;
						for (var a = 0; a < n; a++) e[r + a] ^= o[a];
					}
					return e.Encryptor = e.extend({ processBlock: function(e, t) {
						var n = this._cipher, o = n.blockSize;
						r.call(this, e, t, o), n.encryptBlock(e, t), this._prevBlock = e.slice(t, t + o);
					} }), e.Decryptor = e.extend({ processBlock: function(e, t) {
						var n = this._cipher, o = n.blockSize, i = e.slice(t, t + o);
						n.decryptBlock(e, t), r.call(this, e, t, o), this._prevBlock = i;
					} }), e;
				}(), d = (r.pad = {}).Pkcs7 = {
					pad: function(e, t) {
						for (var r = 4 * t, n = r - e.sigBytes % r, o = n << 24 | n << 16 | n << 8 | n, a = [], s = 0; s < n; s += 4) a.push(o);
						var c = i.create(a, n);
						e.concat(c);
					},
					unpad: function(e) {
						var t = 255 & e.words[e.sigBytes - 1 >>> 2];
						e.sigBytes -= t;
					}
				};
				n.BlockCipher = l.extend({
					cfg: l.cfg.extend({
						mode: p,
						padding: d
					}),
					reset: function() {
						var e;
						l.reset.call(this);
						var t = this.cfg, r = t.iv, n = t.mode;
						this._xformMode == this._ENC_XFORM_MODE ? e = n.createEncryptor : (e = n.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == e ? this._mode.init(this, r && r.words) : (this._mode = e.call(n, this, r && r.words), this._mode.__creator = e);
					},
					_doProcessBlock: function(e, t) {
						this._mode.processBlock(e, t);
					},
					_doFinalize: function() {
						var e, t = this.cfg.padding;
						return this._xformMode == this._ENC_XFORM_MODE ? (t.pad(this._data, this.blockSize), e = this._process(!0)) : (e = this._process(!0), t.unpad(e)), e;
					},
					blockSize: 4
				});
				var v = n.CipherParams = o.extend({
					init: function(e) {
						this.mixIn(e);
					},
					toString: function(e) {
						return (e || this.formatter).stringify(this);
					}
				}), g = (r.format = {}).OpenSSL = {
					stringify: function(e) {
						var t = e.ciphertext, r = e.salt;
						return (r ? i.create([1398893684, 1701076831]).concat(r).concat(t) : t).toString(c);
					},
					parse: function(e) {
						var t, r = c.parse(e), n = r.words;
						return 1398893684 == n[0] && 1701076831 == n[1] && (t = i.create(n.slice(2, 4)), n.splice(0, 4), r.sigBytes -= 16), v.create({
							ciphertext: r,
							salt: t
						});
					}
				}, m = n.SerializableCipher = o.extend({
					cfg: o.extend({ format: g }),
					encrypt: function(e, t, r, n) {
						n = this.cfg.extend(n);
						var o = e.createEncryptor(r, n), i = o.finalize(t), a = o.cfg;
						return v.create({
							ciphertext: i,
							key: r,
							iv: a.iv,
							algorithm: e,
							mode: a.mode,
							padding: a.padding,
							blockSize: e.blockSize,
							formatter: n.format
						});
					},
					decrypt: function(e, t, r, n) {
						return n = this.cfg.extend(n), t = this._parse(t, n.format), e.createDecryptor(r, n).finalize(t.ciphertext);
					},
					_parse: function(e, t) {
						return "string" == typeof e ? t.parse(e, this) : e;
					}
				}), y = (r.kdf = {}).OpenSSL = { execute: function(e, t, r, n, o) {
					if (n || (n = i.random(8)), o) a = u.create({
						keySize: t + r,
						hasher: o
					}).compute(e, n);
					else var a = u.create({ keySize: t + r }).compute(e, n);
					var s = i.create(a.words.slice(t), 4 * r);
					return a.sigBytes = 4 * t, v.create({
						key: a,
						iv: s,
						salt: n
					});
				} }, _ = n.PasswordBasedCipher = m.extend({
					cfg: m.cfg.extend({ kdf: y }),
					encrypt: function(e, t, r, n) {
						var o = (n = this.cfg.extend(n)).kdf.execute(r, e.keySize, e.ivSize, n.salt, n.hasher);
						n.iv = o.iv;
						var i = m.encrypt.call(this, e, t, o.key, n);
						return i.mixIn(o), i;
					},
					decrypt: function(e, t, r, n) {
						n = this.cfg.extend(n), t = this._parse(t, n.format);
						var o = n.kdf.execute(r, e.keySize, e.ivSize, t.salt, n.hasher);
						return n.iv = o.iv, m.decrypt.call(this, e, t, o.key, n);
					}
				});
			}();
		}(ye(), ct())), lt.exports;
	}
	var ft, pt = { exports: {} };
	function dt() {
		return ft || (ft = 1, pt.exports = function(e) {
			return e.mode.CFB = function() {
				var t = e.lib.BlockCipherMode.extend();
				function r(e, t, r, n) {
					var o, i = this._iv;
					i ? (o = i.slice(0), this._iv = void 0) : o = this._prevBlock, n.encryptBlock(o, 0);
					for (var a = 0; a < r; a++) e[t + a] ^= o[a];
				}
				return t.Encryptor = t.extend({ processBlock: function(e, t) {
					var n = this._cipher, o = n.blockSize;
					r.call(this, e, t, o, n), this._prevBlock = e.slice(t, t + o);
				} }), t.Decryptor = t.extend({ processBlock: function(e, t) {
					var n = this._cipher, o = n.blockSize, i = e.slice(t, t + o);
					r.call(this, e, t, o, n), this._prevBlock = i;
				} }), t;
			}(), e.mode.CFB;
		}(ye(), ht())), pt.exports;
	}
	var vt, gt = { exports: {} };
	function mt() {
		return vt || (vt = 1, gt.exports = function(e) {
			return e.mode.CTR = (t = e.lib.BlockCipherMode.extend(), r = t.Encryptor = t.extend({ processBlock: function(e, t) {
				var r = this._cipher, n = r.blockSize, o = this._iv, i = this._counter;
				o && (i = this._counter = o.slice(0), this._iv = void 0);
				var a = i.slice(0);
				r.encryptBlock(a, 0), i[n - 1] = i[n - 1] + 1 | 0;
				for (var s = 0; s < n; s++) e[t + s] ^= a[s];
			} }), t.Decryptor = r, t), e.mode.CTR;
			var t, r;
		}(ye(), ht())), gt.exports;
	}
	var yt, _t = { exports: {} };
	function Et() {
		return yt || (yt = 1, _t.exports = function(e) {
			return e.mode.CTRGladman = function() {
				var t = e.lib.BlockCipherMode.extend();
				function r(e) {
					if (255 & ~(e >> 24)) e += 1 << 24;
					else {
						var t = e >> 16 & 255, r = e >> 8 & 255, n = 255 & e;
						255 === t ? (t = 0, 255 === r ? (r = 0, 255 === n ? n = 0 : ++n) : ++r) : ++t, e = 0, e += t << 16, e += r << 8, e += n;
					}
					return e;
				}
				function n(e) {
					return 0 === (e[0] = r(e[0])) && (e[1] = r(e[1])), e;
				}
				return t.Decryptor = t.Encryptor = t.extend({ processBlock: function(e, t) {
					var r = this._cipher, o = r.blockSize, i = this._iv, a = this._counter;
					i && (a = this._counter = i.slice(0), this._iv = void 0), n(a);
					var s = a.slice(0);
					r.encryptBlock(s, 0);
					for (var c = 0; c < o; c++) e[t + c] ^= s[c];
				} }), t;
			}(), e.mode.CTRGladman;
		}(ye(), ht())), _t.exports;
	}
	var bt, Tt = { exports: {} };
	function Lt() {
		return bt || (bt = 1, Tt.exports = function(e) {
			return e.mode.OFB = (t = e.lib.BlockCipherMode.extend(), r = t.Encryptor = t.extend({ processBlock: function(e, t) {
				var r = this._cipher, n = r.blockSize, o = this._iv, i = this._keystream;
				o && (i = this._keystream = o.slice(0), this._iv = void 0), r.encryptBlock(i, 0);
				for (var a = 0; a < n; a++) e[t + a] ^= i[a];
			} }), t.Decryptor = r, t), e.mode.OFB;
			var t, r;
		}(ye(), ht())), Tt.exports;
	}
	var At, wt = { exports: {} };
	var St, Bt = { exports: {} };
	var Ct, It = { exports: {} };
	var Ht, Nt = { exports: {} };
	var Pt, Mt = { exports: {} };
	var Rt, xt = { exports: {} };
	var Ot, Dt = { exports: {} };
	var kt, Ut = { exports: {} };
	var Ft, Gt = { exports: {} };
	function jt() {
		return Ft || (Ft = 1, Gt.exports = function(e) {
			return function() {
				var t = e, r = t.lib, n = r.WordArray, o = r.BlockCipher, i = t.algo, a = [
					57,
					49,
					41,
					33,
					25,
					17,
					9,
					1,
					58,
					50,
					42,
					34,
					26,
					18,
					10,
					2,
					59,
					51,
					43,
					35,
					27,
					19,
					11,
					3,
					60,
					52,
					44,
					36,
					63,
					55,
					47,
					39,
					31,
					23,
					15,
					7,
					62,
					54,
					46,
					38,
					30,
					22,
					14,
					6,
					61,
					53,
					45,
					37,
					29,
					21,
					13,
					5,
					28,
					20,
					12,
					4
				], s = [
					14,
					17,
					11,
					24,
					1,
					5,
					3,
					28,
					15,
					6,
					21,
					10,
					23,
					19,
					12,
					4,
					26,
					8,
					16,
					7,
					27,
					20,
					13,
					2,
					41,
					52,
					31,
					37,
					47,
					55,
					30,
					40,
					51,
					45,
					33,
					48,
					44,
					49,
					39,
					56,
					34,
					53,
					46,
					42,
					50,
					36,
					29,
					32
				], c = [
					1,
					2,
					4,
					6,
					8,
					10,
					12,
					14,
					15,
					17,
					19,
					21,
					23,
					25,
					27,
					28
				], u = [
					{
						0: 8421888,
						268435456: 32768,
						536870912: 8421378,
						805306368: 2,
						1073741824: 512,
						1342177280: 8421890,
						1610612736: 8389122,
						1879048192: 8388608,
						2147483648: 514,
						2415919104: 8389120,
						2684354560: 33280,
						2952790016: 8421376,
						3221225472: 32770,
						3489660928: 8388610,
						3758096384: 0,
						4026531840: 33282,
						134217728: 0,
						402653184: 8421890,
						671088640: 33282,
						939524096: 32768,
						1207959552: 8421888,
						1476395008: 512,
						1744830464: 8421378,
						2013265920: 2,
						2281701376: 8389120,
						2550136832: 33280,
						2818572288: 8421376,
						3087007744: 8389122,
						3355443200: 8388610,
						3623878656: 32770,
						3892314112: 514,
						4160749568: 8388608,
						1: 32768,
						268435457: 2,
						536870913: 8421888,
						805306369: 8388608,
						1073741825: 8421378,
						1342177281: 33280,
						1610612737: 512,
						1879048193: 8389122,
						2147483649: 8421890,
						2415919105: 8421376,
						2684354561: 8388610,
						2952790017: 33282,
						3221225473: 514,
						3489660929: 8389120,
						3758096385: 32770,
						4026531841: 0,
						134217729: 8421890,
						402653185: 8421376,
						671088641: 8388608,
						939524097: 512,
						1207959553: 32768,
						1476395009: 8388610,
						1744830465: 2,
						2013265921: 33282,
						2281701377: 32770,
						2550136833: 8389122,
						2818572289: 514,
						3087007745: 8421888,
						3355443201: 8389120,
						3623878657: 0,
						3892314113: 33280,
						4160749569: 8421378
					},
					{
						0: 1074282512,
						16777216: 16384,
						33554432: 524288,
						50331648: 1074266128,
						67108864: 1073741840,
						83886080: 1074282496,
						100663296: 1073758208,
						117440512: 16,
						134217728: 540672,
						150994944: 1073758224,
						167772160: 1073741824,
						184549376: 540688,
						201326592: 524304,
						218103808: 0,
						234881024: 16400,
						251658240: 1074266112,
						8388608: 1073758208,
						25165824: 540688,
						41943040: 16,
						58720256: 1073758224,
						75497472: 1074282512,
						92274688: 1073741824,
						109051904: 524288,
						125829120: 1074266128,
						142606336: 524304,
						159383552: 0,
						176160768: 16384,
						192937984: 1074266112,
						209715200: 1073741840,
						226492416: 540672,
						243269632: 1074282496,
						260046848: 16400,
						268435456: 0,
						285212672: 1074266128,
						301989888: 1073758224,
						318767104: 1074282496,
						335544320: 1074266112,
						352321536: 16,
						369098752: 540688,
						385875968: 16384,
						402653184: 16400,
						419430400: 524288,
						436207616: 524304,
						452984832: 1073741840,
						469762048: 540672,
						486539264: 1073758208,
						503316480: 1073741824,
						520093696: 1074282512,
						276824064: 540688,
						293601280: 524288,
						310378496: 1074266112,
						327155712: 16384,
						343932928: 1073758208,
						360710144: 1074282512,
						377487360: 16,
						394264576: 1073741824,
						411041792: 1074282496,
						427819008: 1073741840,
						444596224: 1073758224,
						461373440: 524304,
						478150656: 0,
						494927872: 16400,
						511705088: 1074266128,
						528482304: 540672
					},
					{
						0: 260,
						1048576: 0,
						2097152: 67109120,
						3145728: 65796,
						4194304: 65540,
						5242880: 67108868,
						6291456: 67174660,
						7340032: 67174400,
						8388608: 67108864,
						9437184: 67174656,
						10485760: 65792,
						11534336: 67174404,
						12582912: 67109124,
						13631488: 65536,
						14680064: 4,
						15728640: 256,
						524288: 67174656,
						1572864: 67174404,
						2621440: 0,
						3670016: 67109120,
						4718592: 67108868,
						5767168: 65536,
						6815744: 65540,
						7864320: 260,
						8912896: 4,
						9961472: 256,
						11010048: 67174400,
						12058624: 65796,
						13107200: 65792,
						14155776: 67109124,
						15204352: 67174660,
						16252928: 67108864,
						16777216: 67174656,
						17825792: 65540,
						18874368: 65536,
						19922944: 67109120,
						20971520: 256,
						22020096: 67174660,
						23068672: 67108868,
						24117248: 0,
						25165824: 67109124,
						26214400: 67108864,
						27262976: 4,
						28311552: 65792,
						29360128: 67174400,
						30408704: 260,
						31457280: 65796,
						32505856: 67174404,
						17301504: 67108864,
						18350080: 260,
						19398656: 67174656,
						20447232: 0,
						21495808: 65540,
						22544384: 67109120,
						23592960: 256,
						24641536: 67174404,
						25690112: 65536,
						26738688: 67174660,
						27787264: 65796,
						28835840: 67108868,
						29884416: 67109124,
						30932992: 67174400,
						31981568: 4,
						33030144: 65792
					},
					{
						0: 2151682048,
						65536: 2147487808,
						131072: 4198464,
						196608: 2151677952,
						262144: 0,
						327680: 4198400,
						393216: 2147483712,
						458752: 4194368,
						524288: 2147483648,
						589824: 4194304,
						655360: 64,
						720896: 2147487744,
						786432: 2151678016,
						851968: 4160,
						917504: 4096,
						983040: 2151682112,
						32768: 2147487808,
						98304: 64,
						163840: 2151678016,
						229376: 2147487744,
						294912: 4198400,
						360448: 2151682112,
						425984: 0,
						491520: 2151677952,
						557056: 4096,
						622592: 2151682048,
						688128: 4194304,
						753664: 4160,
						819200: 2147483648,
						884736: 4194368,
						950272: 4198464,
						1015808: 2147483712,
						1048576: 4194368,
						1114112: 4198400,
						1179648: 2147483712,
						1245184: 0,
						1310720: 4160,
						1376256: 2151678016,
						1441792: 2151682048,
						1507328: 2147487808,
						1572864: 2151682112,
						1638400: 2147483648,
						1703936: 2151677952,
						1769472: 4198464,
						1835008: 2147487744,
						1900544: 4194304,
						1966080: 64,
						2031616: 4096,
						1081344: 2151677952,
						1146880: 2151682112,
						1212416: 0,
						1277952: 4198400,
						1343488: 4194368,
						1409024: 2147483648,
						1474560: 2147487808,
						1540096: 64,
						1605632: 2147483712,
						1671168: 4096,
						1736704: 2147487744,
						1802240: 2151678016,
						1867776: 4160,
						1933312: 2151682048,
						1998848: 4194304,
						2064384: 4198464
					},
					{
						0: 128,
						4096: 17039360,
						8192: 262144,
						12288: 536870912,
						16384: 537133184,
						20480: 16777344,
						24576: 553648256,
						28672: 262272,
						32768: 16777216,
						36864: 537133056,
						40960: 536871040,
						45056: 553910400,
						49152: 553910272,
						53248: 0,
						57344: 17039488,
						61440: 553648128,
						2048: 17039488,
						6144: 553648256,
						10240: 128,
						14336: 17039360,
						18432: 262144,
						22528: 537133184,
						26624: 553910272,
						30720: 536870912,
						34816: 537133056,
						38912: 0,
						43008: 553910400,
						47104: 16777344,
						51200: 536871040,
						55296: 553648128,
						59392: 16777216,
						63488: 262272,
						65536: 262144,
						69632: 128,
						73728: 536870912,
						77824: 553648256,
						81920: 16777344,
						86016: 553910272,
						90112: 537133184,
						94208: 16777216,
						98304: 553910400,
						102400: 553648128,
						106496: 17039360,
						110592: 537133056,
						114688: 262272,
						118784: 536871040,
						122880: 0,
						126976: 17039488,
						67584: 553648256,
						71680: 16777216,
						75776: 17039360,
						79872: 537133184,
						83968: 536870912,
						88064: 17039488,
						92160: 128,
						96256: 553910272,
						100352: 262272,
						104448: 553910400,
						108544: 0,
						112640: 553648128,
						116736: 16777344,
						120832: 262144,
						124928: 537133056,
						129024: 536871040
					},
					{
						0: 268435464,
						256: 8192,
						512: 270532608,
						768: 270540808,
						1024: 268443648,
						1280: 2097152,
						1536: 2097160,
						1792: 268435456,
						2048: 0,
						2304: 268443656,
						2560: 2105344,
						2816: 8,
						3072: 270532616,
						3328: 2105352,
						3584: 8200,
						3840: 270540800,
						128: 270532608,
						384: 270540808,
						640: 8,
						896: 2097152,
						1152: 2105352,
						1408: 268435464,
						1664: 268443648,
						1920: 8200,
						2176: 2097160,
						2432: 8192,
						2688: 268443656,
						2944: 270532616,
						3200: 0,
						3456: 270540800,
						3712: 2105344,
						3968: 268435456,
						4096: 268443648,
						4352: 270532616,
						4608: 270540808,
						4864: 8200,
						5120: 2097152,
						5376: 268435456,
						5632: 268435464,
						5888: 2105344,
						6144: 2105352,
						6400: 0,
						6656: 8,
						6912: 270532608,
						7168: 8192,
						7424: 268443656,
						7680: 270540800,
						7936: 2097160,
						4224: 8,
						4480: 2105344,
						4736: 2097152,
						4992: 268435464,
						5248: 268443648,
						5504: 8200,
						5760: 270540808,
						6016: 270532608,
						6272: 270540800,
						6528: 270532616,
						6784: 8192,
						7040: 2105352,
						7296: 2097160,
						7552: 0,
						7808: 268435456,
						8064: 268443656
					},
					{
						0: 1048576,
						16: 33555457,
						32: 1024,
						48: 1049601,
						64: 34604033,
						80: 0,
						96: 1,
						112: 34603009,
						128: 33555456,
						144: 1048577,
						160: 33554433,
						176: 34604032,
						192: 34603008,
						208: 1025,
						224: 1049600,
						240: 33554432,
						8: 34603009,
						24: 0,
						40: 33555457,
						56: 34604032,
						72: 1048576,
						88: 33554433,
						104: 33554432,
						120: 1025,
						136: 1049601,
						152: 33555456,
						168: 34603008,
						184: 1048577,
						200: 1024,
						216: 34604033,
						232: 1,
						248: 1049600,
						256: 33554432,
						272: 1048576,
						288: 33555457,
						304: 34603009,
						320: 1048577,
						336: 33555456,
						352: 34604032,
						368: 1049601,
						384: 1025,
						400: 34604033,
						416: 1049600,
						432: 1,
						448: 0,
						464: 34603008,
						480: 33554433,
						496: 1024,
						264: 1049600,
						280: 33555457,
						296: 34603009,
						312: 1,
						328: 33554432,
						344: 1048576,
						360: 1025,
						376: 34604032,
						392: 33554433,
						408: 34603008,
						424: 0,
						440: 34604033,
						456: 1049601,
						472: 1024,
						488: 33555456,
						504: 1048577
					},
					{
						0: 134219808,
						1: 131072,
						2: 134217728,
						3: 32,
						4: 131104,
						5: 134350880,
						6: 134350848,
						7: 2048,
						8: 134348800,
						9: 134219776,
						10: 133120,
						11: 134348832,
						12: 2080,
						13: 0,
						14: 134217760,
						15: 133152,
						2147483648: 2048,
						2147483649: 134350880,
						2147483650: 134219808,
						2147483651: 134217728,
						2147483652: 134348800,
						2147483653: 133120,
						2147483654: 133152,
						2147483655: 32,
						2147483656: 134217760,
						2147483657: 2080,
						2147483658: 131104,
						2147483659: 134350848,
						2147483660: 0,
						2147483661: 134348832,
						2147483662: 134219776,
						2147483663: 131072,
						16: 133152,
						17: 134350848,
						18: 32,
						19: 2048,
						20: 134219776,
						21: 134217760,
						22: 134348832,
						23: 131072,
						24: 0,
						25: 131104,
						26: 134348800,
						27: 134219808,
						28: 134350880,
						29: 133120,
						30: 2080,
						31: 134217728,
						2147483664: 131072,
						2147483665: 2048,
						2147483666: 134348832,
						2147483667: 133152,
						2147483668: 32,
						2147483669: 134348800,
						2147483670: 134217728,
						2147483671: 134219808,
						2147483672: 134350880,
						2147483673: 134217760,
						2147483674: 134219776,
						2147483675: 0,
						2147483676: 133120,
						2147483677: 2080,
						2147483678: 131104,
						2147483679: 134350848
					}
				], l = [
					4160749569,
					528482304,
					33030144,
					2064384,
					129024,
					8064,
					504,
					2147483679
				], h = i.DES = o.extend({
					_doReset: function() {
						for (var e = this._key.words, t = [], r = 0; r < 56; r++) {
							var n = a[r] - 1;
							t[r] = e[n >>> 5] >>> 31 - n % 32 & 1;
						}
						for (var o = this._subKeys = [], i = 0; i < 16; i++) {
							var u = o[i] = [], l = c[i];
							for (r = 0; r < 24; r++) u[r / 6 | 0] |= t[(s[r] - 1 + l) % 28] << 31 - r % 6, u[4 + (r / 6 | 0)] |= t[28 + (s[r + 24] - 1 + l) % 28] << 31 - r % 6;
							for (u[0] = u[0] << 1 | u[0] >>> 31, r = 1; r < 7; r++) u[r] = u[r] >>> 4 * (r - 1) + 3;
							u[7] = u[7] << 5 | u[7] >>> 27;
						}
						var h = this._invSubKeys = [];
						for (r = 0; r < 16; r++) h[r] = o[15 - r];
					},
					encryptBlock: function(e, t) {
						this._doCryptBlock(e, t, this._subKeys);
					},
					decryptBlock: function(e, t) {
						this._doCryptBlock(e, t, this._invSubKeys);
					},
					_doCryptBlock: function(e, t, r) {
						this._lBlock = e[t], this._rBlock = e[t + 1], f.call(this, 4, 252645135), f.call(this, 16, 65535), p.call(this, 2, 858993459), p.call(this, 8, 16711935), f.call(this, 1, 1431655765);
						for (var n = 0; n < 16; n++) {
							for (var o = r[n], i = this._lBlock, a = this._rBlock, s = 0, c = 0; c < 8; c++) s |= u[c][((a ^ o[c]) & l[c]) >>> 0];
							this._lBlock = a, this._rBlock = i ^ s;
						}
						var h = this._lBlock;
						this._lBlock = this._rBlock, this._rBlock = h, f.call(this, 1, 1431655765), p.call(this, 8, 16711935), p.call(this, 2, 858993459), f.call(this, 16, 65535), f.call(this, 4, 252645135), e[t] = this._lBlock, e[t + 1] = this._rBlock;
					},
					keySize: 2,
					ivSize: 2,
					blockSize: 2
				});
				function f(e, t) {
					var r = (this._lBlock >>> e ^ this._rBlock) & t;
					this._rBlock ^= r, this._lBlock ^= r << e;
				}
				function p(e, t) {
					var r = (this._rBlock >>> e ^ this._lBlock) & t;
					this._lBlock ^= r, this._rBlock ^= r << e;
				}
				t.DES = o._createHelper(h);
				var d = i.TripleDES = o.extend({
					_doReset: function() {
						var e = this._key.words;
						if (2 !== e.length && 4 !== e.length && e.length < 6) throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
						var t = e.slice(0, 2), r = e.length < 4 ? e.slice(0, 2) : e.slice(2, 4), o = e.length < 6 ? e.slice(0, 2) : e.slice(4, 6);
						this._des1 = h.createEncryptor(n.create(t)), this._des2 = h.createEncryptor(n.create(r)), this._des3 = h.createEncryptor(n.create(o));
					},
					encryptBlock: function(e, t) {
						this._des1.encryptBlock(e, t), this._des2.decryptBlock(e, t), this._des3.encryptBlock(e, t);
					},
					decryptBlock: function(e, t) {
						this._des3.decryptBlock(e, t), this._des2.encryptBlock(e, t), this._des1.decryptBlock(e, t);
					},
					keySize: 6,
					ivSize: 2,
					blockSize: 2
				});
				t.TripleDES = o._createHelper(d);
			}(), e.TripleDES;
		}(ye(), He(), Oe(), ct(), ht())), Gt.exports;
	}
	var zt, Kt = { exports: {} };
	var Vt, Xt = { exports: {} };
	var Wt, Yt = { exports: {} };
	var Zt, Jt = { exports: {} };
	function qt() {
		return Zt || (Zt = 1, Jt.exports = function(e) {
			return function() {
				var t = e, r = t.lib.BlockCipher, n = t.algo;
				const o = 16, i = [
					608135816,
					2242054355,
					320440878,
					57701188,
					2752067618,
					698298832,
					137296536,
					3964562569,
					1160258022,
					953160567,
					3193202383,
					887688300,
					3232508343,
					3380367581,
					1065670069,
					3041331479,
					2450970073,
					2306472731
				], a = [
					[
						3509652390,
						2564797868,
						805139163,
						3491422135,
						3101798381,
						1780907670,
						3128725573,
						4046225305,
						614570311,
						3012652279,
						134345442,
						2240740374,
						1667834072,
						1901547113,
						2757295779,
						4103290238,
						227898511,
						1921955416,
						1904987480,
						2182433518,
						2069144605,
						3260701109,
						2620446009,
						720527379,
						3318853667,
						677414384,
						3393288472,
						3101374703,
						2390351024,
						1614419982,
						1822297739,
						2954791486,
						3608508353,
						3174124327,
						2024746970,
						1432378464,
						3864339955,
						2857741204,
						1464375394,
						1676153920,
						1439316330,
						715854006,
						3033291828,
						289532110,
						2706671279,
						2087905683,
						3018724369,
						1668267050,
						732546397,
						1947742710,
						3462151702,
						2609353502,
						2950085171,
						1814351708,
						2050118529,
						680887927,
						999245976,
						1800124847,
						3300911131,
						1713906067,
						1641548236,
						4213287313,
						1216130144,
						1575780402,
						4018429277,
						3917837745,
						3693486850,
						3949271944,
						596196993,
						3549867205,
						258830323,
						2213823033,
						772490370,
						2760122372,
						1774776394,
						2652871518,
						566650946,
						4142492826,
						1728879713,
						2882767088,
						1783734482,
						3629395816,
						2517608232,
						2874225571,
						1861159788,
						326777828,
						3124490320,
						2130389656,
						2716951837,
						967770486,
						1724537150,
						2185432712,
						2364442137,
						1164943284,
						2105845187,
						998989502,
						3765401048,
						2244026483,
						1075463327,
						1455516326,
						1322494562,
						910128902,
						469688178,
						1117454909,
						936433444,
						3490320968,
						3675253459,
						1240580251,
						122909385,
						2157517691,
						634681816,
						4142456567,
						3825094682,
						3061402683,
						2540495037,
						79693498,
						3249098678,
						1084186820,
						1583128258,
						426386531,
						1761308591,
						1047286709,
						322548459,
						995290223,
						1845252383,
						2603652396,
						3431023940,
						2942221577,
						3202600964,
						3727903485,
						1712269319,
						422464435,
						3234572375,
						1170764815,
						3523960633,
						3117677531,
						1434042557,
						442511882,
						3600875718,
						1076654713,
						1738483198,
						4213154764,
						2393238008,
						3677496056,
						1014306527,
						4251020053,
						793779912,
						2902807211,
						842905082,
						4246964064,
						1395751752,
						1040244610,
						2656851899,
						3396308128,
						445077038,
						3742853595,
						3577915638,
						679411651,
						2892444358,
						2354009459,
						1767581616,
						3150600392,
						3791627101,
						3102740896,
						284835224,
						4246832056,
						1258075500,
						768725851,
						2589189241,
						3069724005,
						3532540348,
						1274779536,
						3789419226,
						2764799539,
						1660621633,
						3471099624,
						4011903706,
						913787905,
						3497959166,
						737222580,
						2514213453,
						2928710040,
						3937242737,
						1804850592,
						3499020752,
						2949064160,
						2386320175,
						2390070455,
						2415321851,
						4061277028,
						2290661394,
						2416832540,
						1336762016,
						1754252060,
						3520065937,
						3014181293,
						791618072,
						3188594551,
						3933548030,
						2332172193,
						3852520463,
						3043980520,
						413987798,
						3465142937,
						3030929376,
						4245938359,
						2093235073,
						3534596313,
						375366246,
						2157278981,
						2479649556,
						555357303,
						3870105701,
						2008414854,
						3344188149,
						4221384143,
						3956125452,
						2067696032,
						3594591187,
						2921233993,
						2428461,
						544322398,
						577241275,
						1471733935,
						610547355,
						4027169054,
						1432588573,
						1507829418,
						2025931657,
						3646575487,
						545086370,
						48609733,
						2200306550,
						1653985193,
						298326376,
						1316178497,
						3007786442,
						2064951626,
						458293330,
						2589141269,
						3591329599,
						3164325604,
						727753846,
						2179363840,
						146436021,
						1461446943,
						4069977195,
						705550613,
						3059967265,
						3887724982,
						4281599278,
						3313849956,
						1404054877,
						2845806497,
						146425753,
						1854211946
					],
					[
						1266315497,
						3048417604,
						3681880366,
						3289982499,
						290971e4,
						1235738493,
						2632868024,
						2414719590,
						3970600049,
						1771706367,
						1449415276,
						3266420449,
						422970021,
						1963543593,
						2690192192,
						3826793022,
						1062508698,
						1531092325,
						1804592342,
						2583117782,
						2714934279,
						4024971509,
						1294809318,
						4028980673,
						1289560198,
						2221992742,
						1669523910,
						35572830,
						157838143,
						1052438473,
						1016535060,
						1802137761,
						1753167236,
						1386275462,
						3080475397,
						2857371447,
						1040679964,
						2145300060,
						2390574316,
						1461121720,
						2956646967,
						4031777805,
						4028374788,
						33600511,
						2920084762,
						1018524850,
						629373528,
						3691585981,
						3515945977,
						2091462646,
						2486323059,
						586499841,
						988145025,
						935516892,
						3367335476,
						2599673255,
						2839830854,
						265290510,
						3972581182,
						2759138881,
						3795373465,
						1005194799,
						847297441,
						406762289,
						1314163512,
						1332590856,
						1866599683,
						4127851711,
						750260880,
						613907577,
						1450815602,
						3165620655,
						3734664991,
						3650291728,
						3012275730,
						3704569646,
						1427272223,
						778793252,
						1343938022,
						2676280711,
						2052605720,
						1946737175,
						3164576444,
						3914038668,
						3967478842,
						3682934266,
						1661551462,
						3294938066,
						4011595847,
						840292616,
						3712170807,
						616741398,
						312560963,
						711312465,
						1351876610,
						322626781,
						1910503582,
						271666773,
						2175563734,
						1594956187,
						70604529,
						3617834859,
						1007753275,
						1495573769,
						4069517037,
						2549218298,
						2663038764,
						504708206,
						2263041392,
						3941167025,
						2249088522,
						1514023603,
						1998579484,
						1312622330,
						694541497,
						2582060303,
						2151582166,
						1382467621,
						776784248,
						2618340202,
						3323268794,
						2497899128,
						2784771155,
						503983604,
						4076293799,
						907881277,
						423175695,
						432175456,
						1378068232,
						4145222326,
						3954048622,
						3938656102,
						3820766613,
						2793130115,
						2977904593,
						26017576,
						3274890735,
						3194772133,
						1700274565,
						1756076034,
						4006520079,
						3677328699,
						720338349,
						1533947780,
						354530856,
						688349552,
						3973924725,
						1637815568,
						332179504,
						3949051286,
						53804574,
						2852348879,
						3044236432,
						1282449977,
						3583942155,
						3416972820,
						4006381244,
						1617046695,
						2628476075,
						3002303598,
						1686838959,
						431878346,
						2686675385,
						1700445008,
						1080580658,
						1009431731,
						832498133,
						3223435511,
						2605976345,
						2271191193,
						2516031870,
						1648197032,
						4164389018,
						2548247927,
						300782431,
						375919233,
						238389289,
						3353747414,
						2531188641,
						2019080857,
						1475708069,
						455242339,
						2609103871,
						448939670,
						3451063019,
						1395535956,
						2413381860,
						1841049896,
						1491858159,
						885456874,
						4264095073,
						4001119347,
						1565136089,
						3898914787,
						1108368660,
						540939232,
						1173283510,
						2745871338,
						3681308437,
						4207628240,
						3343053890,
						4016749493,
						1699691293,
						1103962373,
						3625875870,
						2256883143,
						3830138730,
						1031889488,
						3479347698,
						1535977030,
						4236805024,
						3251091107,
						2132092099,
						1774941330,
						1199868427,
						1452454533,
						157007616,
						2904115357,
						342012276,
						595725824,
						1480756522,
						206960106,
						497939518,
						591360097,
						863170706,
						2375253569,
						3596610801,
						1814182875,
						2094937945,
						3421402208,
						1082520231,
						3463918190,
						2785509508,
						435703966,
						3908032597,
						1641649973,
						2842273706,
						3305899714,
						1510255612,
						2148256476,
						2655287854,
						3276092548,
						4258621189,
						236887753,
						3681803219,
						274041037,
						1734335097,
						3815195456,
						3317970021,
						1899903192,
						1026095262,
						4050517792,
						356393447,
						2410691914,
						3873677099,
						3682840055
					],
					[
						3913112168,
						2491498743,
						4132185628,
						2489919796,
						1091903735,
						1979897079,
						3170134830,
						3567386728,
						3557303409,
						857797738,
						1136121015,
						1342202287,
						507115054,
						2535736646,
						337727348,
						3213592640,
						1301675037,
						2528481711,
						1895095763,
						1721773893,
						3216771564,
						62756741,
						2142006736,
						835421444,
						2531993523,
						1442658625,
						3659876326,
						2882144922,
						676362277,
						1392781812,
						170690266,
						3921047035,
						1759253602,
						3611846912,
						1745797284,
						664899054,
						1329594018,
						3901205900,
						3045908486,
						2062866102,
						2865634940,
						3543621612,
						3464012697,
						1080764994,
						553557557,
						3656615353,
						3996768171,
						991055499,
						499776247,
						1265440854,
						648242737,
						3940784050,
						980351604,
						3713745714,
						1749149687,
						3396870395,
						4211799374,
						3640570775,
						1161844396,
						3125318951,
						1431517754,
						545492359,
						4268468663,
						3499529547,
						1437099964,
						2702547544,
						3433638243,
						2581715763,
						2787789398,
						1060185593,
						1593081372,
						2418618748,
						4260947970,
						69676912,
						2159744348,
						86519011,
						2512459080,
						3838209314,
						1220612927,
						3339683548,
						133810670,
						1090789135,
						1078426020,
						1569222167,
						845107691,
						3583754449,
						4072456591,
						1091646820,
						628848692,
						1613405280,
						3757631651,
						526609435,
						236106946,
						48312990,
						2942717905,
						3402727701,
						1797494240,
						859738849,
						992217954,
						4005476642,
						2243076622,
						3870952857,
						3732016268,
						765654824,
						3490871365,
						2511836413,
						1685915746,
						3888969200,
						1414112111,
						2273134842,
						3281911079,
						4080962846,
						172450625,
						2569994100,
						980381355,
						4109958455,
						2819808352,
						2716589560,
						2568741196,
						3681446669,
						3329971472,
						1835478071,
						660984891,
						3704678404,
						4045999559,
						3422617507,
						3040415634,
						1762651403,
						1719377915,
						3470491036,
						2693910283,
						3642056355,
						3138596744,
						1364962596,
						2073328063,
						1983633131,
						926494387,
						3423689081,
						2150032023,
						4096667949,
						1749200295,
						3328846651,
						309677260,
						2016342300,
						1779581495,
						3079819751,
						111262694,
						1274766160,
						443224088,
						298511866,
						1025883608,
						3806446537,
						1145181785,
						168956806,
						3641502830,
						3584813610,
						1689216846,
						3666258015,
						3200248200,
						1692713982,
						2646376535,
						4042768518,
						1618508792,
						1610833997,
						3523052358,
						4130873264,
						2001055236,
						3610705100,
						2202168115,
						4028541809,
						2961195399,
						1006657119,
						2006996926,
						3186142756,
						1430667929,
						3210227297,
						1314452623,
						4074634658,
						4101304120,
						2273951170,
						1399257539,
						3367210612,
						3027628629,
						1190975929,
						2062231137,
						2333990788,
						2221543033,
						2438960610,
						1181637006,
						548689776,
						2362791313,
						3372408396,
						3104550113,
						3145860560,
						296247880,
						1970579870,
						3078560182,
						3769228297,
						1714227617,
						3291629107,
						3898220290,
						166772364,
						1251581989,
						493813264,
						448347421,
						195405023,
						2709975567,
						677966185,
						3703036547,
						1463355134,
						2715995803,
						1338867538,
						1343315457,
						2802222074,
						2684532164,
						233230375,
						2599980071,
						2000651841,
						3277868038,
						1638401717,
						4028070440,
						3237316320,
						6314154,
						819756386,
						300326615,
						590932579,
						1405279636,
						3267499572,
						3150704214,
						2428286686,
						3959192993,
						3461946742,
						1862657033,
						1266418056,
						963775037,
						2089974820,
						2263052895,
						1917689273,
						448879540,
						3550394620,
						3981727096,
						150775221,
						3627908307,
						1303187396,
						508620638,
						2975983352,
						2726630617,
						1817252668,
						1876281319,
						1457606340,
						908771278,
						3720792119,
						3617206836,
						2455994898,
						1729034894,
						1080033504
					],
					[
						976866871,
						3556439503,
						2881648439,
						1522871579,
						1555064734,
						1336096578,
						3548522304,
						2579274686,
						3574697629,
						3205460757,
						3593280638,
						3338716283,
						3079412587,
						564236357,
						2993598910,
						1781952180,
						1464380207,
						3163844217,
						3332601554,
						1699332808,
						1393555694,
						1183702653,
						3581086237,
						1288719814,
						691649499,
						2847557200,
						2895455976,
						3193889540,
						2717570544,
						1781354906,
						1676643554,
						2592534050,
						3230253752,
						1126444790,
						2770207658,
						2633158820,
						2210423226,
						2615765581,
						2414155088,
						3127139286,
						673620729,
						2805611233,
						1269405062,
						4015350505,
						3341807571,
						4149409754,
						1057255273,
						2012875353,
						2162469141,
						2276492801,
						2601117357,
						993977747,
						3918593370,
						2654263191,
						753973209,
						36408145,
						2530585658,
						25011837,
						3520020182,
						2088578344,
						530523599,
						2918365339,
						1524020338,
						1518925132,
						3760827505,
						3759777254,
						1202760957,
						3985898139,
						3906192525,
						674977740,
						4174734889,
						2031300136,
						2019492241,
						3983892565,
						4153806404,
						3822280332,
						352677332,
						2297720250,
						60907813,
						90501309,
						3286998549,
						1016092578,
						2535922412,
						2839152426,
						457141659,
						509813237,
						4120667899,
						652014361,
						1966332200,
						2975202805,
						55981186,
						2327461051,
						676427537,
						3255491064,
						2882294119,
						3433927263,
						1307055953,
						942726286,
						933058658,
						2468411793,
						3933900994,
						4215176142,
						1361170020,
						2001714738,
						2830558078,
						3274259782,
						1222529897,
						1679025792,
						2729314320,
						3714953764,
						1770335741,
						151462246,
						3013232138,
						1682292957,
						1483529935,
						471910574,
						1539241949,
						458788160,
						3436315007,
						1807016891,
						3718408830,
						978976581,
						1043663428,
						3165965781,
						1927990952,
						4200891579,
						2372276910,
						3208408903,
						3533431907,
						1412390302,
						2931980059,
						4132332400,
						1947078029,
						3881505623,
						4168226417,
						2941484381,
						1077988104,
						1320477388,
						886195818,
						18198404,
						3786409e3,
						2509781533,
						112762804,
						3463356488,
						1866414978,
						891333506,
						18488651,
						661792760,
						1628790961,
						3885187036,
						3141171499,
						876946877,
						2693282273,
						1372485963,
						791857591,
						2686433993,
						3759982718,
						3167212022,
						3472953795,
						2716379847,
						445679433,
						3561995674,
						3504004811,
						3574258232,
						54117162,
						3331405415,
						2381918588,
						3769707343,
						4154350007,
						1140177722,
						4074052095,
						668550556,
						3214352940,
						367459370,
						261225585,
						2610173221,
						4209349473,
						3468074219,
						3265815641,
						314222801,
						3066103646,
						3808782860,
						282218597,
						3406013506,
						3773591054,
						379116347,
						1285071038,
						846784868,
						2669647154,
						3771962079,
						3550491691,
						2305946142,
						453669953,
						1268987020,
						3317592352,
						3279303384,
						3744833421,
						2610507566,
						3859509063,
						266596637,
						3847019092,
						517658769,
						3462560207,
						3443424879,
						370717030,
						4247526661,
						2224018117,
						4143653529,
						4112773975,
						2788324899,
						2477274417,
						1456262402,
						2901442914,
						1517677493,
						1846949527,
						2295493580,
						3734397586,
						2176403920,
						1280348187,
						1908823572,
						3871786941,
						846861322,
						1172426758,
						3287448474,
						3383383037,
						1655181056,
						3139813346,
						901632758,
						1897031941,
						2986607138,
						3066810236,
						3447102507,
						1393639104,
						373351379,
						950779232,
						625454576,
						3124240540,
						4148612726,
						2007998917,
						544563296,
						2244738638,
						2330496472,
						2058025392,
						1291430526,
						424198748,
						50039436,
						29584100,
						3605783033,
						2429876329,
						2791104160,
						1057563949,
						3255363231,
						3075367218,
						3463963227,
						1469046755,
						985887462
					]
				];
				var s = {
					pbox: [],
					sbox: []
				};
				function c(e, t) {
					let r = t >> 24 & 255, n = t >> 16 & 255, o = t >> 8 & 255, i = 255 & t, a = e.sbox[0][r] + e.sbox[1][n];
					return a ^= e.sbox[2][o], a += e.sbox[3][i], a;
				}
				function u(e, t, r) {
					let n, i = t, a = r;
					for (let t = 0; t < o; ++t) i ^= e.pbox[t], a = c(e, i) ^ a, n = i, i = a, a = n;
					return n = i, i = a, a = n, a ^= e.pbox[o], i ^= e.pbox[o + 1], {
						left: i,
						right: a
					};
				}
				function l(e, t, r) {
					let n, i = t, a = r;
					for (let t = o + 1; t > 1; --t) i ^= e.pbox[t], a = c(e, i) ^ a, n = i, i = a, a = n;
					return n = i, i = a, a = n, a ^= e.pbox[1], i ^= e.pbox[0], {
						left: i,
						right: a
					};
				}
				function h(e, t, r) {
					for (let t = 0; t < 4; t++) {
						e.sbox[t] = [];
						for (let r = 0; r < 256; r++) e.sbox[t][r] = a[t][r];
					}
					let n = 0;
					for (let a = 0; a < o + 2; a++) e.pbox[a] = i[a] ^ t[n], n++, n >= r && (n = 0);
					let s = 0, c = 0, l = 0;
					for (let t = 0; t < o + 2; t += 2) l = u(e, s, c), s = l.left, c = l.right, e.pbox[t] = s, e.pbox[t + 1] = c;
					for (let t = 0; t < 4; t++) for (let r = 0; r < 256; r += 2) l = u(e, s, c), s = l.left, c = l.right, e.sbox[t][r] = s, e.sbox[t][r + 1] = c;
					return !0;
				}
				var f = n.Blowfish = r.extend({
					_doReset: function() {
						if (this._keyPriorReset !== this._key) {
							var e = this._keyPriorReset = this._key, t = e.words;
							h(s, t, e.sigBytes / 4);
						}
					},
					encryptBlock: function(e, t) {
						var r = u(s, e[t], e[t + 1]);
						e[t] = r.left, e[t + 1] = r.right;
					},
					decryptBlock: function(e, t) {
						var r = l(s, e[t], e[t + 1]);
						e[t] = r.left, e[t + 1] = r.right;
					},
					blockSize: 2,
					keySize: 4,
					ivSize: 2
				});
				t.Blowfish = r._createHelper(f);
			}(), e.Blowfish;
		}(ye(), He(), Oe(), ct(), ht())), Jt.exports;
	}
	var Qt;
	var er = ne((Qt || (Qt = 1, ve.exports = function(e) {
		return e;
	}(ye(), be(), Ae(), Be(), He(), Me(), Oe(), Ue(), je(), ze || (ze = 1, Ke.exports = function(e) {
		return r = (t = e).lib.WordArray, n = t.algo, o = n.SHA256, i = n.SHA224 = o.extend({
			_doReset: function() {
				this._hash = new r.init([
					3238371032,
					914150663,
					812702999,
					4144912697,
					4290775857,
					1750603025,
					1694076839,
					3204075428
				]);
			},
			_doFinalize: function() {
				var e = o._doFinalize.call(this);
				return e.sigBytes -= 4, e;
			}
		}), t.SHA224 = o._createHelper(i), t.HmacSHA224 = o._createHmacHelper(i), e.SHA224;
		var t, r, n, o, i;
	}(ye(), je())), We(), Ye || (Ye = 1, Ze.exports = function(e) {
		return r = (t = e).x64, n = r.Word, o = r.WordArray, i = t.algo, a = i.SHA512, s = i.SHA384 = a.extend({
			_doReset: function() {
				this._hash = new o.init([
					new n.init(3418070365, 3238371032),
					new n.init(1654270250, 914150663),
					new n.init(2438529370, 812702999),
					new n.init(355462360, 4144912697),
					new n.init(1731405415, 4290775857),
					new n.init(2394180231, 1750603025),
					new n.init(3675008525, 1694076839),
					new n.init(1203062813, 3204075428)
				]);
			},
			_doFinalize: function() {
				var e = a._doFinalize.call(this);
				return e.sigBytes -= 16, e;
			}
		}), t.SHA384 = a._createHelper(s), t.HmacSHA384 = a._createHmacHelper(s), e.SHA384;
		var t, r, n, o, i, a, s;
	}(ye(), be(), We())), Qe(), $e || ($e = 1, et.exports = function(e) {
		return function() {
			var t = e, r = t.lib, n = r.WordArray, o = r.Hasher, i = t.algo, a = n.create([
				0,
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				7,
				4,
				13,
				1,
				10,
				6,
				15,
				3,
				12,
				0,
				9,
				5,
				2,
				14,
				11,
				8,
				3,
				10,
				14,
				4,
				9,
				15,
				8,
				1,
				2,
				7,
				0,
				6,
				13,
				11,
				5,
				12,
				1,
				9,
				11,
				10,
				0,
				8,
				12,
				4,
				13,
				3,
				7,
				15,
				14,
				5,
				6,
				2,
				4,
				0,
				5,
				9,
				7,
				12,
				2,
				10,
				14,
				1,
				3,
				8,
				11,
				6,
				15,
				13
			]), s = n.create([
				5,
				14,
				7,
				0,
				9,
				2,
				11,
				4,
				13,
				6,
				15,
				8,
				1,
				10,
				3,
				12,
				6,
				11,
				3,
				7,
				0,
				13,
				5,
				10,
				14,
				15,
				8,
				12,
				4,
				9,
				1,
				2,
				15,
				5,
				1,
				3,
				7,
				14,
				6,
				9,
				11,
				8,
				12,
				2,
				10,
				0,
				4,
				13,
				8,
				6,
				4,
				1,
				3,
				11,
				15,
				0,
				5,
				12,
				2,
				13,
				9,
				7,
				10,
				14,
				12,
				15,
				10,
				4,
				1,
				5,
				8,
				7,
				6,
				2,
				13,
				14,
				0,
				3,
				9,
				11
			]), c = n.create([
				11,
				14,
				15,
				12,
				5,
				8,
				7,
				9,
				11,
				13,
				14,
				15,
				6,
				7,
				9,
				8,
				7,
				6,
				8,
				13,
				11,
				9,
				7,
				15,
				7,
				12,
				15,
				9,
				11,
				7,
				13,
				12,
				11,
				13,
				6,
				7,
				14,
				9,
				13,
				15,
				14,
				8,
				13,
				6,
				5,
				12,
				7,
				5,
				11,
				12,
				14,
				15,
				14,
				15,
				9,
				8,
				9,
				14,
				5,
				6,
				8,
				6,
				5,
				12,
				9,
				15,
				5,
				11,
				6,
				8,
				13,
				12,
				5,
				12,
				13,
				14,
				11,
				8,
				5,
				6
			]), u = n.create([
				8,
				9,
				9,
				11,
				13,
				15,
				15,
				5,
				7,
				7,
				8,
				11,
				14,
				14,
				12,
				6,
				9,
				13,
				15,
				7,
				12,
				8,
				9,
				11,
				7,
				7,
				12,
				7,
				6,
				15,
				13,
				11,
				9,
				7,
				15,
				11,
				8,
				6,
				6,
				14,
				12,
				13,
				5,
				14,
				13,
				13,
				7,
				5,
				15,
				5,
				8,
				11,
				14,
				14,
				6,
				14,
				6,
				9,
				12,
				9,
				12,
				5,
				15,
				8,
				8,
				5,
				12,
				9,
				12,
				5,
				14,
				6,
				8,
				13,
				6,
				5,
				15,
				13,
				11,
				11
			]), l = n.create([
				0,
				1518500249,
				1859775393,
				2400959708,
				2840853838
			]), h = n.create([
				1352829926,
				1548603684,
				1836072691,
				2053994217,
				0
			]), f = i.RIPEMD160 = o.extend({
				_doReset: function() {
					this._hash = n.create([
						1732584193,
						4023233417,
						2562383102,
						271733878,
						3285377520
					]);
				},
				_doProcessBlock: function(e, t) {
					for (var r = 0; r < 16; r++) {
						var n = t + r, o = e[n];
						e[n] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
					}
					var i, f, _, E, b, T, L, A, w, S, B, C = this._hash.words, I = l.words, H = h.words, N = a.words, P = s.words, M = c.words, R = u.words;
					for (T = i = C[0], L = f = C[1], A = _ = C[2], w = E = C[3], S = b = C[4], r = 0; r < 80; r += 1) B = i + e[t + N[r]] | 0, B += r < 16 ? p(f, _, E) + I[0] : r < 32 ? d(f, _, E) + I[1] : r < 48 ? v(f, _, E) + I[2] : r < 64 ? g(f, _, E) + I[3] : m(f, _, E) + I[4], B = (B = y(B |= 0, M[r])) + b | 0, i = b, b = E, E = y(_, 10), _ = f, f = B, B = T + e[t + P[r]] | 0, B += r < 16 ? m(L, A, w) + H[0] : r < 32 ? g(L, A, w) + H[1] : r < 48 ? v(L, A, w) + H[2] : r < 64 ? d(L, A, w) + H[3] : p(L, A, w) + H[4], B = (B = y(B |= 0, R[r])) + S | 0, T = S, S = w, w = y(A, 10), A = L, L = B;
					B = C[1] + _ + w | 0, C[1] = C[2] + E + S | 0, C[2] = C[3] + b + T | 0, C[3] = C[4] + i + L | 0, C[4] = C[0] + f + A | 0, C[0] = B;
				},
				_doFinalize: function() {
					var e = this._data, t = e.words, r = 8 * this._nDataBytes, n = 8 * e.sigBytes;
					t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), e.sigBytes = 4 * (t.length + 1), this._process();
					for (var o = this._hash, i = o.words, a = 0; a < 5; a++) {
						var s = i[a];
						i[a] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
					}
					return o;
				},
				clone: function() {
					var e = o.clone.call(this);
					return e._hash = this._hash.clone(), e;
				}
			});
			function p(e, t, r) {
				return e ^ t ^ r;
			}
			function d(e, t, r) {
				return e & t | ~e & r;
			}
			function v(e, t, r) {
				return (e | ~t) ^ r;
			}
			function g(e, t, r) {
				return e & r | t & ~r;
			}
			function m(e, t, r) {
				return e ^ (t | ~r);
			}
			function y(e, t) {
				return e << t | e >>> 32 - t;
			}
			t.RIPEMD160 = o._createHelper(f), t.HmacRIPEMD160 = o._createHmacHelper(f);
		}(), e.RIPEMD160;
	}(ye())), nt(), ot || (ot = 1, it.exports = function(e) {
		return n = (r = (t = e).lib).Base, o = r.WordArray, a = (i = t.algo).SHA256, s = i.HMAC, c = i.PBKDF2 = n.extend({
			cfg: n.extend({
				keySize: 4,
				hasher: a,
				iterations: 25e4
			}),
			init: function(e) {
				this.cfg = this.cfg.extend(e);
			},
			compute: function(e, t) {
				for (var r = this.cfg, n = s.create(r.hasher, e), i = o.create(), a = o.create([1]), c = i.words, u = a.words, l = r.keySize, h = r.iterations; c.length < l;) {
					var f = n.update(t).finalize(a);
					n.reset();
					for (var p = f.words, d = p.length, v = f, g = 1; g < h; g++) {
						v = n.finalize(v), n.reset();
						for (var m = v.words, y = 0; y < d; y++) p[y] ^= m[y];
					}
					i.concat(f), u[0]++;
				}
				return i.sigBytes = 4 * l, i;
			}
		}), t.PBKDF2 = function(e, t, r) {
			return c.create(r).compute(e, t);
		}, e.PBKDF2;
		var t, r, n, o, i, a, s, c;
	}(ye(), je(), nt())), ct(), ht(), dt(), mt(), Et(), Lt(), At || (At = 1, wt.exports = function(e) {
		return e.mode.ECB = ((t = e.lib.BlockCipherMode.extend()).Encryptor = t.extend({ processBlock: function(e, t) {
			this._cipher.encryptBlock(e, t);
		} }), t.Decryptor = t.extend({ processBlock: function(e, t) {
			this._cipher.decryptBlock(e, t);
		} }), t), e.mode.ECB;
		var t;
	}(ye(), ht())), St || (St = 1, Bt.exports = function(e) {
		return e.pad.AnsiX923 = {
			pad: function(e, t) {
				var r = e.sigBytes, n = 4 * t, o = n - r % n, i = r + o - 1;
				e.clamp(), e.words[i >>> 2] |= o << 24 - i % 4 * 8, e.sigBytes += o;
			},
			unpad: function(e) {
				var t = 255 & e.words[e.sigBytes - 1 >>> 2];
				e.sigBytes -= t;
			}
		}, e.pad.Ansix923;
	}(ye(), ht())), Ct || (Ct = 1, It.exports = function(e) {
		return e.pad.Iso10126 = {
			pad: function(t, r) {
				var n = 4 * r, o = n - t.sigBytes % n;
				t.concat(e.lib.WordArray.random(o - 1)).concat(e.lib.WordArray.create([o << 24], 1));
			},
			unpad: function(e) {
				var t = 255 & e.words[e.sigBytes - 1 >>> 2];
				e.sigBytes -= t;
			}
		}, e.pad.Iso10126;
	}(ye(), ht())), Ht || (Ht = 1, Nt.exports = function(e) {
		return e.pad.Iso97971 = {
			pad: function(t, r) {
				t.concat(e.lib.WordArray.create([2147483648], 1)), e.pad.ZeroPadding.pad(t, r);
			},
			unpad: function(t) {
				e.pad.ZeroPadding.unpad(t), t.sigBytes--;
			}
		}, e.pad.Iso97971;
	}(ye(), ht())), Pt || (Pt = 1, Mt.exports = function(e) {
		return e.pad.ZeroPadding = {
			pad: function(e, t) {
				var r = 4 * t;
				e.clamp(), e.sigBytes += r - (e.sigBytes % r || r);
			},
			unpad: function(e) {
				var t = e.words, r = e.sigBytes - 1;
				for (r = e.sigBytes - 1; r >= 0; r--) if (t[r >>> 2] >>> 24 - r % 4 * 8 & 255) {
					e.sigBytes = r + 1;
					break;
				}
			}
		}, e.pad.ZeroPadding;
	}(ye(), ht())), Rt || (Rt = 1, xt.exports = function(e) {
		return e.pad.NoPadding = {
			pad: function() {},
			unpad: function() {}
		}, e.pad.NoPadding;
	}(ye(), ht())), Ot || (Ot = 1, Dt.exports = function(e) {
		return r = (t = e).lib.CipherParams, n = t.enc.Hex, t.format.Hex = {
			stringify: function(e) {
				return e.ciphertext.toString(n);
			},
			parse: function(e) {
				var t = n.parse(e);
				return r.create({ ciphertext: t });
			}
		}, e.format.Hex;
		var t, r, n;
	}(ye(), ht())), kt || (kt = 1, Ut.exports = function(e) {
		return function() {
			var t = e, r = t.lib.BlockCipher, n = t.algo, o = [], i = [], a = [], s = [], c = [], u = [], l = [], h = [], f = [], p = [];
			(function() {
				for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
				var r = 0, n = 0;
				for (t = 0; t < 256; t++) {
					var d = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
					d = d >>> 8 ^ 255 & d ^ 99, o[r] = d, i[d] = r;
					var v = e[r], g = e[v], m = e[g], y = 257 * e[d] ^ 16843008 * d;
					a[r] = y << 24 | y >>> 8, s[r] = y << 16 | y >>> 16, c[r] = y << 8 | y >>> 24, u[r] = y, y = 16843009 * m ^ 65537 * g ^ 257 * v ^ 16843008 * r, l[d] = y << 24 | y >>> 8, h[d] = y << 16 | y >>> 16, f[d] = y << 8 | y >>> 24, p[d] = y, r ? (r = v ^ e[e[e[m ^ v]]], n ^= e[e[n]]) : r = n = 1;
				}
			})();
			var d = [
				0,
				1,
				2,
				4,
				8,
				16,
				32,
				64,
				128,
				27,
				54
			], v = n.AES = r.extend({
				_doReset: function() {
					if (!this._nRounds || this._keyPriorReset !== this._key) {
						for (var e = this._keyPriorReset = this._key, t = e.words, r = e.sigBytes / 4, n = 4 * ((this._nRounds = r + 6) + 1), i = this._keySchedule = [], a = 0; a < n; a++) a < r ? i[a] = t[a] : (u = i[a - 1], a % r ? r > 6 && a % r == 4 && (u = o[u >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & u]) : (u = o[(u = u << 8 | u >>> 24) >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & u], u ^= d[a / r | 0] << 24), i[a] = i[a - r] ^ u);
						for (var s = this._invKeySchedule = [], c = 0; c < n; c++) {
							if (a = n - c, c % 4) var u = i[a];
							else u = i[a - 4];
							s[c] = c < 4 || a <= 4 ? u : l[o[u >>> 24]] ^ h[o[u >>> 16 & 255]] ^ f[o[u >>> 8 & 255]] ^ p[o[255 & u]];
						}
					}
				},
				encryptBlock: function(e, t) {
					this._doCryptBlock(e, t, this._keySchedule, a, s, c, u, o);
				},
				decryptBlock: function(e, t) {
					var r = e[t + 1];
					e[t + 1] = e[t + 3], e[t + 3] = r, this._doCryptBlock(e, t, this._invKeySchedule, l, h, f, p, i), r = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = r;
				},
				_doCryptBlock: function(e, t, r, n, o, i, a, s) {
					for (var c = this._nRounds, u = e[t] ^ r[0], l = e[t + 1] ^ r[1], h = e[t + 2] ^ r[2], f = e[t + 3] ^ r[3], p = 4, d = 1; d < c; d++) {
						var v = n[u >>> 24] ^ o[l >>> 16 & 255] ^ i[h >>> 8 & 255] ^ a[255 & f] ^ r[p++], g = n[l >>> 24] ^ o[h >>> 16 & 255] ^ i[f >>> 8 & 255] ^ a[255 & u] ^ r[p++], m = n[h >>> 24] ^ o[f >>> 16 & 255] ^ i[u >>> 8 & 255] ^ a[255 & l] ^ r[p++], y = n[f >>> 24] ^ o[u >>> 16 & 255] ^ i[l >>> 8 & 255] ^ a[255 & h] ^ r[p++];
						u = v, l = g, h = m, f = y;
					}
					v = (s[u >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & f]) ^ r[p++], g = (s[l >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & u]) ^ r[p++], m = (s[h >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & l]) ^ r[p++], y = (s[f >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & h]) ^ r[p++], e[t] = v, e[t + 1] = g, e[t + 2] = m, e[t + 3] = y;
				},
				keySize: 8
			});
			t.AES = r._createHelper(v);
		}(), e.AES;
	}(ye(), He(), Oe(), ct(), ht())), jt(), zt || (zt = 1, Kt.exports = function(e) {
		return function() {
			var t = e, r = t.lib.StreamCipher, n = t.algo, o = n.RC4 = r.extend({
				_doReset: function() {
					for (var e = this._key, t = e.words, r = e.sigBytes, n = this._S = [], o = 0; o < 256; o++) n[o] = o;
					o = 0;
					for (var i = 0; o < 256; o++) {
						var a = o % r, s = t[a >>> 2] >>> 24 - a % 4 * 8 & 255;
						i = (i + n[o] + s) % 256;
						var c = n[o];
						n[o] = n[i], n[i] = c;
					}
					this._i = this._j = 0;
				},
				_doProcessBlock: function(e, t) {
					e[t] ^= i.call(this);
				},
				keySize: 8,
				ivSize: 0
			});
			function i() {
				for (var e = this._S, t = this._i, r = this._j, n = 0, o = 0; o < 4; o++) {
					r = (r + e[t = (t + 1) % 256]) % 256;
					var i = e[t];
					e[t] = e[r], e[r] = i, n |= e[(e[t] + e[r]) % 256] << 24 - 8 * o;
				}
				return this._i = t, this._j = r, n;
			}
			t.RC4 = r._createHelper(o);
			var a = n.RC4Drop = o.extend({
				cfg: o.cfg.extend({ drop: 192 }),
				_doReset: function() {
					o._doReset.call(this);
					for (var e = this.cfg.drop; e > 0; e--) i.call(this);
				}
			});
			t.RC4Drop = r._createHelper(a);
		}(), e.RC4;
	}(ye(), He(), Oe(), ct(), ht())), Vt || (Vt = 1, Xt.exports = function(e) {
		return function() {
			var t = e, r = t.lib.StreamCipher, n = t.algo, o = [], i = [], a = [], s = n.Rabbit = r.extend({
				_doReset: function() {
					for (var e = this._key.words, t = this.cfg.iv, r = 0; r < 4; r++) e[r] = 16711935 & (e[r] << 8 | e[r] >>> 24) | 4278255360 & (e[r] << 24 | e[r] >>> 8);
					var n = this._X = [
						e[0],
						e[3] << 16 | e[2] >>> 16,
						e[1],
						e[0] << 16 | e[3] >>> 16,
						e[2],
						e[1] << 16 | e[0] >>> 16,
						e[3],
						e[2] << 16 | e[1] >>> 16
					], o = this._C = [
						e[2] << 16 | e[2] >>> 16,
						4294901760 & e[0] | 65535 & e[1],
						e[3] << 16 | e[3] >>> 16,
						4294901760 & e[1] | 65535 & e[2],
						e[0] << 16 | e[0] >>> 16,
						4294901760 & e[2] | 65535 & e[3],
						e[1] << 16 | e[1] >>> 16,
						4294901760 & e[3] | 65535 & e[0]
					];
					for (this._b = 0, r = 0; r < 4; r++) c.call(this);
					for (r = 0; r < 8; r++) o[r] ^= n[r + 4 & 7];
					if (t) {
						var i = t.words, a = i[0], s = i[1], u = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), l = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), h = u >>> 16 | 4294901760 & l, f = l << 16 | 65535 & u;
						for (o[0] ^= u, o[1] ^= h, o[2] ^= l, o[3] ^= f, o[4] ^= u, o[5] ^= h, o[6] ^= l, o[7] ^= f, r = 0; r < 4; r++) c.call(this);
					}
				},
				_doProcessBlock: function(e, t) {
					var r = this._X;
					c.call(this), o[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16, o[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16, o[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16, o[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;
					for (var n = 0; n < 4; n++) o[n] = 16711935 & (o[n] << 8 | o[n] >>> 24) | 4278255360 & (o[n] << 24 | o[n] >>> 8), e[t + n] ^= o[n];
				},
				blockSize: 4,
				ivSize: 2
			});
			function c() {
				for (var e = this._X, t = this._C, r = 0; r < 8; r++) i[r] = t[r];
				for (t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < i[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < i[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < i[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < i[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < i[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < i[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < i[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < i[7] >>> 0 ? 1 : 0, r = 0; r < 8; r++) {
					var n = e[r] + t[r], o = 65535 & n, s = n >>> 16;
					a[r] = ((o * o >>> 17) + o * s >>> 15) + s * s ^ ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0);
				}
				e[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, e[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, e[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, e[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, e[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, e[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, e[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, e[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
			}
			t.Rabbit = r._createHelper(s);
		}(), e.Rabbit;
	}(ye(), He(), Oe(), ct(), ht())), Wt || (Wt = 1, Yt.exports = function(e) {
		return function() {
			var t = e, r = t.lib.StreamCipher, n = t.algo, o = [], i = [], a = [], s = n.RabbitLegacy = r.extend({
				_doReset: function() {
					var e = this._key.words, t = this.cfg.iv, r = this._X = [
						e[0],
						e[3] << 16 | e[2] >>> 16,
						e[1],
						e[0] << 16 | e[3] >>> 16,
						e[2],
						e[1] << 16 | e[0] >>> 16,
						e[3],
						e[2] << 16 | e[1] >>> 16
					], n = this._C = [
						e[2] << 16 | e[2] >>> 16,
						4294901760 & e[0] | 65535 & e[1],
						e[3] << 16 | e[3] >>> 16,
						4294901760 & e[1] | 65535 & e[2],
						e[0] << 16 | e[0] >>> 16,
						4294901760 & e[2] | 65535 & e[3],
						e[1] << 16 | e[1] >>> 16,
						4294901760 & e[3] | 65535 & e[0]
					];
					this._b = 0;
					for (var o = 0; o < 4; o++) c.call(this);
					for (o = 0; o < 8; o++) n[o] ^= r[o + 4 & 7];
					if (t) {
						var i = t.words, a = i[0], s = i[1], u = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), l = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), h = u >>> 16 | 4294901760 & l, f = l << 16 | 65535 & u;
						for (n[0] ^= u, n[1] ^= h, n[2] ^= l, n[3] ^= f, n[4] ^= u, n[5] ^= h, n[6] ^= l, n[7] ^= f, o = 0; o < 4; o++) c.call(this);
					}
				},
				_doProcessBlock: function(e, t) {
					var r = this._X;
					c.call(this), o[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16, o[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16, o[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16, o[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;
					for (var n = 0; n < 4; n++) o[n] = 16711935 & (o[n] << 8 | o[n] >>> 24) | 4278255360 & (o[n] << 24 | o[n] >>> 8), e[t + n] ^= o[n];
				},
				blockSize: 4,
				ivSize: 2
			});
			function c() {
				for (var e = this._X, t = this._C, r = 0; r < 8; r++) i[r] = t[r];
				for (t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < i[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < i[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < i[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < i[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < i[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < i[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < i[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < i[7] >>> 0 ? 1 : 0, r = 0; r < 8; r++) {
					var n = e[r] + t[r], o = 65535 & n, s = n >>> 16;
					a[r] = ((o * o >>> 17) + o * s >>> 15) + s * s ^ ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0);
				}
				e[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, e[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, e[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, e[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, e[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, e[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, e[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, e[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
			}
			t.RabbitLegacy = r._createHelper(s);
		}(), e.RabbitLegacy;
	}(ye(), He(), Oe(), ct(), ht())), qt())), ve.exports)), tr = [
		"Cham",
		"Jamo",
		"Kawi",
		"Lisu",
		"Toto",
		"Thai"
	], rr = function(e, t) {
		null != t && t[e] && "object" == typeof t[e] && "code" in t[e] && t[e].code && (e = t[e].code);
		try {
			var r = Q.get("Locale", e), n = r.language, o = r.region, i = r.script;
			if (e.split("-").length !== (a = 1, o && (a += 1), i && (a += 1), a)) return !1;
			if (Q.get("DisplayNames", [K], { type: "language" }).of(n) === n && !function(e) {
				return e >= "qaa" && e <= "qtz";
			}(n)) return !1;
			if (o) {
				if (Q.get("DisplayNames", [K], { type: "region" }).of(o) === o) return !1;
			}
			if (i) {
				if (Q.get("DisplayNames", [K], { type: "script" }).of(i) === i && !tr.includes(i)) return !1;
			}
			return !0;
		} catch (e) {
			return !1;
		}
		var a;
	}, nr = function(e) {
		try {
			return Intl.getCanonicalLocales(e)[0];
		} catch (t) {
			return e;
		}
	};
	function or(e, t) {
		var r = Q.get("Locale", e), n = r.language, o = r.region, i = r.script, a = Q.get("Locale", t), s = a.language, c = a.region, u = a.script;
		return n === s && (!o || !c || o === c) && (!i || !u || i === u);
	}
	function ir() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		try {
			for (var r = e.flat().map(nr), n = 0; n < r.length; n++) for (var o = n + 1; o < r.length; o++) if (!or(r[n], r[o])) return !1;
			return !0;
		} catch (e) {
			return console.error(e), !1;
		}
	}
	function ar() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		try {
			var r = e.flat().map(function(e) {
				return Q.get("Locale", e).language;
			});
			return r.every(function(e) {
				return e === r[0];
			});
		} catch (e) {
			return console.error(e), !1;
		}
	}
	function sr(e, t, r, n) {
		return !(!rr(e, n) || !rr(t, n) || r && r.some(function(e) {
			return !rr(e, n);
		})) && !ir(e, t) && !(r && !r.some(function(e) {
			return ar(t, e);
		}));
	}
	var cr = function(e, t, r) {
		if (null == e ? void 0 : e[t]) return "string" == typeof e[t] ? "name" === r ? e[t] : void 0 : e[t][r];
	}, ur = function(e, t) {
		return !!((null == t ? void 0 : t[e]) && "object" == typeof t[e] && "code" in t[e] && t[e].code && rr(t[e].code));
	};
	function lr(e, t) {
		var r = e;
		t && ur(e, t) && (e = t[e].code);
		try {
			var n = nr(e), o = Q.get("Locale", n), i = o.language, a = o.region;
			if (t) for (var s = 0, c = [
				r,
				e,
				n,
				i
			]; s < c.length; s++) {
				var u = cr(t, c[s], "emoji");
				if (u) return u;
			}
			if (a && dr[a]) return dr[a];
			var l = o.maximize(), h = l.region || "";
			return pr[l.language] || dr[h] || fr;
		} catch (e) {
			return fr;
		}
	}
	var hr = "🌍", fr = hr, pr = {
		ca: hr,
		eu: hr,
		ku: hr,
		bo: "🌏",
		ug: "🌏",
		gd: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
		cy: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
		gv: "🇮🇲",
		grc: "🏺"
	}, dr = {
		AF: "🇦🇫",
		AX: "🇦🇽",
		AL: "🇦🇱",
		DZ: "🇩🇿",
		AS: "🇦🇸",
		AD: "🇦🇩",
		AO: "🇦🇴",
		AI: "🇦🇮",
		AQ: "🇦🇶",
		AG: "🇦🇬",
		AR: "🇦🇷",
		AM: "🇦🇲",
		AW: "🇦🇼",
		AU: "🇦🇺",
		AT: "🇦🇹",
		AZ: "🇦🇿",
		BS: "🇧🇸",
		BH: "🇧🇭",
		BD: "🇧🇩",
		BB: "🇧🇧",
		BY: "🇧🇾",
		BE: "🇧🇪",
		BZ: "🇧🇿",
		BJ: "🇧🇯",
		BM: "🇧🇲",
		BT: "🇧🇹",
		BO: "🇧🇴",
		BQ: "🇧🇶",
		BA: "🇧🇦",
		BW: "🇧🇼",
		BV: "🇧🇻",
		BR: "🇧🇷",
		IO: "🇮🇴",
		BN: "🇧🇳",
		BG: "🇧🇬",
		BF: "🇧🇫",
		BI: "🇧🇮",
		CV: "🇨🇻",
		KH: "🇰🇭",
		CM: "🇨🇲",
		CA: "🇨🇦",
		KY: "🇰🇾",
		CF: "🇨🇫",
		TD: "🇹🇩",
		CL: "🇨🇱",
		CN: "🇨🇳",
		CX: "🇨🇽",
		CC: "🇨🇨",
		CO: "🇨🇴",
		KM: "🇰🇲",
		CD: "🇨🇩",
		CG: "🇨🇬",
		CK: "🇨🇰",
		CR: "🇨🇷",
		CI: "🇨🇮",
		HR: "🇭🇷",
		CU: "🇨🇺",
		CW: "🇨🇼",
		CY: "🇨🇾",
		CZ: "🇨🇿",
		DK: "🇩🇰",
		DJ: "🇩🇯",
		DM: "🇩🇲",
		DO: "🇩🇴",
		EC: "🇪🇨",
		EG: "🇪🇬",
		SV: "🇸🇻",
		GQ: "🇬🇶",
		ER: "🇪🇷",
		EE: "🇪🇪",
		SZ: "🇸🇿",
		ET: "🇪🇹",
		FK: "🇫🇰",
		FO: "🇫🇴",
		FJ: "🇫🇯",
		FI: "🇫🇮",
		FR: "🇫🇷",
		GF: "🇬🇫",
		PF: "🇵🇫",
		TF: "🇹🇫",
		GA: "🇬🇦",
		GM: "🇬🇲",
		GE: "🇬🇪",
		DE: "🇩🇪",
		GH: "🇬🇭",
		GI: "🇬🇮",
		GR: "🇬🇷",
		GL: "🇬🇱",
		GD: "🇬🇩",
		GP: "🇬🇵",
		GU: "🇬🇺",
		GT: "🇬🇹",
		GG: "🇬🇬",
		GN: "🇬🇳",
		GW: "🇬🇼",
		GY: "🇬🇾",
		HT: "🇭🇹",
		HM: "🇭🇲",
		VA: "🇻🇦",
		HN: "🇭🇳",
		HK: "🇭🇰",
		HU: "🇭🇺",
		IS: "🇮🇸",
		IN: "🇮🇳",
		ID: "🇮🇩",
		IR: "🇮🇷",
		IQ: "🇮🇶",
		IE: "🇮🇪",
		IM: "🇮🇲",
		IL: "🇮🇱",
		IT: "🇮🇹",
		JM: "🇯🇲",
		JP: "🇯🇵",
		JE: "🇯🇪",
		JO: "🇯🇴",
		KZ: "🇰🇿",
		KE: "🇰🇪",
		KI: "🇰🇮",
		KP: "🇰🇵",
		KR: "🇰🇷",
		KW: "🇰🇼",
		KG: "🇰🇬",
		LA: "🇱🇦",
		LV: "🇱🇻",
		LB: "🇱🇧",
		LS: "🇱🇸",
		LR: "🇱🇷",
		LY: "🇱🇾",
		LI: "🇱🇮",
		LT: "🇱🇹",
		LU: "🇱🇺",
		MO: "🇲🇴",
		MG: "🇲🇬",
		MW: "🇲🇼",
		MY: "🇲🇾",
		MV: "🇲🇻",
		ML: "🇲🇱",
		MT: "🇲🇹",
		MH: "🇲🇭",
		MQ: "🇲🇶",
		MR: "🇲🇷",
		MU: "🇲🇺",
		YT: "🇾🇹",
		MX: "🇲🇽",
		FM: "🇫🇲",
		MD: "🇲🇩",
		MC: "🇲🇨",
		MN: "🇲🇳",
		ME: "🇲🇪",
		MS: "🇲🇸",
		MA: "🇲🇦",
		MZ: "🇲🇿",
		MM: "🇲🇲",
		NA: "🇳🇦",
		NR: "🇳🇷",
		NP: "🇳🇵",
		NL: "🇳🇱",
		NC: "🇳🇨",
		NZ: "🇳🇿",
		NI: "🇳🇮",
		NE: "🇳🇪",
		NG: "🇳🇬",
		NU: "🇳🇺",
		NF: "🇳🇫",
		MK: "🇲🇰",
		MP: "🇲🇵",
		NO: "🇳🇴",
		OM: "🇴🇲",
		PK: "🇵🇰",
		PW: "🇵🇼",
		PS: "🇵🇸",
		PA: "🇵🇦",
		PG: "🇵🇬",
		PY: "🇵🇾",
		PE: "🇵🇪",
		PH: "🇵🇭",
		PN: "🇵🇳",
		PL: "🇵🇱",
		PT: "🇵🇹",
		PR: "🇵🇷",
		QA: "🇶🇦",
		RE: "🇷🇪",
		RO: "🇷🇴",
		RU: "🇷🇺",
		RW: "🇷🇼",
		BL: "🇧🇱",
		SH: "🇸🇭",
		KN: "🇰🇳",
		LC: "🇱🇨",
		MF: "🇲🇫",
		PM: "🇵🇲",
		VC: "🇻🇨",
		WS: "🇼🇸",
		SM: "🇸🇲",
		ST: "🇸🇹",
		SA: "🇸🇦",
		SN: "🇸🇳",
		RS: "🇷🇸",
		SC: "🇸🇨",
		SL: "🇸🇱",
		SG: "🇸🇬",
		SX: "🇸🇽",
		SK: "🇸🇰",
		SI: "🇸🇮",
		SB: "🇸🇧",
		SO: "🇸🇴",
		ZA: "🇿🇦",
		GS: "🇬🇸",
		SS: "🇸🇸",
		ES: "🇪🇸",
		LK: "🇱🇰",
		SD: "🇸🇩",
		SR: "🇸🇷",
		SJ: "🇸🇯",
		SE: "🇸🇪",
		CH: "🇨🇭",
		SY: "🇸🇾",
		TW: "🇹🇼",
		TJ: "🇹🇯",
		TZ: "🇹🇿",
		TH: "🇹🇭",
		TL: "🇹🇱",
		TG: "🇹🇬",
		TK: "🇹🇰",
		TO: "🇹🇴",
		TT: "🇹🇹",
		TN: "🇹🇳",
		TR: "🇹🇷",
		TM: "🇹🇲",
		TC: "🇹🇨",
		TV: "🇹🇻",
		UG: "🇺🇬",
		UA: "🇺🇦",
		AE: "🇦🇪",
		GB: "🇬🇧",
		US: "🇺🇸",
		UM: "🇺🇲",
		UY: "🇺🇾",
		UZ: "🇺🇿",
		VU: "🇻🇺",
		VE: "🇻🇪",
		VN: "🇻🇳",
		VG: "🇻🇬",
		VI: "🇻🇮",
		WF: "🇼🇫",
		EH: "🇪🇭",
		YE: "🇾🇪",
		ZM: "🇿🇲",
		ZW: "🇿🇼",
		EU: "🇪🇺",
		419: "🌎"
	};
	function vr(e, t) {
		if (t) {
			for (var n = {}, o = 0, i = e; o < i.length; o++) {
				var a = t[i[o]];
				a && ("string" == typeof a ? n.name || (n.name = a) : a && (n = r(r({}, a), n)));
			}
			return n;
		}
	}
	function gr(e, t, r) {
		void 0 === t && (t = K);
		var n = e;
		r && ur(e, r) && (e = r[e].code), t || (t = K);
		try {
			var o = nr(e), i = Q.get("Locale", e), a = vr([
				n,
				e,
				o,
				D = i.language
			], r), s = i.region, c = i.maximize(), u = c.toString(), l = i.region || (null == a ? void 0 : a.regionCode) || c.region || "", h = i.script || (null == a ? void 0 : a.scriptCode) || c.script || "", f = i.minimize().toString(), p = [
				t,
				e,
				K
			], d = [
				e,
				t,
				K
			], v = Q.get("DisplayNames", p, { type: "language" }), g = Q.get("DisplayNames", d, { type: "language" }), m = null == a ? void 0 : a.name, y = (null == a ? void 0 : a.nativeName) || (null == a ? void 0 : a.name), _ = m || v.of(e) || e, E = y || g.of(e) || e, b = (null == a ? void 0 : a.maximizedName) || m || v.of(u) || e, T = (null == a ? void 0 : a.nativeMaximizedName) || y || g.of(u) || e, L = (null == a ? void 0 : a.minimizedName) || m || v.of(f) || e, A = (null == a ? void 0 : a.nativeMinimizedName) || y || g.of(f) || e, w = (null == a ? void 0 : a.languageName) || m || v.of(D) || e, S = (null == a ? void 0 : a.nativeLanguageName) || y || g.of(D) || e, B = (null == a ? void 0 : a.nameWithRegionCode) || s ? "".concat(w, " (").concat(s, ")") : _, C = (null == a ? void 0 : a.nativeNameWithRegionCode) || (s ? "".concat(S, " (").concat(s, ")") : E) || B, I = Q.get("DisplayNames", p, { type: "region" }), H = Q.get("DisplayNames", d, { type: "region" }), N = (null == a ? void 0 : a.regionName) || (l ? I.of(l) : "") || "", P = (null == a ? void 0 : a.nativeRegionName) || (l ? H.of(l) : "") || "", M = Q.get("DisplayNames", p, { type: "script" }), R = Q.get("DisplayNames", d, { type: "script" });
			return {
				code: o,
				name: _,
				nativeName: E,
				maximizedCode: u,
				maximizedName: b,
				nativeMaximizedName: T,
				minimizedCode: f,
				minimizedName: L,
				nativeMinimizedName: A,
				languageCode: D,
				languageName: w,
				nativeLanguageName: S,
				nameWithRegionCode: B,
				nativeNameWithRegionCode: C,
				regionCode: l,
				regionName: N,
				nativeRegionName: P,
				scriptCode: h,
				scriptName: k = (null == a ? void 0 : a.scriptName) || (h ? M.of(h) : "") || "",
				nativeScriptName: U = (null == a ? void 0 : a.nativeScriptName) || (h ? R.of(h) : "") || "",
				emoji: (null == a ? void 0 : a.emoji) || lr(o, r)
			};
		} catch (t) {
			var x = rr(e) ? nr(e) : e, O = null == x ? void 0 : x.split("-"), D = (null == O ? void 0 : O[0]) || x || "";
			l = O.length > 2 ? null == O ? void 0 : O[2] : (null == O ? void 0 : O[1]) || "", h = (null == O ? void 0 : O[3]) || "";
			x = (null == (a = vr([x, D], r)) ? void 0 : a.code) || x;
			_ = (null == a ? void 0 : a.name) || x, E = (null == a ? void 0 : a.nativeName) || _, u = (null == a ? void 0 : a.maximizedCode) || x, b = (null == a ? void 0 : a.maximizedName) || _, T = (null == a ? void 0 : a.nativeMaximizedName) || E, f = (null == a ? void 0 : a.minimizedCode) || x, L = (null == a ? void 0 : a.minimizedName) || _, A = (null == a ? void 0 : a.nativeMinimizedName) || E;
			D = (null == a ? void 0 : a.languageCode) || D;
			w = (null == a ? void 0 : a.languageName) || _, S = (null == a ? void 0 : a.nativeLanguageName) || E;
			l = (null == a ? void 0 : a.regionCode) || l;
			N = (null == a ? void 0 : a.regionName) || "", P = (null == a ? void 0 : a.nativeRegionName) || "";
			h = (null == a ? void 0 : a.scriptCode) || h;
			var k = (null == a ? void 0 : a.scriptName) || "", U = (null == a ? void 0 : a.nativeScriptName) || "";
			return {
				code: x,
				name: _,
				nativeName: E,
				maximizedCode: u,
				maximizedName: b,
				nativeMaximizedName: T,
				minimizedCode: f,
				minimizedName: L,
				nativeMinimizedName: A,
				languageCode: D,
				languageName: w,
				nativeLanguageName: S,
				nameWithRegionCode: B = (null == a ? void 0 : a.nameWithRegionCode) || (N ? "".concat(w, " (").concat(N, ")") : _),
				nativeNameWithRegionCode: C = (null == a ? void 0 : a.nativeNameWithRegionCode) || (P ? "".concat(S, " (").concat(P, ")") : E),
				regionCode: l,
				regionName: N,
				nativeRegionName: P,
				scriptCode: h,
				scriptName: k,
				nativeScriptName: U,
				emoji: (null == a ? void 0 : a.emoji) || fr
			};
		}
	}
	function mr(e, t, o) {
		"string" == typeof e && (e = [e]), e = e.filter(function(e) {
			return rr(e, o);
		}).map(nr), t = t.filter(function(e) {
			return rr(e, o);
		}).map(nr);
		for (var i = function(e) {
			var o = t.filter(function(t) {
				return ar(e, t);
			}), i = function(e) {
				for (var t = e.locale, r = e.languageCode, n = e.minimizedCode, i = e.regionCode, a = e.scriptCode, s = 0, c = [
					t,
					"".concat(r, "-").concat(i),
					"".concat(r, "-").concat(a),
					n
				]; s < c.length; s++) {
					var u = c[s];
					if (o.includes(u)) return u;
				}
				return null;
			}, a = gr(e), s = a.languageCode, c = n(a, ["languageCode"]), u = i(r({
				locale: e,
				languageCode: s
			}, c)) || i(r({ locale: s }, gr(s)));
			if (u) return { value: u };
		}, a = 0, s = e; a < s.length; a++) {
			var c = i(s[a]);
			if ("object" == typeof c) return c.value;
		}
	}
	function yr(e, t) {
		var r = t && t.cache ? t.cache : Cr, n = t && t.serializer ? t.serializer : Sr;
		return (t && t.strategy ? t.strategy : Tr)(e, {
			cache: r,
			serializer: n
		});
	}
	function _r(e, t, r, n) {
		var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n), a = t.get(i);
		return void 0 === a && (a = e.call(this, n), t.set(i, a)), a;
	}
	function Er(e, t, r) {
		var n = Array.prototype.slice.call(arguments, 3), o = r(n), i = t.get(o);
		return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i;
	}
	function br(e, t, r, n, o) {
		return r.bind(t, e, n, o);
	}
	function Tr(e, t) {
		return br(e, this, 1 === e.length ? _r : Er, t.cache.create(), t.serializer);
	}
	var Lr, Ar, wr, Sr = function() {
		return JSON.stringify(arguments);
	}, Br = function() {
		function e() {
			this.cache = Object.create(null);
		}
		return e.prototype.get = function(e) {
			return this.cache[e];
		}, e.prototype.set = function(e, t) {
			this.cache[e] = t;
		}, e;
	}(), Cr = { create: function() {
		return new Br();
	} }, Ir = { variadic: function(e, t) {
		return br(e, this, Er, t.cache.create(), t.serializer);
	} };
	function Hr(e) {
		return e.type === Ar.literal;
	}
	function Nr(e) {
		return e.type === Ar.argument;
	}
	function Pr(e) {
		return e.type === Ar.number;
	}
	function Mr(e) {
		return e.type === Ar.date;
	}
	function Rr(e) {
		return e.type === Ar.time;
	}
	function xr(e) {
		return e.type === Ar.select;
	}
	function Or(e) {
		return e.type === Ar.plural;
	}
	function Dr(e) {
		return e.type === Ar.pound;
	}
	function kr(e) {
		return e.type === Ar.tag;
	}
	function Ur(e) {
		return !(!e || "object" != typeof e || e.type !== wr.number);
	}
	function Fr(e) {
		return !(!e || "object" != typeof e || e.type !== wr.dateTime);
	}
	(function(e) {
		e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
	})(Lr || (Lr = {})), function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	}(Ar || (Ar = {})), function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	}(wr || (wr = {}));
	var Gr = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, jr = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
	function zr(e) {
		var t = {};
		return e.replace(jr, function(e) {
			var r = e.length;
			switch (e[0]) {
				case "G":
					t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
					break;
				case "y":
					t.year = 2 === r ? "2-digit" : "numeric";
					break;
				case "Y":
				case "u":
				case "U":
				case "r": throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
				case "q":
				case "Q": throw new RangeError("`q/Q` (quarter) patterns are not supported");
				case "M":
				case "L":
					t.month = [
						"numeric",
						"2-digit",
						"short",
						"long",
						"narrow"
					][r - 1];
					break;
				case "w":
				case "W": throw new RangeError("`w/W` (week) patterns are not supported");
				case "d":
					t.day = ["numeric", "2-digit"][r - 1];
					break;
				case "D":
				case "F":
				case "g": throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
				case "E":
					t.weekday = 4 === r ? "long" : 5 === r ? "narrow" : "short";
					break;
				case "e":
					if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
					t.weekday = [
						"short",
						"long",
						"narrow",
						"short"
					][r - 4];
					break;
				case "c":
					if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
					t.weekday = [
						"short",
						"long",
						"narrow",
						"short"
					][r - 4];
					break;
				case "a":
					t.hour12 = !0;
					break;
				case "b":
				case "B": throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
				case "h":
					t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
					break;
				case "H":
					t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
					break;
				case "K":
					t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
					break;
				case "k":
					t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
					break;
				case "j":
				case "J":
				case "C": throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
				case "m":
					t.minute = ["numeric", "2-digit"][r - 1];
					break;
				case "s":
					t.second = ["numeric", "2-digit"][r - 1];
					break;
				case "S":
				case "A": throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
				case "z":
					t.timeZoneName = r < 4 ? "short" : "long";
					break;
				case "Z":
				case "O":
				case "v":
				case "V":
				case "X":
				case "x": throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
			}
			return "";
		}), t;
	}
	var Kr = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
	function Vr(e) {
		return e.replace(/^(.*?)-/, "");
	}
	var Xr = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Wr = /^(@+)?(\+|#+)?[rs]?$/g, Yr = /(\*)(0+)|(#+)(0+)|(0+)/g, Zr = /^(0+)$/;
	function Jr(e) {
		var t = {};
		return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(Wr, function(e, r, n) {
			return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), "";
		}), t;
	}
	function qr(e) {
		switch (e) {
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
	function Qr(e) {
		var t;
		if ("E" === e[0] && "E" === e[1] ? (t = { notation: "engineering" }, e = e.slice(2)) : "E" === e[0] && (t = { notation: "scientific" }, e = e.slice(1)), t) {
			var r = e.slice(0, 2);
			if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !Zr.test(e)) throw new Error("Malformed concise eng/scientific notation");
			t.minimumIntegerDigits = e.length;
		}
		return t;
	}
	function $r(e) {
		return qr(e) || {};
	}
	function en(e) {
		for (var t = {}, n = 0, o = e; n < o.length; n++) {
			var i = o[n];
			switch (i.stem) {
				case "percent":
				case "%":
					t.style = "percent";
					continue;
				case "%x100":
					t.style = "percent", t.scale = 100;
					continue;
				case "currency":
					t.style = "currency", t.currency = i.options[0];
					continue;
				case "group-off":
				case ",_":
					t.useGrouping = !1;
					continue;
				case "precision-integer":
				case ".":
					t.maximumFractionDigits = 0;
					continue;
				case "measure-unit":
				case "unit":
					t.style = "unit", t.unit = Vr(i.options[0]);
					continue;
				case "compact-short":
				case "K":
					t.notation = "compact", t.compactDisplay = "short";
					continue;
				case "compact-long":
				case "KK":
					t.notation = "compact", t.compactDisplay = "long";
					continue;
				case "scientific":
					t = r(r(r({}, t), { notation: "scientific" }), i.options.reduce(function(e, t) {
						return r(r({}, e), $r(t));
					}, {}));
					continue;
				case "engineering":
					t = r(r(r({}, t), { notation: "engineering" }), i.options.reduce(function(e, t) {
						return r(r({}, e), $r(t));
					}, {}));
					continue;
				case "notation-simple":
					t.notation = "standard";
					continue;
				case "unit-width-narrow":
					t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
					continue;
				case "unit-width-short":
					t.currencyDisplay = "code", t.unitDisplay = "short";
					continue;
				case "unit-width-full-name":
					t.currencyDisplay = "name", t.unitDisplay = "long";
					continue;
				case "unit-width-iso-code":
					t.currencyDisplay = "symbol";
					continue;
				case "scale":
					t.scale = parseFloat(i.options[0]);
					continue;
				case "rounding-mode-floor":
					t.roundingMode = "floor";
					continue;
				case "rounding-mode-ceiling":
					t.roundingMode = "ceil";
					continue;
				case "rounding-mode-down":
					t.roundingMode = "trunc";
					continue;
				case "rounding-mode-up":
					t.roundingMode = "expand";
					continue;
				case "rounding-mode-half-even":
					t.roundingMode = "halfEven";
					continue;
				case "rounding-mode-half-down":
					t.roundingMode = "halfTrunc";
					continue;
				case "rounding-mode-half-up":
					t.roundingMode = "halfExpand";
					continue;
				case "integer-width":
					if (i.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
					i.options[0].replace(Yr, function(e, r, n, o, i, a) {
						if (r) t.minimumIntegerDigits = n.length;
						else {
							if (o && i) throw new Error("We currently do not support maximum integer digits");
							if (a) throw new Error("We currently do not support exact integer digits");
						}
						return "";
					});
					continue;
			}
			if (Zr.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
			else if (Xr.test(i.stem)) {
				if (i.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
				i.stem.replace(Xr, function(e, r, n, o, i, a) {
					return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), "";
				});
				var a = i.options[0];
				"w" === a ? t = r(r({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = r(r({}, t), Jr(a)));
			} else if (Wr.test(i.stem)) t = r(r({}, t), Jr(i.stem));
			else {
				var s = qr(i.stem);
				s && (t = r(r({}, t), s));
				var c = Qr(i.stem);
				c && (t = r(r({}, t), c));
			}
		}
		return t;
	}
	var tn, rn = {
		"001": ["H", "h"],
		419: [
			"h",
			"H",
			"hB",
			"hb"
		],
		AC: [
			"H",
			"h",
			"hb",
			"hB"
		],
		AD: ["H", "hB"],
		AE: [
			"h",
			"hB",
			"hb",
			"H"
		],
		AF: [
			"H",
			"hb",
			"hB",
			"h"
		],
		AG: [
			"h",
			"hb",
			"H",
			"hB"
		],
		AI: [
			"H",
			"h",
			"hb",
			"hB"
		],
		AL: [
			"h",
			"H",
			"hB"
		],
		AM: ["H", "hB"],
		AO: ["H", "hB"],
		AR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		AS: ["h", "H"],
		AT: ["H", "hB"],
		AU: [
			"h",
			"hb",
			"H",
			"hB"
		],
		AW: ["H", "hB"],
		AX: ["H"],
		AZ: [
			"H",
			"hB",
			"h"
		],
		BA: [
			"H",
			"hB",
			"h"
		],
		BB: [
			"h",
			"hb",
			"H",
			"hB"
		],
		BD: [
			"h",
			"hB",
			"H"
		],
		BE: ["H", "hB"],
		BF: ["H", "hB"],
		BG: [
			"H",
			"hB",
			"h"
		],
		BH: [
			"h",
			"hB",
			"hb",
			"H"
		],
		BI: ["H", "h"],
		BJ: ["H", "hB"],
		BL: ["H", "hB"],
		BM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		BN: [
			"hb",
			"hB",
			"h",
			"H"
		],
		BO: [
			"h",
			"H",
			"hB",
			"hb"
		],
		BQ: ["H"],
		BR: ["H", "hB"],
		BS: [
			"h",
			"hb",
			"H",
			"hB"
		],
		BT: ["h", "H"],
		BW: [
			"H",
			"h",
			"hb",
			"hB"
		],
		BY: ["H", "h"],
		BZ: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CA: [
			"h",
			"hb",
			"H",
			"hB"
		],
		CC: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CD: ["hB", "H"],
		CF: [
			"H",
			"h",
			"hB"
		],
		CG: ["H", "hB"],
		CH: [
			"H",
			"hB",
			"h"
		],
		CI: ["H", "hB"],
		CK: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CL: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CM: [
			"H",
			"h",
			"hB"
		],
		CN: [
			"H",
			"hB",
			"hb",
			"h"
		],
		CO: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CP: ["H"],
		CR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CU: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CV: ["H", "hB"],
		CW: ["H", "hB"],
		CX: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CY: [
			"h",
			"H",
			"hb",
			"hB"
		],
		CZ: ["H"],
		DE: ["H", "hB"],
		DG: [
			"H",
			"h",
			"hb",
			"hB"
		],
		DJ: ["h", "H"],
		DK: ["H"],
		DM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		DO: [
			"h",
			"H",
			"hB",
			"hb"
		],
		DZ: [
			"h",
			"hB",
			"hb",
			"H"
		],
		EA: [
			"H",
			"h",
			"hB",
			"hb"
		],
		EC: [
			"h",
			"H",
			"hB",
			"hb"
		],
		EE: ["H", "hB"],
		EG: [
			"h",
			"hB",
			"hb",
			"H"
		],
		EH: [
			"h",
			"hB",
			"hb",
			"H"
		],
		ER: ["h", "H"],
		ES: [
			"H",
			"hB",
			"h",
			"hb"
		],
		ET: [
			"hB",
			"hb",
			"h",
			"H"
		],
		FI: ["H"],
		FJ: [
			"h",
			"hb",
			"H",
			"hB"
		],
		FK: [
			"H",
			"h",
			"hb",
			"hB"
		],
		FM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		FO: ["H", "h"],
		FR: ["H", "hB"],
		GA: ["H", "hB"],
		GB: [
			"H",
			"h",
			"hb",
			"hB"
		],
		GD: [
			"h",
			"hb",
			"H",
			"hB"
		],
		GE: [
			"H",
			"hB",
			"h"
		],
		GF: ["H", "hB"],
		GG: [
			"H",
			"h",
			"hb",
			"hB"
		],
		GH: ["h", "H"],
		GI: [
			"H",
			"h",
			"hb",
			"hB"
		],
		GL: ["H", "h"],
		GM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		GN: ["H", "hB"],
		GP: ["H", "hB"],
		GQ: [
			"H",
			"hB",
			"h",
			"hb"
		],
		GR: [
			"h",
			"H",
			"hb",
			"hB"
		],
		GT: [
			"h",
			"H",
			"hB",
			"hb"
		],
		GU: [
			"h",
			"hb",
			"H",
			"hB"
		],
		GW: ["H", "hB"],
		GY: [
			"h",
			"hb",
			"H",
			"hB"
		],
		HK: [
			"h",
			"hB",
			"hb",
			"H"
		],
		HN: [
			"h",
			"H",
			"hB",
			"hb"
		],
		HR: ["H", "hB"],
		HU: ["H", "h"],
		IC: [
			"H",
			"h",
			"hB",
			"hb"
		],
		ID: ["H"],
		IE: [
			"H",
			"h",
			"hb",
			"hB"
		],
		IL: ["H", "hB"],
		IM: [
			"H",
			"h",
			"hb",
			"hB"
		],
		IN: ["h", "H"],
		IO: [
			"H",
			"h",
			"hb",
			"hB"
		],
		IQ: [
			"h",
			"hB",
			"hb",
			"H"
		],
		IR: ["hB", "H"],
		IS: ["H"],
		IT: ["H", "hB"],
		JE: [
			"H",
			"h",
			"hb",
			"hB"
		],
		JM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		JO: [
			"h",
			"hB",
			"hb",
			"H"
		],
		JP: [
			"H",
			"K",
			"h"
		],
		KE: [
			"hB",
			"hb",
			"H",
			"h"
		],
		KG: [
			"H",
			"h",
			"hB",
			"hb"
		],
		KH: [
			"hB",
			"h",
			"H",
			"hb"
		],
		KI: [
			"h",
			"hb",
			"H",
			"hB"
		],
		KM: [
			"H",
			"h",
			"hB",
			"hb"
		],
		KN: [
			"h",
			"hb",
			"H",
			"hB"
		],
		KP: [
			"h",
			"H",
			"hB",
			"hb"
		],
		KR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		KW: [
			"h",
			"hB",
			"hb",
			"H"
		],
		KY: [
			"h",
			"hb",
			"H",
			"hB"
		],
		KZ: ["H", "hB"],
		LA: [
			"H",
			"hb",
			"hB",
			"h"
		],
		LB: [
			"h",
			"hB",
			"hb",
			"H"
		],
		LC: [
			"h",
			"hb",
			"H",
			"hB"
		],
		LI: [
			"H",
			"hB",
			"h"
		],
		LK: [
			"H",
			"h",
			"hB",
			"hb"
		],
		LR: [
			"h",
			"hb",
			"H",
			"hB"
		],
		LS: ["h", "H"],
		LT: [
			"H",
			"h",
			"hb",
			"hB"
		],
		LU: [
			"H",
			"h",
			"hB"
		],
		LV: [
			"H",
			"hB",
			"hb",
			"h"
		],
		LY: [
			"h",
			"hB",
			"hb",
			"H"
		],
		MA: [
			"H",
			"h",
			"hB",
			"hb"
		],
		MC: ["H", "hB"],
		MD: ["H", "hB"],
		ME: [
			"H",
			"hB",
			"h"
		],
		MF: ["H", "hB"],
		MG: ["H", "h"],
		MH: [
			"h",
			"hb",
			"H",
			"hB"
		],
		MK: [
			"H",
			"h",
			"hb",
			"hB"
		],
		ML: ["H"],
		MM: [
			"hB",
			"hb",
			"H",
			"h"
		],
		MN: [
			"H",
			"h",
			"hb",
			"hB"
		],
		MO: [
			"h",
			"hB",
			"hb",
			"H"
		],
		MP: [
			"h",
			"hb",
			"H",
			"hB"
		],
		MQ: ["H", "hB"],
		MR: [
			"h",
			"hB",
			"hb",
			"H"
		],
		MS: [
			"H",
			"h",
			"hb",
			"hB"
		],
		MT: ["H", "h"],
		MU: ["H", "h"],
		MV: ["H", "h"],
		MW: [
			"h",
			"hb",
			"H",
			"hB"
		],
		MX: [
			"h",
			"H",
			"hB",
			"hb"
		],
		MY: [
			"hb",
			"hB",
			"h",
			"H"
		],
		MZ: ["H", "hB"],
		NA: [
			"h",
			"H",
			"hB",
			"hb"
		],
		NC: ["H", "hB"],
		NE: ["H"],
		NF: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NG: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NI: [
			"h",
			"H",
			"hB",
			"hb"
		],
		NL: ["H", "hB"],
		NO: ["H", "h"],
		NP: [
			"H",
			"h",
			"hB"
		],
		NR: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NU: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NZ: [
			"h",
			"hb",
			"H",
			"hB"
		],
		OM: [
			"h",
			"hB",
			"hb",
			"H"
		],
		PA: [
			"h",
			"H",
			"hB",
			"hb"
		],
		PE: [
			"h",
			"H",
			"hB",
			"hb"
		],
		PF: [
			"H",
			"h",
			"hB"
		],
		PG: ["h", "H"],
		PH: [
			"h",
			"hB",
			"hb",
			"H"
		],
		PK: [
			"h",
			"hB",
			"H"
		],
		PL: ["H", "h"],
		PM: ["H", "hB"],
		PN: [
			"H",
			"h",
			"hb",
			"hB"
		],
		PR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		PS: [
			"h",
			"hB",
			"hb",
			"H"
		],
		PT: ["H", "hB"],
		PW: ["h", "H"],
		PY: [
			"h",
			"H",
			"hB",
			"hb"
		],
		QA: [
			"h",
			"hB",
			"hb",
			"H"
		],
		RE: ["H", "hB"],
		RO: ["H", "hB"],
		RS: [
			"H",
			"hB",
			"h"
		],
		RU: ["H"],
		RW: ["H", "h"],
		SA: [
			"h",
			"hB",
			"hb",
			"H"
		],
		SB: [
			"h",
			"hb",
			"H",
			"hB"
		],
		SC: [
			"H",
			"h",
			"hB"
		],
		SD: [
			"h",
			"hB",
			"hb",
			"H"
		],
		SE: ["H"],
		SG: [
			"h",
			"hb",
			"H",
			"hB"
		],
		SH: [
			"H",
			"h",
			"hb",
			"hB"
		],
		SI: ["H", "hB"],
		SJ: ["H"],
		SK: ["H"],
		SL: [
			"h",
			"hb",
			"H",
			"hB"
		],
		SM: [
			"H",
			"h",
			"hB"
		],
		SN: [
			"H",
			"h",
			"hB"
		],
		SO: ["h", "H"],
		SR: ["H", "hB"],
		SS: [
			"h",
			"hb",
			"H",
			"hB"
		],
		ST: ["H", "hB"],
		SV: [
			"h",
			"H",
			"hB",
			"hb"
		],
		SX: [
			"H",
			"h",
			"hb",
			"hB"
		],
		SY: [
			"h",
			"hB",
			"hb",
			"H"
		],
		SZ: [
			"h",
			"hb",
			"H",
			"hB"
		],
		TA: [
			"H",
			"h",
			"hb",
			"hB"
		],
		TC: [
			"h",
			"hb",
			"H",
			"hB"
		],
		TD: [
			"h",
			"H",
			"hB"
		],
		TF: [
			"H",
			"h",
			"hB"
		],
		TG: ["H", "hB"],
		TH: ["H", "h"],
		TJ: ["H", "h"],
		TL: [
			"H",
			"hB",
			"hb",
			"h"
		],
		TM: ["H", "h"],
		TN: [
			"h",
			"hB",
			"hb",
			"H"
		],
		TO: ["h", "H"],
		TR: ["H", "hB"],
		TT: [
			"h",
			"hb",
			"H",
			"hB"
		],
		TW: [
			"hB",
			"hb",
			"h",
			"H"
		],
		TZ: [
			"hB",
			"hb",
			"H",
			"h"
		],
		UA: [
			"H",
			"hB",
			"h"
		],
		UG: [
			"hB",
			"hb",
			"H",
			"h"
		],
		UM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		US: [
			"h",
			"hb",
			"H",
			"hB"
		],
		UY: [
			"h",
			"H",
			"hB",
			"hb"
		],
		UZ: [
			"H",
			"hB",
			"h"
		],
		VA: [
			"H",
			"h",
			"hB"
		],
		VC: [
			"h",
			"hb",
			"H",
			"hB"
		],
		VE: [
			"h",
			"H",
			"hB",
			"hb"
		],
		VG: [
			"h",
			"hb",
			"H",
			"hB"
		],
		VI: [
			"h",
			"hb",
			"H",
			"hB"
		],
		VN: ["H", "h"],
		VU: ["h", "H"],
		WF: ["H", "hB"],
		WS: ["h", "H"],
		XK: [
			"H",
			"hB",
			"h"
		],
		YE: [
			"h",
			"hB",
			"hb",
			"H"
		],
		YT: ["H", "hB"],
		ZA: [
			"H",
			"h",
			"hb",
			"hB"
		],
		ZM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		ZW: ["H", "h"],
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
	function nn(e) {
		var t = e.hourCycle;
		if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
			case "h24": return "k";
			case "h23": return "H";
			case "h12": return "h";
			case "h11": return "K";
			default: throw new Error("Invalid hourCycle");
		}
		var r, n = e.language;
		return "root" !== n && (r = e.maximize().region), (rn[r || ""] || rn[n || ""] || rn["".concat(n, "-001")] || rn["001"])[0];
	}
	var on = new RegExp("^".concat(Gr.source, "*")), an = new RegExp("".concat(Gr.source, "*$"));
	function sn(e, t) {
		return {
			start: e,
			end: t
		};
	}
	var cn = !!String.prototype.startsWith && "_a".startsWith("a", 1), un = !!String.fromCodePoint, ln = !!Object.fromEntries, hn = !!String.prototype.codePointAt, fn = !!String.prototype.trimStart, pn = !!String.prototype.trimEnd, dn = !!Number.isSafeInteger ? Number.isSafeInteger : function(e) {
		return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
	}, vn = !0;
	try {
		vn = "a" === (null === (tn = Ln("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === tn ? void 0 : tn[0]);
	} catch (e) {
		vn = !1;
	}
	var gn, mn = cn ? function(e, t, r) {
		return e.startsWith(t, r);
	} : function(e, t, r) {
		return e.slice(r, r + t.length) === t;
	}, yn = un ? String.fromCodePoint : function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		for (var r, n = "", o = e.length, i = 0; o > i;) {
			if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
			n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320);
		}
		return n;
	}, _n = ln ? Object.fromEntries : function(e) {
		for (var t = {}, r = 0, n = e; r < n.length; r++) {
			var o = n[r], i = o[0];
			t[i] = o[1];
		}
		return t;
	}, En = hn ? function(e, t) {
		return e.codePointAt(t);
	} : function(e, t) {
		var r = e.length;
		if (!(t < 0 || t >= r)) {
			var n, o = e.charCodeAt(t);
			return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536;
		}
	}, bn = fn ? function(e) {
		return e.trimStart();
	} : function(e) {
		return e.replace(on, "");
	}, Tn = pn ? function(e) {
		return e.trimEnd();
	} : function(e) {
		return e.replace(an, "");
	};
	function Ln(e, t) {
		return new RegExp(e, t);
	}
	if (vn) {
		var An = Ln("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
		gn = function(e, t) {
			var r;
			return An.lastIndex = t, null !== (r = An.exec(e)[1]) && void 0 !== r ? r : "";
		};
	} else gn = function(e, t) {
		for (var r = [];;) {
			var n = En(e, t);
			if (void 0 === n || In(n) || Hn(n)) break;
			r.push(n), t += n >= 65536 ? 2 : 1;
		}
		return yn.apply(void 0, r);
	};
	var wn, Sn = function() {
		function e(e, t) {
			void 0 === t && (t = {}), this.message = e, this.position = {
				offset: 0,
				line: 1,
				column: 1
			}, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
		}
		return e.prototype.parse = function() {
			if (0 !== this.offset()) throw Error("parser can only be used once");
			return this.parseMessage(0, "", !1);
		}, e.prototype.parseMessage = function(e, t, r) {
			for (var n = []; !this.isEOF();) {
				var o = this.char();
				if (123 === o) {
					if ((i = this.parseArgument(e, r)).err) return i;
					n.push(i.val);
				} else {
					if (125 === o && e > 0) break;
					if (35 !== o || "plural" !== t && "selectordinal" !== t) {
						if (60 === o && !this.ignoreTag && 47 === this.peek()) {
							if (r) break;
							return this.error(Lr.UNMATCHED_CLOSING_TAG, sn(this.clonePosition(), this.clonePosition()));
						}
						if (60 === o && !this.ignoreTag && Bn(this.peek() || 0)) {
							if ((i = this.parseTag(e, t)).err) return i;
							n.push(i.val);
						} else {
							var i;
							if ((i = this.parseLiteral(e, t)).err) return i;
							n.push(i.val);
						}
					} else {
						var a = this.clonePosition();
						this.bump(), n.push({
							type: Ar.pound,
							location: sn(a, this.clonePosition())
						});
					}
				}
			}
			return {
				val: n,
				err: null
			};
		}, e.prototype.parseTag = function(e, t) {
			var r = this.clonePosition();
			this.bump();
			var n = this.parseTagName();
			if (this.bumpSpace(), this.bumpIf("/>")) return {
				val: {
					type: Ar.literal,
					value: "<".concat(n, "/>"),
					location: sn(r, this.clonePosition())
				},
				err: null
			};
			if (this.bumpIf(">")) {
				var o = this.parseMessage(e + 1, t, !0);
				if (o.err) return o;
				var i = o.val, a = this.clonePosition();
				if (this.bumpIf("</")) {
					if (this.isEOF() || !Bn(this.char())) return this.error(Lr.INVALID_TAG, sn(a, this.clonePosition()));
					var s = this.clonePosition();
					return n !== this.parseTagName() ? this.error(Lr.UNMATCHED_CLOSING_TAG, sn(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
						val: {
							type: Ar.tag,
							value: n,
							children: i,
							location: sn(r, this.clonePosition())
						},
						err: null
					} : this.error(Lr.INVALID_TAG, sn(a, this.clonePosition())));
				}
				return this.error(Lr.UNCLOSED_TAG, sn(r, this.clonePosition()));
			}
			return this.error(Lr.INVALID_TAG, sn(r, this.clonePosition()));
		}, e.prototype.parseTagName = function() {
			var e = this.offset();
			for (this.bump(); !this.isEOF() && Cn(this.char());) this.bump();
			return this.message.slice(e, this.offset());
		}, e.prototype.parseLiteral = function(e, t) {
			for (var r = this.clonePosition(), n = "";;) {
				var o = this.tryParseQuote(t);
				if (o) n += o;
				else {
					var i = this.tryParseUnquoted(e, t);
					if (i) n += i;
					else {
						var a = this.tryParseLeftAngleBracket();
						if (!a) break;
						n += a;
					}
				}
			}
			var s = sn(r, this.clonePosition());
			return {
				val: {
					type: Ar.literal,
					value: n,
					location: s
				},
				err: null
			};
		}, e.prototype.tryParseLeftAngleBracket = function() {
			return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Bn(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
			var e;
		}, e.prototype.tryParseQuote = function(e) {
			if (this.isEOF() || 39 !== this.char()) return null;
			switch (this.peek()) {
				case 39: return this.bump(), this.bump(), "'";
				case 123:
				case 60:
				case 62:
				case 125: break;
				case 35:
					if ("plural" === e || "selectordinal" === e) break;
					return null;
				default: return null;
			}
			this.bump();
			var t = [this.char()];
			for (this.bump(); !this.isEOF();) {
				var r = this.char();
				if (39 === r) {
					if (39 !== this.peek()) {
						this.bump();
						break;
					}
					t.push(39), this.bump();
				} else t.push(r);
				this.bump();
			}
			return yn.apply(void 0, t);
		}, e.prototype.tryParseUnquoted = function(e, t) {
			if (this.isEOF()) return null;
			var r = this.char();
			return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), yn(r));
		}, e.prototype.parseArgument = function(e, t) {
			var r = this.clonePosition();
			if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Lr.EXPECT_ARGUMENT_CLOSING_BRACE, sn(r, this.clonePosition()));
			if (125 === this.char()) return this.bump(), this.error(Lr.EMPTY_ARGUMENT, sn(r, this.clonePosition()));
			var n = this.parseIdentifierIfPossible().value;
			if (!n) return this.error(Lr.MALFORMED_ARGUMENT, sn(r, this.clonePosition()));
			if (this.bumpSpace(), this.isEOF()) return this.error(Lr.EXPECT_ARGUMENT_CLOSING_BRACE, sn(r, this.clonePosition()));
			switch (this.char()) {
				case 125: return this.bump(), {
					val: {
						type: Ar.argument,
						value: n,
						location: sn(r, this.clonePosition())
					},
					err: null
				};
				case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Lr.EXPECT_ARGUMENT_CLOSING_BRACE, sn(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
				default: return this.error(Lr.MALFORMED_ARGUMENT, sn(r, this.clonePosition()));
			}
		}, e.prototype.parseIdentifierIfPossible = function() {
			var e = this.clonePosition(), t = this.offset(), r = gn(this.message, t), n = t + r.length;
			return this.bumpTo(n), {
				value: r,
				location: sn(e, this.clonePosition())
			};
		}, e.prototype.parseArgumentOptions = function(e, t, n, o) {
			var i, a = this.clonePosition(), s = this.parseIdentifierIfPossible().value, c = this.clonePosition();
			switch (s) {
				case "": return this.error(Lr.EXPECT_ARGUMENT_TYPE, sn(a, c));
				case "number":
				case "date":
				case "time":
					this.bumpSpace();
					var u = null;
					if (this.bumpIf(",")) {
						this.bumpSpace();
						var l = this.clonePosition();
						if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
						if (0 === (d = Tn(y.val)).length) return this.error(Lr.EXPECT_ARGUMENT_STYLE, sn(this.clonePosition(), this.clonePosition()));
						u = {
							style: d,
							styleLocation: sn(l, this.clonePosition())
						};
					}
					if ((_ = this.tryParseArgumentClose(o)).err) return _;
					var h = sn(o, this.clonePosition());
					if (u && mn(null == u ? void 0 : u.style, "::", 0)) {
						var f = bn(u.style.slice(2));
						if ("number" === s) return (y = this.parseNumberSkeletonFromString(f, u.styleLocation)).err ? y : {
							val: {
								type: Ar.number,
								value: n,
								location: h,
								style: y.val
							},
							err: null
						};
						if (0 === f.length) return this.error(Lr.EXPECT_DATE_TIME_SKELETON, h);
						var p = f;
						this.locale && (p = function(e, t) {
							for (var r = "", n = 0; n < e.length; n++) {
								var o = e.charAt(n);
								if ("j" === o) {
									for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
									var a = 1 + (1 & i), s = i < 2 ? 1 : 3 + (i >> 1), c = nn(t);
									for ("H" != c && "k" != c || (s = 0); s-- > 0;) r += "a";
									for (; a-- > 0;) r = c + r;
								} else r += "J" === o ? "H" : o;
							}
							return r;
						}(f, this.locale));
						var d = {
							type: wr.dateTime,
							pattern: p,
							location: u.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? zr(p) : {}
						};
						return {
							val: {
								type: "date" === s ? Ar.date : Ar.time,
								value: n,
								location: h,
								style: d
							},
							err: null
						};
					}
					return {
						val: {
							type: "number" === s ? Ar.number : "date" === s ? Ar.date : Ar.time,
							value: n,
							location: h,
							style: null !== (i = null == u ? void 0 : u.style) && void 0 !== i ? i : null
						},
						err: null
					};
				case "plural":
				case "selectordinal":
				case "select":
					var v = this.clonePosition();
					if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Lr.EXPECT_SELECT_ARGUMENT_OPTIONS, sn(v, r({}, v)));
					this.bumpSpace();
					var g = this.parseIdentifierIfPossible(), m = 0;
					if ("select" !== s && "offset" === g.value) {
						if (!this.bumpIf(":")) return this.error(Lr.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, sn(this.clonePosition(), this.clonePosition()));
						var y;
						if (this.bumpSpace(), (y = this.tryParseDecimalInteger(Lr.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Lr.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
						this.bumpSpace(), g = this.parseIdentifierIfPossible(), m = y.val;
					}
					var _, E = this.tryParsePluralOrSelectOptions(e, s, t, g);
					if (E.err) return E;
					if ((_ = this.tryParseArgumentClose(o)).err) return _;
					var b = sn(o, this.clonePosition());
					return "select" === s ? {
						val: {
							type: Ar.select,
							value: n,
							options: _n(E.val),
							location: b
						},
						err: null
					} : {
						val: {
							type: Ar.plural,
							value: n,
							options: _n(E.val),
							offset: m,
							pluralType: "plural" === s ? "cardinal" : "ordinal",
							location: b
						},
						err: null
					};
				default: return this.error(Lr.INVALID_ARGUMENT_TYPE, sn(a, c));
			}
		}, e.prototype.tryParseArgumentClose = function(e) {
			return this.isEOF() || 125 !== this.char() ? this.error(Lr.EXPECT_ARGUMENT_CLOSING_BRACE, sn(e, this.clonePosition())) : (this.bump(), {
				val: !0,
				err: null
			});
		}, e.prototype.parseSimpleArgStyleIfPossible = function() {
			for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
				case 39:
					this.bump();
					var r = this.clonePosition();
					if (!this.bumpUntil("'")) return this.error(Lr.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, sn(r, this.clonePosition()));
					this.bump();
					break;
				case 123:
					e += 1, this.bump();
					break;
				case 125:
					if (!(e > 0)) return {
						val: this.message.slice(t.offset, this.offset()),
						err: null
					};
					e -= 1;
					break;
				default: this.bump();
			}
			return {
				val: this.message.slice(t.offset, this.offset()),
				err: null
			};
		}, e.prototype.parseNumberSkeletonFromString = function(e, t) {
			var r = [];
			try {
				r = function(e) {
					if (0 === e.length) throw new Error("Number skeleton cannot be empty");
					for (var t = [], r = 0, n = e.split(Kr).filter(function(e) {
						return e.length > 0;
					}); r < n.length; r++) {
						var o = n[r].split("/");
						if (0 === o.length) throw new Error("Invalid number skeleton");
						for (var i = o[0], a = o.slice(1), s = 0, c = a; s < c.length; s++) if (0 === c[s].length) throw new Error("Invalid number skeleton");
						t.push({
							stem: i,
							options: a
						});
					}
					return t;
				}(e);
			} catch (e) {
				return this.error(Lr.INVALID_NUMBER_SKELETON, t);
			}
			return {
				val: {
					type: wr.number,
					tokens: r,
					location: t,
					parsedOptions: this.shouldParseSkeletons ? en(r) : {}
				},
				err: null
			};
		}, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
			for (var o, i = !1, a = [], s = /* @__PURE__ */ new Set(), c = n.value, u = n.location;;) {
				if (0 === c.length) {
					var l = this.clonePosition();
					if ("select" === t || !this.bumpIf("=")) break;
					var h = this.tryParseDecimalInteger(Lr.EXPECT_PLURAL_ARGUMENT_SELECTOR, Lr.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (h.err) return h;
					u = sn(l, this.clonePosition()), c = this.message.slice(l.offset, this.offset());
				}
				if (s.has(c)) return this.error("select" === t ? Lr.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Lr.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
				"other" === c && (i = !0), this.bumpSpace();
				var f = this.clonePosition();
				if (!this.bumpIf("{")) return this.error("select" === t ? Lr.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Lr.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, sn(this.clonePosition(), this.clonePosition()));
				var p = this.parseMessage(e + 1, t, r);
				if (p.err) return p;
				var d = this.tryParseArgumentClose(f);
				if (d.err) return d;
				a.push([c, {
					value: p.val,
					location: sn(f, this.clonePosition())
				}]), s.add(c), this.bumpSpace(), c = (o = this.parseIdentifierIfPossible()).value, u = o.location;
			}
			return 0 === a.length ? this.error("select" === t ? Lr.EXPECT_SELECT_ARGUMENT_SELECTOR : Lr.EXPECT_PLURAL_ARGUMENT_SELECTOR, sn(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Lr.MISSING_OTHER_CLAUSE, sn(this.clonePosition(), this.clonePosition())) : {
				val: a,
				err: null
			};
		}, e.prototype.tryParseDecimalInteger = function(e, t) {
			var r = 1, n = this.clonePosition();
			this.bumpIf("+") || this.bumpIf("-") && (r = -1);
			for (var o = !1, i = 0; !this.isEOF();) {
				var a = this.char();
				if (!(a >= 48 && a <= 57)) break;
				o = !0, i = 10 * i + (a - 48), this.bump();
			}
			var s = sn(n, this.clonePosition());
			return o ? dn(i *= r) ? {
				val: i,
				err: null
			} : this.error(t, s) : this.error(e, s);
		}, e.prototype.offset = function() {
			return this.position.offset;
		}, e.prototype.isEOF = function() {
			return this.offset() === this.message.length;
		}, e.prototype.clonePosition = function() {
			return {
				offset: this.position.offset,
				line: this.position.line,
				column: this.position.column
			};
		}, e.prototype.char = function() {
			var e = this.position.offset;
			if (e >= this.message.length) throw Error("out of bound");
			var t = En(this.message, e);
			if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
			return t;
		}, e.prototype.error = function(e, t) {
			return {
				val: null,
				err: {
					kind: e,
					message: this.message,
					location: t
				}
			};
		}, e.prototype.bump = function() {
			if (!this.isEOF()) {
				var e = this.char();
				10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
			}
		}, e.prototype.bumpIf = function(e) {
			if (mn(this.message, e, this.offset())) {
				for (var t = 0; t < e.length; t++) this.bump();
				return !0;
			}
			return !1;
		}, e.prototype.bumpUntil = function(e) {
			var t = this.offset(), r = this.message.indexOf(e, t);
			return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
		}, e.prototype.bumpTo = function(e) {
			if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
			for (e = Math.min(e, this.message.length);;) {
				var t = this.offset();
				if (t === e) break;
				if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
				if (this.bump(), this.isEOF()) break;
			}
		}, e.prototype.bumpSpace = function() {
			for (; !this.isEOF() && In(this.char());) this.bump();
		}, e.prototype.peek = function() {
			if (this.isEOF()) return null;
			var e = this.char(), t = this.offset(), r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
			return null != r ? r : null;
		}, e;
	}();
	function Bn(e) {
		return e >= 97 && e <= 122 || e >= 65 && e <= 90;
	}
	function Cn(e) {
		return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
	}
	function In(e) {
		return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e;
	}
	function Hn(e) {
		return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094;
	}
	function Nn(e) {
		e.forEach(function(e) {
			if (delete e.location, xr(e) || Or(e)) for (var t in e.options) delete e.options[t].location, Nn(e.options[t].value);
			else Pr(e) && Ur(e.style) || (Mr(e) || Rr(e)) && Fr(e.style) ? delete e.style.location : kr(e) && Nn(e.children);
		});
	}
	function Pn(e, t) {
		void 0 === t && (t = {}), t = r({
			shouldParseSkeletons: !0,
			requiresOtherClause: !0
		}, t);
		var n = new Sn(e, t).parse();
		if (n.err) {
			var o = SyntaxError(Lr[n.err.kind]);
			throw o.location = n.err.location, o.originalMessage = n.err.message, o;
		}
		return null != t && t.captureLocation || Nn(n.val), n.val;
	}
	(function(e) {
		e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
	})(wn || (wn = {}));
	var Mn, Rn = function(e) {
		function r(t, r, n) {
			var o = e.call(this, t) || this;
			return o.code = r, o.originalMessage = n, o;
		}
		return t(r, e), r.prototype.toString = function() {
			return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
		}, r;
	}(Error), xn = function(e) {
		function r(t, r, n, o) {
			return e.call(this, "Invalid values for \"".concat(t, "\": \"").concat(r, "\". Options are \"").concat(Object.keys(n).join("\", \""), "\""), wn.INVALID_VALUE, o) || this;
		}
		return t(r, e), r;
	}(Rn), On = function(e) {
		function r(t, r, n) {
			return e.call(this, "Value for \"".concat(t, "\" must be of type ").concat(r), wn.INVALID_VALUE, n) || this;
		}
		return t(r, e), r;
	}(Rn), Dn = function(e) {
		function r(t, r) {
			return e.call(this, "The intl string context variable \"".concat(t, "\" was not provided to the string \"").concat(r, "\""), wn.MISSING_VALUE, r) || this;
		}
		return t(r, e), r;
	}(Rn);
	function kn(e) {
		return "function" == typeof e;
	}
	function Un(e, t, r, n, o, i, a) {
		if (1 === e.length && Hr(e[0])) return [{
			type: Mn.literal,
			value: e[0].value
		}];
		for (var s = [], c = 0, u = e; c < u.length; c++) {
			var l = u[c];
			if (Hr(l)) s.push({
				type: Mn.literal,
				value: l.value
			});
			else if (Dr(l)) "number" == typeof i && s.push({
				type: Mn.literal,
				value: r.getNumberFormat(t).format(i)
			});
			else {
				var h = l.value;
				if (!o || !(h in o)) throw new Dn(h, a);
				var f = o[h];
				if (Nr(l)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), s.push({
					type: "string" == typeof f ? Mn.literal : Mn.object,
					value: f
				});
				else if (Mr(l)) {
					var p = "string" == typeof l.style ? n.date[l.style] : Fr(l.style) ? l.style.parsedOptions : void 0;
					s.push({
						type: Mn.literal,
						value: r.getDateTimeFormat(t, p).format(f)
					});
				} else if (Rr(l)) {
					p = "string" == typeof l.style ? n.time[l.style] : Fr(l.style) ? l.style.parsedOptions : n.time.medium;
					s.push({
						type: Mn.literal,
						value: r.getDateTimeFormat(t, p).format(f)
					});
				} else if (Pr(l)) (p = "string" == typeof l.style ? n.number[l.style] : Ur(l.style) ? l.style.parsedOptions : void 0) && p.scale && (f *= p.scale || 1), s.push({
					type: Mn.literal,
					value: r.getNumberFormat(t, p).format(f)
				});
				else {
					if (kr(l)) {
						var d = l.children, v = l.value, g = o[v];
						if (!kn(g)) throw new On(v, "function", a);
						var m = g(Un(d, t, r, n, o, i).map(function(e) {
							return e.value;
						}));
						Array.isArray(m) || (m = [m]), s.push.apply(s, m.map(function(e) {
							return {
								type: "string" == typeof e ? Mn.literal : Mn.object,
								value: e
							};
						}));
					}
					if (xr(l)) {
						if (!(y = l.options[f] || l.options.other)) throw new xn(l.value, f, Object.keys(l.options), a);
						s.push.apply(s, Un(y.value, t, r, n, o));
					} else if (Or(l)) {
						var y;
						if (!(y = l.options["=".concat(f)])) {
							if (!Intl.PluralRules) throw new Rn("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", wn.MISSING_INTL_API, a);
							var _ = r.getPluralRules(t, { type: l.pluralType }).select(f - (l.offset || 0));
							y = l.options[_] || l.options.other;
						}
						if (!y) throw new xn(l.value, f, Object.keys(l.options), a);
						s.push.apply(s, Un(y.value, t, r, n, o, f - (l.offset || 0)));
					}
				}
			}
		}
		return function(e) {
			return e.length < 2 ? e : e.reduce(function(e, t) {
				var r = e[e.length - 1];
				return r && r.type === Mn.literal && t.type === Mn.literal ? r.value += t.value : e.push(t), e;
			}, []);
		}(s);
	}
	function Fn(e, t) {
		return t ? Object.keys(e).reduce(function(n, o) {
			var i, a;
			return n[o] = (i = e[o], (a = t[o]) ? r(r(r({}, i || {}), a || {}), Object.keys(i).reduce(function(e, t) {
				return e[t] = r(r({}, i[t]), a[t] || {}), e;
			}, {})) : i), n;
		}, r({}, e)) : e;
	}
	function Gn(e) {
		return { create: function() {
			return {
				get: function(t) {
					return e[t];
				},
				set: function(t, r) {
					e[t] = r;
				}
			};
		} };
	}
	(function(e) {
		e[e.literal = 0] = "literal", e[e.object = 1] = "object";
	})(Mn || (Mn = {}));
	var jn = function() {
		function e(t, o, i, a) {
			void 0 === o && (o = e.defaultLocale);
			var s, c = this;
			if (this.formatterCache = {
				number: {},
				dateTime: {},
				pluralRules: {}
			}, this.format = function(e) {
				var t = c.formatToParts(e);
				if (1 === t.length) return t[0].value;
				var r = t.reduce(function(e, t) {
					return e.length && t.type === Mn.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e;
				}, []);
				return r.length <= 1 ? r[0] || "" : r;
			}, this.formatToParts = function(e) {
				return Un(c.ast, c.locales, c.formatters, c.formats, e, void 0, c.message);
			}, this.resolvedOptions = function() {
				var e;
				return { locale: (null === (e = c.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(c.locales)[0] };
			}, this.getAst = function() {
				return c.ast;
			}, this.locales = o, this.resolvedLocale = e.resolveLocale(o), "string" == typeof t) {
				if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
				var u = a || {};
				u.formatters;
				var l = n(u, ["formatters"]);
				this.ast = e.__parse(t, r(r({}, l), { locale: this.resolvedLocale }));
			} else this.ast = t;
			if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
			this.formats = Fn(e.formats, i), this.formatters = a && a.formatters || (void 0 === (s = this.formatterCache) && (s = {
				number: {},
				dateTime: {},
				pluralRules: {}
			}), {
				getNumberFormat: yr(function() {
					for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
					return new ((e = Intl.NumberFormat).bind.apply(e, _([void 0], t, !1)))();
				}, {
					cache: Gn(s.number),
					strategy: Ir.variadic
				}),
				getDateTimeFormat: yr(function() {
					for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
					return new ((e = Intl.DateTimeFormat).bind.apply(e, _([void 0], t, !1)))();
				}, {
					cache: Gn(s.dateTime),
					strategy: Ir.variadic
				}),
				getPluralRules: yr(function() {
					for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
					return new ((e = Intl.PluralRules).bind.apply(e, _([void 0], t, !1)))();
				}, {
					cache: Gn(s.pluralRules),
					strategy: Ir.variadic
				})
			});
		}
		return Object.defineProperty(e, "defaultLocale", {
			get: function() {
				return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
			},
			enumerable: !1,
			configurable: !0
		}), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
			if (void 0 !== Intl.Locale) {
				var t = Intl.NumberFormat.supportedLocalesOf(e);
				return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale("string" == typeof e ? e : e[0]);
			}
		}, e.__parse = Pn, e.formats = {
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
		}, e;
	}(), zn = {
		debug: 0,
		info: 1,
		warn: 2,
		error: 3,
		off: 4
	}, Kn = {
		debug: "\x1B[36m",
		info: "\x1B[32m",
		warn: "\x1B[33m",
		error: "\x1B[31m",
		off: ""
	};
	function Vn() {
		var e;
		if ("undefined" != typeof process && (null === (e = process.env) || void 0 === e ? void 0 : e._GT_LOG_LEVEL)) {
			var t = process.env._GT_LOG_LEVEL.toLowerCase();
			if (t in zn) return t;
		}
		return "warn";
	}
	var Xn = function() {
		function e(e) {
			this.config = e;
		}
		return e.prototype.handle = function(e) {
			var t = [];
			this.config.includeTimestamp && t.push("[".concat(e.timestamp.toISOString(), "]"));
			var r = Kn[e.level], n = "[".concat(e.level.toUpperCase(), "]");
			t.push("".concat(r).concat(n).concat("\x1B[0m")), this.config.prefix && t.push("[".concat(this.config.prefix, "]")), this.config.includeContext && e.context && t.push("[".concat(e.context, "]")), t.push(e.message), e.metadata && Object.keys(e.metadata).length > 0 && t.push("\n  Metadata: ".concat(JSON.stringify(e.metadata, null, 2)));
			var o = t.join(" ");
			switch (e.level) {
				case "debug":
					console.debug(o);
					break;
				case "info":
					console.info(o);
					break;
				case "warn":
					console.warn(o);
					break;
				case "error": console.error(o);
			}
		}, e;
	}(), Wn = function() {
		function e(e) {
			void 0 === e && (e = {}), this.config = r({
				level: Vn(),
				includeTimestamp: !0,
				includeContext: !0,
				enableConsole: !0,
				handlers: []
			}, e), this.handlers = _([], this.config.handlers || [], !0), this.config.enableConsole && this.handlers.push(new Xn(this.config));
		}
		return e.prototype.addHandler = function(e) {
			this.handlers.push(e);
		}, e.prototype.removeHandler = function(e) {
			var t = this.handlers.indexOf(e);
			t > -1 && this.handlers.splice(t, 1);
		}, e.prototype.configure = function(e) {
			this.config = r(r({}, this.config), e);
		}, e.prototype.shouldLog = function(e) {
			return zn[e] >= zn[this.config.level];
		}, e.prototype.log = function(e, t, r, n) {
			if (this.shouldLog(e)) {
				var o = {
					level: e,
					message: t,
					timestamp: /* @__PURE__ */ new Date(),
					context: r,
					metadata: n
				};
				this.handlers.forEach(function(e) {
					try {
						e.handle(o);
					} catch (e) {
						console.error("Error in log handler:", e);
					}
				});
			}
		}, e.prototype.debug = function(e, t, r) {
			this.log("debug", e, t, r);
		}, e.prototype.info = function(e, t, r) {
			this.log("info", e, t, r);
		}, e.prototype.warn = function(e, t, r) {
			this.log("warn", e, t, r);
		}, e.prototype.error = function(e, t, r) {
			this.log("error", e, t, r);
		}, e.prototype.child = function(e) {
			return new Yn(this, e);
		}, e.prototype.getConfig = function() {
			return r({}, this.config);
		}, e;
	}(), Yn = function() {
		function e(e, t) {
			this.logger = e, this.context = t;
		}
		return e.prototype.debug = function(e, t) {
			this.logger.debug(e, this.context, t);
		}, e.prototype.info = function(e, t) {
			this.logger.info(e, this.context, t);
		}, e.prototype.warn = function(e, t) {
			this.logger.warn(e, this.context, t);
		}, e.prototype.error = function(e, t) {
			this.logger.error(e, this.context, t);
		}, e.prototype.child = function(t) {
			return new e(this.logger, "".concat(this.context, ":").concat(t));
		}, e;
	}(), Zn = new Wn({
		level: Vn(),
		includeTimestamp: !0,
		includeContext: !0,
		prefix: "GT"
	}), Jn = Zn.child("fetch");
	Zn.child("validation"), Zn.child("formatting"), Zn.child("locale");
	var qn = Zn.child("GT instance");
	function Qn(e) {
		var t = e.value, n = e.locales, o = void 0 === n ? [K] : n, i = e.options, a = void 0 === i ? {} : i;
		return Q.get("ListFormat", o, r({
			type: "conjunction",
			style: "long"
		}, a)).format(t);
	}
	function $n(e) {
		var t = e.value, n = e.locales, o = void 0 === n ? [K] : n, i = e.options, a = void 0 === i ? {} : i, s = Q.get("ListFormat", o, r({
			type: "conjunction",
			style: "long"
		}, a)).formatToParts(t.map(function() {
			return "1";
		})), c = 0;
		return s.map(function(e) {
			return "element" === e.type ? t[c++] : e.value;
		});
	}
	function eo(e) {
		var t = e.date, r = e.baseDate, n = e.locales, o = void 0 === n ? [K] : n, i = e.options, a = void 0 === i ? {} : i, s = function(e, t) {
			var r = t.getTime(), n = e.getTime() - r, o = Math.abs(n), i = n < 0 ? -1 : 1, a = Math.floor(o / 1e3), s = Math.floor(o / 6e4), c = Math.floor(o / 36e5), u = Math.floor(o / 864e5), l = Math.floor(o / 6048e5), h = Math.floor(o / 2592e6), f = Math.floor(o / 31536e6);
			return a < 60 ? {
				value: i * a,
				unit: "second"
			} : s < 60 ? {
				value: i * s,
				unit: "minute"
			} : c < 24 ? {
				value: i * c,
				unit: "hour"
			} : u < 7 ? {
				value: i * u,
				unit: "day"
			} : u < 28 || h < 1 ? {
				value: i * l,
				unit: "week"
			} : h < 12 || f < 1 ? {
				value: i * h,
				unit: "month"
			} : {
				value: i * f,
				unit: "year"
			};
		}(t, r);
		return to({
			value: s.value,
			unit: s.unit,
			locales: o,
			options: a
		});
	}
	function to(e) {
		var t = e.value, n = e.unit, o = e.locales, i = void 0 === o ? [K] : o, a = e.options, s = void 0 === a ? {} : a;
		return Q.get("RelativeTimeFormat", i, r({
			style: "long",
			numeric: "auto"
		}, s)).format(t, n);
	}
	function ro(e, t, r) {
		void 0 === t && (t = K);
		var n = e;
		r && ur(e, r) && (e = r[e].code), t || (t = K);
		try {
			var o = nr(e);
			if (r) for (var i = 0, a = [
				n,
				e,
				o,
				Q.get("Locale", o).language
			]; i < a.length; i++) {
				var s = cr(r, a[i], "name");
				if (s) return s;
			}
			return Q.get("DisplayNames", [
				t,
				o,
				K
			], { type: "language" }).of(o) || "";
		} catch (e) {
			return "";
		}
	}
	function no(e) {
		try {
			var t = function(e) {
				var t, r, n;
				if ("textInfo" in e && "object" == typeof e.textInfo && null !== e.textInfo && "direction" in e.textInfo && ("rtl" === (null === (t = e.textInfo) || void 0 === t ? void 0 : t.direction) || "ltr" === (null === (r = e.textInfo) || void 0 === r ? void 0 : r.direction))) return null === (n = e.textInfo) || void 0 === n ? void 0 : n.direction;
			}(Q.get("Locale", e));
			if (t) return t;
		} catch (e) {}
		var r, n, o = gr(e), i = o.scriptCode, a = o.languageCode;
		return i ? (r = i) && oo.has(r.toLowerCase()) ? "rtl" : "ltr" : a ? (n = a) && io.has(n.toLowerCase()) ? "rtl" : "ltr" : "ltr";
	}
	var oo = new Set([
		"arab",
		"adlm",
		"hebr",
		"nkoo",
		"rohg",
		"samr",
		"syrc",
		"thaa",
		"yezi"
	]), io = new Set([
		"ar",
		"arc",
		"ckb",
		"dv",
		"fa",
		"he",
		"iw",
		"ku",
		"lrc",
		"nqo",
		"ps",
		"pnb",
		"sd",
		"syr",
		"ug",
		"ur",
		"yi"
	]);
	var ao = "GT Error:", so = function(e) {
		return "".concat(ao, " Translation request timed out after ").concat(e, "ms.");
	}, co = function(e) {
		return "".concat(ao, " Cannot call `").concat(e, "` without a specified locale. Either pass a locale to the `").concat(e, "` function or specify a targetLocale in the GT constructor.");
	}, uo = function(e) {
		return "".concat(ao, " Cannot call `").concat(e, "` without a specified locale. Either pass a locale to the `").concat(e, "` function or specify a sourceLocale in the GT constructor.");
	}, lo = function(e) {
		return "".concat(ao, " Invalid locale: ").concat(e, ".");
	};
	function ho(e, t, n) {
		return h(this, void 0, void 0, function() {
			var o, i, a, s;
			return f(this, function(c) {
				switch (c.label) {
					case 0: o = new AbortController(), i = o.signal, a = (n = n || V) ? setTimeout(function() {
						return o.abort();
					}, n) : null, c.label = 1;
					case 1: return c.trys.push([
						1,
						3,
						4,
						5
					]), [4, fetch(e, r(r({}, t), { signal: i }))];
					case 2: return [2, c.sent()];
					case 3:
						if ((s = c.sent()) instanceof Error && "AbortError" === s.name) throw so(n);
						throw s;
					case 4: return a && clearTimeout(a), [7];
					case 5: return [2];
				}
			});
		});
	}
	var fo = function(e) {
		function r(t, r, n) {
			var o = e.call(this, t) || this;
			return o.name = "ApiError", o.code = r, o.message = n, o;
		}
		return t(r, e), r.prototype.getCode = function() {
			return this.code;
		}, r.prototype.getMessage = function() {
			return this.message;
		}, r;
	}(Error);
	function po(e) {
		return h(this, void 0, void 0, function() {
			var t, r, n, o;
			return f(this, function(i) {
				switch (i.label) {
					case 0:
						if (e.ok) return [3, 5];
						t = "Unknown error", i.label = 1;
					case 1: return i.trys.push([
						1,
						3,
						,
						4
					]), [4, e.text()];
					case 2:
						r = i.sent();
						try {
							n = JSON.parse(r), t = n.error;
						} catch (e) {
							t = r || "Unknown error";
						}
						return [3, 4];
					case 3: return i.sent(), [3, 4];
					case 4: throw o = function(e, t, r) {
						return "".concat(ao, " API returned error status. Status: ").concat(e, ", Status Text: ").concat(t, ", Error: ").concat(r);
					}(e.status, e.statusText, t), new fo(o, e.status, t);
					case 5: return [2];
				}
			});
		});
	}
	function vo(e, t) {
		if (e instanceof Error && "AbortError" === e.name) {
			var r = so(t);
			throw Jn.error(r), new Error(r);
		}
		var n = function(e) {
			return "".concat(ao, " Translation request failed. Error: ").concat(e);
		}(e instanceof Error ? e.message : String(e));
		throw Jn.error(n), e;
	}
	var go = "2026-03-06.v1";
	function mo(e, t) {
		void 0 === t && (t = !1);
		var n = r(r({}, !t && { "Content-Type": "application/json" }), { "x-gt-project-id": e.projectId });
		return e.apiKey && (e.apiKey.startsWith("gtx-internal-") ? n["x-gt-internal-api-key"] = e.apiKey : n["x-gt-api-key"] = e.apiKey), n["gt-api-version"] = go, n;
	}
	function yo(e) {
		return new Promise(function(t) {
			return setTimeout(t, e);
		});
	}
	function _o(e, t) {
		switch (e) {
			case "linear": return 500 * (t + 1);
			case "exponential": return 500 * Math.pow(2, t);
			default: return 0;
		}
	}
	function Eo(e, t, r) {
		return h(this, void 0, void 0, function() {
			var n, o, i, a, s, c, u, l, h, p, d, v;
			return f(this, function(f) {
				switch (f.label) {
					case 0: n = null !== (p = null == r ? void 0 : r.timeout) && void 0 !== p ? p : V, o = "".concat(e.baseUrl || $).concat(t), i = null !== (d = null == r ? void 0 : r.method) && void 0 !== d ? d : "POST", a = null !== (v = null == r ? void 0 : r.retryPolicy) && void 0 !== v ? v : "exponential", s = "none" === a ? 0 : 3, c = {
						method: i,
						headers: mo(e)
					}, void 0 !== (null == r ? void 0 : r.body) && (c.body = JSON.stringify(r.body)), u = 0, f.label = 1;
					case 1:
						if (!(u <= s)) return [3, 13];
						l = void 0, f.label = 2;
					case 2: return f.trys.push([
						2,
						4,
						,
						7
					]), [4, ho(o, c, n)];
					case 3: return l = f.sent(), [3, 7];
					case 4: return h = f.sent(), u < s ? [4, yo(_o(a, u))] : [3, 6];
					case 5: return f.sent(), [3, 12];
					case 6: return vo(h, n), [3, 7];
					case 7: return l.status >= 500 && u < s ? [4, yo(_o(a, u))] : [3, 9];
					case 8: return f.sent(), [3, 12];
					case 9: return [4, po(l)];
					case 10: return f.sent(), [4, l.json()];
					case 11: return [2, f.sent()];
					case 12: return u++, [3, 1];
					case 13: throw new Error("Max retries exceeded");
				}
			});
		});
	}
	function bo(e) {
		return er.SHA256(e).toString(er.enc.Hex).slice(0, 16);
	}
	function To(e, t) {
		var n, o = e.source, i = e.context, a = e.id, s = e.maxChars, c = e.dataFormat;
		void 0 === t && (t = bo), n = "JSX" === c ? Ao(o) : o;
		var u = r(r(r(r({ source: n }, a && { id: a }), i && { context: i }), null != s && { maxChars: Math.abs(s) }), c && { dataFormat: c });
		return t(de(u));
	}
	var Lo = function(e) {
		if (e && "object" == typeof e) {
			var t = {};
			if ("c" in e && e.c && (t.c = Ao(e.c)), "d" in e) {
				var n = null == e ? void 0 : e.d;
				null != n && n.b && (t.b = Object.fromEntries(Object.entries(n.b).map(function(e) {
					return [e[0], Ao(e[1])];
				}))), null != n && n.t && (t.t = n.t);
			}
			return function(e) {
				var t = e;
				if (t && "object" == typeof t && "string" == typeof t.k) {
					var r = Object.keys(t);
					if (1 === r.length) return !0;
					if (2 === r.length) {
						if ("number" == typeof t.i) return !0;
						if ("string" == typeof t.v) return !0;
					}
					if (3 === r.length && "string" == typeof t.v && "number" == typeof t.i) return !0;
				}
				return !1;
			}(e) ? r({ k: e.k }, e.v && { v: e.v }) : t;
		}
		return e;
	};
	function Ao(e) {
		return Array.isArray(e) ? e.map(Lo) : Lo(e);
	}
	function wo(e, t, n, o) {
		return h(this, void 0, void 0, function() {
			var i, a, s, c, u, l, h, p, d, v, g, m, y, _, E, b;
			return f(this, function(f) {
				switch (f.label) {
					case 0:
						for (i = Array.isArray(e), a = i ? [] : void 0, s = {}, c = i ? e.map(function(e) {
							return [void 0, e];
						}) : Object.entries(e), u = 0, l = c; u < l.length; u++) h = l[u], p = h[0], d = h[1], g = (v = "string" == typeof d ? { source: d } : d).source, m = v.metadata, y = null !== (E = null != p ? p : null == m ? void 0 : m.hash) && void 0 !== E ? E : To(r({
							source: g,
							dataFormat: null !== (b = null == m ? void 0 : m.dataFormat) && void 0 !== b ? b : "STRING"
						}, null != m ? m : {})), a?.push(y), s[y] = {
							source: g,
							metadata: m
						};
						return [4, Eo(r(r({}, n), { baseUrl: n.baseUrl || "https://runtime2.gtx.dev" }), "/v2/translate", {
							body: {
								requests: s,
								targetLocale: t.targetLocale,
								sourceLocale: t.sourceLocale,
								metadata: t
							},
							timeout: o,
							retryPolicy: "none"
						})];
					case 1: return _ = f.sent(), a ? [2, a.map(function(e) {
						var t;
						return null !== (t = _[e]) && void 0 !== t ? t : {
							success: !1,
							error: "No translation returned",
							code: 500
						};
					})] : [2, _];
				}
			});
		});
	}
	function So(e, t, r) {
		return h(this, void 0, void 0, function() {
			return f(this, function(n) {
				return [2, Eo(t, "/v2/project/setup/generate", {
					body: {
						files: e.map(function(e) {
							return {
								branchId: e.branchId,
								fileId: e.fileId,
								versionId: e.versionId
							};
						}),
						locales: null == r ? void 0 : r.locales,
						force: null == r ? void 0 : r.force
					},
					timeout: null == r ? void 0 : r.timeoutMs
				})];
			});
		});
	}
	function Bo(e, t) {
		for (var r = [], n = 0; n < e.length; n += t) r.push(e.slice(n, n + t));
		return r;
	}
	function Co(e, t) {
		return h(this, arguments, void 0, function(e, t, r) {
			var n, o, i, a, s, c, u, l, h, p, d, v, g;
			return void 0 === r && (r = {}), f(this, function(f) {
				switch (f.label) {
					case 0: return n = r.batchSize, o = void 0 === n ? 100 : n, i = r.parallel, a = void 0 === i || i, 0 === e.length ? [2, {
						data: [],
						count: 0,
						batchCount: 0
					}] : (s = Bo(e, o), c = [], a ? [4, Promise.all(s.map(function(e) {
						return t(e);
					}))] : [3, 2]);
					case 1:
						for (u = f.sent(), l = 0, h = u; l < h.length; l++) (g = h[l]) && c.push.apply(c, g);
						return [3, 6];
					case 2: p = 0, d = s, f.label = 3;
					case 3: return p < d.length ? (v = d[p], [4, t(v)]) : [3, 6];
					case 4: (g = f.sent()) && c.push.apply(c, g), f.label = 5;
					case 5: return p++, [3, 3];
					case 6: return [2, {
						data: c,
						count: c.length,
						batchCount: s.length
					}];
				}
			});
		});
	}
	function Io(e, t, r) {
		return h(this, void 0, void 0, function() {
			var n, o, i = this;
			return f(this, function(a) {
				switch (a.label) {
					case 0: return [4, Co(e, function(e) {
						return h(i, void 0, void 0, function() {
							var n, o;
							return f(this, function(i) {
								switch (i.label) {
									case 0: return n = {
										files: e.map(function(e) {
											return {
												branchId: e.branchId,
												fileId: e.fileId,
												versionId: e.versionId,
												fileName: e.fileName
											};
										}),
										targetLocales: t.targetLocales,
										sourceLocale: t.sourceLocale,
										requireApproval: t.requireApproval,
										modelProvider: t.modelProvider,
										force: t.force
									}, [4, Eo(r, "/v2/project/translations/enqueue", {
										body: n,
										timeout: t.timeout
									})];
									case 1: return o = i.sent(), [2, Array.from(Object.entries(o.jobData))];
								}
							});
						});
					}, { batchSize: 100 })];
					case 1: return n = a.sent(), o = Object.fromEntries(n.data.map(function(e) {
						return [e[0], e[1]];
					})), [2, {
						jobData: o,
						locales: t.targetLocales,
						message: "Successfully enqueued ".concat(n.count, " file translation jobs in ").concat(n.batchCount, " batch(es)")
					}];
				}
			});
		});
	}
	function Ho(e, t) {
		return h(this, void 0, void 0, function() {
			return f(this, function(n) {
				switch (n.label) {
					case 0: return [4, Eo(t, "/v2/project/tags/create", { body: r({
						tagId: e.tagId,
						files: e.files
					}, e.message && { message: e.message }) })];
					case 1: return [2, n.sent()];
				}
			});
		});
	}
	function No(e, t, n) {
		return h(this, void 0, void 0, function() {
			var o = this;
			return f(this, function(i) {
				return [2, Co(e, function(e) {
					return h(o, void 0, void 0, function() {
						var o;
						return f(this, function(i) {
							switch (i.label) {
								case 0: return [4, Eo(n, "/v2/project/files/download", {
									body: e,
									timeout: t.timeout
								})];
								case 1: return o = i.sent(), [2, o.files.map(function(e) {
									return r(r({}, e), { data: te(e.data) });
								})];
							}
						});
					});
				}, { batchSize: 100 })];
			});
		});
	}
	function Po(e, t) {
		return h(this, arguments, void 0, function(e, t, r) {
			var n = this;
			return void 0 === r && (r = {}), f(this, function(o) {
				switch (o.label) {
					case 0: return [4, Co(e.diffs, function(e) {
						return h(n, void 0, void 0, function() {
							return f(this, function(n) {
								switch (n.label) {
									case 0: return [4, Eo(t, "/v2/project/files/diffs", {
										body: { diffs: e },
										timeout: r.timeout
									})];
									case 1: return n.sent(), [2, [{ success: !0 }]];
								}
							});
						});
					}, { batchSize: 100 })];
					case 1: return o.sent(), [2, { success: !0 }];
				}
			});
		});
	}
	function Mo(e, t, n) {
		void 0 === t && (t = K), t || (t = K);
		try {
			var o = Q.get("DisplayNames", [t, K], { type: "region" });
			return r({
				code: e,
				name: o.of(e) || e,
				emoji: dr[e] || fr
			}, null == n ? void 0 : n[e]);
		} catch (t) {
			return r({
				code: e,
				name: e,
				emoji: fr
			}, null == n ? void 0 : n[e]);
		}
	}
	function Ro(e, t) {
		var r;
		return t && (r = Object.fromEntries(Object.entries(t).filter(function(e) {
			var t = e[1];
			return t && "object" == typeof t && "code" in t;
		}).map(function(e) {
			var t = e[0];
			return [e[1].code, t];
		}))), (null == r ? void 0 : r[e]) || e;
	}
	function xo(e, t) {
		return t && ur(e, t) ? t[e].code : e;
	}
	function Oo(e, t, r) {
		return h(this, void 0, void 0, function() {
			var n = this;
			return f(this, function(o) {
				return [2, Co(e, function(e) {
					return h(n, void 0, void 0, function() {
						var n;
						return f(this, function(o) {
							switch (o.label) {
								case 0: return n = {
									data: e.map(function(e) {
										var t = e.source;
										return { source: {
											content: ee(t.content),
											fileName: t.fileName,
											fileFormat: t.fileFormat,
											locale: t.locale,
											dataFormat: t.dataFormat,
											formatMetadata: t.formatMetadata,
											fileId: t.fileId,
											versionId: t.versionId,
											branchId: t.branchId,
											incomingBranchId: t.incomingBranchId,
											checkedOutBranchId: t.checkedOutBranchId
										} };
									}),
									sourceLocale: t.sourceLocale
								}, [4, Eo(r, "/v2/project/files/upload-files", {
									body: n,
									timeout: t.timeout
								})];
								case 1: return [2, o.sent().uploadedFiles || []];
							}
						});
					});
				}, { batchSize: 100 })];
			});
		});
	}
	function Do(e, t, r) {
		return h(this, void 0, void 0, function() {
			var n = this;
			return f(this, function(o) {
				return [2, Co(e, function(e) {
					return h(n, void 0, void 0, function() {
						var n;
						return f(this, function(o) {
							switch (o.label) {
								case 0: return n = {
									data: e.map(function(e) {
										var t = e.source, r = e.translations;
										return {
											source: {
												content: ee(t.content),
												fileName: t.fileName,
												fileFormat: t.fileFormat,
												locale: t.locale,
												dataFormat: t.dataFormat,
												formatMetadata: t.formatMetadata,
												fileId: t.fileId,
												versionId: t.versionId,
												branchId: t.branchId
											},
											translations: r.map(function(e) {
												return {
													content: ee(e.content),
													fileName: e.fileName,
													fileFormat: e.fileFormat,
													locale: e.locale,
													dataFormat: e.dataFormat,
													fileId: e.fileId,
													versionId: e.versionId,
													branchId: e.branchId
												};
											})
										};
									}),
									sourceLocale: t.sourceLocale
								}, [4, Eo(r, "/v2/project/files/upload-translations", {
									body: n,
									timeout: t.timeout
								})];
								case 1: return [2, o.sent().uploadedFiles || []];
							}
						});
					});
				}, { batchSize: 100 })];
			});
		});
	}
	function ko(e, t, r) {
		return h(this, void 0, void 0, function() {
			var n, o, i, a, s;
			return f(this, function(c) {
				return n = e.branchId, o = e.versionId, i = e.fileId, a = new URLSearchParams(), n && a.set("branchId", n), o && a.set("versionId", o), s = "/v2/project/translations/files/status/".concat(encodeURIComponent(i), "?").concat(a.toString()), [2, Eo(r, s, {
					method: "GET",
					timeout: t.timeout
				})];
			});
		});
	}
	function Uo(e, t, r) {
		return h(this, void 0, void 0, function() {
			var n, o, i, a;
			return f(this, function(s) {
				switch (s.label) {
					case 0: n = r.baseUrl, o = t.timeout ? t.timeout : V, i = "".concat(n || $, "/v2/project/info/").concat(encodeURIComponent(e)), s.label = 1;
					case 1: return s.trys.push([
						1,
						3,
						,
						4
					]), [4, ho(i, {
						method: "GET",
						headers: mo(r)
					}, o)];
					case 2: return a = s.sent(), [3, 4];
					case 3: return vo(s.sent(), o), [3, 4];
					case 4: return [4, po(a)];
					case 5: return s.sent(), [4, a.json()];
					case 6: return [2, s.sent()];
				}
			});
		});
	}
	function Fo(e, t, r) {
		return h(this, void 0, void 0, function() {
			return f(this, function(n) {
				return [2, Eo(t, "/v2/project/jobs/info", {
					body: { jobIds: e },
					timeout: r
				})];
			});
		});
	}
	function Go(e, t, n) {
		return h(this, void 0, void 0, function() {
			var o, i, a, s, c, u, l, h, p, d, v;
			return f(this, function(f) {
				switch (f.label) {
					case 0:
						if (o = 1e3 * (null !== (v = null == t ? void 0 : t.pollingIntervalSeconds) && void 0 !== v ? v : 5), i = void 0 !== (null == t ? void 0 : t.timeoutSeconds) ? 1e3 * t.timeoutSeconds : 6e5, 0 === (a = Object.keys(e.jobData)).length) return [2, {
							complete: !0,
							jobs: []
						}];
						s = Date.now(), c = new Map(a.map(function(e) {
							return [e, {
								jobId: e,
								status: "unknown"
							}];
						})), u = new Set(a), f.label = 1;
					case 1: return u.size > 0 ? [4, Fo(Array.from(u), n)] : [3, 4];
					case 2:
						for (l = f.sent(), h = 0, p = l; h < p.length; h++) "completed" === (d = p[h]).status || "failed" === d.status || "unknown" === d.status ? (c.set(d.jobId, r({
							jobId: d.jobId,
							status: d.status
						}, d.error ? { error: d.error } : {})), u.delete(d.jobId)) : c.set(d.jobId, {
							jobId: d.jobId,
							status: d.status
						});
						return 0 === u.size || Date.now() - s >= i ? [3, 4] : [4, new Promise(function(e) {
							return setTimeout(e, o);
						})];
					case 3: return f.sent(), [3, 1];
					case 4: return [2, {
						complete: 0 === u.size,
						jobs: Array.from(c.values())
					}];
				}
			});
		});
	}
	function jo(e) {
		return h(this, arguments, void 0, function(e, t, r) {
			var n, o, i;
			return void 0 === t && (t = {}), f(this, function(a) {
				return n = {
					sourceFiles: null === (o = e.sourceFiles) || void 0 === o ? void 0 : o.map(function(e) {
						return {
							fileId: e.fileId,
							versionId: e.versionId,
							branchId: e.branchId
						};
					}),
					translatedFiles: null === (i = e.translatedFiles) || void 0 === i ? void 0 : i.map(function(e) {
						return {
							fileId: e.fileId,
							versionId: e.versionId,
							branchId: e.branchId,
							locale: e.locale
						};
					})
				}, [2, Eo(r, "/v2/project/files/info", {
					body: n,
					timeout: t.timeout
				})];
			});
		});
	}
	function zo(e, t) {
		return h(this, void 0, void 0, function() {
			return f(this, function(r) {
				return [2, Eo(t, "/v2/project/branches/info", { body: e })];
			});
		});
	}
	function Ko(e, t) {
		return h(this, void 0, void 0, function() {
			return f(this, function(r) {
				return [2, Eo(t, "/v2/project/branches/create", { body: e })];
			});
		});
	}
	function Vo(e, t, r) {
		return h(this, void 0, void 0, function() {
			var n, o, i, a = this;
			return f(this, function(s) {
				switch (s.label) {
					case 0: return 0 === e.length ? [2, {
						results: [],
						summary: {
							total: 0,
							succeeded: 0,
							failed: 0
						}
					}] : [4, Co(e, function(e) {
						return h(a, void 0, void 0, function() {
							return f(this, function(n) {
								switch (n.label) {
									case 0: return [4, Eo(r, "/v2/project/files/moves", {
										body: {
											branchId: t.branchId,
											moves: e
										},
										timeout: t.timeout
									})];
									case 1: return [2, n.sent().results];
								}
							});
						});
					}, { batchSize: 100 })];
					case 1: return n = s.sent(), o = n.data.filter(function(e) {
						return e.success;
					}).length, i = n.data.filter(function(e) {
						return !e.success;
					}).length, [2, {
						results: n.data,
						summary: {
							total: e.length,
							succeeded: o,
							failed: i
						}
					}];
				}
			});
		});
	}
	function Xo(e, t) {
		return h(this, arguments, void 0, function(e, t, r, n) {
			var o, i, a, s, c, u, l, h, p;
			return void 0 === r && (r = {}), f(this, function(f) {
				switch (f.label) {
					case 0: return o = function(t) {
						return Eo(n, "/v2/project/files/orphaned", {
							body: {
								branchId: e,
								fileIds: t
							},
							timeout: r.timeout
						});
					}, 0 === t.length ? [2, o([])] : (i = Bo(t, 100), [4, Promise.all(i.map(function(e) {
						return o(e);
					}))]);
					case 1:
						if (1 === (a = f.sent()).length) return [2, a[0]];
						for (s = /* @__PURE__ */ new Map(), c = 0, u = a[0].orphanedFiles; c < u.length; c++) l = u[c], s.set(l.fileId, l);
						for (h = function(e) {
							var t = new Set(a[e].orphanedFiles.map(function(e) {
								return e.fileId;
							}));
							Array.from(s.keys()).forEach(function(e) {
								t.has(e) || s.delete(e);
							});
						}, p = 1; p < a.length; p++) h(p);
						return [2, { orphanedFiles: Array.from(s.values()) }];
				}
			});
		});
	}
	function Wo(e, t) {
		return h(this, void 0, void 0, function() {
			return f(this, function(r) {
				switch (r.label) {
					case 0: return [4, Eo(t, "/v2/project/files/publish", { body: { files: e } })];
					case 1: return [2, r.sent()];
				}
			});
		});
	}
	var Yo = function() {
		function e(e) {
			var t, r, n;
			void 0 === e && (e = {}), this._renderingLocales = [], "undefined" != typeof process && (this.apiKey || (this.apiKey = null === (t = process.env) || void 0 === t ? void 0 : t.GT_API_KEY), this.devApiKey || (this.devApiKey = null === (r = process.env) || void 0 === r ? void 0 : r.GT_DEV_API_KEY), this.projectId || (this.projectId = null === (n = process.env) || void 0 === n ? void 0 : n.GT_PROJECT_ID)), this.setConfig(e);
		}
		return e.prototype.setConfig = function(e) {
			var t = e.apiKey, r = e.devApiKey, n = e.sourceLocale, o = e.targetLocale, i = e.locales, a = e.projectId, s = e.customMapping, c = e.baseUrl;
			if (t && (this.apiKey = t), r && (this.devApiKey = r), a && (this.projectId = a), n && (this.sourceLocale = nr(n), !rr(this.sourceLocale, s))) throw new Error(lo(this.sourceLocale));
			if (o && (this.targetLocale = nr(o), !rr(this.targetLocale, s))) throw new Error(lo(this.targetLocale));
			if (this._renderingLocales = [], this.sourceLocale && this._renderingLocales.push(this.sourceLocale), this.targetLocale && this._renderingLocales.push(this.targetLocale), this._renderingLocales.push(K), i) {
				var u = [], l = [];
				if (i.forEach(function(e) {
					var t = nr(e);
					rr(t) ? u.push(t) : l.push(e);
				}), l.length > 0) throw new Error(function(e) {
					return "".concat(ao, " Invalid locales: ").concat(e.join(", "), ".");
				}(l));
				this.locales = u;
			}
			c && (this.baseUrl = c), s && (this.customMapping = s, this.reverseCustomMapping = Object.fromEntries(Object.entries(s).filter(function(e) {
				var t = e[1];
				return t && "object" == typeof t && "code" in t;
			}).map(function(e) {
				var t = e[0];
				return [e[1].code, t];
			})));
		}, e.prototype._getTranslationConfig = function() {
			return {
				baseUrl: this.baseUrl,
				apiKey: this.apiKey || this.devApiKey,
				projectId: this.projectId || ""
			};
		}, e.prototype._validateAuth = function(e) {
			var t = [];
			if (!this.apiKey && !this.devApiKey) {
				var r = function(e) {
					return "".concat(ao, " Cannot call `").concat(e, "` without a specified API key. Either pass an API key to the `").concat(e, "` function or specify an apiKey in the GT constructor.");
				}(e);
				t.push(r);
			}
			if (!this.projectId) {
				r = function(e) {
					return "".concat(ao, " Cannot call `").concat(e, "` without a specified project ID. Either pass a project ID to the `").concat(e, "` function or specify a projectId in the GT constructor.");
				}(e);
				t.push(r);
			}
			if (t.length) throw new Error(t.join("\n"));
		}, e.prototype.queryBranchData = function(e) {
			return h(this, void 0, void 0, function() {
				return f(this, function(t) {
					switch (t.label) {
						case 0: return this._validateAuth("queryBranchData"), [4, zo(e, this._getTranslationConfig())];
						case 1: return [2, t.sent()];
					}
				});
			});
		}, e.prototype.createBranch = function(e) {
			return h(this, void 0, void 0, function() {
				return f(this, function(t) {
					switch (t.label) {
						case 0: return this._validateAuth("createBranch"), [4, Ko(e, this._getTranslationConfig())];
						case 1: return [2, t.sent()];
					}
				});
			});
		}, e.prototype.processFileMoves = function(e) {
			return h(this, arguments, void 0, function(e, t) {
				return void 0 === t && (t = {}), f(this, function(r) {
					switch (r.label) {
						case 0: return this._validateAuth("processFileMoves"), [4, Vo(e, t, this._getTranslationConfig())];
						case 1: return [2, r.sent()];
					}
				});
			});
		}, e.prototype.getOrphanedFiles = function(e, t) {
			return h(this, arguments, void 0, function(e, t, r) {
				return void 0 === r && (r = {}), f(this, function(n) {
					switch (n.label) {
						case 0: return this._validateAuth("getOrphanedFiles"), [4, Xo(e, t, r, this._getTranslationConfig())];
						case 1: return [2, n.sent()];
					}
				});
			});
		}, e.prototype.setupProject = function(e, t) {
			return h(this, void 0, void 0, function() {
				var n, o = this;
				return f(this, function(i) {
					switch (i.label) {
						case 0: return this._validateAuth("setupProject"), t = r(r({}, t), { locales: null === (n = null == t ? void 0 : t.locales) || void 0 === n ? void 0 : n.map(function(e) {
							return o.resolveCanonicalLocale(e);
						}) }), [4, So(e, this._getTranslationConfig(), t)];
						case 1: return [2, i.sent()];
					}
				});
			});
		}, e.prototype.checkJobStatus = function(e, t) {
			return h(this, void 0, void 0, function() {
				return f(this, function(r) {
					switch (r.label) {
						case 0: return this._validateAuth("checkJobStatus"), [4, Fo(e, this._getTranslationConfig(), t)];
						case 1: return [2, r.sent()];
					}
				});
			});
		}, e.prototype.awaitJobs = function(e, t) {
			return h(this, void 0, void 0, function() {
				return f(this, function(r) {
					switch (r.label) {
						case 0: return this._validateAuth("awaitJobs"), [4, Go(e, t, this._getTranslationConfig())];
						case 1: return [2, r.sent()];
					}
				});
			});
		}, e.prototype.enqueueFiles = function(e, t) {
			return h(this, void 0, void 0, function() {
				var n, o, i, a, s = this;
				return f(this, function(c) {
					switch (c.label) {
						case 0:
							if (this._validateAuth("enqueueFiles"), !(n = r(r({}, t), {
								sourceLocale: null !== (i = t.sourceLocale) && void 0 !== i ? i : this.sourceLocale,
								targetLocales: null !== (a = t.targetLocales) && void 0 !== a ? a : [this.targetLocale]
							})).sourceLocale) throw o = uo("enqueueFiles"), qn.error(o), new Error(o);
							if (!n.targetLocales || 0 === n.targetLocales.length) throw o = co("enqueueFiles"), qn.error(o), new Error(o);
							return n = r(r({}, n), { targetLocales: n.targetLocales.map(function(e) {
								return s.resolveCanonicalLocale(e);
							}) }), [4, Io(e, n, this._getTranslationConfig())];
						case 1: return [2, c.sent()];
					}
				});
			});
		}, e.prototype.createTag = function(e) {
			return h(this, void 0, void 0, function() {
				return f(this, function(t) {
					switch (t.label) {
						case 0: return this._validateAuth("createTag"), [4, Ho(e, this._getTranslationConfig())];
						case 1: return [2, t.sent()];
					}
				});
			});
		}, e.prototype.publishFiles = function(e) {
			return h(this, void 0, void 0, function() {
				return f(this, function(t) {
					switch (t.label) {
						case 0: return this._validateAuth("publishFiles"), [4, Wo(e, this._getTranslationConfig())];
						case 1: return [2, t.sent()];
					}
				});
			});
		}, e.prototype.submitUserEditDiffs = function(e) {
			return h(this, void 0, void 0, function() {
				var t = this;
				return f(this, function(n) {
					switch (n.label) {
						case 0: return this._validateAuth("submitUserEditDiffs"), [4, Po(r(r({}, e), { diffs: (e.diffs || []).map(function(e) {
							return r(r({}, e), { locale: t.resolveCanonicalLocale(e.locale) });
						}) }), this._getTranslationConfig())];
						case 1: return n.sent(), [2];
					}
				});
			});
		}, e.prototype.queryFileData = function(e) {
			return h(this, arguments, void 0, function(e, t) {
				var n, o, i, a, s = this;
				return void 0 === t && (t = {}), f(this, function(c) {
					switch (c.label) {
						case 0: return this._validateAuth("queryFileData"), e.translatedFiles = null === (o = e.translatedFiles) || void 0 === o ? void 0 : o.map(function(e) {
							return r(r({}, e), { locale: s.resolveCanonicalLocale(e.locale) });
						}), [4, jo(e, t, this._getTranslationConfig())];
						case 1: return (n = c.sent()).translatedFiles = null === (i = n.translatedFiles) || void 0 === i ? void 0 : i.map(function(e) {
							return r(r({}, e), e.locale && { locale: s.resolveAliasLocale(e.locale) });
						}), n.sourceFiles = null === (a = n.sourceFiles) || void 0 === a ? void 0 : a.map(function(e) {
							return r(r(r({}, e), e.sourceLocale && { sourceLocale: s.resolveAliasLocale(e.sourceLocale) }), { locales: e.locales.map(function(e) {
								return s.resolveAliasLocale(e);
							}) });
						}), [2, n];
					}
				});
			});
		}, e.prototype.querySourceFile = function(e) {
			return h(this, arguments, void 0, function(e, t) {
				var n, o = this;
				return void 0 === t && (t = {}), f(this, function(i) {
					switch (i.label) {
						case 0: return this._validateAuth("querySourceFile"), [4, ko(e, t, this._getTranslationConfig())];
						case 1: return (n = i.sent()).translations = n.translations.map(function(e) {
							return r(r({}, e), e.locale && { locale: o.resolveAliasLocale(e.locale) });
						}), n.sourceFile.locales = n.sourceFile.locales.map(function(e) {
							return o.resolveAliasLocale(e);
						}), n.sourceFile.sourceLocale && (n.sourceFile.sourceLocale = this.resolveAliasLocale(n.sourceFile.sourceLocale)), [2, n];
					}
				});
			});
		}, e.prototype.getProjectData = function(e) {
			return h(this, arguments, void 0, function(e, t) {
				var r, n = this;
				return void 0 === t && (t = {}), f(this, function(o) {
					switch (o.label) {
						case 0: return this._validateAuth("getProjectData"), [4, Uo(e, t, this._getTranslationConfig())];
						case 1: return (r = o.sent()).currentLocales = r.currentLocales.map(function(e) {
							return n.resolveAliasLocale(e);
						}), r.defaultLocale = this.resolveAliasLocale(r.defaultLocale), [2, r];
					}
				});
			});
		}, e.prototype.downloadFile = function(e) {
			return h(this, arguments, void 0, function(e, t) {
				var r, n, o, i;
				return void 0 === t && (t = {}), f(this, function(a) {
					switch (a.label) {
						case 0: return this._validateAuth("downloadTranslatedFile"), [4, No([{
							fileId: e.fileId,
							branchId: e.branchId,
							locale: e.locale ? this.resolveCanonicalLocale(e.locale) : void 0,
							versionId: e.versionId,
							useLatestAvailableVersion: e.useLatestAvailableVersion
						}], t, this._getTranslationConfig())];
						case 1: return r = a.sent(), [2, null !== (i = null === (o = null === (n = r.data) || void 0 === n ? void 0 : n[0]) || void 0 === o ? void 0 : o.data) && void 0 !== i ? i : ""];
					}
				});
			});
		}, e.prototype.downloadFileBatch = function(e) {
			return h(this, arguments, void 0, function(e, t) {
				var n, o = this;
				return void 0 === t && (t = {}), f(this, function(i) {
					switch (i.label) {
						case 0: return this._validateAuth("downloadFileBatch"), [4, No(e = e.map(function(e) {
							return r(r({}, e), { locale: e.locale ? o.resolveCanonicalLocale(e.locale) : void 0 });
						}), t, this._getTranslationConfig())];
						case 1: return [2, {
							files: (n = i.sent()).data.map(function(e) {
								return r(r({}, e), e.locale && { locale: o.resolveAliasLocale(e.locale) });
							}),
							count: n.count
						}];
					}
				});
			});
		}, e.prototype.translate = function(e, t, n) {
			return h(this, void 0, void 0, function() {
				var o, i, a;
				return f(this, function(s) {
					switch (s.label) {
						case 0:
							if ("string" == typeof t && (t = { targetLocale: t }), this._validateAuth("translate"), !(o = (null == t ? void 0 : t.targetLocale) || this.targetLocale)) throw i = co("translate"), qn.error(i), new Error(i);
							return o = this.resolveCanonicalLocale(o), a = this.resolveCanonicalLocale((null == t ? void 0 : t.sourceLocale) || this.sourceLocale || K), [4, wo([e], r(r({}, t), {
								targetLocale: o,
								sourceLocale: a
							}), this._getTranslationConfig(), n)];
						case 1: return [2, s.sent()[0]];
					}
				});
			});
		}, e.prototype.translateMany = function(e, t, n) {
			return h(this, void 0, void 0, function() {
				var o, i, a;
				return f(this, function(s) {
					switch (s.label) {
						case 0:
							if ("string" == typeof t && (t = { targetLocale: t }), this._validateAuth("translateMany"), !(o = (null == t ? void 0 : t.targetLocale) || this.targetLocale)) throw i = co("translateMany"), qn.error(i), new Error(i);
							return o = this.resolveCanonicalLocale(o), a = this.resolveCanonicalLocale((null == t ? void 0 : t.sourceLocale) || this.sourceLocale || K), [4, wo(e, r(r({}, t), {
								targetLocale: o,
								sourceLocale: a
							}), this._getTranslationConfig(), n)];
						case 1: return [2, s.sent()];
					}
				});
			});
		}, e.prototype.uploadSourceFiles = function(e, t) {
			return h(this, void 0, void 0, function() {
				var n, o, i, a, s = this;
				return f(this, function(c) {
					switch (c.label) {
						case 0: return this._validateAuth("uploadSourceFiles"), n = r(r({}, t), { sourceLocale: this.resolveCanonicalLocale(null !== (a = null !== (i = t.sourceLocale) && void 0 !== i ? i : this.sourceLocale) && void 0 !== a ? a : K) }), [4, Oo(e = e.map(function(e) {
							return r(r({}, e), { source: r(r({}, e.source), { locale: s.resolveCanonicalLocale(e.source.locale) }) });
						}), n, this._getTranslationConfig())];
						case 1: return [2, {
							uploadedFiles: (o = c.sent()).data,
							count: o.count,
							message: "Successfully uploaded ".concat(o.count, " files in ").concat(o.batchCount, " batch(es)")
						}];
					}
				});
			});
		}, e.prototype.uploadTranslations = function(e, t) {
			return h(this, void 0, void 0, function() {
				var n, o, i, a, s = this;
				return f(this, function(c) {
					switch (c.label) {
						case 0:
							if (this._validateAuth("uploadTranslations"), !(n = r(r({}, t), { sourceLocale: null !== (a = t.sourceLocale) && void 0 !== a ? a : this.sourceLocale })).sourceLocale) throw o = uo("uploadTranslations"), qn.error(o), new Error(o);
							return [4, Do(e.map(function(e) {
								return r(r({}, e), { translations: e.translations.map(function(e) {
									return r(r({}, e), { locale: s.resolveCanonicalLocale(e.locale) });
								}) });
							}), n, this._getTranslationConfig())];
						case 1: return [2, {
							uploadedFiles: (i = c.sent()).data,
							count: i.count,
							message: "Successfully uploaded ".concat(i.count, " files in ").concat(i.batchCount, " batch(es)")
						}];
					}
				});
			});
		}, e.prototype.formatCutoff = function(e, t) {
			return Zo(e, r({ locales: this._renderingLocales }, t));
		}, e.prototype.formatMessage = function(e, t) {
			return Jo(e, r({ locales: this._renderingLocales }, t));
		}, e.prototype.formatNum = function(e, t) {
			return qo(e, r({ locales: this._renderingLocales }, t));
		}, e.prototype.formatDateTime = function(e, t) {
			return Qo(e, r({ locales: this._renderingLocales }, t));
		}, e.prototype.formatCurrency = function(e, t, n) {
			return $o(e, t, r({ locales: this._renderingLocales }, n));
		}, e.prototype.formatList = function(e, t) {
			return Qn({
				value: e,
				locales: (null == t ? void 0 : t.locales) || this._renderingLocales,
				options: t
			});
		}, e.prototype.formatListToParts = function(e, t) {
			return $n({
				value: e,
				locales: (null == t ? void 0 : t.locales) || this._renderingLocales,
				options: t
			});
		}, e.prototype.formatRelativeTime = function(e, t, n) {
			return ei(e, t, r({ locales: this._renderingLocales }, n));
		}, e.prototype.formatRelativeTimeFromDate = function(e, t) {
			return ti(e, r({ locales: this._renderingLocales }, t));
		}, e.prototype.getLocaleName = function(e) {
			if (void 0 === e && (e = this.targetLocale), !e) throw new Error(co("getLocaleName"));
			return ro(e, this.sourceLocale, this.customMapping);
		}, e.prototype.getLocaleEmoji = function(e) {
			if (void 0 === e && (e = this.targetLocale), !e) throw new Error(co("getLocaleEmoji"));
			return ri(e, this.customMapping);
		}, e.prototype.getLocaleProperties = function(e) {
			if (void 0 === e && (e = this.targetLocale), !e) throw new Error(co("getLocaleProperties"));
			return ni(e, this.sourceLocale, this.customMapping);
		}, e.prototype.getRegionProperties = function(e, t) {
			if (void 0 === e && (e = this.getLocaleProperties().regionCode), !t) {
				if (this.customMapping && !this.customRegionMapping) {
					for (var n = {}, o = 0, i = Object.entries(this.customMapping); o < i.length; o++) {
						var a = i[o], s = a[0], c = a[1];
						if (c && "object" == typeof c && c.regionCode && !n[c.regionCode]) {
							var u = c.regionName, l = c.emoji;
							n[c.regionCode] = r(r({ locale: s }, u && { name: u }), l && { emoji: l });
						}
					}
					this.customRegionMapping = n;
				}
				t = this.customRegionMapping;
			}
			return Mo(e, this.targetLocale, t);
		}, e.prototype.requiresTranslation = function(e, t, r, n) {
			if (void 0 === e && (e = this.sourceLocale), void 0 === t && (t = this.targetLocale), void 0 === r && (r = this.locales), void 0 === n && (n = this.customMapping), !e) throw new Error(uo("requiresTranslation"));
			if (!t) throw new Error(co("requiresTranslation"));
			return sr(e, t, r, n);
		}, e.prototype.determineLocale = function(e, t, r) {
			return void 0 === t && (t = this.locales || []), void 0 === r && (r = this.customMapping), mr(e, t, r);
		}, e.prototype.getLocaleDirection = function(e) {
			if (void 0 === e && (e = this.targetLocale), !e) throw new Error(co("getLocaleDirection"));
			return oi(e);
		}, e.prototype.isValidLocale = function(e, t) {
			if (void 0 === e && (e = this.targetLocale), void 0 === t && (t = this.customMapping), !e) throw new Error(co("isValidLocale"));
			return ii(e, t);
		}, e.prototype.resolveCanonicalLocale = function(e, t) {
			if (void 0 === e && (e = this.targetLocale), void 0 === t && (t = this.customMapping), !e) throw new Error(co("resolveCanonicalLocale"));
			return xo(e, t);
		}, e.prototype.resolveAliasLocale = function(e, t) {
			if (void 0 === t && (t = this.customMapping), !e) throw new Error(co("resolveAliasLocale"));
			return Ro(e, t);
		}, e.prototype.standardizeLocale = function(e) {
			if (void 0 === e && (e = this.targetLocale), !e) throw new Error(co("standardizeLocale"));
			return nr(e);
		}, e.prototype.isSameDialect = function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			return ai.apply(void 0, e);
		}, e.prototype.isSameLanguage = function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			return ar.apply(void 0, e);
		}, e.prototype.isSupersetLocale = function(e, t) {
			return si(e, t);
		}, e;
	}();
	function Zo(e, t) {
		return function(e) {
			var t = e.value, r = e.locales, n = void 0 === r ? K : r, o = e.options, i = void 0 === o ? {} : o;
			return Q.get("CutoffFormat", n, i).format(t);
		}({
			value: e,
			locales: null == t ? void 0 : t.locales,
			options: t
		});
	}
	function Jo(e, t) {
		return "STRING" === (null == t ? void 0 : t.dataFormat) ? e : function(e, t, r) {
			var n, o;
			return void 0 === t && (t = K), void 0 === r && (r = {}), null !== (o = null === (n = new jn(e, t).format(r)) || void 0 === n ? void 0 : n.toString()) && void 0 !== o ? o : "";
		}(e, null == t ? void 0 : t.locales, null == t ? void 0 : t.variables);
	}
	function qo(e, t) {
		return function(e) {
			var t = e.value, n = e.locales, o = void 0 === n ? [K] : n, i = e.options, a = void 0 === i ? {} : i;
			return Q.get("NumberFormat", o, r({ numberingSystem: "latn" }, a)).format(t);
		}({
			value: e,
			locales: t.locales,
			options: t
		});
	}
	function Qo(e, t) {
		return function(e) {
			var t = e.value, n = e.locales, o = void 0 === n ? [K] : n, i = e.options, a = void 0 === i ? {} : i;
			return Q.get("DateTimeFormat", o, r({
				calendar: "gregory",
				numberingSystem: "latn"
			}, a)).format(t);
		}({
			value: e,
			locales: null == t ? void 0 : t.locales,
			options: t
		});
	}
	function $o(e, t, n) {
		return function(e) {
			var t = e.value, n = e.locales, o = void 0 === n ? [K] : n, i = e.currency, a = void 0 === i ? "USD" : i, s = e.options, c = void 0 === s ? {} : s;
			return Q.get("NumberFormat", o, r({
				style: "currency",
				currency: a,
				numberingSystem: "latn"
			}, c)).format(t);
		}({
			value: e,
			currency: t,
			locales: n.locales,
			options: n
		});
	}
	function ei(e, t, r) {
		return to({
			value: e,
			unit: t,
			locales: r.locales,
			options: r
		});
	}
	function ti(e, t) {
		var r = t.locales, o = t.baseDate, i = n(t, ["locales", "baseDate"]);
		return eo({
			date: e,
			baseDate: null != o ? o : /* @__PURE__ */ new Date(),
			locales: r,
			options: i
		});
	}
	function ri(e, t) {
		return lr(e, t);
	}
	function ni(e, t, r) {
		return gr(e, t, r);
	}
	function oi(e) {
		return no(e);
	}
	function ii(e, t) {
		return rr(e, t);
	}
	function ai() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return ir.apply(void 0, e);
	}
	function si(e, t) {
		return function(e, t) {
			try {
				var r = Q.get("Locale", nr(e)), n = r.language, o = r.region, i = r.script, a = Q.get("Locale", nr(t)), s = a.language, c = a.region, u = a.script;
				return !(n !== s || o && o !== c || i && i !== u);
			} catch (e) {
				return console.error(e), !1;
			}
		}(e, t);
	}
	exports.API_VERSION = go, exports.GT = Yo, exports.determineLocale = function(e, t, r) {
		return void 0 === t && (t = []), void 0 === r && (r = void 0), mr(e, t, r);
	}, exports.formatCurrency = $o, exports.formatCutoff = Zo, exports.formatDateTime = Qo, exports.formatList = function(e, t) {
		return Qn({
			value: e,
			locales: t.locales,
			options: t
		});
	}, exports.formatListToParts = function(e, t) {
		return $n({
			value: e,
			locales: null == t ? void 0 : t.locales,
			options: t
		});
	}, exports.formatMessage = Jo, exports.formatNum = qo, exports.formatRelativeTime = ei, exports.formatRelativeTimeFromDate = ti, exports.getLocaleDirection = oi, exports.getLocaleEmoji = ri, exports.getLocaleName = function(e, t, r) {
		return ro(e, t, r);
	}, exports.getLocaleProperties = ni, exports.getRegionProperties = function(e, t, r) {
		return Mo(e, t, r);
	}, exports.isSameDialect = ai, exports.isSameLanguage = function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return ar.apply(void 0, e);
	}, exports.isSupersetLocale = si, exports.isValidLocale = ii, exports.requiresTranslation = function(e, t, r, n) {
		return sr(e, t, r, n);
	}, exports.resolveAliasLocale = function(e, t) {
		return Ro(e, t);
	}, exports.resolveCanonicalLocale = function(e, t) {
		return xo(e, t);
	}, exports.standardizeLocale = function(e) {
		return nr(e);
	};
}));
//#endregion
//#region ../../../node_modules/.bun/@generaltranslation+supported-locales@2.0.61/node_modules/@generaltranslation/supported-locales/dist/index.cjs.min.cjs
var require_index_cjs_min$1 = __commonJSMin(((exports) => {
	var e = require_index_cjs_min$2(), r = function() {
		return r = Object.assign || function(e) {
			for (var r, n = 1, t = arguments.length; n < t; n++) for (var a in r = arguments[n]) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
			return e;
		}, r.apply(this, arguments);
	};
	var n = {
		af: ["af"],
		am: ["am"],
		ar: [
			"ar",
			"ar-AE",
			"ar-EG",
			"ar-LB",
			"ar-MA",
			"ar-SA"
		],
		bg: ["bg"],
		bn: ["bn"],
		bs: ["bs"],
		ca: ["ca"],
		cs: ["cs"],
		cy: ["cy"],
		da: ["da"],
		de: [
			"de",
			"de-DE",
			"de-AT",
			"de-CH"
		],
		el: [
			"el",
			"el-EL",
			"el-CY"
		],
		en: [
			"en",
			"en-AU",
			"en-CA",
			"en-GB",
			"en-NZ",
			"en-US"
		],
		es: [
			"es",
			"es-ES",
			"es-419",
			"es-AR",
			"es-CL",
			"es-CO",
			"es-MX",
			"es-PE",
			"es-US",
			"es-VE"
		],
		et: ["et"],
		fa: ["fa"],
		fi: ["fi"],
		fil: ["fil"],
		fr: [
			"fr",
			"fr-FR",
			"fr-BE",
			"fr-CM",
			"fr-CA",
			"fr-CH",
			"fr-SN"
		],
		gu: ["gu"],
		ha: ["ha"],
		hi: ["hi"],
		he: ["he"],
		hr: ["hr"],
		hu: ["hu"],
		hy: ["hy"],
		id: ["id"],
		ig: ["ig"],
		is: ["is"],
		it: [
			"it",
			"it-IT",
			"it-CH"
		],
		ja: ["ja"],
		ka: ["ka"],
		kk: ["kk"],
		kn: ["kn"],
		ko: ["ko"],
		la: ["la"],
		lt: ["lt"],
		lv: ["lv"],
		mk: ["mk"],
		ml: ["ml"],
		mn: ["mn"],
		mr: ["mr"],
		ms: ["ms"],
		my: ["my"],
		nl: [
			"nl",
			"nl-NL",
			"nl-BE"
		],
		nb: ["nb", "nb-NO"],
		no: ["no", "no-NO"],
		nn: ["nn", "nn-NO"],
		pa: ["pa"],
		pl: ["pl"],
		pt: [
			"pt",
			"pt-BR",
			"pt-PT"
		],
		ro: ["ro"],
		ru: ["ru"],
		sk: ["sk"],
		sl: ["sl"],
		so: ["so"],
		sq: ["sq"],
		sr: ["sr"],
		sv: ["sv"],
		sw: [
			"sw",
			"sw-KE",
			"sw-TZ"
		],
		ta: ["ta"],
		te: ["te"],
		th: ["th"],
		tl: ["tl"],
		tr: ["tr"],
		uk: ["uk"],
		ur: ["ur"],
		uz: ["uz"],
		vi: ["vi"],
		yo: ["yo"],
		zh: [
			"zh",
			"zh-CN",
			"zh-Hans",
			"zh-Hant",
			"zh-HK",
			"zh-SG",
			"zh-TW"
		],
		qbr: ["qbr"]
	};
	exports.getSupportedLocale = function(t) {
		var a;
		if (!e.isValidLocale(t)) return null;
		t = e.standardizeLocale(t);
		var o = e.getLocaleProperties(t), l = o.languageCode, s = function(e, r) {
			var n = {};
			for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);
			if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
				var a = 0;
				for (t = Object.getOwnPropertySymbols(e); a < t.length; a++) r.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (n[t[a]] = e[t[a]]);
			}
			return n;
		}(o, ["languageCode"]);
		if (null === (a = n[l]) || void 0 === a ? void 0 : a.length) {
			var i = n[l], u = function(e) {
				for (var r = e.locale, n = e.languageCode, t = e.minimizedCode, a = e.regionCode, o = e.scriptCode, l = 0, s = [
					r,
					"".concat(n, "-").concat(a),
					"".concat(n, "-").concat(o),
					t
				]; l < s.length; l++) {
					var u = s[l];
					if (i.includes(u)) return u;
				}
				return null;
			};
			return u(r({
				locale: t,
				languageCode: l
			}, s)) || u(r({ locale: l }, e.getLocaleProperties(l)));
		}
		return null;
	}, exports.listSupportedLocales = function() {
		for (var e = [], r = 0, t = Object.values(n); r < t.length; r++) {
			var a = t[r];
			e.push.apply(e, a);
		}
		return e.sort();
	};
}));
//#endregion
//#region ../../../node_modules/.bun/@generaltranslation+react-core@1.8.2+b1ab299f0a400331/node_modules/@generaltranslation/react-core/dist/index.cjs.min.cjs
var require_index_cjs_min = __commonJSMin(((exports) => {
	var e$1 = __require("react/jsx-runtime"), t$1 = __require("react"), r$1 = require_index_cjs_min$2(), n$1 = require_index_cjs_min$1();
	function o(e) {
		var t = Object.create(null);
		return e && Object.keys(e).forEach(function(r) {
			if ("default" !== r) {
				var n = Object.getOwnPropertyDescriptor(e, r);
				Object.defineProperty(t, r, n.get ? n : {
					enumerable: !0,
					get: function() {
						return e[r];
					}
				});
			}
		}), t.default = e, Object.freeze(t);
	}
	var i = o(t$1);
	var a = {
		variable: "value",
		number: "n",
		datetime: "date",
		currency: "cost",
		"relative-time": "time"
	};
	function s(e = {}, t) {
		if (e.name) return e.name;
		return `_gt_${a[t] || "value"}_${e["data-_gt"]?.id}`;
	}
	var c = function(e, t) {
		return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
		}, c(e, t);
	};
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
		function r() {
			this.constructor = e;
		}
		c(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
	}
	var u = function() {
		return u = Object.assign || function(e) {
			for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
			return e;
		}, u.apply(this, arguments);
	};
	function h(e, t) {
		var r = {};
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
		if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
			var o = 0;
			for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
		}
		return r;
	}
	function f(e, t, r, n) {
		var o, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
		if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
		else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
		return i > 3 && a && Object.defineProperty(t, r, a), a;
	}
	function p(e, t) {
		return function(r, n) {
			t(r, n, e);
		};
	}
	function d(e, t, r, n, o, i) {
		function a(e) {
			if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
			return e;
		}
		for (var s, c = n.kind, l = "getter" === c ? "get" : "setter" === c ? "set" : "value", u = !t && e ? n.static ? e : e.prototype : null, h = t || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}), f = !1, p = r.length - 1; p >= 0; p--) {
			var d = {};
			for (var v in n) d[v] = "access" === v ? {} : n[v];
			for (var v in n.access) d.access[v] = n.access[v];
			d.addInitializer = function(e) {
				if (f) throw new TypeError("Cannot add initializers after decoration has completed");
				i.push(a(e || null));
			};
			var y = (0, r[p])("accessor" === c ? {
				get: h.get,
				set: h.set
			} : h[l], d);
			if ("accessor" === c) {
				if (void 0 === y) continue;
				if (null === y || "object" != typeof y) throw new TypeError("Object expected");
				(s = a(y.get)) && (h.get = s), (s = a(y.set)) && (h.set = s), (s = a(y.init)) && o.unshift(s);
			} else (s = a(y)) && ("field" === c ? o.unshift(s) : h[l] = s);
		}
		u && Object.defineProperty(u, n.name, h), f = !0;
	}
	function v(e, t, r) {
		for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
		return n ? r : void 0;
	}
	function y(e) {
		return "symbol" == typeof e ? e : "".concat(e);
	}
	function g(e, t, r) {
		return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
			configurable: !0,
			value: r ? "".concat(r, " ", t) : t
		});
	}
	function m(e, t) {
		if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
	}
	function _(e, t, r, n) {
		return new (r || (r = Promise))(function(o, i) {
			function a(e) {
				try {
					c(n.next(e));
				} catch (e) {
					i(e);
				}
			}
			function s(e) {
				try {
					c(n.throw(e));
				} catch (e) {
					i(e);
				}
			}
			function c(e) {
				var t;
				e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
					e(t);
				})).then(a, s);
			}
			c((n = n.apply(e, t || [])).next());
		});
	}
	function b(e, t) {
		var r, n, o, i = {
			label: 0,
			sent: function() {
				if (1 & o[0]) throw o[1];
				return o[1];
			},
			trys: [],
			ops: []
		}, a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
		return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
			return this;
		}), a;
		function s(s) {
			return function(c) {
				return function(s) {
					if (r) throw new TypeError("Generator is already executing.");
					for (; a && (a = 0, s[0] && (i = 0)), i;) try {
						if (r = 1, n && (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done) return o;
						switch (n = 0, o && (s = [2 & s[0], o.value]), s[0]) {
							case 0:
							case 1:
								o = s;
								break;
							case 4: return i.label++, {
								value: s[1],
								done: !1
							};
							case 5:
								i.label++, n = s[1], s = [0];
								continue;
							case 7:
								s = i.ops.pop(), i.trys.pop();
								continue;
							default:
								if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
									i = 0;
									continue;
								}
								if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
									i.label = s[1];
									break;
								}
								if (6 === s[0] && i.label < o[1]) {
									i.label = o[1], o = s;
									break;
								}
								if (o && i.label < o[2]) {
									i.label = o[2], i.ops.push(s);
									break;
								}
								o[2] && i.ops.pop(), i.trys.pop();
								continue;
						}
						s = t.call(e, i);
					} catch (e) {
						s = [6, e], n = 0;
					} finally {
						r = o = 0;
					}
					if (5 & s[0]) throw s[1];
					return {
						value: s[0] ? s[1] : void 0,
						done: !0
					};
				}([s, c]);
			};
		}
	}
	var E = Object.create ? function(e, t, r, n) {
		void 0 === n && (n = r);
		var o = Object.getOwnPropertyDescriptor(t, r);
		o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
			enumerable: !0,
			get: function() {
				return t[r];
			}
		}), Object.defineProperty(e, n, o);
	} : function(e, t, r, n) {
		void 0 === n && (n = r), e[n] = t[r];
	};
	function w(e, t) {
		for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || E(t, e, r);
	}
	function x(e) {
		var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
		if (r) return r.call(e);
		if (e && "number" == typeof e.length) return { next: function() {
			return e && n >= e.length && (e = void 0), {
				value: e && e[n++],
				done: !e
			};
		} };
		throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}
	function T(e, t) {
		var r = "function" == typeof Symbol && e[Symbol.iterator];
		if (!r) return e;
		var n, o, i = r.call(e), a = [];
		try {
			for (; (void 0 === t || t-- > 0) && !(n = i.next()).done;) a.push(n.value);
		} catch (e) {
			o = { error: e };
		} finally {
			try {
				n && !n.done && (r = i.return) && r.call(i);
			} finally {
				if (o) throw o.error;
			}
		}
		return a;
	}
	function B() {
		for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(T(arguments[t]));
		return e;
	}
	function S() {
		for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
		var n = Array(e), o = 0;
		for (t = 0; t < r; t++) for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) n[o] = i[a];
		return n;
	}
	function A(e, t, r) {
		if (r || 2 === arguments.length) for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
		return e.concat(n || Array.prototype.slice.call(t));
	}
	function C(e) {
		return this instanceof C ? (this.v = e, this) : new C(e);
	}
	function H(e, t, r) {
		if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
		var n, o = r.apply(e, t || []), i = [];
		return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", function(e) {
			return function(t) {
				return Promise.resolve(t).then(e, l);
			};
		}), n[Symbol.asyncIterator] = function() {
			return this;
		}, n;
		function a(e, t) {
			o[e] && (n[e] = function(t) {
				return new Promise(function(r, n) {
					i.push([
						e,
						t,
						r,
						n
					]) > 1 || s(e, t);
				});
			}, t && (n[e] = t(n[e])));
		}
		function s(e, t) {
			try {
				(function(e) {
					e.value instanceof C ? Promise.resolve(e.value.v).then(c, l) : u(i[0][2], e);
				})(o[e](t));
			} catch (e) {
				u(i[0][3], e);
			}
		}
		function c(e) {
			s("next", e);
		}
		function l(e) {
			s("throw", e);
		}
		function u(e, t) {
			e(t), i.shift(), i.length && s(i[0][0], i[0][1]);
		}
	}
	function P(e) {
		var t, r;
		return t = {}, n("next"), n("throw", function(e) {
			throw e;
		}), n("return"), t[Symbol.iterator] = function() {
			return this;
		}, t;
		function n(n, o) {
			t[n] = e[n] ? function(t) {
				return (r = !r) ? {
					value: C(e[n](t)),
					done: !1
				} : o ? o(t) : t;
			} : o;
		}
	}
	function O(e) {
		if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
		var t, r = e[Symbol.asyncIterator];
		return r ? r.call(e) : (e = x(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
			return this;
		}, t);
		function n(r) {
			t[r] = e[r] && function(t) {
				return new Promise(function(n, o) {
					(function(e, t, r, n) {
						Promise.resolve(n).then(function(t) {
							e({
								value: t,
								done: r
							});
						}, t);
					})(n, o, (t = e[r](t)).done, t.value);
				});
			};
		}
	}
	function k(e, t) {
		return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
	}
	var L = Object.create ? function(e, t) {
		Object.defineProperty(e, "default", {
			enumerable: !0,
			value: t
		});
	} : function(e, t) {
		e.default = t;
	}, R = function(e) {
		return R = Object.getOwnPropertyNames || function(e) {
			var t = [];
			for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
			return t;
		}, R(e);
	};
	function I(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (null != e) for (var r = R(e), n = 0; n < r.length; n++) "default" !== r[n] && E(t, e, r[n]);
		return L(t, e), t;
	}
	function M(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function N(e, t, r, n) {
		if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
		if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
		return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
	}
	function j(e, t, r, n, o) {
		if ("m" === n) throw new TypeError("Private method is not writable");
		if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
		if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r;
	}
	function D(e, t) {
		if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
		return "function" == typeof e ? t === e : e.has(t);
	}
	function $(e, t, r) {
		if (null != t) {
			if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
			var n, o;
			if (r) {
				if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
				n = t[Symbol.asyncDispose];
			}
			if (void 0 === n) {
				if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
				n = t[Symbol.dispose], r && (o = n);
			}
			if ("function" != typeof n) throw new TypeError("Object not disposable.");
			o && (n = function() {
				try {
					o.call(this);
				} catch (e) {
					return Promise.reject(e);
				}
			}), e.stack.push({
				value: t,
				dispose: n,
				async: r
			});
		} else r && e.stack.push({ async: !0 });
		return t;
	}
	var F = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
		var n = new Error(r);
		return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
	};
	function U(e) {
		function t(t) {
			e.error = e.hasError ? new F(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
		}
		var r, n = 0;
		return function o() {
			for (; r = e.stack.pop();) try {
				if (!r.async && 1 === n) return n = 0, e.stack.push(r), Promise.resolve().then(o);
				if (r.dispose) {
					var i = r.dispose.call(r.value);
					if (r.async) return n |= 2, Promise.resolve(i).then(o, function(e) {
						return t(e), o();
					});
				} else n |= 1;
			} catch (e) {
				t(e);
			}
			if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
			if (e.hasError) throw e.error;
		}();
	}
	function G(e, t) {
		return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, r, n, o, i) {
			return r ? t ? ".jsx" : ".js" : !n || o && i ? n + o + "." + i.toLowerCase() + "js" : e;
		}) : e;
	}
	var z, V, K, X = Object.freeze({
		__proto__: null,
		__addDisposableResource: $,
		get __assign() {
			return u;
		},
		__asyncDelegator: P,
		__asyncGenerator: H,
		__asyncValues: O,
		__await: C,
		__awaiter: _,
		__classPrivateFieldGet: N,
		__classPrivateFieldIn: D,
		__classPrivateFieldSet: j,
		__createBinding: E,
		__decorate: f,
		__disposeResources: U,
		__esDecorate: d,
		__exportStar: w,
		__extends: l,
		__generator: b,
		__importDefault: M,
		__importStar: I,
		__makeTemplateObject: k,
		__metadata: m,
		__param: p,
		__propKey: y,
		__read: T,
		__rest: h,
		__rewriteRelativeImportExtension: G,
		__runInitializers: v,
		__setFunctionName: g,
		__spread: B,
		__spreadArray: A,
		__spreadArrays: S,
		__values: x,
		default: {
			__extends: l,
			__assign: u,
			__rest: h,
			__decorate: f,
			__param: p,
			__esDecorate: d,
			__runInitializers: v,
			__propKey: y,
			__setFunctionName: g,
			__metadata: m,
			__awaiter: _,
			__generator: b,
			__createBinding: E,
			__exportStar: w,
			__values: x,
			__read: T,
			__spread: B,
			__spreadArrays: S,
			__spreadArray: A,
			__await: C,
			__asyncGenerator: H,
			__asyncDelegator: P,
			__asyncValues: O,
			__makeTemplateObject: k,
			__importStar: I,
			__importDefault: M,
			__classPrivateFieldGet: N,
			__classPrivateFieldSet: j,
			__classPrivateFieldIn: D,
			__addDisposableResource: $,
			__disposeResources: U,
			__rewriteRelativeImportExtension: G
		}
	});
	(function(e) {
		e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
	})(z || (z = {})), function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	}(V || (V = {})), function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	}(K || (K = {}));
	var q = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Y = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
	function J(e) {
		var t = {};
		return e.replace(Y, function(e) {
			var r = e.length;
			switch (e[0]) {
				case "G":
					t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
					break;
				case "y":
					t.year = 2 === r ? "2-digit" : "numeric";
					break;
				case "Y":
				case "u":
				case "U":
				case "r": throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
				case "q":
				case "Q": throw new RangeError("`q/Q` (quarter) patterns are not supported");
				case "M":
				case "L":
					t.month = [
						"numeric",
						"2-digit",
						"short",
						"long",
						"narrow"
					][r - 1];
					break;
				case "w":
				case "W": throw new RangeError("`w/W` (week) patterns are not supported");
				case "d":
					t.day = ["numeric", "2-digit"][r - 1];
					break;
				case "D":
				case "F":
				case "g": throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
				case "E":
					t.weekday = 4 === r ? "long" : 5 === r ? "narrow" : "short";
					break;
				case "e":
					if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
					t.weekday = [
						"short",
						"long",
						"narrow",
						"short"
					][r - 4];
					break;
				case "c":
					if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
					t.weekday = [
						"short",
						"long",
						"narrow",
						"short"
					][r - 4];
					break;
				case "a":
					t.hour12 = !0;
					break;
				case "b":
				case "B": throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
				case "h":
					t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
					break;
				case "H":
					t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
					break;
				case "K":
					t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
					break;
				case "k":
					t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
					break;
				case "j":
				case "J":
				case "C": throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
				case "m":
					t.minute = ["numeric", "2-digit"][r - 1];
					break;
				case "s":
					t.second = ["numeric", "2-digit"][r - 1];
					break;
				case "S":
				case "A": throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
				case "z":
					t.timeZoneName = r < 4 ? "short" : "long";
					break;
				case "Z":
				case "O":
				case "v":
				case "V":
				case "X":
				case "x": throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
			}
			return "";
		}), t;
	}
	var Z = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
	function Q(e) {
		return e.replace(/^(.*?)-/, "");
	}
	var ee = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, te = /^(@+)?(\+|#+)?[rs]?$/g, re = /(\*)(0+)|(#+)(0+)|(0+)/g, ne = /^(0+)$/;
	function oe(e) {
		var t = {};
		return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(te, function(e, r, n) {
			return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), "";
		}), t;
	}
	function ie(e) {
		switch (e) {
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
	function ae(e) {
		var t;
		if ("E" === e[0] && "E" === e[1] ? (t = { notation: "engineering" }, e = e.slice(2)) : "E" === e[0] && (t = { notation: "scientific" }, e = e.slice(1)), t) {
			var r = e.slice(0, 2);
			if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !ne.test(e)) throw new Error("Malformed concise eng/scientific notation");
			t.minimumIntegerDigits = e.length;
		}
		return t;
	}
	function se(e) {
		return ie(e) || {};
	}
	function ce(e) {
		for (var t = {}, r = 0, n = e; r < n.length; r++) {
			var o = n[r];
			switch (o.stem) {
				case "percent":
				case "%":
					t.style = "percent";
					continue;
				case "%x100":
					t.style = "percent", t.scale = 100;
					continue;
				case "currency":
					t.style = "currency", t.currency = o.options[0];
					continue;
				case "group-off":
				case ",_":
					t.useGrouping = !1;
					continue;
				case "precision-integer":
				case ".":
					t.maximumFractionDigits = 0;
					continue;
				case "measure-unit":
				case "unit":
					t.style = "unit", t.unit = Q(o.options[0]);
					continue;
				case "compact-short":
				case "K":
					t.notation = "compact", t.compactDisplay = "short";
					continue;
				case "compact-long":
				case "KK":
					t.notation = "compact", t.compactDisplay = "long";
					continue;
				case "scientific":
					t = u(u(u({}, t), { notation: "scientific" }), o.options.reduce(function(e, t) {
						return u(u({}, e), se(t));
					}, {}));
					continue;
				case "engineering":
					t = u(u(u({}, t), { notation: "engineering" }), o.options.reduce(function(e, t) {
						return u(u({}, e), se(t));
					}, {}));
					continue;
				case "notation-simple":
					t.notation = "standard";
					continue;
				case "unit-width-narrow":
					t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
					continue;
				case "unit-width-short":
					t.currencyDisplay = "code", t.unitDisplay = "short";
					continue;
				case "unit-width-full-name":
					t.currencyDisplay = "name", t.unitDisplay = "long";
					continue;
				case "unit-width-iso-code":
					t.currencyDisplay = "symbol";
					continue;
				case "scale":
					t.scale = parseFloat(o.options[0]);
					continue;
				case "rounding-mode-floor":
					t.roundingMode = "floor";
					continue;
				case "rounding-mode-ceiling":
					t.roundingMode = "ceil";
					continue;
				case "rounding-mode-down":
					t.roundingMode = "trunc";
					continue;
				case "rounding-mode-up":
					t.roundingMode = "expand";
					continue;
				case "rounding-mode-half-even":
					t.roundingMode = "halfEven";
					continue;
				case "rounding-mode-half-down":
					t.roundingMode = "halfTrunc";
					continue;
				case "rounding-mode-half-up":
					t.roundingMode = "halfExpand";
					continue;
				case "integer-width":
					if (o.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
					o.options[0].replace(re, function(e, r, n, o, i, a) {
						if (r) t.minimumIntegerDigits = n.length;
						else {
							if (o && i) throw new Error("We currently do not support maximum integer digits");
							if (a) throw new Error("We currently do not support exact integer digits");
						}
						return "";
					});
					continue;
			}
			if (ne.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
			else if (ee.test(o.stem)) {
				if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
				o.stem.replace(ee, function(e, r, n, o, i, a) {
					return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), "";
				});
				var i = o.options[0];
				"w" === i ? t = u(u({}, t), { trailingZeroDisplay: "stripIfInteger" }) : i && (t = u(u({}, t), oe(i)));
			} else if (te.test(o.stem)) t = u(u({}, t), oe(o.stem));
			else {
				var a = ie(o.stem);
				a && (t = u(u({}, t), a));
				var s = ae(o.stem);
				s && (t = u(u({}, t), s));
			}
		}
		return t;
	}
	var le, ue = {
		"001": ["H", "h"],
		419: [
			"h",
			"H",
			"hB",
			"hb"
		],
		AC: [
			"H",
			"h",
			"hb",
			"hB"
		],
		AD: ["H", "hB"],
		AE: [
			"h",
			"hB",
			"hb",
			"H"
		],
		AF: [
			"H",
			"hb",
			"hB",
			"h"
		],
		AG: [
			"h",
			"hb",
			"H",
			"hB"
		],
		AI: [
			"H",
			"h",
			"hb",
			"hB"
		],
		AL: [
			"h",
			"H",
			"hB"
		],
		AM: ["H", "hB"],
		AO: ["H", "hB"],
		AR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		AS: ["h", "H"],
		AT: ["H", "hB"],
		AU: [
			"h",
			"hb",
			"H",
			"hB"
		],
		AW: ["H", "hB"],
		AX: ["H"],
		AZ: [
			"H",
			"hB",
			"h"
		],
		BA: [
			"H",
			"hB",
			"h"
		],
		BB: [
			"h",
			"hb",
			"H",
			"hB"
		],
		BD: [
			"h",
			"hB",
			"H"
		],
		BE: ["H", "hB"],
		BF: ["H", "hB"],
		BG: [
			"H",
			"hB",
			"h"
		],
		BH: [
			"h",
			"hB",
			"hb",
			"H"
		],
		BI: ["H", "h"],
		BJ: ["H", "hB"],
		BL: ["H", "hB"],
		BM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		BN: [
			"hb",
			"hB",
			"h",
			"H"
		],
		BO: [
			"h",
			"H",
			"hB",
			"hb"
		],
		BQ: ["H"],
		BR: ["H", "hB"],
		BS: [
			"h",
			"hb",
			"H",
			"hB"
		],
		BT: ["h", "H"],
		BW: [
			"H",
			"h",
			"hb",
			"hB"
		],
		BY: ["H", "h"],
		BZ: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CA: [
			"h",
			"hb",
			"H",
			"hB"
		],
		CC: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CD: ["hB", "H"],
		CF: [
			"H",
			"h",
			"hB"
		],
		CG: ["H", "hB"],
		CH: [
			"H",
			"hB",
			"h"
		],
		CI: ["H", "hB"],
		CK: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CL: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CM: [
			"H",
			"h",
			"hB"
		],
		CN: [
			"H",
			"hB",
			"hb",
			"h"
		],
		CO: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CP: ["H"],
		CR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CU: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CV: ["H", "hB"],
		CW: ["H", "hB"],
		CX: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CY: [
			"h",
			"H",
			"hb",
			"hB"
		],
		CZ: ["H"],
		DE: ["H", "hB"],
		DG: [
			"H",
			"h",
			"hb",
			"hB"
		],
		DJ: ["h", "H"],
		DK: ["H"],
		DM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		DO: [
			"h",
			"H",
			"hB",
			"hb"
		],
		DZ: [
			"h",
			"hB",
			"hb",
			"H"
		],
		EA: [
			"H",
			"h",
			"hB",
			"hb"
		],
		EC: [
			"h",
			"H",
			"hB",
			"hb"
		],
		EE: ["H", "hB"],
		EG: [
			"h",
			"hB",
			"hb",
			"H"
		],
		EH: [
			"h",
			"hB",
			"hb",
			"H"
		],
		ER: ["h", "H"],
		ES: [
			"H",
			"hB",
			"h",
			"hb"
		],
		ET: [
			"hB",
			"hb",
			"h",
			"H"
		],
		FI: ["H"],
		FJ: [
			"h",
			"hb",
			"H",
			"hB"
		],
		FK: [
			"H",
			"h",
			"hb",
			"hB"
		],
		FM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		FO: ["H", "h"],
		FR: ["H", "hB"],
		GA: ["H", "hB"],
		GB: [
			"H",
			"h",
			"hb",
			"hB"
		],
		GD: [
			"h",
			"hb",
			"H",
			"hB"
		],
		GE: [
			"H",
			"hB",
			"h"
		],
		GF: ["H", "hB"],
		GG: [
			"H",
			"h",
			"hb",
			"hB"
		],
		GH: ["h", "H"],
		GI: [
			"H",
			"h",
			"hb",
			"hB"
		],
		GL: ["H", "h"],
		GM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		GN: ["H", "hB"],
		GP: ["H", "hB"],
		GQ: [
			"H",
			"hB",
			"h",
			"hb"
		],
		GR: [
			"h",
			"H",
			"hb",
			"hB"
		],
		GT: [
			"h",
			"H",
			"hB",
			"hb"
		],
		GU: [
			"h",
			"hb",
			"H",
			"hB"
		],
		GW: ["H", "hB"],
		GY: [
			"h",
			"hb",
			"H",
			"hB"
		],
		HK: [
			"h",
			"hB",
			"hb",
			"H"
		],
		HN: [
			"h",
			"H",
			"hB",
			"hb"
		],
		HR: ["H", "hB"],
		HU: ["H", "h"],
		IC: [
			"H",
			"h",
			"hB",
			"hb"
		],
		ID: ["H"],
		IE: [
			"H",
			"h",
			"hb",
			"hB"
		],
		IL: ["H", "hB"],
		IM: [
			"H",
			"h",
			"hb",
			"hB"
		],
		IN: ["h", "H"],
		IO: [
			"H",
			"h",
			"hb",
			"hB"
		],
		IQ: [
			"h",
			"hB",
			"hb",
			"H"
		],
		IR: ["hB", "H"],
		IS: ["H"],
		IT: ["H", "hB"],
		JE: [
			"H",
			"h",
			"hb",
			"hB"
		],
		JM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		JO: [
			"h",
			"hB",
			"hb",
			"H"
		],
		JP: [
			"H",
			"K",
			"h"
		],
		KE: [
			"hB",
			"hb",
			"H",
			"h"
		],
		KG: [
			"H",
			"h",
			"hB",
			"hb"
		],
		KH: [
			"hB",
			"h",
			"H",
			"hb"
		],
		KI: [
			"h",
			"hb",
			"H",
			"hB"
		],
		KM: [
			"H",
			"h",
			"hB",
			"hb"
		],
		KN: [
			"h",
			"hb",
			"H",
			"hB"
		],
		KP: [
			"h",
			"H",
			"hB",
			"hb"
		],
		KR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		KW: [
			"h",
			"hB",
			"hb",
			"H"
		],
		KY: [
			"h",
			"hb",
			"H",
			"hB"
		],
		KZ: ["H", "hB"],
		LA: [
			"H",
			"hb",
			"hB",
			"h"
		],
		LB: [
			"h",
			"hB",
			"hb",
			"H"
		],
		LC: [
			"h",
			"hb",
			"H",
			"hB"
		],
		LI: [
			"H",
			"hB",
			"h"
		],
		LK: [
			"H",
			"h",
			"hB",
			"hb"
		],
		LR: [
			"h",
			"hb",
			"H",
			"hB"
		],
		LS: ["h", "H"],
		LT: [
			"H",
			"h",
			"hb",
			"hB"
		],
		LU: [
			"H",
			"h",
			"hB"
		],
		LV: [
			"H",
			"hB",
			"hb",
			"h"
		],
		LY: [
			"h",
			"hB",
			"hb",
			"H"
		],
		MA: [
			"H",
			"h",
			"hB",
			"hb"
		],
		MC: ["H", "hB"],
		MD: ["H", "hB"],
		ME: [
			"H",
			"hB",
			"h"
		],
		MF: ["H", "hB"],
		MG: ["H", "h"],
		MH: [
			"h",
			"hb",
			"H",
			"hB"
		],
		MK: [
			"H",
			"h",
			"hb",
			"hB"
		],
		ML: ["H"],
		MM: [
			"hB",
			"hb",
			"H",
			"h"
		],
		MN: [
			"H",
			"h",
			"hb",
			"hB"
		],
		MO: [
			"h",
			"hB",
			"hb",
			"H"
		],
		MP: [
			"h",
			"hb",
			"H",
			"hB"
		],
		MQ: ["H", "hB"],
		MR: [
			"h",
			"hB",
			"hb",
			"H"
		],
		MS: [
			"H",
			"h",
			"hb",
			"hB"
		],
		MT: ["H", "h"],
		MU: ["H", "h"],
		MV: ["H", "h"],
		MW: [
			"h",
			"hb",
			"H",
			"hB"
		],
		MX: [
			"h",
			"H",
			"hB",
			"hb"
		],
		MY: [
			"hb",
			"hB",
			"h",
			"H"
		],
		MZ: ["H", "hB"],
		NA: [
			"h",
			"H",
			"hB",
			"hb"
		],
		NC: ["H", "hB"],
		NE: ["H"],
		NF: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NG: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NI: [
			"h",
			"H",
			"hB",
			"hb"
		],
		NL: ["H", "hB"],
		NO: ["H", "h"],
		NP: [
			"H",
			"h",
			"hB"
		],
		NR: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NU: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NZ: [
			"h",
			"hb",
			"H",
			"hB"
		],
		OM: [
			"h",
			"hB",
			"hb",
			"H"
		],
		PA: [
			"h",
			"H",
			"hB",
			"hb"
		],
		PE: [
			"h",
			"H",
			"hB",
			"hb"
		],
		PF: [
			"H",
			"h",
			"hB"
		],
		PG: ["h", "H"],
		PH: [
			"h",
			"hB",
			"hb",
			"H"
		],
		PK: [
			"h",
			"hB",
			"H"
		],
		PL: ["H", "h"],
		PM: ["H", "hB"],
		PN: [
			"H",
			"h",
			"hb",
			"hB"
		],
		PR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		PS: [
			"h",
			"hB",
			"hb",
			"H"
		],
		PT: ["H", "hB"],
		PW: ["h", "H"],
		PY: [
			"h",
			"H",
			"hB",
			"hb"
		],
		QA: [
			"h",
			"hB",
			"hb",
			"H"
		],
		RE: ["H", "hB"],
		RO: ["H", "hB"],
		RS: [
			"H",
			"hB",
			"h"
		],
		RU: ["H"],
		RW: ["H", "h"],
		SA: [
			"h",
			"hB",
			"hb",
			"H"
		],
		SB: [
			"h",
			"hb",
			"H",
			"hB"
		],
		SC: [
			"H",
			"h",
			"hB"
		],
		SD: [
			"h",
			"hB",
			"hb",
			"H"
		],
		SE: ["H"],
		SG: [
			"h",
			"hb",
			"H",
			"hB"
		],
		SH: [
			"H",
			"h",
			"hb",
			"hB"
		],
		SI: ["H", "hB"],
		SJ: ["H"],
		SK: ["H"],
		SL: [
			"h",
			"hb",
			"H",
			"hB"
		],
		SM: [
			"H",
			"h",
			"hB"
		],
		SN: [
			"H",
			"h",
			"hB"
		],
		SO: ["h", "H"],
		SR: ["H", "hB"],
		SS: [
			"h",
			"hb",
			"H",
			"hB"
		],
		ST: ["H", "hB"],
		SV: [
			"h",
			"H",
			"hB",
			"hb"
		],
		SX: [
			"H",
			"h",
			"hb",
			"hB"
		],
		SY: [
			"h",
			"hB",
			"hb",
			"H"
		],
		SZ: [
			"h",
			"hb",
			"H",
			"hB"
		],
		TA: [
			"H",
			"h",
			"hb",
			"hB"
		],
		TC: [
			"h",
			"hb",
			"H",
			"hB"
		],
		TD: [
			"h",
			"H",
			"hB"
		],
		TF: [
			"H",
			"h",
			"hB"
		],
		TG: ["H", "hB"],
		TH: ["H", "h"],
		TJ: ["H", "h"],
		TL: [
			"H",
			"hB",
			"hb",
			"h"
		],
		TM: ["H", "h"],
		TN: [
			"h",
			"hB",
			"hb",
			"H"
		],
		TO: ["h", "H"],
		TR: ["H", "hB"],
		TT: [
			"h",
			"hb",
			"H",
			"hB"
		],
		TW: [
			"hB",
			"hb",
			"h",
			"H"
		],
		TZ: [
			"hB",
			"hb",
			"H",
			"h"
		],
		UA: [
			"H",
			"hB",
			"h"
		],
		UG: [
			"hB",
			"hb",
			"H",
			"h"
		],
		UM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		US: [
			"h",
			"hb",
			"H",
			"hB"
		],
		UY: [
			"h",
			"H",
			"hB",
			"hb"
		],
		UZ: [
			"H",
			"hB",
			"h"
		],
		VA: [
			"H",
			"h",
			"hB"
		],
		VC: [
			"h",
			"hb",
			"H",
			"hB"
		],
		VE: [
			"h",
			"H",
			"hB",
			"hb"
		],
		VG: [
			"h",
			"hb",
			"H",
			"hB"
		],
		VI: [
			"h",
			"hb",
			"H",
			"hB"
		],
		VN: ["H", "h"],
		VU: ["h", "H"],
		WF: ["H", "hB"],
		WS: ["h", "H"],
		XK: [
			"H",
			"hB",
			"h"
		],
		YE: [
			"h",
			"hB",
			"hb",
			"H"
		],
		YT: ["H", "hB"],
		ZA: [
			"H",
			"h",
			"hb",
			"hB"
		],
		ZM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		ZW: ["H", "h"],
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
	function he(e) {
		var t = e.hourCycle;
		if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
			case "h24": return "k";
			case "h23": return "H";
			case "h12": return "h";
			case "h11": return "K";
			default: throw new Error("Invalid hourCycle");
		}
		var r, n = e.language;
		return "root" !== n && (r = e.maximize().region), (ue[r || ""] || ue[n || ""] || ue["".concat(n, "-001")] || ue["001"])[0];
	}
	var fe = new RegExp("^".concat(q.source, "*")), pe = new RegExp("".concat(q.source, "*$"));
	function de(e, t) {
		return {
			start: e,
			end: t
		};
	}
	var ve = !!String.prototype.startsWith && "_a".startsWith("a", 1), ye = !!String.fromCodePoint, ge = !!Object.fromEntries, me = !!String.prototype.codePointAt, _e = !!String.prototype.trimStart, be = !!String.prototype.trimEnd, Ee = !!Number.isSafeInteger ? Number.isSafeInteger : function(e) {
		return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
	}, we = !0;
	try {
		we = "a" === (null === (le = Pe("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === le ? void 0 : le[0]);
	} catch (nn) {
		we = !1;
	}
	var xe, Te = ve ? function(e, t, r) {
		return e.startsWith(t, r);
	} : function(e, t, r) {
		return e.slice(r, r + t.length) === t;
	}, Be = ye ? String.fromCodePoint : function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		for (var r, n = "", o = e.length, i = 0; o > i;) {
			if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
			n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320);
		}
		return n;
	}, Se = ge ? Object.fromEntries : function(e) {
		for (var t = {}, r = 0, n = e; r < n.length; r++) {
			var o = n[r], i = o[0];
			t[i] = o[1];
		}
		return t;
	}, Ae = me ? function(e, t) {
		return e.codePointAt(t);
	} : function(e, t) {
		var r = e.length;
		if (!(t < 0 || t >= r)) {
			var n, o = e.charCodeAt(t);
			return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536;
		}
	}, Ce = _e ? function(e) {
		return e.trimStart();
	} : function(e) {
		return e.replace(fe, "");
	}, He = be ? function(e) {
		return e.trimEnd();
	} : function(e) {
		return e.replace(pe, "");
	};
	function Pe(e, t) {
		return new RegExp(e, t);
	}
	if (we) {
		var Oe = Pe("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
		xe = function(e, t) {
			var r;
			return Oe.lastIndex = t, null !== (r = Oe.exec(e)[1]) && void 0 !== r ? r : "";
		};
	} else xe = function(e, t) {
		for (var r = [];;) {
			var n = Ae(e, t);
			if (void 0 === n || Ie(n) || Me(n)) break;
			r.push(n), t += n >= 65536 ? 2 : 1;
		}
		return Be.apply(void 0, r);
	};
	var ke = function() {
		function e(e, t) {
			void 0 === t && (t = {}), this.message = e, this.position = {
				offset: 0,
				line: 1,
				column: 1
			}, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
		}
		return e.prototype.parse = function() {
			if (0 !== this.offset()) throw Error("parser can only be used once");
			return this.parseMessage(0, "", !1);
		}, e.prototype.parseMessage = function(e, t, r) {
			for (var n = []; !this.isEOF();) {
				var o = this.char();
				if (123 === o) {
					if ((i = this.parseArgument(e, r)).err) return i;
					n.push(i.val);
				} else {
					if (125 === o && e > 0) break;
					if (35 !== o || "plural" !== t && "selectordinal" !== t) {
						if (60 === o && !this.ignoreTag && 47 === this.peek()) {
							if (r) break;
							return this.error(z.UNMATCHED_CLOSING_TAG, de(this.clonePosition(), this.clonePosition()));
						}
						if (60 === o && !this.ignoreTag && Le(this.peek() || 0)) {
							if ((i = this.parseTag(e, t)).err) return i;
							n.push(i.val);
						} else {
							var i;
							if ((i = this.parseLiteral(e, t)).err) return i;
							n.push(i.val);
						}
					} else {
						var a = this.clonePosition();
						this.bump(), n.push({
							type: V.pound,
							location: de(a, this.clonePosition())
						});
					}
				}
			}
			return {
				val: n,
				err: null
			};
		}, e.prototype.parseTag = function(e, t) {
			var r = this.clonePosition();
			this.bump();
			var n = this.parseTagName();
			if (this.bumpSpace(), this.bumpIf("/>")) return {
				val: {
					type: V.literal,
					value: "<".concat(n, "/>"),
					location: de(r, this.clonePosition())
				},
				err: null
			};
			if (this.bumpIf(">")) {
				var o = this.parseMessage(e + 1, t, !0);
				if (o.err) return o;
				var i = o.val, a = this.clonePosition();
				if (this.bumpIf("</")) {
					if (this.isEOF() || !Le(this.char())) return this.error(z.INVALID_TAG, de(a, this.clonePosition()));
					var s = this.clonePosition();
					return n !== this.parseTagName() ? this.error(z.UNMATCHED_CLOSING_TAG, de(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
						val: {
							type: V.tag,
							value: n,
							children: i,
							location: de(r, this.clonePosition())
						},
						err: null
					} : this.error(z.INVALID_TAG, de(a, this.clonePosition())));
				}
				return this.error(z.UNCLOSED_TAG, de(r, this.clonePosition()));
			}
			return this.error(z.INVALID_TAG, de(r, this.clonePosition()));
		}, e.prototype.parseTagName = function() {
			var e = this.offset();
			for (this.bump(); !this.isEOF() && Re(this.char());) this.bump();
			return this.message.slice(e, this.offset());
		}, e.prototype.parseLiteral = function(e, t) {
			for (var r = this.clonePosition(), n = "";;) {
				var o = this.tryParseQuote(t);
				if (o) n += o;
				else {
					var i = this.tryParseUnquoted(e, t);
					if (i) n += i;
					else {
						var a = this.tryParseLeftAngleBracket();
						if (!a) break;
						n += a;
					}
				}
			}
			var s = de(r, this.clonePosition());
			return {
				val: {
					type: V.literal,
					value: n,
					location: s
				},
				err: null
			};
		}, e.prototype.tryParseLeftAngleBracket = function() {
			return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Le(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
			var e;
		}, e.prototype.tryParseQuote = function(e) {
			if (this.isEOF() || 39 !== this.char()) return null;
			switch (this.peek()) {
				case 39: return this.bump(), this.bump(), "'";
				case 123:
				case 60:
				case 62:
				case 125: break;
				case 35:
					if ("plural" === e || "selectordinal" === e) break;
					return null;
				default: return null;
			}
			this.bump();
			var t = [this.char()];
			for (this.bump(); !this.isEOF();) {
				var r = this.char();
				if (39 === r) {
					if (39 !== this.peek()) {
						this.bump();
						break;
					}
					t.push(39), this.bump();
				} else t.push(r);
				this.bump();
			}
			return Be.apply(void 0, t);
		}, e.prototype.tryParseUnquoted = function(e, t) {
			if (this.isEOF()) return null;
			var r = this.char();
			return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), Be(r));
		}, e.prototype.parseArgument = function(e, t) {
			var r = this.clonePosition();
			if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(z.EXPECT_ARGUMENT_CLOSING_BRACE, de(r, this.clonePosition()));
			if (125 === this.char()) return this.bump(), this.error(z.EMPTY_ARGUMENT, de(r, this.clonePosition()));
			var n = this.parseIdentifierIfPossible().value;
			if (!n) return this.error(z.MALFORMED_ARGUMENT, de(r, this.clonePosition()));
			if (this.bumpSpace(), this.isEOF()) return this.error(z.EXPECT_ARGUMENT_CLOSING_BRACE, de(r, this.clonePosition()));
			switch (this.char()) {
				case 125: return this.bump(), {
					val: {
						type: V.argument,
						value: n,
						location: de(r, this.clonePosition())
					},
					err: null
				};
				case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(z.EXPECT_ARGUMENT_CLOSING_BRACE, de(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
				default: return this.error(z.MALFORMED_ARGUMENT, de(r, this.clonePosition()));
			}
		}, e.prototype.parseIdentifierIfPossible = function() {
			var e = this.clonePosition(), t = this.offset(), r = xe(this.message, t), n = t + r.length;
			return this.bumpTo(n), {
				value: r,
				location: de(e, this.clonePosition())
			};
		}, e.prototype.parseArgumentOptions = function(e, t, r, n) {
			var o, i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, s = this.clonePosition();
			switch (a) {
				case "": return this.error(z.EXPECT_ARGUMENT_TYPE, de(i, s));
				case "number":
				case "date":
				case "time":
					this.bumpSpace();
					var c = null;
					if (this.bumpIf(",")) {
						this.bumpSpace();
						var l = this.clonePosition();
						if ((m = this.parseSimpleArgStyleIfPossible()).err) return m;
						if (0 === (d = He(m.val)).length) return this.error(z.EXPECT_ARGUMENT_STYLE, de(this.clonePosition(), this.clonePosition()));
						c = {
							style: d,
							styleLocation: de(l, this.clonePosition())
						};
					}
					if ((_ = this.tryParseArgumentClose(n)).err) return _;
					var h = de(n, this.clonePosition());
					if (c && Te(null == c ? void 0 : c.style, "::", 0)) {
						var f = Ce(c.style.slice(2));
						if ("number" === a) return (m = this.parseNumberSkeletonFromString(f, c.styleLocation)).err ? m : {
							val: {
								type: V.number,
								value: r,
								location: h,
								style: m.val
							},
							err: null
						};
						if (0 === f.length) return this.error(z.EXPECT_DATE_TIME_SKELETON, h);
						var p = f;
						this.locale && (p = function(e, t) {
							for (var r = "", n = 0; n < e.length; n++) {
								var o = e.charAt(n);
								if ("j" === o) {
									for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
									var a = 1 + (1 & i), s = i < 2 ? 1 : 3 + (i >> 1), c = he(t);
									for ("H" != c && "k" != c || (s = 0); s-- > 0;) r += "a";
									for (; a-- > 0;) r = c + r;
								} else r += "J" === o ? "H" : o;
							}
							return r;
						}(f, this.locale));
						var d = {
							type: K.dateTime,
							pattern: p,
							location: c.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? J(p) : {}
						};
						return {
							val: {
								type: "date" === a ? V.date : V.time,
								value: r,
								location: h,
								style: d
							},
							err: null
						};
					}
					return {
						val: {
							type: "number" === a ? V.number : "date" === a ? V.date : V.time,
							value: r,
							location: h,
							style: null !== (o = null == c ? void 0 : c.style) && void 0 !== o ? o : null
						},
						err: null
					};
				case "plural":
				case "selectordinal":
				case "select":
					var v = this.clonePosition();
					if (this.bumpSpace(), !this.bumpIf(",")) return this.error(z.EXPECT_SELECT_ARGUMENT_OPTIONS, de(v, u({}, v)));
					this.bumpSpace();
					var y = this.parseIdentifierIfPossible(), g = 0;
					if ("select" !== a && "offset" === y.value) {
						if (!this.bumpIf(":")) return this.error(z.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, de(this.clonePosition(), this.clonePosition()));
						var m;
						if (this.bumpSpace(), (m = this.tryParseDecimalInteger(z.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, z.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return m;
						this.bumpSpace(), y = this.parseIdentifierIfPossible(), g = m.val;
					}
					var _, b = this.tryParsePluralOrSelectOptions(e, a, t, y);
					if (b.err) return b;
					if ((_ = this.tryParseArgumentClose(n)).err) return _;
					var E = de(n, this.clonePosition());
					return "select" === a ? {
						val: {
							type: V.select,
							value: r,
							options: Se(b.val),
							location: E
						},
						err: null
					} : {
						val: {
							type: V.plural,
							value: r,
							options: Se(b.val),
							offset: g,
							pluralType: "plural" === a ? "cardinal" : "ordinal",
							location: E
						},
						err: null
					};
				default: return this.error(z.INVALID_ARGUMENT_TYPE, de(i, s));
			}
		}, e.prototype.tryParseArgumentClose = function(e) {
			return this.isEOF() || 125 !== this.char() ? this.error(z.EXPECT_ARGUMENT_CLOSING_BRACE, de(e, this.clonePosition())) : (this.bump(), {
				val: !0,
				err: null
			});
		}, e.prototype.parseSimpleArgStyleIfPossible = function() {
			for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
				case 39:
					this.bump();
					var r = this.clonePosition();
					if (!this.bumpUntil("'")) return this.error(z.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, de(r, this.clonePosition()));
					this.bump();
					break;
				case 123:
					e += 1, this.bump();
					break;
				case 125:
					if (!(e > 0)) return {
						val: this.message.slice(t.offset, this.offset()),
						err: null
					};
					e -= 1;
					break;
				default: this.bump();
			}
			return {
				val: this.message.slice(t.offset, this.offset()),
				err: null
			};
		}, e.prototype.parseNumberSkeletonFromString = function(e, t) {
			var r = [];
			try {
				r = function(e) {
					if (0 === e.length) throw new Error("Number skeleton cannot be empty");
					for (var t = e.split(Z).filter(function(e) {
						return e.length > 0;
					}), r = [], n = 0, o = t; n < o.length; n++) {
						var i = o[n].split("/");
						if (0 === i.length) throw new Error("Invalid number skeleton");
						for (var a = i[0], s = i.slice(1), c = 0, l = s; c < l.length; c++) if (0 === l[c].length) throw new Error("Invalid number skeleton");
						r.push({
							stem: a,
							options: s
						});
					}
					return r;
				}(e);
			} catch (e) {
				return this.error(z.INVALID_NUMBER_SKELETON, t);
			}
			return {
				val: {
					type: K.number,
					tokens: r,
					location: t,
					parsedOptions: this.shouldParseSkeletons ? ce(r) : {}
				},
				err: null
			};
		}, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
			for (var o, i = !1, a = [], s = /* @__PURE__ */ new Set(), c = n.value, l = n.location;;) {
				if (0 === c.length) {
					var u = this.clonePosition();
					if ("select" === t || !this.bumpIf("=")) break;
					var h = this.tryParseDecimalInteger(z.EXPECT_PLURAL_ARGUMENT_SELECTOR, z.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (h.err) return h;
					l = de(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
				}
				if (s.has(c)) return this.error("select" === t ? z.DUPLICATE_SELECT_ARGUMENT_SELECTOR : z.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
				"other" === c && (i = !0), this.bumpSpace();
				var f = this.clonePosition();
				if (!this.bumpIf("{")) return this.error("select" === t ? z.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : z.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, de(this.clonePosition(), this.clonePosition()));
				var p = this.parseMessage(e + 1, t, r);
				if (p.err) return p;
				var d = this.tryParseArgumentClose(f);
				if (d.err) return d;
				a.push([c, {
					value: p.val,
					location: de(f, this.clonePosition())
				}]), s.add(c), this.bumpSpace(), c = (o = this.parseIdentifierIfPossible()).value, l = o.location;
			}
			return 0 === a.length ? this.error("select" === t ? z.EXPECT_SELECT_ARGUMENT_SELECTOR : z.EXPECT_PLURAL_ARGUMENT_SELECTOR, de(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(z.MISSING_OTHER_CLAUSE, de(this.clonePosition(), this.clonePosition())) : {
				val: a,
				err: null
			};
		}, e.prototype.tryParseDecimalInteger = function(e, t) {
			var r = 1, n = this.clonePosition();
			this.bumpIf("+") || this.bumpIf("-") && (r = -1);
			for (var o = !1, i = 0; !this.isEOF();) {
				var a = this.char();
				if (!(a >= 48 && a <= 57)) break;
				o = !0, i = 10 * i + (a - 48), this.bump();
			}
			var s = de(n, this.clonePosition());
			return o ? Ee(i *= r) ? {
				val: i,
				err: null
			} : this.error(t, s) : this.error(e, s);
		}, e.prototype.offset = function() {
			return this.position.offset;
		}, e.prototype.isEOF = function() {
			return this.offset() === this.message.length;
		}, e.prototype.clonePosition = function() {
			return {
				offset: this.position.offset,
				line: this.position.line,
				column: this.position.column
			};
		}, e.prototype.char = function() {
			var e = this.position.offset;
			if (e >= this.message.length) throw Error("out of bound");
			var t = Ae(this.message, e);
			if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
			return t;
		}, e.prototype.error = function(e, t) {
			return {
				val: null,
				err: {
					kind: e,
					message: this.message,
					location: t
				}
			};
		}, e.prototype.bump = function() {
			if (!this.isEOF()) {
				var e = this.char();
				10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
			}
		}, e.prototype.bumpIf = function(e) {
			if (Te(this.message, e, this.offset())) {
				for (var t = 0; t < e.length; t++) this.bump();
				return !0;
			}
			return !1;
		}, e.prototype.bumpUntil = function(e) {
			var t = this.offset(), r = this.message.indexOf(e, t);
			return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
		}, e.prototype.bumpTo = function(e) {
			if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
			for (e = Math.min(e, this.message.length);;) {
				var t = this.offset();
				if (t === e) break;
				if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
				if (this.bump(), this.isEOF()) break;
			}
		}, e.prototype.bumpSpace = function() {
			for (; !this.isEOF() && Ie(this.char());) this.bump();
		}, e.prototype.peek = function() {
			if (this.isEOF()) return null;
			var e = this.char(), t = this.offset(), r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
			return null != r ? r : null;
		}, e;
	}();
	function Le(e) {
		return e >= 97 && e <= 122 || e >= 65 && e <= 90;
	}
	function Re(e) {
		return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
	}
	function Ie(e) {
		return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e;
	}
	function Me(e) {
		return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094;
	}
	function Ne(e) {
		e.forEach(function(e) {
			if (delete e.location, function(e) {
				return e.type === V.select;
			}(e) || function(e) {
				return e.type === V.plural;
			}(e)) for (var t in e.options) delete e.options[t].location, Ne(e.options[t].value);
			else (function(e) {
				return e.type === V.number;
			})(e) && function(e) {
				return !(!e || "object" != typeof e || e.type !== K.number);
			}(e.style) ? delete e.style.location : !function(e) {
				return e.type === V.date;
			}(e) && !function(e) {
				return e.type === V.time;
			}(e) || !function(e) {
				return !(!e || "object" != typeof e || e.type !== K.dateTime);
			}(e.style) ? function(e) {
				return e.type === V.tag;
			}(e) && Ne(e.children) : delete e.style.location;
		});
	}
	var je = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
	function De(e) {
		return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
	}
	function $e(e) {
		if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
		var t = e.default;
		if ("function" == typeof t) {
			var r = function e() {
				var r = !1;
				try {
					r = this instanceof e;
				} catch {}
				return r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
			};
			r.prototype = t.prototype;
		} else r = {};
		return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
			var n = Object.getOwnPropertyDescriptor(e, t);
			Object.defineProperty(r, t, n.get ? n : {
				enumerable: !0,
				get: function() {
					return e[t];
				}
			});
		}), r;
	}
	var Fe, Ue = {};
	function Ge() {
		if (Fe) return Ue;
		var e, t;
		return Fe = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.SKELETON_TYPE = Ue.TYPE = void 0, Ue.isLiteralElement = function(t) {
			return t.type === e.literal;
		}, Ue.isArgumentElement = function(t) {
			return t.type === e.argument;
		}, Ue.isNumberElement = function(t) {
			return t.type === e.number;
		}, Ue.isDateElement = function(t) {
			return t.type === e.date;
		}, Ue.isTimeElement = function(t) {
			return t.type === e.time;
		}, Ue.isSelectElement = function(t) {
			return t.type === e.select;
		}, Ue.isPluralElement = function(t) {
			return t.type === e.plural;
		}, Ue.isPoundElement = function(t) {
			return t.type === e.pound;
		}, Ue.isTagElement = function(t) {
			return t.type === e.tag;
		}, Ue.isNumberSkeleton = function(e) {
			return !(!e || "object" != typeof e || e.type !== t.number);
		}, Ue.isDateTimeSkeleton = function(e) {
			return !(!e || "object" != typeof e || e.type !== t.dateTime);
		}, Ue.createLiteralElement = function(t) {
			return {
				type: e.literal,
				value: t
			};
		}, Ue.createNumberElement = function(t, r) {
			return {
				type: e.number,
				value: t,
				style: r
			};
		}, function(e) {
			e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
		}(e || (Ue.TYPE = e = {})), function(e) {
			e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
		}(t || (Ue.SKELETON_TYPE = t = {})), Ue;
	}
	var ze, Ve = Ge(), Ke = {}, We = $e(X);
	var Xe, qe, Ye = function() {
		if (ze) return Ke;
		ze = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.printAST = r, Ke.doPrintAST = n, Ke.printDateTimeSkeleton = a;
		var e = We, t = Ge();
		function r(e) {
			return n(e, !1);
		}
		function n(s, c) {
			return s.map(function(l, u) {
				return (0, t.isLiteralElement)(l) ? function(e, t, r, n) {
					var a = e.value;
					r || "'" !== a[0] || (a = "''".concat(a.slice(1)));
					n || "'" !== a[a.length - 1] || (a = "".concat(a.slice(0, a.length - 1), "''"));
					return a = o(a), t ? a.replace("#", "'#'") : a;
				}(l, c, 0 === u, u === s.length - 1) : (0, t.isArgumentElement)(l) ? function(e) {
					var t = e.value;
					return "{".concat(t, "}");
				}(l) : (0, t.isDateElement)(l) || (0, t.isTimeElement)(l) || (0, t.isNumberElement)(l) ? function(e) {
					return "{".concat(e.value, ", ").concat(t.TYPE[e.type]).concat(e.style ? ", ".concat((r = e.style, "string" == typeof r ? o(r) : r.type === t.SKELETON_TYPE.dateTime ? "::".concat(a(r)) : "::".concat(r.tokens.map(i).join(" ")))) : "", "}");
					var r;
				}(l) : (0, t.isPluralElement)(l) ? function(t) {
					var r = "cardinal" === t.pluralType ? "plural" : "selectordinal", o = [
						t.value,
						r,
						e.__spreadArray([t.offset ? "offset:".concat(t.offset) : ""], Object.keys(t.options).map(function(e) {
							return "".concat(e, "{").concat(n(t.options[e].value, !0), "}");
						}), !0).filter(Boolean).join(" ")
					].join(",");
					return "{".concat(o, "}");
				}(l) : (0, t.isSelectElement)(l) ? function(e) {
					var t = [
						e.value,
						"select",
						Object.keys(e.options).map(function(t) {
							return "".concat(t, "{").concat(n(e.options[t].value, !1), "}");
						}).join(" ")
					].join(",");
					return "{".concat(t, "}");
				}(l) : (0, t.isPoundElement)(l) ? "#" : (0, t.isTagElement)(l) ? function(e) {
					return "<".concat(e.value, ">").concat(r(e.children), "</").concat(e.value, ">");
				}(l) : void 0;
			}).join("");
		}
		function o(e) {
			return e.replace(/([{}](?:[\s\S]*[{}])?)/, "'$1'");
		}
		function i(e) {
			var t = e.stem, r = e.options;
			return 0 === r.length ? t : "".concat(t).concat(r.map(function(e) {
				return "/".concat(e);
			}).join(""));
		}
		function a(e) {
			return e.pattern;
		}
		return Ke;
	}();
	var Ze = De((qe || (qe = 1, Xe = function(e, t) {
		t || (t = {}), "function" == typeof t && (t = { cmp: t });
		var r = "boolean" == typeof t.cycles && t.cycles, n = t.cmp && function(e) {
			return function(t) {
				return function(r, n) {
					return e({
						key: r,
						value: t[r]
					}, {
						key: n,
						value: t[n]
					});
				};
			};
		}(t.cmp), o = [];
		return function e(t) {
			if (t && t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON()), void 0 !== t) {
				if ("number" == typeof t) return isFinite(t) ? "" + t : "null";
				if ("object" != typeof t) return JSON.stringify(t);
				var i, a;
				if (Array.isArray(t)) {
					for (a = "[", i = 0; i < t.length; i++) i && (a += ","), a += e(t[i]) || "null";
					return a + "]";
				}
				if (null === t) return "null";
				if (-1 !== o.indexOf(t)) {
					if (r) return JSON.stringify("__cycle__");
					throw new TypeError("Converting circular structure to JSON");
				}
				var s = o.push(t) - 1, c = Object.keys(t).sort(n && n(t));
				for (a = "", i = 0; i < c.length; i++) {
					var l = c[i], u = e(t[l]);
					u && (a && (a += ","), a += JSON.stringify(l) + ":" + u);
				}
				return o.splice(s, 1), "{" + a + "}";
			}
		}(e);
	}), Xe)), Qe = { exports: {} };
	var et, tt = { exports: {} }, rt = $e(Object.freeze({
		__proto__: null,
		default: {}
	}));
	function nt() {
		return et || (et = 1, tt.exports = (e = e || function(e, t) {
			var r;
			if ("undefined" != typeof window && window.crypto && (r = window.crypto), "undefined" != typeof self && self.crypto && (r = self.crypto), "undefined" != typeof globalThis && globalThis.crypto && (r = globalThis.crypto), !r && "undefined" != typeof window && window.msCrypto && (r = window.msCrypto), !r && void 0 !== je && je.crypto && (r = je.crypto), !r) try {
				r = rt;
			} catch (e) {}
			var n = function() {
				if (r) {
					if ("function" == typeof r.getRandomValues) try {
						return r.getRandomValues(new Uint32Array(1))[0];
					} catch (e) {}
					if ("function" == typeof r.randomBytes) try {
						return r.randomBytes(4).readInt32LE();
					} catch (e) {}
				}
				throw new Error("Native crypto module could not be used to get secure random number.");
			}, o = Object.create || function() {
				function e() {}
				return function(t) {
					var r;
					return e.prototype = t, r = new e(), e.prototype = null, r;
				};
			}(), i = {}, a = i.lib = {}, s = a.Base = {
				extend: function(e) {
					var t = o(this);
					return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
						t.$super.init.apply(this, arguments);
					}), t.init.prototype = t, t.$super = this, t;
				},
				create: function() {
					var e = this.extend();
					return e.init.apply(e, arguments), e;
				},
				init: function() {},
				mixIn: function(e) {
					for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
					e.hasOwnProperty("toString") && (this.toString = e.toString);
				},
				clone: function() {
					return this.init.prototype.extend(this);
				}
			}, c = a.WordArray = s.extend({
				init: function(e, r) {
					e = this.words = e || [], this.sigBytes = r != t ? r : 4 * e.length;
				},
				toString: function(e) {
					return (e || u).stringify(this);
				},
				concat: function(e) {
					var t = this.words, r = e.words, n = this.sigBytes, o = e.sigBytes;
					if (this.clamp(), n % 4) for (var i = 0; i < o; i++) {
						var a = r[i >>> 2] >>> 24 - i % 4 * 8 & 255;
						t[n + i >>> 2] |= a << 24 - (n + i) % 4 * 8;
					}
					else for (var s = 0; s < o; s += 4) t[n + s >>> 2] = r[s >>> 2];
					return this.sigBytes += o, this;
				},
				clamp: function() {
					var t = this.words, r = this.sigBytes;
					t[r >>> 2] &= 4294967295 << 32 - r % 4 * 8, t.length = e.ceil(r / 4);
				},
				clone: function() {
					var e = s.clone.call(this);
					return e.words = this.words.slice(0), e;
				},
				random: function(e) {
					for (var t = [], r = 0; r < e; r += 4) t.push(n());
					return new c.init(t, e);
				}
			}), l = i.enc = {}, u = l.Hex = {
				stringify: function(e) {
					for (var t = e.words, r = e.sigBytes, n = [], o = 0; o < r; o++) {
						var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
						n.push((i >>> 4).toString(16)), n.push((15 & i).toString(16));
					}
					return n.join("");
				},
				parse: function(e) {
					for (var t = e.length, r = [], n = 0; n < t; n += 2) r[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
					return new c.init(r, t / 2);
				}
			}, h = l.Latin1 = {
				stringify: function(e) {
					for (var t = e.words, r = e.sigBytes, n = [], o = 0; o < r; o++) {
						var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
						n.push(String.fromCharCode(i));
					}
					return n.join("");
				},
				parse: function(e) {
					for (var t = e.length, r = [], n = 0; n < t; n++) r[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
					return new c.init(r, t);
				}
			}, f = l.Utf8 = {
				stringify: function(e) {
					try {
						return decodeURIComponent(escape(h.stringify(e)));
					} catch (e) {
						throw new Error("Malformed UTF-8 data");
					}
				},
				parse: function(e) {
					return h.parse(unescape(encodeURIComponent(e)));
				}
			}, p = a.BufferedBlockAlgorithm = s.extend({
				reset: function() {
					this._data = new c.init(), this._nDataBytes = 0;
				},
				_append: function(e) {
					"string" == typeof e && (e = f.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
				},
				_process: function(t) {
					var r, n = this._data, o = n.words, i = n.sigBytes, a = this.blockSize, s = i / (4 * a), l = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * a, u = e.min(4 * l, i);
					if (l) {
						for (var h = 0; h < l; h += a) this._doProcessBlock(o, h);
						r = o.splice(0, l), n.sigBytes -= u;
					}
					return new c.init(r, u);
				},
				clone: function() {
					var e = s.clone.call(this);
					return e._data = this._data.clone(), e;
				},
				_minBufferSize: 0
			});
			a.Hasher = p.extend({
				cfg: s.extend(),
				init: function(e) {
					this.cfg = this.cfg.extend(e), this.reset();
				},
				reset: function() {
					p.reset.call(this), this._doReset();
				},
				update: function(e) {
					return this._append(e), this._process(), this;
				},
				finalize: function(e) {
					return e && this._append(e), this._doFinalize();
				},
				blockSize: 16,
				_createHelper: function(e) {
					return function(t, r) {
						return new e.init(r).finalize(t);
					};
				},
				_createHmacHelper: function(e) {
					return function(t, r) {
						return new d.HMAC.init(e, r).finalize(t);
					};
				}
			});
			var d = i.algo = {};
			return i;
		}(Math), e)), tt.exports;
		var e;
	}
	var ot, it = { exports: {} };
	function at() {
		return ot || (ot = 1, it.exports = (e = nt(), function(t) {
			var r = e, n = r.lib, o = n.Base, i = n.WordArray, a = r.x64 = {};
			a.Word = o.extend({ init: function(e, t) {
				this.high = e, this.low = t;
			} }), a.WordArray = o.extend({
				init: function(e, r) {
					e = this.words = e || [], this.sigBytes = r != t ? r : 8 * e.length;
				},
				toX32: function() {
					for (var e = this.words, t = e.length, r = [], n = 0; n < t; n++) {
						var o = e[n];
						r.push(o.high), r.push(o.low);
					}
					return i.create(r, this.sigBytes);
				},
				clone: function() {
					for (var e = o.clone.call(this), t = e.words = this.words.slice(0), r = t.length, n = 0; n < r; n++) t[n] = t[n].clone();
					return e;
				}
			});
		}(), e)), it.exports;
		var e;
	}
	var st, ct = { exports: {} };
	function lt() {
		return st || (st = 1, ct.exports = (e = nt(), function() {
			if ("function" == typeof ArrayBuffer) {
				var t = e.lib.WordArray, r = t.init, n = t.init = function(e) {
					if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), (e instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), e instanceof Uint8Array) {
						for (var t = e.byteLength, n = [], o = 0; o < t; o++) n[o >>> 2] |= e[o] << 24 - o % 4 * 8;
						r.call(this, n, t);
					} else r.apply(this, arguments);
				};
				n.prototype = t;
			}
		}(), e.lib.WordArray)), ct.exports;
		var e;
	}
	var ut, ht = { exports: {} };
	function ft() {
		return ut || (ut = 1, ht.exports = (e = nt(), function() {
			var t = e, r = t.lib.WordArray, n = t.enc;
			function o(e) {
				return e << 8 & 4278255360 | e >>> 8 & 16711935;
			}
			n.Utf16 = n.Utf16BE = {
				stringify: function(e) {
					for (var t = e.words, r = e.sigBytes, n = [], o = 0; o < r; o += 2) {
						var i = t[o >>> 2] >>> 16 - o % 4 * 8 & 65535;
						n.push(String.fromCharCode(i));
					}
					return n.join("");
				},
				parse: function(e) {
					for (var t = e.length, n = [], o = 0; o < t; o++) n[o >>> 1] |= e.charCodeAt(o) << 16 - o % 2 * 16;
					return r.create(n, 2 * t);
				}
			}, n.Utf16LE = {
				stringify: function(e) {
					for (var t = e.words, r = e.sigBytes, n = [], i = 0; i < r; i += 2) {
						var a = o(t[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
						n.push(String.fromCharCode(a));
					}
					return n.join("");
				},
				parse: function(e) {
					for (var t = e.length, n = [], i = 0; i < t; i++) n[i >>> 1] |= o(e.charCodeAt(i) << 16 - i % 2 * 16);
					return r.create(n, 2 * t);
				}
			};
		}(), e.enc.Utf16)), ht.exports;
		var e;
	}
	var pt, dt = { exports: {} };
	function vt() {
		return pt || (pt = 1, dt.exports = (e = nt(), function() {
			var t = e, r = t.lib.WordArray;
			function n(e, t, n) {
				for (var o = [], i = 0, a = 0; a < t; a++) if (a % 4) {
					var s = n[e.charCodeAt(a - 1)] << a % 4 * 2 | n[e.charCodeAt(a)] >>> 6 - a % 4 * 2;
					o[i >>> 2] |= s << 24 - i % 4 * 8, i++;
				}
				return r.create(o, i);
			}
			t.enc.Base64 = {
				stringify: function(e) {
					var t = e.words, r = e.sigBytes, n = this._map;
					e.clamp();
					for (var o = [], i = 0; i < r; i += 3) for (var a = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, s = 0; s < 4 && i + .75 * s < r; s++) o.push(n.charAt(a >>> 6 * (3 - s) & 63));
					var c = n.charAt(64);
					if (c) for (; o.length % 4;) o.push(c);
					return o.join("");
				},
				parse: function(e) {
					var t = e.length, r = this._map, o = this._reverseMap;
					if (!o) {
						o = this._reverseMap = [];
						for (var i = 0; i < r.length; i++) o[r.charCodeAt(i)] = i;
					}
					var a = r.charAt(64);
					if (a) {
						var s = e.indexOf(a);
						-1 !== s && (t = s);
					}
					return n(e, t, o);
				},
				_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
			};
		}(), e.enc.Base64)), dt.exports;
		var e;
	}
	var yt, gt = { exports: {} };
	function mt() {
		return yt || (yt = 1, gt.exports = (e = nt(), function() {
			var t = e, r = t.lib.WordArray;
			function n(e, t, n) {
				for (var o = [], i = 0, a = 0; a < t; a++) if (a % 4) {
					var s = n[e.charCodeAt(a - 1)] << a % 4 * 2 | n[e.charCodeAt(a)] >>> 6 - a % 4 * 2;
					o[i >>> 2] |= s << 24 - i % 4 * 8, i++;
				}
				return r.create(o, i);
			}
			t.enc.Base64url = {
				stringify: function(e, t) {
					void 0 === t && (t = !0);
					var r = e.words, n = e.sigBytes, o = t ? this._safe_map : this._map;
					e.clamp();
					for (var i = [], a = 0; a < n; a += 3) for (var s = (r[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (r[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | r[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, c = 0; c < 4 && a + .75 * c < n; c++) i.push(o.charAt(s >>> 6 * (3 - c) & 63));
					var l = o.charAt(64);
					if (l) for (; i.length % 4;) i.push(l);
					return i.join("");
				},
				parse: function(e, t) {
					void 0 === t && (t = !0);
					var r = e.length, o = t ? this._safe_map : this._map, i = this._reverseMap;
					if (!i) {
						i = this._reverseMap = [];
						for (var a = 0; a < o.length; a++) i[o.charCodeAt(a)] = a;
					}
					var s = o.charAt(64);
					if (s) {
						var c = e.indexOf(s);
						-1 !== c && (r = c);
					}
					return n(e, r, i);
				},
				_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
				_safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
			};
		}(), e.enc.Base64url)), gt.exports;
		var e;
	}
	var _t, bt = { exports: {} };
	function Et() {
		return _t || (_t = 1, bt.exports = (e = nt(), function(t) {
			var r = e, n = r.lib, o = n.WordArray, i = n.Hasher, a = r.algo, s = [];
			(function() {
				for (var e = 0; e < 64; e++) s[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0;
			})();
			var c = a.MD5 = i.extend({
				_doReset: function() {
					this._hash = new o.init([
						1732584193,
						4023233417,
						2562383102,
						271733878
					]);
				},
				_doProcessBlock: function(e, t) {
					for (var r = 0; r < 16; r++) {
						var n = t + r, o = e[n];
						e[n] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
					}
					var i = this._hash.words, a = e[t + 0], c = e[t + 1], p = e[t + 2], d = e[t + 3], v = e[t + 4], y = e[t + 5], g = e[t + 6], m = e[t + 7], _ = e[t + 8], b = e[t + 9], E = e[t + 10], w = e[t + 11], x = e[t + 12], T = e[t + 13], B = e[t + 14], S = e[t + 15], A = i[0], C = i[1], H = i[2], P = i[3];
					A = l(A, C, H, P, a, 7, s[0]), P = l(P, A, C, H, c, 12, s[1]), H = l(H, P, A, C, p, 17, s[2]), C = l(C, H, P, A, d, 22, s[3]), A = l(A, C, H, P, v, 7, s[4]), P = l(P, A, C, H, y, 12, s[5]), H = l(H, P, A, C, g, 17, s[6]), C = l(C, H, P, A, m, 22, s[7]), A = l(A, C, H, P, _, 7, s[8]), P = l(P, A, C, H, b, 12, s[9]), H = l(H, P, A, C, E, 17, s[10]), C = l(C, H, P, A, w, 22, s[11]), A = l(A, C, H, P, x, 7, s[12]), P = l(P, A, C, H, T, 12, s[13]), H = l(H, P, A, C, B, 17, s[14]), A = u(A, C = l(C, H, P, A, S, 22, s[15]), H, P, c, 5, s[16]), P = u(P, A, C, H, g, 9, s[17]), H = u(H, P, A, C, w, 14, s[18]), C = u(C, H, P, A, a, 20, s[19]), A = u(A, C, H, P, y, 5, s[20]), P = u(P, A, C, H, E, 9, s[21]), H = u(H, P, A, C, S, 14, s[22]), C = u(C, H, P, A, v, 20, s[23]), A = u(A, C, H, P, b, 5, s[24]), P = u(P, A, C, H, B, 9, s[25]), H = u(H, P, A, C, d, 14, s[26]), C = u(C, H, P, A, _, 20, s[27]), A = u(A, C, H, P, T, 5, s[28]), P = u(P, A, C, H, p, 9, s[29]), H = u(H, P, A, C, m, 14, s[30]), A = h(A, C = u(C, H, P, A, x, 20, s[31]), H, P, y, 4, s[32]), P = h(P, A, C, H, _, 11, s[33]), H = h(H, P, A, C, w, 16, s[34]), C = h(C, H, P, A, B, 23, s[35]), A = h(A, C, H, P, c, 4, s[36]), P = h(P, A, C, H, v, 11, s[37]), H = h(H, P, A, C, m, 16, s[38]), C = h(C, H, P, A, E, 23, s[39]), A = h(A, C, H, P, T, 4, s[40]), P = h(P, A, C, H, a, 11, s[41]), H = h(H, P, A, C, d, 16, s[42]), C = h(C, H, P, A, g, 23, s[43]), A = h(A, C, H, P, b, 4, s[44]), P = h(P, A, C, H, x, 11, s[45]), H = h(H, P, A, C, S, 16, s[46]), A = f(A, C = h(C, H, P, A, p, 23, s[47]), H, P, a, 6, s[48]), P = f(P, A, C, H, m, 10, s[49]), H = f(H, P, A, C, B, 15, s[50]), C = f(C, H, P, A, y, 21, s[51]), A = f(A, C, H, P, x, 6, s[52]), P = f(P, A, C, H, d, 10, s[53]), H = f(H, P, A, C, E, 15, s[54]), C = f(C, H, P, A, c, 21, s[55]), A = f(A, C, H, P, _, 6, s[56]), P = f(P, A, C, H, S, 10, s[57]), H = f(H, P, A, C, g, 15, s[58]), C = f(C, H, P, A, T, 21, s[59]), A = f(A, C, H, P, v, 6, s[60]), P = f(P, A, C, H, w, 10, s[61]), H = f(H, P, A, C, p, 15, s[62]), C = f(C, H, P, A, b, 21, s[63]), i[0] = i[0] + A | 0, i[1] = i[1] + C | 0, i[2] = i[2] + H | 0, i[3] = i[3] + P | 0;
				},
				_doFinalize: function() {
					var e = this._data, r = e.words, n = 8 * this._nDataBytes, o = 8 * e.sigBytes;
					r[o >>> 5] |= 128 << 24 - o % 32;
					var i = t.floor(n / 4294967296), a = n;
					r[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), r[14 + (o + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), e.sigBytes = 4 * (r.length + 1), this._process();
					for (var s = this._hash, c = s.words, l = 0; l < 4; l++) {
						var u = c[l];
						c[l] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
					}
					return s;
				},
				clone: function() {
					var e = i.clone.call(this);
					return e._hash = this._hash.clone(), e;
				}
			});
			function l(e, t, r, n, o, i, a) {
				var s = e + (t & r | ~t & n) + o + a;
				return (s << i | s >>> 32 - i) + t;
			}
			function u(e, t, r, n, o, i, a) {
				var s = e + (t & n | r & ~n) + o + a;
				return (s << i | s >>> 32 - i) + t;
			}
			function h(e, t, r, n, o, i, a) {
				var s = e + (t ^ r ^ n) + o + a;
				return (s << i | s >>> 32 - i) + t;
			}
			function f(e, t, r, n, o, i, a) {
				var s = e + (r ^ (t | ~n)) + o + a;
				return (s << i | s >>> 32 - i) + t;
			}
			r.MD5 = i._createHelper(c), r.HmacMD5 = i._createHmacHelper(c);
		}(Math), e.MD5)), bt.exports;
		var e;
	}
	var wt, xt = { exports: {} };
	function Tt() {
		return wt || (wt = 1, xt.exports = (e = nt(), function() {
			var t = e, r = t.lib, n = r.WordArray, o = r.Hasher, i = t.algo, a = [], s = i.SHA1 = o.extend({
				_doReset: function() {
					this._hash = new n.init([
						1732584193,
						4023233417,
						2562383102,
						271733878,
						3285377520
					]);
				},
				_doProcessBlock: function(e, t) {
					for (var r = this._hash.words, n = r[0], o = r[1], i = r[2], s = r[3], c = r[4], l = 0; l < 80; l++) {
						if (l < 16) a[l] = 0 | e[t + l];
						else {
							var u = a[l - 3] ^ a[l - 8] ^ a[l - 14] ^ a[l - 16];
							a[l] = u << 1 | u >>> 31;
						}
						var h = (n << 5 | n >>> 27) + c + a[l];
						h += l < 20 ? 1518500249 + (o & i | ~o & s) : l < 40 ? 1859775393 + (o ^ i ^ s) : l < 60 ? (o & i | o & s | i & s) - 1894007588 : (o ^ i ^ s) - 899497514, c = s, s = i, i = o << 30 | o >>> 2, o = n, n = h;
					}
					r[0] = r[0] + n | 0, r[1] = r[1] + o | 0, r[2] = r[2] + i | 0, r[3] = r[3] + s | 0, r[4] = r[4] + c | 0;
				},
				_doFinalize: function() {
					var e = this._data, t = e.words, r = 8 * this._nDataBytes, n = 8 * e.sigBytes;
					return t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = Math.floor(r / 4294967296), t[15 + (n + 64 >>> 9 << 4)] = r, e.sigBytes = 4 * t.length, this._process(), this._hash;
				},
				clone: function() {
					var e = o.clone.call(this);
					return e._hash = this._hash.clone(), e;
				}
			});
			t.SHA1 = o._createHelper(s), t.HmacSHA1 = o._createHmacHelper(s);
		}(), e.SHA1)), xt.exports;
		var e;
	}
	var Bt, St = { exports: {} };
	function At() {
		return Bt || (Bt = 1, St.exports = (e = nt(), function(t) {
			var r = e, n = r.lib, o = n.WordArray, i = n.Hasher, a = r.algo, s = [], c = [];
			(function() {
				function e(e) {
					for (var r = t.sqrt(e), n = 2; n <= r; n++) if (!(e % n)) return !1;
					return !0;
				}
				function r(e) {
					return 4294967296 * (e - (0 | e)) | 0;
				}
				for (var n = 2, o = 0; o < 64;) e(n) && (o < 8 && (s[o] = r(t.pow(n, .5))), c[o] = r(t.pow(n, 1 / 3)), o++), n++;
			})();
			var l = [], u = a.SHA256 = i.extend({
				_doReset: function() {
					this._hash = new o.init(s.slice(0));
				},
				_doProcessBlock: function(e, t) {
					for (var r = this._hash.words, n = r[0], o = r[1], i = r[2], a = r[3], s = r[4], u = r[5], h = r[6], f = r[7], p = 0; p < 64; p++) {
						if (p < 16) l[p] = 0 | e[t + p];
						else {
							var d = l[p - 15], v = (d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3, y = l[p - 2], g = (y << 15 | y >>> 17) ^ (y << 13 | y >>> 19) ^ y >>> 10;
							l[p] = v + l[p - 7] + g + l[p - 16];
						}
						var m = n & o ^ n & i ^ o & i, _ = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22), b = f + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & u ^ ~s & h) + c[p] + l[p];
						f = h, h = u, u = s, s = a + b | 0, a = i, i = o, o = n, n = b + (_ + m) | 0;
					}
					r[0] = r[0] + n | 0, r[1] = r[1] + o | 0, r[2] = r[2] + i | 0, r[3] = r[3] + a | 0, r[4] = r[4] + s | 0, r[5] = r[5] + u | 0, r[6] = r[6] + h | 0, r[7] = r[7] + f | 0;
				},
				_doFinalize: function() {
					var e = this._data, r = e.words, n = 8 * this._nDataBytes, o = 8 * e.sigBytes;
					return r[o >>> 5] |= 128 << 24 - o % 32, r[14 + (o + 64 >>> 9 << 4)] = t.floor(n / 4294967296), r[15 + (o + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * r.length, this._process(), this._hash;
				},
				clone: function() {
					var e = i.clone.call(this);
					return e._hash = this._hash.clone(), e;
				}
			});
			r.SHA256 = i._createHelper(u), r.HmacSHA256 = i._createHmacHelper(u);
		}(Math), e.SHA256)), St.exports;
		var e;
	}
	var Ct, Ht = { exports: {} };
	var Pt, Ot = { exports: {} };
	function kt() {
		return Pt || (Pt = 1, Ot.exports = (e = nt(), at(), function() {
			var t = e, r = t.lib.Hasher, n = t.x64, o = n.Word, i = n.WordArray, a = t.algo;
			function s() {
				return o.create.apply(o, arguments);
			}
			var c = [
				s(1116352408, 3609767458),
				s(1899447441, 602891725),
				s(3049323471, 3964484399),
				s(3921009573, 2173295548),
				s(961987163, 4081628472),
				s(1508970993, 3053834265),
				s(2453635748, 2937671579),
				s(2870763221, 3664609560),
				s(3624381080, 2734883394),
				s(310598401, 1164996542),
				s(607225278, 1323610764),
				s(1426881987, 3590304994),
				s(1925078388, 4068182383),
				s(2162078206, 991336113),
				s(2614888103, 633803317),
				s(3248222580, 3479774868),
				s(3835390401, 2666613458),
				s(4022224774, 944711139),
				s(264347078, 2341262773),
				s(604807628, 2007800933),
				s(770255983, 1495990901),
				s(1249150122, 1856431235),
				s(1555081692, 3175218132),
				s(1996064986, 2198950837),
				s(2554220882, 3999719339),
				s(2821834349, 766784016),
				s(2952996808, 2566594879),
				s(3210313671, 3203337956),
				s(3336571891, 1034457026),
				s(3584528711, 2466948901),
				s(113926993, 3758326383),
				s(338241895, 168717936),
				s(666307205, 1188179964),
				s(773529912, 1546045734),
				s(1294757372, 1522805485),
				s(1396182291, 2643833823),
				s(1695183700, 2343527390),
				s(1986661051, 1014477480),
				s(2177026350, 1206759142),
				s(2456956037, 344077627),
				s(2730485921, 1290863460),
				s(2820302411, 3158454273),
				s(3259730800, 3505952657),
				s(3345764771, 106217008),
				s(3516065817, 3606008344),
				s(3600352804, 1432725776),
				s(4094571909, 1467031594),
				s(275423344, 851169720),
				s(430227734, 3100823752),
				s(506948616, 1363258195),
				s(659060556, 3750685593),
				s(883997877, 3785050280),
				s(958139571, 3318307427),
				s(1322822218, 3812723403),
				s(1537002063, 2003034995),
				s(1747873779, 3602036899),
				s(1955562222, 1575990012),
				s(2024104815, 1125592928),
				s(2227730452, 2716904306),
				s(2361852424, 442776044),
				s(2428436474, 593698344),
				s(2756734187, 3733110249),
				s(3204031479, 2999351573),
				s(3329325298, 3815920427),
				s(3391569614, 3928383900),
				s(3515267271, 566280711),
				s(3940187606, 3454069534),
				s(4118630271, 4000239992),
				s(116418474, 1914138554),
				s(174292421, 2731055270),
				s(289380356, 3203993006),
				s(460393269, 320620315),
				s(685471733, 587496836),
				s(852142971, 1086792851),
				s(1017036298, 365543100),
				s(1126000580, 2618297676),
				s(1288033470, 3409855158),
				s(1501505948, 4234509866),
				s(1607167915, 987167468),
				s(1816402316, 1246189591)
			], l = [];
			(function() {
				for (var e = 0; e < 80; e++) l[e] = s();
			})();
			var u = a.SHA512 = r.extend({
				_doReset: function() {
					this._hash = new i.init([
						new o.init(1779033703, 4089235720),
						new o.init(3144134277, 2227873595),
						new o.init(1013904242, 4271175723),
						new o.init(2773480762, 1595750129),
						new o.init(1359893119, 2917565137),
						new o.init(2600822924, 725511199),
						new o.init(528734635, 4215389547),
						new o.init(1541459225, 327033209)
					]);
				},
				_doProcessBlock: function(e, t) {
					for (var r = this._hash.words, n = r[0], o = r[1], i = r[2], a = r[3], s = r[4], u = r[5], h = r[6], f = r[7], p = n.high, d = n.low, v = o.high, y = o.low, g = i.high, m = i.low, _ = a.high, b = a.low, E = s.high, w = s.low, x = u.high, T = u.low, B = h.high, S = h.low, A = f.high, C = f.low, H = p, P = d, O = v, k = y, L = g, R = m, I = _, M = b, N = E, j = w, D = x, $ = T, F = B, U = S, G = A, z = C, V = 0; V < 80; V++) {
						var K, W, X = l[V];
						if (V < 16) W = X.high = 0 | e[t + 2 * V], K = X.low = 0 | e[t + 2 * V + 1];
						else {
							var q = l[V - 15], Y = q.high, J = q.low, Z = (Y >>> 1 | J << 31) ^ (Y >>> 8 | J << 24) ^ Y >>> 7, Q = (J >>> 1 | Y << 31) ^ (J >>> 8 | Y << 24) ^ (J >>> 7 | Y << 25), ee = l[V - 2], te = ee.high, re = ee.low, ne = (te >>> 19 | re << 13) ^ (te << 3 | re >>> 29) ^ te >>> 6, oe = (re >>> 19 | te << 13) ^ (re << 3 | te >>> 29) ^ (re >>> 6 | te << 26), ie = l[V - 7], ae = ie.high, se = ie.low, ce = l[V - 16], le = ce.high, ue = ce.low;
							W = (W = (W = Z + ae + ((K = Q + se) >>> 0 < Q >>> 0 ? 1 : 0)) + ne + ((K += oe) >>> 0 < oe >>> 0 ? 1 : 0)) + le + ((K += ue) >>> 0 < ue >>> 0 ? 1 : 0), X.high = W, X.low = K;
						}
						var he, fe = N & D ^ ~N & F, pe = j & $ ^ ~j & U, de = H & O ^ H & L ^ O & L, ve = P & k ^ P & R ^ k & R, ye = (H >>> 28 | P << 4) ^ (H << 30 | P >>> 2) ^ (H << 25 | P >>> 7), ge = (P >>> 28 | H << 4) ^ (P << 30 | H >>> 2) ^ (P << 25 | H >>> 7), me = (N >>> 14 | j << 18) ^ (N >>> 18 | j << 14) ^ (N << 23 | j >>> 9), _e = (j >>> 14 | N << 18) ^ (j >>> 18 | N << 14) ^ (j << 23 | N >>> 9), be = c[V], Ee = be.high, we = be.low, xe = G + me + ((he = z + _e) >>> 0 < z >>> 0 ? 1 : 0), Te = ge + ve;
						G = F, z = U, F = D, U = $, D = N, $ = j, N = I + (xe = (xe = (xe = xe + fe + ((he += pe) >>> 0 < pe >>> 0 ? 1 : 0)) + Ee + ((he += we) >>> 0 < we >>> 0 ? 1 : 0)) + W + ((he += K) >>> 0 < K >>> 0 ? 1 : 0)) + ((j = M + he | 0) >>> 0 < M >>> 0 ? 1 : 0) | 0, I = L, M = R, L = O, R = k, O = H, k = P, H = xe + (ye + de + (Te >>> 0 < ge >>> 0 ? 1 : 0)) + ((P = he + Te | 0) >>> 0 < he >>> 0 ? 1 : 0) | 0;
					}
					d = n.low = d + P, n.high = p + H + (d >>> 0 < P >>> 0 ? 1 : 0), y = o.low = y + k, o.high = v + O + (y >>> 0 < k >>> 0 ? 1 : 0), m = i.low = m + R, i.high = g + L + (m >>> 0 < R >>> 0 ? 1 : 0), b = a.low = b + M, a.high = _ + I + (b >>> 0 < M >>> 0 ? 1 : 0), w = s.low = w + j, s.high = E + N + (w >>> 0 < j >>> 0 ? 1 : 0), T = u.low = T + $, u.high = x + D + (T >>> 0 < $ >>> 0 ? 1 : 0), S = h.low = S + U, h.high = B + F + (S >>> 0 < U >>> 0 ? 1 : 0), C = f.low = C + z, f.high = A + G + (C >>> 0 < z >>> 0 ? 1 : 0);
				},
				_doFinalize: function() {
					var e = this._data, t = e.words, r = 8 * this._nDataBytes, n = 8 * e.sigBytes;
					return t[n >>> 5] |= 128 << 24 - n % 32, t[30 + (n + 128 >>> 10 << 5)] = Math.floor(r / 4294967296), t[31 + (n + 128 >>> 10 << 5)] = r, e.sigBytes = 4 * t.length, this._process(), this._hash.toX32();
				},
				clone: function() {
					var e = r.clone.call(this);
					return e._hash = this._hash.clone(), e;
				},
				blockSize: 32
			});
			t.SHA512 = r._createHelper(u), t.HmacSHA512 = r._createHmacHelper(u);
		}(), e.SHA512)), Ot.exports;
		var e;
	}
	var Lt, Rt = { exports: {} };
	var It, Mt = { exports: {} };
	function Nt() {
		return It || (It = 1, Mt.exports = (e = nt(), at(), function(t) {
			var r = e, n = r.lib, o = n.WordArray, i = n.Hasher, a = r.x64.Word, s = r.algo, c = [], l = [], u = [];
			(function() {
				for (var e = 1, t = 0, r = 0; r < 24; r++) {
					c[e + 5 * t] = (r + 1) * (r + 2) / 2 % 64;
					var n = (2 * e + 3 * t) % 5;
					e = t % 5, t = n;
				}
				for (e = 0; e < 5; e++) for (t = 0; t < 5; t++) l[e + 5 * t] = t + (2 * e + 3 * t) % 5 * 5;
				for (var o = 1, i = 0; i < 24; i++) {
					for (var s = 0, h = 0, f = 0; f < 7; f++) {
						if (1 & o) {
							var p = (1 << f) - 1;
							p < 32 ? h ^= 1 << p : s ^= 1 << p - 32;
						}
						128 & o ? o = o << 1 ^ 113 : o <<= 1;
					}
					u[i] = a.create(s, h);
				}
			})();
			var h = [];
			(function() {
				for (var e = 0; e < 25; e++) h[e] = a.create();
			})();
			var f = s.SHA3 = i.extend({
				cfg: i.cfg.extend({ outputLength: 512 }),
				_doReset: function() {
					for (var e = this._state = [], t = 0; t < 25; t++) e[t] = new a.init();
					this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
				},
				_doProcessBlock: function(e, t) {
					for (var r = this._state, n = this.blockSize / 2, o = 0; o < n; o++) {
						var i = e[t + 2 * o], a = e[t + 2 * o + 1];
						i = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), a = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), (C = r[o]).high ^= a, C.low ^= i;
					}
					for (var s = 0; s < 24; s++) {
						for (var f = 0; f < 5; f++) {
							for (var p = 0, d = 0, v = 0; v < 5; v++) p ^= (C = r[f + 5 * v]).high, d ^= C.low;
							var y = h[f];
							y.high = p, y.low = d;
						}
						for (f = 0; f < 5; f++) {
							var g = h[(f + 4) % 5], m = h[(f + 1) % 5], _ = m.high, b = m.low;
							for (p = g.high ^ (_ << 1 | b >>> 31), d = g.low ^ (b << 1 | _ >>> 31), v = 0; v < 5; v++) (C = r[f + 5 * v]).high ^= p, C.low ^= d;
						}
						for (var E = 1; E < 25; E++) {
							var w = (C = r[E]).high, x = C.low, T = c[E];
							T < 32 ? (p = w << T | x >>> 32 - T, d = x << T | w >>> 32 - T) : (p = x << T - 32 | w >>> 64 - T, d = w << T - 32 | x >>> 64 - T);
							var B = h[l[E]];
							B.high = p, B.low = d;
						}
						var S = h[0], A = r[0];
						for (S.high = A.high, S.low = A.low, f = 0; f < 5; f++) for (v = 0; v < 5; v++) {
							var C = r[E = f + 5 * v], H = h[E], P = h[(f + 1) % 5 + 5 * v], O = h[(f + 2) % 5 + 5 * v];
							C.high = H.high ^ ~P.high & O.high, C.low = H.low ^ ~P.low & O.low;
						}
						C = r[0];
						var k = u[s];
						C.high ^= k.high, C.low ^= k.low;
					}
				},
				_doFinalize: function() {
					var e = this._data, r = e.words;
					this._nDataBytes;
					var n = 8 * e.sigBytes, i = 32 * this.blockSize;
					r[n >>> 5] |= 1 << 24 - n % 32, r[(t.ceil((n + 1) / i) * i >>> 5) - 1] |= 128, e.sigBytes = 4 * r.length, this._process();
					for (var a = this._state, s = this.cfg.outputLength / 8, c = s / 8, l = [], u = 0; u < c; u++) {
						var h = a[u], f = h.high, p = h.low;
						f = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8), p = 16711935 & (p << 8 | p >>> 24) | 4278255360 & (p << 24 | p >>> 8), l.push(p), l.push(f);
					}
					return new o.init(l, s);
				},
				clone: function() {
					for (var e = i.clone.call(this), t = e._state = this._state.slice(0), r = 0; r < 25; r++) t[r] = t[r].clone();
					return e;
				}
			});
			r.SHA3 = i._createHelper(f), r.HmacSHA3 = i._createHmacHelper(f);
		}(Math), e.SHA3)), Mt.exports;
		var e;
	}
	var jt, Dt = { exports: {} };
	var $t, Ft = { exports: {} };
	function Ut() {
		return $t || ($t = 1, Ft.exports = (e = nt(), void function() {
			var t = e, r = t.lib.Base, n = t.enc.Utf8;
			t.algo.HMAC = r.extend({
				init: function(e, t) {
					e = this._hasher = new e.init(), "string" == typeof t && (t = n.parse(t));
					var r = e.blockSize, o = 4 * r;
					t.sigBytes > o && (t = e.finalize(t)), t.clamp();
					for (var i = this._oKey = t.clone(), a = this._iKey = t.clone(), s = i.words, c = a.words, l = 0; l < r; l++) s[l] ^= 1549556828, c[l] ^= 909522486;
					i.sigBytes = a.sigBytes = o, this.reset();
				},
				reset: function() {
					var e = this._hasher;
					e.reset(), e.update(this._iKey);
				},
				update: function(e) {
					return this._hasher.update(e), this;
				},
				finalize: function(e) {
					var t = this._hasher, r = t.finalize(e);
					return t.reset(), t.finalize(this._oKey.clone().concat(r));
				}
			});
		}())), Ft.exports;
		var e;
	}
	var Gt, zt = { exports: {} };
	var Vt, Kt = { exports: {} };
	function Wt() {
		return Vt || (Vt = 1, Kt.exports = (e = nt(), Tt(), Ut(), function() {
			var t = e, r = t.lib, n = r.Base, o = r.WordArray, i = t.algo, a = i.MD5, s = i.EvpKDF = n.extend({
				cfg: n.extend({
					keySize: 4,
					hasher: a,
					iterations: 1
				}),
				init: function(e) {
					this.cfg = this.cfg.extend(e);
				},
				compute: function(e, t) {
					for (var r, n = this.cfg, i = n.hasher.create(), a = o.create(), s = a.words, c = n.keySize, l = n.iterations; s.length < c;) {
						r && i.update(r), r = i.update(e).finalize(t), i.reset();
						for (var u = 1; u < l; u++) r = i.finalize(r), i.reset();
						a.concat(r);
					}
					return a.sigBytes = 4 * c, a;
				}
			});
			t.EvpKDF = function(e, t, r) {
				return s.create(r).compute(e, t);
			};
		}(), e.EvpKDF)), Kt.exports;
		var e;
	}
	var Xt, qt = { exports: {} };
	function Yt() {
		return Xt || (Xt = 1, qt.exports = (e = nt(), Wt(), void (e.lib.Cipher || function(t) {
			var r = e, n = r.lib, o = n.Base, i = n.WordArray, a = n.BufferedBlockAlgorithm, s = r.enc;
			s.Utf8;
			var c = s.Base64, l = r.algo.EvpKDF, u = n.Cipher = a.extend({
				cfg: o.extend(),
				createEncryptor: function(e, t) {
					return this.create(this._ENC_XFORM_MODE, e, t);
				},
				createDecryptor: function(e, t) {
					return this.create(this._DEC_XFORM_MODE, e, t);
				},
				init: function(e, t, r) {
					this.cfg = this.cfg.extend(r), this._xformMode = e, this._key = t, this.reset();
				},
				reset: function() {
					a.reset.call(this), this._doReset();
				},
				process: function(e) {
					return this._append(e), this._process();
				},
				finalize: function(e) {
					return e && this._append(e), this._doFinalize();
				},
				keySize: 4,
				ivSize: 4,
				_ENC_XFORM_MODE: 1,
				_DEC_XFORM_MODE: 2,
				_createHelper: function() {
					function e(e) {
						return "string" == typeof e ? _ : g;
					}
					return function(t) {
						return {
							encrypt: function(r, n, o) {
								return e(n).encrypt(t, r, n, o);
							},
							decrypt: function(r, n, o) {
								return e(n).decrypt(t, r, n, o);
							}
						};
					};
				}()
			});
			n.StreamCipher = u.extend({
				_doFinalize: function() {
					return this._process(!0);
				},
				blockSize: 1
			});
			var h = r.mode = {}, f = n.BlockCipherMode = o.extend({
				createEncryptor: function(e, t) {
					return this.Encryptor.create(e, t);
				},
				createDecryptor: function(e, t) {
					return this.Decryptor.create(e, t);
				},
				init: function(e, t) {
					this._cipher = e, this._iv = t;
				}
			}), p = h.CBC = function() {
				var e = f.extend();
				function r(e, r, n) {
					var o, i = this._iv;
					i ? (o = i, this._iv = t) : o = this._prevBlock;
					for (var a = 0; a < n; a++) e[r + a] ^= o[a];
				}
				return e.Encryptor = e.extend({ processBlock: function(e, t) {
					var n = this._cipher, o = n.blockSize;
					r.call(this, e, t, o), n.encryptBlock(e, t), this._prevBlock = e.slice(t, t + o);
				} }), e.Decryptor = e.extend({ processBlock: function(e, t) {
					var n = this._cipher, o = n.blockSize, i = e.slice(t, t + o);
					n.decryptBlock(e, t), r.call(this, e, t, o), this._prevBlock = i;
				} }), e;
			}(), d = (r.pad = {}).Pkcs7 = {
				pad: function(e, t) {
					for (var r = 4 * t, n = r - e.sigBytes % r, o = n << 24 | n << 16 | n << 8 | n, a = [], s = 0; s < n; s += 4) a.push(o);
					var c = i.create(a, n);
					e.concat(c);
				},
				unpad: function(e) {
					var t = 255 & e.words[e.sigBytes - 1 >>> 2];
					e.sigBytes -= t;
				}
			};
			n.BlockCipher = u.extend({
				cfg: u.cfg.extend({
					mode: p,
					padding: d
				}),
				reset: function() {
					var e;
					u.reset.call(this);
					var t = this.cfg, r = t.iv, n = t.mode;
					this._xformMode == this._ENC_XFORM_MODE ? e = n.createEncryptor : (e = n.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == e ? this._mode.init(this, r && r.words) : (this._mode = e.call(n, this, r && r.words), this._mode.__creator = e);
				},
				_doProcessBlock: function(e, t) {
					this._mode.processBlock(e, t);
				},
				_doFinalize: function() {
					var e, t = this.cfg.padding;
					return this._xformMode == this._ENC_XFORM_MODE ? (t.pad(this._data, this.blockSize), e = this._process(!0)) : (e = this._process(!0), t.unpad(e)), e;
				},
				blockSize: 4
			});
			var v = n.CipherParams = o.extend({
				init: function(e) {
					this.mixIn(e);
				},
				toString: function(e) {
					return (e || this.formatter).stringify(this);
				}
			}), y = (r.format = {}).OpenSSL = {
				stringify: function(e) {
					var t = e.ciphertext, r = e.salt;
					return (r ? i.create([1398893684, 1701076831]).concat(r).concat(t) : t).toString(c);
				},
				parse: function(e) {
					var t, r = c.parse(e), n = r.words;
					return 1398893684 == n[0] && 1701076831 == n[1] && (t = i.create(n.slice(2, 4)), n.splice(0, 4), r.sigBytes -= 16), v.create({
						ciphertext: r,
						salt: t
					});
				}
			}, g = n.SerializableCipher = o.extend({
				cfg: o.extend({ format: y }),
				encrypt: function(e, t, r, n) {
					n = this.cfg.extend(n);
					var o = e.createEncryptor(r, n), i = o.finalize(t), a = o.cfg;
					return v.create({
						ciphertext: i,
						key: r,
						iv: a.iv,
						algorithm: e,
						mode: a.mode,
						padding: a.padding,
						blockSize: e.blockSize,
						formatter: n.format
					});
				},
				decrypt: function(e, t, r, n) {
					return n = this.cfg.extend(n), t = this._parse(t, n.format), e.createDecryptor(r, n).finalize(t.ciphertext);
				},
				_parse: function(e, t) {
					return "string" == typeof e ? t.parse(e, this) : e;
				}
			}), m = (r.kdf = {}).OpenSSL = { execute: function(e, t, r, n, o) {
				if (n || (n = i.random(8)), o) a = l.create({
					keySize: t + r,
					hasher: o
				}).compute(e, n);
				else var a = l.create({ keySize: t + r }).compute(e, n);
				var s = i.create(a.words.slice(t), 4 * r);
				return a.sigBytes = 4 * t, v.create({
					key: a,
					iv: s,
					salt: n
				});
			} }, _ = n.PasswordBasedCipher = g.extend({
				cfg: g.cfg.extend({ kdf: m }),
				encrypt: function(e, t, r, n) {
					var o = (n = this.cfg.extend(n)).kdf.execute(r, e.keySize, e.ivSize, n.salt, n.hasher);
					n.iv = o.iv;
					var i = g.encrypt.call(this, e, t, o.key, n);
					return i.mixIn(o), i;
				},
				decrypt: function(e, t, r, n) {
					n = this.cfg.extend(n), t = this._parse(t, n.format);
					var o = n.kdf.execute(r, e.keySize, e.ivSize, t.salt, n.hasher);
					return n.iv = o.iv, g.decrypt.call(this, e, t, o.key, n);
				}
			});
		}()))), qt.exports;
		var e;
	}
	var Jt, Zt = { exports: {} };
	function Qt() {
		return Jt || (Jt = 1, Zt.exports = (e = nt(), Yt(), e.mode.CFB = function() {
			var t = e.lib.BlockCipherMode.extend();
			function r(e, t, r, n) {
				var o, i = this._iv;
				i ? (o = i.slice(0), this._iv = void 0) : o = this._prevBlock, n.encryptBlock(o, 0);
				for (var a = 0; a < r; a++) e[t + a] ^= o[a];
			}
			return t.Encryptor = t.extend({ processBlock: function(e, t) {
				var n = this._cipher, o = n.blockSize;
				r.call(this, e, t, o, n), this._prevBlock = e.slice(t, t + o);
			} }), t.Decryptor = t.extend({ processBlock: function(e, t) {
				var n = this._cipher, o = n.blockSize, i = e.slice(t, t + o);
				r.call(this, e, t, o, n), this._prevBlock = i;
			} }), t;
		}(), e.mode.CFB)), Zt.exports;
		var e;
	}
	var er, tr = { exports: {} };
	function rr() {
		return er || (er = 1, tr.exports = (r = nt(), Yt(), r.mode.CTR = (e = r.lib.BlockCipherMode.extend(), t = e.Encryptor = e.extend({ processBlock: function(e, t) {
			var r = this._cipher, n = r.blockSize, o = this._iv, i = this._counter;
			o && (i = this._counter = o.slice(0), this._iv = void 0);
			var a = i.slice(0);
			r.encryptBlock(a, 0), i[n - 1] = i[n - 1] + 1 | 0;
			for (var s = 0; s < n; s++) e[t + s] ^= a[s];
		} }), e.Decryptor = t, e), r.mode.CTR)), tr.exports;
		var e, t, r;
	}
	var nr, or = { exports: {} };
	function ir() {
		return nr || (nr = 1, or.exports = (e = nt(), Yt(), e.mode.CTRGladman = function() {
			var t = e.lib.BlockCipherMode.extend();
			function r(e) {
				if (255 & ~(e >> 24)) e += 1 << 24;
				else {
					var t = e >> 16 & 255, r = e >> 8 & 255, n = 255 & e;
					255 === t ? (t = 0, 255 === r ? (r = 0, 255 === n ? n = 0 : ++n) : ++r) : ++t, e = 0, e += t << 16, e += r << 8, e += n;
				}
				return e;
			}
			function n(e) {
				return 0 === (e[0] = r(e[0])) && (e[1] = r(e[1])), e;
			}
			return t.Decryptor = t.Encryptor = t.extend({ processBlock: function(e, t) {
				var r = this._cipher, o = r.blockSize, i = this._iv, a = this._counter;
				i && (a = this._counter = i.slice(0), this._iv = void 0), n(a);
				var s = a.slice(0);
				r.encryptBlock(s, 0);
				for (var c = 0; c < o; c++) e[t + c] ^= s[c];
			} }), t;
		}(), e.mode.CTRGladman)), or.exports;
		var e;
	}
	var ar, sr = { exports: {} };
	function cr() {
		return ar || (ar = 1, sr.exports = (r = nt(), Yt(), r.mode.OFB = (e = r.lib.BlockCipherMode.extend(), t = e.Encryptor = e.extend({ processBlock: function(e, t) {
			var r = this._cipher, n = r.blockSize, o = this._iv, i = this._keystream;
			o && (i = this._keystream = o.slice(0), this._iv = void 0), r.encryptBlock(i, 0);
			for (var a = 0; a < n; a++) e[t + a] ^= i[a];
		} }), e.Decryptor = t, e), r.mode.OFB)), sr.exports;
		var e, t, r;
	}
	var lr, ur = { exports: {} };
	var hr, fr = { exports: {} };
	var pr, dr = { exports: {} };
	var vr, yr = { exports: {} };
	var gr, mr = { exports: {} };
	var _r, br = { exports: {} };
	var Er, wr = { exports: {} };
	var xr, Tr = { exports: {} };
	var Br, Sr = { exports: {} };
	function Ar() {
		return Br || (Br = 1, Sr.exports = (e = nt(), vt(), Et(), Wt(), Yt(), function() {
			var t = e, r = t.lib, n = r.WordArray, o = r.BlockCipher, i = t.algo, a = [
				57,
				49,
				41,
				33,
				25,
				17,
				9,
				1,
				58,
				50,
				42,
				34,
				26,
				18,
				10,
				2,
				59,
				51,
				43,
				35,
				27,
				19,
				11,
				3,
				60,
				52,
				44,
				36,
				63,
				55,
				47,
				39,
				31,
				23,
				15,
				7,
				62,
				54,
				46,
				38,
				30,
				22,
				14,
				6,
				61,
				53,
				45,
				37,
				29,
				21,
				13,
				5,
				28,
				20,
				12,
				4
			], s = [
				14,
				17,
				11,
				24,
				1,
				5,
				3,
				28,
				15,
				6,
				21,
				10,
				23,
				19,
				12,
				4,
				26,
				8,
				16,
				7,
				27,
				20,
				13,
				2,
				41,
				52,
				31,
				37,
				47,
				55,
				30,
				40,
				51,
				45,
				33,
				48,
				44,
				49,
				39,
				56,
				34,
				53,
				46,
				42,
				50,
				36,
				29,
				32
			], c = [
				1,
				2,
				4,
				6,
				8,
				10,
				12,
				14,
				15,
				17,
				19,
				21,
				23,
				25,
				27,
				28
			], l = [
				{
					0: 8421888,
					268435456: 32768,
					536870912: 8421378,
					805306368: 2,
					1073741824: 512,
					1342177280: 8421890,
					1610612736: 8389122,
					1879048192: 8388608,
					2147483648: 514,
					2415919104: 8389120,
					2684354560: 33280,
					2952790016: 8421376,
					3221225472: 32770,
					3489660928: 8388610,
					3758096384: 0,
					4026531840: 33282,
					134217728: 0,
					402653184: 8421890,
					671088640: 33282,
					939524096: 32768,
					1207959552: 8421888,
					1476395008: 512,
					1744830464: 8421378,
					2013265920: 2,
					2281701376: 8389120,
					2550136832: 33280,
					2818572288: 8421376,
					3087007744: 8389122,
					3355443200: 8388610,
					3623878656: 32770,
					3892314112: 514,
					4160749568: 8388608,
					1: 32768,
					268435457: 2,
					536870913: 8421888,
					805306369: 8388608,
					1073741825: 8421378,
					1342177281: 33280,
					1610612737: 512,
					1879048193: 8389122,
					2147483649: 8421890,
					2415919105: 8421376,
					2684354561: 8388610,
					2952790017: 33282,
					3221225473: 514,
					3489660929: 8389120,
					3758096385: 32770,
					4026531841: 0,
					134217729: 8421890,
					402653185: 8421376,
					671088641: 8388608,
					939524097: 512,
					1207959553: 32768,
					1476395009: 8388610,
					1744830465: 2,
					2013265921: 33282,
					2281701377: 32770,
					2550136833: 8389122,
					2818572289: 514,
					3087007745: 8421888,
					3355443201: 8389120,
					3623878657: 0,
					3892314113: 33280,
					4160749569: 8421378
				},
				{
					0: 1074282512,
					16777216: 16384,
					33554432: 524288,
					50331648: 1074266128,
					67108864: 1073741840,
					83886080: 1074282496,
					100663296: 1073758208,
					117440512: 16,
					134217728: 540672,
					150994944: 1073758224,
					167772160: 1073741824,
					184549376: 540688,
					201326592: 524304,
					218103808: 0,
					234881024: 16400,
					251658240: 1074266112,
					8388608: 1073758208,
					25165824: 540688,
					41943040: 16,
					58720256: 1073758224,
					75497472: 1074282512,
					92274688: 1073741824,
					109051904: 524288,
					125829120: 1074266128,
					142606336: 524304,
					159383552: 0,
					176160768: 16384,
					192937984: 1074266112,
					209715200: 1073741840,
					226492416: 540672,
					243269632: 1074282496,
					260046848: 16400,
					268435456: 0,
					285212672: 1074266128,
					301989888: 1073758224,
					318767104: 1074282496,
					335544320: 1074266112,
					352321536: 16,
					369098752: 540688,
					385875968: 16384,
					402653184: 16400,
					419430400: 524288,
					436207616: 524304,
					452984832: 1073741840,
					469762048: 540672,
					486539264: 1073758208,
					503316480: 1073741824,
					520093696: 1074282512,
					276824064: 540688,
					293601280: 524288,
					310378496: 1074266112,
					327155712: 16384,
					343932928: 1073758208,
					360710144: 1074282512,
					377487360: 16,
					394264576: 1073741824,
					411041792: 1074282496,
					427819008: 1073741840,
					444596224: 1073758224,
					461373440: 524304,
					478150656: 0,
					494927872: 16400,
					511705088: 1074266128,
					528482304: 540672
				},
				{
					0: 260,
					1048576: 0,
					2097152: 67109120,
					3145728: 65796,
					4194304: 65540,
					5242880: 67108868,
					6291456: 67174660,
					7340032: 67174400,
					8388608: 67108864,
					9437184: 67174656,
					10485760: 65792,
					11534336: 67174404,
					12582912: 67109124,
					13631488: 65536,
					14680064: 4,
					15728640: 256,
					524288: 67174656,
					1572864: 67174404,
					2621440: 0,
					3670016: 67109120,
					4718592: 67108868,
					5767168: 65536,
					6815744: 65540,
					7864320: 260,
					8912896: 4,
					9961472: 256,
					11010048: 67174400,
					12058624: 65796,
					13107200: 65792,
					14155776: 67109124,
					15204352: 67174660,
					16252928: 67108864,
					16777216: 67174656,
					17825792: 65540,
					18874368: 65536,
					19922944: 67109120,
					20971520: 256,
					22020096: 67174660,
					23068672: 67108868,
					24117248: 0,
					25165824: 67109124,
					26214400: 67108864,
					27262976: 4,
					28311552: 65792,
					29360128: 67174400,
					30408704: 260,
					31457280: 65796,
					32505856: 67174404,
					17301504: 67108864,
					18350080: 260,
					19398656: 67174656,
					20447232: 0,
					21495808: 65540,
					22544384: 67109120,
					23592960: 256,
					24641536: 67174404,
					25690112: 65536,
					26738688: 67174660,
					27787264: 65796,
					28835840: 67108868,
					29884416: 67109124,
					30932992: 67174400,
					31981568: 4,
					33030144: 65792
				},
				{
					0: 2151682048,
					65536: 2147487808,
					131072: 4198464,
					196608: 2151677952,
					262144: 0,
					327680: 4198400,
					393216: 2147483712,
					458752: 4194368,
					524288: 2147483648,
					589824: 4194304,
					655360: 64,
					720896: 2147487744,
					786432: 2151678016,
					851968: 4160,
					917504: 4096,
					983040: 2151682112,
					32768: 2147487808,
					98304: 64,
					163840: 2151678016,
					229376: 2147487744,
					294912: 4198400,
					360448: 2151682112,
					425984: 0,
					491520: 2151677952,
					557056: 4096,
					622592: 2151682048,
					688128: 4194304,
					753664: 4160,
					819200: 2147483648,
					884736: 4194368,
					950272: 4198464,
					1015808: 2147483712,
					1048576: 4194368,
					1114112: 4198400,
					1179648: 2147483712,
					1245184: 0,
					1310720: 4160,
					1376256: 2151678016,
					1441792: 2151682048,
					1507328: 2147487808,
					1572864: 2151682112,
					1638400: 2147483648,
					1703936: 2151677952,
					1769472: 4198464,
					1835008: 2147487744,
					1900544: 4194304,
					1966080: 64,
					2031616: 4096,
					1081344: 2151677952,
					1146880: 2151682112,
					1212416: 0,
					1277952: 4198400,
					1343488: 4194368,
					1409024: 2147483648,
					1474560: 2147487808,
					1540096: 64,
					1605632: 2147483712,
					1671168: 4096,
					1736704: 2147487744,
					1802240: 2151678016,
					1867776: 4160,
					1933312: 2151682048,
					1998848: 4194304,
					2064384: 4198464
				},
				{
					0: 128,
					4096: 17039360,
					8192: 262144,
					12288: 536870912,
					16384: 537133184,
					20480: 16777344,
					24576: 553648256,
					28672: 262272,
					32768: 16777216,
					36864: 537133056,
					40960: 536871040,
					45056: 553910400,
					49152: 553910272,
					53248: 0,
					57344: 17039488,
					61440: 553648128,
					2048: 17039488,
					6144: 553648256,
					10240: 128,
					14336: 17039360,
					18432: 262144,
					22528: 537133184,
					26624: 553910272,
					30720: 536870912,
					34816: 537133056,
					38912: 0,
					43008: 553910400,
					47104: 16777344,
					51200: 536871040,
					55296: 553648128,
					59392: 16777216,
					63488: 262272,
					65536: 262144,
					69632: 128,
					73728: 536870912,
					77824: 553648256,
					81920: 16777344,
					86016: 553910272,
					90112: 537133184,
					94208: 16777216,
					98304: 553910400,
					102400: 553648128,
					106496: 17039360,
					110592: 537133056,
					114688: 262272,
					118784: 536871040,
					122880: 0,
					126976: 17039488,
					67584: 553648256,
					71680: 16777216,
					75776: 17039360,
					79872: 537133184,
					83968: 536870912,
					88064: 17039488,
					92160: 128,
					96256: 553910272,
					100352: 262272,
					104448: 553910400,
					108544: 0,
					112640: 553648128,
					116736: 16777344,
					120832: 262144,
					124928: 537133056,
					129024: 536871040
				},
				{
					0: 268435464,
					256: 8192,
					512: 270532608,
					768: 270540808,
					1024: 268443648,
					1280: 2097152,
					1536: 2097160,
					1792: 268435456,
					2048: 0,
					2304: 268443656,
					2560: 2105344,
					2816: 8,
					3072: 270532616,
					3328: 2105352,
					3584: 8200,
					3840: 270540800,
					128: 270532608,
					384: 270540808,
					640: 8,
					896: 2097152,
					1152: 2105352,
					1408: 268435464,
					1664: 268443648,
					1920: 8200,
					2176: 2097160,
					2432: 8192,
					2688: 268443656,
					2944: 270532616,
					3200: 0,
					3456: 270540800,
					3712: 2105344,
					3968: 268435456,
					4096: 268443648,
					4352: 270532616,
					4608: 270540808,
					4864: 8200,
					5120: 2097152,
					5376: 268435456,
					5632: 268435464,
					5888: 2105344,
					6144: 2105352,
					6400: 0,
					6656: 8,
					6912: 270532608,
					7168: 8192,
					7424: 268443656,
					7680: 270540800,
					7936: 2097160,
					4224: 8,
					4480: 2105344,
					4736: 2097152,
					4992: 268435464,
					5248: 268443648,
					5504: 8200,
					5760: 270540808,
					6016: 270532608,
					6272: 270540800,
					6528: 270532616,
					6784: 8192,
					7040: 2105352,
					7296: 2097160,
					7552: 0,
					7808: 268435456,
					8064: 268443656
				},
				{
					0: 1048576,
					16: 33555457,
					32: 1024,
					48: 1049601,
					64: 34604033,
					80: 0,
					96: 1,
					112: 34603009,
					128: 33555456,
					144: 1048577,
					160: 33554433,
					176: 34604032,
					192: 34603008,
					208: 1025,
					224: 1049600,
					240: 33554432,
					8: 34603009,
					24: 0,
					40: 33555457,
					56: 34604032,
					72: 1048576,
					88: 33554433,
					104: 33554432,
					120: 1025,
					136: 1049601,
					152: 33555456,
					168: 34603008,
					184: 1048577,
					200: 1024,
					216: 34604033,
					232: 1,
					248: 1049600,
					256: 33554432,
					272: 1048576,
					288: 33555457,
					304: 34603009,
					320: 1048577,
					336: 33555456,
					352: 34604032,
					368: 1049601,
					384: 1025,
					400: 34604033,
					416: 1049600,
					432: 1,
					448: 0,
					464: 34603008,
					480: 33554433,
					496: 1024,
					264: 1049600,
					280: 33555457,
					296: 34603009,
					312: 1,
					328: 33554432,
					344: 1048576,
					360: 1025,
					376: 34604032,
					392: 33554433,
					408: 34603008,
					424: 0,
					440: 34604033,
					456: 1049601,
					472: 1024,
					488: 33555456,
					504: 1048577
				},
				{
					0: 134219808,
					1: 131072,
					2: 134217728,
					3: 32,
					4: 131104,
					5: 134350880,
					6: 134350848,
					7: 2048,
					8: 134348800,
					9: 134219776,
					10: 133120,
					11: 134348832,
					12: 2080,
					13: 0,
					14: 134217760,
					15: 133152,
					2147483648: 2048,
					2147483649: 134350880,
					2147483650: 134219808,
					2147483651: 134217728,
					2147483652: 134348800,
					2147483653: 133120,
					2147483654: 133152,
					2147483655: 32,
					2147483656: 134217760,
					2147483657: 2080,
					2147483658: 131104,
					2147483659: 134350848,
					2147483660: 0,
					2147483661: 134348832,
					2147483662: 134219776,
					2147483663: 131072,
					16: 133152,
					17: 134350848,
					18: 32,
					19: 2048,
					20: 134219776,
					21: 134217760,
					22: 134348832,
					23: 131072,
					24: 0,
					25: 131104,
					26: 134348800,
					27: 134219808,
					28: 134350880,
					29: 133120,
					30: 2080,
					31: 134217728,
					2147483664: 131072,
					2147483665: 2048,
					2147483666: 134348832,
					2147483667: 133152,
					2147483668: 32,
					2147483669: 134348800,
					2147483670: 134217728,
					2147483671: 134219808,
					2147483672: 134350880,
					2147483673: 134217760,
					2147483674: 134219776,
					2147483675: 0,
					2147483676: 133120,
					2147483677: 2080,
					2147483678: 131104,
					2147483679: 134350848
				}
			], u = [
				4160749569,
				528482304,
				33030144,
				2064384,
				129024,
				8064,
				504,
				2147483679
			], h = i.DES = o.extend({
				_doReset: function() {
					for (var e = this._key.words, t = [], r = 0; r < 56; r++) {
						var n = a[r] - 1;
						t[r] = e[n >>> 5] >>> 31 - n % 32 & 1;
					}
					for (var o = this._subKeys = [], i = 0; i < 16; i++) {
						var l = o[i] = [], u = c[i];
						for (r = 0; r < 24; r++) l[r / 6 | 0] |= t[(s[r] - 1 + u) % 28] << 31 - r % 6, l[4 + (r / 6 | 0)] |= t[28 + (s[r + 24] - 1 + u) % 28] << 31 - r % 6;
						for (l[0] = l[0] << 1 | l[0] >>> 31, r = 1; r < 7; r++) l[r] = l[r] >>> 4 * (r - 1) + 3;
						l[7] = l[7] << 5 | l[7] >>> 27;
					}
					var h = this._invSubKeys = [];
					for (r = 0; r < 16; r++) h[r] = o[15 - r];
				},
				encryptBlock: function(e, t) {
					this._doCryptBlock(e, t, this._subKeys);
				},
				decryptBlock: function(e, t) {
					this._doCryptBlock(e, t, this._invSubKeys);
				},
				_doCryptBlock: function(e, t, r) {
					this._lBlock = e[t], this._rBlock = e[t + 1], f.call(this, 4, 252645135), f.call(this, 16, 65535), p.call(this, 2, 858993459), p.call(this, 8, 16711935), f.call(this, 1, 1431655765);
					for (var n = 0; n < 16; n++) {
						for (var o = r[n], i = this._lBlock, a = this._rBlock, s = 0, c = 0; c < 8; c++) s |= l[c][((a ^ o[c]) & u[c]) >>> 0];
						this._lBlock = a, this._rBlock = i ^ s;
					}
					var h = this._lBlock;
					this._lBlock = this._rBlock, this._rBlock = h, f.call(this, 1, 1431655765), p.call(this, 8, 16711935), p.call(this, 2, 858993459), f.call(this, 16, 65535), f.call(this, 4, 252645135), e[t] = this._lBlock, e[t + 1] = this._rBlock;
				},
				keySize: 2,
				ivSize: 2,
				blockSize: 2
			});
			function f(e, t) {
				var r = (this._lBlock >>> e ^ this._rBlock) & t;
				this._rBlock ^= r, this._lBlock ^= r << e;
			}
			function p(e, t) {
				var r = (this._rBlock >>> e ^ this._lBlock) & t;
				this._lBlock ^= r, this._rBlock ^= r << e;
			}
			t.DES = o._createHelper(h);
			var d = i.TripleDES = o.extend({
				_doReset: function() {
					var e = this._key.words;
					if (2 !== e.length && 4 !== e.length && e.length < 6) throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
					var t = e.slice(0, 2), r = e.length < 4 ? e.slice(0, 2) : e.slice(2, 4), o = e.length < 6 ? e.slice(0, 2) : e.slice(4, 6);
					this._des1 = h.createEncryptor(n.create(t)), this._des2 = h.createEncryptor(n.create(r)), this._des3 = h.createEncryptor(n.create(o));
				},
				encryptBlock: function(e, t) {
					this._des1.encryptBlock(e, t), this._des2.decryptBlock(e, t), this._des3.encryptBlock(e, t);
				},
				decryptBlock: function(e, t) {
					this._des3.decryptBlock(e, t), this._des2.encryptBlock(e, t), this._des1.decryptBlock(e, t);
				},
				keySize: 6,
				ivSize: 2,
				blockSize: 2
			});
			t.TripleDES = o._createHelper(d);
		}(), e.TripleDES)), Sr.exports;
		var e;
	}
	var Cr, Hr = { exports: {} };
	var Pr, Or = { exports: {} };
	var kr, Lr = { exports: {} };
	var Rr, Ir = { exports: {} };
	function Mr() {
		return Rr || (Rr = 1, Ir.exports = (e = nt(), vt(), Et(), Wt(), Yt(), function() {
			var t = e, r = t.lib.BlockCipher, n = t.algo;
			const o = 16, i = [
				608135816,
				2242054355,
				320440878,
				57701188,
				2752067618,
				698298832,
				137296536,
				3964562569,
				1160258022,
				953160567,
				3193202383,
				887688300,
				3232508343,
				3380367581,
				1065670069,
				3041331479,
				2450970073,
				2306472731
			], a = [
				[
					3509652390,
					2564797868,
					805139163,
					3491422135,
					3101798381,
					1780907670,
					3128725573,
					4046225305,
					614570311,
					3012652279,
					134345442,
					2240740374,
					1667834072,
					1901547113,
					2757295779,
					4103290238,
					227898511,
					1921955416,
					1904987480,
					2182433518,
					2069144605,
					3260701109,
					2620446009,
					720527379,
					3318853667,
					677414384,
					3393288472,
					3101374703,
					2390351024,
					1614419982,
					1822297739,
					2954791486,
					3608508353,
					3174124327,
					2024746970,
					1432378464,
					3864339955,
					2857741204,
					1464375394,
					1676153920,
					1439316330,
					715854006,
					3033291828,
					289532110,
					2706671279,
					2087905683,
					3018724369,
					1668267050,
					732546397,
					1947742710,
					3462151702,
					2609353502,
					2950085171,
					1814351708,
					2050118529,
					680887927,
					999245976,
					1800124847,
					3300911131,
					1713906067,
					1641548236,
					4213287313,
					1216130144,
					1575780402,
					4018429277,
					3917837745,
					3693486850,
					3949271944,
					596196993,
					3549867205,
					258830323,
					2213823033,
					772490370,
					2760122372,
					1774776394,
					2652871518,
					566650946,
					4142492826,
					1728879713,
					2882767088,
					1783734482,
					3629395816,
					2517608232,
					2874225571,
					1861159788,
					326777828,
					3124490320,
					2130389656,
					2716951837,
					967770486,
					1724537150,
					2185432712,
					2364442137,
					1164943284,
					2105845187,
					998989502,
					3765401048,
					2244026483,
					1075463327,
					1455516326,
					1322494562,
					910128902,
					469688178,
					1117454909,
					936433444,
					3490320968,
					3675253459,
					1240580251,
					122909385,
					2157517691,
					634681816,
					4142456567,
					3825094682,
					3061402683,
					2540495037,
					79693498,
					3249098678,
					1084186820,
					1583128258,
					426386531,
					1761308591,
					1047286709,
					322548459,
					995290223,
					1845252383,
					2603652396,
					3431023940,
					2942221577,
					3202600964,
					3727903485,
					1712269319,
					422464435,
					3234572375,
					1170764815,
					3523960633,
					3117677531,
					1434042557,
					442511882,
					3600875718,
					1076654713,
					1738483198,
					4213154764,
					2393238008,
					3677496056,
					1014306527,
					4251020053,
					793779912,
					2902807211,
					842905082,
					4246964064,
					1395751752,
					1040244610,
					2656851899,
					3396308128,
					445077038,
					3742853595,
					3577915638,
					679411651,
					2892444358,
					2354009459,
					1767581616,
					3150600392,
					3791627101,
					3102740896,
					284835224,
					4246832056,
					1258075500,
					768725851,
					2589189241,
					3069724005,
					3532540348,
					1274779536,
					3789419226,
					2764799539,
					1660621633,
					3471099624,
					4011903706,
					913787905,
					3497959166,
					737222580,
					2514213453,
					2928710040,
					3937242737,
					1804850592,
					3499020752,
					2949064160,
					2386320175,
					2390070455,
					2415321851,
					4061277028,
					2290661394,
					2416832540,
					1336762016,
					1754252060,
					3520065937,
					3014181293,
					791618072,
					3188594551,
					3933548030,
					2332172193,
					3852520463,
					3043980520,
					413987798,
					3465142937,
					3030929376,
					4245938359,
					2093235073,
					3534596313,
					375366246,
					2157278981,
					2479649556,
					555357303,
					3870105701,
					2008414854,
					3344188149,
					4221384143,
					3956125452,
					2067696032,
					3594591187,
					2921233993,
					2428461,
					544322398,
					577241275,
					1471733935,
					610547355,
					4027169054,
					1432588573,
					1507829418,
					2025931657,
					3646575487,
					545086370,
					48609733,
					2200306550,
					1653985193,
					298326376,
					1316178497,
					3007786442,
					2064951626,
					458293330,
					2589141269,
					3591329599,
					3164325604,
					727753846,
					2179363840,
					146436021,
					1461446943,
					4069977195,
					705550613,
					3059967265,
					3887724982,
					4281599278,
					3313849956,
					1404054877,
					2845806497,
					146425753,
					1854211946
				],
				[
					1266315497,
					3048417604,
					3681880366,
					3289982499,
					290971e4,
					1235738493,
					2632868024,
					2414719590,
					3970600049,
					1771706367,
					1449415276,
					3266420449,
					422970021,
					1963543593,
					2690192192,
					3826793022,
					1062508698,
					1531092325,
					1804592342,
					2583117782,
					2714934279,
					4024971509,
					1294809318,
					4028980673,
					1289560198,
					2221992742,
					1669523910,
					35572830,
					157838143,
					1052438473,
					1016535060,
					1802137761,
					1753167236,
					1386275462,
					3080475397,
					2857371447,
					1040679964,
					2145300060,
					2390574316,
					1461121720,
					2956646967,
					4031777805,
					4028374788,
					33600511,
					2920084762,
					1018524850,
					629373528,
					3691585981,
					3515945977,
					2091462646,
					2486323059,
					586499841,
					988145025,
					935516892,
					3367335476,
					2599673255,
					2839830854,
					265290510,
					3972581182,
					2759138881,
					3795373465,
					1005194799,
					847297441,
					406762289,
					1314163512,
					1332590856,
					1866599683,
					4127851711,
					750260880,
					613907577,
					1450815602,
					3165620655,
					3734664991,
					3650291728,
					3012275730,
					3704569646,
					1427272223,
					778793252,
					1343938022,
					2676280711,
					2052605720,
					1946737175,
					3164576444,
					3914038668,
					3967478842,
					3682934266,
					1661551462,
					3294938066,
					4011595847,
					840292616,
					3712170807,
					616741398,
					312560963,
					711312465,
					1351876610,
					322626781,
					1910503582,
					271666773,
					2175563734,
					1594956187,
					70604529,
					3617834859,
					1007753275,
					1495573769,
					4069517037,
					2549218298,
					2663038764,
					504708206,
					2263041392,
					3941167025,
					2249088522,
					1514023603,
					1998579484,
					1312622330,
					694541497,
					2582060303,
					2151582166,
					1382467621,
					776784248,
					2618340202,
					3323268794,
					2497899128,
					2784771155,
					503983604,
					4076293799,
					907881277,
					423175695,
					432175456,
					1378068232,
					4145222326,
					3954048622,
					3938656102,
					3820766613,
					2793130115,
					2977904593,
					26017576,
					3274890735,
					3194772133,
					1700274565,
					1756076034,
					4006520079,
					3677328699,
					720338349,
					1533947780,
					354530856,
					688349552,
					3973924725,
					1637815568,
					332179504,
					3949051286,
					53804574,
					2852348879,
					3044236432,
					1282449977,
					3583942155,
					3416972820,
					4006381244,
					1617046695,
					2628476075,
					3002303598,
					1686838959,
					431878346,
					2686675385,
					1700445008,
					1080580658,
					1009431731,
					832498133,
					3223435511,
					2605976345,
					2271191193,
					2516031870,
					1648197032,
					4164389018,
					2548247927,
					300782431,
					375919233,
					238389289,
					3353747414,
					2531188641,
					2019080857,
					1475708069,
					455242339,
					2609103871,
					448939670,
					3451063019,
					1395535956,
					2413381860,
					1841049896,
					1491858159,
					885456874,
					4264095073,
					4001119347,
					1565136089,
					3898914787,
					1108368660,
					540939232,
					1173283510,
					2745871338,
					3681308437,
					4207628240,
					3343053890,
					4016749493,
					1699691293,
					1103962373,
					3625875870,
					2256883143,
					3830138730,
					1031889488,
					3479347698,
					1535977030,
					4236805024,
					3251091107,
					2132092099,
					1774941330,
					1199868427,
					1452454533,
					157007616,
					2904115357,
					342012276,
					595725824,
					1480756522,
					206960106,
					497939518,
					591360097,
					863170706,
					2375253569,
					3596610801,
					1814182875,
					2094937945,
					3421402208,
					1082520231,
					3463918190,
					2785509508,
					435703966,
					3908032597,
					1641649973,
					2842273706,
					3305899714,
					1510255612,
					2148256476,
					2655287854,
					3276092548,
					4258621189,
					236887753,
					3681803219,
					274041037,
					1734335097,
					3815195456,
					3317970021,
					1899903192,
					1026095262,
					4050517792,
					356393447,
					2410691914,
					3873677099,
					3682840055
				],
				[
					3913112168,
					2491498743,
					4132185628,
					2489919796,
					1091903735,
					1979897079,
					3170134830,
					3567386728,
					3557303409,
					857797738,
					1136121015,
					1342202287,
					507115054,
					2535736646,
					337727348,
					3213592640,
					1301675037,
					2528481711,
					1895095763,
					1721773893,
					3216771564,
					62756741,
					2142006736,
					835421444,
					2531993523,
					1442658625,
					3659876326,
					2882144922,
					676362277,
					1392781812,
					170690266,
					3921047035,
					1759253602,
					3611846912,
					1745797284,
					664899054,
					1329594018,
					3901205900,
					3045908486,
					2062866102,
					2865634940,
					3543621612,
					3464012697,
					1080764994,
					553557557,
					3656615353,
					3996768171,
					991055499,
					499776247,
					1265440854,
					648242737,
					3940784050,
					980351604,
					3713745714,
					1749149687,
					3396870395,
					4211799374,
					3640570775,
					1161844396,
					3125318951,
					1431517754,
					545492359,
					4268468663,
					3499529547,
					1437099964,
					2702547544,
					3433638243,
					2581715763,
					2787789398,
					1060185593,
					1593081372,
					2418618748,
					4260947970,
					69676912,
					2159744348,
					86519011,
					2512459080,
					3838209314,
					1220612927,
					3339683548,
					133810670,
					1090789135,
					1078426020,
					1569222167,
					845107691,
					3583754449,
					4072456591,
					1091646820,
					628848692,
					1613405280,
					3757631651,
					526609435,
					236106946,
					48312990,
					2942717905,
					3402727701,
					1797494240,
					859738849,
					992217954,
					4005476642,
					2243076622,
					3870952857,
					3732016268,
					765654824,
					3490871365,
					2511836413,
					1685915746,
					3888969200,
					1414112111,
					2273134842,
					3281911079,
					4080962846,
					172450625,
					2569994100,
					980381355,
					4109958455,
					2819808352,
					2716589560,
					2568741196,
					3681446669,
					3329971472,
					1835478071,
					660984891,
					3704678404,
					4045999559,
					3422617507,
					3040415634,
					1762651403,
					1719377915,
					3470491036,
					2693910283,
					3642056355,
					3138596744,
					1364962596,
					2073328063,
					1983633131,
					926494387,
					3423689081,
					2150032023,
					4096667949,
					1749200295,
					3328846651,
					309677260,
					2016342300,
					1779581495,
					3079819751,
					111262694,
					1274766160,
					443224088,
					298511866,
					1025883608,
					3806446537,
					1145181785,
					168956806,
					3641502830,
					3584813610,
					1689216846,
					3666258015,
					3200248200,
					1692713982,
					2646376535,
					4042768518,
					1618508792,
					1610833997,
					3523052358,
					4130873264,
					2001055236,
					3610705100,
					2202168115,
					4028541809,
					2961195399,
					1006657119,
					2006996926,
					3186142756,
					1430667929,
					3210227297,
					1314452623,
					4074634658,
					4101304120,
					2273951170,
					1399257539,
					3367210612,
					3027628629,
					1190975929,
					2062231137,
					2333990788,
					2221543033,
					2438960610,
					1181637006,
					548689776,
					2362791313,
					3372408396,
					3104550113,
					3145860560,
					296247880,
					1970579870,
					3078560182,
					3769228297,
					1714227617,
					3291629107,
					3898220290,
					166772364,
					1251581989,
					493813264,
					448347421,
					195405023,
					2709975567,
					677966185,
					3703036547,
					1463355134,
					2715995803,
					1338867538,
					1343315457,
					2802222074,
					2684532164,
					233230375,
					2599980071,
					2000651841,
					3277868038,
					1638401717,
					4028070440,
					3237316320,
					6314154,
					819756386,
					300326615,
					590932579,
					1405279636,
					3267499572,
					3150704214,
					2428286686,
					3959192993,
					3461946742,
					1862657033,
					1266418056,
					963775037,
					2089974820,
					2263052895,
					1917689273,
					448879540,
					3550394620,
					3981727096,
					150775221,
					3627908307,
					1303187396,
					508620638,
					2975983352,
					2726630617,
					1817252668,
					1876281319,
					1457606340,
					908771278,
					3720792119,
					3617206836,
					2455994898,
					1729034894,
					1080033504
				],
				[
					976866871,
					3556439503,
					2881648439,
					1522871579,
					1555064734,
					1336096578,
					3548522304,
					2579274686,
					3574697629,
					3205460757,
					3593280638,
					3338716283,
					3079412587,
					564236357,
					2993598910,
					1781952180,
					1464380207,
					3163844217,
					3332601554,
					1699332808,
					1393555694,
					1183702653,
					3581086237,
					1288719814,
					691649499,
					2847557200,
					2895455976,
					3193889540,
					2717570544,
					1781354906,
					1676643554,
					2592534050,
					3230253752,
					1126444790,
					2770207658,
					2633158820,
					2210423226,
					2615765581,
					2414155088,
					3127139286,
					673620729,
					2805611233,
					1269405062,
					4015350505,
					3341807571,
					4149409754,
					1057255273,
					2012875353,
					2162469141,
					2276492801,
					2601117357,
					993977747,
					3918593370,
					2654263191,
					753973209,
					36408145,
					2530585658,
					25011837,
					3520020182,
					2088578344,
					530523599,
					2918365339,
					1524020338,
					1518925132,
					3760827505,
					3759777254,
					1202760957,
					3985898139,
					3906192525,
					674977740,
					4174734889,
					2031300136,
					2019492241,
					3983892565,
					4153806404,
					3822280332,
					352677332,
					2297720250,
					60907813,
					90501309,
					3286998549,
					1016092578,
					2535922412,
					2839152426,
					457141659,
					509813237,
					4120667899,
					652014361,
					1966332200,
					2975202805,
					55981186,
					2327461051,
					676427537,
					3255491064,
					2882294119,
					3433927263,
					1307055953,
					942726286,
					933058658,
					2468411793,
					3933900994,
					4215176142,
					1361170020,
					2001714738,
					2830558078,
					3274259782,
					1222529897,
					1679025792,
					2729314320,
					3714953764,
					1770335741,
					151462246,
					3013232138,
					1682292957,
					1483529935,
					471910574,
					1539241949,
					458788160,
					3436315007,
					1807016891,
					3718408830,
					978976581,
					1043663428,
					3165965781,
					1927990952,
					4200891579,
					2372276910,
					3208408903,
					3533431907,
					1412390302,
					2931980059,
					4132332400,
					1947078029,
					3881505623,
					4168226417,
					2941484381,
					1077988104,
					1320477388,
					886195818,
					18198404,
					3786409e3,
					2509781533,
					112762804,
					3463356488,
					1866414978,
					891333506,
					18488651,
					661792760,
					1628790961,
					3885187036,
					3141171499,
					876946877,
					2693282273,
					1372485963,
					791857591,
					2686433993,
					3759982718,
					3167212022,
					3472953795,
					2716379847,
					445679433,
					3561995674,
					3504004811,
					3574258232,
					54117162,
					3331405415,
					2381918588,
					3769707343,
					4154350007,
					1140177722,
					4074052095,
					668550556,
					3214352940,
					367459370,
					261225585,
					2610173221,
					4209349473,
					3468074219,
					3265815641,
					314222801,
					3066103646,
					3808782860,
					282218597,
					3406013506,
					3773591054,
					379116347,
					1285071038,
					846784868,
					2669647154,
					3771962079,
					3550491691,
					2305946142,
					453669953,
					1268987020,
					3317592352,
					3279303384,
					3744833421,
					2610507566,
					3859509063,
					266596637,
					3847019092,
					517658769,
					3462560207,
					3443424879,
					370717030,
					4247526661,
					2224018117,
					4143653529,
					4112773975,
					2788324899,
					2477274417,
					1456262402,
					2901442914,
					1517677493,
					1846949527,
					2295493580,
					3734397586,
					2176403920,
					1280348187,
					1908823572,
					3871786941,
					846861322,
					1172426758,
					3287448474,
					3383383037,
					1655181056,
					3139813346,
					901632758,
					1897031941,
					2986607138,
					3066810236,
					3447102507,
					1393639104,
					373351379,
					950779232,
					625454576,
					3124240540,
					4148612726,
					2007998917,
					544563296,
					2244738638,
					2330496472,
					2058025392,
					1291430526,
					424198748,
					50039436,
					29584100,
					3605783033,
					2429876329,
					2791104160,
					1057563949,
					3255363231,
					3075367218,
					3463963227,
					1469046755,
					985887462
				]
			];
			var s = {
				pbox: [],
				sbox: []
			};
			function c(e, t) {
				let r = t >> 24 & 255, n = t >> 16 & 255, o = t >> 8 & 255, i = 255 & t, a = e.sbox[0][r] + e.sbox[1][n];
				return a ^= e.sbox[2][o], a += e.sbox[3][i], a;
			}
			function l(e, t, r) {
				let n, i = t, a = r;
				for (let t = 0; t < o; ++t) i ^= e.pbox[t], a = c(e, i) ^ a, n = i, i = a, a = n;
				return n = i, i = a, a = n, a ^= e.pbox[o], i ^= e.pbox[o + 1], {
					left: i,
					right: a
				};
			}
			function u(e, t, r) {
				let n, i = t, a = r;
				for (let t = o + 1; t > 1; --t) i ^= e.pbox[t], a = c(e, i) ^ a, n = i, i = a, a = n;
				return n = i, i = a, a = n, a ^= e.pbox[1], i ^= e.pbox[0], {
					left: i,
					right: a
				};
			}
			function h(e, t, r) {
				for (let t = 0; t < 4; t++) {
					e.sbox[t] = [];
					for (let r = 0; r < 256; r++) e.sbox[t][r] = a[t][r];
				}
				let n = 0;
				for (let a = 0; a < o + 2; a++) e.pbox[a] = i[a] ^ t[n], n++, n >= r && (n = 0);
				let s = 0, c = 0, u = 0;
				for (let t = 0; t < o + 2; t += 2) u = l(e, s, c), s = u.left, c = u.right, e.pbox[t] = s, e.pbox[t + 1] = c;
				for (let t = 0; t < 4; t++) for (let r = 0; r < 256; r += 2) u = l(e, s, c), s = u.left, c = u.right, e.sbox[t][r] = s, e.sbox[t][r + 1] = c;
				return !0;
			}
			var f = n.Blowfish = r.extend({
				_doReset: function() {
					if (this._keyPriorReset !== this._key) {
						var e = this._keyPriorReset = this._key, t = e.words;
						h(s, t, e.sigBytes / 4);
					}
				},
				encryptBlock: function(e, t) {
					var r = l(s, e[t], e[t + 1]);
					e[t] = r.left, e[t + 1] = r.right;
				},
				decryptBlock: function(e, t) {
					var r = u(s, e[t], e[t + 1]);
					e[t] = r.left, e[t + 1] = r.right;
				},
				blockSize: 2,
				keySize: 4,
				ivSize: 2
			});
			t.Blowfish = r._createHelper(f);
		}(), e.Blowfish)), Ir.exports;
		var e;
	}
	var Nr;
	var jr, $r = De((Nr || (Nr = 1, Qe.exports = function(e) {
		return e;
	}(nt(), at(), lt(), ft(), vt(), mt(), Et(), Tt(), At(), Ct || (Ct = 1, Ht.exports = (jr = nt(), At(), function() {
		var e = jr, t = e.lib.WordArray, r = e.algo, n = r.SHA256, o = r.SHA224 = n.extend({
			_doReset: function() {
				this._hash = new t.init([
					3238371032,
					914150663,
					812702999,
					4144912697,
					4290775857,
					1750603025,
					1694076839,
					3204075428
				]);
			},
			_doFinalize: function() {
				var e = n._doFinalize.call(this);
				return e.sigBytes -= 4, e;
			}
		});
		e.SHA224 = n._createHelper(o), e.HmacSHA224 = n._createHmacHelper(o);
	}(), jr.SHA224)), kt(), function() {
		return Lt || (Lt = 1, Rt.exports = (e = nt(), at(), kt(), function() {
			var t = e, r = t.x64, n = r.Word, o = r.WordArray, i = t.algo, a = i.SHA512, s = i.SHA384 = a.extend({
				_doReset: function() {
					this._hash = new o.init([
						new n.init(3418070365, 3238371032),
						new n.init(1654270250, 914150663),
						new n.init(2438529370, 812702999),
						new n.init(355462360, 4144912697),
						new n.init(1731405415, 4290775857),
						new n.init(2394180231, 1750603025),
						new n.init(3675008525, 1694076839),
						new n.init(1203062813, 3204075428)
					]);
				},
				_doFinalize: function() {
					var e = a._doFinalize.call(this);
					return e.sigBytes -= 16, e;
				}
			});
			t.SHA384 = a._createHelper(s), t.HmacSHA384 = a._createHmacHelper(s);
		}(), e.SHA384)), Rt.exports;
		var e;
	}(), Nt(), function() {
		return jt || (jt = 1, Dt.exports = (e = nt(), function() {
			var t = e, r = t.lib, n = r.WordArray, o = r.Hasher, i = t.algo, a = n.create([
				0,
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				7,
				4,
				13,
				1,
				10,
				6,
				15,
				3,
				12,
				0,
				9,
				5,
				2,
				14,
				11,
				8,
				3,
				10,
				14,
				4,
				9,
				15,
				8,
				1,
				2,
				7,
				0,
				6,
				13,
				11,
				5,
				12,
				1,
				9,
				11,
				10,
				0,
				8,
				12,
				4,
				13,
				3,
				7,
				15,
				14,
				5,
				6,
				2,
				4,
				0,
				5,
				9,
				7,
				12,
				2,
				10,
				14,
				1,
				3,
				8,
				11,
				6,
				15,
				13
			]), s = n.create([
				5,
				14,
				7,
				0,
				9,
				2,
				11,
				4,
				13,
				6,
				15,
				8,
				1,
				10,
				3,
				12,
				6,
				11,
				3,
				7,
				0,
				13,
				5,
				10,
				14,
				15,
				8,
				12,
				4,
				9,
				1,
				2,
				15,
				5,
				1,
				3,
				7,
				14,
				6,
				9,
				11,
				8,
				12,
				2,
				10,
				0,
				4,
				13,
				8,
				6,
				4,
				1,
				3,
				11,
				15,
				0,
				5,
				12,
				2,
				13,
				9,
				7,
				10,
				14,
				12,
				15,
				10,
				4,
				1,
				5,
				8,
				7,
				6,
				2,
				13,
				14,
				0,
				3,
				9,
				11
			]), c = n.create([
				11,
				14,
				15,
				12,
				5,
				8,
				7,
				9,
				11,
				13,
				14,
				15,
				6,
				7,
				9,
				8,
				7,
				6,
				8,
				13,
				11,
				9,
				7,
				15,
				7,
				12,
				15,
				9,
				11,
				7,
				13,
				12,
				11,
				13,
				6,
				7,
				14,
				9,
				13,
				15,
				14,
				8,
				13,
				6,
				5,
				12,
				7,
				5,
				11,
				12,
				14,
				15,
				14,
				15,
				9,
				8,
				9,
				14,
				5,
				6,
				8,
				6,
				5,
				12,
				9,
				15,
				5,
				11,
				6,
				8,
				13,
				12,
				5,
				12,
				13,
				14,
				11,
				8,
				5,
				6
			]), l = n.create([
				8,
				9,
				9,
				11,
				13,
				15,
				15,
				5,
				7,
				7,
				8,
				11,
				14,
				14,
				12,
				6,
				9,
				13,
				15,
				7,
				12,
				8,
				9,
				11,
				7,
				7,
				12,
				7,
				6,
				15,
				13,
				11,
				9,
				7,
				15,
				11,
				8,
				6,
				6,
				14,
				12,
				13,
				5,
				14,
				13,
				13,
				7,
				5,
				15,
				5,
				8,
				11,
				14,
				14,
				6,
				14,
				6,
				9,
				12,
				9,
				12,
				5,
				15,
				8,
				8,
				5,
				12,
				9,
				12,
				5,
				14,
				6,
				8,
				13,
				6,
				5,
				15,
				13,
				11,
				11
			]), u = n.create([
				0,
				1518500249,
				1859775393,
				2400959708,
				2840853838
			]), h = n.create([
				1352829926,
				1548603684,
				1836072691,
				2053994217,
				0
			]), f = i.RIPEMD160 = o.extend({
				_doReset: function() {
					this._hash = n.create([
						1732584193,
						4023233417,
						2562383102,
						271733878,
						3285377520
					]);
				},
				_doProcessBlock: function(e, t) {
					for (var r = 0; r < 16; r++) {
						var n = t + r, o = e[n];
						e[n] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
					}
					var i, f, _, b, E, w, x, T, B, S, A, C = this._hash.words, H = u.words, P = h.words, O = a.words, k = s.words, L = c.words, R = l.words;
					for (w = i = C[0], x = f = C[1], T = _ = C[2], B = b = C[3], S = E = C[4], r = 0; r < 80; r += 1) A = i + e[t + O[r]] | 0, A += r < 16 ? p(f, _, b) + H[0] : r < 32 ? d(f, _, b) + H[1] : r < 48 ? v(f, _, b) + H[2] : r < 64 ? y(f, _, b) + H[3] : g(f, _, b) + H[4], A = (A = m(A |= 0, L[r])) + E | 0, i = E, E = b, b = m(_, 10), _ = f, f = A, A = w + e[t + k[r]] | 0, A += r < 16 ? g(x, T, B) + P[0] : r < 32 ? y(x, T, B) + P[1] : r < 48 ? v(x, T, B) + P[2] : r < 64 ? d(x, T, B) + P[3] : p(x, T, B) + P[4], A = (A = m(A |= 0, R[r])) + S | 0, w = S, S = B, B = m(T, 10), T = x, x = A;
					A = C[1] + _ + B | 0, C[1] = C[2] + b + S | 0, C[2] = C[3] + E + w | 0, C[3] = C[4] + i + x | 0, C[4] = C[0] + f + T | 0, C[0] = A;
				},
				_doFinalize: function() {
					var e = this._data, t = e.words, r = 8 * this._nDataBytes, n = 8 * e.sigBytes;
					t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), e.sigBytes = 4 * (t.length + 1), this._process();
					for (var o = this._hash, i = o.words, a = 0; a < 5; a++) {
						var s = i[a];
						i[a] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
					}
					return o;
				},
				clone: function() {
					var e = o.clone.call(this);
					return e._hash = this._hash.clone(), e;
				}
			});
			function p(e, t, r) {
				return e ^ t ^ r;
			}
			function d(e, t, r) {
				return e & t | ~e & r;
			}
			function v(e, t, r) {
				return (e | ~t) ^ r;
			}
			function y(e, t, r) {
				return e & r | t & ~r;
			}
			function g(e, t, r) {
				return e ^ (t | ~r);
			}
			function m(e, t) {
				return e << t | e >>> 32 - t;
			}
			t.RIPEMD160 = o._createHelper(f), t.HmacRIPEMD160 = o._createHmacHelper(f);
		}(), e.RIPEMD160)), Dt.exports;
		var e;
	}(), Ut(), function() {
		return Gt || (Gt = 1, zt.exports = (e = nt(), At(), Ut(), function() {
			var t = e, r = t.lib, n = r.Base, o = r.WordArray, i = t.algo, a = i.SHA256, s = i.HMAC, c = i.PBKDF2 = n.extend({
				cfg: n.extend({
					keySize: 4,
					hasher: a,
					iterations: 25e4
				}),
				init: function(e) {
					this.cfg = this.cfg.extend(e);
				},
				compute: function(e, t) {
					for (var r = this.cfg, n = s.create(r.hasher, e), i = o.create(), a = o.create([1]), c = i.words, l = a.words, u = r.keySize, h = r.iterations; c.length < u;) {
						var f = n.update(t).finalize(a);
						n.reset();
						for (var p = f.words, d = p.length, v = f, y = 1; y < h; y++) {
							v = n.finalize(v), n.reset();
							for (var g = v.words, m = 0; m < d; m++) p[m] ^= g[m];
						}
						i.concat(f), l[0]++;
					}
					return i.sigBytes = 4 * u, i;
				}
			});
			t.PBKDF2 = function(e, t, r) {
				return c.create(r).compute(e, t);
			};
		}(), e.PBKDF2)), zt.exports;
		var e;
	}(), Wt(), Yt(), Qt(), rr(), ir(), cr(), function() {
		return lr ? ur.exports : (lr = 1, ur.exports = (t = nt(), Yt(), t.mode.ECB = ((e = t.lib.BlockCipherMode.extend()).Encryptor = e.extend({ processBlock: function(e, t) {
			this._cipher.encryptBlock(e, t);
		} }), e.Decryptor = e.extend({ processBlock: function(e, t) {
			this._cipher.decryptBlock(e, t);
		} }), e), t.mode.ECB));
		var e, t;
	}(), function() {
		return hr ? fr.exports : (hr = 1, fr.exports = (e = nt(), Yt(), e.pad.AnsiX923 = {
			pad: function(e, t) {
				var r = e.sigBytes, n = 4 * t, o = n - r % n, i = r + o - 1;
				e.clamp(), e.words[i >>> 2] |= o << 24 - i % 4 * 8, e.sigBytes += o;
			},
			unpad: function(e) {
				var t = 255 & e.words[e.sigBytes - 1 >>> 2];
				e.sigBytes -= t;
			}
		}, e.pad.Ansix923));
		var e;
	}(), function() {
		return pr ? dr.exports : (pr = 1, dr.exports = (e = nt(), Yt(), e.pad.Iso10126 = {
			pad: function(t, r) {
				var n = 4 * r, o = n - t.sigBytes % n;
				t.concat(e.lib.WordArray.random(o - 1)).concat(e.lib.WordArray.create([o << 24], 1));
			},
			unpad: function(e) {
				var t = 255 & e.words[e.sigBytes - 1 >>> 2];
				e.sigBytes -= t;
			}
		}, e.pad.Iso10126));
		var e;
	}(), function() {
		return vr ? yr.exports : (vr = 1, yr.exports = (e = nt(), Yt(), e.pad.Iso97971 = {
			pad: function(t, r) {
				t.concat(e.lib.WordArray.create([2147483648], 1)), e.pad.ZeroPadding.pad(t, r);
			},
			unpad: function(t) {
				e.pad.ZeroPadding.unpad(t), t.sigBytes--;
			}
		}, e.pad.Iso97971));
		var e;
	}(), function() {
		return gr || (gr = 1, mr.exports = (e = nt(), Yt(), e.pad.ZeroPadding = {
			pad: function(e, t) {
				var r = 4 * t;
				e.clamp(), e.sigBytes += r - (e.sigBytes % r || r);
			},
			unpad: function(e) {
				var t = e.words, r = e.sigBytes - 1;
				for (r = e.sigBytes - 1; r >= 0; r--) if (t[r >>> 2] >>> 24 - r % 4 * 8 & 255) {
					e.sigBytes = r + 1;
					break;
				}
			}
		}, e.pad.ZeroPadding)), mr.exports;
		var e;
	}(), function() {
		return _r ? br.exports : (_r = 1, br.exports = (e = nt(), Yt(), e.pad.NoPadding = {
			pad: function() {},
			unpad: function() {}
		}, e.pad.NoPadding));
		var e;
	}(), function() {
		return Er || (Er = 1, wr.exports = (e = nt(), Yt(), function() {
			var t = e, r = t.lib.CipherParams, n = t.enc.Hex;
			t.format.Hex = {
				stringify: function(e) {
					return e.ciphertext.toString(n);
				},
				parse: function(e) {
					var t = n.parse(e);
					return r.create({ ciphertext: t });
				}
			};
		}(), e.format.Hex)), wr.exports;
		var e;
	}(), function() {
		return xr || (xr = 1, Tr.exports = (e = nt(), vt(), Et(), Wt(), Yt(), function() {
			var t = e, r = t.lib.BlockCipher, n = t.algo, o = [], i = [], a = [], s = [], c = [], l = [], u = [], h = [], f = [], p = [];
			(function() {
				for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
				var r = 0, n = 0;
				for (t = 0; t < 256; t++) {
					var d = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
					d = d >>> 8 ^ 255 & d ^ 99, o[r] = d, i[d] = r;
					var v = e[r], y = e[v], g = e[y], m = 257 * e[d] ^ 16843008 * d;
					a[r] = m << 24 | m >>> 8, s[r] = m << 16 | m >>> 16, c[r] = m << 8 | m >>> 24, l[r] = m, m = 16843009 * g ^ 65537 * y ^ 257 * v ^ 16843008 * r, u[d] = m << 24 | m >>> 8, h[d] = m << 16 | m >>> 16, f[d] = m << 8 | m >>> 24, p[d] = m, r ? (r = v ^ e[e[e[g ^ v]]], n ^= e[e[n]]) : r = n = 1;
				}
			})();
			var d = [
				0,
				1,
				2,
				4,
				8,
				16,
				32,
				64,
				128,
				27,
				54
			], v = n.AES = r.extend({
				_doReset: function() {
					if (!this._nRounds || this._keyPriorReset !== this._key) {
						for (var e = this._keyPriorReset = this._key, t = e.words, r = e.sigBytes / 4, n = 4 * ((this._nRounds = r + 6) + 1), i = this._keySchedule = [], a = 0; a < n; a++) a < r ? i[a] = t[a] : (l = i[a - 1], a % r ? r > 6 && a % r == 4 && (l = o[l >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[255 & l]) : (l = o[(l = l << 8 | l >>> 24) >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[255 & l], l ^= d[a / r | 0] << 24), i[a] = i[a - r] ^ l);
						for (var s = this._invKeySchedule = [], c = 0; c < n; c++) {
							if (a = n - c, c % 4) var l = i[a];
							else l = i[a - 4];
							s[c] = c < 4 || a <= 4 ? l : u[o[l >>> 24]] ^ h[o[l >>> 16 & 255]] ^ f[o[l >>> 8 & 255]] ^ p[o[255 & l]];
						}
					}
				},
				encryptBlock: function(e, t) {
					this._doCryptBlock(e, t, this._keySchedule, a, s, c, l, o);
				},
				decryptBlock: function(e, t) {
					var r = e[t + 1];
					e[t + 1] = e[t + 3], e[t + 3] = r, this._doCryptBlock(e, t, this._invKeySchedule, u, h, f, p, i), r = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = r;
				},
				_doCryptBlock: function(e, t, r, n, o, i, a, s) {
					for (var c = this._nRounds, l = e[t] ^ r[0], u = e[t + 1] ^ r[1], h = e[t + 2] ^ r[2], f = e[t + 3] ^ r[3], p = 4, d = 1; d < c; d++) {
						var v = n[l >>> 24] ^ o[u >>> 16 & 255] ^ i[h >>> 8 & 255] ^ a[255 & f] ^ r[p++], y = n[u >>> 24] ^ o[h >>> 16 & 255] ^ i[f >>> 8 & 255] ^ a[255 & l] ^ r[p++], g = n[h >>> 24] ^ o[f >>> 16 & 255] ^ i[l >>> 8 & 255] ^ a[255 & u] ^ r[p++], m = n[f >>> 24] ^ o[l >>> 16 & 255] ^ i[u >>> 8 & 255] ^ a[255 & h] ^ r[p++];
						l = v, u = y, h = g, f = m;
					}
					v = (s[l >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & f]) ^ r[p++], y = (s[u >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & l]) ^ r[p++], g = (s[h >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & u]) ^ r[p++], m = (s[f >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & h]) ^ r[p++], e[t] = v, e[t + 1] = y, e[t + 2] = g, e[t + 3] = m;
				},
				keySize: 8
			});
			t.AES = r._createHelper(v);
		}(), e.AES)), Tr.exports;
		var e;
	}(), Ar(), function() {
		return Cr || (Cr = 1, Hr.exports = (e = nt(), vt(), Et(), Wt(), Yt(), function() {
			var t = e, r = t.lib.StreamCipher, n = t.algo, o = n.RC4 = r.extend({
				_doReset: function() {
					for (var e = this._key, t = e.words, r = e.sigBytes, n = this._S = [], o = 0; o < 256; o++) n[o] = o;
					o = 0;
					for (var i = 0; o < 256; o++) {
						var a = o % r, s = t[a >>> 2] >>> 24 - a % 4 * 8 & 255;
						i = (i + n[o] + s) % 256;
						var c = n[o];
						n[o] = n[i], n[i] = c;
					}
					this._i = this._j = 0;
				},
				_doProcessBlock: function(e, t) {
					e[t] ^= i.call(this);
				},
				keySize: 8,
				ivSize: 0
			});
			function i() {
				for (var e = this._S, t = this._i, r = this._j, n = 0, o = 0; o < 4; o++) {
					r = (r + e[t = (t + 1) % 256]) % 256;
					var i = e[t];
					e[t] = e[r], e[r] = i, n |= e[(e[t] + e[r]) % 256] << 24 - 8 * o;
				}
				return this._i = t, this._j = r, n;
			}
			t.RC4 = r._createHelper(o);
			var a = n.RC4Drop = o.extend({
				cfg: o.cfg.extend({ drop: 192 }),
				_doReset: function() {
					o._doReset.call(this);
					for (var e = this.cfg.drop; e > 0; e--) i.call(this);
				}
			});
			t.RC4Drop = r._createHelper(a);
		}(), e.RC4)), Hr.exports;
		var e;
	}(), function() {
		return Pr || (Pr = 1, Or.exports = (e = nt(), vt(), Et(), Wt(), Yt(), function() {
			var t = e, r = t.lib.StreamCipher, n = t.algo, o = [], i = [], a = [], s = n.Rabbit = r.extend({
				_doReset: function() {
					for (var e = this._key.words, t = this.cfg.iv, r = 0; r < 4; r++) e[r] = 16711935 & (e[r] << 8 | e[r] >>> 24) | 4278255360 & (e[r] << 24 | e[r] >>> 8);
					var n = this._X = [
						e[0],
						e[3] << 16 | e[2] >>> 16,
						e[1],
						e[0] << 16 | e[3] >>> 16,
						e[2],
						e[1] << 16 | e[0] >>> 16,
						e[3],
						e[2] << 16 | e[1] >>> 16
					], o = this._C = [
						e[2] << 16 | e[2] >>> 16,
						4294901760 & e[0] | 65535 & e[1],
						e[3] << 16 | e[3] >>> 16,
						4294901760 & e[1] | 65535 & e[2],
						e[0] << 16 | e[0] >>> 16,
						4294901760 & e[2] | 65535 & e[3],
						e[1] << 16 | e[1] >>> 16,
						4294901760 & e[3] | 65535 & e[0]
					];
					for (this._b = 0, r = 0; r < 4; r++) c.call(this);
					for (r = 0; r < 8; r++) o[r] ^= n[r + 4 & 7];
					if (t) {
						var i = t.words, a = i[0], s = i[1], l = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), u = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), h = l >>> 16 | 4294901760 & u, f = u << 16 | 65535 & l;
						for (o[0] ^= l, o[1] ^= h, o[2] ^= u, o[3] ^= f, o[4] ^= l, o[5] ^= h, o[6] ^= u, o[7] ^= f, r = 0; r < 4; r++) c.call(this);
					}
				},
				_doProcessBlock: function(e, t) {
					var r = this._X;
					c.call(this), o[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16, o[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16, o[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16, o[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;
					for (var n = 0; n < 4; n++) o[n] = 16711935 & (o[n] << 8 | o[n] >>> 24) | 4278255360 & (o[n] << 24 | o[n] >>> 8), e[t + n] ^= o[n];
				},
				blockSize: 4,
				ivSize: 2
			});
			function c() {
				for (var e = this._X, t = this._C, r = 0; r < 8; r++) i[r] = t[r];
				for (t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < i[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < i[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < i[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < i[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < i[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < i[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < i[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < i[7] >>> 0 ? 1 : 0, r = 0; r < 8; r++) {
					var n = e[r] + t[r], o = 65535 & n, s = n >>> 16;
					a[r] = ((o * o >>> 17) + o * s >>> 15) + s * s ^ ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0);
				}
				e[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, e[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, e[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, e[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, e[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, e[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, e[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, e[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
			}
			t.Rabbit = r._createHelper(s);
		}(), e.Rabbit)), Or.exports;
		var e;
	}(), function() {
		return kr || (kr = 1, Lr.exports = (e = nt(), vt(), Et(), Wt(), Yt(), function() {
			var t = e, r = t.lib.StreamCipher, n = t.algo, o = [], i = [], a = [], s = n.RabbitLegacy = r.extend({
				_doReset: function() {
					var e = this._key.words, t = this.cfg.iv, r = this._X = [
						e[0],
						e[3] << 16 | e[2] >>> 16,
						e[1],
						e[0] << 16 | e[3] >>> 16,
						e[2],
						e[1] << 16 | e[0] >>> 16,
						e[3],
						e[2] << 16 | e[1] >>> 16
					], n = this._C = [
						e[2] << 16 | e[2] >>> 16,
						4294901760 & e[0] | 65535 & e[1],
						e[3] << 16 | e[3] >>> 16,
						4294901760 & e[1] | 65535 & e[2],
						e[0] << 16 | e[0] >>> 16,
						4294901760 & e[2] | 65535 & e[3],
						e[1] << 16 | e[1] >>> 16,
						4294901760 & e[3] | 65535 & e[0]
					];
					this._b = 0;
					for (var o = 0; o < 4; o++) c.call(this);
					for (o = 0; o < 8; o++) n[o] ^= r[o + 4 & 7];
					if (t) {
						var i = t.words, a = i[0], s = i[1], l = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), u = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), h = l >>> 16 | 4294901760 & u, f = u << 16 | 65535 & l;
						for (n[0] ^= l, n[1] ^= h, n[2] ^= u, n[3] ^= f, n[4] ^= l, n[5] ^= h, n[6] ^= u, n[7] ^= f, o = 0; o < 4; o++) c.call(this);
					}
				},
				_doProcessBlock: function(e, t) {
					var r = this._X;
					c.call(this), o[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16, o[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16, o[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16, o[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;
					for (var n = 0; n < 4; n++) o[n] = 16711935 & (o[n] << 8 | o[n] >>> 24) | 4278255360 & (o[n] << 24 | o[n] >>> 8), e[t + n] ^= o[n];
				},
				blockSize: 4,
				ivSize: 2
			});
			function c() {
				for (var e = this._X, t = this._C, r = 0; r < 8; r++) i[r] = t[r];
				for (t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < i[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < i[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < i[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < i[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < i[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < i[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < i[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < i[7] >>> 0 ? 1 : 0, r = 0; r < 8; r++) {
					var n = e[r] + t[r], o = 65535 & n, s = n >>> 16;
					a[r] = ((o * o >>> 17) + o * s >>> 15) + s * s ^ ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0);
				}
				e[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, e[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, e[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, e[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, e[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, e[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, e[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, e[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
			}
			t.RabbitLegacy = r._createHelper(s);
		}(), e.RabbitLegacy)), Lr.exports;
		var e;
	}(), Mr())), Qe.exports)), Fr = "https://cdn.gtx.dev", Ur = "https://runtime2.gtx.dev", Gr = "en", zr = [
		"singular",
		"plural",
		"dual",
		"zero",
		"one",
		"two",
		"few",
		"many",
		"other"
	];
	var Vr, Kr, Wr = "ellipsis", Xr = "DEFAULT_TERMINATOR_KEY", qr = {
		ellipsis: (Vr = {
			fr: {
				terminator: "…",
				separator: " "
			},
			zh: {
				terminator: "……",
				separator: void 0
			},
			ja: {
				terminator: "……",
				separator: void 0
			}
		}, Vr[Xr] = {
			terminator: "…",
			separator: void 0
		}, Vr),
		none: (Kr = {}, Kr[Xr] = {
			terminator: void 0,
			separator: void 0
		}, Kr)
	}, Yr = function() {
		function e(e, t) {
			var r, n, o, i, a, s, c, l, u;
			void 0 === t && (t = {});
			try {
				var h = e ? Array.isArray(e) ? e.map(function(e) {
					return String(e);
				}) : [String(e)] : [Gr], f = Intl.getCanonicalLocales(h);
				this.locale = f.length ? f[0] : Gr;
			} catch (e) {
				this.locale = Gr;
			}
			if (!qr[null !== (r = t.style) && void 0 !== r ? r : Wr]) throw new Error(function(e) {
				return "generaltranslation Formatting Error: Invalid cutoff style: ".concat(e, ".");
			}(null !== (n = t.style) && void 0 !== n ? n : Wr));
			if (void 0 !== t.maxChars) {
				l = null !== (o = t.style) && void 0 !== o ? o : Wr;
				var p = new Intl.Locale(this.locale).language;
				u = qr[l][p] || qr[l][Xr];
			}
			var d = null !== (i = t.terminator) && void 0 !== i ? i : null == u ? void 0 : u.terminator, v = null != d ? null !== (a = t.separator) && void 0 !== a ? a : null == u ? void 0 : u.separator : void 0;
			this.additionLength = (null !== (s = null == d ? void 0 : d.length) && void 0 !== s ? s : 0) + (null !== (c = null == v ? void 0 : v.length) && void 0 !== c ? c : 0), void 0 !== t.maxChars && Math.abs(t.maxChars) < this.additionLength && (d = void 0, v = void 0), this.options = {
				maxChars: t.maxChars,
				style: l,
				terminator: d,
				separator: v
			};
		}
		return e.prototype.format = function(e) {
			return this.formatToParts(e).join("");
		}, e.prototype.formatToParts = function(e) {
			var t = this.options, r = t.maxChars, n = t.terminator, o = t.separator, i = void 0 === r || Math.abs(r) >= e.length ? r : r >= 0 ? Math.max(0, r - this.additionLength) : Math.min(0, r + this.additionLength), a = void 0 !== i && i > -1 ? e.slice(0, i) : e.slice(i);
			return null == r || null == i || 0 === i || null == n || e.length <= Math.abs(r) ? [a] : i > 0 ? null != o ? [
				a,
				o,
				n
			] : [a, n] : null != o ? [
				n,
				o,
				a
			] : [n, a];
		}, e.prototype.resolvedOptions = function() {
			return this.options;
		}, e;
	}(), Jr = {
		Collator: Intl.Collator,
		DateTimeFormat: Intl.DateTimeFormat,
		DisplayNames: Intl.DisplayNames,
		ListFormat: Intl.ListFormat,
		Locale: Intl.Locale,
		NumberFormat: Intl.NumberFormat,
		PluralRules: Intl.PluralRules,
		RelativeTimeFormat: Intl.RelativeTimeFormat,
		Segmenter: Intl.Segmenter,
		CutoffFormat: Yr
	}, Qr = new (function() {
		function e() {
			this.cache = {};
		}
		return e.prototype._generateKey = function(e, t) {
			void 0 === t && (t = {});
			var r = e ? Array.isArray(e) ? e.map(function(e) {
				return String(e);
			}).join(",") : String(e) : "undefined", n = t ? JSON.stringify(t, Object.keys(t).sort()) : "{}";
			return "".concat(r, ":").concat(n);
		}, e.prototype.get = function(e) {
			for (var t, r, n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
			var i = n[0], a = void 0 === i ? Gr : i, s = n[1], c = void 0 === s ? {} : s, l = this._generateKey(a, c), u = null === (r = this.cache[e]) || void 0 === r ? void 0 : r[l];
			return void 0 === u && (u = new ((t = Jr[e]).bind.apply(t, function(e, t, r) {
				if (2 === arguments.length) for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
				return e.concat(n || Array.prototype.slice.call(t));
			}([void 0], n, !1)))(), this.cache[e] || (this.cache[e] = {}), this.cache[e][l] = u), u;
		}, e;
	}())();
	function en(e) {
		var t = e;
		if (t && "object" == typeof t && "string" == typeof t.k) {
			var r = Object.keys(t);
			if (1 === r.length) return !0;
			if (2 === r.length) {
				if ("number" == typeof t.i) return !0;
				if ("string" == typeof t.v) return !0;
			}
			if (3 === r.length && "string" == typeof t.v && "number" == typeof t.i) return !0;
		}
		return !1;
	}
	var tn = {
		variable: "v",
		number: "n",
		datetime: "d",
		currency: "c",
		"relative-time": "rt"
	};
	function rn(e) {
		return tn[e];
	}
	function nn(e) {
		if ("undefined" != typeof Buffer) return Buffer.from(e, "base64").toString("utf8");
		for (var t = atob(e), r = new Uint8Array(t.length), n = 0; n < t.length; n++) r[n] = t.charCodeAt(n);
		return new TextDecoder().decode(r);
	}
	function on(e) {
		var t = e.icuString, r = e.shouldVisit, n = e.visitor, o = e.options, i = o.recurseIntoVisited, a = void 0 === i || i, c = function(e, t) {
			void 0 === t && (t = {}), t = u({
				shouldParseSkeletons: !0,
				requiresOtherClause: !0
			}, t);
			var r = new ke(e, t).parse();
			if (r.err) {
				var n = SyntaxError(z[r.err.kind]);
				throw n.location = r.err.location, n.originalMessage = r.err.message, n;
			}
			return null != t && t.captureLocation || Ne(r.val), r.val;
		}(t, function(e, t) {
			var r = {};
			for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
			if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
				var o = 0;
				for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
			}
			return r;
		}(o, ["recurseIntoVisited"]));
		return l(c), c;
		function l(e) {
			e.map(h);
		}
		function h(e) {
			var t = !1;
			r(e) && (n(e), t = !0), t && !a || (e.type === V.select || e.type === V.plural ? Object.values(e.options).map(function(e) {
				return e.value;
			}).map(l) : e.type === V.tag && l(e.children));
		}
	}
	var an = "_gt_", sn = new RegExp("^".concat(an, "\\d+$")), cn = new RegExp("^".concat(an, "$"));
	function ln(e) {
		var t;
		return e.type === Ve.TYPE.select && sn.test(e.value) && !!e.options.other && (0 === e.options.other.value.length || e.options.other.value.length > 0 && (null === (t = e.options.other.value[0]) || void 0 === t ? void 0 : t.type) === Ve.TYPE.literal);
	}
	function un(e) {
		var t;
		return e.type === Ve.TYPE.select && cn.test(e.value) && !!e.options.other && (0 === e.options.other.value.length || e.options.other.value.length > 0 && (null === (t = e.options.other.value[0]) || void 0 === t ? void 0 : t.type) === Ve.TYPE.literal);
	}
	function hn(e) {
		var t = e.replace(/['\']/g, "''"), r = /[{}<>]/, n = t.search(r);
		if (-1 === n) return t;
		for (var o = -1, i = t.length - 1; i >= 0; i--) if (r.test(t[i])) {
			o = i;
			break;
		}
		return t.slice(0, n) + "'" + t.slice(n, o + 1) + "'" + t.slice(o + 1);
	}
	function fn(e) {
		return e;
	}
	var pn = fn;
	function dn(e) {
		if (!e.includes(an)) return e;
		var t = [];
		on({
			icuString: e,
			shouldVisit: un,
			visitor: function(e) {
				var r, n, o, i, a, s, c, l;
				t.push({
					start: null !== (n = null === (r = e.location) || void 0 === r ? void 0 : r.start.offset) && void 0 !== n ? n : 0,
					end: null !== (i = null === (o = e.location) || void 0 === o ? void 0 : o.end.offset) && void 0 !== i ? i : 0,
					otherStart: null !== (s = null === (a = e.options.other.location) || void 0 === a ? void 0 : a.start.offset) && void 0 !== s ? s : 0,
					otherEnd: null !== (l = null === (c = e.options.other.location) || void 0 === c ? void 0 : c.end.offset) && void 0 !== l ? l : 0
				});
			},
			options: {
				recurseIntoVisited: !1,
				captureLocation: !0
			}
		});
		for (var r = [], n = 0, o = 0; o < t.length; o++) {
			var i = t[o], a = i.start, s = i.end, c = i.otherStart, l = i.otherEnd;
			r.push(e.slice(n, a)), r.push(e.slice(a, a + 4 + 1)), r.push(String(o + 1)), r.push(e.slice(a + 4 + 1, c)), r.push("{}"), r.push(e.slice(l, s)), n = s;
		}
		return r.push(e.slice(n, e.length)), r.join("");
	}
	function vn(e) {
		if (!e.includes(an)) return {};
		var t = 1, r = {};
		return on({
			icuString: e,
			shouldVisit: un,
			visitor: function(e) {
				var n;
				r[e.value + t] = e.options.other.value.length ? null === (n = e.options.other.value[0]) || void 0 === n ? void 0 : n.value : "", t += 1;
			},
			options: { recurseIntoVisited: !1 }
		}), r;
	}
	function yn(e) {
		if (!e.includes(an)) return e;
		var t = on({
			icuString: e,
			shouldVisit: ln,
			visitor: function(e) {
				e.type = Ve.TYPE.argument, delete e.options;
			},
			options: { recurseIntoVisited: !1 }
		});
		return Ye.printAST(t);
	}
	function gn(e) {
		return "object" == typeof e && !!e && "data-_gt" in e && "object" == typeof e["data-_gt"] && !!e["data-_gt"] && "transformation" in e["data-_gt"] && "variable" === e["data-_gt"]?.transformation;
	}
	function mn(e) {
		const t = e["data-_gt"]?.variableType || "variable";
		return {
			variableName: s(e, t),
			variableType: rn(t),
			injectionType: e["data-_gt"]?.injectionType || "manual",
			variableValue: void 0 !== e.value ? e.value : void 0 !== e.date ? e.date : void 0 !== e["data-_gt-unformatted-value"] ? e["data-_gt-unformatted-value"] : void 0 !== e.children ? e.children : void 0,
			variableOptions: (() => {
				const t = {
					...void 0 !== e.currency && { currency: e.currency },
					...void 0 !== e.unit && { unit: e.unit },
					...void 0 !== e.baseDate && { baseDate: e.baseDate },
					...void 0 !== e.options && e.options
				};
				return Object.keys(t).length ? t : "string" == typeof e["data-_gt-variable-options"] ? JSON.parse(e["data-_gt-variable-options"]) : e["data-_gt-variable-options"] || void 0;
			})()
		};
	}
	function _n(e, t, r) {
		let n = "", o = null;
		return "number" == typeof e && !o && r && (n = function(e, t, r) {
			void 0 === t && (t = zr), void 0 === r && (r = [Gr]);
			var n = Qr.get("PluralRules", r).select(e), o = Math.abs(e);
			if (0 === o && t.includes("zero")) return "zero";
			if (1 === o) {
				if (t.includes("singular")) return "singular";
				if (t.includes("one")) return "one";
			}
			if ("one" === n && t.includes("singular")) return "singular";
			if (2 === o) {
				if (t.includes("dual")) return "dual";
				if (t.includes("two")) return "two";
			}
			return "two" === n && t.includes("dual") ? "dual" : t.includes(n) ? n : "two" === n && t.includes("dual") ? "dual" : "two" === n && t.includes("plural") ? "plural" : "two" === n && t.includes("other") ? "other" : "few" === n && t.includes("plural") ? "plural" : "few" === n && t.includes("other") ? "other" : "many" === n && t.includes("plural") ? "plural" : "many" === n && t.includes("other") ? "other" : "other" === n && t.includes("plural") ? "plural" : "";
		}(e, Object.keys(r), t)), n && !o && (o = r[n]), o;
	}
	function bn(e) {
		return e && e.props && e.props["data-_gt"] ? e.props["data-_gt"] : null;
	}
	function En({ children: e, defaultLocale: r = Gr, renderVariable: n }) {
		const o = (e) => t$1.isValidElement(e) ? ((e) => {
			const o = bn(e);
			if (gn(e.props)) {
				const { variableType: t, variableValue: o, variableOptions: i, injectionType: a } = mn(e.props);
				return n({
					variableType: t,
					variableValue: o,
					variableOptions: i,
					locales: [r],
					injectionType: a
				});
			}
			if ("plural" === o?.transformation) {
				const t = o.branches || {};
				return i(_n(e.props.n, [r], t) || e.props.children);
			}
			if ("branch" === o?.transformation) {
				let { children: t, branch: r, "data-_gt": n, ...a } = e.props;
				return a = o.branches || {}, i(void 0 !== a[r] ? a[r] : t);
			}
			return "fragment" === o?.transformation ? t$1.createElement(t$1.Fragment, {
				key: e.props.key,
				children: i(e.props.children)
			}) : e.props.children ? t$1.cloneElement(e, {
				...e.props,
				"data-_gt": void 0,
				children: i(e.props.children)
			}) : t$1.cloneElement(e, {
				...e.props,
				"data-_gt": void 0
			});
		})(e) : e, i = (e) => Array.isArray(e) ? t$1.Children.map(e, o) : o(e);
		return i(e);
	}
	function wn(e, t) {
		if (null == e) throw new Error("Cannot index into an undefined dictionary");
		return e[t];
	}
	function xn(e, t, r) {
		e[t] = r;
	}
	function Tn(e, r = 0) {
		let n = r;
		const o = (e) => {
			const { type: t, props: r } = e;
			n += 1;
			const o = {
				id: n,
				injectionType: "manual"
			};
			let i;
			try {
				i = "function" == typeof t && t._gtt || "";
			} catch {}
			if (i) {
				const e = i.split("-");
				if ("automatic" !== e[1] && "automatic" !== e[2] || (o.injectionType = "automatic"), "translate" === e[0] && (e[0] = "fragment"), "variable" === e[0] && (o.variableType = e?.[1] || "variable"), "plural" === e[0]) {
					const e = Object.entries(r).reduce((e, [t, r]) => (function(e) {
						return zr.includes(e);
					}(t) && (e[t] = Tn(r, n)), e), {});
					Object.keys(e).length && (o.branches = e);
				}
				if ("branch" === e[0]) {
					const { children: e, branch: t, ...i } = r, a = Object.fromEntries(Object.entries(i).filter(([e]) => !e.startsWith("data-"))), s = Object.entries(a).reduce((e, [t, r]) => (e[t] = Tn(r, n), e), {});
					Object.keys(s).length && (o.branches = s);
				}
				o.transformation = e[0];
			}
			return o;
		};
		function i(e) {
			return t$1.isValidElement(e) ? function(e) {
				const { props: r } = e, n = o(e), i = {
					...r,
					"data-_gt": n
				};
				return r.children && !n.variableType && (i.children = a(r.children)), e.type === t$1.Fragment && (i["data-_gt"].transformation = "fragment"), t$1.cloneElement(e, i);
			}(e) : e;
		}
		function a(e) {
			return Array.isArray(e) ? t$1.Children.map(e, i) : i(e);
		}
		return a(e);
	}
	var Bn = "@generaltranslation/react-core", Sn = `${Bn} Error: Production environments cannot include an api key.`, An = `${Bn} Error: Fetching batched translations failed`, Cn = (e, t) => e ? `${Bn} Error: Translation failed for id: ${e}, hash: ${t} ` : `${Bn} Error: Translation failed for hash: ${t}`, Hn = (e, t) => `${Bn} Error: error rendering string ${t ? `for id: "${t}"` : ""} original message: "${e}"`, Pn = (e, t, r = "tx") => `${Bn} Error: string translation error. ${r}("${e}")${t ? ` with id "${t}"` : ""} could not locate translation.`, On = (e) => `${Bn} Error: Dictionary subtree not found for id: "${e}"`, kn = (e) => `${Bn} Error: Invalid ICU string dictionary entry found for id: "${e}"`, Ln = `${Bn} Warning: Translation cloud services require a project ID! Find yours at generaltranslation.com/dashboard.`, Rn = (e) => `${Bn} Warning: No valid dictionary entry found for id: "${e}"`, In = `${Bn} Warning: A development API key is required for runtime translation!  Find your development API key: generaltranslation.com/dashboard.  (Or, disable this warning message by setting runtimeUrl to an empty string which disables runtime translation.)`, Mn = `${Bn} Warning: Runtime translation timed out.`, Nn = `${Bn} Warning: No dictionary was found. Ensure you are either passing your dictionary to the <GTProvider>.`;
	function jn(e) {
		return /* @__PURE__ */ new Error(`${Bn}: The ${e} function was not overridden. This is likely the result of importing directly from "generaltranslation/react-core".`);
	}
	function Dn({}) {
		throw jn("readAuthFromEnv");
	}
	var $n = {
		pl: "placeholder",
		ti: "title",
		alt: "alt",
		arl: "aria-label",
		arb: "aria-labelledby",
		ard: "aria-describedby"
	};
	var Fn = (e) => {
		if (!e) return "";
		const { type: t, props: r } = e;
		if (t && "function" == typeof t) {
			if ("displayName" in t && "string" == typeof t.displayName && t.displayName) return t.displayName;
			if ("name" in t && "string" == typeof t.name && t.name) return t.name;
		}
		return t && "string" == typeof t ? t : r.href ? "a" : r["data-_gt"]?.id ? `C${r["data-_gt"].id}` : "function";
	}, Un = (e) => {
		const { props: t } = e, r = { t: Fn(e) };
		if (t["data-_gt"]) {
			const e = t["data-_gt"], n = e.transformation;
			if ("variable" === n) {
				const r = e.variableType || "variable", n = s(t, r), o = rn(r);
				return {
					i: e.id,
					k: n,
					v: o
				};
			}
			r.i = e.id, r.d = ((e, t, r) => {
				let n = Object.entries($n).reduce((e, [r, n]) => (t[n] && (e[r] = t[n]), e), {});
				if ("plural" === e && r) {
					const e = {};
					Object.entries(r).forEach(([t, r]) => {
						e[t] = zn(r);
					}), n = {
						...n,
						b: e,
						t: "p"
					};
				}
				if ("branch" === e && r) {
					const e = {};
					Object.entries(r).forEach(([t, r]) => {
						e[t] = zn(r);
					}), n = {
						...n,
						b: e,
						t: "b"
					};
				}
				return Object.keys(n).length ? n : void 0;
			})(n, t, e.branches);
			let o = Object.entries($n).reduce((e, [r, n]) => (t[n] && (e[r] = t[n]), e), {});
			if ("plural" === n && e.branches) {
				const t = {};
				Object.entries(e.branches).forEach(([e, r]) => {
					t[e] = zn(r);
				}), o = {
					...o,
					b: t,
					t: "p"
				};
			}
			if ("branch" === n && e.branches) {
				const t = {};
				Object.entries(e.branches).forEach(([e, r]) => {
					t[e] = zn(r);
				}), o = {
					...o,
					b: t,
					t: "b"
				};
			}
			r.d = Object.keys(o).length ? o : void 0;
		}
		return t.children && (r.c = zn(t.children)), r;
	}, Gn = (e) => {
		return r = e, t$1.isValidElement(r) ? Un(e) : "number" == typeof e ? e.toString() : e;
		var r;
	};
	function zn(e) {
		return Array.isArray(e) ? e.map(Gn) : Gn(e);
	}
	function Vn(e) {
		if ("string" == typeof e) return !0;
		if (Array.isArray(e)) {
			if ("string" != typeof e?.[0]) return !1;
			const t = e?.[1];
			if (void 0 === t) return !0;
			if (t && "object" == typeof t) return !0;
		}
		return !1;
	}
	function Kn(e, t) {
		let r = e;
		const n = t.split(".");
		for (const e of n) {
			if ("object" != typeof r && !Array.isArray(r)) return;
			r = wn(r, e);
		}
		return r;
	}
	function Wn(e) {
		if (Array.isArray(e)) {
			if (1 === e.length) return { entry: e[0] };
			if (2 === e.length) return {
				entry: e[0],
				metadata: e[1]
			};
		}
		return { entry: e };
	}
	function Xn({ sourceElement: e, targetElement: r, locales: n = [Gr], renderVariable: o }) {
		const { props: i } = e, a = i["data-_gt"], s = a?.transformation, c = r.d, l = {};
		if (c && Object.entries($n).forEach(([e, t]) => {
			c[e] && (l[t] = c[e]);
		}), "plural" === s) {
			const t = e.props.n;
			return qn({
				source: _n(t, n, a.branches || {}) || e.props.children,
				target: _n(t, n, r.d?.b || {}) || r.c,
				locales: n,
				renderVariable: o
			});
		}
		if ("branch" === s) {
			const { branch: e, children: t } = i;
			return qn({
				source: (a.branches || {})[e] || t,
				target: (r.d?.b || {})[e] || r.c,
				locales: n,
				renderVariable: o
			});
		}
		return "fragment" === s && r.c ? t$1.createElement(t$1.Fragment, {
			key: e.props.key,
			children: qn({
				source: i.children,
				target: r.c,
				locales: n,
				renderVariable: o
			})
		}) : i?.children && r?.c ? t$1.cloneElement(e, {
			...i,
			...l,
			"data-_gt": void 0,
			children: qn({
				source: i.children,
				target: r.c,
				locales: n,
				renderVariable: o
			})
		}) : En({
			children: e,
			defaultLocale: n[0],
			renderVariable: o
		});
	}
	function qn({ source: r, target: n, locales: o = [Gr], renderVariable: i }) {
		if (null == n && r) return En({
			children: r,
			defaultLocale: o[0],
			renderVariable: i
		});
		if ("string" == typeof n) return n;
		if (Array.isArray(n) && !Array.isArray(r) && r && (r = [r]), Array.isArray(r) && Array.isArray(n)) {
			const a = {}, s = {}, c = {}, l = r.filter((e) => {
				if (t$1.isValidElement(e)) {
					if (!gn(e.props)) return !0;
					{
						const { variableName: t, variableValue: r, variableOptions: n, injectionType: o } = mn(e.props);
						a[t] = r, s[t] = n, c[t] = o;
					}
				}
				return !1;
			}), u = (e) => l.find((t) => {
				const r = bn(t);
				if (void 0 !== r?.id) return r.id === e.i;
				return !1;
			}) || l.shift();
			return n.map((r, n) => {
				if ("string" == typeof r) return e$1.jsx(t$1.Fragment, { children: r }, `string_${n}`);
				if (en(r)) return e$1.jsx(t$1.Fragment, { children: i({
					variableType: r.v || "v",
					variableValue: a[r.k],
					variableOptions: s[r.k],
					locales: o,
					injectionType: c[r.k] || "manual"
				}) }, `var_${n}`);
				const l = u(r);
				return l ? e$1.jsx(t$1.Fragment, { children: Xn({
					sourceElement: l,
					targetElement: r,
					locales: o,
					renderVariable: i
				}) }, `element_${n}`) : null;
			});
		}
		if (n && "object" == typeof n && !Array.isArray(n)) {
			const e = en(n) ? "variable" : "element";
			if (t$1.isValidElement(r)) {
				if ("element" === e) return Xn({
					sourceElement: r,
					targetElement: n,
					locales: o,
					renderVariable: i
				});
				if (gn(r.props)) {
					const { variableValue: e, variableOptions: t, variableType: n, injectionType: a } = mn(r.props);
					return i({
						variableType: n,
						variableValue: e,
						variableOptions: t,
						locales: o,
						injectionType: a
					});
				}
			}
		}
		return En({
			children: r,
			defaultLocale: o[0],
			renderVariable: i
		});
	}
	var Yn = (e = "production") => ({
		method: "default",
		timeout: "development" === e ? 8e3 : 12e3
	});
	function Jn(e) {
		return void 0 !== e && ("string" == typeof e || !!Array.isArray(e) && (1 === e.length || 2 === e.length) && "string" == typeof e[0] && (2 !== e.length || "object" == typeof e[1] && null !== e[1] && ("$context" in e[1] || "$maxChars" in e[1] || "$_hash" in e[1])));
	}
	var Zn = (e) => "string" == typeof e || Array.isArray(e), Qn = (e) => "object" == typeof e && null !== e && !Array.isArray(e);
	function eo(e, t) {
		if (Array.isArray(e)) return e.map((e, r) => Jn(e) ? t[r] : eo(e, t[r]));
		const r = {
			...Object.fromEntries(Object.entries(e).filter(([, e]) => Zn(e))),
			...Object.fromEntries(Object.entries(t).filter(([, e]) => Zn(e)))
		}, n = Object.entries(e).filter(([, e]) => Qn(e)).map(([e]) => e), o = Object.entries(t).filter(([, e]) => Qn(e)).map(([e]) => e), i = new Set([...n, ...o]);
		for (const n of i) r[n] = eo(wn(e, n) || {}, wn(t, n) || {});
		return r;
	}
	function to({ dictionary: e, id: t }) {
		if ("" === t) return e;
		let r = e;
		const n = t.split(".");
		for (const e of n) r = wn(r, e);
		return r;
	}
	var ro = [
		"constructor",
		"prototype",
		"__proto__"
	];
	function no(e, t, r, n) {
		if (Jn(t)) return e;
		const o = r.split(".");
		o.forEach((e) => {
			if (function(e) {
				return !!ro.includes(e);
			}(e)) throw new Error(`Invalid key: ${e}`);
		}), t ||= {};
		for (const e of o.slice(0, -1)) wn(t, e) ?? xn(t, e, Array.isArray(wn(n, e)) ? [] : {}), t = wn(t, e), n = wn(n, e);
		xn(t, o[o.length - 1], e);
	}
	function oo(e) {
		let t = {};
		return Array.isArray(e) && (t = []), Object.entries(e).forEach(([e, r]) => {
			if (Jn(r)) {
				const { entry: n } = Wn(r);
				xn(t, e, n);
			} else xn(t, e, oo(r));
		}), t;
	}
	var io = function() {
		return io = Object.assign || function(e) {
			for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
			return e;
		}, io.apply(this, arguments);
	};
	function ao(e) {
		return $r.SHA256(e).toString($r.enc.Hex).slice(0, 16);
	}
	function so(e, t) {
		var r, n = e.source, o = e.context, i = e.id, a = e.maxChars, s = e.dataFormat;
		void 0 === t && (t = ao), r = "JSX" === s ? lo(n) : n;
		var c = io(io(io(io({ source: r }, i && { id: i }), o && { context: o }), null != a && { maxChars: Math.abs(a) }), s && { dataFormat: s });
		return t(Ze(c));
	}
	var co = function(e) {
		if (e && "object" == typeof e) {
			var t = {};
			if ("c" in e && e.c && (t.c = lo(e.c)), "d" in e) {
				var r = null == e ? void 0 : e.d;
				null != r && r.b && (t.b = Object.fromEntries(Object.entries(r.b).map(function(e) {
					return [e[0], lo(e[1])];
				}))), null != r && r.t && (t.t = r.t);
			}
			return function(e) {
				var t = e;
				if (t && "object" == typeof t && "string" == typeof t.k) {
					var r = Object.keys(t);
					if (1 === r.length) return !0;
					if (2 === r.length) {
						if ("number" == typeof t.i) return !0;
						if ("string" == typeof t.v) return !0;
					}
					if (3 === r.length && "string" == typeof t.v && "number" == typeof t.i) return !0;
				}
				return !1;
			}(e) ? io({ k: e.k }, e.v && { v: e.v }) : t;
		}
		return e;
	};
	function lo(e) {
		return Array.isArray(e) ? e.map(co) : co(e);
	}
	function uo(e, t = "") {
		let r = !1;
		return Object.entries(e).forEach(([n, o]) => {
			const i = t ? `${t}.${n}` : n;
			if (Jn(o)) {
				let { entry: t, metadata: a } = Wn(o);
				a?.$_hash || (a ||= {}, a.$_hash = so({
					source: dn(t),
					...a?.$context && { context: a.$context },
					...null != a?.$maxChars && { maxChars: Math.abs(a.$maxChars) },
					id: i,
					dataFormat: "ICU"
				}), xn(e, n, [t, a]), r = !0);
			} else {
				const { updateDictionary: e } = uo(o, i);
				r = r || e;
			}
		}), {
			dictionary: e,
			updateDictionary: r
		};
	}
	function ho(e, t, r) {
		const n = to({
			dictionary: e,
			id: r
		});
		if (!n) throw new Error(On(r));
		if (Jn(n)) throw new Error(`${Bn} Error: Cannot inject and merge a dictionary entry`);
		return function(e, t, r) {
			const n = Kn(e, r);
			if (!n) throw new Error(On(r));
			if (Jn(n)) throw new Error(`${Bn} Error: Cannot inject and merge a dictionary entry`);
			const o = r.split("."), i = o.slice(0, -1), a = o[o.length - 1];
			let s = e;
			return i.forEach((e) => {
				s = wn(s, e);
			}), xn(s, a, t), e;
		}(e, eo(n, t), r);
	}
	function fo(e, t, r = "") {
		const n = [];
		return Object.entries(e).forEach(([e, o]) => {
			const i = r ? `${r}.${e}` : e;
			if (Jn(o)) {
				const { entry: r, metadata: a } = Wn(o);
				wn(t, e) || n.push({
					source: r,
					metadata: {
						$id: i,
						$context: a?.$context,
						$maxChars: a?.$maxChars,
						$_hash: a?.$_hash || ""
					}
				});
			} else n.push(...fo(o, wn(t, e) || (Array.isArray(o) ? [] : {}), i));
		}), n;
	}
	var po = function(e, t) {
		return po = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
		}, po(e, t);
	};
	function vo(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
		function r() {
			this.constructor = e;
		}
		po(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
	}
	var yo = function() {
		return yo = Object.assign || function(e) {
			for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
			return e;
		}, yo.apply(this, arguments);
	};
	function go(e, t, r, n) {
		return new (r || (r = Promise))(function(t, o) {
			function i(e) {
				try {
					s(n.next(e));
				} catch (e) {
					o(e);
				}
			}
			function a(e) {
				try {
					s(n.throw(e));
				} catch (e) {
					o(e);
				}
			}
			function s(e) {
				var n;
				e.done ? t(e.value) : (n = e.value, n instanceof r ? n : new r(function(e) {
					e(n);
				})).then(i, a);
			}
			s((n = n.apply(e, [])).next());
		});
	}
	function mo(e, t) {
		var r, n, o, i = {
			label: 0,
			sent: function() {
				if (1 & o[0]) throw o[1];
				return o[1];
			},
			trys: [],
			ops: []
		}, a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
		return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
			return this;
		}), a;
		function s(s) {
			return function(c) {
				return function(s) {
					if (r) throw new TypeError("Generator is already executing.");
					for (; a && (a = 0, s[0] && (i = 0)), i;) try {
						if (r = 1, n && (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done) return o;
						switch (n = 0, o && (s = [2 & s[0], o.value]), s[0]) {
							case 0:
							case 1:
								o = s;
								break;
							case 4: return i.label++, {
								value: s[1],
								done: !1
							};
							case 5:
								i.label++, n = s[1], s = [0];
								continue;
							case 7:
								s = i.ops.pop(), i.trys.pop();
								continue;
							default:
								if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
									i = 0;
									continue;
								}
								if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
									i.label = s[1];
									break;
								}
								if (6 === s[0] && i.label < o[1]) {
									i.label = o[1], o = s;
									break;
								}
								if (o && i.label < o[2]) {
									i.label = o[2], i.ops.push(s);
									break;
								}
								o[2] && i.ops.pop(), i.trys.pop();
								continue;
						}
						s = t.call(e, i);
					} catch (e) {
						s = [6, e], n = 0;
					} finally {
						r = o = 0;
					}
					if (5 & s[0]) throw s[1];
					return {
						value: s[0] ? s[1] : void 0,
						done: !0
					};
				}([s, c]);
			};
		}
	}
	var _o, bo;
	(function(e) {
		e.GT_REMOTE = "gt-remote", e.REMOTE = "remote", e.CUSTOM = "custom", e.DISABLED = "disabled";
	})(_o || (_o = {})), function(e) {
		e.GT = "gt", e.CUSTOM = "custom", e.DISABLED = "disabled";
	}(bo || (bo = {})), function(e) {
		function t() {
			var t = null !== e && e.apply(this, arguments) || this;
			return t.type = "fallback-storage-adapter", t.storage = {}, t;
		}
		vo(t, e), t.prototype.getItem = function(e) {
			return this.storage[e];
		}, t.prototype.setItem = function(e, t) {
			this.storage[e] = t;
		}, t.prototype.removeItem = function(e) {
			delete this.storage[e];
		};
	}(function() {});
	var Eo = function() {
		function e(e) {
			this.cache = {}, this.fallbackPromises = {}, this.cache = structuredClone(e);
		}
		return e.prototype.setCache = function(e, t) {
			this.cache[e] = t;
		}, e.prototype.getCache = function(e) {
			var t = this.genKey(e);
			return this.cache[t];
		}, e.prototype.getInternalCache = function() {
			return this.cache;
		}, e.prototype.missCache = function(e) {
			return go(this, 0, void 0, function() {
				var t, r, n;
				return mo(this, function(o) {
					switch (o.label) {
						case 0: return t = this.genKey(e), void 0 === this.fallbackPromises[t] ? [3, 2] : [4, this.fallbackPromises[t]];
						case 1: return [2, o.sent()];
						case 2: r = this.fallback(e), this.fallbackPromises[t] = r, o.label = 3;
						case 3: return o.trys.push([
							3,
							,
							5,
							6
						]), [4, r];
						case 4: return n = o.sent(), this.cache[t] = n, [2, n];
						case 5: return delete this.fallbackPromises[t], [7];
						case 6: return [2];
					}
				});
			});
		}, e;
	}();
	function wo(e, t) {
		return so(yo(yo(yo(yo({ source: "ICU" === t.$format ? dn(e) : e }, (null == t ? void 0 : t.$context) && { context: t.$context }), (null == t ? void 0 : t.$id) && { id: t.$id }), "$maxChars" in t && null != t.$maxChars && { $maxChars: Math.abs(t.$maxChars) }), { dataFormat: t.$format }));
	}
	var xo = function(e) {
		function t(t) {
			var r = t.init, n = t.translateMany, o = e.call(this, r) || this;
			return o._queue = [], o._batchTimer = null, o._activeRequests = 0, o._translateMany = n, o;
		}
		return vo(t, e), t.prototype.get = function(e) {
			return this.getCache(e);
		}, t.prototype.miss = function(e) {
			return this.missCache(e);
		}, t.prototype.genKey = function(e) {
			return wo(e.message, e.options);
		}, t.prototype.fallback = function(e) {
			var t = this._enqueueTranslation(e);
			return this._queue.length >= 25 ? this._flushNow() : this._scheduleBatch(), t;
		}, t.prototype._flushNow = function() {
			this._batchTimer && (clearTimeout(this._batchTimer), this._batchTimer = null), this._drainQueue();
		}, t.prototype._scheduleBatch = function() {
			var e = this;
			this._batchTimer || (this._batchTimer = setTimeout(function() {
				e._batchTimer = null, e._drainQueue();
			}, 50));
		}, t.prototype._drainQueue = function() {
			for (; this._queue.length > 0 && this._activeRequests < 100;) {
				var e = this._queue.splice(0, 25);
				this._sendBatchRequest(e);
			}
			this._queue.length > 0 && this._scheduleBatch();
		}, t.prototype._enqueueTranslation = function(e) {
			var t = this, r = this.genKey(e), n = e.options;
			return new Promise(function(o, i) {
				t._queue.push({
					key: r,
					source: e.message,
					metadata: yo(yo(yo(yo({}, (null == n ? void 0 : n.$context) && { context: n.$context }), (null == n ? void 0 : n.$id) && { id: n.$id }), "$maxChars" in n && null != n.$maxChars && { $maxChars: Math.abs(n.$maxChars) }), { dataFormat: n.$format }),
					resolve: function(e) {
						return o(e);
					},
					reject: i
				});
			});
		}, t.prototype._sendBatchRequest = function(e) {
			return go(this, 0, void 0, function() {
				var t, r;
				return mo(this, function(n) {
					switch (n.label) {
						case 0: return this._activeRequests++, t = function(e) {
							return e.reduce(function(e, t) {
								return e[t.key] = {
									source: t.source,
									metadata: t.metadata
								}, e;
							}, {});
						}(e), [4, this._sendBatchRequestWithErrorHandling(e, t)];
						case 1: return (r = n.sent()) && this._handleTranslationResponse(e, r), this._activeRequests--, [2];
					}
				});
			});
		}, t.prototype._sendBatchRequestWithErrorHandling = function(e, t) {
			return go(this, 0, void 0, function() {
				var r, n, o;
				return mo(this, function(i) {
					switch (i.label) {
						case 0: return i.trys.push([
							0,
							2,
							,
							3
						]), [4, this._translateMany(t)];
						case 1: return [2, i.sent()];
						case 2:
							for (r = i.sent(), n = 0, o = e; n < o.length; n++) o[n].reject(r);
							return [2, void 0];
						case 3: return [2];
					}
				});
			});
		}, t.prototype._handleTranslationResponse = function(e, t) {
			for (var r = 0, n = e; r < n.length; r++) {
				var o = n[r], i = o.key, a = t[i];
				if (a && a.success) {
					var s = a.translation;
					this.setCache(i, s), o.resolve(s);
				} else o.reject(null == a ? void 0 : a.error);
			}
		}, t;
	}(Eo);
	(function(e) {
		function t(t) {
			var r = t.init, n = void 0 === r ? {} : r, o = t.ttl, i = t.loadTranslations, a = t.createTranslateMany, s = e.call(this, n) || this;
			return s.ttl = 6e4, s.ttl = null === o ? -1 : null != o ? o : 6e4, s._translationLoader = i, s._createTranslateMany = a, s;
		}
		vo(t, e), t.prototype.get = function(e) {
			var t = this.getCache(e);
			if (t && !(t.expiresAt > 0 && t.expiresAt < Date.now())) return t.translationsCache;
		}, t.prototype.miss = function(e) {
			return go(this, 0, void 0, function() {
				return mo(this, function(t) {
					switch (t.label) {
						case 0: return [4, this.missCache(e)];
						case 1: return [2, t.sent().translationsCache];
					}
				});
			});
		}, t.prototype.genKey = function(e) {
			return e;
		}, t.prototype.fallback = function(e) {
			return go(this, 0, void 0, function() {
				var t, r, n, o;
				return mo(this, function(i) {
					switch (i.label) {
						case 0: return t = this._translationLoader(e), r = this.ttl < 0 ? this.ttl : Date.now() + this.ttl, n = xo.bind, o = {}, [4, t];
						case 1: return [2, {
							translationsCache: new (n.apply(xo, [void 0, (o.init = i.sent(), o.translateMany = this._createTranslateMany(e), o)]))(),
							expiresAt: r
						}];
					}
				});
			});
		};
	})(Eo);
	function To(e) {
		return "string" == typeof e && -1 !== e.lastIndexOf(":") ? e.slice(0, e.lastIndexOf(":")) : e;
	}
	function Bo(e) {
		if (-1 === e.lastIndexOf(":")) return null;
		var t = e.slice(e.lastIndexOf(":") + 1);
		try {
			return JSON.parse(nn(t));
		} catch (e) {
			return null;
		}
	}
	function So({ children: e }) {
		return e;
	}
	function Ao(e) {
		return So(e);
	}
	So._gtt = "derive", Ao._gtt = "derive";
	var Co = t$1.createContext(void 0);
	function Ho(e = "useGTContext() must be used within a <GTProvider>!") {
		const r = t$1.useContext(Co);
		if (void 0 === r) throw new Error(e);
		return r;
	}
	function Po({ children: n, locales: o, options: i = {} }) {
		const a = t$1.useContext(Co);
		if (null == n) return null;
		const s = a?.gt || new r$1.GT();
		let c = "string" == typeof n ? parseFloat(n) : n;
		return "number" == typeof c && (o || (o ||= [], a?.locale && o.push(a.locale), a?.defaultLocale && o.push(a.defaultLocale)), c = s.formatNum(c, {
			locales: o,
			...i
		})), e$1.jsx(e$1.Fragment, { children: c });
	}
	function Oo({ children: t }) {
		return e$1.jsx(e$1.Fragment, { children: t });
	}
	function ko({ children: n, currency: o = "USD", locales: i, options: a = {} }) {
		const s = t$1.useContext(Co);
		if (null == n) return null;
		const c = s?.gt || new r$1.GT();
		let l = "string" == typeof n ? parseFloat(n) : n;
		return "number" == typeof l && (i || (i ||= [], s?.locale && i.push(s.locale), s?.defaultLocale && i.push(s.defaultLocale)), l = c.formatCurrency(l, o, {
			locales: i,
			...a
		})), e$1.jsx(e$1.Fragment, { children: l });
	}
	function Lo({ children: n, locales: o, options: i = {} }) {
		const a = t$1.useContext(Co);
		if (null == n) return null;
		const s = a?.gt || new r$1.GT();
		o || (o = [], a?.locale && o.push(a.locale), a?.defaultLocale && o.push(a.defaultLocale));
		const c = s.formatDateTime(n, {
			locales: o,
			...i
		}).replace(/[\u200F\u202B\u202E]/g, "");
		return e$1.jsx(e$1.Fragment, { children: c });
	}
	function Ro({ date: n, children: o, value: i, unit: a, baseDate: s, locales: c, options: l = {} }) {
		const u = t$1.useContext(Co), h = u?.gt || new r$1.GT();
		c || (c = [], u?.locale && c.push(u.locale), u?.defaultLocale && c.push(u.defaultLocale));
		const f = n ?? o;
		let p;
		if ("development" !== process.env.NODE_ENV || void 0 === i || a || console.warn("<RelativeTime>: `value` was provided without `unit`. The `value` prop will be ignored."), void 0 !== i && a) p = h.formatRelativeTime(i, a, {
			locales: c,
			numeric: l.numeric,
			style: l.style,
			localeMatcher: l.localeMatcher
		});
		else {
			if (null == f) return null;
			p = h.formatRelativeTimeFromDate(f, {
				locales: c,
				baseDate: s ?? /* @__PURE__ */ new Date(),
				numeric: l.numeric,
				style: l.style,
				localeMatcher: l.localeMatcher
			});
		}
		return e$1.jsx(e$1.Fragment, { children: p });
	}
	Po._gtt = "variable-number", Oo._gtt = "variable-variable", ko._gtt = "variable-currency", Lo._gtt = "variable-datetime", Ro._gtt = "variable-relative-time";
	var Io = ({ variableType: t, variableValue: r, variableOptions: n }) => {
		if ("n" === t) {
			const t = n;
			return e$1.jsx(Po, {
				options: t,
				children: r
			});
		}
		if ("d" === t) {
			const t = n;
			return e$1.jsx(Lo, {
				options: t,
				children: r
			});
		}
		if ("c" === t) {
			const t = n;
			return e$1.jsx(ko, {
				options: t,
				children: r
			});
		}
		if ("rt" === t) {
			const t = n;
			if ("number" == typeof r && t?.unit) return e$1.jsx(Ro, {
				value: r,
				unit: t.unit,
				baseDate: t?.baseDate,
				options: t
			});
			const o = r instanceof Date ? r : "string" == typeof r || "number" == typeof r ? new Date(r) : void 0;
			return e$1.jsx(Ro, {
				date: o && !isNaN(o.getTime()) ? o : void 0,
				baseDate: t?.baseDate,
				options: t
			});
		}
		return e$1.jsx(Oo, { children: r });
	};
	var Mo = function() {
		return Mo = Object.assign || function(e) {
			for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
			return e;
		}, Mo.apply(this, arguments);
	};
	var No = function(e) {
		console.warn(e);
	}, jo = function(e) {
		return "String interpolation failed for message: \"".concat(e, "\".");
	};
	function Do(e, t) {
		var n, o;
		if (!e) return e;
		var i = t.$_fallback, a = function(e) {
			return Object.fromEntries(Object.entries(e).filter(function(e) {
				var t = e[0];
				return "$id" !== t && "$context" !== t && "$maxChars" !== t && "$hash" !== t && "$_hash" !== t && "$_source" !== t && "$_fallback" !== t && "$format" !== t && "$_locales" !== t && "$locale" !== t;
			}));
		}(t);
		try {
			var s = vn(i || ""), c = function(e, t, n, o) {
				try {
					return r$1.formatMessage(e, {
						variables: t,
						locales: n,
						dataFormat: o
					});
				} catch (t) {
					return No(jo(e)), e;
				}
			}(Object.keys(s).length ? yn(e) : e, Mo(Mo(Mo({}, a), s), ((n = {})[an] = "other", n)), null !== (o = t.$locale) && void 0 !== o ? o : t.$_locales, t.$format);
			return r$1.formatCutoff(c, { maxChars: t.$maxChars });
		} catch (n) {
			return No(jo(e)), null != t.$_fallback ? Do(t.$_fallback, Mo(Mo({}, t), { $_fallback: void 0 })) : r$1.formatCutoff(e, { maxChars: t.$maxChars });
		}
	}
	var $o = Number.POSITIVE_INFINITY, Fo = globalThis.__DANGEROUS_USE_REGISTRY__ ?? (globalThis.__DANGEROUS_USE_REGISTRY__ = /* @__PURE__ */ new Map());
	function Uo(e, t = /* @__PURE__ */ new WeakSet()) {
		const r = typeof e;
		if (null == e || "number" === r || "boolean" === r || "bigint" === r) return String(e);
		if ("string" === r) return JSON.stringify(e);
		if ("symbol" === r) return `:sym(${e.description ?? ""})`;
		if ("function" === r) return `:fn(${e.name || "anon"})`;
		if (Array.isArray(e)) return `[${e.map((e) => Uo(e, t)).join(",")}]`;
		if ("object" === r) {
			const r = e;
			if (t.has(r)) return ":circular";
			t.add(r);
			const n = Object.keys(r).sort().map((e) => `${JSON.stringify(e)}:${Uo(r[e], t)}`).join(",");
			return t.delete(r), `{${n}}`;
		}
		return String(e);
	}
	function Go(e) {
		return "string" == typeof e || "number" == typeof e || "symbol" == typeof e ? String(e) : Uo(e);
	}
	function zo(e, t, r) {
		const n = Fo, o = Date.now(), i = $o, a = Go(e), s = n.get(a);
		if (s && s.expiresAt > o) return s.thenable;
		const c = function(e) {
			const t = e;
			return t.status ?? (t.status = "pending", e.then((e) => {
				t.status = "fulfilled", t.value = e;
			}, (e) => {
				t.status = "rejected", t.reason = e;
			})), t;
		}(t()), l = {
			thenable: c,
			createdAt: o,
			expiresAt: o + i
		};
		if (n.set(a, l), i !== Infinity) {
			const e = () => {
				const e = n.get(a);
				e && e.thenable === c && setTimeout(() => {
					const e = n.get(a);
					e && e.thenable === c && n.delete(a);
				}, Math.max(0, i));
			};
			c.then(e, e);
		}
		return c;
	}
	var Vo;
	try {
		Vo = Function("o", "k", "return o[k]")(i, "use");
	} catch {}
	var Ko = Vo;
	function Wo({ children: r, id: n, context: o, _hash: i, ...a }) {
		if (!r) return;
		n = n ?? a?.$id, o = o ?? a?.$context;
		const s = a?.$maxChars, { translations: c, translationRequired: l, developmentApiEnabled: u, dialectTranslationRequired: h, registerJsxForTranslation: f, renderSettings: p, locale: d, defaultLocale: v } = Ho("<T> used on the client-side outside of <GTProvider>"), y = t$1.useMemo(() => Tn(r), [r]);
		let g;
		n && (g = c?.[n]), void 0 === g && i && (g = c?.[i]);
		const [m, _] = t$1.useMemo(() => {
			if (!l || g) return [void 0, ""];
			const e = zn(y);
			return [e, so({
				source: e,
				...o && { context: o },
				...null != s && { maxChars: Math.abs(s) },
				...n && { id: n },
				dataFormat: "JSX"
			})];
		}, [
			y,
			o,
			n,
			s,
			l,
			g
		]);
		void 0 === g && (g = c?.[_]);
		const b = () => En({
			children: y,
			defaultLocale: v,
			renderVariable: Io
		}), E = (e) => qn({
			source: y,
			target: e,
			locales: [d, v],
			renderVariable: Io
		});
		if (!l || c && !g && !u || null === g) return e$1.jsx(e$1.Fragment, { children: b() });
		if (g) return e$1.jsx(t$1.Suspense, {
			fallback: E(g),
			children: E(g)
		});
		const w = async () => {
			if (!u || !d) return b();
			if (g) return E(g);
			try {
				const e = await f({
					source: m,
					targetLocale: d,
					metadata: {
						id: n,
						hash: _,
						context: o,
						...null != s && { maxChars: s }
					}
				});
				return e ? E(e) : b();
			} catch (e) {
				return console.warn(e), b();
			}
		};
		if (Ko) {
			const r = Ko(zo([
				"getTranslationPromise",
				u,
				JSON.stringify(m),
				d,
				n,
				_,
				o,
				s
			], () => w()));
			return e$1.jsx(t$1.Suspense, {
				fallback: r,
				children: r
			});
		}
		let x;
		return x = "skeleton" === p.method ? "" : "replace" === p.method || h ? b() : "", e$1.jsx(t$1.Suspense, {
			fallback: x,
			children: w()
		});
	}
	Wo._gtt = "translate-client";
	function Xo({ gt: e, locale: r, versionId: n, defaultLocale: o, runtimeUrl: i, renderSettings: a, setTranslations: s, environment: c, ...l }) {
		const u = !!e.projectId && !!i && !!e.devApiKey && "development" === c;
		if (!u) {
			const e = (e) => Promise.reject(/* @__PURE__ */ new Error(`${e}() failed because translation is disabled`));
			return {
				developmentApiEnabled: u,
				registerIcuForTranslation: () => e("registerIcuForTranslation"),
				registerJsxForTranslation: () => e("registerJsxForTranslation")
			};
		}
		const h = t$1.useRef({
			gt: e,
			locale: r,
			baseMetadata: {
				...l,
				projectId: e.projectId,
				sourceLocale: o
			},
			timeout: a.timeout
		});
		h.current.gt = e, h.current.locale = r, h.current.baseMetadata = {
			...l,
			projectId: e.projectId,
			sourceLocale: o
		}, h.current.timeout = a.timeout;
		const f = t$1.useRef(!1), p = t$1.useRef(null), [d, v] = t$1.useState(0), y = t$1.useCallback((e) => {
			s((t) => {
				const r = Object.keys(e);
				if (0 === r.length) return t;
				const n = t ? { ...t } : {};
				let o = !1;
				for (const i of r) {
					const r = e[i], a = t?.[i];
					Object.is(a, r) || (n[i] = r, o = !0);
				}
				return o ? n : t;
			});
		}, [s]), g = t$1.useCallback((e) => {
			p.current = {
				...p.current ?? {},
				...e
			}, f.current && v((e) => e + 1);
		}, []);
		t$1.useEffect(() => {
			if (f.current = !0, p.current) {
				const e = p.current;
				p.current = null, y(e);
			}
			return () => {
				f.current = !1;
			};
		}, [y]), t$1.useEffect(() => {
			if (!f.current) return;
			const e = p.current;
			e && (p.current = null, y(e));
		}, [d, y]);
		const m = t$1.useRef(0), _ = t$1.useRef(/* @__PURE__ */ new Map()), b = t$1.useRef(/* @__PURE__ */ new Map()), E = t$1.useCallback(async (e) => {
			if (0 === e.size) return {};
			m.current += 1;
			const { gt: t, locale: r, baseMetadata: n, timeout: o } = h.current, i = Array.from(e.values()), a = {}, s = /* @__PURE__ */ new Map();
			try {
				const e = {};
				for (const t of i) {
					const { source: r, metadata: n } = t;
					e[n.hash] = {
						source: r,
						metadata: {
							...n,
							dataFormat: t.dataFormat
						}
					};
				}
				const c = await t.translateMany(e, {
					...n,
					targetLocale: r
				}, o);
				for (const e of i) {
					const { hash: t, id: r } = e.metadata, n = c[t];
					if (n && n.success) {
						const e = n.translation;
						a[t] = e, s.set(t, e);
					} else if (n && n.error) {
						const e = Cn(r, t);
						console.warn(`${e} ${n.error || "An upstream error occurred."}`), a[t] = null, s.set(t, null);
					} else {
						const e = Cn(r, t);
						console.warn(`${e} Unknown response format.`, n), a[t] = null, s.set(t, null);
					}
				}
			} catch (e) {
				"AbortError" === e?.name ? console.warn(Mn) : console.warn(An, e), i.forEach((e) => {
					a[e.metadata.hash] = null, s.set(e.metadata.hash, null);
				});
			} finally {
				m.current -= 1, i.forEach((e) => {
					const t = s.get(e.metadata.hash);
					void 0 === t ? (console.warn(`No translation result for ${e.metadata.hash}; resolving as null.`), e.resolve(null)) : e.resolve(t);
				});
			}
			return a;
		}, []), w = t$1.useRef(null), x = t$1.useRef(async () => {}), T = t$1.useCallback((e) => {
			g(e), _.current.size > 0 && (w.current = setTimeout(() => {
				w.current = null, x.current();
			}, 50));
		}, [g]), B = t$1.useCallback(() => {
			x.current = async () => {
				if (m.current >= 100) return void (w.current = setTimeout(() => {
					w.current = null, x.current();
				}, 50));
				const e = _.current;
				if (0 === e.size) return;
				const t = Array.from(e.entries()).slice(0, Math.min(25, e.size)), r = new Map(t);
				t.forEach(([t]) => e.delete(t));
				T(await E(r));
			};
		}, [E, T]), S = t$1.useCallback((e = !1) => {
			if (B(), e) return w.current && (clearTimeout(w.current), w.current = null), void x.current();
			w.current || (w.current = setTimeout(() => {
				w.current = null, x.current();
			}, 50));
		}, [B]), A = t$1.useCallback((e) => (t) => {
			const r = `${t.metadata.hash}:${t.targetLocale}`, n = b.current.get(r);
			if (n) return n;
			const o = new Promise((n) => {
				const o = "JSX" === e ? {
					dataFormat: "JSX",
					source: t.source,
					metadata: {
						...t.metadata,
						...null != t.metadata.maxChars && { maxChars: Math.abs(t.metadata.maxChars) }
					},
					resolve: n,
					reject: () => {}
				} : {
					dataFormat: "ICU",
					source: t.source,
					metadata: {
						...t.metadata,
						...null != t.metadata.maxChars && { maxChars: Math.abs(t.metadata.maxChars) }
					},
					resolve: n,
					reject: () => {}
				};
				_.current.set(r, o);
				S(_.current.size >= 25 && m.current < 100);
			}).finally(() => {
				b.current.delete(r);
			});
			return b.current.set(r, o), o;
		}, [S]), C = t$1.useMemo(() => A("ICU"), [A]), H = t$1.useMemo(() => A("JSX"), [A]);
		return t$1.useEffect(() => () => {
			w.current && clearTimeout(w.current);
		}, []), {
			developmentApiEnabled: u,
			registerIcuForTranslation: C,
			registerJsxForTranslation: H
		};
	}
	function qo({ gt: e, translations: t, locale: r, defaultLocale: n, translationRequired: o, developmentApiEnabled: i, registerIcuForTranslation: a, environment: s }) {
		function c({ message: t, variables: r, locales: n, fallback: o, id: i, maxChars: a, format: l }) {
			try {
				const i = vn(o || ""), s = e.formatMessage(Object.keys(i).length ? yn(t) : t, {
					locales: n,
					variables: {
						...r,
						...i,
						[an]: "other"
					},
					dataFormat: l
				});
				return e.formatCutoff(s, { maxChars: a });
			} catch (l) {
				if ("production" === s) console.warn(((e, t) => `${Bn} Warning: failed to render string ${t ? `for id: "${t}"` : ""} original message: "${e}"`)(t, i), "Error: ", l);
				else {
					if (!o) throw new Error(`${Hn(t, i)} Error: ${l}`);
					console.error(Hn(t, i), "Error: ", l);
				}
				if (o) return c({
					message: o,
					locales: n,
					variables: r,
					id: i,
					maxChars: a
				});
				return e.formatCutoff(t, { maxChars: a });
			}
		}
		function l(e, t = {}) {
			if (!e || "string" != typeof e) return null;
			const { $id: r, $context: n, $maxChars: o, $_hash: i, $format: a, ...s } = t;
			return {
				id: r,
				context: n,
				maxChars: o,
				_hash: i,
				variables: s,
				calculateHash: () => so({
					source: dn(e),
					...n && { context: n },
					...null != o && { maxChars: Math.abs(o) },
					...r && { id: r },
					dataFormat: a || "ICU"
				}),
				renderMessage: (e, t, n) => c({
					message: e,
					locales: t,
					variables: s,
					id: r,
					fallback: n,
					maxChars: o,
					format: a
				})
			};
		}
		function u(e, r, n) {
			let o, i = "";
			return r && (o = t?.[r]), n && void 0 === o && (i = n, o = t?.[n]), void 0 === o && (i = e(), o = t?.[i]), {
				translationEntry: o,
				hash: i
			};
		}
		const h = (e, t = {}, s) => {
			const c = l(e, t);
			if (!c) return "";
			const { id: h, context: f, maxChars: p, _hash: d, calculateHash: v, renderMessage: y } = c;
			if (!o) return y(e, [n]);
			const { translationEntry: g, hash: m } = u(v, h, d);
			return null === g ? y(e, [n]) : g ? y(g, [r, n], e) : void 0 !== s?.[m] ? s?.[m] ? y(s?.[m], [r, n], e) : y(e, [n]) : i ? (a({
				source: dn(e),
				targetLocale: r,
				metadata: {
					...f && { context: f },
					...h && { id: h },
					...null != p && { maxChars: p },
					hash: m || ""
				}
			}), y(e, [n])) : (console.warn(Pn(e, h, "gt")), y(e, [n]));
		};
		return {
			_gtFunction: h,
			_mFunction: (e, s = {}, l) => {
				if (!e) return e;
				const u = Bo(e);
				if (!u || !u.$_hash || !u.$_source) return h(e, s, l);
				const { $_hash: f, $_source: p, $context: d, $hash: v, $id: y, $maxChars: g, $format: m, ..._ } = u, b = (e, t, r) => c({
					message: e,
					locales: t,
					variables: _,
					fallback: r,
					maxChars: g,
					format: m
				});
				if (!o) return b(p, [n]);
				const E = t?.[u.$_hash];
				return null === E ? b(p, [n]) : E ? b(E, [r, n], p) : i ? void 0 !== l?.[f] ? l?.[f] ? b(l?.[f], [r, n], p) : b(p, [n]) : (a({
					source: dn(p),
					targetLocale: r,
					metadata: {
						...d && { context: d },
						...null != g && { maxChars: g },
						hash: f
					}
				}), b(p, [n])) : (console.warn(Pn(p, To(e), "m")), b(p, [n]));
			},
			_filterMessagesForPreload: (e) => {
				const t = [];
				for (const { message: r, ...n } of e) {
					const e = l(r, n);
					if (!e) continue;
					const { id: o, _hash: i, calculateHash: a } = e, { translationEntry: s, hash: c } = u(a, o, i);
					s || t.push({
						message: r,
						...n,
						$_hash: c
					});
				}
				return t;
			},
			_preloadMessages: async (e) => {
				const t = {};
				return await Promise.all(e.map(async ({ message: e, ...n }) => {
					const o = l(e, n);
					if (!o) return;
					const { id: i, context: s, maxChars: c, _hash: h, calculateHash: f } = o, { translationEntry: p, hash: d } = u(f, i, h);
					p && (t[d] = p), t[d] = await a({
						source: dn(e),
						targetLocale: r,
						metadata: {
							...s && { context: s },
							...i && { id: i },
							...null != c && { maxChars: c },
							hash: d
						}
					});
				})), t;
			}
		};
	}
	function Yo(e, r, n, o, i, a, s, c, l, u, h) {
		return t$1.useCallback((t, c = {}) => {
			if (!r) return "";
			const f = Kn(r, t);
			if (!f) return console.warn(Rn(t)), "";
			if (!Vn(f)) return console.warn(((e) => `${Bn} Warning: Invalid dictionary entry found for id: "${e}"`)(t)), "";
			const { entry: p, metadata: d } = Wn(f);
			if (!p || "string" != typeof p) return "";
			const { $format: v, ...y } = c, g = (r, n, o) => {
				try {
					const t = vn(o || ""), i = e.formatMessage(Object.keys(t).length ? yn(r) : r, {
						locales: n,
						variables: {
							...y,
							...t,
							[an]: "other"
						},
						dataFormat: v
					});
					return e.formatCutoff(i, { maxChars: d?.$maxChars ?? c.$maxChars });
				} catch (i) {
					if ("production" === h) console.warn(((e) => `${Bn} Warning: Invalid ICU string dictionary entry found for id: "${e}"`)(t), "Error: ", i);
					else {
						if (!o) throw new Error(`${kn(t)} Error: ${i}`);
						console.error(kn(t), "Error: ", i);
					}
					if (o) return g(o, n);
					return e.formatCutoff(r, { maxChars: d?.$maxChars ?? c.$maxChars });
				}
			};
			if (!s) return g(p, [a]);
			const m = Kn(n || {}, t);
			if (m && Vn(m)) {
				const { entry: e } = Wn(m);
				return g(e, [i, a]);
			}
			let _ = o?.[t], b = "";
			const E = () => so({
				source: dn(p),
				...d?.$context && { context: d.$context },
				...null != d?.$maxChars && { maxChars: Math.abs(d.$maxChars) },
				id: t,
				dataFormat: "ICU"
			});
			return _ || (b = E(), _ = o?.[b]), _ ? g(_, [i, a], p) : null === _ ? g(p, [a]) : l ? (u({
				source: dn(p),
				targetLocale: i,
				metadata: {
					...d?.$context && { context: d.$context },
					...null != d?.$maxChars && { maxChars: d.$maxChars },
					id: t,
					hash: b || E()
				}
			}), g(p, [a])) : g(p, [a]);
		}, [
			r,
			n,
			o,
			i,
			a,
			s,
			l,
			u,
			c
		]);
	}
	function Jo({ _locale: e, defaultLocale: n, locales: o, ssr: i, localeCookieName: a, customMapping: s, useDetermineLocale: c, enableI18n: l, reloadOnLocaleUpdate: u }) {
		const h = t$1.useMemo(() => Array.from(new Set([n, ...l ? o : []])), [
			n,
			o,
			l
		]), [f, p] = c({
			locale: e,
			defaultLocale: n,
			locales: h,
			ssr: i,
			localeCookieName: a,
			customMapping: s,
			enableI18n: l,
			reloadOnLocaleUpdate: u
		}), [d, v] = t$1.useMemo(() => {
			const e = r$1.requiresTranslation(n, f, h, s), t = e && r$1.isSameLanguage(n, f);
			if (!s) {
				const e = [];
				if (h.forEach((t) => {
					r$1.isValidLocale(t) || e.push(t);
				}), e.length) throw new Error(((e) => `${Bn} Error: Invalid locale codes in your configuration. Specify a list of valid locales or use "customMapping" to define aliases for the following invalid locales: ${e.join(", ")}.`)(e));
			}
			if (s) {
				const e = [];
				if (h.forEach((t) => {
					r$1.isValidLocale(t, s) || e.push(t);
				}), e.length) throw new Error(((e) => `${Bn} Error: Invalid canonical locale codes in your configuration: ${e.join(", ")}.`)(e));
			}
			return [e, t];
		}, [
			n,
			f,
			h
		]);
		return {
			locale: f,
			setLocale: p,
			locales: h,
			translationRequired: d,
			dialectTranslationRequired: v
		};
	}
	function Zo({ devApiKey: e, projectId: o, runtimeUrl: i, loadTranslationsType: a, cacheUrl: s, locales: c, environment: l }) {
		t$1.useEffect(() => {
			if ("production" === l && e) throw new Error(Sn);
			if ("custom" === a || !s && !i || o || "development" !== l || console.warn(Ln), o && i && "custom" !== a && !e && "development" === l && console.warn(In), i === Ur || s === Fr && "default" === a) {
				const e = c.filter((e) => !n$1.getSupportedLocale(e));
				e.length && console.warn(((e) => `${Bn} Warning: The following locales are currently unsupported by our service: ${e.map((e) => {
					const { name: t } = r$1.getLocaleProperties(e);
					return `${e} (${t})`;
				}).join(", ")}`)(e));
			}
		}, [
			e,
			a,
			s,
			i,
			o,
			c
		]);
	}
	async function Qo(e, t) {
		const n = Array.from(new Set([e, r$1.getLocaleProperties(e).languageCode]));
		for (const e of n) try {
			const r = await t(e);
			if (r) return r;
		} catch {}
		console.warn(Nn);
	}
	function ei({ _translations: e, translationRequired: r, loadTranslationsType: n, loadTranslations: o, locale: i, cacheUrl: a, projectId: s, _versionId: c, gt: l }) {
		const [u, h] = t$1.useState(e || (r && "disabled" !== n ? null : {})), f = t$1.useRef(!1);
		return t$1.useEffect(() => {
			f.current ? h(r && "disabled" !== n ? null : {}) : f.current = !0;
		}, [i, n]), t$1.useEffect(() => {
			if (u || !r || "disabled" === n) return;
			let e = !0;
			return (async () => {
				let t;
				switch (n) {
					case "custom":
						if (o) try {
							t = await o(i);
						} catch (e) {
							console.error(((e = "") => `${Bn} Error: Failed to fetch locally stored translations. If using a custom loadTranslations(${e}), make sure it is correctly implemented.`)(i), e);
						}
						break;
					case "default": try {
						t = await async function({ cacheUrl: e, projectId: t, locale: r, versionId: n, gt: o }) {
							if (!t || !e || !r) return {};
							r = o.resolveCanonicalLocale(r);
							return await (await fetch(n ? `${e}/${t}/${r}/${n}` : `${e}/${t}/${r}`)).json();
						}({
							cacheUrl: a || Fr,
							projectId: s,
							locale: i,
							versionId: c,
							gt: l
						});
					} catch (e) {
						console.error(e);
					}
				}
				t || (t = {}), e && h(t);
			})(), () => {
				e = !1;
			};
		}, [
			u,
			r,
			n,
			a,
			s,
			i,
			c,
			l
		]), {
			translations: u,
			setTranslations: h
		};
	}
	function ti(e, r, n, o, i, a, s, c, l, u, h, f) {
		return t$1.useCallback((t, s, l = {}) => {
			if ("" === s) throw new Error(`${Bn} Error: You cannot provide an empty id to t.obj()`);
			const p = to({
				dictionary: e,
				id: s
			});
			if (!p) return console.warn(Rn(s)), {};
			if (Jn(p)) return f(t, l);
			if (!c) return oo(p);
			const d = function({ dictionary: e, id: t, sourceDictionary: r }) {
				if ("" === t) return e;
				let n = e;
				const o = r, i = t.split(".");
				for (const e of i) void 0 === wn(n, e) && (Array.isArray(wn(o, e)) ? xn(n, e, []) : xn(n, e, {})), n = wn(n, e);
				return n;
			}({
				dictionary: r,
				id: s,
				sourceDictionary: r
			}), { dictionary: v, updateDictionary: y } = uo(structuredClone(p), s), g = fo(v, d, s), { dictionary: m, updateDictionary: _ } = function(e, t, r, n, o = "") {
				let i = !1;
				const a = o ? o.split(".") : [];
				return n.forEach(({ metadata: n }) => {
					const { $_hash: o, $id: s } = n, c = a.length > 0 ? s.split(".").slice(a.length).join(".") : s, l = Kn(t, c);
					let u;
					Jn(l) && (u = Wn(l).entry);
					const h = r[o] || u;
					h && (no(h, t, c, e), i = !0);
				}), {
					dictionary: t,
					updateDictionary: i
				};
			}(v, structuredClone(d), i || {}, g, s), b = function(e, t, r, n = "") {
				const o = n ? n.split(".") : [];
				return r.forEach(({ source: r, metadata: n }) => {
					const { $id: i } = n, a = o.length > 0 ? i.split(".").slice(o.length).join(".") : i, s = Kn(t, a);
					let c;
					Jn(s) && (c = Wn(s).entry), no(c || r, t, a, e);
				}), t;
			}(v, structuredClone(m), g, s);
			return u && Promise.allSettled(g.map(async (e) => {
				const { source: t, metadata: r } = e, n = r?.$id;
				return [n, await h({
					source: dn(t),
					targetLocale: a,
					metadata: {
						...r?.$context && { context: r.$context },
						...null != r?.$maxChars && { maxChars: r.$maxChars },
						id: n,
						hash: r?.$_hash
					}
				})];
			})).then((t) => {
				const r = t.filter((e) => "fulfilled" === e.status).map((e) => e.value);
				r.length > 0 && o((t) => function(e, t, r) {
					return t.forEach(([t, n]) => {
						no(n, e, t, r);
					}), e;
				}(t, r, e));
			}), y && setTimeout(() => {
				n((e) => ho(e, v, s));
			}, 0), _ && setTimeout(() => {
				o((e) => eo(e, m));
			}, 0), structuredClone(b);
		}, [
			e,
			i,
			a,
			s,
			c,
			l,
			u,
			h,
			r
		]);
	}
	function ri({ enableI18n: e }) {
		const [r] = t$1.useState(e);
		return { enableI18n: r };
	}
	function ni() {
		throw jn("isSSREnabled");
	}
	function oi({}) {
		throw jn("useDetermineLocale");
	}
	function ii({}) {
		throw jn("useRegionState");
	}
	function ai({ children: r, n, locales: o, ...i }) {
		const a = t$1.useContext(Co);
		let s;
		a && (o ||= a.locale, s ||= a.defaultLocale);
		const c = [...o ? [o] : [], s || Gr];
		if ("number" != typeof n) throw new Error(((e) => `${Bn} Error: <Plural> component with children "${e}" requires "n" option.`)(r));
		return e$1.jsx(e$1.Fragment, { children: _n(n, c, i) || r });
	}
	function si({ children: t, branch: r, ...n }) {
		r = r?.toString(), "string" == typeof r && r.startsWith("data-") && (r = void 0);
		const o = r && void 0 !== n[r] ? n[r] : t;
		return e$1.jsx(e$1.Fragment, { children: o });
	}
	function ci() {
		return Ho("useGTClass(): Unable to access configured GT class instance outside of a <GTProvider>").gt;
	}
	ai._gtt = "plural", si._gtt = "branch", exports.Branch = si, exports.Currency = ko, exports.DateTime = Lo, exports.Derive = So, exports.GTContext = Co, exports.GTProvider = function({ children: n, config: o, environment: i = "production", projectId: a = o?.projectId || "", devApiKey: s = o?.devApiKey || "", _versionId: c = o?._versionId, dictionary: l = o?.dictionary || {}, locales: u = o?.locales || [], defaultLocale: h = o?.defaultLocale || Gr, cacheUrl: f = o?.cacheUrl || Fr, runtimeUrl: p = o?.runtimeUrl || Ur, renderSettings: d = o?.renderSettings || Yn(i), ssr: v = o?.ssr || ni(), localeCookieName: y = o?.localeCookieName || "generaltranslation.locale", locale: g = "", region: m, loadDictionary: _, loadTranslations: b, fallback: E, translations: w = null, customMapping: x = o?.customMapping, enableI18n: T = void 0 === o?.enableI18n || o.enableI18n, enableI18nLoaded: B, reloadOnLocaleUpdate: S, useEnableI18n: A = ri, readAuthFromEnv: C = Dn, useDetermineLocale: H = oi, useRegionState: P = ii, ...O }) {
		g && (g = r$1.resolveAliasLocale(g, x));
		const { projectId: k, devApiKey: L } = C({
			projectId: a,
			devApiKey: s
		}), { enableI18n: R } = A({
			enableI18n: T,
			enableI18nLoaded: B,
			enableI18nCookieName: "generaltranslation.enable-i18n",
			ssr: v
		}), { locale: I, setLocale: M, locales: N, translationRequired: j, dialectTranslationRequired: D } = Jo({
			_locale: g,
			defaultLocale: h,
			locales: u,
			ssr: v,
			localeCookieName: y,
			customMapping: x,
			useDetermineLocale: H,
			enableI18n: R,
			reloadOnLocaleUpdate: S
		}), { region: $, setRegion: F } = P({
			_region: m,
			ssr: v,
			regionCookieName: "generaltranslation.region"
		}), U = t$1.useMemo(() => new r$1.GT({
			devApiKey: L,
			sourceLocale: h,
			targetLocale: I,
			projectId: k,
			baseUrl: p || void 0,
			customMapping: x
		}), [
			L,
			h,
			k,
			p,
			x
		]), G = t$1.useMemo(() => (b ? "custom" : f && k && "default") || "disabled", [
			b,
			f,
			k
		]), { dictionary: z, setDictionary: V, dictionaryTranslations: K, setDictionaryTranslations: W } = function({ _dictionary: e, _dictionaryTranslations: r = {}, loadDictionary: n, locale: o, defaultLocale: i }) {
			const [a, s] = t$1.useState(e), [c, l] = t$1.useState(r);
			return t$1.useEffect(() => {
				if (!n) return;
				let e = !0;
				return (async () => {
					const t = await Qo(i, n) || {}, r = await Qo(o, n) || {};
					e && s(t || {}), e && l(r || {});
				})(), () => {
					e = !1;
				};
			}, [
				n,
				o,
				i
			]), {
				dictionary: a,
				setDictionary: s,
				dictionaryTranslations: c,
				setDictionaryTranslations: l
			};
		}({
			_dictionary: l,
			_dictionaryTranslations: {},
			loadDictionary: _,
			locale: I,
			defaultLocale: h
		});
		Zo({
			devApiKey: L,
			projectId: k,
			runtimeUrl: p,
			loadTranslationsType: G,
			cacheUrl: f,
			locales: u,
			environment: i
		});
		const { translations: X, setTranslations: q } = ei({
			_translations: w,
			translationRequired: j,
			loadTranslationsType: G,
			loadTranslations: b,
			locale: I,
			cacheUrl: f,
			projectId: k,
			_versionId: c,
			gt: U
		}), { registerIcuForTranslation: Y, registerJsxForTranslation: J, developmentApiEnabled: Z } = Xo({
			gt: U,
			locale: I,
			versionId: c,
			defaultLocale: h,
			runtimeUrl: p,
			renderSettings: d,
			setTranslations: q,
			environment: i,
			...O
		}), { _gtFunction: Q, _mFunction: ee, _filterMessagesForPreload: te, _preloadMessages: re } = qo({
			gt: U,
			translations: X,
			locale: I,
			defaultLocale: h,
			translationRequired: j,
			developmentApiEnabled: Z,
			registerIcuForTranslation: Y,
			environment: i
		}), ne = Yo(U, z, K, X, I, h, j, D, Z, Y, i), oe = ti(z || {}, K || {}, V, W, X, I, h, j, D, Z, Y, ne), ie = !(j && !X || !I);
		return e$1.jsx(Co.Provider, {
			value: {
				gt: U,
				registerIcuForTranslation: Y,
				registerJsxForTranslation: J,
				_gtFunction: Q,
				_mFunction: ee,
				_filterMessagesForPreload: te,
				_preloadMessages: re,
				_dictionaryFunction: ne,
				_dictionaryObjFunction: oe,
				developmentApiEnabled: Z,
				locale: I,
				locales: N,
				setLocale: M,
				defaultLocale: h,
				region: $,
				setRegion: F,
				translations: X,
				translationRequired: j,
				dialectTranslationRequired: D,
				projectId: k,
				renderSettings: d,
				_versionId: c
			},
			children: e$1.jsx(t$1.Suspense, {
				fallback: E,
				children: ie ? n : E
			})
		});
	}, exports.LocaleSelector = function({}) {
		throw jn("LocaleSelector");
	}, exports.Num = Po, exports.Plural = ai, exports.RegionSelector = function({}) {
		throw jn("RegionSelector");
	}, exports.RelativeTime = Ro, exports.Static = Ao, exports.T = Wo, exports.Var = Oo, exports.declareStatic = pn, exports.declareVar = function(e, t) {
		var r = hn(String(null != e ? e : "")), n = " other {".concat(r, "}"), o = "";
		if (null == t ? void 0 : t.$name) {
			var i = hn(t.$name);
			o = " ".concat("_gt_var_name", " {").concat(i, "}");
		}
		return "{".concat(an, ", select,").concat(n).concat(o, "}");
	}, exports.decodeMsg = To, exports.decodeOptions = Bo, exports.decodeVars = function(e) {
		if (!e.includes(an)) return e;
		var t = [];
		on({
			icuString: e,
			shouldVisit: un,
			visitor: function(e) {
				var r, n, o, i;
				t.push({
					start: null !== (n = null === (r = e.location) || void 0 === r ? void 0 : r.start.offset) && void 0 !== n ? n : 0,
					end: null !== (i = null === (o = e.location) || void 0 === o ? void 0 : o.end.offset) && void 0 !== i ? i : 0,
					value: e.options.other.value.length > 0 ? e.options.other.value[0].value : ""
				});
			},
			options: {
				recurseIntoVisited: !1,
				captureLocation: !0
			}
		});
		for (var r = 0, n = [], o = 0; o < t.length; o++) n.push(e.slice(r, t[o].start)), n.push(t[o].value), r = t[o].end;
		return r < e.length && n.push(e.slice(r)), n.join("");
	}, exports.derive = fn, exports.gtFallback = function(e, t) {
		return void 0 === t && (t = {}), Do(e, t);
	}, exports.mFallback = function(e, t) {
		var r;
		if (void 0 === t && (t = {}), !e) return e;
		return function(e) {
			return !(!e.$_hash || !e.$_source);
		}(null !== (r = function(e) {
			if (-1 === e.lastIndexOf(":")) return null;
			var t = e.slice(e.lastIndexOf(":") + 1);
			try {
				return JSON.parse(nn(t));
			} catch (e) {
				return null;
			}
		}(e)) && void 0 !== r ? r : {}) ? function(e) {
			return "string" == typeof e && -1 !== e.lastIndexOf(":") ? e.slice(0, e.lastIndexOf(":")) : e;
		}(e) : Do(e, t);
	}, exports.msg = function e(t, n) {
		var o;
		if ("string" != typeof t) return n ? t.map(function(t, r) {
			return e(t, yo(yo({}, n), n.$id && { $id: "".concat(n.$id, ".").concat(r) }));
		}) : t;
		if (!n) return t;
		var i = function(e) {
			return Object.fromEntries(Object.entries(e).filter(function(e) {
				var t = e[0];
				return "$id" !== t && "$context" !== t && "$maxChars" !== t && "$hash" !== t && "$_hash" !== t && "$_source" !== t && "$_fallback" !== t && "$format" !== t && "$_locales" !== t && "$locale" !== t;
			}));
		}(n), a = t;
		try {
			a = r$1.formatMessage(t, {
				locales: [Gr],
				variables: yo(yo({}, i), (o = {}, o[an] = "other", o))
			});
		} catch (n) {
			return function(e) {
				console.warn(e);
			}(function(e) {
				return "String interpolation failed for message: \"".concat(e, "\".");
			}(t)), t;
		}
		var s = t, c = n.$_hash || wo(t, yo({ $format: "ICU" }, n)), l = yo(yo({}, n), {
			$_source: s,
			$_hash: c
		}), u = function(e) {
			if ("undefined" != typeof Buffer) return Buffer.from(e, "utf8").toString("base64");
			for (var t = new TextEncoder().encode(e), r = "", n = 0; n < t.length; n++) r += String.fromCharCode(t[n]);
			return btoa(r);
		}(JSON.stringify(l));
		return "".concat(a, ":").concat(u);
	}, exports.useCreateInternalUseGTFunction = qo, exports.useCreateInternalUseTranslationsFunction = Yo, exports.useCreateInternalUseTranslationsObjFunction = ti, exports.useDefaultLocale = function() {
		return Ho("useDefaultLocale(): Unable to access default locale outside of a <GTProvider>").defaultLocale;
	}, exports.useGT = function(e) {
		const { developmentApiEnabled: r, translationRequired: n, _preloadMessages: o, _filterMessagesForPreload: i, _gtFunction: a, locale: s } = Ho("useGT(): No context provided. You're trying to get the gt() function from the useGT() hook, which can be called within a <GTProvider>.");
		let c;
		if (e && Ko && r && n) {
			const t = i(e);
			t.length > 0 && (c = Ko(zo([
				"_preloadMessages",
				s,
				JSON.stringify(t)
			], () => o(t))));
		}
		return t$1.useCallback(function(e, t = {}) {
			return a(e, t, c);
		}, [c, a]);
	}, exports.useGTClass = ci, exports.useLocale = function() {
		return Ho("useLocale(): Unable to access user's locale outside of a <GTProvider>").locale;
	}, exports.useLocaleDirection = function(e) {
		const { gt: t } = Ho("useLocaleDirection(): Unable to access configured GT class instance outside of a <GTProvider>");
		return t.getLocaleDirection(e);
	}, exports.useLocaleProperties = function(e) {
		return ci().getLocaleProperties(e);
	}, exports.useLocaleSelector = function(e) {
		const { locales: r, locale: n, setLocale: o, gt: i } = Ho(), a = t$1.useMemo(() => {
			if (!r || 0 === r.length) return [];
			return r.sort((e, t) => new Intl.Collator().compare(i.getLocaleProperties(e).nativeNameWithRegionCode, i.getLocaleProperties(t).nativeNameWithRegionCode));
		}, [r]), s = t$1.useCallback((e) => i.getLocaleProperties(e), [i]);
		return {
			locale: n,
			locales: e || a,
			setLocale: o,
			getLocaleProperties: s
		};
	}, exports.useLocales = function() {
		return Ho("useLocales(): Unable to access configured locales outside of a <GTProvider>").locales;
	}, exports.useMessages = function(e) {
		const { developmentApiEnabled: r, translationRequired: n, _preloadMessages: o, _filterMessagesForPreload: i, _mFunction: a, locale: s } = Ho("useMessages(): No context provided. You're trying to get the m() function from the useMessages() hook, which can be called within a <GTProvider>.");
		let c;
		if (e && Ko && r && n) {
			const t = i(e);
			t.length > 0 && (c = Ko(zo([
				"_preloadMessages",
				s,
				JSON.stringify(t)
			], () => o(t))));
		}
		return t$1.useCallback(function(e, t = {}) {
			return a(e, t, c);
		}, [c, a]);
	}, exports.useRegion = function() {
		return Ho("useRegion(): Unable to access user's region outside of a <GTProvider>").region;
	}, exports.useRegionSelector = function({ regions: e, customMapping: n, prioritizeCurrentLocaleRegion: o = !0, sortRegionsAlphabetically: i = !0 } = {
		prioritizeCurrentLocaleRegion: !0,
		sortRegionsAlphabetically: !0
	}) {
		const { locales: a, locale: s, setLocale: c, gt: l, region: u, setRegion: h } = Ho(), { regionCode: f } = l.getLocaleProperties(s), [p, d] = t$1.useMemo(() => {
			const t = new Map(a.map((e) => {
				const t = r$1.getLocaleProperties(e, s, l.customMapping);
				return [t.regionCode, t];
			})), c = e ? [...e] : Array.from(t?.keys() || [f]), u = new Map(c.map((e) => [e, {
				locale: t?.get(e)?.code || s,
				...l.getRegionProperties(e),
				..."string" == typeof n?.[e] ? { name: n?.[e] } : n?.[e]
			}]));
			if (i && c.sort((e, t) => new Intl.Collator().compare(u.get(e).name, u.get(t).name)), o) {
				const e = c.indexOf(f);
				e > 0 && (c.splice(e, 1), c.unshift(f));
			}
			return [c, u];
		}, [
			e,
			u,
			s,
			a,
			l
		]);
		return {
			region: u,
			setRegion: h,
			regions: p,
			regionData: d,
			locales: a,
			locale: s,
			localeRegion: f,
			setLocale: c
		};
	}, exports.useRuntimeTranslation = Xo, exports.useSetLocale = function() {
		const { setLocale: e } = Ho("setLocale(): Unable to access user's locale outside of a <GTProvider>");
		return e;
	}, exports.useTranslations = function(e) {
		const t = (t) => e ? `${e}.${t}` : t, { _dictionaryFunction: r, _dictionaryObjFunction: n } = Ho(`useTranslations('${e}'): No context provided. You're trying to get the t() function on the client, which can only be done inside a <GTProvider>.`);
		function o(e, n = {}) {
			return r(t(e), n);
		}
		return o.obj = function(e, r = {}) {
			return n(e, t(e), r);
		}, o;
	}, exports.useVersionId = function() {
		return Ho("useVersionId(): Unable to access version ID outside of a <GTProvider>")._versionId;
	};
}));
//#endregion
//#region ../../../node_modules/.bun/gt-react@10.18.2+bf16f8eded5e12ee/node_modules/gt-react/dist/client.cjs.min.cjs
var require_client_cjs_min = __commonJSMin(((exports) => {
	var e = __require("react/jsx-runtime"), t = __require("react"), r = require_index_cjs_min$2(), n = require_index_cjs_min();
	function o(e) {
		var t = Object.create(null);
		return e && Object.keys(e).forEach(function(r) {
			if ("default" !== r) {
				var n = Object.getOwnPropertyDescriptor(e, r);
				Object.defineProperty(t, r, n.get ? n : {
					enumerable: !0,
					get: function() {
						return e[r];
					}
				});
			}
		}), t.default = e, Object.freeze(t);
	}
	var i = o(t), s = function(e, t) {
		return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
		}, s(e, t);
	};
	function a(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
		function r() {
			this.constructor = e;
		}
		s(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
	}
	var c = function() {
		return c = Object.assign || function(e) {
			for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
			return e;
		}, c.apply(this, arguments);
	};
	function u(e, t) {
		var r = {};
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
		if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
			var o = 0;
			for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
		}
		return r;
	}
	function h(e, t, r, n) {
		var o, i = arguments.length, s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
		if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
		else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
		return i > 3 && s && Object.defineProperty(t, r, s), s;
	}
	function l(e, t) {
		return function(r, n) {
			t(r, n, e);
		};
	}
	function f(e, t, r, n, o, i) {
		function s(e) {
			if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
			return e;
		}
		for (var a, c = n.kind, u = "getter" === c ? "get" : "setter" === c ? "set" : "value", h = !t && e ? n.static ? e : e.prototype : null, l = t || (h ? Object.getOwnPropertyDescriptor(h, n.name) : {}), f = !1, p = r.length - 1; p >= 0; p--) {
			var d = {};
			for (var v in n) d[v] = "access" === v ? {} : n[v];
			for (var v in n.access) d.access[v] = n.access[v];
			d.addInitializer = function(e) {
				if (f) throw new TypeError("Cannot add initializers after decoration has completed");
				i.push(s(e || null));
			};
			var y = (0, r[p])("accessor" === c ? {
				get: l.get,
				set: l.set
			} : l[u], d);
			if ("accessor" === c) {
				if (void 0 === y) continue;
				if (null === y || "object" != typeof y) throw new TypeError("Object expected");
				(a = s(y.get)) && (l.get = a), (a = s(y.set)) && (l.set = a), (a = s(y.init)) && o.unshift(a);
			} else (a = s(y)) && ("field" === c ? o.unshift(a) : l[u] = a);
		}
		h && Object.defineProperty(h, n.name, l), f = !0;
	}
	function p(e, t, r) {
		for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
		return n ? r : void 0;
	}
	function d(e) {
		return "symbol" == typeof e ? e : "".concat(e);
	}
	function v(e, t, r) {
		return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
			configurable: !0,
			value: r ? "".concat(r, " ", t) : t
		});
	}
	function y(e, t) {
		if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
	}
	function _(e, t, r, n) {
		return new (r || (r = Promise))(function(o, i) {
			function s(e) {
				try {
					c(n.next(e));
				} catch (e) {
					i(e);
				}
			}
			function a(e) {
				try {
					c(n.throw(e));
				} catch (e) {
					i(e);
				}
			}
			function c(e) {
				var t;
				e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
					e(t);
				})).then(s, a);
			}
			c((n = n.apply(e, t || [])).next());
		});
	}
	function g(e, t) {
		var r, n, o, i = {
			label: 0,
			sent: function() {
				if (1 & o[0]) throw o[1];
				return o[1];
			},
			trys: [],
			ops: []
		}, s = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
		return s.next = a(0), s.throw = a(1), s.return = a(2), "function" == typeof Symbol && (s[Symbol.iterator] = function() {
			return this;
		}), s;
		function a(a) {
			return function(c) {
				return function(a) {
					if (r) throw new TypeError("Generator is already executing.");
					for (; s && (s = 0, a[0] && (i = 0)), i;) try {
						if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
						switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
							case 0:
							case 1:
								o = a;
								break;
							case 4: return i.label++, {
								value: a[1],
								done: !1
							};
							case 5:
								i.label++, n = a[1], a = [0];
								continue;
							case 7:
								a = i.ops.pop(), i.trys.pop();
								continue;
							default:
								if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
									i = 0;
									continue;
								}
								if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
									i.label = a[1];
									break;
								}
								if (6 === a[0] && i.label < o[1]) {
									i.label = o[1], o = a;
									break;
								}
								if (o && i.label < o[2]) {
									i.label = o[2], i.ops.push(a);
									break;
								}
								o[2] && i.ops.pop(), i.trys.pop();
								continue;
						}
						a = t.call(e, i);
					} catch (e) {
						a = [6, e], n = 0;
					} finally {
						r = o = 0;
					}
					if (5 & a[0]) throw a[1];
					return {
						value: a[0] ? a[1] : void 0,
						done: !0
					};
				}([a, c]);
			};
		}
	}
	var b = Object.create ? function(e, t, r, n) {
		void 0 === n && (n = r);
		var o = Object.getOwnPropertyDescriptor(t, r);
		o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
			enumerable: !0,
			get: function() {
				return t[r];
			}
		}), Object.defineProperty(e, n, o);
	} : function(e, t, r, n) {
		void 0 === n && (n = r), e[n] = t[r];
	};
	function m(e, t) {
		for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || b(t, e, r);
	}
	function E(e) {
		var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
		if (r) return r.call(e);
		if (e && "number" == typeof e.length) return { next: function() {
			return e && n >= e.length && (e = void 0), {
				value: e && e[n++],
				done: !e
			};
		} };
		throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}
	function B(e, t) {
		var r = "function" == typeof Symbol && e[Symbol.iterator];
		if (!r) return e;
		var n, o, i = r.call(e), s = [];
		try {
			for (; (void 0 === t || t-- > 0) && !(n = i.next()).done;) s.push(n.value);
		} catch (e) {
			o = { error: e };
		} finally {
			try {
				n && !n.done && (r = i.return) && r.call(i);
			} finally {
				if (o) throw o.error;
			}
		}
		return s;
	}
	function S() {
		for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(B(arguments[t]));
		return e;
	}
	function H() {
		for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
		var n = Array(e), o = 0;
		for (t = 0; t < r; t++) for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) n[o] = i[s];
		return n;
	}
	function w(e, t, r) {
		if (r || 2 === arguments.length) for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
		return e.concat(n || Array.prototype.slice.call(t));
	}
	function T(e) {
		return this instanceof T ? (this.v = e, this) : new T(e);
	}
	function x(e, t, r) {
		if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
		var n, o = r.apply(e, t || []), i = [];
		return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", function(e) {
			return function(t) {
				return Promise.resolve(t).then(e, u);
			};
		}), n[Symbol.asyncIterator] = function() {
			return this;
		}, n;
		function s(e, t) {
			o[e] && (n[e] = function(t) {
				return new Promise(function(r, n) {
					i.push([
						e,
						t,
						r,
						n
					]) > 1 || a(e, t);
				});
			}, t && (n[e] = t(n[e])));
		}
		function a(e, t) {
			try {
				(function(e) {
					e.value instanceof T ? Promise.resolve(e.value.v).then(c, u) : h(i[0][2], e);
				})(o[e](t));
			} catch (e) {
				h(i[0][3], e);
			}
		}
		function c(e) {
			a("next", e);
		}
		function u(e) {
			a("throw", e);
		}
		function h(e, t) {
			e(t), i.shift(), i.length && a(i[0][0], i[0][1]);
		}
	}
	function P(e) {
		var t, r;
		return t = {}, n("next"), n("throw", function(e) {
			throw e;
		}), n("return"), t[Symbol.iterator] = function() {
			return this;
		}, t;
		function n(n, o) {
			t[n] = e[n] ? function(t) {
				return (r = !r) ? {
					value: T(e[n](t)),
					done: !1
				} : o ? o(t) : t;
			} : o;
		}
	}
	function A(e) {
		if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
		var t, r = e[Symbol.asyncIterator];
		return r ? r.call(e) : (e = E(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
			return this;
		}, t);
		function n(r) {
			t[r] = e[r] && function(t) {
				return new Promise(function(n, o) {
					(function(e, t, r, n) {
						Promise.resolve(n).then(function(t) {
							e({
								value: t,
								done: r
							});
						}, t);
					})(n, o, (t = e[r](t)).done, t.value);
				});
			};
		}
	}
	function O(e, t) {
		return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
	}
	var C = Object.create ? function(e, t) {
		Object.defineProperty(e, "default", {
			enumerable: !0,
			value: t
		});
	} : function(e, t) {
		e.default = t;
	}, k = function(e) {
		return k = Object.getOwnPropertyNames || function(e) {
			var t = [];
			for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
			return t;
		}, k(e);
	};
	function R(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (null != e) for (var r = k(e), n = 0; n < r.length; n++) "default" !== r[n] && b(t, e, r[n]);
		return C(t, e), t;
	}
	function L(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function M(e, t, r, n) {
		if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
		if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
		return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
	}
	function I(e, t, r, n, o) {
		if ("m" === n) throw new TypeError("Private method is not writable");
		if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
		if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r;
	}
	function N(e, t) {
		if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
		return "function" == typeof e ? t === e : e.has(t);
	}
	function D(e, t, r) {
		if (null != t) {
			if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
			var n, o;
			if (r) {
				if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
				n = t[Symbol.asyncDispose];
			}
			if (void 0 === n) {
				if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
				n = t[Symbol.dispose], r && (o = n);
			}
			if ("function" != typeof n) throw new TypeError("Object not disposable.");
			o && (n = function() {
				try {
					o.call(this);
				} catch (e) {
					return Promise.reject(e);
				}
			}), e.stack.push({
				value: t,
				dispose: n,
				async: r
			});
		} else r && e.stack.push({ async: !0 });
		return t;
	}
	var j = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
		var n = new Error(r);
		return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
	};
	function U(e) {
		function t(t) {
			e.error = e.hasError ? new j(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
		}
		var r, n = 0;
		return function o() {
			for (; r = e.stack.pop();) try {
				if (!r.async && 1 === n) return n = 0, e.stack.push(r), Promise.resolve().then(o);
				if (r.dispose) {
					var i = r.dispose.call(r.value);
					if (r.async) return n |= 2, Promise.resolve(i).then(o, function(e) {
						return t(e), o();
					});
				} else n |= 1;
			} catch (e) {
				t(e);
			}
			if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
			if (e.hasError) throw e.error;
		}();
	}
	function F(e, t) {
		return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, r, n, o, i) {
			return r ? t ? ".jsx" : ".js" : !n || o && i ? n + o + "." + i.toLowerCase() + "js" : e;
		}) : e;
	}
	var G, z, K, X, W = Object.freeze({
		__proto__: null,
		__addDisposableResource: D,
		get __assign() {
			return c;
		},
		__asyncDelegator: P,
		__asyncGenerator: x,
		__asyncValues: A,
		__await: T,
		__awaiter: _,
		__classPrivateFieldGet: M,
		__classPrivateFieldIn: N,
		__classPrivateFieldSet: I,
		__createBinding: b,
		__decorate: h,
		__disposeResources: U,
		__esDecorate: f,
		__exportStar: m,
		__extends: a,
		__generator: g,
		__importDefault: L,
		__importStar: R,
		__makeTemplateObject: O,
		__metadata: y,
		__param: l,
		__propKey: d,
		__read: B,
		__rest: u,
		__rewriteRelativeImportExtension: F,
		__runInitializers: p,
		__setFunctionName: v,
		__spread: S,
		__spreadArray: w,
		__spreadArrays: H,
		__values: E,
		default: {
			__extends: a,
			__assign: c,
			__rest: u,
			__decorate: h,
			__param: l,
			__esDecorate: f,
			__runInitializers: p,
			__propKey: d,
			__setFunctionName: v,
			__metadata: y,
			__awaiter: _,
			__generator: g,
			__createBinding: b,
			__exportStar: m,
			__values: E,
			__read: B,
			__spread: S,
			__spreadArrays: H,
			__spreadArray: w,
			__await: T,
			__asyncGenerator: x,
			__asyncDelegator: P,
			__asyncValues: A,
			__makeTemplateObject: O,
			__importStar: R,
			__importDefault: L,
			__classPrivateFieldGet: M,
			__classPrivateFieldSet: I,
			__classPrivateFieldIn: N,
			__addDisposableResource: D,
			__disposeResources: U,
			__rewriteRelativeImportExtension: F
		}
	});
	(X = G || (G = {}))[X.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", X[X.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", X[X.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", X[X.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", X[X.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", X[X.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", X[X.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", X[X.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", X[X.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", X[X.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", X[X.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", X[X.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", X[X.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", X[X.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", X[X.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", X[X.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", X[X.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", X[X.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", X[X.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", X[X.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", X[X.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", X[X.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", X[X.INVALID_TAG = 23] = "INVALID_TAG", X[X.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", X[X.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", X[X.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	}(z || (z = {})), function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	}(K || (K = {}));
	var Y = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, q = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
	function $(e) {
		var t = {};
		return e.replace(q, function(e) {
			var r = e.length;
			switch (e[0]) {
				case "G":
					t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
					break;
				case "y":
					t.year = 2 === r ? "2-digit" : "numeric";
					break;
				case "Y":
				case "u":
				case "U":
				case "r": throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
				case "q":
				case "Q": throw new RangeError("`q/Q` (quarter) patterns are not supported");
				case "M":
				case "L":
					t.month = [
						"numeric",
						"2-digit",
						"short",
						"long",
						"narrow"
					][r - 1];
					break;
				case "w":
				case "W": throw new RangeError("`w/W` (week) patterns are not supported");
				case "d":
					t.day = ["numeric", "2-digit"][r - 1];
					break;
				case "D":
				case "F":
				case "g": throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
				case "E":
					t.weekday = 4 === r ? "long" : 5 === r ? "narrow" : "short";
					break;
				case "e":
					if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
					t.weekday = [
						"short",
						"long",
						"narrow",
						"short"
					][r - 4];
					break;
				case "c":
					if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
					t.weekday = [
						"short",
						"long",
						"narrow",
						"short"
					][r - 4];
					break;
				case "a":
					t.hour12 = !0;
					break;
				case "b":
				case "B": throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
				case "h":
					t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
					break;
				case "H":
					t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
					break;
				case "K":
					t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
					break;
				case "k":
					t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
					break;
				case "j":
				case "J":
				case "C": throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
				case "m":
					t.minute = ["numeric", "2-digit"][r - 1];
					break;
				case "s":
					t.second = ["numeric", "2-digit"][r - 1];
					break;
				case "S":
				case "A": throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
				case "z":
					t.timeZoneName = r < 4 ? "short" : "long";
					break;
				case "Z":
				case "O":
				case "v":
				case "V":
				case "X":
				case "x": throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
			}
			return "";
		}), t;
	}
	var Z = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
	function J(e) {
		return e.replace(/^(.*?)-/, "");
	}
	var Q = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, ee = /^(@+)?(\+|#+)?[rs]?$/g, te = /(\*)(0+)|(#+)(0+)|(0+)/g, re = /^(0+)$/;
	function ne(e) {
		var t = {};
		return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(ee, function(e, r, n) {
			return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), "";
		}), t;
	}
	function oe(e) {
		switch (e) {
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
	function ie(e) {
		var t;
		if ("E" === e[0] && "E" === e[1] ? (t = { notation: "engineering" }, e = e.slice(2)) : "E" === e[0] && (t = { notation: "scientific" }, e = e.slice(1)), t) {
			var r = e.slice(0, 2);
			if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !re.test(e)) throw new Error("Malformed concise eng/scientific notation");
			t.minimumIntegerDigits = e.length;
		}
		return t;
	}
	function se(e) {
		return oe(e) || {};
	}
	function ae(e) {
		for (var t = {}, r = 0, n = e; r < n.length; r++) {
			var o = n[r];
			switch (o.stem) {
				case "percent":
				case "%":
					t.style = "percent";
					continue;
				case "%x100":
					t.style = "percent", t.scale = 100;
					continue;
				case "currency":
					t.style = "currency", t.currency = o.options[0];
					continue;
				case "group-off":
				case ",_":
					t.useGrouping = !1;
					continue;
				case "precision-integer":
				case ".":
					t.maximumFractionDigits = 0;
					continue;
				case "measure-unit":
				case "unit":
					t.style = "unit", t.unit = J(o.options[0]);
					continue;
				case "compact-short":
				case "K":
					t.notation = "compact", t.compactDisplay = "short";
					continue;
				case "compact-long":
				case "KK":
					t.notation = "compact", t.compactDisplay = "long";
					continue;
				case "scientific":
					t = c(c(c({}, t), { notation: "scientific" }), o.options.reduce(function(e, t) {
						return c(c({}, e), se(t));
					}, {}));
					continue;
				case "engineering":
					t = c(c(c({}, t), { notation: "engineering" }), o.options.reduce(function(e, t) {
						return c(c({}, e), se(t));
					}, {}));
					continue;
				case "notation-simple":
					t.notation = "standard";
					continue;
				case "unit-width-narrow":
					t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
					continue;
				case "unit-width-short":
					t.currencyDisplay = "code", t.unitDisplay = "short";
					continue;
				case "unit-width-full-name":
					t.currencyDisplay = "name", t.unitDisplay = "long";
					continue;
				case "unit-width-iso-code":
					t.currencyDisplay = "symbol";
					continue;
				case "scale":
					t.scale = parseFloat(o.options[0]);
					continue;
				case "rounding-mode-floor":
					t.roundingMode = "floor";
					continue;
				case "rounding-mode-ceiling":
					t.roundingMode = "ceil";
					continue;
				case "rounding-mode-down":
					t.roundingMode = "trunc";
					continue;
				case "rounding-mode-up":
					t.roundingMode = "expand";
					continue;
				case "rounding-mode-half-even":
					t.roundingMode = "halfEven";
					continue;
				case "rounding-mode-half-down":
					t.roundingMode = "halfTrunc";
					continue;
				case "rounding-mode-half-up":
					t.roundingMode = "halfExpand";
					continue;
				case "integer-width":
					if (o.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
					o.options[0].replace(te, function(e, r, n, o, i, s) {
						if (r) t.minimumIntegerDigits = n.length;
						else {
							if (o && i) throw new Error("We currently do not support maximum integer digits");
							if (s) throw new Error("We currently do not support exact integer digits");
						}
						return "";
					});
					continue;
			}
			if (re.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
			else if (Q.test(o.stem)) {
				if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
				o.stem.replace(Q, function(e, r, n, o, i, s) {
					return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && s ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + s.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), "";
				});
				var i = o.options[0];
				"w" === i ? t = c(c({}, t), { trailingZeroDisplay: "stripIfInteger" }) : i && (t = c(c({}, t), ne(i)));
			} else if (ee.test(o.stem)) t = c(c({}, t), ne(o.stem));
			else {
				var s = oe(o.stem);
				s && (t = c(c({}, t), s));
				var a = ie(o.stem);
				a && (t = c(c({}, t), a));
			}
		}
		return t;
	}
	var ce, ue = {
		"001": ["H", "h"],
		419: [
			"h",
			"H",
			"hB",
			"hb"
		],
		AC: [
			"H",
			"h",
			"hb",
			"hB"
		],
		AD: ["H", "hB"],
		AE: [
			"h",
			"hB",
			"hb",
			"H"
		],
		AF: [
			"H",
			"hb",
			"hB",
			"h"
		],
		AG: [
			"h",
			"hb",
			"H",
			"hB"
		],
		AI: [
			"H",
			"h",
			"hb",
			"hB"
		],
		AL: [
			"h",
			"H",
			"hB"
		],
		AM: ["H", "hB"],
		AO: ["H", "hB"],
		AR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		AS: ["h", "H"],
		AT: ["H", "hB"],
		AU: [
			"h",
			"hb",
			"H",
			"hB"
		],
		AW: ["H", "hB"],
		AX: ["H"],
		AZ: [
			"H",
			"hB",
			"h"
		],
		BA: [
			"H",
			"hB",
			"h"
		],
		BB: [
			"h",
			"hb",
			"H",
			"hB"
		],
		BD: [
			"h",
			"hB",
			"H"
		],
		BE: ["H", "hB"],
		BF: ["H", "hB"],
		BG: [
			"H",
			"hB",
			"h"
		],
		BH: [
			"h",
			"hB",
			"hb",
			"H"
		],
		BI: ["H", "h"],
		BJ: ["H", "hB"],
		BL: ["H", "hB"],
		BM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		BN: [
			"hb",
			"hB",
			"h",
			"H"
		],
		BO: [
			"h",
			"H",
			"hB",
			"hb"
		],
		BQ: ["H"],
		BR: ["H", "hB"],
		BS: [
			"h",
			"hb",
			"H",
			"hB"
		],
		BT: ["h", "H"],
		BW: [
			"H",
			"h",
			"hb",
			"hB"
		],
		BY: ["H", "h"],
		BZ: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CA: [
			"h",
			"hb",
			"H",
			"hB"
		],
		CC: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CD: ["hB", "H"],
		CF: [
			"H",
			"h",
			"hB"
		],
		CG: ["H", "hB"],
		CH: [
			"H",
			"hB",
			"h"
		],
		CI: ["H", "hB"],
		CK: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CL: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CM: [
			"H",
			"h",
			"hB"
		],
		CN: [
			"H",
			"hB",
			"hb",
			"h"
		],
		CO: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CP: ["H"],
		CR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CU: [
			"h",
			"H",
			"hB",
			"hb"
		],
		CV: ["H", "hB"],
		CW: ["H", "hB"],
		CX: [
			"H",
			"h",
			"hb",
			"hB"
		],
		CY: [
			"h",
			"H",
			"hb",
			"hB"
		],
		CZ: ["H"],
		DE: ["H", "hB"],
		DG: [
			"H",
			"h",
			"hb",
			"hB"
		],
		DJ: ["h", "H"],
		DK: ["H"],
		DM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		DO: [
			"h",
			"H",
			"hB",
			"hb"
		],
		DZ: [
			"h",
			"hB",
			"hb",
			"H"
		],
		EA: [
			"H",
			"h",
			"hB",
			"hb"
		],
		EC: [
			"h",
			"H",
			"hB",
			"hb"
		],
		EE: ["H", "hB"],
		EG: [
			"h",
			"hB",
			"hb",
			"H"
		],
		EH: [
			"h",
			"hB",
			"hb",
			"H"
		],
		ER: ["h", "H"],
		ES: [
			"H",
			"hB",
			"h",
			"hb"
		],
		ET: [
			"hB",
			"hb",
			"h",
			"H"
		],
		FI: ["H"],
		FJ: [
			"h",
			"hb",
			"H",
			"hB"
		],
		FK: [
			"H",
			"h",
			"hb",
			"hB"
		],
		FM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		FO: ["H", "h"],
		FR: ["H", "hB"],
		GA: ["H", "hB"],
		GB: [
			"H",
			"h",
			"hb",
			"hB"
		],
		GD: [
			"h",
			"hb",
			"H",
			"hB"
		],
		GE: [
			"H",
			"hB",
			"h"
		],
		GF: ["H", "hB"],
		GG: [
			"H",
			"h",
			"hb",
			"hB"
		],
		GH: ["h", "H"],
		GI: [
			"H",
			"h",
			"hb",
			"hB"
		],
		GL: ["H", "h"],
		GM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		GN: ["H", "hB"],
		GP: ["H", "hB"],
		GQ: [
			"H",
			"hB",
			"h",
			"hb"
		],
		GR: [
			"h",
			"H",
			"hb",
			"hB"
		],
		GT: [
			"h",
			"H",
			"hB",
			"hb"
		],
		GU: [
			"h",
			"hb",
			"H",
			"hB"
		],
		GW: ["H", "hB"],
		GY: [
			"h",
			"hb",
			"H",
			"hB"
		],
		HK: [
			"h",
			"hB",
			"hb",
			"H"
		],
		HN: [
			"h",
			"H",
			"hB",
			"hb"
		],
		HR: ["H", "hB"],
		HU: ["H", "h"],
		IC: [
			"H",
			"h",
			"hB",
			"hb"
		],
		ID: ["H"],
		IE: [
			"H",
			"h",
			"hb",
			"hB"
		],
		IL: ["H", "hB"],
		IM: [
			"H",
			"h",
			"hb",
			"hB"
		],
		IN: ["h", "H"],
		IO: [
			"H",
			"h",
			"hb",
			"hB"
		],
		IQ: [
			"h",
			"hB",
			"hb",
			"H"
		],
		IR: ["hB", "H"],
		IS: ["H"],
		IT: ["H", "hB"],
		JE: [
			"H",
			"h",
			"hb",
			"hB"
		],
		JM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		JO: [
			"h",
			"hB",
			"hb",
			"H"
		],
		JP: [
			"H",
			"K",
			"h"
		],
		KE: [
			"hB",
			"hb",
			"H",
			"h"
		],
		KG: [
			"H",
			"h",
			"hB",
			"hb"
		],
		KH: [
			"hB",
			"h",
			"H",
			"hb"
		],
		KI: [
			"h",
			"hb",
			"H",
			"hB"
		],
		KM: [
			"H",
			"h",
			"hB",
			"hb"
		],
		KN: [
			"h",
			"hb",
			"H",
			"hB"
		],
		KP: [
			"h",
			"H",
			"hB",
			"hb"
		],
		KR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		KW: [
			"h",
			"hB",
			"hb",
			"H"
		],
		KY: [
			"h",
			"hb",
			"H",
			"hB"
		],
		KZ: ["H", "hB"],
		LA: [
			"H",
			"hb",
			"hB",
			"h"
		],
		LB: [
			"h",
			"hB",
			"hb",
			"H"
		],
		LC: [
			"h",
			"hb",
			"H",
			"hB"
		],
		LI: [
			"H",
			"hB",
			"h"
		],
		LK: [
			"H",
			"h",
			"hB",
			"hb"
		],
		LR: [
			"h",
			"hb",
			"H",
			"hB"
		],
		LS: ["h", "H"],
		LT: [
			"H",
			"h",
			"hb",
			"hB"
		],
		LU: [
			"H",
			"h",
			"hB"
		],
		LV: [
			"H",
			"hB",
			"hb",
			"h"
		],
		LY: [
			"h",
			"hB",
			"hb",
			"H"
		],
		MA: [
			"H",
			"h",
			"hB",
			"hb"
		],
		MC: ["H", "hB"],
		MD: ["H", "hB"],
		ME: [
			"H",
			"hB",
			"h"
		],
		MF: ["H", "hB"],
		MG: ["H", "h"],
		MH: [
			"h",
			"hb",
			"H",
			"hB"
		],
		MK: [
			"H",
			"h",
			"hb",
			"hB"
		],
		ML: ["H"],
		MM: [
			"hB",
			"hb",
			"H",
			"h"
		],
		MN: [
			"H",
			"h",
			"hb",
			"hB"
		],
		MO: [
			"h",
			"hB",
			"hb",
			"H"
		],
		MP: [
			"h",
			"hb",
			"H",
			"hB"
		],
		MQ: ["H", "hB"],
		MR: [
			"h",
			"hB",
			"hb",
			"H"
		],
		MS: [
			"H",
			"h",
			"hb",
			"hB"
		],
		MT: ["H", "h"],
		MU: ["H", "h"],
		MV: ["H", "h"],
		MW: [
			"h",
			"hb",
			"H",
			"hB"
		],
		MX: [
			"h",
			"H",
			"hB",
			"hb"
		],
		MY: [
			"hb",
			"hB",
			"h",
			"H"
		],
		MZ: ["H", "hB"],
		NA: [
			"h",
			"H",
			"hB",
			"hb"
		],
		NC: ["H", "hB"],
		NE: ["H"],
		NF: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NG: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NI: [
			"h",
			"H",
			"hB",
			"hb"
		],
		NL: ["H", "hB"],
		NO: ["H", "h"],
		NP: [
			"H",
			"h",
			"hB"
		],
		NR: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NU: [
			"H",
			"h",
			"hb",
			"hB"
		],
		NZ: [
			"h",
			"hb",
			"H",
			"hB"
		],
		OM: [
			"h",
			"hB",
			"hb",
			"H"
		],
		PA: [
			"h",
			"H",
			"hB",
			"hb"
		],
		PE: [
			"h",
			"H",
			"hB",
			"hb"
		],
		PF: [
			"H",
			"h",
			"hB"
		],
		PG: ["h", "H"],
		PH: [
			"h",
			"hB",
			"hb",
			"H"
		],
		PK: [
			"h",
			"hB",
			"H"
		],
		PL: ["H", "h"],
		PM: ["H", "hB"],
		PN: [
			"H",
			"h",
			"hb",
			"hB"
		],
		PR: [
			"h",
			"H",
			"hB",
			"hb"
		],
		PS: [
			"h",
			"hB",
			"hb",
			"H"
		],
		PT: ["H", "hB"],
		PW: ["h", "H"],
		PY: [
			"h",
			"H",
			"hB",
			"hb"
		],
		QA: [
			"h",
			"hB",
			"hb",
			"H"
		],
		RE: ["H", "hB"],
		RO: ["H", "hB"],
		RS: [
			"H",
			"hB",
			"h"
		],
		RU: ["H"],
		RW: ["H", "h"],
		SA: [
			"h",
			"hB",
			"hb",
			"H"
		],
		SB: [
			"h",
			"hb",
			"H",
			"hB"
		],
		SC: [
			"H",
			"h",
			"hB"
		],
		SD: [
			"h",
			"hB",
			"hb",
			"H"
		],
		SE: ["H"],
		SG: [
			"h",
			"hb",
			"H",
			"hB"
		],
		SH: [
			"H",
			"h",
			"hb",
			"hB"
		],
		SI: ["H", "hB"],
		SJ: ["H"],
		SK: ["H"],
		SL: [
			"h",
			"hb",
			"H",
			"hB"
		],
		SM: [
			"H",
			"h",
			"hB"
		],
		SN: [
			"H",
			"h",
			"hB"
		],
		SO: ["h", "H"],
		SR: ["H", "hB"],
		SS: [
			"h",
			"hb",
			"H",
			"hB"
		],
		ST: ["H", "hB"],
		SV: [
			"h",
			"H",
			"hB",
			"hb"
		],
		SX: [
			"H",
			"h",
			"hb",
			"hB"
		],
		SY: [
			"h",
			"hB",
			"hb",
			"H"
		],
		SZ: [
			"h",
			"hb",
			"H",
			"hB"
		],
		TA: [
			"H",
			"h",
			"hb",
			"hB"
		],
		TC: [
			"h",
			"hb",
			"H",
			"hB"
		],
		TD: [
			"h",
			"H",
			"hB"
		],
		TF: [
			"H",
			"h",
			"hB"
		],
		TG: ["H", "hB"],
		TH: ["H", "h"],
		TJ: ["H", "h"],
		TL: [
			"H",
			"hB",
			"hb",
			"h"
		],
		TM: ["H", "h"],
		TN: [
			"h",
			"hB",
			"hb",
			"H"
		],
		TO: ["h", "H"],
		TR: ["H", "hB"],
		TT: [
			"h",
			"hb",
			"H",
			"hB"
		],
		TW: [
			"hB",
			"hb",
			"h",
			"H"
		],
		TZ: [
			"hB",
			"hb",
			"H",
			"h"
		],
		UA: [
			"H",
			"hB",
			"h"
		],
		UG: [
			"hB",
			"hb",
			"H",
			"h"
		],
		UM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		US: [
			"h",
			"hb",
			"H",
			"hB"
		],
		UY: [
			"h",
			"H",
			"hB",
			"hb"
		],
		UZ: [
			"H",
			"hB",
			"h"
		],
		VA: [
			"H",
			"h",
			"hB"
		],
		VC: [
			"h",
			"hb",
			"H",
			"hB"
		],
		VE: [
			"h",
			"H",
			"hB",
			"hb"
		],
		VG: [
			"h",
			"hb",
			"H",
			"hB"
		],
		VI: [
			"h",
			"hb",
			"H",
			"hB"
		],
		VN: ["H", "h"],
		VU: ["h", "H"],
		WF: ["H", "hB"],
		WS: ["h", "H"],
		XK: [
			"H",
			"hB",
			"h"
		],
		YE: [
			"h",
			"hB",
			"hb",
			"H"
		],
		YT: ["H", "hB"],
		ZA: [
			"H",
			"h",
			"hb",
			"hB"
		],
		ZM: [
			"h",
			"hb",
			"H",
			"hB"
		],
		ZW: ["H", "h"],
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
	function he(e) {
		var t = e.hourCycle;
		if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
			case "h24": return "k";
			case "h23": return "H";
			case "h12": return "h";
			case "h11": return "K";
			default: throw new Error("Invalid hourCycle");
		}
		var r, n = e.language;
		return "root" !== n && (r = e.maximize().region), (ue[r || ""] || ue[n || ""] || ue["".concat(n, "-001")] || ue["001"])[0];
	}
	var le = new RegExp("^".concat(Y.source, "*")), fe = new RegExp("".concat(Y.source, "*$"));
	function pe(e, t) {
		return {
			start: e,
			end: t
		};
	}
	var de = !!String.prototype.startsWith && "_a".startsWith("a", 1), ve = !!String.fromCodePoint, ye = !!Object.fromEntries, _e = !!String.prototype.codePointAt, ge = !!String.prototype.trimStart, be = !!String.prototype.trimEnd, me = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
		return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
	}, Ee = !0;
	try {
		Ee = "a" === (null === (ce = Ae("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === ce ? void 0 : ce[0]);
	} catch (e) {
		Ee = !1;
	}
	var Be, Se = de ? function(e, t, r) {
		return e.startsWith(t, r);
	} : function(e, t, r) {
		return e.slice(r, r + t.length) === t;
	}, He = ve ? String.fromCodePoint : function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		for (var r, n = "", o = e.length, i = 0; o > i;) {
			if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
			n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320);
		}
		return n;
	}, we = ye ? Object.fromEntries : function(e) {
		for (var t = {}, r = 0, n = e; r < n.length; r++) {
			var o = n[r], i = o[0];
			t[i] = o[1];
		}
		return t;
	}, Te = _e ? function(e, t) {
		return e.codePointAt(t);
	} : function(e, t) {
		var r = e.length;
		if (!(t < 0 || t >= r)) {
			var n, o = e.charCodeAt(t);
			return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536;
		}
	}, xe = ge ? function(e) {
		return e.trimStart();
	} : function(e) {
		return e.replace(le, "");
	}, Pe = be ? function(e) {
		return e.trimEnd();
	} : function(e) {
		return e.replace(fe, "");
	};
	function Ae(e, t) {
		return new RegExp(e, t);
	}
	if (Ee) {
		var Oe = Ae("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
		Be = function(e, t) {
			var r;
			return Oe.lastIndex = t, null !== (r = Oe.exec(e)[1]) && void 0 !== r ? r : "";
		};
	} else Be = function(e, t) {
		for (var r = [];;) {
			var n = Te(e, t);
			if (void 0 === n || Le(n) || Me(n)) break;
			r.push(n), t += n >= 65536 ? 2 : 1;
		}
		return He.apply(void 0, r);
	};
	var Ce = function() {
		function e(e, t) {
			void 0 === t && (t = {}), this.message = e, this.position = {
				offset: 0,
				line: 1,
				column: 1
			}, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
		}
		return e.prototype.parse = function() {
			if (0 !== this.offset()) throw Error("parser can only be used once");
			return this.parseMessage(0, "", !1);
		}, e.prototype.parseMessage = function(e, t, r) {
			for (var n = []; !this.isEOF();) {
				var o = this.char();
				if (123 === o) {
					if ((i = this.parseArgument(e, r)).err) return i;
					n.push(i.val);
				} else {
					if (125 === o && e > 0) break;
					if (35 !== o || "plural" !== t && "selectordinal" !== t) {
						if (60 === o && !this.ignoreTag && 47 === this.peek()) {
							if (r) break;
							return this.error(G.UNMATCHED_CLOSING_TAG, pe(this.clonePosition(), this.clonePosition()));
						}
						if (60 === o && !this.ignoreTag && ke(this.peek() || 0)) {
							if ((i = this.parseTag(e, t)).err) return i;
							n.push(i.val);
						} else {
							var i;
							if ((i = this.parseLiteral(e, t)).err) return i;
							n.push(i.val);
						}
					} else {
						var s = this.clonePosition();
						this.bump(), n.push({
							type: z.pound,
							location: pe(s, this.clonePosition())
						});
					}
				}
			}
			return {
				val: n,
				err: null
			};
		}, e.prototype.parseTag = function(e, t) {
			var r = this.clonePosition();
			this.bump();
			var n = this.parseTagName();
			if (this.bumpSpace(), this.bumpIf("/>")) return {
				val: {
					type: z.literal,
					value: "<".concat(n, "/>"),
					location: pe(r, this.clonePosition())
				},
				err: null
			};
			if (this.bumpIf(">")) {
				var o = this.parseMessage(e + 1, t, !0);
				if (o.err) return o;
				var i = o.val, s = this.clonePosition();
				if (this.bumpIf("</")) {
					if (this.isEOF() || !ke(this.char())) return this.error(G.INVALID_TAG, pe(s, this.clonePosition()));
					var a = this.clonePosition();
					return n !== this.parseTagName() ? this.error(G.UNMATCHED_CLOSING_TAG, pe(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
						val: {
							type: z.tag,
							value: n,
							children: i,
							location: pe(r, this.clonePosition())
						},
						err: null
					} : this.error(G.INVALID_TAG, pe(s, this.clonePosition())));
				}
				return this.error(G.UNCLOSED_TAG, pe(r, this.clonePosition()));
			}
			return this.error(G.INVALID_TAG, pe(r, this.clonePosition()));
		}, e.prototype.parseTagName = function() {
			var e = this.offset();
			for (this.bump(); !this.isEOF() && Re(this.char());) this.bump();
			return this.message.slice(e, this.offset());
		}, e.prototype.parseLiteral = function(e, t) {
			for (var r = this.clonePosition(), n = "";;) {
				var o = this.tryParseQuote(t);
				if (o) n += o;
				else {
					var i = this.tryParseUnquoted(e, t);
					if (i) n += i;
					else {
						var s = this.tryParseLeftAngleBracket();
						if (!s) break;
						n += s;
					}
				}
			}
			var a = pe(r, this.clonePosition());
			return {
				val: {
					type: z.literal,
					value: n,
					location: a
				},
				err: null
			};
		}, e.prototype.tryParseLeftAngleBracket = function() {
			return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (ke(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
			var e;
		}, e.prototype.tryParseQuote = function(e) {
			if (this.isEOF() || 39 !== this.char()) return null;
			switch (this.peek()) {
				case 39: return this.bump(), this.bump(), "'";
				case 123:
				case 60:
				case 62:
				case 125: break;
				case 35:
					if ("plural" === e || "selectordinal" === e) break;
					return null;
				default: return null;
			}
			this.bump();
			var t = [this.char()];
			for (this.bump(); !this.isEOF();) {
				var r = this.char();
				if (39 === r) {
					if (39 !== this.peek()) {
						this.bump();
						break;
					}
					t.push(39), this.bump();
				} else t.push(r);
				this.bump();
			}
			return He.apply(void 0, t);
		}, e.prototype.tryParseUnquoted = function(e, t) {
			if (this.isEOF()) return null;
			var r = this.char();
			return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), He(r));
		}, e.prototype.parseArgument = function(e, t) {
			var r = this.clonePosition();
			if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(G.EXPECT_ARGUMENT_CLOSING_BRACE, pe(r, this.clonePosition()));
			if (125 === this.char()) return this.bump(), this.error(G.EMPTY_ARGUMENT, pe(r, this.clonePosition()));
			var n = this.parseIdentifierIfPossible().value;
			if (!n) return this.error(G.MALFORMED_ARGUMENT, pe(r, this.clonePosition()));
			if (this.bumpSpace(), this.isEOF()) return this.error(G.EXPECT_ARGUMENT_CLOSING_BRACE, pe(r, this.clonePosition()));
			switch (this.char()) {
				case 125: return this.bump(), {
					val: {
						type: z.argument,
						value: n,
						location: pe(r, this.clonePosition())
					},
					err: null
				};
				case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(G.EXPECT_ARGUMENT_CLOSING_BRACE, pe(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
				default: return this.error(G.MALFORMED_ARGUMENT, pe(r, this.clonePosition()));
			}
		}, e.prototype.parseIdentifierIfPossible = function() {
			var e = this.clonePosition(), t = this.offset(), r = Be(this.message, t), n = t + r.length;
			return this.bumpTo(n), {
				value: r,
				location: pe(e, this.clonePosition())
			};
		}, e.prototype.parseArgumentOptions = function(e, t, r, n) {
			var o, i = this.clonePosition(), s = this.parseIdentifierIfPossible().value, a = this.clonePosition();
			switch (s) {
				case "": return this.error(G.EXPECT_ARGUMENT_TYPE, pe(i, a));
				case "number":
				case "date":
				case "time":
					this.bumpSpace();
					var u = null;
					if (this.bumpIf(",")) {
						this.bumpSpace();
						var h = this.clonePosition();
						if ((g = this.parseSimpleArgStyleIfPossible()).err) return g;
						if (0 === (d = Pe(g.val)).length) return this.error(G.EXPECT_ARGUMENT_STYLE, pe(this.clonePosition(), this.clonePosition()));
						u = {
							style: d,
							styleLocation: pe(h, this.clonePosition())
						};
					}
					if ((b = this.tryParseArgumentClose(n)).err) return b;
					var l = pe(n, this.clonePosition());
					if (u && Se(null == u ? void 0 : u.style, "::", 0)) {
						var f = xe(u.style.slice(2));
						if ("number" === s) return (g = this.parseNumberSkeletonFromString(f, u.styleLocation)).err ? g : {
							val: {
								type: z.number,
								value: r,
								location: l,
								style: g.val
							},
							err: null
						};
						if (0 === f.length) return this.error(G.EXPECT_DATE_TIME_SKELETON, l);
						var p = f;
						this.locale && (p = function(e, t) {
							for (var r = "", n = 0; n < e.length; n++) {
								var o = e.charAt(n);
								if ("j" === o) {
									for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
									var s = 1 + (1 & i), a = i < 2 ? 1 : 3 + (i >> 1), c = he(t);
									for ("H" != c && "k" != c || (a = 0); a-- > 0;) r += "a";
									for (; s-- > 0;) r = c + r;
								} else r += "J" === o ? "H" : o;
							}
							return r;
						}(f, this.locale));
						var d = {
							type: K.dateTime,
							pattern: p,
							location: u.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? $(p) : {}
						};
						return {
							val: {
								type: "date" === s ? z.date : z.time,
								value: r,
								location: l,
								style: d
							},
							err: null
						};
					}
					return {
						val: {
							type: "number" === s ? z.number : "date" === s ? z.date : z.time,
							value: r,
							location: l,
							style: null !== (o = null == u ? void 0 : u.style) && void 0 !== o ? o : null
						},
						err: null
					};
				case "plural":
				case "selectordinal":
				case "select":
					var v = this.clonePosition();
					if (this.bumpSpace(), !this.bumpIf(",")) return this.error(G.EXPECT_SELECT_ARGUMENT_OPTIONS, pe(v, c({}, v)));
					this.bumpSpace();
					var y = this.parseIdentifierIfPossible(), _ = 0;
					if ("select" !== s && "offset" === y.value) {
						if (!this.bumpIf(":")) return this.error(G.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, pe(this.clonePosition(), this.clonePosition()));
						var g;
						if (this.bumpSpace(), (g = this.tryParseDecimalInteger(G.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, G.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return g;
						this.bumpSpace(), y = this.parseIdentifierIfPossible(), _ = g.val;
					}
					var b, m = this.tryParsePluralOrSelectOptions(e, s, t, y);
					if (m.err) return m;
					if ((b = this.tryParseArgumentClose(n)).err) return b;
					var E = pe(n, this.clonePosition());
					return "select" === s ? {
						val: {
							type: z.select,
							value: r,
							options: we(m.val),
							location: E
						},
						err: null
					} : {
						val: {
							type: z.plural,
							value: r,
							options: we(m.val),
							offset: _,
							pluralType: "plural" === s ? "cardinal" : "ordinal",
							location: E
						},
						err: null
					};
				default: return this.error(G.INVALID_ARGUMENT_TYPE, pe(i, a));
			}
		}, e.prototype.tryParseArgumentClose = function(e) {
			return this.isEOF() || 125 !== this.char() ? this.error(G.EXPECT_ARGUMENT_CLOSING_BRACE, pe(e, this.clonePosition())) : (this.bump(), {
				val: !0,
				err: null
			});
		}, e.prototype.parseSimpleArgStyleIfPossible = function() {
			for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
				case 39:
					this.bump();
					var r = this.clonePosition();
					if (!this.bumpUntil("'")) return this.error(G.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, pe(r, this.clonePosition()));
					this.bump();
					break;
				case 123:
					e += 1, this.bump();
					break;
				case 125:
					if (!(e > 0)) return {
						val: this.message.slice(t.offset, this.offset()),
						err: null
					};
					e -= 1;
					break;
				default: this.bump();
			}
			return {
				val: this.message.slice(t.offset, this.offset()),
				err: null
			};
		}, e.prototype.parseNumberSkeletonFromString = function(e, t) {
			var r = [];
			try {
				r = function(e) {
					if (0 === e.length) throw new Error("Number skeleton cannot be empty");
					for (var t = [], r = 0, n = e.split(Z).filter(function(e) {
						return e.length > 0;
					}); r < n.length; r++) {
						var o = n[r].split("/");
						if (0 === o.length) throw new Error("Invalid number skeleton");
						for (var i = o[0], s = o.slice(1), a = 0, c = s; a < c.length; a++) if (0 === c[a].length) throw new Error("Invalid number skeleton");
						t.push({
							stem: i,
							options: s
						});
					}
					return t;
				}(e);
			} catch (e) {
				return this.error(G.INVALID_NUMBER_SKELETON, t);
			}
			return {
				val: {
					type: K.number,
					tokens: r,
					location: t,
					parsedOptions: this.shouldParseSkeletons ? ae(r) : {}
				},
				err: null
			};
		}, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
			for (var o, i = !1, s = [], a = /* @__PURE__ */ new Set(), c = n.value, u = n.location;;) {
				if (0 === c.length) {
					var h = this.clonePosition();
					if ("select" === t || !this.bumpIf("=")) break;
					var l = this.tryParseDecimalInteger(G.EXPECT_PLURAL_ARGUMENT_SELECTOR, G.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (l.err) return l;
					u = pe(h, this.clonePosition()), c = this.message.slice(h.offset, this.offset());
				}
				if (a.has(c)) return this.error("select" === t ? G.DUPLICATE_SELECT_ARGUMENT_SELECTOR : G.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
				"other" === c && (i = !0), this.bumpSpace();
				var f = this.clonePosition();
				if (!this.bumpIf("{")) return this.error("select" === t ? G.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : G.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, pe(this.clonePosition(), this.clonePosition()));
				var p = this.parseMessage(e + 1, t, r);
				if (p.err) return p;
				var d = this.tryParseArgumentClose(f);
				if (d.err) return d;
				s.push([c, {
					value: p.val,
					location: pe(f, this.clonePosition())
				}]), a.add(c), this.bumpSpace(), c = (o = this.parseIdentifierIfPossible()).value, u = o.location;
			}
			return 0 === s.length ? this.error("select" === t ? G.EXPECT_SELECT_ARGUMENT_SELECTOR : G.EXPECT_PLURAL_ARGUMENT_SELECTOR, pe(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(G.MISSING_OTHER_CLAUSE, pe(this.clonePosition(), this.clonePosition())) : {
				val: s,
				err: null
			};
		}, e.prototype.tryParseDecimalInteger = function(e, t) {
			var r = 1, n = this.clonePosition();
			this.bumpIf("+") || this.bumpIf("-") && (r = -1);
			for (var o = !1, i = 0; !this.isEOF();) {
				var s = this.char();
				if (!(s >= 48 && s <= 57)) break;
				o = !0, i = 10 * i + (s - 48), this.bump();
			}
			var a = pe(n, this.clonePosition());
			return o ? me(i *= r) ? {
				val: i,
				err: null
			} : this.error(t, a) : this.error(e, a);
		}, e.prototype.offset = function() {
			return this.position.offset;
		}, e.prototype.isEOF = function() {
			return this.offset() === this.message.length;
		}, e.prototype.clonePosition = function() {
			return {
				offset: this.position.offset,
				line: this.position.line,
				column: this.position.column
			};
		}, e.prototype.char = function() {
			var e = this.position.offset;
			if (e >= this.message.length) throw Error("out of bound");
			var t = Te(this.message, e);
			if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
			return t;
		}, e.prototype.error = function(e, t) {
			return {
				val: null,
				err: {
					kind: e,
					message: this.message,
					location: t
				}
			};
		}, e.prototype.bump = function() {
			if (!this.isEOF()) {
				var e = this.char();
				10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
			}
		}, e.prototype.bumpIf = function(e) {
			if (Se(this.message, e, this.offset())) {
				for (var t = 0; t < e.length; t++) this.bump();
				return !0;
			}
			return !1;
		}, e.prototype.bumpUntil = function(e) {
			var t = this.offset(), r = this.message.indexOf(e, t);
			return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
		}, e.prototype.bumpTo = function(e) {
			if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
			for (e = Math.min(e, this.message.length);;) {
				var t = this.offset();
				if (t === e) break;
				if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
				if (this.bump(), this.isEOF()) break;
			}
		}, e.prototype.bumpSpace = function() {
			for (; !this.isEOF() && Le(this.char());) this.bump();
		}, e.prototype.peek = function() {
			if (this.isEOF()) return null;
			var e = this.char(), t = this.offset(), r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
			return null != r ? r : null;
		}, e;
	}();
	function ke(e) {
		return e >= 97 && e <= 122 || e >= 65 && e <= 90;
	}
	function Re(e) {
		return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
	}
	function Le(e) {
		return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e;
	}
	function Me(e) {
		return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094;
	}
	function Ie(e) {
		e.forEach(function(e) {
			if (delete e.location, function(e) {
				return e.type === z.select;
			}(e) || function(e) {
				return e.type === z.plural;
			}(e)) for (var t in e.options) delete e.options[t].location, Ie(e.options[t].value);
			else (function(e) {
				return e.type === z.number;
			})(e) && function(e) {
				return !(!e || "object" != typeof e || e.type !== K.number);
			}(e.style) || (function(e) {
				return e.type === z.date;
			}(e) || function(e) {
				return e.type === z.time;
			}(e)) && function(e) {
				return !(!e || "object" != typeof e || e.type !== K.dateTime);
			}(e.style) ? delete e.style.location : function(e) {
				return e.type === z.tag;
			}(e) && Ie(e.children);
		});
	}
	var Ne = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
	function De(e) {
		return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
	}
	function je(e) {
		if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
		var t = e.default;
		if ("function" == typeof t) {
			var r = function e() {
				var r = !1;
				try {
					r = this instanceof e;
				} catch {}
				return r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
			};
			r.prototype = t.prototype;
		} else r = {};
		return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
			var n = Object.getOwnPropertyDescriptor(e, t);
			Object.defineProperty(r, t, n.get ? n : {
				enumerable: !0,
				get: function() {
					return e[t];
				}
			});
		}), r;
	}
	var Ue, Fe = {};
	function Ge() {
		return Ue || (Ue = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.SKELETON_TYPE = Fe.TYPE = void 0, Fe.isLiteralElement = function(t) {
			return t.type === e.literal;
		}, Fe.isArgumentElement = function(t) {
			return t.type === e.argument;
		}, Fe.isNumberElement = function(t) {
			return t.type === e.number;
		}, Fe.isDateElement = function(t) {
			return t.type === e.date;
		}, Fe.isTimeElement = function(t) {
			return t.type === e.time;
		}, Fe.isSelectElement = function(t) {
			return t.type === e.select;
		}, Fe.isPluralElement = function(t) {
			return t.type === e.plural;
		}, Fe.isPoundElement = function(t) {
			return t.type === e.pound;
		}, Fe.isTagElement = function(t) {
			return t.type === e.tag;
		}, Fe.isNumberSkeleton = function(e) {
			return !(!e || "object" != typeof e || e.type !== t.number);
		}, Fe.isDateTimeSkeleton = function(e) {
			return !(!e || "object" != typeof e || e.type !== t.dateTime);
		}, Fe.createLiteralElement = function(t) {
			return {
				type: e.literal,
				value: t
			};
		}, Fe.createNumberElement = function(t, r) {
			return {
				type: e.number,
				value: t,
				style: r
			};
		}, function(e) {
			e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
		}(e || (Fe.TYPE = e = {})), function(e) {
			e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
		}(t || (Fe.SKELETON_TYPE = t = {}))), Fe;
		var e, t;
	}
	var ze, Ke, Xe, Ve = Ge(), We = {}, Ye = je(W);
	(function() {
		if (ze) return We;
		ze = 1, Object.defineProperty(We, "__esModule", { value: !0 }), We.printAST = r, We.doPrintAST = n, We.printDateTimeSkeleton = s;
		var e = Ye, t = Ge();
		function r(e) {
			return n(e, !1);
		}
		function n(a, c) {
			return a.map(function(u, h) {
				return (0, t.isLiteralElement)(u) ? function(e, t, r, n) {
					var i = e.value;
					return r || "'" !== i[0] || (i = "''".concat(i.slice(1))), n || "'" !== i[i.length - 1] || (i = "".concat(i.slice(0, i.length - 1), "''")), i = o(i), t ? i.replace("#", "'#'") : i;
				}(u, c, 0 === h, h === a.length - 1) : (0, t.isArgumentElement)(u) ? function(e) {
					var t = e.value;
					return "{".concat(t, "}");
				}(u) : (0, t.isDateElement)(u) || (0, t.isTimeElement)(u) || (0, t.isNumberElement)(u) ? function(e) {
					return "{".concat(e.value, ", ").concat(t.TYPE[e.type]).concat(e.style ? ", ".concat("string" == typeof (r = e.style) ? o(r) : r.type === t.SKELETON_TYPE.dateTime ? "::".concat(s(r)) : "::".concat(r.tokens.map(i).join(" "))) : "", "}");
					var r;
				}(u) : (0, t.isPluralElement)(u) ? function(t) {
					var r = "cardinal" === t.pluralType ? "plural" : "selectordinal", o = [
						t.value,
						r,
						e.__spreadArray([t.offset ? "offset:".concat(t.offset) : ""], Object.keys(t.options).map(function(e) {
							return "".concat(e, "{").concat(n(t.options[e].value, !0), "}");
						}), !0).filter(Boolean).join(" ")
					].join(",");
					return "{".concat(o, "}");
				}(u) : (0, t.isSelectElement)(u) ? function(e) {
					var t = [
						e.value,
						"select",
						Object.keys(e.options).map(function(t) {
							return "".concat(t, "{").concat(n(e.options[t].value, !1), "}");
						}).join(" ")
					].join(",");
					return "{".concat(t, "}");
				}(u) : (0, t.isPoundElement)(u) ? "#" : (0, t.isTagElement)(u) ? function(e) {
					return "<".concat(e.value, ">").concat(r(e.children), "</").concat(e.value, ">");
				}(u) : void 0;
			}).join("");
		}
		function o(e) {
			return e.replace(/([{}](?:[\s\S]*[{}])?)/, "'$1'");
		}
		function i(e) {
			var t = e.stem, r = e.options;
			return 0 === r.length ? t : "".concat(t).concat(r.map(function(e) {
				return "/".concat(e);
			}).join(""));
		}
		function s(e) {
			return e.pattern;
		}
	})();
	var qe, Ze = De((Xe || (Xe = 1, Ke = function(e, t) {
		t || (t = {}), "function" == typeof t && (t = { cmp: t });
		var r = "boolean" == typeof t.cycles && t.cycles, n = t.cmp && function(e) {
			return function(t) {
				return function(r, n) {
					return e({
						key: r,
						value: t[r]
					}, {
						key: n,
						value: t[n]
					});
				};
			};
		}(t.cmp), o = [];
		return function e(t) {
			if (t && t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON()), void 0 !== t) {
				if ("number" == typeof t) return isFinite(t) ? "" + t : "null";
				if ("object" != typeof t) return JSON.stringify(t);
				var i, s;
				if (Array.isArray(t)) {
					for (s = "[", i = 0; i < t.length; i++) i && (s += ","), s += e(t[i]) || "null";
					return s + "]";
				}
				if (null === t) return "null";
				if (-1 !== o.indexOf(t)) {
					if (r) return JSON.stringify("__cycle__");
					throw new TypeError("Converting circular structure to JSON");
				}
				var a = o.push(t) - 1, c = Object.keys(t).sort(n && n(t));
				for (s = "", i = 0; i < c.length; i++) {
					var u = c[i], h = e(t[u]);
					h && (s && (s += ","), s += JSON.stringify(u) + ":" + h);
				}
				return o.splice(a, 1), "{" + s + "}";
			}
		}(e);
	}), Ke)), Je = { exports: {} }, Qe = { exports: {} }, et = je(Object.freeze({
		__proto__: null,
		default: {}
	}));
	function tt() {
		return qe || (qe = 1, Qe.exports = (e = e || function(e) {
			var t;
			if ("undefined" != typeof window && window.crypto && (t = window.crypto), "undefined" != typeof self && self.crypto && (t = self.crypto), "undefined" != typeof globalThis && globalThis.crypto && (t = globalThis.crypto), !t && "undefined" != typeof window && window.msCrypto && (t = window.msCrypto), !t && void 0 !== Ne && Ne.crypto && (t = Ne.crypto), !t) try {
				t = et;
			} catch (e) {}
			var r = function() {
				if (t) {
					if ("function" == typeof t.getRandomValues) try {
						return t.getRandomValues(new Uint32Array(1))[0];
					} catch (e) {}
					if ("function" == typeof t.randomBytes) try {
						return t.randomBytes(4).readInt32LE();
					} catch (e) {}
				}
				throw new Error("Native crypto module could not be used to get secure random number.");
			}, n = Object.create || function() {
				function e() {}
				return function(t) {
					var r;
					return e.prototype = t, r = new e(), e.prototype = null, r;
				};
			}(), o = {}, i = o.lib = {}, s = i.Base = {
				extend: function(e) {
					var t = n(this);
					return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
						t.$super.init.apply(this, arguments);
					}), t.init.prototype = t, t.$super = this, t;
				},
				create: function() {
					var e = this.extend();
					return e.init.apply(e, arguments), e;
				},
				init: function() {},
				mixIn: function(e) {
					for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
					e.hasOwnProperty("toString") && (this.toString = e.toString);
				},
				clone: function() {
					return this.init.prototype.extend(this);
				}
			}, a = i.WordArray = s.extend({
				init: function(e, t) {
					e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;
				},
				toString: function(e) {
					return (e || u).stringify(this);
				},
				concat: function(e) {
					var t = this.words, r = e.words, n = this.sigBytes, o = e.sigBytes;
					if (this.clamp(), n % 4) for (var i = 0; i < o; i++) {
						var s = r[i >>> 2] >>> 24 - i % 4 * 8 & 255;
						t[n + i >>> 2] |= s << 24 - (n + i) % 4 * 8;
					}
					else for (var a = 0; a < o; a += 4) t[n + a >>> 2] = r[a >>> 2];
					return this.sigBytes += o, this;
				},
				clamp: function() {
					var t = this.words, r = this.sigBytes;
					t[r >>> 2] &= 4294967295 << 32 - r % 4 * 8, t.length = e.ceil(r / 4);
				},
				clone: function() {
					var e = s.clone.call(this);
					return e.words = this.words.slice(0), e;
				},
				random: function(e) {
					for (var t = [], n = 0; n < e; n += 4) t.push(r());
					return new a.init(t, e);
				}
			}), c = o.enc = {}, u = c.Hex = {
				stringify: function(e) {
					for (var t = e.words, r = e.sigBytes, n = [], o = 0; o < r; o++) {
						var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
						n.push((i >>> 4).toString(16)), n.push((15 & i).toString(16));
					}
					return n.join("");
				},
				parse: function(e) {
					for (var t = e.length, r = [], n = 0; n < t; n += 2) r[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
					return new a.init(r, t / 2);
				}
			}, h = c.Latin1 = {
				stringify: function(e) {
					for (var t = e.words, r = e.sigBytes, n = [], o = 0; o < r; o++) {
						var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
						n.push(String.fromCharCode(i));
					}
					return n.join("");
				},
				parse: function(e) {
					for (var t = e.length, r = [], n = 0; n < t; n++) r[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
					return new a.init(r, t);
				}
			}, l = c.Utf8 = {
				stringify: function(e) {
					try {
						return decodeURIComponent(escape(h.stringify(e)));
					} catch (e) {
						throw new Error("Malformed UTF-8 data");
					}
				},
				parse: function(e) {
					return h.parse(unescape(encodeURIComponent(e)));
				}
			}, f = i.BufferedBlockAlgorithm = s.extend({
				reset: function() {
					this._data = new a.init(), this._nDataBytes = 0;
				},
				_append: function(e) {
					"string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
				},
				_process: function(t) {
					var r, n = this._data, o = n.words, i = n.sigBytes, s = this.blockSize, c = i / (4 * s), u = (c = t ? e.ceil(c) : e.max((0 | c) - this._minBufferSize, 0)) * s, h = e.min(4 * u, i);
					if (u) {
						for (var l = 0; l < u; l += s) this._doProcessBlock(o, l);
						r = o.splice(0, u), n.sigBytes -= h;
					}
					return new a.init(r, h);
				},
				clone: function() {
					var e = s.clone.call(this);
					return e._data = this._data.clone(), e;
				},
				_minBufferSize: 0
			});
			i.Hasher = f.extend({
				cfg: s.extend(),
				init: function(e) {
					this.cfg = this.cfg.extend(e), this.reset();
				},
				reset: function() {
					f.reset.call(this), this._doReset();
				},
				update: function(e) {
					return this._append(e), this._process(), this;
				},
				finalize: function(e) {
					return e && this._append(e), this._doFinalize();
				},
				blockSize: 16,
				_createHelper: function(e) {
					return function(t, r) {
						return new e.init(r).finalize(t);
					};
				},
				_createHmacHelper: function(e) {
					return function(t, r) {
						return new p.HMAC.init(e, r).finalize(t);
					};
				}
			});
			var p = o.algo = {};
			return o;
		}(Math), e)), Qe.exports;
		var e;
	}
	var rt, nt = { exports: {} };
	function ot() {
		return rt || (rt = 1, nt.exports = (i = tt(), t = (e = i).lib, r = t.Base, n = t.WordArray, (o = e.x64 = {}).Word = r.extend({ init: function(e, t) {
			this.high = e, this.low = t;
		} }), o.WordArray = r.extend({
			init: function(e, t) {
				e = this.words = e || [], this.sigBytes = null != t ? t : 8 * e.length;
			},
			toX32: function() {
				for (var e = this.words, t = e.length, r = [], o = 0; o < t; o++) {
					var i = e[o];
					r.push(i.high), r.push(i.low);
				}
				return n.create(r, this.sigBytes);
			},
			clone: function() {
				for (var e = r.clone.call(this), t = e.words = this.words.slice(0), n = t.length, o = 0; o < n; o++) t[o] = t[o].clone();
				return e;
			}
		}), i)), nt.exports;
		var e, t, r, n, o, i;
	}
	var it, st = { exports: {} };
	var at, ct = { exports: {} };
	var ut, ht = { exports: {} };
	function lt() {
		return ut || (ut = 1, ht.exports = (e = tt(), function() {
			var t = e, r = t.lib.WordArray;
			function n(e, t, n) {
				for (var o = [], i = 0, s = 0; s < t; s++) if (s % 4) {
					var a = n[e.charCodeAt(s - 1)] << s % 4 * 2 | n[e.charCodeAt(s)] >>> 6 - s % 4 * 2;
					o[i >>> 2] |= a << 24 - i % 4 * 8, i++;
				}
				return r.create(o, i);
			}
			t.enc.Base64 = {
				stringify: function(e) {
					var t = e.words, r = e.sigBytes, n = this._map;
					e.clamp();
					for (var o = [], i = 0; i < r; i += 3) for (var s = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < r; a++) o.push(n.charAt(s >>> 6 * (3 - a) & 63));
					var c = n.charAt(64);
					if (c) for (; o.length % 4;) o.push(c);
					return o.join("");
				},
				parse: function(e) {
					var t = e.length, r = this._map, o = this._reverseMap;
					if (!o) {
						o = this._reverseMap = [];
						for (var i = 0; i < r.length; i++) o[r.charCodeAt(i)] = i;
					}
					var s = r.charAt(64);
					if (s) {
						var a = e.indexOf(s);
						-1 !== a && (t = a);
					}
					return n(e, t, o);
				},
				_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
			};
		}(), e.enc.Base64)), ht.exports;
		var e;
	}
	var ft, pt = { exports: {} };
	var dt, vt = { exports: {} };
	function yt() {
		return dt || (dt = 1, vt.exports = (e = tt(), function(t) {
			var r = e, n = r.lib, o = n.WordArray, i = n.Hasher, s = r.algo, a = [];
			(function() {
				for (var e = 0; e < 64; e++) a[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0;
			})();
			var c = s.MD5 = i.extend({
				_doReset: function() {
					this._hash = new o.init([
						1732584193,
						4023233417,
						2562383102,
						271733878
					]);
				},
				_doProcessBlock: function(e, t) {
					for (var r = 0; r < 16; r++) {
						var n = t + r, o = e[n];
						e[n] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
					}
					var i = this._hash.words, s = e[t + 0], c = e[t + 1], p = e[t + 2], d = e[t + 3], v = e[t + 4], y = e[t + 5], _ = e[t + 6], g = e[t + 7], b = e[t + 8], m = e[t + 9], E = e[t + 10], B = e[t + 11], S = e[t + 12], H = e[t + 13], w = e[t + 14], T = e[t + 15], x = i[0], P = i[1], A = i[2], O = i[3];
					x = u(x, P, A, O, s, 7, a[0]), O = u(O, x, P, A, c, 12, a[1]), A = u(A, O, x, P, p, 17, a[2]), P = u(P, A, O, x, d, 22, a[3]), x = u(x, P, A, O, v, 7, a[4]), O = u(O, x, P, A, y, 12, a[5]), A = u(A, O, x, P, _, 17, a[6]), P = u(P, A, O, x, g, 22, a[7]), x = u(x, P, A, O, b, 7, a[8]), O = u(O, x, P, A, m, 12, a[9]), A = u(A, O, x, P, E, 17, a[10]), P = u(P, A, O, x, B, 22, a[11]), x = u(x, P, A, O, S, 7, a[12]), O = u(O, x, P, A, H, 12, a[13]), A = u(A, O, x, P, w, 17, a[14]), x = h(x, P = u(P, A, O, x, T, 22, a[15]), A, O, c, 5, a[16]), O = h(O, x, P, A, _, 9, a[17]), A = h(A, O, x, P, B, 14, a[18]), P = h(P, A, O, x, s, 20, a[19]), x = h(x, P, A, O, y, 5, a[20]), O = h(O, x, P, A, E, 9, a[21]), A = h(A, O, x, P, T, 14, a[22]), P = h(P, A, O, x, v, 20, a[23]), x = h(x, P, A, O, m, 5, a[24]), O = h(O, x, P, A, w, 9, a[25]), A = h(A, O, x, P, d, 14, a[26]), P = h(P, A, O, x, b, 20, a[27]), x = h(x, P, A, O, H, 5, a[28]), O = h(O, x, P, A, p, 9, a[29]), A = h(A, O, x, P, g, 14, a[30]), x = l(x, P = h(P, A, O, x, S, 20, a[31]), A, O, y, 4, a[32]), O = l(O, x, P, A, b, 11, a[33]), A = l(A, O, x, P, B, 16, a[34]), P = l(P, A, O, x, w, 23, a[35]), x = l(x, P, A, O, c, 4, a[36]), O = l(O, x, P, A, v, 11, a[37]), A = l(A, O, x, P, g, 16, a[38]), P = l(P, A, O, x, E, 23, a[39]), x = l(x, P, A, O, H, 4, a[40]), O = l(O, x, P, A, s, 11, a[41]), A = l(A, O, x, P, d, 16, a[42]), P = l(P, A, O, x, _, 23, a[43]), x = l(x, P, A, O, m, 4, a[44]), O = l(O, x, P, A, S, 11, a[45]), A = l(A, O, x, P, T, 16, a[46]), x = f(x, P = l(P, A, O, x, p, 23, a[47]), A, O, s, 6, a[48]), O = f(O, x, P, A, g, 10, a[49]), A = f(A, O, x, P, w, 15, a[50]), P = f(P, A, O, x, y, 21, a[51]), x = f(x, P, A, O, S, 6, a[52]), O = f(O, x, P, A, d, 10, a[53]), A = f(A, O, x, P, E, 15, a[54]), P = f(P, A, O, x, c, 21, a[55]), x = f(x, P, A, O, b, 6, a[56]), O = f(O, x, P, A, T, 10, a[57]), A = f(A, O, x, P, _, 15, a[58]), P = f(P, A, O, x, H, 21, a[59]), x = f(x, P, A, O, v, 6, a[60]), O = f(O, x, P, A, B, 10, a[61]), A = f(A, O, x, P, p, 15, a[62]), P = f(P, A, O, x, m, 21, a[63]), i[0] = i[0] + x | 0, i[1] = i[1] + P | 0, i[2] = i[2] + A | 0, i[3] = i[3] + O | 0;
				},
				_doFinalize: function() {
					var e = this._data, r = e.words, n = 8 * this._nDataBytes, o = 8 * e.sigBytes;
					r[o >>> 5] |= 128 << 24 - o % 32;
					var i = t.floor(n / 4294967296), s = n;
					r[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), r[14 + (o + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), e.sigBytes = 4 * (r.length + 1), this._process();
					for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {
						var h = c[u];
						c[u] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);
					}
					return a;
				},
				clone: function() {
					var e = i.clone.call(this);
					return e._hash = this._hash.clone(), e;
				}
			});
			function u(e, t, r, n, o, i, s) {
				var a = e + (t & r | ~t & n) + o + s;
				return (a << i | a >>> 32 - i) + t;
			}
			function h(e, t, r, n, o, i, s) {
				var a = e + (t & n | r & ~n) + o + s;
				return (a << i | a >>> 32 - i) + t;
			}
			function l(e, t, r, n, o, i, s) {
				var a = e + (t ^ r ^ n) + o + s;
				return (a << i | a >>> 32 - i) + t;
			}
			function f(e, t, r, n, o, i, s) {
				var a = e + (r ^ (t | ~n)) + o + s;
				return (a << i | a >>> 32 - i) + t;
			}
			r.MD5 = i._createHelper(c), r.HmacMD5 = i._createHmacHelper(c);
		}(Math), e.MD5)), vt.exports;
		var e;
	}
	var _t, gt = { exports: {} };
	function bt() {
		return _t || (_t = 1, gt.exports = (e = tt(), function() {
			var t = e, r = t.lib, n = r.WordArray, o = r.Hasher, i = t.algo, s = [], a = i.SHA1 = o.extend({
				_doReset: function() {
					this._hash = new n.init([
						1732584193,
						4023233417,
						2562383102,
						271733878,
						3285377520
					]);
				},
				_doProcessBlock: function(e, t) {
					for (var r = this._hash.words, n = r[0], o = r[1], i = r[2], a = r[3], c = r[4], u = 0; u < 80; u++) {
						if (u < 16) s[u] = 0 | e[t + u];
						else {
							var h = s[u - 3] ^ s[u - 8] ^ s[u - 14] ^ s[u - 16];
							s[u] = h << 1 | h >>> 31;
						}
						var l = (n << 5 | n >>> 27) + c + s[u];
						l += u < 20 ? 1518500249 + (o & i | ~o & a) : u < 40 ? 1859775393 + (o ^ i ^ a) : u < 60 ? (o & i | o & a | i & a) - 1894007588 : (o ^ i ^ a) - 899497514, c = a, a = i, i = o << 30 | o >>> 2, o = n, n = l;
					}
					r[0] = r[0] + n | 0, r[1] = r[1] + o | 0, r[2] = r[2] + i | 0, r[3] = r[3] + a | 0, r[4] = r[4] + c | 0;
				},
				_doFinalize: function() {
					var e = this._data, t = e.words, r = 8 * this._nDataBytes, n = 8 * e.sigBytes;
					return t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = Math.floor(r / 4294967296), t[15 + (n + 64 >>> 9 << 4)] = r, e.sigBytes = 4 * t.length, this._process(), this._hash;
				},
				clone: function() {
					var e = o.clone.call(this);
					return e._hash = this._hash.clone(), e;
				}
			});
			t.SHA1 = o._createHelper(a), t.HmacSHA1 = o._createHmacHelper(a);
		}(), e.SHA1)), gt.exports;
		var e;
	}
	var mt, Et, Bt = { exports: {} };
	function St() {
		return mt || (mt = 1, Bt.exports = (e = tt(), function(t) {
			var r = e, n = r.lib, o = n.WordArray, i = n.Hasher, s = r.algo, a = [], c = [];
			(function() {
				function e(e) {
					for (var r = t.sqrt(e), n = 2; n <= r; n++) if (!(e % n)) return !1;
					return !0;
				}
				function r(e) {
					return 4294967296 * (e - (0 | e)) | 0;
				}
				for (var n = 2, o = 0; o < 64;) e(n) && (o < 8 && (a[o] = r(t.pow(n, .5))), c[o] = r(t.pow(n, 1 / 3)), o++), n++;
			})();
			var u = [], h = s.SHA256 = i.extend({
				_doReset: function() {
					this._hash = new o.init(a.slice(0));
				},
				_doProcessBlock: function(e, t) {
					for (var r = this._hash.words, n = r[0], o = r[1], i = r[2], s = r[3], a = r[4], h = r[5], l = r[6], f = r[7], p = 0; p < 64; p++) {
						if (p < 16) u[p] = 0 | e[t + p];
						else {
							var d = u[p - 15], v = (d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3, y = u[p - 2], _ = (y << 15 | y >>> 17) ^ (y << 13 | y >>> 19) ^ y >>> 10;
							u[p] = v + u[p - 7] + _ + u[p - 16];
						}
						var g = n & o ^ n & i ^ o & i, b = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22), m = f + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & h ^ ~a & l) + c[p] + u[p];
						f = l, l = h, h = a, a = s + m | 0, s = i, i = o, o = n, n = m + (b + g) | 0;
					}
					r[0] = r[0] + n | 0, r[1] = r[1] + o | 0, r[2] = r[2] + i | 0, r[3] = r[3] + s | 0, r[4] = r[4] + a | 0, r[5] = r[5] + h | 0, r[6] = r[6] + l | 0, r[7] = r[7] + f | 0;
				},
				_doFinalize: function() {
					var e = this._data, r = e.words, n = 8 * this._nDataBytes, o = 8 * e.sigBytes;
					return r[o >>> 5] |= 128 << 24 - o % 32, r[14 + (o + 64 >>> 9 << 4)] = t.floor(n / 4294967296), r[15 + (o + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * r.length, this._process(), this._hash;
				},
				clone: function() {
					var e = i.clone.call(this);
					return e._hash = this._hash.clone(), e;
				}
			});
			r.SHA256 = i._createHelper(h), r.HmacSHA256 = i._createHmacHelper(h);
		}(Math), e.SHA256)), Bt.exports;
		var e;
	}
	var Ht, wt = { exports: {} };
	function Tt() {
		return Ht || (Ht = 1, wt.exports = (e = tt(), ot(), function() {
			var t = e, r = t.lib.Hasher, n = t.x64, o = n.Word, i = n.WordArray, s = t.algo;
			function a() {
				return o.create.apply(o, arguments);
			}
			var c = [
				a(1116352408, 3609767458),
				a(1899447441, 602891725),
				a(3049323471, 3964484399),
				a(3921009573, 2173295548),
				a(961987163, 4081628472),
				a(1508970993, 3053834265),
				a(2453635748, 2937671579),
				a(2870763221, 3664609560),
				a(3624381080, 2734883394),
				a(310598401, 1164996542),
				a(607225278, 1323610764),
				a(1426881987, 3590304994),
				a(1925078388, 4068182383),
				a(2162078206, 991336113),
				a(2614888103, 633803317),
				a(3248222580, 3479774868),
				a(3835390401, 2666613458),
				a(4022224774, 944711139),
				a(264347078, 2341262773),
				a(604807628, 2007800933),
				a(770255983, 1495990901),
				a(1249150122, 1856431235),
				a(1555081692, 3175218132),
				a(1996064986, 2198950837),
				a(2554220882, 3999719339),
				a(2821834349, 766784016),
				a(2952996808, 2566594879),
				a(3210313671, 3203337956),
				a(3336571891, 1034457026),
				a(3584528711, 2466948901),
				a(113926993, 3758326383),
				a(338241895, 168717936),
				a(666307205, 1188179964),
				a(773529912, 1546045734),
				a(1294757372, 1522805485),
				a(1396182291, 2643833823),
				a(1695183700, 2343527390),
				a(1986661051, 1014477480),
				a(2177026350, 1206759142),
				a(2456956037, 344077627),
				a(2730485921, 1290863460),
				a(2820302411, 3158454273),
				a(3259730800, 3505952657),
				a(3345764771, 106217008),
				a(3516065817, 3606008344),
				a(3600352804, 1432725776),
				a(4094571909, 1467031594),
				a(275423344, 851169720),
				a(430227734, 3100823752),
				a(506948616, 1363258195),
				a(659060556, 3750685593),
				a(883997877, 3785050280),
				a(958139571, 3318307427),
				a(1322822218, 3812723403),
				a(1537002063, 2003034995),
				a(1747873779, 3602036899),
				a(1955562222, 1575990012),
				a(2024104815, 1125592928),
				a(2227730452, 2716904306),
				a(2361852424, 442776044),
				a(2428436474, 593698344),
				a(2756734187, 3733110249),
				a(3204031479, 2999351573),
				a(3329325298, 3815920427),
				a(3391569614, 3928383900),
				a(3515267271, 566280711),
				a(3940187606, 3454069534),
				a(4118630271, 4000239992),
				a(116418474, 1914138554),
				a(174292421, 2731055270),
				a(289380356, 3203993006),
				a(460393269, 320620315),
				a(685471733, 587496836),
				a(852142971, 1086792851),
				a(1017036298, 365543100),
				a(1126000580, 2618297676),
				a(1288033470, 3409855158),
				a(1501505948, 4234509866),
				a(1607167915, 987167468),
				a(1816402316, 1246189591)
			], u = [];
			(function() {
				for (var e = 0; e < 80; e++) u[e] = a();
			})();
			var h = s.SHA512 = r.extend({
				_doReset: function() {
					this._hash = new i.init([
						new o.init(1779033703, 4089235720),
						new o.init(3144134277, 2227873595),
						new o.init(1013904242, 4271175723),
						new o.init(2773480762, 1595750129),
						new o.init(1359893119, 2917565137),
						new o.init(2600822924, 725511199),
						new o.init(528734635, 4215389547),
						new o.init(1541459225, 327033209)
					]);
				},
				_doProcessBlock: function(e, t) {
					for (var r = this._hash.words, n = r[0], o = r[1], i = r[2], s = r[3], a = r[4], h = r[5], l = r[6], f = r[7], p = n.high, d = n.low, v = o.high, y = o.low, _ = i.high, g = i.low, b = s.high, m = s.low, E = a.high, B = a.low, S = h.high, H = h.low, w = l.high, T = l.low, x = f.high, P = f.low, A = p, O = d, C = v, k = y, R = _, L = g, M = b, I = m, N = E, D = B, j = S, U = H, F = w, G = T, z = x, K = P, X = 0; X < 80; X++) {
						var V, W, Y = u[X];
						if (X < 16) W = Y.high = 0 | e[t + 2 * X], V = Y.low = 0 | e[t + 2 * X + 1];
						else {
							var q = u[X - 15], $ = q.high, Z = q.low, J = ($ >>> 1 | Z << 31) ^ ($ >>> 8 | Z << 24) ^ $ >>> 7, Q = (Z >>> 1 | $ << 31) ^ (Z >>> 8 | $ << 24) ^ (Z >>> 7 | $ << 25), ee = u[X - 2], te = ee.high, re = ee.low, ne = (te >>> 19 | re << 13) ^ (te << 3 | re >>> 29) ^ te >>> 6, oe = (re >>> 19 | te << 13) ^ (re << 3 | te >>> 29) ^ (re >>> 6 | te << 26), ie = u[X - 7], se = ie.high, ae = ie.low, ce = u[X - 16], ue = ce.high, he = ce.low;
							W = (W = (W = J + se + ((V = Q + ae) >>> 0 < Q >>> 0 ? 1 : 0)) + ne + ((V += oe) >>> 0 < oe >>> 0 ? 1 : 0)) + ue + ((V += he) >>> 0 < he >>> 0 ? 1 : 0), Y.high = W, Y.low = V;
						}
						var le, fe = N & j ^ ~N & F, pe = D & U ^ ~D & G, de = A & C ^ A & R ^ C & R, ve = O & k ^ O & L ^ k & L, ye = (A >>> 28 | O << 4) ^ (A << 30 | O >>> 2) ^ (A << 25 | O >>> 7), _e = (O >>> 28 | A << 4) ^ (O << 30 | A >>> 2) ^ (O << 25 | A >>> 7), ge = (N >>> 14 | D << 18) ^ (N >>> 18 | D << 14) ^ (N << 23 | D >>> 9), be = (D >>> 14 | N << 18) ^ (D >>> 18 | N << 14) ^ (D << 23 | N >>> 9), me = c[X], Ee = me.high, Be = me.low, Se = z + ge + ((le = K + be) >>> 0 < K >>> 0 ? 1 : 0), He = _e + ve;
						z = F, K = G, F = j, G = U, j = N, U = D, N = M + (Se = (Se = (Se = Se + fe + ((le += pe) >>> 0 < pe >>> 0 ? 1 : 0)) + Ee + ((le += Be) >>> 0 < Be >>> 0 ? 1 : 0)) + W + ((le += V) >>> 0 < V >>> 0 ? 1 : 0)) + ((D = I + le | 0) >>> 0 < I >>> 0 ? 1 : 0) | 0, M = R, I = L, R = C, L = k, C = A, k = O, A = Se + (ye + de + (He >>> 0 < _e >>> 0 ? 1 : 0)) + ((O = le + He | 0) >>> 0 < le >>> 0 ? 1 : 0) | 0;
					}
					d = n.low = d + O, n.high = p + A + (d >>> 0 < O >>> 0 ? 1 : 0), y = o.low = y + k, o.high = v + C + (y >>> 0 < k >>> 0 ? 1 : 0), g = i.low = g + L, i.high = _ + R + (g >>> 0 < L >>> 0 ? 1 : 0), m = s.low = m + I, s.high = b + M + (m >>> 0 < I >>> 0 ? 1 : 0), B = a.low = B + D, a.high = E + N + (B >>> 0 < D >>> 0 ? 1 : 0), H = h.low = H + U, h.high = S + j + (H >>> 0 < U >>> 0 ? 1 : 0), T = l.low = T + G, l.high = w + F + (T >>> 0 < G >>> 0 ? 1 : 0), P = f.low = P + K, f.high = x + z + (P >>> 0 < K >>> 0 ? 1 : 0);
				},
				_doFinalize: function() {
					var e = this._data, t = e.words, r = 8 * this._nDataBytes, n = 8 * e.sigBytes;
					return t[n >>> 5] |= 128 << 24 - n % 32, t[30 + (n + 128 >>> 10 << 5)] = Math.floor(r / 4294967296), t[31 + (n + 128 >>> 10 << 5)] = r, e.sigBytes = 4 * t.length, this._process(), this._hash.toX32();
				},
				clone: function() {
					var e = r.clone.call(this);
					return e._hash = this._hash.clone(), e;
				},
				blockSize: 32
			});
			t.SHA512 = r._createHelper(h), t.HmacSHA512 = r._createHmacHelper(h);
		}(), e.SHA512)), wt.exports;
		var e;
	}
	var xt, Pt, At = { exports: {} }, Ot = { exports: {} };
	var Ct, kt, Rt = { exports: {} }, Lt = { exports: {} };
	function Mt() {
		return kt || (kt = 1, Lt.exports = (e = tt(), void function() {
			var t = e, r = t.lib.Base, n = t.enc.Utf8;
			t.algo.HMAC = r.extend({
				init: function(e, t) {
					e = this._hasher = new e.init(), "string" == typeof t && (t = n.parse(t));
					var r = e.blockSize, o = 4 * r;
					t.sigBytes > o && (t = e.finalize(t)), t.clamp();
					for (var i = this._oKey = t.clone(), s = this._iKey = t.clone(), a = i.words, c = s.words, u = 0; u < r; u++) a[u] ^= 1549556828, c[u] ^= 909522486;
					i.sigBytes = s.sigBytes = o, this.reset();
				},
				reset: function() {
					var e = this._hasher;
					e.reset(), e.update(this._iKey);
				},
				update: function(e) {
					return this._hasher.update(e), this;
				},
				finalize: function(e) {
					var t = this._hasher, r = t.finalize(e);
					return t.reset(), t.finalize(this._oKey.clone().concat(r));
				}
			});
		}())), Lt.exports;
		var e;
	}
	var It, Nt, Dt = { exports: {} }, jt = { exports: {} };
	function Ut() {
		return Nt || (Nt = 1, jt.exports = (e = tt(), bt(), Mt(), function() {
			var t = e, r = t.lib, n = r.Base, o = r.WordArray, i = t.algo, s = i.MD5, a = i.EvpKDF = n.extend({
				cfg: n.extend({
					keySize: 4,
					hasher: s,
					iterations: 1
				}),
				init: function(e) {
					this.cfg = this.cfg.extend(e);
				},
				compute: function(e, t) {
					for (var r, n = this.cfg, i = n.hasher.create(), s = o.create(), a = s.words, c = n.keySize, u = n.iterations; a.length < c;) {
						r && i.update(r), r = i.update(e).finalize(t), i.reset();
						for (var h = 1; h < u; h++) r = i.finalize(r), i.reset();
						s.concat(r);
					}
					return s.sigBytes = 4 * c, s;
				}
			});
			t.EvpKDF = function(e, t, r) {
				return a.create(r).compute(e, t);
			};
		}(), e.EvpKDF)), jt.exports;
		var e;
	}
	var Ft, Gt = { exports: {} };
	function zt() {
		return Ft || (Ft = 1, Gt.exports = (e = tt(), Ut(), void (e.lib.Cipher || function() {
			var t = e, r = t.lib, n = r.Base, o = r.WordArray, i = r.BufferedBlockAlgorithm, s = t.enc;
			s.Utf8;
			var a = s.Base64, c = t.algo.EvpKDF, u = r.Cipher = i.extend({
				cfg: n.extend(),
				createEncryptor: function(e, t) {
					return this.create(this._ENC_XFORM_MODE, e, t);
				},
				createDecryptor: function(e, t) {
					return this.create(this._DEC_XFORM_MODE, e, t);
				},
				init: function(e, t, r) {
					this.cfg = this.cfg.extend(r), this._xformMode = e, this._key = t, this.reset();
				},
				reset: function() {
					i.reset.call(this), this._doReset();
				},
				process: function(e) {
					return this._append(e), this._process();
				},
				finalize: function(e) {
					return e && this._append(e), this._doFinalize();
				},
				keySize: 4,
				ivSize: 4,
				_ENC_XFORM_MODE: 1,
				_DEC_XFORM_MODE: 2,
				_createHelper: function() {
					function e(e) {
						return "string" == typeof e ? g : y;
					}
					return function(t) {
						return {
							encrypt: function(r, n, o) {
								return e(n).encrypt(t, r, n, o);
							},
							decrypt: function(r, n, o) {
								return e(n).decrypt(t, r, n, o);
							}
						};
					};
				}()
			});
			r.StreamCipher = u.extend({
				_doFinalize: function() {
					return this._process(!0);
				},
				blockSize: 1
			});
			var h = t.mode = {}, l = r.BlockCipherMode = n.extend({
				createEncryptor: function(e, t) {
					return this.Encryptor.create(e, t);
				},
				createDecryptor: function(e, t) {
					return this.Decryptor.create(e, t);
				},
				init: function(e, t) {
					this._cipher = e, this._iv = t;
				}
			}), f = h.CBC = function() {
				var e = l.extend();
				function t(e, t, r) {
					var n, o = this._iv;
					o ? (n = o, this._iv = void 0) : n = this._prevBlock;
					for (var i = 0; i < r; i++) e[t + i] ^= n[i];
				}
				return e.Encryptor = e.extend({ processBlock: function(e, r) {
					var n = this._cipher, o = n.blockSize;
					t.call(this, e, r, o), n.encryptBlock(e, r), this._prevBlock = e.slice(r, r + o);
				} }), e.Decryptor = e.extend({ processBlock: function(e, r) {
					var n = this._cipher, o = n.blockSize, i = e.slice(r, r + o);
					n.decryptBlock(e, r), t.call(this, e, r, o), this._prevBlock = i;
				} }), e;
			}(), p = (t.pad = {}).Pkcs7 = {
				pad: function(e, t) {
					for (var r = 4 * t, n = r - e.sigBytes % r, i = n << 24 | n << 16 | n << 8 | n, s = [], a = 0; a < n; a += 4) s.push(i);
					var c = o.create(s, n);
					e.concat(c);
				},
				unpad: function(e) {
					var t = 255 & e.words[e.sigBytes - 1 >>> 2];
					e.sigBytes -= t;
				}
			};
			r.BlockCipher = u.extend({
				cfg: u.cfg.extend({
					mode: f,
					padding: p
				}),
				reset: function() {
					var e;
					u.reset.call(this);
					var t = this.cfg, r = t.iv, n = t.mode;
					this._xformMode == this._ENC_XFORM_MODE ? e = n.createEncryptor : (e = n.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == e ? this._mode.init(this, r && r.words) : (this._mode = e.call(n, this, r && r.words), this._mode.__creator = e);
				},
				_doProcessBlock: function(e, t) {
					this._mode.processBlock(e, t);
				},
				_doFinalize: function() {
					var e, t = this.cfg.padding;
					return this._xformMode == this._ENC_XFORM_MODE ? (t.pad(this._data, this.blockSize), e = this._process(!0)) : (e = this._process(!0), t.unpad(e)), e;
				},
				blockSize: 4
			});
			var d = r.CipherParams = n.extend({
				init: function(e) {
					this.mixIn(e);
				},
				toString: function(e) {
					return (e || this.formatter).stringify(this);
				}
			}), v = (t.format = {}).OpenSSL = {
				stringify: function(e) {
					var t = e.ciphertext, r = e.salt;
					return (r ? o.create([1398893684, 1701076831]).concat(r).concat(t) : t).toString(a);
				},
				parse: function(e) {
					var t, r = a.parse(e), n = r.words;
					return 1398893684 == n[0] && 1701076831 == n[1] && (t = o.create(n.slice(2, 4)), n.splice(0, 4), r.sigBytes -= 16), d.create({
						ciphertext: r,
						salt: t
					});
				}
			}, y = r.SerializableCipher = n.extend({
				cfg: n.extend({ format: v }),
				encrypt: function(e, t, r, n) {
					n = this.cfg.extend(n);
					var o = e.createEncryptor(r, n), i = o.finalize(t), s = o.cfg;
					return d.create({
						ciphertext: i,
						key: r,
						iv: s.iv,
						algorithm: e,
						mode: s.mode,
						padding: s.padding,
						blockSize: e.blockSize,
						formatter: n.format
					});
				},
				decrypt: function(e, t, r, n) {
					return n = this.cfg.extend(n), t = this._parse(t, n.format), e.createDecryptor(r, n).finalize(t.ciphertext);
				},
				_parse: function(e, t) {
					return "string" == typeof e ? t.parse(e, this) : e;
				}
			}), _ = (t.kdf = {}).OpenSSL = { execute: function(e, t, r, n, i) {
				if (n || (n = o.random(8)), i) s = c.create({
					keySize: t + r,
					hasher: i
				}).compute(e, n);
				else var s = c.create({ keySize: t + r }).compute(e, n);
				var a = o.create(s.words.slice(t), 4 * r);
				return s.sigBytes = 4 * t, d.create({
					key: s,
					iv: a,
					salt: n
				});
			} }, g = r.PasswordBasedCipher = y.extend({
				cfg: y.cfg.extend({ kdf: _ }),
				encrypt: function(e, t, r, n) {
					var o = (n = this.cfg.extend(n)).kdf.execute(r, e.keySize, e.ivSize, n.salt, n.hasher);
					n.iv = o.iv;
					var i = y.encrypt.call(this, e, t, o.key, n);
					return i.mixIn(o), i;
				},
				decrypt: function(e, t, r, n) {
					n = this.cfg.extend(n), t = this._parse(t, n.format);
					var o = n.kdf.execute(r, e.keySize, e.ivSize, t.salt, n.hasher);
					return n.iv = o.iv, y.decrypt.call(this, e, t, o.key, n);
				}
			});
		}()))), Gt.exports;
		var e;
	}
	var Kt, Xt = { exports: {} };
	var Vt, Wt = { exports: {} };
	var Yt, qt = { exports: {} };
	var $t, Zt = { exports: {} };
	var Jt, Qt, er, tr, rr, nr, or, ir, sr, ar = { exports: {} }, cr = { exports: {} }, ur = { exports: {} }, hr = { exports: {} }, lr = { exports: {} }, fr = { exports: {} }, pr = { exports: {} }, dr = { exports: {} }, vr = { exports: {} };
	var yr, _r, gr, br, mr, Er = { exports: {} }, Br = { exports: {} }, Sr = { exports: {} }, Hr = { exports: {} };
	var wr, xr = De((mr || (mr = 1, Je.exports = function(e) {
		return e;
	}(tt(), ot(), function() {
		return it || (it = 1, st.exports = (e = tt(), function() {
			if ("function" == typeof ArrayBuffer) {
				var t = e.lib.WordArray, r = t.init, n = t.init = function(e) {
					if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), (e instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), e instanceof Uint8Array) {
						for (var t = e.byteLength, n = [], o = 0; o < t; o++) n[o >>> 2] |= e[o] << 24 - o % 4 * 8;
						r.call(this, n, t);
					} else r.apply(this, arguments);
				};
				n.prototype = t;
			}
		}(), e.lib.WordArray)), st.exports;
		var e;
	}(), function() {
		return at || (at = 1, ct.exports = (e = tt(), function() {
			var t = e, r = t.lib.WordArray, n = t.enc;
			function o(e) {
				return e << 8 & 4278255360 | e >>> 8 & 16711935;
			}
			n.Utf16 = n.Utf16BE = {
				stringify: function(e) {
					for (var t = e.words, r = e.sigBytes, n = [], o = 0; o < r; o += 2) {
						var i = t[o >>> 2] >>> 16 - o % 4 * 8 & 65535;
						n.push(String.fromCharCode(i));
					}
					return n.join("");
				},
				parse: function(e) {
					for (var t = e.length, n = [], o = 0; o < t; o++) n[o >>> 1] |= e.charCodeAt(o) << 16 - o % 2 * 16;
					return r.create(n, 2 * t);
				}
			}, n.Utf16LE = {
				stringify: function(e) {
					for (var t = e.words, r = e.sigBytes, n = [], i = 0; i < r; i += 2) {
						var s = o(t[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
						n.push(String.fromCharCode(s));
					}
					return n.join("");
				},
				parse: function(e) {
					for (var t = e.length, n = [], i = 0; i < t; i++) n[i >>> 1] |= o(e.charCodeAt(i) << 16 - i % 2 * 16);
					return r.create(n, 2 * t);
				}
			};
		}(), e.enc.Utf16)), ct.exports;
		var e;
	}(), lt(), function() {
		return ft || (ft = 1, pt.exports = (e = tt(), function() {
			var t = e, r = t.lib.WordArray;
			function n(e, t, n) {
				for (var o = [], i = 0, s = 0; s < t; s++) if (s % 4) {
					var a = n[e.charCodeAt(s - 1)] << s % 4 * 2 | n[e.charCodeAt(s)] >>> 6 - s % 4 * 2;
					o[i >>> 2] |= a << 24 - i % 4 * 8, i++;
				}
				return r.create(o, i);
			}
			t.enc.Base64url = {
				stringify: function(e, t) {
					void 0 === t && (t = !0);
					var r = e.words, n = e.sigBytes, o = t ? this._safe_map : this._map;
					e.clamp();
					for (var i = [], s = 0; s < n; s += 3) for (var a = (r[s >>> 2] >>> 24 - s % 4 * 8 & 255) << 16 | (r[s + 1 >>> 2] >>> 24 - (s + 1) % 4 * 8 & 255) << 8 | r[s + 2 >>> 2] >>> 24 - (s + 2) % 4 * 8 & 255, c = 0; c < 4 && s + .75 * c < n; c++) i.push(o.charAt(a >>> 6 * (3 - c) & 63));
					var u = o.charAt(64);
					if (u) for (; i.length % 4;) i.push(u);
					return i.join("");
				},
				parse: function(e, t) {
					void 0 === t && (t = !0);
					var r = e.length, o = t ? this._safe_map : this._map, i = this._reverseMap;
					if (!i) {
						i = this._reverseMap = [];
						for (var s = 0; s < o.length; s++) i[o.charCodeAt(s)] = s;
					}
					var a = o.charAt(64);
					if (a) {
						var c = e.indexOf(a);
						-1 !== c && (r = c);
					}
					return n(e, r, i);
				},
				_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
				_safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
			};
		}(), e.enc.Base64url)), pt.exports;
		var e;
	}(), yt(), bt(), St(), Et || (Et = 1, wr = tt(), St(), function() {
		var e = wr, t = e.lib.WordArray, r = e.algo, n = r.SHA256, o = r.SHA224 = n.extend({
			_doReset: function() {
				this._hash = new t.init([
					3238371032,
					914150663,
					812702999,
					4144912697,
					4290775857,
					1750603025,
					1694076839,
					3204075428
				]);
			},
			_doFinalize: function() {
				var e = n._doFinalize.call(this);
				return e.sigBytes -= 4, e;
			}
		});
		e.SHA224 = n._createHelper(o), e.HmacSHA224 = n._createHmacHelper(o);
	}(), wr.SHA224), Tt(), function() {
		return xt || (xt = 1, At.exports = (e = tt(), ot(), Tt(), function() {
			var t = e, r = t.x64, n = r.Word, o = r.WordArray, i = t.algo, s = i.SHA512, a = i.SHA384 = s.extend({
				_doReset: function() {
					this._hash = new o.init([
						new n.init(3418070365, 3238371032),
						new n.init(1654270250, 914150663),
						new n.init(2438529370, 812702999),
						new n.init(355462360, 4144912697),
						new n.init(1731405415, 4290775857),
						new n.init(2394180231, 1750603025),
						new n.init(3675008525, 1694076839),
						new n.init(1203062813, 3204075428)
					]);
				},
				_doFinalize: function() {
					var e = s._doFinalize.call(this);
					return e.sigBytes -= 16, e;
				}
			});
			t.SHA384 = s._createHelper(a), t.HmacSHA384 = s._createHmacHelper(a);
		}(), e.SHA384)), At.exports;
		var e;
	}(), function() {
		return Pt || (Pt = 1, Ot.exports = (e = tt(), ot(), function(t) {
			var r = e, n = r.lib, o = n.WordArray, i = n.Hasher, s = r.x64.Word, a = r.algo, c = [], u = [], h = [];
			(function() {
				for (var e = 1, t = 0, r = 0; r < 24; r++) {
					c[e + 5 * t] = (r + 1) * (r + 2) / 2 % 64;
					var n = (2 * e + 3 * t) % 5;
					e = t % 5, t = n;
				}
				for (e = 0; e < 5; e++) for (t = 0; t < 5; t++) u[e + 5 * t] = t + (2 * e + 3 * t) % 5 * 5;
				for (var o = 1, i = 0; i < 24; i++) {
					for (var a = 0, l = 0, f = 0; f < 7; f++) {
						if (1 & o) {
							var p = (1 << f) - 1;
							p < 32 ? l ^= 1 << p : a ^= 1 << p - 32;
						}
						128 & o ? o = o << 1 ^ 113 : o <<= 1;
					}
					h[i] = s.create(a, l);
				}
			})();
			var l = [];
			(function() {
				for (var e = 0; e < 25; e++) l[e] = s.create();
			})();
			var f = a.SHA3 = i.extend({
				cfg: i.cfg.extend({ outputLength: 512 }),
				_doReset: function() {
					for (var e = this._state = [], t = 0; t < 25; t++) e[t] = new s.init();
					this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
				},
				_doProcessBlock: function(e, t) {
					for (var r = this._state, n = this.blockSize / 2, o = 0; o < n; o++) {
						var i = e[t + 2 * o], s = e[t + 2 * o + 1];
						i = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), s = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), (P = r[o]).high ^= s, P.low ^= i;
					}
					for (var a = 0; a < 24; a++) {
						for (var f = 0; f < 5; f++) {
							for (var p = 0, d = 0, v = 0; v < 5; v++) p ^= (P = r[f + 5 * v]).high, d ^= P.low;
							var y = l[f];
							y.high = p, y.low = d;
						}
						for (f = 0; f < 5; f++) {
							var _ = l[(f + 4) % 5], g = l[(f + 1) % 5], b = g.high, m = g.low;
							for (p = _.high ^ (b << 1 | m >>> 31), d = _.low ^ (m << 1 | b >>> 31), v = 0; v < 5; v++) (P = r[f + 5 * v]).high ^= p, P.low ^= d;
						}
						for (var E = 1; E < 25; E++) {
							var B = (P = r[E]).high, S = P.low, H = c[E];
							H < 32 ? (p = B << H | S >>> 32 - H, d = S << H | B >>> 32 - H) : (p = S << H - 32 | B >>> 64 - H, d = B << H - 32 | S >>> 64 - H);
							var w = l[u[E]];
							w.high = p, w.low = d;
						}
						var T = l[0], x = r[0];
						for (T.high = x.high, T.low = x.low, f = 0; f < 5; f++) for (v = 0; v < 5; v++) {
							var P = r[E = f + 5 * v], A = l[E], O = l[(f + 1) % 5 + 5 * v], C = l[(f + 2) % 5 + 5 * v];
							P.high = A.high ^ ~O.high & C.high, P.low = A.low ^ ~O.low & C.low;
						}
						P = r[0];
						var k = h[a];
						P.high ^= k.high, P.low ^= k.low;
					}
				},
				_doFinalize: function() {
					var e = this._data, r = e.words;
					this._nDataBytes;
					var n = 8 * e.sigBytes, i = 32 * this.blockSize;
					r[n >>> 5] |= 1 << 24 - n % 32, r[(t.ceil((n + 1) / i) * i >>> 5) - 1] |= 128, e.sigBytes = 4 * r.length, this._process();
					for (var s = this._state, a = this.cfg.outputLength / 8, c = a / 8, u = [], h = 0; h < c; h++) {
						var l = s[h], f = l.high, p = l.low;
						f = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8), p = 16711935 & (p << 8 | p >>> 24) | 4278255360 & (p << 24 | p >>> 8), u.push(p), u.push(f);
					}
					return new o.init(u, a);
				},
				clone: function() {
					for (var e = i.clone.call(this), t = e._state = this._state.slice(0), r = 0; r < 25; r++) t[r] = t[r].clone();
					return e;
				}
			});
			r.SHA3 = i._createHelper(f), r.HmacSHA3 = i._createHmacHelper(f);
		}(Math), e.SHA3)), Ot.exports;
		var e;
	}(), function() {
		return Ct || (Ct = 1, Rt.exports = (e = tt(), function() {
			var t = e, r = t.lib, n = r.WordArray, o = r.Hasher, i = t.algo, s = n.create([
				0,
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				7,
				4,
				13,
				1,
				10,
				6,
				15,
				3,
				12,
				0,
				9,
				5,
				2,
				14,
				11,
				8,
				3,
				10,
				14,
				4,
				9,
				15,
				8,
				1,
				2,
				7,
				0,
				6,
				13,
				11,
				5,
				12,
				1,
				9,
				11,
				10,
				0,
				8,
				12,
				4,
				13,
				3,
				7,
				15,
				14,
				5,
				6,
				2,
				4,
				0,
				5,
				9,
				7,
				12,
				2,
				10,
				14,
				1,
				3,
				8,
				11,
				6,
				15,
				13
			]), a = n.create([
				5,
				14,
				7,
				0,
				9,
				2,
				11,
				4,
				13,
				6,
				15,
				8,
				1,
				10,
				3,
				12,
				6,
				11,
				3,
				7,
				0,
				13,
				5,
				10,
				14,
				15,
				8,
				12,
				4,
				9,
				1,
				2,
				15,
				5,
				1,
				3,
				7,
				14,
				6,
				9,
				11,
				8,
				12,
				2,
				10,
				0,
				4,
				13,
				8,
				6,
				4,
				1,
				3,
				11,
				15,
				0,
				5,
				12,
				2,
				13,
				9,
				7,
				10,
				14,
				12,
				15,
				10,
				4,
				1,
				5,
				8,
				7,
				6,
				2,
				13,
				14,
				0,
				3,
				9,
				11
			]), c = n.create([
				11,
				14,
				15,
				12,
				5,
				8,
				7,
				9,
				11,
				13,
				14,
				15,
				6,
				7,
				9,
				8,
				7,
				6,
				8,
				13,
				11,
				9,
				7,
				15,
				7,
				12,
				15,
				9,
				11,
				7,
				13,
				12,
				11,
				13,
				6,
				7,
				14,
				9,
				13,
				15,
				14,
				8,
				13,
				6,
				5,
				12,
				7,
				5,
				11,
				12,
				14,
				15,
				14,
				15,
				9,
				8,
				9,
				14,
				5,
				6,
				8,
				6,
				5,
				12,
				9,
				15,
				5,
				11,
				6,
				8,
				13,
				12,
				5,
				12,
				13,
				14,
				11,
				8,
				5,
				6
			]), u = n.create([
				8,
				9,
				9,
				11,
				13,
				15,
				15,
				5,
				7,
				7,
				8,
				11,
				14,
				14,
				12,
				6,
				9,
				13,
				15,
				7,
				12,
				8,
				9,
				11,
				7,
				7,
				12,
				7,
				6,
				15,
				13,
				11,
				9,
				7,
				15,
				11,
				8,
				6,
				6,
				14,
				12,
				13,
				5,
				14,
				13,
				13,
				7,
				5,
				15,
				5,
				8,
				11,
				14,
				14,
				6,
				14,
				6,
				9,
				12,
				9,
				12,
				5,
				15,
				8,
				8,
				5,
				12,
				9,
				12,
				5,
				14,
				6,
				8,
				13,
				6,
				5,
				15,
				13,
				11,
				11
			]), h = n.create([
				0,
				1518500249,
				1859775393,
				2400959708,
				2840853838
			]), l = n.create([
				1352829926,
				1548603684,
				1836072691,
				2053994217,
				0
			]), f = i.RIPEMD160 = o.extend({
				_doReset: function() {
					this._hash = n.create([
						1732584193,
						4023233417,
						2562383102,
						271733878,
						3285377520
					]);
				},
				_doProcessBlock: function(e, t) {
					for (var r = 0; r < 16; r++) {
						var n = t + r, o = e[n];
						e[n] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
					}
					var i, f, b, m, E, B, S, H, w, T, x, P = this._hash.words, A = h.words, O = l.words, C = s.words, k = a.words, R = c.words, L = u.words;
					for (B = i = P[0], S = f = P[1], H = b = P[2], w = m = P[3], T = E = P[4], r = 0; r < 80; r += 1) x = i + e[t + C[r]] | 0, x += r < 16 ? p(f, b, m) + A[0] : r < 32 ? d(f, b, m) + A[1] : r < 48 ? v(f, b, m) + A[2] : r < 64 ? y(f, b, m) + A[3] : _(f, b, m) + A[4], x = (x = g(x |= 0, R[r])) + E | 0, i = E, E = m, m = g(b, 10), b = f, f = x, x = B + e[t + k[r]] | 0, x += r < 16 ? _(S, H, w) + O[0] : r < 32 ? y(S, H, w) + O[1] : r < 48 ? v(S, H, w) + O[2] : r < 64 ? d(S, H, w) + O[3] : p(S, H, w) + O[4], x = (x = g(x |= 0, L[r])) + T | 0, B = T, T = w, w = g(H, 10), H = S, S = x;
					x = P[1] + b + w | 0, P[1] = P[2] + m + T | 0, P[2] = P[3] + E + B | 0, P[3] = P[4] + i + S | 0, P[4] = P[0] + f + H | 0, P[0] = x;
				},
				_doFinalize: function() {
					var e = this._data, t = e.words, r = 8 * this._nDataBytes, n = 8 * e.sigBytes;
					t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), e.sigBytes = 4 * (t.length + 1), this._process();
					for (var o = this._hash, i = o.words, s = 0; s < 5; s++) {
						var a = i[s];
						i[s] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
					}
					return o;
				},
				clone: function() {
					var e = o.clone.call(this);
					return e._hash = this._hash.clone(), e;
				}
			});
			function p(e, t, r) {
				return e ^ t ^ r;
			}
			function d(e, t, r) {
				return e & t | ~e & r;
			}
			function v(e, t, r) {
				return (e | ~t) ^ r;
			}
			function y(e, t, r) {
				return e & r | t & ~r;
			}
			function _(e, t, r) {
				return e ^ (t | ~r);
			}
			function g(e, t) {
				return e << t | e >>> 32 - t;
			}
			t.RIPEMD160 = o._createHelper(f), t.HmacRIPEMD160 = o._createHmacHelper(f);
		}(), e.RIPEMD160)), Rt.exports;
		var e;
	}(), Mt(), function() {
		return It || (It = 1, Dt.exports = (e = tt(), St(), Mt(), function() {
			var t = e, r = t.lib, n = r.Base, o = r.WordArray, i = t.algo, s = i.SHA256, a = i.HMAC, c = i.PBKDF2 = n.extend({
				cfg: n.extend({
					keySize: 4,
					hasher: s,
					iterations: 25e4
				}),
				init: function(e) {
					this.cfg = this.cfg.extend(e);
				},
				compute: function(e, t) {
					for (var r = this.cfg, n = a.create(r.hasher, e), i = o.create(), s = o.create([1]), c = i.words, u = s.words, h = r.keySize, l = r.iterations; c.length < h;) {
						var f = n.update(t).finalize(s);
						n.reset();
						for (var p = f.words, d = p.length, v = f, y = 1; y < l; y++) {
							v = n.finalize(v), n.reset();
							for (var _ = v.words, g = 0; g < d; g++) p[g] ^= _[g];
						}
						i.concat(f), u[0]++;
					}
					return i.sigBytes = 4 * h, i;
				}
			});
			t.PBKDF2 = function(e, t, r) {
				return c.create(r).compute(e, t);
			};
		}(), e.PBKDF2)), Dt.exports;
		var e;
	}(), Ut(), zt(), function() {
		return Kt || (Kt = 1, Xt.exports = (e = tt(), zt(), e.mode.CFB = function() {
			var t = e.lib.BlockCipherMode.extend();
			function r(e, t, r, n) {
				var o, i = this._iv;
				i ? (o = i.slice(0), this._iv = void 0) : o = this._prevBlock, n.encryptBlock(o, 0);
				for (var s = 0; s < r; s++) e[t + s] ^= o[s];
			}
			return t.Encryptor = t.extend({ processBlock: function(e, t) {
				var n = this._cipher, o = n.blockSize;
				r.call(this, e, t, o, n), this._prevBlock = e.slice(t, t + o);
			} }), t.Decryptor = t.extend({ processBlock: function(e, t) {
				var n = this._cipher, o = n.blockSize, i = e.slice(t, t + o);
				r.call(this, e, t, o, n), this._prevBlock = i;
			} }), t;
		}(), e.mode.CFB)), Xt.exports;
		var e;
	}(), function() {
		return Vt || (Vt = 1, Wt.exports = (r = tt(), zt(), r.mode.CTR = (t = (e = r.lib.BlockCipherMode.extend()).Encryptor = e.extend({ processBlock: function(e, t) {
			var r = this._cipher, n = r.blockSize, o = this._iv, i = this._counter;
			o && (i = this._counter = o.slice(0), this._iv = void 0);
			var s = i.slice(0);
			r.encryptBlock(s, 0), i[n - 1] = i[n - 1] + 1 | 0;
			for (var a = 0; a < n; a++) e[t + a] ^= s[a];
		} }), e.Decryptor = t, e), r.mode.CTR)), Wt.exports;
		var e, t, r;
	}(), function() {
		return Yt || (Yt = 1, qt.exports = (e = tt(), zt(), e.mode.CTRGladman = function() {
			var t = e.lib.BlockCipherMode.extend();
			function r(e) {
				if (255 & ~(e >> 24)) e += 1 << 24;
				else {
					var t = e >> 16 & 255, r = e >> 8 & 255, n = 255 & e;
					255 === t ? (t = 0, 255 === r ? (r = 0, 255 === n ? n = 0 : ++n) : ++r) : ++t, e = 0, e += t << 16, e += r << 8, e += n;
				}
				return e;
			}
			function n(e) {
				return 0 === (e[0] = r(e[0])) && (e[1] = r(e[1])), e;
			}
			return t.Decryptor = t.Encryptor = t.extend({ processBlock: function(e, t) {
				var r = this._cipher, o = r.blockSize, i = this._iv, s = this._counter;
				i && (s = this._counter = i.slice(0), this._iv = void 0), n(s);
				var a = s.slice(0);
				r.encryptBlock(a, 0);
				for (var c = 0; c < o; c++) e[t + c] ^= a[c];
			} }), t;
		}(), e.mode.CTRGladman)), qt.exports;
		var e;
	}(), function() {
		return $t || ($t = 1, Zt.exports = (r = tt(), zt(), r.mode.OFB = (t = (e = r.lib.BlockCipherMode.extend()).Encryptor = e.extend({ processBlock: function(e, t) {
			var r = this._cipher, n = r.blockSize, o = this._iv, i = this._keystream;
			o && (i = this._keystream = o.slice(0), this._iv = void 0), r.encryptBlock(i, 0);
			for (var s = 0; s < n; s++) e[t + s] ^= i[s];
		} }), e.Decryptor = t, e), r.mode.OFB)), Zt.exports;
		var e, t, r;
	}(), function() {
		return Jt ? ar.exports : (Jt = 1, ar.exports = (t = tt(), zt(), t.mode.ECB = ((e = t.lib.BlockCipherMode.extend()).Encryptor = e.extend({ processBlock: function(e, t) {
			this._cipher.encryptBlock(e, t);
		} }), e.Decryptor = e.extend({ processBlock: function(e, t) {
			this._cipher.decryptBlock(e, t);
		} }), e), t.mode.ECB));
		var e, t;
	}(), function() {
		return Qt ? cr.exports : (Qt = 1, cr.exports = (e = tt(), zt(), e.pad.AnsiX923 = {
			pad: function(e, t) {
				var r = e.sigBytes, n = 4 * t, o = n - r % n, i = r + o - 1;
				e.clamp(), e.words[i >>> 2] |= o << 24 - i % 4 * 8, e.sigBytes += o;
			},
			unpad: function(e) {
				var t = 255 & e.words[e.sigBytes - 1 >>> 2];
				e.sigBytes -= t;
			}
		}, e.pad.Ansix923));
		var e;
	}(), function() {
		return er ? ur.exports : (er = 1, ur.exports = (e = tt(), zt(), e.pad.Iso10126 = {
			pad: function(t, r) {
				var n = 4 * r, o = n - t.sigBytes % n;
				t.concat(e.lib.WordArray.random(o - 1)).concat(e.lib.WordArray.create([o << 24], 1));
			},
			unpad: function(e) {
				var t = 255 & e.words[e.sigBytes - 1 >>> 2];
				e.sigBytes -= t;
			}
		}, e.pad.Iso10126));
		var e;
	}(), function() {
		return tr ? hr.exports : (tr = 1, hr.exports = (e = tt(), zt(), e.pad.Iso97971 = {
			pad: function(t, r) {
				t.concat(e.lib.WordArray.create([2147483648], 1)), e.pad.ZeroPadding.pad(t, r);
			},
			unpad: function(t) {
				e.pad.ZeroPadding.unpad(t), t.sigBytes--;
			}
		}, e.pad.Iso97971));
		var e;
	}(), function() {
		return rr || (rr = 1, lr.exports = (e = tt(), zt(), e.pad.ZeroPadding = {
			pad: function(e, t) {
				var r = 4 * t;
				e.clamp(), e.sigBytes += r - (e.sigBytes % r || r);
			},
			unpad: function(e) {
				var t = e.words, r = e.sigBytes - 1;
				for (r = e.sigBytes - 1; r >= 0; r--) if (t[r >>> 2] >>> 24 - r % 4 * 8 & 255) {
					e.sigBytes = r + 1;
					break;
				}
			}
		}, e.pad.ZeroPadding)), lr.exports;
		var e;
	}(), function() {
		return nr ? fr.exports : (nr = 1, fr.exports = (e = tt(), zt(), e.pad.NoPadding = {
			pad: function() {},
			unpad: function() {}
		}, e.pad.NoPadding));
		var e;
	}(), function() {
		return or || (or = 1, pr.exports = (e = tt(), zt(), function() {
			var t = e, r = t.lib.CipherParams, n = t.enc.Hex;
			t.format.Hex = {
				stringify: function(e) {
					return e.ciphertext.toString(n);
				},
				parse: function(e) {
					var t = n.parse(e);
					return r.create({ ciphertext: t });
				}
			};
		}(), e.format.Hex)), pr.exports;
		var e;
	}(), function() {
		return ir || (ir = 1, dr.exports = (e = tt(), lt(), yt(), Ut(), zt(), function() {
			var t = e, r = t.lib.BlockCipher, n = t.algo, o = [], i = [], s = [], a = [], c = [], u = [], h = [], l = [], f = [], p = [];
			(function() {
				for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
				var r = 0, n = 0;
				for (t = 0; t < 256; t++) {
					var d = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
					d = d >>> 8 ^ 255 & d ^ 99, o[r] = d, i[d] = r;
					var v = e[r], y = e[v], _ = e[y], g = 257 * e[d] ^ 16843008 * d;
					s[r] = g << 24 | g >>> 8, a[r] = g << 16 | g >>> 16, c[r] = g << 8 | g >>> 24, u[r] = g, g = 16843009 * _ ^ 65537 * y ^ 257 * v ^ 16843008 * r, h[d] = g << 24 | g >>> 8, l[d] = g << 16 | g >>> 16, f[d] = g << 8 | g >>> 24, p[d] = g, r ? (r = v ^ e[e[e[_ ^ v]]], n ^= e[e[n]]) : r = n = 1;
				}
			})();
			var d = [
				0,
				1,
				2,
				4,
				8,
				16,
				32,
				64,
				128,
				27,
				54
			], v = n.AES = r.extend({
				_doReset: function() {
					if (!this._nRounds || this._keyPriorReset !== this._key) {
						for (var e = this._keyPriorReset = this._key, t = e.words, r = e.sigBytes / 4, n = 4 * ((this._nRounds = r + 6) + 1), i = this._keySchedule = [], s = 0; s < n; s++) s < r ? i[s] = t[s] : (u = i[s - 1], s % r ? r > 6 && s % r == 4 && (u = o[u >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & u]) : (u = o[(u = u << 8 | u >>> 24) >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & u], u ^= d[s / r | 0] << 24), i[s] = i[s - r] ^ u);
						for (var a = this._invKeySchedule = [], c = 0; c < n; c++) {
							if (s = n - c, c % 4) var u = i[s];
							else u = i[s - 4];
							a[c] = c < 4 || s <= 4 ? u : h[o[u >>> 24]] ^ l[o[u >>> 16 & 255]] ^ f[o[u >>> 8 & 255]] ^ p[o[255 & u]];
						}
					}
				},
				encryptBlock: function(e, t) {
					this._doCryptBlock(e, t, this._keySchedule, s, a, c, u, o);
				},
				decryptBlock: function(e, t) {
					var r = e[t + 1];
					e[t + 1] = e[t + 3], e[t + 3] = r, this._doCryptBlock(e, t, this._invKeySchedule, h, l, f, p, i), r = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = r;
				},
				_doCryptBlock: function(e, t, r, n, o, i, s, a) {
					for (var c = this._nRounds, u = e[t] ^ r[0], h = e[t + 1] ^ r[1], l = e[t + 2] ^ r[2], f = e[t + 3] ^ r[3], p = 4, d = 1; d < c; d++) {
						var v = n[u >>> 24] ^ o[h >>> 16 & 255] ^ i[l >>> 8 & 255] ^ s[255 & f] ^ r[p++], y = n[h >>> 24] ^ o[l >>> 16 & 255] ^ i[f >>> 8 & 255] ^ s[255 & u] ^ r[p++], _ = n[l >>> 24] ^ o[f >>> 16 & 255] ^ i[u >>> 8 & 255] ^ s[255 & h] ^ r[p++], g = n[f >>> 24] ^ o[u >>> 16 & 255] ^ i[h >>> 8 & 255] ^ s[255 & l] ^ r[p++];
						u = v, h = y, l = _, f = g;
					}
					v = (a[u >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & f]) ^ r[p++], y = (a[h >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & u]) ^ r[p++], _ = (a[l >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & h]) ^ r[p++], g = (a[f >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & l]) ^ r[p++], e[t] = v, e[t + 1] = y, e[t + 2] = _, e[t + 3] = g;
				},
				keySize: 8
			});
			t.AES = r._createHelper(v);
		}(), e.AES)), dr.exports;
		var e;
	}(), function() {
		return sr || (sr = 1, vr.exports = (e = tt(), lt(), yt(), Ut(), zt(), function() {
			var t = e, r = t.lib, n = r.WordArray, o = r.BlockCipher, i = t.algo, s = [
				57,
				49,
				41,
				33,
				25,
				17,
				9,
				1,
				58,
				50,
				42,
				34,
				26,
				18,
				10,
				2,
				59,
				51,
				43,
				35,
				27,
				19,
				11,
				3,
				60,
				52,
				44,
				36,
				63,
				55,
				47,
				39,
				31,
				23,
				15,
				7,
				62,
				54,
				46,
				38,
				30,
				22,
				14,
				6,
				61,
				53,
				45,
				37,
				29,
				21,
				13,
				5,
				28,
				20,
				12,
				4
			], a = [
				14,
				17,
				11,
				24,
				1,
				5,
				3,
				28,
				15,
				6,
				21,
				10,
				23,
				19,
				12,
				4,
				26,
				8,
				16,
				7,
				27,
				20,
				13,
				2,
				41,
				52,
				31,
				37,
				47,
				55,
				30,
				40,
				51,
				45,
				33,
				48,
				44,
				49,
				39,
				56,
				34,
				53,
				46,
				42,
				50,
				36,
				29,
				32
			], c = [
				1,
				2,
				4,
				6,
				8,
				10,
				12,
				14,
				15,
				17,
				19,
				21,
				23,
				25,
				27,
				28
			], u = [
				{
					0: 8421888,
					268435456: 32768,
					536870912: 8421378,
					805306368: 2,
					1073741824: 512,
					1342177280: 8421890,
					1610612736: 8389122,
					1879048192: 8388608,
					2147483648: 514,
					2415919104: 8389120,
					2684354560: 33280,
					2952790016: 8421376,
					3221225472: 32770,
					3489660928: 8388610,
					3758096384: 0,
					4026531840: 33282,
					134217728: 0,
					402653184: 8421890,
					671088640: 33282,
					939524096: 32768,
					1207959552: 8421888,
					1476395008: 512,
					1744830464: 8421378,
					2013265920: 2,
					2281701376: 8389120,
					2550136832: 33280,
					2818572288: 8421376,
					3087007744: 8389122,
					3355443200: 8388610,
					3623878656: 32770,
					3892314112: 514,
					4160749568: 8388608,
					1: 32768,
					268435457: 2,
					536870913: 8421888,
					805306369: 8388608,
					1073741825: 8421378,
					1342177281: 33280,
					1610612737: 512,
					1879048193: 8389122,
					2147483649: 8421890,
					2415919105: 8421376,
					2684354561: 8388610,
					2952790017: 33282,
					3221225473: 514,
					3489660929: 8389120,
					3758096385: 32770,
					4026531841: 0,
					134217729: 8421890,
					402653185: 8421376,
					671088641: 8388608,
					939524097: 512,
					1207959553: 32768,
					1476395009: 8388610,
					1744830465: 2,
					2013265921: 33282,
					2281701377: 32770,
					2550136833: 8389122,
					2818572289: 514,
					3087007745: 8421888,
					3355443201: 8389120,
					3623878657: 0,
					3892314113: 33280,
					4160749569: 8421378
				},
				{
					0: 1074282512,
					16777216: 16384,
					33554432: 524288,
					50331648: 1074266128,
					67108864: 1073741840,
					83886080: 1074282496,
					100663296: 1073758208,
					117440512: 16,
					134217728: 540672,
					150994944: 1073758224,
					167772160: 1073741824,
					184549376: 540688,
					201326592: 524304,
					218103808: 0,
					234881024: 16400,
					251658240: 1074266112,
					8388608: 1073758208,
					25165824: 540688,
					41943040: 16,
					58720256: 1073758224,
					75497472: 1074282512,
					92274688: 1073741824,
					109051904: 524288,
					125829120: 1074266128,
					142606336: 524304,
					159383552: 0,
					176160768: 16384,
					192937984: 1074266112,
					209715200: 1073741840,
					226492416: 540672,
					243269632: 1074282496,
					260046848: 16400,
					268435456: 0,
					285212672: 1074266128,
					301989888: 1073758224,
					318767104: 1074282496,
					335544320: 1074266112,
					352321536: 16,
					369098752: 540688,
					385875968: 16384,
					402653184: 16400,
					419430400: 524288,
					436207616: 524304,
					452984832: 1073741840,
					469762048: 540672,
					486539264: 1073758208,
					503316480: 1073741824,
					520093696: 1074282512,
					276824064: 540688,
					293601280: 524288,
					310378496: 1074266112,
					327155712: 16384,
					343932928: 1073758208,
					360710144: 1074282512,
					377487360: 16,
					394264576: 1073741824,
					411041792: 1074282496,
					427819008: 1073741840,
					444596224: 1073758224,
					461373440: 524304,
					478150656: 0,
					494927872: 16400,
					511705088: 1074266128,
					528482304: 540672
				},
				{
					0: 260,
					1048576: 0,
					2097152: 67109120,
					3145728: 65796,
					4194304: 65540,
					5242880: 67108868,
					6291456: 67174660,
					7340032: 67174400,
					8388608: 67108864,
					9437184: 67174656,
					10485760: 65792,
					11534336: 67174404,
					12582912: 67109124,
					13631488: 65536,
					14680064: 4,
					15728640: 256,
					524288: 67174656,
					1572864: 67174404,
					2621440: 0,
					3670016: 67109120,
					4718592: 67108868,
					5767168: 65536,
					6815744: 65540,
					7864320: 260,
					8912896: 4,
					9961472: 256,
					11010048: 67174400,
					12058624: 65796,
					13107200: 65792,
					14155776: 67109124,
					15204352: 67174660,
					16252928: 67108864,
					16777216: 67174656,
					17825792: 65540,
					18874368: 65536,
					19922944: 67109120,
					20971520: 256,
					22020096: 67174660,
					23068672: 67108868,
					24117248: 0,
					25165824: 67109124,
					26214400: 67108864,
					27262976: 4,
					28311552: 65792,
					29360128: 67174400,
					30408704: 260,
					31457280: 65796,
					32505856: 67174404,
					17301504: 67108864,
					18350080: 260,
					19398656: 67174656,
					20447232: 0,
					21495808: 65540,
					22544384: 67109120,
					23592960: 256,
					24641536: 67174404,
					25690112: 65536,
					26738688: 67174660,
					27787264: 65796,
					28835840: 67108868,
					29884416: 67109124,
					30932992: 67174400,
					31981568: 4,
					33030144: 65792
				},
				{
					0: 2151682048,
					65536: 2147487808,
					131072: 4198464,
					196608: 2151677952,
					262144: 0,
					327680: 4198400,
					393216: 2147483712,
					458752: 4194368,
					524288: 2147483648,
					589824: 4194304,
					655360: 64,
					720896: 2147487744,
					786432: 2151678016,
					851968: 4160,
					917504: 4096,
					983040: 2151682112,
					32768: 2147487808,
					98304: 64,
					163840: 2151678016,
					229376: 2147487744,
					294912: 4198400,
					360448: 2151682112,
					425984: 0,
					491520: 2151677952,
					557056: 4096,
					622592: 2151682048,
					688128: 4194304,
					753664: 4160,
					819200: 2147483648,
					884736: 4194368,
					950272: 4198464,
					1015808: 2147483712,
					1048576: 4194368,
					1114112: 4198400,
					1179648: 2147483712,
					1245184: 0,
					1310720: 4160,
					1376256: 2151678016,
					1441792: 2151682048,
					1507328: 2147487808,
					1572864: 2151682112,
					1638400: 2147483648,
					1703936: 2151677952,
					1769472: 4198464,
					1835008: 2147487744,
					1900544: 4194304,
					1966080: 64,
					2031616: 4096,
					1081344: 2151677952,
					1146880: 2151682112,
					1212416: 0,
					1277952: 4198400,
					1343488: 4194368,
					1409024: 2147483648,
					1474560: 2147487808,
					1540096: 64,
					1605632: 2147483712,
					1671168: 4096,
					1736704: 2147487744,
					1802240: 2151678016,
					1867776: 4160,
					1933312: 2151682048,
					1998848: 4194304,
					2064384: 4198464
				},
				{
					0: 128,
					4096: 17039360,
					8192: 262144,
					12288: 536870912,
					16384: 537133184,
					20480: 16777344,
					24576: 553648256,
					28672: 262272,
					32768: 16777216,
					36864: 537133056,
					40960: 536871040,
					45056: 553910400,
					49152: 553910272,
					53248: 0,
					57344: 17039488,
					61440: 553648128,
					2048: 17039488,
					6144: 553648256,
					10240: 128,
					14336: 17039360,
					18432: 262144,
					22528: 537133184,
					26624: 553910272,
					30720: 536870912,
					34816: 537133056,
					38912: 0,
					43008: 553910400,
					47104: 16777344,
					51200: 536871040,
					55296: 553648128,
					59392: 16777216,
					63488: 262272,
					65536: 262144,
					69632: 128,
					73728: 536870912,
					77824: 553648256,
					81920: 16777344,
					86016: 553910272,
					90112: 537133184,
					94208: 16777216,
					98304: 553910400,
					102400: 553648128,
					106496: 17039360,
					110592: 537133056,
					114688: 262272,
					118784: 536871040,
					122880: 0,
					126976: 17039488,
					67584: 553648256,
					71680: 16777216,
					75776: 17039360,
					79872: 537133184,
					83968: 536870912,
					88064: 17039488,
					92160: 128,
					96256: 553910272,
					100352: 262272,
					104448: 553910400,
					108544: 0,
					112640: 553648128,
					116736: 16777344,
					120832: 262144,
					124928: 537133056,
					129024: 536871040
				},
				{
					0: 268435464,
					256: 8192,
					512: 270532608,
					768: 270540808,
					1024: 268443648,
					1280: 2097152,
					1536: 2097160,
					1792: 268435456,
					2048: 0,
					2304: 268443656,
					2560: 2105344,
					2816: 8,
					3072: 270532616,
					3328: 2105352,
					3584: 8200,
					3840: 270540800,
					128: 270532608,
					384: 270540808,
					640: 8,
					896: 2097152,
					1152: 2105352,
					1408: 268435464,
					1664: 268443648,
					1920: 8200,
					2176: 2097160,
					2432: 8192,
					2688: 268443656,
					2944: 270532616,
					3200: 0,
					3456: 270540800,
					3712: 2105344,
					3968: 268435456,
					4096: 268443648,
					4352: 270532616,
					4608: 270540808,
					4864: 8200,
					5120: 2097152,
					5376: 268435456,
					5632: 268435464,
					5888: 2105344,
					6144: 2105352,
					6400: 0,
					6656: 8,
					6912: 270532608,
					7168: 8192,
					7424: 268443656,
					7680: 270540800,
					7936: 2097160,
					4224: 8,
					4480: 2105344,
					4736: 2097152,
					4992: 268435464,
					5248: 268443648,
					5504: 8200,
					5760: 270540808,
					6016: 270532608,
					6272: 270540800,
					6528: 270532616,
					6784: 8192,
					7040: 2105352,
					7296: 2097160,
					7552: 0,
					7808: 268435456,
					8064: 268443656
				},
				{
					0: 1048576,
					16: 33555457,
					32: 1024,
					48: 1049601,
					64: 34604033,
					80: 0,
					96: 1,
					112: 34603009,
					128: 33555456,
					144: 1048577,
					160: 33554433,
					176: 34604032,
					192: 34603008,
					208: 1025,
					224: 1049600,
					240: 33554432,
					8: 34603009,
					24: 0,
					40: 33555457,
					56: 34604032,
					72: 1048576,
					88: 33554433,
					104: 33554432,
					120: 1025,
					136: 1049601,
					152: 33555456,
					168: 34603008,
					184: 1048577,
					200: 1024,
					216: 34604033,
					232: 1,
					248: 1049600,
					256: 33554432,
					272: 1048576,
					288: 33555457,
					304: 34603009,
					320: 1048577,
					336: 33555456,
					352: 34604032,
					368: 1049601,
					384: 1025,
					400: 34604033,
					416: 1049600,
					432: 1,
					448: 0,
					464: 34603008,
					480: 33554433,
					496: 1024,
					264: 1049600,
					280: 33555457,
					296: 34603009,
					312: 1,
					328: 33554432,
					344: 1048576,
					360: 1025,
					376: 34604032,
					392: 33554433,
					408: 34603008,
					424: 0,
					440: 34604033,
					456: 1049601,
					472: 1024,
					488: 33555456,
					504: 1048577
				},
				{
					0: 134219808,
					1: 131072,
					2: 134217728,
					3: 32,
					4: 131104,
					5: 134350880,
					6: 134350848,
					7: 2048,
					8: 134348800,
					9: 134219776,
					10: 133120,
					11: 134348832,
					12: 2080,
					13: 0,
					14: 134217760,
					15: 133152,
					2147483648: 2048,
					2147483649: 134350880,
					2147483650: 134219808,
					2147483651: 134217728,
					2147483652: 134348800,
					2147483653: 133120,
					2147483654: 133152,
					2147483655: 32,
					2147483656: 134217760,
					2147483657: 2080,
					2147483658: 131104,
					2147483659: 134350848,
					2147483660: 0,
					2147483661: 134348832,
					2147483662: 134219776,
					2147483663: 131072,
					16: 133152,
					17: 134350848,
					18: 32,
					19: 2048,
					20: 134219776,
					21: 134217760,
					22: 134348832,
					23: 131072,
					24: 0,
					25: 131104,
					26: 134348800,
					27: 134219808,
					28: 134350880,
					29: 133120,
					30: 2080,
					31: 134217728,
					2147483664: 131072,
					2147483665: 2048,
					2147483666: 134348832,
					2147483667: 133152,
					2147483668: 32,
					2147483669: 134348800,
					2147483670: 134217728,
					2147483671: 134219808,
					2147483672: 134350880,
					2147483673: 134217760,
					2147483674: 134219776,
					2147483675: 0,
					2147483676: 133120,
					2147483677: 2080,
					2147483678: 131104,
					2147483679: 134350848
				}
			], h = [
				4160749569,
				528482304,
				33030144,
				2064384,
				129024,
				8064,
				504,
				2147483679
			], l = i.DES = o.extend({
				_doReset: function() {
					for (var e = this._key.words, t = [], r = 0; r < 56; r++) {
						var n = s[r] - 1;
						t[r] = e[n >>> 5] >>> 31 - n % 32 & 1;
					}
					for (var o = this._subKeys = [], i = 0; i < 16; i++) {
						var u = o[i] = [], h = c[i];
						for (r = 0; r < 24; r++) u[r / 6 | 0] |= t[(a[r] - 1 + h) % 28] << 31 - r % 6, u[4 + (r / 6 | 0)] |= t[28 + (a[r + 24] - 1 + h) % 28] << 31 - r % 6;
						for (u[0] = u[0] << 1 | u[0] >>> 31, r = 1; r < 7; r++) u[r] = u[r] >>> 4 * (r - 1) + 3;
						u[7] = u[7] << 5 | u[7] >>> 27;
					}
					var l = this._invSubKeys = [];
					for (r = 0; r < 16; r++) l[r] = o[15 - r];
				},
				encryptBlock: function(e, t) {
					this._doCryptBlock(e, t, this._subKeys);
				},
				decryptBlock: function(e, t) {
					this._doCryptBlock(e, t, this._invSubKeys);
				},
				_doCryptBlock: function(e, t, r) {
					this._lBlock = e[t], this._rBlock = e[t + 1], f.call(this, 4, 252645135), f.call(this, 16, 65535), p.call(this, 2, 858993459), p.call(this, 8, 16711935), f.call(this, 1, 1431655765);
					for (var n = 0; n < 16; n++) {
						for (var o = r[n], i = this._lBlock, s = this._rBlock, a = 0, c = 0; c < 8; c++) a |= u[c][((s ^ o[c]) & h[c]) >>> 0];
						this._lBlock = s, this._rBlock = i ^ a;
					}
					var l = this._lBlock;
					this._lBlock = this._rBlock, this._rBlock = l, f.call(this, 1, 1431655765), p.call(this, 8, 16711935), p.call(this, 2, 858993459), f.call(this, 16, 65535), f.call(this, 4, 252645135), e[t] = this._lBlock, e[t + 1] = this._rBlock;
				},
				keySize: 2,
				ivSize: 2,
				blockSize: 2
			});
			function f(e, t) {
				var r = (this._lBlock >>> e ^ this._rBlock) & t;
				this._rBlock ^= r, this._lBlock ^= r << e;
			}
			function p(e, t) {
				var r = (this._rBlock >>> e ^ this._lBlock) & t;
				this._lBlock ^= r, this._rBlock ^= r << e;
			}
			t.DES = o._createHelper(l);
			var d = i.TripleDES = o.extend({
				_doReset: function() {
					var e = this._key.words;
					if (2 !== e.length && 4 !== e.length && e.length < 6) throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
					var t = e.slice(0, 2), r = e.length < 4 ? e.slice(0, 2) : e.slice(2, 4), o = e.length < 6 ? e.slice(0, 2) : e.slice(4, 6);
					this._des1 = l.createEncryptor(n.create(t)), this._des2 = l.createEncryptor(n.create(r)), this._des3 = l.createEncryptor(n.create(o));
				},
				encryptBlock: function(e, t) {
					this._des1.encryptBlock(e, t), this._des2.decryptBlock(e, t), this._des3.encryptBlock(e, t);
				},
				decryptBlock: function(e, t) {
					this._des3.decryptBlock(e, t), this._des2.encryptBlock(e, t), this._des1.decryptBlock(e, t);
				},
				keySize: 6,
				ivSize: 2,
				blockSize: 2
			});
			t.TripleDES = o._createHelper(d);
		}(), e.TripleDES)), vr.exports;
		var e;
	}(), function() {
		return yr || (yr = 1, Er.exports = (e = tt(), lt(), yt(), Ut(), zt(), function() {
			var t = e, r = t.lib.StreamCipher, n = t.algo, o = n.RC4 = r.extend({
				_doReset: function() {
					for (var e = this._key, t = e.words, r = e.sigBytes, n = this._S = [], o = 0; o < 256; o++) n[o] = o;
					o = 0;
					for (var i = 0; o < 256; o++) {
						var s = o % r, a = t[s >>> 2] >>> 24 - s % 4 * 8 & 255;
						i = (i + n[o] + a) % 256;
						var c = n[o];
						n[o] = n[i], n[i] = c;
					}
					this._i = this._j = 0;
				},
				_doProcessBlock: function(e, t) {
					e[t] ^= i.call(this);
				},
				keySize: 8,
				ivSize: 0
			});
			function i() {
				for (var e = this._S, t = this._i, r = this._j, n = 0, o = 0; o < 4; o++) {
					r = (r + e[t = (t + 1) % 256]) % 256;
					var i = e[t];
					e[t] = e[r], e[r] = i, n |= e[(e[t] + e[r]) % 256] << 24 - 8 * o;
				}
				return this._i = t, this._j = r, n;
			}
			t.RC4 = r._createHelper(o);
			var s = n.RC4Drop = o.extend({
				cfg: o.cfg.extend({ drop: 192 }),
				_doReset: function() {
					o._doReset.call(this);
					for (var e = this.cfg.drop; e > 0; e--) i.call(this);
				}
			});
			t.RC4Drop = r._createHelper(s);
		}(), e.RC4)), Er.exports;
		var e;
	}(), function() {
		return _r || (_r = 1, Br.exports = (e = tt(), lt(), yt(), Ut(), zt(), function() {
			var t = e, r = t.lib.StreamCipher, n = t.algo, o = [], i = [], s = [], a = n.Rabbit = r.extend({
				_doReset: function() {
					for (var e = this._key.words, t = this.cfg.iv, r = 0; r < 4; r++) e[r] = 16711935 & (e[r] << 8 | e[r] >>> 24) | 4278255360 & (e[r] << 24 | e[r] >>> 8);
					var n = this._X = [
						e[0],
						e[3] << 16 | e[2] >>> 16,
						e[1],
						e[0] << 16 | e[3] >>> 16,
						e[2],
						e[1] << 16 | e[0] >>> 16,
						e[3],
						e[2] << 16 | e[1] >>> 16
					], o = this._C = [
						e[2] << 16 | e[2] >>> 16,
						4294901760 & e[0] | 65535 & e[1],
						e[3] << 16 | e[3] >>> 16,
						4294901760 & e[1] | 65535 & e[2],
						e[0] << 16 | e[0] >>> 16,
						4294901760 & e[2] | 65535 & e[3],
						e[1] << 16 | e[1] >>> 16,
						4294901760 & e[3] | 65535 & e[0]
					];
					for (this._b = 0, r = 0; r < 4; r++) c.call(this);
					for (r = 0; r < 8; r++) o[r] ^= n[r + 4 & 7];
					if (t) {
						var i = t.words, s = i[0], a = i[1], u = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), h = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), l = u >>> 16 | 4294901760 & h, f = h << 16 | 65535 & u;
						for (o[0] ^= u, o[1] ^= l, o[2] ^= h, o[3] ^= f, o[4] ^= u, o[5] ^= l, o[6] ^= h, o[7] ^= f, r = 0; r < 4; r++) c.call(this);
					}
				},
				_doProcessBlock: function(e, t) {
					var r = this._X;
					c.call(this), o[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16, o[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16, o[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16, o[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;
					for (var n = 0; n < 4; n++) o[n] = 16711935 & (o[n] << 8 | o[n] >>> 24) | 4278255360 & (o[n] << 24 | o[n] >>> 8), e[t + n] ^= o[n];
				},
				blockSize: 4,
				ivSize: 2
			});
			function c() {
				for (var e = this._X, t = this._C, r = 0; r < 8; r++) i[r] = t[r];
				for (t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < i[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < i[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < i[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < i[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < i[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < i[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < i[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < i[7] >>> 0 ? 1 : 0, r = 0; r < 8; r++) {
					var n = e[r] + t[r], o = 65535 & n, a = n >>> 16;
					s[r] = ((o * o >>> 17) + o * a >>> 15) + a * a ^ ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0);
				}
				e[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, e[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, e[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, e[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, e[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, e[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, e[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, e[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0;
			}
			t.Rabbit = r._createHelper(a);
		}(), e.Rabbit)), Br.exports;
		var e;
	}(), function() {
		return gr || (gr = 1, Sr.exports = (e = tt(), lt(), yt(), Ut(), zt(), function() {
			var t = e, r = t.lib.StreamCipher, n = t.algo, o = [], i = [], s = [], a = n.RabbitLegacy = r.extend({
				_doReset: function() {
					var e = this._key.words, t = this.cfg.iv, r = this._X = [
						e[0],
						e[3] << 16 | e[2] >>> 16,
						e[1],
						e[0] << 16 | e[3] >>> 16,
						e[2],
						e[1] << 16 | e[0] >>> 16,
						e[3],
						e[2] << 16 | e[1] >>> 16
					], n = this._C = [
						e[2] << 16 | e[2] >>> 16,
						4294901760 & e[0] | 65535 & e[1],
						e[3] << 16 | e[3] >>> 16,
						4294901760 & e[1] | 65535 & e[2],
						e[0] << 16 | e[0] >>> 16,
						4294901760 & e[2] | 65535 & e[3],
						e[1] << 16 | e[1] >>> 16,
						4294901760 & e[3] | 65535 & e[0]
					];
					this._b = 0;
					for (var o = 0; o < 4; o++) c.call(this);
					for (o = 0; o < 8; o++) n[o] ^= r[o + 4 & 7];
					if (t) {
						var i = t.words, s = i[0], a = i[1], u = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), h = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), l = u >>> 16 | 4294901760 & h, f = h << 16 | 65535 & u;
						for (n[0] ^= u, n[1] ^= l, n[2] ^= h, n[3] ^= f, n[4] ^= u, n[5] ^= l, n[6] ^= h, n[7] ^= f, o = 0; o < 4; o++) c.call(this);
					}
				},
				_doProcessBlock: function(e, t) {
					var r = this._X;
					c.call(this), o[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16, o[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16, o[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16, o[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;
					for (var n = 0; n < 4; n++) o[n] = 16711935 & (o[n] << 8 | o[n] >>> 24) | 4278255360 & (o[n] << 24 | o[n] >>> 8), e[t + n] ^= o[n];
				},
				blockSize: 4,
				ivSize: 2
			});
			function c() {
				for (var e = this._X, t = this._C, r = 0; r < 8; r++) i[r] = t[r];
				for (t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < i[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < i[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < i[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < i[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < i[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < i[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < i[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < i[7] >>> 0 ? 1 : 0, r = 0; r < 8; r++) {
					var n = e[r] + t[r], o = 65535 & n, a = n >>> 16;
					s[r] = ((o * o >>> 17) + o * a >>> 15) + a * a ^ ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0);
				}
				e[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, e[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, e[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, e[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, e[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, e[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, e[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, e[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0;
			}
			t.RabbitLegacy = r._createHelper(a);
		}(), e.RabbitLegacy)), Sr.exports;
		var e;
	}(), function() {
		return br || (br = 1, Hr.exports = (e = tt(), lt(), yt(), Ut(), zt(), function() {
			var t = e, r = t.lib.BlockCipher, n = t.algo;
			const o = 16, i = [
				608135816,
				2242054355,
				320440878,
				57701188,
				2752067618,
				698298832,
				137296536,
				3964562569,
				1160258022,
				953160567,
				3193202383,
				887688300,
				3232508343,
				3380367581,
				1065670069,
				3041331479,
				2450970073,
				2306472731
			], s = [
				[
					3509652390,
					2564797868,
					805139163,
					3491422135,
					3101798381,
					1780907670,
					3128725573,
					4046225305,
					614570311,
					3012652279,
					134345442,
					2240740374,
					1667834072,
					1901547113,
					2757295779,
					4103290238,
					227898511,
					1921955416,
					1904987480,
					2182433518,
					2069144605,
					3260701109,
					2620446009,
					720527379,
					3318853667,
					677414384,
					3393288472,
					3101374703,
					2390351024,
					1614419982,
					1822297739,
					2954791486,
					3608508353,
					3174124327,
					2024746970,
					1432378464,
					3864339955,
					2857741204,
					1464375394,
					1676153920,
					1439316330,
					715854006,
					3033291828,
					289532110,
					2706671279,
					2087905683,
					3018724369,
					1668267050,
					732546397,
					1947742710,
					3462151702,
					2609353502,
					2950085171,
					1814351708,
					2050118529,
					680887927,
					999245976,
					1800124847,
					3300911131,
					1713906067,
					1641548236,
					4213287313,
					1216130144,
					1575780402,
					4018429277,
					3917837745,
					3693486850,
					3949271944,
					596196993,
					3549867205,
					258830323,
					2213823033,
					772490370,
					2760122372,
					1774776394,
					2652871518,
					566650946,
					4142492826,
					1728879713,
					2882767088,
					1783734482,
					3629395816,
					2517608232,
					2874225571,
					1861159788,
					326777828,
					3124490320,
					2130389656,
					2716951837,
					967770486,
					1724537150,
					2185432712,
					2364442137,
					1164943284,
					2105845187,
					998989502,
					3765401048,
					2244026483,
					1075463327,
					1455516326,
					1322494562,
					910128902,
					469688178,
					1117454909,
					936433444,
					3490320968,
					3675253459,
					1240580251,
					122909385,
					2157517691,
					634681816,
					4142456567,
					3825094682,
					3061402683,
					2540495037,
					79693498,
					3249098678,
					1084186820,
					1583128258,
					426386531,
					1761308591,
					1047286709,
					322548459,
					995290223,
					1845252383,
					2603652396,
					3431023940,
					2942221577,
					3202600964,
					3727903485,
					1712269319,
					422464435,
					3234572375,
					1170764815,
					3523960633,
					3117677531,
					1434042557,
					442511882,
					3600875718,
					1076654713,
					1738483198,
					4213154764,
					2393238008,
					3677496056,
					1014306527,
					4251020053,
					793779912,
					2902807211,
					842905082,
					4246964064,
					1395751752,
					1040244610,
					2656851899,
					3396308128,
					445077038,
					3742853595,
					3577915638,
					679411651,
					2892444358,
					2354009459,
					1767581616,
					3150600392,
					3791627101,
					3102740896,
					284835224,
					4246832056,
					1258075500,
					768725851,
					2589189241,
					3069724005,
					3532540348,
					1274779536,
					3789419226,
					2764799539,
					1660621633,
					3471099624,
					4011903706,
					913787905,
					3497959166,
					737222580,
					2514213453,
					2928710040,
					3937242737,
					1804850592,
					3499020752,
					2949064160,
					2386320175,
					2390070455,
					2415321851,
					4061277028,
					2290661394,
					2416832540,
					1336762016,
					1754252060,
					3520065937,
					3014181293,
					791618072,
					3188594551,
					3933548030,
					2332172193,
					3852520463,
					3043980520,
					413987798,
					3465142937,
					3030929376,
					4245938359,
					2093235073,
					3534596313,
					375366246,
					2157278981,
					2479649556,
					555357303,
					3870105701,
					2008414854,
					3344188149,
					4221384143,
					3956125452,
					2067696032,
					3594591187,
					2921233993,
					2428461,
					544322398,
					577241275,
					1471733935,
					610547355,
					4027169054,
					1432588573,
					1507829418,
					2025931657,
					3646575487,
					545086370,
					48609733,
					2200306550,
					1653985193,
					298326376,
					1316178497,
					3007786442,
					2064951626,
					458293330,
					2589141269,
					3591329599,
					3164325604,
					727753846,
					2179363840,
					146436021,
					1461446943,
					4069977195,
					705550613,
					3059967265,
					3887724982,
					4281599278,
					3313849956,
					1404054877,
					2845806497,
					146425753,
					1854211946
				],
				[
					1266315497,
					3048417604,
					3681880366,
					3289982499,
					290971e4,
					1235738493,
					2632868024,
					2414719590,
					3970600049,
					1771706367,
					1449415276,
					3266420449,
					422970021,
					1963543593,
					2690192192,
					3826793022,
					1062508698,
					1531092325,
					1804592342,
					2583117782,
					2714934279,
					4024971509,
					1294809318,
					4028980673,
					1289560198,
					2221992742,
					1669523910,
					35572830,
					157838143,
					1052438473,
					1016535060,
					1802137761,
					1753167236,
					1386275462,
					3080475397,
					2857371447,
					1040679964,
					2145300060,
					2390574316,
					1461121720,
					2956646967,
					4031777805,
					4028374788,
					33600511,
					2920084762,
					1018524850,
					629373528,
					3691585981,
					3515945977,
					2091462646,
					2486323059,
					586499841,
					988145025,
					935516892,
					3367335476,
					2599673255,
					2839830854,
					265290510,
					3972581182,
					2759138881,
					3795373465,
					1005194799,
					847297441,
					406762289,
					1314163512,
					1332590856,
					1866599683,
					4127851711,
					750260880,
					613907577,
					1450815602,
					3165620655,
					3734664991,
					3650291728,
					3012275730,
					3704569646,
					1427272223,
					778793252,
					1343938022,
					2676280711,
					2052605720,
					1946737175,
					3164576444,
					3914038668,
					3967478842,
					3682934266,
					1661551462,
					3294938066,
					4011595847,
					840292616,
					3712170807,
					616741398,
					312560963,
					711312465,
					1351876610,
					322626781,
					1910503582,
					271666773,
					2175563734,
					1594956187,
					70604529,
					3617834859,
					1007753275,
					1495573769,
					4069517037,
					2549218298,
					2663038764,
					504708206,
					2263041392,
					3941167025,
					2249088522,
					1514023603,
					1998579484,
					1312622330,
					694541497,
					2582060303,
					2151582166,
					1382467621,
					776784248,
					2618340202,
					3323268794,
					2497899128,
					2784771155,
					503983604,
					4076293799,
					907881277,
					423175695,
					432175456,
					1378068232,
					4145222326,
					3954048622,
					3938656102,
					3820766613,
					2793130115,
					2977904593,
					26017576,
					3274890735,
					3194772133,
					1700274565,
					1756076034,
					4006520079,
					3677328699,
					720338349,
					1533947780,
					354530856,
					688349552,
					3973924725,
					1637815568,
					332179504,
					3949051286,
					53804574,
					2852348879,
					3044236432,
					1282449977,
					3583942155,
					3416972820,
					4006381244,
					1617046695,
					2628476075,
					3002303598,
					1686838959,
					431878346,
					2686675385,
					1700445008,
					1080580658,
					1009431731,
					832498133,
					3223435511,
					2605976345,
					2271191193,
					2516031870,
					1648197032,
					4164389018,
					2548247927,
					300782431,
					375919233,
					238389289,
					3353747414,
					2531188641,
					2019080857,
					1475708069,
					455242339,
					2609103871,
					448939670,
					3451063019,
					1395535956,
					2413381860,
					1841049896,
					1491858159,
					885456874,
					4264095073,
					4001119347,
					1565136089,
					3898914787,
					1108368660,
					540939232,
					1173283510,
					2745871338,
					3681308437,
					4207628240,
					3343053890,
					4016749493,
					1699691293,
					1103962373,
					3625875870,
					2256883143,
					3830138730,
					1031889488,
					3479347698,
					1535977030,
					4236805024,
					3251091107,
					2132092099,
					1774941330,
					1199868427,
					1452454533,
					157007616,
					2904115357,
					342012276,
					595725824,
					1480756522,
					206960106,
					497939518,
					591360097,
					863170706,
					2375253569,
					3596610801,
					1814182875,
					2094937945,
					3421402208,
					1082520231,
					3463918190,
					2785509508,
					435703966,
					3908032597,
					1641649973,
					2842273706,
					3305899714,
					1510255612,
					2148256476,
					2655287854,
					3276092548,
					4258621189,
					236887753,
					3681803219,
					274041037,
					1734335097,
					3815195456,
					3317970021,
					1899903192,
					1026095262,
					4050517792,
					356393447,
					2410691914,
					3873677099,
					3682840055
				],
				[
					3913112168,
					2491498743,
					4132185628,
					2489919796,
					1091903735,
					1979897079,
					3170134830,
					3567386728,
					3557303409,
					857797738,
					1136121015,
					1342202287,
					507115054,
					2535736646,
					337727348,
					3213592640,
					1301675037,
					2528481711,
					1895095763,
					1721773893,
					3216771564,
					62756741,
					2142006736,
					835421444,
					2531993523,
					1442658625,
					3659876326,
					2882144922,
					676362277,
					1392781812,
					170690266,
					3921047035,
					1759253602,
					3611846912,
					1745797284,
					664899054,
					1329594018,
					3901205900,
					3045908486,
					2062866102,
					2865634940,
					3543621612,
					3464012697,
					1080764994,
					553557557,
					3656615353,
					3996768171,
					991055499,
					499776247,
					1265440854,
					648242737,
					3940784050,
					980351604,
					3713745714,
					1749149687,
					3396870395,
					4211799374,
					3640570775,
					1161844396,
					3125318951,
					1431517754,
					545492359,
					4268468663,
					3499529547,
					1437099964,
					2702547544,
					3433638243,
					2581715763,
					2787789398,
					1060185593,
					1593081372,
					2418618748,
					4260947970,
					69676912,
					2159744348,
					86519011,
					2512459080,
					3838209314,
					1220612927,
					3339683548,
					133810670,
					1090789135,
					1078426020,
					1569222167,
					845107691,
					3583754449,
					4072456591,
					1091646820,
					628848692,
					1613405280,
					3757631651,
					526609435,
					236106946,
					48312990,
					2942717905,
					3402727701,
					1797494240,
					859738849,
					992217954,
					4005476642,
					2243076622,
					3870952857,
					3732016268,
					765654824,
					3490871365,
					2511836413,
					1685915746,
					3888969200,
					1414112111,
					2273134842,
					3281911079,
					4080962846,
					172450625,
					2569994100,
					980381355,
					4109958455,
					2819808352,
					2716589560,
					2568741196,
					3681446669,
					3329971472,
					1835478071,
					660984891,
					3704678404,
					4045999559,
					3422617507,
					3040415634,
					1762651403,
					1719377915,
					3470491036,
					2693910283,
					3642056355,
					3138596744,
					1364962596,
					2073328063,
					1983633131,
					926494387,
					3423689081,
					2150032023,
					4096667949,
					1749200295,
					3328846651,
					309677260,
					2016342300,
					1779581495,
					3079819751,
					111262694,
					1274766160,
					443224088,
					298511866,
					1025883608,
					3806446537,
					1145181785,
					168956806,
					3641502830,
					3584813610,
					1689216846,
					3666258015,
					3200248200,
					1692713982,
					2646376535,
					4042768518,
					1618508792,
					1610833997,
					3523052358,
					4130873264,
					2001055236,
					3610705100,
					2202168115,
					4028541809,
					2961195399,
					1006657119,
					2006996926,
					3186142756,
					1430667929,
					3210227297,
					1314452623,
					4074634658,
					4101304120,
					2273951170,
					1399257539,
					3367210612,
					3027628629,
					1190975929,
					2062231137,
					2333990788,
					2221543033,
					2438960610,
					1181637006,
					548689776,
					2362791313,
					3372408396,
					3104550113,
					3145860560,
					296247880,
					1970579870,
					3078560182,
					3769228297,
					1714227617,
					3291629107,
					3898220290,
					166772364,
					1251581989,
					493813264,
					448347421,
					195405023,
					2709975567,
					677966185,
					3703036547,
					1463355134,
					2715995803,
					1338867538,
					1343315457,
					2802222074,
					2684532164,
					233230375,
					2599980071,
					2000651841,
					3277868038,
					1638401717,
					4028070440,
					3237316320,
					6314154,
					819756386,
					300326615,
					590932579,
					1405279636,
					3267499572,
					3150704214,
					2428286686,
					3959192993,
					3461946742,
					1862657033,
					1266418056,
					963775037,
					2089974820,
					2263052895,
					1917689273,
					448879540,
					3550394620,
					3981727096,
					150775221,
					3627908307,
					1303187396,
					508620638,
					2975983352,
					2726630617,
					1817252668,
					1876281319,
					1457606340,
					908771278,
					3720792119,
					3617206836,
					2455994898,
					1729034894,
					1080033504
				],
				[
					976866871,
					3556439503,
					2881648439,
					1522871579,
					1555064734,
					1336096578,
					3548522304,
					2579274686,
					3574697629,
					3205460757,
					3593280638,
					3338716283,
					3079412587,
					564236357,
					2993598910,
					1781952180,
					1464380207,
					3163844217,
					3332601554,
					1699332808,
					1393555694,
					1183702653,
					3581086237,
					1288719814,
					691649499,
					2847557200,
					2895455976,
					3193889540,
					2717570544,
					1781354906,
					1676643554,
					2592534050,
					3230253752,
					1126444790,
					2770207658,
					2633158820,
					2210423226,
					2615765581,
					2414155088,
					3127139286,
					673620729,
					2805611233,
					1269405062,
					4015350505,
					3341807571,
					4149409754,
					1057255273,
					2012875353,
					2162469141,
					2276492801,
					2601117357,
					993977747,
					3918593370,
					2654263191,
					753973209,
					36408145,
					2530585658,
					25011837,
					3520020182,
					2088578344,
					530523599,
					2918365339,
					1524020338,
					1518925132,
					3760827505,
					3759777254,
					1202760957,
					3985898139,
					3906192525,
					674977740,
					4174734889,
					2031300136,
					2019492241,
					3983892565,
					4153806404,
					3822280332,
					352677332,
					2297720250,
					60907813,
					90501309,
					3286998549,
					1016092578,
					2535922412,
					2839152426,
					457141659,
					509813237,
					4120667899,
					652014361,
					1966332200,
					2975202805,
					55981186,
					2327461051,
					676427537,
					3255491064,
					2882294119,
					3433927263,
					1307055953,
					942726286,
					933058658,
					2468411793,
					3933900994,
					4215176142,
					1361170020,
					2001714738,
					2830558078,
					3274259782,
					1222529897,
					1679025792,
					2729314320,
					3714953764,
					1770335741,
					151462246,
					3013232138,
					1682292957,
					1483529935,
					471910574,
					1539241949,
					458788160,
					3436315007,
					1807016891,
					3718408830,
					978976581,
					1043663428,
					3165965781,
					1927990952,
					4200891579,
					2372276910,
					3208408903,
					3533431907,
					1412390302,
					2931980059,
					4132332400,
					1947078029,
					3881505623,
					4168226417,
					2941484381,
					1077988104,
					1320477388,
					886195818,
					18198404,
					3786409e3,
					2509781533,
					112762804,
					3463356488,
					1866414978,
					891333506,
					18488651,
					661792760,
					1628790961,
					3885187036,
					3141171499,
					876946877,
					2693282273,
					1372485963,
					791857591,
					2686433993,
					3759982718,
					3167212022,
					3472953795,
					2716379847,
					445679433,
					3561995674,
					3504004811,
					3574258232,
					54117162,
					3331405415,
					2381918588,
					3769707343,
					4154350007,
					1140177722,
					4074052095,
					668550556,
					3214352940,
					367459370,
					261225585,
					2610173221,
					4209349473,
					3468074219,
					3265815641,
					314222801,
					3066103646,
					3808782860,
					282218597,
					3406013506,
					3773591054,
					379116347,
					1285071038,
					846784868,
					2669647154,
					3771962079,
					3550491691,
					2305946142,
					453669953,
					1268987020,
					3317592352,
					3279303384,
					3744833421,
					2610507566,
					3859509063,
					266596637,
					3847019092,
					517658769,
					3462560207,
					3443424879,
					370717030,
					4247526661,
					2224018117,
					4143653529,
					4112773975,
					2788324899,
					2477274417,
					1456262402,
					2901442914,
					1517677493,
					1846949527,
					2295493580,
					3734397586,
					2176403920,
					1280348187,
					1908823572,
					3871786941,
					846861322,
					1172426758,
					3287448474,
					3383383037,
					1655181056,
					3139813346,
					901632758,
					1897031941,
					2986607138,
					3066810236,
					3447102507,
					1393639104,
					373351379,
					950779232,
					625454576,
					3124240540,
					4148612726,
					2007998917,
					544563296,
					2244738638,
					2330496472,
					2058025392,
					1291430526,
					424198748,
					50039436,
					29584100,
					3605783033,
					2429876329,
					2791104160,
					1057563949,
					3255363231,
					3075367218,
					3463963227,
					1469046755,
					985887462
				]
			];
			var a = {
				pbox: [],
				sbox: []
			};
			function c(e, t) {
				let r = t >> 24 & 255, n = t >> 16 & 255, o = t >> 8 & 255, i = 255 & t, s = e.sbox[0][r] + e.sbox[1][n];
				return s ^= e.sbox[2][o], s += e.sbox[3][i], s;
			}
			function u(e, t, r) {
				let n, i = t, s = r;
				for (let t = 0; t < o; ++t) i ^= e.pbox[t], s = c(e, i) ^ s, n = i, i = s, s = n;
				return n = i, i = s, s = n, s ^= e.pbox[o], i ^= e.pbox[17], {
					left: i,
					right: s
				};
			}
			var h = n.Blowfish = r.extend({
				_doReset: function() {
					if (this._keyPriorReset !== this._key) {
						var e = this._keyPriorReset = this._key;
						(function(e, t, r) {
							for (let t = 0; t < 4; t++) {
								e.sbox[t] = [];
								for (let r = 0; r < 256; r++) e.sbox[t][r] = s[t][r];
							}
							let n = 0;
							for (let o = 0; o < 18; o++) e.pbox[o] = i[o] ^ t[n], n++, n >= r && (n = 0);
							let o = 0, a = 0, c = 0;
							for (let t = 0; t < 18; t += 2) c = u(e, o, a), o = c.left, a = c.right, e.pbox[t] = o, e.pbox[t + 1] = a;
							for (let t = 0; t < 4; t++) for (let r = 0; r < 256; r += 2) c = u(e, o, a), o = c.left, a = c.right, e.sbox[t][r] = o, e.sbox[t][r + 1] = a;
						})(a, e.words, e.sigBytes / 4);
					}
				},
				encryptBlock: function(e, t) {
					var r = u(a, e[t], e[t + 1]);
					e[t] = r.left, e[t + 1] = r.right;
				},
				decryptBlock: function(e, t) {
					var r = function(e, t, r) {
						let n, o = t, i = r;
						for (let t = 17; t > 1; --t) o ^= e.pbox[t], i = c(e, o) ^ i, n = o, o = i, i = n;
						return n = o, o = i, i = n, i ^= e.pbox[1], o ^= e.pbox[0], {
							left: o,
							right: i
						};
					}(a, e[t], e[t + 1]);
					e[t] = r.left, e[t + 1] = r.right;
				},
				blockSize: 2,
				keySize: 4,
				ivSize: 2
			});
			t.Blowfish = r._createHelper(h);
		}(), e.Blowfish)), Hr.exports;
		var e;
	}())), Je.exports));
	function Ar(e) {
		var t = e.icuString, r = e.shouldVisit, n = e.visitor, o = e.options, i = o.recurseIntoVisited, s = void 0 === i || i, u = function(e, t) {
			void 0 === t && (t = {}), t = c({
				shouldParseSkeletons: !0,
				requiresOtherClause: !0
			}, t);
			var r = new Ce(e, t).parse();
			if (r.err) {
				var n = SyntaxError(G[r.err.kind]);
				throw n.location = r.err.location, n.originalMessage = r.err.message, n;
			}
			return null != t && t.captureLocation || Ie(r.val), r.val;
		}(t, function(e, t) {
			var r = {};
			for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
			if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
				var o = 0;
				for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
			}
			return r;
		}(o, ["recurseIntoVisited"]));
		return h(u), u;
		function h(e) {
			e.map(l);
		}
		function l(e) {
			var t = !1;
			r(e) && (n(e), t = !0), t && !s || (e.type === z.select || e.type === z.plural ? Object.values(e.options).map(function(e) {
				return e.value;
			}).map(h) : e.type === z.tag && h(e.children));
		}
	}
	var Or = "_gt_", Cr = new RegExp("^".concat(Or, "$"));
	function kr(e) {
		var t;
		return e.type === Ve.TYPE.select && Cr.test(e.value) && !!e.options.other && (0 === e.options.other.value.length || e.options.other.value.length > 0 && (null === (t = e.options.other.value[0]) || void 0 === t ? void 0 : t.type) === Ve.TYPE.literal);
	}
	function Rr(e) {
		if (!e.includes(Or)) return e;
		var t = [];
		Ar({
			icuString: e,
			shouldVisit: kr,
			visitor: function(e) {
				var r, n, o, i, s, a, c, u;
				t.push({
					start: null !== (n = null === (r = e.location) || void 0 === r ? void 0 : r.start.offset) && void 0 !== n ? n : 0,
					end: null !== (i = null === (o = e.location) || void 0 === o ? void 0 : o.end.offset) && void 0 !== i ? i : 0,
					otherStart: null !== (a = null === (s = e.options.other.location) || void 0 === s ? void 0 : s.start.offset) && void 0 !== a ? a : 0,
					otherEnd: null !== (u = null === (c = e.options.other.location) || void 0 === c ? void 0 : c.end.offset) && void 0 !== u ? u : 0
				});
			},
			options: {
				recurseIntoVisited: !1,
				captureLocation: !0
			}
		});
		for (var r = [], n = 0, o = 0; o < t.length; o++) {
			var i = t[o], s = i.start, a = i.end, c = i.otherStart, u = i.otherEnd;
			r.push(e.slice(n, s)), r.push(e.slice(s, s + 4 + 1)), r.push(String(o + 1)), r.push(e.slice(s + 4 + 1, c)), r.push("{}"), r.push(e.slice(u, a)), n = a;
		}
		return r.push(e.slice(n, e.length)), r.join("");
	}
	var Lr = function() {
		return Lr = Object.assign || function(e) {
			for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
			return e;
		}, Lr.apply(this, arguments);
	};
	function Mr(e) {
		return xr.SHA256(e).toString(xr.enc.Hex).slice(0, 16);
	}
	var Ir = function(e) {
		if (e && "object" == typeof e) {
			var t = {};
			if ("c" in e && e.c && (t.c = Nr(e.c)), "d" in e) {
				var r = null == e ? void 0 : e.d;
				null != r && r.b && (t.b = Object.fromEntries(Object.entries(r.b).map(function(e) {
					return [e[0], Nr(e[1])];
				}))), null != r && r.t && (t.t = r.t);
			}
			return function(e) {
				var t = e;
				if (t && "object" == typeof t && "string" == typeof t.k) {
					var r = Object.keys(t);
					if (1 === r.length) return !0;
					if (2 === r.length) {
						if ("number" == typeof t.i) return !0;
						if ("string" == typeof t.v) return !0;
					}
					if (3 === r.length && "string" == typeof t.v && "number" == typeof t.i) return !0;
				}
				return !1;
			}(e) ? Lr({ k: e.k }, e.v && { v: e.v }) : t;
		}
		return e;
	};
	function Nr(e) {
		return Array.isArray(e) ? e.map(Ir) : Ir(e);
	}
	var Dr = function(e, t) {
		return Dr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
		}, Dr(e, t);
	};
	function jr(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
		function r() {
			this.constructor = e;
		}
		Dr(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
	}
	var Ur, Fr, Gr = function() {
		return Gr = Object.assign || function(e) {
			for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
			return e;
		}, Gr.apply(this, arguments);
	};
	function zr(e, t, r, n) {
		return new (r || (r = Promise))(function(t, o) {
			function i(e) {
				try {
					a(n.next(e));
				} catch (e) {
					o(e);
				}
			}
			function s(e) {
				try {
					a(n.throw(e));
				} catch (e) {
					o(e);
				}
			}
			function a(e) {
				var n;
				e.done ? t(e.value) : (n = e.value, n instanceof r ? n : new r(function(e) {
					e(n);
				})).then(i, s);
			}
			a((n = n.apply(e, [])).next());
		});
	}
	function Kr(e, t) {
		var r, n, o, i = {
			label: 0,
			sent: function() {
				if (1 & o[0]) throw o[1];
				return o[1];
			},
			trys: [],
			ops: []
		}, s = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
		return s.next = a(0), s.throw = a(1), s.return = a(2), "function" == typeof Symbol && (s[Symbol.iterator] = function() {
			return this;
		}), s;
		function a(a) {
			return function(c) {
				return function(a) {
					if (r) throw new TypeError("Generator is already executing.");
					for (; s && (s = 0, a[0] && (i = 0)), i;) try {
						if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
						switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
							case 0:
							case 1:
								o = a;
								break;
							case 4: return i.label++, {
								value: a[1],
								done: !1
							};
							case 5:
								i.label++, n = a[1], a = [0];
								continue;
							case 7:
								a = i.ops.pop(), i.trys.pop();
								continue;
							default:
								if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
									i = 0;
									continue;
								}
								if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
									i.label = a[1];
									break;
								}
								if (6 === a[0] && i.label < o[1]) {
									i.label = o[1], o = a;
									break;
								}
								if (o && i.label < o[2]) {
									i.label = o[2], i.ops.push(a);
									break;
								}
								o[2] && i.ops.pop(), i.trys.pop();
								continue;
						}
						a = t.call(e, i);
					} catch (e) {
						a = [6, e], n = 0;
					} finally {
						r = o = 0;
					}
					if (5 & a[0]) throw a[1];
					return {
						value: a[0] ? a[1] : void 0,
						done: !0
					};
				}([a, c]);
			};
		}
	}
	(function(e) {
		e.GT_REMOTE = "gt-remote", e.REMOTE = "remote", e.CUSTOM = "custom", e.DISABLED = "disabled";
	})(Ur || (Ur = {})), function(e) {
		e.GT = "gt", e.CUSTOM = "custom", e.DISABLED = "disabled";
	}(Fr || (Fr = {})), function(e) {
		function t() {
			var t = null !== e && e.apply(this, arguments) || this;
			return t.type = "fallback-storage-adapter", t.storage = {}, t;
		}
		jr(t, e), t.prototype.getItem = function(e) {
			return this.storage[e];
		}, t.prototype.setItem = function(e, t) {
			this.storage[e] = t;
		}, t.prototype.removeItem = function(e) {
			delete this.storage[e];
		};
	}(function() {});
	var Xr = function() {
		function e(e) {
			this.cache = {}, this.fallbackPromises = {}, this.cache = structuredClone(e);
		}
		return e.prototype.setCache = function(e, t) {
			this.cache[e] = t;
		}, e.prototype.getCache = function(e) {
			var t = this.genKey(e);
			return this.cache[t];
		}, e.prototype.getInternalCache = function() {
			return this.cache;
		}, e.prototype.missCache = function(e) {
			return zr(this, 0, void 0, function() {
				var t, r, n;
				return Kr(this, function(o) {
					switch (o.label) {
						case 0: return t = this.genKey(e), void 0 === this.fallbackPromises[t] ? [3, 2] : [4, this.fallbackPromises[t]];
						case 1: return [2, o.sent()];
						case 2: r = this.fallback(e), this.fallbackPromises[t] = r, o.label = 3;
						case 3: return o.trys.push([
							3,
							,
							5,
							6
						]), [4, r];
						case 4: return n = o.sent(), this.cache[t] = n, [2, n];
						case 5: return delete this.fallbackPromises[t], [7];
						case 6: return [2];
					}
				});
			});
		}, e;
	}();
	function Vr(e, t) {
		return function(e, t) {
			var r, n = e.source, o = e.context, i = e.id, s = e.maxChars, a = e.dataFormat;
			void 0 === t && (t = Mr), r = "JSX" === a ? Nr(n) : n;
			var c = Lr(Lr(Lr(Lr({ source: r }, i && { id: i }), o && { context: o }), null != s && { maxChars: Math.abs(s) }), a && { dataFormat: a });
			return t(Ze(c));
		}(Gr(Gr(Gr(Gr({ source: "ICU" === t.$format ? Rr(e) : e }, (null == t ? void 0 : t.$context) && { context: t.$context }), (null == t ? void 0 : t.$id) && { id: t.$id }), "$maxChars" in t && null != t.$maxChars && { $maxChars: Math.abs(t.$maxChars) }), { dataFormat: t.$format }));
	}
	var Wr = function(e) {
		function t(t) {
			var r = t.init, n = t.translateMany, o = e.call(this, r) || this;
			return o._queue = [], o._batchTimer = null, o._activeRequests = 0, o._translateMany = n, o;
		}
		return jr(t, e), t.prototype.get = function(e) {
			return this.getCache(e);
		}, t.prototype.miss = function(e) {
			return this.missCache(e);
		}, t.prototype.genKey = function(e) {
			return Vr(e.message, e.options);
		}, t.prototype.fallback = function(e) {
			var t = this._enqueueTranslation(e);
			return this._queue.length >= 25 ? this._flushNow() : this._scheduleBatch(), t;
		}, t.prototype._flushNow = function() {
			this._batchTimer && (clearTimeout(this._batchTimer), this._batchTimer = null), this._drainQueue();
		}, t.prototype._scheduleBatch = function() {
			var e = this;
			this._batchTimer || (this._batchTimer = setTimeout(function() {
				e._batchTimer = null, e._drainQueue();
			}, 50));
		}, t.prototype._drainQueue = function() {
			for (; this._queue.length > 0 && this._activeRequests < 100;) {
				var e = this._queue.splice(0, 25);
				this._sendBatchRequest(e);
			}
			this._queue.length > 0 && this._scheduleBatch();
		}, t.prototype._enqueueTranslation = function(e) {
			var t = this, r = this.genKey(e), n = e.options;
			return new Promise(function(o, i) {
				t._queue.push({
					key: r,
					source: e.message,
					metadata: Gr(Gr(Gr(Gr({}, (null == n ? void 0 : n.$context) && { context: n.$context }), (null == n ? void 0 : n.$id) && { id: n.$id }), "$maxChars" in n && null != n.$maxChars && { $maxChars: Math.abs(n.$maxChars) }), { dataFormat: n.$format }),
					resolve: function(e) {
						return o(e);
					},
					reject: i
				});
			});
		}, t.prototype._sendBatchRequest = function(e) {
			return zr(this, 0, void 0, function() {
				var t, r;
				return Kr(this, function(n) {
					switch (n.label) {
						case 0: return this._activeRequests++, t = function(e) {
							return e.reduce(function(e, t) {
								return e[t.key] = {
									source: t.source,
									metadata: t.metadata
								}, e;
							}, {});
						}(e), [4, this._sendBatchRequestWithErrorHandling(e, t)];
						case 1: return (r = n.sent()) && this._handleTranslationResponse(e, r), this._activeRequests--, [2];
					}
				});
			});
		}, t.prototype._sendBatchRequestWithErrorHandling = function(e, t) {
			return zr(this, 0, void 0, function() {
				var r, n, o;
				return Kr(this, function(i) {
					switch (i.label) {
						case 0: return i.trys.push([
							0,
							2,
							,
							3
						]), [4, this._translateMany(t)];
						case 1: return [2, i.sent()];
						case 2:
							for (r = i.sent(), n = 0, o = e; n < o.length; n++) o[n].reject(r);
							return [2, void 0];
						case 3: return [2];
					}
				});
			});
		}, t.prototype._handleTranslationResponse = function(e, t) {
			for (var r = 0, n = e; r < n.length; r++) {
				var o = n[r], i = o.key, s = t[i];
				if (s && s.success) {
					var a = s.translation;
					this.setCache(i, a), o.resolve(a);
				} else o.reject(null == s ? void 0 : s.error);
			}
		}, t;
	}(Xr);
	function Yr(e, t) {
		var r = {};
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
		if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
			var o = 0;
			for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
		}
		return r;
	}
	function qr(e) {
		if (!e) return;
		const t = {};
		for (const r in e) t[r] = { name: e[r] };
		return t;
	}
	function $r(t) {
		var { locale: r, locales: n, customNames: o, customMapping: i = qr(o), setLocale: s, getLocaleProperties: a } = t, c = Yr(t, [
			"locale",
			"locales",
			"customNames",
			"customMapping",
			"setLocale",
			"getLocaleProperties"
		]);
		const u = (e) => {
			if (i && i[e]) {
				if ("string" == typeof i[e]) return i[e];
				if (i[e].name) return i[e].name;
			}
			return (t = a(e).nativeNameWithRegionCode) ? t.charAt(0).toUpperCase() + (t.length > 1 ? t.slice(1) : "") : "";
			var t;
		};
		return n && 0 !== n.length && s ? e.jsxs("select", Object.assign({}, c, {
			value: r || "",
			onChange: (e) => s(e.target.value),
			children: [!r && e.jsx("option", { value: "" }), n.map((t) => e.jsx("option", {
				value: t,
				suppressHydrationWarning: !0,
				children: u(t)
			}, t))]
		})) : null;
	}
	(function(e) {
		function t(t) {
			var r = t.init, n = void 0 === r ? {} : r, o = t.ttl, i = t.loadTranslations, s = t.createTranslateMany, a = e.call(this, n) || this;
			return a.ttl = 6e4, a.ttl = null === o ? -1 : null != o ? o : 6e4, a._translationLoader = i, a._createTranslateMany = s, a;
		}
		jr(t, e), t.prototype.get = function(e) {
			var t = this.getCache(e);
			if (t && !(t.expiresAt > 0 && t.expiresAt < Date.now())) return t.translationsCache;
		}, t.prototype.miss = function(e) {
			return zr(this, 0, void 0, function() {
				return Kr(this, function(t) {
					switch (t.label) {
						case 0: return [4, this.missCache(e)];
						case 1: return [2, t.sent().translationsCache];
					}
				});
			});
		}, t.prototype.genKey = function(e) {
			return e;
		}, t.prototype.fallback = function(e) {
			return zr(this, 0, void 0, function() {
				var t, r, n, o;
				return Kr(this, function(i) {
					switch (i.label) {
						case 0: return t = this._translationLoader(e), r = this.ttl < 0 ? this.ttl : Date.now() + this.ttl, n = Wr.bind, o = {}, [4, t];
						case 1: return [2, {
							translationsCache: new (n.apply(Wr, [void 0, (o.init = i.sent(), o.translateMany = this._createTranslateMany(e), o)]))(),
							expiresAt: r
						}];
					}
				});
			});
		};
	})(Xr), Object.defineProperty(exports, "Branch", {
		enumerable: !0,
		get: function() {
			return n.Branch;
		}
	}), Object.defineProperty(exports, "Currency", {
		enumerable: !0,
		get: function() {
			return n.Currency;
		}
	}), Object.defineProperty(exports, "DateTime", {
		enumerable: !0,
		get: function() {
			return n.DateTime;
		}
	}), Object.defineProperty(exports, "Derive", {
		enumerable: !0,
		get: function() {
			return n.Derive;
		}
	}), Object.defineProperty(exports, "GTProvider", {
		enumerable: !0,
		get: function() {
			return n.GTProvider;
		}
	}), Object.defineProperty(exports, "Num", {
		enumerable: !0,
		get: function() {
			return n.Num;
		}
	}), Object.defineProperty(exports, "Plural", {
		enumerable: !0,
		get: function() {
			return n.Plural;
		}
	}), Object.defineProperty(exports, "RelativeTime", {
		enumerable: !0,
		get: function() {
			return n.RelativeTime;
		}
	}), Object.defineProperty(exports, "Static", {
		enumerable: !0,
		get: function() {
			return n.Static;
		}
	}), Object.defineProperty(exports, "T", {
		enumerable: !0,
		get: function() {
			return n.T;
		}
	}), Object.defineProperty(exports, "Var", {
		enumerable: !0,
		get: function() {
			return n.Var;
		}
	}), Object.defineProperty(exports, "declareStatic", {
		enumerable: !0,
		get: function() {
			return n.declareStatic;
		}
	}), Object.defineProperty(exports, "declareVar", {
		enumerable: !0,
		get: function() {
			return n.declareVar;
		}
	}), Object.defineProperty(exports, "decodeMsg", {
		enumerable: !0,
		get: function() {
			return n.decodeMsg;
		}
	}), Object.defineProperty(exports, "decodeOptions", {
		enumerable: !0,
		get: function() {
			return n.decodeOptions;
		}
	}), Object.defineProperty(exports, "decodeVars", {
		enumerable: !0,
		get: function() {
			return n.decodeVars;
		}
	}), Object.defineProperty(exports, "derive", {
		enumerable: !0,
		get: function() {
			return n.derive;
		}
	}), Object.defineProperty(exports, "gtFallback", {
		enumerable: !0,
		get: function() {
			return n.gtFallback;
		}
	}), Object.defineProperty(exports, "mFallback", {
		enumerable: !0,
		get: function() {
			return n.mFallback;
		}
	}), Object.defineProperty(exports, "msg", {
		enumerable: !0,
		get: function() {
			return n.msg;
		}
	}), Object.defineProperty(exports, "useDefaultLocale", {
		enumerable: !0,
		get: function() {
			return n.useDefaultLocale;
		}
	}), Object.defineProperty(exports, "useGT", {
		enumerable: !0,
		get: function() {
			return n.useGT;
		}
	}), Object.defineProperty(exports, "useGTClass", {
		enumerable: !0,
		get: function() {
			return n.useGTClass;
		}
	}), Object.defineProperty(exports, "useLocale", {
		enumerable: !0,
		get: function() {
			return n.useLocale;
		}
	}), Object.defineProperty(exports, "useLocaleDirection", {
		enumerable: !0,
		get: function() {
			return n.useLocaleDirection;
		}
	}), Object.defineProperty(exports, "useLocaleProperties", {
		enumerable: !0,
		get: function() {
			return n.useLocaleProperties;
		}
	}), Object.defineProperty(exports, "useLocaleSelector", {
		enumerable: !0,
		get: function() {
			return n.useLocaleSelector;
		}
	}), Object.defineProperty(exports, "useLocales", {
		enumerable: !0,
		get: function() {
			return n.useLocales;
		}
	}), Object.defineProperty(exports, "useMessages", {
		enumerable: !0,
		get: function() {
			return n.useMessages;
		}
	}), Object.defineProperty(exports, "useRegion", {
		enumerable: !0,
		get: function() {
			return n.useRegion;
		}
	}), Object.defineProperty(exports, "useRegionSelector", {
		enumerable: !0,
		get: function() {
			return n.useRegionSelector;
		}
	}), Object.defineProperty(exports, "useSetLocale", {
		enumerable: !0,
		get: function() {
			return n.useSetLocale;
		}
	}), Object.defineProperty(exports, "useTranslations", {
		enumerable: !0,
		get: function() {
			return n.useTranslations;
		}
	}), Object.defineProperty(exports, "useVersionId", {
		enumerable: !0,
		get: function() {
			return n.useVersionId;
		}
	}), exports.ClientProvider = function({ children: o, dictionary: s, dictionaryTranslations: a, translations: c, locale: u, region: h, _versionId: l, defaultLocale: f, translationRequired: p, dialectTranslationRequired: d, locales: v = [], renderSettings: y, projectId: _, devApiKey: g, runtimeUrl: b, developmentApiEnabled: m, resetLocaleCookieName: E, localeCookieName: B = "generaltranslation.locale", regionCookieName: S = "generaltranslation.region", customMapping: H, environment: w, reloadServer: T }) {
		const x = t.useRef(!1), [P, A] = t.useState(c);
		t.useEffect(() => {
			x.current && A(c);
		}, [c]);
		const [O, C] = t.useState(u && r.determineLocale(u, v, H) || "");
		t.useEffect(() => {
			var e;
			let t = null === (e = document.cookie.split("; ").find((e) => e.startsWith(`${B}=`))) || void 0 === e ? void 0 : e.split("=")[1];
			t && (t = D.resolveAliasLocale(t)), O && t && t !== O && (document.cookie = `${B}=;path=/`);
		}, [O, B]);
		const [k, R] = t.useState(a || {}), [L, M] = t.useState(s || {});
		t.useEffect(() => {
			x.current && R(a);
		}, [a]), t.useEffect(() => {
			x.current && M(s);
		}, [s]);
		const [I, N] = t.useState(h);
		t.useEffect(() => {
			var e;
			const t = null === (e = document.cookie.split("; ").find((e) => e.startsWith(`${S}=`))) || void 0 === e ? void 0 : e.split("=")[1];
			I && t && t !== I && (document.cookie = `${S}=;path=/`);
		}, [I, S]);
		const D = t.useMemo(() => new r.GT({
			devApiKey: g,
			sourceLocale: f,
			targetLocale: O,
			projectId: _,
			baseUrl: b || void 0,
			customMapping: H
		}), [
			g,
			f,
			O,
			_,
			b,
			H
		]), { registerIcuForTranslation: j, registerJsxForTranslation: U } = n.useRuntimeTranslation({
			gt: D,
			locale: O,
			versionId: l,
			runtimeUrl: b,
			setTranslations: A,
			defaultLocale: f,
			renderSettings: y,
			developmentApiEnabled: m,
			environment: w
		}), { _gtFunction: F, _mFunction: G, _filterMessagesForPreload: z, _preloadMessages: K } = n.useCreateInternalUseGTFunction({
			gt: D,
			translations: P,
			locale: O,
			defaultLocale: f,
			translationRequired: p,
			developmentApiEnabled: m,
			registerIcuForTranslation: j,
			environment: w
		}), X = n.useCreateInternalUseTranslationsFunction(D, L, k, P, O, f, p, d, m, j, w), V = n.useCreateInternalUseTranslationsObjFunction(L, k, M, R, P, O, f, p, d, m, j, X), W = !(p && !P) && O;
		return t.useEffect(() => {
			x.current = !0;
		}, []), e.jsx(n.GTContext.Provider, {
			value: {
				gt: D,
				registerIcuForTranslation: j,
				registerJsxForTranslation: U,
				setLocale: (e) => {
					e = r.determineLocale(e, v, H) || O || f, e = D.resolveAliasLocale(e), document.cookie = `${B}=${e};path=/`, document.cookie = `${E}=true;path=/`, C(e), T();
				},
				_gtFunction: F,
				_mFunction: G,
				_filterMessagesForPreload: z,
				_preloadMessages: K,
				_dictionaryFunction: X,
				_dictionaryObjFunction: V,
				locale: O,
				locales: v,
				defaultLocale: f,
				region: I,
				setRegion: (e) => {
					document.cookie = `${S}=${e || ""};path=/`, N(e);
				},
				translations: P,
				translationRequired: p,
				dialectTranslationRequired: d,
				renderSettings: y,
				developmentApiEnabled: m,
				_versionId: l
			},
			children: e.jsx(i.Suspense, {
				fallback: W && o,
				children: W && o
			})
		});
	}, exports.LocaleSelector = function(t) {
		var { locales: r } = t, o = Yr(t, ["locales"]);
		const { locale: i, locales: s, setLocale: a, getLocaleProperties: c } = n.useLocaleSelector(r);
		return e.jsx($r, Object.assign({
			locale: i,
			locales: s,
			setLocale: a,
			getLocaleProperties: c
		}, o));
	}, exports.RegionSelector = function(t) {
		var { regions: r, placeholder: o, customMapping: i, prioritizeCurrentLocaleRegion: s, sortRegionsAlphabetically: a, asLocaleSelector: c = !1 } = t, u = Yr(t, [
			"regions",
			"placeholder",
			"customMapping",
			"prioritizeCurrentLocaleRegion",
			"sortRegionsAlphabetically",
			"asLocaleSelector"
		]);
		const { region: h, setRegion: l, regions: f, regionData: p, locale: d, setLocale: v } = n.useRegionSelector({
			regions: r,
			customMapping: i,
			prioritizeCurrentLocaleRegion: s,
			sortRegionsAlphabetically: a
		});
		return e.jsxs("select", Object.assign({}, u, {
			value: h || "",
			onChange: (e) => ((e) => {
				if (l(e), c) {
					const t = p.get(e).locale;
					d !== t && v(t);
				}
			})(e.target.value),
			children: [!h && e.jsx("option", {
				value: "",
				disabled: Boolean(h),
				hidden: Boolean(h),
				suppressHydrationWarning: !0,
				children: o || ""
			}, "placeholder"), f.map((t) => e.jsx("option", {
				value: t,
				suppressHydrationWarning: !0,
				children: p.get(t).name
			}, t))]
		}));
	};
}));
//#endregion
//#region ../../../node_modules/.bun/gt-next@6.16.5+4766e5f4053ef6d3/node_modules/gt-next/dist/plugin/constants.js
var require_constants = __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.STABLE_TURBO_CONFIG_VERSION = exports.ROOT_PARAM_STABILITY = exports.SWC_PLUGIN_SUPPORT = exports.BABEL_PLUGIN_SUPPORT = void 0;
	exports.BABEL_PLUGIN_SUPPORT = "17.0.0";
	exports.SWC_PLUGIN_SUPPORT = "16.1.0";
	exports.ROOT_PARAM_STABILITY = {
		unsupported: "0.0.0",
		unstable: "15.2.0",
		experimental: "15.5.0"
	};
	exports.STABLE_TURBO_CONFIG_VERSION = "15.3.0";
}));
//#endregion
//#region ../../../node_modules/.bun/gt-next@6.16.5+4766e5f4053ef6d3/node_modules/gt-next/dist/errors/createErrors.js
var require_createErrors = __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.swcPluginCompatibilityChangeWarning = exports.createStringRenderWarning = exports.disablingCompileTimeHashWarning = exports.createGTCompilerUnavailableWarning = exports.createGTCompilerUnresolvedWarning = exports.deprecatedLocaleMappingWarning = exports.standardizedCanonicalLocalesWarning = exports.standardizedLocalesWarning = exports.dictionaryNotFoundWarning = exports.runtimeTranslationTimeoutWarning = exports.createTranslationLoadingWarning = exports.APIKeyMissingWarn = exports.noInitGTWarn = exports.projectIdMissingWarn = exports.createMismatchingHashWarning = exports.createUnsupportedLocalesWarning = exports.createInvalidDictionaryTranslationEntryWarning = exports.createInvalidDictionaryEntryWarning = exports.createNoEntryFoundWarning = exports.usingDefaultsWarning = exports.createBadFilepathWarning = exports.createInvalidIcuDictionaryEntryWarning = exports.createInvalidIcuDictionaryEntryError = exports.invalidCanonicalLocalesError = exports.invalidLocalesError = exports.createStringRenderError = exports.missingVariablesError = exports.txUseClientError = exports.gtProviderUseClientError = exports.typesFileError = exports.conflictingConfigurationBuildError = exports.unresolvedGetLocaleBuildError = exports.unresolvedLoadTranslationsBuildError = exports.unresolvedLoadDictionaryBuildError = exports.unresolvedCustomLoadTranslationsError = exports.unresolvedCustomLoadDictionaryError = exports.dictionaryDisabledError = exports.createDictionarySubsetError = exports.devApiKeyIncludedInProductionError = exports.createRequiredPrefixError = exports.createDictionaryTranslationError = exports.createStringTranslationError = exports.createUnresolvedReactVersionError = exports.createUnresolvedNextVersionError = exports.customLoadDictionaryWarning = exports.customLoadTranslationsError = exports.remoteTranslationsError = void 0;
	var generaltranslation_1 = require_index_cjs_min$2();
	var constants_1 = require_constants();
	exports.remoteTranslationsError = "gt-next Error: fetching remote translation.";
	var customLoadTranslationsError = function(locale) {
		if (locale === void 0) locale = "";
		return "gt-next Error: Failed to fetch locally stored translations. If using a custom loadTranslations(\"".concat(locale, "\"), make sure it is correctly implemented.");
	};
	exports.customLoadTranslationsError = customLoadTranslationsError;
	var customLoadDictionaryWarning = function(locale) {
		if (locale === void 0) locale = "";
		return "gt-next Warning: Failed to fetch locally stored translation dictionary. If using a custom loadDictionary(\"".concat(locale, "\"), make sure it is correctly implemented.");
	};
	exports.customLoadDictionaryWarning = customLoadDictionaryWarning;
	var createUnresolvedNextVersionError = function(error) {
		return "gt-next Error: Unable to resolve next version. ".concat(error.message);
	};
	exports.createUnresolvedNextVersionError = createUnresolvedNextVersionError;
	var createUnresolvedReactVersionError = function(error) {
		return "gt-next Error: Unable to resolve react version. ".concat(error.message);
	};
	exports.createUnresolvedReactVersionError = createUnresolvedReactVersionError;
	var createStringTranslationError = function(string, id, functionName) {
		if (functionName === void 0) functionName = "tx";
		return "gt-next string translation error. ".concat(functionName, "(\"").concat(string, "\")").concat(id ? " with id \"".concat(id, "\"") : "", " could not locate translation.");
	};
	exports.createStringTranslationError = createStringTranslationError;
	var createDictionaryTranslationError = function(id) {
		return "gt-next Error: Dictionary translation entry with id: ".concat(id, " could not be found.");
	};
	exports.createDictionaryTranslationError = createDictionaryTranslationError;
	var createRequiredPrefixError = function(id, requiredPrefix) {
		return "gt-next Error: <GTProvider> has prefix id \"".concat(requiredPrefix, "\", but a child has id \"").concat(id, "\". Change the <GTProvider> id prop or your dictionary structure to proceed.");
	};
	exports.createRequiredPrefixError = createRequiredPrefixError;
	exports.devApiKeyIncludedInProductionError = "gt-next Error: Production builds cannot use a development API key. Replace it with a production API key.";
	var createDictionarySubsetError = function(id, functionName) {
		return "gt-next Error: ".concat(functionName, " with id: \"").concat(id, "\". Invalid dictionary entry. Make sure the ID maps to the correct subroute of the dictionary.");
	};
	exports.createDictionarySubsetError = createDictionarySubsetError;
	exports.dictionaryDisabledError = "gt-next Error: Dictionaries require the withGTConfig() plugin. Add withGTConfig() to your app. For more information, visit generaltranslation.com/docs";
	exports.unresolvedCustomLoadDictionaryError = "gt-next Error: loadDictionary() was resolved by plug-in but could not be resolved at run time. This usually means that the file was found, but the loadDictionary() function itself could not be resolved.";
	exports.unresolvedCustomLoadTranslationsError = "gt-next Error: loadTranslations() was resolved by plug-in but could not be resolved at run time. This usually means that the file was found, but the loadTranslations() function itself could not be resolved.";
	var unresolvedLoadDictionaryBuildError = function(path) {
		return "gt-next Error: File defining loadDictionary() could not be resolved at ".concat(path);
	};
	exports.unresolvedLoadDictionaryBuildError = unresolvedLoadDictionaryBuildError;
	var unresolvedLoadTranslationsBuildError = function(path) {
		return "gt-next Error: File defining loadTranslations() function could not be resolved at ".concat(path);
	};
	exports.unresolvedLoadTranslationsBuildError = unresolvedLoadTranslationsBuildError;
	var unresolvedGetLocaleBuildError = function(path) {
		return "gt-next Error: File defining custom getLocale() function could not be resolved at ".concat(path);
	};
	exports.unresolvedGetLocaleBuildError = unresolvedGetLocaleBuildError;
	var conflictingConfigurationBuildError = function(conflicts) {
		return "gt-next Error: Conflicting configuration".concat(conflicts.length > 1 ? "s" : "", " detected. Resolve the following conflicts before building your app:\n").concat(conflicts.join("\n"));
	};
	exports.conflictingConfigurationBuildError = conflictingConfigurationBuildError;
	exports.typesFileError = "gt-next Error: There is no scenario in which you should be seeing this error.";
	exports.gtProviderUseClientError = "You're attempting to import the Next.js <GTProvider> in a client component. Are you sure you want to do this? It's better to import <GTProvider> in a file not marked 'use client' so that it can fetch translations on the server. If you really need to put <GTProvider> on the client, import <GTClientProvider> from 'gt-next/client' instead (discouraged when using the Next.js App Router).";
	exports.txUseClientError = "You're attempting to use the <Tx> runtime translation component in a client component. This is currently unsupported. Please use <T> with variables, or make sure <Tx> rendered on the server only. ";
	var missingVariablesError = function(variables, message) {
		return "gt-next Error: missing variables: \"".concat(variables.join("\", \""), "\" in message: \"").concat(message, "\"");
	};
	exports.missingVariablesError = missingVariablesError;
	var createStringRenderError = function(message, id) {
		return "gt-next Error: error rendering string ".concat(id ? "for id: \"".concat(id, "\"") : "", " original message: \"").concat(message, "\"");
	};
	exports.createStringRenderError = createStringRenderError;
	var invalidLocalesError = function(locales) {
		return "gt-next Error: Invalid locale codes in your configuration. Specify a list of valid locales or use \"customMapping\" to " + "define aliases for the following invalid locales: ".concat(locales.join(", "), ".");
	};
	exports.invalidLocalesError = invalidLocalesError;
	var invalidCanonicalLocalesError = function(locales) {
		return "gt-next Error: Invalid canonical locale codes in your configuration: ".concat(locales.join(", "), ".");
	};
	exports.invalidCanonicalLocalesError = invalidCanonicalLocalesError;
	var createInvalidIcuDictionaryEntryError = function(id) {
		return "gt-next Error: Invalid ICU string dictionary entry found for id: \"".concat(id, "\"");
	};
	exports.createInvalidIcuDictionaryEntryError = createInvalidIcuDictionaryEntryError;
	var createInvalidIcuDictionaryEntryWarning = function(id) {
		return "gt-next: Invalid ICU string dictionary entry found for id: \"".concat(id, "\"");
	};
	exports.createInvalidIcuDictionaryEntryWarning = createInvalidIcuDictionaryEntryWarning;
	var createBadFilepathWarning = function(filename, dir) {
		return "gt-next: Found ".concat(filename, " in ").concat(dir.join(" or "), " directory. This is not supported. Move it to your root directory.");
	};
	exports.createBadFilepathWarning = createBadFilepathWarning;
	exports.usingDefaultsWarning = "gt-next: Unable to access gt-next configuration. Using defaults.";
	var createNoEntryFoundWarning = function(id) {
		return "gt-next: No valid dictionary entry found for id: \"".concat(id, "\"");
	};
	exports.createNoEntryFoundWarning = createNoEntryFoundWarning;
	var createInvalidDictionaryEntryWarning = function(id) {
		return "gt-next: Invalid dictionary entry found for id: \"".concat(id, "\"");
	};
	exports.createInvalidDictionaryEntryWarning = createInvalidDictionaryEntryWarning;
	var createInvalidDictionaryTranslationEntryWarning = function(id) {
		return "gt-next: Invalid dictionary translation entry found for id: \"".concat(id, "\"");
	};
	exports.createInvalidDictionaryTranslationEntryWarning = createInvalidDictionaryTranslationEntryWarning;
	var createUnsupportedLocalesWarning = function(locales) {
		return "gt-next: The following locales are currently unsupported by our service: ".concat(locales.map(function(locale) {
			var name = (0, generaltranslation_1.getLocaleProperties)(locale).name;
			return "".concat(locale, " (").concat(name, ")");
		}).join(", "));
	};
	exports.createUnsupportedLocalesWarning = createUnsupportedLocalesWarning;
	var createMismatchingHashWarning = function(expectedHash, receivedHash) {
		return "gt-next: Mismatching hashes! Expected hash: ".concat(expectedHash, ", but got hash: ").concat(receivedHash, ". We will still render your translation, but make sure to update to the newest version: generaltranslation.com/docs");
	};
	exports.createMismatchingHashWarning = createMismatchingHashWarning;
	exports.projectIdMissingWarn = "gt-next: Project ID missing! Set projectId as GT_PROJECT_ID in your environment or by passing the projectId parameter to withGTConfig(). Find your project ID: generaltranslation.com/dashboard.";
	exports.noInitGTWarn = "gt-next: You are running General Translation without the withGTConfig() plugin. This means that you are not translating your app. To activate translation, add the withGTConfig() plugin to your app, and set the projectId and apiKey in your environment. For more information, visit https://generaltranslation.com/docs/next/tutorials/quickstart";
	exports.APIKeyMissingWarn = "gt-next (plugin): A Development API key is required for runtime translation!  Find your Development API key: generaltranslation.com/dashboard.  (Or, disable this warning message by setting runtimeUrl to an empty string which disables runtime translation.)";
	var createTranslationLoadingWarning = function(_a) {
		var source = _a.source, translation = _a.translation, id = _a.id;
		return "[DEV ONLY] Warning: gt-next created translation \"".concat(source, "\" -> \"").concat(translation, "\"") + (id ? " for id \"".concat(id, "\"") : "") + ". In development, hot-reloaded translations may not be be displayed until the page is refreshed. In production, translations will be preloaded and there won't be a warning.";
	};
	exports.createTranslationLoadingWarning = createTranslationLoadingWarning;
	exports.runtimeTranslationTimeoutWarning = "gt-next: Runtime translation timed out.";
	exports.dictionaryNotFoundWarning = "gt-next: Dictionary not found. Make sure you have added a dictionary to your project (either dictionary.js or [defaultLocale].json), and you have added the withGTConfig() plugin.";
	var standardizedLocalesWarning = function(locales) {
		return "gt-next: You are using The following locales were standardized: ".concat(locales.join(", "), ".");
	};
	exports.standardizedLocalesWarning = standardizedLocalesWarning;
	var standardizedCanonicalLocalesWarning = function(locales) {
		return "gt-next: You are using The following canonical locales were standardized: ".concat(locales.join(", "), ".");
	};
	exports.standardizedCanonicalLocalesWarning = standardizedCanonicalLocalesWarning;
	exports.deprecatedLocaleMappingWarning = "gt-next: You are using the deprecated localeMapping configuration. Please move \"customMapping\" to your gt.config.json file.";
	var createGTCompilerUnresolvedWarning = function(type) {
		return "gt-next (plugin): The GT ".concat(type, " compiler could not be resolved. Skipping compiler optimizations.");
	};
	exports.createGTCompilerUnresolvedWarning = createGTCompilerUnresolvedWarning;
	var createGTCompilerUnavailableWarning = function(type) {
		return type === "swc" ? "gt-next (plugin): The GT swc compiler is compatible with < next@".concat(constants_1.SWC_PLUGIN_SUPPORT, ". Skipping compiler optimizations.") : "gt-next (plugin): The GT babel compiler is compatible with turbopack or < react@".concat(constants_1.BABEL_PLUGIN_SUPPORT, ". Skipping compiler optimizations.");
	};
	exports.createGTCompilerUnavailableWarning = createGTCompilerUnavailableWarning;
	exports.disablingCompileTimeHashWarning = "gt-next (plugin): Compile-time hash is disabled. Compiler optimizations are inactive.";
	var createStringRenderWarning = function(message, id) {
		return "gt-next: failed to render string ".concat(id ? "for id: \"".concat(id, "\"") : "", " original message: \"").concat(message, "\"");
	};
	exports.createStringRenderWarning = createStringRenderWarning;
	exports.swcPluginCompatibilityChangeWarning = "gt-next (plugin): As of gt-next@6.12.4, SWC plugin support is disabled for Next.js versions prior to ".concat(constants_1.SWC_PLUGIN_SUPPORT, ". Update to the latest version of Next.js.");
}));
//#endregion
//#region components/pages/home/ResultsTable.tsx
var import_index_client = __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.gtFallback = exports.mFallback = exports.decodeVars = exports.declareVar = exports.derive = exports.declareStatic = exports.decodeOptions = exports.decodeMsg = exports.msg = exports.useMessages = exports.useVersionId = exports.useLocaleDirection = exports.useLocaleProperties = exports.useGTClass = exports.useDefaultLocale = exports.useLocales = exports.useLocale = exports.useTranslations = exports.useGT = exports.RegionSelector = exports.LocaleSelector = exports.Plural = exports.Branch = exports.Derive = exports.Static = exports.RelativeTime = exports.DateTime = exports.Currency = exports.Num = exports.Var = exports.T = void 0;
	exports.GTProvider = GTProvider;
	var client_1 = require_client_cjs_min();
	Object.defineProperty(exports, "Var", {
		enumerable: true,
		get: function() {
			return client_1.Var;
		}
	});
	Object.defineProperty(exports, "Num", {
		enumerable: true,
		get: function() {
			return client_1.Num;
		}
	});
	Object.defineProperty(exports, "Currency", {
		enumerable: true,
		get: function() {
			return client_1.Currency;
		}
	});
	Object.defineProperty(exports, "DateTime", {
		enumerable: true,
		get: function() {
			return client_1.DateTime;
		}
	});
	Object.defineProperty(exports, "RelativeTime", {
		enumerable: true,
		get: function() {
			return client_1.RelativeTime;
		}
	});
	Object.defineProperty(exports, "Static", {
		enumerable: true,
		get: function() {
			return client_1.Static;
		}
	});
	Object.defineProperty(exports, "Derive", {
		enumerable: true,
		get: function() {
			return client_1.Derive;
		}
	});
	Object.defineProperty(exports, "T", {
		enumerable: true,
		get: function() {
			return client_1.T;
		}
	});
	Object.defineProperty(exports, "Branch", {
		enumerable: true,
		get: function() {
			return client_1.Branch;
		}
	});
	Object.defineProperty(exports, "Plural", {
		enumerable: true,
		get: function() {
			return client_1.Plural;
		}
	});
	Object.defineProperty(exports, "LocaleSelector", {
		enumerable: true,
		get: function() {
			return client_1.LocaleSelector;
		}
	});
	Object.defineProperty(exports, "RegionSelector", {
		enumerable: true,
		get: function() {
			return client_1.RegionSelector;
		}
	});
	Object.defineProperty(exports, "useGT", {
		enumerable: true,
		get: function() {
			return client_1.useGT;
		}
	});
	Object.defineProperty(exports, "useTranslations", {
		enumerable: true,
		get: function() {
			return client_1.useTranslations;
		}
	});
	Object.defineProperty(exports, "useLocale", {
		enumerable: true,
		get: function() {
			return client_1.useLocale;
		}
	});
	Object.defineProperty(exports, "useLocales", {
		enumerable: true,
		get: function() {
			return client_1.useLocales;
		}
	});
	Object.defineProperty(exports, "useDefaultLocale", {
		enumerable: true,
		get: function() {
			return client_1.useDefaultLocale;
		}
	});
	Object.defineProperty(exports, "useGTClass", {
		enumerable: true,
		get: function() {
			return client_1.useGTClass;
		}
	});
	Object.defineProperty(exports, "useLocaleProperties", {
		enumerable: true,
		get: function() {
			return client_1.useLocaleProperties;
		}
	});
	Object.defineProperty(exports, "useLocaleDirection", {
		enumerable: true,
		get: function() {
			return client_1.useLocaleDirection;
		}
	});
	Object.defineProperty(exports, "useVersionId", {
		enumerable: true,
		get: function() {
			return client_1.useVersionId;
		}
	});
	Object.defineProperty(exports, "useMessages", {
		enumerable: true,
		get: function() {
			return client_1.useMessages;
		}
	});
	Object.defineProperty(exports, "msg", {
		enumerable: true,
		get: function() {
			return client_1.msg;
		}
	});
	Object.defineProperty(exports, "decodeMsg", {
		enumerable: true,
		get: function() {
			return client_1.decodeMsg;
		}
	});
	Object.defineProperty(exports, "decodeOptions", {
		enumerable: true,
		get: function() {
			return client_1.decodeOptions;
		}
	});
	Object.defineProperty(exports, "declareStatic", {
		enumerable: true,
		get: function() {
			return client_1.declareStatic;
		}
	});
	Object.defineProperty(exports, "derive", {
		enumerable: true,
		get: function() {
			return client_1.derive;
		}
	});
	Object.defineProperty(exports, "declareVar", {
		enumerable: true,
		get: function() {
			return client_1.declareVar;
		}
	});
	Object.defineProperty(exports, "decodeVars", {
		enumerable: true,
		get: function() {
			return client_1.decodeVars;
		}
	});
	Object.defineProperty(exports, "mFallback", {
		enumerable: true,
		get: function() {
			return client_1.mFallback;
		}
	});
	Object.defineProperty(exports, "gtFallback", {
		enumerable: true,
		get: function() {
			return client_1.gtFallback;
		}
	});
	var createErrors_1 = require_createErrors();
	function GTProvider() {
		throw new Error(createErrors_1.gtProviderUseClientError);
	}
}))();
function ResultsTable() {
	return jsxs("section", { children: [jsx("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: jsx(import_index_client.T, { children: "Sample Results" })
	}), jsx("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: jsxs("table", {
			className: "w-full text-sm",
			children: [jsx("thead", {
				className: "bg-muted",
				children: jsxs("tr", { children: [
					jsx("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: jsx(import_index_client.T, { children: "Library" })
					}),
					jsx("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: jsx(import_index_client.T, { children: "Bundle Size" })
					}),
					jsx("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: jsx(import_index_client.T, { children: "Lookup Time" })
					}),
					jsx("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: jsx(import_index_client.T, { children: "Lazy Loading" })
					})
				] })
			}), jsx("tbody", { children: [
				{
					lib: "react-i18next",
					size: "42.3 kB",
					time: "0.12ms",
					lazy: jsx(import_index_client.T, { children: "Yes" })
				},
				{
					lib: "react-intl",
					size: "38.1 kB",
					time: "0.15ms",
					lazy: jsx(import_index_client.T, { children: "Manual" })
				},
				{
					lib: "lingui",
					size: "12.8 kB",
					time: "0.08ms",
					lazy: jsx(import_index_client.T, { children: "Yes" })
				},
				{
					lib: "typesafe-i18n",
					size: "5.2 kB",
					time: "0.05ms",
					lazy: jsx(import_index_client.T, { children: "Built-in" })
				}
			].map((r) => jsxs("tr", {
				className: "border-t border-border",
				children: [
					jsx("td", {
						className: "px-4 py-3 font-medium text-foreground",
						children: r.lib
					}),
					jsx("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: r.size
					}),
					jsx("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: r.time
					}),
					jsx("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: r.lazy
					})
				]
			}, r.lib)) })]
		})
	})] });
}
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
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
function onRenderCallback(id, phase, actualDuration) {
	if (typeof window === "undefined") return;
	if (phase === "nested-update") return;
	try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
		window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
		window.__RENDER_METRICS__[id].push(actualDuration);
	} catch (err) {
		console.warn("onRenderCallback failed:", err);
	}
}
//#endregion
//#region components/AppProviders.tsx
function AppProviders({ children, locale }) {
	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return jsx(Profiler, {
		id: "AppRoot",
		onRender: onRenderCallback,
		children
	});
}
//#endregion
//#region scripts/Wrapper.tsx
var locale = "en";
function Wrapper({ children }) {
	return jsx(import_index_client.GTProvider, {
		locale,
		children: jsx(AppProviders, {
			locale,
			children
		})
	});
}
//#endregion
//#region components/pages/home/ResultsTable.wrapper.tsx
function Wrapped() {
	return jsx(Wrapper, { children: jsx(ResultsTable, {}) });
}
//#endregion
export { Wrapped as default };
