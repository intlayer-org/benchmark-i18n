import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r, createContext as i, createMemo as a, lazy as o, useContext as s } from "solid-js";
var c = {
	key: "results-table",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				g: "Yes",
				e: "Manual",
				f: "Sample Results",
				c: "Library",
				a: "Bundle Size",
				d: "Lookup Time",
				b: "Lazy Loading"
			},
			fr: {
				g: "Oui",
				e: "Manuel",
				f: "Exemples de résultats",
				c: "Bibliothèque",
				a: "Taille du bundle",
				d: "Temps de recherche",
				b: "Chargement différé"
			},
			es: {
				g: "Sí",
				e: "Manual",
				f: "Resultados de ejemplo",
				c: "Biblioteca",
				a: "Tamaño del bundle",
				d: "Tiempo de búsqueda",
				b: "Carga diferida"
			},
			de: {
				g: "Ja",
				e: "Manuell",
				f: "Beispielergebnisse",
				c: "Bibliothek",
				a: "Bundle-Größe",
				d: "Lookup-Zeit",
				b: "Lazy Loading"
			},
			it: {
				g: "Sì",
				e: "Manuale",
				f: "Risultati di esempio",
				c: "Libreria",
				a: "Dimensione del bundle",
				d: "Tempo di ricerca",
				b: "Caricamento lazy"
			},
			pt: {
				g: "Sim",
				e: "Manual",
				f: "Resultados de exemplo",
				c: "Biblioteca",
				a: "Tamanho do bundle",
				d: "Tempo de Busca",
				b: "Carregamento Lento"
			},
			zh: {
				g: "是",
				e: "手动",
				f: "示例结果",
				c: "库",
				a: "捆绑包大小",
				d: "查找时间",
				b: "延迟加载"
			},
			ja: {
				g: "はい",
				e: "手動",
				f: "サンプル結果",
				c: "ライブラリ",
				a: "バンドルサイズ",
				d: "検索時間",
				b: "遅延ロード"
			},
			ko: {
				g: "예",
				e: "수동",
				f: "샘플 결과",
				c: "라이브러리",
				a: "번들 크기",
				d: "검색 시간",
				b: "지연 로드"
			},
			ru: {
				g: "Да",
				e: "Вручную",
				f: "Примеры результатов",
				c: "Библиотека",
				a: "Размер бандла",
				d: "Время поиска",
				b: "Ленивая загрузка"
			}
		}
	}
}, l = {
	constructor: "constructor",
	length: "length",
	slice: "slice",
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, u = (e) => typeof e == "string" && /^\d+$/.test(e), d = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		if (n === l.value) return t;
		if (n === Symbol.toPrimitive) return (e) => e === "number" ? Number(t) : t ?? "";
		if (n === l.toString) return () => String(t ?? "");
		if (n === l.valueOf) return () => t;
		if (n === l.slice) return Reflect.get(e, n, r);
		if (t != null && typeof n == "string" && n !== l.constructor && n !== l.length && !u(n)) {
			let e = Object(t);
			if (n in e) {
				let r = Reflect.get(e, n);
				return typeof r == "function" ? r.bind(t) : r;
			}
		}
		return Reflect.get(e, n, r);
	} });
}, f = {
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
}, m = /* @__PURE__ */ new WeakMap(), h = 0, g = (e) => {
	if (!e) return "base";
	let t = m.get(e);
	if (t) return t;
	h += 1;
	let n = `p${h}`;
	return m.set(e, n), n;
}, _ = 256, v = /* @__PURE__ */ new WeakMap(), y = (e) => typeof e == "object" && !!e, b = (e, t, n) => `${e}_${t}_${g(n)}`, x = (e, t) => {
	if (!y(e)) return { hit: !1 };
	let n = v.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, S = (e, t, n) => {
	if (!y(e)) return n;
	let r = v.get(e);
	return r || (r = /* @__PURE__ */ new Map(), v.set(e, r)), r.size >= _ && r.clear(), r.set(t, n), n;
}, C = "translation", w = "object", T = "array", E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => E(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: T,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: w,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = E(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = E(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, D = "default", O = /[^A-Za-z0-9._&=-]/g, k = /[^A-Za-z0-9._-]/g, A = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, j = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, A);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, M = (e) => e === void 0 ? D : typeof e == "string" ? j(e, O) : Object.keys(e).sort().map((t) => `${j(t, k)}=${j(String(e[t]), k)}`).join("&"), N = (e) => Array.isArray(e) ? e.length === 0 ? [D] : e.map(M) : [M(e)], P = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? D : e[0] ?? "default";
}, ee = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, te = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ne = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, re = (e, t) => {
	if (!te(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? D : P(N(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ee(e, n, t, s)).map((t) => ne(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ie = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, ae = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? N(n).join(",") : String(n)}`;
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
					type: C,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return L(o, e, t);
	}
}, B = R, V = (e) => R, H = R, U = R, W = R, G = R, K = (e) => R, q = R, J = (e, t = !0) => [
	z(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	B,
	H,
	U,
	K(e ?? f.defaultLocale),
	q,
	W,
	G
], oe = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), se = (e, t, n) => {
	let { locale: r, selector: i } = ie(t), a = b(r ?? f.defaultLocale, ae(i), n), o = x(e, a);
	if (o.hit) return o.content;
	let s = n ?? J(r), c = re(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return oe(e.content, t, s);
	};
	return c === null ? S(e, a, null) : Array.isArray(c) ? S(e, a, c.map(l)) : S(e, a, l(c));
}, Y = null, X = null;
Y?.catch(() => {}), X?.catch(() => {});
var ce = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => d({
		...n,
		value: n.children,
		children: n.children
	})
}, le = R, ue = R;
o(() => Y.then((e) => ({ default: e.MarkdownRenderer }))), o(() => Y.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var de = R;
o(() => X.then((e) => ({ default: e })));
var fe = R, Z = /* @__PURE__ */ new Map(), pe = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		z(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		B,
		V(e ?? f.defaultLocale),
		H,
		K(e ?? f.defaultLocale),
		q,
		W,
		G,
		ce,
		le,
		ue,
		de,
		fe
	];
	return Z.set(n, r), r;
}, me = (e, t) => se(e, t, pe(typeof t == "object" && t ? t.locale : t)), Q = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var $ = {
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
}, he = ((e = $) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Q) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})($), ge = i({
	locale: () => he ?? f?.defaultLocale,
	setLocale: () => null
}), _e = Symbol("LOADABLE_SETTLED_VALUE"), ve = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[_e];
}, ye = (e, t) => {
	let n = s(ge) ?? {}, r = a(() => {
		let r = n?.locale?.();
		return me(ve(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, be = n("<section><h2 class=\"mb-6 text-2xl font-bold text-foreground\"></h2><div class=\"overflow-x-auto rounded-lg border border-border\"><table class=\"w-full text-sm\"><thead class=bg-muted><tr><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"></th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"></th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"></th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"></th></tr></thead><tbody>"), xe = n("<tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"></td><td class=\"px-4 py-3 text-muted-foreground\"></td><td class=\"px-4 py-3 text-muted-foreground\"></td><td class=\"px-4 py-3 text-muted-foreground\">");
function Se() {
	let n = ye(c), i = [
		{
			lib: "react-i18next",
			size: "42.3 kB",
			time: "0.12ms",
			lazy: n().g.value
		},
		{
			lib: "react-intl",
			size: "38.1 kB",
			time: "0.15ms",
			lazy: n().e.value
		},
		{
			lib: "lingui",
			size: "12.8 kB",
			time: "0.08ms",
			lazy: n().g.value
		},
		{
			lib: "typesafe-i18n",
			size: "5.2 kB",
			time: "0.05ms",
			lazy: "Built-in"
		}
	];
	return (() => {
		var a = be(), o = a.firstChild, s = o.nextSibling.firstChild.firstChild, c = s.firstChild.firstChild, l = c.nextSibling, u = l.nextSibling, d = u.nextSibling, f = s.nextSibling;
		return t(o, () => n().f), t(c, () => n().c), t(l, () => n().a), t(u, () => n().d), t(d, () => n().b), t(f, e(r, {
			each: i,
			children: (e) => (() => {
				var n = xe(), r = n.firstChild, i = r.nextSibling, a = i.nextSibling, o = a.nextSibling;
				return t(r, () => e.lib), t(i, () => e.size), t(a, () => e.time), t(o, () => e.lazy), n;
			})()
		})), a;
	})();
}
export { Se as default };
