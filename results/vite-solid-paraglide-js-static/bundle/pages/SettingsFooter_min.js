import { insert as e, template as t } from "solid-js/web";
var n = t("<div class=\"flex justify-end gap-3\"><button type=button class=\"rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent\"></button><button type=submit class=\"rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function r() {
	return (() => {
		var t = n(), r = t.firstChild, i = r.nextSibling;
		return e(r, () => (void 0)()), e(i, () => (void 0)()), t;
	})();
}
export { r as default };
