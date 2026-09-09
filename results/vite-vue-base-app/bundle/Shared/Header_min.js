import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createTextVNode as o, createVNode as s, defineComponent as c, normalizeClass as l, onBeforeMount as u, onMounted as d, onUnmounted as f, openBlock as p, ref as m, renderList as h, resolveComponent as g, toDisplayString as _, watch as v, withCtx as y } from "vue";
import { useRoute as b, useRouter as x } from "vue-router";
import { ChevronDown as S } from "lucide-vue-next";
function C(e) {
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
var w = [
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
], T = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, E = c({
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
				return T;
			},
			get locales() {
				return w;
			}
		};
		return Object.defineProperty(a, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), a;
	}
}), D = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, O = { class: "flex items-center gap-2" }, k = ["value"], A = ["value"];
function j(t, n, r, o, s, c) {
	return p(), i("div", O, [a("select", {
		value: o.currentLocale,
		onChange: n[0] ||= (e) => o.handleLocaleChange(e.target.value),
		class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
	}, [(p(!0), i(e, null, h(o.locales, (e) => (p(), i("option", {
		key: e,
		value: e
	}, _(o.getLocaleName(e)), 9, A))), 128))], 40, k)]);
}
var M = D(E, [["render", j], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/LocaleSwitcher.vue"]]), N = c({
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
}), P = ["aria-label", "title"];
function F(e, t, n, r, a, o) {
	return p(), i("button", {
		type: "button",
		onClick: r.toggleMode,
		"aria-label": r.getLabel(),
		title: r.getLabel(),
		class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
	}, _(r.mode === "auto" ? "Theme: Auto" : r.mode === "dark" ? "Theme: Dark" : "Theme: Light"), 9, P);
}
var I = D(N, [["render", F], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/ThemeToggle.vue"]]), L = c({
	__name: "Header",
	setup(e, { expose: n }) {
		n(), C("Header");
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
			LocaleSwitcher: M,
			ThemeToggle: I
		};
		return Object.defineProperty(o, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), o;
	}
}), R = { class: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg" }, z = { class: "container flex h-16 items-center justify-between" }, B = { class: "flex items-center gap-8" }, V = { class: "hidden items-center gap-6 text-sm font-medium md:flex" }, H = { class: "relative" }, U = { class: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1" }, W = { class: "flex items-center gap-4" };
function G(t, c, u, d, f, m) {
	let v = g("router-link");
	return p(), i("header", R, [a("nav", z, [a("div", B, [s(v, {
		to: `/${d.currentLocale}`,
		class: "text-lg font-bold tracking-tight text-primary no-underline"
	}, {
		default: y(() => [...c[6] ||= [o(" i18n Bench ", -1)]]),
		_: 1
	}, 8, ["to"]), a("div", V, [
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
		a("div", H, [a("button", {
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
		}, [a("div", U, [(p(!0), i(e, null, h(d.mockPages, (e) => (p(), n(v, {
			key: e.to,
			to: e.to,
			class: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
			onClick: c[3] ||= (e) => d.isMockPagesOpen = !1
		}, {
			default: y(() => [o(_(e.label), 1)]),
			_: 2
		}, 1032, ["to"]))), 128))])], 32)) : r("v-if", !0)])
	])]), a("div", W, [
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
var K = D(L, [["render", G], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/Header.vue"]]);
export { K as default };
