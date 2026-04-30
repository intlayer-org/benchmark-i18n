import { createElementBlock as e, createElementVNode as t, defineComponent as n, getCurrentInstance as r, onBeforeMount as i, onMounted as a, openBlock as o, toDisplayString as s } from "vue";
function c(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function l(e) {
	return e.split(".").map(c).join("-");
}
function u() {
	let e = r()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(l(t), n ?? {});
	} };
}
function d(e) {
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
var f = n({
	__name: "TeamHeader",
	setup(e, { expose: t }) {
		t(), d("TeamHeader");
		let { td: n } = u(), r = { td: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), p = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, m = { class: "mb-8 text-center" }, h = { class: "mb-4 text-3xl font-bold text-foreground" }, g = { class: "mx-auto max-w-2xl text-muted-foreground" };
function _(n, r, i, a, c, l) {
	return o(), e("section", m, [t("h1", h, s(a.td("team.header.title")), 1), t("p", g, s(a.td("team.header.description")), 1)]);
}
var v = p(f, [["render", _], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/team/TeamHeader.vue"]]);
export { v as default };
