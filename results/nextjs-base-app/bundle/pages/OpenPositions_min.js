import { Fragment as e, jsxDEV as t } from "react/jsx-dev-runtime";
var n = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/pages/careers/OpenPositions.tsx";
function r() {
	return t(e, { children: [t("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: "Open Positions"
	}, void 0, !1, {
		fileName: n,
		lineNumber: 42,
		columnNumber: 7
	}, this), t("div", {
		className: "space-y-4",
		children: [
			{
				title: "Senior Frontend Engineer",
				location: "Remote",
				type: "Full-time",
				dept: "Engineering",
				desc: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite."
			},
			{
				title: "Backend Engineer",
				location: "Remote",
				type: "Full-time",
				dept: "Engineering",
				desc: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily."
			},
			{
				title: "Technical Writer",
				location: "Remote",
				type: "Part-time",
				dept: "Documentation",
				desc: "Create comprehensive guides, API references, and tutorials for our benchmarking platform."
			},
			{
				title: "DevRel Engineer",
				location: "San Francisco / Remote",
				type: "Full-time",
				dept: "Community",
				desc: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions."
			},
			{
				title: "QA Engineer",
				location: "Remote",
				type: "Full-time",
				dept: "Engineering",
				desc: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation."
			}
		].map((e) => t("div", {
			className: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between",
			children: [t("div", { children: [
				t("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.title
				}, void 0, !1, {
					fileName: n,
					lineNumber: 52,
					columnNumber: 15
				}, this),
				t("p", {
					className: "text-sm text-muted-foreground",
					children: e.desc
				}, void 0, !1, {
					fileName: n,
					lineNumber: 55,
					columnNumber: 15
				}, this),
				t("div", {
					className: "mt-2 flex gap-2",
					children: [
						t("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.dept
						}, void 0, !1, {
							fileName: n,
							lineNumber: 57,
							columnNumber: 17
						}, this),
						t("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.location
						}, void 0, !1, {
							fileName: n,
							lineNumber: 60,
							columnNumber: 17
						}, this),
						t("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.type
						}, void 0, !1, {
							fileName: n,
							lineNumber: 63,
							columnNumber: 17
						}, this)
					]
				}, void 0, !0, {
					fileName: n,
					lineNumber: 56,
					columnNumber: 15
				}, this)
			] }, void 0, !0, {
				fileName: n,
				lineNumber: 51,
				columnNumber: 13
			}, this), t("button", {
				type: "button",
				className: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: "Apply Now"
			}, void 0, !1, {
				fileName: n,
				lineNumber: 68,
				columnNumber: 13
			}, this)]
		}, e.title, !0, {
			fileName: n,
			lineNumber: 47,
			columnNumber: 11
		}, this))
	}, void 0, !1, {
		fileName: n,
		lineNumber: 45,
		columnNumber: 7
	}, this)] }, void 0, !0, {
		fileName: n,
		lineNumber: 41,
		columnNumber: 5
	}, this);
}
export { r as default };
