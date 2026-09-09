import { createElementBlock as e, createElementVNode as t, openBlock as n } from "vue";
var r = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, i = {}, a = { class: "flex justify-end gap-3" };
function o(r, i) {
	return n(), e("div", a, [...i[0] ||= [t("button", {
		type: "button",
		class: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
	}, " Cancel ", -1), t("button", {
		type: "submit",
		class: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
	}, " Save Changes ", -1)]]);
}
var s = r(i, [["render", o], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/settings/SettingsFooter.vue"]]);
export { s as default };
