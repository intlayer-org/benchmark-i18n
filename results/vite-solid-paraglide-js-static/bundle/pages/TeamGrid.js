import { createComponent, insert, template } from "solid-js/web";
import { For } from "solid-js";
var _tmpl$ = template(`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">`), _tmpl$2 = template(`<div class="rounded-lg border border-border bg-card p-6 text-center"><div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground"></div><h3 class="text-base font-semibold text-foreground"></h3><p class="mb-2 text-xs font-medium text-primary"></p><p class="text-sm text-muted-foreground">`);
function TeamGrid() {
	const members = () => [
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
	];
	return (() => {
		var _el$ = _tmpl$();
		insert(_el$, createComponent(For, {
			get each() {
				return members();
			},
			children: (item) => (() => {
				var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$4.nextSibling, _el$6 = _el$5.nextSibling;
				insert(_el$3, () => item.name.split(" ").map((n) => n[0]).join(""));
				insert(_el$4, () => item.name);
				insert(_el$5, () => item.role);
				insert(_el$6, () => item.bio);
				return _el$2;
			})()
		}));
		return _el$;
	})();
}
export { TeamGrid as default };
