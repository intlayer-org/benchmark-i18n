import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { A as r, useParams as i } from "@solidjs/router";
var a = n("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><ul class=space-y-1><li><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"></a></li><li></li><li></li></ul></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p></div></div><div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\">");
function o() {
	let n = i(), o = () => n.locale ?? "en";
	return (() => {
		var n = a(), i = n.firstChild.firstChild, s = i.firstChild, c = s.firstChild, l = c.nextSibling, u = s.nextSibling, d = u.firstChild, f = d.nextSibling.firstChild, p = f.firstChild, m = f.nextSibling, h = m.nextSibling, g = u.nextSibling.firstChild, _ = g.nextSibling, v = i.nextSibling;
		return t(c, () => (void 0)()), t(l, () => (void 0)()), t(d, () => (void 0)()), t(p, () => (void 0)()), t(m, e(r, {
			get href() {
				return `/${o()}/about`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return (void 0)();
			}
		})), t(h, e(r, {
			get href() {
				return `/${o()}/contact`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return (void 0)();
			}
		})), t(g, () => (void 0)()), t(_, () => (void 0)()), t(v, () => (void 0)()), n;
	})();
}
export { o as default };
