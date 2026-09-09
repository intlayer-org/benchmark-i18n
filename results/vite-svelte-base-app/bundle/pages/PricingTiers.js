import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
var root = $.from_html(`<li class="flex items-center gap-2 text-sm text-muted-foreground"><span class="text-primary">✓</span> </li>`);
var root_1 = $.from_html(`<div><h3 class="text-lg font-semibold text-foreground"> </h3> <div class="my-4"><span class="text-3xl font-bold text-foreground"> </span> <span class="text-sm text-muted-foreground"> </span></div> <ul class="mb-6 flex-1 space-y-2"></ul> <button type="button"> </button></div>`);
var root_2 = $.from_html(`<div class="grid gap-6 md:grid-cols-3"></div>`);
function PricingTiers($$anchor) {
	const tiers = [
		{
			name: "Starter",
			price: "$0",
			period: "forever",
			features: [
				"5 benchmark runs/day",
				"3 libraries",
				"Community support",
				"Public results"
			]
		},
		{
			name: "Pro",
			price: "$29",
			period: "/month",
			features: [
				"Unlimited runs",
				"All libraries",
				"Priority support",
				"Private results",
				"CI integration",
				"Historical data"
			],
			highlighted: true
		},
		{
			name: "Enterprise",
			price: "Custom",
			period: "",
			features: [
				"Everything in Pro",
				"On-premise option",
				"SSO & SAML",
				"Dedicated account manager",
				"Custom SLAs",
				"Audit logs",
				"Training sessions"
			]
		}
	];
	var div = root_2();
	$.each(div, 5, () => tiers, (t) => t.name, ($$anchor, t) => {
		var div_1 = root_1();
		var h3 = $.child(div_1);
		var text = $.only_child(h3, true);
		var div_2 = $.sibling(h3, 2);
		var span = $.child(div_2);
		var text_1 = $.only_child(span, true);
		var span_1 = $.sibling(span, 2);
		var text_2 = $.only_child(span_1, true);
		$.reset(div_2);
		var ul = $.sibling(div_2, 2);
		$.each(ul, 5, () => $.get(t).features, (f) => f, ($$anchor, f) => {
			var li = root();
			var text_3 = $.sibling($.child(li));
			$.reset(li);
			$.template_effect(() => $.set_text(text_3, ` ${$.get(f) ?? ""}`));
			$.append($$anchor, li);
		});
		$.reset(ul);
		var button = $.sibling(ul, 2);
		var text_4 = $.only_child(button, true);
		$.reset(div_1);
		$.template_effect(() => {
			$.set_class(div_1, 1, `flex flex-col rounded-lg border p-6 ${$.get(t).highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`);
			$.set_text(text, $.get(t).name);
			$.set_text(text_1, $.get(t).price);
			$.set_text(text_2, $.get(t).period);
			$.set_class(button, 1, `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${$.get(t).highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`);
			$.set_text(text_4, $.get(t).name === "Enterprise" ? "Contact Sales" : "Get Started");
		});
		$.append($$anchor, div_1);
	});
	$.reset(div);
	$.append($$anchor, div);
}
export { PricingTiers as default };
