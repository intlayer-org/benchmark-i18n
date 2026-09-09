import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
var root = $.from_html(`<div class="flex flex-col justify-between rounded-lg border border-border bg-card p-6"><div><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="mb-4 text-sm text-muted-foreground"> </p></div> <div class="flex items-center justify-between"><span class="text-sm font-bold text-primary"> </span> <button type="button" class="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90">Learn More</button></div></div>`);
var root_1 = $.from_html(`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"></div>`);
function ProductsGrid($$anchor) {
	const products = [
		{
			name: "Benchmark CLI",
			desc: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
			price: "Free"
		},
		{
			name: "Benchmark Cloud",
			desc: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
			price: "$29/mo"
		},
		{
			name: "Benchmark Enterprise",
			desc: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
			price: "Contact Us"
		},
		{
			name: "Migration Assistant",
			desc: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
			price: "$99 one-time"
		},
		{
			name: "Translation QA",
			desc: "Automated quality checks for missing translations, pluralization issues, and context errors.",
			price: "$19/mo"
		},
		{
			name: "Bundle Optimizer",
			desc: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
			price: "$49/mo"
		}
	];
	var div = root_1();
	$.each(div, 5, () => products, (p) => p.name, ($$anchor, p) => {
		var div_1 = root();
		var div_2 = $.child(div_1);
		var h3 = $.child(div_2);
		var text = $.only_child(h3, true);
		var p_1 = $.sibling(h3, 2);
		var text_1 = $.only_child(p_1, true);
		$.reset(div_2);
		var div_3 = $.sibling(div_2, 2);
		var span = $.child(div_3);
		var text_2 = $.only_child(span, true);
		$.next(2);
		$.reset(div_3);
		$.reset(div_1);
		$.template_effect(() => {
			$.set_text(text, $.get(p).name);
			$.set_text(text_1, $.get(p).desc);
			$.set_text(text_2, $.get(p).price);
		});
		$.append($$anchor, div_1);
	});
	$.reset(div);
	$.append($$anchor, div);
}
export { ProductsGrid as default };
