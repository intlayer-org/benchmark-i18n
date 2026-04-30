import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r } from "solid-js";
var i = n("<div class=\"mb-12 grid gap-4 md:grid-cols-3\">"), a = n("<div class=\"rounded-lg border border-border bg-card p-4 text-center\"><p class=\"text-sm font-semibold text-foreground\"></p><p class=\"text-xs text-muted-foreground\">");
function o() {
	let n = () => [
		{
			label: (void 0)(),
			value: (void 0)()
		},
		{
			label: (void 0)(),
			value: (void 0)()
		},
		{
			label: (void 0)(),
			value: (void 0)()
		}
	];
	return (() => {
		var o = i();
		return t(o, e(r, {
			get each() {
				return n();
			},
			children: (e) => (() => {
				var n = a(), r = n.firstChild, i = r.nextSibling;
				return t(r, () => e.label), t(i, () => e.value), n;
			})()
		})), o;
	})();
}
export { o as default };
