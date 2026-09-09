import { createComponent, template } from "solid-js/web";
var _tmpl$$1 = template(`<div class="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.`);
function MockBanner() {
	return _tmpl$$1();
}
var _tmpl$ = template(`<h1 class="mb-2 text-3xl font-bold text-foreground">Our Team`);
var _tmpl$2 = template(`<p class="mb-10 text-muted-foreground">Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.`);
function TeamHeader() {
	return [
		createComponent(MockBanner, {}),
		_tmpl$(),
		_tmpl$2()
	];
}
export { TeamHeader as default };
