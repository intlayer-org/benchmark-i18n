import e, { createContext as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useState as o } from "react";
import s from "next/link";
import { useParams as c, usePathname as l, useRouter as u } from "next/navigation";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { ChevronDown as m } from "lucide-react";
import { useRouter as h } from "next/router";
var g = (e) => /^https?:\/\//.test(e ?? "");
function _(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var v = ({ href: e, children: t, ...n }) => {
	let r = c().lang ?? "en";
	return e == null || typeof e != "string" || g(e) ? f(s, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}) : f(s, {
		href: _(e, r),
		prefetch: !1,
		...n,
		children: t
	});
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
	var t = e.config, n = e.allNamespaces, r = e.pluralRules, i = e.lang, a = t.logger, o = a === void 0 ? M : a, s = t.allowEmptyStrings, c = s === void 0 ? !0 : s, l = function(e, n) {
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
function M(e) {
	var t = e.namespace, n = e.i18nKey;
	if (process.env.NODE_ENV !== "production") {
		if (!t) {
			console.warn(`[next-translate] The text "${n}" has no namespace in front of it.`);
			return;
		}
		console.warn(`[next-translate] "${t}:${n}" is missing in current namespace configuration. Try adding "${n}" to the namespace "${t}".`);
	}
}
function N(e) {
	var t = globalThis.__NEXT_TRANSLATE__ ?? {}, n = t.lang, r = t.namespaces, i = t.config, o = i.localesToIgnore || ["default"], s = !n || o.includes(n), c = function() {
		return b(D({
			config: i,
			allNamespaces: r,
			pluralRules: w(s ? void 0 : n),
			lang: n
		}), e);
	};
	return {
		t: C() ? c() : a(c, [e, n]),
		lang: n
	};
}
var P = function() {
	return P = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, P.apply(this, arguments);
};
function F(e) {
	var t = n(S);
	return a(function() {
		return P(P({}, t), { t: b(t.t, e) });
	}, [t, e]);
}
function I(e) {
	return (globalThis.__NEXT_TRANSLATE__?.config ? N : F)(e);
}
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
	let { t: e } = I("shared"), [t, n] = o("auto");
	r(() => {
		let e = L();
		n(e), R(e);
	}, []), r(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => R("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function i() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		n(e), R(e), window.localStorage.setItem("theme", e);
	}
	let a = e(t === "auto" ? "themeToggle.themeModeAutoSystemClick" : t === "light" ? "themeToggle.themeModeLightClick" : "themeToggle.themeModeDarkClick");
	return f("button", {
		type: "button",
		onClick: i,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e(t === "auto" ? "themeToggle.themeAuto" : t === "dark" ? "themeToggle.themeDark" : "themeToggle.themeLight")
	});
}
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
function H() {
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
			children: B.map((e) => f("option", {
				value: e,
				children: V(e)
			}, e))
		})
	});
}
function U(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), i(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function W() {
	let { t: e } = I("shared");
	U("Header");
	let [t, n] = o(!1), r = c(), i = l(), a = r.lang ?? "en", s = [
		{
			href: "/products",
			label: e("header.products")
		},
		{
			href: "/pricing",
			label: e("header.pricing")
		},
		{
			href: "/team",
			label: e("header.team")
		},
		{
			href: "/blog",
			label: e("header.blog")
		},
		{
			href: "/careers",
			label: e("header.careers")
		},
		{
			href: "/faq",
			label: e("header.faq")
		},
		{
			href: "/contact",
			label: e("header.contact")
		},
		{
			href: "/settings",
			label: e("header.settings")
		}
	];
	return f("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: p("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [p("div", {
				className: "flex items-center gap-8",
				children: [f(v, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), p("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						f(v, {
							href: "/",
							className: `nav-link${((e) => i === _(e, a))("/") ? " is-active" : ""}`,
							children: e("header.home")
						}),
						f(v, {
							href: "/about",
							className: `nav-link${((e) => {
								let t = _(e, a);
								return i.startsWith(t) && (e !== "/" || i === t);
							})("/about") ? " is-active" : ""}`,
							children: e("header.methodology")
						}),
						p("div", {
							className: "relative",
							children: [p("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: [e("header.mockPages"), f(m, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								})]
							}), t && f("div", {
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
							children: e("header.goToGithub")
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
					f(H, {}),
					f(z, {})
				]
			})]
		})
	});
}
var G = function() {
	return G = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, G.apply(this, arguments);
}, K = t({
	ns: {},
	config: {}
});
function q(t) {
	var r = t.lang, i = t.namespaces, o = i === void 0 ? {} : i, s = t.children, c = t.config, l = c === void 0 ? {} : c, u = I().lang, d = h() || {}, f = d.locale, p = d.defaultLocale, m = n(K), g = G(G(G({}, J()), m.ns), o), _ = r || u || f || p || "", v = G(G({}, m.config), l), y = v.localesToIgnore || ["default"], b = !_ || y.includes(_), x = a(function() {
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
	} }, e.createElement(K.Provider, { value: {
		ns: g,
		config: v
	} }, s));
}
function J() {
	return typeof window > "u" ? {} : window.__NEXT_DATA__?.props?.__namespaces || {};
}
var Y = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
}, X = {
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
	pages: {
		"*": ["shared"],
		"/[lang]/(home)": ["home"],
		"/[lang]/about": ["about"],
		"/[lang]/blog": ["blog"],
		"/[lang]/careers": ["careers"],
		"/[lang]/contact": ["contact"],
		"/[lang]/faq": ["faq"],
		"/[lang]/pricing": ["pricing"],
		"/[lang]/products": ["products"],
		"/[lang]/settings": ["settings"],
		"/[lang]/team": ["team"]
	},
	loadLocaleFrom: (e, t) => Y(Object.assign({
		"./locales/de/about.json": () => import("../locales/de/about.json"),
		"./locales/de/blog.json": () => import("../locales/de/blog.json"),
		"./locales/de/careers.json": () => import("../locales/de/careers.json"),
		"./locales/de/contact.json": () => import("../locales/de/contact.json"),
		"./locales/de/faq.json": () => import("../locales/de/faq.json"),
		"./locales/de/home.json": () => import("../locales/de/home.json"),
		"./locales/de/pricing.json": () => import("../locales/de/pricing.json"),
		"./locales/de/products.json": () => import("../locales/de/products.json"),
		"./locales/de/route.json": () => import("../locales/de/route.json"),
		"./locales/de/settings.json": () => import("../locales/de/settings.json"),
		"./locales/de/shared.json": () => import("../locales/de/shared.json"),
		"./locales/de/team.json": () => import("../locales/de/team.json"),
		"./locales/en/about.json": () => import("./about-BaAYAvkE.js"),
		"./locales/en/blog.json": () => import("./blog-CzOpmp0n.js"),
		"./locales/en/careers.json": () => import("./careers-1TOv7qq6.js"),
		"./locales/en/contact.json": () => import("./contact-DjqHx5tM.js"),
		"./locales/en/faq.json": () => import("./faq-XJpq1JTj.js"),
		"./locales/en/home.json": () => import("./home-CdZlgL3b.js"),
		"./locales/en/pricing.json": () => import("./pricing-BPjt5t_O.js"),
		"./locales/en/products.json": () => import("./products-Df41mIQC.js"),
		"./locales/en/route.json": () => import("./route-5-5GFmRv.js"),
		"./locales/en/settings.json": () => import("./settings-CmZ84y7S.js"),
		"./locales/en/shared.json": () => import("./shared-CBRuvueV.js"),
		"./locales/en/team.json": () => import("./team-CuN0wXZd.js"),
		"./locales/es/about.json": () => import("../locales/es/about.json"),
		"./locales/es/blog.json": () => import("../locales/es/blog.json"),
		"./locales/es/careers.json": () => import("../locales/es/careers.json"),
		"./locales/es/contact.json": () => import("../locales/es/contact.json"),
		"./locales/es/faq.json": () => import("../locales/es/faq.json"),
		"./locales/es/home.json": () => import("../locales/es/home.json"),
		"./locales/es/pricing.json": () => import("../locales/es/pricing.json"),
		"./locales/es/products.json": () => import("../locales/es/products.json"),
		"./locales/es/route.json": () => import("../locales/es/route.json"),
		"./locales/es/settings.json": () => import("../locales/es/settings.json"),
		"./locales/es/shared.json": () => import("../locales/es/shared.json"),
		"./locales/es/team.json": () => import("../locales/es/team.json"),
		"./locales/fr/about.json": () => import("../locales/fr/about.json"),
		"./locales/fr/blog.json": () => import("../locales/fr/blog.json"),
		"./locales/fr/careers.json": () => import("../locales/fr/careers.json"),
		"./locales/fr/contact.json": () => import("../locales/fr/contact.json"),
		"./locales/fr/faq.json": () => import("../locales/fr/faq.json"),
		"./locales/fr/home.json": () => import("../locales/fr/home.json"),
		"./locales/fr/pricing.json": () => import("../locales/fr/pricing.json"),
		"./locales/fr/products.json": () => import("../locales/fr/products.json"),
		"./locales/fr/route.json": () => import("../locales/fr/route.json"),
		"./locales/fr/settings.json": () => import("../locales/fr/settings.json"),
		"./locales/fr/shared.json": () => import("../locales/fr/shared.json"),
		"./locales/fr/team.json": () => import("../locales/fr/team.json"),
		"./locales/it/about.json": () => import("../locales/it/about.json"),
		"./locales/it/blog.json": () => import("../locales/it/blog.json"),
		"./locales/it/careers.json": () => import("../locales/it/careers.json"),
		"./locales/it/contact.json": () => import("../locales/it/contact.json"),
		"./locales/it/faq.json": () => import("../locales/it/faq.json"),
		"./locales/it/home.json": () => import("../locales/it/home.json"),
		"./locales/it/pricing.json": () => import("../locales/it/pricing.json"),
		"./locales/it/products.json": () => import("../locales/it/products.json"),
		"./locales/it/route.json": () => import("../locales/it/route.json"),
		"./locales/it/settings.json": () => import("../locales/it/settings.json"),
		"./locales/it/shared.json": () => import("../locales/it/shared.json"),
		"./locales/it/team.json": () => import("../locales/it/team.json"),
		"./locales/ja/about.json": () => import("../locales/ja/about.json"),
		"./locales/ja/blog.json": () => import("../locales/ja/blog.json"),
		"./locales/ja/careers.json": () => import("../locales/ja/careers.json"),
		"./locales/ja/contact.json": () => import("../locales/ja/contact.json"),
		"./locales/ja/faq.json": () => import("../locales/ja/faq.json"),
		"./locales/ja/home.json": () => import("../locales/ja/home.json"),
		"./locales/ja/pricing.json": () => import("../locales/ja/pricing.json"),
		"./locales/ja/products.json": () => import("../locales/ja/products.json"),
		"./locales/ja/route.json": () => import("../locales/ja/route.json"),
		"./locales/ja/settings.json": () => import("../locales/ja/settings.json"),
		"./locales/ja/shared.json": () => import("../locales/ja/shared.json"),
		"./locales/ja/team.json": () => import("../locales/ja/team.json"),
		"./locales/ko/about.json": () => import("../locales/ko/about.json"),
		"./locales/ko/blog.json": () => import("../locales/ko/blog.json"),
		"./locales/ko/careers.json": () => import("../locales/ko/careers.json"),
		"./locales/ko/contact.json": () => import("../locales/ko/contact.json"),
		"./locales/ko/faq.json": () => import("../locales/ko/faq.json"),
		"./locales/ko/home.json": () => import("../locales/ko/home.json"),
		"./locales/ko/pricing.json": () => import("../locales/ko/pricing.json"),
		"./locales/ko/products.json": () => import("../locales/ko/products.json"),
		"./locales/ko/route.json": () => import("../locales/ko/route.json"),
		"./locales/ko/settings.json": () => import("../locales/ko/settings.json"),
		"./locales/ko/shared.json": () => import("../locales/ko/shared.json"),
		"./locales/ko/team.json": () => import("../locales/ko/team.json"),
		"./locales/pt/about.json": () => import("../locales/pt/about.json"),
		"./locales/pt/blog.json": () => import("../locales/pt/blog.json"),
		"./locales/pt/careers.json": () => import("../locales/pt/careers.json"),
		"./locales/pt/contact.json": () => import("../locales/pt/contact.json"),
		"./locales/pt/faq.json": () => import("../locales/pt/faq.json"),
		"./locales/pt/home.json": () => import("../locales/pt/home.json"),
		"./locales/pt/pricing.json": () => import("../locales/pt/pricing.json"),
		"./locales/pt/products.json": () => import("../locales/pt/products.json"),
		"./locales/pt/route.json": () => import("../locales/pt/route.json"),
		"./locales/pt/settings.json": () => import("../locales/pt/settings.json"),
		"./locales/pt/shared.json": () => import("../locales/pt/shared.json"),
		"./locales/pt/team.json": () => import("../locales/pt/team.json"),
		"./locales/ru/about.json": () => import("../locales/ru/about.json"),
		"./locales/ru/blog.json": () => import("../locales/ru/blog.json"),
		"./locales/ru/careers.json": () => import("../locales/ru/careers.json"),
		"./locales/ru/contact.json": () => import("../locales/ru/contact.json"),
		"./locales/ru/faq.json": () => import("../locales/ru/faq.json"),
		"./locales/ru/home.json": () => import("../locales/ru/home.json"),
		"./locales/ru/pricing.json": () => import("../locales/ru/pricing.json"),
		"./locales/ru/products.json": () => import("../locales/ru/products.json"),
		"./locales/ru/route.json": () => import("../locales/ru/route.json"),
		"./locales/ru/settings.json": () => import("../locales/ru/settings.json"),
		"./locales/ru/shared.json": () => import("../locales/ru/shared.json"),
		"./locales/ru/team.json": () => import("../locales/ru/team.json"),
		"./locales/zh/about.json": () => import("../locales/zh/about.json"),
		"./locales/zh/blog.json": () => import("../locales/zh/blog.json"),
		"./locales/zh/careers.json": () => import("../locales/zh/careers.json"),
		"./locales/zh/contact.json": () => import("../locales/zh/contact.json"),
		"./locales/zh/faq.json": () => import("../locales/zh/faq.json"),
		"./locales/zh/home.json": () => import("../locales/zh/home.json"),
		"./locales/zh/pricing.json": () => import("../locales/zh/pricing.json"),
		"./locales/zh/products.json": () => import("../locales/zh/products.json"),
		"./locales/zh/route.json": () => import("../locales/zh/route.json"),
		"./locales/zh/settings.json": () => import("../locales/zh/settings.json"),
		"./locales/zh/shared.json": () => import("../locales/zh/shared.json"),
		"./locales/zh/team.json": () => import("../locales/zh/team.json")
	}), `./locales/${e}/${t}.json`, 4).then((e) => e.default)
};
function Z() {
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
function Q(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function $({ children: e, locale: t }) {
	let [n] = o(() => typeof performance < "u" ? performance.now() : 0);
	return i(() => {
		Q("AppRoot", n);
	}, [n]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		Z();
	}, []), f(d, { children: e });
}
var ee = [
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"home",
	"pricing",
	"products",
	"route",
	"settings",
	"shared",
	"team"
];
function te({ children: e }) {
	let [t, n] = o({}), [i, a] = o(!1);
	return r(() => {
		(async () => {
			try {
				let e = await Promise.all(ee.map(async (e) => [e, await X.loadLocaleFrom?.("en", e) ?? {}]));
				n(Object.fromEntries(e)), a(!0);
			} catch (e) {
				console.error("Failed to load translations:", e), a(!0);
			}
		})();
	}, ["en"]), i ? f(q, {
		lang: "en",
		namespaces: t,
		children: f($, {
			locale: "en",
			children: e
		})
	}) : null;
}
function ne() {
	return f(te, { children: f(W, {}) });
}
export { ne as default };
var e = {
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
};
export { e as default };
var e = {
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
};
export { e as default };
var e = {
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
};
export { e as default };
var e = {
	"contactForm.name": "Name",
	"contactForm.email": "Email",
	"contactForm.subject": "Subject",
	"contactForm.message": "Message",
	"contactForm.sendMessage": "Send Message",
	"contactForm.wellGetBackTo": "We'll get back to you within 48 hours.",
	"contactHeader.contactUs": "Contact Us",
	"contactHeader.haveQuestionsOrWantTo": "Have questions or want to contribute? We'd love to hear from you."
};
export { e as default };
var e = {
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
};
export { e as default };
var e = {
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
};
export { e as default };
var e = {
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
};
export { e as default };
var e = {
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
};
export { e as default };
var e = {
	"route.oopsPageNotFound": "Oops! Page not found",
	"route.returnToHome": "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:"
};
export { e as default };
var e = {
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
};
export { e as default };
var e = {
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
};
export { e as default };
var e = {
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
export { e as default };
