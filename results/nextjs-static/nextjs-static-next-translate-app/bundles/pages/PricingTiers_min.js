"use client";
import e, { useContext as t, useMemo as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region ../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/wrapTWithDefaultNs.js
var a = function() {
	return a = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, a.apply(this, arguments);
};
function o(e, t) {
	return typeof t == "string" ? function(n, r, i) {
		return e(n, r, a({ ns: t }, i));
	} : e;
}
//#endregion
//#region ../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/context.js
var s;
typeof e.createContext == "function" && (s = e.createContext({
	t: function(e) {
		return Array.isArray(e) ? e[0] : e;
	},
	lang: ""
}));
var c = s;
//#endregion
//#region ../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/isServer.js
function l() {
	return typeof window > "u";
}
//#endregion
//#region ../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/safePluralRules.js
function u(e) {
	try {
		return new Intl.PluralRules(e);
	} catch {
		return new Intl.PluralRules();
	}
}
//#endregion
//#region ../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/transCore.js
var d = function() {
	return d = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, d.apply(this, arguments);
};
function f(e, t) {
	if (!t) return { i18nKey: e };
	var n = e.indexOf(t);
	return n < 0 ? { i18nKey: e } : {
		namespace: e.slice(0, n),
		i18nKey: e.slice(n + t.length)
	};
}
function p(e) {
	var t = e.config, n = e.allNamespaces, r = e.pluralRules, i = e.lang, a = t.logger, o = a === void 0 ? v : a, s = t.allowEmptyStrings, c = s === void 0 ? !0 : s, l = function(e, n) {
		return Array.isArray(e) ? e.map(function(e) {
			return l(e, n);
		}) : e instanceof Object ? _({
			obj: e,
			query: n,
			config: t,
			lang: i
		}) : g({
			text: e,
			query: n,
			config: t,
			lang: i
		});
	}, u = function(e, i, a) {
		e === void 0 && (e = "");
		var s = Array.isArray(e) ? e[0] : e, p = t.nsSeparator, g = p === void 0 ? ":" : p, _ = t.loggerEnvironment, v = _ === void 0 ? "browser" : _, y = f(s, g), b = y.i18nKey, x = y.namespace, S = x === void 0 ? a?.ns ?? t.defaultNS : x, C = S && n[S] || {}, w = m(C, h(r, C, b, t, i, a), t, a), T = typeof w == "object" ? JSON.parse(JSON.stringify(w)) : w, E = T === void 0 || typeof T == "object" && !Object.keys(T).length || T === "" && !c, D = typeof a?.fallback == "string" ? [a.fallback] : a?.fallback || [];
		if (E && (v === "both" || v === (typeof window > "u" ? "node" : "browser")) && o({
			namespace: S,
			i18nKey: b
		}), E && Array.isArray(D) && D.length) {
			var O = D[0], k = D.slice(1);
			if (typeof O == "string") return u(O, i, d(d({}, a), { fallback: k }));
		}
		return E && a && a.hasOwnProperty("default") && !D?.length ? a.default ? l(a.default, i) : a.default : E ? s : l(T, i);
	};
	return u;
}
function m(e, t, n, r) {
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
function h(e, t, n, r, i, a) {
	if (!i || typeof i.count != "number") return n;
	var o = `${n}_${i.count}`;
	if (m(t, o, r, a) !== void 0) return o;
	var s = `${n}_${e.select(i.count)}`;
	if (m(t, s, r, a) !== void 0) return s;
	var c = `${n}.${i.count}`;
	if (m(t, c, r, a) !== void 0) return c;
	var l = `${n}.${e.select(i.count)}`;
	return m(t, l, r, a) === void 0 ? n : l;
}
function g(e) {
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
function _(e) {
	var t = e.obj, n = e.query, r = e.config, i = e.lang;
	return !n || Object.keys(n).length === 0 || Object.keys(t).forEach(function(e) {
		t[e] instanceof Object && _({
			obj: t[e],
			query: n,
			config: r,
			lang: i
		}), typeof t[e] == "string" && (t[e] = g({
			text: t[e],
			query: n,
			config: r,
			lang: i
		}));
	}), t;
}
function v(e) {
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
function y(e) {
	var t = globalThis.__NEXT_TRANSLATE__ ?? {}, r = t.lang, i = t.namespaces, a = t.config, s = a.localesToIgnore || ["default"], c = !r || s.includes(r), d = function() {
		return o(p({
			config: a,
			allNamespaces: i,
			pluralRules: u(c ? void 0 : r),
			lang: r
		}), e);
	};
	return {
		t: l() ? d() : n(d, [e, r]),
		lang: r
	};
}
//#endregion
//#region ../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/useTranslation.js
var b = function() {
	return b = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, b.apply(this, arguments);
};
function x(e) {
	var r = t(c);
	return n(function() {
		return b(b({}, r), { t: o(r.t, e) });
	}, [r, e]);
}
function S(e) {
	return (globalThis.__NEXT_TRANSLATE__?.config ? y : x)(e);
}
//#endregion
//#region components/pages/pricing/PricingTiers.tsx
function C() {
	let { t: e } = S("common");
	return /* @__PURE__ */ r("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: [
			{
				name: e("pricing.pricingTiers.starterTier"),
				price: e("pricing.pricingTiers.starterPrice"),
				period: e("pricing.pricingTiers.forever"),
				features: [
					e("pricing.pricingTiers.runsPerDay"),
					e("pricing.pricingTiers.libraries3"),
					e("pricing.pricingTiers.communitySupport"),
					e("pricing.pricingTiers.publicResults")
				],
				buttonText: e("pricing.pricingTiers.getStarted")
			},
			{
				name: e("pricing.pricingTiers.proTier"),
				price: e("pricing.pricingTiers.proPrice"),
				period: e("pricing.pricingTiers.perMonth"),
				features: [
					e("pricing.pricingTiers.unlimitedRuns"),
					e("pricing.pricingTiers.allLibraries"),
					e("pricing.pricingTiers.prioritySupport"),
					e("pricing.pricingTiers.privateResults"),
					e("pricing.pricingTiers.ciIntegration"),
					e("pricing.pricingTiers.historicalData")
				],
				buttonText: e("pricing.pricingTiers.getStarted"),
				highlighted: !0
			},
			{
				name: e("pricing.pricingTiers.enterpriseTier"),
				price: e("pricing.pricingTiers.custom"),
				period: "",
				features: [
					e("pricing.pricingTiers.everythingInPro"),
					e("pricing.pricingTiers.onPremiseOption"),
					e("pricing.pricingTiers.ssoSaml"),
					e("pricing.pricingTiers.dedicatedAccountManager"),
					e("pricing.pricingTiers.customSLAs"),
					e("pricing.pricingTiers.auditLogs"),
					e("pricing.pricingTiers.trainingSessions")
				],
				buttonText: e("pricing.pricingTiers.contactSales")
			}
		].map((e) => /* @__PURE__ */ i("div", {
			className: `flex flex-col rounded-lg border p-6 ${e.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				/* @__PURE__ */ r("h3", {
					className: "text-lg font-semibold text-foreground",
					children: e.name
				}),
				/* @__PURE__ */ i("div", {
					className: "my-4",
					children: [/* @__PURE__ */ r("span", {
						className: "text-3xl font-bold text-foreground",
						children: e.price
					}), /* @__PURE__ */ r("span", {
						className: "text-sm text-muted-foreground",
						children: e.period
					})]
				}),
				/* @__PURE__ */ r("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: e.features.map((e) => /* @__PURE__ */ i("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ r("span", {
								className: "text-primary",
								children: "✓"
							}),
							" ",
							e
						]
					}, e))
				}),
				/* @__PURE__ */ r("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${e.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: e.buttonText
				})
			]
		}, e.name))
	});
}
//#endregion
export { C as default };
