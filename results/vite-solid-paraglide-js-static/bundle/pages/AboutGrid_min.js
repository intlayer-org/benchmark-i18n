import { insert as e, template as t } from "solid-js/web";
var n = t("<div class=\"grid gap-8 md:grid-cols-2\"><div class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-3 text-xl font-semibold text-foreground\"></h2><p class=\"text-sm text-muted-foreground\"></p></div><div class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-3 text-xl font-semibold text-foreground\"></h2><p class=\"text-sm text-muted-foreground\">");
function r() {
	return (() => {
		var t = n(), r = t.firstChild, i = r.firstChild, a = i.nextSibling, o = r.nextSibling.firstChild, s = o.nextSibling;
		return e(i, () => (void 0)()), e(a, () => (void 0)()), e(o, () => (void 0)()), e(s, () => (void 0)()), t;
	})();
}
export { r as default };
