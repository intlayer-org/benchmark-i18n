import { insert as e, template as t } from "solid-js/web";
import { createContext as n, createMemo as r, lazy as i, useContext as a } from "solid-js";
var o = {
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
}, s = {
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
}, c = {
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
}, l = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var u = {
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
}, d = ((e = u) => {
	let { locales: t } = s;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!l) for (let t = 0; t < (c.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(c.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})(u), ee = n({
	locale: () => d ?? s?.defaultLocale,
	setLocale: () => null
}), f = /* @__PURE__ */ new WeakMap(), p = 0, m = (e) => {
	if (!e) return "base";
	let t = f.get(e);
	if (t) return t;
	p += 1;
	let n = `p${p}`;
	return f.set(e, n), n;
}, h = 256, g = /* @__PURE__ */ new WeakMap(), _ = (e) => typeof e == "object" && !!e, te = (e, t, n) => `${e}_${t}_${m(n)}`, ne = (e, t) => {
	if (!_(e)) return { hit: !1 };
	let n = g.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, v = (e, t, n) => {
	if (!_(e)) return n;
	let r = g.get(e);
	return r || (r = /* @__PURE__ */ new Map(), g.set(e, r)), r.size >= h && r.clear(), r.set(t, n), n;
}, y = "translation", b = "object", x = "array", S = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => S(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => S(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: x,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: b,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = S(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = S(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, C = "default", w = /[^A-Za-z0-9._&=-]/g, T = /[^A-Za-z0-9._-]/g, E = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, D = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, E);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, O = (e) => e === void 0 ? C : typeof e == "string" ? D(e, w) : Object.keys(e).sort().map((t) => `${D(t, T)}=${D(String(e[t]), T)}`).join("&"), k = (e) => Array.isArray(e) ? e.length === 0 ? [C] : e.map(O) : [O(e)], A = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? C : e[0] ?? "default";
}, j = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, M = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, re = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, ie = (e, t) => {
	if (!M(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? C : A(k(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => j(e, n, t, s)).map((t) => re(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, N = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, P = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? k(n).join(",") : String(n)}`;
}).join("|") : "", F = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, I = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (F(e) && F(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : I(e[r], t[r]));
		return n;
	}
	return e;
}, L = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => I(e, t));
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
					type: y,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return L(o, e, t);
	}
}, B = R, V = (e) => R, H = R, U = R, W = R, G = R, K = (e) => R, q = R, ae = (e, t = !0) => [
	z(e ?? s.defaultLocale, t ? s.defaultLocale : void 0),
	B,
	H,
	U,
	K(e ?? s.defaultLocale),
	q,
	W,
	G
], J = (e, t, n = []) => S(e, {
	...t,
	plugins: n
}), oe = (e, t, n) => {
	let { locale: r, selector: i } = N(t), a = te(r ?? s.defaultLocale, P(i), n), o = ne(e, a);
	if (o.hit) return o.content;
	let c = n ?? ae(r), l = ie(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries
		};
		return J(e.content, t, c);
	};
	return l === null ? v(e, a, null) : Array.isArray(l) ? v(e, a, l.map(u)) : v(e, a, u(l));
}, Y = {
	constructor: "constructor",
	length: "length",
	slice: "slice",
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, se = (e) => typeof e == "string" && /^\d+$/.test(e), ce = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		if (n === Y.value) return t;
		if (n === Symbol.toPrimitive) return (e) => e === "number" ? Number(t) : t ?? "";
		if (n === Y.toString) return () => String(t ?? "");
		if (n === Y.valueOf) return () => t;
		if (n === Y.slice) return Reflect.get(e, n, r);
		if (t != null && typeof n == "string" && n !== Y.constructor && n !== Y.length && !se(n)) {
			let e = Object(t);
			if (n in e) {
				let r = Reflect.get(e, n);
				return typeof r == "function" ? r.bind(t) : r;
			}
		}
		return Reflect.get(e, n, r);
	} });
}, X = null, Z = null;
X?.catch(() => {}), Z?.catch(() => {});
var le = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => ce({
		...n,
		value: n.children,
		children: n.children
	})
}, ue = R, Q = R;
i(() => X.then((e) => ({ default: e.MarkdownRenderer }))), i(() => X.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var de = R;
i(() => Z.then((e) => ({ default: e })));
var fe = R, $ = /* @__PURE__ */ new Map(), pe = (e, t = !0) => {
	let n = `${e ?? s.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		z(e ?? s.defaultLocale, t ? s.defaultLocale : void 0),
		B,
		V(e ?? s.defaultLocale),
		H,
		K(e ?? s.defaultLocale),
		q,
		W,
		G,
		le,
		ue,
		Q,
		de,
		fe
	];
	return $.set(n, r), r;
}, me = (e, t) => oe(e, t, pe(typeof t == "object" && t ? t.locale : t)), he = Symbol("LOADABLE_SETTLED_VALUE"), ge = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[he];
}, _e = (e, t) => {
	let n = a(ee) ?? {}, i = r(() => {
		let r = n?.locale?.();
		return me(ge(e) ?? e, t ?? r);
	});
	return new Proxy(i, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, ve = t("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\">");
function ye() {
	let t = _e(o);
	return (() => {
		var n = ve();
		return e(n, () => t().a), n;
	})();
}
export { ye as default };
