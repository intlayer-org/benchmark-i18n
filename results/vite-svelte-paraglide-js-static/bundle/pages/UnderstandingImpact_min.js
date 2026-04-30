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
var r = e.from_html("<section class=\"mb-16 mx-auto max-w-3xl space-y-6\"><h2 class=\"text-2xl font-bold text-foreground\"> </h2> <div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p> <ul class=\"mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5\"><li> </li> <li> </li> <li> </li></ul></div> <div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p> <ul class=\"mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5\"><li><strong class=\"text-foreground\"> </strong> </li> <li><strong class=\"text-foreground\"> </strong> </li> <li><strong class=\"text-foreground\"> </strong> </li></ul></div> <div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div></section>");
function i(t, i) {
	e.push(i, !1), n("UnderstandingImpact"), e.init();
	var a = r(), o = e.child(a), s = e.child(o, !0);
	e.reset(o);
	var c = e.sibling(o, 2), l = e.child(c), u = e.child(l, !0);
	e.reset(l);
	var d = e.sibling(l, 2), f = e.child(d, !0);
	e.reset(d);
	var p = e.sibling(d, 2), m = e.child(p), h = e.child(m, !0);
	e.reset(m);
	var g = e.sibling(m, 2), _ = e.child(g, !0);
	e.reset(g);
	var v = e.sibling(g, 2), y = e.child(v, !0);
	e.reset(v), e.reset(p), e.reset(c);
	var b = e.sibling(c, 2), x = e.child(b), S = e.child(x, !0);
	e.reset(x);
	var C = e.sibling(x, 2), w = e.child(C, !0);
	e.reset(C);
	var T = e.sibling(C, 2), E = e.child(T), D = e.child(E), O = e.child(D, !0);
	e.reset(D);
	var k = e.sibling(D);
	e.reset(E);
	var A = e.sibling(E, 2), j = e.child(A), M = e.child(j, !0);
	e.reset(j);
	var N = e.sibling(j);
	e.reset(A);
	var P = e.sibling(A, 2), F = e.child(P), I = e.child(F, !0);
	e.reset(F);
	var L = e.sibling(F);
	e.reset(P), e.reset(T), e.reset(b);
	var R = e.sibling(b, 2), z = e.child(R), B = e.child(z, !0);
	e.reset(z);
	var V = e.sibling(z, 2), H = e.child(V, !0);
	e.reset(V), e.reset(R), e.reset(a), e.template_effect((t, n, r, i, a, o, c, l, d, p, m, g, v, b, x, C) => {
		e.set_text(s, t), e.set_text(u, n), e.set_text(f, r), e.set_text(h, i), e.set_text(_, a), e.set_text(y, o), e.set_text(S, c), e.set_text(w, l), e.set_text(O, d), e.set_text(k, ` ${p ?? ""}`), e.set_text(M, m), e.set_text(N, ` ${g ?? ""}`), e.set_text(I, v), e.set_text(L, ` ${b ?? ""}`), e.set_text(B, x), e.set_text(H, C);
	}, [
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
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
