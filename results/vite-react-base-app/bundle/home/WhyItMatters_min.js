import { jsxDEV as e } from "react/jsx-dev-runtime";
var t = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-react-base-app/src/components/pages/home/WhyItMatters.tsx";
function n() {
	return e("section", {
		className: "mb-16",
		children: [e("h2", {
			className: "mb-6 text-2xl font-bold text-foreground",
			children: "Why These Metrics Matter"
		}, void 0, !1, {
			fileName: t,
			lineNumber: 4,
			columnNumber: 7
		}, this), e("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: [
				e("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [e("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: "Bundle Size"
					}, void 0, !1, {
						fileName: t,
						lineNumber: 9,
						columnNumber: 11
					}, this), e("p", {
						className: "text-sm text-muted-foreground",
						children: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves."
					}, void 0, !1, {
						fileName: t,
						lineNumber: 12,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: t,
					lineNumber: 8,
					columnNumber: 9
				}, this),
				e("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [e("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: "Rendering & Hydration"
					}, void 0, !1, {
						fileName: t,
						lineNumber: 21,
						columnNumber: 11
					}, this), e("p", {
						className: "text-sm text-muted-foreground",
						children: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI)."
					}, void 0, !1, {
						fileName: t,
						lineNumber: 24,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: t,
					lineNumber: 20,
					columnNumber: 9
				}, this),
				e("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [e("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: "Dynamic Loading"
					}, void 0, !1, {
						fileName: t,
						lineNumber: 33,
						columnNumber: 11
					}, this), e("p", {
						className: "text-sm text-muted-foreground",
						children: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
					}, void 0, !1, {
						fileName: t,
						lineNumber: 36,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: t,
					lineNumber: 32,
					columnNumber: 9
				}, this)
			]
		}, void 0, !0, {
			fileName: t,
			lineNumber: 7,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: t,
		lineNumber: 3,
		columnNumber: 5
	}, this);
}
export { n as default };
