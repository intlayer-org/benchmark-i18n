import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<div class=\"flex justify-end gap-3\"><button type=\"button\" class=\"rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent\"> </button> <button type=\"submit\" class=\"rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button></div>");
function n(n, r) {
	e.push(r, !1), e.init();
	var i = t(), a = e.child(i), o = e.child(a, !0);
	e.reset(a);
	var s = e.sibling(a, 2), c = e.child(s, !0);
	e.reset(s), e.reset(i), e.template_effect((t, n) => {
		e.set_text(o, t), e.set_text(c, n);
	}, [() => (void 0)(), () => (void 0)()]), e.append(n, i), e.pop();
}
export { n as default };
