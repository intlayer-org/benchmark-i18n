import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, onBeforeMount as i, onMounted as a, openBlock as o } from "vue";
function s(e) {
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
var c = r({
	__name: "AboutHeader",
	setup(e, { expose: t }) {
		t(), s("AboutHeader");
		let n = {};
		return Object.defineProperty(n, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), n;
	}
}), l = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
};
function u(r, i, a, s, c, l) {
	return o(), t(e, null, [i[0] ||= n("h1", { class: "mb-4 text-3xl font-bold text-foreground" }, " About This Benchmark ", -1), i[1] ||= n("p", { class: "mb-8 max-w-3xl text-muted-foreground" }, " This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions. ", -1)], 64);
}
var d = l(c, [["render", u], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/about/AboutHeader.vue"]]);
export { d as default };
