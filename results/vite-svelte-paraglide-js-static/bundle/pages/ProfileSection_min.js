import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"> </h2> <div class=\"space-y-4\"><div><label for=\"settings-display-name\" class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <input id=\"settings-display-name\" value=\"John Developer\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none\"/></div> <div><label for=\"settings-email\" class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <input id=\"settings-email\" value=\"john@example.com\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none\"/></div></div></section>");
function n(n, r) {
	e.push(r, !1), e.init();
	var i = t(), a = e.child(i), o = e.child(a, !0);
	e.reset(a);
	var s = e.sibling(a, 2), c = e.child(s), l = e.child(c), u = e.child(l, !0);
	e.reset(l), e.sibling(l, 2), e.reset(c);
	var d = e.sibling(c, 2), f = e.child(d), p = e.child(f, !0);
	e.reset(f), e.sibling(f, 2), e.reset(d), e.reset(s), e.reset(i), e.template_effect((t, n, r) => {
		e.set_text(o, t), e.set_text(u, n), e.set_text(p, r);
	}, [
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)()
	]), e.append(n, i), e.pop();
}
export { n as default };
