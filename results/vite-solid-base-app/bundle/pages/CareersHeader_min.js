import { createComponent as e, template as t } from "solid-js/web";
var n = t("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\">⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.");
function r() {
	return n();
}
var i = t("<h1 class=\"mb-2 text-3xl font-bold text-foreground\">Careers"), a = t("<p class=\"mb-4 text-muted-foreground\">Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.");
function o() {
	return [
		e(r, {}),
		i(),
		a()
	];
}
export { o as default };
