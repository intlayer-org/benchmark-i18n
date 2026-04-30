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
var a = new Set([
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
var s = t(n(typeof window < "u" ? window.location.pathname : "/en"), (e) => o(e)), c = e.from_html("<article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"> </span> <span class=\"text-xs text-muted-foreground\"> </span></div> <h2 class=\"mb-2 text-lg font-semibold text-foreground\"> </h2> <p class=\"mb-4 text-sm text-muted-foreground\"> </p> <button type=\"button\" class=\"text-sm font-medium text-primary hover:underline\"> </button></article>"), l = e.from_html("<div class=\"grid gap-6 md:grid-cols-2\"></div>");
function u(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(s, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), u = e.derived(() => (e.get(o), [
		{
			title: (void 0)(),
			date: (void 0)(),
			excerpt: (void 0)(),
			category: (void 0)()
		},
		{
			title: (void 0)(),
			date: (void 0)(),
			excerpt: (void 0)(),
			category: (void 0)()
		},
		{
			title: (void 0)(),
			date: (void 0)(),
			excerpt: (void 0)(),
			category: (void 0)()
		},
		{
			title: (void 0)(),
			date: (void 0)(),
			excerpt: (void 0)(),
			category: (void 0)()
		},
		{
			title: (void 0)(),
			date: (void 0)(),
			excerpt: (void 0)(),
			category: (void 0)()
		},
		{
			title: (void 0)(),
			date: (void 0)(),
			excerpt: (void 0)(),
			category: (void 0)()
		}
	]));
	var d = l();
	e.each(d, 21, () => e.get(u), e.index, (t, n) => {
		var r = c(), i = e.child(r), a = e.child(i), o = e.child(a, !0);
		e.reset(a);
		var s = e.sibling(a, 2), l = e.child(s, !0);
		e.reset(s), e.reset(i);
		var u = e.sibling(i, 2), d = e.child(u, !0);
		e.reset(u);
		var f = e.sibling(u, 2), p = e.child(f, !0);
		e.reset(f);
		var m = e.sibling(f, 2), h = e.child(m, !0);
		e.reset(m), e.reset(r), e.template_effect((t) => {
			e.set_text(o, e.get(n).category), e.set_text(l, e.get(n).date), e.set_text(d, e.get(n).title), e.set_text(p, e.get(n).excerpt), e.set_text(h, t);
		}, [() => (void 0)()]), e.append(t, r);
	}), e.reset(d), e.append(t, d), e.pop(), a();
}
export { u as default };
