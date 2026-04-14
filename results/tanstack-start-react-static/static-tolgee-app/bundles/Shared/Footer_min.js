import { Link as e, useParams as t } from "@tanstack/react-router";
import n, { useCallback as r, useContext as i, useEffect as a, useRef as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region ../../node_modules/.bun/@tolgee+web@7.0.0/node_modules/@tolgee/web/dist/tolgee-web.production.esm.js
var u;
function d(e, t) {
	for (var n = 0; n < t.length; n++) {
		let r = t[n];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (let t in r) if (t !== "default" && !(t in e)) {
				let n = Object.getOwnPropertyDescriptor(r, t);
				n && Object.defineProperty(e, t, n.get ? n : {
					enumerable: !0,
					get: () => r[t]
				});
			}
		}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function f(e) {
	if (typeof e == "string") return [e];
	if (Array.isArray(e)) return e;
}
function p(e) {
	return f(e) || [];
}
function m(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function h(e) {
	var { ns: t, noWrap: n, orEmpty: r, params: i, language: a } = e, o = m(e, [
		"ns",
		"noWrap",
		"orEmpty",
		"params",
		"language"
	]);
	return Object.assign(Object.assign({}, {
		ns: t,
		noWrap: n,
		orEmpty: r,
		language: a
	}), { params: Object.assign({}, o) });
}
var g = (e, ...t) => {
	let n = {}, r;
	return typeof e == "object" && e ? n = e : (n.key = e, typeof t[0] == "string" ? (n.defaultValue = t[0], r = t[1]) : typeof t[0] == "object" && (r = t[0])), r && (n = Object.assign(Object.assign({}, h(r)), n)), n;
}, _ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, v = {};
(function(e) {
	function t(e, t) {
		var n;
		return n = e instanceof Buffer ? e : Buffer.from(e.buffer, e.byteOffset, e.byteLength), n.toString(t);
	}
	var n = function(e) {
		return Buffer.from(e);
	};
	function r(e) {
		for (var t = 0, n = Math.min(256 * 256, e.length + 1), r = new Uint16Array(n), i = [], a = 0;;) {
			var o = t < e.length;
			if (!o || a >= n - 1) {
				var s = r.subarray(0, a);
				if (i.push(String.fromCharCode.apply(null, s)), !o) return i.join("");
				e = e.subarray(t), t = 0, a = 0;
			}
			var c = e[t++];
			if (!(c & 128)) r[a++] = c;
			else if ((c & 224) == 192) {
				var l = e[t++] & 63;
				r[a++] = (c & 31) << 6 | l;
			} else if ((c & 240) == 224) {
				var l = e[t++] & 63, u = e[t++] & 63;
				r[a++] = (c & 31) << 12 | l << 6 | u;
			} else if ((c & 248) == 240) {
				var l = e[t++] & 63, u = e[t++] & 63, d = e[t++] & 63, f = (c & 7) << 18 | l << 12 | u << 6 | d;
				f > 65535 && (f -= 65536, r[a++] = f >>> 10 & 1023 | 55296, f = 56320 | f & 1023), r[a++] = f;
			}
		}
	}
	function i(e) {
		for (var t = 0, n = e.length, r = 0, i = Math.max(32, n + (n >>> 1) + 7), a = new Uint8Array(i >>> 3 << 3); t < n;) {
			var o = e.charCodeAt(t++);
			if (o >= 55296 && o <= 56319) {
				if (t < n) {
					var s = e.charCodeAt(t);
					(s & 64512) == 56320 && (++t, o = ((o & 1023) << 10) + (s & 1023) + 65536);
				}
				if (o >= 55296 && o <= 56319) continue;
			}
			if (r + 4 > a.length) {
				i += 8, i *= 1 + t / e.length * 2, i = i >>> 3 << 3;
				var c = new Uint8Array(i);
				c.set(a), a = c;
			}
			if (!(o & 4294967168)) {
				a[r++] = o;
				continue;
			} else if (!(o & 4294965248)) a[r++] = o >>> 6 & 31 | 192;
			else if (!(o & 4294901760)) a[r++] = o >>> 12 & 15 | 224, a[r++] = o >>> 6 & 63 | 128;
			else if (!(o & 4292870144)) a[r++] = o >>> 18 & 7 | 240, a[r++] = o >>> 12 & 63 | 128, a[r++] = o >>> 6 & 63 | 128;
			else continue;
			a[r++] = o & 63 | 128;
		}
		return a.slice ? a.slice(0, r) : a.subarray(0, r);
	}
	var a = "Failed to ", o = function(e, t, n) {
		if (e) throw Error(`${a}${t}: the '${n}' option is unsupported.`);
	}, s = typeof Buffer == "function" && Buffer.from, c = s ? n : i;
	function l() {
		this.encoding = "utf-8";
	}
	l.prototype.encode = function(e, t) {
		return o(t && t.stream, "encode", "stream"), c(e);
	};
	function u(e) {
		var t;
		try {
			var n = new Blob([e], { type: "text/plain;charset=UTF-8" });
			t = URL.createObjectURL(n);
			var r = new XMLHttpRequest();
			return r.open("GET", t, !1), r.send(), r.responseText;
		} finally {
			t && URL.revokeObjectURL(t);
		}
	}
	var d = !s && typeof Blob == "function" && typeof URL == "function" && typeof URL.createObjectURL == "function", f = [
		"utf-8",
		"utf8",
		"unicode-1-1-utf-8"
	], p = r;
	s ? p = t : d && (p = function(e) {
		try {
			return u(e);
		} catch {
			return r(e);
		}
	});
	var m = "construct 'TextDecoder'", h = `${a} ${m}: the `;
	function g(e, t) {
		o(t && t.fatal, m, "fatal"), e ||= "utf-8";
		var n;
		if (n = s ? Buffer.isEncoding(e) : f.indexOf(e.toLowerCase()) !== -1, !n) throw RangeError(`${h} encoding label provided ('${e}') is invalid.`);
		this.encoding = e, this.fatal = !1, this.ignoreBOM = !1;
	}
	g.prototype.decode = function(e, t) {
		o(t && t.stream, "decode", "stream");
		var n;
		return n = e instanceof Uint8Array ? e : e.buffer instanceof ArrayBuffer ? new Uint8Array(e.buffer) : new Uint8Array(e), p(n, this.encoding);
	}, e.TextEncoder = e.TextEncoder || l, e.TextDecoder = e.TextDecoder || g;
})(typeof window < "u" ? window : _);
var y = /* @__PURE__ */ d({
	__proto__: null,
	default: v
}, [v]);
(u = console.assert) == null || u.call(console, y), RegExp(`([${["‌", "‍"].join("")}]{9})+`, "g"), (() => {
	if (typeof window > "u") return !1;
	try {
		return typeof sessionStorage < "u" && sessionStorage;
	} catch (e) {
		return console.error("sessionStorage not available", e), !1;
	}
})();
//#endregion
//#region ../../node_modules/.bun/@tolgee+react@7.0.0+3f10a4be4e334a9b/node_modules/@tolgee/react/dist/tolgee-react.esm.js
var b, x = () => (b ||= n.createContext(void 0), b), S;
function C() {
	return S;
}
var w = () => {
	let e = i(x()) || C();
	if (!e) throw Error("Couldn't find tolgee instance, did you forgot to use `TolgeeProvider`?");
	return e;
}, T = () => {
	let [e, t] = s(0);
	return {
		instance: e,
		rerender: r(() => {
			t((e) => e + 1);
		}, [t])
	};
}, E = (e, t) => {
	let { tolgee: n, options: i } = w(), s = f(e), c = p(s).join(":"), l = Object.assign(Object.assign({}, i), t), { rerender: u, instance: d } = T(), m = o([]);
	m.current = [];
	let h = n.isLoaded(s);
	a(() => {
		let e = n.on("update", u);
		return () => {
			e.unsubscribe();
		};
	}, [c, n]), a(() => (n.addActiveNs(s), () => n.removeActiveNs(s)), [c, n]);
	let g = r((e) => {
		let t = e.ns ?? s?.[0];
		return n.t(Object.assign(Object.assign({}, e), { ns: t }));
	}, [n, d]);
	if (l.useSuspense && !h) throw n.addActiveNs(s, !0);
	return {
		t: g,
		isLoading: !h
	};
}, D = (e, t) => {
	let { t: n, isLoading: i } = E(e, t);
	return {
		t: r((...e) => n(g(...e)), [n]),
		isLoading: i
	};
};
function O(e) {
	return Array.isArray(e) && e.length === 1 ? e[0] : e;
}
var k = (e) => {
	if (!e) return;
	let t = {};
	return Object.entries(e || {}).forEach(([e, r]) => {
		if (typeof r == "function") t[e] = (e) => r(j(e));
		else if (n.isValidElement(r)) {
			let i = r;
			t[e] = (e) => i.props.children === void 0 && e?.length ? n.cloneElement(i, {}, j(e)) : n.cloneElement(i);
		} else t[e] = r;
	}), t;
};
function A(e) {
	return typeof e == "function" ? e() : e;
}
var j = (e) => {
	let t = O(e);
	return Array.isArray(t) ? t.map((e, t) => n.createElement(n.Fragment, { key: t }, A(e))) : A(t);
}, M = (e) => {
	let t = e.keyName || e.children;
	t === void 0 && console.error("T component: keyName not defined");
	let r = e.defaultValue || (e.keyName ? e.children : void 0), i = j(e.t({
		key: t,
		params: k(e.params),
		defaultValue: r,
		noWrap: e.noWrap,
		ns: e.ns,
		language: e.language
	}));
	return n.createElement(n.Fragment, null, i);
}, N = (e) => {
	let { t } = E();
	return n.createElement(M, Object.assign({ t }, e));
};
//#endregion
//#region src/i18n/config.tsx
function P() {
	let { t: e, ...t } = D();
	return {
		...t,
		t: (t, n) => e(t, n)
	};
}
function F(e) {
	return /* @__PURE__ */ c(N, { ...e });
}
//#endregion
//#region src/components/Footer.tsx
function I() {
	let { t: n } = P(), r = t({ strict: !1 }).locale ?? "en", i = [
		{
			label: n("footer.github", "GitHub"),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: n("footer.methodology", "Methodology"),
			to: "/$locale/about",
			isInternal: !0
		},
		{
			label: n("footer.contributing", "Contributing"),
			to: "/$locale/contact",
			isInternal: !0
		}
	];
	return /* @__PURE__ */ c("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: /* @__PURE__ */ l("div", {
			className: "container py-8",
			children: [/* @__PURE__ */ l("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					/* @__PURE__ */ l("div", { children: [/* @__PURE__ */ c("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}), /* @__PURE__ */ c("p", {
						className: "text-sm text-muted-foreground",
						children: /* @__PURE__ */ c(F, {
							keyName: "footer.anOpenSourceTestApplication",
							defaultValue: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
						})
					})] }),
					/* @__PURE__ */ l("div", { children: [/* @__PURE__ */ c("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: /* @__PURE__ */ c(F, {
							keyName: "footer.resources",
							defaultValue: "Resources"
						})
					}), /* @__PURE__ */ c("ul", {
						className: "space-y-1",
						children: i.map((t) => /* @__PURE__ */ c("li", { children: t.isInternal ? /* @__PURE__ */ c(e, {
							to: t.to,
							params: { locale: r },
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: t.label
						}) : /* @__PURE__ */ c("a", {
							href: t.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: t.label
						}) }, t.label))
					})] }),
					/* @__PURE__ */ l("div", { children: [/* @__PURE__ */ c("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: /* @__PURE__ */ c(F, {
							keyName: "footer.contact",
							defaultValue: "Contact"
						})
					}), /* @__PURE__ */ c("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), /* @__PURE__ */ c("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: /* @__PURE__ */ c(F, {
					keyName: "footer.builtWith",
					defaultValue: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router."
				})
			})]
		})
	});
}
//#endregion
export { I as default };
