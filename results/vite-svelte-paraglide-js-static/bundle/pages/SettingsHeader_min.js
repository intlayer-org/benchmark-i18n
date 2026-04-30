import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\"> </div>");
function n(n, r) {
	e.push(r, !1), e.init();
	var i = t(), a = e.child(i, !0);
	e.reset(i), e.template_effect((t) => e.set_text(a, t), [() => (void 0)()]), e.append(n, i), e.pop();
}
var r = e.from_html("<!> <h1 class=\"mb-2 text-3xl font-bold text-foreground\"> </h1> <p class=\"mb-8 text-muted-foreground\"> </p>", 1);
function i(t, i) {
	e.push(i, !1), e.init();
	var a = r(), o = e.first_child(a);
	n(o, {});
	var s = e.sibling(o, 2), c = e.child(s, !0);
	e.reset(s);
	var l = e.sibling(s, 2), u = e.child(l, !0);
	e.reset(l), e.template_effect((t, n) => {
		e.set_text(c, t), e.set_text(u, n);
	}, [() => (void 0)(), () => (void 0)()]), e.append(t, a), e.pop();
}
export { i as default };
