import { effect as e, insert as t, setAttribute as n, template as r } from "solid-js/web";
import { createContext as i, createMemo as a, createRenderEffect as o, createResource as s, createUniqueId as c, lazy as l, untrack as u, useContext as d } from "solid-js";
var f = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), p = {
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
}, m = {
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
}, h = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, g = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && h(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, _ = ["en"], v = "__intlayerPreloaded", y = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? p?.defaultLocale ?? "en",
	mode: e.mode ?? m?.mode ?? "prefix-no-default",
	locales: e.locales ?? p?.locales ?? _,
	rewrite: e.rewrite ?? m?.rewrite,
	domains: e.domains ?? m?.domains
}), b = (e, t) => !!e && (t ?? p.locales).includes(e), x = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var S = {
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
}, C = (e = S) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!x) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, w = !1, T, E = () => typeof window > "u" ? C(S) : (w ||= (T = C(S), !0), T), ee = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = y(t);
	if (!n || !r) return n;
	let a = f(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return b(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (b(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, te = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = y(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = g(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = ee(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return C() ?? t;
}, D, O, ne = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (O === void 0 || D !== e) && (D = e, O = te()), O;
}, k = {
	de: () => import("./intlayer-ContactForm-qikuz1-de-CERvICbK.js").then((e) => e.t).then((e) => e.default),
	en: () => import("./intlayer-ContactForm-qikuz1-en-AgrtPsgv.js").then((e) => e.t).then((e) => e.default),
	es: () => import("./intlayer-ContactForm-qikuz1-es-DQWY74HW.js").then((e) => e.t).then((e) => e.default),
	fr: () => import("./intlayer-ContactForm-qikuz1-fr-ByifzYGx.js").then((e) => e.t).then((e) => e.default),
	it: () => import("./intlayer-ContactForm-qikuz1-it-dlRiTzjA.js").then((e) => e.t).then((e) => e.default),
	ja: () => import("./intlayer-ContactForm-qikuz1-ja-D-utwuQj.js").then((e) => e.t).then((e) => e.default),
	ko: () => import("./intlayer-ContactForm-qikuz1-ko-DYRalfDG.js").then((e) => e.t).then((e) => e.default),
	pt: () => import("./intlayer-ContactForm-qikuz1-pt-DIBmo66r.js").then((e) => e.t).then((e) => e.default),
	ru: () => import("./intlayer-ContactForm-qikuz1-ru-DFUjMhqm.js").then((e) => e.t).then((e) => e.default),
	zh: () => import("./intlayer-ContactForm-qikuz1-zh-BBPJ4nSp.js").then((e) => e.t).then((e) => e.default)
}, re = ne(), ie = k[re];
typeof window < "u" && typeof ie == "function" && ie().then((e) => {
	k.__intlayerPreloaded = {
		locale: re,
		dictionary: e
	};
}, () => void 0);
var ae = /* @__PURE__ */ new Map(), oe = (e, t) => Object.create(new Proxy(e, {
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
}), se = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = ae.get(t);
	i || (i = /* @__PURE__ */ new Map(), ae.set(t, i));
	let a = i.get(r);
	return a || (a = oe(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ce = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, se(t, Array.prototype)), r;
}, le = /* @__PURE__ */ new WeakMap(), ue = 0, de = (e) => {
	if (!e) return "base";
	let t = le.get(e);
	if (t) return t;
	ue += 1;
	let n = `p${ue}`;
	return le.set(e, n), n;
}, fe = 256, A = /* @__PURE__ */ new WeakMap(), j = (e) => typeof e == "object" && !!e, pe = (e, t, n) => `${e}_${t}_${de(n)}`, me = (e, t) => {
	if (!j(e)) return { hit: !1 };
	let n = A.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, M = (e, t, n) => {
	if (!j(e)) return n;
	let r = A.get(e);
	return r || (r = /* @__PURE__ */ new Map(), A.set(e, r)), r.size >= fe && r.clear(), r.set(t, n), n;
}, he = "translation", ge = "object", _e = "array", N = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), P = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, P);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => P(e, N(t, e, {
		type: _e,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ge,
			key: r
		};
		if (t.eager) {
			n[r] = P(e[r], N(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = P(e[r], N(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, F = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, I = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !F(e) || !F(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? I(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, ve = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => I(e, t));
}, L = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, R = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? L : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = ve(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: he,
				key: e
			}]
		});
	}
}, z = L, B = (e) => L, V = L, ye = L, H = L, U = L, W = (e) => L, G = L, be = (e, t = !0) => [
	R(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	z,
	B(e ?? p.defaultLocale),
	V,
	ye,
	W(e ?? p.defaultLocale),
	G,
	H,
	U
].filter((e) => e !== L), xe = (e, t, n = []) => P(e, {
	...t,
	plugins: n
}), K = /* @__PURE__ */ new WeakSet(), Se = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = pe(r ?? p.defaultLocale, "", n), o = me(e, a);
	if (o.hit) return o.content;
	let s = n ?? be(r), c = e, l = (e) => {
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
			return xe(e.content, t, s);
		} finally {
			t.eager && K.delete(e);
		}
	};
	return c === null ? M(e, a, null) : Array.isArray(c) ? M(e, a, c.map(l)) : M(e, a, l(c));
}, Ce = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[v];
	if (n && n.locale === t) return n.dictionary;
}, q = null, we = null;
q?.catch(() => {}), we?.catch(() => {});
var Te = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ce({
		value: t.children,
		children: t.children
	})
}, Ee = L, De = L;
l(() => q.then((e) => ({ default: e.MarkdownRenderer }))), l(() => q.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var Oe = L;
l(() => we.then((e) => ({ default: e })));
var ke = L, J = /* @__PURE__ */ new Map(), Ae = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (J.has(n)) return J.get(n);
	let r = [
		Te,
		R(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		z,
		B(e ?? p.defaultLocale),
		V,
		W(e ?? p.defaultLocale),
		G,
		H,
		U,
		Ee,
		De,
		Oe,
		ke
	].filter((e) => e !== L);
	return J.set(n, r), r;
}, je = (e, t) => Se(e, t, Ae(typeof t == "object" && t ? t.locale : t)), Me = E, Ne = i({
	locale: () => Me() ?? p?.defaultLocale,
	setLocale: () => null
}), Y = {
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, X = Symbol("NO_PENDING_PRIMITIVE_FALLBACK"), Pe = Symbol("LOADABLE_SETTLED_VALUE"), Z = /* @__PURE__ */ new Map(), Fe = (e) => typeof e == "string" ? e : e.cacheKey, Q = (e, t) => t.reduce((e, t) => {
	if (e != null) return Reflect.get(Object(e), t);
}, e), Ie = (e, t) => typeof e == "function" ? e(t) : e, Le = (e, t) => {
	let n = Fe(e), r = Z.get(n);
	if (r?.status === "success") return r.value;
	if (r?.status === "pending") return r.promise;
	let i = Ie(t, e).then((e) => (Z.set(n, {
		status: "success",
		value: e
	}), e), (e) => {
		throw Z.delete(n), e;
	});
	return Z.set(n, {
		status: "pending",
		promise: i
	}), i;
}, Re = (e, t) => {
	let n = Fe(e);
	Z.has(n) || Z.set(n, {
		status: "success",
		value: t
	});
}, ze = (e, t) => typeof t == "function" ? t.bind(e) : t, Be = (e) => e === Symbol.toPrimitive ? () => "" : e === Symbol.iterator ? () => ({ next: () => ({
	done: !0,
	value: void 0
}) }) : e === "length" ? 0 : e === Y.toString ? () => "" : e === Y.valueOf ? () => void 0 : e === Y.value ? "" : X, $ = (e) => {
	let t = (n) => new Proxy(() => void 0, {
		get(r, i) {
			if (i === Y.promiseThen) return;
			let a = Q(e(), n);
			if (i === Pe) return a;
			if (a != null) return i === Symbol.toPrimitive ? () => a : ze(a, Reflect.get(Object(a), i));
			let o = Be(i);
			return o === X ? t([...n, i]) : o;
		},
		apply(t, r, i) {
			let a = Q(e(), n);
			return typeof a == "function" ? Reflect.apply(a, r, i) : i.length === 0 ? a ?? "" : $(() => {
				let t = Q(e(), n);
				if (typeof t == "function") return u(() => Reflect.apply(t, r, i));
			});
		}
	});
	return t([]);
}, Ve = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[Pe];
}, He = (e, t) => {
	let [n] = s(() => typeof e == "function" ? e() : e, (e) => Le(e, t));
	return o(() => {
		n();
	}), $(() => n());
}, Ue = (e, t) => {
	let n = d(Ne) ?? {}, r = a(() => {
		let r = n?.locale?.();
		return je(Ve(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, We = (e, t, n) => {
	let { locale: r } = d(Ne) ?? {}, i = p.defaultLocale, a = String(t), o = e, s = n, c = () => s ?? r?.() ?? i, l = () => {
		let e = c();
		return {
			cacheKey: `${a}.${e}`,
			locale: e
		};
	}, u = ({ locale: e }) => {
		let t = o[e];
		return t ? t() : Promise.reject(Error(`No dynamic dictionary loader found for key "${a}" and locale "${e}".`));
	}, f = Ce(o, c());
	return f && Re(l(), f), Ue(He(l, u), s);
}, Ge = r("<form class=space-y-6><div class=\"grid gap-4 md:grid-cols-2\"><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><input class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><input type=email class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"placeholder=you@example.com></div></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"><option></option><option></option><option></option><option></option><option></option></select></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><textarea rows=5 class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></textarea></div><button type=submit class=\"rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function Ke() {
	let r = We(k, "contact-form"), i = c(), a = c(), o = c(), s = c();
	return (() => {
		var c = Ge(), l = c.firstChild, u = l.firstChild, d = u.firstChild, f = d.nextSibling, p = u.nextSibling.firstChild, m = p.nextSibling, h = l.nextSibling, g = h.firstChild, _ = g.nextSibling, v = _.firstChild, y = v.nextSibling, b = y.nextSibling, x = b.nextSibling, S = x.nextSibling, C = h.nextSibling, w = C.firstChild, T = w.nextSibling, E = C.nextSibling;
		return n(d, "for", i), t(d, () => r().g), n(f, "id", i), n(p, "for", a), t(p, () => r().d), n(m, "id", a), n(g, "for", o), t(g, () => r().k), n(_, "id", o), t(v, () => r().a), t(y, () => r().h), t(b, () => r().f), t(x, () => r().b), t(S, () => r().i), n(w, "for", s), t(w, () => r().e), n(T, "id", s), t(E, () => r().j), e((e) => {
			var t = r().l.value, i = r().c.value;
			return t !== e.e && n(f, "placeholder", e.e = t), i !== e.t && n(T, "placeholder", e.t = i), e;
		}, {
			e: void 0,
			t: void 0
		}), c;
	})();
}
export { Ke as default };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "contact-form", r = {
	g: "Name",
	l: "Ihr Name",
	d: "E-Mail",
	k: "Thema",
	a: "Fehlerbericht",
	h: "Neue Benchmark-Idee",
	f: "Frage zur Methodik",
	b: "Beitrag",
	i: "Sonstiges",
	e: "Nachricht",
	c: "Beschreiben Sie Ihre Frage oder Idee...",
	j: "Nachricht senden"
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
}), n = "contact-form", r = {
	g: "Name",
	l: "Your name",
	d: "Email",
	k: "Topic",
	a: "Bug Report",
	h: "New Benchmark Idea",
	f: "Methodology Question",
	b: "Contribution",
	i: "Other",
	e: "Message",
	c: "Describe your question or idea...",
	j: "Send Message"
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
}), n = "contact-form", r = {
	g: "Nombre",
	l: "Tu nombre",
	d: "Correo electrónico",
	k: "Tema",
	a: "Reporte de error",
	h: "Nueva idea de benchmark",
	f: "Pregunta sobre metodología",
	b: "Contribución",
	i: "Otro",
	e: "Mensaje",
	c: "Describe tu pregunta o idea...",
	j: "Enviar mensaje"
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
}), n = "contact-form", r = {
	g: "Nom",
	l: "Votre nom",
	d: "Email",
	k: "Sujet",
	a: "Rapport de bug",
	h: "Nouvelle idée de benchmark",
	f: "Question sur la méthodologie",
	b: "Contribution",
	i: "Autre",
	e: "Message",
	c: "Décrivez votre question ou idée...",
	j: "Envoyer le message"
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
}), n = "contact-form", r = {
	g: "Nome",
	l: "Il tuo nome",
	d: "Email",
	k: "Argomento",
	a: "Segnalazione bug",
	h: "Nuova idea di benchmark",
	f: "Domanda sulla metodologia",
	b: "Contributo",
	i: "Altro",
	e: "Messaggio",
	c: "Descrivi la tua domanda o idea...",
	j: "Invia messaggio"
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
}), n = "contact-form", r = {
	g: "名前",
	l: "あなたの名前",
	d: "メールアドレス",
	k: "トピック",
	a: "バグ報告",
	h: "新しいベンチマークのアイデア",
	f: "方法論に関する質問",
	b: "貢献",
	i: "その他",
	e: "メッセージ",
	c: "質問やアイデアを説明してください...",
	j: "メッセージを送信"
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
}), n = "contact-form", r = {
	g: "이름",
	l: "귀하의 성함",
	d: "이메일",
	k: "주제",
	a: "버그 보고",
	h: "새로운 벤치마크 아이디어",
	f: "방법론 질문",
	b: "기여",
	i: "기타",
	e: "메시지",
	c: "질문이나 아이디어를 설명해 주세요...",
	j: "메시지 보내기"
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
}), n = "contact-form", r = {
	g: "Nome",
	l: "Seu nome",
	d: "E-mail",
	k: "Tópico",
	a: "Relato de bug",
	h: "Nova ideia de benchmark",
	f: "Pergunta sobre metodologia",
	b: "Contribuição",
	i: "Outro",
	e: "Mensagem",
	c: "Descreva sua pergunta ou ideia...",
	j: "Enviar mensagem"
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
}), n = "contact-form", r = {
	g: "Имя",
	l: "Ваше имя",
	d: "Электронная почта",
	k: "Тема",
	a: "Отчет об ошибке",
	h: "Новая идея бенчмарка",
	f: "Вопрос по методологии",
	b: "Вклад",
	i: "Другое",
	e: "Сообщение",
	c: "Опишите ваш вопрос или идею...",
	j: "Отправить сообщение"
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
}), n = "contact-form", r = {
	g: "姓名",
	l: "您的姓名",
	d: "电子邮件",
	k: "主题",
	a: "报告错误",
	h: "新的基准测试想法",
	f: "方法论问题",
	b: "贡献",
	i: "其他",
	e: "消息",
	c: "描述您的问题或想法...",
	j: "发送消息"
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
