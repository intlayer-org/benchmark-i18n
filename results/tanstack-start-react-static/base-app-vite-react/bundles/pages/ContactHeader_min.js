import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/MockBanner.tsx
var r = () => t("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
});
//#endregion
//#region src/components/pages/contact/ContactHeader.tsx
function i() {
	return n(e, { children: [
		t(r, {}),
		t("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: "Get in Touch"
		}),
		n("p", {
			className: "mb-8 text-muted-foreground",
			children: [
				"Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at",
				" ",
				t("a", {
					href: "mailto:contact@intlayer.org",
					className: "text-primary hover:underline",
					children: "contact@intlayer.org"
				}),
				"."
			]
		})
	] });
}
//#endregion
export { i as default };
