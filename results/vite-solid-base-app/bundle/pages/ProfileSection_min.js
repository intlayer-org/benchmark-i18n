import { setAttribute as e, template as t } from "solid-js/web";
import { createUniqueId as n } from "solid-js";
var r = t("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\">Profile</h2><div class=space-y-4><div><label class=\"mb-1 block text-sm font-medium text-foreground\">Display Name</label><input defaultvalue=\"John Developer\"class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\">Email</label><input defaultvalue=john@example.com class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\">");
function i() {
	let t = n(), i = n();
	return (() => {
		var n = r(), a = n.firstChild.nextSibling.firstChild, o = a.firstChild, s = o.nextSibling, c = a.nextSibling.firstChild, l = c.nextSibling;
		return e(o, "for", t), e(s, "id", t), e(c, "for", i), e(l, "id", i), n;
	})();
}
export { i as default };
