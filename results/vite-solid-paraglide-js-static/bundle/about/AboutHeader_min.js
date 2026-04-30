import { insert as e, template as t } from "solid-js/web";
import { onMount as n } from "solid-js";
function r(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), n(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var i = t("<h1 class=\"mb-4 text-3xl font-bold text-foreground\">"), a = t("<p class=\"mb-8 max-w-3xl text-muted-foreground\">");
function o() {
	return r("AboutHeader"), [(() => {
		var t = i();
		return e(t, () => (void 0)()), t;
	})(), (() => {
		var t = a();
		return e(t, () => (void 0)()), t;
	})()];
}
export { o as default };
