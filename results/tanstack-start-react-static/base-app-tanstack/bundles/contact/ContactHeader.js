import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/MockBanner.tsx
var MockBanner = () => /* @__PURE__ */ jsx("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
});
//#endregion
//#region src/components/pages/contact/ContactHeader.tsx
function ContactHeader() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(MockBanner, {}),
		/* @__PURE__ */ jsx("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: "Get in Touch"
		}),
		/* @__PURE__ */ jsxs("p", {
			className: "mb-8 text-muted-foreground",
			children: [
				"Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at",
				" ",
				/* @__PURE__ */ jsx("a", {
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
export { ContactHeader as default };
