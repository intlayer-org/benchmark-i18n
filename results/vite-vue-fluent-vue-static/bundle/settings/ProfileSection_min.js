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
var u = { class: "rounded-lg border border-border bg-card p-6" }, d = { class: "mb-4 text-lg font-semibold text-foreground" }, f = { class: "space-y-4" }, p = {
	for: "display-name",
	class: "mb-1 block text-sm font-medium text-foreground"
}, m = {
	for: "email",
	class: "mb-1 block text-sm font-medium text-foreground"
}, h = n({
	__name: "ProfileSection",
	setup(n) {
		let { td: r } = l();
		return (n, s) => (i(), e("section", u, [t("h2", d, a(o(r)("settings.profile.title")), 1), t("div", f, [t("div", null, [t("label", p, a(o(r)("settings.profile.displayName")), 1), s[0] ||= t("input", {
			id: "display-name",
			value: "John Developer",
			class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
		}, null, -1)]), t("div", null, [t("label", m, a(o(r)("settings.profile.email")), 1), s[1] ||= t("input", {
			id: "email",
			value: "john@example.com",
			class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
		}, null, -1)])])]));
	}
});
export { h as default };
