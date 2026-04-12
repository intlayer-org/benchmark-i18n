import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/MockBanner.tsx
var MockBanner = () => /* @__PURE__ */ jsx("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
});
//#endregion
//#region app/components/pages/careers/CareersHeader.tsx
function CareersHeader() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(MockBanner, {}),
		/* @__PURE__ */ jsx("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: "Careers"
		}),
		/* @__PURE__ */ jsx("p", {
			className: "mb-4 text-muted-foreground",
			children: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
		})
	] });
}
//#endregion
export { CareersHeader as default };
