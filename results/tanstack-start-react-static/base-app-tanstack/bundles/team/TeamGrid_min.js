import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region src/components/pages/team/TeamGrid.tsx
function n() {
	return /* @__PURE__ */ e("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: [
			{
				name: "Sarah Chen",
				role: "Founder & Lead Engineer",
				bio: "Former Google engineer with 10 years of experience building internationalization systems at scale."
			},
			{
				name: "Marcus Weber",
				role: "Performance Engineer",
				bio: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel."
			},
			{
				name: "Aisha Patel",
				role: "Developer Advocate",
				bio: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext."
			},
			{
				name: "Tomás Rodríguez",
				role: "Full-Stack Developer",
				bio: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui."
			},
			{
				name: "Yuki Tanaka",
				role: "Data Analyst",
				bio: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT."
			},
			{
				name: "Elena Kowalski",
				role: "Community Manager",
				bio: "Manages community contributions, partnerships, and events. Background in open source governance."
			}
		].map((n) => /* @__PURE__ */ t("div", {
			className: "rounded-lg border border-border bg-card p-6 text-center",
			children: [
				/* @__PURE__ */ e("div", {
					className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground",
					children: n.name.split(" ").map((e) => e[0]).join("")
				}),
				/* @__PURE__ */ e("h3", {
					className: "text-base font-semibold text-foreground",
					children: n.name
				}),
				/* @__PURE__ */ e("p", {
					className: "mb-2 text-xs font-medium text-primary",
					children: n.role
				}),
				/* @__PURE__ */ e("p", {
					className: "text-sm text-muted-foreground",
					children: n.bio
				})
			]
		}, n.name))
	});
}
//#endregion
export { n as default };
