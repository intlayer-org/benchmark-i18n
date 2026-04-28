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
	setup(r) {
		return s("AboutHeader"), (r, i) => (o(), t(e, null, [i[0] ||= n("h1", { class: "mb-4 text-3xl font-bold text-foreground" }, " About This Benchmark ", -1), i[1] ||= n("p", { class: "mb-8 max-w-3xl text-muted-foreground" }, " This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions. ", -1)], 64));
	}
});
export { c as default };
