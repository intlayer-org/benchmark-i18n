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
var u = { class: "rounded-lg border border-border bg-card p-6" }, d = { class: "mb-4 text-lg font-semibold text-foreground" }, f = { class: "space-y-4" }, p = { class: "flex items-center justify-between" }, m = { class: "text-sm font-medium text-foreground" }, h = { class: "text-xs text-muted-foreground" }, g = ["aria-label"], _ = { class: "flex items-center justify-between" }, v = { class: "text-sm font-medium text-foreground" }, y = { class: "text-xs text-muted-foreground" }, b = ["aria-label"], x = {
	for: "language",
	class: "mb-1 block text-sm font-medium text-foreground"
}, S = {
	id: "language",
	class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
}, C = n({
	__name: "PreferencesSection",
	setup(n) {
		let { td: r } = l();
		return (n, s) => (i(), e("section", u, [t("h2", d, a(o(r)("settings.preferences.title")), 1), t("div", f, [
			t("div", p, [t("div", null, [t("p", m, a(o(r)("settings.preferences.emailNotifications")), 1), t("p", h, a(o(r)("settings.preferences.weeklyReports")), 1)]), t("button", {
				type: "button",
				class: "h-6 w-11 rounded-full bg-primary transition-colors",
				"aria-label": o(r)("settings.preferences.toggleNotifications")
			}, [...s[0] ||= [t("span", { class: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" }, null, -1)]], 8, g)]),
			t("div", _, [t("div", null, [t("p", v, a(o(r)("settings.preferences.darkMode")), 1), t("p", y, a(o(r)("settings.preferences.darkColorScheme")), 1)]), t("button", {
				type: "button",
				class: "h-6 w-11 rounded-full bg-muted transition-colors",
				"aria-label": o(r)("settings.preferences.toggleDarkMode")
			}, [...s[1] ||= [t("span", { class: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" }, null, -1)]], 8, b)]),
			t("div", null, [t("label", x, a(o(r)("settings.preferences.defaultLanguage")), 1), t("select", S, [
				t("option", null, a(o(r)("settings.preferences.english")), 1),
				t("option", null, a(o(r)("settings.preferences.french")), 1),
				t("option", null, a(o(r)("settings.preferences.german")), 1),
				t("option", null, a(o(r)("settings.preferences.spanish")), 1),
				t("option", null, a(o(r)("settings.preferences.japanese")), 1),
				t("option", null, a(o(r)("settings.preferences.chinese")), 1),
				t("option", null, a(o(r)("settings.preferences.arabic")), 1)
			])])
		])]));
	}
});
export { C as default };
