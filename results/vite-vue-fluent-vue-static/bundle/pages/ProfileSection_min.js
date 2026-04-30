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
	__name: "ProfileSection",
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
}, d = { class: "rounded-lg border border-border bg-card p-6" }, f = { class: "mb-4 text-lg font-semibold text-foreground" }, p = { class: "space-y-4" }, m = {
	for: "display-name",
	class: "mb-1 block text-sm font-medium text-foreground"
}, h = {
	for: "email",
	class: "mb-1 block text-sm font-medium text-foreground"
};
function g(n, r, o, s, c, l) {
	return i(), e("section", d, [t("h2", f, a(s.td("settings.profile.title")), 1), t("div", p, [t("div", null, [t("label", m, a(s.td("settings.profile.displayName")), 1), r[0] ||= t("input", {
		id: "display-name",
		value: "John Developer",
		class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
	}, null, -1)]), t("div", null, [t("label", h, a(s.td("settings.profile.email")), 1), r[1] ||= t("input", {
		id: "email",
		value: "john@example.com",
		class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
	}, null, -1)])])]);
}
var _ = u(l, [["render", g], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/settings/ProfileSection.vue"]]);
export { _ as default };
