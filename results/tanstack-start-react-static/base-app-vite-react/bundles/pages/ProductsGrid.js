import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/pages/products/ProductsGrid.tsx
function ProductsGrid() {
	return /* @__PURE__ */ jsx("div", {
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
		].map((p) => /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
				className: "mb-2 text-lg font-semibold text-foreground",
				children: p.name
			}), /* @__PURE__ */ jsx("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: p.desc
			})] }), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-sm font-bold text-primary",
					children: p.price
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					className: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: "Learn More"
				})]
			})]
		}, p.name))
	});
}
//#endregion
export { ProductsGrid as default };
