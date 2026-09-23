import { Fragment, createElementBlock, createElementVNode, defineComponent, openBlock, renderList, toDisplayString } from "vue";
var _hoisted_1 = { class: "space-y-4" };
var _hoisted_2 = { class: "text-base font-semibold text-foreground" };
var _hoisted_3 = { class: "text-sm text-muted-foreground" };
var _hoisted_4 = { class: "mt-2 flex gap-2" };
var _hoisted_5 = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" };
var _hoisted_6 = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" };
var _hoisted_7 = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" };
var OpenPositions_default = defineComponent({
	__name: "OpenPositions",
	setup(__props) {
		const openings = [
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
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [_cache[1] || (_cache[1] = createElementVNode("h2", { class: "mb-6 text-2xl font-bold text-foreground" }, " Open Positions ", -1)), createElementVNode("div", _hoisted_1, [(openBlock(), createElementBlock(Fragment, null, renderList(openings, (o) => {
				return createElementVNode("div", {
					key: o.title,
					class: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"
				}, [createElementVNode("div", null, [
					createElementVNode("h3", _hoisted_2, toDisplayString(o.title), 1),
					createElementVNode("p", _hoisted_3, toDisplayString(o.desc), 1),
					createElementVNode("div", _hoisted_4, [
						createElementVNode("span", _hoisted_5, toDisplayString(o.dept), 1),
						createElementVNode("span", _hoisted_6, toDisplayString(o.location), 1),
						createElementVNode("span", _hoisted_7, toDisplayString(o.type), 1)
					])
				]), _cache[0] || (_cache[0] = createElementVNode("button", {
					type: "button",
					class: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
				}, " Apply Now ", -1))]);
			}), 64))])], 64);
		};
	}
});
export { OpenPositions_default as default };
