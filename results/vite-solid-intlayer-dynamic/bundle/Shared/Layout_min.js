import { Dynamic as e, createComponent as t, delegateEvents as n, effect as r, insert as i, memo as a, mergeProps as o, setAttribute as s, template as c } from "solid-js/web";
import { A as l, useLocation as u, useNavigate as d, useParams as f } from "@solidjs/router";
import { For as p, Suspense as m, createContext as h, createEffect as g, createMemo as _, createSignal as v, on as ee, onMount as y, untrack as te, useContext as b } from "solid-js";
import { recordHydrationDuration as ne, recordRenderTime as re } from "test-utils/browser-metrics";
var x = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
}, S = (t) => {
	if (typeof t == "string") return t;
	let { type: n, props: r } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let t = [], { children: n } = e.props;
			return Object.keys(n ?? {}).forEach((e) => {
				t.push(S(n?.[e]));
			}), {
				...e,
				props: {
					...e.props,
					children: t
				}
			};
		}
		return {
			...e,
			props: {
				...e.props,
				children: e.props?.children ?? []
			}
		};
	})(t);
	return e({
		component: n ?? "span",
		...r,
		children: r.children
	});
}, C = {
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
}, w = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, ie = "translation", ae = "object", oe = "array", T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => T(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: oe,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) Object.defineProperty(n, r, {
		enumerable: !0,
		configurable: !0,
		get: function() {
			let n = {
				...t,
				children: e[r],
				keyPath: [...t.keyPath, {
					type: ae,
					key: r
				}]
			}, i = T(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, E = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, D = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (E(e) && E(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : D(e[r], t[r]));
		return n;
	}
	return e;
}, O = (e, t, n) => {
	let r = (t) => e[t], i = /* @__PURE__ */ new Set(), a = [], o = (e) => {
		e && !i.has(e) && (i.add(e), a.push(e));
	};
	o(t), t.includes("-") && o(t.split("-")[0]), o(n), n?.includes("-") && o(n.split("-")[0]);
	let s = [];
	for (let e of a) {
		let t = r(e);
		if (t !== void 0) {
			if (typeof t == "string") {
				if (s.length === 0) return t;
				continue;
			}
			s.push(t);
		}
	}
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => D(e, t));
}, k = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, A = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? k : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ie,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return O(o, e, t);
	}
}, j = k, M = k, se = k, N = k, P = (e) => k, F = k, ce = (e, t = !0) => [
	A(e ?? C.defaultLocale, t ? C.defaultLocale : void 0),
	j,
	M,
	se,
	P(e ?? C.defaultLocale),
	F,
	N
], I = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), L = (e, t, n = ce(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return I(e.content, r, n);
}, R = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => x({
		...n,
		value: n.children,
		children: n.children
	})
}, z = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? k : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (e, { plugins: t, ...n }) => x({
		...n,
		value: "[[solid-element]]",
		children: typeof Node < "u" && e instanceof Node ? e : S(e)
	})
}, B = k, V = k, H = k, U = /* @__PURE__ */ new Map(), W = (e, t = !0) => {
	let n = `${e ?? C.defaultLocale}_${t}`;
	if (U.has(n)) return U.get(n);
	let r = [
		A(e ?? C.defaultLocale, t ? C.defaultLocale : void 0),
		j,
		M,
		P(e ?? C.defaultLocale),
		F,
		N,
		R,
		z,
		B,
		V,
		H
	];
	return U.set(n, r), r;
}, G = (e, t) => L(e, t, W(t)), le = (e, t = C?.locales, n = C?.defaultLocale) => {
	let r = [e].flat(), i = (e) => e.trim().toLowerCase();
	try {
		for (let e of r) {
			let n = i(e), r = t.find((e) => i(e) === n);
			if (r) return r;
			let [a] = n.split("-"), o = t.find((e) => i(e).split("-")[0] === a);
			if (o) return o;
		}
	} catch {}
	return n;
}, K = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var ue = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, de = (e = q) => {
	let { locales: t } = C;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!K) for (let t = 0; t < (w.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(w.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, fe = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !K && w.storage.cookies) for (let n = 0; n < w.storage.cookies.length; n++) {
		let { name: r, attributes: i } = w.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ue(r, e, i));
			} catch {}
		}
	}
}, q = {
	getCookie: (e) => document.cookie.split(";").find((t) => t.trim().startsWith(`${e}=`))?.split("=")[1],
	getLocaleStorage: (e) => localStorage.getItem(e),
	getSessionStorage: (e) => sessionStorage.getItem(e),
	isCookieEnabled: !0,
	setCookieStore: (e, t, n) => cookieStore.set({
		name: e,
		value: t,
		path: n.path,
		domain: n.domain,
		expires: n.expires,
		sameSite: n.sameSite
	}),
	setCookieString: (e, t) => {
		document.cookie = t;
	},
	setSessionStorage: (e, t) => sessionStorage.setItem(e, t),
	setLocaleStorage: (e, t) => localStorage.setItem(e, t)
}, J = de(q), pe = (e, t) => fe(e, {
	...q,
	isCookieEnabled: t
}), me = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, he = null, Y = h({
	locale: () => J ?? C?.defaultLocale,
	setLocale: () => null
}), ge = (e) => {
	let { defaultLocale: n, locales: r } = C ?? {}, [i, a] = v(e.locale ?? J ?? e.defaultLocale ?? n), o = e.setLocale ?? ((t) => {
		if (i().toString() !== t.toString()) {
			if (!r?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			a(t), pe(t, e.isCookieEnabled);
		}
	}), s = _(() => le(i()));
	return g(ee(() => e.locale, (e) => {
		e && e !== te(i) && a(e);
	}, { defer: !0 })), y(() => {
		me();
	}), t(Y.Provider, {
		value: {
			locale: s,
			setLocale: o
		},
		get children() {
			return e.children;
		}
	});
}, _e = (e) => t(ge, o(e, { get children() {
	return [a(() => a(() => !1)() && t(m, { get children() {
		return t(he, {});
	} })), a(() => e.children)];
} })), ve = (e, t) => {
	let n = b(Y) ?? {};
	return _(() => G(e, t ?? n?.locale?.()));
}, ye = (e) => {
	let t = "pending", n, r = e.then((e) => {
		t = "success", n = e;
	}, (e) => {
		t = "error", n = e;
	});
	return { read() {
		if (t === "pending") throw r;
		if (t === "error") throw n;
		return n;
	} };
}, X = /* @__PURE__ */ new Map(), be = (e, t) => (X.has(e) || X.set(e, ye(t)), X.get(e).read()), Z = (e, t, n) => {
	let { locale: r } = b(Y) ?? {}, i = C.defaultLocale, a = n ?? r?.() ?? i;
	return ve(be(`${String(t)}.${a}`, e[a]?.()), a);
}, xe = {
	de: () => import("./de-D6JRgoHe.js").then((e) => e.default),
	en: () => import("./en-z44Pr_OU.js").then((e) => e.default),
	es: () => import("./es-CRQIszlB.js").then((e) => e.default),
	fr: () => import("./fr-DK-QI1ll.js").then((e) => e.default),
	it: () => import("./it-D0J9fdah.js").then((e) => e.default),
	ja: () => import("./ja-pEVBiZit.js").then((e) => e.default),
	ko: () => import("./ko-yaUST9ZN.js").then((e) => e.default),
	pt: () => import("./pt-BW71kHXU.js").then((e) => e.default),
	ru: () => import("./ru-Bbo5xo9D.js").then((e) => e.default),
	zh: () => import("./zh-oAAX77oc.js").then((e) => e.default)
}, Se = c("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\">i18n Benchmark</h3><p class=\"text-sm text-muted-foreground\"></p></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><ul class=space-y-1><li><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\">GitHub</a></li><li></li><li></li></ul></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\">contact@intlayer.org</p></div></div><div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\">");
function Ce() {
	let e = Z(xe, "footer"), n = f(), r = () => n.locale ?? "en";
	return (() => {
		var n = Se(), a = n.firstChild.firstChild, o = a.firstChild, s = o.firstChild.nextSibling, c = o.nextSibling, u = c.firstChild, d = u.nextSibling.firstChild.nextSibling, f = d.nextSibling, p = c.nextSibling.firstChild, m = a.nextSibling;
		return i(s, () => e().anOpenSourceTestApplication), i(u, () => e().resources), i(d, t(l, {
			get href() {
				return `/${r()}/about`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return e().methodology;
			}
		})), i(f, t(l, {
			get href() {
				return `/${r()}/contact`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return e().contributing;
			}
		})), i(p, () => e().contact), i(m, () => e().i18nBenchmarkOpenSourceProject), n;
	})();
}
var we = {
	de: () => import("./de-Cghlwthx.js").then((e) => e.default),
	en: () => import("./en-B0O-AJEp.js").then((e) => e.default),
	es: () => import("./es-C41cu62B.js").then((e) => e.default),
	fr: () => import("./fr-BcrvnMyF.js").then((e) => e.default),
	it: () => import("./it-DG-iFp5r.js").then((e) => e.default),
	ja: () => import("./ja-tziK3IRE.js").then((e) => e.default),
	ko: () => import("./ko-CPoBZ8e6.js").then((e) => e.default),
	pt: () => import("./pt-BrNl2-cb.js").then((e) => e.default),
	ru: () => import("./ru-Cm7pnU1p.js").then((e) => e.default),
	zh: () => import("./zh-DLSRSeH7.js").then((e) => e.default)
};
function Te(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), y(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var Ee = [
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
], De = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, Oe = c("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primary\">"), Q = c("<option>");
function ke() {
	let e = f(), n = d(), a = u(), o = (e) => {
		let t = a.pathname.replace(/^\/[^/]+/, `/${e}`);
		n(`${t}${a.search}${a.hash}`);
	};
	return (() => {
		var n = Oe(), a = n.firstChild;
		return a.addEventListener("change", (e) => o(e.currentTarget.value)), i(a, t(p, {
			each: Ee,
			children: (e) => (() => {
				var t = Q();
				return t.value = e, i(t, () => De(e)), t;
			})()
		})), r(() => a.value = e.locale ?? "en"), n;
	})();
}
var Ae = {
	de: () => import("./de-7VUDwmBl.js").then((e) => e.default),
	en: () => import("./en-jkxS6-DV.js").then((e) => e.default),
	es: () => import("./es-CIspf5D3.js").then((e) => e.default),
	fr: () => import("./fr-YmmgtERO.js").then((e) => e.default),
	it: () => import("./it-DU31rHaG.js").then((e) => e.default),
	ja: () => import("./ja-DM8e2iCP.js").then((e) => e.default),
	ko: () => import("./ko-AZ6Ztjar.js").then((e) => e.default),
	pt: () => import("./pt-C-srSz5f.js").then((e) => e.default),
	ru: () => import("./ru-M_3J5buD.js").then((e) => e.default),
	zh: () => import("./zh-BafddiL4.js").then((e) => e.default)
}, je = c("<button type=button class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\">");
function Me() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Ne() {
	let e = Z(Ae, "theme-toggle"), [t, n] = v("auto");
	y(() => {
		let e = Me();
		n(e), $(e);
	}), g(() => {
		if (t() !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	});
	function a() {
		let e = t(), r = e === "light" ? "dark" : e === "dark" ? "auto" : "light";
		n(r), $(r), window.localStorage.setItem("theme", r);
	}
	let o = () => t() === "auto" ? e().themeModeAutoSystemClick.value : `Theme mode: ${t()}. Click to switch mode.`, c = () => t() === "auto" ? e().themeAuto.value : t() === "dark" ? e().themeDark.value : e().themeLight.value;
	return (() => {
		var e = je();
		return e.$$click = a, i(e, c), r((t) => {
			var n = o(), r = o();
			return n !== t.e && s(e, "aria-label", t.e = n), r !== t.t && s(e, "title", t.t = r), t;
		}, {
			e: void 0,
			t: void 0
		}), e;
	})();
}
n(["click"]);
var Pe = c("<svg width=14 height=14 viewBox=\"0 0 24 24\"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d=\"m6 9 6 6 6-6\">"), Fe = c("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><div class=relative><button type=button class=\"flex cursor-pointer items-center gap-1 border-none bg-transparent nav-link\"></button></div></div></div><div class=\"flex items-center gap-4\"><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-muted-foreground transition hover:text-foreground\"><span class=sr-only></span><svg viewBox=\"0 0 16 16\"aria-hidden=true width=20 height=20><path fill=currentColor d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\">"), Ie = c("<div class=\"absolute left-0 top-full w-48 pt-2\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\">");
function Le(e) {
	return (() => {
		var t = Pe();
		return r(() => s(t, "class", e.class)), t;
	})();
}
function Re() {
	let e = Z(we, "header");
	Te(e().header.value);
	let [n, r] = v(!1), o = f(), s = () => o.locale ?? "en", c = () => [
		{
			to: `/${s()}/products`,
			label: e().products.value
		},
		{
			to: `/${s()}/pricing`,
			label: e().pricing.value
		},
		{
			to: `/${s()}/team`,
			label: e().team.value
		},
		{
			to: `/${s()}/blog`,
			label: e().blog.value
		},
		{
			to: `/${s()}/careers`,
			label: e().careers.value
		},
		{
			to: `/${s()}/faq`,
			label: e().faq.value
		},
		{
			to: `/${s()}/contact`,
			label: e().contact.value
		},
		{
			to: `/${s()}/settings`,
			label: e().settings.value
		}
	];
	return (() => {
		var o = Fe(), u = o.firstChild.firstChild, d = u.firstChild, f = d.firstChild, m = f.firstChild, h = u.nextSibling, g = h.firstChild.firstChild;
		return i(u, t(l, {
			get href() {
				return `/${s()}`;
			},
			class: "text-lg font-bold tracking-tight text-primary no-underline",
			children: "i18n Bench"
		}), d), i(d, t(l, {
			get href() {
				return `/${s()}`;
			},
			end: !0,
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return e().home;
			}
		}), f), i(d, t(l, {
			get href() {
				return `/${s()}/about`;
			},
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return e().methodology;
			}
		}), f), m.$$click = () => r(!n()), m.addEventListener("mouseleave", () => r(!1)), m.addEventListener("mouseenter", () => r(!0)), i(m, () => e().mockPages, null), i(m, t(Le, { get class() {
			return `transition-transform ${n() ? "rotate-180" : ""}`;
		} }), null), i(f, (() => {
			var e = a(() => !!n());
			return () => e() && (() => {
				var e = Ie(), n = e.firstChild;
				return e.addEventListener("mouseleave", () => r(!1)), e.addEventListener("mouseenter", () => r(!0)), i(n, t(p, {
					get each() {
						return c();
					},
					children: (e) => t(l, {
						get href() {
							return e.to;
						},
						class: "block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent",
						onClick: () => r(!1),
						get children() {
							return e.label;
						}
					})
				})), e;
			})();
		})(), null), i(g, () => e().goToGithub), i(h, t(ke, {}), null), i(h, t(Ne, {}), null), o;
	})();
}
n(["click"]);
function ze(e) {
	let n = f(), r = typeof performance < "u" ? performance.now() : 0;
	return y(() => {
		ne(), re("AppRoot", r);
	}), g(() => {
		document.documentElement.lang = n.locale ?? "en";
	}), t(_e, {
		get locale() {
			return n.locale;
		},
		get children() {
			return [
				t(Re, {}),
				a(() => e.children),
				t(Ce, {})
			];
		}
	});
}
export { ze as default };
var e = {
	key: "theme-toggle",
	content: {
		d: "Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.",
		a: "Design: Auto",
		b: "Design: Dunkel",
		c: "Design: Hell"
	}
};
export { e as default };
var e = {
	key: "header",
	content: {
		f: "Header",
		k: "Produkte",
		j: "Preise",
		m: "Team",
		a: "Blog",
		b: "Karriere",
		d: "FAQ",
		c: "Kontakt",
		l: "Einstellungen",
		g: "Home",
		h: "Methodik",
		i: "Testseiten",
		e: "Zu GitHub"
	}
};
export { e as default };
var e = {
	key: "footer",
	content: {
		a: "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.",
		f: "Ressourcen",
		e: "Methodik",
		c: "Beitragen",
		b: "Kontakt",
		d: "i18n Benchmark — Open-Source-Projekt. Erstellt mit Solid, Vite & Solid Router."
	}
};
export { e as default };
var e = {
	key: "header",
	content: {
		f: "Header",
		k: "Products",
		j: "Pricing",
		m: "Team",
		a: "Blog",
		b: "Careers",
		d: "FAQ",
		c: "Contact",
		l: "Settings",
		g: "Home",
		h: "Methodology",
		i: "Mock Pages",
		e: "Go to GitHub"
	}
};
export { e as default };
var e = {
	key: "theme-toggle",
	content: {
		d: "Theme mode: auto (system). Click to switch to light mode.",
		a: "Theme: Auto",
		b: "Theme: Dark",
		c: "Theme: Light"
	}
};
export { e as default };
var e = {
	key: "footer",
	content: {
		a: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
		f: "Resources",
		e: "Methodology",
		c: "Contributing",
		b: "Contact",
		d: "i18n Benchmark — Open-source project. Built with Solid, Vite & Solid Router."
	}
};
export { e as default };
var e = {
	key: "header",
	content: {
		f: "Encabezado",
		k: "Productos",
		j: "Precios",
		m: "Equipo",
		a: "Blog",
		b: "Carreras",
		d: "FAQ",
		c: "Contacto",
		l: "Ajustes",
		g: "Inicio",
		h: "Metodología",
		i: "Páginas de prueba",
		e: "Ir a GitHub"
	}
};
export { e as default };
var e = {
	key: "theme-toggle",
	content: {
		d: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
		a: "Tema: Automático",
		b: "Tema: Oscuro",
		c: "Tema: Claro"
	}
};
export { e as default };
var e = {
	key: "footer",
	content: {
		a: "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación.",
		f: "Recursos",
		e: "Metodología",
		c: "Contribución",
		b: "Contacto",
		d: "i18n Benchmark — Proyecto de código abierto. Construido con Solid, Vite y Solid Router."
	}
};
export { e as default };
var e = {
	key: "header",
	content: {
		f: "En-tête",
		k: "Produits",
		j: "Tarification",
		m: "Équipe",
		a: "Blog",
		b: "Carrières",
		d: "FAQ",
		c: "Contact",
		l: "Paramètres",
		g: "Accueil",
		h: "Méthodologie",
		i: "Pages fictives",
		e: "Aller sur GitHub"
	}
};
export { e as default };
var e = {
	key: "footer",
	content: {
		a: "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
		f: "Ressources",
		e: "Méthodologie",
		c: "Contribuer",
		b: "Contact",
		d: "i18n Benchmark — Projet open source. Construit avec Solid, Vite & Solid Router."
	}
};
export { e as default };
var e = {
	key: "theme-toggle",
	content: {
		d: "Mode thématique : auto (système). Cliquez pour passer en mode clair.",
		a: "Thème : Auto",
		b: "Thème : Sombre",
		c: "Thème : Clair"
	}
};
export { e as default };
var e = {
	key: "footer",
	content: {
		a: "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sui tempi di caricamento e sulla reattività dell'app.",
		f: "Risorse",
		e: "Metodologia",
		c: "Contribuire",
		b: "Contatti",
		d: "i18n Benchmark — Progetto open source. Creato con Solid, Vite & Solid Router."
	}
};
export { e as default };
var e = {
	key: "header",
	content: {
		f: "Intestazione",
		k: "Prodotti",
		j: "Prezzi",
		m: "Team",
		a: "Blog",
		b: "Carriere",
		d: "FAQ",
		c: "Contatti",
		l: "Impostazioni",
		g: "Home",
		h: "Metodologia",
		i: "Pagine di prova",
		e: "Vai su GitHub"
	}
};
export { e as default };
var e = {
	key: "theme-toggle",
	content: {
		d: "Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.",
		a: "Tema: Auto",
		b: "Tema: Scuro",
		c: "Tema: Chiaro"
	}
};
export { e as default };
var e = {
	key: "theme-toggle",
	content: {
		d: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
		a: "テーマ：自動",
		b: "テーマ：ダーク",
		c: "テーマ：ライト"
	}
};
export { e as default };
var e = {
	key: "footer",
	content: {
		a: "国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソーステストアプリケーションです。",
		f: "リソース",
		e: "方法論",
		c: "貢献する",
		b: "お問い合わせ",
		d: "i18n Benchmark — オープンソースプロジェクト。Solid、Vite、Solid Routerで構築されています。"
	}
};
export { e as default };
var e = {
	key: "header",
	content: {
		f: "ヘッダー",
		k: "製品",
		j: "価格設定",
		m: "チーム",
		a: "ブログ",
		b: "採用情報",
		d: "よくある質問",
		c: "お問い合わせ",
		l: "設定",
		g: "ホーム",
		h: "方法論",
		i: "モックページ",
		e: "GitHub へ"
	}
};
export { e as default };
var e = {
	key: "theme-toggle",
	content: {
		d: "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
		a: "테마: 자동",
		b: "테마: 다크",
		c: "테마: 라이트"
	}
};
export { e as default };
var e = {
	key: "header",
	content: {
		f: "헤더",
		k: "제품",
		j: "가격",
		m: "팀",
		a: "블로그",
		b: "채용",
		d: "자주 묻는 질문",
		c: "문의",
		l: "설정",
		g: "홈",
		h: "방법론",
		i: "모ック 페이지",
		e: "GitHub으로 이동"
	}
};
export { e as default };
var e = {
	key: "footer",
	content: {
		a: "번들 크기, 로딩 시간 및 앱 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위한 오픈 소스 테스트 애플ри케이션입니다.",
		f: "리소스",
		e: "방법론",
		c: "기여",
		b: "문의",
		d: "i18n Benchmark — 오픈 소스 프로젝트. Solid, Vite 및 Solid Router로 제작되었습니다."
	}
};
export { e as default };
var e = {
	key: "footer",
	content: {
		a: "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.",
		f: "Recursos",
		e: "Metodologia",
		c: "Contribuindo",
		b: "Contato",
		d: "i18n Benchmark — Projeto de código aberto. Construído com Solid, Vite & Solid Router."
	}
};
export { e as default };
var e = {
	key: "header",
	content: {
		f: "Cabeçalho",
		k: "Produtos",
		j: "Preços",
		m: "Equipe",
		a: "Blog",
		b: "Carreiras",
		d: "FAQ",
		c: "Contato",
		l: "Configurações",
		g: "Início",
		h: "Metodologia",
		i: "Páginas de Teste",
		e: "Ir para o GitHub"
	}
};
export { e as default };
var e = {
	key: "theme-toggle",
	content: {
		d: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
		a: "Tema: Automático",
		b: "Tema: Escuro",
		c: "Tema: Claro"
	}
};
export { e as default };
var e = {
	key: "footer",
	content: {
		a: "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.",
		f: "Ресурсы",
		e: "Методология",
		c: "Вклад",
		b: "Контакт",
		d: "i18n Benchmark — проект с открытым исходным кодом. Построен на Solid, Vite и Solid Router."
	}
};
export { e as default };
var e = {
	key: "header",
	content: {
		f: "Заголовок",
		k: "Продукты",
		j: "Цены",
		m: "Команда",
		a: "Блог",
		b: "Вакансии",
		d: "FAQ",
		c: "Контакт",
		l: "Настройки",
		g: "Главная",
		h: "Методология",
		i: "Мок-страницы",
		e: "Перейти на GitHub"
	}
};
export { e as default };
var e = {
	key: "theme-toggle",
	content: {
		d: "Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.",
		a: "Тема: Авто",
		b: "Тема: Темная",
		c: "Тема: Светлая"
	}
};
export { e as default };
var e = {
	key: "theme-toggle",
	content: {
		d: "主题模式：自动（系统）。点击切换到亮色模式。",
		a: "主题：自动",
		b: "主题：深色",
		c: "主题：亮色"
	}
};
export { e as default };
var e = {
	key: "header",
	content: {
		f: "页眉",
		k: "产品",
		j: "定价",
		m: "团队",
		a: "博客",
		b: "职业",
		d: "常见问题",
		c: "联系我们",
		l: "设置",
		g: "首页",
		h: "方法论",
		i: "模拟页面",
		e: "前往 GitHub"
	}
};
export { e as default };
var e = {
	key: "footer",
	content: {
		a: "一个开源测试应用程序，用于衡量国际化库对捆绑包大小、加载时间和应用程序反应性的真实影响。",
		f: "资源",
		e: "方法论",
		c: "贡献",
		b: "联系我们",
		d: "i18n Benchmark — 开源项目。使用 Solid、Vite 和 Solid Router 构建。"
	}
};
export { e as default };
