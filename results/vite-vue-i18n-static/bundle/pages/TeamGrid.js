import { Fragment, createElementBlock, createElementVNode, defineComponent, openBlock, renderList, toDisplayString } from "vue";
var _hoisted_1 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" };
var _hoisted_2 = { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground" };
var _hoisted_3 = { class: "text-base font-semibold text-foreground" };
var _hoisted_4 = { class: "mb-2 text-xs font-medium text-primary" };
var _hoisted_5 = { class: "text-sm text-muted-foreground" };
var TeamGrid_default = defineComponent({
	__name: "TeamGrid",
	setup(__props) {
		const members = [
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
		];
		const getInitials = (name) => name.split(" ").map((n) => n[0]).join("");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createElementBlock(Fragment, null, renderList(members, (m) => {
				return createElementVNode("div", {
					key: m.name,
					class: "rounded-lg border border-border bg-card p-6 text-center"
				}, [
					createElementVNode("div", _hoisted_2, toDisplayString(getInitials(m.name)), 1),
					createElementVNode("h3", _hoisted_3, toDisplayString(m.name), 1),
					createElementVNode("p", _hoisted_4, toDisplayString(m.role), 1),
					createElementVNode("p", _hoisted_5, toDisplayString(m.bio), 1)
				]);
			}), 64))]);
		};
	}
});
export { TeamGrid_default as default };
