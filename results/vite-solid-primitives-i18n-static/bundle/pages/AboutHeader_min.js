import { template as e } from "solid-js/web";
import { onMount as t } from "solid-js";
function n(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), t(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var r = e("<h1 class=\"mb-4 text-3xl font-bold text-foreground\">About This Benchmark"), i = e("<p class=\"mb-8 max-w-3xl text-muted-foreground\">This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.");
function a() {
	return n("AboutHeader"), [r(), i()];
}
export { a as default };
