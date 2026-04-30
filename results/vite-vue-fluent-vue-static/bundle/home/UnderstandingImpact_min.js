import { createElementBlock as e, createElementVNode as t, createTextVNode as n, defineComponent as r, getCurrentInstance as i, onBeforeMount as a, onMounted as o, openBlock as s, toDisplayString as c, unref as l } from "vue";
function u(e) {
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
function d(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function f(e) {
	return e.split(".").map(d).join("-");
}
function p() {
	let e = i()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(f(t), n ?? {});
	} };
}
var m = { class: "mb-16 mx-auto max-w-3xl space-y-6" }, h = { class: "text-2xl font-bold text-foreground" }, g = { class: "rounded-lg border border-border bg-card p-6" }, _ = { class: "mb-2 text-lg font-semibold text-foreground" }, v = { class: "text-sm text-muted-foreground" }, y = { class: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5" }, b = { class: "rounded-lg border border-border bg-card p-6" }, x = { class: "mb-2 text-lg font-semibold text-foreground" }, S = { class: "text-sm text-muted-foreground" }, C = { class: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5" }, w = { class: "text-foreground" }, T = { class: "text-foreground" }, E = { class: "text-foreground" }, D = { class: "rounded-lg border border-border bg-card p-6" }, O = { class: "mb-2 text-lg font-semibold text-foreground" }, k = { class: "text-sm text-muted-foreground" }, A = r({
	__name: "UnderstandingImpact",
	setup(r) {
		u("UnderstandingImpact");
		let { td: i } = p();
		return (r, a) => (s(), e("section", m, [
			t("h2", h, c(l(i)("home.understandingImpact.title")), 1),
			t("div", g, [
				t("h3", _, c(l(i)("home.understandingImpact.singleJsonTitle")), 1),
				t("p", v, c(l(i)("home.understandingImpact.singleJsonIntro")), 1),
				t("ul", y, [
					t("li", null, c(l(i)("home.understandingImpact.singleJsonBullet1")), 1),
					t("li", null, c(l(i)("home.understandingImpact.singleJsonBullet2")), 1),
					t("li", null, c(l(i)("home.understandingImpact.singleJsonBullet3")), 1)
				])
			]),
			t("div", b, [
				t("h3", x, c(l(i)("home.understandingImpact.tradeOffsTitle")), 1),
				t("p", S, c(l(i)("home.understandingImpact.tradeOffsIntro")), 1),
				t("ul", C, [
					t("li", null, [t("strong", w, c(l(i)("home.understandingImpact.waterfallLabel")), 1), n(" " + c(l(i)("home.understandingImpact.waterfallDesc")), 1)]),
					t("li", null, [t("strong", T, c(l(i)("home.understandingImpact.foucLabel")), 1), n(" " + c(l(i)("home.understandingImpact.foucDesc")), 1)]),
					t("li", null, [t("strong", E, c(l(i)("home.understandingImpact.cacheLabel")), 1), n(" " + c(l(i)("home.understandingImpact.cacheDesc")), 1)])
				])
			]),
			t("div", D, [t("h3", O, c(l(i)("home.understandingImpact.measuresTitle")), 1), t("p", k, c(l(i)("home.understandingImpact.measuresDesc")), 1)])
		]));
	}
});
export { A as default };
