import { createElementBlock as e, defineComponent as t, getCurrentInstance as n, openBlock as r, toDisplayString as i, unref as a } from "vue";
function o(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function s(e) {
	return e.split(".").map(o).join("-");
}
function c() {
	let e = n()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(s(t), n ?? {});
	} };
}
var l = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" }, u = t({
	__name: "MockBanner",
	setup(t) {
		let { td: n } = c();
		return (t, o) => (r(), e("div", l, i(a(n)("mockBanner")), 1));
	}
});
export { u as default };
