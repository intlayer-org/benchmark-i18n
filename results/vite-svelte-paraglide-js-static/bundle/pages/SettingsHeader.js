import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
var root$1 = $.from_html(`<div class="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground"> </div>`);
function MockBanner($$anchor, $$props) {
	$.push($$props, false);
	$.init();
	var div = root$1();
	var text = $.child(div, true);
	$.reset(div);
	$.template_effect(($0) => $.set_text(text, $0), [() => (void 0)()]);
	$.append($$anchor, div);
	$.pop();
}
var root = $.from_html(`<!> <h1 class="mb-2 text-3xl font-bold text-foreground"> </h1> <p class="mb-8 text-muted-foreground"> </p>`, 1);
function SettingsHeader($$anchor, $$props) {
	$.push($$props, false);
	$.init();
	var fragment = root();
	var node = $.first_child(fragment);
	MockBanner(node, {});
	var h1 = $.sibling(node, 2);
	var text = $.child(h1, true);
	$.reset(h1);
	var p = $.sibling(h1, 2);
	var text_1 = $.child(p, true);
	$.reset(p);
	$.template_effect(($0, $1) => {
		$.set_text(text, $0);
		$.set_text(text_1, $1);
	}, [() => (void 0)(), () => (void 0)()]);
	$.append($$anchor, fragment);
	$.pop();
}
export { SettingsHeader as default };
