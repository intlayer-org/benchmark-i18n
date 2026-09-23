import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { createContext as r, createMemo as i, lazy as a, useContext as o } from "solid-js";
var s = {
	key: "contact-header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				a: "Get in Touch",
				b: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
			},
			fr: {
				a: "Contactez-nous",
				b: "Vous avez des idées, trouvé un bug ou voulez proposer un benchmark ? Contactez-nous à"
			},
			es: {
				a: "Ponerse en contacto",
				b: "¿Tiene ideas, encontró un error o quiere contribuir con un benchmark? Póngase en contacto con nosotros en"
			},
			de: {
				a: "Kontaktieren Sie uns",
				b: "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter"
			},
			it: {
				a: "Mettiti in contatto",
				b: "Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo"
			},
			pt: {
				a: "Entre em contato",
				b: "Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em"
			},
			zh: {
				a: "联系我们",
				b: "有想法、发现了错误或想贡献基准测试？请通过以下方式联系我们"
			},
			ja: {
				a: "お問い合わせ",
				b: "アイデアがある、バグを見つけた、またはベンチマークを提供したいですか？こちらまでお問い合わせください："
			},
			ko: {
				a: "연락처",
				b: "아이디어가 있거나 버그를 발견했거나 벤치마크를 제공하고 싶으신가요? 다음 주소로 문의해 주세요."
			},
			ru: {
				a: "Связаться с нами",
				b: "Есть идеи, нашли ошибку или хотите предложить бенчмарк? Свяжитесь с нами по адресу"
			}
		}
	}
}, c = {
	constructor: "constructor",
	length: "length",
	slice: "slice",
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, l = (e) => typeof e == "string" && /^\d+$/.test(e), ee = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		if (n === c.value) return t;
		if (n === Symbol.toPrimitive) return (e) => e === "number" ? Number(t) : t ?? "";
		if (n === c.toString) return () => String(t ?? "");
		if (n === c.valueOf) return () => t;
		if (n === c.slice) return Reflect.get(e, n, r);
		if (t != null && typeof n == "string" && n !== c.constructor && n !== c.length && !l(n)) {
			let e = Object(t);
			if (n in e) {
				let r = Reflect.get(e, n);
				return typeof r == "function" ? r.bind(t) : r;
			}
		}
		return Reflect.get(e, n, r);
	} });
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
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, f = /* @__PURE__ */ new WeakMap(), p = 0, m = (e) => {
	if (!e) return "base";
	let t = f.get(e);
	if (t) return t;
	p += 1;
	let n = `p${p}`;
	return f.set(e, n), n;
}, h = 256, g = /* @__PURE__ */ new WeakMap(), _ = (e) => typeof e == "object" && !!e, te = (e, t, n) => `${e}_${t}_${m(n)}`, v = (e, t) => {
	if (!_(e)) return { hit: !1 };
	let n = g.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, y = (e, t, n) => {
	if (!_(e)) return n;
	let r = g.get(e);
	return r || (r = /* @__PURE__ */ new Map(), g.set(e, r)), r.size >= h && r.clear(), r.set(t, n), n;
}, b = "translation", x = "object", S = "array", C = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => C(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => C(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: S,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: x,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = C(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = C(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, w = "default", T = /[^A-Za-z0-9._&=-]/g, E = /[^A-Za-z0-9._-]/g, D = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, O = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, D);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, k = (e) => e === void 0 ? w : typeof e == "string" ? O(e, T) : Object.keys(e).sort().map((t) => `${O(t, E)}=${O(String(e[t]), E)}`).join("&"), A = (e) => Array.isArray(e) ? e.length === 0 ? [w] : e.map(k) : [k(e)], j = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? w : e[0] ?? "default";
}, M = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, N = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ne = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, re = (e, t) => {
	if (!N(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? w : j(A(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => M(e, n, t, s)).map((t) => ne(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ie = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, ae = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? A(n).join(",") : String(n)}`;
}).join("|") : "", P = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, F = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (P(e) && P(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : F(e[r], t[r]));
		return n;
	}
	return e;
}, I = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => F(e, t));
}, L = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, R = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? L : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: b,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return I(o, e, t);
	}
}, z = L, B = (e) => L, V = L, H = L, U = L, W = L, G = (e) => L, K = L, q = (e, t = !0) => [
	R(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	z,
	V,
	H,
	G(e ?? u.defaultLocale),
	K,
	U,
	W
], J = (e, t, n = []) => C(e, {
	...t,
	plugins: n
}), oe = (e, t, n) => {
	let { locale: r, selector: i } = ie(t), a = te(r ?? u.defaultLocale, ae(i), n), o = v(e, a);
	if (o.hit) return o.content;
	let s = n ?? q(r), c = re(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return J(e.content, t, s);
	};
	return c === null ? y(e, a, null) : Array.isArray(c) ? y(e, a, c.map(l)) : y(e, a, l(c));
}, Y = null, X = null;
Y?.catch(() => {}), X?.catch(() => {});
var se = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => ee({
		...n,
		value: n.children,
		children: n.children
	})
}, ce = L, le = L;
a(() => Y.then((e) => ({ default: e.MarkdownRenderer }))), a(() => Y.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var ue = L;
a(() => X.then((e) => ({ default: e })));
var de = L, Z = /* @__PURE__ */ new Map(), fe = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		R(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		z,
		B(e ?? u.defaultLocale),
		V,
		G(e ?? u.defaultLocale),
		K,
		U,
		W,
		se,
		ce,
		le,
		ue,
		de
	];
	return Z.set(n, r), r;
}, pe = (e, t) => oe(e, t, fe(typeof t == "object" && t ? t.locale : t)), me = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Q = {
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
}, he = ((e = Q) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!me) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})(Q), ge = r({
	locale: () => he ?? u?.defaultLocale,
	setLocale: () => null
}), _e = Symbol("LOADABLE_SETTLED_VALUE"), ve = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[_e];
}, $ = (e, t) => {
	let n = o(ge) ?? {}, r = i(() => {
		let r = n?.locale?.();
		return pe(ve(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, ye = {
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
}, be = n("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\">");
function xe() {
	let e = $(ye);
	return (() => {
		var n = be();
		return t(n, () => e().a), n;
	})();
}
var Se = n("<h1 class=\"mb-2 text-3xl font-bold text-foreground\">"), Ce = n("<p class=\"mb-8 text-muted-foreground\"> <a href=mailto:contact@intlayer.org class=\"text-primary hover:underline\">contact@intlayer.org</a>.");
function we() {
	let n = $(s);
	return [
		e(xe, {}),
		(() => {
			var e = Se();
			return t(e, () => n().a), e;
		})(),
		(() => {
			var e = Ce(), r = e.firstChild;
			return t(e, () => n().b, r), e;
		})()
	];
}
export { we as default };
