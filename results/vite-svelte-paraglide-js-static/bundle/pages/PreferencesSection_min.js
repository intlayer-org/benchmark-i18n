import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"> </h2> <div class=\"space-y-4\"><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"> </p> <p class=\"text-xs text-muted-foreground\"> </p></div> <button type=\"button\" class=\"h-6 w-11 rounded-full bg-primary transition-colors\"><span class=\"block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform\"></span></button></div> <div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"> </p> <p class=\"text-xs text-muted-foreground\"> </p></div> <button type=\"button\" class=\"h-6 w-11 rounded-full bg-muted transition-colors\"><span class=\"block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform\"></span></button></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none\"><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option></select></div></div></section>");
function n(n, r) {
	e.push(r, !1);
	let i = "settings-default-language";
	e.init();
	var a = t(), o = e.child(a), s = e.child(o, !0);
	e.reset(o);
	var c = e.sibling(o, 2), l = e.child(c), u = e.child(l), d = e.child(u), f = e.child(d, !0);
	e.reset(d);
	var p = e.sibling(d, 2), m = e.child(p, !0);
	e.reset(p), e.reset(u);
	var h = e.sibling(u, 2);
	e.reset(l);
	var g = e.sibling(l, 2), _ = e.child(g), v = e.child(_), y = e.child(v, !0);
	e.reset(v);
	var b = e.sibling(v, 2), x = e.child(b, !0);
	e.reset(b), e.reset(_);
	var S = e.sibling(_, 2);
	e.reset(g);
	var C = e.sibling(g, 2), w = e.child(C);
	e.set_attribute(w, "for", i);
	var T = e.child(w, !0);
	e.reset(w);
	var E = e.sibling(w, 2);
	e.set_attribute(E, "id", i);
	var D = e.child(E), O = e.child(D, !0);
	e.reset(D);
	var k = {}, A = e.sibling(D), j = e.child(A, !0);
	e.reset(A);
	var M = {}, N = e.sibling(A), P = e.child(N, !0);
	e.reset(N);
	var F = {}, I = e.sibling(N), L = e.child(I, !0);
	e.reset(I);
	var R = {}, z = e.sibling(I), B = e.child(z, !0);
	e.reset(z);
	var V = {}, H = e.sibling(z), U = e.child(H, !0);
	e.reset(H);
	var W = {}, G = e.sibling(H), K = e.child(G, !0);
	e.reset(G);
	var q = {};
	e.reset(E), e.reset(C), e.reset(c), e.reset(a), e.template_effect((t, n, r, i, a, o, c, l, u, d, p, g, _, v, b, C, w, E, J, Y, X, Z) => {
		e.set_text(s, t), e.set_text(f, n), e.set_text(m, r), e.set_attribute(h, "aria-label", i), e.set_text(y, a), e.set_text(x, o), e.set_attribute(S, "aria-label", c), e.set_text(T, l), e.set_text(O, u), k !== (k = d) && (D.__value = d), e.set_text(j, p), M !== (M = g) && (A.__value = g), e.set_text(P, _), F !== (F = v) && (N.__value = v), e.set_text(L, b), R !== (R = C) && (I.__value = C), e.set_text(B, w), V !== (V = E) && (z.__value = E), e.set_text(U, J), W !== (W = Y) && (H.__value = Y), e.set_text(K, X), q !== (q = Z) && (G.__value = Z);
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
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)()
	]), e.append(n, a), e.pop();
}
export { n as default };
