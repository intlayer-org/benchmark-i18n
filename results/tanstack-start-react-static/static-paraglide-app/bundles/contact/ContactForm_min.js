import { useId as e } from "react";
import { Fragment as t, jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/pages/contact/ContactForm.tsx
function i() {
	let t = e(), i = e(), a = e(), o = e();
	return /* @__PURE__ */ r("form", {
		className: "space-y-6",
		onSubmit: (e) => e.preventDefault(),
		children: [
			/* @__PURE__ */ r("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ r("div", { children: [/* @__PURE__ */ n("label", {
					htmlFor: t,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Name"
				}), /* @__PURE__ */ n("input", {
					id: t,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "Your name"
				})] }), /* @__PURE__ */ r("div", { children: [/* @__PURE__ */ n("label", {
					htmlFor: i,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Email"
				}), /* @__PURE__ */ n("input", {
					id: i,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				})] })]
			}),
			/* @__PURE__ */ r("div", { children: [/* @__PURE__ */ n("label", {
				htmlFor: a,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Topic"
			}), /* @__PURE__ */ r("select", {
				id: a,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					/* @__PURE__ */ n("option", { children: "Bug Report" }),
					/* @__PURE__ */ n("option", { children: "New Benchmark Idea" }),
					/* @__PURE__ */ n("option", { children: "Methodology Question" }),
					/* @__PURE__ */ n("option", { children: "Contribution" }),
					/* @__PURE__ */ n("option", { children: "Other" })
				]
			})] }),
			/* @__PURE__ */ r("div", { children: [/* @__PURE__ */ n("label", {
				htmlFor: o,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Message"
			}), /* @__PURE__ */ n("textarea", {
				id: o,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: "Describe your question or idea..."
			})] }),
			/* @__PURE__ */ n("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: "Send Message"
			})
		]
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
function D({ children: e }) {
	return /* @__PURE__ */ n(t, { children: e });
}
//#endregion
//#region src/components/pages/contact/ContactForm.wrapper.tsx
function O() {
	return /* @__PURE__ */ n(D, { children: /* @__PURE__ */ n(i, {}) });
}
//#endregion
export { O as default };
