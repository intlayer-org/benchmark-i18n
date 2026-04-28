import { createComponent as e, delegateEvents as t, effect as n, insert as r, memo as i, setAttribute as a, template as o } from "solid-js/web";
import { A as s, useLocation as c, useNavigate as l, useParams as u } from "@solidjs/router";
import { For as d, createEffect as f, createSignal as p, onMount as m } from "solid-js";
function h(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), m(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var g = [
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
], _ = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, v = o("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primary\">"), y = o("<option>");
function b() {
	let t = u(), i = l(), a = c(), o = (e) => {
		i(`${a.pathname.replace(/^\/[^/]+/, `/${e}`)}${a.search}${a.hash}`);
	};
	return (() => {
		var i = v(), a = i.firstChild;
		return a.addEventListener("change", (e) => o(e.currentTarget.value)), r(a, e(d, {
			each: g,
			children: (e) => (() => {
				var t = y();
				return t.value = e, r(t, () => _(e)), t;
			})()
		})), n(() => a.value = t.locale ?? "en"), i;
	})();
}
var x = o("<button type=button class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\">");
function S() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function C(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function w() {
	let [e, t] = p("auto");
	m(() => {
		let e = S();
		t(e), C(e);
	}), f(() => {
		if (e() !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => C("auto");
		return t.addEventListener("change", n), () => {
			t.removeEventListener("change", n);
		};
	});
	function i() {
		let n = e(), r = n === "light" ? "dark" : n === "dark" ? "auto" : "light";
		t(r), C(r), window.localStorage.setItem("theme", r);
	}
	let o = () => e() === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${e()}. Click to switch mode.`, s = () => e() === "auto" ? "Theme: Auto" : e() === "dark" ? "Theme: Dark" : "Theme: Light";
	return (() => {
		var e = x();
		return e.$$click = i, r(e, s), n((t) => {
			var n = o(), r = o();
			return n !== t.e && a(e, "aria-label", t.e = n), r !== t.t && a(e, "title", t.t = r), t;
		}, {
			e: void 0,
			t: void 0
		}), e;
	})();
}
t(["click"]);
var T = o("<svg width=14 height=14 viewBox=\"0 0 24 24\"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d=\"m6 9 6 6 6-6\">"), E = o("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><div class=relative><button type=button class=\"flex cursor-pointer items-center gap-1 border-none bg-transparent nav-link\">Mock Pages</button></div></div></div><div class=\"flex items-center gap-4\"><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-muted-foreground transition hover:text-foreground\"><span class=sr-only>Go to GitHub</span><svg viewBox=\"0 0 16 16\"aria-hidden=true width=20 height=20><path fill=currentColor d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\">"), D = o("<div class=\"absolute left-0 top-full w-48 pt-2\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\">");
function O(e) {
	return (() => {
		var t = T();
		return n(() => a(t, "class", e.class)), t;
	})();
}
function k() {
	h("Header");
	let [t, n] = p(!1), a = u(), o = () => a.locale ?? "en", c = () => [
		{
			to: `/${o()}/products`,
			label: "Products"
		},
		{
			to: `/${o()}/pricing`,
			label: "Pricing"
		},
		{
			to: `/${o()}/team`,
			label: "Team"
		},
		{
			to: `/${o()}/blog`,
			label: "Blog"
		},
		{
			to: `/${o()}/careers`,
			label: "Careers"
		},
		{
			to: `/${o()}/faq`,
			label: "FAQ"
		},
		{
			to: `/${o()}/contact`,
			label: "Contact"
		},
		{
			to: `/${o()}/settings`,
			label: "Settings"
		}
	];
	return (() => {
		var a = E(), l = a.firstChild.firstChild, u = l.firstChild, f = u.firstChild, p = f.firstChild;
		p.firstChild;
		var m = l.nextSibling;
		return m.firstChild, r(l, e(s, {
			get href() {
				return `/${o()}`;
			},
			class: "text-lg font-bold tracking-tight text-primary no-underline",
			children: "i18n Bench"
		}), u), r(u, e(s, {
			get href() {
				return `/${o()}`;
			},
			end: !0,
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			children: "Home"
		}), f), r(u, e(s, {
			get href() {
				return `/${o()}/about`;
			},
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			children: "Methodology"
		}), f), p.$$click = () => n(!t()), p.addEventListener("mouseleave", () => n(!1)), p.addEventListener("mouseenter", () => n(!0)), r(p, e(O, { get class() {
			return `transition-transform ${t() ? "rotate-180" : ""}`;
		} }), null), r(f, (() => {
			var a = i(() => !!t());
			return () => a() && (() => {
				var t = D(), i = t.firstChild;
				return t.addEventListener("mouseleave", () => n(!1)), t.addEventListener("mouseenter", () => n(!0)), r(i, e(d, {
					get each() {
						return c();
					},
					children: (t) => e(s, {
						get href() {
							return t.to;
						},
						class: "block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent",
						onClick: () => n(!1),
						get children() {
							return t.label;
						}
					})
				})), t;
			})();
		})(), null), r(m, e(b, {}), null), r(m, e(w, {}), null), a;
	})();
}
t(["click"]);
export { k as default };
