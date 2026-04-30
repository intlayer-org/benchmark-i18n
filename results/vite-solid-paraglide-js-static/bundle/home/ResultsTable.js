import { createComponent, insert, template } from "solid-js/web";
import { For } from "solid-js";
var _tmpl$ = template(`<section><h2 class="mb-6 text-2xl font-bold text-foreground"></h2><div class="overflow-x-auto rounded-lg border border-border"><table class="w-full text-sm"><thead class=bg-muted><tr><th class="px-4 py-3 text-left font-medium text-muted-foreground"></th><th class="px-4 py-3 text-left font-medium text-muted-foreground"></th><th class="px-4 py-3 text-left font-medium text-muted-foreground"></th><th class="px-4 py-3 text-left font-medium text-muted-foreground"></th></tr></thead><tbody>`), _tmpl$2 = template(`<tr class="border-t border-border"><td class="px-4 py-3 font-medium text-foreground"></td><td class="px-4 py-3 text-muted-foreground"></td><td class="px-4 py-3 text-muted-foreground"></td><td class="px-4 py-3 text-muted-foreground">`);
function ResultsTable() {
	const results = () => [
		{
			lib: "react-i18next",
			size: "42.3 kB",
			time: "0.12ms",
			lazy: (void 0)()
		},
		{
			lib: "react-intl",
			size: "38.1 kB",
			time: "0.15ms",
			lazy: (void 0)()
		},
		{
			lib: "lingui",
			size: "12.8 kB",
			time: "0.08ms",
			lazy: (void 0)()
		},
		{
			lib: "typesafe-i18n",
			size: "5.2 kB",
			time: "0.05ms",
			lazy: (void 0)()
		}
	];
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$5 = _el$2.nextSibling.firstChild.firstChild, _el$7 = _el$5.firstChild.firstChild, _el$8 = _el$7.nextSibling, _el$9 = _el$8.nextSibling, _el$0 = _el$9.nextSibling, _el$1 = _el$5.nextSibling;
		insert(_el$2, () => (void 0)());
		insert(_el$7, () => (void 0)());
		insert(_el$8, () => (void 0)());
		insert(_el$9, () => (void 0)());
		insert(_el$0, () => (void 0)());
		insert(_el$1, createComponent(For, {
			get each() {
				return results();
			},
			children: (r) => (() => {
				var _el$10 = _tmpl$2(), _el$11 = _el$10.firstChild, _el$12 = _el$11.nextSibling, _el$13 = _el$12.nextSibling, _el$14 = _el$13.nextSibling;
				insert(_el$11, () => r.lib);
				insert(_el$12, () => r.size);
				insert(_el$13, () => r.time);
				insert(_el$14, () => r.lazy);
				return _el$10;
			})()
		}));
		return _el$;
	})();
}
export { ResultsTable as default };
