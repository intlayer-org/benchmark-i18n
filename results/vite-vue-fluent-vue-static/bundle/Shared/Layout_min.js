import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createTextVNode as o, createVNode as s, defineComponent as c, getCurrentInstance as l, normalizeClass as u, onBeforeMount as d, onMounted as f, onUnmounted as p, openBlock as m, ref as h, renderList as g, resolveComponent as _, toDisplayString as v, watch as y, withCtx as b } from "vue";
import { useRoute as x, useRouter as ee } from "vue-router";
import { ChevronDown as S } from "lucide-vue-next";
function C() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function w(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function T(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function E(e) {
	return e.split(".").map(T).join("-");
}
function D() {
	let e = l()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(E(t), n ?? {});
	} };
}
var O = c({
	__name: "Footer",
	setup(e, { expose: n }) {
		n();
		let { td: r } = D(), i = x(), a = t(() => i.params.locale || "en"), o = {
			td: r,
			route: i,
			currentLocale: a,
			footerLinks: t(() => [
				{
					label: r("footer.github"),
					href: "https://github.com/intlayer-org/benchmark-i18n",
					isInternal: !1
				},
				{
					label: r("footer.methodology"),
					to: `/${a.value}/about`,
					isInternal: !0
				},
				{
					label: r("footer.contributing"),
					to: `/${a.value}/contact`,
					isInternal: !0
				}
			])
		};
		return Object.defineProperty(o, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), o;
	}
}), k = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, A = { class: "mt-20 border-t border-border bg-card" }, j = { class: "container py-8" }, M = { class: "grid gap-8 md:grid-cols-3" }, N = { class: "mb-2 text-sm font-semibold text-foreground" }, P = { class: "text-sm text-muted-foreground" }, F = { class: "mb-2 text-sm font-semibold text-foreground" }, I = { class: "space-y-1" }, L = ["href"], R = { class: "mb-2 text-sm font-semibold text-foreground" }, z = { class: "text-sm text-muted-foreground" }, B = { class: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground" };
function V(t, r, s, c, l, u) {
	let d = _("router-link");
	return m(), i("footer", A, [a("div", j, [a("div", M, [
		a("div", null, [a("h3", N, v(c.td("footer.title")), 1), a("p", P, v(c.td("footer.description")), 1)]),
		a("div", null, [a("h3", F, v(c.td("footer.resources")), 1), a("ul", I, [(m(!0), i(e, null, g(c.footerLinks, (e) => (m(), i("li", { key: e.label }, [e.isInternal ? (m(), n(d, {
			key: 0,
			to: e.to,
			class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
		}, {
			default: b(() => [o(v(e.label), 1)]),
			_: 2
		}, 1032, ["to"])) : (m(), i("a", {
			key: 1,
			href: e.href,
			target: "_blank",
			rel: "noreferrer",
			class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
		}, v(e.label), 9, L))]))), 128))])]),
		a("div", null, [a("h3", R, v(c.td("footer.contact")), 1), a("p", z, v(c.td("shared.contactEmail")), 1)])
	]), a("div", B, v(c.td("footer.builtWith")), 1)])]);
}
var H = k(O, [["render", V], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/Footer.vue"]]);
function U(e) {
	d(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), f(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var W = [
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
], G = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, te = c({
	__name: "LocaleSwitcher",
	setup(e, { expose: n }) {
		n();
		let r = x(), i = ee(), a = {
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
				return G;
			},
			get locales() {
				return W;
			}
		};
		return Object.defineProperty(a, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), a;
	}
}), K = { class: "flex items-center gap-2" }, q = ["value"], J = ["value"];
function Y(t, n, r, o, s, c) {
	return m(), i("div", K, [a("select", {
		value: o.currentLocale,
		onChange: n[0] ||= (e) => o.handleLocaleChange(e.target.value),
		class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
	}, [(m(!0), i(e, null, g(o.locales, (e) => (m(), i("option", {
		key: e,
		value: e
	}, v(o.getLocaleName(e)), 9, J))), 128))], 40, q)]);
}
var X = k(te, [["render", Y], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/LocaleSwitcher.vue"]]), Z = c({
	__name: "ThemeToggle",
	setup(e, { expose: t }) {
		t();
		let { td: n } = D(), r = h("auto");
		function i() {
			if (typeof window > "u") return "auto";
			let e = window.localStorage.getItem("theme");
			return e === "light" || e === "dark" || e === "auto" ? e : "auto";
		}
		function a(e) {
			let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
			document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
		}
		f(() => {
			let e = i();
			r.value = e, a(e);
		});
		let o = null;
		y(r, (e) => {
			if (e === "auto") {
				let e = window.matchMedia("(prefers-color-scheme: dark)");
				o = () => a("auto"), e.addEventListener("change", o);
			} else o &&= (window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", o), null);
		}, { immediate: !0 }), p(() => {
			o && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", o);
		});
		function s() {
			let e = r.value === "light" ? "dark" : r.value === "dark" ? "auto" : "light";
			r.value = e, a(e), window.localStorage.setItem("theme", e);
		}
		let c = {
			td: n,
			mode: r,
			getInitialMode: i,
			applyThemeMode: a,
			get mediaQueryListener() {
				return o;
			},
			set mediaQueryListener(e) {
				o = e;
			},
			toggleMode: s,
			getLabel: () => r.value === "auto" ? n("themeToggle.labelAuto") : n("themeToggle.labelOther", { mode: r.value })
		};
		return Object.defineProperty(c, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), c;
	}
}), Q = ["aria-label", "title"];
function ne(e, t, n, r, a, o) {
	return m(), i("button", {
		type: "button",
		onClick: r.toggleMode,
		"aria-label": r.getLabel(),
		title: r.getLabel(),
		class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
	}, v(r.mode === "auto" ? r.td("themeToggle.auto") : r.mode === "dark" ? r.td("themeToggle.dark") : r.td("themeToggle.light")), 9, Q);
}
var re = k(Z, [["render", ne], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/ThemeToggle.vue"]]), ie = c({
	__name: "Header",
	setup(e, { expose: n }) {
		n(), U("Header");
		let { td: r } = D(), i = h(!1), a = x(), o = t(() => a.params.locale || "en"), s = {
			td: r,
			isMockPagesOpen: i,
			route: a,
			currentLocale: o,
			mockPages: t(() => [
				{
					to: `/${o.value}/products`,
					label: r("header.products")
				},
				{
					to: `/${o.value}/pricing`,
					label: r("header.pricing")
				},
				{
					to: `/${o.value}/team`,
					label: r("header.team")
				},
				{
					to: `/${o.value}/blog`,
					label: r("header.blog")
				},
				{
					to: `/${o.value}/careers`,
					label: r("header.careers")
				},
				{
					to: `/${o.value}/faq`,
					label: r("header.faq")
				},
				{
					to: `/${o.value}/contact`,
					label: r("header.contact")
				},
				{
					to: `/${o.value}/settings`,
					label: r("header.settings")
				}
			]),
			get ChevronDown() {
				return S;
			},
			LocaleSwitcher: X,
			ThemeToggle: re
		};
		return Object.defineProperty(s, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), s;
	}
}), ae = { class: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg" }, oe = { class: "container flex h-16 items-center justify-between" }, se = { class: "flex items-center gap-8" }, ce = { class: "hidden items-center gap-6 text-sm font-medium md:flex" }, le = { class: "relative" }, ue = { class: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1" }, de = { class: "flex items-center gap-4" }, fe = {
	href: "https://github.com/intlayer-org/benchmark-i18n",
	target: "_blank",
	rel: "noreferrer",
	class: "text-muted-foreground transition hover:text-foreground"
}, pe = { class: "sr-only" };
function $(t, c, l, d, f, p) {
	let h = _("router-link");
	return m(), i("header", ae, [a("nav", oe, [a("div", se, [s(h, {
		to: `/${d.currentLocale}`,
		class: "text-lg font-bold tracking-tight text-primary no-underline"
	}, {
		default: b(() => [o(v(d.td("shared.appName")), 1)]),
		_: 1
	}, 8, ["to"]), a("div", ce, [
		s(h, {
			to: `/${d.currentLocale}`,
			class: "nav-link",
			"exact-active-class": "is-active"
		}, {
			default: b(() => [o(v(d.td("header.home")), 1)]),
			_: 1
		}, 8, ["to"]),
		s(h, {
			to: `/${d.currentLocale}/about`,
			class: "nav-link",
			"active-class": "is-active"
		}, {
			default: b(() => [o(v(d.td("header.methodology")), 1)]),
			_: 1
		}, 8, ["to"]),
		a("div", le, [a("button", {
			type: "button",
			class: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
			onMouseenter: c[0] ||= (e) => d.isMockPagesOpen = !0,
			onMouseleave: c[1] ||= (e) => d.isMockPagesOpen = !1,
			onClick: c[2] ||= (e) => d.isMockPagesOpen = !d.isMockPagesOpen
		}, [o(v(d.td("header.mockPages")) + " ", 1), s(d.ChevronDown, {
			size: 14,
			class: u(["transition-transform", d.isMockPagesOpen ? "rotate-180" : ""])
		}, null, 8, ["class"])], 32), d.isMockPagesOpen ? (m(), i("div", {
			key: 0,
			class: "absolute left-0 top-full pt-2 w-48",
			onMouseenter: c[4] ||= (e) => d.isMockPagesOpen = !0,
			onMouseleave: c[5] ||= (e) => d.isMockPagesOpen = !1
		}, [a("div", ue, [(m(!0), i(e, null, g(d.mockPages, (e) => (m(), n(h, {
			key: e.to,
			to: e.to,
			class: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
			onClick: c[3] ||= (e) => d.isMockPagesOpen = !1
		}, {
			default: b(() => [o(v(e.label), 1)]),
			_: 2
		}, 1032, ["to"]))), 128))])], 32)) : r("v-if", !0)])
	])]), a("div", de, [
		a("a", fe, [a("span", pe, v(d.td("shared.goToGithub")), 1), c[6] ||= a("svg", {
			viewBox: "0 0 16 16",
			"aria-hidden": "true",
			width: "20",
			height: "20"
		}, [a("path", {
			fill: "currentColor",
			d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
		})], -1)]),
		s(d.LocaleSwitcher),
		s(d.ThemeToggle)
	])])]);
}
var me = k(ie, [["render", $], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/Header.vue"]]), he = c({
	__name: "Layout",
	setup(e, { expose: t }) {
		t();
		let n = x(), r = h(0);
		d(() => {
			r.value = typeof performance < "u" ? performance.now() : 0;
		}), f(() => {
			C(), w("AppRoot", r.value);
		}), y(() => n.params.locale, (e) => {
			e && (document.documentElement.lang = e);
		}, { immediate: !0 });
		let i = {
			route: n,
			renderStart: r,
			Footer: H,
			Header: me
		};
		return Object.defineProperty(i, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), i;
	}
});
function ge(t, n, r, a, o, c) {
	let l = _("router-view");
	return m(), i(e, null, [
		s(a.Header),
		s(l),
		s(a.Footer)
	], 64);
}
var _e = k(he, [["render", ge], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/Layout.vue"]]);
export { _e as default };
