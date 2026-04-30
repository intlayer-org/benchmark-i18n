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
var root = $.from_html(`<section class="mb-16 mx-auto max-w-3xl space-y-6"><h2 class="text-2xl font-bold text-foreground"> </h2> <div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p> <ul class="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5"><li> </li> <li> </li> <li> </li></ul></div> <div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p> <ul class="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5"><li><strong class="text-foreground"> </strong> </li> <li><strong class="text-foreground"> </strong> </li> <li><strong class="text-foreground"> </strong> </li></ul></div> <div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div></section>`);
function UnderstandingImpact($$anchor, $$props) {
	$.push($$props, false);
	usePerformanceMeasure("UnderstandingImpact");
	$.init();
	var section = root();
	var h2 = $.child(section);
	var text = $.child(h2, true);
	$.reset(h2);
	var div = $.sibling(h2, 2);
	var h3 = $.child(div);
	var text_1 = $.child(h3, true);
	$.reset(h3);
	var p = $.sibling(h3, 2);
	var text_2 = $.child(p, true);
	$.reset(p);
	var ul = $.sibling(p, 2);
	var li = $.child(ul);
	var text_3 = $.child(li, true);
	$.reset(li);
	var li_1 = $.sibling(li, 2);
	var text_4 = $.child(li_1, true);
	$.reset(li_1);
	var li_2 = $.sibling(li_1, 2);
	var text_5 = $.child(li_2, true);
	$.reset(li_2);
	$.reset(ul);
	$.reset(div);
	var div_1 = $.sibling(div, 2);
	var h3_1 = $.child(div_1);
	var text_6 = $.child(h3_1, true);
	$.reset(h3_1);
	var p_1 = $.sibling(h3_1, 2);
	var text_7 = $.child(p_1, true);
	$.reset(p_1);
	var ul_1 = $.sibling(p_1, 2);
	var li_3 = $.child(ul_1);
	var strong = $.child(li_3);
	var text_8 = $.child(strong, true);
	$.reset(strong);
	var text_9 = $.sibling(strong);
	$.reset(li_3);
	var li_4 = $.sibling(li_3, 2);
	var strong_1 = $.child(li_4);
	var text_10 = $.child(strong_1, true);
	$.reset(strong_1);
	var text_11 = $.sibling(strong_1);
	$.reset(li_4);
	var li_5 = $.sibling(li_4, 2);
	var strong_2 = $.child(li_5);
	var text_12 = $.child(strong_2, true);
	$.reset(strong_2);
	var text_13 = $.sibling(strong_2);
	$.reset(li_5);
	$.reset(ul_1);
	$.reset(div_1);
	var div_2 = $.sibling(div_1, 2);
	var h3_2 = $.child(div_2);
	var text_14 = $.child(h3_2, true);
	$.reset(h3_2);
	var p_2 = $.sibling(h3_2, 2);
	var text_15 = $.child(p_2, true);
	$.reset(p_2);
	$.reset(div_2);
	$.reset(section);
	$.template_effect(($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) => {
		$.set_text(text, $0);
		$.set_text(text_1, $1);
		$.set_text(text_2, $2);
		$.set_text(text_3, $3);
		$.set_text(text_4, $4);
		$.set_text(text_5, $5);
		$.set_text(text_6, $6);
		$.set_text(text_7, $7);
		$.set_text(text_8, $8);
		$.set_text(text_9, ` ${$9 ?? ""}`);
		$.set_text(text_10, $10);
		$.set_text(text_11, ` ${$11 ?? ""}`);
		$.set_text(text_12, $12);
		$.set_text(text_13, ` ${$13 ?? ""}`);
		$.set_text(text_14, $14);
		$.set_text(text_15, $15);
	}, [
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)()
	]);
	$.append($$anchor, section);
	$.pop();
}
export { UnderstandingImpact as default };
