import { Dynamic as e, createComponent as t, delegateEvents as n, effect as r, insert as i, memo as a, setAttribute as o, template as s } from "solid-js/web";
import { For as c, createContext as l, createEffect as u, createMemo as d, createSignal as f, onMount as p, useContext as m } from "solid-js";
import { A as h, useLocation as g, useNavigate as _, useParams as v } from "@solidjs/router";
var y = {
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
}, b = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
}, x = (t) => {
	if (typeof t == "string") return t;
	let { type: n, props: r } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let t = [], { children: n } = e.props;
			return Object.keys(n ?? {}).forEach((e) => {
				t.push(x(n?.[e]));
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
}, S = {
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
}, C = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, ee = "translation", te = "object", w = "array", T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => T(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: w,
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
					type: te,
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
}, ne = (e, t, n) => {
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
}, O = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, k = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? O : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ee,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return ne(o, e, t);
	}
}, A = O, j = O, re = O, M = O, N = (e) => O, P = O, ie = (e, t = !0) => [
	k(e ?? S.defaultLocale, t ? S.defaultLocale : void 0),
	A,
	j,
	re,
	N(e ?? S.defaultLocale),
	P,
	M
], F = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), I = (e, t, n = ie(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return F(e.content, r, n);
}, L = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => b({
		...n,
		value: n.children,
		children: n.children
	})
}, R = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? O : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (e, { plugins: t, ...n }) => b({
		...n,
		value: "[[solid-element]]",
		children: typeof Node < "u" && e instanceof Node ? e : x(e)
	})
}, z = O, B = O, V = O, H = /* @__PURE__ */ new Map(), U = (e, t = !0) => {
	let n = `${e ?? S.defaultLocale}_${t}`;
	if (H.has(n)) return H.get(n);
	let r = [
		k(e ?? S.defaultLocale, t ? S.defaultLocale : void 0),
		A,
		j,
		N(e ?? S.defaultLocale),
		P,
		M,
		L,
		R,
		z,
		B,
		V
	];
	return H.set(n, r), r;
}, W = (e, t) => I(e, t, U(t)), G = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var K = (e = q) => {
	let { locales: t } = S;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!G) for (let t = 0; t < (C.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(C.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
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
}, J = K(q), Y = l({
	locale: () => J ?? S?.defaultLocale,
	setLocale: () => null
}), ae = (e, t) => {
	let n = m(Y) ?? {};
	return d(() => W(e, t ?? n?.locale?.()));
}, oe = (e) => {
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
}, X = /* @__PURE__ */ new Map(), se = (e, t) => (X.has(e) || X.set(e, oe(t)), X.get(e).read()), Z = (e, t, n) => {
	let { locale: r } = m(Y) ?? {}, i = S.defaultLocale, a = n ?? r?.() ?? i;
	return ae(se(`${String(t)}.${a}`, e[a]?.()), a);
};
function ce(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), p(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var le = [
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
], ue = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, de = s("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primary\">"), fe = s("<option>");
function pe() {
	let e = v(), n = _(), a = g(), o = (e) => {
		let t = a.pathname.replace(/^\/[^/]+/, `/${e}`);
		n(`${t}${a.search}${a.hash}`);
	};
	return (() => {
		var n = de(), a = n.firstChild;
		return a.addEventListener("change", (e) => o(e.currentTarget.value)), i(a, t(c, {
			each: le,
			children: (e) => (() => {
				var t = fe();
				return t.value = e, i(t, () => ue(e)), t;
			})()
		})), r(() => a.value = e.locale ?? "en"), n;
	})();
}
var me = {
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
}, Q = s("<button type=button class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\">");
function he() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function ge() {
	let e = Z(me, "theme-toggle"), [t, n] = f("auto");
	p(() => {
		let e = he();
		n(e), $(e);
	}), u(() => {
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
	let s = () => t() === "auto" ? e().themeModeAutoSystemClick.value : `Theme mode: ${t()}. Click to switch mode.`, c = () => t() === "auto" ? e().themeAuto.value : t() === "dark" ? e().themeDark.value : e().themeLight.value;
	return (() => {
		var e = Q();
		return e.$$click = a, i(e, c), r((t) => {
			var n = s(), r = s();
			return n !== t.e && o(e, "aria-label", t.e = n), r !== t.t && o(e, "title", t.t = r), t;
		}, {
			e: void 0,
			t: void 0
		}), e;
	})();
}
n(["click"]);
var _e = s("<svg width=14 height=14 viewBox=\"0 0 24 24\"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d=\"m6 9 6 6 6-6\">"), ve = s("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><div class=relative><button type=button class=\"flex cursor-pointer items-center gap-1 border-none bg-transparent nav-link\"></button></div></div></div><div class=\"flex items-center gap-4\"><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-muted-foreground transition hover:text-foreground\"><span class=sr-only></span><svg viewBox=\"0 0 16 16\"aria-hidden=true width=20 height=20><path fill=currentColor d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\">"), ye = s("<div class=\"absolute left-0 top-full w-48 pt-2\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\">");
function be(e) {
	return (() => {
		var t = _e();
		return r(() => o(t, "class", e.class)), t;
	})();
}
function xe() {
	let e = Z(y, "header");
	ce(e().header.value);
	let [n, r] = f(!1), o = v(), s = () => o.locale ?? "en", l = () => [
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
		var o = ve(), u = o.firstChild.firstChild, d = u.firstChild, f = d.firstChild, p = f.firstChild, m = u.nextSibling, g = m.firstChild.firstChild;
		return i(u, t(h, {
			get href() {
				return `/${s()}`;
			},
			class: "text-lg font-bold tracking-tight text-primary no-underline",
			children: "i18n Bench"
		}), d), i(d, t(h, {
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
		}), f), i(d, t(h, {
			get href() {
				return `/${s()}/about`;
			},
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return e().methodology;
			}
		}), f), p.$$click = () => r(!n()), p.addEventListener("mouseleave", () => r(!1)), p.addEventListener("mouseenter", () => r(!0)), i(p, () => e().mockPages, null), i(p, t(be, { get class() {
			return `transition-transform ${n() ? "rotate-180" : ""}`;
		} }), null), i(f, (() => {
			var e = a(() => !!n());
			return () => e() && (() => {
				var e = ye(), n = e.firstChild;
				return e.addEventListener("mouseleave", () => r(!1)), e.addEventListener("mouseenter", () => r(!0)), i(n, t(c, {
					get each() {
						return l();
					},
					children: (e) => t(h, {
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
		})(), null), i(g, () => e().goToGithub), i(m, t(pe, {}), null), i(m, t(ge, {}), null), o;
	})();
}
n(["click"]);
export { xe as default };
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
