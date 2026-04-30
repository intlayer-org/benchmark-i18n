import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r } from "solid-js";
var i = n("<h2 class=\"mb-6 text-2xl font-bold text-foreground\">"), a = n("<div class=space-y-4>"), o = n("<div class=\"flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between\"><div><h3 class=\"text-base font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p><div class=\"mt-2 flex gap-2\"><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span></div></div><button type=button class=\"shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function s() {
	let n = () => [
		{
			title: (void 0)(),
			location: (void 0)(),
			type: (void 0)(),
			dept: (void 0)(),
			desc: (void 0)()
		},
		{
			title: (void 0)(),
			location: (void 0)(),
			type: (void 0)(),
			dept: (void 0)(),
			desc: (void 0)()
		},
		{
			title: (void 0)(),
			location: (void 0)(),
			type: (void 0)(),
			dept: (void 0)(),
			desc: (void 0)()
		},
		{
			title: (void 0)(),
			location: (void 0)(),
			type: (void 0)(),
			dept: (void 0)(),
			desc: (void 0)()
		},
		{
			title: (void 0)(),
			location: (void 0)(),
			type: (void 0)(),
			dept: (void 0)(),
			desc: (void 0)()
		}
	];
	return [(() => {
		var e = i();
		return t(e, () => (void 0)()), e;
	})(), (() => {
		var i = a();
		return t(i, e(r, {
			get each() {
				return n();
			},
			children: (e) => (() => {
				var n = o(), r = n.firstChild, i = r.firstChild, a = i.nextSibling, s = a.nextSibling.firstChild, c = s.nextSibling, l = c.nextSibling, u = r.nextSibling;
				return t(i, () => e.title), t(a, () => e.desc), t(s, () => e.dept), t(c, () => e.location), t(l, () => e.type), t(u, () => (void 0)()), n;
			})()
		})), i;
	})()];
}
export { s as default };
