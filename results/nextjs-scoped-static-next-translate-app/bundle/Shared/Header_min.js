import e, { createContext as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useState as o } from "react";
import s from "next/link";
import { useParams as c, usePathname as l, useRouter as u } from "next/navigation";
import { Fragment as d, jsxDEV as f } from "react/jsx-dev-runtime";
import { ChevronDown as p } from "lucide-react";
import { useRouter as m } from "next/router";
var h = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-static/next-translate-app/components/Link.tsx", g = (e) => /^https?:\/\//.test(e ?? "");
function _(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var v = ({ href: e, children: t, ...n }) => {
	let r = c().lang ?? "en";
	return e == null || typeof e != "string" ? f(s, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: h,
		lineNumber: 23,
		columnNumber: 7
	}, void 0) : g(e) ? f(s, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: h,
		lineNumber: 30,
		columnNumber: 7
	}, void 0) : f(s, {
		href: _(e, r),
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: h,
		lineNumber: 36,
		columnNumber: 5
	}, void 0);
}, y = function() {
	return y = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, y.apply(this, arguments);
};
function b(e, t) {
	return typeof t == "string" ? function(n, r, i) {
		return e(n, r, y({ ns: t }, i));
	} : e;
}
var x;
typeof e.createContext == "function" && (x = e.createContext({
	t: function(e) {
		return Array.isArray(e) ? e[0] : e;
	},
	lang: ""
}));
var S = x;
function C() {
	return typeof window > "u";
}
function w(e) {
	try {
		return new Intl.PluralRules(e);
	} catch {
		return new Intl.PluralRules();
	}
}
var T = function() {
	return T = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, T.apply(this, arguments);
};
function E(e, t) {
	if (!t) return { i18nKey: e };
	var n = e.indexOf(t);
	return n < 0 ? { i18nKey: e } : {
		namespace: e.slice(0, n),
		i18nKey: e.slice(n + t.length)
	};
}
function D(e) {
	var t = e.config, n = e.allNamespaces, r = e.pluralRules, i = e.lang, a = t.logger, o = a === void 0 ? ee : a, s = t.allowEmptyStrings, c = s === void 0 || s, l = function(e, n) {
		return Array.isArray(e) ? e.map(function(e) {
			return l(e, n);
		}) : e instanceof Object ? j({
			obj: e,
			query: n,
			config: t,
			lang: i
		}) : A({
			text: e,
			query: n,
			config: t,
			lang: i
		});
	}, u = function(e, i, a) {
		e === void 0 && (e = "");
		var s = Array.isArray(e) ? e[0] : e, d = t.nsSeparator, f = d === void 0 ? ":" : d, p = t.loggerEnvironment, m = p === void 0 ? "browser" : p, h = E(s, f), g = h.i18nKey, _ = h.namespace, v = _ === void 0 ? a?.ns ?? t.defaultNS : _, y = v && n[v] || {}, b = O(y, k(r, y, g, t, i, a), t, a), x = typeof b == "object" ? JSON.parse(JSON.stringify(b)) : b, S = x === void 0 || typeof x == "object" && !Object.keys(x).length || x === "" && !c, C = typeof a?.fallback == "string" ? [a.fallback] : a?.fallback || [];
		if (S && (m === "both" || m === (typeof window > "u" ? "node" : "browser")) && o({
			namespace: v,
			i18nKey: g
		}), S && Array.isArray(C) && C.length) {
			var w = C[0], D = C.slice(1);
			if (typeof w == "string") return u(w, i, T(T({}, a), { fallback: D }));
		}
		return S && a && a.hasOwnProperty("default") && !C?.length ? a.default ? l(a.default, i) : a.default : S ? s : l(x, i);
	};
	return u;
}
function O(e, t, n, r) {
	t === void 0 && (t = ""), r === void 0 && (r = { returnObjects: !1 });
	var i = (n || {}).keySeparator, a = i === void 0 ? "." : i, o = a ? t.split(a) : [t];
	if (t === a && r.returnObjects) return e;
	var s = o.reduce(function(e, t) {
		if (typeof e == "string") return {};
		var n = e[t];
		return n || (typeof n == "string" ? n : {});
	}, e);
	if (typeof s == "string" || s instanceof Object && r.returnObjects && Object.keys(s).length > 0 || Array.isArray(s) && r.returnObjects) return s;
}
function k(e, t, n, r, i, a) {
	if (!i || typeof i.count != "number") return n;
	var o = `${n}_${i.count}`;
	if (O(t, o, r, a) !== void 0) return o;
	var s = `${n}_${e.select(i.count)}`;
	if (O(t, s, r, a) !== void 0) return s;
	var c = `${n}.${i.count}`;
	if (O(t, c, r, a) !== void 0) return c;
	var l = `${n}.${e.select(i.count)}`;
	return O(t, l, r, a) === void 0 ? n : l;
}
function A(e) {
	var t = e.text, n = e.query, r = e.config, i = e.lang;
	if (!t || !n) return t || "";
	var a = function(e) {
		return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
	}, o = r.interpolation || {}, s = o.format, c = s === void 0 ? null : s, l = o.prefix, u = l === void 0 ? "{{" : l, d = o.suffix, f = d === void 0 ? "}}" : d, p = f === "" ? "" : `(?:[\\s,]+([\\w-]*))?\\s*${a(f)}`;
	return Object.keys(n).reduce(function(e, t) {
		var r = RegExp(`${a(u)}\\s*${t}${p}`, "gm");
		return e.replace(r, function(e, r) {
			return r && c ? c(n[t], r, i) : n[t];
		});
	}, t);
}
function j(e) {
	var t = e.obj, n = e.query, r = e.config, i = e.lang;
	return !n || Object.keys(n).length === 0 || Object.keys(t).forEach(function(e) {
		t[e] instanceof Object && j({
			obj: t[e],
			query: n,
			config: r,
			lang: i
		}), typeof t[e] == "string" && (t[e] = A({
			text: t[e],
			query: n,
			config: r,
			lang: i
		}));
	}), t;
}
function ee(e) {
	var t = e.namespace, n = e.i18nKey;
	if (process.env.NODE_ENV !== "production") {
		if (!t) {
			console.warn(`[next-translate] The text "${n}" has no namespace in front of it.`);
			return;
		}
		console.warn(`[next-translate] "${t}:${n}" is missing in current namespace configuration. Try adding "${n}" to the namespace "${t}".`);
	}
}
function M(e) {
	var t = globalThis.__NEXT_TRANSLATE__ ?? {}, n = t.lang, r = t.namespaces, i = t.config, o = i.localesToIgnore || ["default"], s = !n || o.includes(n), c = function() {
		return b(D({
			config: i,
			allNamespaces: r,
			pluralRules: w(s ? void 0 : n),
			lang: n
		}), e);
	}, l = r ? Object.keys(r).sort().join("|") : "";
	return {
		t: C() ? c() : a(c, [
			e,
			n,
			l
		]),
		lang: n
	};
}
var N = function() {
	return N = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, N.apply(this, arguments);
};
function P(e) {
	var t = n(S);
	return a(function() {
		return N(N({}, t), { t: b(t.t, e) });
	}, [t, e]);
}
function F(e) {
	return (globalThis.__NEXT_TRANSLATE__?.config ? M : P)(e);
}
var te = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-static/next-translate-app/components/ThemeToggle.tsx";
function ne() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function I(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function re() {
	let { t: e } = F("common"), [t, n] = o("auto");
	r(() => {
		let e = ne();
		n(e), I(e);
	}, []), r(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => I("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function i() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		n(e), I(e), window.localStorage.setItem("theme", e);
	}
	let a = e(t === "auto" ? "shared.themeToggle.themeModeAutoSystemClick" : t === "light" ? "shared.themeToggle.themeModeLightClick" : "shared.themeToggle.themeModeDarkClick");
	return f("button", {
		type: "button",
		onClick: i,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e(t === "auto" ? "shared.themeToggle.themeAuto" : t === "dark" ? "shared.themeToggle.themeDark" : "shared.themeToggle.themeLight")
	}, void 0, !1, {
		fileName: te,
		lineNumber: 77,
		columnNumber: 5
	}, this);
}
var ie = [
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
], ae = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, L = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-static/next-translate-app/components/LocaleSwitcher.tsx";
function R() {
	let e = c().lang ?? "en", t = l(), n = u(), r = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return f("div", {
		className: "flex items-center gap-2",
		children: f("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: ie.map((e) => f("option", {
				value: e,
				children: ae(e)
			}, e, !1, {
				fileName: L,
				lineNumber: 25,
				columnNumber: 11
			}, this))
		}, void 0, !1, {
			fileName: L,
			lineNumber: 19,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: L,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
function z(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), i(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
var B = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-static/next-translate-app/components/Header.tsx";
function V() {
	let { t: e } = F("common");
	z("Header");
	let [t, n] = o(!1), r = c(), i = l(), a = r.lang ?? "en", s = [
		{
			href: "/products",
			label: e("shared.header.products")
		},
		{
			href: "/pricing",
			label: e("shared.header.pricing")
		},
		{
			href: "/team",
			label: e("shared.header.team")
		},
		{
			href: "/blog",
			label: e("shared.header.blog")
		},
		{
			href: "/careers",
			label: e("shared.header.careers")
		},
		{
			href: "/faq",
			label: e("shared.header.faq")
		},
		{
			href: "/contact",
			label: e("shared.header.contact")
		},
		{
			href: "/settings",
			label: e("shared.header.settings")
		}
	];
	return f("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: f("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [f("div", {
				className: "flex items-center gap-8",
				children: [f(v, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}, void 0, !1, {
					fileName: B,
					lineNumber: 45,
					columnNumber: 11
				}, this), f("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						f(v, {
							href: "/",
							className: `nav-link${((e) => i === _(e, a))("/") ? " is-active" : ""}`,
							children: e("shared.header.home")
						}, void 0, !1, {
							fileName: B,
							lineNumber: 53,
							columnNumber: 13
						}, this),
						f(v, {
							href: "/about",
							className: `nav-link${((e) => {
								let t = _(e, a);
								return i.startsWith(t) && (e !== "/" || i === t);
							})("/about") ? " is-active" : ""}`,
							children: e("shared.header.methodology")
						}, void 0, !1, {
							fileName: B,
							lineNumber: 59,
							columnNumber: 13
						}, this),
						f("div", {
							className: "relative",
							children: [f("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: [e("shared.header.mockPages"), f(p, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								}, void 0, !1, {
									fileName: B,
									lineNumber: 76,
									columnNumber: 17
								}, this)]
							}, void 0, !0, {
								fileName: B,
								lineNumber: 68,
								columnNumber: 15
							}, this), t && f("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								children: f("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: s.map((e) => f(v, {
										href: e.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => n(!1),
										children: e.label
									}, e.href, !1, {
										fileName: B,
										lineNumber: 90,
										columnNumber: 23
									}, this))
								}, void 0, !1, {
									fileName: B,
									lineNumber: 88,
									columnNumber: 19
								}, this)
							}, void 0, !1, {
								fileName: B,
								lineNumber: 83,
								columnNumber: 17
							}, this)]
						}, void 0, !0, {
							fileName: B,
							lineNumber: 67,
							columnNumber: 13
						}, this)
					]
				}, void 0, !0, {
					fileName: B,
					lineNumber: 52,
					columnNumber: 11
				}, this)]
			}, void 0, !0, {
				fileName: B,
				lineNumber: 44,
				columnNumber: 9
			}, this), f("div", {
				className: "flex items-center gap-4",
				children: [
					f("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [f("span", {
							className: "sr-only",
							children: e("shared.header.goToGithub")
						}, void 0, !1, {
							fileName: B,
							lineNumber: 113,
							columnNumber: 13
						}, this), f("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: f("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							}, void 0, !1, {
								fileName: B,
								lineNumber: 115,
								columnNumber: 15
							}, this)
						}, void 0, !1, {
							fileName: B,
							lineNumber: 114,
							columnNumber: 13
						}, this)]
					}, void 0, !0, {
						fileName: B,
						lineNumber: 107,
						columnNumber: 11
					}, this),
					f(R, {}, void 0, !1, {
						fileName: B,
						lineNumber: 121,
						columnNumber: 11
					}, this),
					f(re, {}, void 0, !1, {
						fileName: B,
						lineNumber: 122,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: B,
				lineNumber: 106,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: B,
			lineNumber: 43,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: B,
		lineNumber: 42,
		columnNumber: 5
	}, this);
}
var H = function() {
	return H = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, H.apply(this, arguments);
}, U = t({
	ns: {},
	config: {}
});
function W(t) {
	var r = t.lang, i = t.namespaces, o = i === void 0 ? {} : i, s = t.children, c = t.config, l = c === void 0 ? {} : c, u = F().lang, d = m() || {}, f = d.locale, p = d.defaultLocale, h = n(U), g = H(H(H({}, G()), h.ns), o), _ = r || u || f || p || "", v = H(H({}, h.config), l), y = v.localesToIgnore || ["default"], b = !_ || y.includes(_), x = a(function() {
		return w(b ? void 0 : _);
	}, [b, _]), C = a(function() {
		return D({
			config: v,
			allNamespaces: g,
			pluralRules: x,
			lang: _
		});
	}, [
		v,
		g,
		x,
		_
	]);
	return e.createElement(S.Provider, { value: {
		lang: _,
		t: C
	} }, e.createElement(U.Provider, { value: {
		ns: g,
		config: v
	} }, s));
}
function G() {
	return typeof window > "u" ? {} : window.__NEXT_DATA__?.props?.__namespaces || {};
}
var K = {
	"aboutHeader.methodology": "Methodology",
	"aboutHeader.weDesignedThisBenchmarkTo": "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach.",
	"whatWeMeasure.bundleSizeImpact": "Bundle size impact",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.",
	"whatWeMeasure.renderingOverhead": "Rendering overhead",
	"whatWeMeasure.howMuchExtraTimeThe": "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.",
	"whatWeMeasure.hydrationCost": "Hydration cost",
	"whatWeMeasure.duringSsrTranslationDataIs": "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Lazy loading effectiveness",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	"whatWeMeasure.localeSwitchSpeed": "Locale switch speed",
	"whatWeMeasure.howFastTheAppCan": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	"whatWeMeasure.whatWeMeasure": "What We Measure",
	"aboutGrid.testEnvironment": "Test Environment",
	"aboutGrid.allBenchmarksRunOn": "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.",
	"aboutGrid.applicationDesign": "Application Design",
	"aboutGrid.theBenchmarkAppHas10": "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.",
	"aboutGrid.measurementMethodology": "Measurement Methodology",
	"aboutGrid.weUseBrowserNativeApis": "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.",
	"aboutGrid.fairComparison": "Fair Comparison",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment."
}, q = {
	"blogList.i18nBenchmark2026Results": "i18n Benchmark 2026 Results",
	"blogList.march152026": "March 15, 2026",
	"blogList.weTested12DifferentInternationalization": "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts.",
	"blogList.howToReduceYourI18n": "How to Reduce Your i18n Bundle by 60%",
	"blogList.march82026": "March 8, 2026",
	"blogList.practicalStrategiesForOptimizingTranslation": "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.",
	"blogList.theStateOfInternationalizationIn": "The State of Internationalization in 2026",
	"blogList.february282026": "February 28, 2026",
	"blogList.anOverviewOfTheCurrent": "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.",
	"blogList.migratingFromReactI18nextTo": "Migrating from react-i18next to Lingui",
	"blogList.february152026": "February 15, 2026",
	"blogList.aStepByStepGuide": "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components and i18n: What Changes?",
	"blogList.february12026": "February 1, 2026",
	"blogList.reactServerComponentsIntroduceNew": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	"blogList.benchmarkMethodologyHowWeTest": "Benchmark Methodology: How We Test",
	"blogList.january202026": "January 20, 2026",
	"blogList.aTransparentLookAtOur": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	"blogList.readMore": "Read More →",
	"blogHeader.blog": "Blog",
	"blogHeader.insightsDeepDivesAnd": "Insights, deep dives, and updates from the i18n benchmarking community."
}, J = {
	"careersHeader.careers": "Careers",
	"careersHero.fromAnywhere": "from anywhere in the world",
	"careersBenefits.competitivePay": "Competitive pay",
	"careersBenefits.topOfMarket": "Top-of-market compensation",
	"careersBenefits.openSourceTime": "Open source time",
	"careersBenefits.twentyPercentTime": "20% time for OSS",
	"careersPositions.seniorFrontendEngineer": "Senior Frontend Engineer",
	"careersPositions.seniorFrontendEngineerDesc": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
	"openPositions.openPositions": "Open Positions",
	"openPositions.remote": "Remote",
	"openPositions.fullTime": "Full-time",
	"openPositions.applyNow": "Apply Now"
}, oe = {
	"contactForm.name": "Name",
	"contactForm.email": "Email",
	"contactForm.subject": "Subject",
	"contactForm.message": "Message",
	"contactForm.sendMessage": "Send Message",
	"contactForm.wellGetBackTo": "We'll get back to you within 48 hours.",
	"contactHeader.contactUs": "Contact Us",
	"contactHeader.haveQuestionsOrWantTo": "Have questions or want to contribute? We'd love to hear from you."
}, se = {
	"faqList.howAreTheBenchmarks": "How are the benchmarks run?",
	"faqList.allBenchmarksAreRun": "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.",
	"faqList.whatLibrariesAreCurrently": "What libraries are currently tested?",
	"faqList.weCurrentlyBenchmarkReactI18next": "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.",
	"faqList.canIContributeA": "Can I contribute a new library integration?",
	"faqList.absolutelyWeWelcomeCommunity": "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.",
	"faqList.howOftenAreResults": "How often are results updated?",
	"faqList.benchmarksRunAutomaticallyVia": "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.",
	"faqList.areTheResultsStatistically": "Are the results statistically significant?",
	"faqList.yesWeUseThe": "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes.",
	"faq-header1.frequentlyAskedQuestions": "Frequently Asked Questions",
	"faq-header1.everythingYouNeedToKnow": "Everything you need to know about i18n Benchmark."
}, ce = {
	"understandingImpact.understandingTheImpact": "Understanding the Impact",
	"understandingImpact.whyASingleLargeJson": "Why a single large JSON can hurt performance",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	"understandingImpact.theJsonMustBeParsed": "The JSON must be parsed on every page load — blocking the main thread.",
	"understandingImpact.contextBasedArchitecturesCanCause": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	"understandingImpact.duringServerSideRenderingThe": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
	"understandingImpact.theTradeOffsOfDynamic": "The trade-offs of dynamic loading",
	"understandingImpact.splittingTranslationsIntoPerRoute": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
	"understandingImpact.waterfallRequests": "Waterfall requests:",
	"understandingImpact.flashOfUntranslatedContentFouc": "Flash of untranslated content (FOUC):",
	"understandingImpact.cacheInvalidation": "Cache invalidation:",
	"understandingImpact.whatThisBenchmarkMeasures": "What this benchmark measures",
	"understandingImpact.thisTestAppProvidesA": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
	"whyItMatters.whyTheseMetricsMatter": "Why These Metrics Matter",
	"whyItMatters.bundleSize": "Bundle Size",
	"whyItMatters.theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	"whyItMatters.renderingHydration": "Rendering & Hydration",
	"whyItMatters.connectingALargeJson": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	"whyItMatters.dynamicLoading": "Dynamic Loading",
	"whyItMatters.loadingAllTranslationsUpfront": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
	"resultsTable.sampleResults": "Sample Results",
	"resultsTable.bundleSize": "Bundle Size",
	"resultsTable.lookupTime": "Lookup Time",
	"resultsTable.lazyLoading": "Lazy Loading",
	"hero.aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	"hero.viewResults": "View Results"
}, le = {
	"pricingTiers.starterTier": "Starter",
	"pricingTiers.starterPrice": "$0",
	"pricingTiers.forever": "forever",
	"pricingTiers.runsPerDay": "5 benchmark runs/day",
	"pricingTiers.libraries3": "3 libraries",
	"pricingTiers.communitySupport": "Community support",
	"pricingTiers.publicResults": "Public results",
	"pricingTiers.getStarted": "Get Started",
	"pricingTiers.proTier": "Pro",
	"pricingTiers.proPrice": "$29",
	"pricingTiers.perMonth": "/month",
	"pricingTiers.unlimitedRuns": "Unlimited runs",
	"pricingTiers.allLibraries": "All libraries",
	"pricingTiers.prioritySupport": "Priority support",
	"pricingTiers.privateResults": "Private results",
	"pricingTiers.ciIntegration": "CI integration",
	"pricingTiers.historicalData": "Historical data",
	"pricingTiers.enterpriseTier": "Enterprise",
	"pricingTiers.custom": "Custom",
	"pricingTiers.everythingInPro": "Everything in Pro",
	"pricingTiers.onPremiseOption": "On-premise option",
	"pricingTiers.ssoSaml": "SSO & SAML",
	"pricingTiers.dedicatedAccountManager": "Dedicated account manager",
	"pricingTiers.customSLAs": "Custom SLAs",
	"pricingTiers.auditLogs": "Audit logs",
	"pricingTiers.trainingSessions": "Training sessions",
	"pricingTiers.contactSales": "Contact Sales",
	"pricingHeader.pricing": "Pricing",
	"pricingHeader.transparentPricingForEvery": "Transparent pricing for every stage of your i18n journey."
}, ue = {
	"products.benchmarkCLI": "Benchmark CLI",
	"products.benchmarkCLIDesc": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
	"products.benchmarkCLIPrice": "Free",
	"products.benchmarkCloud": "Benchmark Cloud",
	"products.benchmarkCloudDesc": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
	"products.benchmarkCloudPrice": "$29/mo",
	"products.benchmarkEnterprise": "Benchmark Enterprise",
	"products.benchmarkEnterpriseDesc": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
	"products.benchmarkEnterprisePrice": "Contact Us",
	"products.migrationAssistant": "Migration Assistant",
	"products.migrationAssistantDesc": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
	"products.migrationAssistantPrice": "$99 one-time",
	"products.translationQA": "Translation QA",
	"products.translationQADesc": "Automated quality checks for missing translations, pluralization issues, and context errors.",
	"products.translationQAPrice": "$19/mo",
	"products.bundleOptimizer": "Bundle Optimizer",
	"products.bundleOptimizerDesc": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
	"products.bundleOptimizerPrice": "$49/mo",
	"products.learnMore": "Learn More",
	"productsHeader.ourProducts": "Our Products",
	"productsHeader.exploreOurSuiteOfTools": "Explore our suite of tools designed to help you build better i18n apps."
}, de = {
	"route.oopsPageNotFound": "Oops! Page not found",
	"route.returnToHome": "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:"
}, fe = {
	"preferencesSection.preferences": "Preferences",
	"preferencesSection.emailNotifications": "Email Notifications",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Receive weekly benchmark reports",
	"preferencesSection.darkMode": "Dark Mode",
	"preferencesSection.useDarkColorScheme": "Use dark color scheme",
	"preferencesSection.defaultLanguage": "Default Language",
	"settingsHeader.settings": "Settings",
	"settingsHeader.manageYourAccountPreferences": "Manage your account preferences and configuration.",
	"settingsFooter.cancel": "Cancel",
	"settingsFooter.saveChanges": "Save Changes",
	"apiAccessSection.apiAccess": "API Access",
	"apiAccessSection.apiKey": "API Key",
	"apiAccessSection.useThisKeyTo": "Use this key to access the benchmarking API programmatically.",
	"apiAccessSection.copy": "Copy",
	"profileSection.profile": "Profile",
	"profileSection.displayName": "Display Name",
	"profileSection.email": "Email"
}, pe = {
	"header.home": "Home",
	"header.methodology": "Methodology",
	"header.mockPages": "Mock Pages",
	"header.products": "Products",
	"header.pricing": "Pricing",
	"header.team": "Team",
	"header.blog": "Blog",
	"header.careers": "Careers",
	"header.faq": "FAQ",
	"header.contact": "Contact",
	"header.settings": "Settings",
	"header.goToGithub": "Go to GitHub",
	"footer.resources": "Resources",
	"footer.contact": "Contact",
	"footer.github": "GitHub",
	"footer.methodology": "Methodology",
	"footer.contributing": "Contributing",
	"footer.builtWith": "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	"footer.anOpenSourceTestApplication": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	"mockBanner.text": "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
	"themeToggle.themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
	"themeToggle.themeModeLightClick": "Theme mode: light. Click to switch to dark mode.",
	"themeToggle.themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
	"themeToggle.themeAuto": "Theme: Auto",
	"themeToggle.themeDark": "Theme: Dark",
	"themeToggle.themeLight": "Theme: Light"
}, me = {
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "Founder & Lead Engineer",
	"teamGrid.formerGoogleEngineerWith10": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "Performance Engineer",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "Developer Advocate",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "Full-Stack Developer",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "Data Analyst",
	"teamGrid.ensuresStatisticalRigorInAll": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "Community Manager",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Manages community contributions, partnerships, and events. Background in open source governance.",
	"teamHeader.ourTeam": "Our Team",
	"teamHeader.meetThePeopleBehindI18n": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
}, he = {
	"aboutHeader.methodology": "Méthodologie",
	"aboutHeader.weDesignedThisBenchmarkTo": "Nous avons conçu ce benchmark pour fournir des comparaisons équitables, reproductibles et significatives des bibliothèques i18n.",
	"whatWeMeasure.bundleSizeImpact": "Impact sur la taille du bundle",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "Les octets JavaScript supplémentaires envoyés au client spécifiquement en raison du runtime de la bibliothèque i18n, plus les fichiers de traduction pour la langue actuelle.",
	"whatWeMeasure.renderingOverhead": "Surcharge de rendu",
	"whatWeMeasure.howMuchExtraTimeThe": "Combien de temps supplémentaire la couche i18n ajoute au rendu de chaque composant — mesuré à l'aide de actualDuration du React Profiler.",
	"whatWeMeasure.hydrationCost": "Coût d'hydratation",
	"whatWeMeasure.duringSsrTranslationDataIs": "Pendant le SSR, les données de traduction sont sérialisées dans le HTML. Les dictionnaire volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment où la page devient interactive.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Efficacité du chargement différé",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Si le fractionnement des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).",
	"whatWeMeasure.localeSwitchSpeed": "Vitesse de changement de langue",
	"whatWeMeasure.howFastTheAppCan": "À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération des nouvelles traductions, le rendu des composants et la mise à jour du DOM.",
	"whatWeMeasure.whatWeMeasure": "Ce que nous mesurons",
	"aboutGrid.testEnvironment": "Environnement de test",
	"aboutGrid.allBenchmarksRunOn": "Tous les benchmarks sont exécutés sur le même matériel (M2 MacBook Pro, 16 Go de RAM), le même navigateur (Chromium 120 via Playwright) et les mêmes conditions réseau (4G simulée). Chaque test est répété 50 fois et nous rapportons la médiane avec les percentiles P95/P99.",
	"aboutGrid.applicationDesign": "Conception de l'application",
	"aboutGrid.theBenchmarkAppHas10": "L'application de benchmark dispose de 10 pages avec un contenu réaliste — navigation, formulaires, listes dynamiques et texte statique. Chaque page utilise 15 à 30 clés de traduction pour représenter les modèles d'utilisation du monde réel.",
	"aboutGrid.measurementMethodology": "Méthodologie de mesure",
	"aboutGrid.weUseBrowserNativeApis": "Nous utilisons les API natives du navigateur (Performance Timeline, Resource Timing, Layout Instability) combinées aux données de React Profiler. La taille des bundles est mesurée après gzip à l'aide de source-map-explorer pour plus de précision.",
	"aboutGrid.fairComparison": "Comparaison équitable",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Chaque bibliothèque i18n est intégrée en suivant sa documentation officielle et ses meilleures pratiques. Nous consultons les mainteneurs lorsque cela est possible. Même application React, même configuration Vite, même déploiement."
}, ge = {
	"blogList.i18nBenchmark2026Results": "Résultats de l'i18n Benchmark 2026",
	"blogList.march152026": "15 mars 2026",
	"blogList.weTested12DifferentInternationalization": "Nous avons testé 12 bibliothèques d'internationalisation différentes sur 10 pages. Voici les résultats détaillés avec des graphiques interactifs.",
	"blogList.howToReduceYourI18n": "Comment réduire votre bundle i18n de 60 %",
	"blogList.march82026": "8 mars 2026",
	"blogList.practicalStrategiesForOptimizingTranslation": "Stratégies pratiques pour l'optimisation du chargement des fichiers de traduction, l'élimination des locales inutilisées et l'exploitation de la compilation au moment de la construction.",
	"blogList.theStateOfInternationalizationIn": "L'état de l'internationalisation en 2026",
	"blogList.february282026": "28 février 2026",
	"blogList.anOverviewOfTheCurrent": "Un aperçu de l'écosystème i18n actuel, comparant les approches des catalogues de messages aux solutions basées sur des compilateurs.",
	"blogList.migratingFromReactI18nextTo": "Migration de react-i18next vers Lingui",
	"blogList.february152026": "15 février 2026",
	"blogList.aStepByStepGuide": "Un guide étape par étape pour la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components et i18n : Qu'est-ce qui change ?",
	"blogList.february12026": "1er février 2026",
	"blogList.reactServerComponentsIntroduceNew": "Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.",
	"blogList.benchmarkMethodologyHowWeTest": "Méthodologie du benchmark : comment nous testons",
	"blogList.january202026": "20 janvier 2026",
	"blogList.aTransparentLookAtOur": "Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.",
	"blogList.readMore": "Lire la suite →",
	"blogHeader.blog": "Blog",
	"blogHeader.insightsDeepDivesAnd": "Aperçus, analyses approfondies et mises à jour de la communauté de benchmarking i18n."
}, _e = {
	"careersHeader.careers": "Carrières",
	"careersHero.fromAnywhere": "de n'importe où dans le monde",
	"careersBenefits.competitivePay": "Salaire compétitif",
	"careersBenefits.topOfMarket": "Rémunération au sommet du marché",
	"careersBenefits.openSourceTime": "Temps open source",
	"careersBenefits.twentyPercentTime": "20 % du temps pour l'OSS",
	"careersPositions.seniorFrontendEngineer": "Ingénieur Frontend Senior",
	"careersPositions.seniorFrontendEngineerDesc": "Construisez et maintenez notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.",
	"openPositions.openPositions": "Postes vacants",
	"openPositions.remote": "À distance",
	"openPositions.fullTime": "Temps plein",
	"openPositions.applyNow": "Postuler maintenant"
}, ve = {
	"contactForm.name": "Nom",
	"contactForm.email": "Email",
	"contactForm.subject": "Sujet",
	"contactForm.message": "Message",
	"contactForm.sendMessage": "Envoyer le message",
	"contactForm.wellGetBackTo": "Nous vous répondrons dans les 48 heures.",
	"contactHeader.contactUs": "Contactez-nous",
	"contactHeader.haveQuestionsOrWantTo": "Vous avez des questions ou vous voulez contribuer ? Nous serions ravis de vous entendre."
}, ye = {
	"faqList.howAreTheBenchmarks": "Comment les benchmarks sont-ils exécutés ?",
	"faqList.allBenchmarksAreRun": "Tous les benchmarks sont exécutés à l'aide de Playwright sur une configuration matérielle cohérente (M2 MacBook Pro) avec des conditions de réseau 4G simulées. Chaque test effectue 50 itérations et nous rapportons les valeurs médiane, P95 et P99.",
	"faqList.whatLibrariesAreCurrently": "Quelles bibliotecas sont actuellement testées ?",
	"faqList.weCurrentlyBenchmarkReactI18next": "Nous testons actuellement react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl et Paraglide. Nous prévoyons d'en ajouter d'autres sur demande de la communauté.",
	"faqList.canIContributeA": "Puis-je contribuer avec une nouvelle intégration de bibliothèque ?",
	"faqList.absolutelyWeWelcomeCommunity": "Absolument ! Nous accueillons avec plaisir les contributions de la communauté. Forkez le dépôt, ajoutez l'intégration de votre bibliothèque en suivant notre modèle et soumettez une pull request.",
	"faqList.howOftenAreResults": "À quelle fréquence les résultats sont-ils mis à jour ?",
	"faqList.benchmarksRunAutomaticallyVia": "Les benchmarks s'exécutent automatiquement via CI à chaque mise à jour de dépendance et de manière hebdomadaire sur la branche principale. Les résultats sont publiés dans les 24 heures.",
	"faqList.areTheResultsStatistically": "Les résultats sont-ils statistiquement significatifs ?",
	"faqList.yesWeUseThe": "Oui. Nous utilisons le test U de Mann-Whitney avec un niveau de signification de 0,05 pour comparer les distributions. Nous rapportons également les intervalles de confiance et les tailles d'effet.",
	"faq-header1.frequentlyAskedQuestions": "Foire aux questions",
	"faq-header1.everythingYouNeedToKnow": "Tout ce que vous devez savoir sur le projet i18n Benchmark."
}, be = {
	"understandingImpact.understandingTheImpact": "Comprendre l'impact",
	"understandingImpact.whyASingleLargeJson": "Pourquoi un seul JSON volumineux peut nuire aux performances",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :",
	"understandingImpact.theJsonMustBeParsed": "Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.",
	"understandingImpact.contextBasedArchitecturesCanCause": "Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.",
	"understandingImpact.duringServerSideRenderingThe": "Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.",
	"understandingImpact.theTradeOffsOfDynamic": "Les compromis du chargement dynamique",
	"understandingImpact.splittingTranslationsIntoPerRoute": "La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :",
	"understandingImpact.waterfallRequests": "Requêtes en cascade :",
	"understandingImpact.flashOfUntranslatedContentFouc": "Flash de contenu non traduit (FOUC) :",
	"understandingImpact.cacheInvalidation": "Invalidation du cache :",
	"understandingImpact.whatThisBenchmarkMeasures": "Ce que ce benchmark mesure",
	"understandingImpact.thisTestAppProvidesA": "Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.",
	"whyItMatters.whyTheseMetricsMatter": "Pourquoi ces mesures sont importantes",
	"whyItMatters.bundleSize": "Taille du bundle",
	"whyItMatters.theBundleIsTheData": "Le bundle représente les données envoyées à chaque utilisateur dans le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur des connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.",
	"whyItMatters.renderingHydration": "Rendu & Hydratation",
	"whyItMatters.connectingALargeJson": "La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arbre. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).",
	"whyItMatters.dynamicLoading": "Chargement dynamique",
	"whyItMatters.loadingAllTranslationsUpfront": "Le chargement de toutes les traductions à l'avance surcharge le payload initial. Le chargement dynamique (lazy) divise les traductions par route ou par namespace, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel.",
	"resultsTable.sampleResults": "Exemples de résultats",
	"resultsTable.bundleSize": "Taille du bundle",
	"resultsTable.lookupTime": "Temps de recherche",
	"resultsTable.lazyLoading": "Chargement différé",
	"hero.aTestApplicationDesignedTo": "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
	"hero.viewResults": "Voir les résultats"
}, xe = {
	"pricingTiers.starterTier": "Starter",
	"pricingTiers.starterPrice": "0 $",
	"pricingTiers.forever": "à vie",
	"pricingTiers.runsPerDay": "5 analyses de benchmark/jour",
	"pricingTiers.libraries3": "3 bibliothèques",
	"pricingTiers.communitySupport": "Support communautaire",
	"pricingTiers.publicResults": "Résultats publics",
	"pricingTiers.getStarted": "Démarrer",
	"pricingTiers.proTier": "Pro",
	"pricingTiers.proPrice": "29 $",
	"pricingTiers.perMonth": "/mois",
	"pricingTiers.unlimitedRuns": "Analyses illimitées",
	"pricingTiers.allLibraries": "Toutes les bibliothèques",
	"pricingTiers.prioritySupport": "Support prioritaire",
	"pricingTiers.privateResults": "Résultats privés",
	"pricingTiers.ciIntegration": "Intégration CI",
	"pricingTiers.historicalData": "Données historiques",
	"pricingTiers.enterpriseTier": "Entreprise",
	"pricingTiers.custom": "Sur mesure",
	"pricingTiers.everythingInPro": "Tout ce qui est dans Pro",
	"pricingTiers.onPremiseOption": "Option sur site",
	"pricingTiers.ssoSaml": "SSO & SAML",
	"pricingTiers.dedicatedAccountManager": "Gestionnaire de compte dédié",
	"pricingTiers.customSLAs": "SLAs personnalisés",
	"pricingTiers.auditLogs": "Journaux d'audit",
	"pricingTiers.trainingSessions": "Sessions de formation",
	"pricingTiers.contactSales": "Contacter les ventes",
	"pricingHeader.pricing": "Tarifs",
	"pricingHeader.transparentPricingForEvery": "Une tarification transparente pour chaque étape de votre voyage i18n."
}, Se = {
	"products.benchmarkCLI": "Benchmark CLI",
	"products.benchmarkCLIDesc": "Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.",
	"products.benchmarkCLIPrice": "Gratuit",
	"products.benchmarkCloud": "Benchmark Cloud",
	"products.benchmarkCloudDesc": "Benchmarking automatisé dans le cloud avec suivi historique, alertes et tableaux de bord d'équipe.",
	"products.benchmarkCloudPrice": "29 $/mois",
	"products.benchmarkEnterprise": "Benchmark Enterprise",
	"products.benchmarkEnterpriseDesc": "Déploiement sur site avec SSO, journaux d'audit, SLAs personnalisés et support dédié.",
	"products.benchmarkEnterprisePrice": "Nous contacter",
	"products.migrationAssistant": "Assistant de migration",
	"products.migrationAssistantDesc": "Outil propulsé par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.",
	"products.migrationAssistantPrice": "99 $ une fois",
	"products.translationQA": "Translation QA",
	"products.translationQADesc": "Vérifications automatiques de la qualité pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.",
	"products.translationQAPrice": "19 $/mois",
	"products.bundleOptimizer": "Optimiseur de bundle",
	"products.bundleOptimizerDesc": "Analyse et optimise votre bundle i18n pour la production avec le tree-shaking et le code splitting.",
	"products.bundleOptimizerPrice": "49 $/mois",
	"products.learnMore": "En savoir plus",
	"productsHeader.ourProducts": "Nos Produits",
	"productsHeader.exploreOurSuiteOfTools": "Explorez notre suite d'outils conçus pour vous aider à créer de meilleures applications i18n."
}, Ce = {
	"route.oopsPageNotFound": "Oups ! Page non trouvée",
	"route.returnToHome": "Retour à l'accueil",
	"route.couldNotMeasureHydrationDuration": "Impossible de mesurer la durée d'hydratation :"
}, we = {
	"preferencesSection.preferences": "Préférences",
	"preferencesSection.emailNotifications": "Notifications par email",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Recevoir des rapports hebdomadaires de benchmark",
	"preferencesSection.darkMode": "Mode sombre",
	"preferencesSection.useDarkColorScheme": "Utiliser le schéma de couleurs sombres",
	"preferencesSection.defaultLanguage": "Langue par défaut",
	"settingsHeader.settings": "Paramètres",
	"settingsHeader.manageYourAccountPreferences": "Gérez vos préférences de compte et votre configuration.",
	"settingsFooter.cancel": "Annuler",
	"settingsFooter.saveChanges": "Enregistrer les modifications",
	"apiAccessSection.apiAccess": "Accès API",
	"apiAccessSection.apiKey": "Clé API",
	"apiAccessSection.useThisKeyTo": "Utilisez cette clé pour accéder à l'API de benchmarking par programmation.",
	"apiAccessSection.copy": "Copier",
	"profileSection.profile": "Profil",
	"profileSection.displayName": "Nom d'affichage",
	"profileSection.email": "Email"
}, Te = {
	"header.home": "Accueil",
	"header.methodology": "Méthodologie",
	"header.mockPages": "Pages de test",
	"header.products": "Produits",
	"header.pricing": "Tarifs",
	"header.team": "Équipe",
	"header.blog": "Blog",
	"header.careers": "Carrières",
	"header.faq": "FAQ",
	"header.contact": "Contact",
	"header.settings": "Paramètres",
	"header.goToGithub": "Aller sur GitHub",
	"footer.resources": "Ressources",
	"footer.contact": "Contact",
	"footer.github": "GitHub",
	"footer.methodology": "Méthodologie",
	"footer.contributing": "Contribuer",
	"footer.builtWith": "i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.",
	"footer.anOpenSourceTestApplication": "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
	"mockBanner.text": "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.",
	"themeToggle.themeModeAutoSystemClick": "Mode thématique : auto (système). Cliquez pour passer en mode clair.",
	"themeToggle.themeModeLightClick": "Mode thématique : clair. Cliquez pour passer en mode sombre.",
	"themeToggle.themeModeDarkClick": "Mode thématique : sombre. Cliquez pour passer en mode auto (système).",
	"themeToggle.themeAuto": "Thème : Auto",
	"themeToggle.themeDark": "Thème : Sombre",
	"themeToggle.themeLight": "Thème : Clair"
}, Ee = {
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "Fondatrice & Ingénieure en chef",
	"teamGrid.formerGoogleEngineerWith10": "Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "Ingénieur Performance",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "Developer Advocate",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "Développeur Full-Stack",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Entretient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "Analyste de données",
	"teamGrid.ensuresStatisticalRigorInAll": "Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "Responsable de communauté",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.",
	"teamHeader.ourTeam": "Notre équipe",
	"teamHeader.meetThePeopleBehindI18n": "Rencontrez les personnes derrière i18n Benchmark. Une équipe diversifiée unie par une passion commune pour les excellents outils de développement."
}, De = {
	"aboutHeader.methodology": "Metodología",
	"aboutHeader.weDesignedThisBenchmarkTo": "Diseñamos este benchmark para proporcionar comparaciones justas, reproducibles y significativas de las bibliotecas i18n.",
	"whatWeMeasure.bundleSizeImpact": "Impacto en el tamaño del paquete",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "Los bytes adicionales de JavaScript enviados al cliente específicamente debido al tiempo de ejecución de la biblioteca i18n, además de los archivos de traducción para el local actual.",
	"whatWeMeasure.renderingOverhead": "Sobrecarga de renderizado",
	"whatWeMeasure.howMuchExtraTimeThe": "Cuánto tiempo extra añade la capa i18n a cada renderizado de componente — medido con actualDuration del React Profiler.",
	"whatWeMeasure.hydrationCost": "Costo de hidratación",
	"whatWeMeasure.duringSsrTranslationDataIs": "Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan la carga útil de HTML y ralentizan la hidratación — el momento en que la página se vuelve interactiva.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Eficacia de la carga diferida",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Si dividir las traducciones por ruta o por espacio de nombres realmente reduce la carga inicial, y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).",
	"whatWeMeasure.localeSwitchSpeed": "Velocidad de cambio de idioma",
	"whatWeMeasure.howFastTheAppCan": "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución — incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.",
	"whatWeMeasure.whatWeMeasure": "Lo que medimos",
	"aboutGrid.testEnvironment": "Entorno de prueba",
	"aboutGrid.allBenchmarksRunOn": "Todos los benchmarks se ejecutan en el mismo hardware (M2 MacBook Pro, 16 GB de RAM), el mismo navegador (Chromium 120 a través de Playwright) y las mismas condiciones de red (4G simulado). Cada prueba se repite 50 veces y reportamos la mediana con los percentiles P95/P99.",
	"aboutGrid.applicationDesign": "Diseño de la aplicación",
	"aboutGrid.theBenchmarkAppHas10": "La aplicación del benchmark tiene 10 páginas con contenido realista — navegación, formularios, listas dinámicas y texto estático. Cada página utiliza entre 15 y 30 claves de traducción para representar patrones de uso del mundo real.",
	"aboutGrid.measurementMethodology": "Metodología de medición",
	"aboutGrid.weUseBrowserNativeApis": "Utilizamos las API nativas del navegador (Performance Timeline, Resource Timing, Layout Instability) combinadas con los datos del React Profiler. Los tamaños de los paquetes se miden después de gzip utilizando source-map-explorer para mayor precisión.",
	"aboutGrid.fairComparison": "Comparación justa",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Cada biblioteca i18n se integra siguiendo su documentación oficial y sus mejores prácticas. Consultamos a los mantenedores cuando es posible para garantizar una configuración óptima. La misma aplicación React, la misma configuración Vite, el mismo despliegue."
}, Oe = {
	"blogList.i18nBenchmark2026Results": "Resultados de i18n Benchmark 2026",
	"blogList.march152026": "15 de marzo de 2026",
	"blogList.weTested12DifferentInternationalization": "Probamos 12 bibliotecas de internacionalización diferentes en 10 páginas. Aquí están los resultados detallados con gráficos interactivos.",
	"blogList.howToReduceYourI18n": "Cómo reducir su paquete i18n en un 60%",
	"blogList.march82026": "8 de marzo de 2026",
	"blogList.practicalStrategiesForOptimizingTranslation": "Estrategias prácticas para optimizar la carga de archivos de traducción, tree-shaking de locales no utilizados y aprovechamiento de la compilación en tiempo de construcción.",
	"blogList.theStateOfInternationalizationIn": "El estado de la internacionalización en 2026",
	"blogList.february282026": "28 de febrero de 2026",
	"blogList.anOverviewOfTheCurrent": "Una visión general del ecosistema i18n actual, comparando enfoques desde catálogos de mensajes hasta soluciones basadas en compiladores.",
	"blogList.migratingFromReactI18nextTo": "Migración de react-i18next a Lingui",
	"blogList.february152026": "15 de febrero de 2026",
	"blogList.aStepByStepGuide": "Una guía paso a paso para migrar una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components e i18n: ¿Qué cambia?",
	"blogList.february12026": "1 de febrero de 2026",
	"blogList.reactServerComponentsIntroduceNew": "React Server Components introduce nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.",
	"blogList.benchmarkMethodologyHowWeTest": "Metodología de benchmark: cómo probamos",
	"blogList.january202026": "20 de enero de 2026",
	"blogList.aTransparentLookAtOur": "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.",
	"blogList.readMore": "Leer más →",
	"blogHeader.blog": "Blog",
	"blogHeader.insightsDeepDivesAnd": "Información, análisis profundos y actualizaciones de la comunidad de benchmarking i18n."
}, ke = {
	"openPositions.openPositions": "Puestos abiertos",
	"openPositions.seniorPerformanceEngineer": "Ingeniero de rendimiento senior",
	"openPositions.fullTime": "Tiempo completo",
	"openPositions.remote": "Remoto",
	"openPositions.leadBenchmarkDesignAnd": "Liderar el diseño e implementación de benchmarks. Se requiere un conocimiento profundo de los componentes internos de V8, las API de rendimiento del navegador y el análisis estadístico.",
	"openPositions.technicalWriter": "Redactor técnico",
	"openPositions.partTime": "Tiempo parcial",
	"openPositions.createAndMaintainDocumentation": "Crear y mantener documentación, publicaciones de blog y contenido educativo sobre las mejores prácticas de rendimiento de i18n.",
	"openPositions.frontendDeveloper": "Desarrollador Frontend",
	"openPositions.buildAndMaintainThe": "Construir y mantener el tablero de benchmark, herramientas de comparación y visualizaciones interactivas.",
	"openPositions.devOpsEngineer": "Ingeniero DevOps",
	"openPositions.designAndMaintainThe": "Diseñar y mantener la tubería de CI/CD que ejecuta los benchmarks automáticamente en cada actualización de biblioteca.",
	"openPositions.applyNow": "Solicitar ahora",
	"careersHeader.careers": "Carreras",
	"careersHeader.joinOurMissionToMake": "Únase a nuestra misión para hacer la web más rápida y accesible para todos, en cualquier lugar.",
	"careersBenefits.whyJoinUs": "¿Por qué unirse a nosotros?",
	"careersBenefits.remoteFirst": "Remoto primero",
	"careersBenefits.workFromAnywhereFully": "Trabaje desde cualquier lugar. Equipo totalmente distribuido en 6 zonas horarias.",
	"careersBenefits.openSource": "Código abierto",
	"careersBenefits.allOurWorkIs": "Todo nuestro trabajo es de código abierto. Construya su portafolio público mientras genera un impacto.",
	"careersBenefits.impactful": "Impactante",
	"careersBenefits.yourWorkDirectlyHelps": "Su trabajo ayuda directamente a los desarrolladores a crear aplicaciones internacionalizadas mejores y más rápidas."
}, Ae = {
	"contactForm.name": "Nombre",
	"contactForm.email": "Correo electrónico",
	"contactForm.subject": "Asunto",
	"contactForm.message": "Mensaje",
	"contactForm.sendMessage": "Enviar mensaje",
	"contactForm.wellGetBackTo": "Nos pondremos en contacto con usted en un plazo de 48 horas.",
	"contactHeader.contactUs": "Contáctenos",
	"contactHeader.haveQuestionsOrWantTo": "¿Tiene preguntas o quiere contribuir? Nos encantaría saber de usted."
}, je = {
	"faqList.howAreTheBenchmarks": "¿Cómo se ejecutan los benchmarks?",
	"faqList.allBenchmarksAreRun": "Todos los benchmarks se ejecutan utilizando Playwright en una configuración de hardware consistente (M2 MacBook Pro) con condiciones de red 4G simuladas. Cada prueba realiza 50 iteraciones y reportamos la mediana, los valores P95 y P99.",
	"faqList.whatLibrariesAreCurrently": "¿Qué bibliotecas se prueban actualmente?",
	"faqList.weCurrentlyBenchmarkReactI18next": "Actualmente probamos react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl y Paraglide. Planeamos añadir más basándonos en las peticiones de la comunidad.",
	"faqList.canIContributeA": "¿Puedo contribuir con una nueva integración de biblioteca?",
	"faqList.absolutelyWeWelcomeCommunity": "¡Absolutamente! Damos la bienvenida a las contribuciones de la comunidad. Bifurque el repositorio, añada su integración de biblioteca siguiendo nuestra plantilla y envíe una pull request.",
	"faqList.howOftenAreResults": "¿Con qué frecuencia se actualizan los resultados?",
	"faqList.benchmarksRunAutomaticallyVia": "Los benchmarks se ejecutan automáticamente a través de CI en cada actualización de dependencia y semanalmente en la rama principal. Los resultados se publican en el tablero en un plazo de 24 horas.",
	"faqList.areTheResultsStatistically": "¿Son los resultados estadísticamente significativos?",
	"faqList.yesWeUseThe": "Sí. Utilizamos la prueba U de Mann-Whitney con un nivel de significación de 0,05 para comparar distribuciones. También reportamos intervalos de confianza y tamaños del efecto.",
	"faq-header1.frequentlyAskedQuestions": "Preguntas frecuentes",
	"faq-header1.everythingYouNeedToKnow": "Todo lo que necesita saber sobre el proyecto i18n Benchmark."
}, Me = {
	"understandingImpact.understandingTheImpact": "Entendiendo el impacto",
	"understandingImpact.whyASingleLargeJson": "Por qué un solo JSON grande puede perjudicar el rendimiento",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "Muchas bibliotecas i18n almacenan las traducciones en un solo objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:",
	"understandingImpact.theJsonMustBeParsed": "El JSON debe ser analizado en cada carga de página — bloqueando el hilo principal.",
	"understandingImpact.contextBasedArchitecturesCanCause": "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el local, porque cada consumidor es notificado incluso si sus claves específicas no han cambiado.",
	"understandingImpact.duringServerSideRenderingThe": "Durante la renderización del lado del servidor, el diccionario completo se serializa en la carga útil de HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.",
	"understandingImpact.theTradeOffsOfDynamic": "Las compensaciones de la carga dinámica",
	"understandingImpact.splittingTranslationsIntoPerRoute": "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente la carga útil inicial. Pero introduce nuevos desafíos:",
	"understandingImpact.waterfallRequests": "Solicitudes en cascada:",
	"understandingImpact.flashOfUntranslatedContentFouc": "Parpadeo de contenido no traducido (FOUC):",
	"understandingImpact.cacheInvalidation": "Invalidación de la caché:",
	"understandingImpact.whatThisBenchmarkMeasures": "Lo que mide este benchmark",
	"understandingImpact.thisTestAppProvidesA": "Esta aplicación de prueba proporciona un entorno controlado — 10 páginas con contenido realista — para comparar las bibliotecas i18n en tres ejes: el peso que añaden a su paquete de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.",
	"whyItMatters.whyTheseMetricsMatter": "Por qué son importantes estas métricas",
	"whyItMatters.bundleSize": "Tamaño del paquete",
	"whyItMatters.theBundleIsTheData": "El paquete representa los datos enviados a cada usuario en todo el mundo. Un paquete más grande significa tiempos de descarga más largos — especialmente en conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código de tiempo de ejecución, además de los propios archivos de traducción.",
	"whyItMatters.renderingHydration": "Renderizado e hidratación",
	"whyItMatters.connectingALargeJson": "Conectar un gran diccionario JSON a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página se vuelva interactiva — impactando directamente el tiempo de interacción (TTI).",
	"whyItMatters.dynamicLoading": "Carga dinámica",
	"whyItMatters.loadingAllTranslationsUpfront": "Cargar todas las traducciones por adelantado sobrecarga la carga útil inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, el lazy loading introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.",
	"resultsTable.sampleResults": "Resultados de muestra",
	"resultsTable.bundleSize": "Tamaño del paquete",
	"resultsTable.lookupTime": "Tiempo de búsqueda",
	"resultsTable.lazyLoading": "Carga diferida",
	"hero.aTestApplicationDesignedTo": "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el rendimiento de carga y la reactividad de renderizado.",
	"hero.viewResults": "Ver resultados"
}, Ne = {
	"pricingTiers.starterTier": "Nivel Starter",
	"pricingTiers.starterPrice": "$0",
	"pricingTiers.forever": "para siempre",
	"pricingTiers.runsPerDay": "5 ejecuciones de benchmark/día",
	"pricingTiers.libraries3": "3 bibliotecas",
	"pricingTiers.communitySupport": "Soporte comunitario",
	"pricingTiers.publicResults": "Resultados públicos",
	"pricingTiers.getStarted": "Comenzar",
	"pricingTiers.proTier": "Nivel Pro",
	"pricingTiers.proPrice": "$29",
	"pricingTiers.perMonth": "/mes",
	"pricingTiers.unlimitedRuns": "Ejecuciones ilimitadas",
	"pricingTiers.allLibraries": "Todas las bibliotecas",
	"pricingTiers.prioritySupport": "Soporte prioritario",
	"pricingTiers.privateResults": "Resultados privados",
	"pricingTiers.ciIntegration": "Integración CI",
	"pricingTiers.historicalData": "Datos históricos",
	"pricingTiers.enterpriseTier": "Nivel Enterprise",
	"pricingTiers.custom": "Personalizado",
	"pricingTiers.everythingInPro": "Todo lo incluido en Pro",
	"pricingTiers.onPremiseOption": "Opción on-premise",
	"pricingTiers.ssoSaml": "SSO y SAML",
	"pricingTiers.dedicatedAccountManager": "Gerente de cuenta dedicado",
	"pricingTiers.customSLAs": "SLAs personalizados",
	"pricingTiers.auditLogs": "Registros de auditoría",
	"pricingTiers.trainingSessions": "Sesiones de formación",
	"pricingTiers.contactSales": "Contactar con ventas",
	"pricingHeader.pricing": "Precios",
	"pricingHeader.transparentPricingForEvery": "Precios transparentes para todos"
}, Pe = {
	"productsGrid.benchmarkDashboard": "Tablero de benchmarks",
	"productsGrid.interactiveChartsAndTables": "Gráficos y tablas interactivos que comparan las bibliotecas i18n por tamaño de paquete, tiempo de renderizado y costo de hidratación.",
	"productsGrid.bundleAnalyzer": "Analizador de paquetes",
	"productsGrid.uploadYourBuildOutput": "Cargue su salida de construcción y obtenga un desglose detallado de cuánto de su paquete es sobrecarga de i18n.",
	"productsGrid.migrationAssistant": "Asistente de migración",
	"productsGrid.automatedCodemodsAndGuides": "Codemods y guías automatizadas para migrar entre bibliotecas i18n con una interrupción mínima.",
	"productsGrid.performanceMonitor": "Monitor de rendimiento",
	"productsGrid.continuousPerformanceTrackingFor": "Seguimiento continuo del rendimiento para su implementación de i18n. Reciba alertas cuando la carga de traducciones se degrade.",
	"productsGrid.learnMore": "Saber más",
	"productsHeader.products": "Productos",
	"productsHeader.toolsAndServicesTo": "Herramientas y servicios para ayudarle a optimizar su estrategia de internacionalización."
}, Fe = {
	"route.oopsPageNotFound": "¡Ups! Página no encontrada",
	"route.returnToHome": "Volver al inicio",
	"route.couldNotMeasureHydrationDuration": "No se pudo medir la duración de la hidratación:"
}, Ie = {
	"preferencesSection.preferences": "Preferencias",
	"preferencesSection.emailNotifications": "Notificaciones por correo electrónico",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Recibir informes semanales de benchmark",
	"preferencesSection.darkMode": "Modo oscuro",
	"preferencesSection.useDarkColorScheme": "Usar esquema de colores oscuros",
	"preferencesSection.defaultLanguage": "Idioma predeterminado",
	"settingsHeader.settings": "Configuración",
	"settingsHeader.manageYourAccountPreferences": "Gestione sus preferencias de cuenta y configuración.",
	"settingsFooter.cancel": "Cancelar",
	"settingsFooter.saveChanges": "Guardar cambios",
	"apiAccessSection.apiAccess": "Acceso API",
	"apiAccessSection.apiKey": "Clave API",
	"apiAccessSection.useThisKeyTo": "Utilice esta clave para acceder a la API de benchmarking de forma programática.",
	"apiAccessSection.copy": "Copiar",
	"profileSection.profile": "Perfil",
	"profileSection.displayName": "Nombre de pantalla",
	"profileSection.email": "Correo electrónico"
}, Le = {
	"header.home": "Inicio",
	"header.methodology": "Metodología",
	"header.mockPages": "Páginas de prueba",
	"header.products": "Productos",
	"header.pricing": "Precios",
	"header.team": "Equipo",
	"header.blog": "Blog",
	"header.careers": "Carreras",
	"header.faq": "FAQ",
	"header.contact": "Contacto",
	"header.settings": "Configuración",
	"header.goToGithub": "Ir a GitHub",
	"footer.resources": "Recursos",
	"footer.contact": "Contacto",
	"footer.github": "GitHub",
	"footer.methodology": "Metodología",
	"footer.contributing": "Contribuir",
	"footer.builtWith": "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.",
	"footer.anOpenSourceTestApplication": "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación.",
	"mockBanner.text": "⚠️ Esta página contiene datos simulados solo para fines de benchmarking. No está relacionada con ningún negocio o servicio real.",
	"themeToggle.themeModeAutoSystemClick": "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
	"themeToggle.themeModeLightClick": "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
	"themeToggle.themeModeDarkClick": "Modo de tema: oscuro. Haga clic para cambiar al modo automático (sistema).",
	"themeToggle.themeAuto": "Tema: Auto",
	"themeToggle.themeDark": "Tema: Oscuro",
	"themeToggle.themeLight": "Tema: Claro"
}, Re = {
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "Fundadora e Ingeniera Principal",
	"teamGrid.formerGoogleEngineerWith10": "Ex ingeniera de Google con 10 años de experiencia en la construcción de sistemas de internacionalización a escala.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "Ingeniero de rendimiento",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Especializado en la optimización del rendimiento de JavaScript y en la metodología de benchmarking. Anteriormente en Vercel.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "Abogado de desarrolladores",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Apasionada por la experiencia y la educación de los desarrolladores. Ponente en React Conf, JSConf e i18nNext.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "Desarrollador Full-Stack",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Mantiene la infraestructura de benchmarking y la tubería de CI/CD. Colaborador de código abierto en Lingui.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "Analista de datos",
	"teamGrid.ensuresStatisticalRigorInAll": "Garantiza el rigor estadístico en todos los resultados de los benchmarks. Doctorado en Estadística Aplicada por el MIT.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "Responsable de la comunidad",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.",
	"teamHeader.ourTeam": "Nuestro equipo",
	"teamHeader.meetThePeopleBehindI18n": "Conozca a la gente detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las excelentes herramientas de desarrollo."
}, ze = {
	"aboutHeader.methodology": "Methodik",
	"aboutHeader.weDesignedThisBenchmarkTo": "Wir haben diesen Benchmark so konzipiert, dass er faire, reproduzierbare und aussagekräftige Vergleiche von i18n-Bibliotheken ermöglicht.",
	"whatWeMeasure.bundleSizeImpact": "Auswirkung auf die Bundle-Größe",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "Die zusätzlichen JavaScript-Bytes, die speziell aufgrund der Laufzeit der i18n-Bibliothek an den Client gesendet werden, plus die Übersetzungsdateien für das aktuelle Gebietsschema.",
	"whatWeMeasure.renderingOverhead": "Rendering-Overhead",
	"whatWeMeasure.howMuchExtraTimeThe": "Wie viel zusätzliche Zeit die i18n-Schicht zu jedem Komponenten-Rendering hinzufügt — gemessen mit actualDuration des React Profilers.",
	"whatWeMeasure.hydrationCost": "Hydratationskosten",
	"whatWeMeasure.duringSsrTranslationDataIs": "Während des SSR werden Übersetzungsdaten in das HTML serialisiert. Große Wörterbücher erhöhen die HTML-Payload und verlangsamen die Hydratation — den Moment, in dem die Seite interaktiv wird.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Effektivität von Lazy Loading",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Belastung tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).",
	"whatWeMeasure.localeSwitchSpeed": "Geschwindigkeit des Sprachwechsels",
	"whatWeMeasure.howFastTheAppCan": "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderings von Komponenten und der Aktualisierung des DOM.",
	"whatWeMeasure.whatWeMeasure": "Was wir messen",
	"aboutGrid.testEnvironment": "Testumgebung",
	"aboutGrid.allBenchmarksRunOn": "Alle Benchmarks laufen auf derselben Hardware (M2 MacBook Pro, 16 GB RAM), demselben Browser (Chromium 120 über Playwright) und denselben Netzwerkbedingungen (simuliertes 4G). Jeder Test wird 50 Mal wiederholt, und wir geben den Median mit P95/P99-Perzentilen an.",
	"aboutGrid.applicationDesign": "Anwendungsdesign",
	"aboutGrid.theBenchmarkAppHas10": "Die Benchmark-App verfügt über 10 Seiten mit realistischem Inhalt — Navigation, Formulare, dynamische Listen und statischen Text. Jede Seite verwendet 15–30 Übersetzungsschlüssel, um reale Nutzungsmuster darzustellen.",
	"aboutGrid.measurementMethodology": "Messmethodik",
	"aboutGrid.weUseBrowserNativeApis": "Wir verwenden browsernative APIs (Performance Timeline, Resource Timing, Layout Instability) kombiniert mit React Profiler-Daten. Bundle-Größen werden nach dem Gzip-Verfahren mit source-map-explorer für die Genauigkeit gemessen.",
	"aboutGrid.fairComparison": "Fairer Vergleich",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Jede i18n-Bibliothek wird gemäß ihrer offiziellen Dokumentation und Best Practices integriert. Wir konsultieren nach Möglichkeit die Maintainer, um eine optimale Konfiguration sicherzustellen. Dieselbe React-App, dieselbe Vite-Konfiguration, dasselbe Deployment."
}, Be = {
	"blogList.i18nBenchmark2026Results": "i18n Benchmark 2026 Ergebnisse",
	"blogList.march152026": "15. März 2026",
	"blogList.weTested12DifferentInternationalization": "Wir haben 12 verschiedene Internationalisierungsbibliotheken auf 10 Seiten getestet. Hier sind die detaillierten Ergebnisse mit interaktiven Diagrammen.",
	"blogList.howToReduceYourI18n": "So reduzieren Sie Ihr i18n-Bundle um 60 %",
	"blogList.march82026": "8. März 2026",
	"blogList.practicalStrategiesForOptimizingTranslation": "Praktische Strategien zur Optimierung des Ladens von Übersetzungsdateien, Tree-Shaking nicht verwendeter Gebietsschemata und Nutzung der Kompilierung zur Erstellungszeit.",
	"blogList.theStateOfInternationalizationIn": "Der Stand der Internationalisierung im Jahr 2026",
	"blogList.february282026": "28. Februar 2026",
	"blogList.anOverviewOfTheCurrent": "Eine Übersicht über das aktuelle i18n-Ökosystem, Vergleich von Ansätzen von Nachrichtenkatalogen bis hin zu compilerbasierten Lösungen.",
	"blogList.migratingFromReactI18nextTo": "Migration von react-i18next zu Lingui",
	"blogList.february152026": "15. Februar 2026",
	"blogList.aStepByStepGuide": "Schritt-für-Schritt-Anleitung für die Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components und i18n: Was ändert sich?",
	"blogList.february12026": "1. Februar 2026",
	"blogList.reactServerComponentsIntroduceNew": "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.",
	"blogList.benchmarkMethodologyHowWeTest": "Benchmark-Methodik: Wie wir testen",
	"blogList.january202026": "20. Januar 2026",
	"blogList.aTransparentLookAtOur": "Ein transparenter Einblick in unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.",
	"blogList.readMore": "Mehr lesen →",
	"blogHeader.blog": "Blog",
	"blogHeader.insightsDeepDivesAnd": "Einblicke, tiefgehende Analysen und Updates aus der i18n-Benchmarking-Community."
}, Ve = {
	"openPositions.openPositions": "Offene Stellen",
	"openPositions.seniorPerformanceEngineer": "Senior Performance Engineer",
	"openPositions.fullTime": "Vollzeit",
	"openPositions.remote": "Remote",
	"openPositions.leadBenchmarkDesignAnd": "Leiten Sie das Benchmark-Design und die Implementierung. Fundierte Kenntnisse der V8-Interna, der Browser-Performance-APIs und der statistischen Analyse erforderlich.",
	"openPositions.technicalWriter": "Technischer Redakteur",
	"openPositions.partTime": "Teilzeit",
	"openPositions.createAndMaintainDocumentation": "Erstellen und pflegen Sie Dokumentationen, Blog-Beiträge und Schulungsinhalte zu Best Practices für die i18n-Leistung.",
	"openPositions.frontendDeveloper": "Frontend-Entwickler",
	"openPositions.buildAndMaintainThe": "Erstellen und pflegen Sie das Benchmark-Dashboard, Vergleichstools und interaktive Visualisierungen.",
	"openPositions.devOpsEngineer": "DevOps-Ingenieur",
	"openPositions.designAndMaintainThe": "Design und Wartung der CI/CD-Pipeline, die Benchmarks automatisch bei jedem Bibliotheks-Update ausführt.",
	"openPositions.applyNow": "Jetzt bewerben",
	"careersHeader.careers": "Karriere",
	"careersHeader.joinOurMissionToMake": "Helfen Sie uns bei unserer Mission, das Internet für alle und überall schneller und zugänglicher zu machen.",
	"careersBenefits.whyJoinUs": "Warum zu uns kommen?",
	"careersBenefits.remoteFirst": "Remote-First",
	"careersBenefits.workFromAnywhereFully": "Arbeiten Sie von überall. Vollständig verteiltes Team in 6 Zeitzonen.",
	"careersBenefits.openSource": "Open Source",
	"careersBenefits.allOurWorkIs": "Unsere gesamte Arbeit ist Open Source. Bauen Sie Ihr öffentliches Portfolio auf, während Sie etwas bewirken.",
	"careersBenefits.impactful": "Wirkungsvoll",
	"careersBenefits.yourWorkDirectlyHelps": "Ihre Arbeit hilft Entwicklern direkt dabei, bessere und schnellere internationalisierte Anwendungen zu erstellen."
}, He = {
	"contactForm.name": "Name",
	"contactForm.email": "E-Mail",
	"contactForm.subject": "Betreff",
	"contactForm.message": "Nachricht",
	"contactForm.sendMessage": "Nachricht senden",
	"contactForm.wellGetBackTo": "Wir melden uns innerhalb von 48 Stunden bei Ihnen.",
	"contactHeader.contactUs": "Kontaktieren Sie uns",
	"contactHeader.haveQuestionsOrWantTo": "Haben Sie Fragen oder möchten Sie einen Beitrag leisten? Wir würden uns freuen, von Ihnen zu hören."
}, Ue = {
	"faqList.howAreTheBenchmarks": "Wie werden die Benchmarks durchgeführt?",
	"faqList.allBenchmarksAreRun": "Alle Benchmarks werden mit Playwright auf einem einheitlichen Hardware-Setup (M2 MacBook Pro) mit simulierten 4G-Netzwerkbedingungen ausgeführt. Jeder Test umfasst 50 Iterationen, und wir geben den Median, P95- und P99-Werte an.",
	"faqList.whatLibrariesAreCurrently": "Welche Bibliotheken werden derzeit getestet?",
	"faqList.weCurrentlyBenchmarkReactI18next": "Wir benchmarken derzeit react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl und Paraglide. Wir planen, basierend auf Community-Anfragen weitere hinzuzufügen.",
	"faqList.canIContributeA": "Kann ich eine neue Bibliotheksintegration beisteuern?",
	"faqList.absolutelyWeWelcomeCommunity": "Absolut! Wir begrüßen Beiträge aus der Community. Forken Sie das Repository, fügen Sie Ihre Bibliotheksintegration gemäß unserer Vorlage hinzu und senden Sie einen Pull-Request.",
	"faqList.howOftenAreResults": "Wie oft werden die Ergebnisse aktualisiert?",
	"faqList.benchmarksRunAutomaticallyVia": "Benchmarks laufen automatisch über CI bei jedem Dependency-Update und wöchentlich auf dem Main-Branch. Ergebnisse werden innerhalb von 24 Stunden auf dem Dashboard veröffentlicht.",
	"faqList.areTheResultsStatistically": "Sind die Ergebnisse statistisch signifikant?",
	"faqList.yesWeUseThe": "Ja. Wir verwenden den Mann-Whitney-U-Test mit einem Signifikanzniveau von 0,05, um Verteilungen zu vergleichen. Wir geben auch Konfidenzintervalle und Effektstärken an.",
	"faq-header1.frequentlyAskedQuestions": "Häufig gestellte Fragen",
	"faq-header1.everythingYouNeedToKnow": "Alles, was Sie über das i18n-Benchmark-Projekt wissen müssen."
}, We = {
	"understandingImpact.understandingTheImpact": "Die Auswirkungen verstehen",
	"understandingImpact.whyASingleLargeJson": "Warum ein einziges großes JSON die Leistung beeinträchtigen kann",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:",
	"understandingImpact.theJsonMustBeParsed": "Das JSON muss bei jedem Seitenladen analysiert werden — was den Hauptthread blockiert.",
	"understandingImpact.contextBasedArchitecturesCanCause": "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.",
	"understandingImpact.duringServerSideRenderingThe": "Während des serverseitigen Renderings wird das vollständige Wörterbuch in die HTML-Payload serialisiert, wodurch die Größe des Dokuments erhöht wird, das heruntergeladen und hydratisiert werden muss.",
	"understandingImpact.theTradeOffsOfDynamic": "Die Kompromisse beim dynamischen Laden",
	"understandingImpact.splittingTranslationsIntoPerRoute": "Das Aufteilen der Übersetzungen in Chunks pro Route oder Namespace kann die anfängliche Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:",
	"understandingImpact.waterfallRequests": "Waterfall-Anfragen:",
	"understandingImpact.flashOfUntranslatedContentFouc": "Aufblitzen von nicht übersetztem Inhalt (FOUC):",
	"understandingImpact.cacheInvalidation": "Cache-Invalidierung:",
	"understandingImpact.whatThisBenchmarkMeasures": "Was dieser Benchmark misst",
	"understandingImpact.thisTestAppProvidesA": "Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischem Inhalt —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.",
	"whyItMatters.whyTheseMetricsMatter": "Warum diese Kennzahlen wichtig sind",
	"whyItMatters.bundleSize": "Bundle-Größe",
	"whyItMatters.theBundleIsTheData": "Das Bundle stellt die Daten dar, die an jeden Benutzer weltweit gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — insbesondere bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, zusätzlich zu den Übersetzungsdateien selbst.",
	"whyItMatters.renderingHydration": "Rendering & Hydratation",
	"whyItMatters.connectingALargeJson": "Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratisierung fügt das Parsen und Anhängen massiver Übersetzungsobjekte Latenz hinzu, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.",
	"whyItMatters.dynamicLoading": "Dynamisches Laden",
	"whyItMatters.loadingAllTranslationsUpfront": "Das Vorabladen aller Übersetzungen überlastet die anfängliche Payload. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen nicht übersetzter Inhalte und Komplexität des Cachings. Die Messung beider Strategien ist unerlässlich.",
	"resultsTable.sampleResults": "Beispielergebnisse",
	"resultsTable.bundleSize": "Bundle-Größe",
	"resultsTable.lookupTime": "Suchzeit",
	"resultsTable.lazyLoading": "Lazy Loading",
	"hero.aTestApplicationDesignedTo": "Eine Testanwendung, die darauf ausgelegt ist, die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.",
	"hero.viewResults": "Ergebnisse anzeigen"
}, Ge = {
	"pricingTiers.starterTier": "Starter",
	"pricingTiers.starterPrice": "0 €",
	"pricingTiers.forever": "für immer",
	"pricingTiers.runsPerDay": "5 Benchmark-Läufe/Tag",
	"pricingTiers.libraries3": "3 Bibliotheken",
	"pricingTiers.communitySupport": "Community-Support",
	"pricingTiers.publicResults": "Öffentliche Ergebnisse",
	"pricingTiers.getStarted": "Loslegen",
	"pricingTiers.proTier": "Pro",
	"pricingTiers.proPrice": "29 €",
	"pricingTiers.perMonth": "/Monat",
	"pricingTiers.unlimitedRuns": "Unbegrenzte Läufe",
	"pricingTiers.allLibraries": "Alle Bibliotheken",
	"pricingTiers.prioritySupport": "Priorisierter Support",
	"pricingTiers.privateResults": "Private Ergebnisse",
	"pricingTiers.ciIntegration": "CI-Integration",
	"pricingTiers.historicalData": "Historische Daten",
	"pricingTiers.enterpriseTier": "Enterprise",
	"pricingTiers.custom": "Individuell",
	"pricingTiers.everythingInPro": "Alles aus Pro",
	"pricingTiers.onPremiseOption": "On-Premise-Option",
	"pricingTiers.ssoSaml": "SSO & SAML",
	"pricingTiers.dedicatedAccountManager": "Dedizierter Account Manager",
	"pricingTiers.customSLAs": "Benutzerdefinierte SLAs",
	"pricingTiers.auditLogs": "Audit-Logs",
	"pricingTiers.trainingSessions": "Schulungssitzungen",
	"pricingTiers.contactSales": "Vertrieb kontaktieren",
	"pricingHeader.pricing": "Preise",
	"pricingHeader.transparentPricingForEvery": "Transparente Preise für alle"
}, Ke = {
	"productsGrid.benchmarkDashboard": "Benchmark-Dashboard",
	"productsGrid.interactiveChartsAndTables": "Interaktive Diagramme und Tabellen, die i18n-Bibliotheken hinsichtlich Bundle-Größe, Renderzeit und Hydratationskosten vergleichen.",
	"productsGrid.bundleAnalyzer": "Bundle-Analyzer",
	"productsGrid.uploadYourBuildOutput": "Laden Sie Ihren Build-Output hoch und erhalten Sie eine detaillierte Aufschlüsselung, wie viel von Ihrem Bundle i18n-Overhead ist.",
	"productsGrid.migrationAssistant": "Migrationsassistent",
	"productsGrid.automatedCodemodsAndGuides": "Automatisierte Codemods und Anleitungen für die Migration zwischen i18n-Bibliotheken mit minimaler Unterbrechung.",
	"productsGrid.performanceMonitor": "Leistungsmonitor",
	"productsGrid.continuousPerformanceTrackingFor": "Kontinuierliche Leistungsverfolgung für Ihre i18n-Implementierung. Erhalten Sie Warnungen, wenn sich das Laden von Übersetzungen verschlechtert.",
	"productsGrid.learnMore": "Mehr erfahren",
	"productsHeader.products": "Produkte",
	"productsHeader.toolsAndServicesTo": "Tools und Services unterstützen Sie bei der Optimierung Ihrer Internationalisierungsstrategie."
}, qe = {
	"route.oopsPageNotFound": "Hoppla! Seite nicht gefunden",
	"route.returnToHome": "Zurück zur Startseite",
	"route.couldNotMeasureHydrationDuration": "Hydratationsdauer konnte nicht gemessen werden:"
}, Je = {
	"preferencesSection.preferences": "Einstellungen",
	"preferencesSection.emailNotifications": "E-Mail-Benachrichtigungen",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Wöchentliche Benchmark-Berichte erhalten",
	"preferencesSection.darkMode": "Dunkelmodus",
	"preferencesSection.useDarkColorScheme": "Dunkles Farbschema verwenden",
	"preferencesSection.defaultLanguage": "Standardsprache",
	"settingsHeader.settings": "Einstellungen",
	"settingsHeader.manageYourAccountPreferences": "Verwalten Sie Ihre Kontoeinstellungen und -konfigurationen.",
	"settingsFooter.cancel": "Abbrechen",
	"settingsFooter.saveChanges": "Änderungen speichern",
	"apiAccessSection.apiAccess": "API-Zugriff",
	"apiAccessSection.apiKey": "API-Schlüssel",
	"apiAccessSection.useThisKeyTo": "Verwenden Sie diesen Schlüssel für den programmgesteuerten Zugriff auf die Benchmarking-API.",
	"apiAccessSection.copy": "Kopieren",
	"profileSection.profile": "Profil",
	"profileSection.displayName": "Anzeigename",
	"profileSection.email": "E-Mail"
}, Ye = {
	"header.home": "Startseite",
	"header.methodology": "Methodik",
	"header.mockPages": "Testseiten",
	"header.products": "Produkte",
	"header.pricing": "Preise",
	"header.team": "Team",
	"header.blog": "Blog",
	"header.careers": "Karriere",
	"header.faq": "FAQ",
	"header.contact": "Kontakt",
	"header.settings": "Einstellungen",
	"header.goToGithub": "Zu GitHub",
	"footer.resources": "Ressourcen",
	"footer.contact": "Kontakt",
	"footer.github": "GitHub",
	"footer.methodology": "Methodik",
	"footer.contributing": "Beitragen",
	"footer.builtWith": "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite und TanStack Router.",
	"footer.anOpenSourceTestApplication": "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladezeit und die Reaktivität der App.",
	"mockBanner.text": "⚠️ Diese Seite enthält fiktive Daten, die nur Benchmark-Zwecken dienen. Sie stehen in keinem Zusammenhang mit realen Unternehmen oder Dienstleistungen.",
	"themeToggle.themeModeAutoSystemClick": "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.",
	"themeToggle.themeModeLightClick": "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.",
	"themeToggle.themeModeDarkClick": "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.",
	"themeToggle.themeAuto": "Thema: Auto",
	"themeToggle.themeDark": "Thema: Dunkel",
	"themeToggle.themeLight": "Thema: Hell"
}, Xe = {
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "Gründerin & Leitende Ingenieurin",
	"teamGrid.formerGoogleEngineerWith10": "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "Performance-Ingenieur",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "Developer Advocate",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Begeistert von Entwicklererfahrung und Bildung. Sprecherin bei React Conf, JSConf und i18nNext.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "Full-Stack-Entwickler",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "Datenanalystin",
	"teamGrid.ensuresStatisticalRigorInAll": "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. PhD in Angewandter Statistik vom MIT.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "Community-Managerin",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Verwaltet Community-Beiträge, Partnerschaften und Events. Hintergrund in Open-Source-Governance.",
	"teamHeader.ourTeam": "Unser Team",
	"teamHeader.meetThePeopleBehindI18n": "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, vereint durch die Leidenschaft für großartige Entwicklertools."
}, Ze = {
	"aboutHeader.methodology": "Metodologia",
	"aboutHeader.weDesignedThisBenchmarkTo": "Abbiamo progettato questo benchmark per fornire confronti equi, riproducibili e significativi delle librerie i18n.",
	"whatWeMeasure.bundleSizeImpact": "Impatto sulla dimensione del bundle",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "I byte JavaScript aggiuntivi inviati al client specificamente a causa del runtime della libreria i18n, oltre ai file di traduzione per la localizzazione corrente.",
	"whatWeMeasure.renderingOverhead": "Sovrapprezzo di rendering",
	"whatWeMeasure.howMuchExtraTimeThe": "Quanto tempo extra aggiunge lo strato i18n a ogni rendering di componente — misurato utilizzando actualDuration di React Profiler.",
	"whatWeMeasure.hydrationCost": "Costo di idratazione",
	"whatWeMeasure.duringSsrTranslationDataIs": "Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. I grandi dizionari aumentano il payload HTML e rallentano l'idratazione, il momento in cui la pagina diventa interattiva.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Efficacia del caricamento lazy",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).",
	"whatWeMeasure.localeSwitchSpeed": "Velocità di cambio localizzazione",
	"whatWeMeasure.howFastTheAppCan": "Quanto velocemente l'app può passare da una lingua all'altra in esecuzione, includendo il recupero delle nuove traduzioni, il re-rendering dei componenti e l'aggiornamento del DOM.",
	"whatWeMeasure.whatWeMeasure": "Cosa misuriamo",
	"aboutGrid.testEnvironment": "Ambiente di test",
	"aboutGrid.allBenchmarksRunOn": "Tutti i benchmark vengono eseguiti sullo stesso hardware (M2 MacBook Pro, 16 GB di RAM), lo stesso browser (Chromium 120 tramite Playwright) e le stesse condizioni di rete (4G simulato). Ogni test viene ripetuto 50 volte e riportiamo la mediana con i percentili P95/P99.",
	"aboutGrid.applicationDesign": "Design dell'applicazione",
	"aboutGrid.theBenchmarkAppHas10": "L'app di benchmark ha 10 pagine con contenuti realistici: navigazione, moduli, elenchi dinamici e testo statico. Ogni pagina utilizza 15-30 chiavi di traduzione per rappresentare modelli di utilizzo reali.",
	"aboutGrid.measurementMethodology": "Metodologia di misurazione",
	"aboutGrid.weUseBrowserNativeApis": "Utilizziamo le API native del browser (Performance Timeline, Resource Timing, Layout Instability) combinate con i dati di React Profiler. Le dimensioni dei bundle vengono misurate dopo la compressione gzip utilizzando source-map-explorer per accuratezza.",
	"aboutGrid.fairComparison": "Confronto equo",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Ogni libreria i18n viene integrata seguendo la sua documentazione ufficiale e le migliori pratiche. Consultiamo i manutentori, quando possibile, per garantire una configurazione ottimale. Stessa app React, stessa configurazione Vite, stessa distribuzione."
}, Qe = {
	"blogList.i18nBenchmark2026Results": "Risultati i18n Benchmark 2026",
	"blogList.march152026": "15 marzo 2026",
	"blogList.weTested12DifferentInternationalization": "Abbiamo testato 12 diverse librerie di internazionalizzazione su 10 pagine. Ecco i risultati dettagliati con grafici interattivi.",
	"blogList.howToReduceYourI18n": "Come ridurre il bundle i18n del 60%",
	"blogList.march82026": "8 marzo 2026",
	"blogList.practicalStrategiesForOptimizingTranslation": "Strategie pratiche per ottimizzare il caricamento dei file di traduzione, il tree-shaking delle localizzazioni inutilizzate e l'uso della compilazione in fase di build.",
	"blogList.theStateOfInternationalizationIn": "Lo stato dell'internazionalizzazione nel 2026",
	"blogList.february282026": "28 febbraio 2026",
	"blogList.anOverviewOfTheCurrent": "Una panoramica dell'attuale ecosistema i18n, confrontando approcci dai cataloghi di messaggi alle soluzioni basate su compilatore.",
	"blogList.migratingFromReactI18nextTo": "Migrazione da react-i18next a Lingui",
	"blogList.february152026": "15 febbraio 2026",
	"blogList.aStepByStepGuide": "Una guida passo-passo per la migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components e i18n: cosa cambia?",
	"blogList.february12026": "1 febbraio 2026",
	"blogList.reactServerComponentsIntroduceNew": "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.",
	"blogList.benchmarkMethodologyHowWeTest": "Metodologia del benchmark: come testiamo",
	"blogList.january202026": "20 gennaio 2026",
	"blogList.aTransparentLookAtOur": "Uno sguardo trasparente alla nostra metodologia di benchmarking, inclusi gli ambienti di test, i metodi statistici e la riproducibilità.",
	"blogList.readMore": "Leggi di più →",
	"blogHeader.blog": "Blog",
	"blogHeader.insightsDeepDivesAnd": "Approfondimenti e aggiornamenti dalla comunità di benchmarking i18n."
}, $e = {
	"openPositions.openPositions": "Posizioni aperte",
	"openPositions.seniorPerformanceEngineer": "Ingegnere delle prestazioni senior",
	"openPositions.fullTime": "Tempo pieno",
	"openPositions.remote": "Remoto",
	"openPositions.leadBenchmarkDesignAnd": "Guidare la progettazione e l'implementazione del benchmark. È richiesta una profonda conoscenza dei meccanismi interni di V8, delle API delle prestazioni del browser e dell'analisi statistica.",
	"openPositions.technicalWriter": "Scrittore tecnico",
	"openPositions.partTime": "Part-time",
	"openPositions.createAndMaintainDocumentation": "Creare e mantenere documentazione, post sul blog e contenuti educativi sulle migliori pratiche per le prestazioni i18n.",
	"openPositions.frontendDeveloper": "Sviluppatore Frontend",
	"openPositions.buildAndMaintainThe": "Costruire e mantenere la dashboard dei benchmark, gli strumenti di confronto e le visualizzazioni interattive.",
	"openPositions.devOpsEngineer": "Ingegnere DevOps",
	"openPositions.designAndMaintainThe": "Progettare e mantenere la pipeline CI/CD che esegue i benchmark automaticamente a ogni aggiornamento della libreria.",
	"openPositions.applyNow": "Candidati ora",
	"careersHeader.careers": "Carriere",
	"careersHeader.joinOurMissionToMake": "Unisciti alla nostra missione per rendere il web più veloce e accessibile per tutti, ovunque.",
	"careersBenefits.whyJoinUs": "Perché unirti a noi?",
	"careersBenefits.remoteFirst": "Remoto-first",
	"careersBenefits.workFromAnywhereFully": "Lavora da ovunque. Team completamente distribuito in 6 fusi orari.",
	"careersBenefits.openSource": "Open Source",
	"careersBenefits.allOurWorkIs": "Tutto il nostro lavoro è open source. Costruisci il tuo portfolio pubblico mentre generi un impatto.",
	"careersBenefits.impactful": "Impattante",
	"careersBenefits.yourWorkDirectlyHelps": "Il tuo lavoro aiuta direttamente i sviluppatori a creare applicazioni internazionalizzate migliori e più veloci."
}, et = {
	"contactForm.name": "Nome",
	"contactForm.email": "Email",
	"contactForm.subject": "Oggetto",
	"contactForm.message": "Messaggio",
	"contactForm.sendMessage": "Invia messaggio",
	"contactForm.wellGetBackTo": "Ti risponderemo entro 48 ore.",
	"contactHeader.contactUs": "Contattaci",
	"contactHeader.haveQuestionsOrWantTo": "Hai domande o vuoi contribuire? Ci piacerebbe sentirti."
}, tt = {
	"faqList.howAreTheBenchmarks": "Come vengono eseguiti i benchmark?",
	"faqList.allBenchmarksAreRun": "Tutti i benchmark vengono eseguiti utilizzando Playwright su una configurazione hardware coerente (M2 MacBook Pro) con condizioni di rete 4G simulate. Ogni test esegue 50 iterazioni e riportiamo la mediana, i valori P95 e P99.",
	"faqList.whatLibrariesAreCurrently": "Quali librerie sono attualmente testate?",
	"faqList.weCurrentlyBenchmarkReactI18next": "Attualmente testiamo react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl e Paraglide. Prevediamo di aggiungerne altre in base alle richieste della comunità.",
	"faqList.canIContributeA": "Posso contribuire con l'integrazione di una nuova libreria?",
	"faqList.absolutelyWeWelcomeCommunity": "Assolutamente! Accogliamo con favore i contributi della comunità. Forka il repository, aggiungi l'integrazione della tua libreria seguendo il nostro template e invia una pull request.",
	"faqList.howOftenAreResults": "Con quale frequenza vengono aggiornati i risultati?",
	"faqList.benchmarksRunAutomaticallyVia": "I benchmark vengono eseguiti automaticamente tramite CI a ogni aggiornamento di dipendenza e settimanalmente sul branch main. I risultati vengono pubblicati sul cruscotto entro 24 ore.",
	"faqList.areTheResultsStatistically": "I risultati sono statisticamente significativi?",
	"faqList.yesWeUseThe": "Sì. Utilizziamo il test U di Mann-Whitney con un livello di significatività di 0,05 per confrontare le distribuzioni. Riportiamo anche gli intervalli di confidenza e le dimensioni dell'effetto.",
	"faq-header1.frequentlyAskedQuestions": "Domande frequenti",
	"faq-header1.everythingYouNeedToKnow": "Tutto quello che c'è da sapere sul progetto i18n Benchmark."
}, nt = {
	"understandingImpact.understandingTheImpact": "Capire l'impatto",
	"understandingImpact.whyASingleLargeJson": "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:",
	"understandingImpact.theJsonMustBeParsed": "Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.",
	"understandingImpact.contextBasedArchitecturesCanCause": "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.",
	"understandingImpact.duringServerSideRenderingThe": "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.",
	"understandingImpact.theTradeOffsOfDynamic": "I compromessi del caricamento dinamico",
	"understandingImpact.splittingTranslationsIntoPerRoute": "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:",
	"understandingImpact.waterfallRequests": "Richieste a cascata:",
	"understandingImpact.flashOfUntranslatedContentFouc": "Flash di contenuti non tradotti (FOUC):",
	"understandingImpact.cacheInvalidation": "Invalidazione della cache:",
	"understandingImpact.whatThisBenchmarkMeasures": "Cosa misura questo benchmark",
	"understandingImpact.thisTestAppProvidesA": "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.",
	"whyItMatters.whyTheseMetricsMatter": "Perché queste metriche sono importanti",
	"whyItMatters.bundleSize": "Dimensione del bundle",
	"whyItMatters.theBundleIsTheData": "Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.",
	"whyItMatters.renderingHydration": "Rendering e idratazione",
	"whyItMatters.connectingALargeJson": "Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).",
	"whyItMatters.dynamicLoading": "Caricamento dinamico",
	"whyItMatters.loadingAllTranslationsUpfront": "Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.",
	"resultsTable.sampleResults": "Risultati di esempio",
	"resultsTable.bundleSize": "Dimensione del bundle",
	"resultsTable.lookupTime": "Tempo di ricerca",
	"resultsTable.lazyLoading": "Caricamento lazy",
	"hero.aTestApplicationDesignedTo": "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
	"hero.viewResults": "Visualizza i risultati"
}, rt = {
	"pricingTiers.starterTier": "Starter",
	"pricingTiers.starterPrice": "€0",
	"pricingTiers.forever": "per sempre",
	"pricingTiers.runsPerDay": "5 esecuzioni benchmark/giorno",
	"pricingTiers.libraries3": "3 librerie",
	"pricingTiers.communitySupport": "Supporto della community",
	"pricingTiers.publicResults": "Risultati pubblici",
	"pricingTiers.getStarted": "Inizia ora",
	"pricingTiers.proTier": "Pro",
	"pricingTiers.proPrice": "€29",
	"pricingTiers.perMonth": "/mese",
	"pricingTiers.unlimitedRuns": "Esecuzioni illimitate",
	"pricingTiers.allLibraries": "Tutte le librerie",
	"pricingTiers.prioritySupport": "Supporto prioritario",
	"pricingTiers.privateResults": "Risultati privati",
	"pricingTiers.ciIntegration": "Integrazione CI",
	"pricingTiers.historicalData": "Dati storici",
	"pricingTiers.enterpriseTier": "Enterprise",
	"pricingTiers.custom": "Personalizzato",
	"pricingTiers.everythingInPro": "Tutto ciò che include Pro",
	"pricingTiers.onPremiseOption": "Opzione on-premise",
	"pricingTiers.ssoSaml": "SSO e SAML",
	"pricingTiers.dedicatedAccountManager": "Account manager dedicato",
	"pricingTiers.customSLAs": "SLA personalizzati",
	"pricingTiers.auditLogs": "Log di audit",
	"pricingTiers.trainingSessions": "Sessioni di formazione",
	"pricingTiers.contactSales": "Contatta l'ufficio vendite",
	"pricingHeader.pricing": "Prezzi",
	"pricingHeader.transparentPricingForEvery": "Prezzi trasparenti per tutti"
}, it = {
	"productsGrid.benchmarkDashboard": "Dashboard dei benchmark",
	"productsGrid.interactiveChartsAndTables": "Grafici e tabelle interattive che confrontano le librerie i18n per dimensione del bundle, tempo di rendering e costo di idratazione.",
	"productsGrid.bundleAnalyzer": "Analizzatore di bundle",
	"productsGrid.uploadYourBuildOutput": "Carica l'output della tua build e ottieni una scomposizione dettagliata di quanto del tuo bundle è sovraccarico i18n.",
	"productsGrid.migrationAssistant": "Assistente alla migrazione",
	"productsGrid.automatedCodemodsAndGuides": "Codemod e guide automatizzate per la migrazione tra librerie i18n con il minimo disturbo.",
	"productsGrid.performanceMonitor": "Monitor delle prestazioni",
	"productsGrid.continuousPerformanceTrackingFor": "Monitoraggio continuo delle prestazioni per la tua implementazione i18n. Ricevi avvisi quando il caricamento delle traduzioni peggiora.",
	"productsGrid.learnMore": "Scopri di più",
	"productsHeader.products": "Prodotti",
	"productsHeader.toolsAndServicesTo": "Strumenti e servizi per aiutarti a ottimizzare la tua strategia di internazionalizzazione."
}, at = {
	"route.oopsPageNotFound": "Ops! Pagina non trovata",
	"route.returnToHome": "Torna alla Home",
	"route.couldNotMeasureHydrationDuration": "Impossibile misurare la durata dell'idratazione:"
}, ot = {
	"preferencesSection.preferences": "Preferenze",
	"preferencesSection.emailNotifications": "Notifiche via email",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Ricevi rapporti settimanali sui benchmark",
	"preferencesSection.darkMode": "Modalità scura",
	"preferencesSection.useDarkColorScheme": "Usa lo schema colori scuro",
	"preferencesSection.defaultLanguage": "Lingua predefinita",
	"settingsHeader.settings": "Impostazioni",
	"settingsHeader.manageYourAccountPreferences": "Gestisci le preferenze del tuo account e la configurazione.",
	"settingsFooter.cancel": "Annulla",
	"settingsFooter.saveChanges": "Salva modifiche",
	"apiAccessSection.apiAccess": "Accesso API",
	"apiAccessSection.apiKey": "Chiave API",
	"apiAccessSection.useThisKeyTo": "Usa questa chiave per accedere programmaticamente all'API di benchmarking.",
	"apiAccessSection.copy": "Copia",
	"profileSection.profile": "Profilo",
	"profileSection.displayName": "Nome visualizzato",
	"profileSection.email": "Email"
}, st = {
	"header.home": "Home",
	"header.methodology": "Metodologia",
	"header.mockPages": "Pagine di test",
	"header.products": "Prodotti",
	"header.pricing": "Prezzi",
	"header.team": "Team",
	"header.blog": "Blog",
	"header.careers": "Carriere",
	"header.faq": "FAQ",
	"header.contact": "Contatti",
	"header.settings": "Impostazioni",
	"header.goToGithub": "Vai su GitHub",
	"footer.resources": "Risorse",
	"footer.contact": "Contatti",
	"footer.github": "GitHub",
	"footer.methodology": "Metodologia",
	"footer.contributing": "Contribuire",
	"footer.builtWith": "i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.",
	"footer.anOpenSourceTestApplication": "Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.",
	"mockBanner.text": "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale.",
	"themeToggle.themeModeAutoSystemClick": "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
	"themeToggle.themeModeLightClick": "Modalità tema: chiara. Clicca per passare alla modalità scura.",
	"themeToggle.themeModeDarkClick": "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).",
	"themeToggle.themeAuto": "Tema: Auto",
	"themeToggle.themeDark": "Tema: Scuro",
	"themeToggle.themeLight": "Tema: Chiaro"
}, ct = {
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "Fondatrice & Lead Engineer",
	"teamGrid.formerGoogleEngineerWith10": "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "Ingegnere delle prestazioni",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. In precedenza in Vercel.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "Developer Advocate",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Appassionata di esperienza sviluppatore e formazione. Relatrice a React Conf, JSConf e i18nNext.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "Sviluppatore Full-Stack",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source per Lingui.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "Analista dati",
	"teamGrid.ensuresStatisticalRigorInAll": "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "Responsabile della comunità",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.",
	"teamHeader.ourTeam": "Il nostro team",
	"teamHeader.meetThePeopleBehindI18n": "Incontra le persone dietro i18n Benchmark. Un team diversificato unito da una passione condivisa per gli ottimi strumenti di sviluppo."
}, lt = {
	"aboutHeader.methodology": "Metodologia",
	"aboutHeader.weDesignedThisBenchmarkTo": "Projetamos este benchmark para fornecer comparações justas, reproduzíveis e significativas das bibliotecas de i18n.",
	"whatWeMeasure.bundleSizeImpact": "Impacto no tamanho do bundle",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.",
	"whatWeMeasure.renderingOverhead": "Sobrecarga de renderização",
	"whatWeMeasure.howMuchExtraTimeThe": "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React — medido usando o actualDuration do React Profiler.",
	"whatWeMeasure.hydrationCost": "Custo de hidratação",
	"whatWeMeasure.duringSsrTranslationDataIs": "Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Eficácia do carregamento lento",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascada, FOUC, complexidade de cache).",
	"whatWeMeasure.localeSwitchSpeed": "Velocidade de troca de idioma",
	"whatWeMeasure.howFastTheAppCan": "Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.",
	"whatWeMeasure.whatWeMeasure": "O que medimos",
	"aboutGrid.testEnvironment": "Ambiente de Teste",
	"aboutGrid.allBenchmarksRunOn": "Todos os benchmarks são executados no mesmo hardware (M2 MacBook Pro, 16 GB de RAM), no mesmo navegador (Chromium 120 via Playwright) e nas mesmas condições de rede (4G simulado). Cada teste é repetido 50 vezes e reportamos a mediana com percentis P95/P99.",
	"aboutGrid.applicationDesign": "Design do Aplicativo",
	"aboutGrid.theBenchmarkAppHas10": "O aplicativo de benchmark tem 10 páginas com conteúdo realista — navegação, formulários, listas dinâmicas e texto estático. Cada página usa de 15 a 30 chaves de tradução para representar padrões de uso do mundo real.",
	"aboutGrid.measurementMethodology": "Metodologia de Medição",
	"aboutGrid.weUseBrowserNativeApis": "Usamos APIs nativas do navegador (Performance Timeline, Resource Timing, Layout Instability) combinadas com dados do React Profiler. Os tamanhos dos bundles são medidos pós-gzip usando source-map-explorer para maior precisão.",
	"aboutGrid.fairComparison": "Comparação Justa",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Cada biblioteca i18n é integrada seguindo sua documentação oficial e as melhores práticas. Consultamos os mantenedores quando possível para garantir a configuração ideal. O mesmo aplicativo React, a mesma configuração Vite, o mesmo deploy."
}, ut = {
	"blogList.i18nBenchmark2026Results": "Resultados do i18n Benchmark 2026",
	"blogList.march152026": "15 de março de 2026",
	"blogList.weTested12DifferentInternationalization": "Testamos 12 bibliotecas de internacionalização diferentes em 10 páginas. Aqui estão os resultados detalhados com gráficos interativos.",
	"blogList.howToReduceYourI18n": "Como reduzir seu bundle i18n em 60%",
	"blogList.march82026": "8 de março de 2026",
	"blogList.practicalStrategiesForOptimizingTranslation": "Estratégias práticas para otimizar bundles de tradução, incluindo lazy loading, divisão de código e otimizações em tempo de compilação.",
	"blogList.theStateOfInternationalizationIn": "O estado da internacionalização em 2026",
	"blogList.february282026": "28 de fevereiro de 2026",
	"blogList.anOverviewOfTheCurrent": "Uma visão geral do ecossistema i18n atual, comparando abordagens de catálogos de mensagens a soluções baseadas em compiladores.",
	"blogList.migratingFromReactI18nextTo": "Migrando do react-i18next para o Lingui",
	"blogList.february152026": "15 de fevereiro de 2026",
	"blogList.aStepByStepGuide": "Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components e i18n: o que muda?",
	"blogList.february12026": "1 de fevereiro de 2026",
	"blogList.reactServerComponentsIntroduceNew": "Os React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.",
	"blogList.benchmarkMethodologyHowWeTest": "Metodologia de Benchmark: como testamos",
	"blogList.january202026": "20 de janeiro de 2026",
	"blogList.aTransparentLookAtOur": "Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.",
	"blogList.readMore": "Leia mais →",
	"blogHeader.blog": "Blog",
	"blogHeader.insightsDeepDivesAnd": "Insights, análises aprofundadas e atualizações da comunidade de benchmarking i18n."
}, dt = {
	"openPositions.openPositions": "Vagas abertas",
	"openPositions.seniorPerformanceEngineer": "Engenheiro de Performance Sênior",
	"openPositions.fullTime": "Tempo integral",
	"openPositions.remote": "Remoto",
	"openPositions.leadBenchmarkDesignAnd": "Liderar o design e a implementação de benchmarks. É necessário conhecimento profundo dos componentes internos da V8, das APIs de desempenho do navegador e de análise estatística.",
	"openPositions.technicalWriter": "Redator Técnico",
	"openPositions.partTime": "Meio período",
	"openPositions.createAndMaintainDocumentation": "Criar e manter documentação, postagens em blogs e conteúdo educacional sobre as melhores práticas de desempenho de i18n.",
	"openPositions.frontendDeveloper": "Desenvolvedor Frontend",
	"openPositions.buildAndMaintainThe": "Construir e manter o dashboard de benchmark, ferramentas de comparação e visualizações interativas.",
	"openPositions.devOpsEngineer": "Engenheiro DevOps",
	"openPositions.designAndMaintainThe": "Projetar e manter o pipeline de CI/CD que executa benchmarks automaticamente a cada atualização de biblioteca.",
	"openPositions.applyNow": "Candidatar-se agora",
	"careersHeader.careers": "Carreiras",
	"careersHeader.joinOurMissionToMake": "Junte-se à nossa missão de tornar a web mais rápida e acessível para todos, em todos os lugares.",
	"careersBenefits.whyJoinUs": "Por que se juntar a nós?",
	"careersBenefits.remoteFirst": "Remoto primeiro",
	"careersBenefits.workFromAnywhereFully": "Trabalhe de qualquer lugar. Equipe totalmente distribuída em 6 fusos horários.",
	"careersBenefits.openSource": "Open Source",
	"careersBenefits.allOurWorkIs": "Todo o nosso trabalho é open source. Construa seu portfólio público enquanto causa impacto.",
	"careersBenefits.impactful": "Impactante",
	"careersBenefits.yourWorkDirectlyHelps": "Seu trabalho ajuda diretamente os desenvolvedores a criar aplicativos internacionalizados melhores e mais rápidos."
}, ft = {
	"contactForm.name": "Nome",
	"contactForm.email": "E-mail",
	"contactForm.subject": "Assunto",
	"contactForm.message": "Mensagem",
	"contactForm.sendMessage": "Enviar Mensagem",
	"contactForm.wellGetBackTo": "Retornaremos em até 48 horas.",
	"contactHeader.contactUs": "Contate-nos",
	"contactHeader.haveQuestionsOrWantTo": "Tem dúvidas ou quer contribuir? Gostaríamos muito de ouvir você."
}, pt = {
	"faqList.howAreTheBenchmarks": "Como os benchmarks são executados?",
	"faqList.allBenchmarksAreRun": "Todos os benchmarks são executados usando o Playwright em uma configuração de hardware consistente (M2 MacBook Pro) com condições de rede 4G simuladas. Cada teste executa 50 iterações e relatamos a mediana, e os valores P95 e P99.",
	"faqList.whatLibrariesAreCurrently": "Quais bibliotecas são testadas atualmente?",
	"faqList.weCurrentlyBenchmarkReactI18next": "Atualmente testamos react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl e Paraglide. Planejamos adicionar mais com base nas solicitações da comunidade.",
	"faqList.canIContributeA": "Posso contribuir com uma nova integração de biblioteca?",
	"faqList.absolutelyWeWelcomeCommunity": "Com certeza! Aceitamos contribuições da comunidade. Faça um fork do repositório, adicione a integração da sua biblioteca seguindo o nosso modelo e envie um pull request.",
	"faqList.howOftenAreResults": "Com que frequência os resultados são atualizados?",
	"faqList.benchmarksRunAutomaticallyVia": "Os benchmarks são executados automaticamente via CI a cada atualização de dependência e semanalmente no branch main. Os resultados são publicados no dashboard em até 24 horas.",
	"faqList.areTheResultsStatistically": "Os resultados são estatisticamente significativos?",
	"faqList.yesWeUseThe": "Sim. Usamos o teste U de Mann-Whitney com um nível de significância de 0,05 para comparar distribuições. Também relatamos intervalos de confiança e tamanhos de efeito.",
	"faq-header1.frequentlyAskedQuestions": "Perguntas Frequentes",
	"faq-header1.everythingYouNeedToKnow": "Tudo o que você precisa saber sobre o projeto i18n Benchmark."
}, mt = {
	"understandingImpact.understandingTheImpact": "Entendendo o impacto",
	"understandingImpact.whyASingleLargeJson": "Por que um único JSON grande pode prejudicar o desempenho",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:",
	"understandingImpact.theJsonMustBeParsed": "O JSON deve ser analisado em cada carga de página — bloqueando a thread principal.",
	"understandingImpact.contextBasedArchitecturesCanCause": "As arquiteturas baseadas no contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.",
	"understandingImpact.duringServerSideRenderingThe": "Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser descarregado e hidratado.",
	"understandingImpact.theTradeOffsOfDynamic": "As compensações do carregamento dinâmico",
	"understandingImpact.splittingTranslationsIntoPerRoute": "Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:",
	"understandingImpact.waterfallRequests": "Pedidos em cascata:",
	"understandingImpact.flashOfUntranslatedContentFouc": "Flash de conteúdo não traduzido (FOUC):",
	"understandingImpact.cacheInvalidation": "Invalidação da cache:",
	"understandingImpact.whatThisBenchmarkMeasures": "O que este benchmark mede",
	"understandingImpact.thisTestAppProvidesA": "Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto a analisar e renderizar conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento preguiçoso. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.",
	"whyItMatters.whyTheseMetricsMatter": "Por que essas métricas são importantes",
	"whyItMatters.bundleSize": "Tamanho do Bundle",
	"whyItMatters.theBundleIsTheData": "O bundle representa os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução mesmos.",
	"whyItMatters.renderingHydration": "Renderização e Hidratação",
	"whyItMatters.connectingALargeJson": "Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode desencadear novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).",
	"whyItMatters.dynamicLoading": "Carregamento Dinâmico",
	"whyItMatters.loadingAllTranslationsUpfront": "Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento preguiçoso introduz suas próprias compensações: solicitações em cascada, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.",
	"resultsTable.sampleResults": "Resultados de amostra",
	"resultsTable.bundleSize": "Tamanho do bundle",
	"resultsTable.lookupTime": "Tempo de consulta",
	"resultsTable.lazyLoading": "Carregamento lento",
	"hero.aTestApplicationDesignedTo": "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.",
	"hero.viewResults": "Ver Resultados"
}, ht = {
	"pricingTiers.starterTier": "Starter",
	"pricingTiers.starterPrice": "R$0",
	"pricingTiers.forever": "para sempre",
	"pricingTiers.runsPerDay": "5 execuções de benchmark/dia",
	"pricingTiers.libraries3": "3 bibliotecas",
	"pricingTiers.communitySupport": "Suporte da comunidade",
	"pricingTiers.publicResults": "Resultados públicos",
	"pricingTiers.getStarted": "Começar",
	"pricingTiers.proTier": "Pro",
	"pricingTiers.proPrice": "R$29",
	"pricingTiers.perMonth": "/mês",
	"pricingTiers.unlimitedRuns": "Execuções ilimitadas",
	"pricingTiers.allLibraries": "Todas as bibliotecas",
	"pricingTiers.prioritySupport": "Suporte prioritário",
	"pricingTiers.privateResults": "Resultados privados",
	"pricingTiers.ciIntegration": "Integração CI",
	"pricingTiers.historicalData": "Dados históricos",
	"pricingTiers.enterpriseTier": "Enterprise",
	"pricingTiers.custom": "Personalizado",
	"pricingTiers.everythingInPro": "Tudo do plano Pro",
	"pricingTiers.onPremiseOption": "Opção on-premise",
	"pricingTiers.ssoSaml": "SSO e SAML",
	"pricingTiers.dedicatedAccountManager": "Gerente de conta dedicado",
	"pricingTiers.customSLAs": "SLAs personalizados",
	"pricingTiers.auditLogs": "Logs de auditoria",
	"pricingTiers.trainingSessions": "Sessões de treinamento",
	"pricingTiers.contactSales": "Contatar vendas",
	"pricingHeader.pricing": "Preços",
	"pricingHeader.transparentPricingForEvery": "Preços transparentes para todos"
}, gt = {
	"productsGrid.benchmarkDashboard": "Dashboard de Benchmark",
	"productsGrid.interactiveChartsAndTables": "Gráficos e tabelas interativos comparando bibliotecas i18n em tamanho de bundle, tempo de renderização e custo de hidratação.",
	"productsGrid.bundleAnalyzer": "Analisador de Bundle",
	"productsGrid.uploadYourBuildOutput": "Faça o upload da sua saída de build e obtenha um detalhamento de quanto do seu bundle é overhead de i18n.",
	"productsGrid.migrationAssistant": "Assistente de Migração",
	"productsGrid.automatedCodemodsAndGuides": "Codemods e guias automatizados para migração entre bibliotecas i18n com o mínimo de interrupção.",
	"productsGrid.performanceMonitor": "Monitor de Performance",
	"productsGrid.continuousPerformanceTrackingFor": "Acompanhamento contínuo de desempenho para sua implementação de i18n. Receba alertas quando o carregamento das traduções piorar.",
	"productsGrid.learnMore": "Saiba Mais",
	"productsHeader.products": "Produtos",
	"productsHeader.toolsAndServicesTo": "Ferramentas e serviços para ajudá-lo a otimizar sua estratégia de internacionalização."
}, _t = {
	"route.oopsPageNotFound": "Ops! Página não encontrada",
	"route.returnToHome": "Voltar para o Início",
	"route.couldNotMeasureHydrationDuration": "Não foi possível medir a duração da hidratação:"
}, vt = {
	"preferencesSection.preferences": "Preferências",
	"preferencesSection.emailNotifications": "Notificações por e-mail",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Receber relatórios semanais de benchmarks",
	"preferencesSection.darkMode": "Modo Escuro",
	"preferencesSection.useDarkColorScheme": "Usar esquema de cores escuras",
	"preferencesSection.defaultLanguage": "Idioma Padrão",
	"settingsHeader.settings": "Configurações",
	"settingsHeader.manageYourAccountPreferences": "Gerencie as suas preferências e configuração da conta.",
	"settingsFooter.cancel": "Cancelar",
	"settingsFooter.saveChanges": "Guardar alterações",
	"apiAccessSection.apiAccess": "Acesso à API",
	"apiAccessSection.apiKey": "Chave da API",
	"apiAccessSection.useThisKeyTo": "Utilize esta chave para aceder à API de benchmarking de forma programática.",
	"apiAccessSection.copy": "Copiar",
	"profileSection.profile": "Perfil",
	"profileSection.displayName": "Nome de exibição",
	"profileSection.email": "E-Mail"
}, yt = {
	"header.home": "Início",
	"header.methodology": "Metodologia",
	"header.mockPages": "Páginas de teste",
	"header.products": "Produtos",
	"header.pricing": "Preços",
	"header.team": "Equipe",
	"header.blog": "Blog",
	"header.careers": "Carreiras",
	"header.faq": "FAQ",
	"header.contact": "Contato",
	"header.settings": "Configurações",
	"header.goToGithub": "Ir para GitHub",
	"footer.resources": "Recursos",
	"footer.contact": "Contato",
	"footer.github": "GitHub",
	"footer.methodology": "Metodologia",
	"footer.contributing": "Contribuir",
	"footer.builtWith": "i18n Benchmark — Projeto de código aberto. Construído com React, Vite e TanStack Router.",
	"footer.anOpenSourceTestApplication": "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.",
	"mockBanner.text": "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada com qualquer negócio ou serviço real.",
	"themeToggle.themeModeAutoSystemClick": "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
	"themeToggle.themeModeLightClick": "Modo de tema: claro. Clique para mudar para o modo escuro.",
	"themeToggle.themeModeDarkClick": "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).",
	"themeToggle.themeAuto": "Tema: Auto",
	"themeToggle.themeDark": "Tema: Escuro",
	"themeToggle.themeLight": "Tema: Claro"
}, bt = {
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "Fundadora e Engenheira Líder",
	"teamGrid.formerGoogleEngineerWith10": "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "Engenheiro de Performance",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "Advogado de Desenvolvedores",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "Desenvolvedor Full-Stack",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Colaborador de código aberto do Lingui.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "Analista de Dados",
	"teamGrid.ensuresStatisticalRigorInAll": "Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em Estatística Aplicada pelo MIT.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "Gerente de Comunidade",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.",
	"teamHeader.ourTeam": "Nossa Equipe",
	"teamHeader.meetThePeopleBehindI18n": "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor."
}, xt = {
	"aboutHeader.methodology": "方法学",
	"aboutHeader.weDesignedThisBenchmarkTo": "我们设计这个基准是为了提供公平、可重现和有意义的 i18n 库比较。",
	"whatWeMeasure.bundleSizeImpact": "包大小影响",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络上的下载时间。",
	"whatWeMeasure.renderingOverhead": "渲染开销",
	"whatWeMeasure.howMuchExtraTimeThe": "库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树中不必要的重新渲染。",
	"whatWeMeasure.hydrationCost": "注水成本",
	"whatWeMeasure.duringSsrTranslationDataIs": "在 SSR 期间，翻译数据被序列化为 HTML。大型词典会增加 HTML 负载并减慢注水速度——即页面变得可交互的时刻。",
	"whatWeMeasure.lazyLoadingEffectiveness": "延迟加载有效性",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "按路线或命名空间拆分翻译是否真的能减少初始负载，以及它引入了哪些权衡（瀑布请求、FOUC、缓存复杂性）。",
	"whatWeMeasure.localeSwitchSpeed": "本地语言切换速度",
	"whatWeMeasure.howFastTheAppCan": "应用程序在运行时从一种语言切换到另一种语言的速度——包括获取新翻译、重新渲染组件和更新 DOM。",
	"whatWeMeasure.whatWeMeasure": "我们测量什么",
	"aboutGrid.testEnvironment": "测试环境",
	"aboutGrid.allBenchmarksRunOn": "所有基准测试都在相同的硬件（M2 MacBook Pro, 16 GB RAM）、相同的浏览器（通过 Playwright 运行 Chromium 120）和相同的网络条件（模拟 4G）下运行。每项测试重复 50 次，我们报告 P95/P99 百分位数的平均值。",
	"aboutGrid.applicationDesign": "应用设计",
	"aboutGrid.theBenchmarkAppHas10": "该基准测试应用有 10 个页面，包含现实内容 —— 导航、表单、动态列表和静态文本。每个页面使用 15-30 个翻译键，以代表真实世界的使用模式。",
	"aboutGrid.measurementMethodology": "测量方法学",
	"aboutGrid.weUseBrowserNativeApis": "我们使用浏览器原生的 API（Performance Timeline, Resource Timing, Layout Instability）结合 React Profiler 数据。包大小在 gzip 后使用 source-map-explorer 测量以确保准确性。",
	"aboutGrid.fairComparison": "公平比较",
	"aboutGrid.eachI18nLibraryIsIntegrated": "每个 i18n 库都按照其官方文档和最佳实践进行集成。我们尽可能咨询维护者以确保最佳配置。相同的 React 应用，相同的 Vite 配置，相同的部署。"
}, St = {
	"blogList.i18nBenchmark2026Results": "i18n 基准测试 2026 结果",
	"blogList.march152026": "2026年3月15日",
	"blogList.weTested12DifferentInternationalization": "我们针对 10 个页面测试了 12 种不同的国际化库。以下是带有交互式图表的详细结果。",
	"blogList.howToReduceYourI18n": "如何将 i18n 包大小减少 60%",
	"blogList.march82026": "2026年3月8日",
	"blogList.practicalStrategiesForOptimizingTranslation": "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。",
	"blogList.theStateOfInternationalizationIn": "React 国际化的现状",
	"blogList.february282026": "2026年2月28日",
	"blogList.anOverviewOfTheCurrent": "React 当前 i18n 生态系统概览，涵盖趋势、新兴模式和社区偏好。",
	"blogList.migratingFromReactI18nextTo": "从 react-i18next 迁移到 Lingui",
	"blogList.february152026": "2026年2月15日",
	"blogList.aStepByStepGuide": "从 react-i18next 迁移拥有 50,000 个翻译键的生产应用程序到 Lingui 的逐步指南。",
	"blogList.serverComponentsAndI18nWhat": "服务器组件和 i18n：有什么变化？",
	"blogList.february12026": "2026年2月1日",
	"blogList.reactServerComponentsIntroduceNew": "React 服务器组件为国际化引入了新模式。我们探讨了其影响和最佳实践。",
	"blogList.benchmarkMethodologyHowWeTest": "基准测试方法学：我们如何测试",
	"blogList.january202026": "2026年1月20日",
	"blogList.aTransparentLookAtOur": "透明地了解我们的基准测试方法，包括测试环境、统计方法和可重现性。",
	"blogList.readMore": "阅读更多 →",
	"blogHeader.blog": "博客",
	"blogHeader.insightsDeepDivesAnd": "来自 i18n 基准测试社区的见解、深入探讨和更新。"
}, Ct = {
	"openPositions.openPositions": "开放职位",
	"openPositions.seniorPerformanceEngineer": "高级性能工程师",
	"openPositions.fullTime": "全职",
	"openPositions.remote": "远程",
	"openPositions.leadBenchmarkDesignAnd": "领导基准设计和实施。需要深入了解 V8 内部、浏览器性能 API 和统计分析。",
	"openPositions.technicalWriter": "技术文档工程师",
	"openPositions.partTime": "兼职",
	"openPositions.createAndMaintainDocumentation": "创建并维护有关 i18n 性能最佳实践的文档、博客文章和教育内容。",
	"openPositions.frontendDeveloper": "前端开发人员",
	"openPositions.buildAndMaintainThe": "构建并维护基准仪表板、比较工具和交互式可视化效果。",
	"openPositions.devOpsEngineer": "运维工程师",
	"openPositions.designAndMaintainThe": "设计并维护在每次库更新时自动运行基准测试的 CI/CD 流水线。",
	"openPositions.applyNow": "立即申请",
	"careersHeader.careers": "职业",
	"careersHeader.joinOurMissionToMake": "加入我们的使命，让网络对世界各地的每一个人都更快、更方便。",
	"careersBenefits.whyJoinUs": "为什么加入我们？",
	"careersBenefits.remoteFirst": "远程优先",
	"careersBenefits.workFromAnywhereFully": "在任何地方工作。完全分布在 6 个时区的团队。",
	"careersBenefits.openSource": "开源",
	"careersBenefits.allOurWorkIs": "我们所有的工作都是开源的。在产生影响的同时建立你的公共投资组合。",
	"careersBenefits.impactful": "有影响力的",
	"careersBenefits.yourWorkDirectlyHelps": "你的工作直接帮助开发人员构建更好、更快的国际化应用程序。"
}, wt = {
	"contactForm.name": "姓名",
	"contactForm.email": "电子邮件",
	"contactForm.subject": "主题",
	"contactForm.message": "留言",
	"contactForm.sendMessage": "发送消息",
	"contactForm.wellGetBackTo": "我们将在 48 小时内回复您。",
	"contactHeader.contactUs": "联系我们",
	"contactHeader.haveQuestionsOrWantTo": "有疑问或想做出贡献？我们很期待听到你的声音。"
}, Tt = {
	"faqList.howAreTheBenchmarks": "基准测试是如何运行的？",
	"faqList.allBenchmarksAreRun": "所有的基准测试都是使用 Playwright 在一致的硬件设置（M2 MacBook Pro）上运行的，并模拟了 4G 网络条件。每个测试运行 50 次迭代，我们报告中位数、P95 和 P99 值。",
	"faqList.whatLibrariesAreCurrently": "目前测试了哪些库？",
	"faqList.weCurrentlyBenchmarkReactI18next": "我们目前对 react-i18next、react-intl (FormatJS)、LinguiJS、typesafe-i18n、next-intl 和 Paraglide 进行基准测试。我们计划根据社区要求增加更多。",
	"faqList.canIContributeA": "我可以贡献一个新的库集成吗？",
	"faqList.absolutelyWeWelcomeCommunity": "当然可以！我们欢迎社区做出贡献。Fork 该仓库，按照我们的模板添加您的库集成，并提交拉取请求。",
	"faqList.howOftenAreResults": "结果多久更新一次？",
	"faqList.benchmarksRunAutomaticallyVia": "基准测试在每次依赖项更新时通过 CI 自动运行，并每周在主分支上运行。结果会在 24 小时内发布到仪表板上。",
	"faqList.areTheResultsStatistically": "结果是否具有统计学意义？",
	"faqList.yesWeUseThe": "是的。我们使用 Mann-Whitney U 检验（显着性水平为 0.05）来比较分布。我们还报告置信区间和效应大小。",
	"faq-header1.frequentlyAskedQuestions": "常见问题",
	"faq-header1.everythingYouNeedToKnow": "关于 i18n 基准测试项目，你需要知道的一切。"
}, Et = {
	"understandingImpact.understandingTheImpact": "理解影响",
	"understandingImpact.whyASingleLargeJson": "为什么单个大型 JSON 会损害性能",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当这个对象很大（数千个键）时，每个使用翻译的组件都会持有对整个字典的引用。这意味着：",
	"understandingImpact.theJsonMustBeParsed": "JSON 必须在每次页面加载时进行解析 —— 这会阻塞主线程。",
	"understandingImpact.contextBasedArchitecturesCanCause": "当本地化发生变化时，基于上下文的架构可能会导致级联重新渲染，因为即使某些组件的特定键没有变化，每个消费者也会收到通知。",
	"understandingImpact.duringServerSideRenderingThe": "在服务器端渲染期间，整个字典会被序列化到 HTML 负载中，从而增加了必须下载和注水的文件大小。",
	"understandingImpact.theTradeOffsOfDynamic": "动态加载的权衡",
	"understandingImpact.splittingTranslationsIntoPerRoute": "将翻译拆分为按路由或按命名空间的块可以显著减少初始负载。但它引入了新的挑战：",
	"understandingImpact.waterfallRequests": "瀑布请求：",
	"understandingImpact.flashOfUntranslatedContentFouc": "未翻译内容闪烁 (FOUC)：",
	"understandingImpact.cacheInvalidation": "缓存失效：",
	"understandingImpact.whatThisBenchmarkMeasures": "此基准测试测量什么",
	"understandingImpact.thisTestAppProvidesA": "此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个维度上比较 i18n 库：它们为 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们的代码拆分和懒加载策略的有效性。每个库都集成到同一个应用中，因此结果具有直接可比性。",
	"whyItMatters.whyTheseMetricsMatter": "为什么这些指标很重要",
	"whyItMatters.bundleSize": "包大小",
	"whyItMatters.theBundleIsTheData": "Bundle 是运送给全球每一位用户的数据。更大的 Bundle 意味着更长的下载时间——尤其是在许多地区常见的缓慢 3G 连接上。i18n 库的重量差异巨大：从几 KB 到数十 KB 的运行时代码，再加上翻译文件本身。",
	"whyItMatters.renderingHydration": "渲染与注水",
	"whyItMatters.connectingALargeJson": "将大型 JSON 字典连接到每个组件会创建一个隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加庞大的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。",
	"whyItMatters.dynamicLoading": "动态加载",
	"whyItMatters.loadingAllTranslationsUpfront": "预先加载所有翻译会使初始有效载荷过载。动态（懒）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，懒加载也会带来自身的权衡：瀑布请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。",
	"resultsTable.sampleResults": "样本结果",
	"resultsTable.bundleSize": "包大小",
	"resultsTable.lookupTime": "查询时间",
	"resultsTable.lazyLoading": "延迟加载",
	"hero.aTestApplicationDesignedTo": "一个测试应用程序，旨在衡量国际化库对包大小、加载性能和渲染反应性的实际影响。",
	"hero.viewResults": "查看结果"
}, Dt = {
	"pricingTiers.starterTier": "入门版",
	"pricingTiers.starterPrice": "¥0",
	"pricingTiers.forever": "永久",
	"pricingTiers.runsPerDay": "每天 5 次基准测试",
	"pricingTiers.libraries3": "3 个库",
	"pricingTiers.communitySupport": "社区支持",
	"pricingTiers.publicResults": "公开结果",
	"pricingTiers.getStarted": "开始使用",
	"pricingTiers.proTier": "专业版",
	"pricingTiers.proPrice": "¥29",
	"pricingTiers.perMonth": "/月",
	"pricingTiers.unlimitedRuns": "不限次数运行",
	"pricingTiers.allLibraries": "所有库",
	"pricingTiers.prioritySupport": "优先支持",
	"pricingTiers.privateResults": "私有结果",
	"pricingTiers.ciIntegration": "CI 集成",
	"pricingTiers.historicalData": "历史数据",
	"pricingTiers.enterpriseTier": "企业版",
	"pricingTiers.custom": "定制",
	"pricingTiers.everythingInPro": "包含专业版所有功能",
	"pricingTiers.onPremiseOption": "本地部署选项",
	"pricingTiers.ssoSaml": "SSO 和 SAML",
	"pricingTiers.dedicatedAccountManager": "专属客户经理",
	"pricingTiers.customSLAs": "定制 SLA",
	"pricingTiers.auditLogs": "审计日志",
	"pricingTiers.trainingSessions": "培训课程",
	"pricingTiers.contactSales": "联系销售",
	"pricingHeader.pricing": "定价",
	"pricingHeader.transparentPricingForEvery": "面向所有人的透明定价"
}, Ot = {
	"productsGrid.benchmarkDashboard": "基准测试仪表板",
	"productsGrid.interactiveChartsAndTables": "交互式图表和表格，对比了不同 i18n 库在包大小、渲染时间和注水成本方面的表现。",
	"productsGrid.bundleAnalyzer": "包分析器",
	"productsGrid.uploadYourBuildOutput": "上传您的构建输出，获取关于 i18n 开销在您的包中占比的详细分析。",
	"productsGrid.migrationAssistant": "迁移助手",
	"productsGrid.automatedCodemodsAndGuides": "自动化代码修改工具和指南，助您在 i18n 库之间平滑迁移，最大程度减少中断。",
	"productsGrid.performanceMonitor": "性能监控器",
	"productsGrid.continuousPerformanceTrackingFor": "对您的 i18n 实现进行持续的性能跟踪。当翻译加载速度下降时获得警报。",
	"productsGrid.learnMore": "了解更多",
	"productsHeader.products": "产品",
	"productsHeader.toolsAndServicesTo": "帮助您优化国际化战略的工具和服务。"
}, kt = {
	"route.oopsPageNotFound": "糟糕！找不到页面",
	"route.returnToHome": "返回首页",
	"route.couldNotMeasureHydrationDuration": "无法测量注水时长："
}, At = {
	"preferencesSection.preferences": "偏好设置",
	"preferencesSection.emailNotifications": "邮件通知",
	"preferencesSection.receiveWeeklyBenchmarkReports": "接收每周基准测试报告",
	"preferencesSection.darkMode": "深色模式",
	"preferencesSection.useDarkColorScheme": "使用深色配色方案",
	"preferencesSection.defaultLanguage": "默认语言",
	"settingsHeader.settings": "设置",
	"settingsHeader.manageYourAccountPreferences": "管理您的账户偏好和配置。",
	"settingsFooter.cancel": "取消",
	"settingsFooter.saveChanges": "保存更改",
	"apiAccessSection.apiAccess": "API 访问",
	"apiAccessSection.apiKey": "API 密钥",
	"apiAccessSection.useThisKeyTo": "使用此密钥以编程方式访问基准测试 API。",
	"apiAccessSection.copy": "复制",
	"profileSection.profile": "个人资料",
	"profileSection.displayName": "显示名称",
	"profileSection.email": "电子邮件"
}, jt = {
	"header.home": "首页",
	"header.methodology": "方法学",
	"header.mockPages": "模拟页面",
	"header.products": "产品",
	"header.pricing": "价格",
	"header.team": "团队",
	"header.blog": "博客",
	"header.careers": "职业",
	"header.faq": "常见问题",
	"header.contact": "联系我们",
	"header.settings": "设置",
	"header.goToGithub": "前往 GitHub",
	"footer.resources": "资源",
	"footer.contact": "联系",
	"footer.github": "GitHub",
	"footer.methodology": "方法学",
	"footer.contributing": "贡献",
	"footer.builtWith": "i18n Benchmark — 开源项目。使用 React, Vite 和 TanStack Router 构建。",
	"footer.anOpenSourceTestApplication": "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。",
	"mockBanner.text": "⚠️ 此页面仅包含用于基准测试的模拟数据。它与任何真实的业务或服务无关。",
	"themeToggle.themeModeAutoSystemClick": "主题模式：自动（系统）。点击切换到浅色模式。",
	"themeToggle.themeModeLightClick": "主题模式：浅色。点击切换到深色模式。",
	"themeToggle.themeModeDarkClick": "主题模式：深色。点击切换到自动（系统）模式。",
	"themeToggle.themeAuto": "主题：自动",
	"themeToggle.themeDark": "主题：深色",
	"themeToggle.themeLight": "主题：浅色"
}, Mt = {
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "创始人兼首席工程师",
	"teamGrid.formerGoogleEngineerWith10": "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "性能工程师",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "专注于 JavaScript 性能优化和基准测试方法。曾任职于 Vercel。",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "开发者倡导者",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "热爱开发者体验和教育。React Conf、JSConf 和 i18nNext 的演讲者。",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "全栈开发人员",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "维护基准测试基础架构和 CI/CD 流水线。Lingui 的开源贡献者。",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "数据分析师",
	"teamGrid.ensuresStatisticalRigorInAll": "确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "社区经理",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。",
	"teamHeader.ourTeam": "我们的团队",
	"teamHeader.meetThePeopleBehindI18n": "认识 i18n 基准测试背后的团队。一支多元化的团队，因为对优秀开发人员工具的共同热情而团结在一起。"
}, Nt = {
	"aboutHeader.methodology": "メソッド",
	"aboutHeader.weDesignedThisBenchmarkTo": "私たちは、i18nライブラリを公平、再現可能、そして有意義に比較できるようにこのベンチマークを設計しました。",
	"whatWeMeasure.bundleSizeImpact": "バンドルサイズへの影響",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "i18nライブラリとその翻訳ファイルが含まれているときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。",
	"whatWeMeasure.renderingOverhead": "レンダリングのオーバーヘッド",
	"whatWeMeasure.howMuchExtraTimeThe": "ライブラリがReactのレンダリングサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。",
	"whatWeMeasure.hydrationCost": "ハイドレーションのコスト",
	"whatWeMeasure.duringSsrTranslationDataIs": "SSR中、翻訳データはHTMLにシリアル化されます。大きな辞書はHTMLペイロードを増加させ、ハイドレーション（ページがインタラクティブになる瞬間）を遅らせます。",
	"whatWeMeasure.lazyLoadingEffectiveness": "遅延読み込みの有効性",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "ルートまたは名前空間ごとに翻訳を分割することで、初期負荷が実際に軽減されるか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が生じるかがわかります。",
	"whatWeMeasure.localeSwitchSpeed": "ロケール切り替え速度",
	"whatWeMeasure.howFastTheAppCan": "実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるか（新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新を含む）。",
	"whatWeMeasure.whatWeMeasure": "測定するもの",
	"aboutGrid.testEnvironment": "テスト環境",
	"aboutGrid.allBenchmarksRunOn": "すべてのベンチマークは、同じハードウェア（M2 MacBook Pro、16 GB RAM）、同じブラウザ（Playwright経由のChromium 120）、および同じネットワーク条件（シミュレートされた4G）で実行されます。各テストは50回繰り返され、P95/P99パーセンタイルの中央値を報告します。",
	"aboutGrid.applicationDesign": "アプリケーション設計",
	"aboutGrid.theBenchmarkAppHas10": "ベンチマークアプリには、ナビゲーション、フォーム、動的リスト、静的テキストなど、現実的なコンテンツを含む10ページがあります。各ページは、実際の使用パターンを表すために15〜30個の翻訳キーを使用しています。",
	"aboutGrid.measurementMethodology": "測定メソッド",
	"aboutGrid.weUseBrowserNativeApis": "Performance Timeline、Resource Timing、Layout InstabilityなどのブラウザネイティブAPIと、React Profilerデータを組み合わせて使用します。バンドルサイズは、正確を期すためにsource-map-explorerを使用してgzip後に測定されます。",
	"aboutGrid.fairComparison": "公平な比較",
	"aboutGrid.eachI18nLibraryIsIntegrated": "各i18nライブラリは、公式ドキュメントとベストプラクティスに従って統合されています。最適な構成を確保するために、可能な場合はメンテナに相談しています。同じReactアプリ、同じVite設定、同じデプロイメント。"
}, Pt = {
	"blogList.i18nBenchmark2026Results": "i18nベンチマーク2026の結果",
	"blogList.march152026": "2026年3月15日",
	"blogList.weTested12DifferentInternationalization": "10ページにわたって12種類の国際化ライブラリをテストしました。インタラクティブなチャートを含む詳細な結果はこちらです。",
	"blogList.howToReduceYourI18n": "i18nバンドルを60%削減する方法",
	"blogList.march82026": "2026年3月8日",
	"blogList.practicalStrategiesForOptimizingTranslation": "翻訳ファイルの読み込みの最適化、未使用ロケールのツリーシェイキング、ビルド時のコンパイルの活用など、実践的な戦略。",
	"blogList.theStateOfInternationalizationIn": "2026年における国際化の現状",
	"blogList.february282026": "2026年2月28日",
	"blogList.anOverviewOfTheCurrent": "メッセージカタログからコンパイラベースのソリューションまで、現在のアプローチを比較したi18nエコシステムの概要。",
	"blogList.migratingFromReactI18nextTo": "react-i18nextからLinguiへの移行",
	"blogList.february152026": "2026年2月15日",
	"blogList.aStepByStepGuide": "5万個の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。",
	"blogList.serverComponentsAndI18nWhat": "Server Componentsとi18n：何が変わるのか？",
	"blogList.february12026": "2026年2月1日",
	"blogList.reactServerComponentsIntroduceNew": "React Server Componentsは国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。",
	"blogList.benchmarkMethodologyHowWeTest": "ベンチマーク手法：どのようにテストするか",
	"blogList.january202026": "2026年1月20日",
	"blogList.aTransparentLookAtOur": "テスト環境、統計手法、再現性を含む、私たちのベンチマーク手法の透明な公開。",
	"blogList.readMore": "続きを読む →",
	"blogHeader.blog": "ブログ",
	"blogHeader.insightsDeepDivesAnd": "i18nベンチマークコミュニティからの洞察、詳細な分析、および最新情報。"
}, Ft = {
	"openPositions.openPositions": "募集中の職種",
	"openPositions.seniorPerformanceEngineer": "シニアパフォーマンスエンジニア",
	"openPositions.fullTime": "正社員",
	"openPositions.remote": "リモート",
	"openPositions.leadBenchmarkDesignAnd": "ベンチマークの設計と実装をリード。V8の内部構造、ブラウザのパフォーマンスAPI、および統計分析に関する深い知識が必要です。",
	"openPositions.technicalWriter": "テクニカルライター",
	"openPositions.partTime": "パートタイム",
	"openPositions.createAndMaintainDocumentation": "i18nパフォーマンスのベストプラクティスに関するドキュメント、ブログ記事、教育コンテンツを作成および維持管理します。",
	"openPositions.frontendDeveloper": "フロントエンドデベロッパー",
	"openPositions.buildAndMaintainThe": "ベンチマークダッシュボード、比較ツール、インタラクティブな視覚化を構築および維持管理します。",
	"openPositions.devOpsEngineer": "DevOpsエンジニア",
	"openPositions.designAndMaintainThe": "ライブラリの更新ごとにベンチマークを自動的に実行するCI/CDパイプラインを設計および維持管理します。",
	"openPositions.applyNow": "今すぐ応募",
	"careersHeader.careers": "採用",
	"careersHeader.joinOurMissionToMake": "世界中のすべての人にとって、ウェブをより速く、よりアクセスしやすくするという私たちのミッションに参加してください。",
	"careersBenefits.whyJoinUs": "なぜ参加するのか？",
	"careersBenefits.remoteFirst": "リモートファースト",
	"careersBenefits.workFromAnywhereFully": "どこからでも仕事ができます。6つのタイムゾーンにまたがる完全分散型チーム。",
	"careersBenefits.openSource": "オープンソース",
	"careersBenefits.allOurWorkIs": "私たちの仕事はすべてオープンソースです。影響を与えながら、公開ポートフォリオを構築してください。",
	"careersBenefits.impactful": "インパクトがある",
	"careersBenefits.yourWorkDirectlyHelps": "あなたの仕事は、開発者がより良く、より速い国際化アプリを構築するのを直接助けます。"
}, It = {
	"contactForm.name": "お名前",
	"contactForm.email": "メールアドレス",
	"contactForm.subject": "件名",
	"contactForm.message": "メッセージ",
	"contactForm.sendMessage": "メッセージを送信",
	"contactForm.wellGetBackTo": "48時間以内に返信いたします。",
	"contactHeader.contactUs": "お問い合わせ",
	"contactHeader.haveQuestionsOrWantTo": "質問がある、または貢献したいですか？ぜひご連絡ください。"
}, Lt = {
	"faqList.howAreTheBenchmarks": "ベンチマークはどのように実行されますか？",
	"faqList.allBenchmarksAreRun": "すべてのベンチマークは、Playwrightを使用して、一貫したハードウェア（M2 MacBook Pro）上でシミュレートされた4Gネットワーク条件で実行されます。各テストは50回繰り返され、中央値、P95、およびP99の値を報告します。",
	"faqList.whatLibrariesAreCurrently": "現在テストされているライブラリは何ですか？",
	"faqList.weCurrentlyBenchmarkReactI18next": "現在はreact-i18next、react-intl (FormatJS)、LinguiJS、typesafe-i18n、next-intl、Paraglideをベンチマークしています。コミュニティの要望に応じてさらに追加する予定です。",
	"faqList.canIContributeA": "新しいライブラリの統合を提案できますか？",
	"faqList.absolutelyWeWelcomeCommunity": "もちろんです！コミュニティからの貢献を歓迎します。リポジトリをフォークし、テンプレートに従ってライブラリの統合を追加し、プルリクエストを送信してください。",
	"faqList.howOftenAreResults": "結果はどのくらいの頻度で更新されますか？",
	"faqList.benchmarksRunAutomaticallyVia": "ベンチマークは、依存関係の更新ごとにCIを介して自動的に実行され、さらにメインブランチで毎週実行されます。結果は24時間以内にダッシュボードに公開されます。",
	"faqList.areTheResultsStatistically": "結果は統計的に有意ですか？",
	"faqList.yesWeUseThe": "はい。分布を比較するために、有意水準0.05のマン・ホイットニーのU検定を使用します。また、信頼区間と効果量も報告します。",
	"faq-header1.frequentlyAskedQuestions": "よくある質問",
	"faq-header1.everythingYouNeedToKnow": "i18nベンチマークプロジェクトについて知っておくべきことのすべて。"
}, Rt = {
	"understandingImpact.understandingTheImpact": "影響を理解する",
	"understandingImpact.whyASingleLargeJson": "なぜ1つの大きなJSONがパフォーマンスを低下させるのか",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "多くのi18nライブラリは、Reactコンテキストを介して提供される1つのJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい（数千のキーがある）場合、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持します。これは以下のことを意味します：",
	"understandingImpact.theJsonMustBeParsed": "JSONはページ読み込みのたびに解析される必要があり、メインスレッドをブロックします。",
	"understandingImpact.contextBasedArchitecturesCanCause": "コンテキストベースのアーキテクチャでは、ロケールが変更されたときにカスケード的な再レンダリングが発生する可能性があります。これは、特定のキーが変更されていなくても、すべてのコンシューマーに通知されるためです。",
	"understandingImpact.duringServerSideRenderingThe": "サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。",
	"understandingImpact.theTradeOffsOfDynamic": "動的読み込みのトレードオフ",
	"understandingImpact.splittingTranslationsIntoPerRoute": "ルートごとまたは名前空間ごとのチャンクに翻訳を分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：",
	"understandingImpact.waterfallRequests": "ウォーターフォールリクエスト：",
	"understandingImpact.flashOfUntranslatedContentFouc": "未翻訳コンテンツのフラッシュ（FOUC）：",
	"understandingImpact.cacheInvalidation": "キャッシュの無効化：",
	"understandingImpact.whatThisBenchmarkMeasures": "このベンチマークが測定するもの",
	"understandingImpact.thisTestAppProvidesA": "このテストアプリは、10ページの現実的なコンテンツを含む制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツの解析とレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。",
	"whyItMatters.whyTheseMetricsMatter": "なぜこれらの指標が重要なのか",
	"whyItMatters.bundleSize": "バンドルサイズ",
	"whyItMatters.theBundleIsTheData": "バンドルは世界中のすべてのユーザーに送信されるデータです。バンドルが大きいほど、ダウンロード時間が長くなります。特に多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリはその重量において、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体まで大きく異なります。",
	"whyItMatters.renderingHydration": "レンダリングとハイドレーション",
	"whyItMatters.connectingALargeJson": "大きなJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体で再レンダリングを引き起こす可能性があります。SSRのハイドレーション中、巨大な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでの遅延を追加し、Time to Interactive（TTI）に直接影響します。",
	"whyItMatters.dynamicLoading": "動的読み込み",
	"whyItMatters.loadingAllTranslationsUpfront": "すべての翻訳を事前に読み込むと、初期ペイロードが過負荷になります。動的（遅延）読み込みは、ルートまたは名前空間ごとに翻訳を分割し、現在のページが必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、未翻訳コンテンツのフラッシュ、キャッシュの複雑さといった独自のトレードオフが伴います。両方の戦略を測定することが不可欠です。",
	"resultsTable.sampleResults": "サンプル結果",
	"resultsTable.bundleSize": "バンドルサイズ",
	"resultsTable.lookupTime": "検索時間",
	"resultsTable.lazyLoading": "遅延読み込み",
	"hero.aTestApplicationDesignedTo": "国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。",
	"hero.viewResults": "結果を表示"
}, zt = {
	"pricingTiers.starterTier": "スターター",
	"pricingTiers.starterPrice": "¥0",
	"pricingTiers.forever": "ずっと無料",
	"pricingTiers.runsPerDay": "1日5回のベンチマーク実行",
	"pricingTiers.libraries3": "3つのライブラリ",
	"pricingTiers.communitySupport": "コミュニティサポート",
	"pricingTiers.publicResults": "公開結果",
	"pricingTiers.getStarted": "始める",
	"pricingTiers.proTier": "Pro",
	"pricingTiers.proPrice": "¥29",
	"pricingTiers.perMonth": "/月",
	"pricingTiers.unlimitedRuns": "実行回数無制限",
	"pricingTiers.allLibraries": "すべてのライブラリ",
	"pricingTiers.prioritySupport": "優先サポート",
	"pricingTiers.privateResults": "非公開結果",
	"pricingTiers.ciIntegration": "CI連携",
	"pricingTiers.historicalData": "履歴データ",
	"pricingTiers.enterpriseTier": "Enterprise",
	"pricingTiers.custom": "カスタム",
	"pricingTiers.everythingInPro": "Proの全機能",
	"pricingTiers.onPremiseOption": "オンプレミス対応",
	"pricingTiers.ssoSaml": "SSO と SAML",
	"pricingTiers.dedicatedAccountManager": "専任アカウントマネージャー",
	"pricingTiers.customSLAs": "カスタムSLA",
	"pricingTiers.auditLogs": "監査ログ",
	"pricingTiers.trainingSessions": "トレーニングセッション",
	"pricingTiers.contactSales": "営業に問い合わせる",
	"pricingHeader.pricing": "料金",
	"pricingHeader.transparentPricingForEvery": "すべての人のための透明な料金"
}, Bt = {
	"productsGrid.benchmarkDashboard": "ベンチマークダッシュボード",
	"productsGrid.interactiveChartsAndTables": "バンドルサイズ、レンダリング時間、ハイドレーションコストにわたってi18nライブラリを比較するインタラクティブなチャートと表。",
	"productsGrid.bundleAnalyzer": "バンドルアナライザー",
	"productsGrid.uploadYourBuildOutput": "ビルド出力をアップロードして、バンドルのうちどの程度がi18nのオーバーヘッドであるかの詳細な内訳を取得します。",
	"productsGrid.migrationAssistant": "移行アシスタント",
	"productsGrid.automatedCodemodsAndGuides": "最小限の中断でi18nライブラリ間を移行するための自動コードモッドとガイド。",
	"productsGrid.performanceMonitor": "パフォーマンスモニター",
	"productsGrid.continuousPerformanceTrackingFor": "i18n実装の継続的なパフォーマンス追跡。翻訳の読み込みが低下したときにアラートを受け取ります。",
	"productsGrid.learnMore": "詳細はこちら",
	"productsHeader.products": "製品",
	"productsHeader.toolsAndServicesTo": "国際化戦略の最適化に役立つツールとサービス。"
}, Vt = {
	"route.oopsPageNotFound": "おっと！ページが見つかりません",
	"route.returnToHome": "ホームに戻る",
	"route.couldNotMeasureHydrationDuration": "ハイドレーション時間を測定できませんでした："
}, Ht = {
	"preferencesSection.preferences": "設定",
	"preferencesSection.emailNotifications": "メール通知",
	"preferencesSection.receiveWeeklyBenchmarkReports": "ベンチマーク週報を受け取る",
	"preferencesSection.darkMode": "ダークモード",
	"preferencesSection.useDarkColorScheme": "ダークカラー体系を使用する",
	"preferencesSection.defaultLanguage": "デフォルト言語",
	"settingsHeader.settings": "設定",
	"settingsHeader.manageYourAccountPreferences": "アカウントの設定と構成を管理します。",
	"settingsFooter.cancel": "キャンセル",
	"settingsFooter.saveChanges": "変更を保存",
	"apiAccessSection.apiAccess": "APIアクセス",
	"apiAccessSection.apiKey": "APIキー",
	"apiAccessSection.useThisKeyTo": "このキーを使用して、ベンチマークAPIにプログラムでアクセスします。",
	"apiAccessSection.copy": "コピー",
	"profileSection.profile": "プロフィール",
	"profileSection.displayName": "表示名",
	"profileSection.email": "メールアドレス"
}, Ut = {
	"header.home": "ホーム",
	"header.methodology": "メソッド",
	"header.mockPages": "テストページ",
	"header.products": "製品",
	"header.pricing": "料金",
	"header.team": "チーム",
	"header.blog": "ブログ",
	"header.careers": "採用",
	"header.faq": "FAQ",
	"header.contact": "お問い合わせ",
	"header.settings": "設定",
	"header.goToGithub": "GitHubへ",
	"footer.resources": "リソース",
	"footer.contact": "お問い合わせ",
	"footer.github": "GitHub",
	"footer.methodology": "メソッド",
	"footer.contributing": "貢献する",
	"footer.builtWith": "i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築。",
	"footer.anOpenSourceTestApplication": "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実際の影響を測定するためのオープンソーステストアプリケーション。",
	"mockBanner.text": "⚠️ このページにはベンチマークのみを目的とした模擬データが含まれています。実際のビジネスやサービスとは関係ありません。",
	"themeToggle.themeModeAutoSystemClick": "テーマモード：自動（システム）。クリックしてライトモードに切り替え。",
	"themeToggle.themeModeLightClick": "テーマモード：ライト。クリックしてダークモードに切り替え。",
	"themeToggle.themeModeDarkClick": "テーマモード：ダーク。クリックして自動（システム）モードに切り替え。",
	"themeToggle.themeAuto": "テーマ：自動",
	"themeToggle.themeDark": "テーマ：ダーク",
	"themeToggle.themeLight": "テーマ：ライト"
}, Wt = {
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "創設者兼リードエンジニア",
	"teamGrid.formerGoogleEngineerWith10": "以前はGoogleのエンジニアで、大規模な国際化システムの構築に10年の経験があります。",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "パフォーマンスエンジニア",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。以前はVercelに在籍。",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "デベロッパーアドボケイト",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "開発者体験と教育に情熱を注いでいます。React Conf、JSConf、およびi18nNextのスピーカー。",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "フルスタックデベロッパー",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "データアナリスト",
	"teamGrid.ensuresStatisticalRigorInAll": "すべてのベンチマーク結果において統計的な厳密さを確保。MITで応用統計学の博士号を取得。",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "コミュニティマネージャー",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "コミュニティの貢献、パートナーシップ、およびイベントを管理。オープンソースガバナンスの経歴を持つ。",
	"teamHeader.ourTeam": "私たちのチーム",
	"teamHeader.meetThePeopleBehindI18n": "i18nベンチマークの裏側にいる人々に会いましょう。優れた開発者ツールへの共通の情熱によって結ばれた多様なチームです。"
}, Gt = {
	"aboutHeader.methodology": "방법론",
	"aboutHeader.weDesignedThisBenchmarkTo": "우리는 i18n 라이브러리를 공정하고, 재현 가능하며, 의미 있게 비교할 수 있도록 이 벤치마크를 설계했습니다.",
	"whatWeMeasure.bundleSizeImpact": "번들 크기 영향",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.",
	"whatWeMeasure.renderingOverhead": "렌더링 오버헤드",
	"whatWeMeasure.howMuchExtraTimeThe": "라이브러리가 React의 렌더링 주기에 추가하는 여분의 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 구성 요소 트리 전체에서 불필요한 다시 렌더링을 유발할 수 있습니다.",
	"whatWeMeasure.hydrationCost": "하이드레이션 비용",
	"whatWeMeasure.duringSsrTranslationDataIs": "SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대형 사전은 HTML 페이로드를 증가시키고 하이드레이션(페이지가 인터랙티브해지는 순간)을 늦춥니다.",
	"whatWeMeasure.lazyLoadingEffectiveness": "지연 로딩 효과",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "번역을 경로 또는 네임스페이스별로 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)가 발생하는지 측정합니다.",
	"whatWeMeasure.localeSwitchSpeed": "로케일 전환 속도",
	"whatWeMeasure.howFastTheAppCan": "실행 중에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환할 수 있는지(새 번역 가져오기, 구성 요소 다시 렌더링, DOM 업데이트 포함) 측정합니다.",
	"whatWeMeasure.whatWeMeasure": "측정 항목",
	"aboutGrid.testEnvironment": "테스트 환경",
	"aboutGrid.allBenchmarksRunOn": "모든 벤치마크는 동일한 하드웨어(M2 MacBook Pro, 16 GB RAM), 동일한 브라우저(Playwright를 통한 Chromium 120) 및 동일한 네트워크 조건(시뮬레이션된 4G)에서 실행됩니다. 각 테스트는 50회 반복되며, P95/P99 백분위수의 중앙값을 보고합니다.",
	"aboutGrid.applicationDesign": "애플리케이션 설계",
	"aboutGrid.theBenchmarkAppHas10": "벤치마크 앱에는 탐색, 양식, 동적 목록 및 정적 텍스트와 같은 현실적인 콘텐츠가 포함된 10개의 페이지가 있습니다. 각 페이지는 실제 사용 패턴을 나타내기 위해 15-30개의 번역 키를 사용합니다.",
	"aboutGrid.measurementMethodology": "측정 방법론",
	"aboutGrid.weUseBrowserNativeApis": "Performance Timeline, Resource Timing, Layout Instability와 같은 브라우저 기반 API와 React Profiler 데이터를 결합하여 사용합니다. 번들 크기는 정확성을 위해 source-map-explorer를 사용하여 gzip 후에 측정됩니다.",
	"aboutGrid.fairComparison": "공정한 비교",
	"aboutGrid.eachI18nLibraryIsIntegrated": "각 i18n 라이브러리는 공식 문서와 모범 사례에 따라 통합되었습니다. 최적의 구성을 보장하기 위해 가능한 경우 유지 관리자와 상담합니다. 동일한 React 앱, 동일한 Vite 설정, 동일한 배포 방식이 적용됩니다."
}, Kt = {
	"blogList.i18nBenchmark2026Results": "i18n 벤치마크 2026 결과",
	"blogList.march152026": "2026년 3월 15일",
	"blogList.weTested12DifferentInternationalization": "우리는 10개 페이지에 걸쳐 12가지 서로 다른 국제화 라이브러리를 테스트했습니다. 대화형 차트가 포함된 자세한 결과는 다음과 같습니다.",
	"blogList.howToReduceYourI18n": "i18n 번들을 60% 줄이는 방법",
	"blogList.march82026": "2026년 3월 8일",
	"blogList.practicalStrategiesForOptimizingTranslation": "번역 파일 로딩 최적화, 사용하지 않는 로케일의 트리 쉐이킹, 빌드 타임 컴파일 활용을 포함한 번역 번들 최적화를 위한 실질적인 전략.",
	"blogList.theStateOfInternationalizationIn": "2026년 React 국제화의 현주소",
	"blogList.february282026": "2026년 2월 28일",
	"blogList.anOverviewOfTheCurrent": "메시지 카탈로그에서 컴파일러 기반 솔루션에 이르기까지 현재의 접근 방식을 비교한 i18n 생태계 개요.",
	"blogList.migratingFromReactI18nextTo": "react-i18next에서 Lingui로 마이그레이션",
	"blogList.february152026": "2026년 2월 15일",
	"blogList.aStepByStepGuide": "50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하기 위한 단계별 가이드.",
	"blogList.serverComponentsAndI18nWhat": "서버 컴포넌트와 i18n: 무엇이 변하는가?",
	"blogList.february12026": "2026年 2월 1일",
	"blogList.reactServerComponentsIntroduceNew": "React 서버 구성 요소는 국제화를 위한 새로운 패턴을 도입합니다. 그 영향과 모범 사례를 살펴봅니다.",
	"blogList.benchmarkMethodologyHowWeTest": "벤치마크 방법론: 테스트 방법",
	"blogList.january202026": "2026년 1월 20일",
	"blogList.aTransparentLookAtOur": "테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마크 방법론에 대한 투명한 공개.",
	"blogList.readMore": "더 읽어보기 →",
	"blogHeader.blog": "블로그",
	"blogHeader.insightsDeepDivesAnd": "i18n 벤치마킹 커뮤니티의 통찰력, 심층 분석 및 업데이트."
}, qt = {
	"openPositions.openPositions": "채용 중인 직책",
	"openPositions.seniorPerformanceEngineer": "시니어 성능 엔지니어",
	"openPositions.fullTime": "정규직",
	"openPositions.remote": "원격",
	"openPositions.leadBenchmarkDesignAnd": "벤치마크 설계 및 구현을 주도합니다. V8 내부 구조, 브라우저 성능 API 및 통계 분석에 대한 깊은 지식이 필요합니다.",
	"openPositions.technicalWriter": "테크니컬 라이터",
	"openPositions.partTime": "파트타임",
	"openPositions.createAndMaintainDocumentation": "i18n 성능 베스트 프랙티스에 관한 문서, 블로그 게시물 및 교육 콘텐츠를 작성하고 유지 관리합니다.",
	"openPositions.frontendDeveloper": "프론트엔드 개발자",
	"openPositions.buildAndMaintainThe": "벤치마크 대시보드, 비교 도구 및 대화형 시각화를 구축하고 유지 관리합니다.",
	"openPositions.devOpsEngineer": "DevOps 엔지니어",
	"openPositions.designAndMaintainThe": "라이브러리가 업데이트될 때마다 벤치마크를 자동으로 실행하는 CI/CD 파이프라인을 설계하고 유지 관리합니다.",
	"openPositions.applyNow": "지금 지원하기",
	"careersHeader.careers": "채용",
	"careersHeader.joinOurMissionToMake": "전 세계 모든 사람을 위해 웹을 더 빠르고 접근하기 쉽게 만들려는 우리의 미션에 동참하세요.",
	"careersBenefits.whyJoinUs": "왜 합류해야 하나요?",
	"careersBenefits.remoteFirst": "리모트 퍼스트",
	"careersBenefits.workFromAnywhereFully": "어디서나 일하세요. 6개 시간대에 걸쳐 있는 완전 분산형 팀입니다.",
	"careersBenefits.openSource": "오픈 소스",
	"careersBenefits.allOurWorkIs": "우리의 모든 작업은 오픈 소스입니다. 영향력을 미치는 동시에 공개 포트폴리오를 만드세요.",
	"careersBenefits.impactful": "영향력 있는",
	"careersBenefits.yourWorkDirectlyHelps": "여러분의 작업은 개발자가 더 나은, 더 빠른 국제화 앱을 구축하는 데 직접적인 도움이 됩니다."
}, Jt = {
	"contactForm.name": "이름",
	"contactForm.email": "이메일",
	"contactForm.subject": "제목",
	"contactForm.message": "메시지",
	"contactForm.sendMessage": "메시지 보내기",
	"contactForm.wellGetBackTo": "48시간 이내에 답변해 드리겠습니다.",
	"contactHeader.contactUs": "문의처",
	"contactHeader.haveQuestionsOrWantTo": "궁금한 점이 있거나 기여하고 싶으신가요? 여러분의 의견을 기다립니다."
}, Yt = {
	"faqList.howAreTheBenchmarks": "벤치마크는 어떻게 실행되나요?",
	"faqList.allBenchmarksAreRun": "모든 벤치마크는 일관된 하드웨어 설정(M2 MacBook Pro)에서 시뮬레이션된 4G 네트워크 조건으로 Playwright를 사용하여 실행됩니다. 각 테스트는 50번 반복되며 중앙값, P95 및 P99 값을 보고합니다.",
	"faqList.whatLibrariesAreCurrently": "현재 어떤 라이브러리가 테스트되고 있나요?",
	"faqList.weCurrentlyBenchmarkReactI18next": "현재 react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl 및 Paraglide를 벤치마킹하고 있습니다. 커뮤니티의 요청에 따라 더 많은 라이브러리를 추가할 계획입니다.",
	"faqList.canIContributeA": "새로운 라이브러리 통합을 제안할 수 있나요?",
	"faqList.absolutelyWeWelcomeCommunity": "물론입니다! 커뮤니티의 기여를 환영합니다. 저장소를 포크하고 템플릿에 따라 라이브러리 통합을 추가한 후 풀 리퀘스트를 제출하세요.",
	"faqList.howOftenAreResults": "결과는 얼마나 자주 업데이트되나요?",
	"faqList.benchmarksRunAutomaticallyVia": "벤치마크는 모든 종속성 업데이트 시 CI를 통해 자동으로 실행되며 메인 브랜치에서 매주 실행됩니다. 결과는 24시간 이내에 대시보드에 게시됩니다.",
	"faqList.areTheResultsStatistically": "결과가 통계적으로 유의미한가요?",
	"faqList.yesWeUseThe": "네. 0.05 유의 수준에서 Mann-Whitney U 검정을 사용하여 분포를 비교합니다. 또한 신뢰 구간과 효과 크기를 보고합니다.",
	"faq-header1.frequentlyAskedQuestions": "자주 묻는 질문",
	"faq-header1.everythingYouNeedToKnow": "i18n Benchmark 프로젝트에 대해 알아야 할 모든 것."
}, Xt = {
	"understandingImpact.understandingTheImpact": "영향 이해하기",
	"understandingImpact.whyASingleLargeJson": "단일 대형 JSON이 성능을 저해하는 이유",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 구성 요소가 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:",
	"understandingImpact.theJsonMustBeParsed": "JSON은 페이지를 로드할 때마다 구문 분석되어야 하므로 메인 스레드를 차단합니다.",
	"understandingImpact.contextBasedArchitecturesCanCause": "로케일이 변경될 때 컨텍스트 기반 아키텍처는 연쇄적인 다시 렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자가 알림을 받기 때문입니다.",
	"understandingImpact.duringServerSideRenderingThe": "서버 측 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어 다운로드 및 하이드레이션해야 하는 문서 크기가 증가합니다.",
	"understandingImpact.theTradeOffsOfDynamic": "동적 로딩의 트레이드오프",
	"understandingImpact.splittingTranslationsIntoPerRoute": "번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 획기적으로 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:",
	"understandingImpact.waterfallRequests": "워터폴 요청:",
	"understandingImpact.flashOfUntranslatedContentFouc": "번역되지 않은 콘텐츠의 플래시 (FOUC):",
	"understandingImpact.cacheInvalidation": "캐시 무효화:",
	"understandingImpact.whatThisBenchmarkMeasures": "이 벤치마크가 측정하는 것",
	"understandingImpact.thisTestAppProvidesA": "이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 측면에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 구문 분석하고 렌더링하는 데 소요되는 시간, 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.",
	"whyItMatters.whyTheseMetricsMatter": "이 지표들이 중요한 이유",
	"whyItMatters.bundleSize": "번들 크기",
	"whyItMatters.theBundleIsTheData": "번들은 전 세계 모든 사용자에게 전송되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 사용되는 느린 3G 연결에서 더욱 그렇습니다. i18n 라이브러리는 수 킬로바이트에서 수십 킬로바이트의 런타임 코드와 번역 파일 자체에 이르기까지 그 무게가 매우 다양합니다.",
	"whyItMatters.renderingHydration": "렌더링 및 하이드레이션",
	"whyItMatters.connectingALargeJson": "모든 구성 요소에 대형 JSON 사전을 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트가 변경되면 트리 전체에서 다시 렌더링이 발생할 수 있습니다. SSR 하이드레이션 중에 방대한 번역 개체를 구문 분석하고 첨부하면 페이지가 인터랙티브해지기 전까지 지연이 추가되어 TTI(Time to Interactive)에 직접적인 영향을 미칩니다.",
	"whyItMatters.dynamicLoading": "동적 로딩",
	"whyItMatters.loadingAllTranslationsUpfront": "모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 것만 전송합니다. 그러나 지연 로딩은 워터포럴 요청, 번역되지 않은 콘텐츠의 플래시, 캐싱 복잡성 등의 자체적인 트레이드오프가 있습니다. 두 전략을 모두 측정하는 것이 필수적입니다.",
	"resultsTable.sampleResults": "샘플 결과",
	"resultsTable.bundleSize": "번들 크기",
	"resultsTable.lookupTime": "조회 시간",
	"resultsTable.lazyLoading": "지연 로딩",
	"hero.aTestApplicationDesignedTo": "국제화 라이브러리가 번들 크기, 로드 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.",
	"hero.viewResults": "결과 보기"
}, Zt = {
	"pricingTiers.starterTier": "스타터",
	"pricingTiers.starterPrice": "₩0",
	"pricingTiers.forever": "영구",
	"pricingTiers.runsPerDay": "하루 5회 벤치마크 실행",
	"pricingTiers.libraries3": "라이브러리 3개",
	"pricingTiers.communitySupport": "커뮤니티 지원",
	"pricingTiers.publicResults": "공개 결과",
	"pricingTiers.getStarted": "시작하기",
	"pricingTiers.proTier": "프로",
	"pricingTiers.proPrice": "₩29",
	"pricingTiers.perMonth": "/월",
	"pricingTiers.unlimitedRuns": "무제한 실행",
	"pricingTiers.allLibraries": "모든 라이브러리",
	"pricingTiers.prioritySupport": "우선 지원",
	"pricingTiers.privateResults": "비공개 결과",
	"pricingTiers.ciIntegration": "CI 통합",
	"pricingTiers.historicalData": "히스토리 데이터",
	"pricingTiers.enterpriseTier": "엔터프라이즈",
	"pricingTiers.custom": "맞춤형",
	"pricingTiers.everythingInPro": "프로의 모든 기능 포함",
	"pricingTiers.onPremiseOption": "온프레미스 옵션",
	"pricingTiers.ssoSaml": "SSO 및 SAML",
	"pricingTiers.dedicatedAccountManager": "전담 계정 관리자",
	"pricingTiers.customSLAs": "맞춤 SLA",
	"pricingTiers.auditLogs": "감사 로그",
	"pricingTiers.trainingSessions": "교육 세션",
	"pricingTiers.contactSales": "영업팀 문의",
	"pricingHeader.pricing": "요금",
	"pricingHeader.transparentPricingForEvery": "모두를 위한 투명한 요금제"
}, Qt = {
	"productsGrid.benchmarkDashboard": "벤치마크 대시보드",
	"productsGrid.interactiveChartsAndTables": "번들 크기, 렌더링 시간, 하이드레이션 비용에 따라 i18n 라이브러리를 비교하는 대화형 차트와 표.",
	"productsGrid.bundleAnalyzer": "번들 분석기",
	"productsGrid.uploadYourBuildOutput": "빌드 결과물을 업로드하고 번들 중 i18n 오버헤드가 얼마나 되는지 자세한 분석을 받아보세요.",
	"productsGrid.migrationAssistant": "마이그레이션 도우미",
	"productsGrid.automatedCodemodsAndGuides": "최소한의 중단으로 i18n 라이브러리 간의 마이그레이션을 돕는 자동 코드 수정 도구와 가이드.",
	"productsGrid.performanceMonitor": "성능 모니터",
	"productsGrid.continuousPerformanceTrackingFor": "i18n 구현의 지속적인 성능 추적. 번역 로딩 속도가 느려지면 알림을 받으세요.",
	"productsGrid.learnMore": "더 알아보기",
	"productsHeader.products": "제품",
	"productsHeader.toolsAndServicesTo": "국제화 전략을 최적화하는 데 도움이 되는 도구와 서비스."
}, $t = {
	"route.oopsPageNotFound": "앗! 페이지를 찾을 수 없습니다",
	"route.returnToHome": "홈으로 돌아가기",
	"route.couldNotMeasureHydrationDuration": "하이드레이션 시간을 측정할 수 없습니다:"
}, en = {
	"preferencesSection.preferences": "기본 설정",
	"preferencesSection.emailNotifications": "이메일 알림",
	"preferencesSection.receiveWeeklyBenchmarkReports": "주간 벤치마크 보고서 받기",
	"preferencesSection.darkMode": "다크 모드",
	"preferencesSection.useDarkColorScheme": "어두운 색상 체계 사용",
	"preferencesSection.defaultLanguage": "기본 언어",
	"settingsHeader.settings": "설정",
	"settingsHeader.manageYourAccountPreferences": "계정 기본 설정 및 구성을 관리합니다.",
	"settingsFooter.cancel": "취소",
	"settingsFooter.saveChanges": "변경 사항 저장",
	"apiAccessSection.apiAccess": "API 액세스",
	"apiAccessSection.apiKey": "API 키",
	"apiAccessSection.useThisKeyTo": "이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오.",
	"apiAccessSection.copy": "복사",
	"profileSection.profile": "프로필",
	"profileSection.displayName": "표시 이름",
	"profileSection.email": "이메일"
}, tn = {
	"header.home": "홈",
	"header.methodology": "방법론",
	"header.mockPages": "테스트 페이지",
	"header.products": "제품",
	"header.pricing": "가격",
	"header.team": "팀",
	"header.blog": "블로그",
	"header.careers": "채용",
	"header.faq": "FAQ",
	"header.contact": "문의하기",
	"header.settings": "설정",
	"header.goToGithub": "GitHub로 이동",
	"footer.resources": "리소스",
	"footer.contact": "문의",
	"footer.github": "GitHub",
	"footer.methodology": "방법론",
	"footer.contributing": "기여하기",
	"footer.builtWith": "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.",
	"footer.anOpenSourceTestApplication": "국제화 라이브러리가 번들 크기, 로드 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.",
	"mockBanner.text": "⚠️ 이 페이지는 벤치마킹 목적으로만 사용되는 모의 데이터를 포함하고 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.",
	"themeToggle.themeModeAutoSystemClick": "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환하십시오.",
	"themeToggle.themeModeLightClick": "테마 모드: 라이트. 클릭하여 다크 모드로 전환하십시오.",
	"themeToggle.themeModeDarkClick": "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환하십시오.",
	"themeToggle.themeAuto": "테마: 자동",
	"themeToggle.themeDark": "테마: 다크",
	"themeToggle.themeLight": "테마: 라이트"
}, nn = {
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "창립자 및 리드 엔지니어",
	"teamGrid.formerGoogleEngineerWith10": "전 Google 엔지니어로 대규모 국제화 시스템 구축에 10년의 경험이 있습니다.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "성능 엔지니어",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전 Vercel 근무.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "개발자 에반젤리스트",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext 강연자.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "풀스택 개발자",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "벤치마킹 인프라 및 CI/CD 파이프라인 유지 관리. Lingui 오픈 소스 기여자.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "데이터 분석가",
	"teamGrid.ensuresStatisticalRigorInAll": "모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용통계학 박사.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "커뮤니티 매니저",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경 보유。",
	"teamHeader.ourTeam": "우리 팀",
	"teamHeader.meetThePeopleBehindI18n": "i18n Benchmark를 만드는 사람들을 만나보세요. 훌륭한 개발자 도구에 대한 열정으로 뭉친 다양한 팀입니다."
}, rn = {
	"aboutHeader.methodology": "Методология",
	"aboutHeader.weDesignedThisBenchmarkTo": "Мы разработали этот бенчмарк, чтобы обеспечить справедливое, воспроизводимое и значимое сравнение библиотек i18n. Вот наш подход.",
	"whatWeMeasure.bundleSizeImpact": "Влияние на размер бандла",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "Дополнительные байты JavaScript, отправляемые клиенту специально из-за рантайма библиотеки i18n, плюс файлы перевода для текущего языка.",
	"whatWeMeasure.renderingOverhead": "Затраты на рендеринг",
	"whatWeMeasure.howMuchExtraTimeThe": "Сколько дополнительного времени слой i18n добавляет к рендерингу каждого компонента — измеряется с помощью actualDuration в React Profiler.",
	"whatWeMeasure.hydrationCost": "Стоимость гидратации",
	"whatWeMeasure.duringSsrTranslationDataIs": "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают HTML-пейлоад и замедляют гидратацию — момент, когда страница становится интерактивной.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Эффективность ленивой загрузки",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования).",
	"whatWeMeasure.localeSwitchSpeed": "Скорость переключения языка",
	"whatWeMeasure.howFastTheAppCan": "Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.",
	"whatWeMeasure.whatWeMeasure": "Что мы измеряем",
	"aboutGrid.testEnvironment": "Тестовая среда",
	"aboutGrid.allBenchmarksRunOn": "Все бенчмарки запускаются на одном и том же оборудовании (M2 MacBook Pro, 16 ГБ ОЗУ), в одном и том же браузере (Chromium 120 через Playwright) и в одинаковых сетевых условиях (симуляция 4G). Каждый тест повторяется 50 раз, и мы сообщаем медиану с процентилями P95/P99.",
	"aboutGrid.applicationDesign": "Дизайн приложения",
	"aboutGrid.theBenchmarkAppHas10": "Приложение для бенчмарка имеет 10 страниц с реалистичным контентом — навигацией, формами, динамическими списками и статическим текстом. Каждая страница использует 15–30 ключей перевода для представления реальных сценариев использования, а не синтетических микро-бенчмарков.",
	"aboutGrid.measurementMethodology": "Методология измерения",
	"aboutGrid.weUseBrowserNativeApis": "Мы используем нативные API браузера (Performance Timeline, Resource Timing, Layout Instability) в сочетании с данными React Profiler. Размеры бандлов измеряются после gzip с использованием source-map-explorer для точности.",
	"aboutGrid.fairComparison": "Справедливое сравнение",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Каждая библиотека i18n интегрируется в соответствии с ее официальной документацией и лучшими практиками. Мы консультируемся с мейнтейнерами, когда это возможно, чтобы обеспечить оптимальную конфигурацию. Одно и то же приложение React, один и тот же конфиг Vite, одно и то же развертывание."
}, an = {
	"blogList.i18nBenchmark2026Results": "Результаты i18n Benchmark 2026",
	"blogList.march152026": "15 марта 2026 года",
	"blogList.weTested12DifferentInternationalization": "Мы протестировали 12 различных библиотек интернационализации на 10 страницах. Вот подробные результаты с интерактивными графиками.",
	"blogList.howToReduceYourI18n": "Как уменьшить бандл i18n на 60%",
	"blogList.march82026": "8 марта 2026 года",
	"blogList.practicalStrategiesForOptimizingTranslation": "Практические стратегии по оптимизации загрузки файлов перевода, tree-shaking неиспользуемых локалей и использование компиляции во время сборки.",
	"blogList.theStateOfInternationalizationIn": "Состояние интернационализации в 2026 году",
	"blogList.february282026": "28 февраля 2026 года",
	"blogList.anOverviewOfTheCurrent": "Обзор текущей экосистемы i18n, сравнение подходов от каталогов сообщений до решений на основе компиляторов.",
	"blogList.migratingFromReactI18nextTo": "Миграция с react-i18next на Lingui",
	"blogList.february152026": "15 февраля 2026 года",
	"blogList.aStepByStepGuide": "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components и i18n: что меняется?",
	"blogList.february12026": "1 февраля 2026 года",
	"blogList.reactServerComponentsIntroduceNew": "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.",
	"blogList.benchmarkMethodologyHowWeTest": "Методология бенчмарка: как мы тестируем",
	"blogList.january202026": "20 января 2026 года",
	"blogList.aTransparentLookAtOur": "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.",
	"blogList.readMore": "Читать далее →",
	"blogHeader.blog": "Блог",
	"blogHeader.insightsDeepDivesAnd": "Инсайты, глубокие погружения и обновления от сообщества бенчмаркинга i18n."
}, Y = {
	"openPositions.openPositions": "Открытые вакансии",
	"openPositions.seniorPerformanceEngineer": "Старший инженер по производительности",
	"openPositions.fullTime": "Полный рабочий день",
	"openPositions.remote": "Удаленно",
	"openPositions.leadBenchmarkDesignAnd": "Руководство дизайном и реализацией бенчмарков. Требуются глубокие знания внутренностей V8, API производительности браузера и статистического анализа.",
	"openPositions.technicalWriter": "Технический писатель",
	"openPositions.partTime": "Неполный рабочий день",
	"openPositions.createAndMaintainDocumentation": "Создание и поддержка документации, постов в блоге и образовательного контента о лучших практиках производительности i18n.",
	"openPositions.frontendDeveloper": "Frontend-разработчик",
	"openPositions.buildAndMaintainThe": "Создание и поддержка дашборда бенчмарков, инструментов сравнения и интерактивных визуализаций.",
	"openPositions.devOpsEngineer": "DevOps-инженер",
	"openPositions.designAndMaintainThe": "Проектирование и поддержка CI/CD пайплайна, который автоматически запускает бенчмарки при каждом обновлении библиотеки.",
	"openPositions.applyNow": "Подать заявку",
	"careersHeader.careers": "Карьера",
	"careersHeader.joinOurMissionToMake": "Присоединяйтесь к нашей миссии сделать веб быстрее и доступнее для всех и везде.",
	"careersBenefits.whyJoinUs": "Почему стоит присоединиться к нам?",
	"careersBenefits.remoteFirst": "Сначала удаленка",
	"careersBenefits.workFromAnywhereFully": "Работайте откуда угодно. Полностью распределенная команда в 6 часовых поясах.",
	"careersBenefits.openSource": "Открытый исходный код",
	"careersBenefits.allOurWorkIs": "Вся наша работа — open source. Создавайте свое публичное портфолио, оказывая реальное влияние.",
	"careersBenefits.impactful": "Значимо",
	"careersBenefits.yourWorkDirectlyHelps": "Ваша работа напрямую помогает разработчикам создавать более качественные и быстрые локализованные приложения."
}, on = {
	"contactForm.name": "Имя",
	"contactForm.email": "Email",
	"contactForm.subject": "Тема",
	"contactForm.message": "Сообщение",
	"contactForm.sendMessage": "Отправить сообщение",
	"contactForm.wellGetBackTo": "Мы ответим вам в течение 48 часов.",
	"contactHeader.contactUs": "Связаться с нами",
	"contactHeader.haveQuestionsOrWantTo": "Есть вопросы или хотите внести вклад? Мы будем рады услышать вас."
}, sn = {
	"faqList.howAreTheBenchmarks": "Как запускаются бенчмарки?",
	"faqList.allBenchmarksAreRun": "Все бенчмарки запускаются с использованием Playwright на стабильной конфигурации оборудования (M2 MacBook Pro) с симулированными условиями сети 4G. Каждый тест выполняется 50 раз, и мы сообщаем медиану, значения P95 и P99.",
	"faqList.whatLibrariesAreCurrently": "Какие библиотеки сейчас тестируются?",
	"faqList.weCurrentlyBenchmarkReactI18next": "В настоящее время мы тестируем react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl и Paraglide. Мы планируем добавить больше библиотек на основе запросов сообщества.",
	"faqList.canIContributeA": "Могу ли я предложить интеграцию новой библиотеки?",
	"faqList.absolutelyWeWelcomeCommunity": "Безусловно! Мы приветствуем вклад сообщества. Сделайте форк репозитория, добавьте интеграцию вашей библиотеки, следуя нашему шаблону, и отправьте пулл-реквест. Подробности см. в руководстве для контрибьюторов.",
	"faqList.howOftenAreResults": "Как часто обновляются результаты?",
	"faqList.benchmarksRunAutomaticallyVia": "Бенчмарки запускаются автоматически через CI при каждом обновлении зависимостей и еженедельно в основной ветке. Результаты публикуются на дашборде в течение 24 часов.",
	"faqList.areTheResultsStatistically": "Являются ли результаты статистически значимыми?",
	"faqList.yesWeUseThe": "Да. Мы используем U-критерий Манна-Уитни с уровнем значимости 0,05 для сравнения распределений. Мы также сообщаем доверительные интервалы и размеры эффекта.",
	"faq-header1.frequentlyAskedQuestions": "Часто задаваемые вопросы",
	"faq-header1.everythingYouNeedToKnow": "Все, что вам нужно знать о проекте i18n Benchmark."
}, cn = {
	"understandingImpact.understandingTheImpact": "Понимание влияния",
	"understandingImpact.whyASingleLargeJson": "Почему один большой JSON может снизить производительность",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:",
	"understandingImpact.theJsonMustBeParsed": "JSON должен парситься при каждой загрузке страницы — блокируя основной поток.",
	"understandingImpact.contextBasedArchitecturesCanCause": "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.",
	"understandingImpact.duringServerSideRenderingThe": "Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.",
	"understandingImpact.theTradeOffsOfDynamic": "Компромиссы динамической загрузки",
	"understandingImpact.splittingTranslationsIntoPerRoute": "Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:",
	"understandingImpact.waterfallRequests": "Каскадные запросы (Waterfall requests):",
	"understandingImpact.flashOfUntranslatedContentFouc": "Мерцание непереведенного контента (FOUC):",
	"understandingImpact.cacheInvalidation": "Инвалидация кэша:",
	"understandingImpact.whatThisBenchmarkMeasures": "Что измеряет этот бенчмарк",
	"understandingImpact.thisTestAppProvidesA": "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.",
	"whyItMatters.whyTheseMetricsMatter": "Почему эти показатели важны",
	"whyItMatters.bundleSize": "Размер бандла",
	"whyItMatters.theBundleIsTheData": "Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой размер бандла означает более долгое время загрузки, особенно при медленном 3G-соединении, характерном для многих регионов. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт рантайм-кода, плюс сами файлы переводов.",
	"whyItMatters.renderingHydration": "Рендеринг и гидратация",
	"whyItMatters.connectingALargeJson": "Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода добавляют задержку до того, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).",
	"whyItMatters.dynamicLoading": "Динамическая загрузка",
	"whyItMatters.loadingAllTranslationsUpfront": "Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно для текущей страницы. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfall), мерцание непереведенного контента и сложность кэширования. Измерение обеих стратегий необходимо.",
	"resultsTable.sampleResults": "Примеры результатов",
	"resultsTable.bundleSize": "Размер бандла",
	"resultsTable.lookupTime": "Время поиска",
	"resultsTable.lazyLoading": "Ленивая загрузка",
	"hero.aTestApplicationDesignedTo": "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
	"hero.viewResults": "Посмотреть результаты"
}, ln = {
	"pricingTiers.starterTier": "Стартовый",
	"pricingTiers.starterPrice": "₽0",
	"pricingTiers.forever": "навсегда",
	"pricingTiers.runsPerDay": "5 запусков бенчмарков в день",
	"pricingTiers.libraries3": "3 библиотеки",
	"pricingTiers.communitySupport": "Поддержка сообщества",
	"pricingTiers.publicResults": "Публичные результаты",
	"pricingTiers.getStarted": "Начать",
	"pricingTiers.proTier": "Pro",
	"pricingTiers.proPrice": "₽29",
	"pricingTiers.perMonth": "/месяц",
	"pricingTiers.unlimitedRuns": "Неограниченные запуски",
	"pricingTiers.allLibraries": "Все библиотеки",
	"pricingTiers.prioritySupport": "Приоритетная поддержка",
	"pricingTiers.privateResults": "Приватные результаты",
	"pricingTiers.ciIntegration": "Интеграция CI",
	"pricingTiers.historicalData": "Исторические данные",
	"pricingTiers.enterpriseTier": "Enterprise",
	"pricingTiers.custom": "Индивидуально",
	"pricingTiers.everythingInPro": "Все возможности Pro",
	"pricingTiers.onPremiseOption": "Вариант on-premise",
	"pricingTiers.ssoSaml": "SSO и SAML",
	"pricingTiers.dedicatedAccountManager": "Выделенный аккаунт-менеджер",
	"pricingTiers.customSLAs": "Индивидуальные SLA",
	"pricingTiers.auditLogs": "Журналы аудита",
	"pricingTiers.trainingSessions": "Обучающие сессии",
	"pricingTiers.contactSales": "Связаться с отделом продаж",
	"pricingHeader.pricing": "Тарифы",
	"pricingHeader.transparentPricingForEvery": "Прозрачные тарифы для всех"
}, un = {
	"productsGrid.benchmarkDashboard": "Дашборд бенчмарков",
	"productsGrid.interactiveChartsAndTables": "Интерактивные графики и таблицы, сравнивающие библиотеки i18n по размеру бандла, времени рендеринга и стоимости гидратации.",
	"productsGrid.bundleAnalyzer": "Анализатор бандла",
	"productsGrid.uploadYourBuildOutput": "Загрузите вывод вашей сборки и получите подробный отчет о том, какую часть бандла составляют накладные расходы i18n.",
	"productsGrid.migrationAssistant": "Помощник по миграции",
	"productsGrid.automatedCodemodsAndGuides": "Автоматизированные кодомоды и руководства для миграции между библиотеками i18n с минимальными перерывами.",
	"productsGrid.performanceMonitor": "Монитор производительности",
	"productsGrid.continuousPerformanceTrackingFor": "Непрерывное отслеживание производительности вашей реализации i18n. Получайте оповещения при ухудшении загрузки переводов.",
	"productsGrid.learnMore": "Узнать больше",
	"productsHeader.products": "Продукты",
	"productsHeader.toolsAndServicesTo": "Инструменты и услуги, которые помогут вам оптимизировать стратегию интернационализации."
}, dn = {
	"route.oopsPageNotFound": "Упс! Страница не найдена",
	"route.returnToHome": "Вернуться на главную",
	"route.couldNotMeasureHydrationDuration": "Не удалось измерить продолжительность гидратации:"
}, fn = {
	"preferencesSection.preferences": "Настройки",
	"preferencesSection.emailNotifications": "Email-уведомления",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Получать еженедельные отчеты о бенчмарках",
	"preferencesSection.darkMode": "Темный режим",
	"preferencesSection.useDarkColorScheme": "Использовать темную цветовою схему",
	"preferencesSection.defaultLanguage": "Язык по умолчанию",
	"settingsHeader.settings": "Настройки",
	"settingsHeader.manageYourAccountPreferences": "Управляйте настройками своего аккаунта и конфигурацией.",
	"settingsFooter.cancel": "Отмена",
	"settingsFooter.saveChanges": "Сохранить изменения",
	"apiAccessSection.apiAccess": "Доступ к API",
	"apiAccessSection.apiKey": "Ключ API",
	"apiAccessSection.useThisKeyTo": "Используйте этот ключ для программного доступа к API бенчмаркинга.",
	"apiAccessSection.copy": "Копировать",
	"profileSection.profile": "Профиль",
	"profileSection.displayName": "Отображаемое имя",
	"profileSection.email": "Email"
}, pn = {
	"header.home": "Главная",
	"header.methodology": "Методология",
	"header.mockPages": "Тестовые страницы",
	"header.products": "Продукты",
	"header.pricing": "Цены",
	"header.team": "Команда",
	"header.blog": "Блог",
	"header.careers": "Карьера",
	"header.faq": "FAQ",
	"header.contact": "Контакт",
	"header.settings": "Настройки",
	"header.goToGithub": "Перейти на GitHub",
	"footer.resources": "Ресурсы",
	"footer.contact": "Контакт",
	"footer.github": "GitHub",
	"footer.methodology": "Методология",
	"footer.contributing": "Вклад",
	"footer.builtWith": "i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.",
	"footer.anOpenSourceTestApplication": "Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.",
	"mockBanner.text": "⚠️ Эта страница содержит фиктивные данные только для целей тестирования производительности. Она не связана с каким-либо реальным бизнесом или услугой.",
	"themeToggle.themeModeAutoSystemClick": "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
	"themeToggle.themeModeLightClick": "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
	"themeToggle.themeModeDarkClick": "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.",
	"themeToggle.themeAuto": "Тема: Авто",
	"themeToggle.themeDark": "Тема: Темная",
	"themeToggle.themeLight": "Тема: Светлая"
}, mn = {
	"teamGrid.sarahChen": "Сара Чен",
	"teamGrid.founderLeadEngineer": "Основатель и ведущий инженер",
	"teamGrid.formerGoogleEngineerWith10": "Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.",
	"teamGrid.marcusWeber": "Маркус Вебер",
	"teamGrid.performanceEngineer": "Инженер по производительности",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.",
	"teamGrid.aishaPatel": "Айша Патель",
	"teamGrid.developerAdvocate": "Адвокат разработчиков",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.",
	"teamGrid.tomasRodriguez": "Томас Родригес",
	"teamGrid.fullStackDeveloper": "Full-Stack разработчик",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Поддерживает инфраструктуру бенчмаркинга и пайплайн CI/CD. Участник разработки Lingui с открытым исходным кодом.",
	"teamGrid.yukiTanaka": "Юки Танака",
	"teamGrid.dataAnalyst": "Аналитик данных",
	"teamGrid.ensuresStatisticalRigorInAll": "Обеспечивает статистическую строгость всех результатов бенчмарков. Доктор прикладной статистики из Массачусетского технологического института (MIT).",
	"teamGrid.elenaKowalski": "Елена Ковальски",
	"teamGrid.communityManager": "Комьюнити-менеджер",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.",
	"teamHeader.ourTeam": "Наша команда",
	"teamHeader.meetThePeopleBehindI18n": "Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к отличным инструментам для разработчиков."
};
function X(e, t) {
	let n = {};
	for (let [r, i] of Object.entries(t)) n[e + "." + r] = i;
	return n;
}
var Z = {
	en: {
		...X("about", K),
		...X("blog", q),
		...X("careers", J),
		...X("contact", oe),
		...X("faq", se),
		...X("home", ce),
		...X("pricing", le),
		...X("products", ue),
		...X("route", de),
		...X("settings", fe),
		...X("shared", pe),
		...X("team", me)
	},
	fr: {
		...X("about", he),
		...X("blog", ge),
		...X("careers", _e),
		...X("contact", ve),
		...X("faq", ye),
		...X("home", be),
		...X("pricing", xe),
		...X("products", Se),
		...X("route", Ce),
		...X("settings", we),
		...X("shared", Te),
		...X("team", Ee)
	},
	es: {
		...X("about", De),
		...X("blog", Oe),
		...X("careers", ke),
		...X("contact", Ae),
		...X("faq", je),
		...X("home", Me),
		...X("pricing", Ne),
		...X("products", Pe),
		...X("route", Fe),
		...X("settings", Ie),
		...X("shared", Le),
		...X("team", Re)
	},
	de: {
		...X("about", ze),
		...X("blog", Be),
		...X("careers", Ve),
		...X("contact", He),
		...X("faq", Ue),
		...X("home", We),
		...X("pricing", Ge),
		...X("products", Ke),
		...X("route", qe),
		...X("settings", Je),
		...X("shared", Ye),
		...X("team", Xe)
	},
	it: {
		...X("about", Ze),
		...X("blog", Qe),
		...X("careers", $e),
		...X("contact", et),
		...X("faq", tt),
		...X("home", nt),
		...X("pricing", rt),
		...X("products", it),
		...X("route", at),
		...X("settings", ot),
		...X("shared", st),
		...X("team", ct)
	},
	pt: {
		...X("about", lt),
		...X("blog", ut),
		...X("careers", dt),
		...X("contact", ft),
		...X("faq", pt),
		...X("home", mt),
		...X("pricing", ht),
		...X("products", gt),
		...X("route", _t),
		...X("settings", vt),
		...X("shared", yt),
		...X("team", bt)
	},
	zh: {
		...X("about", xt),
		...X("blog", St),
		...X("careers", Ct),
		...X("contact", wt),
		...X("faq", Tt),
		...X("home", Et),
		...X("pricing", Dt),
		...X("products", Ot),
		...X("route", kt),
		...X("settings", At),
		...X("shared", jt),
		...X("team", Mt)
	},
	ja: {
		...X("about", Nt),
		...X("blog", Pt),
		...X("careers", Ft),
		...X("contact", It),
		...X("faq", Lt),
		...X("home", Rt),
		...X("pricing", zt),
		...X("products", Bt),
		...X("route", Vt),
		...X("settings", Ht),
		...X("shared", Ut),
		...X("team", Wt)
	},
	ko: {
		...X("about", Gt),
		...X("blog", Kt),
		...X("careers", qt),
		...X("contact", Jt),
		...X("faq", Yt),
		...X("home", Xt),
		...X("pricing", Zt),
		...X("products", Qt),
		...X("route", $t),
		...X("settings", en),
		...X("shared", tn),
		...X("team", nn)
	},
	ru: {
		...X("about", rn),
		...X("blog", an),
		...X("careers", Y),
		...X("contact", on),
		...X("faq", sn),
		...X("home", cn),
		...X("pricing", ln),
		...X("products", un),
		...X("route", dn),
		...X("settings", fn),
		...X("shared", pn),
		...X("team", mn)
	}
}, hn = {
	locales: [
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
	],
	defaultLocale: "en",
	keySeparator: !1,
	nsSeparator: !1,
	pages: { "*": ["common"] },
	loadLocaleFrom: async (e) => Z[e ?? "en"] ?? Z.en
};
function gn() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function _n(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var vn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-static/next-translate-app/components/AppProviders.tsx";
function yn({ children: e, locale: t }) {
	let [n] = o(() => typeof performance < "u" ? performance.now() : 0);
	return i(() => {
		_n("AppRoot", n);
	}, [n]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		gn();
	}, []), f(d, { children: e }, void 0, !1, {
		fileName: vn,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-static/next-translate-app/scripts/Wrapper.tsx";
function bn({ children: e }) {
	let [t, n] = o({}), [i, a] = o(!1);
	return r(() => {
		(async () => {
			try {
				let e = await hn.loadLocaleFrom?.("en", "common");
				n(e ?? {}), a(!0);
			} catch (e) {
				console.error("Failed to load translations:", e), a(!0);
			}
		})();
	}, ["en"]), i ? f(W, {
		lang: "en",
		namespaces: { common: t },
		children: f(yn, {
			locale: "en",
			children: e
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 37,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 36,
		columnNumber: 5
	}, this) : null;
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-static/next-translate-app/components/Header.wrapper.tsx";
function xn() {
	return f(bn, { children: f(V, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { xn as default };
