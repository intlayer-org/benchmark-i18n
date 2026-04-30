import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\"> </div>");
function n(n, r) {
	e.push(r, !1), e.init();
	var i = t(), a = e.child(i, !0);
	e.reset(i), e.template_effect((t) => e.set_text(a, t), [() => (void 0)()]), e.append(n, i), e.pop();
}
var r = e.from_html("<!> <div class=\"mb-12 text-center\"><h1 class=\"mb-3 text-3xl font-bold text-foreground\"> </h1> <p class=\"text-muted-foreground\"> </p></div>", 1);
function i(t, i) {
	e.push(i, !1), e.init();
	var a = r(), o = e.first_child(a);
	n(o, {});
	var s = e.sibling(o, 2), c = e.child(s), l = e.child(c, !0);
	e.reset(c);
	var u = e.sibling(c, 2), d = e.child(u, !0);
	e.reset(u), e.reset(s), e.template_effect((t, n) => {
		e.set_text(l, t), e.set_text(d, n);
	}, [() => (void 0)(), () => (void 0)()]), e.append(t, a), e.pop();
}
export { i as default };
