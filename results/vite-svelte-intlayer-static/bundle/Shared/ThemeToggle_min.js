import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { getContext as t, onMount as n } from "svelte";
import { derived as r, writable as i } from "svelte/store";
import "svelte/internal/flags/legacy";
var a = {
	key: "theme-toggle",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				auto: "Theme: Auto",
				dark: "Theme: Dark",
				light: "Theme: Light",
				ariaLabelAuto: "Theme mode: auto (system). Click to switch to light mode.",
				ariaLabelLight: "Theme mode: light. Click to switch to dark mode.",
				ariaLabelDark: "Theme mode: dark. Click to switch to auto mode."
			},
			fr: {
				auto: "Thème : Auto",
				dark: "Thème : Sombre",
				light: "Thème : Clair",
				ariaLabelAuto: "Mode de thème : auto (système). Cliquez pour passer au mode clair.",
				ariaLabelLight: "Mode de thème : clair. Cliquez pour passer au mode sombre.",
				ariaLabelDark: "Mode de thème : sombre. Cliquez pour passer au mode auto."
			},
			es: {
				auto: "Tema: Auto",
				dark: "Tema: Oscuro",
				light: "Tema: Claro",
				ariaLabelAuto: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
				ariaLabelLight: "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
				ariaLabelDark: "Modo de tema: oscuro. Haga clic para cambiar al modo automático."
			},
			de: {
				auto: "Design: Auto",
				dark: "Design: Dunkel",
				light: "Design: Hell",
				ariaLabelAuto: "Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.",
				ariaLabelLight: "Design-Modus: Hell. Klicken Sie hier, um in den dunklen Modus zu wechseln.",
				ariaLabelDark: "Design-Modus: Dunkel. Klicken Sie hier, um in den Auto-Modus zu wechseln."
			},
			it: {
				auto: "Tema: Auto",
				dark: "Tema: Scuro",
				light: "Tema: Chiaro",
				ariaLabelAuto: "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
				ariaLabelLight: "Modalità tema: chiaro. Clicca per passare alla modalità scura.",
				ariaLabelDark: "Modalità tema: scuro. Clicca per passare alla modalità auto."
			},
			pt: {
				auto: "Tema: Automático",
				dark: "Tema: Escuro",
				light: "Tema: Claro",
				ariaLabelAuto: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
				ariaLabelLight: "Modo de tema: claro. Clique para mudar para o modo escuro.",
				ariaLabelDark: "Modo de tema: escuro. Clique para mudar para o modo automático."
			},
			zh: {
				auto: "主题：自动",
				dark: "主题：深色",
				light: "主题：浅色",
				ariaLabelAuto: "主题模式：自动（系统）。点击切换到浅色模式。",
				ariaLabelLight: "主题模式：浅色。点击切换到深色模式。",
				ariaLabelDark: "主题模式：深色。点击切换到自动模式。"
			},
			ja: {
				auto: "テーマ：自動",
				dark: "テーマ：ダーク",
				light: "テーマ：ライト",
				ariaLabelAuto: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
				ariaLabelLight: "テーマモード：ライト。クリックしてダークモードに切り替えます。",
				ariaLabelDark: "テーマモード：ダーク。クリックして自動モードに切り替えます。"
			},
			ko: {
				auto: "테마: 자동",
				dark: "테마: 어둡게",
				light: "테마: 밝게",
				ariaLabelAuto: "테마 모드: 자동(시스템). 클릭하여 밝은 모드로 전환합니다.",
				ariaLabelLight: "테마 모드: 밝게. 클릭하여 어두운 모드로 전환합니다.",
				ariaLabelDark: "테마 모드: 어둡게. 클릭하여 자동 모드로 전환합니다."
			},
			ru: {
				auto: "Тема: Авто",
				dark: "Тема: Темная",
				light: "Тема: Светлая",
				ariaLabelAuto: "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
				ariaLabelLight: "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
				ariaLabelDark: "Режим темы: темный. Нажмите, чтобы переключиться в автоматический режим."
			}
		}
	}
}, o = {
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
}, s = o?.defaultLocale, c = (() => {
	let { subscribe: e, set: t, update: n } = i({ locale: s });
	return {
		subscribe: e,
		setLocale: (e) => n((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => r({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: s })
	};
})(), l = Symbol("intlayer"), u = () => t(l), d = /* @__PURE__ */ new Map(), f = (e, t) => Object.create(new Proxy(e, {
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
}), p = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = d.get(t);
	i || (i = /* @__PURE__ */ new Map(), d.set(t, i));
	let a = i.get(r);
	return a || (a = f(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, m = "translation", h = "object", g = "array", _ = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), v = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, v);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => v(e, _(t, e, {
		type: g,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: h,
			key: r
		};
		if (t.eager) {
			n[r] = v(e[r], _(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = v(e[r], _(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, y = /* @__PURE__ */ new WeakMap(), b = 0, x = (e) => {
	if (!e) return "base";
	let t = y.get(e);
	if (t) return t;
	b += 1;
	let n = `p${b}`;
	return y.set(e, n), n;
}, S = 256, C = /* @__PURE__ */ new WeakMap(), w = (e) => typeof e == "object" && !!e, T = (e, t, n) => `${e}_${t}_${x(n)}`, E = (e, t) => {
	if (!w(e)) return { hit: !1 };
	let n = C.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, D = (e, t, n) => {
	if (!w(e)) return n;
	let r = C.get(e);
	return r || (r = /* @__PURE__ */ new Map(), C.set(e, r)), r.size >= S && r.clear(), r.set(t, n), n;
}, O = (e, t = !0) => [
	I(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
	L,
	R(e ?? o.defaultLocale),
	z,
	B,
	U(e ?? o.defaultLocale),
	W,
	V,
	H
].filter((e) => e !== F), k = (e, t, n = []) => v(e, {
	...t,
	plugins: n
}), A = /* @__PURE__ */ new WeakSet(), j = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = T(r ?? o.defaultLocale, "", n), s = E(e, a);
	if (s.hit) return s.content;
	let c = n ?? O(r), l = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries,
			eager: !A.has(e)
		};
		A.add(e);
		try {
			return k(e.content, t, c);
		} finally {
			t.eager && A.delete(e);
		}
	};
	return l === null ? D(e, a, null) : Array.isArray(l) ? D(e, a, l.map(u)) : D(e, a, u(l));
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
}, P = (e, t, n) => {
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
}, F = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, I = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? F : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = P(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: m,
				key: e
			}]
		});
	}
}, L = F, R = (e) => F, z = F, B = F, V = F, H = F, U = (e) => F, W = F;
function G(t, n) {
	e.push(n, !1);
	let r = e.prop(n, "Renderer", 8, void 0), i = e.prop(n, "rendererProps", 24, () => ({})), a = e.prop(n, "value", 8, void 0), o = e.mutable_source(), s = e.mutable_source(!1);
	e.legacy_pre_effect(() => e.deep_read_state(r()), () => {
		typeof r()?.then == "function" ? (e.set(s, !0), r().then((t) => {
			e.set(o, t), e.set(s, !1);
		})) : (e.set(o, r()), e.set(s, !1));
	}), e.legacy_pre_effect_reset(), e.init();
	var c = e.comment(), l = e.first_child(c), u = (e) => {}, d = (t) => {
		var n = e.comment(), r = e.first_child(n);
		e.element(r, () => e.get(o), !1, (t, n) => {
			e.attribute_effect(t, () => ({ ...i() }));
			var r = e.text();
			e.template_effect(() => e.set_text(r, a())), e.append(n, r);
		}), e.append(t, n);
	}, f = (t) => {
		e.get(o)(t, e.spread_props(i, {
			children: (t, n) => {
				e.next();
				var r = e.text();
				e.template_effect(() => e.set_text(r, a())), e.append(t, r);
			},
			$$slots: { default: !0 }
		}));
	}, p = (t) => {
		var n = e.text();
		e.template_effect(() => e.set_text(n, a())), e.append(t, n);
	};
	e.if(l, (t) => {
		e.get(s) ? t(u) : typeof e.get(o) == "string" ? t(d, 1) : typeof e.get(o) == "function" ? t(f, 2) : t(p, -1);
	}), e.append(t, c), e.pop();
}
var K = (e) => {
	let t = !!G.prototype?.$destroy, n;
	return n = t ? function(t) {
		return new G({
			...t,
			props: {
				...t.props,
				Renderer: e.component,
				rendererProps: e.props,
				value: e.value
			}
		});
	} : (t) => G(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), Object.setPrototypeOf(n, p(e.value, Function.prototype)), n;
}, q = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => K({
		value: t.children ?? e,
		component: void 0,
		props: {}
	})
}, J = q, Y = F, X = F, Z = F, Q = /* @__PURE__ */ new Map(), $ = (e, t = !0) => {
	let n = `${e ?? o.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		q,
		I(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
		L,
		R(e ?? o.defaultLocale),
		z,
		U(e ?? o.defaultLocale),
		W,
		V,
		H,
		J,
		Y,
		X,
		Z
	].filter((e) => e !== F);
	return Q.set(n, r), r;
}, ee = (e, t) => j(e, t, $(typeof t == "object" && t ? t.locale : t)), te = (e, t) => {
	let n = u();
	return r([c], ([r]) => {
		let i = n?.locale ?? r.locale;
		return ee(e, t ?? i);
	});
}, ne = e.from_html("<button type=\"button\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\"> </button>");
function re(t, r) {
	e.push(r, !0);
	let i = () => e.store_get(c, "$tt", o), [o, s] = e.setup_stores(), c = te(a);
	function l() {
		if (typeof window > "u") return "auto";
		let e = window.localStorage.getItem("theme");
		return e === "light" || e === "dark" || e === "auto" ? e : "auto";
	}
	function u(e) {
		let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
		document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
	}
	let d = e.state("auto");
	n(() => {
		let t = l();
		e.set(d, t, !0), u(t);
	}), e.user_effect(() => {
		if (e.get(d) !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => u("auto");
		return t.addEventListener("change", n), () => t.removeEventListener("change", n);
	});
	function f() {
		let t = e.get(d) === "light" ? "dark" : e.get(d) === "dark" ? "auto" : "light";
		e.set(d, t, !0), u(t), window.localStorage.setItem("theme", t);
	}
	let p = e.derived(() => e.get(d) === "auto" ? i().ariaLabelAuto : e.get(d) === "light" ? i().ariaLabelLight : i().ariaLabelDark), m = e.derived(() => e.get(d) === "auto" ? i().auto : e.get(d) === "dark" ? i().dark : i().light);
	var h = ne(), g = e.only_child(h, !0);
	e.template_effect(() => {
		e.set_attribute(h, "aria-label", e.get(p)), e.set_attribute(h, "title", e.get(p)), e.set_text(g, e.get(m));
	}), e.delegated("click", h, f), e.append(t, h), e.pop(), s();
}
e.delegate(["click"]);
export { re as default };
