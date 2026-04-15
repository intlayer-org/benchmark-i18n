import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
//#region components/MockBanner.tsx
var r = () => /* @__PURE__ */ t("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
});
//#endregion
//#region components/pages/careers/CareersHeader.tsx
function i() {
	return /* @__PURE__ */ n(e, { children: [
		/* @__PURE__ */ t(r, {}),
		/* @__PURE__ */ t("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: "Careers"
		}),
		/* @__PURE__ */ t("p", {
			className: "mb-4 text-muted-foreground",
			children: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
		})
	] });
}
//#endregion
export { i as default };
