import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\">⚠️ This page contains mock data for benchmarking purposes only. It is not\n  related to any real business or service.</div>");
function n(n) {
	var r = t();
	e.append(n, r);
}
var r = e.from_html("<!> <h1 class=\"mb-2 text-3xl font-bold text-foreground\">Careers</h1> <p class=\"mb-4 text-muted-foreground\">Join our mission to improve the internationalization ecosystem. We're a\n  remote-first team that values impact, transparency, and continuous learning.</p>", 1);
function i(t) {
	var i = r();
	n(e.first_child(i), {}), e.next(4), e.append(t, i);
}
export { i as default };
