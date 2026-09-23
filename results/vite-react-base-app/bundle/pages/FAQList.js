import { jsx, jsxs } from "react/jsx-runtime";
function FAQList() {
	return jsx("div", {
		className: "mx-auto max-w-3xl space-y-4",
		children: [
			{
				q: "What is i18n Benchmark?",
				a: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications."
			},
			{
				q: "How are benchmarks conducted?",
				a: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository."
			},
			{
				q: "Which libraries are currently supported?",
				a: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee."
			},
			{
				q: "Can I submit my own benchmarks?",
				a: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions."
			},
			{
				q: "How often are benchmarks updated?",
				a: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle."
			},
			{
				q: "Is the data reliable?",
				a: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency."
			},
			{
				q: "Do you offer consulting services?",
				a: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints."
			},
			{
				q: "How can I contribute?",
				a: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
			}
		].map((f) => jsxs("details", {
			className: "group rounded-lg border border-border bg-card",
			children: [jsx("summary", {
				className: "cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors",
				children: f.q
			}), jsx("p", {
				className: "px-6 pb-4 text-sm text-muted-foreground",
				children: f.a
			})]
		}, f.q))
	});
}
export { FAQList as default };
