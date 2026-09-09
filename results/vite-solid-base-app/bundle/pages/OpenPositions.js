import { createComponent, insert, template } from "solid-js/web";
import { For } from "solid-js";
var _tmpl$ = template(`<h2 class="mb-6 text-2xl font-bold text-foreground">Open Positions`);
var _tmpl$2 = template(`<div class=space-y-4>`);
var _tmpl$3 = template(`<div class="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"><div><h3 class="text-base font-semibold text-foreground"></h3><p class="text-sm text-muted-foreground"></p><div class="mt-2 flex gap-2"><span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"></span><span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"></span><span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"></span></div></div><button type=button class="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">Apply Now`);
function OpenPositions() {
	const openings = [
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
	return [_tmpl$(), (() => {
		var _el$2 = _tmpl$2();
		insert(_el$2, createComponent(For, {
			each: openings,
			children: (o) => (() => {
				var _el$3 = _tmpl$3(), _el$5 = _el$3.firstChild.firstChild, _el$6 = _el$5.nextSibling, _el$8 = _el$6.nextSibling.firstChild, _el$9 = _el$8.nextSibling, _el$0 = _el$9.nextSibling;
				insert(_el$5, () => o.title);
				insert(_el$6, () => o.desc);
				insert(_el$8, () => o.dept);
				insert(_el$9, () => o.location);
				insert(_el$0, () => o.type);
				return _el$3;
			})()
		}));
		return _el$2;
	})()];
}
export { OpenPositions as default };
