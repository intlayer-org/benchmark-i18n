import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useLayoutEffect as o, useMemo as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
var ee = {
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
				b: "Vous avez des idées, trouvé un bug ou vous voulez contribuer à un benchmark ? Contactez-nous à"
			},
			es: {
				a: "Póngase en contacto",
				b: "¿Tienes ideas, encontraste un error o quieres contribuir con un benchmark ? Contáctanos en"
			},
			de: {
				a: "Kontaktieren Sie uns",
				b: "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern ? Kontaktieren Sie uns unter"
			},
			it: {
				a: "Mettiti in contatto",
				b: "Hai delle idee, hai trovato un bug o vuoi contribuire con un benchmark ? Contattaci all'indirizzo"
			},
			pt: {
				a: "Entre em contato",
				b: "Tem ideias, encontrou um bug ou quer contribuir com um benchmark ? Entre em contato conosco em"
			},
			zh: {
				a: "联系我们",
				b: "有想法、发现了错误或想贡献基准测试？请通过以下方式联系我们"
			},
			ja: {
				a: "お問い合わせ",
				b: "アイデアがある、バグを見つけた、またはベンチマークを提供したいですか？こちらまでご連絡ください"
			},
			ko: {
				a: "문의하기",
				b: "아이디어가 있거나 버그를 발견했거나 벤치마크에 기여하고 싶으신가요? 다음 주소로 연락해 주세요"
			},
			ru: {
				a: "Связаться с нами",
				b: "Есть идеи, нашли баг или хотите предложить бенчмарк? Свяжитесь с нами по адресу"
			}
		}
	}
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
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, te = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var m = {
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
}, h = (e = m) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!te) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ne = !1, g, re = () => typeof window > "u" ? h(m) : (ne ||= (g = h(m), !0), g), _ = /* @__PURE__ */ new Map(), ie = (e, t) => Object.create(new Proxy(e, {
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
}), ae = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = _.get(t);
	i || (i = /* @__PURE__ */ new Map(), _.set(t, i));
	let a = i.get(r);
	return a || (a = ie(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, oe = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : u(l, { children: e }),
	value: t,
	...n
}, ae(t)), v = /* @__PURE__ */ new WeakMap(), y = 0, se = (e) => {
	if (!e) return "base";
	let t = v.get(e);
	if (t) return t;
	y += 1;
	let n = `p${y}`;
	return v.set(e, n), n;
}, ce = 256, b = /* @__PURE__ */ new WeakMap(), x = (e) => typeof e == "object" && !!e, le = (e, t, n) => `${e}_${t}_${se(n)}`, ue = (e, t) => {
	if (!x(e)) return { hit: !1 };
	let n = b.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, S = (e, t, n) => {
	if (!x(e)) return n;
	let r = b.get(e);
	return r || (r = /* @__PURE__ */ new Map(), b.set(e, r)), r.size >= ce && r.clear(), r.set(t, n), n;
}, de = "translation", C = "enumeration", w = "plural", fe = "condition", T = "insertion", pe = "object", me = "array", E = "markdown", D = "html", he = "gender", ge = "select", O = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), k = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, k);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => k(e, O(t, e, {
		type: me,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: pe,
			key: r
		};
		if (t.eager) {
			n[r] = k(e[r], O(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = k(e[r], O(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, A = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), j = (e) => {
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
}, N = (e, t, n) => {
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
}, P = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, F = (e) => {
	if (typeof e == "string") return e;
	if (P(e)) return e.nodeType === "html" ? e[D] : e[E];
}, I = (e, t) => {
	if (typeof e == "string") return t;
	if (P(e)) {
		let n = e.nodeType === "html" ? D : E;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, L = (e, t, n, r, i) => {
	let a = I(e, A(F(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, R = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, _e = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, z = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? R : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = N(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: de,
				key: e
			}]
		});
	}
}, B = R, V = (e) => R, H = R, ve = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? R : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: T }], i = e[T], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || P(e),
			transform: (e, n, r) => {
				if (P(e)) return (i) => L(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = A(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return W(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, U = [
	C,
	fe,
	w,
	he,
	ge
], ye = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !U.includes(i)) return t;
	let a = i === "plural" || i === "enumeration";
	return (e) => {
		if (typeof e == "object" && e) return t({
			...n,
			...e
		});
		if (a) return t({
			...n,
			count: e
		});
		let i = t(e);
		return !r && _e(i) ? i(n) : i;
	};
}, W = (e, t) => typeof t == "function" && U.includes(e?.nodeType ?? "") ? (n) => ye(e, t, n) : t, G = R, K = R, q = (e) => R, J = R, be = (e, t = !0) => [
	z(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	B,
	V(e ?? f.defaultLocale),
	H,
	ve,
	q(e ?? f.defaultLocale),
	J,
	G,
	K
].filter((e) => e !== R), xe = (e, t, n = []) => k(e, {
	...t,
	plugins: n
}), Y = /* @__PURE__ */ new WeakSet(), Se = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = le(r ?? f.defaultLocale, "", n), o = ue(e, a);
	if (o.hit) return o.content;
	let s = n ?? be(r), c = e, l = (e) => {
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
			return xe(e.content, t, s);
		} finally {
			t.eager && Y.delete(e);
		}
	};
	return c === null ? S(e, a, null) : Array.isArray(c) ? S(e, a, c.map(l)) : S(e, a, l(c));
}, Ce = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", X = /\{\{\s*(.*?)\s*\}\}/g, we = (e, t = {}) => {
	if (!Object.values(t).some(Ce)) return {
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
}, Te = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => oe({
		value: t.children,
		children: t.children
	})
}, Ee = R, De = (t, r) => {
	let i = we(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Oe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? R : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: T }], i = e[T], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || P(e),
			transform: (e, n, r) => {
				if (P(e)) return (i) => L(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = De(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return W(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, ke = R, Ae = R, Z = /* @__PURE__ */ new Map(), je = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		Te,
		z(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		B,
		V(e ?? f.defaultLocale),
		H,
		q(e ?? f.defaultLocale),
		J,
		G,
		K,
		Ee,
		Oe,
		ke,
		Ae
	].filter((e) => e !== R);
	return Z.set(n, r), r;
}, Me = (e, t) => Se(e, t, je(typeof t == "object" && t ? t.locale : t)), Ne = re, Pe = t({
	get locale() {
		return Ne() ?? f?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Q = (e, t) => {
	let { locale: n, variant: r } = i(Pe) ?? {}, a = t ?? n, o = a;
	return s(() => Me(e, a), [e.key, o]);
}, Fe = {
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
}, Ie = () => {
	let e = Q(Fe);
	return u("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e.a
	});
};
function $() {
	let e = Q(ee);
	return d(l, { children: [
		u(Ie, {}),
		u("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: e.a
		}),
		d("p", {
			className: "mb-8 text-muted-foreground",
			children: [
				e.b,
				" ",
				u("a", {
					href: "mailto:contact@intlayer.org",
					className: "text-primary hover:underline",
					children: "contact@intlayer.org"
				}),
				"."
			]
		})
	] });
}
function Le() {
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
function Re(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function ze({ children: e, locale: t }) {
	let [n] = c(() => typeof performance < "u" ? performance.now() : 0);
	return o(() => {
		Re("AppRoot", n);
	}, [n]), a(() => {
		t && (document.documentElement.lang = t);
	}, [t]), a(() => {
		Le();
	}, []), e;
}
function Be({ children: e }) {
	return u(ze, {
		locale: "en",
		children: e
	});
}
function Ve() {
	return u(Be, { children: u($, {}) });
}
export { Ve as default };
