import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createTextVNode as o, createVNode as s, defineComponent as c, normalizeClass as l, onBeforeMount as u, onMounted as d, onUnmounted as f, openBlock as p, ref as m, renderList as h, resolveComponent as g, toDisplayString as _, watch as v, withCtx as y } from "vue";
import { useRoute as b, useRouter as x } from "vue-router";
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
var T = c({
	__name: "Footer",
	setup(e, { expose: n }) {
		n();
		let r = b(), i = t(() => r.params.locale || "en"), a = {
			route: r,
			currentLocale: i,
			footerLinks: t(() => [
				{
					label: "GitHub",
					href: "https://github.com/intlayer-org/benchmark-i18n",
					isInternal: !1
				},
				{
					label: "Methodology",
					to: `/${i.value}/about`,
					isInternal: !0
				},
				{
					label: "Contributing",
					to: `/${i.value}/contact`,
					isInternal: !0
				}
			])
		};
		return Object.defineProperty(a, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), a;
	}
}), E = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, D = { class: "mt-20 border-t border-border bg-card" }, O = { class: "container py-8" }, k = { class: "grid gap-8 md:grid-cols-3" }, A = { class: "space-y-1" }, j = ["href"];
function M(t, r, s, c, l, u) {
	let d = g("router-link");
	return p(), i("footer", D, [a("div", O, [a("div", k, [
		r[1] ||= a("div", null, [a("h3", { class: "mb-2 text-sm font-semibold text-foreground" }, " i18n Benchmark "), a("p", { class: "text-sm text-muted-foreground" }, " An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity. ")], -1),
		a("div", null, [r[0] ||= a("h3", { class: "mb-2 text-sm font-semibold text-foreground" }, " Resources ", -1), a("ul", A, [(p(!0), i(e, null, h(c.footerLinks, (e) => (p(), i("li", { key: e.label }, [e.isInternal ? (p(), n(d, {
			key: 0,
			to: e.to,
			class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
		}, {
			default: y(() => [o(_(e.label), 1)]),
			_: 2
		}, 1032, ["to"])) : (p(), i("a", {
			key: 1,
			href: e.href,
			target: "_blank",
			rel: "noreferrer",
			class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
		}, _(e.label), 9, j))]))), 128))])]),
		r[2] ||= a("div", null, [a("h3", { class: "mb-2 text-sm font-semibold text-foreground" }, " Contact "), a("p", { class: "text-sm text-muted-foreground" }, " contact@intlayer.org ")], -1)
	]), r[3] ||= a("div", { class: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground" }, " i18n Benchmark — Open-source project. Built with Vue, Vite & Vue Router. ", -1)])]);
}
var N = E(T, [["render", M], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/Footer.vue"]]);
function P(e) {
	u(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), d(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var F = [
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
], I = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, L = c({
	__name: "LocaleSwitcher",
	setup(e, { expose: n }) {
		n();
		let r = b(), i = x(), a = {
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
				return I;
			},
			get locales() {
				return F;
			}
		};
		return Object.defineProperty(a, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), a;
	}
}), ee = { class: "flex items-center gap-2" }, R = ["value"], z = ["value"];
function B(t, n, r, o, s, c) {
	return p(), i("div", ee, [a("select", {
		value: o.currentLocale,
		onChange: n[0] ||= (e) => o.handleLocaleChange(e.target.value),
		class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
	}, [(p(!0), i(e, null, h(o.locales, (e) => (p(), i("option", {
		key: e,
		value: e
	}, _(o.getLocaleName(e)), 9, z))), 128))], 40, R)]);
}
var V = E(L, [["render", B], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/LocaleSwitcher.vue"]]), H = c({
	__name: "ThemeToggle",
	setup(e, { expose: t }) {
		t();
		let n = m("auto");
		function r() {
			if (typeof window > "u") return "auto";
			let e = window.localStorage.getItem("theme");
			return e === "light" || e === "dark" || e === "auto" ? e : "auto";
		}
		function i(e) {
			let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
			document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
		}
		d(() => {
			let e = r();
			n.value = e, i(e);
		});
		let a = null;
		v(n, (e) => {
			if (e === "auto") {
				let e = window.matchMedia("(prefers-color-scheme: dark)");
				a = () => i("auto"), e.addEventListener("change", a);
			} else a &&= (window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", a), null);
		}, { immediate: !0 }), f(() => {
			a && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", a);
		});
		function o() {
			let e = n.value === "light" ? "dark" : n.value === "dark" ? "auto" : "light";
			n.value = e, i(e), window.localStorage.setItem("theme", e);
		}
		let s = {
			mode: n,
			getInitialMode: r,
			applyThemeMode: i,
			get mediaQueryListener() {
				return a;
			},
			set mediaQueryListener(e) {
				a = e;
			},
			toggleMode: o,
			getLabel: () => n.value === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${n.value}. Click to switch mode.`
		};
		return Object.defineProperty(s, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), s;
	}
}), U = ["aria-label", "title"];
function W(e, t, n, r, a, o) {
	return p(), i("button", {
		type: "button",
		onClick: r.toggleMode,
		"aria-label": r.getLabel(),
		title: r.getLabel(),
		class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
	}, _(r.mode === "auto" ? "Theme: Auto" : r.mode === "dark" ? "Theme: Dark" : "Theme: Light"), 9, U);
}
var G = E(H, [["render", W], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/ThemeToggle.vue"]]), K = c({
	__name: "Header",
	setup(e, { expose: n }) {
		n(), P("Header");
		let r = m(!1), i = b(), a = t(() => i.params.locale || "en"), o = {
			isMockPagesOpen: r,
			route: i,
			currentLocale: a,
			mockPages: t(() => [
				{
					to: `/${a.value}/products`,
					label: "Products"
				},
				{
					to: `/${a.value}/pricing`,
					label: "Pricing"
				},
				{
					to: `/${a.value}/team`,
					label: "Team"
				},
				{
					to: `/${a.value}/blog`,
					label: "Blog"
				},
				{
					to: `/${a.value}/careers`,
					label: "Careers"
				},
				{
					to: `/${a.value}/faq`,
					label: "FAQ"
				},
				{
					to: `/${a.value}/contact`,
					label: "Contact"
				},
				{
					to: `/${a.value}/settings`,
					label: "Settings"
				}
			]),
			get ChevronDown() {
				return S;
			},
			LocaleSwitcher: V,
			ThemeToggle: G
		};
		return Object.defineProperty(o, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), o;
	}
}), q = { class: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg" }, J = { class: "container flex h-16 items-center justify-between" }, Y = { class: "flex items-center gap-8" }, X = { class: "hidden items-center gap-6 text-sm font-medium md:flex" }, Z = { class: "relative" }, Q = { class: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1" }, $ = { class: "flex items-center gap-4" };
function te(t, c, u, d, f, m) {
	let v = g("router-link");
	return p(), i("header", q, [a("nav", J, [a("div", Y, [s(v, {
		to: `/${d.currentLocale}`,
		class: "text-lg font-bold tracking-tight text-primary no-underline"
	}, {
		default: y(() => [...c[6] ||= [o(" i18n Bench ", -1)]]),
		_: 1
	}, 8, ["to"]), a("div", X, [
		s(v, {
			to: `/${d.currentLocale}`,
			class: "nav-link",
			"exact-active-class": "is-active"
		}, {
			default: y(() => [...c[7] ||= [o(" Home ", -1)]]),
			_: 1
		}, 8, ["to"]),
		s(v, {
			to: `/${d.currentLocale}/about`,
			class: "nav-link",
			"active-class": "is-active"
		}, {
			default: y(() => [...c[8] ||= [o(" Methodology ", -1)]]),
			_: 1
		}, 8, ["to"]),
		r(" Mock Pages Dropdown "),
		a("div", Z, [a("button", {
			type: "button",
			class: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
			onMouseenter: c[0] ||= (e) => d.isMockPagesOpen = !0,
			onMouseleave: c[1] ||= (e) => d.isMockPagesOpen = !1,
			onClick: c[2] ||= (e) => d.isMockPagesOpen = !d.isMockPagesOpen
		}, [c[9] ||= o(" Mock Pages ", -1), s(d.ChevronDown, {
			size: 14,
			class: l(["transition-transform", d.isMockPagesOpen ? "rotate-180" : ""])
		}, null, 8, ["class"])], 32), d.isMockPagesOpen ? (p(), i("div", {
			key: 0,
			class: "absolute left-0 top-full pt-2 w-48",
			onMouseenter: c[4] ||= (e) => d.isMockPagesOpen = !0,
			onMouseleave: c[5] ||= (e) => d.isMockPagesOpen = !1
		}, [a("div", Q, [(p(!0), i(e, null, h(d.mockPages, (e) => (p(), n(v, {
			key: e.to,
			to: e.to,
			class: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
			onClick: c[3] ||= (e) => d.isMockPagesOpen = !1
		}, {
			default: y(() => [o(_(e.label), 1)]),
			_: 2
		}, 1032, ["to"]))), 128))])], 32)) : r("v-if", !0)])
	])]), a("div", $, [
		c[10] ||= a("a", {
			href: "https://github.com/intlayer-org/benchmark-i18n",
			target: "_blank",
			rel: "noreferrer",
			class: "text-muted-foreground transition hover:text-foreground"
		}, [a("span", { class: "sr-only" }, "Go to GitHub"), a("svg", {
			viewBox: "0 0 16 16",
			"aria-hidden": "true",
			width: "20",
			height: "20"
		}, [a("path", {
			fill: "currentColor",
			d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
		})])], -1),
		s(d.LocaleSwitcher),
		s(d.ThemeToggle)
	])])]);
}
var ne = E(K, [["render", te], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/Header.vue"]]), re = c({
	__name: "Layout",
	setup(e, { expose: t }) {
		t();
		let n = b(), r = m(0);
		u(() => {
			r.value = typeof performance < "u" ? performance.now() : 0;
		}), d(() => {
			C(), w("AppRoot", r.value);
		}), v(() => n.params.locale, (e) => {
			e && (document.documentElement.lang = e);
		}, { immediate: !0 });
		let i = {
			route: n,
			renderStart: r,
			Footer: N,
			Header: ne
		};
		return Object.defineProperty(i, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), i;
	}
});
function ie(t, n, r, a, o, c) {
	let l = g("router-view");
	return p(), i(e, null, [
		s(a.Header),
		s(l),
		s(a.Footer)
	], 64);
}
var ae = E(re, [["render", ie], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/Layout.vue"]]);
export { ae as default };
