import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { derived as t, get as n, writable as r } from "svelte/store";
var i = [
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
];
function a(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function o(e) {
	return i.includes(e);
}
var s = /* @__PURE__ */ new Set([
	"",
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"pricing",
	"products",
	"settings",
	"team"
]);
function c(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!o(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !s.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var l = r(typeof window < "u" ? window.location.pathname : "/en");
t(l, (e) => c(e));
function u(e, t = !1) {
	typeof window > "u" || (t ? history.replaceState(null, "", e) : history.pushState(null, "", e), l.set(window.location.pathname));
}
var d = {
	locales: [
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
	],
	requiredLocales: [
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
	],
	strictMode: "inclusive",
	defaultLocale: "en"
}, f = d.locales;
d.requiredLocales, d.defaultLocale;
var p = e.from_html("<option> </option>"), m = e.from_html("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none\"></select></div>");
function h(t, r) {
	e.push(r, !1);
	let i = () => e.store_get(l, "$pathname", o), [o, s] = e.setup_stores();
	function c(e) {
		let t = e.target.value;
		u(n(l).replace(/^\/[^/]+/, `/${t}`) + window.location.search + window.location.hash, !1);
	}
	e.init();
	var d = m(), h = e.child(d);
	e.each(h, 5, () => f, (e) => e, (t, n) => {
		var r = p(), i = e.only_child(r, !0), o = {};
		e.template_effect((t) => {
			e.set_text(i, t), o !== (o = e.get(n)) && (r.value = (r.__value = o) ?? "");
		}, [() => a(e.get(n))]), e.append(t, r);
	}), e.reset(h);
	var g;
	e.init_select(h), e.reset(d), e.template_effect((t) => {
		g !== (g = t) && (h.value = (h.__value = g) ?? "", e.select_option(h, g));
	}, [() => i().split("/").filter(Boolean)[0] ?? "en"]), e.delegated("change", h, c), e.append(t, d), e.pop(), s();
}
e.delegate(["change"]);
export { h as default };
