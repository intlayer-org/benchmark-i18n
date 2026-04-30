import { createComponent, insert, template } from "solid-js/web";
import { For } from "solid-js";
var _tmpl$ = template(`<section class="mx-auto mt-12 max-w-3xl"><h2 class="mb-4 text-2xl font-bold text-foreground"></h2><ul class=space-y-4>`), _tmpl$2 = template(`<li class="rounded-md border border-border p-4"><span class="block text-sm font-bold text-primary"></span><span class="mt-1 block text-sm text-muted-foreground">`);
function WhatWeMeasure() {
	const metrics = () => [
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
	];
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
		insert(_el$2, () => (void 0)());
		insert(_el$3, createComponent(For, {
			get each() {
				return metrics();
			},
			children: (item) => (() => {
				var _el$4 = _tmpl$2(), _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling;
				insert(_el$5, () => item.metric);
				insert(_el$6, () => item.desc);
				return _el$4;
			})()
		}));
		return _el$;
	})();
}
export { WhatWeMeasure as default };
