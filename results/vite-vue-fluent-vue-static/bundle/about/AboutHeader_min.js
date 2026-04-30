import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, getCurrentInstance as i, onBeforeMount as a, onMounted as o, openBlock as s, toDisplayString as c, unref as l } from "vue";
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
var m = { class: "mb-4 text-3xl font-bold text-foreground" }, h = { class: "mb-8 max-w-3xl text-muted-foreground" }, g = r({
	__name: "AboutHeader",
	setup(r) {
		u("AboutHeader");
		let { td: i } = p();
		return (r, a) => (s(), t(e, null, [n("h1", m, c(l(i)("about.header.title")), 1), n("p", h, c(l(i)("about.header.description")), 1)], 64));
	}
});
export { g as default };
