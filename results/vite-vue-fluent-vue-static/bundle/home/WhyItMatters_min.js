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
	__name: "WhyItMatters",
	setup(e, { expose: t }) {
		t(), c("WhyItMatters");
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
}, m = { class: "mb-16" }, h = { class: "mb-6 text-2xl font-bold text-foreground" }, g = { class: "grid gap-6 md:grid-cols-3" }, _ = { class: "rounded-lg border border-border bg-card p-6" }, v = { class: "mb-2 text-lg font-semibold text-foreground" }, y = { class: "text-sm text-muted-foreground" }, b = { class: "rounded-lg border border-border bg-card p-6" }, x = { class: "mb-2 text-lg font-semibold text-foreground" }, S = { class: "text-sm text-muted-foreground" }, C = { class: "rounded-lg border border-border bg-card p-6" }, w = { class: "mb-2 text-lg font-semibold text-foreground" }, T = { class: "text-sm text-muted-foreground" };
function E(n, r, i, a, c, l) {
	return o(), e("section", m, [t("h2", h, s(a.td("home.whyItMatters.title")), 1), t("div", g, [
		t("div", _, [t("h3", v, s(a.td("home.whyItMatters.bundleSizeTitle")), 1), t("p", y, s(a.td("home.whyItMatters.bundleSizeDesc")), 1)]),
		t("div", b, [t("h3", x, s(a.td("home.whyItMatters.renderingTitle")), 1), t("p", S, s(a.td("home.whyItMatters.renderingDesc")), 1)]),
		t("div", C, [t("h3", w, s(a.td("home.whyItMatters.dynamicLoadingTitle")), 1), t("p", T, s(a.td("home.whyItMatters.dynamicLoadingDesc")), 1)])
	])]);
}
var D = p(f, [["render", E], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/home/WhyItMatters.vue"]]);
export { D as default };
