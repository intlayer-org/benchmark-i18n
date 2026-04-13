import e, { useCallback as t, useContext as n, useEffect as r, useRef as i, useState as a } from "react";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
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
function p(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function m(e) {
	var { ns: t, noWrap: n, orEmpty: r, params: i, language: a } = e, o = p(e, [
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
var h = (e, ...t) => {
	let n = {}, r;
	return typeof e == "object" && e ? n = e : (n.key = e, typeof t[0] == "string" ? (n.defaultValue = t[0], r = t[1]) : typeof t[0] == "object" && (r = t[0])), r && (n = Object.assign(Object.assign({}, m(r)), n)), n;
}, g = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _ = {};
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
})(typeof window < "u" ? window : g);
var v = /* @__PURE__ */ u({
	__proto__: null,
	default: _
}, [_]);
(l = console.assert) == null || l.call(console, v), RegExp(`([${["‌", "‍"].join("")}]{9})+`, "g"), (() => {
	if (typeof window > "u") return !1;
	try {
		return typeof sessionStorage < "u" && sessionStorage;
	} catch (e) {
		return console.error("sessionStorage not available", e), !1;
	}
})();
//#endregion
//#region ../../node_modules/.bun/@tolgee+react@7.0.0+3f10a4be4e334a9b/node_modules/@tolgee/react/dist/tolgee-react.esm.js
var y, b = () => (y ||= e.createContext(void 0), y), x;
function S() {
	return x;
}
var C = () => {
	let e = n(b()) || S();
	if (!e) throw Error("Couldn't find tolgee instance, did you forgot to use `TolgeeProvider`?");
	return e;
}, w = () => {
	let [e, n] = a(0);
	return {
		instance: e,
		rerender: t(() => {
			n((e) => e + 1);
		}, [n])
	};
}, T = (e, n) => {
	let { tolgee: a, options: o } = C(), s = d(e), c = f(s).join(":"), l = Object.assign(Object.assign({}, o), n), { rerender: u, instance: p } = w(), m = i([]);
	m.current = [];
	let h = a.isLoaded(s);
	r(() => {
		let e = a.on("update", u);
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
}, E = (e, n) => {
	let { t: r, isLoading: i } = T(e, n);
	return {
		t: t((...e) => r(h(...e)), [r]),
		isLoading: i
	};
};
function D(e) {
	return Array.isArray(e) && e.length === 1 ? e[0] : e;
}
var O = (t) => {
	if (!t) return;
	let n = {};
	return Object.entries(t || {}).forEach(([t, r]) => {
		if (typeof r == "function") n[t] = (e) => r(A(e));
		else if (e.isValidElement(r)) {
			let i = r;
			n[t] = (t) => i.props.children === void 0 && t?.length ? e.cloneElement(i, {}, A(t)) : e.cloneElement(i);
		} else n[t] = r;
	}), n;
};
function k(e) {
	return typeof e == "function" ? e() : e;
}
var A = (t) => {
	let n = D(t);
	return Array.isArray(n) ? n.map((t, n) => e.createElement(e.Fragment, { key: n }, k(t))) : k(n);
}, j = (t) => {
	let n = t.keyName || t.children;
	n === void 0 && console.error("T component: keyName not defined");
	let r = t.defaultValue || (t.keyName ? t.children : void 0), i = A(t.t({
		key: n,
		params: O(t.params),
		defaultValue: r,
		noWrap: t.noWrap,
		ns: t.ns,
		language: t.language
	}));
	return e.createElement(e.Fragment, null, i);
}, M = (t) => {
	let { t: n } = T();
	return e.createElement(j, Object.assign({ t: n }, t));
};
//#endregion
//#region src/components/pages/careers/OpenPositions.tsx
function N() {
	let { t: e } = E(), t = [
		{
			title: e("openPositions.seniorFrontendEngineer", "Senior Frontend Engineer"),
			location: e("openPositions.remote", "Remote"),
			type: e("openPositions.fullTime", "Full-time"),
			dept: e("openPositions.engineering", "Engineering"),
			desc: e("openPositions.buildAndMaintainOur", "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.")
		},
		{
			title: e("openPositions.backendEngineer", "Backend Engineer"),
			location: e("openPositions.remote", "Remote"),
			type: e("openPositions.fullTime", "Full-time"),
			dept: e("openPositions.engineering", "Engineering"),
			desc: e("openPositions.designAndScaleOur", "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.")
		},
		{
			title: e("openPositions.technicalWriter", "Technical Writer"),
			location: e("openPositions.remote", "Remote"),
			type: e("openPositions.partTime", "Part-time"),
			dept: e("openPositions.documentation", "Documentation"),
			desc: e("openPositions.createComprehensiveGuidesApi", "Create comprehensive guides, API references, and tutorials for our benchmarking platform.")
		},
		{
			title: e("openPositions.devrelEngineer", "DevRel Engineer"),
			location: e("openPositions.sfRemote", "San Francisco / Remote"),
			type: e("openPositions.fullTime", "Full-time"),
			dept: e("openPositions.community", "Community"),
			desc: e("openPositions.engageWithTheI18n", "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.")
		},
		{
			title: e("openPositions.qaEngineer", "QA Engineer"),
			location: e("openPositions.remote", "Remote"),
			type: e("openPositions.fullTime", "Full-time"),
			dept: e("openPositions.engineering", "Engineering"),
			desc: e("openPositions.ensureTheAccuracyAnd", "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.")
		}
	];
	return /* @__PURE__ */ c(o, { children: [/* @__PURE__ */ s("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: /* @__PURE__ */ s(M, {
			keyName: "openPositions.openPositions",
			defaultValue: "Open Positions"
		})
	}), /* @__PURE__ */ s("div", {
		className: "space-y-4",
		children: t.map((e) => /* @__PURE__ */ c("div", {
			className: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ c("div", { children: [
				/* @__PURE__ */ s("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.title
				}),
				/* @__PURE__ */ s("p", {
					className: "text-sm text-muted-foreground",
					children: e.desc
				}),
				/* @__PURE__ */ c("div", {
					className: "mt-2 flex gap-2",
					children: [
						/* @__PURE__ */ s("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.dept
						}),
						/* @__PURE__ */ s("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.location
						}),
						/* @__PURE__ */ s("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.type
						})
					]
				})
			] }), /* @__PURE__ */ s("button", {
				type: "button",
				className: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: /* @__PURE__ */ s(M, {
					keyName: "openPositions.applyNow",
					defaultValue: "Apply Now"
				})
			})]
		}, e.title))
	})] });
}
//#endregion
export { N as default };
