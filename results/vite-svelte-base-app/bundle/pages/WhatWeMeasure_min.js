import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<li class=\"rounded-md border border-border p-4\"><span class=\"block text-sm font-bold text-primary\"> </span> <span class=\"mt-1 block text-sm text-muted-foreground\"> </span></li>"), n = e.from_html("<section class=\"mx-auto mt-12 max-w-3xl\"><h2 class=\"mb-4 text-2xl font-bold text-foreground\">What We Measure</h2> <ul class=\"space-y-4\"></ul></section>");
function r(r) {
	let i = [
		{
			metric: "Bundle size impact",
			desc: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks."
		},
		{
			metric: "Rendering overhead",
			desc: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree."
		},
		{
			metric: "Hydration cost",
			desc: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive."
		},
		{
			metric: "Lazy loading effectiveness",
			desc: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity)."
		},
		{
			metric: "Locale switch speed",
			desc: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM."
		}
	];
	var a = n(), o = e.sibling(e.child(a), 2);
	e.each(o, 5, () => i, (e) => e.metric, (n, r) => {
		var i = t(), a = e.child(i), o = e.only_child(a, !0), s = e.sibling(a, 2), c = e.only_child(s, !0);
		e.reset(i), e.template_effect(() => {
			e.set_text(o, e.get(r).metric), e.set_text(c, e.get(r).desc);
		}), e.append(n, i);
	}), e.reset(o), e.reset(a), e.append(r, a);
}
export { r as default };
