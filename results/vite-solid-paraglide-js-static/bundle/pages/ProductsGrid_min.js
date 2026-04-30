import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r } from "solid-js";
var i = n("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\">"), a = n("<div class=\"flex flex-col justify-between rounded-lg border border-border bg-card p-6\"><div><h3 class=\"mb-2 text-lg font-semibold text-foreground\"></h3><p class=\"mb-4 text-sm text-muted-foreground\"></p></div><div class=\"flex items-center justify-between\"><span class=\"text-sm font-bold text-primary\"></span><button type=button class=\"rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function o() {
	let n = () => [
		{
			name: (void 0)(),
			desc: (void 0)(),
			price: (void 0)()
		},
		{
			name: (void 0)(),
			desc: (void 0)(),
			price: (void 0)()
		},
		{
			name: (void 0)(),
			desc: (void 0)(),
			price: (void 0)()
		},
		{
			name: (void 0)(),
			desc: (void 0)(),
			price: (void 0)()
		},
		{
			name: (void 0)(),
			desc: (void 0)(),
			price: (void 0)()
		},
		{
			name: (void 0)(),
			desc: (void 0)(),
			price: (void 0)()
		}
	];
	return (() => {
		var o = i();
		return t(o, e(r, {
			get each() {
				return n();
			},
			children: (e) => (() => {
				var n = a(), r = n.firstChild, i = r.firstChild, o = i.nextSibling, s = r.nextSibling.firstChild, c = s.nextSibling;
				return t(i, () => e.name), t(o, () => e.desc), t(s, () => e.price), t(c, () => (void 0)()), n;
			})()
		})), o;
	})();
}
export { o as default };
