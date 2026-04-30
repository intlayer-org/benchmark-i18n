import { createComponent, template } from "solid-js/web";
var _tmpl$$1 = template(`<div class="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.`);
function MockBanner() {
	return _tmpl$$1();
}
var _tmpl$ = template(`<div class="mb-12 text-center"><h1 class="mb-3 text-3xl font-bold text-foreground">Simple, Transparent Pricing</h1><p class=text-muted-foreground>Choose the plan that fits your team. No hidden fees.`);
function PricingHeader() {
	return [createComponent(MockBanner, {}), _tmpl$()];
}
export { PricingHeader as default };
