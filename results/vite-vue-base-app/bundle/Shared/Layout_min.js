import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createTextVNode as o, createVNode as s, defineComponent as c, normalizeClass as l, onBeforeMount as u, onMounted as d, onUnmounted as f, openBlock as p, ref as m, renderList as h, resolveComponent as g, toDisplayString as _, unref as v, watch as y, withCtx as b } from "vue";
import { useRoute as x, useRouter as S } from "vue-router";
import { ChevronDown as C } from "lucide-vue-next";
function w() {
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
function T(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var E = { class: "mt-20 border-t border-border bg-card" }, D = { class: "container py-8" }, O = { class: "grid gap-8 md:grid-cols-3" }, k = { class: "space-y-1" }, A = ["href"], j = c({
	__name: "Footer",
	setup(r) {
		let s = x(), c = t(() => s.params.locale || "en"), l = t(() => [
			{
				label: "GitHub",
				href: "https://github.com/intlayer-org/benchmark-i18n",
				isInternal: !1
			},
			{
				label: "Methodology",
				to: `/${c.value}/about`,
				isInternal: !0
			},
			{
				label: "Contributing",
				to: `/${c.value}/contact`,
				isInternal: !0
			}
		]);
		return (t, r) => {
			let s = g("router-link");
			return p(), i("footer", E, [a("div", D, [a("div", O, [
				r[1] ||= a("div", null, [a("h3", { class: "mb-2 text-sm font-semibold text-foreground" }, " i18n Benchmark "), a("p", { class: "text-sm text-muted-foreground" }, " An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity. ")], -1),
				a("div", null, [r[0] ||= a("h3", { class: "mb-2 text-sm font-semibold text-foreground" }, " Resources ", -1), a("ul", k, [(p(!0), i(e, null, h(l.value, (e) => (p(), i("li", { key: e.label }, [e.isInternal ? (p(), n(s, {
					key: 0,
					to: e.to,
					class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
				}, {
					default: b(() => [o(_(e.label), 1)]),
					_: 2
				}, 1032, ["to"])) : (p(), i("a", {
					key: 1,
					href: e.href,
					target: "_blank",
					rel: "noreferrer",
					class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
				}, _(e.label), 9, A))]))), 128))])]),
				r[2] ||= a("div", null, [a("h3", { class: "mb-2 text-sm font-semibold text-foreground" }, " Contact "), a("p", { class: "text-sm text-muted-foreground" }, " contact@intlayer.org ")], -1)
			]), r[3] ||= a("div", { class: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground" }, " i18n Benchmark — Open-source project. Built with Vue, Vite & Vue Router. ", -1)])]);
		};
	}
});
function M(e) {
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
var N = [
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
], P = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, F = { class: "flex items-center gap-2" }, I = ["value"], L = ["value"], R = c({
	__name: "LocaleSwitcher",
	setup(n) {
		let r = x(), o = S(), s = t(() => r.params.locale || "en"), c = (e) => {
			let t = r.path.replace(/^\/[^/]+/, `/${e}`);
			o.push({
				path: t,
				query: r.query,
				hash: r.hash
			});
		};
		return (t, n) => (p(), i("div", F, [a("select", {
			value: s.value,
			onChange: n[0] ||= (e) => c(e.target.value),
			class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
		}, [(p(!0), i(e, null, h(v(N), (e) => (p(), i("option", {
			key: e,
			value: e
		}, _(v(P)(e)), 9, L))), 128))], 40, I)]));
	}
}), z = ["aria-label", "title"], B = c({
	__name: "ThemeToggle",
	setup(e) {
		let t = m("auto");
		function n() {
			if (typeof window > "u") return "auto";
			let e = window.localStorage.getItem("theme");
			return e === "light" || e === "dark" || e === "auto" ? e : "auto";
		}
		function r(e) {
			let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
			document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
		}
		d(() => {
			let e = n();
			t.value = e, r(e);
		});
		let a = null;
		y(t, (e) => {
			if (e === "auto") {
				let e = window.matchMedia("(prefers-color-scheme: dark)");
				a = () => r("auto"), e.addEventListener("change", a);
			} else a &&= (window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", a), null);
		}, { immediate: !0 }), f(() => {
			a && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", a);
		});
		function o() {
			let e = t.value === "light" ? "dark" : t.value === "dark" ? "auto" : "light";
			t.value = e, r(e), window.localStorage.setItem("theme", e);
		}
		let s = () => t.value === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${t.value}. Click to switch mode.`;
		return (e, n) => (p(), i("button", {
			type: "button",
			onClick: o,
			"aria-label": s(),
			title: s(),
			class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
		}, _(t.value === "auto" ? "Theme: Auto" : t.value === "dark" ? "Theme: Dark" : "Theme: Light"), 9, z));
	}
}), V = { class: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg" }, H = { class: "container flex h-16 items-center justify-between" }, U = { class: "flex items-center gap-8" }, W = { class: "hidden items-center gap-6 text-sm font-medium md:flex" }, G = { class: "relative" }, K = { class: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1" }, q = { class: "flex items-center gap-4" }, J = c({
	__name: "Header",
	setup(c) {
		M("Header");
		let u = m(!1), d = x(), f = t(() => d.params.locale || "en"), y = t(() => [
			{
				to: `/${f.value}/products`,
				label: "Products"
			},
			{
				to: `/${f.value}/pricing`,
				label: "Pricing"
			},
			{
				to: `/${f.value}/team`,
				label: "Team"
			},
			{
				to: `/${f.value}/blog`,
				label: "Blog"
			},
			{
				to: `/${f.value}/careers`,
				label: "Careers"
			},
			{
				to: `/${f.value}/faq`,
				label: "FAQ"
			},
			{
				to: `/${f.value}/contact`,
				label: "Contact"
			},
			{
				to: `/${f.value}/settings`,
				label: "Settings"
			}
		]);
		return (t, c) => {
			let d = g("router-link");
			return p(), i("header", V, [a("nav", H, [a("div", U, [s(d, {
				to: `/${f.value}`,
				class: "text-lg font-bold tracking-tight text-primary no-underline"
			}, {
				default: b(() => [...c[6] ||= [o(" i18n Bench ", -1)]]),
				_: 1
			}, 8, ["to"]), a("div", W, [
				s(d, {
					to: `/${f.value}`,
					class: "nav-link",
					"exact-active-class": "is-active"
				}, {
					default: b(() => [...c[7] ||= [o(" Home ", -1)]]),
					_: 1
				}, 8, ["to"]),
				s(d, {
					to: `/${f.value}/about`,
					class: "nav-link",
					"active-class": "is-active"
				}, {
					default: b(() => [...c[8] ||= [o(" Methodology ", -1)]]),
					_: 1
				}, 8, ["to"]),
				r(" Mock Pages Dropdown "),
				a("div", G, [a("button", {
					type: "button",
					class: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
					onMouseenter: c[0] ||= (e) => u.value = !0,
					onMouseleave: c[1] ||= (e) => u.value = !1,
					onClick: c[2] ||= (e) => u.value = !u.value
				}, [c[9] ||= o(" Mock Pages ", -1), s(v(C), {
					size: 14,
					class: l(["transition-transform", u.value ? "rotate-180" : ""])
				}, null, 8, ["class"])], 32), u.value ? (p(), i("div", {
					key: 0,
					class: "absolute left-0 top-full pt-2 w-48",
					onMouseenter: c[4] ||= (e) => u.value = !0,
					onMouseleave: c[5] ||= (e) => u.value = !1
				}, [a("div", K, [(p(!0), i(e, null, h(y.value, (e) => (p(), n(d, {
					key: e.to,
					to: e.to,
					class: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
					onClick: c[3] ||= (e) => u.value = !1
				}, {
					default: b(() => [o(_(e.label), 1)]),
					_: 2
				}, 1032, ["to"]))), 128))])], 32)) : r("v-if", !0)])
			])]), a("div", q, [
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
				s(R),
				s(B)
			])])]);
		};
	}
}), Y = c({
	__name: "Layout",
	setup(t) {
		let n = x(), r = m(0);
		return u(() => {
			r.value = typeof performance < "u" ? performance.now() : 0;
		}), d(() => {
			w(), T("AppRoot", r.value);
		}), y(() => n.params.locale, (e) => {
			e && (document.documentElement.lang = e);
		}, { immediate: !0 }), (t, n) => {
			let r = g("router-view");
			return p(), i(e, null, [
				s(J),
				s(r),
				s(j)
			], 64);
		};
	}
});
export { Y as default };
