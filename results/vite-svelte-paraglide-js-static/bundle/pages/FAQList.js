import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var _index_exports = __exportAll({});
var root_1 = $.from_html(`<details class="group rounded-lg border border-border bg-card"><summary class="cursor-pointer px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/50"> </summary> <p class="px-6 pb-4 text-sm text-muted-foreground"> </p></details>`);
var root = $.from_html(`<div class="mx-auto max-w-3xl space-y-4"></div>`);
function FAQList($$anchor, $$props) {
	$.push($$props, false);
	const faqs = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8
	].map((i) => ({
		q: _index_exports[`faq_list_q${i}`]?.(),
		a: _index_exports[`faq_list_a${i}`]?.()
	}));
	$.init();
	var div = root();
	$.each(div, 5, () => faqs, $.index, ($$anchor, f) => {
		var details = root_1();
		var summary = $.child(details);
		var text = $.child(summary, true);
		$.reset(summary);
		var p = $.sibling(summary, 2);
		var text_1 = $.child(p, true);
		$.reset(p);
		$.reset(details);
		$.template_effect(() => {
			$.set_text(text, $.get(f).q);
			$.set_text(text_1, $.get(f).a);
		});
		$.append($$anchor, details);
	});
	$.reset(div);
	$.append($$anchor, div);
	$.pop();
}
export { FAQList as default };
