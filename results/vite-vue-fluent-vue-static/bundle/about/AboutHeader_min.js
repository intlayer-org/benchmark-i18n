import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, getCurrentInstance as i, onBeforeMount as a, onMounted as o, openBlock as s, toDisplayString as c } from "vue";
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
	__name: "AboutHeader",
	setup(e, { expose: t }) {
		t(), l("AboutHeader");
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
}, h = { class: "mb-4 text-3xl font-bold text-foreground" }, g = { class: "mb-8 max-w-3xl text-muted-foreground" };
function _(r, i, a, o, l, u) {
	return s(), t(e, null, [n("h1", h, c(o.td("about.header.title")), 1), n("p", g, c(o.td("about.header.description")), 1)], 64);
}
var v = m(p, [["render", _], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/about/AboutHeader.vue"]]);
export { v as default };
