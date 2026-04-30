import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r } from "solid-js";
var i = n("<section><h2 class=\"mb-6 text-2xl font-bold text-foreground\"></h2><div class=\"overflow-x-auto rounded-lg border border-border\"><table class=\"w-full text-sm\"><thead class=bg-muted><tr><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"></th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"></th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"></th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"></th></tr></thead><tbody>"), a = n("<tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"></td><td class=\"px-4 py-3 text-muted-foreground\"></td><td class=\"px-4 py-3 text-muted-foreground\"></td><td class=\"px-4 py-3 text-muted-foreground\">");
function o() {
	let n = () => [
		{
			lib: "react-i18next",
			size: "42.3 kB",
			time: "0.12ms",
			lazy: (void 0)()
		},
		{
			lib: "react-intl",
			size: "38.1 kB",
			time: "0.15ms",
			lazy: (void 0)()
		},
		{
			lib: "lingui",
			size: "12.8 kB",
			time: "0.08ms",
			lazy: (void 0)()
		},
		{
			lib: "typesafe-i18n",
			size: "5.2 kB",
			time: "0.05ms",
			lazy: (void 0)()
		}
	];
	return (() => {
		var o = i(), s = o.firstChild, c = s.nextSibling.firstChild.firstChild, l = c.firstChild.firstChild, u = l.nextSibling, d = u.nextSibling, f = d.nextSibling, p = c.nextSibling;
		return t(s, () => (void 0)()), t(l, () => (void 0)()), t(u, () => (void 0)()), t(d, () => (void 0)()), t(f, () => (void 0)()), t(p, e(r, {
			get each() {
				return n();
			},
			children: (e) => (() => {
				var n = a(), r = n.firstChild, i = r.nextSibling, o = i.nextSibling, s = o.nextSibling;
				return t(r, () => e.lib), t(i, () => e.size), t(o, () => e.time), t(s, () => e.lazy), n;
			})()
		})), o;
	})();
}
export { o as default };
