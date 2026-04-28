import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
var root_1 = $.from_html(`<div class="rounded-lg border border-border bg-card p-4 text-center"><p class="text-sm font-semibold text-foreground"> </p> <p class="text-xs text-muted-foreground"> </p></div>`);
var root = $.from_html(`<div class="mb-12 grid gap-4 md:grid-cols-3"></div>`);
function CareersBenefits($$anchor) {
	const benefits = [
		{
			label: "Remote-first",
			value: "Work from anywhere in the world"
		},
		{
			label: "Competitive pay",
			value: "Top-of-market compensation"
		},
		{
			label: "Open source time",
			value: "20% time for OSS contributions"
		}
	];
	var div = root();
	$.each(div, 5, () => benefits, (b) => b.label, ($$anchor, b) => {
		var div_1 = root_1();
		var p = $.child(div_1);
		var text = $.child(p, true);
		$.reset(p);
		var p_1 = $.sibling(p, 2);
		var text_1 = $.child(p_1, true);
		$.reset(p_1);
		$.reset(div_1);
		$.template_effect(() => {
			$.set_text(text, $.get(b).label);
			$.set_text(text_1, $.get(b).value);
		});
		$.append($$anchor, div_1);
	});
	$.reset(div);
	$.append($$anchor, div);
}
export { CareersBenefits as default };
