import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { derived as t, writable as n } from "svelte/store";
var r = [
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
function i(e) {
	return r.includes(e);
}
var a = /* @__PURE__ */ new Set([
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
function o(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!i(n)) return { kind: "notfound" };
	let o = r[0] ?? "";
	return r.length > 1 || !a.has(o) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: o
	};
}
var s = n(typeof window < "u" ? window.location.pathname : "/en"), c = t(s, (e) => o(e)), l = e.from_html("<a class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), u = e.from_html("<a target=\"_blank\" rel=\"noreferrer\" class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), d = e.from_html("<li><!></li>"), f = e.from_html("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\">i18n Benchmark</h3> <p class=\"text-sm text-muted-foreground\">An open-source test application for measuring the real-world impact of\n          internationalization libraries on bundle size, loading time, and app\n          reactivity.</p></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\">Resources</h3> <ul class=\"space-y-1\"></ul></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\">Contact</h3> <p class=\"text-sm text-muted-foreground\">contact@intlayer.org</p></div></div> <div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\">i18n Benchmark — Open-source project. Built with Svelte, Vite, and a\n      client-side router.</div></div></footer>");
function p(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(c, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), s = e.derived(() => [
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
	var p = f(), m = e.child(p), h = e.child(m), g = e.sibling(e.child(h), 2), _ = e.sibling(e.child(g), 2);
	e.each(_, 21, () => e.get(s), (e) => e.label, (t, n) => {
		var r = d(), i = e.child(r), a = (t) => {
			var r = l(), i = e.only_child(r, !0);
			e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		}, o = (t) => {
			var r = u(), i = e.only_child(r, !0);
			e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).href), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		};
		e.if(i, (t) => {
			e.get(n).isInternal ? t(a) : t(o, -1);
		}), e.reset(r), e.append(t, r);
	}), e.reset(_), e.reset(g), e.next(2), e.reset(h), e.next(2), e.reset(m), e.reset(p), e.append(t, p), e.pop(), a();
}
export { p as default };
