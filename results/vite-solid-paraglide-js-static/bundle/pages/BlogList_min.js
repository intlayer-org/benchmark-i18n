import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r } from "solid-js";
var i = n("<div class=\"grid gap-6 md:grid-cols-2\">"), a = n("<article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"></span><span class=\"text-xs text-muted-foreground\"></span></div><h2 class=\"mb-2 text-lg font-semibold text-foreground\"></h2><p class=\"mb-4 text-sm text-muted-foreground\"></p><button type=button class=\"text-sm font-medium text-primary hover:underline\">");
function o() {
	let n = () => [
		{
			title: (void 0)(),
			date: (void 0)(),
			excerpt: (void 0)(),
			category: (void 0)()
		},
		{
			title: (void 0)(),
			date: (void 0)(),
			excerpt: (void 0)(),
			category: (void 0)()
		},
		{
			title: (void 0)(),
			date: (void 0)(),
			excerpt: (void 0)(),
			category: (void 0)()
		},
		{
			title: (void 0)(),
			date: (void 0)(),
			excerpt: (void 0)(),
			category: (void 0)()
		},
		{
			title: (void 0)(),
			date: (void 0)(),
			excerpt: (void 0)(),
			category: (void 0)()
		},
		{
			title: (void 0)(),
			date: (void 0)(),
			excerpt: (void 0)(),
			category: (void 0)()
		}
	];
	return (() => {
		var o = i();
		return t(o, e(r, {
			get each() {
				return n();
			},
			children: (e) => (() => {
				var n = a(), r = n.firstChild, i = r.firstChild, o = i.nextSibling, s = r.nextSibling, c = s.nextSibling, l = c.nextSibling;
				return t(i, () => e.category), t(o, () => e.date), t(s, () => e.title), t(c, () => e.excerpt), t(l, () => (void 0)()), n;
			})()
		})), o;
	})();
}
export { o as default };
