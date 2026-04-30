import { Dynamic as e, createComponent as t, insert as n, template as r } from "solid-js/web";
import { For as i, createContext as a, createMemo as o, useContext as s } from "solid-js";
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
}, l = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
}, u = (t) => {
	if (typeof t == "string") return t;
	let { type: n, props: r } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let t = [], { children: n } = e.props;
			return Object.keys(n ?? {}).forEach((e) => {
				t.push(u(n?.[e]));
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
}, d = {
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
}, f = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, p = "translation", m = "object", h = "array", g = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => g(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => g(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: h,
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
					type: m,
					key: r
				}]
			}, i = g(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, _ = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, v = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (_(e) && _(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : v(e[r], t[r]));
		return n;
	}
	return e;
}, y = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => v(e, t));
}, b = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, x = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? b : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: p,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return y(o, e, t);
	}
}, S = b, C = b, w = b, T = b, E = (e) => b, D = b, O = (e, t = !0) => [
	x(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
	S,
	C,
	w,
	E(e ?? d.defaultLocale),
	D,
	T
], k = (e, t, n = []) => g(e, {
	...t,
	plugins: n
}), A = (e, t, n = O(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return k(e.content, r, n);
}, j = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => l({
		...n,
		value: n.children,
		children: n.children
	})
}, M = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? b : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (e, { plugins: t, ...n }) => l({
		...n,
		value: "[[solid-element]]",
		children: typeof Node < "u" && e instanceof Node ? e : u(e)
	})
}, N = b, P = b, F = b, I = /* @__PURE__ */ new Map(), L = (e, t = !0) => {
	let n = `${e ?? d.defaultLocale}_${t}`;
	if (I.has(n)) return I.get(n);
	let r = [
		x(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
		S,
		C,
		E(e ?? d.defaultLocale),
		D,
		T,
		j,
		M,
		N,
		P,
		F
	];
	return I.set(n, r), r;
}, R = (e, t) => A(e, t, L(t)), z = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var B = (e = V) => {
	let { locales: t } = d;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!z) for (let t = 0; t < (f.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(f.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, V = {
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
}, H = B(V), U = a({
	locale: () => H ?? d?.defaultLocale,
	setLocale: () => null
}), W = (e, t) => {
	let n = s(U) ?? {};
	return o(() => R(e, t ?? n?.locale?.()));
}, G = r("<section><h2 class=\"mb-6 text-2xl font-bold text-foreground\"></h2><div class=\"overflow-x-auto rounded-lg border border-border\"><table class=\"w-full text-sm\"><thead class=bg-muted><tr><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"></th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"></th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"></th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"></th></tr></thead><tbody>"), K = r("<tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"></td><td class=\"px-4 py-3 text-muted-foreground\"></td><td class=\"px-4 py-3 text-muted-foreground\"></td><td class=\"px-4 py-3 text-muted-foreground\">");
function q() {
	let e = W(c), r = [
		{
			lib: "react-i18next",
			size: "42.3 kB",
			time: "0.12ms",
			lazy: e().yes.value
		},
		{
			lib: "react-intl",
			size: "38.1 kB",
			time: "0.15ms",
			lazy: e().manual.value
		},
		{
			lib: "lingui",
			size: "12.8 kB",
			time: "0.08ms",
			lazy: e().yes.value
		},
		{
			lib: "typesafe-i18n",
			size: "5.2 kB",
			time: "0.05ms",
			lazy: "Built-in"
		}
	];
	return (() => {
		var a = G(), o = a.firstChild, s = o.nextSibling.firstChild.firstChild, c = s.firstChild.firstChild, l = c.nextSibling, u = l.nextSibling, d = u.nextSibling, f = s.nextSibling;
		return n(o, () => e().sampleResults), n(c, () => e().library), n(l, () => e().bundleSize), n(u, () => e().lookupTime), n(d, () => e().lazyLoading), n(f, t(i, {
			each: r,
			children: (e) => (() => {
				var t = K(), r = t.firstChild, i = r.nextSibling, a = i.nextSibling, o = a.nextSibling;
				return n(r, () => e.lib), n(i, () => e.size), n(a, () => e.time), n(o, () => e.lazy), t;
			})()
		})), a;
	})();
}
export { q as default };
