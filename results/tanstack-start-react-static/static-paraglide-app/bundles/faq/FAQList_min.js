import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/pages/faq/FAQList.tsx
var r = [
	{
		q: "What is i18n Benchmark?",
		a: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications."
	},
	{
		q: "How are benchmarks conducted?",
		a: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository."
	},
	{
		q: "Which libraries are currently supported?",
		a: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee."
	},
	{
		q: "Can I submit my own benchmarks?",
		a: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions."
	},
	{
		q: "How often are benchmarks updated?",
		a: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle."
	},
	{
		q: "Is the data reliable?",
		a: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency."
	},
	{
		q: "Do you offer consulting services?",
		a: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints."
	},
	{
		q: "How can I contribute?",
		a: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
	}
];
function i() {
	return /* @__PURE__ */ t("div", {
		className: "mx-auto max-w-3xl space-y-4",
		children: r.map((e) => /* @__PURE__ */ n("details", {
			className: "group rounded-lg border border-border bg-card",
			children: [/* @__PURE__ */ t("summary", {
				className: "cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors",
				children: e.q
			}), /* @__PURE__ */ t("p", {
				className: "px-6 pb-4 text-sm text-muted-foreground",
				children: e.a
			})]
		}, e.q))
	});
}
//#endregion
//#region src/paraglide/runtime.js
var a = {}, o = [
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
], s = "PARAGLIDE_LOCALE", c = 3456e4, l = [
	"cookie",
	"globalVariable",
	"baseLocale"
], u = [], d, f;
function p(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (d === t) return f;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of u) if (new a(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return d = t, f = r, r;
}
function m(e) {
	let t = p(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var h = void 0;
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var g, _ = !1, v = () => {
	if (h) {
		let e = h?.getStore()?.locale;
		if (e) return e;
	}
	let e = l;
	typeof window < "u" && window.location?.href && (e = m(window.location.href));
	let t = y(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return _ || (g = t, _ = !0, x(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function y(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = w();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && g !== void 0) n = g;
		else if (E(t) && T.has(t)) {
			let e = T.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return C(t);
			}
		}
		let e = S(n);
		if (e) return e;
	}
}
var b = (e) => {
	e ? window.location.href = e : window.location.reload();
}, x = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = v();
	} catch {}
	let i = [], a = l;
	typeof window < "u" && window.location?.href && (a = m(window.location.href));
	for (let t of a) if (t === "globalVariable") g = e;
	else if (t === "cookie") {
		if (typeof document > "u" || typeof window > "u") continue;
		let t = `${s}=${e}; path=/; max-age=${c}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (E(t) && T.has(t)) {
		let n = T.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		n.reload && window.location && e !== r && b(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function S(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of o) if (e.toLowerCase() === t) return e;
}
function C(e) {
	let t = S(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function w() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${s}=([^;]+)`))?.[2];
	return S(e);
}
var T = /* @__PURE__ */ new Map();
function E(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
//#endregion
//#region scripts/Wrapper.tsx
x("en", { reload: !1 });
function D({ children: n }) {
	return /* @__PURE__ */ t(e, { children: n });
}
//#endregion
//#region src/components/pages/faq/FAQList.wrapper.tsx
function O() {
	return /* @__PURE__ */ t(D, { children: /* @__PURE__ */ t(i, {}) });
}
//#endregion
export { O as default };
