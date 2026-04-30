import { createComponent, insert, template } from "solid-js/web";
import { For } from "solid-js";
var _tmpl$ = template(`<div class="grid gap-6 md:grid-cols-2">`), _tmpl$2 = template(`<article class="rounded-lg border border-border bg-card p-6"><div class="mb-3 flex items-center gap-3"><span class="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground"></span><span class="text-xs text-muted-foreground"></span></div><h2 class="mb-2 text-lg font-semibold text-foreground"></h2><p class="mb-4 text-sm text-muted-foreground"></p><button type=button class="text-sm font-medium text-primary hover:underline">Read More →`);
function BlogList() {
	const posts = [
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
	return (() => {
		var _el$ = _tmpl$();
		insert(_el$, createComponent(For, {
			each: posts,
			children: (p) => (() => {
				var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling, _el$6 = _el$3.nextSibling, _el$7 = _el$6.nextSibling;
				insert(_el$4, () => p.category);
				insert(_el$5, () => p.date);
				insert(_el$6, () => p.title);
				insert(_el$7, () => p.excerpt);
				return _el$2;
			})()
		}));
		return _el$;
	})();
}
export { BlogList as default };
