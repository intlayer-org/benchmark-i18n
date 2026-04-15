import { Fragment as e, createContext as t, createElement as n, isValidElement as r, lazy as i, useContext as a, useMemo as o } from "react";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
var u = {
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
}, p = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : /* @__PURE__ */ c(s, { children: e });
	return new Proxy(i, { get(e, r, i) {
		return r === "value" ? t : n && Object.keys(n).includes(r) ? n[r] : Reflect.get(e, r, i);
	} });
}, m = (e) => {
	if (typeof e != "object" || !e) return e;
	let { type: t, props: r } = ((e) => {
		let t = e.props?.children;
		if (Array.isArray(t)) {
			let r = t.map((e, t) => {
				let r = m(e);
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
			let n = m(t);
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
}, h = "translation", g = "insertion", _ = "object", v = "array", y = (e, t) => {
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
}, b = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), x = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, S = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (x(e) && x(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : S(e[r], t[r]));
		return n;
	}
	return e;
}, C = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => S(e, t));
}, w = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", T = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", E = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, D = (e, t) => w ? E : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = { ...n.translation ?? {} };
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: h,
					key: e
				}]
			};
			a[e] = i(a[e], t);
		}
		return C(a, e, t);
	}
}, O = E, k = E, A = T ? E : {
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
					let a = b(i, e);
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
}, j = E, M = (e) => E, N = E, P = (e, t = !0) => [
	D(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
	O,
	k,
	A,
	M(e ?? d.defaultLocale),
	N,
	j
].filter(Boolean), F = (e, t, n = []) => y(e, {
	...t,
	plugins: n
}), I = (e, t, n = P(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return F(e.content, r, n);
}, L = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", R = /\{\{\s*(.*?)\s*\}\}/g, z = (e, t = {}) => {
	if (!Object.values(t).some(L)) return {
		isSimple: !0,
		parts: e.replace(R, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(R), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, B = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", V = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", H = process.env.INTLAYER_NODE_TYPE_INSERTION === "false";
i(() => import("./MarkdownRendererPlugin-BJew_ddL.js").then((e) => ({ default: e.MarkdownRendererPlugin }))), i(() => import("./HTMLRendererPlugin-ytPPxvV0.js").then((e) => ({ default: e.HTMLRendererPlugin })));
var U = B ? E : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => p({
		...n,
		value: n.children,
		children: n.children
	})
}, W = V ? E : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => p({
		...n,
		value: "[[react-element]]",
		children: m(e)
	})
}, G = (t, r) => {
	let i = z(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, K = H ? E : {
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
					let a = G(i, e);
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
}, q = E, J = E, Y = (e, t = !0) => [
	D(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
	O,
	k,
	M(e ?? d.defaultLocale),
	N,
	j,
	U,
	W,
	K,
	q,
	J
].filter(Boolean), X = (e, t) => I(e, t, Y(t)), Z = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/client/IntlayerProvider.mjs
var Q = t({
	locale: ((e) => {
		let { locales: t } = d;
		if (e?.isCookieEnabled === !1) return;
		let n = (e) => !!e && t.includes(e);
		if (!Z) for (let t = 0; t < (f.storage.cookies ?? []).length; t++) try {
			let r = e?.getCookie?.(f.storage.cookies[t].name);
			if (n(r)) return r;
		} catch {}
	})({
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
	}) ?? d?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), $ = (e, t) => {
	let { locale: n } = a(Q) ?? {};
	return o(() => X(e, t ?? n), [
		e.key,
		n,
		t
	]);
};
//#endregion
//#region src/components/pages/home/ResultsTable.tsx
function ee() {
	let e = $(u), t = [
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
	return /* @__PURE__ */ l("section", { children: [/* @__PURE__ */ c("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: e.i
	}), /* @__PURE__ */ c("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: /* @__PURE__ */ l("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ c("thead", {
				className: "bg-muted",
				children: /* @__PURE__ */ l("tr", { children: [
					/* @__PURE__ */ c("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: e.e
					}),
					/* @__PURE__ */ c("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: e.b
					}),
					/* @__PURE__ */ c("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: e.f
					}),
					/* @__PURE__ */ c("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: e.d
					})
				] })
			}), /* @__PURE__ */ c("tbody", { children: t.map((e) => /* @__PURE__ */ l("tr", {
				className: "border-t border-border",
				children: [
					/* @__PURE__ */ c("td", {
						className: "px-4 py-3 font-medium text-foreground",
						children: e.lib
					}),
					/* @__PURE__ */ c("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.size
					}),
					/* @__PURE__ */ c("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.time
					}),
					/* @__PURE__ */ c("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.lazy
					})
				]
			}, e.lib)) })]
		})
	})] });
}
//#endregion
export { ee as default };
import { Fragment as e, createContext as t, createElement as n, useContext as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getHTML.mjs
var a = (e) => {
	let t = {}, n = /([a-zA-Z0-9-]+)="([^"]*)"/g, r = n.exec(e);
	for (; r !== null;) t[r[1]] = r[2], r = n.exec(e);
	return t;
}, o = /* @__PURE__ */ new Map(), s = (e) => {
	if (o.has(e)) return o.get(e);
	if (typeof e != "string") return [];
	let t = /<(\/)?([a-zA-Z0-9.-]+)([\s\S]*?)(\/?)>/g, n = [], r = [], i = 0, s = t.exec(e), c = (e) => {
		(r.length > 0 ? r[r.length - 1].children : n).push(e);
	};
	for (; s !== null;) {
		let [n, o, l, u, d] = s, f = s.index;
		f > i && c(e.slice(i, f));
		let p = o === "/", m = d === "/" || u.trim().endsWith("/") || n.endsWith("/>"), h = u.trim().replace(/\/$/, "").trim();
		if (p) {
			let e = r[r.length - 1];
			if (e && e.tagName === l) {
				let e = r.pop();
				e && c({
					tagName: e.tagName,
					props: e.props,
					children: e.children
				});
			}
		} else if (m) c({
			tagName: l,
			props: a(h),
			children: []
		});
		else {
			let e = a(h);
			r.push({
				tagName: l,
				children: [],
				props: e
			});
		}
		i = f + n.length, s = t.exec(e);
	}
	for (i < e.length && c(e.slice(i)); r.length > 0;) {
		let e = r.pop();
		e && c({
			tagName: e.tagName,
			props: e.props,
			children: e.children
		});
	}
	return o.set(e, n), n;
}, c = (e, t) => {
	let n = s(e), r = 0, i = (e) => {
		if (typeof e == "string") return e;
		let { tagName: n, props: a, children: o } = e, s = o.flatMap(i), c = r++, l = t[n];
		if (!l) {
			let e = n.toLowerCase(), r = Object.keys(t).find((t) => t.toLowerCase() === e);
			r && (l = t[r]);
		}
		let u = `html-tag-${n}-${c}`;
		if (typeof l == "function") return l({
			...a,
			children: s,
			key: u
		});
		if (typeof l == "string") {
			let e = t[l];
			return typeof e == "function" ? e({
				...a,
				children: s,
				key: u
			}) : s;
		}
		if (typeof l == "object" && l && "tag" in l) {
			let { tag: e, props: n } = l, r = t[e];
			return typeof r == "function" ? r({
				...a,
				...n,
				children: s,
				key: u
			}) : s;
		}
		return s;
	}, a = n.flatMap(i);
	return a.length === 1 ? a[0] : a;
}, l = t(void 0), u = () => r(l), d = (t, { components: r = {} } = {}) => {
	let a = Object.fromEntries(Object.entries(r).filter(([, e]) => e).map(([e, t]) => [e, (e) => n(t, e)]));
	return /* @__PURE__ */ i(e, { children: c(t, new Proxy(a, { get(e, t) {
		if (typeof t == "string" && t in e) return e[t];
		if (typeof t == "string" && /^[a-z][a-z0-9]*$/.test(t)) return (e) => n(t, e);
	} })) });
}, f = (e) => {
	let { html: t, userComponents: n } = e;
	return d(t, { components: {
		...u()?.components,
		...n
	} });
};
//#endregion
export { f as HTMLRendererPlugin };
import { createContext as e, useContext as t } from "react";
import "react/jsx-runtime";
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/markdown/MarkdownProvider.mjs
var n = e(void 0), r = () => t(n), i = (e) => {
	let { children: t, options: n, components: i } = e, a = r();
	return (a?.renderMarkdown ?? ((e) => e))(t, n, {
		...a?.components ?? {},
		...i ?? {}
	});
};
//#endregion
export { i as MarkdownRendererPlugin };
