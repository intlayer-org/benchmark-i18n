import { useLayoutEffect as e } from "react";
import { Fragment as t, jsx as n, jsxs as r } from "react/jsx-runtime";
function i(t) {
	typeof performance < "u" && performance.mark && performance.mark(`${t}-start`), e(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${t}-end`);
			try {
				performance.measure(`${t}-render`, `${t}-start`, `${t}-end`);
			} catch {}
		}
	}, [t]);
}
function a() {
	return i("AboutHeader"), r(t, { children: [n("h1", {
		className: "mb-4 text-3xl font-bold text-foreground",
		children: "About This Benchmark"
	}), n("p", {
		className: "mb-8 max-w-3xl text-muted-foreground",
		children: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
	})] });
}
export { a as default };
