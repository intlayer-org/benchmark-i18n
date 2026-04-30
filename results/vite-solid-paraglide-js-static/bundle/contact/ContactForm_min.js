import { effect as e, insert as t, setAttribute as n, template as r } from "solid-js/web";
import { createUniqueId as i } from "solid-js";
var a = r("<form class=space-y-6><div class=\"grid gap-4 md:grid-cols-2\"><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><input class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><input type=email class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></div></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"><option></option><option></option><option></option><option></option><option></option></select></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><textarea rows=5 class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></textarea></div><button type=submit class=\"rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function o() {
	let r = i(), o = i(), s = i(), c = i();
	return (() => {
		var i = a(), l = i.firstChild, u = l.firstChild, d = u.firstChild, f = d.nextSibling, p = u.nextSibling.firstChild, m = p.nextSibling, h = l.nextSibling, g = h.firstChild, _ = g.nextSibling, v = _.firstChild, y = v.nextSibling, b = y.nextSibling, x = b.nextSibling, S = x.nextSibling, C = h.nextSibling, w = C.firstChild, T = w.nextSibling, E = C.nextSibling;
		return n(d, "for", r), t(d, () => (void 0)()), n(f, "id", r), n(p, "for", o), t(p, () => (void 0)()), n(m, "id", o), n(g, "for", s), t(g, () => (void 0)()), n(_, "id", s), t(v, () => (void 0)()), t(y, () => (void 0)()), t(b, () => (void 0)()), t(x, () => (void 0)()), t(S, () => (void 0)()), n(w, "for", c), t(w, () => (void 0)()), n(T, "id", c), t(E, () => (void 0)()), e((e) => {
			var t = (void 0)(), r = (void 0)(), i = (void 0)();
			return t !== e.e && n(f, "placeholder", e.e = t), r !== e.t && n(m, "placeholder", e.t = r), i !== e.a && n(T, "placeholder", e.a = i), e;
		}, {
			e: void 0,
			t: void 0,
			a: void 0
		}), i;
	})();
}
export { o as default };
