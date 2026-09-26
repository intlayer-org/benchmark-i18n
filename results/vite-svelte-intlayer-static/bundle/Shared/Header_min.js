import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { derived as t, get as n, writable as r } from "svelte/store";
import i from "lucide-svelte/icons/chevron-down";
import { getContext as a, onMount as o } from "svelte";
import "svelte/internal/flags/legacy";
var s = {
	key: "header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				home: "Home",
				methodology: "Methodology",
				mockPages: "Mock Pages",
				products: "Products",
				pricing: "Pricing",
				team: "Team",
				blog: "Blog",
				careers: "Careers",
				faq: "FAQ",
				contact: "Contact",
				settings: "Settings",
				appName: "i18n Bench",
				goToGithub: "Go to GitHub",
				header: "Header"
			},
			fr: {
				home: "Accueil",
				methodology: "Méthodologie",
				mockPages: "Pages fictives",
				products: "Produits",
				pricing: "Tarification",
				team: "Équipe",
				blog: "Blog",
				careers: "Carrières",
				faq: "FAQ",
				contact: "Contact",
				settings: "Paramètres",
				appName: "Benchmark i18n",
				goToGithub: "Aller sur GitHub",
				header: "En-tête"
			},
			es: {
				home: "Inicio",
				methodology: "Metodología",
				mockPages: "Páginas de prueba",
				products: "Productos",
				pricing: "Precios",
				team: "Equipo",
				blog: "Blog",
				careers: "Carreras",
				faq: "FAQ",
				contact: "Contacto",
				settings: "Ajustes",
				appName: "i18n Bench",
				goToGithub: "Ir a GitHub",
				header: "Encabezado"
			},
			de: {
				home: "Startseite",
				methodology: "Methodik",
				mockPages: "Mock-Seiten",
				products: "Produkte",
				pricing: "Preise",
				team: "Team",
				blog: "Blog",
				careers: "Karriere",
				faq: "FAQ",
				contact: "Kontakt",
				settings: "Einstellungen",
				appName: "i18n Bench",
				goToGithub: "Zu GitHub gehen",
				header: "Header"
			},
			it: {
				home: "Home",
				methodology: "Metodologia",
				mockPages: "Pagine mock",
				products: "Prodotti",
				pricing: "Prezzi",
				team: "Team",
				blog: "Blog",
				careers: "Carriere",
				faq: "FAQ",
				contact: "Contatti",
				settings: "Impostazioni",
				appName: "i18n Bench",
				goToGithub: "Vai su GitHub",
				header: "Intestazione"
			},
			pt: {
				home: "Início",
				methodology: "Metodologia",
				mockPages: "Páginas fictícias",
				products: "Produtos",
				pricing: "Preços",
				team: "Equipe",
				blog: "Blog",
				careers: "Carreiras",
				faq: "FAQ",
				contact: "Contato",
				settings: "Configurações",
				appName: "i18n Bench",
				goToGithub: "Ir para o GitHub",
				header: "Cabeçalho"
			},
			zh: {
				home: "首页",
				methodology: "方法论",
				mockPages: "模拟页面",
				products: "产品",
				pricing: "价格",
				team: "团队",
				blog: "博客",
				careers: "职业生涯",
				faq: "常见问题",
				contact: "联系我们",
				settings: "设置",
				appName: "i18n 基准",
				goToGithub: "前往 GitHub",
				header: "页眉"
			},
			ja: {
				home: "ホーム",
				methodology: "方法論",
				mockPages: "モックページ",
				products: "製品",
				pricing: "価格",
				team: "チーム",
				blog: "ブログ",
				careers: "採用情報",
				faq: "よくある質問",
				contact: "お問い合わせ",
				settings: "設定",
				appName: "i18n ベンチ",
				goToGithub: "GitHub へ",
				header: "ヘッダー"
			},
			ko: {
				home: "홈",
				methodology: "방법론",
				mockPages: "모의 페이지",
				products: "제품",
				pricing: "가격",
				team: "팀",
				blog: "블로그",
				careers: "채용",
				faq: "FAQ",
				contact: "연락처",
				settings: "설정",
				appName: "i18n 벤치",
				goToGithub: "GitHub로 이동",
				header: "헤더"
			},
			ru: {
				home: "Главная",
				methodology: "Методология",
				mockPages: "Мок-страницы",
				products: "Продукты",
				pricing: "Цены",
				team: "Команда",
				blog: "Блог",
				careers: "Вакансии",
				faq: "FAQ",
				contact: "Контакты",
				settings: "Настройки",
				appName: "i18n Бенч",
				goToGithub: "Перейти на GitHub",
				header: "Шапка"
			}
		}
	}
}, c = {
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
	let { subscribe: e, set: n, update: i } = r({ locale: l });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => t({ subscribe: e }, (e) => e.locale),
		reset: () => n({ locale: l })
	};
})(), d = Symbol("intlayer"), f = () => a(d), p = /* @__PURE__ */ new Map(), m = (e, t) => Object.create(new Proxy(e, {
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
}), h = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = p.get(t);
	i || (i = /* @__PURE__ */ new Map(), p.set(t, i));
	let a = i.get(r);
	return a || (a = m(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, g = "translation", _ = "object", v = "array", y = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), b = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, b);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => b(e, y(t, e, {
		type: v,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: _,
			key: r
		};
		if (t.eager) {
			n[r] = b(e[r], y(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = b(e[r], y(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, x = /* @__PURE__ */ new WeakMap(), S = 0, C = (e) => {
	if (!e) return "base";
	let t = x.get(e);
	if (t) return t;
	S += 1;
	let n = `p${S}`;
	return x.set(e, n), n;
}, w = 256, T = /* @__PURE__ */ new WeakMap(), E = (e) => typeof e == "object" && !!e, D = (e, t, n) => `${e}_${t}_${C(n)}`, O = (e, t) => {
	if (!E(e)) return { hit: !1 };
	let n = T.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, k = (e, t, n) => {
	if (!E(e)) return n;
	let r = T.get(e);
	return r || (r = /* @__PURE__ */ new Map(), T.set(e, r)), r.size >= w && r.clear(), r.set(t, n), n;
}, A = (e, t = !0) => [
	R(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
	z,
	B(e ?? c.defaultLocale),
	V,
	ee,
	W(e ?? c.defaultLocale),
	G,
	H,
	U
].filter((e) => e !== L), j = (e, t, n = []) => b(e, {
	...t,
	plugins: n
}), M = /* @__PURE__ */ new WeakSet(), N = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = D(r ?? c.defaultLocale, "", n), o = O(e, a);
	if (o.hit) return o.content;
	let s = n ?? A(r), l = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !M.has(e)
		};
		M.add(e);
		try {
			return j(e.content, t, s);
		} finally {
			t.eager && M.delete(e);
		}
	};
	return l === null ? k(e, a, null) : Array.isArray(l) ? k(e, a, l.map(u)) : k(e, a, u(l));
}, P = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, F = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !P(e) || !P(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? F(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, I = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => F(e, t));
}, L = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, R = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? L : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = I(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: g,
				key: e
			}]
		});
	}
}, z = L, B = (e) => L, V = L, ee = L, H = L, U = L, W = (e) => L, G = L;
function K(t, n) {
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
var te = (e) => {
	let t = !!K.prototype?.$destroy, n;
	return n = t ? function(t) {
		return new K({
			...t,
			props: {
				...t.props,
				Renderer: e.component,
				rendererProps: e.props,
				value: e.value
			}
		});
	} : (t) => K(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), Object.setPrototypeOf(n, h(e.value, Function.prototype)), n;
}, q = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => te({
		value: t.children ?? e,
		component: void 0,
		props: {}
	})
}, ne = q, re = L, J = L, Y = L, X = /* @__PURE__ */ new Map(), ie = (e, t = !0) => {
	let n = `${e ?? c.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		q,
		R(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
		z,
		B(e ?? c.defaultLocale),
		V,
		W(e ?? c.defaultLocale),
		G,
		H,
		U,
		ne,
		re,
		J,
		Y
	].filter((e) => e !== L);
	return X.set(n, r), r;
}, ae = (e, t) => N(e, t, ie(typeof t == "object" && t ? t.locale : t)), Z = (e, n) => {
	let r = f();
	return t([u], ([t]) => {
		let i = r?.locale ?? t.locale;
		return ae(e, n ?? i);
	});
};
function oe(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), o(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var se = [
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
];
function ce(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function le(e) {
	return se.includes(e);
}
var ue = /* @__PURE__ */ new Set([
	"",
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"pricing",
	"products",
	"settings",
	"team"
]);
function de(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!le(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !ue.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var Q = r(typeof window < "u" ? window.location.pathname : "/en"), fe = t(Q, (e) => de(e));
function pe(e, t = !1) {
	typeof window > "u" || (t ? history.replaceState(null, "", e) : history.pushState(null, "", e), Q.set(window.location.pathname));
}
var me = c.locales;
c.requiredLocales, c.defaultLocale;
var he = e.from_html("<option> </option>"), ge = e.from_html("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none\"></select></div>");
function _e(t, r) {
	e.push(r, !1);
	let i = () => e.store_get(Q, "$pathname", a), [a, o] = e.setup_stores();
	function s(e) {
		let t = e.target.value;
		pe(n(Q).replace(/^\/[^/]+/, `/${t}`) + window.location.search + window.location.hash, !1);
	}
	e.init();
	var c = ge(), l = e.child(c);
	e.each(l, 5, () => me, (e) => e, (t, n) => {
		var r = he(), i = e.only_child(r, !0), a = {};
		e.template_effect((t) => {
			e.set_text(i, t), a !== (a = e.get(n)) && (r.value = (r.__value = a) ?? "");
		}, [() => ce(e.get(n))]), e.append(t, r);
	}), e.reset(l);
	var u;
	e.init_select(l), e.reset(c), e.template_effect((t) => {
		u !== (u = t) && (l.value = (l.__value = u) ?? "", e.select_option(l, u));
	}, [() => i().split("/").filter(Boolean)[0] ?? "en"]), e.delegated("change", l, s), e.append(t, c), e.pop(), o();
}
e.delegate(["change"]);
var ve = {
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
}, ye = e.from_html("<button type=\"button\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\"> </button>");
function $(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(s, "$tt", i), [i, a] = e.setup_stores(), s = Z(ve);
	function c() {
		if (typeof window > "u") return "auto";
		let e = window.localStorage.getItem("theme");
		return e === "light" || e === "dark" || e === "auto" ? e : "auto";
	}
	function l(e) {
		let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
		document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
	}
	let u = e.state("auto");
	o(() => {
		let t = c();
		e.set(u, t, !0), l(t);
	}), e.user_effect(() => {
		if (e.get(u) !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => l("auto");
		return t.addEventListener("change", n), () => t.removeEventListener("change", n);
	});
	function d() {
		let t = e.get(u) === "light" ? "dark" : e.get(u) === "dark" ? "auto" : "light";
		e.set(u, t, !0), l(t), window.localStorage.setItem("theme", t);
	}
	let f = e.derived(() => e.get(u) === "auto" ? r().ariaLabelAuto : e.get(u) === "light" ? r().ariaLabelLight : r().ariaLabelDark), p = e.derived(() => e.get(u) === "auto" ? r().auto : e.get(u) === "dark" ? r().dark : r().light);
	var m = ye(), h = e.only_child(m, !0);
	e.template_effect(() => {
		e.set_attribute(m, "aria-label", e.get(f)), e.set_attribute(m, "title", e.get(f)), e.set_text(h, e.get(p));
	}), e.delegated("click", m, d), e.append(t, m), e.pop(), a();
}
e.delegate(["click"]);
var be = e.from_html("<a class=\"block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent\"> </a>"), xe = e.from_html("<div class=\"absolute top-full left-0 w-48 pt-2\" role=\"presentation\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\"></div></div>"), Se = e.from_html("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><a class=\"text-lg font-bold tracking-tight text-primary no-underline\"> </a> <div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><a> </a> <a> </a> <div class=\"relative\"><button type=\"button\" class=\"nav-link flex cursor-pointer items-center gap-1 border-none bg-transparent\"> <!></button> <!></div></div></div> <div class=\"flex items-center gap-4\"><a href=\"https://github.com/intlayer-org/benchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-muted-foreground transition hover:text-foreground\"><span class=\"sr-only\"> </span> <svg viewBox=\"0 0 16 16\" aria-hidden=\"true\" width=\"20\" height=\"20\"><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg></a> <!> <!></div></nav></header>");
function Ce(t, r) {
	e.push(r, !0);
	let a = () => e.store_get(fe, "$route", c), o = () => e.store_get(u, "$header", c), [c, l] = e.setup_stores(), u = Z(s);
	oe(n(u).header);
	let d = e.state(!1), f = e.derived(() => a().kind === "ok" ? a().locale : "en"), p = e.derived(() => [
		{
			to: `/${e.get(f)}/products`,
			label: o().products
		},
		{
			to: `/${e.get(f)}/pricing`,
			label: o().pricing
		},
		{
			to: `/${e.get(f)}/team`,
			label: o().team
		},
		{
			to: `/${e.get(f)}/blog`,
			label: o().blog
		},
		{
			to: `/${e.get(f)}/careers`,
			label: o().careers
		},
		{
			to: `/${e.get(f)}/faq`,
			label: o().faq
		},
		{
			to: `/${e.get(f)}/contact`,
			label: o().contact
		},
		{
			to: `/${e.get(f)}/settings`,
			label: o().settings
		}
	]), m = e.derived(() => a().kind === "ok" && a().page === ""), h = e.derived(() => a().kind === "ok" && a().page === "about");
	var g = Se(), _ = e.child(g), v = e.child(_), y = e.child(v), b = e.only_child(y, !0), x = e.sibling(y, 2), S = e.child(x);
	let C;
	var w = e.only_child(S, !0), T = e.sibling(S, 2);
	let E;
	var D = e.only_child(T, !0), O = e.sibling(T, 2), k = e.child(O), A = e.child(k), j = e.sibling(A);
	{
		let t = e.derived(() => e.get(d) ? "transition-transform rotate-180" : "transition-transform");
		i(j, {
			size: 14,
			get class() {
				return e.get(t);
			}
		});
	}
	e.reset(k);
	var M = e.sibling(k, 2), N = (t) => {
		var n = xe(), r = e.child(n);
		e.each(r, 21, () => e.get(p), (e) => e.to, (t, n) => {
			var r = be(), i = e.only_child(r, !0);
			e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.delegated("click", r, () => e.set(d, !1)), e.append(t, r);
		}), e.reset(r), e.reset(n), e.event("mouseenter", n, () => e.set(d, !0)), e.event("mouseleave", n, () => e.set(d, !1)), e.append(t, n);
	};
	e.if(M, (t) => {
		e.get(d) && t(N);
	}), e.reset(O), e.reset(x), e.reset(v);
	var P = e.sibling(v, 2), F = e.child(P), I = e.child(F), L = e.only_child(I, !0);
	e.next(2), e.reset(F);
	var R = e.sibling(F, 2);
	_e(R, {}), $(e.sibling(R, 2), {}), e.reset(P), e.reset(_), e.reset(g), e.template_effect(() => {
		e.set_attribute(y, "href", `/${e.get(f)}`), e.set_text(b, o().appName), e.set_attribute(S, "href", `/${e.get(f)}`), C = e.set_class(S, 1, "nav-link", null, C, { "is-active": e.get(m) }), e.set_text(w, o().home), e.set_attribute(T, "href", `/${e.get(f)}/about`), E = e.set_class(T, 1, "nav-link", null, E, { "is-active": e.get(h) }), e.set_text(D, o().methodology), e.set_text(A, `${o().mockPages ?? ""} `), e.set_text(L, o().goToGithub);
	}), e.event("mouseenter", k, () => e.set(d, !0)), e.event("mouseleave", k, () => e.set(d, !1)), e.delegated("click", k, () => e.set(d, !e.get(d))), e.append(t, g), e.pop(), l();
}
e.delegate(["click"]);
export { Ce as default };
