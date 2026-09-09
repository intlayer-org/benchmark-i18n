import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, openBlock as i, renderList as a, toDisplayString as o } from "vue";
var s = r({
	__name: "BlogList",
	setup(e, { expose: t }) {
		t();
		let n = { posts: [
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
		] };
		return Object.defineProperty(n, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), n;
	}
}), c = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, l = { class: "grid gap-6 md:grid-cols-2" }, u = { class: "mb-3 flex items-center gap-3" }, d = { class: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground" }, f = { class: "text-xs text-muted-foreground" }, p = { class: "mb-2 text-lg font-semibold text-foreground" }, m = { class: "mb-4 text-sm text-muted-foreground" };
function h(r, s, c, h, g, _) {
	return i(), t("div", l, [(i(), t(e, null, a(h.posts, (e) => n("article", {
		key: e.title,
		class: "rounded-lg border border-border bg-card p-6"
	}, [
		n("div", u, [n("span", d, o(e.category), 1), n("span", f, o(e.date), 1)]),
		n("h2", p, o(e.title), 1),
		n("p", m, o(e.excerpt), 1),
		s[0] ||= n("button", {
			type: "button",
			class: "text-sm font-medium text-primary hover:underline"
		}, " Read More → ", -1)
	])), 64))]);
}
var g = c(s, [["render", h], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/blog/BlogList.vue"]]);
export { g as default };
