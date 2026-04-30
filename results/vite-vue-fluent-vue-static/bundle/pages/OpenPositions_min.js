import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, getCurrentInstance as i, openBlock as a, renderList as o, toDisplayString as s } from "vue";
function c(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function l(e) {
	return e.split(".").map(c).join("-");
}
function u() {
	let e = i()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(l(t), n ?? {});
	} };
}
var d = r({
	__name: "OpenPositions",
	setup(e, { expose: t }) {
		t();
		let { td: n } = u(), r = {
			td: n,
			openings: [
				{
					titleKey: "frontendTitle",
					descKey: "frontendDesc",
					deptKey: "engineering",
					locationKey: "remote",
					typeKey: "fullTime"
				},
				{
					titleKey: "backendTitle",
					descKey: "backendDesc",
					deptKey: "engineering",
					locationKey: "remote",
					typeKey: "fullTime"
				},
				{
					titleKey: "writerTitle",
					descKey: "writerDesc",
					deptKey: "documentation",
					locationKey: "remote",
					typeKey: "partTime"
				},
				{
					titleKey: "devrelTitle",
					descKey: "devrelDesc",
					deptKey: "community",
					locationKey: "sfRemote",
					typeKey: "fullTime"
				},
				{
					titleKey: "qaTitle",
					descKey: "qaDesc",
					deptKey: "engineering",
					locationKey: "remote",
					typeKey: "fullTime"
				}
			]
		};
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), f = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, p = { class: "mb-6 text-2xl font-bold text-foreground" }, m = { class: "space-y-4" }, h = { class: "text-base font-semibold text-foreground" }, g = { class: "text-sm text-muted-foreground" }, _ = { class: "mt-2 flex gap-2" }, v = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" }, y = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" }, b = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" }, x = {
	type: "button",
	class: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
};
function S(r, i, c, l, u, d) {
	return a(), t(e, null, [n("h2", p, s(l.td("careers.openPositions.title")), 1), n("div", m, [(a(), t(e, null, o(l.openings, (e, t) => n("div", {
		key: `${e.titleKey}-${e.locationKey}-${t}`,
		class: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"
	}, [n("div", null, [
		n("h3", h, s(l.td(`careers.openPositions.${e.titleKey}`)), 1),
		n("p", g, s(l.td(`careers.openPositions.${e.descKey}`)), 1),
		n("div", _, [
			n("span", v, s(l.td(`careers.openPositions.${e.deptKey}`)), 1),
			n("span", y, s(l.td(`careers.openPositions.${e.locationKey}`)), 1),
			n("span", b, s(l.td(`careers.openPositions.${e.typeKey}`)), 1)
		])
	]), n("button", x, s(l.td("careers.openPositions.applyNow")), 1)])), 64))])], 64);
}
var C = f(d, [["render", S], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/careers/OpenPositions.vue"]]);
export { C as default };
