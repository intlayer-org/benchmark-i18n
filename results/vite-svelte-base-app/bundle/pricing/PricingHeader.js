import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
var root$1 = $.from_html(`<div class="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">⚠️ This page contains mock data for benchmarking purposes only. It is not
  related to any real business or service.</div>`);
function MockBanner($$anchor) {
	var div = root$1();
	$.append($$anchor, div);
}
var root = $.from_html(`<!> <div class="mb-12 text-center"><h1 class="mb-3 text-3xl font-bold text-foreground">Simple, Transparent Pricing</h1> <p class="text-muted-foreground">Choose the plan that fits your team. No hidden fees.</p></div>`, 1);
function PricingHeader($$anchor) {
	var fragment = root();
	MockBanner($.first_child(fragment), {});
	$.next(2);
	$.append($$anchor, fragment);
}
export { PricingHeader as default };
