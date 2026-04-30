import { createComponent, insert, template } from "solid-js/web";
import { For } from "solid-js";
var _tmpl$ = template(`<div class="mb-12 grid gap-4 md:grid-cols-3">`), _tmpl$2 = template(`<div class="rounded-lg border border-border bg-card p-4 text-center"><p class="text-sm font-semibold text-foreground"></p><p class="text-xs text-muted-foreground">`);
function CareersBenefits() {
	const benefits = () => [
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
	];
	return (() => {
		var _el$ = _tmpl$();
		insert(_el$, createComponent(For, {
			get each() {
				return benefits();
			},
			children: (b) => (() => {
				var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling;
				insert(_el$3, () => b.label);
				insert(_el$4, () => b.value);
				return _el$2;
			})()
		}));
		return _el$;
	})();
}
export { CareersBenefits as default };
