import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, openBlock as i, renderList as a, toDisplayString as o } from "vue";
var s = { class: "grid gap-6 md:grid-cols-2" }, c = { class: "mb-3 flex items-center gap-3" }, l = { class: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground" }, u = { class: "text-xs text-muted-foreground" }, d = { class: "mb-2 text-lg font-semibold text-foreground" }, f = { class: "mb-4 text-sm text-muted-foreground" }, p = r({
	__name: "BlogList",
	setup(r) {
		let p = [
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
		return (r, m) => (i(), t("div", s, [(i(), t(e, null, a(p, (e) => n("article", {
			key: e.title,
			class: "rounded-lg border border-border bg-card p-6"
		}, [
			n("div", c, [n("span", l, o(e.category), 1), n("span", u, o(e.date), 1)]),
			n("h2", d, o(e.title), 1),
			n("p", f, o(e.excerpt), 1),
			m[0] ||= n("button", {
				type: "button",
				class: "text-sm font-medium text-primary hover:underline"
			}, " Read More → ", -1)
		])), 64))]));
	}
});
export { p as default };
