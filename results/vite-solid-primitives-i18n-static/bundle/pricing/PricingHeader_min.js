import { createComponent as e, template as t } from "solid-js/web";
var n = t("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\">⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.");
function r() {
	return n();
}
var i = t("<div class=\"mb-12 text-center\"><h1 class=\"mb-3 text-3xl font-bold text-foreground\">Simple, Transparent Pricing</h1><p class=text-muted-foreground>Choose the plan that fits your team. No hidden fees.");
function a() {
	return [e(r, {}), i()];
}
export { a as default };
