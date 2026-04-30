import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useMemo as o, useRef as s, useState as ee } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
import { jsxDEV as d } from "react/jsx-dev-runtime";
var f = {
	key: "route",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				c: "Oops! Page not found",
				d: "Return to Home",
				a: "Could not measure hydration duration:",
				b: "i18n Benchmark"
			},
			fr: {
				c: "Oups ! Page non trouvée",
				d: "Retour à l'Accueil",
				a: "Impossible de mesurer la durée d'hydratation :",
				b: "Benchmark i18n"
			},
			es: {
				c: "¡Vaya! Página no encontrada",
				d: "Volver al Inicio",
				a: "No se pudo medir la duración de la hidratación:",
				b: "Benchmark i18n"
			},
			de: {
				c: "Hoppla! Seite nicht gefunden",
				d: "Zurück zur Startseite",
				a: "Hydratisierungsdauer konnte nicht gemessen werden:",
				b: "i18n Benchmark"
			},
			it: {
				c: "Ops! Pagina non trovata",
				d: "Torna alla Home",
				a: "Impossibile misurare la durata dell'idratazione:",
				b: "Benchmark i18n"
			},
			pt: {
				c: "Ops! Página não encontrada",
				d: "Voltar para o Início",
				a: "Não foi possível medir a duración da hidratação:",
				b: "Benchmark i18n"
			},
			zh: {
				c: "糟糕！找不到页面",
				d: "返回首页",
				a: "无法测量注水时长：",
				b: "i18n 基准测试"
			},
			ja: {
				c: "おっと！ページが見つかりません",
				d: "ホームに戻る",
				a: "ハイドレーション時間を測定できませんでした：",
				b: "i18n ベンチマーク"
			},
			ko: {
				c: "웁스! 페이지를 찾을 수 없습니다",
				d: "홈으로 돌아가기",
				a: "하이드레이션 기간을 측정할 수 없습니다:",
				b: "i18n 벤치마크"
			},
			ru: {
				c: "Упс! Страница не найдена",
				d: "Вернуться на главную",
				a: "Не удалось измерить продолжительность гидратации:",
				b: "i18n Бенчмарк"
			}
		}
	}
}, p = {
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
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, h = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : l(c, { children: e });
	return new Proxy(i, { get(e, r, i) {
		return r === "value" ? t : n && r in n ? n[r] : Reflect.get(e, r, i);
	} });
}, g = (e) => {
	if (typeof e != "object" || !e) return e;
	let { type: t, props: r } = ((e) => {
		let t = e.props?.children;
		if (Array.isArray(t)) {
			let r = t.map((e, t) => {
				let r = g(e);
				if (typeof r == "object" && r && "type" in r) {
					let e = r;
					return n(e.type, {
						...e.props,
						key: t
					}, ...Array.isArray(e.props?.children) ? e.props.children : e.props?.children === void 0 ? [] : [e.props.children]);
				}
				return r;
			});
			return {
				...e,
				props: {
					...e.props,
					children: r
				}
			};
		} else if (t != null) {
			let n = g(t);
			return {
				...e,
				props: {
					...e.props,
					children: [n]
				}
			};
		}
		return {
			...e,
			props: {
				...e.props,
				children: []
			}
		};
	})(e);
	return n(t ?? "span", r, ...r.children);
}, te = "translation", _ = "insertion", ne = "object", v = "array", y = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => y(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => y(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: v,
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
					type: ne,
					key: r
				}]
			}, i = y(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, re = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), b = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, x = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (b(e) && b(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : x(e[r], t[r]));
		return n;
	}
	return e;
}, ie = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => x(e, t));
}, ae = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", S = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", C = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, w = (e, t) => ae ? C : {
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
		return ie(o, e, t);
	}
}, T = C, E = C, oe = S ? C : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = re(i, e);
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
}, D = C, O = (e) => C, k = C, se = (e, t = !0) => [
	w(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	T,
	E,
	oe,
	O(e ?? p.defaultLocale),
	k,
	D
], A = (e, t, n = []) => y(e, {
	...t,
	plugins: n
}), j = (e, t, n = se(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return A(e.content, r, n);
}, M = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", N = /\{\{\s*(.*?)\s*\}\}/g, P = (e, t = {}) => {
	if (!Object.values(t).some(M)) return {
		isSimple: !0,
		parts: e.replace(N, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(N), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, F = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", I = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", L = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", R = F ? C : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => h({
		...n,
		value: n.children,
		children: n.children
	})
}, z = I ? C : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => h({
		...n,
		value: "[[react-element]]",
		children: g(e)
	})
}, B = (t, r) => {
	let i = P(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, V = L ? C : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = B(i, e);
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
}, H = C, U = C, W = /* @__PURE__ */ new Map(), G = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (W.has(n)) return W.get(n);
	let r = [
		w(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		T,
		E,
		O(e ?? p.defaultLocale),
		k,
		D,
		R,
		z,
		V,
		H,
		U
	];
	return W.set(n, r), r;
}, ce = (e, t) => j(e, t, G(t)), le = (e, t = p?.locales, n = p?.defaultLocale) => {
	let r = [e].flat(), i = (e) => e.trim().toLowerCase();
	try {
		for (let e of r) {
			let n = i(e), r = t.find((e) => i(e) === n);
			if (r) return r;
			let [a] = n.split("-"), o = t.find((e) => i(e).split("-")[0] === a);
			if (o) return o;
		}
	} catch {}
	return n;
}, K = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var ue = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, de = (e = q) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!K) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, fe = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !K && m.storage.cookies) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ue(r, e, i));
			} catch {}
		}
	}
}, q = {
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
}, J = de(q), pe = (e, t) => fe(e, {
	...q,
	isCookieEnabled: t
}), me = () => {
	let { locale: e } = i(Y) ?? {}, t = s(null);
	a(() => {}, []), a(() => {
		!e || !t.current || t.current.currentLocale.set(e);
	}, [e]);
}, he = ({ children: e }) => (me(), e), ge = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Y = t({
	locale: J ?? p?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), X = ({ locale: e, defaultLocale: t, children: n, setLocale: r, disableEditor: i, isCookieEnabled: o }) => {
	let { locales: s, defaultLocale: c } = p ?? {}, [u, d] = ee(e ?? J ?? t ?? c);
	a(() => {
		e && e !== u && d(e);
	}, [e]), a(() => {
		ge();
	}, []);
	let f = r ?? ((e) => {
		if (u.toString() !== e.toString()) {
			if (!s?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			d(e), pe(e, o);
		}
	}), m = le(u);
	return l(Y.Provider, {
		value: {
			locale: m,
			setLocale: f,
			disableEditor: i
		},
		children: n
	});
}, Z = ({ children: e, ...t }) => u(X, {
	...t,
	children: [l(he, {}), e]
}), _e = (e, t) => {
	let { locale: n } = i(Y) ?? {};
	return o(() => ce(e, t ?? n), [
		e.key,
		n,
		t
	]);
}, Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-app/scripts/EmptyComponent.tsx", ve = () => (_e(f), null);
function ye() {
	return d(Z, {
		locale: "en",
		children: d(ve, {}, void 0, !1, {
			fileName: Q,
			lineNumber: 13,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 12,
		columnNumber: 5
	}, this);
}
var be = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-app/scripts/Wrapper.tsx";
function xe({ children: e }) {
	return d(Z, {
		locale: "en",
		children: e
	}, void 0, !1, {
		fileName: be,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-app/scripts/EmptyComponent.wrapper.tsx";
function Se() {
	return d(xe, { children: d(ye, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Se as default };
