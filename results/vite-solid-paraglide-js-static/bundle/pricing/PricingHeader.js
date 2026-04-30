import { createComponent, insert, template } from "solid-js/web";
var _tmpl$$1 = template(`<div class="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">`);
function MockBanner() {
	return (() => {
		var _el$ = _tmpl$$1();
		insert(_el$, () => (void 0)());
		return _el$;
	})();
}
var _tmpl$ = template(`<div class="mb-12 text-center"><h1 class="mb-3 text-3xl font-bold text-foreground"></h1><p class=text-muted-foreground>`);
function PricingHeader() {
	return [createComponent(MockBanner, {}), (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
		insert(_el$2, () => (void 0)());
		insert(_el$3, () => (void 0)());
		return _el$;
	})()];
}
export { PricingHeader as default };
