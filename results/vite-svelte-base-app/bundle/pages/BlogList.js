import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
var root = $.from_html(`<article class="rounded-lg border border-border bg-card p-6"><div class="mb-3 flex items-center gap-3"><span class="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground"> </span> <span class="text-xs text-muted-foreground"> </span></div> <h2 class="mb-2 text-lg font-semibold text-foreground"> </h2> <p class="mb-4 text-sm text-muted-foreground"> </p> <button type="button" class="text-sm font-medium text-primary hover:underline">Read More →</button></article>`);
var root_1 = $.from_html(`<div class="grid gap-6 md:grid-cols-2"></div>`);
function BlogList($$anchor) {
	const posts = [
		{
			title: "Comparing i18n Libraries in 2026: A Deep Dive",
			date: "March 15, 2026",
			excerpt: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
			category: "Benchmark"
		},
		{
			title: "How to Reduce Your i18n Bundle by 60%",
			date: "March 8, 2026",
			excerpt: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
			category: "Tutorial"
		},
		{
			title: "The State of Internationalization in React",
			date: "February 28, 2026",
			excerpt: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
			category: "Analysis"
		},
		{
			title: "Migrating from react-i18next to Lingui",
			date: "February 15, 2026",
			excerpt: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
			category: "Tutorial"
		},
		{
			title: "Server Components and i18n: What Changes?",
			date: "February 1, 2026",
			excerpt: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
			category: "Analysis"
		},
		{
			title: "Benchmark Methodology: How We Test",
			date: "January 20, 2026",
			excerpt: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
			category: "Meta"
		}
	];
	var div = root_1();
	$.each(div, 5, () => posts, (p) => p.title, ($$anchor, p) => {
		var article = root();
		var div_1 = $.child(article);
		var span = $.child(div_1);
		var text = $.only_child(span, true);
		var span_1 = $.sibling(span, 2);
		var text_1 = $.only_child(span_1, true);
		$.reset(div_1);
		var h2 = $.sibling(div_1, 2);
		var text_2 = $.only_child(h2, true);
		var p_1 = $.sibling(h2, 2);
		var text_3 = $.only_child(p_1, true);
		$.next(2);
		$.reset(article);
		$.template_effect(() => {
			$.set_text(text, $.get(p).category);
			$.set_text(text_1, $.get(p).date);
			$.set_text(text_2, $.get(p).title);
			$.set_text(text_3, $.get(p).excerpt);
		});
		$.append($$anchor, article);
	});
	$.reset(div);
	$.append($$anchor, div);
}
export { BlogList as default };
