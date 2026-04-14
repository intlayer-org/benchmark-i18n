import e, { useCallback as t, useContext as n, useEffect as r, useRef as i, useState as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region ../../node_modules/.bun/@tolgee+web@7.0.0/node_modules/@tolgee/web/dist/tolgee-web.production.esm.js
var c;
function l(e, t) {
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
function u(e) {
	if (typeof e == "string") return [e];
	if (Array.isArray(e)) return e;
}
function d(e) {
	return u(e) || [];
}
var f = (e, t) => fetch(e, t);
function p(e) {
	return Object.fromEntries(new Headers(e).entries());
}
((e = f) => (t, n) => {
	let r = p(n?.headers);
	return r["x-api-key"] && (r = Object.assign({
		"x-tolgee-sdk-type": "JS",
		"x-tolgee-sdk-version": "prerelease"
	}, r)), e(t, Object.assign(Object.assign({}, n), { headers: r }));
})();
var m = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, h = {};
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
})(typeof window < "u" ? window : m);
var g = /* @__PURE__ */ l({
	__proto__: null,
	default: h
}, [h]);
(c = console.assert) == null || c.call(console, g), RegExp(`([${["‌", "‍"].join("")}]{9})+`, "g"), (() => {
	if (typeof window > "u") return !1;
	try {
		return typeof sessionStorage < "u" && sessionStorage;
	} catch (e) {
		return console.error("sessionStorage not available", e), !1;
	}
})();
//#endregion
//#region ../../node_modules/.bun/@tolgee+react@7.0.0+3f10a4be4e334a9b/node_modules/@tolgee/react/dist/tolgee-react.esm.js
var _, v = () => (_ ||= e.createContext(void 0), _), y;
function b() {
	return y;
}
var x = () => {
	let e = n(v()) || b();
	if (!e) throw Error("Couldn't find tolgee instance, did you forgot to use `TolgeeProvider`?");
	return e;
}, S = () => {
	let [e, n] = a(0);
	return {
		instance: e,
		rerender: t(() => {
			n((e) => e + 1);
		}, [n])
	};
}, C = (e, n) => {
	let { tolgee: a, options: o } = x(), s = u(e), c = d(s).join(":"), l = Object.assign(Object.assign({}, o), n), { rerender: f, instance: p } = S(), m = i([]);
	m.current = [];
	let h = a.isLoaded(s);
	r(() => {
		let e = a.on("update", f);
		return () => {
			e.unsubscribe();
		};
	}, [c, a]), r(() => (a.addActiveNs(s), () => a.removeActiveNs(s)), [c, a]);
	let g = t((e) => {
		let t = e.ns ?? s?.[0];
		return a.t(Object.assign(Object.assign({}, e), { ns: t }));
	}, [a, p]);
	if (l.useSuspense && !h) throw a.addActiveNs(s, !0);
	return {
		t: g,
		isLoading: !h
	};
};
function w(e) {
	return Array.isArray(e) && e.length === 1 ? e[0] : e;
}
var T = (t) => {
	if (!t) return;
	let n = {};
	return Object.entries(t || {}).forEach(([t, r]) => {
		if (typeof r == "function") n[t] = (e) => r(D(e));
		else if (e.isValidElement(r)) {
			let i = r;
			n[t] = (t) => i.props.children === void 0 && t?.length ? e.cloneElement(i, {}, D(t)) : e.cloneElement(i);
		} else n[t] = r;
	}), n;
};
function E(e) {
	return typeof e == "function" ? e() : e;
}
var D = (t) => {
	let n = w(t);
	return Array.isArray(n) ? n.map((t, n) => e.createElement(e.Fragment, { key: n }, E(t))) : E(n);
}, O = (t) => {
	let n = t.keyName || t.children;
	n === void 0 && console.error("T component: keyName not defined");
	let r = t.defaultValue || (t.keyName ? t.children : void 0), i = D(t.t({
		key: n,
		params: T(t.params),
		defaultValue: r,
		noWrap: t.noWrap,
		ns: t.ns,
		language: t.language
	}));
	return e.createElement(e.Fragment, null, i);
}, k = (t) => {
	let { t: n } = C();
	return e.createElement(O, Object.assign({ t: n }, t));
};
//#endregion
//#region src/i18n/config.tsx
function A(e) {
	return /* @__PURE__ */ o(k, { ...e });
}
//#endregion
//#region src/components/pages/home/WhyItMatters.tsx
function j() {
	return /* @__PURE__ */ s("section", {
		className: "mb-16",
		children: [/* @__PURE__ */ o("h2", {
			className: "mb-6 text-2xl font-bold text-foreground",
			children: /* @__PURE__ */ o(A, {
				keyName: "whyItMatters.whyTheseMetricsMatter",
				defaultValue: "Why These Metrics Matter"
			})
		}), /* @__PURE__ */ s("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: [
				/* @__PURE__ */ s("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [/* @__PURE__ */ o("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: /* @__PURE__ */ o(A, {
							keyName: "whyItMatters.bundleSize",
							defaultValue: "Bundle Size"
						})
					}), /* @__PURE__ */ o("p", {
						className: "text-sm text-muted-foreground",
						children: /* @__PURE__ */ o(A, {
							keyName: "whyItMatters.theBundleIsTheData",
							defaultValue: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves."
						})
					})]
				}),
				/* @__PURE__ */ s("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [/* @__PURE__ */ o("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: /* @__PURE__ */ o(A, {
							keyName: "whyItMatters.renderingHydration",
							defaultValue: "Rendering & Hydration"
						})
					}), /* @__PURE__ */ o("p", {
						className: "text-sm text-muted-foreground",
						children: /* @__PURE__ */ o(A, {
							keyName: "whyItMatters.connectingALargeJson",
							defaultValue: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI)."
						})
					})]
				}),
				/* @__PURE__ */ s("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [/* @__PURE__ */ o("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: /* @__PURE__ */ o(A, {
							keyName: "whyItMatters.dynamicLoading",
							defaultValue: "Dynamic Loading"
						})
					}), /* @__PURE__ */ o("p", {
						className: "text-sm text-muted-foreground",
						children: /* @__PURE__ */ o(A, {
							keyName: "whyItMatters.loadingAllTranslationsUpfront",
							defaultValue: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
						})
					})]
				})
			]
		})]
	});
}
//#endregion
export { j as default };
