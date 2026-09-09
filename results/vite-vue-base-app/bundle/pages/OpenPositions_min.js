import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, openBlock as i, renderList as a, toDisplayString as o } from "vue";
var s = r({
	__name: "OpenPositions",
	setup(e, { expose: t }) {
		t();
		let n = { openings: [
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
		] };
		return Object.defineProperty(n, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), n;
	}
}), c = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, l = { class: "space-y-4" }, u = { class: "text-base font-semibold text-foreground" }, d = { class: "text-sm text-muted-foreground" }, f = { class: "mt-2 flex gap-2" }, p = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" }, m = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" }, h = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" };
function g(r, s, c, g, _, v) {
	return i(), t(e, null, [s[1] ||= n("h2", { class: "mb-6 text-2xl font-bold text-foreground" }, " Open Positions ", -1), n("div", l, [(i(), t(e, null, a(g.openings, (e) => n("div", {
		key: e.title,
		class: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"
	}, [n("div", null, [
		n("h3", u, o(e.title), 1),
		n("p", d, o(e.desc), 1),
		n("div", f, [
			n("span", p, o(e.dept), 1),
			n("span", m, o(e.location), 1),
			n("span", h, o(e.type), 1)
		])
	]), s[0] ||= n("button", {
		type: "button",
		class: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
	}, " Apply Now ", -1)])), 64))])], 64);
}
var _ = c(s, [["render", g], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/careers/OpenPositions.vue"]]);
export { _ as default };
