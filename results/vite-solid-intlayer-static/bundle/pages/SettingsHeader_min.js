import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { createContext as r, createMemo as i, lazy as a, useContext as o } from "solid-js";
var s = {
	key: "settings-header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				b: "Settings",
				a: "Manage your account preferences and configuration."
			},
			fr: {
				b: "Paramètres",
				a: "Gérez vos préférences de compte et votre configuration."
			},
			es: {
				b: "Ajustes",
				a: "Gestione las preferencias y la configuración de su cuenta."
			},
			de: {
				b: "Einstellungen",
				a: "Verwalten Sie Ihre Kontoeinstellungen und -konfigurationen."
			},
			it: {
				b: "Impostazioni",
				a: "Gestisci le preferenze e la configurazione del tuo account."
			},
			pt: {
				b: "Configurações",
				a: "Gerencie suas preferências de conta e configuração."
			},
			zh: {
				b: "设置",
				a: "管理您的帐户首选项和配置。"
			},
			ja: {
				b: "設定",
				a: "アカウント設定と構成を管理します。"
			},
			ko: {
				b: "설정",
				a: "계정 환경 설정 및 구성을 관리하세요."
			},
			ru: {
				b: "Настройки",
				a: "Управляйте настройками и конфигурацией вашего аккаунта."
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
}, l = {
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
}, u = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var d = {
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
}, f = (e = d) => {
	let { locales: t } = c;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!u) for (let t = 0; t < (l.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(l.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ee = !1, p, m = () => typeof window > "u" ? f(d) : (ee ||= (p = f(d), !0), p), h = /* @__PURE__ */ new Map(), g = (e, t) => Object.create(new Proxy(e, {
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
}), _ = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = h.get(t);
	i || (i = /* @__PURE__ */ new Map(), h.set(t, i));
	let a = i.get(r);
	return a || (a = g(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, v = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, _(t, Array.prototype)), r;
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
}, te = "translation", ne = "object", O = "array", k = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), A = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, A);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => A(e, k(t, e, {
		type: O,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ne,
			key: r
		};
		if (t.eager) {
			n[r] = A(e[r], k(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = A(e[r], k(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, j = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, M = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !j(e) || !j(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? M(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, N = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => M(e, t));
}, P = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, F = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? P : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = N(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: te,
				key: e
			}]
		});
	}
}, I = P, L = (e) => P, R = P, z = P, B = P, V = P, H = (e) => P, U = P, W = (e, t = !0) => [
	F(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
	I,
	L(e ?? c.defaultLocale),
	R,
	z,
	H(e ?? c.defaultLocale),
	U,
	B,
	V
].filter((e) => e !== P), G = (e, t, n = []) => A(e, {
	...t,
	plugins: n
}), K = /* @__PURE__ */ new WeakSet(), q = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = T(r ?? c.defaultLocale, "", n), o = E(e, a);
	if (o.hit) return o.content;
	let s = n ?? W(r), l = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !K.has(e)
		};
		K.add(e);
		try {
			return G(e.content, t, s);
		} finally {
			t.eager && K.delete(e);
		}
	};
	return l === null ? D(e, a, null) : Array.isArray(l) ? D(e, a, l.map(u)) : D(e, a, u(l));
}, J = null, Y = null;
J?.catch(() => {}), Y?.catch(() => {});
var X = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => v({
		value: t.children,
		children: t.children
	})
}, Z = P, re = P;
a(() => J.then((e) => ({ default: e.MarkdownRenderer }))), a(() => J.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var ie = P;
a(() => Y.then((e) => ({ default: e })));
var ae = P, Q = /* @__PURE__ */ new Map(), oe = (e, t = !0) => {
	let n = `${e ?? c.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		X,
		F(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
		I,
		L(e ?? c.defaultLocale),
		R,
		H(e ?? c.defaultLocale),
		U,
		B,
		V,
		Z,
		re,
		ie,
		ae
	].filter((e) => e !== P);
	return Q.set(n, r), r;
}, se = (e, t) => q(e, t, oe(typeof t == "object" && t ? t.locale : t)), ce = m, le = r({
	locale: () => ce() ?? c?.defaultLocale,
	setLocale: () => null
}), ue = Symbol("LOADABLE_SETTLED_VALUE"), de = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[ue];
}, $ = (e, t) => {
	let n = o(le) ?? {}, r = i(() => {
		let r = n?.locale?.();
		return se(de(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, fe = {
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
}, pe = n("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\">");
function me() {
	let e = $(fe);
	return (() => {
		var n = pe();
		return t(n, () => e().a), n;
	})();
}
var he = n("<h1 class=\"mb-2 text-3xl font-bold text-foreground\">"), ge = n("<p class=\"mb-8 text-muted-foreground\">");
function _e() {
	let n = $(s);
	return [
		e(me, {}),
		(() => {
			var e = he();
			return t(e, () => n().b), e;
		})(),
		(() => {
			var e = ge();
			return t(e, () => n().a), e;
		})()
	];
}
export { _e as default };
