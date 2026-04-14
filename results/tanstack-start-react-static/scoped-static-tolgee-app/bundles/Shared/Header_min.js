import { Link as e, useNavigate as t, useParams as n } from "@tanstack/react-router";
import { ChevronDown as r } from "lucide-react";
import i, { useCallback as a, useContext as o, useEffect as s, useLayoutEffect as c, useRef as l, useState as u } from "react";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region ../../node_modules/.bun/@tolgee+web@7.0.0/node_modules/@tolgee/web/dist/tolgee-web.production.esm.js
var p;
function m(e, t) {
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
function h(e) {
	if (typeof e == "string") return [e];
	if (Array.isArray(e)) return e;
}
function g(e) {
	return h(e) || [];
}
function _(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function v(e) {
	var { ns: t, noWrap: n, orEmpty: r, params: i, language: a } = e, o = _(e, [
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
var y = (e, ...t) => {
	let n = {}, r;
	return typeof e == "object" && e ? n = e : (n.key = e, typeof t[0] == "string" ? (n.defaultValue = t[0], r = t[1]) : typeof t[0] == "object" && (r = t[0])), r && (n = Object.assign(Object.assign({}, v(r)), n)), n;
}, b = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, x = {};
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
})(typeof window < "u" ? window : b);
var S = /* @__PURE__ */ m({
	__proto__: null,
	default: x
}, [x]);
(p = console.assert) == null || p.call(console, S), RegExp(`([${["‌", "‍"].join("")}]{9})+`, "g"), (() => {
	if (typeof window > "u") return !1;
	try {
		return typeof sessionStorage < "u" && sessionStorage;
	} catch (e) {
		return console.error("sessionStorage not available", e), !1;
	}
})();
//#endregion
//#region ../../node_modules/.bun/@tolgee+react@7.0.0+3f10a4be4e334a9b/node_modules/@tolgee/react/dist/tolgee-react.esm.js
var C, w = () => (C ||= i.createContext(void 0), C), T;
function E() {
	return T;
}
var D = () => {
	let e = o(w()) || E();
	if (!e) throw Error("Couldn't find tolgee instance, did you forgot to use `TolgeeProvider`?");
	return e;
}, O = () => {
	let [e, t] = u(0);
	return {
		instance: e,
		rerender: a(() => {
			t((e) => e + 1);
		}, [t])
	};
}, k = (e, t) => {
	let { tolgee: n, options: r } = D(), i = h(e), o = g(i).join(":"), c = Object.assign(Object.assign({}, r), t), { rerender: u, instance: d } = O(), f = l([]);
	f.current = [];
	let p = n.isLoaded(i);
	s(() => {
		let e = n.on("update", u);
		return () => {
			e.unsubscribe();
		};
	}, [o, n]), s(() => (n.addActiveNs(i), () => n.removeActiveNs(i)), [o, n]);
	let m = a((e) => {
		let t = e.ns ?? i?.[0];
		return n.t(Object.assign(Object.assign({}, e), { ns: t }));
	}, [n, d]);
	if (c.useSuspense && !p) throw n.addActiveNs(i, !0);
	return {
		t: m,
		isLoading: !p
	};
}, A = (e, t) => {
	let { t: n, isLoading: r } = k(e, t);
	return {
		t: a((...e) => n(y(...e)), [n]),
		isLoading: r
	};
};
function j(e) {
	return Array.isArray(e) && e.length === 1 ? e[0] : e;
}
var M = (e) => {
	if (!e) return;
	let t = {};
	return Object.entries(e || {}).forEach(([e, n]) => {
		if (typeof n == "function") t[e] = (e) => n(P(e));
		else if (i.isValidElement(n)) {
			let r = n;
			t[e] = (e) => r.props.children === void 0 && e?.length ? i.cloneElement(r, {}, P(e)) : i.cloneElement(r);
		} else t[e] = n;
	}), t;
};
function N(e) {
	return typeof e == "function" ? e() : e;
}
var P = (e) => {
	let t = j(e);
	return Array.isArray(t) ? t.map((e, t) => i.createElement(i.Fragment, { key: t }, N(e))) : N(t);
}, F = (e) => {
	let t = e.keyName || e.children;
	t === void 0 && console.error("T component: keyName not defined");
	let n = e.defaultValue || (e.keyName ? e.children : void 0), r = P(e.t({
		key: t,
		params: M(e.params),
		defaultValue: n,
		noWrap: e.noWrap,
		ns: e.ns,
		language: e.language
	}));
	return i.createElement(i.Fragment, null, r);
}, I = (e) => {
	let { t } = k();
	return i.createElement(F, Object.assign({ t }, e));
};
//#endregion
//#region src/components/ThemeToggle.tsx
function L() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function R(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function z() {
	let { t: e } = A("shared"), [t, n] = u("auto");
	s(() => {
		let e = L();
		n(e), R(e);
	}, []), s(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => R("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function r() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		n(e), R(e), window.localStorage.setItem("theme", e);
	}
	let i = e(t === "auto" ? "themeToggle.themeModeAutoSystemClick" : t === "light" ? "themeToggle.themeModeLightClick" : "themeToggle.themeModeDarkClick");
	return /* @__PURE__ */ d("button", {
		type: "button",
		onClick: r,
		"aria-label": i,
		title: i,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t === "auto" ? /* @__PURE__ */ d(I, {
			ns: "shared",
			keyName: "themeToggle.themeAuto",
			defaultValue: "Theme: Auto"
		}) : t === "dark" ? /* @__PURE__ */ d(I, {
			ns: "shared",
			keyName: "themeToggle.themeDark",
			defaultValue: "Theme: Dark"
		}) : /* @__PURE__ */ d(I, {
			ns: "shared",
			keyName: "themeToggle.themeLight",
			defaultValue: "Theme: Light"
		})
	});
}
//#endregion
//#region src/i18n/config.ts
var B = [
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
], V = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
};
//#endregion
//#region src/components/LocaleSwitcher.tsx
function H() {
	let e = n({ strict: !1 }).locale ?? "en", r = t(), i = (e) => {
		r({
			to: ".",
			params: (t) => ({
				...t,
				locale: e
			})
		});
	};
	return /* @__PURE__ */ d("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ d("select", {
			value: e,
			onChange: (e) => i(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: B.map((e) => /* @__PURE__ */ d("option", {
				value: e,
				children: V(e)
			}, e))
		})
	});
}
//#endregion
//#region src/hooks/usePerformanceMeasure.ts
function U(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), c(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
//#endregion
//#region src/components/Header.tsx
function W() {
	let { t } = A("shared");
	U("Header");
	let [i, a] = u(!1), o = n({ strict: !1 }).locale ?? "en", s = [
		{
			to: "/$locale/products",
			label: t("header.products", "Products")
		},
		{
			to: "/$locale/pricing",
			label: t("header.pricing", "Pricing")
		},
		{
			to: "/$locale/team",
			label: t("header.team", "Team")
		},
		{
			to: "/$locale/blog",
			label: t("header.blog", "Blog")
		},
		{
			to: "/$locale/careers",
			label: t("header.careers", "Careers")
		},
		{
			to: "/$locale/faq",
			label: t("header.faq", "FAQ")
		},
		{
			to: "/$locale/contact",
			label: t("header.contact", "Contact")
		},
		{
			to: "/$locale/settings",
			label: t("header.settings", "Settings")
		}
	];
	return /* @__PURE__ */ d("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: /* @__PURE__ */ f("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [/* @__PURE__ */ f("div", {
				className: "flex items-center gap-8",
				children: [/* @__PURE__ */ d(e, {
					to: "/$locale",
					params: { locale: o },
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), /* @__PURE__ */ f("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						/* @__PURE__ */ d(e, {
							to: "/$locale",
							params: { locale: o },
							activeOptions: { exact: !0 },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: /* @__PURE__ */ d(I, {
								ns: "shared",
								keyName: "header.home",
								defaultValue: "Home"
							})
						}),
						/* @__PURE__ */ d(e, {
							to: "/$locale/about",
							params: { locale: o },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: /* @__PURE__ */ d(I, {
								ns: "shared",
								keyName: "header.methodology",
								defaultValue: "Methodology"
							})
						}),
						/* @__PURE__ */ f("div", {
							className: "relative",
							children: [/* @__PURE__ */ f("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => a(!0),
								onMouseLeave: () => a(!1),
								onClick: () => a(!i),
								children: [/* @__PURE__ */ d(I, {
									ns: "shared",
									keyName: "header.mockPages",
									defaultValue: "Mock Pages"
								}), /* @__PURE__ */ d(r, {
									size: 14,
									className: `transition-transform ${i ? "rotate-180" : ""}`
								})]
							}), i && /* @__PURE__ */ d("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => a(!0),
								onMouseLeave: () => a(!1),
								children: /* @__PURE__ */ d("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: s.map((t) => /* @__PURE__ */ d(e, {
										to: t.to,
										params: { locale: o },
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => a(!1),
										children: t.label
									}, t.to))
								})
							})]
						})
					]
				})]
			}), /* @__PURE__ */ f("div", {
				className: "flex items-center gap-4",
				children: [
					/* @__PURE__ */ f("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [/* @__PURE__ */ d("span", {
							className: "sr-only",
							children: /* @__PURE__ */ d(I, {
								ns: "shared",
								keyName: "header.goToGithub",
								defaultValue: "Go to GitHub"
							})
						}), /* @__PURE__ */ d("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: /* @__PURE__ */ d("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					/* @__PURE__ */ d(H, {}),
					/* @__PURE__ */ d(z, {})
				]
			})]
		})
	});
}
//#endregion
export { W as default };
