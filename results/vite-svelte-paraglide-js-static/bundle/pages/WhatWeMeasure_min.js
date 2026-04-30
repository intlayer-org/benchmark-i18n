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
var s = t(n(typeof window < "u" ? window.location.pathname : "/en"), (e) => o(e)), c = e.from_html("<li class=\"rounded-md border border-border p-4\"><span class=\"block text-sm font-bold text-primary\"> </span> <span class=\"mt-1 block text-sm text-muted-foreground\"> </span></li>"), l = e.from_html("<section class=\"mx-auto mt-12 max-w-3xl\"><h2 class=\"mb-4 text-2xl font-bold text-foreground\"> </h2> <ul class=\"space-y-4\"></ul></section>");
function u(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(s, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), u = e.derived(() => (e.get(o), [
		{
			metric: (void 0)(),
			desc: (void 0)()
		},
		{
			metric: (void 0)(),
			desc: (void 0)()
		},
		{
			metric: (void 0)(),
			desc: (void 0)()
		},
		{
			metric: (void 0)(),
			desc: (void 0)()
		},
		{
			metric: (void 0)(),
			desc: (void 0)()
		}
	]));
	var d = l(), f = e.child(d), p = e.child(f, !0);
	e.reset(f);
	var m = e.sibling(f, 2);
	e.each(m, 21, () => e.get(u), e.index, (t, n) => {
		var r = c(), i = e.child(r), a = e.child(i, !0);
		e.reset(i);
		var o = e.sibling(i, 2), s = e.child(o, !0);
		e.reset(o), e.reset(r), e.template_effect(() => {
			e.set_text(a, e.get(n).metric), e.set_text(s, e.get(n).desc);
		}), e.append(t, r);
	}), e.reset(m), e.reset(d), e.template_effect((t) => e.set_text(p, t), [() => (void 0)()]), e.append(t, d), e.pop(), a();
}
export { u as default };
