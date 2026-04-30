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
var u = { class: "flex justify-end gap-3" }, d = {
	type: "button",
	class: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
}, f = {
	type: "submit",
	class: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
}, p = n({
	__name: "SettingsFooter",
	setup(n) {
		let { td: r } = l();
		return (n, s) => (i(), e("div", u, [t("button", d, a(o(r)("settings.footer.cancel")), 1), t("button", f, a(o(r)("settings.footer.saveChanges")), 1)]));
	}
});
export { p as default };
