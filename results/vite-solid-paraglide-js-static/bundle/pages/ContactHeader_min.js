import { createComponent as e, effect as t, insert as n, setAttribute as r, template as i } from "solid-js/web";
var a = i("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\">");
function o() {
	return (() => {
		var e = a();
		return n(e, () => (void 0)()), e;
	})();
}
var s = i("<h1 class=\"mb-2 text-3xl font-bold text-foreground\">"), c = i("<p class=\"mb-8 text-muted-foreground\"> <a class=\"text-primary hover:underline\"></a>.");
function l() {
	return [
		e(o, {}),
		(() => {
			var e = s();
			return n(e, () => (void 0)()), e;
		})(),
		(() => {
			var e = c(), i = e.firstChild, a = i.nextSibling;
			return n(e, () => (void 0)(), i), n(a, () => (void 0)()), t(() => r(a, "href", `mailto:${(void 0)()}`)), e;
		})()
	];
}
export { l as default };
