import e, { useCallback as t, useContext as n, useEffect as r, useId as i, useRef as a, useState as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region ../../node_modules/.bun/@tolgee+web@7.0.0/node_modules/@tolgee/web/dist/tolgee-web.production.esm.js
var l;
function u(e, t) {
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
function d(e) {
	if (typeof e == "string") return [e];
	if (Array.isArray(e)) return e;
}
function f(e) {
	return d(e) || [];
}
var p = (e, t) => fetch(e, t);
function m(e) {
	return Object.fromEntries(new Headers(e).entries());
}
((e = p) => (t, n) => {
	let r = m(n?.headers);
	return r["x-api-key"] && (r = Object.assign({
		"x-tolgee-sdk-type": "JS",
		"x-tolgee-sdk-version": "prerelease"
	}, r)), e(t, Object.assign(Object.assign({}, n), { headers: r }));
})();
var h = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, g = {};
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
})(typeof window < "u" ? window : h);
var _ = /* @__PURE__ */ u({
	__proto__: null,
	default: g
}, [g]);
(l = console.assert) == null || l.call(console, _), RegExp(`([${["‌", "‍"].join("")}]{9})+`, "g"), (() => {
	if (typeof window > "u") return !1;
	try {
		return typeof sessionStorage < "u" && sessionStorage;
	} catch (e) {
		return console.error("sessionStorage not available", e), !1;
	}
})();
//#endregion
//#region ../../node_modules/.bun/@tolgee+react@7.0.0+3f10a4be4e334a9b/node_modules/@tolgee/react/dist/tolgee-react.esm.js
var v, y = () => (v ||= e.createContext(void 0), v), b;
function x() {
	return b;
}
var S = () => {
	let e = n(y()) || x();
	if (!e) throw Error("Couldn't find tolgee instance, did you forgot to use `TolgeeProvider`?");
	return e;
}, C = () => {
	let [e, n] = o(0);
	return {
		instance: e,
		rerender: t(() => {
			n((e) => e + 1);
		}, [n])
	};
}, w = (e, n) => {
	let { tolgee: i, options: o } = S(), s = d(e), c = f(s).join(":"), l = Object.assign(Object.assign({}, o), n), { rerender: u, instance: p } = C(), m = a([]);
	m.current = [];
	let h = i.isLoaded(s);
	r(() => {
		let e = i.on("update", u);
		return () => {
			e.unsubscribe();
		};
	}, [c, i]), r(() => (i.addActiveNs(s), () => i.removeActiveNs(s)), [c, i]);
	let g = t((e) => {
		let t = e.ns ?? s?.[0];
		return i.t(Object.assign(Object.assign({}, e), { ns: t }));
	}, [i, p]);
	if (l.useSuspense && !h) throw i.addActiveNs(s, !0);
	return {
		t: g,
		isLoading: !h
	};
};
function T(e) {
	return Array.isArray(e) && e.length === 1 ? e[0] : e;
}
var E = (t) => {
	if (!t) return;
	let n = {};
	return Object.entries(t || {}).forEach(([t, r]) => {
		if (typeof r == "function") n[t] = (e) => r(O(e));
		else if (e.isValidElement(r)) {
			let i = r;
			n[t] = (t) => i.props.children === void 0 && t?.length ? e.cloneElement(i, {}, O(t)) : e.cloneElement(i);
		} else n[t] = r;
	}), n;
};
function D(e) {
	return typeof e == "function" ? e() : e;
}
var O = (t) => {
	let n = T(t);
	return Array.isArray(n) ? n.map((t, n) => e.createElement(e.Fragment, { key: n }, D(t))) : D(n);
}, k = (t) => {
	let n = t.keyName || t.children;
	n === void 0 && console.error("T component: keyName not defined");
	let r = t.defaultValue || (t.keyName ? t.children : void 0), i = O(t.t({
		key: n,
		params: E(t.params),
		defaultValue: r,
		noWrap: t.noWrap,
		ns: t.ns,
		language: t.language
	}));
	return e.createElement(e.Fragment, null, i);
}, A = (t) => {
	let { t: n } = w();
	return e.createElement(k, Object.assign({ t: n }, t));
};
//#endregion
//#region src/components/pages/settings/ProfileSection.tsx
function j() {
	let e = i(), t = i();
	return /* @__PURE__ */ c("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [/* @__PURE__ */ s("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: /* @__PURE__ */ s(A, {
				keyName: "profileSection.profile",
				defaultValue: "Profile"
			})
		}), /* @__PURE__ */ c("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ c("div", { children: [/* @__PURE__ */ s("label", {
				htmlFor: e,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: /* @__PURE__ */ s(A, {
					keyName: "profileSection.displayName",
					defaultValue: "Display Name"
				})
			}), /* @__PURE__ */ s("input", {
				id: e,
				defaultValue: "John Developer",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] }), /* @__PURE__ */ c("div", { children: [/* @__PURE__ */ s("label", {
				htmlFor: t,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: /* @__PURE__ */ s(A, {
					keyName: "profileSection.email",
					defaultValue: "Email"
				})
			}), /* @__PURE__ */ s("input", {
				id: t,
				defaultValue: "john@example.com",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] })]
		})]
	});
}
//#endregion
export { j as default };
