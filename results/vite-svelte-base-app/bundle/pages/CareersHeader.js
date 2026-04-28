import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
var root$1 = $.from_html(`<div class="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">⚠️ This page contains mock data for benchmarking purposes only. It is not
  related to any real business or service.</div>`);
function MockBanner($$anchor) {
	var div = root$1();
	$.append($$anchor, div);
}
var root = $.from_html(`<!> <h1 class="mb-2 text-3xl font-bold text-foreground">Careers</h1> <p class="mb-4 text-muted-foreground">Join our mission to improve the internationalization ecosystem. We're a
  remote-first team that values impact, transparency, and continuous learning.</p>`, 1);
function CareersHeader($$anchor) {
	var fragment = root();
	MockBanner($.first_child(fragment), {});
	$.next(4);
	$.append($$anchor, fragment);
}
export { CareersHeader as default };
