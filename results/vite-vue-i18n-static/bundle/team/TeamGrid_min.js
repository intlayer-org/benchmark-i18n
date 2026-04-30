import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, openBlock as i, renderList as a, toDisplayString as o } from "vue";
var s = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, c = { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground" }, l = { class: "text-base font-semibold text-foreground" }, u = { class: "mb-2 text-xs font-medium text-primary" }, d = { class: "text-sm text-muted-foreground" }, f = r({
	__name: "TeamGrid",
	setup(r) {
		let f = [
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
		], p = (e) => e.split(" ").map((e) => e[0]).join("");
		return (r, m) => (i(), t("div", s, [(i(), t(e, null, a(f, (e) => n("div", {
			key: e.name,
			class: "rounded-lg border border-border bg-card p-6 text-center"
		}, [
			n("div", c, o(p(e.name)), 1),
			n("h3", l, o(e.name), 1),
			n("p", u, o(e.role), 1),
			n("p", d, o(e.bio), 1)
		])), 64))]));
	}
});
export { f as default };
