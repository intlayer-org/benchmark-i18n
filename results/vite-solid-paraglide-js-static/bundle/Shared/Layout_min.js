import { createComponent as e, delegateEvents as t, effect as n, insert as r, memo as i, setAttribute as a, template as o } from "solid-js/web";
import { A as s, useLocation as c, useNavigate as l, useParams as u } from "@solidjs/router";
import { For as d, createEffect as f, createSignal as p, onMount as m } from "solid-js";
import { recordHydrationDuration as h, recordRenderTime as g } from "test-utils/browser-metrics";
var _ = {}, v = [
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
], y = "PARAGLIDE_LOCALE", b = 3456e4, x = [
	"cookie",
	"globalVariable",
	"baseLocale"
], S = [], C, w;
function T(e) {
	if (S.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (C === t) return w;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of S) if (new _(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return C = t, w = r, r;
}
function E(e) {
	let t = T(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : x;
}
var D = void 0, O = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var k, A = !1, j = () => {
	if (D) {
		let e = D?.getStore()?.locale;
		if (e) return e;
	}
	let e = x;
	!O && typeof window < "u" && window.location?.href && (e = E(window.location.href));
	let t = M(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return A || (k = t, A = !0, P(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function M(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = L();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && k !== void 0) n = k;
		else if (z(t) && R.has(t)) {
			let e = R.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return I(t);
			}
		}
		let e = F(n);
		if (e) return e;
	}
}
var N = (e) => {
	e ? window.location.href = e : window.location.reload();
}, P = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = j();
	} catch {}
	let i = [], a = x;
	!O && typeof window < "u" && window.location?.href && (a = E(window.location.href));
	for (let t of a) if (t === "globalVariable") k = e;
	else if (t === "cookie") {
		if (O || typeof document > "u" || typeof window > "u") continue;
		let t = `${y}=${e}; path=/; max-age=${b}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (z(t) && R.has(t)) {
		let n = R.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!O && n.reload && window.location && e !== r && N(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function F(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of v) if (e.toLowerCase() === t) return e;
}
function I(e) {
	let t = F(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${v.join(", ")}`);
}
function L() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${y}=([^;]+)`))?.[2];
	return F(e);
}
var R = /* @__PURE__ */ new Map();
function z(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var B = o("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><ul class=space-y-1><li><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"></a></li><li></li><li></li></ul></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p></div></div><div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\">");
function V() {
	let t = u(), n = () => t.locale ?? "en";
	return (() => {
		var t = B(), i = t.firstChild.firstChild, a = i.firstChild, o = a.firstChild, c = o.nextSibling, l = a.nextSibling, u = l.firstChild, d = u.nextSibling.firstChild, f = d.firstChild, p = d.nextSibling, m = p.nextSibling, h = l.nextSibling.firstChild, g = h.nextSibling, _ = i.nextSibling;
		return r(o, () => (void 0)()), r(c, () => (void 0)()), r(u, () => (void 0)()), r(f, () => (void 0)()), r(p, e(s, {
			get href() {
				return `/${n()}/about`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return (void 0)();
			}
		})), r(m, e(s, {
			get href() {
				return `/${n()}/contact`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return (void 0)();
			}
		})), r(h, () => (void 0)()), r(g, () => (void 0)()), r(_, () => (void 0)()), t;
	})();
}
function H(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), m(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var U = [
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
], W = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, G = o("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primary\">"), K = o("<option>");
function q() {
	let t = u(), i = l(), a = c(), o = (e) => {
		i(`${a.pathname.replace(/^\/[^/]+/, `/${e}`)}${a.search}${a.hash}`);
	};
	return (() => {
		var i = G(), a = i.firstChild;
		return a.addEventListener("change", (e) => o(e.currentTarget.value)), r(a, e(d, {
			each: U,
			children: (e) => (() => {
				var t = K();
				return t.value = e, r(t, () => W(e)), t;
			})()
		})), n(() => a.value = t.locale ?? "en"), i;
	})();
}
var J = o("<button type=button class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\">");
function Y() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function X(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Z() {
	let [e, t] = p("auto");
	m(() => {
		let e = Y();
		t(e), X(e);
	}), f(() => {
		if (e() !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => X("auto");
		return t.addEventListener("change", n), () => {
			t.removeEventListener("change", n);
		};
	});
	function i() {
		let n = e(), r = n === "light" ? "dark" : n === "dark" ? "auto" : "light";
		t(r), X(r), window.localStorage.setItem("theme", r);
	}
	let o = () => e() === "auto" ? (void 0)() : (void 0)({ mode: e() }), s = () => (e() === "auto" || e(), (void 0)());
	return (() => {
		var e = J();
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
var Q = o("<svg width=14 height=14 viewBox=\"0 0 24 24\"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d=\"m6 9 6 6 6-6\">"), $ = o("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><div class=relative><button type=button class=\"flex cursor-pointer items-center gap-1 border-none bg-transparent nav-link\"></button></div></div></div><div class=\"flex items-center gap-4\"><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-muted-foreground transition hover:text-foreground\"><span class=sr-only></span><svg viewBox=\"0 0 16 16\"aria-hidden=true width=20 height=20><path fill=currentColor d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\">"), ee = o("<div class=\"absolute left-0 top-full w-48 pt-2\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\">");
function te(e) {
	return (() => {
		var t = Q();
		return n(() => a(t, "class", e.class)), t;
	})();
}
function ne() {
	H("Header");
	let [t, n] = p(!1), a = u(), o = () => a.locale ?? "en", c = () => [
		{
			to: `/${o()}/products`,
			label: (void 0)()
		},
		{
			to: `/${o()}/pricing`,
			label: (void 0)()
		},
		{
			to: `/${o()}/team`,
			label: (void 0)()
		},
		{
			to: `/${o()}/blog`,
			label: (void 0)()
		},
		{
			to: `/${o()}/careers`,
			label: (void 0)()
		},
		{
			to: `/${o()}/faq`,
			label: (void 0)()
		},
		{
			to: `/${o()}/contact`,
			label: (void 0)()
		},
		{
			to: `/${o()}/settings`,
			label: (void 0)()
		}
	];
	return (() => {
		var a = $(), l = a.firstChild.firstChild, u = l.firstChild, f = u.firstChild, p = f.firstChild, m = l.nextSibling, h = m.firstChild.firstChild;
		return r(l, e(s, {
			get href() {
				return `/${o()}`;
			},
			class: "text-lg font-bold tracking-tight text-primary no-underline",
			get children() {
				return (void 0)();
			}
		}), u), r(u, e(s, {
			get href() {
				return `/${o()}`;
			},
			end: !0,
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return (void 0)();
			}
		}), f), r(u, e(s, {
			get href() {
				return `/${o()}/about`;
			},
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return (void 0)();
			}
		}), f), p.$$click = () => n(!t()), p.addEventListener("mouseleave", () => n(!1)), p.addEventListener("mouseenter", () => n(!0)), r(p, () => (void 0)(), null), r(p, e(te, { get class() {
			return `transition-transform ${t() ? "rotate-180" : ""}`;
		} }), null), r(f, (() => {
			var a = i(() => !!t());
			return () => a() && (() => {
				var t = ee(), i = t.firstChild;
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
		})(), null), r(h, () => (void 0)()), r(m, e(q, {}), null), r(m, e(Z, {}), null), a;
	})();
}
t(["click"]);
function re(t) {
	let n = u(), r = typeof performance < "u" ? performance.now() : 0;
	return m(() => {
		h(), g("AppRoot", r);
	}), f(() => {
		let e = n.locale ?? "en";
		document.documentElement.lang = e, P(e, { reload: !1 });
	}), [
		e(ne, {}),
		i(() => t.children),
		e(V, {})
	];
}
export { re as default };
