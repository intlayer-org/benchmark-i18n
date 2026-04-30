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
var root = $.from_html(`<section class="mb-16"><h2 class="mb-6 text-2xl font-bold text-foreground"> </h2> <div class="grid gap-6 md:grid-cols-3"><div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div> <div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div> <div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div></div></section>`);
function WhyItMatters($$anchor, $$props) {
	$.push($$props, false);
	usePerformanceMeasure("WhyItMatters");
	$.init();
	var section = root();
	var h2 = $.child(section);
	var text = $.child(h2, true);
	$.reset(h2);
	var div = $.sibling(h2, 2);
	var div_1 = $.child(div);
	var h3 = $.child(div_1);
	var text_1 = $.child(h3, true);
	$.reset(h3);
	var p = $.sibling(h3, 2);
	var text_2 = $.child(p, true);
	$.reset(p);
	$.reset(div_1);
	var div_2 = $.sibling(div_1, 2);
	var h3_1 = $.child(div_2);
	var text_3 = $.child(h3_1, true);
	$.reset(h3_1);
	var p_1 = $.sibling(h3_1, 2);
	var text_4 = $.child(p_1, true);
	$.reset(p_1);
	$.reset(div_2);
	var div_3 = $.sibling(div_2, 2);
	var h3_2 = $.child(div_3);
	var text_5 = $.child(h3_2, true);
	$.reset(h3_2);
	var p_2 = $.sibling(h3_2, 2);
	var text_6 = $.child(p_2, true);
	$.reset(p_2);
	$.reset(div_3);
	$.reset(div);
	$.reset(section);
	$.template_effect(($0, $1, $2, $3, $4, $5, $6) => {
		$.set_text(text, $0);
		$.set_text(text_1, $1);
		$.set_text(text_2, $2);
		$.set_text(text_3, $3);
		$.set_text(text_4, $4);
		$.set_text(text_5, $5);
		$.set_text(text_6, $6);
	}, [
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
export { WhyItMatters as default };
