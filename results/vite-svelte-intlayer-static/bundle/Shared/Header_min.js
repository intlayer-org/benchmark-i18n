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
})(), d = Symbol("intlayer"), f = () => a(d), p = "default", m = /[^A-Za-z0-9._&=-]/g, h = /[^A-Za-z0-9._-]/g, g = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, _ = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, g);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, v = (e) => e === void 0 ? p : typeof e == "string" ? _(e, m) : Object.keys(e).sort().map((t) => `${_(t, h)}=${_(String(e[t]), h)}`).join("&"), y = (e) => Array.isArray(e) ? e.length === 0 ? [p] : e.map(v) : [v(e)], b = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? p : e[0] ?? "default";
}, x = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, S = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, C = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, w = (e, t) => {
	if (!S(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? p : b(y(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => x(e, n, t, s)).map((t) => C(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, T = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, E = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? y(n).join(",") : String(n)}`;
}).join("|") : "", D = "translation", O = "object", k = "array", A = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => A(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => A(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: k,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: O,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = A(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = A(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, j = /* @__PURE__ */ new WeakMap(), M = 0, N = (e) => {
	if (!e) return "base";
	let t = j.get(e);
	if (t) return t;
	M += 1;
	let n = `p${M}`;
	return j.set(e, n), n;
}, P = 256, F = /* @__PURE__ */ new WeakMap(), I = (e) => typeof e == "object" && !!e, L = (e, t, n) => `${e}_${t}_${N(n)}`, R = (e, t) => {
	if (!I(e)) return { hit: !1 };
	let n = F.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, z = (e, t, n) => {
	if (!I(e)) return n;
	let r = F.get(e);
	return r || (r = /* @__PURE__ */ new Map(), F.set(e, r)), r.size >= P && r.clear(), r.set(t, n), n;
}, ee = (e, t = !0) => [
	U(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
	W,
	G,
	ae,
	J(e ?? c.defaultLocale),
	Y,
	K,
	q
], te = (e, t, n = []) => A(e, {
	...t,
	plugins: n
}), ne = (e, t, n) => {
	let { locale: r, selector: i } = T(t), a = L(r ?? c.defaultLocale, E(i), n), o = R(e, a);
	if (o.hit) return o.content;
	let s = n ?? ee(r), l = w(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return te(e.content, t, s);
	};
	return l === null ? z(e, a, null) : Array.isArray(l) ? z(e, a, l.map(u)) : z(e, a, u(l));
}, B = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, V = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (B(e) && B(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : V(e[r], t[r]));
		return n;
	}
	return e;
}, re = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => V(e, t));
}, H = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, U = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? H : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: D,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return re(o, e, t);
	}
}, W = H, ie = (e) => H, G = H, ae = H, K = H, q = H, J = (e) => H, Y = H;
function X(t, n) {
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
var oe = (e) => {
	let t = !!X.prototype?.$destroy, n;
	if (n = t ? class extends X {
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
	} : (t) => X(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "toString", {
		value: () => String(e.value ?? ""),
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "valueOf", {
		value: () => e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, Symbol.toPrimitive, {
		value: () => e.value ?? "",
		writable: !0,
		configurable: !0
	}), e.value !== null && e.value !== void 0) {
		let t = Object(e.value), r = Object.getPrototypeOf(t);
		for (let i of Object.getOwnPropertyNames(r)) {
			if (i === "constructor" || i in n) continue;
			let r = t[i];
			typeof r == "function" && Object.defineProperty(n, i, {
				value: r.bind(e.value),
				writable: !0,
				configurable: !0
			});
		}
	}
	return e.additionalProps && Object.assign(n, e.additionalProps), n;
}, Z = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => oe({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, se = Z, ce = H, le = H, ue = H, Q = /* @__PURE__ */ new Map(), de = (e, t = !0) => {
	let n = `${e ?? c.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		U(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
		W,
		ie(e ?? c.defaultLocale),
		G,
		J(e ?? c.defaultLocale),
		Y,
		K,
		q,
		Z,
		se,
		ce,
		le,
		ue
	];
	return Q.set(n, r), r;
}, fe = (e, t) => ne(e, t, de(typeof t == "object" && t ? t.locale : t)), pe = (e, n) => {
	let r = f();
	return t([u], ([t]) => {
		let i = r?.locale ?? t.locale;
		return fe(e, n ?? i);
	});
};
function me(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), o(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var he = [
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
function ge(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function _e(e) {
	return he.includes(e);
}
var ve = /* @__PURE__ */ new Set([
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
function ye(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!_e(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !ve.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var $ = r(typeof window < "u" ? window.location.pathname : "/en"), be = t($, (e) => ye(e));
function xe(e, t = !1) {
	typeof window > "u" || (t ? history.replaceState(null, "", e) : history.pushState(null, "", e), $.set(window.location.pathname));
}
var Se = c.locales;
c.requiredLocales, c.defaultLocale;
var Ce = e.from_html("<option> </option>"), we = e.from_html("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none\"></select></div>");
function Te(t, r) {
	e.push(r, !1);
	let i = () => e.store_get($, "$pathname", a), [a, o] = e.setup_stores();
	function s(e) {
		let t = e.target.value;
		xe(n($).replace(/^\/[^/]+/, `/${t}`) + window.location.search + window.location.hash, !1);
	}
	e.init();
	var c = we(), l = e.child(c);
	e.each(l, 5, () => Se, (e) => e, (t, n) => {
		var r = Ce(), i = e.only_child(r, !0), a = {};
		e.template_effect((t) => {
			e.set_text(i, t), a !== (a = e.get(n)) && (r.value = (r.__value = a) ?? "");
		}, [() => ge(e.get(n))]), e.append(t, r);
	}), e.reset(l);
	var u;
	e.init_select(l), e.reset(c), e.template_effect((t) => {
		u !== (u = t) && (l.value = (l.__value = u) ?? "", e.select_option(l, u));
	}, [() => i().split("/").filter(Boolean)[0] ?? "en"]), e.delegated("change", l, s), e.append(t, c), e.pop(), o();
}
e.delegate(["change"]);
var Ee = {
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
}, De = e.from_html("<button type=\"button\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\"> </button>");
function Oe(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(s, "$tt", i), [i, a] = e.setup_stores(), s = pe(Ee);
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
	var m = De(), h = e.only_child(m, !0);
	e.template_effect(() => {
		e.set_attribute(m, "aria-label", e.get(f)), e.set_attribute(m, "title", e.get(f)), e.set_text(h, e.get(p));
	}), e.delegated("click", m, d), e.append(t, m), e.pop(), a();
}
e.delegate(["click"]);
var ke = e.from_html("<a class=\"block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent\"> </a>"), Ae = e.from_html("<div class=\"absolute top-full left-0 w-48 pt-2\" role=\"presentation\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\"></div></div>"), je = e.from_html("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><a class=\"text-lg font-bold tracking-tight text-primary no-underline\"> </a> <div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><a> </a> <a> </a> <div class=\"relative\"><button type=\"button\" class=\"nav-link flex cursor-pointer items-center gap-1 border-none bg-transparent\"> <!></button> <!></div></div></div> <div class=\"flex items-center gap-4\"><a href=\"https://github.com/intlayer-org/benchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-muted-foreground transition hover:text-foreground\"><span class=\"sr-only\"> </span> <svg viewBox=\"0 0 16 16\" aria-hidden=\"true\" width=\"20\" height=\"20\"><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg></a> <!> <!></div></nav></header>");
function Me(t, r) {
	e.push(r, !0);
	let a = () => e.store_get(be, "$route", c), o = () => e.store_get(u, "$header", c), [c, l] = e.setup_stores(), u = pe(s);
	me(n(u).header);
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
	var g = je(), _ = e.child(g), v = e.child(_), y = e.child(v), b = e.only_child(y, !0), x = e.sibling(y, 2), S = e.child(x);
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
		var n = Ae(), r = e.child(n);
		e.each(r, 21, () => e.get(p), (e) => e.to, (t, n) => {
			var r = ke(), i = e.only_child(r, !0);
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
	Te(R, {}), Oe(e.sibling(R, 2), {}), e.reset(P), e.reset(_), e.reset(g), e.template_effect(() => {
		e.set_attribute(y, "href", `/${e.get(f)}`), e.set_text(b, o().appName), e.set_attribute(S, "href", `/${e.get(f)}`), C = e.set_class(S, 1, "nav-link", null, C, { "is-active": e.get(m) }), e.set_text(w, o().home), e.set_attribute(T, "href", `/${e.get(f)}/about`), E = e.set_class(T, 1, "nav-link", null, E, { "is-active": e.get(h) }), e.set_text(D, o().methodology), e.set_text(A, `${o().mockPages ?? ""} `), e.set_text(L, o().goToGithub);
	}), e.event("mouseenter", k, () => e.set(d, !0)), e.event("mouseleave", k, () => e.set(d, !1)), e.delegated("click", k, () => e.set(d, !e.get(d))), e.append(t, g), e.pop(), l();
}
e.delegate(["click"]);
export { Me as default };
