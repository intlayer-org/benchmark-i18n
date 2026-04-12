import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/pages/team/TeamGrid.tsx
var r = [
	{
		name: "Sarah Chen",
		role: "Founder & Lead Engineer",
		bio: "Former Google engineer with 10 years of experience building internationalization systems at scale."
	},
	{
		name: "Marcus Weber",
		role: "Performance Engineer",
		bio: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel."
	},
	{
		name: "Aisha Patel",
		role: "Developer Advocate",
		bio: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext."
	},
	{
		name: "Tomás Rodríguez",
		role: "Full-Stack Developer",
		bio: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui."
	},
	{
		name: "Yuki Tanaka",
		role: "Data Analyst",
		bio: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT."
	},
	{
		name: "Elena Kowalski",
		role: "Community Manager",
		bio: "Manages community contributions, partnerships, and events. Background in open source governance."
	}
];
function i() {
	return /* @__PURE__ */ t("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: r.map((e) => /* @__PURE__ */ n("div", {
			className: "rounded-lg border border-border bg-card p-6 text-center",
			children: [
				/* @__PURE__ */ t("div", {
					className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground",
					children: e.name.split(" ").map((e) => e[0]).join("")
				}),
				/* @__PURE__ */ t("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.name
				}),
				/* @__PURE__ */ t("p", {
					className: "mb-2 text-xs font-medium text-primary",
					children: e.role
				}),
				/* @__PURE__ */ t("p", {
					className: "text-sm text-muted-foreground",
					children: e.bio
				})
			]
		}, e.name))
	});
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
//#region src/components/pages/team/TeamGrid.wrapper.tsx
function O() {
	return /* @__PURE__ */ t(D, { children: /* @__PURE__ */ t(i, {}) });
}
//#endregion
export { O as default };
