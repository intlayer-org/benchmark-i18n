import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/pages/pricing/PricingTiers.tsx
function r() {
	return /* @__PURE__ */ t("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: [
			{
				name: "Starter",
				price: "$0",
				period: "forever",
				features: [
					"5 benchmark runs/day",
					"3 libraries",
					"Community support",
					"Public results"
				]
			},
			{
				name: "Pro",
				price: "$29",
				period: "/month",
				features: [
					"Unlimited runs",
					"All libraries",
					"Priority support",
					"Private results",
					"CI integration",
					"Historical data"
				],
				highlighted: !0
			},
			{
				name: "Enterprise",
				price: "Custom",
				period: "",
				features: [
					"Everything in Pro",
					"On-premise option",
					"SSO & SAML",
					"Dedicated account manager",
					"Custom SLAs",
					"Audit logs",
					"Training sessions"
				]
			}
		].map((e) => /* @__PURE__ */ n("div", {
			className: `flex flex-col rounded-lg border p-6 ${e.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				/* @__PURE__ */ t("h3", {
					className: "text-lg font-semibold text-foreground",
					children: e.name
				}),
				/* @__PURE__ */ n("div", {
					className: "my-4",
					children: [/* @__PURE__ */ t("span", {
						className: "text-3xl font-bold text-foreground",
						children: e.price
					}), /* @__PURE__ */ t("span", {
						className: "text-sm text-muted-foreground",
						children: e.period
					})]
				}),
				/* @__PURE__ */ t("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: e.features.map((e) => /* @__PURE__ */ n("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ t("span", {
								className: "text-primary",
								children: "✓"
							}),
							" ",
							e
						]
					}, e))
				}),
				/* @__PURE__ */ t("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${e.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: e.name === "Enterprise" ? "Contact Sales" : "Get Started"
				})
			]
		}, e.name))
	});
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
//#region src/components/pages/pricing/PricingTiers.wrapper.tsx
function D() {
	return /* @__PURE__ */ t(E, { children: /* @__PURE__ */ t(r, {}) });
}
//#endregion
export { D as default };
