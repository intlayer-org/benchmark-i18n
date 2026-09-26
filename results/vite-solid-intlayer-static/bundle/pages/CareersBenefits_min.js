import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r, createContext as i, createMemo as a, lazy as o, useContext as s } from "solid-js";
var c = {
	key: "careers-benefits",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				d: "Work from anywhere in the world",
				a: "Competitive pay",
				c: "Top-of-market compensation",
				b: "Open source time",
				e: "20% time for OSS contributions"
			},
			fr: {
				d: "Travailler de n'importe où dans le monde",
				a: "Salaire compétitif",
				c: "Rémunération au sommet du marché",
				b: "Temps pour l'open source",
				e: "20 % du temps pour les contributions OSS"
			},
			es: {
				d: "Trabaje desde cualquier lugar del mundo",
				a: "Salario competitivo",
				c: "Compensación de nivel superior en el mercado",
				b: "Tiempo de código abierto",
				e: "20% de tiempo para contribuciones de OSS"
			},
			de: {
				d: "Arbeiten Sie von überall auf der Welt",
				a: "Wettbewerbsfähige Bezahlung",
				c: "Marktführende Vergütung",
				b: "Open-Source-Zeit",
				e: "20 % Zeit für OSS-Beiträge"
			},
			it: {
				d: "Lavora da qualsiasi parte del mondo",
				a: "Retribuzione competitiva",
				c: "Compensi ai vertici del mercato",
				b: "Tempo per l'open source",
				e: "20% del tempo per contributi OSS"
			},
			pt: {
				d: "Trabalhe de qualquer lugar do mundo",
				a: "Salário competitivo",
				c: "Compensação acima do mercado",
				b: "Tempo para open source",
				e: "20% do tempo para contribuições OSS"
			},
			zh: {
				d: "在全球任何地方工作",
				a: "具有竞争力的薪酬",
				c: "市场顶尖的薪酬",
				b: "开源时间",
				e: "20% 的时间用于 OSS 贡献"
			},
			ja: {
				d: "世界中のどこからでも仕事ができます",
				a: "競争力のある給与",
				c: "市場トップクラスの報酬",
				b: "オープンソース時間",
				e: "OSSへの貢献に20％の時間"
			},
			ko: {
				d: "전 세계 어디에서나 근무 가능",
				a: "경쟁력 있는 급여",
				c: "업계 최고 수준의 보상",
				b: "오픈 소스 시간",
				e: "OSS 기여를 위한 20% 시간"
			},
			ru: {
				d: "Работайте из любой точки мира",
				a: "Конкурентоспособная оплата",
				c: "Компенсация на уровне лидеров рынка",
				b: "Время на open source",
				e: "20% времени на вклад в OSS"
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
}, d = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var f = {
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
}, p = (e = f) => {
	let { locales: t } = l;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!d) for (let t = 0; t < (u.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(u.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, m = !1, h, g = () => typeof window > "u" ? p(f) : (m ||= (h = p(f), !0), h), _ = /* @__PURE__ */ new Map(), v = (e, t) => Object.create(new Proxy(e, {
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
}), y = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = _.get(t);
	i || (i = /* @__PURE__ */ new Map(), _.set(t, i));
	let a = i.get(r);
	return a || (a = v(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ee = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, y(t, Array.prototype)), r;
}, b = /* @__PURE__ */ new WeakMap(), x = 0, S = (e) => {
	if (!e) return "base";
	let t = b.get(e);
	if (t) return t;
	x += 1;
	let n = `p${x}`;
	return b.set(e, n), n;
}, C = 256, w = /* @__PURE__ */ new WeakMap(), T = (e) => typeof e == "object" && !!e, E = (e, t, n) => `${e}_${t}_${S(n)}`, D = (e, t) => {
	if (!T(e)) return { hit: !1 };
	let n = w.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, O = (e, t, n) => {
	if (!T(e)) return n;
	let r = w.get(e);
	return r || (r = /* @__PURE__ */ new Map(), w.set(e, r)), r.size >= C && r.clear(), r.set(t, n), n;
}, k = "translation", A = "object", j = "array", M = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), N = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, N);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => N(e, M(t, e, {
		type: j,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: A,
			key: r
		};
		if (t.eager) {
			n[r] = N(e[r], M(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = N(e[r], M(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, P = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, F = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !P(e) || !P(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? F(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, I = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => F(e, t));
}, L = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, R = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? L : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = I(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: k,
				key: e
			}]
		});
	}
}, z = L, B = (e) => L, V = L, H = L, U = L, W = L, G = (e) => L, K = L, q = (e, t = !0) => [
	R(e ?? l.defaultLocale, t ? l.defaultLocale : void 0),
	z,
	B(e ?? l.defaultLocale),
	V,
	H,
	G(e ?? l.defaultLocale),
	K,
	U,
	W
].filter((e) => e !== L), J = (e, t, n = []) => N(e, {
	...t,
	plugins: n
}), Y = /* @__PURE__ */ new WeakSet(), X = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = E(r ?? l.defaultLocale, "", n), o = D(e, a);
	if (o.hit) return o.content;
	let s = n ?? q(r), c = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Y.has(e)
		};
		Y.add(e);
		try {
			return J(e.content, t, s);
		} finally {
			t.eager && Y.delete(e);
		}
	};
	return c === null ? O(e, a, null) : Array.isArray(c) ? O(e, a, c.map(u)) : O(e, a, u(c));
}, Z = null, Q = null;
Z?.catch(() => {}), Q?.catch(() => {});
var te = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ee({
		value: t.children,
		children: t.children
	})
}, ne = L, re = L;
o(() => Z.then((e) => ({ default: e.MarkdownRenderer }))), o(() => Z.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var ie = L;
o(() => Q.then((e) => ({ default: e })));
var ae = L, $ = /* @__PURE__ */ new Map(), oe = (e, t = !0) => {
	let n = `${e ?? l.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		te,
		R(e ?? l.defaultLocale, t ? l.defaultLocale : void 0),
		z,
		B(e ?? l.defaultLocale),
		V,
		G(e ?? l.defaultLocale),
		K,
		U,
		W,
		ne,
		re,
		ie,
		ae
	].filter((e) => e !== L);
	return $.set(n, r), r;
}, se = (e, t) => X(e, t, oe(typeof t == "object" && t ? t.locale : t)), ce = g, le = i({
	locale: () => ce() ?? l?.defaultLocale,
	setLocale: () => null
}), ue = Symbol("LOADABLE_SETTLED_VALUE"), de = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[ue];
}, fe = (e, t) => {
	let n = s(le) ?? {}, r = a(() => {
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
}, pe = n("<div class=\"mb-12 grid gap-4 md:grid-cols-3\">"), me = n("<div class=\"rounded-lg border border-border bg-card p-4 text-center\"><p class=\"text-sm font-semibold text-foreground\"></p><p class=\"text-xs text-muted-foreground\">");
function he() {
	let n = fe(c), i = () => [
		{
			label: "Remote-first",
			value: n().d.value
		},
		{
			label: n().a.value,
			value: n().c.value
		},
		{
			label: n().b.value,
			value: n().e.value
		}
	];
	return (() => {
		var n = pe();
		return t(n, e(r, {
			get each() {
				return i();
			},
			children: (e) => (() => {
				var n = me(), r = n.firstChild, i = r.nextSibling;
				return t(r, () => e.label), t(i, () => e.value), n;
			})()
		})), n;
	})();
}
export { he as default };
