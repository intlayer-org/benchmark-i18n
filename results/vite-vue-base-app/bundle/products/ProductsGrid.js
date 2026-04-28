import { Fragment, createElementBlock, createElementVNode, defineComponent, openBlock, renderList, toDisplayString } from "vue";
var _hoisted_1 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" };
var _hoisted_2 = { class: "mb-2 text-lg font-semibold text-foreground" };
var _hoisted_3 = { class: "mb-4 text-sm text-muted-foreground" };
var _hoisted_4 = { class: "flex items-center justify-between" };
var _hoisted_5 = { class: "text-sm font-bold text-primary" };
var ProductsGrid_default = defineComponent({
	__name: "ProductsGrid",
	setup(__props) {
		const products = [
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
		];
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createElementBlock(Fragment, null, renderList(products, (p) => {
				return createElementVNode("div", {
					key: p.name,
					class: "flex flex-col justify-between rounded-lg border border-border bg-card p-6"
				}, [createElementVNode("div", null, [createElementVNode("h3", _hoisted_2, toDisplayString(p.name), 1), createElementVNode("p", _hoisted_3, toDisplayString(p.desc), 1)]), createElementVNode("div", _hoisted_4, [createElementVNode("span", _hoisted_5, toDisplayString(p.price), 1), _cache[0] || (_cache[0] = createElementVNode("button", {
					type: "button",
					class: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
				}, " Learn More ", -1))])]);
			}), 64))]);
		};
	}
});
export { ProductsGrid_default as default };
