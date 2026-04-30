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
var s = t(n(typeof window < "u" ? window.location.pathname : "/en"), (e) => o(e)), c = e.from_html("<a class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), l = e.from_html("<a target=\"_blank\" rel=\"noreferrer\" class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), u = e.from_html("<li><!></li>"), d = e.from_html("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <ul class=\"space-y-1\"></ul></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div></div> <div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\"> </div></div></footer>");
function f(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(s, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), f = e.derived(() => [
		{
			label: (void 0)(),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: (void 0)(),
			to: `/${e.get(o)}/about`,
			isInternal: !0
		},
		{
			label: (void 0)(),
			to: `/${e.get(o)}/contact`,
			isInternal: !0
		}
	]);
	var p = d(), m = e.child(p), h = e.child(m), g = e.child(h), _ = e.child(g), v = e.child(_, !0);
	e.reset(_);
	var y = e.sibling(_, 2), b = e.child(y, !0);
	e.reset(y), e.reset(g);
	var x = e.sibling(g, 2), S = e.child(x), C = e.child(S, !0);
	e.reset(S);
	var w = e.sibling(S, 2);
	e.each(w, 21, () => e.get(f), (e) => e.label, (t, n) => {
		var r = u(), i = e.child(r), a = (t) => {
			var r = c(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		}, o = (t) => {
			var r = l(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).href), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		};
		e.if(i, (t) => {
			e.get(n).isInternal ? t(a) : t(o, -1);
		}), e.reset(r), e.append(t, r);
	}), e.reset(w), e.reset(x);
	var T = e.sibling(x, 2), E = e.child(T), D = e.child(E, !0);
	e.reset(E);
	var O = e.sibling(E, 2), k = e.child(O, !0);
	e.reset(O), e.reset(T), e.reset(h);
	var A = e.sibling(h, 2), j = e.child(A, !0);
	e.reset(A), e.reset(m), e.reset(p), e.template_effect((t, n, r, i, a, o) => {
		e.set_text(v, t), e.set_text(b, n), e.set_text(C, r), e.set_text(D, i), e.set_text(k, a), e.set_text(j, o);
	}, [
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)()
	]), e.append(t, p), e.pop(), a();
}
export { f as default };
