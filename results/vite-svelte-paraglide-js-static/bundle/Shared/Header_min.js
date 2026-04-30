import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import t from "lucide-svelte/icons/chevron-down";
import { derived as n, get as r, writable as i } from "svelte/store";
import "svelte/internal/flags/legacy";
import { onMount as a } from "svelte";
var o = [
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
function s(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function c(e) {
	return o.includes(e);
}
var l = new Set([
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
function u(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!c(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !l.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var d = i(typeof window < "u" ? window.location.pathname : "/en"), f = n(d, (e) => u(e));
function p(e, t = !1) {
	typeof window > "u" || (t ? history.replaceState(null, "", e) : history.pushState(null, "", e), d.set(window.location.pathname));
}
var m = e.from_html("<option> </option>"), h = e.from_html("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none\"></select></div>");
function g(t, n) {
	e.push(n, !1);
	let i = () => e.store_get(d, "$pathname", a), [a, c] = e.setup_stores();
	function l(e) {
		let t = e.target.value;
		p(r(d).replace(/^\/[^/]+/, `/${t}`) + window.location.search + window.location.hash, !1);
	}
	e.init();
	var u = h(), f = e.child(u);
	e.each(f, 5, () => o, (e) => e, (t, n) => {
		var r = m(), i = e.child(r, !0);
		e.reset(r);
		var a = {};
		e.template_effect((t) => {
			e.set_text(i, t), a !== (a = e.get(n)) && (r.value = (r.__value = e.get(n)) ?? "");
		}, [() => s(e.get(n))]), e.append(t, r);
	}), e.reset(f);
	var g;
	e.init_select(f), e.reset(u), e.template_effect((t) => {
		g !== (g = t) && (f.value = (f.__value = t) ?? "", e.select_option(f, t));
	}, [() => i().split("/").filter(Boolean)[0] ?? "en"]), e.delegated("change", f, l), e.append(t, u), e.pop(), c();
}
e.delegate(["change"]);
var _ = e.from_html("<button type=\"button\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\"> </button>");
function v(t, n) {
	e.push(n, !0);
	function r() {
		if (typeof window > "u") return "auto";
		let e = window.localStorage.getItem("theme");
		return e === "light" || e === "dark" || e === "auto" ? e : "auto";
	}
	function i(e) {
		let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
		document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
	}
	let o = e.state("auto");
	a(() => {
		let t = r();
		e.set(o, t, !0), i(t);
	}), e.user_effect(() => {
		if (e.get(o) !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => i("auto");
		return t.addEventListener("change", n), () => t.removeEventListener("change", n);
	});
	function s() {
		let t = e.get(o) === "light" ? "dark" : e.get(o) === "dark" ? "auto" : "light";
		e.set(o, t, !0), i(t), window.localStorage.setItem("theme", t);
	}
	let c = e.derived(() => e.get(o) === "auto" ? (void 0)() : (void 0)({ mode: e.get(o) })), l = e.derived(() => (e.get(o) === "auto" || e.get(o), (void 0)()));
	var u = _(), d = e.child(u, !0);
	e.reset(u), e.template_effect(() => {
		e.set_attribute(u, "aria-label", e.get(c)), e.set_attribute(u, "title", e.get(c)), e.set_text(d, e.get(l));
	}), e.delegated("click", u, s), e.append(t, u), e.pop();
}
e.delegate(["click"]);
var y = e.from_html("<a class=\"block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent\"> </a>"), b = e.from_html("<div class=\"absolute top-full left-0 w-48 pt-2\" role=\"presentation\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\"></div></div>"), x = e.from_html("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><a class=\"text-lg font-bold tracking-tight text-primary no-underline\"> </a> <div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><a> </a> <a> </a> <div class=\"relative\"><button type=\"button\" class=\"nav-link flex cursor-pointer items-center gap-1 border-none bg-transparent\"> <!></button> <!></div></div></div> <div class=\"flex items-center gap-4\"><a href=\"https://github.com/intlayer-org/benchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-muted-foreground transition hover:text-foreground\"><span class=\"sr-only\"> </span> <svg viewBox=\"0 0 16 16\" aria-hidden=\"true\" width=\"20\" height=\"20\"><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg></a> <!> <!></div></nav></header>");
function S(n, r) {
	e.push(r, !0);
	let i = () => e.store_get(f, "$route", a), [a, o] = e.setup_stores(), s = e.state(!1), c = e.derived(() => i().kind === "ok" ? i().locale : "en"), l = e.derived(() => [
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
	]), u = e.derived(() => i().kind === "ok" && i().page === ""), d = e.derived(() => i().kind === "ok" && i().page === "about");
	var p = x(), m = e.child(p), h = e.child(m), _ = e.child(h), S = e.child(_, !0);
	e.reset(_);
	var C = e.sibling(_, 2), w = e.child(C);
	let T;
	var E = e.child(w, !0);
	e.reset(w);
	var D = e.sibling(w, 2);
	let O;
	var k = e.child(D, !0);
	e.reset(D);
	var A = e.sibling(D, 2), j = e.child(A), M = e.child(j), N = e.sibling(M);
	{
		let n = e.derived(() => e.get(s) ? "transition-transform rotate-180" : "transition-transform");
		t(N, {
			size: 14,
			get class() {
				return e.get(n);
			}
		});
	}
	e.reset(j);
	var P = e.sibling(j, 2), F = (t) => {
		var n = b(), r = e.child(n);
		e.each(r, 21, () => e.get(l), (e) => e.to, (t, n) => {
			var r = y(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.delegated("click", r, () => e.set(s, !1)), e.append(t, r);
		}), e.reset(r), e.reset(n), e.event("mouseenter", n, () => e.set(s, !0)), e.event("mouseleave", n, () => e.set(s, !1)), e.append(t, n);
	};
	e.if(P, (t) => {
		e.get(s) && t(F);
	}), e.reset(A), e.reset(C), e.reset(h);
	var I = e.sibling(h, 2), L = e.child(I), R = e.child(L), z = e.child(R, !0);
	e.reset(R), e.next(2), e.reset(L);
	var B = e.sibling(L, 2);
	g(B, {}), v(e.sibling(B, 2), {}), e.reset(I), e.reset(m), e.reset(p), e.template_effect((t, n, r, i, a) => {
		e.set_attribute(_, "href", `/${e.get(c)}`), e.set_text(S, t), e.set_attribute(w, "href", `/${e.get(c)}`), T = e.set_class(w, 1, "nav-link", null, T, { "is-active": e.get(u) }), e.set_text(E, n), e.set_attribute(D, "href", `/${e.get(c)}/about`), O = e.set_class(D, 1, "nav-link", null, O, { "is-active": e.get(d) }), e.set_text(k, r), e.set_text(M, `${i ?? ""} `), e.set_text(z, a);
	}, [
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)()
	]), e.event("mouseenter", j, () => e.set(s, !0)), e.event("mouseleave", j, () => e.set(s, !1)), e.delegated("click", j, () => e.set(s, !e.get(s))), e.append(n, p), e.pop(), o();
}
e.delegate(["click"]);
export { S as default };
