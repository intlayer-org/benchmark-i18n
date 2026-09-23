import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName$1 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-react-base-app/src/components/MockBanner.tsx";
var MockBanner = () => jsxDEV("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 2,
	columnNumber: 3
}, void 0);
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-react-base-app/src/components/pages/settings/SettingsHeader.tsx";
function SettingsHeader() {
	return jsxDEV(Fragment, { children: [
		jsxDEV(MockBanner, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 6,
			columnNumber: 7
		}, this),
		jsxDEV("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: "Settings"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 7,
			columnNumber: 7
		}, this),
		jsxDEV("p", {
			className: "mb-8 text-muted-foreground",
			children: "Manage your account preferences and configuration."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 8,
			columnNumber: 7
		}, this)
	] }, void 0, true);
}
export { SettingsHeader as default };
