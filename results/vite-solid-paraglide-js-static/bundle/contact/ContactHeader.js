import { createComponent, effect, insert, setAttribute, template } from "solid-js/web";
var _tmpl$$1 = template(`<div class="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">`);
function MockBanner() {
	return (() => {
		var _el$ = _tmpl$$1();
		insert(_el$, () => (void 0)());
		return _el$;
	})();
}
var _tmpl$ = template(`<h1 class="mb-2 text-3xl font-bold text-foreground">`), _tmpl$2 = template(`<p class="mb-8 text-muted-foreground"> <a class="text-primary hover:underline"></a>.`);
function ContactHeader() {
	return [
		createComponent(MockBanner, {}),
		(() => {
			var _el$ = _tmpl$();
			insert(_el$, () => (void 0)());
			return _el$;
		})(),
		(() => {
			var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling;
			insert(_el$2, () => (void 0)(), _el$3);
			insert(_el$4, () => (void 0)());
			effect(() => setAttribute(_el$4, "href", `mailto:${(void 0)()}`));
			return _el$2;
		})()
	];
}
export { ContactHeader as default };
