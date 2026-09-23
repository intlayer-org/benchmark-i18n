import { insert as e, setAttribute as t, template as n } from "solid-js/web";
import { createContext as r, createMemo as i, createUniqueId as a, lazy as o, useContext as s } from "solid-js";
var c = {
	key: "api-access-section",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				a: "API Access",
				b: "API Key",
				c: "Copy",
				d: "Use this key to access the benchmarking API programmatically."
			},
			fr: {
				a: "Accès API",
				b: "Clé API",
				c: "Copier",
				d: "Utilisez cette clé pour accéder à l'API de benchmarking par programmation."
			},
			es: {
				a: "Acceso API",
				b: "Clave API",
				c: "Copiar",
				d: "Utilice esta clave para acceder a la API de benchmarking de forma programada."
			},
			de: {
				a: "API-Zugriff",
				b: "API-Schlüssel",
				c: "Kopieren",
				d: "Verwenden Sie diesen Schlüssel, um programmatisch auf die Benchmarking-API zuzugreifen."
			},
			it: {
				a: "Accesso API",
				b: "Chiave API",
				c: "Copia",
				d: "Usa questa chiave per accedere programmaticamente alle API di benchmarking."
			},
			pt: {
				a: "Acesso API",
				b: "Chave API",
				c: "Copiar",
				d: "Use esta chave para acessar a API de benchmarking programaticamente."
			},
			zh: {
				a: "API 访问",
				b: "API 密钥",
				c: "复制",
				d: "使用此密钥以编程方式访问基准测试 API。"
			},
			ja: {
				a: "APIアクセス",
				b: "APIキー",
				c: "コピー",
				d: "このキーを使用して、プログラムでベンチマークAPIにアクセスします。"
			},
			ko: {
				a: "API 액세스",
				b: "API 키",
				c: "복사",
				d: "이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하세요."
			},
			ru: {
				a: "Доступ к API",
				b: "API-ключ",
				c: "Копировать",
				d: "Используйте этот ключ для программного доступа к API бенчмаркинга."
			}
		}
	}
}, l = {
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
}, u = {
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
}, ee = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, f = ((e = d) => {
	let { locales: t } = l;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ee) for (let t = 0; t < (u.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(u.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})(d), p = r({
	locale: () => f ?? l?.defaultLocale,
	setLocale: () => null
}), m = /* @__PURE__ */ new WeakMap(), h = 0, g = (e) => {
	if (!e) return "base";
	let t = m.get(e);
	if (t) return t;
	h += 1;
	let n = `p${h}`;
	return m.set(e, n), n;
}, _ = 256, v = /* @__PURE__ */ new WeakMap(), y = (e) => typeof e == "object" && !!e, te = (e, t, n) => `${e}_${t}_${g(n)}`, ne = (e, t) => {
	if (!y(e)) return { hit: !1 };
	let n = v.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, b = (e, t, n) => {
	if (!y(e)) return n;
	let r = v.get(e);
	return r || (r = /* @__PURE__ */ new Map(), v.set(e, r)), r.size >= _ && r.clear(), r.set(t, n), n;
}, x = "translation", S = "object", C = "array", w = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => w(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => w(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: C,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: S,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = w(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = w(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, T = "default", E = /[^A-Za-z0-9._&=-]/g, D = /[^A-Za-z0-9._-]/g, O = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, k = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, O);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, A = (e) => e === void 0 ? T : typeof e == "string" ? k(e, E) : Object.keys(e).sort().map((t) => `${k(t, D)}=${k(String(e[t]), D)}`).join("&"), j = (e) => Array.isArray(e) ? e.length === 0 ? [T] : e.map(A) : [A(e)], re = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? T : e[0] ?? "default";
}, ie = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ae = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, M = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, N = (e, t) => {
	if (!ae(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? T : re(j(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ie(e, n, t, s)).map((t) => M(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, P = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, F = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? j(n).join(",") : String(n)}`;
}).join("|") : "", I = (e) => {
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
}, R = (e, t, n) => {
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
					type: x,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return R(o, e, t);
	}
}, V = z, H = (e) => z, U = z, W = z, G = z, K = z, q = (e) => z, J = z, oe = (e, t = !0) => [
	B(e ?? l.defaultLocale, t ? l.defaultLocale : void 0),
	V,
	U,
	W,
	q(e ?? l.defaultLocale),
	J,
	G,
	K
], se = (e, t, n = []) => w(e, {
	...t,
	plugins: n
}), ce = (e, t, n) => {
	let { locale: r, selector: i } = P(t), a = te(r ?? l.defaultLocale, F(i), n), o = ne(e, a);
	if (o.hit) return o.content;
	let s = n ?? oe(r), c = N(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return se(e.content, t, s);
	};
	return c === null ? b(e, a, null) : Array.isArray(c) ? b(e, a, c.map(u)) : b(e, a, u(c));
}, Y = {
	constructor: "constructor",
	length: "length",
	slice: "slice",
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, le = (e) => typeof e == "string" && /^\d+$/.test(e), ue = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		if (n === Y.value) return t;
		if (n === Symbol.toPrimitive) return (e) => e === "number" ? Number(t) : t ?? "";
		if (n === Y.toString) return () => String(t ?? "");
		if (n === Y.valueOf) return () => t;
		if (n === Y.slice) return Reflect.get(e, n, r);
		if (t != null && typeof n == "string" && n !== Y.constructor && n !== Y.length && !le(n)) {
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
var de = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => ue({
		...n,
		value: n.children,
		children: n.children
	})
}, fe = z, pe = z;
o(() => X.then((e) => ({ default: e.MarkdownRenderer }))), o(() => X.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var me = z;
o(() => Z.then((e) => ({ default: e })));
var Q = z, $ = /* @__PURE__ */ new Map(), he = (e, t = !0) => {
	let n = `${e ?? l.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		B(e ?? l.defaultLocale, t ? l.defaultLocale : void 0),
		V,
		H(e ?? l.defaultLocale),
		U,
		q(e ?? l.defaultLocale),
		J,
		G,
		K,
		de,
		fe,
		pe,
		me,
		Q
	];
	return $.set(n, r), r;
}, ge = (e, t) => ce(e, t, he(typeof t == "object" && t ? t.locale : t)), _e = Symbol("LOADABLE_SETTLED_VALUE"), ve = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[_e];
}, ye = (e, t) => {
	let n = s(p) ?? {}, r = i(() => {
		let r = n?.locale?.();
		return ge(ve(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, be = n("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"></h2><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><div class=\"flex gap-2\"><input readonly defaultvalue=sk_bench_xxxxxxxxxxxxxxxxxxxx class=\"flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground\"><button type=button class=\"rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent\"></button></div><p class=\"mt-1 text-xs text-muted-foreground\">");
function xe() {
	let n = ye(c), r = a();
	return (() => {
		var i = be(), a = i.firstChild, o = a.nextSibling.firstChild, s = o.nextSibling, c = s.firstChild, l = c.nextSibling, u = s.nextSibling;
		return e(a, () => n().a), t(o, "for", r), e(o, () => n().b), t(c, "id", r), e(l, () => n().c), e(u, () => n().d), i;
	})();
}
export { xe as default };
