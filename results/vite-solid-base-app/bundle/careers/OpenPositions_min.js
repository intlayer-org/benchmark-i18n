import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r } from "solid-js";
var i = n("<h2 class=\"mb-6 text-2xl font-bold text-foreground\">Open Positions"), a = n("<div class=space-y-4>"), o = n("<div class=\"flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between\"><div><h3 class=\"text-base font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p><div class=\"mt-2 flex gap-2\"><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span></div></div><button type=button class=\"shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">Apply Now");
function s() {
	let n = [
		{
			title: "Senior Frontend Engineer",
			location: "Remote",
			type: "Full-time",
			dept: "Engineering",
			desc: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite."
		},
		{
			title: "Backend Engineer",
			location: "Remote",
			type: "Full-time",
			dept: "Engineering",
			desc: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily."
		},
		{
			title: "Technical Writer",
			location: "Remote",
			type: "Part-time",
			dept: "Documentation",
			desc: "Create comprehensive guides, API references, and tutorials for our benchmarking platform."
		},
		{
			title: "DevRel Engineer",
			location: "San Francisco / Remote",
			type: "Full-time",
			dept: "Community",
			desc: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions."
		},
		{
			title: "QA Engineer",
			location: "Remote",
			type: "Full-time",
			dept: "Engineering",
			desc: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation."
		}
	];
	return [i(), (() => {
		var i = a();
		return t(i, e(r, {
			each: n,
			children: (e) => (() => {
				var n = o(), r = n.firstChild.firstChild, i = r.nextSibling, a = i.nextSibling.firstChild, s = a.nextSibling, c = s.nextSibling;
				return t(r, () => e.title), t(i, () => e.desc), t(a, () => e.dept), t(s, () => e.location), t(c, () => e.type), n;
			})()
		})), i;
	})()];
}
export { s as default };
