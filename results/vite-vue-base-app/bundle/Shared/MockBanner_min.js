import { createElementBlock as e, openBlock as t } from "vue";
var n = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, r = {}, i = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" };
function a(n, r) {
	return t(), e("div", i, " ⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service. ");
}
var o = n(r, [["render", a]]);
export { o as default };
