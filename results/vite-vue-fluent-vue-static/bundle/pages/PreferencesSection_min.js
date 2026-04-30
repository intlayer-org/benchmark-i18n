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
	__name: "PreferencesSection",
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
}, d = { class: "rounded-lg border border-border bg-card p-6" }, f = { class: "mb-4 text-lg font-semibold text-foreground" }, p = { class: "space-y-4" }, m = { class: "flex items-center justify-between" }, h = { class: "text-sm font-medium text-foreground" }, g = { class: "text-xs text-muted-foreground" }, _ = ["aria-label"], v = { class: "flex items-center justify-between" }, y = { class: "text-sm font-medium text-foreground" }, b = { class: "text-xs text-muted-foreground" }, x = ["aria-label"], S = {
	for: "language",
	class: "mb-1 block text-sm font-medium text-foreground"
}, C = {
	id: "language",
	class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
};
function w(n, r, o, s, c, l) {
	return i(), e("section", d, [t("h2", f, a(s.td("settings.preferences.title")), 1), t("div", p, [
		t("div", m, [t("div", null, [t("p", h, a(s.td("settings.preferences.emailNotifications")), 1), t("p", g, a(s.td("settings.preferences.weeklyReports")), 1)]), t("button", {
			type: "button",
			class: "h-6 w-11 rounded-full bg-primary transition-colors",
			"aria-label": s.td("settings.preferences.toggleNotifications")
		}, [...r[0] ||= [t("span", { class: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" }, null, -1)]], 8, _)]),
		t("div", v, [t("div", null, [t("p", y, a(s.td("settings.preferences.darkMode")), 1), t("p", b, a(s.td("settings.preferences.darkColorScheme")), 1)]), t("button", {
			type: "button",
			class: "h-6 w-11 rounded-full bg-muted transition-colors",
			"aria-label": s.td("settings.preferences.toggleDarkMode")
		}, [...r[1] ||= [t("span", { class: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" }, null, -1)]], 8, x)]),
		t("div", null, [t("label", S, a(s.td("settings.preferences.defaultLanguage")), 1), t("select", C, [
			t("option", null, a(s.td("settings.preferences.english")), 1),
			t("option", null, a(s.td("settings.preferences.french")), 1),
			t("option", null, a(s.td("settings.preferences.german")), 1),
			t("option", null, a(s.td("settings.preferences.spanish")), 1),
			t("option", null, a(s.td("settings.preferences.japanese")), 1),
			t("option", null, a(s.td("settings.preferences.chinese")), 1),
			t("option", null, a(s.td("settings.preferences.arabic")), 1)
		])])
	])]);
}
var T = u(l, [["render", w], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/settings/PreferencesSection.vue"]]);
export { T as default };
