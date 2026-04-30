import { Dynamic as e, createComponent as t, insert as n, template as r } from "solid-js/web";
import { createContext as i, createMemo as a, useContext as o } from "solid-js";
var s = {
	key: "team-header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				b: "Our Team",
				a: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
			},
			fr: {
				b: "Notre Équipe",
				a: "Rencontrez les personnes derrière i18n Benchmark. Une équipe diversifiée unie par une passion commune pour les excellents outils de développement."
			},
			es: {
				b: "Nuestro equipo",
				a: "Conozca a las personas detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las excelentes herramientas de desarrollo."
			},
			de: {
				b: "Unser Team",
				a: "Lernen Sie die Menschen hinter dem i18n Benchmark kennen. Ein vielfältiges Team, das die gemeinsame Leidenschaft für großartige Entwicklertools verbindet."
			},
			it: {
				b: "Il nostro team",
				a: "Incontra le persone dietro i18n Benchmark. Un team diversificato unito da una passione condivisa per i grandi strumenti per sviluppatori."
			},
			pt: {
				b: "Nossa Equipe",
				a: "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhata por ótimas ferramentas de desenvolvedor."
			},
			zh: {
				b: "我们的团队",
				a: "见见 i18n 基准测试背后的人。一个多元化的团队，因对出色开发人员工具的共同热情而团结在一起。"
			},
			ja: {
				b: "私たちのチーム",
				a: "i18nベンチマークを支える人々を紹介します。優れた開発者ツールへの情熱を共有する多様なチームです。"
			},
			ko: {
				b: "우리 팀",
				a: "i18n 벤치마크를 만든 사람들을 만나보세요. 훌륭한 개발자 도구에 대한 공통된 열정으로 뭉친 다양한 팀입니다."
			},
			ru: {
				b: "Наша команда",
				a: "Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к отличным инструментам разработки."
			}
		}
	}
}, c = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
}, l = (t) => {
	if (typeof t == "string") return t;
	let { type: n, props: r } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let t = [], { children: n } = e.props;
			return Object.keys(n ?? {}).forEach((e) => {
				t.push(l(n?.[e]));
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
}, u = {
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
}, d = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, f = "translation", p = "object", m = "array", h = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => h(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => h(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: m,
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
					type: p,
					key: r
				}]
			}, i = h(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, g = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, _ = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (g(e) && g(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : _(e[r], t[r]));
		return n;
	}
	return e;
}, v = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => _(e, t));
}, y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, b = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: f,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return v(o, e, t);
	}
}, x = y, S = y, C = y, w = y, T = (e) => y, E = y, D = (e, t = !0) => [
	b(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	x,
	S,
	C,
	T(e ?? u.defaultLocale),
	E,
	w
], O = (e, t, n = []) => h(e, {
	...t,
	plugins: n
}), k = (e, t, n = D(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return O(e.content, r, n);
}, A = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => c({
		...n,
		value: n.children,
		children: n.children
	})
}, j = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? y : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (e, { plugins: t, ...n }) => c({
		...n,
		value: "[[solid-element]]",
		children: typeof Node < "u" && e instanceof Node ? e : l(e)
	})
}, M = y, N = y, P = y, F = /* @__PURE__ */ new Map(), I = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if (F.has(n)) return F.get(n);
	let r = [
		b(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		x,
		S,
		T(e ?? u.defaultLocale),
		E,
		w,
		A,
		j,
		M,
		N,
		P
	];
	return F.set(n, r), r;
}, L = (e, t) => k(e, t, I(t)), R = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var z = (e = B) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!R) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, B = {
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
}, V = z(B), H = i({
	locale: () => V ?? u?.defaultLocale,
	setLocale: () => null
}), U = (e, t) => {
	let n = o(H) ?? {};
	return a(() => L(e, t ?? n?.locale?.()));
}, W = {
	key: "mock-banner",
	content: {
		nodeType: "translation",
		translation: {
			en: { a: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service." },
			fr: { a: "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel." },
			es: { a: "⚠️ Esta página contiene datos de prueba solo para fines de benchmarking. No está relacionada con ninguna empresa o servicio real." },
			de: { a: "⚠️ Diese Seite enthält Mock-Daten nur zu Benchmarking-Zwecken. Sie steht in keinem Zusammenhang mit einem echten Unternehmen oder einer echten Dienstleistung." },
			it: { a: "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale." },
			pt: { a: "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhum negócio ou serviço real." },
			zh: { a: "⚠️ 本页面包含仅用于基准测试目的的模拟数据。它与任何真实的业务 or 服务无关。" },
			ja: { a: "⚠️ このページにはベンチマーク目的のモックデータのみが含まれています。実際のビジネスやサービスとは関係ありません。" },
			ko: { a: "⚠️ 이 페이지에는 벤치마킹 목적의 모의 데이터만 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다." },
			ru: { a: "⚠️ Эта страница содержит мок-данные только для целей бенчмаркинга. Она не связана с каким-либо реальным бизнесом или услугой." }
		}
	}
}, G = r("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\">");
function K() {
	let e = U(W);
	return (() => {
		var t = G();
		return n(t, () => e().thisPageContainsMockData), t;
	})();
}
var q = r("<h1 class=\"mb-2 text-3xl font-bold text-foreground\">"), J = r("<p class=\"mb-10 text-muted-foreground\">");
function Y() {
	let e = U(s);
	return [
		t(K, {}),
		(() => {
			var t = q();
			return n(t, () => e().ourTeam), t;
		})(),
		(() => {
			var t = J();
			return n(t, () => e().meetThePeopleBehindI18n), t;
		})()
	];
}
export { Y as default };
