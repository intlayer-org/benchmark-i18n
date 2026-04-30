import { insert, setAttribute, template } from "solid-js/web";
import { createUniqueId } from "solid-js";
var _tmpl$ = template(`<section class="rounded-lg border border-border bg-card p-6"><h2 class="mb-4 text-lg font-semibold text-foreground"></h2><div><label class="mb-1 block text-sm font-medium text-foreground"></label><div class="flex gap-2"><input readonly defaultvalue=sk_bench_xxxxxxxxxxxxxxxxxxxx class="flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"><button type=button class="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"></button></div><p class="mt-1 text-xs text-muted-foreground">`);
function ApiAccessSection() {
	const apiKeyId = createUniqueId();
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$4 = _el$2.nextSibling.firstChild, _el$5 = _el$4.nextSibling, _el$6 = _el$5.firstChild, _el$7 = _el$6.nextSibling, _el$8 = _el$5.nextSibling;
		insert(_el$2, () => (void 0)());
		setAttribute(_el$4, "for", apiKeyId);
		insert(_el$4, () => (void 0)());
		setAttribute(_el$6, "id", apiKeyId);
		insert(_el$7, () => (void 0)());
		insert(_el$8, () => (void 0)());
		return _el$;
	})();
}
export { ApiAccessSection as default };
