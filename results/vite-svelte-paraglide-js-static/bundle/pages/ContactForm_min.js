import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<form class=\"space-y-6\"><div class=\"grid gap-4 md:grid-cols-2\"><div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <input class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\"/></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <input type=\"email\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\"/></div></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none\"><option> </option><option> </option><option> </option><option> </option><option> </option></select></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <textarea class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\"></textarea></div> <button type=\"submit\" class=\"rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button></form>");
function n(n, r) {
	e.push(r, !1);
	let i = "contact-name", a = "contact-email", o = "contact-topic", s = "contact-message";
	e.init();
	var c = t(), l = e.child(c), u = e.child(l), d = e.child(u);
	e.set_attribute(d, "for", i);
	var f = e.child(d, !0);
	e.reset(d);
	var p = e.sibling(d, 2);
	e.set_attribute(p, "id", i), e.reset(u);
	var m = e.sibling(u, 2), h = e.child(m);
	e.set_attribute(h, "for", a);
	var g = e.child(h, !0);
	e.reset(h);
	var _ = e.sibling(h, 2);
	e.set_attribute(_, "id", a), e.reset(m), e.reset(l);
	var v = e.sibling(l, 2), y = e.child(v);
	e.set_attribute(y, "for", o);
	var b = e.child(y, !0);
	e.reset(y);
	var x = e.sibling(y, 2);
	e.set_attribute(x, "id", o);
	var S = e.child(x), C = e.child(S, !0);
	e.reset(S);
	var w = {}, T = e.sibling(S), E = e.child(T, !0);
	e.reset(T);
	var D = {}, O = e.sibling(T), k = e.child(O, !0);
	e.reset(O);
	var A = {}, j = e.sibling(O), M = e.child(j, !0);
	e.reset(j);
	var N = {}, P = e.sibling(j), F = e.child(P, !0);
	e.reset(P);
	var I = {};
	e.reset(x), e.reset(v);
	var L = e.sibling(v, 2), R = e.child(L);
	e.set_attribute(R, "for", s);
	var z = e.child(R, !0);
	e.reset(R);
	var B = e.sibling(R, 2);
	e.set_attribute(B, "id", s), e.set_attribute(B, "rows", 5), e.reset(L);
	var V = e.sibling(L, 2), H = e.child(V, !0);
	e.reset(V), e.reset(c), e.template_effect((t, n, r, i, a, o, s, c, l, u, d, m, h, v, y, x, L, R) => {
		e.set_text(f, t), e.set_attribute(p, "placeholder", n), e.set_text(g, r), e.set_attribute(_, "placeholder", i), e.set_text(b, a), e.set_text(C, o), w !== (w = s) && (S.__value = s), e.set_text(E, c), D !== (D = l) && (T.__value = l), e.set_text(k, u), A !== (A = d) && (O.__value = d), e.set_text(M, m), N !== (N = h) && (j.__value = h), e.set_text(F, v), I !== (I = y) && (P.__value = y), e.set_text(z, x), e.set_attribute(B, "placeholder", L), e.set_text(H, R);
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
		() => (void 0)()
	]), e.append(n, c), e.pop();
}
export { n as default };
