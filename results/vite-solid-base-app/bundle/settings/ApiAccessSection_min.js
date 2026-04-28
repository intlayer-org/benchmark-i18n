import { setAttribute as e, template as t } from "solid-js/web";
import { createUniqueId as n } from "solid-js";
var r = t("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\">API Access</h2><div><label class=\"mb-1 block text-sm font-medium text-foreground\">API Key</label><div class=\"flex gap-2\"><input readonly defaultvalue=sk_bench_xxxxxxxxxxxxxxxxxxxx class=\"flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground\"><button type=button class=\"rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent\">Copy</button></div><p class=\"mt-1 text-xs text-muted-foreground\">Use this key to access the benchmarking API programmatically.");
function i() {
	let t = n();
	return (() => {
		var n = r(), i = n.firstChild.nextSibling.firstChild, a = i.nextSibling.firstChild;
		return e(i, "for", t), e(a, "id", t), n;
	})();
}
export { i as default };
