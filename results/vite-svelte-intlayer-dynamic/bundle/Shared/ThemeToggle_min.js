import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { getContext as t, onMount as n } from "svelte";
import { derived as r, writable as i } from "svelte/store";
import "svelte/internal/flags/legacy";
var a = {
	de: () => import("./de-DVpQuKFR.js").then((e) => e.default),
	en: () => import("./en-C5ePg7iX.js").then((e) => e.default),
	es: () => import("./es-BMvs9ShG.js").then((e) => e.default),
	fr: () => import("./fr-Bm7ozjYa.js").then((e) => e.default),
	it: () => import("./it-W9nD46V9.js").then((e) => e.default),
	ja: () => import("./ja-CGdveLSS.js").then((e) => e.default),
	ko: () => import("./ko-yezGKLbP.js").then((e) => e.default),
	pt: () => import("./pt-IaEU4goQ.js").then((e) => e.default),
	ru: () => import("./ru-jnmHiF4f.js").then((e) => e.default),
	zh: () => import("./zh-BN_KBH8F.js").then((e) => e.default)
}, o = Symbol("intlayer"), s = () => t(o), c = {
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
}, l = c?.defaultLocale, u = (() => {
	let { subscribe: e, set: t, update: n } = i({ locale: l });
	return {
		subscribe: e,
		setLocale: (e) => n((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => r({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: l })
	};
})(), d = "translation", f = "object", p = "array", m = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => m(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => m(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: p,
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
					type: f,
					key: r
				}]
			}, i = m(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, h = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, g = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (h(e) && h(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : g(e[r], t[r]));
		return n;
	}
	return e;
}, _ = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => g(e, t));
}, v = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, y = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? v : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: d,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return _(o, e, t);
	}
}, b = v, x = v, S = v, C = v, w = (e) => v, T = v, E = (e, t = !0) => [
	y(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
	b,
	x,
	S,
	w(e ?? c.defaultLocale),
	T,
	C
], D = (e, t, n = []) => m(e, {
	...t,
	plugins: n
}), O = (e, t, n = E(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return D(e.content, r, n);
};
function k(t, n) {
	let r = e.prop(n, "Renderer", 8, void 0), i = e.prop(n, "rendererProps", 24, () => ({})), a = e.prop(n, "value", 8, void 0);
	var o = e.comment(), s = e.first_child(o), c = (t) => {
		var n = e.comment(), o = e.first_child(n);
		e.element(o, r, !1, (t, n) => {
			e.attribute_effect(t, () => ({ ...i() }));
			var r = e.text();
			e.template_effect(() => e.set_text(r, a())), e.append(n, r);
		}), e.append(t, n);
	}, l = (t) => {
		r()(t, e.spread_props(i, {
			children: (t, n) => {
				e.next();
				var r = e.text();
				e.template_effect(() => e.set_text(r, a())), e.append(t, r);
			},
			$$slots: { default: !0 }
		}));
	}, u = (t) => {
		var n = e.text();
		e.template_effect(() => e.set_text(n, a())), e.append(t, n);
	};
	e.if(s, (e) => {
		typeof r() == "string" ? e(c) : typeof r() == "function" ? e(l, 1) : e(u, -1);
	}), e.append(t, o);
}
var A = (e) => {
	let t = !!k.prototype?.$destroy, n;
	return n = t ? class extends k {
		constructor(t) {
			super({
				...t,
				props: {
					...t.props,
					Renderer: e.component,
					rendererProps: e.props,
					value: e.value
				}
			});
		}
	} : (t) => k(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "toString", {
		value: () => e.value?.toString() ?? "",
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), n;
}, j = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => A({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, M = j, N = v, P = v, F = v, I = /* @__PURE__ */ new Map(), L = (e, t = !0) => {
	let n = `${e ?? c.defaultLocale}_${t}`;
	if (I.has(n)) return I.get(n);
	let r = [
		y(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
		b,
		x,
		w(e ?? c.defaultLocale),
		T,
		C,
		j,
		M,
		N,
		P,
		F
	];
	return I.set(n, r), r;
}, R = (e, t) => O(e, t, L(t)), z = new Proxy(() => {}, {
	get: (e, t) => {
		if (t === Symbol.toPrimitive) return () => void 0;
		if (t === "toString") return () => "";
		if (t !== "then") return z;
	},
	apply: () => z
});
function B(e, t, n) {
	let i = s();
	return r(r(u, (e) => n ?? i?.locale ?? e.locale), (t, n) => {
		n(new Proxy({
			isLoading: !0,
			error: null
		}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : z }));
		let r = !1;
		return (async () => {
			try {
				let i = e[t];
				if (!i) return;
				let a = await i();
				if (r) return;
				n({
					...R(a, t),
					isLoading: !1,
					error: null
				});
			} catch (e) {
				if (r) return;
				console.error(e), n({
					isLoading: !1,
					error: e
				});
			}
		})(), () => {
			r = !0;
		};
	}, new Proxy({
		isLoading: !0,
		error: null
	}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : z }));
}
var V = e.from_html("<button type=\"button\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\"> </button>");
function H(t, r) {
	e.push(r, !0);
	let i = () => e.store_get(c, "$tt", o), [o, s] = e.setup_stores(), c = B(a, "theme-toggle");
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
	var h = V(), g = e.child(h, !0);
	e.reset(h), e.template_effect(() => {
		e.set_attribute(h, "aria-label", e.get(p)), e.set_attribute(h, "title", e.get(p)), e.set_text(g, e.get(m));
	}), e.delegated("click", h, f), e.append(t, h), e.pop(), s();
}
e.delegate(["click"]);
export { H as default };
var e = {
	key: "theme-toggle",
	content: {
		auto: "Design: Auto",
		dark: "Design: Dunkel",
		light: "Design: Hell",
		ariaLabelAuto: "Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.",
		ariaLabelLight: "Design-Modus: Hell. Klicken Sie hier, um in den dunklen Modus zu wechseln.",
		ariaLabelDark: "Design-Modus: Dunkel. Klicken Sie hier, um in den Auto-Modus zu wechseln."
	}
};
export { e as default };
var e = {
	key: "theme-toggle",
	content: {
		auto: "Theme: Auto",
		dark: "Theme: Dark",
		light: "Theme: Light",
		ariaLabelAuto: "Theme mode: auto (system). Click to switch to light mode.",
		ariaLabelLight: "Theme mode: light. Click to switch to dark mode.",
		ariaLabelDark: "Theme mode: dark. Click to switch to auto mode."
	}
};
export { e as default };
var e = {
	key: "theme-toggle",
	content: {
		auto: "Tema: Auto",
		dark: "Tema: Oscuro",
		light: "Tema: Claro",
		ariaLabelAuto: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
		ariaLabelLight: "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
		ariaLabelDark: "Modo de tema: oscuro. Haga clic para cambiar al modo automático."
	}
};
export { e as default };
var e = {
	key: "theme-toggle",
	content: {
		auto: "Thème : Auto",
		dark: "Thème : Sombre",
		light: "Thème : Clair",
		ariaLabelAuto: "Mode de thème : auto (système). Cliquez pour passer au mode clair.",
		ariaLabelLight: "Mode de thème : clair. Cliquez pour passer au mode sombre.",
		ariaLabelDark: "Mode de thème : sombre. Cliquez pour passer au mode auto."
	}
};
export { e as default };
var e = {
	key: "theme-toggle",
	content: {
		auto: "Tema: Auto",
		dark: "Tema: Scuro",
		light: "Tema: Chiaro",
		ariaLabelAuto: "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
		ariaLabelLight: "Modalità tema: chiaro. Clicca per passare alla modalità scura.",
		ariaLabelDark: "Modalità tema: scuro. Clicca per passare alla modalità auto."
	}
};
export { e as default };
var e = {
	key: "theme-toggle",
	content: {
		auto: "テーマ：自動",
		dark: "テーマ：ダーク",
		light: "テーマ：ライト",
		ariaLabelAuto: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
		ariaLabelLight: "テーマモード：ライト。クリックしてダークモードに切り替えます。",
		ariaLabelDark: "テーマモード：ダーク。クリックして自動モードに切り替えます。"
	}
};
export { e as default };
var e = {
	key: "theme-toggle",
	content: {
		auto: "테마: 자동",
		dark: "테마: 어둡게",
		light: "테마: 밝게",
		ariaLabelAuto: "테마 모드: 자동(시스템). 클릭하여 밝은 모드로 전환합니다.",
		ariaLabelLight: "테마 모드: 밝게. 클릭하여 어두운 모드로 전환합니다.",
		ariaLabelDark: "테마 모드: 어둡게. 클릭하여 자동 모드로 전환합니다."
	}
};
export { e as default };
var e = {
	key: "theme-toggle",
	content: {
		auto: "Tema: Automático",
		dark: "Tema: Escuro",
		light: "Tema: Claro",
		ariaLabelAuto: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
		ariaLabelLight: "Modo de tema: claro. Clique para mudar para o modo escuro.",
		ariaLabelDark: "Modo de tema: escuro. Clique para mudar para o modo automático."
	}
};
export { e as default };
var e = {
	key: "theme-toggle",
	content: {
		auto: "Тема: Авто",
		dark: "Тема: Темная",
		light: "Тема: Светлая",
		ariaLabelAuto: "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
		ariaLabelLight: "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
		ariaLabelDark: "Режим темы: темный. Нажмите, чтобы переключиться в автоматический режим."
	}
};
export { e as default };
var e = {
	key: "theme-toggle",
	content: {
		auto: "主题：自动",
		dark: "主题：深色",
		light: "主题：浅色",
		ariaLabelAuto: "主题模式：自动（系统）。点击切换到浅色模式。",
		ariaLabelLight: "主题模式：浅色。点击切换到深色模式。",
		ariaLabelDark: "主题模式：深色。点击切换到自动模式。"
	}
};
export { e as default };
