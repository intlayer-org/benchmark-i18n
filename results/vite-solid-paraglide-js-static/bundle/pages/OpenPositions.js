import { createComponent, insert, template } from "solid-js/web";
import { For } from "solid-js";
var _tmpl$ = template(`<h2 class="mb-6 text-2xl font-bold text-foreground">`), _tmpl$2 = template(`<div class=space-y-4>`), _tmpl$3 = template(`<div class="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"><div><h3 class="text-base font-semibold text-foreground"></h3><p class="text-sm text-muted-foreground"></p><div class="mt-2 flex gap-2"><span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"></span><span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"></span><span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"></span></div></div><button type=button class="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">`);
function OpenPositions() {
	const openings = () => [
		{
			title: (void 0)(),
			location: (void 0)(),
			type: (void 0)(),
			dept: (void 0)(),
			desc: (void 0)()
		},
		{
			title: (void 0)(),
			location: (void 0)(),
			type: (void 0)(),
			dept: (void 0)(),
			desc: (void 0)()
		},
		{
			title: (void 0)(),
			location: (void 0)(),
			type: (void 0)(),
			dept: (void 0)(),
			desc: (void 0)()
		},
		{
			title: (void 0)(),
			location: (void 0)(),
			type: (void 0)(),
			dept: (void 0)(),
			desc: (void 0)()
		},
		{
			title: (void 0)(),
			location: (void 0)(),
			type: (void 0)(),
			dept: (void 0)(),
			desc: (void 0)()
		}
	];
	return [(() => {
		var _el$ = _tmpl$();
		insert(_el$, () => (void 0)());
		return _el$;
	})(), (() => {
		var _el$2 = _tmpl$2();
		insert(_el$2, createComponent(For, {
			get each() {
				return openings();
			},
			children: (o) => (() => {
				var _el$3 = _tmpl$3(), _el$4 = _el$3.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling, _el$8 = _el$6.nextSibling.firstChild, _el$9 = _el$8.nextSibling, _el$0 = _el$9.nextSibling, _el$1 = _el$4.nextSibling;
				insert(_el$5, () => o.title);
				insert(_el$6, () => o.desc);
				insert(_el$8, () => o.dept);
				insert(_el$9, () => o.location);
				insert(_el$0, () => o.type);
				insert(_el$1, () => (void 0)());
				return _el$3;
			})()
		}));
		return _el$2;
	})()];
}
export { OpenPositions as default };
