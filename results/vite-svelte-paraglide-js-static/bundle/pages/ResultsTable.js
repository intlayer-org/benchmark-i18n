import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { onMount } from "svelte";
function usePerformanceMeasure(name) {
	if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	onMount(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch {}
		}
	});
}
var root_1 = $.from_html(`<tr class="border-t border-border"><td class="px-4 py-3 font-medium text-foreground"> </td><td class="px-4 py-3 text-muted-foreground"> </td><td class="px-4 py-3 text-muted-foreground"> </td><td class="px-4 py-3 text-muted-foreground"> </td></tr>`);
var root = $.from_html(`<section><h2 class="mb-6 text-2xl font-bold text-foreground"> </h2> <div class="overflow-x-auto rounded-lg border border-border"><table class="w-full text-sm"><thead class="bg-muted"><tr><th class="px-4 py-3 text-left font-medium text-muted-foreground"> </th><th class="px-4 py-3 text-left font-medium text-muted-foreground"> </th><th class="px-4 py-3 text-left font-medium text-muted-foreground"> </th><th class="px-4 py-3 text-left font-medium text-muted-foreground"> </th></tr></thead><tbody></tbody></table></div></section>`);
function ResultsTable($$anchor, $$props) {
	$.push($$props, false);
	usePerformanceMeasure("ResultsTable");
	const results = [
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
	$.init();
	var section = root();
	var h2 = $.child(section);
	var text = $.child(h2, true);
	$.reset(h2);
	var div = $.sibling(h2, 2);
	var table = $.child(div);
	var thead = $.child(table);
	var tr = $.child(thead);
	var th = $.child(tr);
	var text_1 = $.child(th, true);
	$.reset(th);
	var th_1 = $.sibling(th);
	var text_2 = $.child(th_1, true);
	$.reset(th_1);
	var th_2 = $.sibling(th_1);
	var text_3 = $.child(th_2, true);
	$.reset(th_2);
	var th_3 = $.sibling(th_2);
	var text_4 = $.child(th_3, true);
	$.reset(th_3);
	$.reset(tr);
	$.reset(thead);
	var tbody = $.sibling(thead);
	$.each(tbody, 5, () => results, $.index, ($$anchor, r) => {
		var tr_1 = root_1();
		var td = $.child(tr_1);
		var text_5 = $.child(td, true);
		$.reset(td);
		var td_1 = $.sibling(td);
		var text_6 = $.child(td_1, true);
		$.reset(td_1);
		var td_2 = $.sibling(td_1);
		var text_7 = $.child(td_2, true);
		$.reset(td_2);
		var td_3 = $.sibling(td_2);
		var text_8 = $.child(td_3, true);
		$.reset(td_3);
		$.reset(tr_1);
		$.template_effect(() => {
			$.set_text(text_5, $.get(r).lib);
			$.set_text(text_6, $.get(r).size);
			$.set_text(text_7, $.get(r).time);
			$.set_text(text_8, $.get(r).lazy);
		});
		$.append($$anchor, tr_1);
	});
	$.reset(tbody);
	$.reset(table);
	$.reset(div);
	$.reset(section);
	$.template_effect(($0, $1, $2, $3, $4) => {
		$.set_text(text, $0);
		$.set_text(text_1, $1);
		$.set_text(text_2, $2);
		$.set_text(text_3, $3);
		$.set_text(text_4, $4);
	}, [
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)()
	]);
	$.append($$anchor, section);
	$.pop();
}
export { ResultsTable as default };
