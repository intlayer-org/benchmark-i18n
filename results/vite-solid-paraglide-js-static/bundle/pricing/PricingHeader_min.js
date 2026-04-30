import { createComponent as e, insert as t, template as n } from "solid-js/web";
var r = n("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\">");
function i() {
	return (() => {
		var e = r();
		return t(e, () => (void 0)()), e;
	})();
}
var a = n("<div class=\"mb-12 text-center\"><h1 class=\"mb-3 text-3xl font-bold text-foreground\"></h1><p class=text-muted-foreground>");
function o() {
	return [e(i, {}), (() => {
		var e = a(), n = e.firstChild, r = n.nextSibling;
		return t(n, () => (void 0)()), t(r, () => (void 0)()), e;
	})()];
}
export { o as default };
