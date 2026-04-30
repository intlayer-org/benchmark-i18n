import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r } from "solid-js";
var i = n("<section class=\"mx-auto mt-12 max-w-3xl\"><h2 class=\"mb-4 text-2xl font-bold text-foreground\"></h2><ul class=space-y-4>"), a = n("<li class=\"rounded-md border border-border p-4\"><span class=\"block text-sm font-bold text-primary\"></span><span class=\"mt-1 block text-sm text-muted-foreground\">");
function o() {
	let n = () => [
		{
			metric: (void 0)(),
			desc: (void 0)()
		},
		{
			metric: (void 0)(),
			desc: (void 0)()
		},
		{
			metric: (void 0)(),
			desc: (void 0)()
		},
		{
			metric: (void 0)(),
			desc: (void 0)()
		},
		{
			metric: (void 0)(),
			desc: (void 0)()
		}
	];
	return (() => {
		var o = i(), s = o.firstChild, c = s.nextSibling;
		return t(s, () => (void 0)()), t(c, e(r, {
			get each() {
				return n();
			},
			children: (e) => (() => {
				var n = a(), r = n.firstChild, i = r.nextSibling;
				return t(r, () => e.metric), t(i, () => e.desc), n;
			})()
		})), o;
	})();
}
export { o as default };
