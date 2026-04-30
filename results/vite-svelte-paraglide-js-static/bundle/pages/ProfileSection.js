import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
var root = $.from_html(`<section class="rounded-lg border border-border bg-card p-6"><h2 class="mb-4 text-lg font-semibold text-foreground"> </h2> <div class="space-y-4"><div><label for="settings-display-name" class="mb-1 block text-sm font-medium text-foreground"> </label> <input id="settings-display-name" value="John Developer" class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none"/></div> <div><label for="settings-email" class="mb-1 block text-sm font-medium text-foreground"> </label> <input id="settings-email" value="john@example.com" class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none"/></div></div></section>`);
function ProfileSection($$anchor, $$props) {
	$.push($$props, false);
	$.init();
	var section = root();
	var h2 = $.child(section);
	var text = $.child(h2, true);
	$.reset(h2);
	var div = $.sibling(h2, 2);
	var div_1 = $.child(div);
	var label = $.child(div_1);
	var text_1 = $.child(label, true);
	$.reset(label);
	$.sibling(label, 2);
	$.reset(div_1);
	var div_2 = $.sibling(div_1, 2);
	var label_1 = $.child(div_2);
	var text_2 = $.child(label_1, true);
	$.reset(label_1);
	$.sibling(label_1, 2);
	$.reset(div_2);
	$.reset(div);
	$.reset(section);
	$.template_effect(($0, $1, $2) => {
		$.set_text(text, $0);
		$.set_text(text_1, $1);
		$.set_text(text_2, $2);
	}, [
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)()
	]);
	$.append($$anchor, section);
	$.pop();
}
export { ProfileSection as default };
