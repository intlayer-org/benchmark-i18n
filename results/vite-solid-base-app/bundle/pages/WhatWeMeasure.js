import { createComponent, insert, template } from "solid-js/web";
import { For } from "solid-js";
var _tmpl$ = template(`<section class="mx-auto mt-12 max-w-3xl"><h2 class="mb-4 text-2xl font-bold text-foreground">What We Measure</h2><ul class=space-y-4>`), _tmpl$2 = template(`<li class="rounded-md border border-border p-4"><span class="block text-sm font-bold text-primary"></span><span class="mt-1 block text-sm text-muted-foreground">`);
function WhatWeMeasure() {
	const metrics = [
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
		var _el$ = _tmpl$(), _el$3 = _el$.firstChild.nextSibling;
		insert(_el$3, createComponent(For, {
			each: metrics,
			children: (m) => (() => {
				var _el$4 = _tmpl$2(), _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling;
				insert(_el$5, () => m.metric);
				insert(_el$6, () => m.desc);
				return _el$4;
			})()
		}));
		return _el$;
	})();
}
export { WhatWeMeasure as default };
