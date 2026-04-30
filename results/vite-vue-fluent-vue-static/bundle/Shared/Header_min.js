import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createTextVNode as o, createVNode as s, defineComponent as c, getCurrentInstance as l, normalizeClass as u, onBeforeMount as d, onMounted as f, onUnmounted as p, openBlock as m, ref as h, renderList as g, resolveComponent as _, toDisplayString as v, unref as y, watch as b, withCtx as x } from "vue";
import { useRoute as S, useRouter as C } from "vue-router";
import { ChevronDown as w } from "lucide-vue-next";
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
function O(e) {
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
var k = [
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
], A = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, j = { class: "flex items-center gap-2" }, M = ["value"], N = ["value"], P = c({
	__name: "LocaleSwitcher",
	setup(n) {
		let r = S(), o = C(), s = t(() => r.params.locale || "en"), c = (e) => {
			let t = r.path.replace(/^\/[^/]+/, `/${e}`);
			o.push({
				path: t,
				query: r.query,
				hash: r.hash
			});
		};
		return (t, n) => (m(), i("div", j, [a("select", {
			value: s.value,
			onChange: n[0] ||= (e) => c(e.target.value),
			class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
		}, [(m(!0), i(e, null, g(y(k), (e) => (m(), i("option", {
			key: e,
			value: e
		}, v(y(A)(e)), 9, N))), 128))], 40, M)]));
	}
}), F = ["aria-label", "title"], I = c({
	__name: "ThemeToggle",
	setup(e) {
		let { td: t } = D(), n = h("auto");
		function r() {
			if (typeof window > "u") return "auto";
			let e = window.localStorage.getItem("theme");
			return e === "light" || e === "dark" || e === "auto" ? e : "auto";
		}
		function a(e) {
			let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
			document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
		}
		f(() => {
			let e = r();
			n.value = e, a(e);
		});
		let o = null;
		b(n, (e) => {
			if (e === "auto") {
				let e = window.matchMedia("(prefers-color-scheme: dark)");
				o = () => a("auto"), e.addEventListener("change", o);
			} else o &&= (window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", o), null);
		}, { immediate: !0 }), p(() => {
			o && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", o);
		});
		function s() {
			let e = n.value === "light" ? "dark" : n.value === "dark" ? "auto" : "light";
			n.value = e, a(e), window.localStorage.setItem("theme", e);
		}
		let c = () => n.value === "auto" ? t("themeToggle.labelAuto") : t("themeToggle.labelOther", { mode: n.value });
		return (e, r) => (m(), i("button", {
			type: "button",
			onClick: s,
			"aria-label": c(),
			title: c(),
			class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
		}, v(n.value === "auto" ? y(t)("themeToggle.auto") : n.value === "dark" ? y(t)("themeToggle.dark") : y(t)("themeToggle.light")), 9, F));
	}
}), L = { class: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg" }, R = { class: "container flex h-16 items-center justify-between" }, z = { class: "flex items-center gap-8" }, B = { class: "hidden items-center gap-6 text-sm font-medium md:flex" }, V = { class: "relative" }, H = { class: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1" }, U = { class: "flex items-center gap-4" }, W = {
	href: "https://github.com/intlayer-org/benchmark-i18n",
	target: "_blank",
	rel: "noreferrer",
	class: "text-muted-foreground transition hover:text-foreground"
}, G = { class: "sr-only" }, K = c({
	__name: "Header",
	setup(c) {
		O("Header");
		let { td: l } = D(), d = h(!1), f = S(), p = t(() => f.params.locale || "en"), b = t(() => [
			{
				to: `/${p.value}/products`,
				label: l("header.products")
			},
			{
				to: `/${p.value}/pricing`,
				label: l("header.pricing")
			},
			{
				to: `/${p.value}/team`,
				label: l("header.team")
			},
			{
				to: `/${p.value}/blog`,
				label: l("header.blog")
			},
			{
				to: `/${p.value}/careers`,
				label: l("header.careers")
			},
			{
				to: `/${p.value}/faq`,
				label: l("header.faq")
			},
			{
				to: `/${p.value}/contact`,
				label: l("header.contact")
			},
			{
				to: `/${p.value}/settings`,
				label: l("header.settings")
			}
		]);
		return (t, c) => {
			let f = _("router-link");
			return m(), i("header", L, [a("nav", R, [a("div", z, [s(f, {
				to: `/${p.value}`,
				class: "text-lg font-bold tracking-tight text-primary no-underline"
			}, {
				default: x(() => [o(v(y(l)("shared.appName")), 1)]),
				_: 1
			}, 8, ["to"]), a("div", B, [
				s(f, {
					to: `/${p.value}`,
					class: "nav-link",
					"exact-active-class": "is-active"
				}, {
					default: x(() => [o(v(y(l)("header.home")), 1)]),
					_: 1
				}, 8, ["to"]),
				s(f, {
					to: `/${p.value}/about`,
					class: "nav-link",
					"active-class": "is-active"
				}, {
					default: x(() => [o(v(y(l)("header.methodology")), 1)]),
					_: 1
				}, 8, ["to"]),
				a("div", V, [a("button", {
					type: "button",
					class: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
					onMouseenter: c[0] ||= (e) => d.value = !0,
					onMouseleave: c[1] ||= (e) => d.value = !1,
					onClick: c[2] ||= (e) => d.value = !d.value
				}, [o(v(y(l)("header.mockPages")) + " ", 1), s(y(w), {
					size: 14,
					class: u(["transition-transform", d.value ? "rotate-180" : ""])
				}, null, 8, ["class"])], 32), d.value ? (m(), i("div", {
					key: 0,
					class: "absolute left-0 top-full pt-2 w-48",
					onMouseenter: c[4] ||= (e) => d.value = !0,
					onMouseleave: c[5] ||= (e) => d.value = !1
				}, [a("div", H, [(m(!0), i(e, null, g(b.value, (e) => (m(), n(f, {
					key: e.to,
					to: e.to,
					class: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
					onClick: c[3] ||= (e) => d.value = !1
				}, {
					default: x(() => [o(v(e.label), 1)]),
					_: 2
				}, 1032, ["to"]))), 128))])], 32)) : r("v-if", !0)])
			])]), a("div", U, [
				a("a", W, [a("span", G, v(y(l)("shared.goToGithub")), 1), c[6] ||= a("svg", {
					viewBox: "0 0 16 16",
					"aria-hidden": "true",
					width: "20",
					height: "20"
				}, [a("path", {
					fill: "currentColor",
					d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
				})], -1)]),
				s(P),
				s(I)
			])])]);
		};
	}
});
export { K as default };
