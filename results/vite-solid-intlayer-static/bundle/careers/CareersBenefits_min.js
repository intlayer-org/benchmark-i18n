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
}, m = /* @__PURE__ */ new WeakMap(), h = 0, ee = (e) => {
	if (!e) return "base";
	let t = m.get(e);
	if (t) return t;
	h += 1;
	let n = `p${h}`;
	return m.set(e, n), n;
}, g = 256, _ = /* @__PURE__ */ new WeakMap(), v = (e) => typeof e == "object" && !!e, y = (e, t, n) => `${e}_${t}_${ee(n)}`, b = (e, t) => {
	if (!v(e)) return { hit: !1 };
	let n = _.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, x = (e, t, n) => {
	if (!v(e)) return n;
	let r = _.get(e);
	return r || (r = /* @__PURE__ */ new Map(), _.set(e, r)), r.size >= g && r.clear(), r.set(t, n), n;
}, S = "translation", C = "object", w = "array", T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => T(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: w,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: C,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = T(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = T(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, E = "default", D = /[^A-Za-z0-9._&=-]/g, O = /[^A-Za-z0-9._-]/g, k = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, A = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, k);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, j = (e) => e === void 0 ? E : typeof e == "string" ? A(e, D) : Object.keys(e).sort().map((t) => `${A(t, O)}=${A(String(e[t]), O)}`).join("&"), M = (e) => Array.isArray(e) ? e.length === 0 ? [E] : e.map(j) : [j(e)], te = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? E : e[0] ?? "default";
}, ne = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, re = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ie = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, N = (e, t) => {
	if (!re(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? E : te(M(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ne(e, n, t, s)).map((t) => ie(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, P = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, F = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? M(n).join(",") : String(n)}`;
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
					type: S,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return R(o, e, t);
	}
}, V = z, H = (e) => z, U = z, W = z, G = z, K = z, q = (e) => z, J = z, ae = (e, t = !0) => [
	B(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	V,
	U,
	W,
	q(e ?? f.defaultLocale),
	J,
	G,
	K
], oe = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), se = (e, t, n) => {
	let { locale: r, selector: i } = P(t), a = y(r ?? f.defaultLocale, F(i), n), o = b(e, a);
	if (o.hit) return o.content;
	let s = n ?? ae(r), c = N(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return oe(e.content, t, s);
	};
	return c === null ? x(e, a, null) : Array.isArray(c) ? x(e, a, c.map(l)) : x(e, a, l(c));
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
}, le = z, ue = z;
o(() => Y.then((e) => ({ default: e.MarkdownRenderer }))), o(() => Y.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var de = z;
o(() => X.then((e) => ({ default: e })));
var fe = z, Z = /* @__PURE__ */ new Map(), pe = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		B(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		V,
		H(e ?? f.defaultLocale),
		U,
		q(e ?? f.defaultLocale),
		J,
		G,
		K,
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
}, be = n("<div class=\"mb-12 grid gap-4 md:grid-cols-3\">"), xe = n("<div class=\"rounded-lg border border-border bg-card p-4 text-center\"><p class=\"text-sm font-semibold text-foreground\"></p><p class=\"text-xs text-muted-foreground\">");
function Se() {
	let n = ye(c), i = [
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
		var n = be();
		return t(n, e(r, {
			each: i,
			children: (e) => (() => {
				var n = xe(), r = n.firstChild, i = r.nextSibling;
				return t(r, () => e.label), t(i, () => e.value), n;
			})()
		})), n;
	})();
}
export { Se as default };
