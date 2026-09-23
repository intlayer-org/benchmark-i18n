import { jsx as e, jsxs as t } from "react/jsx-runtime";
function n() {
	return t("section", {
		className: "mb-16 text-center",
		children: [
			e("h1", {
				className: "mb-4 text-4xl font-bold tracking-tight text-foreground",
				children: "i18n Benchmark"
			}),
			e("p", {
				className: "mx-auto max-w-2xl text-lg text-muted-foreground",
				children: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity."
			}),
			t("div", {
				className: "mt-8 flex justify-center gap-4",
				children: [e("button", {
					type: "button",
					className: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: "View Results"
				}), e("button", {
					type: "button",
					className: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: "Methodology"
				})]
			})
		]
	});
}
export { n as default };
