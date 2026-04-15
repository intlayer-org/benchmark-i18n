import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useMemo as o, useRef as s, useState as ee } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
var d = {
	key: "results-table",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				i: "Sample Results",
				b: "Bundle Size",
				f: "Lookup Time",
				d: "Lazy Loading",
				j: "Yes",
				g: "Manual",
				e: "Library",
				a: "Built-in",
				c: {
					fields: ["val"],
					nodeType: "insertion",
					insertion: "{{val}} kB"
				},
				h: {
					fields: ["val"],
					nodeType: "insertion",
					insertion: "{{val}}ms"
				}
			},
			fr: {
				i: "Résultats d'échantillon",
				b: "Taille du bundle",
				f: "Temps de consultation",
				d: "Chargement différé",
				j: "Oui",
				g: "Manuel",
				e: "Bibliothèque",
				a: "Intégré",
				c: {
					fields: ["val"],
					nodeType: "insertion",
					insertion: "{{val}} ko"
				},
				h: {
					fields: ["val"],
					nodeType: "insertion",
					insertion: "{{val}} ms"
				}
			},
			es: {
				i: "Resultados de muestra",
				b: "Tamaño del bundle",
				f: "Tiempo de consulta",
				d: "Carga diferida",
				j: "Sí",
				g: "Manual",
				e: "Biblioteca",
				a: "Incorporado",
				c: {
					fields: ["val"],
					nodeType: "insertion",
					insertion: "{{val}} kB"
				},
				h: {
					fields: ["val"],
					nodeType: "insertion",
					insertion: "{{val}} ms"
				}
			},
			de: {
				i: "Beispielergebnisse",
				b: "Bundle-Größe",
				f: "Abfragezeit",
				d: "Lazy Loading",
				j: "Ja",
				g: "Manuell",
				e: "Bibliothek",
				a: "Integriert",
				c: {
					fields: ["val"],
					nodeType: "insertion",
					insertion: "{{val}} kB"
				},
				h: {
					fields: ["val"],
					nodeType: "insertion",
					insertion: "{{val}} ms"
				}
			},
			it: {
				i: "Risultati del campione",
				b: "Dimensioni del bundle",
				f: "Tempo di ricerca",
				d: "Caricamento lento",
				j: "Sì",
				g: "Manuale",
				e: "Libreria",
				a: "Integrato",
				c: {
					fields: ["val"],
					nodeType: "insertion",
					insertion: "{{val}} kB"
				},
				h: {
					fields: ["val"],
					nodeType: "insertion",
					insertion: "{{val}} ms"
				}
			},
			pt: {
				i: "Resultados de amostra",
				b: "Tamanho do bundle",
				f: "Tempo de consulta",
				d: "Carregamento lento",
				j: "Sim",
				g: "Manual",
				e: "Biblioteca",
				a: "Integrado",
				c: {
					fields: ["val"],
					nodeType: "insertion",
					insertion: "{{val}} kB"
				},
				h: {
					fields: ["val"],
					nodeType: "insertion",
					insertion: "{{val}} ms"
				}
			},
			zh: {
				i: "样本结果",
				b: "包大小",
				f: "查询时间",
				d: "延迟加载",
				j: "是",
				g: "手动",
				e: "库",
				a: "内置",
				c: {
					fields: ["val"],
					nodeType: "insertion",
					insertion: "{{val}} kB"
				},
				h: {
					fields: ["val"],
					nodeType: "insertion",
					insertion: "{{val}} 毫秒"
				}
			},
			ja: {
				i: "サンプル結果",
				b: "バンドルサイズ",
				f: "検索時間",
				d: "遅延読み込み",
				j: "はい",
				g: "マニュアル",
				e: "ライブラリ",
				a: "組み込み",
				c: {
					fields: ["val"],
					nodeType: "insertion",
					insertion: "{{val}} kB"
				},
				h: {
					fields: ["val"],
					nodeType: "insertion",
					insertion: "{{val}}ms"
				}
			},
			ko: {
				i: "샘플 결과",
				b: "번들 크기",
				f: "조회 시간",
				d: "지연 로딩",
				j: "예",
				g: "수동",
				e: "라이브러리",
				a: "내장",
				c: {
					fields: ["val"],
					nodeType: "insertion",
					insertion: "{{val}} kB"
				},
				h: {
					fields: ["val"],
					nodeType: "insertion",
					insertion: "{{val}}ms"
				}
			},
			ru: {
				i: "Примеры результатов",
				b: "Размер бандла",
				f: "Время поиска",
				d: "Ленивая загрузка",
				j: "Да",
				g: "Вручную",
				e: "Библиотека",
				a: "Встроенный",
				c: {
					fields: ["val"],
					nodeType: "insertion",
					insertion: "{{val}} кБ"
				},
				h: {
					fields: ["val"],
					nodeType: "insertion",
					insertion: "{{val}} мс"
				}
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
	defaultLocale: "en"
}, p = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, m = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : l(c, { children: e });
	return new Proxy(i, { get(e, r, i) {
		return r === "value" ? t : n && Object.keys(n).includes(r) ? n[r] : Reflect.get(e, r, i);
	} });
}, h = (e) => {
	if (typeof e != "object" || !e) return e;
	let { type: t, props: r } = ((e) => {
		let t = e.props?.children;
		if (Array.isArray(t)) {
			let r = t.map((e, t) => {
				let r = h(e);
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
			let n = h(t);
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
}, te = "translation", g = "insertion", _ = "object", v = "array", y = (e, t) => {
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
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: _,
				key: r
			}]
		};
		n[r] = y(e[r], i);
	}
	return n;
}, ne = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), b = (e) => {
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
}, S = (e, t, n) => {
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
}, C = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", w = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", T = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, E = (e, t) => C ? T : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = { ...n.translation ?? {} };
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: te,
					key: e
				}]
			};
			a[e] = i(a[e], t);
		}
		return S(a, e, t);
	}
}, D = T, O = T, re = w ? T : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: g }], i = e[g], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = ne(i, e);
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
}, k = T, A = (e) => T, j = T, M = (e, t = !0) => [
	E(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	D,
	O,
	re,
	A(e ?? f.defaultLocale),
	j,
	k
].filter(Boolean), N = (e, t, n = []) => y(e, {
	...t,
	plugins: n
}), P = (e, t, n = M(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return N(e.content, r, n);
}, F = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", I = /\{\{\s*(.*?)\s*\}\}/g, L = (e, t = {}) => {
	if (!Object.values(t).some(F)) return {
		isSimple: !0,
		parts: e.replace(I, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(I), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, R = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", z = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", B = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", V = R ? T : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => m({
		...n,
		value: n.children,
		children: n.children
	})
}, H = z ? T : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => m({
		...n,
		value: "[[react-element]]",
		children: h(e)
	})
}, U = (t, r) => {
	let i = L(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, W = B ? T : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: g }], i = e[g], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = U(i, e);
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
}, ie = T, G = T, K = (e, t = !0) => [
	E(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	D,
	O,
	A(e ?? f.defaultLocale),
	j,
	k,
	V,
	H,
	W,
	ie,
	G
].filter(Boolean), q = (e, t) => P(e, t, K(t)), J = (e, t = f?.locales, n = f?.defaultLocale) => {
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
}, Y = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var ae = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, oe = (e) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Y) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, se = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Y && p.storage.cookies) for (let n = 0; n < p.storage.cookies.length; n++) {
		let { name: r, attributes: i } = p.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ae(r, e, i));
			} catch {}
		}
	}
}, X = {
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
}, Z = oe(X), Q = (e, t) => se(e, {
	...X,
	isCookieEnabled: t
}), ce = () => {
	let { locale: e } = i($) ?? {}, t = s(null);
	a(() => {}, []), a(() => {
		!e || !t.current || t.current.currentLocale.set(e);
	}, [e]);
}, le = ({ children: e }) => (ce(), e), ue = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, $ = t({
	locale: Z ?? f?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), de = ({ locale: e, defaultLocale: t, children: n, setLocale: r, disableEditor: i, isCookieEnabled: o }) => {
	let { locales: s, defaultLocale: c } = f ?? {}, [u, d] = ee(e ?? Z ?? t ?? c);
	a(() => {
		e && e !== u && d(e);
	}, [e]), a(() => {
		ue();
	}, []);
	let p = r ?? ((e) => {
		if (u.toString() !== e.toString()) {
			if (!s?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			d(e), Q(e, o);
		}
	}), m = J(u);
	return l($.Provider, {
		value: {
			locale: m,
			setLocale: p,
			disableEditor: i
		},
		children: n
	});
}, fe = ({ children: e, ...t }) => u(de, {
	...t,
	children: [l(le, {}), e]
}), pe = (e, t) => {
	let { locale: n } = i($) ?? {};
	return o(() => q(e, t ?? n), [
		e.key,
		n,
		t
	]);
};
//#endregion
//#region src/components/pages/home/ResultsTable.tsx
function me() {
	let e = pe(d), t = [
		{
			lib: "react-i18next",
			size: e.c({ val: "42.3" }),
			time: e.h({ val: "0.12" }),
			lazy: e.j.value
		},
		{
			lib: "react-intl",
			size: e.c({ val: "38.1" }),
			time: e.h({ val: "0.15" }),
			lazy: e.g.value
		},
		{
			lib: "lingui",
			size: e.c({ val: "12.8" }),
			time: e.h({ val: "0.08" }),
			lazy: e.j.value
		},
		{
			lib: "typesafe-i18n",
			size: e.c({ val: "5.2" }),
			time: e.h({ val: "0.05" }),
			lazy: e.a.value
		}
	];
	return u("section", { children: [l("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: e.i
	}), l("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: u("table", {
			className: "w-full text-sm",
			children: [l("thead", {
				className: "bg-muted",
				children: u("tr", { children: [
					l("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: e.e
					}),
					l("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: e.b
					}),
					l("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: e.f
					}),
					l("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: e.d
					})
				] })
			}), l("tbody", { children: t.map((e) => u("tr", {
				className: "border-t border-border",
				children: [
					l("td", {
						className: "px-4 py-3 font-medium text-foreground",
						children: e.lib
					}),
					l("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.size
					}),
					l("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.time
					}),
					l("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.lazy
					})
				]
			}, e.lib)) })]
		})
	})] });
}
//#endregion
//#region scripts/Wrapper.tsx
function he({ children: e }) {
	return l(fe, {
		locale: "en",
		children: e
	});
}
//#endregion
//#region src/components/pages/home/ResultsTable.wrapper.tsx
function ge() {
	return l(he, { children: l(me, {}) });
}
//#endregion
export { ge as default };
