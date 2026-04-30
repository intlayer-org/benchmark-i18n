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
var r = e.from_html("<section class=\"mb-16\"><h2 class=\"mb-6 text-2xl font-bold text-foreground\"> </h2> <div class=\"grid gap-6 md:grid-cols-3\"><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div> <div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div> <div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div></div></section>");
function i(t, i) {
	e.push(i, !1), n("WhyItMatters"), e.init();
	var a = r(), o = e.child(a), s = e.child(o, !0);
	e.reset(o);
	var c = e.sibling(o, 2), l = e.child(c), u = e.child(l), d = e.child(u, !0);
	e.reset(u);
	var f = e.sibling(u, 2), p = e.child(f, !0);
	e.reset(f), e.reset(l);
	var m = e.sibling(l, 2), h = e.child(m), g = e.child(h, !0);
	e.reset(h);
	var _ = e.sibling(h, 2), v = e.child(_, !0);
	e.reset(_), e.reset(m);
	var y = e.sibling(m, 2), b = e.child(y), x = e.child(b, !0);
	e.reset(b);
	var S = e.sibling(b, 2), C = e.child(S, !0);
	e.reset(S), e.reset(y), e.reset(c), e.reset(a), e.template_effect((t, n, r, i, a, o, c) => {
		e.set_text(s, t), e.set_text(d, n), e.set_text(p, r), e.set_text(g, i), e.set_text(v, a), e.set_text(x, o), e.set_text(C, c);
	}, [
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)()
	]), e.append(t, a), e.pop();
}
export { i as default };
