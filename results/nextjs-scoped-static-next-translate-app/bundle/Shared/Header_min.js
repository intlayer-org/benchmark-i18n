import e, { createContext as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useState as o } from "react";
import s from "next/link";
import { useParams as c, usePathname as l, useRouter as u } from "next/navigation";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { ChevronDown as m } from "lucide-react";
import { useRouter as h } from "next/router";
import g from "../locales/fr/about.json";
import _ from "../locales/fr/blog.json";
import v from "../locales/fr/careers.json";
import y from "../locales/fr/contact.json";
import b from "../locales/fr/faq.json";
import x from "../locales/fr/home.json";
import S from "../locales/fr/pricing.json";
import C from "../locales/fr/products.json";
import w from "../locales/fr/route.json";
import T from "../locales/fr/settings.json";
import ee from "../locales/fr/shared.json";
import te from "../locales/fr/team.json";
import ne from "../locales/es/about.json";
import re from "../locales/es/blog.json";
import ie from "../locales/es/careers.json";
import ae from "../locales/es/contact.json";
import oe from "../locales/es/faq.json";
import se from "../locales/es/home.json";
import ce from "../locales/es/pricing.json";
import le from "../locales/es/products.json";
import ue from "../locales/es/route.json";
import de from "../locales/es/settings.json";
import fe from "../locales/es/shared.json";
import pe from "../locales/es/team.json";
import me from "../locales/de/about.json";
import he from "../locales/de/blog.json";
import ge from "../locales/de/careers.json";
import _e from "../locales/de/contact.json";
import ve from "../locales/de/faq.json";
import ye from "../locales/de/home.json";
import be from "../locales/de/pricing.json";
import E from "../locales/de/products.json";
import D from "../locales/de/route.json";
import O from "../locales/de/settings.json";
import k from "../locales/de/shared.json";
import A from "../locales/de/team.json";
import j from "../locales/it/about.json";
import M from "../locales/it/blog.json";
import N from "../locales/it/careers.json";
import xe from "../locales/it/contact.json";
import Se from "../locales/it/faq.json";
import Ce from "../locales/it/home.json";
import we from "../locales/it/pricing.json";
import Te from "../locales/it/products.json";
import Ee from "../locales/it/route.json";
import De from "../locales/it/settings.json";
import Oe from "../locales/it/shared.json";
import ke from "../locales/it/team.json";
import Ae from "../locales/pt/about.json";
import je from "../locales/pt/blog.json";
import Me from "../locales/pt/careers.json";
import Ne from "../locales/pt/contact.json";
import Pe from "../locales/pt/faq.json";
import Fe from "../locales/pt/home.json";
import Ie from "../locales/pt/pricing.json";
import Le from "../locales/pt/products.json";
import Re from "../locales/pt/route.json";
import ze from "../locales/pt/settings.json";
import Be from "../locales/pt/shared.json";
import Ve from "../locales/pt/team.json";
import He from "../locales/zh/about.json";
import Ue from "../locales/zh/blog.json";
import We from "../locales/zh/careers.json";
import Ge from "../locales/zh/contact.json";
import Ke from "../locales/zh/faq.json";
import qe from "../locales/zh/home.json";
import Je from "../locales/zh/pricing.json";
import Ye from "../locales/zh/products.json";
import Xe from "../locales/zh/route.json";
import Ze from "../locales/zh/settings.json";
import Qe from "../locales/zh/shared.json";
import $e from "../locales/zh/team.json";
import et from "../locales/ja/about.json";
import tt from "../locales/ja/blog.json";
import nt from "../locales/ja/careers.json";
import rt from "../locales/ja/contact.json";
import it from "../locales/ja/faq.json";
import at from "../locales/ja/home.json";
import ot from "../locales/ja/pricing.json";
import st from "../locales/ja/products.json";
import ct from "../locales/ja/route.json";
import lt from "../locales/ja/settings.json";
import ut from "../locales/ja/shared.json";
import dt from "../locales/ja/team.json";
import ft from "../locales/ko/about.json";
import pt from "../locales/ko/blog.json";
import mt from "../locales/ko/careers.json";
import ht from "../locales/ko/contact.json";
import gt from "../locales/ko/faq.json";
import _t from "../locales/ko/home.json";
import vt from "../locales/ko/pricing.json";
import yt from "../locales/ko/products.json";
import bt from "../locales/ko/route.json";
import xt from "../locales/ko/settings.json";
import St from "../locales/ko/shared.json";
import Ct from "../locales/ko/team.json";
import wt from "../locales/ru/about.json";
import Tt from "../locales/ru/blog.json";
import Et from "../locales/ru/careers.json";
import Dt from "../locales/ru/contact.json";
import Ot from "../locales/ru/faq.json";
import kt from "../locales/ru/home.json";
import At from "../locales/ru/pricing.json";
import jt from "../locales/ru/products.json";
import Mt from "../locales/ru/route.json";
import Nt from "../locales/ru/settings.json";
import Pt from "../locales/ru/shared.json";
import Ft from "../locales/ru/team.json";
var It = (e) => /^https?:\/\//.test(e ?? "");
function P(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var F = ({ href: e, children: t, ...n }) => {
	let r = c().lang ?? "en";
	return e == null || typeof e != "string" || It(e) ? f(s, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}) : f(s, {
		href: P(e, r),
		prefetch: !1,
		...n,
		children: t
	});
}, I = function() {
	return I = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, I.apply(this, arguments);
};
function L(e, t) {
	return typeof t == "string" ? function(n, r, i) {
		return e(n, r, I({ ns: t }, i));
	} : e;
}
var R;
typeof e.createContext == "function" && (R = e.createContext({
	t: function(e) {
		return Array.isArray(e) ? e[0] : e;
	},
	lang: ""
}));
var z = R;
function Lt() {
	return typeof window > "u";
}
function B(e) {
	try {
		return new Intl.PluralRules(e);
	} catch {
		return new Intl.PluralRules();
	}
}
var V = function() {
	return V = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, V.apply(this, arguments);
};
function Rt(e, t) {
	if (!t) return { i18nKey: e };
	var n = e.indexOf(t);
	return n < 0 ? { i18nKey: e } : {
		namespace: e.slice(0, n),
		i18nKey: e.slice(n + t.length)
	};
}
function H(e) {
	var t = e.config, n = e.allNamespaces, r = e.pluralRules, i = e.lang, a = t.logger, o = a === void 0 ? Bt : a, s = t.allowEmptyStrings, c = s === void 0 ? !0 : s, l = function(e, n) {
		return Array.isArray(e) ? e.map(function(e) {
			return l(e, n);
		}) : e instanceof Object ? G({
			obj: e,
			query: n,
			config: t,
			lang: i
		}) : W({
			text: e,
			query: n,
			config: t,
			lang: i
		});
	}, u = function(e, i, a) {
		e === void 0 && (e = "");
		var s = Array.isArray(e) ? e[0] : e, d = t.nsSeparator, f = d === void 0 ? ":" : d, p = t.loggerEnvironment, m = p === void 0 ? "browser" : p, h = Rt(s, f), g = h.i18nKey, _ = h.namespace, v = _ === void 0 ? a?.ns ?? t.defaultNS : _, y = v && n[v] || {}, b = U(y, zt(r, y, g, t, i, a), t, a), x = typeof b == "object" ? JSON.parse(JSON.stringify(b)) : b, S = x === void 0 || typeof x == "object" && !Object.keys(x).length || x === "" && !c, C = typeof a?.fallback == "string" ? [a.fallback] : a?.fallback || [];
		if (S && (m === "both" || m === (typeof window > "u" ? "node" : "browser")) && o({
			namespace: v,
			i18nKey: g
		}), S && Array.isArray(C) && C.length) {
			var w = C[0], T = C.slice(1);
			if (typeof w == "string") return u(w, i, V(V({}, a), { fallback: T }));
		}
		return S && a && a.hasOwnProperty("default") && !C?.length ? a.default ? l(a.default, i) : a.default : S ? s : l(x, i);
	};
	return u;
}
function U(e, t, n, r) {
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
function zt(e, t, n, r, i, a) {
	if (!i || typeof i.count != "number") return n;
	var o = `${n}_${i.count}`;
	if (U(t, o, r, a) !== void 0) return o;
	var s = `${n}_${e.select(i.count)}`;
	if (U(t, s, r, a) !== void 0) return s;
	var c = `${n}.${i.count}`;
	if (U(t, c, r, a) !== void 0) return c;
	var l = `${n}.${e.select(i.count)}`;
	return U(t, l, r, a) === void 0 ? n : l;
}
function W(e) {
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
function G(e) {
	var t = e.obj, n = e.query, r = e.config, i = e.lang;
	return !n || Object.keys(n).length === 0 || Object.keys(t).forEach(function(e) {
		t[e] instanceof Object && G({
			obj: t[e],
			query: n,
			config: r,
			lang: i
		}), typeof t[e] == "string" && (t[e] = W({
			text: t[e],
			query: n,
			config: r,
			lang: i
		}));
	}), t;
}
function Bt(e) {
	var t = e.namespace, n = e.i18nKey;
	if (process.env.NODE_ENV !== "production") {
		if (!t) {
			console.warn(`[next-translate] The text "${n}" has no namespace in front of it.`);
			return;
		}
		console.warn(`[next-translate] "${t}:${n}" is missing in current namespace configuration. Try adding "${n}" to the namespace "${t}".`);
	}
}
function Vt(e) {
	var t = globalThis.__NEXT_TRANSLATE__ ?? {}, n = t.lang, r = t.namespaces, i = t.config, o = i.localesToIgnore || ["default"], s = !n || o.includes(n), c = function() {
		return L(H({
			config: i,
			allNamespaces: r,
			pluralRules: B(s ? void 0 : n),
			lang: n
		}), e);
	};
	return {
		t: Lt() ? c() : a(c, [e, n]),
		lang: n
	};
}
var K = function() {
	return K = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, K.apply(this, arguments);
};
function Ht(e) {
	var t = n(z);
	return a(function() {
		return K(K({}, t), { t: L(t.t, e) });
	}, [t, e]);
}
function q(e) {
	return (globalThis.__NEXT_TRANSLATE__?.config ? Vt : Ht)(e);
}
function Ut() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function J(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Wt() {
	let { t: e } = q("common"), [t, n] = o("auto");
	r(() => {
		let e = Ut();
		n(e), J(e);
	}, []), r(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => J("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function i() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		n(e), J(e), window.localStorage.setItem("theme", e);
	}
	let a = e(t === "auto" ? "shared.themeToggle.themeModeAutoSystemClick" : t === "light" ? "shared.themeToggle.themeModeLightClick" : "shared.themeToggle.themeModeDarkClick");
	return f("button", {
		type: "button",
		onClick: i,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e(t === "auto" ? "shared.themeToggle.themeAuto" : t === "dark" ? "shared.themeToggle.themeDark" : "shared.themeToggle.themeLight")
	});
}
var Gt = [
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
], Kt = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
};
function qt() {
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
			children: Gt.map((e) => f("option", {
				value: e,
				children: Kt(e)
			}, e))
		})
	});
}
function Jt(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), i(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function Yt() {
	let { t: e } = q("common");
	Jt("Header");
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
		children: p("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [p("div", {
				className: "flex items-center gap-8",
				children: [f(F, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), p("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						f(F, {
							href: "/",
							className: `nav-link${((e) => i === P(e, a))("/") ? " is-active" : ""}`,
							children: e("shared.header.home")
						}),
						f(F, {
							href: "/about",
							className: `nav-link${((e) => {
								let t = P(e, a);
								return i.startsWith(t) && (e !== "/" || i === t);
							})("/about") ? " is-active" : ""}`,
							children: e("shared.header.methodology")
						}),
						p("div", {
							className: "relative",
							children: [p("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: [e("shared.header.mockPages"), f(m, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								})]
							}), t && f("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								children: f("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: s.map((e) => f(F, {
										href: e.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => n(!1),
										children: e.label
									}, e.href))
								})
							})]
						})
					]
				})]
			}), p("div", {
				className: "flex items-center gap-4",
				children: [
					p("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [f("span", {
							className: "sr-only",
							children: e("shared.header.goToGithub")
						}), f("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: f("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					f(qt, {}),
					f(Wt, {})
				]
			})]
		})
	});
}
var Y = function() {
	return Y = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Y.apply(this, arguments);
}, X = t({
	ns: {},
	config: {}
});
function Xt(t) {
	var r = t.lang, i = t.namespaces, o = i === void 0 ? {} : i, s = t.children, c = t.config, l = c === void 0 ? {} : c, u = q().lang, d = h() || {}, f = d.locale, p = d.defaultLocale, m = n(X), g = Y(Y(Y({}, Zt()), m.ns), o), _ = r || u || f || p || "", v = Y(Y({}, m.config), l), y = v.localesToIgnore || ["default"], b = !_ || y.includes(_), x = a(function() {
		return B(b ? void 0 : _);
	}, [b, _]), S = a(function() {
		return H({
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
	return e.createElement(z.Provider, { value: {
		lang: _,
		t: S
	} }, e.createElement(X.Provider, { value: {
		ns: g,
		config: v
	} }, s));
}
function Zt() {
	return typeof window > "u" ? {} : window.__NEXT_DATA__?.props?.__namespaces || {};
}
var Qt = {
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
}, $t = {
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
}, en = {
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
}, tn = {
	"contactForm.name": "Name",
	"contactForm.email": "Email",
	"contactForm.subject": "Subject",
	"contactForm.message": "Message",
	"contactForm.sendMessage": "Send Message",
	"contactForm.wellGetBackTo": "We'll get back to you within 48 hours.",
	"contactHeader.contactUs": "Contact Us",
	"contactHeader.haveQuestionsOrWantTo": "Have questions or want to contribute? We'd love to hear from you."
}, nn = {
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
}, rn = {
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
}, an = {
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
}, on = {
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
}, sn = {
	"route.oopsPageNotFound": "Oops! Page not found",
	"route.returnToHome": "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:"
}, cn = {
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
}, ln = {
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
}, Z = {
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
};
function Q(e, t) {
	let n = {};
	for (let [r, i] of Object.entries(t)) n[e + "." + r] = i;
	return n;
}
var $ = {
	en: {
		...Q("about", Qt),
		...Q("blog", $t),
		...Q("careers", en),
		...Q("contact", tn),
		...Q("faq", nn),
		...Q("home", rn),
		...Q("pricing", an),
		...Q("products", on),
		...Q("route", sn),
		...Q("settings", cn),
		...Q("shared", ln),
		...Q("team", Z)
	},
	fr: {
		...Q("about", g),
		...Q("blog", _),
		...Q("careers", v),
		...Q("contact", y),
		...Q("faq", b),
		...Q("home", x),
		...Q("pricing", S),
		...Q("products", C),
		...Q("route", w),
		...Q("settings", T),
		...Q("shared", ee),
		...Q("team", te)
	},
	es: {
		...Q("about", ne),
		...Q("blog", re),
		...Q("careers", ie),
		...Q("contact", ae),
		...Q("faq", oe),
		...Q("home", se),
		...Q("pricing", ce),
		...Q("products", le),
		...Q("route", ue),
		...Q("settings", de),
		...Q("shared", fe),
		...Q("team", pe)
	},
	de: {
		...Q("about", me),
		...Q("blog", he),
		...Q("careers", ge),
		...Q("contact", _e),
		...Q("faq", ve),
		...Q("home", ye),
		...Q("pricing", be),
		...Q("products", E),
		...Q("route", D),
		...Q("settings", O),
		...Q("shared", k),
		...Q("team", A)
	},
	it: {
		...Q("about", j),
		...Q("blog", M),
		...Q("careers", N),
		...Q("contact", xe),
		...Q("faq", Se),
		...Q("home", Ce),
		...Q("pricing", we),
		...Q("products", Te),
		...Q("route", Ee),
		...Q("settings", De),
		...Q("shared", Oe),
		...Q("team", ke)
	},
	pt: {
		...Q("about", Ae),
		...Q("blog", je),
		...Q("careers", Me),
		...Q("contact", Ne),
		...Q("faq", Pe),
		...Q("home", Fe),
		...Q("pricing", Ie),
		...Q("products", Le),
		...Q("route", Re),
		...Q("settings", ze),
		...Q("shared", Be),
		...Q("team", Ve)
	},
	zh: {
		...Q("about", He),
		...Q("blog", Ue),
		...Q("careers", We),
		...Q("contact", Ge),
		...Q("faq", Ke),
		...Q("home", qe),
		...Q("pricing", Je),
		...Q("products", Ye),
		...Q("route", Xe),
		...Q("settings", Ze),
		...Q("shared", Qe),
		...Q("team", $e)
	},
	ja: {
		...Q("about", et),
		...Q("blog", tt),
		...Q("careers", nt),
		...Q("contact", rt),
		...Q("faq", it),
		...Q("home", at),
		...Q("pricing", ot),
		...Q("products", st),
		...Q("route", ct),
		...Q("settings", lt),
		...Q("shared", ut),
		...Q("team", dt)
	},
	ko: {
		...Q("about", ft),
		...Q("blog", pt),
		...Q("careers", mt),
		...Q("contact", ht),
		...Q("faq", gt),
		...Q("home", _t),
		...Q("pricing", vt),
		...Q("products", yt),
		...Q("route", bt),
		...Q("settings", xt),
		...Q("shared", St),
		...Q("team", Ct)
	},
	ru: {
		...Q("about", wt),
		...Q("blog", Tt),
		...Q("careers", Et),
		...Q("contact", Dt),
		...Q("faq", Ot),
		...Q("home", kt),
		...Q("pricing", At),
		...Q("products", jt),
		...Q("route", Mt),
		...Q("settings", Nt),
		...Q("shared", Pt),
		...Q("team", Ft)
	}
}, un = {
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
	loadLocaleFrom: async (e) => $[e ?? "en"] ?? $.en
};
function dn() {
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
function fn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function pn({ children: e, locale: t }) {
	let [n] = o(() => typeof performance < "u" ? performance.now() : 0);
	return i(() => {
		fn("AppRoot", n);
	}, [n]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		dn();
	}, []), f(d, { children: e });
}
function mn({ children: e }) {
	let [t, n] = o({}), [i, a] = o(!1);
	return r(() => {
		(async () => {
			try {
				n(await un.loadLocaleFrom?.("en", "common") ?? {}), a(!0);
			} catch (e) {
				console.error("Failed to load translations:", e), a(!0);
			}
		})();
	}, ["en"]), i ? f(Xt, {
		lang: "en",
		namespaces: { common: t },
		children: f(pn, {
			locale: "en",
			children: e
		})
	}) : null;
}
function hn() {
	return f(mn, { children: f(Yt, {}) });
}
export { hn as default };
