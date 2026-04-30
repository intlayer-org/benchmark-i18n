import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
var root = $.from_html(`<div class="flex justify-end gap-3"><button type="button" class="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"> </button> <button type="submit" class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"> </button></div>`);
function SettingsFooter($$anchor, $$props) {
	$.push($$props, false);
	$.init();
	var div = root();
	var button = $.child(div);
	var text = $.child(button, true);
	$.reset(button);
	var button_1 = $.sibling(button, 2);
	var text_1 = $.child(button_1, true);
	$.reset(button_1);
	$.reset(div);
	$.template_effect(($0, $1) => {
		$.set_text(text, $0);
		$.set_text(text_1, $1);
	}, [() => (void 0)(), () => (void 0)()]);
	$.append($$anchor, div);
	$.pop();
}
export { SettingsFooter as default };
