import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\">⚠️ This page contains mock data for benchmarking purposes only. It is not\n  related to any real business or service.</div>");
function n(n) {
	var r = t();
	e.append(n, r);
}
var r = e.from_html("<!> <div class=\"mb-12 text-center\"><h1 class=\"mb-3 text-3xl font-bold text-foreground\">Simple, Transparent Pricing</h1> <p class=\"text-muted-foreground\">Choose the plan that fits your team. No hidden fees.</p></div>", 1);
function i(t) {
	var i = r();
	n(e.first_child(i), {}), e.next(2), e.append(t, i);
}
export { i as default };
