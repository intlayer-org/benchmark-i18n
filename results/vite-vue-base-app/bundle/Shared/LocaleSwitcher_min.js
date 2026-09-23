import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, openBlock as a, renderList as o, toDisplayString as s, unref as c } from "vue";
import { useRoute as l, useRouter as u } from "vue-router";
var d = [
	"en",
	"fr",
	"es",
	"de",
	"it",
	"pt",
	"zh",
	"ja",
	"ko",
	"ru"
], f = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, p = { class: "flex items-center gap-2" }, m = ["value"], h = ["value"], g = i({
	__name: "LocaleSwitcher",
	setup(i) {
		let g = l(), _ = u(), v = t(() => g.params.locale || "en"), y = (e) => {
			let t = g.path.replace(/^\/[^/]+/, `/${e}`);
			_.push({
				path: t,
				query: g.query,
				hash: g.hash
			});
		};
		return (t, i) => (a(), n("div", p, [r("select", {
			value: v.value,
			onChange: i[0] ||= (e) => y(e.target.value),
			class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
		}, [(a(!0), n(e, null, o(c(d), (e) => (a(), n("option", {
			key: e,
			value: e
		}, s(c(f)(e)), 9, h))), 128))], 40, m)]));
	}
});
export { g as default };
