"use client";
import e from "next/link";
import { useParams as t, usePathname as n, useRouter as r } from "next/navigation";
import { ChevronDown as i } from "lucide-react";
import { createContext as a, useCallback as o, useContext as s, useEffect as c, useLayoutEffect as l, useMemo as u, useRef as d, useState as f } from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var h = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), g = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), _ = (e, t, n, r) => {
	let i = [n, {
		code: t,
		...r || {}
	}];
	if (e?.services?.logger?.forward) return e.services.logger.forward(i, "warn", "react-i18next::", !0);
	w(i[0]) && (i[0] = `react-i18next:: ${i[0]}`), e?.services?.logger?.warn ? e.services.logger.warn(...i) : console?.warn && console.warn(...i);
}, v = {}, y = (e, t, n, r) => {
	w(n) && v[n] || (w(n) && (v[n] = /* @__PURE__ */ new Date()), _(e, t, n, r));
}, b = (e, t) => () => {
	if (e.isInitialized) t();
	else {
		let n = () => {
			setTimeout(() => {
				e.off("initialized", n);
			}, 0), t();
		};
		e.on("initialized", n);
	}
}, x = (e, t, n) => {
	e.loadNamespaces(t, b(e, n));
}, S = (e, t, n, r) => {
	if (w(n) && (n = [n]), e.options.preload && e.options.preload.indexOf(t) > -1) return x(e, n, r);
	n.forEach((t) => {
		e.options.ns.indexOf(t) < 0 && e.options.ns.push(t);
	}), e.loadLanguages(t, b(e, r));
}, C = (e, t, n = {}) => !t.languages || !t.languages.length ? (y(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", { languages: t.languages }), !0) : t.hasLoadedNamespace(e, {
	lng: n.lng,
	precheck: (t, r) => {
		if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e)) return !1;
	}
}), w = (e) => typeof e == "string", T = (e) => typeof e == "object" && !!e, E = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, D = {
	"&amp;": "&",
	"&#38;": "&",
	"&lt;": "<",
	"&#60;": "<",
	"&gt;": ">",
	"&#62;": ">",
	"&apos;": "'",
	"&#39;": "'",
	"&quot;": "\"",
	"&#34;": "\"",
	"&nbsp;": " ",
	"&#160;": " ",
	"&copy;": "©",
	"&#169;": "©",
	"&reg;": "®",
	"&#174;": "®",
	"&hellip;": "…",
	"&#8230;": "…",
	"&#x2F;": "/",
	"&#47;": "/"
}, O = (e) => D[e], k = {
	bindI18n: "languageChanged",
	bindI18nStore: "",
	transEmptyNodeValue: "",
	transSupportBasicHtmlNodes: !0,
	transWrapTextNodes: "",
	transKeepBasicHtmlNodesFor: [
		"br",
		"strong",
		"i",
		"p"
	],
	useSuspense: !0,
	unescape: (e) => e.replace(E, O),
	transDefaultProps: void 0
}, A = () => k, j, M = () => j, N = a(), P = class {
	constructor() {
		this.usedNamespaces = {};
	}
	addUsedNamespaces(e) {
		e.forEach((e) => {
			this.usedNamespaces[e] || (this.usedNamespaces[e] = !0);
		});
	}
	getUsedNamespaces() {
		return Object.keys(this.usedNamespaces);
	}
}, F = /* @__PURE__ */ h(((e) => {
	var t = g("react");
	function n(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var r = typeof Object.is == "function" ? Object.is : n, i = t.useState, a = t.useEffect, o = t.useLayoutEffect, s = t.useDebugValue;
	function c(e, t) {
		var n = t(), r = i({ inst: {
			value: n,
			getSnapshot: t
		} }), c = r[0].inst, u = r[1];
		return o(function() {
			c.value = n, c.getSnapshot = t, l(c) && u({ inst: c });
		}, [
			e,
			n,
			t
		]), a(function() {
			return l(c) && u({ inst: c }), e(function() {
				l(c) && u({ inst: c });
			});
		}, [e]), s(n), n;
	}
	function l(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !r(e, n);
		} catch {
			return !0;
		}
	}
	function u(e, t) {
		return t();
	}
	var d = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? u : c;
	e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? d : t.useSyncExternalStore;
})), I = /* @__PURE__ */ h(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function n(e, t) {
			d || a.startTransition === void 0 || (d = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
			var n = t();
			if (!f) {
				var i = t();
				o(n, i) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
			}
			i = s({ inst: {
				value: n,
				getSnapshot: t
			} });
			var p = i[0].inst, m = i[1];
			return l(function() {
				p.value = n, p.getSnapshot = t, r(p) && m({ inst: p });
			}, [
				e,
				n,
				t
			]), c(function() {
				return r(p) && m({ inst: p }), e(function() {
					r(p) && m({ inst: p });
				});
			}, [e]), u(n), n;
		}
		function r(e) {
			var t = e.getSnapshot;
			e = e.value;
			try {
				var n = t();
				return !o(e, n);
			} catch {
				return !0;
			}
		}
		function i(e, t) {
			return t();
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var a = g("react"), o = typeof Object.is == "function" ? Object.is : t, s = a.useState, c = a.useEffect, l = a.useLayoutEffect, u = a.useDebugValue, d = !1, f = !1, p = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? i : n;
		e.useSyncExternalStore = a.useSyncExternalStore === void 0 ? p : a.useSyncExternalStore, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), L = (/* @__PURE__ */ h(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = F() : t.exports = I();
})))(), R = {
	t: (e, t) => {
		if (w(t)) return t;
		if (T(t) && w(t.defaultValue)) return t.defaultValue;
		if (typeof e == "function") return "";
		if (Array.isArray(e)) {
			let t = e[e.length - 1];
			return typeof t == "function" ? "" : t;
		}
		return e;
	},
	ready: !1
}, z = () => () => {}, B = (e, t = {}) => {
	let { i18n: n } = t, { i18n: r, defaultNS: i } = s(N) || {}, a = n || r || M();
	a && !a.reportNamespaces && (a.reportNamespaces = new P()), a || y(a, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
	let l = u(() => ({
		...A(),
		...a?.options?.react,
		...t
	}), [a, t]), { useSuspense: p, keyPrefix: m } = l, h = e || i || a?.options?.defaultNS, g = w(h) ? [h] : h || ["translation"], _ = u(() => g, g);
	a?.reportNamespaces?.addUsedNamespaces?.(_);
	let v = d(0), b = o((e) => {
		if (!a) return z;
		let { bindI18n: t, bindI18nStore: n } = l, r = () => {
			v.current += 1, e();
		};
		return t && a.on(t, r), n && a.store.on(n, r), () => {
			t && t.split(" ").forEach((e) => a.off(e, r)), n && n.split(" ").forEach((e) => a.store.off(e, r));
		};
	}, [a, l]), T = d(), E = o(() => {
		if (!a) return R;
		let e = !!(a.isInitialized || a.initializedStoreOnce) && _.every((e) => C(e, a, l)), n = t.lng || a.language, r = v.current, i = T.current;
		if (i && i.ready === e && i.lng === n && i.keyPrefix === m && i.revision === r) return i;
		let o = {
			t: a.getFixedT(n, l.nsMode === "fallback" ? _ : _[0], m),
			ready: e,
			lng: n,
			keyPrefix: m,
			revision: r
		};
		return T.current = o, o;
	}, [
		a,
		_,
		m,
		l,
		t.lng
	]), [D, O] = f(0), { t: k, ready: j } = (0, L.useSyncExternalStore)(b, E, E);
	c(() => {
		if (a && !j && !p) {
			let e = () => O((e) => e + 1);
			t.lng ? S(a, t.lng, _, e) : x(a, _, e);
		}
	}, [
		a,
		t.lng,
		_,
		j,
		p,
		D
	]);
	let F = a || {}, I = d(null), B = d(), V = (e) => {
		let t = Object.getOwnPropertyDescriptors(e);
		t.__original && delete t.__original;
		let n = Object.create(Object.getPrototypeOf(e), t);
		if (!Object.prototype.hasOwnProperty.call(n, "__original")) try {
			Object.defineProperty(n, "__original", {
				value: e,
				writable: !1,
				enumerable: !1,
				configurable: !1
			});
		} catch {}
		return n;
	}, H = u(() => {
		let e = F, t = e?.language, n = e;
		e && (I.current && I.current.__original === e && B.current === t ? n = I.current : (n = V(e), I.current = n, B.current = t));
		let r = !j && !p ? (...e) => (y(a, "USE_T_BEFORE_READY", "useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t."), k(...e)) : k, i = [
			r,
			n,
			j
		];
		return i.t = r, i.i18n = n, i.ready = j, i;
	}, [
		k,
		F,
		j,
		F.resolvedLanguage,
		F.language,
		F.languages
	]);
	if (a && p && !j) throw new Promise((e) => {
		let n = () => e();
		t.lng ? S(a, t.lng, _, n) : x(a, _, n);
	});
	return H;
};
//#endregion
//#region components/ThemeToggle.tsx
function V() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function H(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function U() {
	let { t: e } = B(), [t, n] = f("auto");
	c(() => {
		let e = V();
		n(e), H(e);
	}, []), c(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => H("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function r() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		n(e), H(e), window.localStorage.setItem("theme", e);
	}
	let i = e(t === "auto" ? "shared.themeToggle.themeModeAutoSystemClick" : t === "light" ? "shared.themeToggle.themeModeLightClick" : "shared.themeToggle.themeModeDarkClick");
	return /* @__PURE__ */ p("button", {
		type: "button",
		onClick: r,
		"aria-label": i,
		title: i,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e(t === "auto" ? "shared.themeToggle.themeAuto" : t === "dark" ? "shared.themeToggle.themeDark" : "shared.themeToggle.themeLight")
	});
}
//#endregion
//#region i18n/config.ts
var W = [
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
];
function G(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
//#endregion
//#region components/LocaleSwitcher.tsx
function K() {
	let e = t().locale ?? "en", i = n(), a = r(), o = (t) => {
		let n = i.replace(`/${e}`, `/${t}`);
		a.push(n);
	};
	return /* @__PURE__ */ p("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ p("select", {
			value: e,
			onChange: (e) => o(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: W.map((e) => /* @__PURE__ */ p("option", {
				value: e,
				children: G(e)
			}, e))
		})
	});
}
//#endregion
//#region hooks/usePerformanceMeasure.ts
function q(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), l(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
//#endregion
//#region components/Header.tsx
function J() {
	let { t: r } = B();
	q("Header");
	let [a, o] = f(!1), s = t().locale ?? "en", c = n(), l = [
		{
			href: `/${s}/products`,
			label: r("shared.header.products")
		},
		{
			href: `/${s}/pricing`,
			label: r("shared.header.pricing")
		},
		{
			href: `/${s}/team`,
			label: r("shared.header.team")
		},
		{
			href: `/${s}/blog`,
			label: r("shared.header.blog")
		},
		{
			href: `/${s}/careers`,
			label: r("shared.header.careers")
		},
		{
			href: `/${s}/faq`,
			label: r("shared.header.faq")
		},
		{
			href: `/${s}/contact`,
			label: r("shared.header.contact")
		},
		{
			href: `/${s}/settings`,
			label: r("shared.header.settings")
		}
	];
	return /* @__PURE__ */ p("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: /* @__PURE__ */ m("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [/* @__PURE__ */ m("div", {
				className: "flex items-center gap-8",
				children: [/* @__PURE__ */ p(e, {
					href: `/${s}`,
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), /* @__PURE__ */ m("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						/* @__PURE__ */ p(e, {
							href: `/${s}`,
							className: `nav-link${((e) => c === e)(`/${s}`) ? " is-active" : ""}`,
							children: r("shared.header.home")
						}),
						/* @__PURE__ */ p(e, {
							href: `/${s}/about`,
							className: `nav-link${((e) => c.startsWith(e))(`/${s}/about`) ? " is-active" : ""}`,
							children: r("shared.header.methodology")
						}),
						/* @__PURE__ */ m("div", {
							className: "relative",
							children: [/* @__PURE__ */ m("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => o(!0),
								onMouseLeave: () => o(!1),
								onClick: () => o(!a),
								children: [r("shared.header.mockPages"), /* @__PURE__ */ p(i, {
									size: 14,
									className: `transition-transform ${a ? "rotate-180" : ""}`
								})]
							}), a && /* @__PURE__ */ p("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => o(!0),
								onMouseLeave: () => o(!1),
								children: /* @__PURE__ */ p("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: l.map((t) => /* @__PURE__ */ p(e, {
										href: t.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => o(!1),
										children: t.label
									}, t.href))
								})
							})]
						})
					]
				})]
			}), /* @__PURE__ */ m("div", {
				className: "flex items-center gap-4",
				children: [
					/* @__PURE__ */ m("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [/* @__PURE__ */ p("span", {
							className: "sr-only",
							children: r("shared.header.goToGithub")
						}), /* @__PURE__ */ p("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: /* @__PURE__ */ p("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					/* @__PURE__ */ p(K, {}),
					/* @__PURE__ */ p(U, {})
				]
			})]
		})
	});
}
//#endregion
export { J as default };
