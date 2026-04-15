"use client";
import { useParams as e, usePathname as t, useRouter as n } from "next/navigation";
import r from "next/link";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import { ChevronDown as o } from "lucide-react";
import s, { useContext as c, useEffect as l, useLayoutEffect as u, useMemo as d, useState as f } from "react";
//#region components/Link.tsx
var p = (e) => /^https?:\/\//.test(e ?? ""), m = ({ href: t, children: n, ...a }) => {
	let o = e().lang ?? "en", s = p(t.toString());
	return /* @__PURE__ */ i(r, {
		href: t && !s && !t.toString().startsWith(`/${o}`) ? `/${o}${t}` : t,
		...a,
		children: n
	});
}, h = function() {
	return h = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, h.apply(this, arguments);
};
function g(e, t) {
	return typeof t == "string" ? function(n, r, i) {
		return e(n, r, h({ ns: t }, i));
	} : e;
}
//#endregion
//#region ../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/context.js
var _;
typeof s.createContext == "function" && (_ = s.createContext({
	t: function(e) {
		return Array.isArray(e) ? e[0] : e;
	},
	lang: ""
}));
var v = _;
//#endregion
//#region ../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/isServer.js
function y() {
	return typeof window > "u";
}
//#endregion
//#region ../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/safePluralRules.js
function b(e) {
	try {
		return new Intl.PluralRules(e);
	} catch {
		return new Intl.PluralRules();
	}
}
//#endregion
//#region ../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/transCore.js
var x = function() {
	return x = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, x.apply(this, arguments);
};
function S(e, t) {
	if (!t) return { i18nKey: e };
	var n = e.indexOf(t);
	return n < 0 ? { i18nKey: e } : {
		namespace: e.slice(0, n),
		i18nKey: e.slice(n + t.length)
	};
}
function C(e) {
	var t = e.config, n = e.allNamespaces, r = e.pluralRules, i = e.lang, a = t.logger, o = a === void 0 ? O : a, s = t.allowEmptyStrings, c = s === void 0 ? !0 : s, l = function(e, n) {
		return Array.isArray(e) ? e.map(function(e) {
			return l(e, n);
		}) : e instanceof Object ? D({
			obj: e,
			query: n,
			config: t,
			lang: i
		}) : E({
			text: e,
			query: n,
			config: t,
			lang: i
		});
	}, u = function(e, i, a) {
		e === void 0 && (e = "");
		var s = Array.isArray(e) ? e[0] : e, d = t.nsSeparator, f = d === void 0 ? ":" : d, p = t.loggerEnvironment, m = p === void 0 ? "browser" : p, h = S(s, f), g = h.i18nKey, _ = h.namespace, v = _ === void 0 ? a?.ns ?? t.defaultNS : _, y = v && n[v] || {}, b = w(y, T(r, y, g, t, i, a), t, a), C = typeof b == "object" ? JSON.parse(JSON.stringify(b)) : b, E = C === void 0 || typeof C == "object" && !Object.keys(C).length || C === "" && !c, D = typeof a?.fallback == "string" ? [a.fallback] : a?.fallback || [];
		if (E && (m === "both" || m === (typeof window > "u" ? "node" : "browser")) && o({
			namespace: v,
			i18nKey: g
		}), E && Array.isArray(D) && D.length) {
			var O = D[0], k = D.slice(1);
			if (typeof O == "string") return u(O, i, x(x({}, a), { fallback: k }));
		}
		return E && a && a.hasOwnProperty("default") && !D?.length ? a.default ? l(a.default, i) : a.default : E ? s : l(C, i);
	};
	return u;
}
function w(e, t, n, r) {
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
function T(e, t, n, r, i, a) {
	if (!i || typeof i.count != "number") return n;
	var o = `${n}_${i.count}`;
	if (w(t, o, r, a) !== void 0) return o;
	var s = `${n}_${e.select(i.count)}`;
	if (w(t, s, r, a) !== void 0) return s;
	var c = `${n}.${i.count}`;
	if (w(t, c, r, a) !== void 0) return c;
	var l = `${n}.${e.select(i.count)}`;
	return w(t, l, r, a) === void 0 ? n : l;
}
function E(e) {
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
function D(e) {
	var t = e.obj, n = e.query, r = e.config, i = e.lang;
	return !n || Object.keys(n).length === 0 || Object.keys(t).forEach(function(e) {
		t[e] instanceof Object && D({
			obj: t[e],
			query: n,
			config: r,
			lang: i
		}), typeof t[e] == "string" && (t[e] = E({
			text: t[e],
			query: n,
			config: r,
			lang: i
		}));
	}), t;
}
function O(e) {
	var t = e.namespace, n = e.i18nKey;
	if (process.env.NODE_ENV !== "production") {
		if (!t) {
			console.warn(`[next-translate] The text "${n}" has no namespace in front of it.`);
			return;
		}
		console.warn(`[next-translate] "${t}:${n}" is missing in current namespace configuration. Try adding "${n}" to the namespace "${t}".`);
	}
}
//#endregion
//#region ../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/createTranslation.js
function k(e) {
	var t = globalThis.__NEXT_TRANSLATE__ ?? {}, n = t.lang, r = t.namespaces, i = t.config, a = i.localesToIgnore || ["default"], o = !n || a.includes(n), s = function() {
		return g(C({
			config: i,
			allNamespaces: r,
			pluralRules: b(o ? void 0 : n),
			lang: n
		}), e);
	};
	return {
		t: y() ? s() : d(s, [e, n]),
		lang: n
	};
}
//#endregion
//#region ../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/useTranslation.js
var A = function() {
	return A = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, A.apply(this, arguments);
};
function j(e) {
	var t = c(v);
	return d(function() {
		return A(A({}, t), { t: g(t.t, e) });
	}, [t, e]);
}
function M(e) {
	return (globalThis.__NEXT_TRANSLATE__?.config ? k : j)(e);
}
//#endregion
//#region components/ThemeToggle.tsx
function N() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function P(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function F() {
	let { t: e } = M("common"), [t, n] = f("auto");
	l(() => {
		let e = N();
		n(e), P(e);
	}, []), l(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => P("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function r() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		n(e), P(e), window.localStorage.setItem("theme", e);
	}
	let a = e(t === "auto" ? "shared.themeToggle.themeModeAutoSystemClick" : t === "light" ? "shared.themeToggle.themeModeLightClick" : "shared.themeToggle.themeModeDarkClick");
	return /* @__PURE__ */ i("button", {
		type: "button",
		onClick: r,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e(t === "auto" ? "shared.themeToggle.themeAuto" : t === "dark" ? "shared.themeToggle.themeDark" : "shared.themeToggle.themeLight")
	});
}
//#endregion
//#region i18n/config.ts
var I = [
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
], L = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
};
//#endregion
//#region components/LocaleSwitcher.tsx
function R() {
	let r = e().lang ?? "en", a = t(), o = n(), s = (e) => {
		let t = a.replace(`/${r}`, `/${e}`);
		o.push(t);
	};
	return /* @__PURE__ */ i("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ i("select", {
			value: r,
			onChange: (e) => s(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: I.map((e) => /* @__PURE__ */ i("option", {
				value: e,
				children: L(e)
			}, e))
		})
	});
}
//#endregion
//#region hooks/usePerformanceMeasure.ts
function z(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), u(() => {
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
function B() {
	let { t: n } = M("common");
	z("Header");
	let [r, s] = f(!1), c = e().lang ?? "en", l = t(), u = [
		{
			href: "/products",
			label: n("shared.header.products")
		},
		{
			href: "/pricing",
			label: n("shared.header.pricing")
		},
		{
			href: "/team",
			label: n("shared.header.team")
		},
		{
			href: "/blog",
			label: n("shared.header.blog")
		},
		{
			href: "/careers",
			label: n("shared.header.careers")
		},
		{
			href: "/faq",
			label: n("shared.header.faq")
		},
		{
			href: "/contact",
			label: n("shared.header.contact")
		},
		{
			href: "/settings",
			label: n("shared.header.settings")
		}
	];
	return /* @__PURE__ */ i("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: /* @__PURE__ */ a("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [/* @__PURE__ */ a("div", {
				className: "flex items-center gap-8",
				children: [/* @__PURE__ */ i(m, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), /* @__PURE__ */ a("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						/* @__PURE__ */ i(m, {
							href: "/",
							className: `nav-link${((e) => l === e)(`/${c}`) ? " is-active" : ""}`,
							children: n("shared.header.home")
						}),
						/* @__PURE__ */ i(m, {
							href: "/about",
							className: `nav-link${((e) => l.startsWith(e))(`/${c}/about`) ? " is-active" : ""}`,
							children: n("shared.header.methodology")
						}),
						/* @__PURE__ */ a("div", {
							className: "relative",
							children: [/* @__PURE__ */ a("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => s(!0),
								onMouseLeave: () => s(!1),
								onClick: () => s(!r),
								children: [n("shared.header.mockPages"), /* @__PURE__ */ i(o, {
									size: 14,
									className: `transition-transform ${r ? "rotate-180" : ""}`
								})]
							}), r && /* @__PURE__ */ i("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => s(!0),
								onMouseLeave: () => s(!1),
								children: /* @__PURE__ */ i("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: u.map((e) => /* @__PURE__ */ i(m, {
										href: e.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => s(!1),
										children: e.label
									}, e.href))
								})
							})]
						})
					]
				})]
			}), /* @__PURE__ */ a("div", {
				className: "flex items-center gap-4",
				children: [
					/* @__PURE__ */ a("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [/* @__PURE__ */ i("span", {
							className: "sr-only",
							children: n("shared.header.goToGithub")
						}), /* @__PURE__ */ i("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: /* @__PURE__ */ i("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					/* @__PURE__ */ i(R, {}),
					/* @__PURE__ */ i(F, {})
				]
			})]
		})
	});
}
//#endregion
export { B as default };
