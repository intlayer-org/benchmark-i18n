import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { onMount as t } from "svelte";
import { recordHydrationDuration as n, recordRenderTime as r } from "test-utils/browser-metrics";
import { derived as i, get as a, writable as o } from "svelte/store";
import s from "lucide-svelte/icons/chevron-down";
import "svelte/internal/flags/legacy";
var c = [
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
function l(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function u(e) {
	return c.includes(e);
}
var d = /* @__PURE__ */ new Set([
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
function f(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!u(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !d.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var p = o(typeof window < "u" ? window.location.pathname : "/en"), m = i(p, (e) => f(e));
function h(e, t = !1) {
	typeof window > "u" || (t ? history.replaceState(null, "", e) : history.pushState(null, "", e), p.set(window.location.pathname));
}
var g = e.from_html("<a class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), _ = e.from_html("<a target=\"_blank\" rel=\"noreferrer\" class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), v = e.from_html("<li><!></li>"), y = e.from_html("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\">i18n Benchmark</h3> <p class=\"text-sm text-muted-foreground\">An open-source test application for measuring the real-world impact of\n          internationalization libraries on bundle size, loading time, and app\n          reactivity.</p></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\">Resources</h3> <ul class=\"space-y-1\"></ul></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\">Contact</h3> <p class=\"text-sm text-muted-foreground\">contact@intlayer.org</p></div></div> <div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\">i18n Benchmark — Open-source project. Built with Svelte, Vite, and a\n      client-side router.</div></div></footer>");
function b(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(m, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), s = e.derived(() => [
		{
			label: "GitHub",
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: "Methodology",
			to: `/${e.get(o)}/about`,
			isInternal: !0
		},
		{
			label: "Contributing",
			to: `/${e.get(o)}/contact`,
			isInternal: !0
		}
	]);
	var c = y(), l = e.child(c), u = e.child(l), d = e.sibling(e.child(u), 2), f = e.sibling(e.child(d), 2);
	e.each(f, 21, () => e.get(s), (e) => e.label, (t, n) => {
		var r = v(), i = e.child(r), a = (t) => {
			var r = g(), i = e.only_child(r, !0);
			e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		}, o = (t) => {
			var r = _(), i = e.only_child(r, !0);
			e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).href), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		};
		e.if(i, (t) => {
			e.get(n).isInternal ? t(a) : t(o, -1);
		}), e.reset(r), e.append(t, r);
	}), e.reset(f), e.reset(d), e.next(2), e.reset(u), e.next(2), e.reset(l), e.reset(c), e.append(t, c), e.pop(), a();
}
var x = e.from_html("<option> </option>"), S = e.from_html("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none\"></select></div>");
function C(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(p, "$pathname", i), [i, o] = e.setup_stores();
	function s(e) {
		let t = e.target.value;
		h(a(p).replace(/^\/[^/]+/, `/${t}`) + window.location.search + window.location.hash, !1);
	}
	e.init();
	var u = S(), d = e.child(u);
	e.each(d, 5, () => c, (e) => e, (t, n) => {
		var r = x(), i = e.only_child(r, !0), a = {};
		e.template_effect((t) => {
			e.set_text(i, t), a !== (a = e.get(n)) && (r.value = (r.__value = a) ?? "");
		}, [() => l(e.get(n))]), e.append(t, r);
	}), e.reset(d);
	var f;
	e.init_select(d), e.reset(u), e.template_effect((t) => {
		f !== (f = t) && (d.value = (d.__value = f) ?? "", e.select_option(d, f));
	}, [() => r().split("/").filter(Boolean)[0] ?? "en"]), e.delegated("change", d, s), e.append(t, u), e.pop(), o();
}
e.delegate(["change"]);
var w = e.from_html("<button type=\"button\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\"> </button>");
function T(n, r) {
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
	let c = e.derived(() => e.get(o) === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${e.get(o)}. Click to switch mode.`), l = e.derived(() => e.get(o) === "auto" ? "Theme: Auto" : e.get(o) === "dark" ? "Theme: Dark" : "Theme: Light");
	var u = w(), d = e.only_child(u, !0);
	e.template_effect(() => {
		e.set_attribute(u, "aria-label", e.get(c)), e.set_attribute(u, "title", e.get(c)), e.set_text(d, e.get(l));
	}), e.delegated("click", u, s), e.append(n, u), e.pop();
}
e.delegate(["click"]);
var E = e.from_html("<a class=\"block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent\"> </a>"), D = e.from_html("<div class=\"absolute top-full left-0 w-48 pt-2\" role=\"presentation\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\"></div></div>"), O = e.from_html("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><a class=\"text-lg font-bold tracking-tight text-primary no-underline\">i18n Bench</a> <div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><a>Home</a> <a>Methodology</a> <div class=\"relative\"><button type=\"button\" class=\"nav-link flex cursor-pointer items-center gap-1 border-none bg-transparent\">Mock Pages <!></button> <!></div></div></div> <div class=\"flex items-center gap-4\"><a href=\"https://github.com/intlayer-org/benchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-muted-foreground transition hover:text-foreground\"><span class=\"sr-only\">Go to GitHub</span> <svg viewBox=\"0 0 16 16\" aria-hidden=\"true\" width=\"20\" height=\"20\"><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg></a> <!> <!></div></nav></header>");
function k(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(m, "$route", i), [i, a] = e.setup_stores(), o = e.state(!1), c = e.derived(() => r().kind === "ok" ? r().locale : "en"), l = e.derived(() => [
		{
			to: `/${e.get(c)}/products`,
			label: "Products"
		},
		{
			to: `/${e.get(c)}/pricing`,
			label: "Pricing"
		},
		{
			to: `/${e.get(c)}/team`,
			label: "Team"
		},
		{
			to: `/${e.get(c)}/blog`,
			label: "Blog"
		},
		{
			to: `/${e.get(c)}/careers`,
			label: "Careers"
		},
		{
			to: `/${e.get(c)}/faq`,
			label: "FAQ"
		},
		{
			to: `/${e.get(c)}/contact`,
			label: "Contact"
		},
		{
			to: `/${e.get(c)}/settings`,
			label: "Settings"
		}
	]), u = e.derived(() => r().kind === "ok" && r().page === ""), d = e.derived(() => r().kind === "ok" && r().page === "about");
	var f = O(), p = e.child(f), h = e.child(p), g = e.child(h), _ = e.sibling(g, 2), v = e.child(_);
	let y;
	var b = e.sibling(v, 2);
	let x;
	var S = e.sibling(b, 2), w = e.child(S), k = e.sibling(e.child(w));
	{
		let t = e.derived(() => e.get(o) ? "transition-transform rotate-180" : "transition-transform");
		s(k, {
			size: 14,
			get class() {
				return e.get(t);
			}
		});
	}
	e.reset(w);
	var A = e.sibling(w, 2), j = (t) => {
		var n = D(), r = e.child(n);
		e.each(r, 21, () => e.get(l), (e) => e.to, (t, n) => {
			var r = E(), i = e.only_child(r, !0);
			e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.delegated("click", r, () => e.set(o, !1)), e.append(t, r);
		}), e.reset(r), e.reset(n), e.event("mouseenter", n, () => e.set(o, !0)), e.event("mouseleave", n, () => e.set(o, !1)), e.append(t, n);
	};
	e.if(A, (t) => {
		e.get(o) && t(j);
	}), e.reset(S), e.reset(_), e.reset(h);
	var M = e.sibling(h, 2), N = e.sibling(e.child(M), 2);
	C(N, {}), T(e.sibling(N, 2), {}), e.reset(M), e.reset(p), e.reset(f), e.template_effect(() => {
		e.set_attribute(g, "href", `/${e.get(c)}`), e.set_attribute(v, "href", `/${e.get(c)}`), y = e.set_class(v, 1, "nav-link", null, y, { "is-active": e.get(u) }), e.set_attribute(b, "href", `/${e.get(c)}/about`), x = e.set_class(b, 1, "nav-link", null, x, { "is-active": e.get(d) });
	}), e.event("mouseenter", w, () => e.set(o, !0)), e.event("mouseleave", w, () => e.set(o, !1)), e.delegated("click", w, () => e.set(o, !e.get(o))), e.append(t, f), e.pop(), a();
}
e.delegate(["click"]);
var A = e.from_html("<!> <!> <!>", 1);
function j(i, a) {
	e.push(a, !0);
	let o = typeof performance < "u" ? performance.now() : 0;
	t(() => {
		n(), r("AppRoot", o);
	}), e.user_effect(() => {
		document.documentElement.lang = a.locale;
	});
	var s = A(), c = e.first_child(s);
	k(c, {});
	var l = e.sibling(c, 2);
	e.snippet(l, () => a.children), b(e.sibling(l, 2), {}), e.append(i, s), e.pop();
}
export { j as default };
