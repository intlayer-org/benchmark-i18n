import { createComponent, insert, template } from "solid-js/web";
import { For } from "solid-js";
var _tmpl$ = template(`<section><h2 class="mb-6 text-2xl font-bold text-foreground">Sample Results</h2><div class="overflow-x-auto rounded-lg border border-border"><table class="w-full text-sm"><thead class=bg-muted><tr><th class="px-4 py-3 text-left font-medium text-muted-foreground">Library</th><th class="px-4 py-3 text-left font-medium text-muted-foreground">Bundle Size</th><th class="px-4 py-3 text-left font-medium text-muted-foreground">Lookup Time</th><th class="px-4 py-3 text-left font-medium text-muted-foreground">Lazy Loading</th></tr></thead><tbody>`), _tmpl$2 = template(`<tr class="border-t border-border"><td class="px-4 py-3 font-medium text-foreground"></td><td class="px-4 py-3 text-muted-foreground"></td><td class="px-4 py-3 text-muted-foreground"></td><td class="px-4 py-3 text-muted-foreground">`);
function ResultsTable() {
	const results = [
		{
			lib: "react-i18next",
			size: "42.3 kB",
			time: "0.12ms",
			lazy: "Yes"
		},
		{
			lib: "react-intl",
			size: "38.1 kB",
			time: "0.15ms",
			lazy: "Manual"
		},
		{
			lib: "lingui",
			size: "12.8 kB",
			time: "0.08ms",
			lazy: "Yes"
		},
		{
			lib: "typesafe-i18n",
			size: "5.2 kB",
			time: "0.05ms",
			lazy: "Built-in"
		}
	];
	return (() => {
		var _el$ = _tmpl$(), _el$6 = _el$.firstChild.nextSibling.firstChild.firstChild.nextSibling;
		insert(_el$6, createComponent(For, {
			each: results,
			children: (r) => (() => {
				var _el$7 = _tmpl$2(), _el$8 = _el$7.firstChild, _el$9 = _el$8.nextSibling, _el$0 = _el$9.nextSibling, _el$1 = _el$0.nextSibling;
				insert(_el$8, () => r.lib);
				insert(_el$9, () => r.size);
				insert(_el$0, () => r.time);
				insert(_el$1, () => r.lazy);
				return _el$7;
			})()
		}));
		return _el$;
	})();
}
export { ResultsTable as default };
