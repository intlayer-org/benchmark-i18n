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
var p = { class: "mb-16" }, m = { class: "mb-6 text-2xl font-bold text-foreground" }, h = { class: "grid gap-6 md:grid-cols-3" }, g = { class: "rounded-lg border border-border bg-card p-6" }, _ = { class: "mb-2 text-lg font-semibold text-foreground" }, v = { class: "text-sm text-muted-foreground" }, y = { class: "rounded-lg border border-border bg-card p-6" }, b = { class: "mb-2 text-lg font-semibold text-foreground" }, x = { class: "text-sm text-muted-foreground" }, S = { class: "rounded-lg border border-border bg-card p-6" }, C = { class: "mb-2 text-lg font-semibold text-foreground" }, w = { class: "text-sm text-muted-foreground" }, T = n({
	__name: "WhyItMatters",
	setup(n) {
		l("WhyItMatters");
		let { td: r } = f();
		return (n, i) => (o(), e("section", p, [t("h2", m, s(c(r)("home.whyItMatters.title")), 1), t("div", h, [
			t("div", g, [t("h3", _, s(c(r)("home.whyItMatters.bundleSizeTitle")), 1), t("p", v, s(c(r)("home.whyItMatters.bundleSizeDesc")), 1)]),
			t("div", y, [t("h3", b, s(c(r)("home.whyItMatters.renderingTitle")), 1), t("p", x, s(c(r)("home.whyItMatters.renderingDesc")), 1)]),
			t("div", S, [t("h3", C, s(c(r)("home.whyItMatters.dynamicLoadingTitle")), 1), t("p", w, s(c(r)("home.whyItMatters.dynamicLoadingDesc")), 1)])
		])]));
	}
});
export { T as default };
