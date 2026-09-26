import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useMemo as a } from "react";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
var l = {
	key: "careers-benefits",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				e: "Work from anywhere in the world",
				c: "Remote-first",
				a: "Competitive pay",
				d: "Top-of-market compensation",
				b: "Open source time",
				f: "20% time for OSS contributions"
			},
			fr: {
				e: "Travailler de n'importe où dans le monde",
				c: "Télétravail d'abord",
				a: "Rémunération compétitive",
				d: "Rémunération au-dessus du marché",
				b: "Temps alloué à l'open source",
				f: "20 % du temps pour les contributions OSS"
			},
			es: {
				e: "Trabaja desde cualquier parte del mundo",
				c: "Primero remoto",
				a: "Salario competitivo",
				d: "Compensación superior al mercado",
				b: "Tiempo dedicado al código abierto",
				f: "20% de tiempo para contribuciones de OSS"
			},
			de: {
				e: "Arbeiten von überall auf der Welt",
				c: "Remote-First",
				a: "Wettbewerbsfähige Bezahlung",
				d: "Spitzenvergütung",
				b: "Open-Source-Zeit",
				f: "20 % Zeit für OSS-Beiträge"
			},
			it: {
				e: "Lavora da qualsiasi parte del mondo",
				c: "Remote-first",
				a: "Retribuzione competitiva",
				d: "Compensi ai vertici del mercato",
				b: "Tempo per l'open source",
				f: "20% di tempo per contributi OSS"
			},
			pt: {
				e: "Trabalhe de qualquer lugar do mundo",
				c: "Trabalho remoto primeiro",
				a: "Pagamento competitivo",
				d: "Compensação acima do mercado",
				b: "Tempo dedicado ao código aberto",
				f: "20% de tempo para contribuições OSS"
			},
			zh: {
				e: "在全球任何地方工作",
				c: "远程优先",
				a: "有竞争力的薪酬",
				d: "市场顶级薪酬",
				b: "开源贡献时间",
				f: "20% 的时间用于 OSS 贡献"
			},
			ja: {
				e: "世界中どこからでも仕事ができます",
				c: "リモートファースト",
				a: "競争力のある報酬",
				d: "市場最高水准の報酬",
				b: "オープンソースの時間",
				f: "OSS への貢献に 20% の時間を割く"
			},
			ko: {
				e: "전 세계 어디서나 근무하십시오",
				c: "원격 우선",
				a: "경쟁력있는 보수",
				d: "시장 최고의 보상",
				b: "오픈 소스 시간",
				f: "OSS 기여를 위한 20% 시간"
			},
			ru: {
				e: "Работайте из любой точки мира",
				c: "Удаленная работа прежде всего",
				a: "Конкурентоспособная оплата",
				d: "Компенсация выше рыночной",
				b: "Время на open source",
				f: "20% времени на вклад в OSS"
			}
		}
	}
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
}, f = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : s(o, { children: e });
	return new Proxy(i, { get(e, r, i) {
		if (r === "value") return t;
		if (r === Symbol.toPrimitive) return () => t ?? "";
		if (r === "toString") return () => String(t ?? "");
		if (r === "valueOf") return () => t;
		if (n && Object.hasOwn(n, r)) return n[r];
		if (t != null && typeof r == "string" && r !== "constructor" && !(r in e)) {
			let e = Object(t);
			if (r in e) {
				let n = e[r];
				return typeof n == "function" ? n.bind(t) : n;
			}
		}
		return Reflect.get(e, r, i);
	} });
}, p = /* @__PURE__ */ new WeakMap(), m = 0, h = (e) => {
	if (!e) return "base";
	let t = p.get(e);
	if (t) return t;
	m += 1;
	let n = `p${m}`;
	return p.set(e, n), n;
}, g = 256, _ = /* @__PURE__ */ new WeakMap(), v = (e) => typeof e == "object" && !!e, y = (e, t, n) => `${e}_${t}_${h(n)}`, ee = (e, t) => {
	if (!v(e)) return { hit: !1 };
	let n = _.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, b = (e, t, n) => {
	if (!v(e)) return n;
	let r = _.get(e);
	return r || (r = /* @__PURE__ */ new Map(), _.set(e, r)), r.size >= g && r.clear(), r.set(t, n), n;
}, te = "translation", x = "insertion", ne = "object", S = "array", C = "markdown", w = "html", T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => T(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, {
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
				type: ne,
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
}, E = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), D = "default", re = /[^A-Za-z0-9._&=-]/g, O = /[^A-Za-z0-9._-]/g, k = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, A = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, k);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, j = (e) => e === void 0 ? D : typeof e == "string" ? A(e, re) : Object.keys(e).sort().map((t) => `${A(t, O)}=${A(String(e[t]), O)}`).join("&"), M = (e) => Array.isArray(e) ? e.length === 0 ? [D] : e.map(j) : [j(e)], N = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? D : e[0] ?? "default";
}, ie = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ae = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, oe = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, se = (e, t) => {
	if (!ae(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? D : N(M(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ie(e, n, t, s)).map((t) => oe(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ce = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, P = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? M(n).join(",") : String(n)}`;
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
}, R = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, z = (e) => {
	if (typeof e == "string") return e;
	if (R(e)) return e.nodeType === "html" ? e[w] : e[C];
}, B = (e, t) => {
	if (typeof e == "string") return t;
	if (R(e)) {
		let n = e.nodeType === "html" ? w : C;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, V = (e, t, n, r, i) => {
	let a = B(e, E(z(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, H = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, U = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? H : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: te,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return L(o, e, t);
	}
}, W = H, G = (e) => H, K = H, le = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? H : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || R(e),
			transform: (e, n, r) => {
				if (R(e)) return (i) => V(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = E(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
	}
}, q = H, J = H, Y = (e) => H, X = H, ue = (e, t = !0) => [
	U(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	W,
	K,
	le,
	Y(e ?? u.defaultLocale),
	X,
	q,
	J
], de = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), fe = (e, t, n) => {
	let { locale: r, selector: i } = ce(t), a = y(r ?? u.defaultLocale, P(i), n), o = ee(e, a);
	if (o.hit) return o.content;
	let s = n ?? ue(r), c = se(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return de(e.content, t, s);
	};
	return c === null ? b(e, a, null) : Array.isArray(c) ? b(e, a, c.map(l)) : b(e, a, l(c));
}, pe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Z = /\{\{\s*(.*?)\s*\}\}/g, me = (e, t = {}) => {
	if (!Object.values(t).some(pe)) return {
		isSimple: !0,
		parts: e.replace(Z, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Z), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, he = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => f({
		...n,
		value: n.children,
		children: n.children
	})
}, ge = H, _e = (t, r) => {
	let i = me(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, ve = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? H : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || R(e),
			transform: (e, n, r) => {
				if (R(e)) return (i) => V(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = _e(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		}, o = n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
		return typeof i == "object" && i && "nodeType" in i && ["enumeration", "condition"].includes(i.nodeType) ? (e) => (t) => {
			let n = o(t);
			return typeof n == "function" ? n(e) : n;
		} : o;
	}
}, ye = H, be = H, Q = /* @__PURE__ */ new Map(), xe = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		U(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		W,
		G(e ?? u.defaultLocale),
		K,
		Y(e ?? u.defaultLocale),
		X,
		q,
		J,
		he,
		ge,
		ve,
		ye,
		be
	];
	return Q.set(n, r), r;
}, Se = (e, t) => fe(e, t, xe(typeof t == "object" && t ? t.locale : t)), Ce = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, we = ((e = $) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Ce) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})($), Te = t({
	locale: we ?? u?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Ee = (e, t) => {
	let { locale: n, variant: r } = i(Te) ?? {}, o = t ?? n, s = typeof o == "object" && o ? `${o.locale ?? ""}|${P(o)}` : o;
	return a(() => Se(e, o), [e.key, s]);
};
function De() {
	let e = Ee(l), t = [
		{
			label: e.c.value,
			value: e.e.value
		},
		{
			label: e.a.value,
			value: e.d.value
		},
		{
			label: e.b.value,
			value: e.f.value
		}
	];
	return s("div", {
		className: "mb-12 grid gap-4 md:grid-cols-3",
		children: t.map((e) => c("div", {
			className: "rounded-lg border border-border bg-card p-4 text-center",
			children: [s("p", {
				className: "text-sm font-semibold text-foreground",
				children: e.label
			}), s("p", {
				className: "text-xs text-muted-foreground",
				children: e.value
			})]
		}, e.label))
	});
}
export { De as default };
