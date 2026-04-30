import { createElementBlock as e, createElementVNode as t, defineComponent as n, getCurrentInstance as r, onBeforeMount as i, onMounted as a, openBlock as o, toDisplayString as s, unref as c } from "vue";
function l(e) {
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
function u(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function d(e) {
	return e.split(".").map(u).join("-");
}
function f() {
	let e = r()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(d(t), n ?? {});
	} };
}
var p = { class: "grid gap-8 md:grid-cols-2" }, m = { class: "rounded-lg border border-border bg-card p-6" }, h = { class: "mb-3 text-xl font-semibold text-foreground" }, g = { class: "text-sm text-muted-foreground" }, _ = { class: "rounded-lg border border-border bg-card p-6" }, v = { class: "mb-3 text-xl font-semibold text-foreground" }, y = { class: "text-sm text-muted-foreground" }, b = n({
	__name: "AboutGrid",
	setup(n) {
		l("AboutGrid");
		let { td: r } = f();
		return (n, i) => (o(), e("div", p, [t("div", m, [t("h2", h, s(c(r)("about.grid.whyExistsTitle")), 1), t("p", g, s(c(r)("about.grid.whyExistsDesc")), 1)]), t("div", _, [t("h2", v, s(c(r)("about.grid.methodologyTitle")), 1), t("p", y, s(c(r)("about.grid.methodologyDesc")), 1)])]));
	}
});
export { b as default };
