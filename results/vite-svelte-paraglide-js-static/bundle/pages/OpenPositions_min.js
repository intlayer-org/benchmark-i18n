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
var s = t(n(typeof window < "u" ? window.location.pathname : "/en"), (e) => o(e)), c = e.from_html("<div class=\"flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between\"><div><h3 class=\"text-base font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p> <div class=\"mt-2 flex gap-2\"><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"> </span> <span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"> </span> <span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"> </span></div></div> <button type=\"button\" class=\"shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button></div>"), l = e.from_html("<h2 class=\"mb-6 text-2xl font-bold text-foreground\"> </h2> <div class=\"space-y-4\"></div>", 1);
function u(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(s, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), u = e.derived(() => (e.get(o), [
		{
			title: (void 0)(),
			location: (void 0)(),
			type: (void 0)(),
			dept: (void 0)(),
			desc: (void 0)()
		},
		{
			title: (void 0)(),
			location: (void 0)(),
			type: (void 0)(),
			dept: (void 0)(),
			desc: (void 0)()
		},
		{
			title: (void 0)(),
			location: (void 0)(),
			type: (void 0)(),
			dept: (void 0)(),
			desc: (void 0)()
		},
		{
			title: (void 0)(),
			location: (void 0)(),
			type: (void 0)(),
			dept: (void 0)(),
			desc: (void 0)()
		},
		{
			title: (void 0)(),
			location: (void 0)(),
			type: (void 0)(),
			dept: (void 0)(),
			desc: (void 0)()
		}
	]));
	var d = l(), f = e.first_child(d), p = e.child(f, !0);
	e.reset(f);
	var m = e.sibling(f, 2);
	e.each(m, 21, () => e.get(u), e.index, (t, n) => {
		var r = c(), i = e.child(r), a = e.child(i), o = e.child(a, !0);
		e.reset(a);
		var s = e.sibling(a, 2), l = e.child(s, !0);
		e.reset(s);
		var u = e.sibling(s, 2), d = e.child(u), f = e.child(d, !0);
		e.reset(d);
		var p = e.sibling(d, 2), m = e.child(p, !0);
		e.reset(p);
		var h = e.sibling(p, 2), g = e.child(h, !0);
		e.reset(h), e.reset(u), e.reset(i);
		var _ = e.sibling(i, 2), v = e.child(_, !0);
		e.reset(_), e.reset(r), e.template_effect((t) => {
			e.set_text(o, e.get(n).title), e.set_text(l, e.get(n).desc), e.set_text(f, e.get(n).dept), e.set_text(m, e.get(n).location), e.set_text(g, e.get(n).type), e.set_text(v, t);
		}, [() => (void 0)()]), e.append(t, r);
	}), e.reset(m), e.template_effect((t) => e.set_text(p, t), [() => (void 0)()]), e.append(t, d), e.pop(), a();
}
export { u as default };
