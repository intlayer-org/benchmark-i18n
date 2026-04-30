import { insert as e, setAttribute as t, template as n } from "solid-js/web";
import { createUniqueId as r } from "solid-js";
var i = n("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"></h2><div class=space-y-4><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><input defaultvalue=\"John Developer\"class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><input defaultvalue=john@example.com class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\">");
function a() {
	let n = r(), a = r();
	return (() => {
		var r = i(), o = r.firstChild, s = o.nextSibling.firstChild, c = s.firstChild, l = c.nextSibling, u = s.nextSibling.firstChild, d = u.nextSibling;
		return e(o, () => (void 0)()), t(c, "for", n), e(c, () => (void 0)()), t(l, "id", n), t(u, "for", a), e(u, () => (void 0)()), t(d, "id", a), r;
	})();
}
export { a as default };
