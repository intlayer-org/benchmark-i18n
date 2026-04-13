import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/pages/careers/OpenPositions.tsx
function r() {
	return /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: "Open Positions"
	}), /* @__PURE__ */ t("div", {
		className: "space-y-4",
		children: [
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
		].map((e) => /* @__PURE__ */ n("div", {
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
var i = {}, a = [
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
], o = "PARAGLIDE_LOCALE", s = 3456e4, c = [
	"cookie",
	"globalVariable",
	"baseLocale"
], l = [], u, d;
function f(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (u === t) return d;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of l) if (new i(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return u = t, d = r, r;
}
function p(e) {
	let t = f(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var m = void 0;
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	if (m) {
		let e = m?.getStore()?.locale;
		if (e) return e;
	}
	let e = c;
	typeof window < "u" && window.location?.href && (e = p(window.location.href));
	let t = v(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, b(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function v(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = C();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (T(t) && w.has(t)) {
			let e = w.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return S(t);
			}
		}
		let e = x(n);
		if (e) return e;
	}
}
var y = (e) => {
	e ? window.location.href = e : window.location.reload();
}, b = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = _();
	} catch {}
	let i = [], a = c;
	typeof window < "u" && window.location?.href && (a = p(window.location.href));
	for (let t of a) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${s}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (T(t) && w.has(t)) {
		let n = w.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let l = () => {
		n.reload && window.location && e !== r && y(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
};
function x(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function S(e) {
	let t = x(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function C() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${o}=([^;]+)`))?.[2];
	return x(e);
}
var w = /* @__PURE__ */ new Map();
function T(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
//#endregion
//#region scripts/Wrapper.tsx
b("en", { reload: !1 });
function E({ children: n }) {
	return /* @__PURE__ */ t(e, { children: n });
}
//#endregion
//#region src/components/pages/careers/OpenPositions.wrapper.tsx
function D() {
	return /* @__PURE__ */ t(E, { children: /* @__PURE__ */ t(r, {}) });
}
//#endregion
export { D as default };
