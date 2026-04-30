import { createElementBlock as e, createElementVNode as t, defineComponent as n, getCurrentInstance as r, onBeforeMount as i, onMounted as a, openBlock as o, toDisplayString as s } from "vue";
function c(e) {
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
var f = n({
	__name: "AboutGrid",
	setup(e, { expose: t }) {
		t(), c("AboutGrid");
		let { td: n } = d(), r = { td: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), p = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, m = { class: "grid gap-8 md:grid-cols-2" }, h = { class: "rounded-lg border border-border bg-card p-6" }, g = { class: "mb-3 text-xl font-semibold text-foreground" }, _ = { class: "text-sm text-muted-foreground" }, v = { class: "rounded-lg border border-border bg-card p-6" }, y = { class: "mb-3 text-xl font-semibold text-foreground" }, b = { class: "text-sm text-muted-foreground" };
function x(n, r, i, a, c, l) {
	return o(), e("div", m, [t("div", h, [t("h2", g, s(a.td("about.grid.whyExistsTitle")), 1), t("p", _, s(a.td("about.grid.whyExistsDesc")), 1)]), t("div", v, [t("h2", y, s(a.td("about.grid.methodologyTitle")), 1), t("p", b, s(a.td("about.grid.methodologyDesc")), 1)])]);
}
var S = p(f, [["render", x], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/about/AboutGrid.vue"]]);
export { S as default };
