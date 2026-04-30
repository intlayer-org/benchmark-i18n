import { createElementBlock as e, createElementVNode as t, defineComponent as n, getCurrentInstance as r, openBlock as i, toDisplayString as a, unref as o } from "vue";
function s(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function c(e) {
	return e.split(".").map(s).join("-");
}
function l() {
	let e = r()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(c(t), n ?? {});
	} };
}
var u = { class: "rounded-lg border border-border bg-card p-6" }, d = { class: "mb-4 text-lg font-semibold text-foreground" }, f = {
	for: "api-key",
	class: "mb-1 block text-sm font-medium text-foreground"
}, p = { class: "flex gap-2" }, m = {
	type: "button",
	class: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
}, h = { class: "mt-1 text-xs text-muted-foreground" }, g = n({
	__name: "ApiAccessSection",
	setup(n) {
		let { td: r } = l();
		return (n, s) => (i(), e("section", u, [t("h2", d, a(o(r)("settings.apiAccess.title")), 1), t("div", null, [
			t("label", f, a(o(r)("settings.apiAccess.apiKey")), 1),
			t("div", p, [s[0] ||= t("input", {
				id: "api-key",
				readonly: "",
				value: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
				class: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
			}, null, -1), t("button", m, a(o(r)("settings.apiAccess.copy")), 1)]),
			t("p", h, a(o(r)("settings.apiAccess.description")), 1)
		])]));
	}
});
export { g as default };
