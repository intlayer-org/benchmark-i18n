import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, openBlock as i, renderList as a, toDisplayString as o } from "vue";
var s = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, c = { class: "mb-2 text-lg font-semibold text-foreground" }, l = { class: "mb-4 text-sm text-muted-foreground" }, u = { class: "flex items-center justify-between" }, d = { class: "text-sm font-bold text-primary" }, f = r({
	__name: "ProductsGrid",
	setup(r) {
		let f = [
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
		return (r, p) => (i(), t("div", s, [(i(), t(e, null, a(f, (e) => n("div", {
			key: e.name,
			class: "flex flex-col justify-between rounded-lg border border-border bg-card p-6"
		}, [n("div", null, [n("h3", c, o(e.name), 1), n("p", l, o(e.desc), 1)]), n("div", u, [n("span", d, o(e.price), 1), p[0] ||= n("button", {
			type: "button",
			class: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
		}, " Learn More ", -1)])])), 64))]));
	}
});
export { f as default };
