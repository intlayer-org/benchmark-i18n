import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, openBlock as a, renderList as o, toDisplayString as s } from "vue";
import { useRoute as c, useRouter as l } from "vue-router";
var u = [
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
], d = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, f = i({
	__name: "LocaleSwitcher",
	setup(e, { expose: n }) {
		n();
		let r = c(), i = l(), a = {
			route: r,
			router: i,
			currentLocale: t(() => r.params.locale || "en"),
			handleLocaleChange: (e) => {
				let t = r.path.replace(/^\/[^/]+/, `/${e}`);
				i.push({
					path: t,
					query: r.query,
					hash: r.hash
				});
			},
			get getLocaleName() {
				return d;
			},
			get locales() {
				return u;
			}
		};
		return Object.defineProperty(a, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), a;
	}
}), p = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, m = { class: "flex items-center gap-2" }, h = ["value"], g = ["value"];
function _(t, i, c, l, u, d) {
	return a(), n("div", m, [r("select", {
		value: l.currentLocale,
		onChange: i[0] ||= (e) => l.handleLocaleChange(e.target.value),
		class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
	}, [(a(!0), n(e, null, o(l.locales, (e) => (a(), n("option", {
		key: e,
		value: e
	}, s(l.getLocaleName(e)), 9, g))), 128))], 40, h)]);
}
var v = p(f, [["render", _], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/LocaleSwitcher.vue"]]);
export { v as default };
