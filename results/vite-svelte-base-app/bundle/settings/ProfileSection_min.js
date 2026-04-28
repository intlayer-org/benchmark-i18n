import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\">Profile</h2> <div class=\"space-y-4\"><div><label for=\"settings-display-name\" class=\"mb-1 block text-sm font-medium text-foreground\">Display Name</label> <input id=\"settings-display-name\" value=\"John Developer\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none\"/></div> <div><label for=\"settings-email\" class=\"mb-1 block text-sm font-medium text-foreground\">Email</label> <input id=\"settings-email\" value=\"john@example.com\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none\"/></div></div></section>");
function n(n) {
	var r = t();
	e.append(n, r);
}
export { n as default };
