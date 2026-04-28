import { createComponent as e, template as t } from "solid-js/web";
var n = t("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\">⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.");
function r() {
	return n();
}
var i = t("<h1 class=\"mb-2 text-3xl font-bold text-foreground\">Get in Touch"), a = t("<p class=\"mb-8 text-muted-foreground\">Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at <a href=mailto:contact@intlayer.org class=\"text-primary hover:underline\">contact@intlayer.org</a>.");
function o() {
	return [
		e(r, {}),
		i(),
		a()
	];
}
export { o as default };
