import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, openBlock as i, renderList as a, toDisplayString as o } from "vue";
var s = r({
	__name: "TeamGrid",
	setup(e, { expose: t }) {
		t();
		let n = {
			members: [
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
			],
			getInitials: (e) => e.split(" ").map((e) => e[0]).join("")
		};
		return Object.defineProperty(n, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), n;
	}
}), c = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, l = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, u = { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground" }, d = { class: "text-base font-semibold text-foreground" }, f = { class: "mb-2 text-xs font-medium text-primary" }, p = { class: "text-sm text-muted-foreground" };
function m(r, s, c, m, h, g) {
	return i(), t("div", l, [(i(), t(e, null, a(m.members, (e) => n("div", {
		key: e.name,
		class: "rounded-lg border border-border bg-card p-6 text-center"
	}, [
		n("div", u, o(m.getInitials(e.name)), 1),
		n("h3", d, o(e.name), 1),
		n("p", f, o(e.role), 1),
		n("p", p, o(e.bio), 1)
	])), 64))]);
}
var h = c(s, [["render", m], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/team/TeamGrid.vue"]]);
export { h as default };
