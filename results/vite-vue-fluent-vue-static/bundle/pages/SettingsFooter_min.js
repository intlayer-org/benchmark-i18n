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
	__name: "SettingsFooter",
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
}, d = { class: "flex justify-end gap-3" }, f = {
	type: "button",
	class: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
}, p = {
	type: "submit",
	class: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
};
function m(n, r, o, s, c, l) {
	return i(), e("div", d, [t("button", f, a(s.td("settings.footer.cancel")), 1), t("button", p, a(s.td("settings.footer.saveChanges")), 1)]);
}
var h = u(l, [["render", m], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/settings/SettingsFooter.vue"]]);
export { h as default };
