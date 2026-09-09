import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
var root = $.from_html(`<div class="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"><div><h3 class="text-base font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p> <div class="mt-2 flex gap-2"><span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"> </span> <span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"> </span> <span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"> </span></div></div> <button type="button" class="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">Apply Now</button></div>`);
var root_1 = $.from_html(`<h2 class="mb-6 text-2xl font-bold text-foreground">Open Positions</h2> <div class="space-y-4"></div>`, 1);
function OpenPositions($$anchor) {
	const openings = [
		{
			title: "Senior Frontend Engineer",
			location: "Remote",
			type: "Full-time",
			dept: "Engineering",
			desc: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite."
		},
		{
			title: "Backend Engineer",
			location: "Remote",
			type: "Full-time",
			dept: "Engineering",
			desc: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily."
		},
		{
			title: "Technical Writer",
			location: "Remote",
			type: "Part-time",
			dept: "Documentation",
			desc: "Create comprehensive guides, API references, and tutorials for our benchmarking platform."
		},
		{
			title: "DevRel Engineer",
			location: "San Francisco / Remote",
			type: "Full-time",
			dept: "Community",
			desc: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions."
		},
		{
			title: "QA Engineer",
			location: "Remote",
			type: "Full-time",
			dept: "Engineering",
			desc: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation."
		}
	];
	var fragment = root_1();
	var div = $.sibling($.first_child(fragment), 2);
	$.each(div, 5, () => openings, (o) => o.title, ($$anchor, o) => {
		var div_1 = root();
		var div_2 = $.child(div_1);
		var h3 = $.child(div_2);
		var text = $.only_child(h3, true);
		var p = $.sibling(h3, 2);
		var text_1 = $.only_child(p, true);
		var div_3 = $.sibling(p, 2);
		var span = $.child(div_3);
		var text_2 = $.only_child(span, true);
		var span_1 = $.sibling(span, 2);
		var text_3 = $.only_child(span_1, true);
		var span_2 = $.sibling(span_1, 2);
		var text_4 = $.only_child(span_2, true);
		$.reset(div_3);
		$.reset(div_2);
		$.next(2);
		$.reset(div_1);
		$.template_effect(() => {
			$.set_text(text, $.get(o).title);
			$.set_text(text_1, $.get(o).desc);
			$.set_text(text_2, $.get(o).dept);
			$.set_text(text_3, $.get(o).location);
			$.set_text(text_4, $.get(o).type);
		});
		$.append($$anchor, div_1);
	});
	$.reset(div);
	$.append($$anchor, fragment);
}
export { OpenPositions as default };
