import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r } from "solid-js";
var i = n("<section><h2 class=\"mb-6 text-2xl font-bold text-foreground\">Sample Results</h2><div class=\"overflow-x-auto rounded-lg border border-border\"><table class=\"w-full text-sm\"><thead class=bg-muted><tr><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\">Library</th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\">Bundle Size</th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\">Lookup Time</th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\">Lazy Loading</th></tr></thead><tbody>"), a = n("<tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"></td><td class=\"px-4 py-3 text-muted-foreground\"></td><td class=\"px-4 py-3 text-muted-foreground\"></td><td class=\"px-4 py-3 text-muted-foreground\">");
function o() {
	let n = [
		{
			lib: "react-i18next",
			size: "42.3 kB",
			time: "0.12ms",
			lazy: "Yes"
		},
		{
			lib: "react-intl",
			size: "38.1 kB",
			time: "0.15ms",
			lazy: "Manual"
		},
		{
			lib: "lingui",
			size: "12.8 kB",
			time: "0.08ms",
			lazy: "Yes"
		},
		{
			lib: "typesafe-i18n",
			size: "5.2 kB",
			time: "0.05ms",
			lazy: "Built-in"
		}
	];
	return (() => {
		var o = i(), s = o.firstChild.nextSibling.firstChild.firstChild.nextSibling;
		return t(s, e(r, {
			each: n,
			children: (e) => (() => {
				var n = a(), r = n.firstChild, i = r.nextSibling, o = i.nextSibling, s = o.nextSibling;
				return t(r, () => e.lib), t(i, () => e.size), t(o, () => e.time), t(s, () => e.lazy), n;
			})()
		})), o;
	})();
}
export { o as default };
