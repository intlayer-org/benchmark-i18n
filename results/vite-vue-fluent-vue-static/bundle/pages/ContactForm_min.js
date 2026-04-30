import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, getCurrentInstance as i, openBlock as a, renderList as o, toDisplayString as s, withModifiers as c } from "vue";
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
var f = r({
	__name: "ContactForm",
	setup(e, { expose: t }) {
		t();
		let { td: n } = d(), r = {
			td: n,
			topics: [
				"bugReport",
				"newBenchmarkIdea",
				"methodologyQuestion",
				"contribution",
				"other"
			]
		};
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), p = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, m = { class: "grid gap-4 md:grid-cols-2" }, h = {
	for: "name",
	class: "mb-1 block text-sm font-medium text-foreground"
}, g = ["placeholder"], _ = {
	for: "email",
	class: "mb-1 block text-sm font-medium text-foreground"
}, v = ["placeholder"], y = {
	for: "topic",
	class: "mb-1 block text-sm font-medium text-foreground"
}, b = {
	id: "topic",
	class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
}, x = ["value"], S = {
	for: "message",
	class: "mb-1 block text-sm font-medium text-foreground"
}, C = ["placeholder"], w = {
	type: "submit",
	class: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
};
function T(r, i, l, u, d, f) {
	return a(), t("form", {
		class: "space-y-6",
		onSubmit: i[0] ||= c(() => {}, ["prevent"])
	}, [
		n("div", m, [n("div", null, [n("label", h, s(u.td("contact.form.name")), 1), n("input", {
			id: "name",
			class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
			placeholder: u.td("contact.form.yourName")
		}, null, 8, g)]), n("div", null, [n("label", _, s(u.td("contact.form.email")), 1), n("input", {
			id: "email",
			type: "email",
			class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
			placeholder: u.td("contact.form.emailPlaceholder")
		}, null, 8, v)])]),
		n("div", null, [n("label", y, s(u.td("contact.form.topic")), 1), n("select", b, [(a(), t(e, null, o(u.topics, (e) => n("option", {
			key: e,
			value: e
		}, s(u.td(`contact.form.${e}`)), 9, x)), 64))])]),
		n("div", null, [n("label", S, s(u.td("contact.form.message")), 1), n("textarea", {
			id: "message",
			rows: "5",
			class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
			placeholder: u.td("contact.form.messagePlaceholder")
		}, null, 8, C)]),
		n("button", w, s(u.td("contact.form.sendMessage")), 1)
	], 32);
}
var E = p(f, [["render", T], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/contact/ContactForm.vue"]]);
export { E as default };
