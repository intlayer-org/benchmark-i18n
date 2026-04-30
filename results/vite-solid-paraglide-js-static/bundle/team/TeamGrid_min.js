import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r } from "solid-js";
var i = n("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\">"), a = n("<div class=\"rounded-lg border border-border bg-card p-6 text-center\"><div class=\"mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground\"></div><h3 class=\"text-base font-semibold text-foreground\"></h3><p class=\"mb-2 text-xs font-medium text-primary\"></p><p class=\"text-sm text-muted-foreground\">");
function o() {
	let n = () => [
		{
			name: (void 0)(),
			role: (void 0)(),
			bio: (void 0)()
		},
		{
			name: (void 0)(),
			role: (void 0)(),
			bio: (void 0)()
		},
		{
			name: (void 0)(),
			role: (void 0)(),
			bio: (void 0)()
		},
		{
			name: (void 0)(),
			role: (void 0)(),
			bio: (void 0)()
		},
		{
			name: (void 0)(),
			role: (void 0)(),
			bio: (void 0)()
		},
		{
			name: (void 0)(),
			role: (void 0)(),
			bio: (void 0)()
		}
	];
	return (() => {
		var o = i();
		return t(o, e(r, {
			get each() {
				return n();
			},
			children: (e) => (() => {
				var n = a(), r = n.firstChild, i = r.nextSibling, o = i.nextSibling, s = o.nextSibling;
				return t(r, () => e.name.split(" ").map((e) => e[0]).join("")), t(i, () => e.name), t(o, () => e.role), t(s, () => e.bio), n;
			})()
		})), o;
	})();
}
export { o as default };
