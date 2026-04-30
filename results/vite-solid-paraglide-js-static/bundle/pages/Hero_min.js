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
var i = t("<section class=\"mb-16 text-center\"><h1 class=\"mb-4 text-4xl font-bold tracking-tight text-foreground\"></h1><p class=\"mx-auto max-w-2xl text-lg text-muted-foreground\"></p><div class=\"mt-8 flex justify-center gap-4\"><button type=button class=\"rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\"></button><button type=button class=\"rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent\">");
function a() {
	return r("Hero"), (() => {
		var t = i(), n = t.firstChild, r = n.nextSibling, a = r.nextSibling.firstChild, o = a.nextSibling;
		return e(n, () => (void 0)()), e(r, () => (void 0)()), e(a, () => (void 0)()), e(o, () => (void 0)()), t;
	})();
}
export { a as default };
