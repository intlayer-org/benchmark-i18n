import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
var root = $.from_html(`<tr class="border-t border-border"><td class="px-4 py-3 font-medium text-foreground"> </td><td class="px-4 py-3 text-muted-foreground"> </td><td class="px-4 py-3 text-muted-foreground"> </td><td class="px-4 py-3 text-muted-foreground"> </td></tr>`);
var root_1 = $.from_html(`<section><h2 class="mb-6 text-2xl font-bold text-foreground">Sample Results</h2> <div class="overflow-x-auto rounded-lg border border-border"><table class="w-full text-sm"><thead class="bg-muted"><tr><th class="px-4 py-3 text-left font-medium text-muted-foreground">Library</th><th class="px-4 py-3 text-left font-medium text-muted-foreground">Bundle Size</th><th class="px-4 py-3 text-left font-medium text-muted-foreground">Lookup Time</th><th class="px-4 py-3 text-left font-medium text-muted-foreground">Lazy Loading</th></tr></thead><tbody></tbody></table></div></section>`);
function ResultsTable($$anchor) {
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
	var section = root_1();
	var div = $.sibling($.child(section), 2);
	var table = $.child(div);
	var tbody = $.sibling($.child(table));
	$.each(tbody, 5, () => results, (r) => r.lib, ($$anchor, r) => {
		var tr = root();
		var td = $.child(tr);
		var text = $.only_child(td, true);
		var td_1 = $.sibling(td);
		var text_1 = $.only_child(td_1, true);
		var td_2 = $.sibling(td_1);
		var text_2 = $.only_child(td_2, true);
		var td_3 = $.sibling(td_2);
		var text_3 = $.only_child(td_3, true);
		$.reset(tr);
		$.template_effect(() => {
			$.set_text(text, $.get(r).lib);
			$.set_text(text_1, $.get(r).size);
			$.set_text(text_2, $.get(r).time);
			$.set_text(text_3, $.get(r).lazy);
		});
		$.append($$anchor, tr);
	});
	$.reset(tbody);
	$.reset(table);
	$.reset(div);
	$.reset(section);
	$.append($$anchor, section);
}
export { ResultsTable as default };
