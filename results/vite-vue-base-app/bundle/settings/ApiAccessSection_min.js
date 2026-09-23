import { createElementBlock as e, createStaticVNode as t, openBlock as n } from "vue";
var r = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, i = {}, a = { class: "rounded-lg border border-border bg-card p-6" };
function o(r, i) {
	return n(), e("section", a, [...i[0] ||= [t("<h2 class=\"mb-4 text-lg font-semibold text-foreground\">API Access</h2><div><label for=\"apiKey\" class=\"mb-1 block text-sm font-medium text-foreground\"> API Key </label><div class=\"flex gap-2\"><input id=\"apiKey\" readonly value=\"sk_bench_xxxxxxxxxxxxxxxxxxxx\" class=\"flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground\"><button type=\"button\" class=\"rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors\"> Copy </button></div><p class=\"mt-1 text-xs text-muted-foreground\"> Use this key to access the benchmarking API programmatically. </p></div>", 2)]]);
}
var s = r(i, [["render", o], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/settings/ApiAccessSection.vue"]]);
export { s as default };
