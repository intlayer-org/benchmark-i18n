import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { onMount as t } from "svelte";
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
var r = e.from_html("<h1 class=\"mb-4 text-3xl font-bold text-foreground\">About This Benchmark</h1> <p class=\"mb-8 max-w-3xl text-muted-foreground\">This is an open-source test application — not a product or a company. Its\n  sole purpose is to provide a realistic, multi-page React app where different\n  i18n libraries can be integrated and measured under identical conditions.</p>", 1);
function i(t, i) {
	e.push(i, !1), n("AboutHeader"), e.init();
	var a = r();
	e.next(2), e.append(t, a), e.pop();
}
export { i as default };
