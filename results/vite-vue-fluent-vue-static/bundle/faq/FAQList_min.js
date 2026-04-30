import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, getCurrentInstance as i, openBlock as a, renderList as o, toDisplayString as s, unref as c } from "vue";
function l(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function u(e) {
	return e.split(".").map(l).join("-");
}
function d() {
	let e = i()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(u(t), n ?? {});
	} };
}
var f = { class: "mx-auto max-w-3xl space-y-4" }, p = { class: "cursor-pointer px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/50" }, m = { class: "px-6 pb-4 text-sm text-muted-foreground" }, h = r({
	__name: "FAQList",
	setup(r) {
		let { td: i } = d(), l = [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8
		].map((e) => ({
			q: i(`faq.list.q${e}`),
			a: i(`faq.list.a${e}`)
		}));
		return (r, i) => (a(), t("div", f, [(a(!0), t(e, null, o(c(l), (e, r) => (a(), t("details", {
			key: r,
			class: "group rounded-lg border border-border bg-card"
		}, [n("summary", p, s(e.q), 1), n("p", m, s(e.a), 1)]))), 128))]));
	}
});
export { h as default };
