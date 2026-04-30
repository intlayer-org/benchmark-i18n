import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, getCurrentInstance as i, openBlock as a, renderList as o, toDisplayString as s, unref as c, withModifiers as l } from "vue";
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
var p = { class: "grid gap-4 md:grid-cols-2" }, m = {
	for: "name",
	class: "mb-1 block text-sm font-medium text-foreground"
}, h = ["placeholder"], g = {
	for: "email",
	class: "mb-1 block text-sm font-medium text-foreground"
}, _ = ["placeholder"], v = {
	for: "topic",
	class: "mb-1 block text-sm font-medium text-foreground"
}, y = {
	id: "topic",
	class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
}, b = ["value"], x = {
	for: "message",
	class: "mb-1 block text-sm font-medium text-foreground"
}, S = ["placeholder"], C = {
	type: "submit",
	class: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
}, w = r({
	__name: "ContactForm",
	setup(r) {
		let { td: i } = f(), u = [
			"bugReport",
			"newBenchmarkIdea",
			"methodologyQuestion",
			"contribution",
			"other"
		];
		return (r, d) => (a(), t("form", {
			class: "space-y-6",
			onSubmit: d[0] ||= l(() => {}, ["prevent"])
		}, [
			n("div", p, [n("div", null, [n("label", m, s(c(i)("contact.form.name")), 1), n("input", {
				id: "name",
				class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: c(i)("contact.form.yourName")
			}, null, 8, h)]), n("div", null, [n("label", g, s(c(i)("contact.form.email")), 1), n("input", {
				id: "email",
				type: "email",
				class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: c(i)("contact.form.emailPlaceholder")
			}, null, 8, _)])]),
			n("div", null, [n("label", v, s(c(i)("contact.form.topic")), 1), n("select", y, [(a(), t(e, null, o(u, (e) => n("option", {
				key: e,
				value: e
			}, s(c(i)(`contact.form.${e}`)), 9, b)), 64))])]),
			n("div", null, [n("label", x, s(c(i)("contact.form.message")), 1), n("textarea", {
				id: "message",
				rows: "5",
				class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: c(i)("contact.form.messagePlaceholder")
			}, null, 8, S)]),
			n("button", C, s(c(i)("contact.form.sendMessage")), 1)
		], 32));
	}
});
export { w as default };
