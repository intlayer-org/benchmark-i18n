import e, { createContext as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useState as o } from "react";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
import { useRouter as u } from "next/router";
var d = function() {
	return d = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, d.apply(this, arguments);
};
function f(e, t) {
	return typeof t == "string" ? function(n, r, i) {
		return e(n, r, d({ ns: t }, i));
	} : e;
}
var p;
typeof e.createContext == "function" && (p = e.createContext({
	t: function(e) {
		return Array.isArray(e) ? e[0] : e;
	},
	lang: ""
}));
var m = p;
function h() {
	return typeof window > "u";
}
function g(e) {
	try {
		return new Intl.PluralRules(e);
	} catch {
		return new Intl.PluralRules();
	}
}
var _ = function() {
	return _ = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, _.apply(this, arguments);
};
function v(e, t) {
	if (!t) return { i18nKey: e };
	var n = e.indexOf(t);
	return n < 0 ? { i18nKey: e } : {
		namespace: e.slice(0, n),
		i18nKey: e.slice(n + t.length)
	};
}
function y(e) {
	var t = e.config, n = e.allNamespaces, r = e.pluralRules, i = e.lang, a = t.logger, o = a === void 0 ? w : a, s = t.allowEmptyStrings, c = s === void 0 ? !0 : s, l = function(e, n) {
		return Array.isArray(e) ? e.map(function(e) {
			return l(e, n);
		}) : e instanceof Object ? C({
			obj: e,
			query: n,
			config: t,
			lang: i
		}) : S({
			text: e,
			query: n,
			config: t,
			lang: i
		});
	}, u = function(e, i, a) {
		e === void 0 && (e = "");
		var s = Array.isArray(e) ? e[0] : e, d = t.nsSeparator, f = d === void 0 ? ":" : d, p = t.loggerEnvironment, m = p === void 0 ? "browser" : p, h = v(s, f), g = h.i18nKey, y = h.namespace, S = y === void 0 ? a?.ns ?? t.defaultNS : y, C = S && n[S] || {}, w = b(C, x(r, C, g, t, i, a), t, a), T = typeof w == "object" ? JSON.parse(JSON.stringify(w)) : w, E = T === void 0 || typeof T == "object" && !Object.keys(T).length || T === "" && !c, D = typeof a?.fallback == "string" ? [a.fallback] : a?.fallback || [];
		if (E && (m === "both" || m === (typeof window > "u" ? "node" : "browser")) && o({
			namespace: S,
			i18nKey: g
		}), E && Array.isArray(D) && D.length) {
			var O = D[0], k = D.slice(1);
			if (typeof O == "string") return u(O, i, _(_({}, a), { fallback: k }));
		}
		return E && a && a.hasOwnProperty("default") && !D?.length ? a.default ? l(a.default, i) : a.default : E ? s : l(T, i);
	};
	return u;
}
function b(e, t, n, r) {
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
function x(e, t, n, r, i, a) {
	if (!i || typeof i.count != "number") return n;
	var o = `${n}_${i.count}`;
	if (b(t, o, r, a) !== void 0) return o;
	var s = `${n}_${e.select(i.count)}`;
	if (b(t, s, r, a) !== void 0) return s;
	var c = `${n}.${i.count}`;
	if (b(t, c, r, a) !== void 0) return c;
	var l = `${n}.${e.select(i.count)}`;
	return b(t, l, r, a) === void 0 ? n : l;
}
function S(e) {
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
function C(e) {
	var t = e.obj, n = e.query, r = e.config, i = e.lang;
	return !n || Object.keys(n).length === 0 || Object.keys(t).forEach(function(e) {
		t[e] instanceof Object && C({
			obj: t[e],
			query: n,
			config: r,
			lang: i
		}), typeof t[e] == "string" && (t[e] = S({
			text: t[e],
			query: n,
			config: r,
			lang: i
		}));
	}), t;
}
function w(e) {
	var t = e.namespace, n = e.i18nKey;
	if (process.env.NODE_ENV !== "production") {
		if (!t) {
			console.warn(`[next-translate] The text "${n}" has no namespace in front of it.`);
			return;
		}
		console.warn(`[next-translate] "${t}:${n}" is missing in current namespace configuration. Try adding "${n}" to the namespace "${t}".`);
	}
}
function T(e) {
	var t = globalThis.__NEXT_TRANSLATE__ ?? {}, n = t.lang, r = t.namespaces, i = t.config, o = i.localesToIgnore || ["default"], s = !n || o.includes(n), c = function() {
		return f(y({
			config: i,
			allNamespaces: r,
			pluralRules: g(s ? void 0 : n),
			lang: n
		}), e);
	};
	return {
		t: h() ? c() : a(c, [e, n]),
		lang: n
	};
}
var E = function() {
	return E = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, E.apply(this, arguments);
};
function D(e) {
	var t = n(m);
	return a(function() {
		return E(E({}, t), { t: f(t.t, e) });
	}, [t, e]);
}
function O(e) {
	return (globalThis.__NEXT_TRANSLATE__?.config ? T : D)(e);
}
function k() {
	let { t: e } = O("home");
	return l("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			c("h2", {
				className: "text-2xl font-bold text-foreground",
				children: e("understandingImpact.understandingTheImpact")
			}),
			l("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					c("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: e("understandingImpact.whyASingleLargeJson")
					}),
					c("p", {
						className: "text-sm text-muted-foreground",
						children: e("understandingImpact.manyI18nLibrariesStoreTranslations")
					}),
					l("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							c("li", { children: e("understandingImpact.theJsonMustBeParsed") }),
							c("li", { children: e("understandingImpact.contextBasedArchitecturesCanCause") }),
							c("li", { children: e("understandingImpact.duringServerSideRenderingThe") })
						]
					})
				]
			}),
			l("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					c("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: e("understandingImpact.theTradeOffsOfDynamic")
					}),
					c("p", {
						className: "text-sm text-muted-foreground",
						children: e("understandingImpact.splittingTranslationsIntoPerRoute")
					}),
					l("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							l("li", { children: [
								c("strong", {
									className: "text-foreground",
									children: e("understandingImpact.waterfallRequests")
								}),
								" ",
								"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
							] }),
							l("li", { children: [
								c("strong", {
									className: "text-foreground",
									children: e("understandingImpact.flashOfUntranslatedContentFouc")
								}),
								" ",
								"users may briefly see translation keys or a fallback language before the chunk arrives."
							] }),
							l("li", { children: [
								c("strong", {
									className: "text-foreground",
									children: e("understandingImpact.cacheInvalidation")
								}),
								" ",
								"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
							] })
						]
					})
				]
			}),
			l("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [c("h3", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: e("understandingImpact.whatThisBenchmarkMeasures")
				}), c("p", {
					className: "text-sm text-muted-foreground",
					children: e("understandingImpact.thisTestAppProvidesA")
				})]
			})
		]
	});
}
var A = function() {
	return A = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, A.apply(this, arguments);
}, j = t({
	ns: {},
	config: {}
});
function M(t) {
	var r = t.lang, i = t.namespaces, o = i === void 0 ? {} : i, s = t.children, c = t.config, l = c === void 0 ? {} : c, d = O().lang, f = u() || {}, p = f.locale, h = f.defaultLocale, _ = n(j), v = A(A(A({}, N()), _.ns), o), b = r || d || p || h || "", x = A(A({}, _.config), l), S = x.localesToIgnore || ["default"], C = !b || S.includes(b), w = a(function() {
		return g(C ? void 0 : b);
	}, [C, b]), T = a(function() {
		return y({
			config: x,
			allNamespaces: v,
			pluralRules: w,
			lang: b
		});
	}, [
		x,
		v,
		w,
		b
	]);
	return e.createElement(m.Provider, { value: {
		lang: b,
		t: T
	} }, e.createElement(j.Provider, { value: {
		ns: v,
		config: x
	} }, s));
}
function N() {
	return typeof window > "u" ? {} : window.__NEXT_DATA__?.props?.__namespaces || {};
}
var P = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
}, F = {
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
	loadLocaleFrom: (e, t) => P(Object.assign({
		"./locales/de/about.json": () => import("../../../locales/de/about.json"),
		"./locales/de/blog.json": () => import("../../../locales/de/blog.json"),
		"./locales/de/careers.json": () => import("../../../locales/de/careers.json"),
		"./locales/de/contact.json": () => import("../../../locales/de/contact.json"),
		"./locales/de/faq.json": () => import("../../../locales/de/faq.json"),
		"./locales/de/home.json": () => import("../../../locales/de/home.json"),
		"./locales/de/pricing.json": () => import("../../../locales/de/pricing.json"),
		"./locales/de/products.json": () => import("../../../locales/de/products.json"),
		"./locales/de/route.json": () => import("../../../locales/de/route.json"),
		"./locales/de/settings.json": () => import("../../../locales/de/settings.json"),
		"./locales/de/shared.json": () => import("../../../locales/de/shared.json"),
		"./locales/de/team.json": () => import("../../../locales/de/team.json"),
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
		"./locales/es/about.json": () => import("../../../locales/es/about.json"),
		"./locales/es/blog.json": () => import("../../../locales/es/blog.json"),
		"./locales/es/careers.json": () => import("../../../locales/es/careers.json"),
		"./locales/es/contact.json": () => import("../../../locales/es/contact.json"),
		"./locales/es/faq.json": () => import("../../../locales/es/faq.json"),
		"./locales/es/home.json": () => import("../../../locales/es/home.json"),
		"./locales/es/pricing.json": () => import("../../../locales/es/pricing.json"),
		"./locales/es/products.json": () => import("../../../locales/es/products.json"),
		"./locales/es/route.json": () => import("../../../locales/es/route.json"),
		"./locales/es/settings.json": () => import("../../../locales/es/settings.json"),
		"./locales/es/shared.json": () => import("../../../locales/es/shared.json"),
		"./locales/es/team.json": () => import("../../../locales/es/team.json"),
		"./locales/fr/about.json": () => import("../../../locales/fr/about.json"),
		"./locales/fr/blog.json": () => import("../../../locales/fr/blog.json"),
		"./locales/fr/careers.json": () => import("../../../locales/fr/careers.json"),
		"./locales/fr/contact.json": () => import("../../../locales/fr/contact.json"),
		"./locales/fr/faq.json": () => import("../../../locales/fr/faq.json"),
		"./locales/fr/home.json": () => import("../../../locales/fr/home.json"),
		"./locales/fr/pricing.json": () => import("../../../locales/fr/pricing.json"),
		"./locales/fr/products.json": () => import("../../../locales/fr/products.json"),
		"./locales/fr/route.json": () => import("../../../locales/fr/route.json"),
		"./locales/fr/settings.json": () => import("../../../locales/fr/settings.json"),
		"./locales/fr/shared.json": () => import("../../../locales/fr/shared.json"),
		"./locales/fr/team.json": () => import("../../../locales/fr/team.json"),
		"./locales/it/about.json": () => import("../../../locales/it/about.json"),
		"./locales/it/blog.json": () => import("../../../locales/it/blog.json"),
		"./locales/it/careers.json": () => import("../../../locales/it/careers.json"),
		"./locales/it/contact.json": () => import("../../../locales/it/contact.json"),
		"./locales/it/faq.json": () => import("../../../locales/it/faq.json"),
		"./locales/it/home.json": () => import("../../../locales/it/home.json"),
		"./locales/it/pricing.json": () => import("../../../locales/it/pricing.json"),
		"./locales/it/products.json": () => import("../../../locales/it/products.json"),
		"./locales/it/route.json": () => import("../../../locales/it/route.json"),
		"./locales/it/settings.json": () => import("../../../locales/it/settings.json"),
		"./locales/it/shared.json": () => import("../../../locales/it/shared.json"),
		"./locales/it/team.json": () => import("../../../locales/it/team.json"),
		"./locales/ja/about.json": () => import("../../../locales/ja/about.json"),
		"./locales/ja/blog.json": () => import("../../../locales/ja/blog.json"),
		"./locales/ja/careers.json": () => import("../../../locales/ja/careers.json"),
		"./locales/ja/contact.json": () => import("../../../locales/ja/contact.json"),
		"./locales/ja/faq.json": () => import("../../../locales/ja/faq.json"),
		"./locales/ja/home.json": () => import("../../../locales/ja/home.json"),
		"./locales/ja/pricing.json": () => import("../../../locales/ja/pricing.json"),
		"./locales/ja/products.json": () => import("../../../locales/ja/products.json"),
		"./locales/ja/route.json": () => import("../../../locales/ja/route.json"),
		"./locales/ja/settings.json": () => import("../../../locales/ja/settings.json"),
		"./locales/ja/shared.json": () => import("../../../locales/ja/shared.json"),
		"./locales/ja/team.json": () => import("../../../locales/ja/team.json"),
		"./locales/ko/about.json": () => import("../../../locales/ko/about.json"),
		"./locales/ko/blog.json": () => import("../../../locales/ko/blog.json"),
		"./locales/ko/careers.json": () => import("../../../locales/ko/careers.json"),
		"./locales/ko/contact.json": () => import("../../../locales/ko/contact.json"),
		"./locales/ko/faq.json": () => import("../../../locales/ko/faq.json"),
		"./locales/ko/home.json": () => import("../../../locales/ko/home.json"),
		"./locales/ko/pricing.json": () => import("../../../locales/ko/pricing.json"),
		"./locales/ko/products.json": () => import("../../../locales/ko/products.json"),
		"./locales/ko/route.json": () => import("../../../locales/ko/route.json"),
		"./locales/ko/settings.json": () => import("../../../locales/ko/settings.json"),
		"./locales/ko/shared.json": () => import("../../../locales/ko/shared.json"),
		"./locales/ko/team.json": () => import("../../../locales/ko/team.json"),
		"./locales/pt/about.json": () => import("../../../locales/pt/about.json"),
		"./locales/pt/blog.json": () => import("../../../locales/pt/blog.json"),
		"./locales/pt/careers.json": () => import("../../../locales/pt/careers.json"),
		"./locales/pt/contact.json": () => import("../../../locales/pt/contact.json"),
		"./locales/pt/faq.json": () => import("../../../locales/pt/faq.json"),
		"./locales/pt/home.json": () => import("../../../locales/pt/home.json"),
		"./locales/pt/pricing.json": () => import("../../../locales/pt/pricing.json"),
		"./locales/pt/products.json": () => import("../../../locales/pt/products.json"),
		"./locales/pt/route.json": () => import("../../../locales/pt/route.json"),
		"./locales/pt/settings.json": () => import("../../../locales/pt/settings.json"),
		"./locales/pt/shared.json": () => import("../../../locales/pt/shared.json"),
		"./locales/pt/team.json": () => import("../../../locales/pt/team.json"),
		"./locales/ru/about.json": () => import("../../../locales/ru/about.json"),
		"./locales/ru/blog.json": () => import("../../../locales/ru/blog.json"),
		"./locales/ru/careers.json": () => import("../../../locales/ru/careers.json"),
		"./locales/ru/contact.json": () => import("../../../locales/ru/contact.json"),
		"./locales/ru/faq.json": () => import("../../../locales/ru/faq.json"),
		"./locales/ru/home.json": () => import("../../../locales/ru/home.json"),
		"./locales/ru/pricing.json": () => import("../../../locales/ru/pricing.json"),
		"./locales/ru/products.json": () => import("../../../locales/ru/products.json"),
		"./locales/ru/route.json": () => import("../../../locales/ru/route.json"),
		"./locales/ru/settings.json": () => import("../../../locales/ru/settings.json"),
		"./locales/ru/shared.json": () => import("../../../locales/ru/shared.json"),
		"./locales/ru/team.json": () => import("../../../locales/ru/team.json"),
		"./locales/zh/about.json": () => import("../../../locales/zh/about.json"),
		"./locales/zh/blog.json": () => import("../../../locales/zh/blog.json"),
		"./locales/zh/careers.json": () => import("../../../locales/zh/careers.json"),
		"./locales/zh/contact.json": () => import("../../../locales/zh/contact.json"),
		"./locales/zh/faq.json": () => import("../../../locales/zh/faq.json"),
		"./locales/zh/home.json": () => import("../../../locales/zh/home.json"),
		"./locales/zh/pricing.json": () => import("../../../locales/zh/pricing.json"),
		"./locales/zh/products.json": () => import("../../../locales/zh/products.json"),
		"./locales/zh/route.json": () => import("../../../locales/zh/route.json"),
		"./locales/zh/settings.json": () => import("../../../locales/zh/settings.json"),
		"./locales/zh/shared.json": () => import("../../../locales/zh/shared.json"),
		"./locales/zh/team.json": () => import("../../../locales/zh/team.json")
	}), `./locales/${e}/${t}.json`, 4).then((e) => e.default)
};
function I() {
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
function L(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function R({ children: e, locale: t }) {
	let [n] = o(() => typeof performance < "u" ? performance.now() : 0);
	return i(() => {
		L("AppRoot", n);
	}, [n]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		I();
	}, []), c(s, { children: e });
}
var z = [
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
function B({ children: e }) {
	let [t, n] = o({}), [i, a] = o(!1);
	return r(() => {
		(async () => {
			try {
				let e = await Promise.all(z.map(async (e) => [e, await F.loadLocaleFrom?.("en", e) ?? {}]));
				n(Object.fromEntries(e)), a(!0);
			} catch (e) {
				console.error("Failed to load translations:", e), a(!0);
			}
		})();
	}, ["en"]), i ? c(M, {
		lang: "en",
		namespaces: t,
		children: c(R, {
			locale: "en",
			children: e
		})
	}) : null;
}
function V() {
	return c(B, { children: c(k, {}) });
}
export { V as default };
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
