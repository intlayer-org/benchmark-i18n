import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td></tr>"), n = e.from_html("<section><h2 class=\"mb-6 text-2xl font-bold text-foreground\">Sample Results</h2> <div class=\"overflow-x-auto rounded-lg border border-border\"><table class=\"w-full text-sm\"><thead class=\"bg-muted\"><tr><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\">Library</th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\">Bundle Size</th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\">Lookup Time</th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\">Lazy Loading</th></tr></thead><tbody></tbody></table></div></section>");
function r(r) {
	let i = [
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
	var a = n(), o = e.sibling(e.child(a), 2), s = e.child(o), c = e.sibling(e.child(s));
	e.each(c, 5, () => i, (e) => e.lib, (n, r) => {
		var i = t(), a = e.child(i), o = e.only_child(a, !0), s = e.sibling(a), c = e.only_child(s, !0), l = e.sibling(s), u = e.only_child(l, !0), d = e.sibling(l), f = e.only_child(d, !0);
		e.reset(i), e.template_effect(() => {
			e.set_text(o, e.get(r).lib), e.set_text(c, e.get(r).size), e.set_text(u, e.get(r).time), e.set_text(f, e.get(r).lazy);
		}), e.append(n, i);
	}), e.reset(c), e.reset(s), e.reset(o), e.reset(a), e.append(r, a);
}
export { r as default };
