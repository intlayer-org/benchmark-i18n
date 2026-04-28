import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<div class=\"flex justify-end gap-3\"><button type=\"button\" class=\"rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent\">Cancel</button> <button type=\"submit\" class=\"rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">Save Changes</button></div>");
function n(n) {
	var r = t();
	e.append(n, r);
}
export { n as default };
