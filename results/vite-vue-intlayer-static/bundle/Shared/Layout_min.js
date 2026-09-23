import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createTextVNode as o, createVNode as s, defineComponent as c, getCurrentInstance as l, h as u, inject as d, isRef as f, markRaw as p, normalizeClass as m, onBeforeMount as h, onMounted as g, onUnmounted as _, openBlock as v, ref as y, renderList as b, resolveComponent as x, shallowRef as ee, toDisplayString as S, toValue as te, watch as C, withCtx as w } from "vue";
import { useRoute as T, useRouter as ne } from "vue-router";
import { ChevronDown as re } from "lucide-vue-next";
var E = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = y(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	if (Object.assign(o, {
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
			return E({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), e != null) {
		let t = Object(e), n = Object.getPrototypeOf(t);
		for (let r of Object.getOwnPropertyNames(n)) {
			if (r === "constructor" || r in o) continue;
			let n = t[r];
			typeof n == "function" && Object.defineProperty(o, r, {
				value: n.bind(e),
				writable: !0,
				configurable: !0
			});
		}
	}
	return p(o);
}, D = /* @__PURE__ */ new WeakMap(), O = 0, ie = (e) => {
	if (!e) return "base";
	let t = D.get(e);
	if (t) return t;
	O += 1;
	let n = `p${O}`;
	return D.set(e, n), n;
}, ae = 256, k = /* @__PURE__ */ new WeakMap(), oe = (e) => typeof e == "object" && !!e, se = (e, t, n) => `${e}_${t}_${ie(n)}`, ce = (e, t) => {
	if (!oe(e)) return { hit: !1 };
	let n = k.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, A = (e, t, n) => {
	if (!oe(e)) return n;
	let r = k.get(e);
	return r || (r = /* @__PURE__ */ new Map(), k.set(e, r)), r.size >= ae && r.clear(), r.set(t, n), n;
}, le = "translation", ue = "object", de = "array", j = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => j(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => j(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: de,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ue,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = j(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = j(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, M = "default", fe = /[^A-Za-z0-9._&=-]/g, N = /[^A-Za-z0-9._-]/g, pe = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, P = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, pe);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, F = (e) => e === void 0 ? M : typeof e == "string" ? P(e, fe) : Object.keys(e).sort().map((t) => `${P(t, N)}=${P(String(e[t]), N)}`).join("&"), I = (e) => Array.isArray(e) ? e.length === 0 ? [M] : e.map(F) : [F(e)], me = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? M : e[0] ?? "default";
}, he = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ge = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, _e = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, ve = (e, t) => {
	if (!ge(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? M : me(I(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => he(e, n, t, s)).map((t) => _e(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ye = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, be = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? I(n).join(",") : String(n)}`;
}).join("|") : "", L = {
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
}, R = {
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
}, z = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, B = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (z(e) && z(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : B(e[r], t[r]));
		return n;
	}
	return e;
}, xe = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => B(e, t));
}, V = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, H = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? V : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: le,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return xe(o, e, t);
	}
}, U = V, Se = (e) => V, W = V, Ce = V, G = V, we = V, Te = (e) => V, Ee = V, De = (e, t = !0) => [
	H(e ?? L.defaultLocale, t ? L.defaultLocale : void 0),
	U,
	W,
	Ce,
	Te(e ?? L.defaultLocale),
	Ee,
	G,
	we
], Oe = (e, t, n = []) => j(e, {
	...t,
	plugins: n
}), ke = (e, t, n) => {
	let { locale: r, selector: i } = ye(t), a = se(r ?? L.defaultLocale, be(i), n), o = ce(e, a);
	if (o.hit) return o.content;
	let s = n ?? De(r), c = ve(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Oe(e.content, t, s);
	};
	return c === null ? A(e, a, null) : Array.isArray(c) ? A(e, a, c.map(l)) : A(e, a, l(c));
}, Ae = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => E({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => {
			let n = t(...e);
			return r(n);
		};
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
}, je = V, Me = V, Ne = V, K = /* @__PURE__ */ new Map(), Pe = (e, t = !0) => {
	let n = `${e ?? L.defaultLocale}_${t}`;
	if (K.has(n)) return K.get(n);
	let r = [
		H(e ?? L.defaultLocale, t ? L.defaultLocale : void 0),
		U,
		Se(e ?? L.defaultLocale),
		W,
		Te(e ?? L.defaultLocale),
		Ee,
		G,
		we,
		Ae,
		je,
		Me,
		Ne
	];
	return K.set(n, r), r;
}, Fe = (e, t) => ke(e, t, Pe(typeof t == "object" && t ? t.locale : t)), Ie = Symbol("intlayer"), q = (e, t) => t.reduce((e, t) => e?.[t], e), J = (e) => typeof e == "object" && !!e, Y = (e) => typeof e == "function" || J(e) && ("render" in e || "setup" in e), Le = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Re = (e) => p(c({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Y(t) ? u(t) : Array.isArray(t) ? u("span", t) : t;
		};
	}
})), ze = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Re(() => e.value);
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
}), X = (e, n) => {
	let r = l() ? d(Ie) : void 0, i = f(r?.locale) ? r.locale : y(r?.locale ?? L.defaultLocale), a = t(() => ({
		selector: void 0,
		locale: n === void 0 ? void 0 : te(n)
	})), o = t(() => a.value.locale ?? i.value), s = ee({});
	C([
		() => te(e),
		() => o.value,
		() => a.value.selector
	], ([e, t, n]) => {
		s.value = n ? Fe(e, {
			...n,
			locale: t
		}) : Fe(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let c = (e) => new Proxy({}, {
		get(n, r, i) {
			let a = t(() => q(s.value, e));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(n, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Re(() => a.value);
			let o = e.concat(r), l = q(s.value, o);
			if (l === void 0 || J(l) && !Y(l)) return c(o);
			if (Le(l)) return ze(t(() => q(s.value, o)));
			if (typeof l == "function") {
				let t = q(s.value, e);
				return t != null && !Object.hasOwn(t, r) ? l.bind(t) : (...e) => q(s.value, o)?.(...e);
			}
			let u = t(() => q(s.value, o));
			return new Proxy(u, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = q(s.value, e);
			return J(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return c([]);
}, Be = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Ve = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Be(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, He = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Z = {
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
}, Ue = (e = Z) => {
	let { locales: t } = L;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!He) for (let t = 0; t < (R.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(R.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, We = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !He && R.storage.cookies) for (let n = 0; n < R.storage.cookies.length; n++) {
		let { name: r, attributes: i } = R.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Be(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Ve(r, e, i));
			} catch {}
		}
	}
};
Ue(Z);
var Ge = (e, t) => We(e, {
	...Z,
	isCookieEnabled: t
}), Q = ({ isCookieEnabled: e, onLocaleChange: n } = {}) => {
	let { defaultLocale: r, locales: i } = L ?? {}, a = d(Ie);
	return {
		locale: t(() => a?.locale?.value ?? r),
		defaultLocale: r,
		availableLocales: i,
		setLocale: (t) => {
			if (!i?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			a && a.setLocale(t), Ge(t, e ?? a?.isCookieEnabled ?? !0), n?.(t);
		}
	};
};
function Ke() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function qe(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var Je = {
	key: "footer",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				e: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
				i: "Resources",
				b: "Contact",
				g: "GitHub",
				h: "Methodology",
				d: "Contributing",
				f: "i18n Benchmark — Open-source project. Built with Vue, Vite & Vue Router.",
				a: "i18n Benchmark",
				c: "contact@intlayer.org"
			},
			fr: {
				e: "Une application de test open-source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
				i: "Ressources",
				b: "Contact",
				g: "GitHub",
				h: "Méthodologie",
				d: "Contribuer",
				f: "Benchmark i18n — Projet open-source. Construit avec Vue, Vite et Vue Router.",
				a: "Benchmark i18n",
				c: "contact@intlayer.org"
			},
			es: {
				e: "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación.",
				i: "Recursos",
				b: "Contacto",
				g: "GitHub",
				h: "Metodología",
				d: "Contribuir",
				f: "i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y Vue Router.",
				a: "i18n Benchmark",
				c: "contact@intlayer.org"
			},
			de: {
				e: "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.",
				i: "Ressourcen",
				b: "Kontakt",
				g: "GitHub",
				h: "Methodik",
				d: "Mitwirken",
				f: "i18n Benchmark – Open-Source-Projekt. Erstellt mit Vue, Vite & Vue Router.",
				a: "i18n Benchmark",
				c: "contact@intlayer.org"
			},
			it: {
				e: "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sui tempi di caricamento e sulla reattività dell'app.",
				i: "Risorse",
				b: "Contatto",
				g: "GitHub",
				h: "Metodologia",
				d: "Contribuire",
				f: "i18n Benchmark — Progetto open-source. Costruito con Vue, Vite e Vue Router.",
				a: "i18n Benchmark",
				c: "contact@intlayer.org"
			},
			pt: {
				e: "Um aplicativo de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.",
				i: "Recursos",
				b: "Contato",
				g: "GitHub",
				h: "Metodologia",
				d: "Contribuindo",
				f: "i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e Vue Router.",
				a: "i18n Benchmark",
				c: "contact@intlayer.org"
			},
			zh: {
				e: "一个开源测试应用程序，用于衡量国际化库对捆绑包大小、加载时间和应用程序反应性的真实影响。",
				i: "资源",
				b: "联系我们",
				g: "GitHub",
				h: "方法论",
				d: "贡献",
				f: "i18n 基准测试——开源项目。使用 Vue、Vite 和 Vue Router 构建。",
				a: "i18n 基准测试",
				c: "contact@intlayer.org"
			},
			ja: {
				e: "バンドルサイズ、ロード時間、アプリの反応性に与える国際化ライブラリの実際の影響を測定するためのオープンソースのテストアプリケーション。",
				i: "リソース",
				b: "お問い合わせ",
				g: "GitHub",
				h: "方法論",
				d: "貢献",
				f: "i18n ベンチマーク — オープンソースプロジェクト。Vue、Vite、Vue Routerで構築されています。",
				a: "i18n ベンチマーク",
				c: "contact@intlayer.org"
			},
			ko: {
				e: "번들 크기, 로딩 시간 및 앱 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.",
				i: "리소스",
				b: "연락처",
				g: "GitHub",
				h: "방법론",
				d: "기여하기",
				f: "i18n 벤치마크 — 오픈 소스 프로젝트. Vue, Vite 및 Vue Router로 제작되었습니다.",
				a: "i18n 벤치마크",
				c: "contact@intlayer.org"
			},
			ru: {
				e: "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.",
				i: "Ресурсы",
				b: "Контакт",
				g: "GitHub",
				h: "Методология",
				d: "Участие в проекте",
				f: "i18n Benchmark — проект с открытым исходным кодом. Построен на Vue, Vite и Vue Router.",
				a: "i18n Бенчмарк",
				c: "contact@intlayer.org"
			}
		}
	}
}, Ye = c({
	__name: "Footer",
	setup(e, { expose: n }) {
		n();
		let r = T(), i = t(() => r.params.locale || "en"), { e: a, i: o, b: s, g: c, h: l, d: u, f: d, a: f, c: p } = X(Je), m = {
			route: r,
			currentLocale: i,
			description: a,
			resources: o,
			contactLabel: s,
			github: c,
			methodology: l,
			contributing: u,
			footerText: d,
			appName: f,
			contactEmail: p,
			footerLinks: t(() => [
				{
					label: c,
					href: "https://github.com/intlayer-org/benchmark-i18n",
					isInternal: !1
				},
				{
					label: l,
					to: `/${i.value}/about`,
					isInternal: !0
				},
				{
					label: u,
					to: `/${i.value}/contact`,
					isInternal: !0
				}
			])
		};
		return Object.defineProperty(m, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), m;
	}
}), $ = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Xe = { class: "mt-20 border-t border-border bg-card" }, Ze = { class: "container py-8" }, Qe = { class: "grid gap-8 md:grid-cols-3" }, $e = { class: "mb-2 text-sm font-semibold text-foreground" }, et = { class: "text-sm text-muted-foreground" }, tt = { class: "mb-2 text-sm font-semibold text-foreground" }, nt = { class: "space-y-1" }, rt = ["href"], it = { class: "mb-2 text-sm font-semibold text-foreground" }, at = { class: "text-sm text-muted-foreground" }, ot = { class: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground" };
function st(t, r, s, c, l, u) {
	let d = x("router-link");
	return v(), i("footer", Xe, [a("div", Ze, [a("div", Qe, [
		a("div", null, [a("h3", $e, S(c.appName), 1), a("p", et, S(c.description), 1)]),
		a("div", null, [a("h3", tt, S(c.resources), 1), a("ul", nt, [(v(!0), i(e, null, b(c.footerLinks, (e) => (v(), i("li", { key: e.label }, [e.isInternal ? (v(), n(d, {
			key: 0,
			to: e.to,
			class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
		}, {
			default: w(() => [o(S(e.label), 1)]),
			_: 2
		}, 1032, ["to"])) : (v(), i("a", {
			key: 1,
			href: e.href,
			target: "_blank",
			rel: "noreferrer",
			class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
		}, S(e.label), 9, rt))]))), 128))])]),
		a("div", null, [a("h3", it, S(c.contactLabel), 1), a("p", at, S(c.contactEmail), 1)])
	]), a("div", ot, S(c.footerText), 1)])]);
}
var ct = $(Ye, [["render", st], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/Footer.vue"]]), lt = {
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
};
function ut(e) {
	h(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), g(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var dt = L.locales;
L.requiredLocales, L.defaultLocale;
var ft = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, pt = c({
	__name: "LocaleSwitcher",
	setup(e, { expose: n }) {
		n();
		let r = T(), i = ne(), { setLocale: a } = Q(), o = t(() => r.params.locale || "en"), s = (e) => {
			a(e);
			let t = r.path.replace(/^\/[^/]+/, `/${e}`);
			i.push({
				path: t,
				query: r.query,
				hash: r.hash
			});
		};
		C(o, (e) => {
			a(e);
		}, { immediate: !0 });
		let c = {
			route: r,
			router: i,
			setLocale: a,
			currentLocale: o,
			handleLocaleChange: s,
			get locales() {
				return dt;
			},
			get getLocaleName() {
				return ft;
			}
		};
		return Object.defineProperty(c, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), c;
	}
}), mt = { class: "flex items-center gap-2" }, ht = ["value"], gt = ["value"];
function _t(t, n, r, o, s, c) {
	return v(), i("div", mt, [a("select", {
		value: o.currentLocale,
		onChange: n[0] ||= (e) => o.handleLocaleChange(e.target.value),
		class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
	}, [(v(!0), i(e, null, b(o.locales, (e) => (v(), i("option", {
		key: e,
		value: e
	}, S(o.getLocaleName(e)), 9, gt))), 128))], 40, ht)]);
}
var vt = $(pt, [["render", _t], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/LocaleSwitcher.vue"]]), yt = {
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
}, bt = c({
	__name: "ThemeToggle",
	setup(e, { expose: t }) {
		t();
		let { d: n, e: r, f: i, a, c: o, b: s } = X(yt), c = y("auto");
		function l() {
			if (typeof window > "u") return "auto";
			let e = window.localStorage.getItem("theme");
			return e === "light" || e === "dark" || e === "auto" ? e : "auto";
		}
		function u(e) {
			let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
			document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
		}
		g(() => {
			let e = l();
			c.value = e, u(e);
		});
		let d = null;
		C(c, (e) => {
			if (e === "auto") {
				let e = window.matchMedia("(prefers-color-scheme: dark)");
				d = () => u("auto"), e.addEventListener("change", d);
			} else d &&= (window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", d), null);
		}, { immediate: !0 }), _(() => {
			d && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", d);
		});
		function f() {
			let e = c.value === "light" ? "dark" : c.value === "dark" ? "auto" : "light";
			c.value = e, u(e), window.localStorage.setItem("theme", e);
		}
		let p = {
			auto: n,
			dark: r,
			light: i,
			ariaLabelAuto: a,
			ariaLabelLight: o,
			ariaLabelDark: s,
			mode: c,
			getInitialMode: l,
			applyThemeMode: u,
			get mediaQueryListener() {
				return d;
			},
			set mediaQueryListener(e) {
				d = e;
			},
			toggleMode: f,
			getLabel: () => c.value === "auto" ? a.value : c.value === "light" ? o.value : s.value
		};
		return Object.defineProperty(p, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), p;
	}
}), xt = ["aria-label", "title"];
function St(e, t, n, r, a, o) {
	return v(), i("button", {
		type: "button",
		onClick: r.toggleMode,
		"aria-label": r.getLabel(),
		title: r.getLabel(),
		class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
	}, S(r.mode === "auto" ? r.auto : r.mode === "dark" ? r.dark : r.light), 9, xt);
}
var Ct = $(bt, [["render", St], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/ThemeToggle.vue"]]), wt = c({
	__name: "Header",
	setup(e, { expose: n }) {
		n(), ut("Header");
		let { h: r, i, j: a, l: o, k: s, n: c, b: l, c: u, e: d, d: f, m: p, a: m, f: h } = X(lt), g = y(!1), _ = T(), v = t(() => _.params.locale || "en"), b = {
			home: r,
			methodology: i,
			mockPagesLabel: a,
			products: o,
			pricing: s,
			team: c,
			blog: l,
			careers: u,
			faq: d,
			contact: f,
			settings: p,
			appName: m,
			goToGithub: h,
			isMockPagesOpen: g,
			route: _,
			currentLocale: v,
			mockPagesList: t(() => [
				{
					to: `/${v.value}/products`,
					label: o
				},
				{
					to: `/${v.value}/pricing`,
					label: s
				},
				{
					to: `/${v.value}/team`,
					label: c
				},
				{
					to: `/${v.value}/blog`,
					label: l
				},
				{
					to: `/${v.value}/careers`,
					label: u
				},
				{
					to: `/${v.value}/faq`,
					label: d
				},
				{
					to: `/${v.value}/contact`,
					label: f
				},
				{
					to: `/${v.value}/settings`,
					label: p
				}
			]),
			get ChevronDown() {
				return re;
			},
			LocaleSwitcher: vt,
			ThemeToggle: Ct
		};
		return Object.defineProperty(b, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), b;
	}
}), Tt = { class: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg" }, Et = { class: "container flex h-16 items-center justify-between" }, Dt = { class: "flex items-center gap-8" }, Ot = { class: "hidden items-center gap-6 text-sm font-medium md:flex" }, kt = { class: "relative" }, At = { class: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1" }, jt = { class: "flex items-center gap-4" }, Mt = {
	href: "https://github.com/intlayer-org/benchmark-i18n",
	target: "_blank",
	rel: "noreferrer",
	class: "text-muted-foreground transition hover:text-foreground"
}, Nt = { class: "sr-only" };
function Pt(t, c, l, u, d, f) {
	let p = x("router-link");
	return v(), i("header", Tt, [a("nav", Et, [a("div", Dt, [s(p, {
		to: `/${u.currentLocale}`,
		class: "text-lg font-bold tracking-tight text-primary no-underline"
	}, {
		default: w(() => [o(S(u.appName), 1)]),
		_: 1
	}, 8, ["to"]), a("div", Ot, [
		s(p, {
			to: `/${u.currentLocale}`,
			class: "nav-link",
			"exact-active-class": "is-active"
		}, {
			default: w(() => [o(S(u.home), 1)]),
			_: 1
		}, 8, ["to"]),
		s(p, {
			to: `/${u.currentLocale}/about`,
			class: "nav-link",
			"active-class": "is-active"
		}, {
			default: w(() => [o(S(u.methodology), 1)]),
			_: 1
		}, 8, ["to"]),
		r(" Mock Pages Dropdown "),
		a("div", kt, [a("button", {
			type: "button",
			class: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
			onMouseenter: c[0] ||= (e) => u.isMockPagesOpen = !0,
			onMouseleave: c[1] ||= (e) => u.isMockPagesOpen = !1,
			onClick: c[2] ||= (e) => u.isMockPagesOpen = !u.isMockPagesOpen
		}, [o(S(u.mockPagesLabel) + " ", 1), s(u.ChevronDown, {
			size: 14,
			class: m(["transition-transform", u.isMockPagesOpen ? "rotate-180" : ""])
		}, null, 8, ["class"])], 32), u.isMockPagesOpen ? (v(), i("div", {
			key: 0,
			class: "absolute left-0 top-full pt-2 w-48",
			onMouseenter: c[4] ||= (e) => u.isMockPagesOpen = !0,
			onMouseleave: c[5] ||= (e) => u.isMockPagesOpen = !1
		}, [a("div", At, [(v(!0), i(e, null, b(u.mockPagesList, (e) => (v(), n(p, {
			key: e.to,
			to: e.to,
			class: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
			onClick: c[3] ||= (e) => u.isMockPagesOpen = !1
		}, {
			default: w(() => [o(S(e.label), 1)]),
			_: 2
		}, 1032, ["to"]))), 128))])], 32)) : r("v-if", !0)])
	])]), a("div", jt, [
		a("a", Mt, [a("span", Nt, S(u.goToGithub), 1), c[6] ||= a("svg", {
			viewBox: "0 0 16 16",
			"aria-hidden": "true",
			width: "20",
			height: "20"
		}, [a("path", {
			fill: "currentColor",
			d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
		})], -1)]),
		s(u.LocaleSwitcher),
		s(u.ThemeToggle)
	])])]);
}
var Ft = $(wt, [["render", Pt], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/Header.vue"]]), It = c({
	__name: "Layout",
	setup(e, { expose: t }) {
		t();
		let n = T(), { setLocale: r } = Q(), i = y(0);
		h(() => {
			i.value = typeof performance < "u" ? performance.now() : 0;
		}), g(() => {
			Ke(), qe("AppRoot", i.value);
		}), C(() => n.params.locale, (e) => {
			e && (document.documentElement.lang = e, r(e));
		}, { immediate: !0 });
		let a = {
			route: n,
			setLocale: r,
			renderStart: i,
			Footer: ct,
			Header: Ft
		};
		return Object.defineProperty(a, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), a;
	}
});
function Lt(t, n, r, a, o, c) {
	let l = x("router-view");
	return v(), i(e, null, [
		s(a.Header),
		s(l),
		s(a.Footer)
	], 64);
}
var Rt = $(It, [["render", Lt], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/Layout.vue"]]);
export { Rt as default };
