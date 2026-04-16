import { useLayoutEffect as e } from "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
function r(t) {
	typeof performance < "u" && performance.mark && performance.mark(`${t}-start`), e(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${t}-end`);
			try {
				performance.measure(`${t}-render`, `${t}-start`, `${t}-end`);
			} catch {}
		}
	}, [t]);
}
function i() {
	return r("Hero"), n("section", {
		className: "mb-16 text-center",
		children: [
			t("h1", {
				className: "mb-4 text-4xl font-bold tracking-tight text-foreground",
				children: "i18n Benchmark"
			}),
			t("p", {
				className: "mx-auto max-w-2xl text-lg text-muted-foreground",
				children: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity."
			}),
			n("div", {
				className: "mt-8 flex justify-center gap-4",
				children: [t("button", {
					type: "button",
					className: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: "View Results"
				}), t("button", {
					type: "button",
					className: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: "Methodology"
				})]
			})
		]
	});
}
export { i as default };
