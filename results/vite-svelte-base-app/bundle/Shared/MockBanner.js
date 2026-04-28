import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
var root = $.from_html(`<div class="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">⚠️ This page contains mock data for benchmarking purposes only. It is not
  related to any real business or service.</div>`);
function MockBanner($$anchor) {
	var div = root();
	$.append($$anchor, div);
}
export { MockBanner as default };
