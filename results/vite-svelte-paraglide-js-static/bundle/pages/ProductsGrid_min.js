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
var s = t(n(typeof window < "u" ? window.location.pathname : "/en"), (e) => o(e)), c = e.from_html("<div class=\"flex flex-col justify-between rounded-lg border border-border bg-card p-6\"><div><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"mb-4 text-sm text-muted-foreground\"> </p></div> <div class=\"flex items-center justify-between\"><span class=\"text-sm font-bold text-primary\"> </span> <button type=\"button\" class=\"rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button></div></div>"), l = e.from_html("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\"></div>");
function u(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(s, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), u = e.derived(() => (e.get(o), [
		{
			name: (void 0)(),
			desc: (void 0)(),
			price: (void 0)()
		},
		{
			name: (void 0)(),
			desc: (void 0)(),
			price: (void 0)()
		},
		{
			name: (void 0)(),
			desc: (void 0)(),
			price: (void 0)()
		},
		{
			name: (void 0)(),
			desc: (void 0)(),
			price: (void 0)()
		},
		{
			name: (void 0)(),
			desc: (void 0)(),
			price: (void 0)()
		},
		{
			name: (void 0)(),
			desc: (void 0)(),
			price: (void 0)()
		}
	]));
	var d = l();
	e.each(d, 21, () => e.get(u), e.index, (t, n) => {
		var r = c(), i = e.child(r), a = e.child(i), o = e.child(a, !0);
		e.reset(a);
		var s = e.sibling(a, 2), l = e.child(s, !0);
		e.reset(s), e.reset(i);
		var u = e.sibling(i, 2), d = e.child(u), f = e.child(d, !0);
		e.reset(d);
		var p = e.sibling(d, 2), m = e.child(p, !0);
		e.reset(p), e.reset(u), e.reset(r), e.template_effect((t) => {
			e.set_text(o, e.get(n).name), e.set_text(l, e.get(n).desc), e.set_text(f, e.get(n).price), e.set_text(m, t);
		}, [() => (void 0)()]), e.append(t, r);
	}), e.reset(d), e.append(t, d), e.pop(), a();
}
export { u as default };
