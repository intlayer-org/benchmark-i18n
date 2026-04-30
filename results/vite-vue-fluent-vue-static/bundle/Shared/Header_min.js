import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createTextVNode as o, createVNode as s, defineComponent as c, getCurrentInstance as l, normalizeClass as u, onBeforeMount as d, onMounted as f, onUnmounted as p, openBlock as m, ref as h, renderList as g, resolveComponent as _, toDisplayString as v, watch as y, withCtx as b } from "vue";
import { useRoute as x, useRouter as S } from "vue-router";
import { ChevronDown as C } from "lucide-vue-next";
function w(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function T(e) {
	return e.split(".").map(w).join("-");
}
function E() {
	let e = l()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(T(t), n ?? {});
	} };
}
function D(e) {
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
var O = [
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
], k = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, A = c({
	__name: "LocaleSwitcher",
	setup(e, { expose: n }) {
		n();
		let r = x(), i = S(), a = {
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
				return k;
			},
			get locales() {
				return O;
			}
		};
		return Object.defineProperty(a, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), a;
	}
}), j = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, M = { class: "flex items-center gap-2" }, N = ["value"], P = ["value"];
function F(t, n, r, o, s, c) {
	return m(), i("div", M, [a("select", {
		value: o.currentLocale,
		onChange: n[0] ||= (e) => o.handleLocaleChange(e.target.value),
		class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
	}, [(m(!0), i(e, null, g(o.locales, (e) => (m(), i("option", {
		key: e,
		value: e
	}, v(o.getLocaleName(e)), 9, P))), 128))], 40, N)]);
}
var I = j(A, [["render", F], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/LocaleSwitcher.vue"]]), L = c({
	__name: "ThemeToggle",
	setup(e, { expose: t }) {
		t();
		let { td: n } = E(), r = h("auto");
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
}), R = ["aria-label", "title"];
function z(e, t, n, r, a, o) {
	return m(), i("button", {
		type: "button",
		onClick: r.toggleMode,
		"aria-label": r.getLabel(),
		title: r.getLabel(),
		class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
	}, v(r.mode === "auto" ? r.td("themeToggle.auto") : r.mode === "dark" ? r.td("themeToggle.dark") : r.td("themeToggle.light")), 9, R);
}
var B = j(L, [["render", z], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/ThemeToggle.vue"]]), V = c({
	__name: "Header",
	setup(e, { expose: n }) {
		n(), D("Header");
		let { td: r } = E(), i = h(!1), a = x(), o = t(() => a.params.locale || "en"), s = {
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
				return C;
			},
			LocaleSwitcher: I,
			ThemeToggle: B
		};
		return Object.defineProperty(s, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), s;
	}
}), H = { class: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg" }, U = { class: "container flex h-16 items-center justify-between" }, W = { class: "flex items-center gap-8" }, G = { class: "hidden items-center gap-6 text-sm font-medium md:flex" }, K = { class: "relative" }, q = { class: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1" }, J = { class: "flex items-center gap-4" }, Y = {
	href: "https://github.com/intlayer-org/benchmark-i18n",
	target: "_blank",
	rel: "noreferrer",
	class: "text-muted-foreground transition hover:text-foreground"
}, X = { class: "sr-only" };
function Z(t, c, l, d, f, p) {
	let h = _("router-link");
	return m(), i("header", H, [a("nav", U, [a("div", W, [s(h, {
		to: `/${d.currentLocale}`,
		class: "text-lg font-bold tracking-tight text-primary no-underline"
	}, {
		default: b(() => [o(v(d.td("shared.appName")), 1)]),
		_: 1
	}, 8, ["to"]), a("div", G, [
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
		a("div", K, [a("button", {
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
		}, [a("div", q, [(m(!0), i(e, null, g(d.mockPages, (e) => (m(), n(h, {
			key: e.to,
			to: e.to,
			class: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
			onClick: c[3] ||= (e) => d.isMockPagesOpen = !1
		}, {
			default: b(() => [o(v(e.label), 1)]),
			_: 2
		}, 1032, ["to"]))), 128))])], 32)) : r("v-if", !0)])
	])]), a("div", J, [
		a("a", Y, [a("span", X, v(d.td("shared.goToGithub")), 1), c[6] ||= a("svg", {
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
var Q = j(V, [["render", Z], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/Header.vue"]]);
export { Q as default };
