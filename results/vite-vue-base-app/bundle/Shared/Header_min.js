import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createTextVNode as o, createVNode as s, defineComponent as c, normalizeClass as l, onBeforeMount as u, onMounted as d, onUnmounted as f, openBlock as p, ref as m, renderList as h, resolveComponent as g, toDisplayString as _, unref as v, watch as y, withCtx as b } from "vue";
import { useRoute as x, useRouter as S } from "vue-router";
import { ChevronDown as C } from "lucide-vue-next";
function w(e) {
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
var T = [
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
], E = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, D = { class: "flex items-center gap-2" }, O = ["value"], k = ["value"], A = c({
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
		return (t, n) => (p(), i("div", D, [a("select", {
			value: s.value,
			onChange: n[0] ||= (e) => c(e.target.value),
			class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
		}, [(p(!0), i(e, null, h(v(T), (e) => (p(), i("option", {
			key: e,
			value: e
		}, _(v(E)(e)), 9, k))), 128))], 40, O)]));
	}
}), j = ["aria-label", "title"], M = c({
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
		}, _(t.value === "auto" ? "Theme: Auto" : t.value === "dark" ? "Theme: Dark" : "Theme: Light"), 9, j));
	}
}), N = { class: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg" }, P = { class: "container flex h-16 items-center justify-between" }, F = { class: "flex items-center gap-8" }, I = { class: "hidden items-center gap-6 text-sm font-medium md:flex" }, L = { class: "relative" }, R = { class: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1" }, z = { class: "flex items-center gap-4" }, B = c({
	__name: "Header",
	setup(c) {
		w("Header");
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
			return p(), i("header", N, [a("nav", P, [a("div", F, [s(d, {
				to: `/${f.value}`,
				class: "text-lg font-bold tracking-tight text-primary no-underline"
			}, {
				default: b(() => [...c[6] ||= [o(" i18n Bench ", -1)]]),
				_: 1
			}, 8, ["to"]), a("div", I, [
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
				a("div", L, [a("button", {
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
				}, [a("div", R, [(p(!0), i(e, null, h(y.value, (e) => (p(), n(d, {
					key: e.to,
					to: e.to,
					class: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
					onClick: c[3] ||= (e) => u.value = !1
				}, {
					default: b(() => [o(_(e.label), 1)]),
					_: 2
				}, 1032, ["to"]))), 128))])], 32)) : r("v-if", !0)])
			])]), a("div", z, [
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
				s(A),
				s(M)
			])])]);
		};
	}
});
export { B as default };
