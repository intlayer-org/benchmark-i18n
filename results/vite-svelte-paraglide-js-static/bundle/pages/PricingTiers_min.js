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
var s = t(n(typeof window < "u" ? window.location.pathname : "/en"), (e) => o(e)), c = e.from_html("<li class=\"flex items-center gap-2 text-sm text-muted-foreground\"><span class=\"text-primary\">✓</span> </li>"), l = e.from_html("<div><h3 class=\"text-lg font-semibold text-foreground\"> </h3> <div class=\"my-4\"><span class=\"text-3xl font-bold text-foreground\"> </span> <span class=\"text-sm text-muted-foreground\"> </span></div> <ul class=\"mb-6 flex-1 space-y-2\"></ul> <button type=\"button\"> </button></div>"), u = e.from_html("<div class=\"grid gap-6 md:grid-cols-3\"></div>");
function d(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(s, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), d = e.derived(() => (e.get(o), [
		{
			name: (void 0)(),
			price: (void 0)(),
			period: (void 0)(),
			features: [
				(void 0)(),
				(void 0)(),
				(void 0)(),
				(void 0)()
			]
		},
		{
			name: (void 0)(),
			price: (void 0)(),
			period: (void 0)(),
			features: [
				(void 0)(),
				(void 0)(),
				(void 0)(),
				(void 0)(),
				(void 0)(),
				(void 0)()
			],
			highlighted: !0
		},
		{
			name: (void 0)(),
			price: (void 0)(),
			period: "",
			features: [
				(void 0)(),
				(void 0)(),
				(void 0)(),
				(void 0)(),
				(void 0)(),
				(void 0)(),
				(void 0)()
			]
		}
	]));
	function f(e) {
		return (void 0)(), (void 0)();
	}
	var p = u();
	e.each(p, 21, () => e.get(d), e.index, (t, n) => {
		var r = l(), i = e.child(r), a = e.child(i, !0);
		e.reset(i);
		var o = e.sibling(i, 2), s = e.child(o), u = e.child(s, !0);
		e.reset(s);
		var d = e.sibling(s, 2), p = e.child(d, !0);
		e.reset(d), e.reset(o);
		var m = e.sibling(o, 2);
		e.each(m, 20, () => e.get(n).features, (e) => e, (t, n) => {
			var r = c(), i = e.sibling(e.child(r));
			e.reset(r), e.template_effect(() => e.set_text(i, ` ${n ?? ""}`)), e.append(t, r);
		}), e.reset(m);
		var h = e.sibling(m, 2), g = e.child(h, !0);
		e.reset(h), e.reset(r), e.template_effect((t) => {
			e.set_class(r, 1, `flex flex-col rounded-lg border p-6 ${e.get(n).highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`), e.set_text(a, e.get(n).name), e.set_text(u, e.get(n).price), e.set_text(p, e.get(n).period), e.set_class(h, 1, `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${e.get(n).highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`), e.set_text(g, t);
		}, [() => f(e.get(n).name)]), e.append(t, r);
	}), e.reset(p), e.append(t, p), e.pop(), a();
}
export { d as default };
