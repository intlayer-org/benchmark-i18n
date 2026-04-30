import { createElementBlock as e, createElementVNode as t, defineComponent as n, getCurrentInstance as r, openBlock as i, toDisplayString as a } from "vue";
function o(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function s(e) {
	return e.split(".").map(o).join("-");
}
function c() {
	let e = r()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(s(t), n ?? {});
	} };
}
var l = n({
	__name: "ApiAccessSection",
	setup(e, { expose: t }) {
		t();
		let { td: n } = c(), r = { td: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), u = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, d = { class: "rounded-lg border border-border bg-card p-6" }, f = { class: "mb-4 text-lg font-semibold text-foreground" }, p = {
	for: "api-key",
	class: "mb-1 block text-sm font-medium text-foreground"
}, m = { class: "flex gap-2" }, h = {
	type: "button",
	class: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
}, g = { class: "mt-1 text-xs text-muted-foreground" };
function _(n, r, o, s, c, l) {
	return i(), e("section", d, [t("h2", f, a(s.td("settings.apiAccess.title")), 1), t("div", null, [
		t("label", p, a(s.td("settings.apiAccess.apiKey")), 1),
		t("div", m, [r[0] ||= t("input", {
			id: "api-key",
			readonly: "",
			value: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
			class: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
		}, null, -1), t("button", h, a(s.td("settings.apiAccess.copy")), 1)]),
		t("p", g, a(s.td("settings.apiAccess.description")), 1)
	])]);
}
var v = u(l, [["render", _], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/settings/ApiAccessSection.vue"]]);
export { v as default };
