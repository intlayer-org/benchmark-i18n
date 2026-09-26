import { delegateEvents as e, effect as t, insert as n, setAttribute as r, template as i } from "solid-js/web";
import { createContext as a, createEffect as o, createMemo as s, createRenderEffect as c, createResource as l, createSignal as u, lazy as d, onMount as ee, untrack as te, useContext as f } from "solid-js";
var ne = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), p = {
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
}, m = {
	mode: "prefix-all",
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, re = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, ie = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && re(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, ae = ["en"], oe = "__intlayerPreloaded", h = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? p?.defaultLocale ?? "en",
	mode: e.mode ?? m?.mode ?? "prefix-no-default",
	locales: e.locales ?? p?.locales ?? ae,
	rewrite: e.rewrite ?? m?.rewrite,
	domains: e.domains ?? m?.domains
}), g = (e, t) => !!e && (t ?? p.locales).includes(e), se = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var _ = {
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
}, v = (e = _) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!se) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ce = !1, le, ue = () => typeof window > "u" ? v(_) : (ce ||= (le = v(_), !0), le), de = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = h(t);
	if (!n || !r) return n;
	let a = ne(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return g(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (g(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, fe = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = h(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ie(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = de(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return v() ?? t;
}, y, b, pe = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (b === void 0 || y !== e) && (y = e, b = fe()), b;
}, x = {
	de: () => import("./intlayer-ThemeToggle-qgt8ko-de-BKa0uMHT.js").then((e) => e.t).then((e) => e.default),
	en: () => import("./intlayer-ThemeToggle-qgt8ko-en-DRwkfBu-.js").then((e) => e.t).then((e) => e.default),
	es: () => import("./intlayer-ThemeToggle-qgt8ko-es-Cn9WNhoH.js").then((e) => e.t).then((e) => e.default),
	fr: () => import("./intlayer-ThemeToggle-qgt8ko-fr-G60omwY5.js").then((e) => e.t).then((e) => e.default),
	it: () => import("./intlayer-ThemeToggle-qgt8ko-it-DanakEL4.js").then((e) => e.t).then((e) => e.default),
	ja: () => import("./intlayer-ThemeToggle-qgt8ko-ja-DaZVM25O.js").then((e) => e.t).then((e) => e.default),
	ko: () => import("./intlayer-ThemeToggle-qgt8ko-ko-CAFymVDS.js").then((e) => e.t).then((e) => e.default),
	pt: () => import("./intlayer-ThemeToggle-qgt8ko-pt-a-l6NRLh.js").then((e) => e.t).then((e) => e.default),
	ru: () => import("./intlayer-ThemeToggle-qgt8ko-ru-BVNIi5Cj.js").then((e) => e.t).then((e) => e.default),
	zh: () => import("./intlayer-ThemeToggle-qgt8ko-zh-DYh4lcqc.js").then((e) => e.t).then((e) => e.default)
}, S = pe(), C = x[S];
typeof window < "u" && typeof C == "function" && C().then((e) => {
	x.__intlayerPreloaded = {
		locale: S,
		dictionary: e
	};
}, () => void 0);
var w = /* @__PURE__ */ new Map(), me = (e, t) => Object.create(new Proxy(e, {
	get: (e, t, n) => {
		if (typeof t != "string" || t === "constructor" || t in e) return Reflect.get(e, t, n);
		let { value: r } = n;
		if (r == null) return;
		let i = Object(r)[t];
		return typeof i == "function" ? i.bind(r) : i;
	},
	has: (e, n) => n in e || typeof n == "string" && n !== "constructor" && t !== null && n in t
}), {
	toString: { value() {
		return String(this.value ?? "");
	} },
	valueOf: { value() {
		return this.value;
	} },
	[Symbol.toPrimitive]: { value() {
		return this.value ?? "";
	} }
}), he = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = w.get(t);
	i || (i = /* @__PURE__ */ new Map(), w.set(t, i));
	let a = i.get(r);
	return a || (a = me(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ge = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, he(t, Array.prototype)), r;
}, T = /* @__PURE__ */ new WeakMap(), E = 0, _e = (e) => {
	if (!e) return "base";
	let t = T.get(e);
	if (t) return t;
	E += 1;
	let n = `p${E}`;
	return T.set(e, n), n;
}, ve = 256, D = /* @__PURE__ */ new WeakMap(), O = (e) => typeof e == "object" && !!e, ye = (e, t, n) => `${e}_${t}_${_e(n)}`, be = (e, t) => {
	if (!O(e)) return { hit: !1 };
	let n = D.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, k = (e, t, n) => {
	if (!O(e)) return n;
	let r = D.get(e);
	return r || (r = /* @__PURE__ */ new Map(), D.set(e, r)), r.size >= ve && r.clear(), r.set(t, n), n;
}, xe = "translation", Se = "object", Ce = "array", A = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), j = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, j);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => j(e, A(t, e, {
		type: Ce,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Se,
			key: r
		};
		if (t.eager) {
			n[r] = j(e[r], A(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = j(e[r], A(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, M = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, N = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !M(e) || !M(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? N(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, we = (e, t, n) => {
	let r = (t) => e[t], i = r(t);
	if (typeof i == "string") return i;
	let a = [
		t,
		t.split("-")[0],
		n,
		n?.split("-")[0]
	], o = [];
	for (let e = 0; e < a.length; e++) {
		let t = a[e];
		if (!t || a.indexOf(t) < e) continue;
		let n = r(t);
		if (n !== void 0) {
			if (typeof n == "string") {
				if (o.length === 0) return n;
				continue;
			}
			o.push(n);
		}
	}
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => N(e, t));
}, P = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, F = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? P : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = we(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: xe,
				key: e
			}]
		});
	}
}, I = P, L = (e) => P, R = P, Te = P, z = P, B = P, V = (e) => P, H = P, Ee = (e, t = !0) => [
	F(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	I,
	L(e ?? p.defaultLocale),
	R,
	Te,
	V(e ?? p.defaultLocale),
	H,
	z,
	B
].filter((e) => e !== P), De = (e, t, n = []) => j(e, {
	...t,
	plugins: n
}), U = /* @__PURE__ */ new WeakSet(), Oe = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ye(r ?? p.defaultLocale, "", n), o = be(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ee(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !U.has(e)
		};
		U.add(e);
		try {
			return De(e.content, t, s);
		} finally {
			t.eager && U.delete(e);
		}
	};
	return c === null ? k(e, a, null) : Array.isArray(c) ? k(e, a, c.map(l)) : k(e, a, l(c));
}, ke = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[oe];
	if (n && n.locale === t) return n.dictionary;
}, W = null, G = null;
W?.catch(() => {}), G?.catch(() => {});
var Ae = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ge({
		value: t.children,
		children: t.children
	})
}, je = P, Me = P;
d(() => W.then((e) => ({ default: e.MarkdownRenderer }))), d(() => W.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var Ne = P;
d(() => G.then((e) => ({ default: e })));
var Pe = P, K = /* @__PURE__ */ new Map(), Fe = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (K.has(n)) return K.get(n);
	let r = [
		Ae,
		F(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		I,
		L(e ?? p.defaultLocale),
		R,
		V(e ?? p.defaultLocale),
		H,
		z,
		B,
		je,
		Me,
		Ne,
		Pe
	].filter((e) => e !== P);
	return K.set(n, r), r;
}, Ie = (e, t) => Oe(e, t, Fe(typeof t == "object" && t ? t.locale : t)), Le = ue, q = a({
	locale: () => Le() ?? p?.defaultLocale,
	setLocale: () => null
}), J = {
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, Y = Symbol("NO_PENDING_PRIMITIVE_FALLBACK"), Re = Symbol("LOADABLE_SETTLED_VALUE"), X = /* @__PURE__ */ new Map(), ze = (e) => typeof e == "string" ? e : e.cacheKey, Z = (e, t) => t.reduce((e, t) => {
	if (e != null) return Reflect.get(Object(e), t);
}, e), Be = (e, t) => typeof e == "function" ? e(t) : e, Ve = (e, t) => {
	let n = ze(e), r = X.get(n);
	if (r?.status === "success") return r.value;
	if (r?.status === "pending") return r.promise;
	let i = Be(t, e).then((e) => (X.set(n, {
		status: "success",
		value: e
	}), e), (e) => {
		throw X.delete(n), e;
	});
	return X.set(n, {
		status: "pending",
		promise: i
	}), i;
}, He = (e, t) => {
	let n = ze(e);
	X.has(n) || X.set(n, {
		status: "success",
		value: t
	});
}, Ue = (e, t) => typeof t == "function" ? t.bind(e) : t, We = (e) => e === Symbol.toPrimitive ? () => "" : e === Symbol.iterator ? () => ({ next: () => ({
	done: !0,
	value: void 0
}) }) : e === "length" ? 0 : e === J.toString ? () => "" : e === J.valueOf ? () => void 0 : e === J.value ? "" : Y, Q = (e) => {
	let t = (n) => new Proxy(() => void 0, {
		get(r, i) {
			if (i === J.promiseThen) return;
			let a = Z(e(), n);
			if (i === Re) return a;
			if (a != null) return i === Symbol.toPrimitive ? () => a : Ue(a, Reflect.get(Object(a), i));
			let o = We(i);
			return o === Y ? t([...n, i]) : o;
		},
		apply(t, r, i) {
			let a = Z(e(), n);
			return typeof a == "function" ? Reflect.apply(a, r, i) : i.length === 0 ? a ?? "" : Q(() => {
				let t = Z(e(), n);
				if (typeof t == "function") return te(() => Reflect.apply(t, r, i));
			});
		}
	});
	return t([]);
}, Ge = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[Re];
}, Ke = (e, t) => {
	let [n] = l(() => typeof e == "function" ? e() : e, (e) => Ve(e, t));
	return c(() => {
		n();
	}), Q(() => n());
}, qe = (e, t) => {
	let n = f(q) ?? {}, r = s(() => {
		let r = n?.locale?.();
		return Ie(Ge(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, Je = (e, t, n) => {
	let { locale: r } = f(q) ?? {}, i = p.defaultLocale, a = String(t), o = e, s = n, c = () => s ?? r?.() ?? i, l = () => {
		let e = c();
		return {
			cacheKey: `${a}.${e}`,
			locale: e
		};
	}, u = ({ locale: e }) => {
		let t = o[e];
		return t ? t() : Promise.reject(Error(`No dynamic dictionary loader found for key "${a}" and locale "${e}".`));
	}, d = ke(o, c());
	return d && He(l(), d), qe(Ke(l, u), s);
}, Ye = i("<button type=button class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\">");
function Xe() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Ze() {
	let e = Je(x, "theme-toggle"), [i, a] = u("auto");
	ee(() => {
		let e = Xe();
		a(e), $(e);
	}), o(() => {
		if (i() !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => $("auto");
		return e.addEventListener("change", t), () => {
			e.removeEventListener("change", t);
		};
	});
	function s() {
		let e = i(), t = e === "light" ? "dark" : e === "dark" ? "auto" : "light";
		a(t), $(t), window.localStorage.setItem("theme", t);
	}
	let c = () => i() === "auto" ? e().d.value : `Theme mode: ${i()}. Click to switch mode.`, l = () => i() === "auto" ? e().a.value : i() === "dark" ? e().b.value : e().c.value;
	return (() => {
		var e = Ye();
		return e.$$click = s, n(e, l), t((t) => {
			var n = c(), i = c();
			return n !== t.e && r(e, "aria-label", t.e = n), i !== t.t && r(e, "title", t.t = i), t;
		}, {
			e: void 0,
			t: void 0
		}), e;
	})();
}
e(["click"]);
export { Ze as default };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "theme-toggle", r = {
	d: "Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.",
	a: "Design: Auto",
	b: "Design: Dunkel",
	c: "Design: Hell"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "theme-toggle", r = {
	d: "Theme mode: auto (system). Click to switch to light mode.",
	a: "Theme: Auto",
	b: "Theme: Dark",
	c: "Theme: Light"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "theme-toggle", r = {
	d: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
	a: "Tema: Automático",
	b: "Tema: Oscuro",
	c: "Tema: Claro"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "theme-toggle", r = {
	d: "Mode thématique : auto (système). Cliquez pour passer en mode clair.",
	a: "Thème : Auto",
	b: "Thème : Sombre",
	c: "Thème : Clair"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "theme-toggle", r = {
	d: "Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.",
	a: "Tema: Auto",
	b: "Tema: Scuro",
	c: "Tema: Chiaro"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "theme-toggle", r = {
	d: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
	a: "テーマ：自動",
	b: "テーマ：ダーク",
	c: "テーマ：ライト"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "theme-toggle", r = {
	d: "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
	a: "테마: 자동",
	b: "테마: 다크",
	c: "테마: 라이트"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "theme-toggle", r = {
	d: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
	a: "Tema: Automático",
	b: "Tema: Escuro",
	c: "Tema: Claro"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "theme-toggle", r = {
	d: "Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.",
	a: "Тема: Авто",
	b: "Тема: Темная",
	c: "Тема: Светлая"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "theme-toggle", r = {
	d: "主题模式：自动（系统）。点击切换到亮色模式。",
	a: "主题：自动",
	b: "主题：深色",
	c: "主题：亮色"
}, i = {
	key: n,
	content: r
};
export { t };
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
};
export { t };
