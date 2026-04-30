import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
var root = $.from_html(`<section class="rounded-lg border border-border bg-card p-6"><h2 class="mb-4 text-lg font-semibold text-foreground"> </h2> <div><label for="settings-api-key" class="mb-1 block text-sm font-medium text-foreground"> </label> <div class="flex gap-2"><input id="settings-api-key" readonly="" value="sk_bench_xxxxxxxxxxxxxxxxxxxx" class="flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"/> <button type="button" class="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"> </button></div> <p class="mt-1 text-xs text-muted-foreground"> </p></div></section>`);
function ApiAccessSection($$anchor, $$props) {
	$.push($$props, false);
	$.init();
	var section = root();
	var h2 = $.child(section);
	var text = $.child(h2, true);
	$.reset(h2);
	var div = $.sibling(h2, 2);
	var label = $.child(div);
	var text_1 = $.child(label, true);
	$.reset(label);
	var div_1 = $.sibling(label, 2);
	var input = $.child(div_1);
	var button = $.sibling(input, 2);
	var text_2 = $.child(button, true);
	$.reset(button);
	$.reset(div_1);
	var p = $.sibling(div_1, 2);
	var text_3 = $.child(p, true);
	$.reset(p);
	$.reset(div);
	$.reset(section);
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
	$.append($$anchor, section);
	$.pop();
}
export { ApiAccessSection as default };
