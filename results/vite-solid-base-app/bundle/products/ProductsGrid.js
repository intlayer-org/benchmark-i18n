import { createComponent, insert, template } from "solid-js/web";
import { For } from "solid-js";
var _tmpl$ = template(`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">`), _tmpl$2 = template(`<div class="flex flex-col justify-between rounded-lg border border-border bg-card p-6"><div><h3 class="mb-2 text-lg font-semibold text-foreground"></h3><p class="mb-4 text-sm text-muted-foreground"></p></div><div class="flex items-center justify-between"><span class="text-sm font-bold text-primary"></span><button type=button class="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90">Learn More`);
function ProductsGrid() {
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
	return (() => {
		var _el$ = _tmpl$();
		insert(_el$, createComponent(For, {
			each: products,
			children: (p) => (() => {
				var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling, _el$7 = _el$3.nextSibling.firstChild;
				insert(_el$4, () => p.name);
				insert(_el$5, () => p.desc);
				insert(_el$7, () => p.price);
				return _el$2;
			})()
		}));
		return _el$;
	})();
}
export { ProductsGrid as default };
