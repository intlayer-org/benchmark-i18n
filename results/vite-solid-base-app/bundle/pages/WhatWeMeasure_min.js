import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r } from "solid-js";
var i = n("<section class=\"mx-auto mt-12 max-w-3xl\"><h2 class=\"mb-4 text-2xl font-bold text-foreground\">What We Measure</h2><ul class=space-y-4>"), a = n("<li class=\"rounded-md border border-border p-4\"><span class=\"block text-sm font-bold text-primary\"></span><span class=\"mt-1 block text-sm text-muted-foreground\">");
function o() {
	let n = [
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
	return (() => {
		var o = i(), s = o.firstChild.nextSibling;
		return t(s, e(r, {
			each: n,
			children: (e) => (() => {
				var n = a(), r = n.firstChild, i = r.nextSibling;
				return t(r, () => e.metric), t(i, () => e.desc), n;
			})()
		})), o;
	})();
}
export { o as default };
