import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<div class=\"rounded-lg border border-border bg-card p-4 text-center\"><p class=\"text-sm font-semibold text-foreground\"> </p> <p class=\"text-xs text-muted-foreground\"> </p></div>"), n = e.from_html("<div class=\"mb-12 grid gap-4 md:grid-cols-3\"></div>");
function r(r) {
	let i = [
		{
			label: "Remote-first",
			value: "Work from anywhere in the world"
		},
		{
			label: "Competitive pay",
			value: "Top-of-market compensation"
		},
		{
			label: "Open source time",
			value: "20% time for OSS contributions"
		}
	];
	var a = n();
	e.each(a, 5, () => i, (e) => e.label, (n, r) => {
		var i = t(), a = e.child(i), o = e.child(a, !0);
		e.reset(a);
		var s = e.sibling(a, 2), c = e.child(s, !0);
		e.reset(s), e.reset(i), e.template_effect(() => {
			e.set_text(o, e.get(r).label), e.set_text(c, e.get(r).value);
		}), e.append(n, i);
	}), e.reset(a), e.append(r, a);
}
export { r as default };
