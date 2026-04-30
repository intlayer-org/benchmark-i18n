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
var s = t(n(typeof window < "u" ? window.location.pathname : "/en"), (e) => o(e)), c = e.from_html("<div class=\"rounded-lg border border-border bg-card p-6 text-center\"><div class=\"mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground\"> </div> <h3 class=\"text-base font-semibold text-foreground\"> </h3> <p class=\"mb-2 text-xs font-medium text-primary\"> </p> <p class=\"text-sm text-muted-foreground\"> </p></div>"), l = e.from_html("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\"></div>");
function u(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(s, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), u = e.derived(() => (e.get(o), [
		{
			name: (void 0)(),
			role: (void 0)(),
			bio: (void 0)()
		},
		{
			name: (void 0)(),
			role: (void 0)(),
			bio: (void 0)()
		},
		{
			name: (void 0)(),
			role: (void 0)(),
			bio: (void 0)()
		},
		{
			name: (void 0)(),
			role: (void 0)(),
			bio: (void 0)()
		},
		{
			name: (void 0)(),
			role: (void 0)(),
			bio: (void 0)()
		},
		{
			name: (void 0)(),
			role: (void 0)(),
			bio: (void 0)()
		}
	]));
	var d = l();
	e.each(d, 21, () => e.get(u), e.index, (t, n) => {
		var r = c(), i = e.child(r), a = e.child(i, !0);
		e.reset(i);
		var o = e.sibling(i, 2), s = e.child(o, !0);
		e.reset(o);
		var l = e.sibling(o, 2), u = e.child(l, !0);
		e.reset(l);
		var d = e.sibling(l, 2), f = e.child(d, !0);
		e.reset(d), e.reset(r), e.template_effect((t) => {
			e.set_text(a, t), e.set_text(s, e.get(n).name), e.set_text(u, e.get(n).role), e.set_text(f, e.get(n).bio);
		}, [() => e.get(n).name.split(" ").map((e) => e[0]).join("")]), e.append(t, r);
	}), e.reset(d), e.append(t, d), e.pop(), a();
}
export { u as default };
