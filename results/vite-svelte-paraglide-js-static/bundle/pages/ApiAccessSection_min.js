import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"> </h2> <div><label for=\"settings-api-key\" class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <div class=\"flex gap-2\"><input id=\"settings-api-key\" readonly=\"\" value=\"sk_bench_xxxxxxxxxxxxxxxxxxxx\" class=\"flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground\"/> <button type=\"button\" class=\"rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent\"> </button></div> <p class=\"mt-1 text-xs text-muted-foreground\"> </p></div></section>");
function n(n, r) {
	e.push(r, !1), e.init();
	var i = t(), a = e.child(i), o = e.child(a, !0);
	e.reset(a);
	var s = e.sibling(a, 2), c = e.child(s), l = e.child(c, !0);
	e.reset(c);
	var u = e.sibling(c, 2), d = e.child(u), f = e.sibling(d, 2), p = e.child(f, !0);
	e.reset(f), e.reset(u);
	var m = e.sibling(u, 2), h = e.child(m, !0);
	e.reset(m), e.reset(s), e.reset(i), e.template_effect((t, n, r, i) => {
		e.set_text(o, t), e.set_text(l, n), e.set_text(p, r), e.set_text(h, i);
	}, [
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)()
	]), e.append(n, i), e.pop();
}
export { n as default };
