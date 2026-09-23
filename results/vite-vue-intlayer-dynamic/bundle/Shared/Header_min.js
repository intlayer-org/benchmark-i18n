import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createTextVNode as o, createVNode as s, defineComponent as c, getCurrentInstance as l, h as u, inject as d, isRef as f, markRaw as p, normalizeClass as ee, onBeforeMount as m, onMounted as h, onUnmounted as g, openBlock as _, ref as v, renderList as y, resolveComponent as te, shallowRef as b, toDisplayString as x, toValue as S, unref as C, watch as w, withCtx as T } from "vue";
import { useRoute as E, useRouter as D } from "vue-router";
import { ChevronDown as ne } from "lucide-vue-next";
var re = {
	key: "header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				h: "Home",
				i: "Methodology",
				j: "Mock Pages",
				l: "Products",
				k: "Pricing",
				n: "Team",
				b: "Blog",
				c: "Careers",
				e: "FAQ",
				d: "Contact",
				m: "Settings",
				a: "i18n Benchmark",
				f: "Go to GitHub"
			},
			fr: {
				h: "Accueil",
				i: "Méthodologie",
				j: "Pages fictives",
				l: "Produits",
				k: "Tarification",
				n: "Équipe",
				b: "Blog",
				c: "Carrières",
				e: "FAQ",
				d: "Contact",
				m: "Paramètres",
				a: "Benchmark i18n",
				f: "Aller sur GitHub"
			},
			es: {
				h: "Inicio",
				i: "Metodología",
				j: "Páginas de prueba",
				l: "Productos",
				k: "Precios",
				n: "Equipo",
				b: "Blog",
				c: "Carreras",
				e: "FAQ",
				d: "Contacto",
				m: "Ajustes",
				a: "i18n Benchmark",
				f: "Ir a GitHub"
			},
			de: {
				h: "Home",
				i: "Methodik",
				j: "Testseiten",
				l: "Produkte",
				k: "Preise",
				n: "Team",
				b: "Blog",
				c: "Karriere",
				e: "FAQ",
				d: "Kontakt",
				m: "Einstellungen",
				a: "i18n Benchmark",
				f: "Zu GitHub"
			},
			it: {
				h: "Home",
				i: "Metodologia",
				j: "Pagine di prova",
				l: "Prodotti",
				k: "Prezzi",
				n: "Team",
				b: "Blog",
				c: "Carriere",
				e: "FAQ",
				d: "Contatti",
				m: "Impostazioni",
				a: "i18n Benchmark",
				f: "Vai su GitHub"
			},
			pt: {
				h: "Início",
				i: "Metodologia",
				j: "Páginas de Teste",
				l: "Produtos",
				k: "Preços",
				n: "Equipe",
				b: "Blog",
				c: "Carreiras",
				e: "FAQ",
				d: "Contato",
				m: "Configurações",
				a: "i18n Benchmark",
				f: "Ir para o GitHub"
			},
			zh: {
				h: "首页",
				i: "方法论",
				j: "模拟页面",
				l: "产品",
				k: "定价",
				n: "团队",
				b: "博客",
				c: "职业",
				e: "常见问题",
				d: "联系我们",
				m: "设置",
				a: "i18n 基准测试",
				f: "前往 GitHub"
			},
			ja: {
				h: "ホーム",
				i: "方法論",
				j: "モックページ",
				l: "製品",
				k: "価格設定",
				n: "チーム",
				b: "ブログ",
				c: "採用情報",
				e: "よくある質問",
				d: "お問い合わせ",
				m: "設定",
				a: "i18n ベンチマーク",
				f: "GitHub へ"
			},
			ko: {
				h: "홈",
				i: "방법론",
				j: "모ック 페이지",
				l: "제품",
				k: "가격",
				n: "팀",
				b: "블로그",
				c: "채용",
				e: "자주 묻는 질문",
				d: "문의",
				m: "설정",
				a: "i18n 벤치마크",
				f: "GitHub으로 이동"
			},
			ru: {
				h: "Главная",
				i: "Методология",
				j: "Мок-страницы",
				l: "Продукты",
				k: "Цены",
				n: "Команда",
				b: "Блог",
				c: "Вакансии",
				e: "FAQ",
				d: "Контакт",
				m: "Настройки",
				a: "i18n Бенчмарк",
				f: "Перейти на GitHub"
			}
		}
	}
}, O = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = v(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	return Object.setPrototypeOf(o, String.prototype), Object.assign(o, {
		render: a,
		toString: () => String(r.value ?? ""),
		valueOf: () => r.value,
		[Symbol.toPrimitive]: () => r.value,
		toJSON: () => r.value,
		get raw() {
			return r.value;
		},
		set raw(e) {
			r.value = e;
		},
		get value() {
			return r.value;
		},
		use(e) {
			return O({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), p(o);
}, k = "translation", A = "object", j = "array", M = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => M(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => M(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: j,
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
					type: A,
					key: r
				}]
			}, i = M(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, N = {
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
}, P = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, F = {
	internationalization: N,
	routing: P,
	editor: {
		applicationURL: "http://localhost:3000",
		editorURL: "http://localhost:8000",
		cmsURL: "https://app.intlayer.org",
		backendURL: "https://back.intlayer.org",
		port: 8e3,
		enabled: !1,
		dictionaryPriorityStrategy: "local_first",
		liveSync: !0,
		liveSyncPort: 4e3,
		liveSyncURL: "http://localhost:4000"
	},
	log: {
		mode: "default",
		prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
	},
	system: {
		baseDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app",
		moduleAugmentationDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app/.intlayer/types",
		unmergedDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app/.intlayer/unmerged_dictionary",
		remoteDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app/.intlayer/remote_dictionary",
		dictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app/.intlayer/dictionary",
		dynamicDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app/.intlayer/dynamic_dictionary",
		fetchDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app/.intlayer/fetch_dictionary",
		typesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app/.intlayer/types",
		mainDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app/.intlayer/main",
		configDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app/.intlayer/config",
		cacheDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app/.intlayer/cache",
		tempDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app/.intlayer/tmp"
	},
	content: {
		fileExtensions: [
			".content.ts",
			".content.js",
			".content.cjs",
			".content.mjs",
			".content.json",
			".content.json5",
			".content.jsonc",
			".content.tsx",
			".content.jsx"
		],
		contentDir: ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app"],
		codeDir: ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app"],
		excludedPath: [
			"**/node_modulesdistbuild.intlayer.next.nuxt.expo.vercel.turbo.tanstack*.{tsx,ts,js,mjs,cjs,jsx,vue,svelte,astro}",
			"!**/node_modulesdistbuild.intlayer.next.nuxt.expo.vercel.turbo.tanstack*.config.*",
			"!***.spec.*",
			"!***.d.ts",
			"!***.map"
		],
		outputFormat: ["esm", "cjs"],
		cache: !0,
		checkTypes: !1
	},
	ai,
	dictionary,
	build,
	compiler: {
		enabled: !0,
		dictionaryKeyPrefix: "",
		noMetadata: !1,
		saveComponents: !1
	}
}, I = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, L = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (I(e) && I(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : L(e[r], t[r]));
		return n;
	}
	return e;
}, ie = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => L(e, t));
}, R = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, z = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? R : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: k,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return ie(o, e, t);
	}
}, B = R, V = R, ae = R, H = R, U = (e) => R, W = R, oe = (e, t = !0) => [
	z(e ?? N.defaultLocale, t ? N.defaultLocale : void 0),
	B,
	V,
	ae,
	U(e ?? N.defaultLocale),
	W,
	H
], se = (e, t, n = []) => M(e, {
	...t,
	plugins: n
}), ce = (e, t, n = oe(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return se(e.content, r, n);
}, le = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => O({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => r(t(...e));
		Object.setPrototypeOf(a, Object.getPrototypeOf(i));
		for (let e of Object.getOwnPropertyNames(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		return p(a);
	}
}, ue = R, de = R, fe = R, G = /* @__PURE__ */ new Map(), pe = (e, t = !0) => {
	let n = `${e ?? N.defaultLocale}_${t}`;
	if (G.has(n)) return G.get(n);
	let r = [
		z(e ?? N.defaultLocale, t ? N.defaultLocale : void 0),
		B,
		V,
		U(e ?? N.defaultLocale),
		W,
		H,
		le,
		ue,
		de,
		fe
	];
	return G.set(n, r), r;
}, me = (e, t) => ce(e, t, pe(t)), K = Symbol("intlayer"), q = (e, t) => t.reduce((e, t) => e?.[t], e), J = (e) => typeof e == "object" && !!e, Y = (e) => typeof e == "function" || J(e) && ("render" in e || "setup" in e), he = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, X = (e) => p(c({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Y(t) ? u(t) : Array.isArray(t) ? u("span", t) : t;
		};
	}
})), ge = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return X(() => e.value);
		if (r == null) return n === Symbol.toPrimitive || n === "toString" ? () => "" : void 0;
		let i = r[n];
		return typeof i == "function" ? i.bind(r) : i;
	},
	ownKeys() {
		let t = e.value;
		return typeof t == "object" && t ? Reflect.ownKeys(t) : [];
	},
	getOwnPropertyDescriptor() {
		return {
			enumerable: !0,
			configurable: !0
		};
	}
}), Z = (e, n) => {
	let r = l() ? d(K) : void 0, i = f(r?.locale) ? r.locale : v(r?.locale ?? N.defaultLocale), a = t(() => (n === void 0 ? void 0 : S(n)) ?? i.value), o = b({});
	w([() => S(e), () => a.value], ([e, t]) => {
		o.value = me(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let s = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => q(o.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return X(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let c = e.concat(r), l = q(o.value, c);
			if (l === void 0 || J(l) && !Y(l)) return s(c);
			if (he(l)) return ge(t(() => q(o.value, c)));
			let u = t(() => q(o.value, c));
			return new Proxy(u, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = q(o.value, e);
			return J(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return s([]);
}, Q = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var _e = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ve = (e = $) => {
	let { locales: t } = N;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Q) for (let t = 0; t < (P.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(P.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ye = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Q && P.storage.cookies) for (let n = 0; n < P.storage.cookies.length; n++) {
		let { name: r, attributes: i } = P.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, _e(r, e, i));
			} catch {}
		}
	}
}, $ = {
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
};
ve($);
var be = (e, t) => ye(e, {
	...$,
	isCookieEnabled: t
}), xe = ({ isCookieEnabled: e, onLocaleChange: n } = {}) => {
	let { defaultLocale: r, locales: i } = N ?? {}, a = d(K);
	return {
		locale: t(() => a?.locale?.value ?? r),
		defaultLocale: r,
		availableLocales: i,
		setLocale: (t) => {
			if (!i?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			a && a.setLocale(t), be(t, e ?? a?.isCookieEnabled ?? !0), n?.(t);
		}
	};
};
function Se(e) {
	m(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), h(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var Ce = F.internationalization.locales;
F.internationalization.requiredLocales, F.internationalization.defaultLocale, F.editor;
var we = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, Te = { class: "flex items-center gap-2" }, Ee = ["value"], De = ["value"], Oe = c({
	__name: "LocaleSwitcher",
	setup(n) {
		let r = E(), o = D(), { setLocale: s } = xe(), c = t(() => r.params.locale || "en"), l = (e) => {
			s(e);
			let t = r.path.replace(/^\/[^/]+/, `/${e}`);
			o.push({
				path: t,
				query: r.query,
				hash: r.hash
			});
		};
		return w(c, (e) => {
			s(e);
		}, { immediate: !0 }), (t, n) => (_(), i("div", Te, [a("select", {
			value: c.value,
			onChange: n[0] ||= (e) => l(e.target.value),
			class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
		}, [(_(!0), i(e, null, y(C(Ce), (e) => (_(), i("option", {
			key: e,
			value: e
		}, x(C(we)(e)), 9, De))), 128))], 40, Ee)]));
	}
}), ke = {
	key: "theme-toggle",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				d: "Theme: Auto",
				e: "Theme: Dark",
				f: "Theme: Light",
				a: "Theme mode: auto (system). Click to switch to light mode.",
				c: "Theme mode: light. Click to switch to dark mode.",
				b: "Theme mode: dark. Click to switch to auto mode."
			},
			fr: {
				d: "Thème : Auto",
				e: "Thème : Sombre",
				f: "Thème : Clair",
				a: "Mode de thème : auto (système). Cliquez pour passer au mode clair.",
				c: "Mode de thème : clair. Cliquez pour passer au mode sombre.",
				b: "Mode de thème : sombre. Cliquez pour passer au mode auto."
			},
			es: {
				d: "Tema: Automático",
				e: "Tema: Oscuro",
				f: "Tema: Claro",
				a: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
				c: "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
				b: "Modo de tema: oscuro. Haga clic para cambiar al modo automático."
			},
			de: {
				d: "Design: Auto",
				e: "Design: Dunkel",
				f: "Design: Hell",
				a: "Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.",
				c: "Design-Modus: Hell. Klicken Sie hier, um in den dunklen Modus zu wechseln.",
				b: "Design-Modus: Dunkel. Klicken Sie hier, um in den automatischen Modus zu wechseln."
			},
			it: {
				d: "Tema: Auto",
				e: "Tema: Scuro",
				f: "Tema: Chiaro",
				a: "Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.",
				c: "Modalità tema: chiara. Fai clic per passare alla modalità scura.",
				b: "Modalità tema: scura. Fai clic per passare alla modalità automatica."
			},
			pt: {
				d: "Tema: Automático",
				e: "Tema: Escuro",
				f: "Tema: Claro",
				a: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
				c: "Modo de tema: claro. Clique para mudar para o modo escuro.",
				b: "Modo de tema: escuro. Clique para mudar para o modo automático."
			},
			zh: {
				d: "主题：自动",
				e: "主题：深色",
				f: "主题：亮色",
				a: "主题模式：自动（系统）。点击切换到亮色模式。",
				c: "主题模式：浅色。点击切换到深色模式。",
				b: "主题模式：深色。点击切换到自动模式。"
			},
			ja: {
				d: "テーマ：自動",
				e: "テーマ：ダーク",
				f: "テーマ：ライト",
				a: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
				c: "テーマモード：ライト。クリックしてダークモードに切り替えます。",
				b: "テーマモード：ダーク。クリックして自動モードに切り替えます。"
			},
			ko: {
				d: "테마: 자동",
				e: "테마: 다크",
				f: "테마: 라이트",
				a: "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
				c: "테마 모드: 라이트. 다크 모드로 전환하려면 클릭하세요.",
				b: "테마 모드: 다크. 자동 모드로 전환하려면 클릭하세요."
			},
			ru: {
				d: "Тема: Авто",
				e: "Тема: Темная",
				f: "Тема: Светлая",
				a: "Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.",
				c: "Режим темы: светлый. Нажмите, чтобы перейти в темную тему.",
				b: "Режим темы: темный. Нажмите, чтобы перейти в автоматический режим."
			}
		}
	}
}, Ae = ["aria-label", "title"], je = c({
	__name: "ThemeToggle",
	setup(e) {
		let { d: t, e: n, f: r, a, c: o, b: s } = Z(ke), c = v("auto");
		function l() {
			if (typeof window > "u") return "auto";
			let e = window.localStorage.getItem("theme");
			return e === "light" || e === "dark" || e === "auto" ? e : "auto";
		}
		function u(e) {
			let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
			document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
		}
		h(() => {
			let e = l();
			c.value = e, u(e);
		});
		let d = null;
		w(c, (e) => {
			if (e === "auto") {
				let e = window.matchMedia("(prefers-color-scheme: dark)");
				d = () => u("auto"), e.addEventListener("change", d);
			} else d &&= (window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", d), null);
		}, { immediate: !0 }), g(() => {
			d && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", d);
		});
		function f() {
			let e = c.value === "light" ? "dark" : c.value === "dark" ? "auto" : "light";
			c.value = e, u(e), window.localStorage.setItem("theme", e);
		}
		let p = () => c.value === "auto" ? a.value : c.value === "light" ? o.value : s.value;
		return (e, a) => (_(), i("button", {
			type: "button",
			onClick: f,
			"aria-label": p(),
			title: p(),
			class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
		}, x(c.value === "auto" ? C(t) : c.value === "dark" ? C(n) : C(r)), 9, Ae));
	}
}), Me = { class: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg" }, Ne = { class: "container flex h-16 items-center justify-between" }, Pe = { class: "flex items-center gap-8" }, Fe = { class: "hidden items-center gap-6 text-sm font-medium md:flex" }, Ie = { class: "relative" }, Le = { class: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1" }, Re = { class: "flex items-center gap-4" }, ze = {
	href: "https://github.com/intlayer-org/benchmark-i18n",
	target: "_blank",
	rel: "noreferrer",
	class: "text-muted-foreground transition hover:text-foreground"
}, Be = { class: "sr-only" }, Ve = c({
	__name: "Header",
	setup(c) {
		Se("Header");
		let { h: l, i: u, j: d, l: f, k: p, n: m, b: h, c: g, e: b, d: S, m: w, a: D, f: O } = Z(re), k = v(!1), A = E(), j = t(() => A.params.locale || "en"), M = t(() => [
			{
				to: `/${j.value}/products`,
				label: f
			},
			{
				to: `/${j.value}/pricing`,
				label: p
			},
			{
				to: `/${j.value}/team`,
				label: m
			},
			{
				to: `/${j.value}/blog`,
				label: h
			},
			{
				to: `/${j.value}/careers`,
				label: g
			},
			{
				to: `/${j.value}/faq`,
				label: b
			},
			{
				to: `/${j.value}/contact`,
				label: S
			},
			{
				to: `/${j.value}/settings`,
				label: w
			}
		]);
		return (t, c) => {
			let f = te("router-link");
			return _(), i("header", Me, [a("nav", Ne, [a("div", Pe, [s(f, {
				to: `/${j.value}`,
				class: "text-lg font-bold tracking-tight text-primary no-underline"
			}, {
				default: T(() => [o(x(C(D)), 1)]),
				_: 1
			}, 8, ["to"]), a("div", Fe, [
				s(f, {
					to: `/${j.value}`,
					class: "nav-link",
					"exact-active-class": "is-active"
				}, {
					default: T(() => [o(x(C(l)), 1)]),
					_: 1
				}, 8, ["to"]),
				s(f, {
					to: `/${j.value}/about`,
					class: "nav-link",
					"active-class": "is-active"
				}, {
					default: T(() => [o(x(C(u)), 1)]),
					_: 1
				}, 8, ["to"]),
				r(" Mock Pages Dropdown "),
				a("div", Ie, [a("button", {
					type: "button",
					class: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
					onMouseenter: c[0] ||= (e) => k.value = !0,
					onMouseleave: c[1] ||= (e) => k.value = !1,
					onClick: c[2] ||= (e) => k.value = !k.value
				}, [o(x(C(d)) + " ", 1), s(C(ne), {
					size: 14,
					class: ee(["transition-transform", k.value ? "rotate-180" : ""])
				}, null, 8, ["class"])], 32), k.value ? (_(), i("div", {
					key: 0,
					class: "absolute left-0 top-full pt-2 w-48",
					onMouseenter: c[4] ||= (e) => k.value = !0,
					onMouseleave: c[5] ||= (e) => k.value = !1
				}, [a("div", Le, [(_(!0), i(e, null, y(M.value, (e) => (_(), n(f, {
					key: e.to,
					to: e.to,
					class: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
					onClick: c[3] ||= (e) => k.value = !1
				}, {
					default: T(() => [o(x(e.label), 1)]),
					_: 2
				}, 1032, ["to"]))), 128))])], 32)) : r("v-if", !0)])
			])]), a("div", Re, [
				a("a", ze, [a("span", Be, x(C(O)), 1), c[6] ||= a("svg", {
					viewBox: "0 0 16 16",
					"aria-hidden": "true",
					width: "20",
					height: "20"
				}, [a("path", {
					fill: "currentColor",
					d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
				})], -1)]),
				s(Oe),
				s(je)
			])])]);
		};
	}
});
export { Ve as default };
