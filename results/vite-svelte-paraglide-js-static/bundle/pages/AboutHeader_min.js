import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { onMount as t } from "svelte";
function n(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), t(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var r = e.from_html("<h1 class=\"mb-4 text-3xl font-bold text-foreground\"> </h1> <p class=\"mb-8 max-w-3xl text-muted-foreground\"> </p>", 1);
function i(t, i) {
	e.push(i, !1), n("AboutHeader"), e.init();
	var a = r(), o = e.first_child(a), s = e.child(o, !0);
	e.reset(o);
	var c = e.sibling(o, 2), l = e.child(c, !0);
	e.reset(c), e.template_effect((t, n) => {
		e.set_text(s, t), e.set_text(l, n);
	}, [() => (void 0)(), () => (void 0)()]), e.append(t, a), e.pop();
}
export { i as default };
