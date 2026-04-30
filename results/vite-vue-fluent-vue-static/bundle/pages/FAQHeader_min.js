import { createElementBlock as e, createElementVNode as t, defineComponent as n, getCurrentInstance as r, onBeforeMount as i, onMounted as a, openBlock as o, toDisplayString as s, unref as c } from "vue";
function l(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function u(e) {
	return e.split(".").map(l).join("-");
}
function d() {
	let e = r()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(u(t), n ?? {});
	} };
}
function f(e) {
	i(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), a(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var p = { class: "mb-8 text-center" }, m = { class: "mb-4 text-3xl font-bold text-foreground" }, h = { class: "mx-auto max-w-2xl text-muted-foreground" }, g = n({
	__name: "FAQHeader",
	setup(n) {
		f("FAQHeader");
		let { td: r } = d();
		return (n, i) => (o(), e("section", p, [t("h1", m, s(c(r)("faq.header.title")), 1), t("p", h, s(c(r)("faq.header.description")), 1)]));
	}
});
export { g as default };
