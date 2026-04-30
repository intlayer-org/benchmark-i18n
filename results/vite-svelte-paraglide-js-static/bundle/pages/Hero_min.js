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
var r = e.from_html("<section class=\"mb-16 text-center\"><h1 class=\"mb-4 text-4xl font-bold tracking-tight text-foreground\"> </h1> <p class=\"mx-auto max-w-2xl text-lg text-muted-foreground\"> </p> <div class=\"mt-8 flex justify-center gap-4\"><button type=\"button\" class=\"rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button> <button type=\"button\" class=\"rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent\"> </button></div></section>");
function i(t, i) {
	e.push(i, !1), n("Hero"), e.init();
	var a = r(), o = e.child(a), s = e.child(o, !0);
	e.reset(o);
	var c = e.sibling(o, 2), l = e.child(c, !0);
	e.reset(c);
	var u = e.sibling(c, 2), d = e.child(u), f = e.child(d, !0);
	e.reset(d);
	var p = e.sibling(d, 2), m = e.child(p, !0);
	e.reset(p), e.reset(u), e.reset(a), e.template_effect((t, n, r, i) => {
		e.set_text(s, t), e.set_text(l, n), e.set_text(f, r), e.set_text(m, i);
	}, [
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)()
	]), e.append(t, a), e.pop();
}
export { i as default };
