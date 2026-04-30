import { insert, template } from "solid-js/web";
var _tmpl$ = template(`<div class="grid gap-8 md:grid-cols-2"><div class="rounded-lg border border-border bg-card p-6"><h2 class="mb-3 text-xl font-semibold text-foreground"></h2><p class="text-sm text-muted-foreground"></p></div><div class="rounded-lg border border-border bg-card p-6"><h2 class="mb-3 text-xl font-semibold text-foreground"></h2><p class="text-sm text-muted-foreground">`);
function AboutGrid() {
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$6 = _el$2.nextSibling.firstChild, _el$7 = _el$6.nextSibling;
		insert(_el$3, () => (void 0)());
		insert(_el$4, () => (void 0)());
		insert(_el$6, () => (void 0)());
		insert(_el$7, () => (void 0)());
		return _el$;
	})();
}
export { AboutGrid as default };
