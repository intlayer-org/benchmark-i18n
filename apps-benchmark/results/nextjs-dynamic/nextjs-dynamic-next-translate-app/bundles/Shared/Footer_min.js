import e, { Profiler as t, useContext as n, useEffect as r, useMemo as i } from "react";
import { useParams as a } from "next/navigation";
import o from "next/link";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region components/Link.tsx
var l = (e) => /^https?:\/\//.test(e ?? ""), u = ({ href: e, children: t, ...n }) => {
	let r = a().lang ?? "en", i = l(e.toString());
	return /* @__PURE__ */ s(o, {
		href: e && !i && !e.toString().startsWith(`/${r}`) ? `/${r}${e}` : e,
		...n,
		children: t
	});
}, d = function() {
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
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/context.js
var p;
typeof e.createContext == "function" && (p = e.createContext({
	t: function(e) {
		return Array.isArray(e) ? e[0] : e;
	},
	lang: ""
}));
var m = p;
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/isServer.js
function h() {
	return typeof window > "u";
}
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/safePluralRules.js
function g(e) {
	try {
		return new Intl.PluralRules(e);
	} catch {
		return new Intl.PluralRules();
	}
}
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/transCore.js
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
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/createTranslation.js
function T(e) {
	var t = globalThis.__NEXT_TRANSLATE__ ?? {}, n = t.lang, r = t.namespaces, a = t.config, o = a.localesToIgnore || ["default"], s = !n || o.includes(n), c = function() {
		return f(y({
			config: a,
			allNamespaces: r,
			pluralRules: g(s ? void 0 : n),
			lang: n
		}), e);
	};
	return {
		t: h() ? c() : i(c, [e, n]),
		lang: n
	};
}
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/useTranslation.js
var E = function() {
	return E = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, E.apply(this, arguments);
};
function D(e) {
	var t = n(m);
	return i(function() {
		return E(E({}, t), { t: f(t.t, e) });
	}, [t, e]);
}
function O(e) {
	return (globalThis.__NEXT_TRANSLATE__?.config ? T : D)(e);
}
//#endregion
//#region components/Footer.tsx
function k() {
	let { t: e } = O("common"), t = [
		{
			label: e("shared.footer.github"),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: e("shared.footer.methodology"),
			href: "/about",
			isInternal: !0
		},
		{
			label: e("shared.footer.contributing"),
			href: "/contact",
			isInternal: !0
		}
	];
	return /* @__PURE__ */ s("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: /* @__PURE__ */ c("div", {
			className: "container py-8",
			children: [/* @__PURE__ */ c("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					/* @__PURE__ */ c("div", { children: [/* @__PURE__ */ s("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}), /* @__PURE__ */ s("p", {
						className: "text-sm text-muted-foreground",
						children: e("shared.footer.anOpenSourceTestApplication")
					})] }),
					/* @__PURE__ */ c("div", { children: [/* @__PURE__ */ s("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e("shared.footer.resources")
					}), /* @__PURE__ */ s("ul", {
						className: "space-y-1",
						children: t.map((e) => /* @__PURE__ */ s("li", { children: e.isInternal ? /* @__PURE__ */ s(u, {
							href: e.href,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) : /* @__PURE__ */ s("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) }, e.label))
					})] }),
					/* @__PURE__ */ c("div", { children: [/* @__PURE__ */ s("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e("shared.footer.contact")
					}), /* @__PURE__ */ s("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), /* @__PURE__ */ s("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: e("shared.footer.builtWith")
			})]
		})
	});
}
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
function A() {
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
function j(e, t, n) {
	typeof window > "u" || t !== "nested-update" && (window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n));
}
//#endregion
//#region components/AppProviders.tsx
function M({ children: e, locale: n }) {
	return r(() => {
		document.documentElement.lang = n;
	}, [n]), r(() => {
		A();
	}, []), /* @__PURE__ */ s(t, {
		id: "AppRoot",
		onRender: j,
		children: e
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function N({ children: e }) {
	return /* @__PURE__ */ s(M, {
		locale: "en",
		children: e
	});
}
//#endregion
//#region components/Footer.wrapper.tsx
function P() {
	return /* @__PURE__ */ s(N, { children: /* @__PURE__ */ s(k, {}) });
}
//#endregion
export { P as default };
