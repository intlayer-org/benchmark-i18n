import { insert as e, template as t } from "solid-js/web";
var n = t("<section class=mb-16><h2 class=\"mb-6 text-2xl font-bold text-foreground\"></h2><div class=\"grid gap-6 md:grid-cols-3\"><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p></div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p></div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\">");
function r() {
	return (() => {
		var t = n(), r = t.firstChild, i = r.nextSibling.firstChild, a = i.firstChild, o = a.nextSibling, s = i.nextSibling, c = s.firstChild, l = c.nextSibling, u = s.nextSibling.firstChild, d = u.nextSibling;
		return e(r, () => (void 0)()), e(a, () => (void 0)()), e(o, () => (void 0)()), e(c, () => (void 0)()), e(l, () => (void 0)()), e(u, () => (void 0)()), e(d, () => (void 0)()), t;
	})();
}
export { r as default };
