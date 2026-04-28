import { Fragment as e, createElementBlock as t, createElementVNode as n, createVNode as r, defineComponent as i, openBlock as a } from "vue";
var o = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, s = {}, c = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" };
function l(e, n) {
	return a(), t("div", c, " ⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service. ");
}
var u = o(s, [["render", l]]), d = i({
	__name: "SettingsHeader",
	setup(i) {
		return (i, o) => (a(), t(e, null, [
			r(u),
			o[0] ||= n("h1", { class: "mb-2 text-3xl font-bold text-foreground" }, "Settings", -1),
			o[1] ||= n("p", { class: "mb-8 text-muted-foreground" }, " Manage your account preferences and configuration. ", -1)
		], 64));
	}
});
export { d as default };
