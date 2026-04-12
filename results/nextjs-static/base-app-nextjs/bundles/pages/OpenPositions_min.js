import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
//#region app/components/pages/careers/OpenPositions.tsx
var r = [
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
];
function i() {
	return /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: "Open Positions"
	}), /* @__PURE__ */ t("div", {
		className: "space-y-4",
		children: r.map((e) => /* @__PURE__ */ n("div", {
			className: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ n("div", { children: [
				/* @__PURE__ */ t("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.title
				}),
				/* @__PURE__ */ t("p", {
					className: "text-sm text-muted-foreground",
					children: e.desc
				}),
				/* @__PURE__ */ n("div", {
					className: "mt-2 flex gap-2",
					children: [
						/* @__PURE__ */ t("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.dept
						}),
						/* @__PURE__ */ t("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.location
						}),
						/* @__PURE__ */ t("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: e.type
						})
					]
				})
			] }), /* @__PURE__ */ t("button", {
				type: "button",
				className: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: "Apply Now"
			})]
		}, e.title))
	})] });
}
//#endregion
export { i as default };
