import { jsxDEV as e } from "react/jsx-dev-runtime";
var t = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-react-base-app/src/components/pages/products/ProductsGrid.tsx";
function n() {
	return e("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: [
			{
				name: "Benchmark CLI",
				desc: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
				price: "Free"
			},
			{
				name: "Benchmark Cloud",
				desc: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
				price: "$29/mo"
			},
			{
				name: "Benchmark Enterprise",
				desc: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
				price: "Contact Us"
			},
			{
				name: "Migration Assistant",
				desc: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
				price: "$99 one-time"
			},
			{
				name: "Translation QA",
				desc: "Automated quality checks for missing translations, pluralization issues, and context errors.",
				price: "$19/mo"
			},
			{
				name: "Bundle Optimizer",
				desc: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
				price: "$49/mo"
			}
		].map((n) => e("div", {
			className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6",
			children: [e("div", { children: [e("h3", {
				className: "mb-2 text-lg font-semibold text-foreground",
				children: n.name
			}, void 0, !1, {
				fileName: t,
				lineNumber: 43,
				columnNumber: 13
			}, this), e("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: n.desc
			}, void 0, !1, {
				fileName: t,
				lineNumber: 46,
				columnNumber: 13
			}, this)] }, void 0, !0, {
				fileName: t,
				lineNumber: 42,
				columnNumber: 11
			}, this), e("div", {
				className: "flex items-center justify-between",
				children: [e("span", {
					className: "text-sm font-bold text-primary",
					children: n.price
				}, void 0, !1, {
					fileName: t,
					lineNumber: 49,
					columnNumber: 13
				}, this), e("button", {
					type: "button",
					className: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: "Learn More"
				}, void 0, !1, {
					fileName: t,
					lineNumber: 50,
					columnNumber: 13
				}, this)]
			}, void 0, !0, {
				fileName: t,
				lineNumber: 48,
				columnNumber: 11
			}, this)]
		}, n.name, !0, {
			fileName: t,
			lineNumber: 38,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: t,
		lineNumber: 36,
		columnNumber: 5
	}, this);
}
export { n as default };
