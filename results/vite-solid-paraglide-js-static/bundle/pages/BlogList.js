import { createComponent, insert, template } from "solid-js/web";
import { For } from "solid-js";
var _tmpl$ = template(`<div class="grid gap-6 md:grid-cols-2">`), _tmpl$2 = template(`<article class="rounded-lg border border-border bg-card p-6"><div class="mb-3 flex items-center gap-3"><span class="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground"></span><span class="text-xs text-muted-foreground"></span></div><h2 class="mb-2 text-lg font-semibold text-foreground"></h2><p class="mb-4 text-sm text-muted-foreground"></p><button type=button class="text-sm font-medium text-primary hover:underline">`);
function BlogList() {
	const posts = () => [
		{
			title: (void 0)(),
			date: (void 0)(),
			excerpt: (void 0)(),
			category: (void 0)()
		},
		{
			title: (void 0)(),
			date: (void 0)(),
			excerpt: (void 0)(),
			category: (void 0)()
		},
		{
			title: (void 0)(),
			date: (void 0)(),
			excerpt: (void 0)(),
			category: (void 0)()
		},
		{
			title: (void 0)(),
			date: (void 0)(),
			excerpt: (void 0)(),
			category: (void 0)()
		},
		{
			title: (void 0)(),
			date: (void 0)(),
			excerpt: (void 0)(),
			category: (void 0)()
		},
		{
			title: (void 0)(),
			date: (void 0)(),
			excerpt: (void 0)(),
			category: (void 0)()
		}
	];
	return (() => {
		var _el$ = _tmpl$();
		insert(_el$, createComponent(For, {
			get each() {
				return posts();
			},
			children: (p) => (() => {
				var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling, _el$6 = _el$3.nextSibling, _el$7 = _el$6.nextSibling, _el$8 = _el$7.nextSibling;
				insert(_el$4, () => p.category);
				insert(_el$5, () => p.date);
				insert(_el$6, () => p.title);
				insert(_el$7, () => p.excerpt);
				insert(_el$8, () => (void 0)());
				return _el$2;
			})()
		}));
		return _el$;
	})();
}
export { BlogList as default };
