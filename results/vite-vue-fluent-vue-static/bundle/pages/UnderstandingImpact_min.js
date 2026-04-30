import { createElementBlock as e, createElementVNode as t, createTextVNode as n, defineComponent as r, getCurrentInstance as i, onBeforeMount as a, onMounted as o, openBlock as s, toDisplayString as c } from "vue";
function l(e) {
	a(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), o(() => {
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
	let e = i()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(d(t), n ?? {});
	} };
}
var p = r({
	__name: "UnderstandingImpact",
	setup(e, { expose: t }) {
		t(), l("UnderstandingImpact");
		let { td: n } = f(), r = { td: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), m = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, h = { class: "mb-16 mx-auto max-w-3xl space-y-6" }, g = { class: "text-2xl font-bold text-foreground" }, _ = { class: "rounded-lg border border-border bg-card p-6" }, v = { class: "mb-2 text-lg font-semibold text-foreground" }, y = { class: "text-sm text-muted-foreground" }, b = { class: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5" }, x = { class: "rounded-lg border border-border bg-card p-6" }, S = { class: "mb-2 text-lg font-semibold text-foreground" }, C = { class: "text-sm text-muted-foreground" }, w = { class: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5" }, T = { class: "text-foreground" }, E = { class: "text-foreground" }, D = { class: "text-foreground" }, O = { class: "rounded-lg border border-border bg-card p-6" }, k = { class: "mb-2 text-lg font-semibold text-foreground" }, A = { class: "text-sm text-muted-foreground" };
function j(r, i, a, o, l, u) {
	return s(), e("section", h, [
		t("h2", g, c(o.td("home.understandingImpact.title")), 1),
		t("div", _, [
			t("h3", v, c(o.td("home.understandingImpact.singleJsonTitle")), 1),
			t("p", y, c(o.td("home.understandingImpact.singleJsonIntro")), 1),
			t("ul", b, [
				t("li", null, c(o.td("home.understandingImpact.singleJsonBullet1")), 1),
				t("li", null, c(o.td("home.understandingImpact.singleJsonBullet2")), 1),
				t("li", null, c(o.td("home.understandingImpact.singleJsonBullet3")), 1)
			])
		]),
		t("div", x, [
			t("h3", S, c(o.td("home.understandingImpact.tradeOffsTitle")), 1),
			t("p", C, c(o.td("home.understandingImpact.tradeOffsIntro")), 1),
			t("ul", w, [
				t("li", null, [t("strong", T, c(o.td("home.understandingImpact.waterfallLabel")), 1), n(" " + c(o.td("home.understandingImpact.waterfallDesc")), 1)]),
				t("li", null, [t("strong", E, c(o.td("home.understandingImpact.foucLabel")), 1), n(" " + c(o.td("home.understandingImpact.foucDesc")), 1)]),
				t("li", null, [t("strong", D, c(o.td("home.understandingImpact.cacheLabel")), 1), n(" " + c(o.td("home.understandingImpact.cacheDesc")), 1)])
			])
		]),
		t("div", O, [t("h3", k, c(o.td("home.understandingImpact.measuresTitle")), 1), t("p", A, c(o.td("home.understandingImpact.measuresDesc")), 1)])
	]);
}
var M = m(p, [["render", j], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/home/UnderstandingImpact.vue"]]);
export { M as default };
