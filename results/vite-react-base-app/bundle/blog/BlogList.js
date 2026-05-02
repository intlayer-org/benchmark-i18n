import { jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-react-base-app/src/components/pages/blog/BlogList.tsx";
function BlogList() {
	return jsxDEV("div", {
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
		].map((p) => jsxDEV("article", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [
				jsxDEV("div", {
					className: "mb-3 flex items-center gap-3",
					children: [jsxDEV("span", {
						className: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground",
						children: p.category
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 13
					}, this), jsxDEV("span", {
						className: "text-xs text-muted-foreground",
						children: p.date
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 58,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 11
				}, this),
				jsxDEV("h2", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: p.title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 11
				}, this),
				jsxDEV("p", {
					className: "mb-4 text-sm text-muted-foreground",
					children: p.excerpt
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 63,
					columnNumber: 11
				}, this),
				jsxDEV("button", {
					type: "button",
					className: "text-sm font-medium text-primary hover:underline",
					children: "Read More →"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 11
				}, this)
			]
		}, p.title, true, {
			fileName: _jsxFileName,
			lineNumber: 50,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 48,
		columnNumber: 5
	}, this);
}
export { BlogList as default };
