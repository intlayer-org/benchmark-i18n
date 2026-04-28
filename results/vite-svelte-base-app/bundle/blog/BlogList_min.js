import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"> </span> <span class=\"text-xs text-muted-foreground\"> </span></div> <h2 class=\"mb-2 text-lg font-semibold text-foreground\"> </h2> <p class=\"mb-4 text-sm text-muted-foreground\"> </p> <button type=\"button\" class=\"text-sm font-medium text-primary hover:underline\">Read More →</button></article>"), n = e.from_html("<div class=\"grid gap-6 md:grid-cols-2\"></div>");
function r(r) {
	let i = [
		{
			title: "Comparing i18n Libraries in 2026: A Deep Dive",
			date: "March 15, 2026",
			excerpt: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
			category: "Benchmark"
		},
		{
			title: "How to Reduce Your i18n Bundle by 60%",
			date: "March 8, 2026",
			excerpt: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
			category: "Tutorial"
		},
		{
			title: "The State of Internationalization in React",
			date: "February 28, 2026",
			excerpt: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
			category: "Analysis"
		},
		{
			title: "Migrating from react-i18next to Lingui",
			date: "February 15, 2026",
			excerpt: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
			category: "Tutorial"
		},
		{
			title: "Server Components and i18n: What Changes?",
			date: "February 1, 2026",
			excerpt: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
			category: "Analysis"
		},
		{
			title: "Benchmark Methodology: How We Test",
			date: "January 20, 2026",
			excerpt: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
			category: "Meta"
		}
	];
	var a = n();
	e.each(a, 5, () => i, (e) => e.title, (n, r) => {
		var i = t(), a = e.child(i), o = e.child(a), s = e.child(o, !0);
		e.reset(o);
		var c = e.sibling(o, 2), l = e.child(c, !0);
		e.reset(c), e.reset(a);
		var u = e.sibling(a, 2), d = e.child(u, !0);
		e.reset(u);
		var f = e.sibling(u, 2), p = e.child(f, !0);
		e.reset(f), e.next(2), e.reset(i), e.template_effect(() => {
			e.set_text(s, e.get(r).category), e.set_text(l, e.get(r).date), e.set_text(d, e.get(r).title), e.set_text(p, e.get(r).excerpt);
		}), e.append(n, i);
	}), e.reset(a), e.append(r, a);
}
export { r as default };
