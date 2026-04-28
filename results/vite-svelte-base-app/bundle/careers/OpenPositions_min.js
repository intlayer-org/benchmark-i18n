import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<div class=\"flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between\"><div><h3 class=\"text-base font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p> <div class=\"mt-2 flex gap-2\"><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"> </span> <span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"> </span> <span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"> </span></div></div> <button type=\"button\" class=\"shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">Apply Now</button></div>"), n = e.from_html("<h2 class=\"mb-6 text-2xl font-bold text-foreground\">Open Positions</h2> <div class=\"space-y-4\"></div>", 1);
function r(r) {
	let i = [
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
	var a = n(), o = e.sibling(e.first_child(a), 2);
	e.each(o, 5, () => i, (e) => e.title, (n, r) => {
		var i = t(), a = e.child(i), o = e.child(a), s = e.child(o, !0);
		e.reset(o);
		var c = e.sibling(o, 2), l = e.child(c, !0);
		e.reset(c);
		var u = e.sibling(c, 2), d = e.child(u), f = e.child(d, !0);
		e.reset(d);
		var p = e.sibling(d, 2), m = e.child(p, !0);
		e.reset(p);
		var h = e.sibling(p, 2), g = e.child(h, !0);
		e.reset(h), e.reset(u), e.reset(a), e.next(2), e.reset(i), e.template_effect(() => {
			e.set_text(s, e.get(r).title), e.set_text(l, e.get(r).desc), e.set_text(f, e.get(r).dept), e.set_text(m, e.get(r).location), e.set_text(g, e.get(r).type);
		}), e.append(n, i);
	}), e.reset(o), e.append(r, a);
}
export { r as default };
