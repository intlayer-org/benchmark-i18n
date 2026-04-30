import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, getCurrentInstance as i, openBlock as a, renderList as o, toDisplayString as s, unref as c } from "vue";
function l(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function u(e) {
	return e.split(".").map(l).join("-");
}
function d() {
	let e = i()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(u(t), n ?? {});
	} };
}
var f = { class: "mb-6 text-2xl font-bold text-foreground" }, p = { class: "space-y-4" }, m = { class: "text-base font-semibold text-foreground" }, h = { class: "text-sm text-muted-foreground" }, g = { class: "mt-2 flex gap-2" }, _ = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" }, v = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" }, y = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" }, b = {
	type: "button",
	class: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
}, x = r({
	__name: "OpenPositions",
	setup(r) {
		let { td: i } = d(), l = [
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
		];
		return (r, u) => (a(), t(e, null, [n("h2", f, s(c(i)("careers.openPositions.title")), 1), n("div", p, [(a(), t(e, null, o(l, (e, t) => n("div", {
			key: `${e.titleKey}-${e.locationKey}-${t}`,
			class: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"
		}, [n("div", null, [
			n("h3", m, s(c(i)(`careers.openPositions.${e.titleKey}`)), 1),
			n("p", h, s(c(i)(`careers.openPositions.${e.descKey}`)), 1),
			n("div", g, [
				n("span", _, s(c(i)(`careers.openPositions.${e.deptKey}`)), 1),
				n("span", v, s(c(i)(`careers.openPositions.${e.locationKey}`)), 1),
				n("span", y, s(c(i)(`careers.openPositions.${e.typeKey}`)), 1)
			])
		]), n("button", b, s(c(i)("careers.openPositions.applyNow")), 1)])), 64))])], 64));
	}
});
export { x as default };
