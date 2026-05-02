import { useId as e } from "react";
import { jsxDEV as t } from "react/jsx-dev-runtime";
var n = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-react-base-app/src/components/pages/settings/ApiAccessSection.tsx";
function r() {
	let r = e();
	return t("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [t("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: "API Access"
		}, void 0, !1, {
			fileName: n,
			lineNumber: 8,
			columnNumber: 7
		}, this), t("div", { children: [
			t("label", {
				htmlFor: r,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "API Key"
			}, void 0, !1, {
				fileName: n,
				lineNumber: 10,
				columnNumber: 9
			}, this),
			t("div", {
				className: "flex gap-2",
				children: [t("input", {
					id: r,
					readOnly: !0,
					defaultValue: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
					className: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
				}, void 0, !1, {
					fileName: n,
					lineNumber: 17,
					columnNumber: 11
				}, this), t("button", {
					type: "button",
					className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: "Copy"
				}, void 0, !1, {
					fileName: n,
					lineNumber: 23,
					columnNumber: 11
				}, this)]
			}, void 0, !0, {
				fileName: n,
				lineNumber: 16,
				columnNumber: 9
			}, this),
			t("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: "Use this key to access the benchmarking API programmatically."
			}, void 0, !1, {
				fileName: n,
				lineNumber: 30,
				columnNumber: 9
			}, this)
		] }, void 0, !0, {
			fileName: n,
			lineNumber: 9,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: n,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
export { r as default };
