import { insert as e, setAttribute as t, template as n } from "solid-js/web";
import { createContext as r, createMemo as i, createRenderEffect as a, createResource as o, createUniqueId as s, lazy as c, untrack as l, useContext as u } from "solid-js";
var d = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), f = {
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
}, p = {
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
}, ee = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, te = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && ee(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, ne = ["en"], re = "__intlayerPreloaded", m = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? f?.defaultLocale ?? "en",
	mode: e.mode ?? p?.mode ?? "prefix-no-default",
	locales: e.locales ?? f?.locales ?? ne,
	rewrite: e.rewrite ?? p?.rewrite,
	domains: e.domains ?? p?.domains
}), h = (e, t) => !!e && (t ?? f.locales).includes(e), ie = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var g = {
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
}, _ = (e = g) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ie) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ae = !1, v, oe = () => typeof window > "u" ? _(g) : (ae ||= (v = _(g), !0), v), se = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = m(t);
	if (!n || !r) return n;
	let a = d(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return h(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (h(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ce = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = m(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = te(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = se(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return _() ?? t;
}, le, y, ue = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (y === void 0 || le !== e) && (le = e, y = ce()), y;
}, b = {
	de: () => import("./intlayer-ApiAccessSection-14l2p6-de-UwTx5USP.js").then((e) => e.t).then((e) => e.default),
	en: () => import("./intlayer-ApiAccessSection-14l2p6-en-CEEyHmlZ.js").then((e) => e.t).then((e) => e.default),
	es: () => import("./intlayer-ApiAccessSection-14l2p6-es-BVg1ST4F.js").then((e) => e.t).then((e) => e.default),
	fr: () => import("./intlayer-ApiAccessSection-14l2p6-fr-DtP1Rjw2.js").then((e) => e.t).then((e) => e.default),
	it: () => import("./intlayer-ApiAccessSection-14l2p6-it-CJ35S3My.js").then((e) => e.t).then((e) => e.default),
	ja: () => import("./intlayer-ApiAccessSection-14l2p6-ja-Do3OZiFE.js").then((e) => e.t).then((e) => e.default),
	ko: () => import("./intlayer-ApiAccessSection-14l2p6-ko-B66WFXku.js").then((e) => e.t).then((e) => e.default),
	pt: () => import("./intlayer-ApiAccessSection-14l2p6-pt-DziqKiCT.js").then((e) => e.t).then((e) => e.default),
	ru: () => import("./intlayer-ApiAccessSection-14l2p6-ru-C_2Ul5na.js").then((e) => e.t).then((e) => e.default),
	zh: () => import("./intlayer-ApiAccessSection-14l2p6-zh-eoIK3A3f.js").then((e) => e.t).then((e) => e.default)
}, x = ue(), S = b[x];
typeof window < "u" && typeof S == "function" && S().then((e) => {
	b.__intlayerPreloaded = {
		locale: x,
		dictionary: e
	};
}, () => void 0);
var C = /* @__PURE__ */ new Map(), de = (e, t) => Object.create(new Proxy(e, {
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
}), fe = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = C.get(t);
	i || (i = /* @__PURE__ */ new Map(), C.set(t, i));
	let a = i.get(r);
	return a || (a = de(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, pe = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, fe(t, Array.prototype)), r;
}, w = /* @__PURE__ */ new WeakMap(), T = 0, me = (e) => {
	if (!e) return "base";
	let t = w.get(e);
	if (t) return t;
	T += 1;
	let n = `p${T}`;
	return w.set(e, n), n;
}, he = 256, E = /* @__PURE__ */ new WeakMap(), D = (e) => typeof e == "object" && !!e, ge = (e, t, n) => `${e}_${t}_${me(n)}`, _e = (e, t) => {
	if (!D(e)) return { hit: !1 };
	let n = E.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, O = (e, t, n) => {
	if (!D(e)) return n;
	let r = E.get(e);
	return r || (r = /* @__PURE__ */ new Map(), E.set(e, r)), r.size >= he && r.clear(), r.set(t, n), n;
}, ve = "translation", ye = "object", be = "array", k = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), A = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, A);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => A(e, k(t, e, {
		type: be,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ye,
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
}, xe = (e, t, n) => {
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
}, N = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, P = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? N : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = xe(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ve,
				key: e
			}]
		});
	}
}, F = N, I = (e) => N, L = N, Se = N, R = N, z = N, B = (e) => N, V = N, Ce = (e, t = !0) => [
	P(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	F,
	I(e ?? f.defaultLocale),
	L,
	Se,
	B(e ?? f.defaultLocale),
	V,
	R,
	z
].filter((e) => e !== N), we = (e, t, n = []) => A(e, {
	...t,
	plugins: n
}), H = /* @__PURE__ */ new WeakSet(), Te = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ge(r ?? f.defaultLocale, "", n), o = _e(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ce(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !H.has(e)
		};
		H.add(e);
		try {
			return we(e.content, t, s);
		} finally {
			t.eager && H.delete(e);
		}
	};
	return c === null ? O(e, a, null) : Array.isArray(c) ? O(e, a, c.map(l)) : O(e, a, l(c));
}, Ee = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[re];
	if (n && n.locale === t) return n.dictionary;
}, U = null, W = null;
U?.catch(() => {}), W?.catch(() => {});
var De = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => pe({
		value: t.children,
		children: t.children
	})
}, Oe = N, ke = N;
c(() => U.then((e) => ({ default: e.MarkdownRenderer }))), c(() => U.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var Ae = N;
c(() => W.then((e) => ({ default: e })));
var je = N, G = /* @__PURE__ */ new Map(), Me = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if (G.has(n)) return G.get(n);
	let r = [
		De,
		P(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		F,
		I(e ?? f.defaultLocale),
		L,
		B(e ?? f.defaultLocale),
		V,
		R,
		z,
		Oe,
		ke,
		Ae,
		je
	].filter((e) => e !== N);
	return G.set(n, r), r;
}, Ne = (e, t) => Te(e, t, Me(typeof t == "object" && t ? t.locale : t)), Pe = oe, K = r({
	locale: () => Pe() ?? f?.defaultLocale,
	setLocale: () => null
}), q = {
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, J = Symbol("NO_PENDING_PRIMITIVE_FALLBACK"), Y = Symbol("LOADABLE_SETTLED_VALUE"), X = /* @__PURE__ */ new Map(), Z = (e) => typeof e == "string" ? e : e.cacheKey, Q = (e, t) => t.reduce((e, t) => {
	if (e != null) return Reflect.get(Object(e), t);
}, e), Fe = (e, t) => typeof e == "function" ? e(t) : e, Ie = (e, t) => {
	let n = Z(e), r = X.get(n);
	if (r?.status === "success") return r.value;
	if (r?.status === "pending") return r.promise;
	let i = Fe(t, e).then((e) => (X.set(n, {
		status: "success",
		value: e
	}), e), (e) => {
		throw X.delete(n), e;
	});
	return X.set(n, {
		status: "pending",
		promise: i
	}), i;
}, Le = (e, t) => {
	let n = Z(e);
	X.has(n) || X.set(n, {
		status: "success",
		value: t
	});
}, Re = (e, t) => typeof t == "function" ? t.bind(e) : t, ze = (e) => e === Symbol.toPrimitive ? () => "" : e === Symbol.iterator ? () => ({ next: () => ({
	done: !0,
	value: void 0
}) }) : e === "length" ? 0 : e === q.toString ? () => "" : e === q.valueOf ? () => void 0 : e === q.value ? "" : J, $ = (e) => {
	let t = (n) => new Proxy(() => void 0, {
		get(r, i) {
			if (i === q.promiseThen) return;
			let a = Q(e(), n);
			if (i === Y) return a;
			if (a != null) return i === Symbol.toPrimitive ? () => a : Re(a, Reflect.get(Object(a), i));
			let o = ze(i);
			return o === J ? t([...n, i]) : o;
		},
		apply(t, r, i) {
			let a = Q(e(), n);
			return typeof a == "function" ? Reflect.apply(a, r, i) : i.length === 0 ? a ?? "" : $(() => {
				let t = Q(e(), n);
				if (typeof t == "function") return l(() => Reflect.apply(t, r, i));
			});
		}
	});
	return t([]);
}, Be = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[Y];
}, Ve = (e, t) => {
	let [n] = o(() => typeof e == "function" ? e() : e, (e) => Ie(e, t));
	return a(() => {
		n();
	}), $(() => n());
}, He = (e, t) => {
	let n = u(K) ?? {}, r = i(() => {
		let r = n?.locale?.();
		return Ne(Be(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, Ue = (e, t, n) => {
	let { locale: r } = u(K) ?? {}, i = f.defaultLocale, a = String(t), o = e, s = n, c = () => s ?? r?.() ?? i, l = () => {
		let e = c();
		return {
			cacheKey: `${a}.${e}`,
			locale: e
		};
	}, d = ({ locale: e }) => {
		let t = o[e];
		return t ? t() : Promise.reject(Error(`No dynamic dictionary loader found for key "${a}" and locale "${e}".`));
	}, p = Ee(o, c());
	return p && Le(l(), p), He(Ve(l, d), s);
}, We = n("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"></h2><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><div class=\"flex gap-2\"><input readonly defaultvalue=sk_bench_xxxxxxxxxxxxxxxxxxxx class=\"flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground\"><button type=button class=\"rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent\"></button></div><p class=\"mt-1 text-xs text-muted-foreground\">");
function Ge() {
	let n = Ue(b, "api-access-section"), r = s();
	return (() => {
		var i = We(), a = i.firstChild, o = a.nextSibling.firstChild, s = o.nextSibling, c = s.firstChild, l = c.nextSibling, u = s.nextSibling;
		return e(a, () => n().a), t(o, "for", r), e(o, () => n().b), t(c, "id", r), e(l, () => n().c), e(u, () => n().d), i;
	})();
}
export { Ge as default };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "api-access-section", r = {
	a: "API-Zugriff",
	b: "API-Schlüssel",
	c: "Kopieren",
	d: "Verwenden Sie diesen Schlüssel, um programmatisch auf die Benchmarking-API zuzugreifen."
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "api-access-section", r = {
	a: "API Access",
	b: "API Key",
	c: "Copy",
	d: "Use this key to access the benchmarking API programmatically."
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "api-access-section", r = {
	a: "Acceso API",
	b: "Clave API",
	c: "Copiar",
	d: "Utilice esta clave para acceder a la API de benchmarking de forma programada."
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "api-access-section", r = {
	a: "Accès API",
	b: "Clé API",
	c: "Copier",
	d: "Utilisez cette clé pour accéder à l'API de benchmarking par programmation."
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "api-access-section", r = {
	a: "Accesso API",
	b: "Chiave API",
	c: "Copia",
	d: "Usa questa chiave per accedere programmaticamente alle API di benchmarking."
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "api-access-section", r = {
	a: "APIアクセス",
	b: "APIキー",
	c: "コピー",
	d: "このキーを使用して、プログラムでベンチマークAPIにアクセスします。"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "api-access-section", r = {
	a: "API 액세스",
	b: "API 키",
	c: "복사",
	d: "이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하세요."
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "api-access-section", r = {
	a: "Acesso API",
	b: "Chave API",
	c: "Copiar",
	d: "Use esta chave para acessar a API de benchmarking programaticamente."
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "api-access-section", r = {
	a: "Доступ к API",
	b: "API-ключ",
	c: "Копировать",
	d: "Используйте этот ключ для программного доступа к API бенчмаркинга."
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "api-access-section", r = {
	a: "API 访问",
	b: "API 密钥",
	c: "复制",
	d: "使用此密钥以编程方式访问基准测试 API。"
}, i = {
	key: n,
	content: r
};
export { t };
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
};
export { t };
