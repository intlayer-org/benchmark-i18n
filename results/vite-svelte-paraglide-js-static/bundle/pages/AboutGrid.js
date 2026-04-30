import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
var root = $.from_html(`<div class="grid gap-8 md:grid-cols-2"><div class="rounded-lg border border-border bg-card p-6"><h2 class="mb-3 text-xl font-semibold text-foreground"> </h2> <p class="text-sm text-muted-foreground"> </p></div> <div class="rounded-lg border border-border bg-card p-6"><h2 class="mb-3 text-xl font-semibold text-foreground"> </h2> <p class="text-sm text-muted-foreground"> </p></div></div>`);
function AboutGrid($$anchor, $$props) {
	$.push($$props, false);
	$.init();
	var div = root();
	var div_1 = $.child(div);
	var h2 = $.child(div_1);
	var text = $.child(h2, true);
	$.reset(h2);
	var p = $.sibling(h2, 2);
	var text_1 = $.child(p, true);
	$.reset(p);
	$.reset(div_1);
	var div_2 = $.sibling(div_1, 2);
	var h2_1 = $.child(div_2);
	var text_2 = $.child(h2_1, true);
	$.reset(h2_1);
	var p_1 = $.sibling(h2_1, 2);
	var text_3 = $.child(p_1, true);
	$.reset(p_1);
	$.reset(div_2);
	$.reset(div);
	$.template_effect(($0, $1, $2, $3) => {
		$.set_text(text, $0);
		$.set_text(text_1, $1);
		$.set_text(text_2, $2);
		$.set_text(text_3, $3);
	}, [
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)()
	]);
	$.append($$anchor, div);
	$.pop();
}
export { AboutGrid as default };
