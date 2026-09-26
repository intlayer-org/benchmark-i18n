import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useLayoutEffect as o, useMemo as s, useState as c } from "react";
import { Fragment as l, jsx as u } from "react/jsx-runtime";
var ee = {
	key: "mock-banner",
	content: {
		nodeType: "translation",
		translation: {
			en: { a: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service." },
			fr: { a: "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel." },
			es: { a: "⚠️ Esta página contiene datos simulados solo para fines de benchmarking. No está relacionada con ningún negocio o servicio real." },
			de: { a: "⚠️ Diese Seite enthält fiktive Daten, die nur Benchmark-Zwecken dienen. Sie stehen in keinem Zusammenhang mit realen Unternehmen oder Dienstleistungen." },
			it: { a: "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale." },
			pt: { a: "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada com qualquer negócio o serviço real." },
			zh: { a: "⚠️ 此页面仅包含用于基准测试的模拟数据。它与任何真实的业务或服务无关。" },
			ja: { a: "⚠️ このページにはベンチマークのみを目的とした模擬データが含まれています。実際のビジネスやサービスとは関係ありません。" },
			ko: { a: "⚠️ 이 페이지는 벤치마킹 목적으로만 사용되는 모의 데이터를 포함하고 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다." },
			ru: { a: "⚠️ Эта страница содержит фиктивные данные только для целей тестирования производительности. Она не связана с каким-либо реальным бизнесом или услугой." }
		}
	}
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
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, p = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : u(l, { children: e });
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
}, m = /* @__PURE__ */ new WeakMap(), h = 0, g = (e) => {
	if (!e) return "base";
	let t = m.get(e);
	if (t) return t;
	h += 1;
	let n = `p${h}`;
	return m.set(e, n), n;
}, te = 256, _ = /* @__PURE__ */ new WeakMap(), v = (e) => typeof e == "object" && !!e, y = (e, t, n) => `${e}_${t}_${g(n)}`, b = (e, t) => {
	if (!v(e)) return { hit: !1 };
	let n = _.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, x = (e, t, n) => {
	if (!v(e)) return n;
	let r = _.get(e);
	return r || (r = /* @__PURE__ */ new Map(), _.set(e, r)), r.size >= te && r.clear(), r.set(t, n), n;
}, S = "translation", C = "insertion", ne = "object", re = "array", w = "markdown", T = "html", E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => E(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: re,
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
}, D = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), O = "default", k = /[^A-Za-z0-9._&=-]/g, A = /[^A-Za-z0-9._-]/g, ie = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, j = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ie);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, M = (e) => e === void 0 ? O : typeof e == "string" ? j(e, k) : Object.keys(e).sort().map((t) => `${j(t, A)}=${j(String(e[t]), A)}`).join("&"), N = (e) => Array.isArray(e) ? e.length === 0 ? [O] : e.map(M) : [M(e)], ae = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? O : e[0] ?? "default";
}, oe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, se = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ce = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, le = (e, t) => {
	if (!se(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? O : ae(N(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => oe(e, n, t, s)).map((t) => ce(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ue = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, P = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
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
}, R = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, z = (e) => {
	if (typeof e == "string") return e;
	if (R(e)) return e.nodeType === "html" ? e[T] : e[w];
}, B = (e, t) => {
	if (typeof e == "string") return t;
	if (R(e)) {
		let n = e.nodeType === "html" ? T : w;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, V = (e, t, n, r, i) => {
	let a = B(e, D(z(e), t));
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
					type: S,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return L(o, e, t);
	}
}, W = H, de = (e) => H, G = H, fe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? H : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: C }], i = e[C], a = {
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
					let a = D(i, e);
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
}, K = H, q = H, J = (e) => H, Y = H, pe = (e, t = !0) => [
	U(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
	W,
	G,
	fe,
	J(e ?? d.defaultLocale),
	Y,
	K,
	q
], me = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), he = (e, t, n) => {
	let { locale: r, selector: i } = ue(t), a = y(r ?? d.defaultLocale, P(i), n), o = b(e, a);
	if (o.hit) return o.content;
	let s = n ?? pe(r), c = le(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return me(e.content, t, s);
	};
	return c === null ? x(e, a, null) : Array.isArray(c) ? x(e, a, c.map(l)) : x(e, a, l(c));
}, ge = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", X = /\{\{\s*(.*?)\s*\}\}/g, _e = (e, t = {}) => {
	if (!Object.values(t).some(ge)) return {
		isSimple: !0,
		parts: e.replace(X, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(X), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, ve = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => p({
		...n,
		value: n.children,
		children: n.children
	})
}, ye = H, be = (t, r) => {
	let i = _e(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, xe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? H : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: C }], i = e[C], a = {
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
					let a = be(i, e);
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
}, Se = H, Ce = H, Z = /* @__PURE__ */ new Map(), we = (e, t = !0) => {
	let n = `${e ?? d.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		U(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
		W,
		de(e ?? d.defaultLocale),
		G,
		J(e ?? d.defaultLocale),
		Y,
		K,
		q,
		ve,
		ye,
		xe,
		Se,
		Ce
	];
	return Z.set(n, r), r;
}, Te = (e, t) => he(e, t, we(typeof t == "object" && t ? t.locale : t)), Ee = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, De = ((e = Q) => {
	let { locales: t } = d;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Ee) for (let t = 0; t < (f.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(f.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})(Q), $ = t({
	locale: De ?? d?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Oe = (e, t) => {
	let { locale: n, variant: r } = i($) ?? {}, a = t ?? n, o = typeof a == "object" && a ? `${a.locale ?? ""}|${P(a)}` : a;
	return s(() => Te(e, a), [e.key, o]);
}, ke = () => {
	let e = Oe(ee);
	return u("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e.a
	});
};
function Ae() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function je(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Me({ children: e, locale: t }) {
	let [n] = c(() => typeof performance < "u" ? performance.now() : 0);
	return o(() => {
		je("AppRoot", n);
	}, [n]), a(() => {
		t && (document.documentElement.lang = t);
	}, [t]), a(() => {
		Ae();
	}, []), e;
}
function Ne({ children: e }) {
	return u(Me, {
		locale: "en",
		children: e
	});
}
function Pe() {
	return u(Ne, { children: u(ke, {}) });
}
export { Pe as default };
