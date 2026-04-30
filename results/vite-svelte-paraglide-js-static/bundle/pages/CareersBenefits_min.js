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
var s = t(n(typeof window < "u" ? window.location.pathname : "/en"), (e) => o(e)), c = e.from_html("<div class=\"rounded-lg border border-border bg-card p-4 text-center\"><p class=\"text-sm font-semibold text-foreground\"> </p> <p class=\"text-xs text-muted-foreground\"> </p></div>"), l = e.from_html("<div class=\"mb-12 grid gap-4 md:grid-cols-3\"></div>");
function u(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(s, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), u = e.derived(() => (e.get(o), [
		{
			label: (void 0)(),
			value: (void 0)()
		},
		{
			label: (void 0)(),
			value: (void 0)()
		},
		{
			label: (void 0)(),
			value: (void 0)()
		}
	]));
	var d = l();
	e.each(d, 21, () => e.get(u), e.index, (t, n) => {
		var r = c(), i = e.child(r), a = e.child(i, !0);
		e.reset(i);
		var o = e.sibling(i, 2), s = e.child(o, !0);
		e.reset(o), e.reset(r), e.template_effect(() => {
			e.set_text(a, e.get(n).label), e.set_text(s, e.get(n).value);
		}), e.append(t, r);
	}), e.reset(d), e.append(t, d), e.pop(), a();
}
export { u as default };
