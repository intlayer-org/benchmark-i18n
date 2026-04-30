import { Dynamic as e, delegateEvents as t, effect as n, insert as r, setAttribute as i, template as a } from "solid-js/web";
import { createContext as o, createEffect as s, createMemo as c, createSignal as l, onMount as u, useContext as d } from "solid-js";
var f = {
	key: "theme-toggle",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				d: "Theme mode: auto (system). Click to switch to light mode.",
				a: "Theme: Auto",
				b: "Theme: Dark",
				c: "Theme: Light"
			},
			fr: {
				d: "Mode thématique : auto (système). Cliquez pour passer en mode clair.",
				a: "Thème : Auto",
				b: "Thème : Sombre",
				c: "Thème : Clair"
			},
			es: {
				d: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
				a: "Tema: Automático",
				b: "Tema: Oscuro",
				c: "Tema: Claro"
			},
			de: {
				d: "Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.",
				a: "Design: Auto",
				b: "Design: Dunkel",
				c: "Design: Hell"
			},
			it: {
				d: "Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.",
				a: "Tema: Auto",
				b: "Tema: Scuro",
				c: "Tema: Chiaro"
			},
			pt: {
				d: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
				a: "Tema: Automático",
				b: "Tema: Escuro",
				c: "Tema: Claro"
			},
			zh: {
				d: "主题模式：自动（系统）。点击切换到亮色模式。",
				a: "主题：自动",
				b: "主题：深色",
				c: "主题：亮色"
			},
			ja: {
				d: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
				a: "テーマ：自動",
				b: "テーマ：ダーク",
				c: "テーマ：ライト"
			},
			ko: {
				d: "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
				a: "테마: 자동",
				b: "테마: 다크",
				c: "테마: 라이트"
			},
			ru: {
				d: "Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.",
				a: "Тема: Авто",
				b: "Тема: Темная",
				c: "Тема: Светлая"
			}
		}
	}
}, p = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
}, m = (t) => {
	if (typeof t == "string") return t;
	let { type: n, props: r } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let t = [], { children: n } = e.props;
			return Object.keys(n ?? {}).forEach((e) => {
				t.push(m(n?.[e]));
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
}, h = {
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
}, g = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, _ = "translation", v = "object", y = "array", b = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => b(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => b(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: y,
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
					type: v,
					key: r
				}]
			}, i = b(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, x = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, S = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (x(e) && x(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : S(e[r], t[r]));
		return n;
	}
	return e;
}, C = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => S(e, t));
}, w = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, T = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? w : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: _,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return C(o, e, t);
	}
}, E = w, D = w, O = w, k = w, A = (e) => w, j = w, M = (e, t = !0) => [
	T(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
	E,
	D,
	O,
	A(e ?? h.defaultLocale),
	j,
	k
], N = (e, t, n = []) => b(e, {
	...t,
	plugins: n
}), P = (e, t, n = M(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return N(e.content, r, n);
}, F = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => p({
		...n,
		value: n.children,
		children: n.children
	})
}, I = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? w : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (e, { plugins: t, ...n }) => p({
		...n,
		value: "[[solid-element]]",
		children: typeof Node < "u" && e instanceof Node ? e : m(e)
	})
}, L = w, R = w, z = w, B = /* @__PURE__ */ new Map(), V = (e, t = !0) => {
	let n = `${e ?? h.defaultLocale}_${t}`;
	if (B.has(n)) return B.get(n);
	let r = [
		T(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
		E,
		D,
		A(e ?? h.defaultLocale),
		j,
		k,
		F,
		I,
		L,
		R,
		z
	];
	return B.set(n, r), r;
}, H = (e, t) => P(e, t, V(t)), U = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var W = (e = G) => {
	let { locales: t } = h;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!U) for (let t = 0; t < (g.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(g.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, G = {
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
}, K = W(G), q = o({
	locale: () => K ?? h?.defaultLocale,
	setLocale: () => null
}), J = (e, t) => {
	let n = d(q) ?? {};
	return c(() => H(e, t ?? n?.locale?.()));
}, Y = a("<button type=button class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\">");
function X() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function Z(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Q() {
	let e = J(f), [t, a] = l("auto");
	u(() => {
		let e = X();
		a(e), Z(e);
	}), s(() => {
		if (t() !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => Z("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	});
	function o() {
		let e = t(), n = e === "light" ? "dark" : e === "dark" ? "auto" : "light";
		a(n), Z(n), window.localStorage.setItem("theme", n);
	}
	let c = () => t() === "auto" ? e().themeModeAutoSystemClick.value : `Theme mode: ${t()}. Click to switch mode.`, d = () => t() === "auto" ? e().themeAuto.value : t() === "dark" ? e().themeDark.value : e().themeLight.value;
	return (() => {
		var e = Y();
		return e.$$click = o, r(e, d), n((t) => {
			var n = c(), r = c();
			return n !== t.e && i(e, "aria-label", t.e = n), r !== t.t && i(e, "title", t.t = r), t;
		}, {
			e: void 0,
			t: void 0
		}), e;
	})();
}
t(["click"]);
export { Q as default };
