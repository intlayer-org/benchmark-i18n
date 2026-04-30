import { insert, template } from "solid-js/web";
var _tmpl$ = template(`<div class="flex justify-end gap-3"><button type=button class="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"></button><button type=submit class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">`);
function SettingsFooter() {
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
		insert(_el$2, () => (void 0)());
		insert(_el$3, () => (void 0)());
		return _el$;
	})();
}
export { SettingsFooter as default };
