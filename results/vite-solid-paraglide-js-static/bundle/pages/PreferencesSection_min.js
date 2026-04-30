import { effect as e, insert as t, setAttribute as n, template as r } from "solid-js/web";
import { createUniqueId as i } from "solid-js";
var a = r("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"></h2><div class=space-y-4><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"></p><p class=\"text-xs text-muted-foreground\"></p></div><button type=button class=\"h-6 w-11 rounded-full bg-primary transition-colors\"><span class=\"block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform\"></span></button></div><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"></p><p class=\"text-xs text-muted-foreground\"></p></div><button type=button class=\"h-6 w-11 rounded-full bg-muted transition-colors\"><span class=\"block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform\"></span></button></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"><option></option><option></option><option></option><option></option><option></option><option></option><option>");
function o() {
	let r = i();
	return (() => {
		var i = a(), o = i.firstChild, s = o.nextSibling.firstChild, c = s.firstChild, l = c.firstChild, u = l.nextSibling, d = c.nextSibling, f = s.nextSibling, p = f.firstChild, m = p.firstChild, h = m.nextSibling, g = p.nextSibling, _ = f.nextSibling.firstChild, v = _.nextSibling, y = v.firstChild, b = y.nextSibling, x = b.nextSibling, S = x.nextSibling, C = S.nextSibling, w = C.nextSibling, T = w.nextSibling;
		return t(o, () => (void 0)()), t(l, () => (void 0)()), t(u, () => (void 0)()), t(m, () => (void 0)()), t(h, () => (void 0)()), n(_, "for", r), t(_, () => (void 0)()), n(v, "id", r), t(y, () => (void 0)()), t(b, () => (void 0)()), t(x, () => (void 0)()), t(S, () => (void 0)()), t(C, () => (void 0)()), t(w, () => (void 0)()), t(T, () => (void 0)()), e((e) => {
			var t = (void 0)(), r = (void 0)();
			return t !== e.e && n(d, "aria-label", e.e = t), r !== e.t && n(g, "aria-label", e.t = r), e;
		}, {
			e: void 0,
			t: void 0
		}), i;
	})();
}
export { o as default };
