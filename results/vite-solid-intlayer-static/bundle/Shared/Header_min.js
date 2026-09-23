import { createComponent as e, delegateEvents as t, effect as n, insert as r, memo as i, setAttribute as a, template as o } from "solid-js/web";
import { For as s, createContext as c, createEffect as l, createMemo as u, createSignal as d, lazy as f, onMount as p, useContext as m } from "solid-js";
import { A as h, useLocation as g, useNavigate as ee, useParams as _ } from "@solidjs/router";
var te = {
	key: "header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
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
			},
			fr: {
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
			},
			es: {
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
			},
			de: {
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
			},
			it: {
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
			},
			pt: {
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
			},
			zh: {
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
			},
			ja: {
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
			},
			ko: {
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
			},
			ru: {
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
		}
	}
}, v = {
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
}, y = {
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
}, ne = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var b = {
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
}, re = ((e = b) => {
	let { locales: t } = v;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ne) for (let t = 0; t < (y.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(y.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})(b), ie = c({
	locale: () => re ?? v?.defaultLocale,
	setLocale: () => null
}), x = /* @__PURE__ */ new WeakMap(), S = 0, ae = (e) => {
	if (!e) return "base";
	let t = x.get(e);
	if (t) return t;
	S += 1;
	let n = `p${S}`;
	return x.set(e, n), n;
}, oe = 256, C = /* @__PURE__ */ new WeakMap(), w = (e) => typeof e == "object" && !!e, T = (e, t, n) => `${e}_${t}_${ae(n)}`, E = (e, t) => {
	if (!w(e)) return { hit: !1 };
	let n = C.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, D = (e, t, n) => {
	if (!w(e)) return n;
	let r = C.get(e);
	return r || (r = /* @__PURE__ */ new Map(), C.set(e, r)), r.size >= oe && r.clear(), r.set(t, n), n;
}, se = "translation", ce = "object", le = "array", O = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => O(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => O(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: le,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ce,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = O(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = O(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, k = "default", ue = /[^A-Za-z0-9._&=-]/g, A = /[^A-Za-z0-9._-]/g, de = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, j = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, de);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, M = (e) => e === void 0 ? k : typeof e == "string" ? j(e, ue) : Object.keys(e).sort().map((t) => `${j(t, A)}=${j(String(e[t]), A)}`).join("&"), N = (e) => Array.isArray(e) ? e.length === 0 ? [k] : e.map(M) : [M(e)], fe = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? k : e[0] ?? "default";
}, pe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, me = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, he = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, P = (e, t) => {
	if (!me(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? k : fe(N(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => pe(e, n, t, s)).map((t) => he(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, F = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, I = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? N(n).join(",") : String(n)}`;
}).join("|") : "", L = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, R = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (L(e) && L(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : R(e[r], t[r]));
		return n;
	}
	return e;
}, ge = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => R(e, t));
}, z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? z : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: se,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return ge(o, e, t);
	}
}, V = z, _e = (e) => z, H = z, ve = z, U = z, W = z, G = (e) => z, K = z, ye = (e, t = !0) => [
	B(e ?? v.defaultLocale, t ? v.defaultLocale : void 0),
	V,
	H,
	ve,
	G(e ?? v.defaultLocale),
	K,
	U,
	W
], be = (e, t, n = []) => O(e, {
	...t,
	plugins: n
}), xe = (e, t, n) => {
	let { locale: r, selector: i } = F(t), a = T(r ?? v.defaultLocale, I(i), n), o = E(e, a);
	if (o.hit) return o.content;
	let s = n ?? ye(r), c = P(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return be(e.content, t, s);
	};
	return c === null ? D(e, a, null) : Array.isArray(c) ? D(e, a, c.map(l)) : D(e, a, l(c));
}, q = {
	constructor: "constructor",
	length: "length",
	slice: "slice",
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, Se = (e) => typeof e == "string" && /^\d+$/.test(e), Ce = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		if (n === q.value) return t;
		if (n === Symbol.toPrimitive) return (e) => e === "number" ? Number(t) : t ?? "";
		if (n === q.toString) return () => String(t ?? "");
		if (n === q.valueOf) return () => t;
		if (n === q.slice) return Reflect.get(e, n, r);
		if (t != null && typeof n == "string" && n !== q.constructor && n !== q.length && !Se(n)) {
			let e = Object(t);
			if (n in e) {
				let r = Reflect.get(e, n);
				return typeof r == "function" ? r.bind(t) : r;
			}
		}
		return Reflect.get(e, n, r);
	} });
}, J = null, Y = null;
J?.catch(() => {}), Y?.catch(() => {});
var we = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => Ce({
		...n,
		value: n.children,
		children: n.children
	})
}, Te = z, Ee = z;
f(() => J.then((e) => ({ default: e.MarkdownRenderer }))), f(() => J.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var De = z;
f(() => Y.then((e) => ({ default: e })));
var Oe = z, X = /* @__PURE__ */ new Map(), ke = (e, t = !0) => {
	let n = `${e ?? v.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		B(e ?? v.defaultLocale, t ? v.defaultLocale : void 0),
		V,
		_e(e ?? v.defaultLocale),
		H,
		G(e ?? v.defaultLocale),
		K,
		U,
		W,
		we,
		Te,
		Ee,
		De,
		Oe
	];
	return X.set(n, r), r;
}, Ae = (e, t) => xe(e, t, ke(typeof t == "object" && t ? t.locale : t)), je = Symbol("LOADABLE_SETTLED_VALUE"), Me = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[je];
}, Z = (e, t) => {
	let n = m(ie) ?? {}, r = u(() => {
		let r = n?.locale?.();
		return Ae(Me(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
};
function Ne(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), p(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var Pe = [
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
], Fe = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, Ie = o("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primary\">"), Le = o("<option>");
function Re() {
	let t = _(), i = ee(), a = g(), o = (e) => {
		let t = a.pathname.replace(/^\/[^/]+/, `/${e}`);
		i(`${t}${a.search}${a.hash}`);
	};
	return (() => {
		var i = Ie(), a = i.firstChild;
		return a.addEventListener("change", (e) => o(e.currentTarget.value)), r(a, e(s, {
			each: Pe,
			children: (e) => (() => {
				var t = Le();
				return t.value = e, r(t, () => Fe(e)), t;
			})()
		})), n(() => a.value = t.locale ?? "en"), i;
	})();
}
var Q = {
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
}, ze = o("<button type=button class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\">");
function Be() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Ve() {
	let e = Z(Q), [t, i] = d("auto");
	p(() => {
		let e = Be();
		i(e), $(e);
	}), l(() => {
		if (t() !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	});
	function o() {
		let e = t(), n = e === "light" ? "dark" : e === "dark" ? "auto" : "light";
		i(n), $(n), window.localStorage.setItem("theme", n);
	}
	let s = () => t() === "auto" ? e().d.value : `Theme mode: ${t()}. Click to switch mode.`, c = () => t() === "auto" ? e().a.value : t() === "dark" ? e().b.value : e().c.value;
	return (() => {
		var e = ze();
		return e.$$click = o, r(e, c), n((t) => {
			var n = s(), r = s();
			return n !== t.e && a(e, "aria-label", t.e = n), r !== t.t && a(e, "title", t.t = r), t;
		}, {
			e: void 0,
			t: void 0
		}), e;
	})();
}
t(["click"]);
var He = o("<svg width=14 height=14 viewBox=\"0 0 24 24\"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d=\"m6 9 6 6 6-6\">"), Ue = o("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><div class=relative><button type=button class=\"flex cursor-pointer items-center gap-1 border-none bg-transparent nav-link\"></button></div></div></div><div class=\"flex items-center gap-4\"><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-muted-foreground transition hover:text-foreground\"><span class=sr-only></span><svg viewBox=\"0 0 16 16\"aria-hidden=true width=20 height=20><path fill=currentColor d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\">"), We = o("<div class=\"absolute left-0 top-full w-48 pt-2\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\">");
function Ge(e) {
	return (() => {
		var t = He();
		return n(() => a(t, "class", e.class)), t;
	})();
}
function Ke() {
	let t = Z(te);
	Ne(t().f.value);
	let [n, a] = d(!1), o = _(), c = () => o.locale ?? "en", l = () => [
		{
			to: `/${c()}/products`,
			label: t().k.value
		},
		{
			to: `/${c()}/pricing`,
			label: t().j.value
		},
		{
			to: `/${c()}/team`,
			label: t().m.value
		},
		{
			to: `/${c()}/blog`,
			label: t().a.value
		},
		{
			to: `/${c()}/careers`,
			label: t().b.value
		},
		{
			to: `/${c()}/faq`,
			label: t().d.value
		},
		{
			to: `/${c()}/contact`,
			label: t().c.value
		},
		{
			to: `/${c()}/settings`,
			label: t().l.value
		}
	];
	return (() => {
		var o = Ue(), u = o.firstChild.firstChild, d = u.firstChild, f = d.firstChild, p = f.firstChild, m = u.nextSibling, g = m.firstChild.firstChild;
		return r(u, e(h, {
			get href() {
				return `/${c()}`;
			},
			class: "text-lg font-bold tracking-tight text-primary no-underline",
			children: "i18n Bench"
		}), d), r(d, e(h, {
			get href() {
				return `/${c()}`;
			},
			end: !0,
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return t().g;
			}
		}), f), r(d, e(h, {
			get href() {
				return `/${c()}/about`;
			},
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return t().h;
			}
		}), f), p.$$click = () => a(!n()), p.addEventListener("mouseleave", () => a(!1)), p.addEventListener("mouseenter", () => a(!0)), r(p, () => t().i, null), r(p, e(Ge, { get class() {
			return `transition-transform ${n() ? "rotate-180" : ""}`;
		} }), null), r(f, (() => {
			var t = i(() => !!n());
			return () => t() && (() => {
				var t = We(), n = t.firstChild;
				return t.addEventListener("mouseleave", () => a(!1)), t.addEventListener("mouseenter", () => a(!0)), r(n, e(s, {
					get each() {
						return l();
					},
					children: (t) => e(h, {
						get href() {
							return t.to;
						},
						class: "block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent",
						onClick: () => a(!1),
						get children() {
							return t.label;
						}
					})
				})), t;
			})();
		})(), null), r(g, () => t().e), r(m, e(Re, {}), null), r(m, e(Ve, {}), null), o;
	})();
}
t(["click"]);
export { Ke as default };
