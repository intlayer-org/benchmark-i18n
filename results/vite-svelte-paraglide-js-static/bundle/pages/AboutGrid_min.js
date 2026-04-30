import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<div class=\"grid gap-8 md:grid-cols-2\"><div class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-3 text-xl font-semibold text-foreground\"> </h2> <p class=\"text-sm text-muted-foreground\"> </p></div> <div class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-3 text-xl font-semibold text-foreground\"> </h2> <p class=\"text-sm text-muted-foreground\"> </p></div></div>");
function n(n, r) {
	e.push(r, !1), e.init();
	var i = t(), a = e.child(i), o = e.child(a), s = e.child(o, !0);
	e.reset(o);
	var c = e.sibling(o, 2), l = e.child(c, !0);
	e.reset(c), e.reset(a);
	var u = e.sibling(a, 2), d = e.child(u), f = e.child(d, !0);
	e.reset(d);
	var p = e.sibling(d, 2), m = e.child(p, !0);
	e.reset(p), e.reset(u), e.reset(i), e.template_effect((t, n, r, i) => {
		e.set_text(s, t), e.set_text(l, n), e.set_text(f, r), e.set_text(m, i);
	}, [
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)()
	]), e.append(n, i), e.pop();
}
export { n as default };
