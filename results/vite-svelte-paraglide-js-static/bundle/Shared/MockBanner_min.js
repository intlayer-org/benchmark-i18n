import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\"> </div>");
function n(n, r) {
	e.push(r, !1), e.init();
	var i = t(), a = e.child(i, !0);
	e.reset(i), e.template_effect((t) => e.set_text(a, t), [() => (void 0)()]), e.append(n, i), e.pop();
}
export { n as default };
