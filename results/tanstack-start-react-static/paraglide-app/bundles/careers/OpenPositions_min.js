import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/pages/careers/OpenPositions.tsx
var r = [
	{
		title: "Senior Frontend Engineer",
		location: "Remote",
		type: "Full-time",
		dept: "Engineering",
		desc: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite."
	},
	{
		title: "Backend Engineer",
		location: "Remote",
		type: "Full-time",
		dept: "Engineering",
		desc: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily."
	},
	{
		title: "Technical Writer",
		location: "Remote",
		type: "Part-time",
		dept: "Documentation",
		desc: "Create comprehensive guides, API references, and tutorials for our benchmarking platform."
	},
	{
		title: "DevRel Engineer",
		location: "San Francisco / Remote",
		type: "Full-time",
		dept: "Community",
		desc: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions."
	},
	{
		title: "QA Engineer",
		location: "Remote",
		type: "Full-time",
		dept: "Engineering",
		desc: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation."
	}
];
function i() {
	return /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: "Open Positions"
	}), /* @__PURE__ */ t("div", {
		className: "space-y-4",
		children: r.map((e) => /* @__PURE__ */ n("div", {
			className: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ n("div", { children: [
				/* @__PURE__ */ t("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.title
				}),
				/* @__PURE__ */ t("p", {
					className: "text-sm text-muted-foreground",
					children: e.desc
				}),
				/* @__PURE__ */ n("div", {
					className: "mt-2 flex gap-2",
					children: [
						/* @__PURE__ */ t("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.dept
						}),
						/* @__PURE__ */ t("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.location
						}),
						/* @__PURE__ */ t("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.type
						})
					]
				})
			] }), /* @__PURE__ */ t("button", {
				type: "button",
				className: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: "Apply Now"
			})]
		}, e.title))
	})] });
}
//#endregion
//#region src/paraglide/runtime.js
var a = {}, o = [
	"en",
	"de",
	"fr",
	"es",
	"ja",
	"zh",
	"ko",
	"it",
	"pt"
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
//#region src/components/pages/careers/OpenPositions.wrapper.tsx
function O() {
	return /* @__PURE__ */ t(D, { children: /* @__PURE__ */ t(i, {}) });
}
//#endregion
export { O as default };
