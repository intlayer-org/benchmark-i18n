import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region app/components/pages/blog/BlogList.tsx
function n() {
	return /* @__PURE__ */ e("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: [
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
		].map((n) => /* @__PURE__ */ t("article", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [
				/* @__PURE__ */ t("div", {
					className: "mb-3 flex items-center gap-3",
					children: [/* @__PURE__ */ e("span", {
						className: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground",
						children: n.category
					}), /* @__PURE__ */ e("span", {
						className: "text-xs text-muted-foreground",
						children: n.date
					})]
				}),
				/* @__PURE__ */ e("h2", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: n.title
				}),
				/* @__PURE__ */ e("p", {
					className: "mb-4 text-sm text-muted-foreground",
					children: n.excerpt
				}),
				/* @__PURE__ */ e("button", {
					type: "button",
					className: "text-sm font-medium text-primary hover:underline",
					children: "Read More →"
				})
			]
		}, n.title))
	});
}
//#endregion
export { n as default };
