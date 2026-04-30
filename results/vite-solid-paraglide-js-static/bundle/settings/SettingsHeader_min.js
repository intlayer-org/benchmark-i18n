import { createComponent as e, insert as t, template as n } from "solid-js/web";
var r = n("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\">");
function i() {
	return (() => {
		var e = r();
		return t(e, () => (void 0)()), e;
	})();
}
var a = n("<h1 class=\"mb-2 text-3xl font-bold text-foreground\">"), o = n("<p class=\"mb-8 text-muted-foreground\">");
function s() {
	return [
		e(i, {}),
		(() => {
			var e = a();
			return t(e, () => (void 0)()), e;
		})(),
		(() => {
			var e = o();
			return t(e, () => (void 0)()), e;
		})()
	];
}
export { s as default };
