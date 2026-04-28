import { createComponent as e, template as t } from "solid-js/web";
var n = t("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\">⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.");
function r() {
	return n();
}
var i = t("<h1 class=\"mb-2 text-3xl font-bold text-foreground\">Our Team"), a = t("<p class=\"mb-10 text-muted-foreground\">Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.");
function o() {
	return [
		e(r, {}),
		i(),
		a()
	];
}
export { o as default };
