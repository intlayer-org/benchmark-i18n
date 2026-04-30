import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { onMount as t } from "svelte";
import { recordHydrationDuration as n, recordRenderTime as r } from "test-utils/browser-metrics";
import { derived as i, get as a, writable as o } from "svelte/store";
import s from "lucide-svelte/icons/chevron-down";
import "svelte/internal/flags/legacy";
var c = {}, l = [
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
], u = "PARAGLIDE_LOCALE", d = 3456e4, f = [
	"cookie",
	"globalVariable",
	"baseLocale"
], p = [], m, h;
function g(e) {
	if (p.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (m === t) return h;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of p) if (new c(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return m = t, h = r, r;
}
function _(e) {
	let t = g(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : f;
}
var v = void 0, y = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var b, x = !1, S = () => {
	if (v) {
		let e = v?.getStore()?.locale;
		if (e) return e;
	}
	let e = f;
	!y && typeof window < "u" && window.location?.href && (e = _(window.location.href));
	let t = C(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return x || (b = t, x = !0, T(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function C(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = O();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && b !== void 0) n = b;
		else if (A(t) && k.has(t)) {
			let e = k.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return D(t);
			}
		}
		let e = E(n);
		if (e) return e;
	}
}
var w = (e) => {
	e ? window.location.href = e : window.location.reload();
}, T = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = S();
	} catch {}
	let i = [], a = f;
	!y && typeof window < "u" && window.location?.href && (a = _(window.location.href));
	for (let t of a) if (t === "globalVariable") b = e;
	else if (t === "cookie") {
		if (y || typeof document > "u" || typeof window > "u") continue;
		let t = `${u}=${e}; path=/; max-age=${d}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (A(t) && k.has(t)) {
		let n = k.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!y && n.reload && window.location && e !== r && w(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function E(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of l) if (e.toLowerCase() === t) return e;
}
function D(e) {
	let t = E(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${l.join(", ")}`);
}
function O() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${u}=([^;]+)`))?.[2];
	return E(e);
}
var k = /* @__PURE__ */ new Map();
function A(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var j = [
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
];
function M(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function N(e) {
	return j.includes(e);
}
var P = new Set([
	"",
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"pricing",
	"products",
	"settings",
	"team"
]);
function F(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!N(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !P.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var I = o(typeof window < "u" ? window.location.pathname : "/en"), L = i(I, (e) => F(e));
function R(e, t = !1) {
	typeof window > "u" || (t ? history.replaceState(null, "", e) : history.pushState(null, "", e), I.set(window.location.pathname));
}
var z = e.from_html("<a class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), B = e.from_html("<a target=\"_blank\" rel=\"noreferrer\" class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), V = e.from_html("<li><!></li>"), H = e.from_html("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <ul class=\"space-y-1\"></ul></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div></div> <div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\"> </div></div></footer>");
function U(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(L, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), s = e.derived(() => [
		{
			label: (void 0)(),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: (void 0)(),
			to: `/${e.get(o)}/about`,
			isInternal: !0
		},
		{
			label: (void 0)(),
			to: `/${e.get(o)}/contact`,
			isInternal: !0
		}
	]);
	var c = H(), l = e.child(c), u = e.child(l), d = e.child(u), f = e.child(d), p = e.child(f, !0);
	e.reset(f);
	var m = e.sibling(f, 2), h = e.child(m, !0);
	e.reset(m), e.reset(d);
	var g = e.sibling(d, 2), _ = e.child(g), v = e.child(_, !0);
	e.reset(_);
	var y = e.sibling(_, 2);
	e.each(y, 21, () => e.get(s), (e) => e.label, (t, n) => {
		var r = V(), i = e.child(r), a = (t) => {
			var r = z(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		}, o = (t) => {
			var r = B(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).href), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		};
		e.if(i, (t) => {
			e.get(n).isInternal ? t(a) : t(o, -1);
		}), e.reset(r), e.append(t, r);
	}), e.reset(y), e.reset(g);
	var b = e.sibling(g, 2), x = e.child(b), S = e.child(x, !0);
	e.reset(x);
	var C = e.sibling(x, 2), w = e.child(C, !0);
	e.reset(C), e.reset(b), e.reset(u);
	var T = e.sibling(u, 2), E = e.child(T, !0);
	e.reset(T), e.reset(l), e.reset(c), e.template_effect((t, n, r, i, a, o) => {
		e.set_text(p, t), e.set_text(h, n), e.set_text(v, r), e.set_text(S, i), e.set_text(w, a), e.set_text(E, o);
	}, [
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)()
	]), e.append(t, c), e.pop(), a();
}
var W = e.from_html("<option> </option>"), G = e.from_html("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none\"></select></div>");
function K(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(I, "$pathname", i), [i, o] = e.setup_stores();
	function s(e) {
		let t = e.target.value;
		R(a(I).replace(/^\/[^/]+/, `/${t}`) + window.location.search + window.location.hash, !1);
	}
	e.init();
	var c = G(), l = e.child(c);
	e.each(l, 5, () => j, (e) => e, (t, n) => {
		var r = W(), i = e.child(r, !0);
		e.reset(r);
		var a = {};
		e.template_effect((t) => {
			e.set_text(i, t), a !== (a = e.get(n)) && (r.value = (r.__value = e.get(n)) ?? "");
		}, [() => M(e.get(n))]), e.append(t, r);
	}), e.reset(l);
	var u;
	e.init_select(l), e.reset(c), e.template_effect((t) => {
		u !== (u = t) && (l.value = (l.__value = t) ?? "", e.select_option(l, t));
	}, [() => r().split("/").filter(Boolean)[0] ?? "en"]), e.delegated("change", l, s), e.append(t, c), e.pop(), o();
}
e.delegate(["change"]);
var q = e.from_html("<button type=\"button\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\"> </button>");
function J(n, r) {
	e.push(r, !0);
	function i() {
		if (typeof window > "u") return "auto";
		let e = window.localStorage.getItem("theme");
		return e === "light" || e === "dark" || e === "auto" ? e : "auto";
	}
	function a(e) {
		let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
		document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
	}
	let o = e.state("auto");
	t(() => {
		let t = i();
		e.set(o, t, !0), a(t);
	}), e.user_effect(() => {
		if (e.get(o) !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => a("auto");
		return t.addEventListener("change", n), () => t.removeEventListener("change", n);
	});
	function s() {
		let t = e.get(o) === "light" ? "dark" : e.get(o) === "dark" ? "auto" : "light";
		e.set(o, t, !0), a(t), window.localStorage.setItem("theme", t);
	}
	let c = e.derived(() => e.get(o) === "auto" ? (void 0)() : (void 0)({ mode: e.get(o) })), l = e.derived(() => (e.get(o) === "auto" || e.get(o), (void 0)()));
	var u = q(), d = e.child(u, !0);
	e.reset(u), e.template_effect(() => {
		e.set_attribute(u, "aria-label", e.get(c)), e.set_attribute(u, "title", e.get(c)), e.set_text(d, e.get(l));
	}), e.delegated("click", u, s), e.append(n, u), e.pop();
}
e.delegate(["click"]);
var Y = e.from_html("<a class=\"block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent\"> </a>"), X = e.from_html("<div class=\"absolute top-full left-0 w-48 pt-2\" role=\"presentation\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\"></div></div>"), Z = e.from_html("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><a class=\"text-lg font-bold tracking-tight text-primary no-underline\"> </a> <div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><a> </a> <a> </a> <div class=\"relative\"><button type=\"button\" class=\"nav-link flex cursor-pointer items-center gap-1 border-none bg-transparent\"> <!></button> <!></div></div></div> <div class=\"flex items-center gap-4\"><a href=\"https://github.com/intlayer-org/benchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-muted-foreground transition hover:text-foreground\"><span class=\"sr-only\"> </span> <svg viewBox=\"0 0 16 16\" aria-hidden=\"true\" width=\"20\" height=\"20\"><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg></a> <!> <!></div></nav></header>");
function Q(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(L, "$route", i), [i, a] = e.setup_stores(), o = e.state(!1), c = e.derived(() => r().kind === "ok" ? r().locale : "en"), l = e.derived(() => [
		{
			to: `/${e.get(c)}/products`,
			label: (void 0)()
		},
		{
			to: `/${e.get(c)}/pricing`,
			label: (void 0)()
		},
		{
			to: `/${e.get(c)}/team`,
			label: (void 0)()
		},
		{
			to: `/${e.get(c)}/blog`,
			label: (void 0)()
		},
		{
			to: `/${e.get(c)}/careers`,
			label: (void 0)()
		},
		{
			to: `/${e.get(c)}/faq`,
			label: (void 0)()
		},
		{
			to: `/${e.get(c)}/contact`,
			label: (void 0)()
		},
		{
			to: `/${e.get(c)}/settings`,
			label: (void 0)()
		}
	]), u = e.derived(() => r().kind === "ok" && r().page === ""), d = e.derived(() => r().kind === "ok" && r().page === "about");
	var f = Z(), p = e.child(f), m = e.child(p), h = e.child(m), g = e.child(h, !0);
	e.reset(h);
	var _ = e.sibling(h, 2), v = e.child(_);
	let y;
	var b = e.child(v, !0);
	e.reset(v);
	var x = e.sibling(v, 2);
	let S;
	var C = e.child(x, !0);
	e.reset(x);
	var w = e.sibling(x, 2), T = e.child(w), E = e.child(T), D = e.sibling(E);
	{
		let t = e.derived(() => e.get(o) ? "transition-transform rotate-180" : "transition-transform");
		s(D, {
			size: 14,
			get class() {
				return e.get(t);
			}
		});
	}
	e.reset(T);
	var O = e.sibling(T, 2), k = (t) => {
		var n = X(), r = e.child(n);
		e.each(r, 21, () => e.get(l), (e) => e.to, (t, n) => {
			var r = Y(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.delegated("click", r, () => e.set(o, !1)), e.append(t, r);
		}), e.reset(r), e.reset(n), e.event("mouseenter", n, () => e.set(o, !0)), e.event("mouseleave", n, () => e.set(o, !1)), e.append(t, n);
	};
	e.if(O, (t) => {
		e.get(o) && t(k);
	}), e.reset(w), e.reset(_), e.reset(m);
	var A = e.sibling(m, 2), j = e.child(A), M = e.child(j), N = e.child(M, !0);
	e.reset(M), e.next(2), e.reset(j);
	var P = e.sibling(j, 2);
	K(P, {}), J(e.sibling(P, 2), {}), e.reset(A), e.reset(p), e.reset(f), e.template_effect((t, n, r, i, a) => {
		e.set_attribute(h, "href", `/${e.get(c)}`), e.set_text(g, t), e.set_attribute(v, "href", `/${e.get(c)}`), y = e.set_class(v, 1, "nav-link", null, y, { "is-active": e.get(u) }), e.set_text(b, n), e.set_attribute(x, "href", `/${e.get(c)}/about`), S = e.set_class(x, 1, "nav-link", null, S, { "is-active": e.get(d) }), e.set_text(C, r), e.set_text(E, `${i ?? ""} `), e.set_text(N, a);
	}, [
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)()
	]), e.event("mouseenter", T, () => e.set(o, !0)), e.event("mouseleave", T, () => e.set(o, !1)), e.delegated("click", T, () => e.set(o, !e.get(o))), e.append(t, f), e.pop(), a();
}
e.delegate(["click"]);
var $ = e.from_html("<!> <!> <!>", 1);
function ee(i, a) {
	e.push(a, !0);
	let o = typeof performance < "u" ? performance.now() : 0;
	t(() => {
		n(), r("AppRoot", o);
	}), e.user_effect(() => {
		document.documentElement.lang = a.locale, T(a.locale, { reload: !1 });
	});
	var s = $(), c = e.first_child(s);
	Q(c, {});
	var l = e.sibling(c, 2);
	e.snippet(l, () => a.children), U(e.sibling(l, 2), {}), e.append(i, s), e.pop();
}
export { ee as default };
