import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
var root = $.from_html(`<div class="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground"> </div>`);
function MockBanner($$anchor, $$props) {
	$.push($$props, false);
	$.init();
	var div = root();
	var text = $.child(div, true);
	$.reset(div);
	$.template_effect(($0) => $.set_text(text, $0), [() => (void 0)()]);
	$.append($$anchor, div);
	$.pop();
}
export { MockBanner as default };
