import { insert as e, setAttribute as t, template as n } from "solid-js/web";
import { createUniqueId as r } from "solid-js";
var i = n("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"></h2><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><div class=\"flex gap-2\"><input readonly defaultvalue=sk_bench_xxxxxxxxxxxxxxxxxxxx class=\"flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground\"><button type=button class=\"rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent\"></button></div><p class=\"mt-1 text-xs text-muted-foreground\">");
function a() {
	let n = r();
	return (() => {
		var r = i(), a = r.firstChild, o = a.nextSibling.firstChild, s = o.nextSibling, c = s.firstChild, l = c.nextSibling, u = s.nextSibling;
		return e(a, () => (void 0)()), t(o, "for", n), e(o, () => (void 0)()), t(c, "id", n), e(l, () => (void 0)()), e(u, () => (void 0)()), r;
	})();
}
export { a as default };
