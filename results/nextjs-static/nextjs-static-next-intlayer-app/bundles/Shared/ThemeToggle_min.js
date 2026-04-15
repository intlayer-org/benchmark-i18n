import { Fragment as e, createContext as t, createElement as n, isValidElement as r, lazy as i, useContext as a, useMemo as o } from "react";
import { Fragment as s, jsx as c } from "react/jsx-runtime";
var l = {
	key: "theme-toggle",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				themeModeAutoSystemClick: "Theme mode: auto (system). Click to switch to light mode.",
				themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
				themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
				a: "Theme: Auto",
				themeDark: "Theme: Dark",
				themeLight: "Theme: Light",
				themeModeModeClickTo: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Theme mode: {{mode}}. Click to switch mode."
				}
			},
			fr: {
				themeModeAutoSystemClick: "Mode de thème : auto (système). Cliquez pour passer au mode clair.",
				themeModeLightClick: "Mode de thème : clair. Cliquez pour passer au mode sombre.",
				themeModeDarkClick: "Mode de thème : sombre. Cliquez pour passer au mode auto (système).",
				a: "Thème : Auto",
				themeDark: "Thème : Sombre",
				themeLight: "Thème : Clair",
				themeModeModeClickTo: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Mode de thème : {{mode}}. Cliquez pour changer de mode."
				}
			},
			es: {
				themeModeAutoSystemClick: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
				themeModeLightClick: "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
				themeModeDarkClick: "Modo de tema: oscuro. Haga clic para cambiar al modo automático (sistema).",
				a: "Tema: Auto",
				themeDark: "Tema: Oscuro",
				themeLight: "Tema: Claro",
				themeModeModeClickTo: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Modo de tema: {{mode}}. Haga clic para cambiar de modo."
				}
			},
			de: {
				themeModeAutoSystemClick: "Design-Modus: Auto (System). Klicken, um in den hellen Modus zu wechseln.",
				themeModeLightClick: "Design-Modus: Hell. Klicken, um in den dunklen Modus zu wechseln.",
				themeModeDarkClick: "Design-Modus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.",
				a: "Design: Auto",
				themeDark: "Design: Dunkel",
				themeLight: "Design: Hell",
				themeModeModeClickTo: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Themenmodus: {{mode}}. Zum Umschalten klicken."
				}
			},
			it: {
				themeModeAutoSystemClick: "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
				themeModeLightClick: "Modalità tema: chiara. Clicca per passare alla modalità scura.",
				themeModeDarkClick: "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).",
				a: "Tema: Auto",
				themeDark: "Tema: Scuro",
				themeLight: "Tema: Chiaro",
				themeModeModeClickTo: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Modalità tema: {{mode}}. Clicca per cambiare modalità."
				}
			},
			pt: {
				themeModeAutoSystemClick: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
				themeModeLightClick: "Modo de tema: claro. Clique para mudar para o modo escuro.",
				themeModeDarkClick: "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).",
				a: "Tema: Auto",
				themeDark: "Tema: Escuro",
				themeLight: "Tema: Claro",
				themeModeModeClickTo: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Modo de tema: {{mode}}. Clique para alternar o modo."
				}
			},
			zh: {
				themeModeAutoSystemClick: "主题模式：自动（系统）。点击切换到浅色模式。",
				themeModeLightClick: "主题模式：浅色。点击切换到深色模式。",
				themeModeDarkClick: "主题模式：深色。点击切换到自动（系统）模式。",
				a: "主题：自动",
				themeDark: "主题：深色",
				themeLight: "主题：浅色",
				themeModeModeClickTo: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "主题模式：{{mode}}。点击切换模式。"
				}
			},
			ja: {
				themeModeAutoSystemClick: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
				themeModeLightClick: "テーマモード：ライト。クリックしてダークモードに切り替えます。",
				themeModeDarkClick: "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。",
				a: "テーマ：自動",
				themeDark: "テーマ：ダーク",
				themeLight: "テーマ：ライト",
				themeModeModeClickTo: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "テーマモード：{{mode}}。モードを切り替えるにはクリックしてください。"
				}
			},
			ko: {
				themeModeAutoSystemClick: "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
				themeModeLightClick: "테마 모드: 라이트. 다크 모드로 전환하려면 클릭하세요.",
				themeModeDarkClick: "테마 모드: 다크. 자동(시스템) 모드로 전환하려면 클릭하세요.",
				a: "테마: 자동",
				themeDark: "테마: 다크",
				themeLight: "테마: 라이트",
				themeModeModeClickTo: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "테마 모드: {{mode}}. 모드를 전환하려면 클릭하세요."
				}
			},
			ru: {
				themeModeAutoSystemClick: "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
				themeModeLightClick: "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
				themeModeDarkClick: "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.",
				a: "Тема: Авто",
				themeDark: "Тема: Темная",
				themeLight: "Тема: Светлая",
				themeModeModeClickTo: {
					fields: ["mode"],
					nodeType: "insertion",
					insertion: "Режим темы: {{mode}}. Нажмите, чтобы переключить режим."
				}
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
	defaultLocale: "en"
}, d = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, f = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : /* @__PURE__ */ c(s, { children: e });
	return new Proxy(i, { get(e, r, i) {
		return r === "value" ? t : n && Object.keys(n).includes(r) ? n[r] : Reflect.get(e, r, i);
	} });
}, p = (e) => {
	if (typeof e != "object" || !e) return e;
	let { type: t, props: r } = ((e) => {
		let t = e.props?.children;
		if (Array.isArray(t)) {
			let r = t.map((e, t) => {
				let r = p(e);
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
			let n = p(t);
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
}, m = "translation", h = "insertion", g = "object", _ = "array", v = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => v(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => v(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: _,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: g,
				key: r
			}]
		};
		n[r] = v(e[r], i);
	}
	return n;
}, y = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), b = (e) => {
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
					type: m,
					key: e
				}]
			};
			a[e] = i(a[e], t);
		}
		return S(a, e, t);
	}
}, D = T, O = T, k = w ? T : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: h }], i = e[h], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = y(i, e);
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
}, A = T, j = (e) => T, M = T, N = (e, t = !0) => [
	E(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	D,
	O,
	k,
	j(e ?? u.defaultLocale),
	M,
	A
].filter(Boolean), P = (e, t, n = []) => v(e, {
	...t,
	plugins: n
}), F = (e, t, n = N(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return P(e.content, r, n);
}, I = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", L = /\{\{\s*(.*?)\s*\}\}/g, R = (e, t = {}) => {
	if (!Object.values(t).some(I)) return {
		isSimple: !0,
		parts: e.replace(L, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(L), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, z = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", B = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", V = process.env.INTLAYER_NODE_TYPE_INSERTION === "false";
i(() => import("./MarkdownRendererPlugin-BJew_ddL.js").then((e) => ({ default: e.MarkdownRendererPlugin }))), i(() => import("./HTMLRendererPlugin-ytPPxvV0.js").then((e) => ({ default: e.HTMLRendererPlugin })));
var H = z ? T : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => f({
		...n,
		value: n.children,
		children: n.children
	})
}, U = B ? T : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => f({
		...n,
		value: "[[react-element]]",
		children: p(e)
	})
}, W = (t, r) => {
	let i = R(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, G = V ? T : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: h }], i = e[h], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = W(i, e);
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
}, K = T, q = T, J = (e, t = !0) => [
	E(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	D,
	O,
	j(e ?? u.defaultLocale),
	M,
	A,
	H,
	U,
	G,
	K,
	q
].filter(Boolean), Y = (e, t) => F(e, t, J(t)), X = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/client/IntlayerProvider.mjs
var Z = t({
	locale: ((e) => {
		let { locales: t } = u;
		if (e?.isCookieEnabled === !1) return;
		let n = (e) => !!e && t.includes(e);
		if (!X) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
			let r = e?.getCookie?.(d.storage.cookies[t].name);
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
	}) ?? u?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Q = (e, t) => {
	let { locale: n } = a(Z) ?? {};
	return o(() => Y(e, t ?? n), [
		e.key,
		n,
		t
	]);
};
//#endregion
//#region src/components/ThemeToggle.tsx
function $() {
	return /* @__PURE__ */ c("div", {
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground",
		children: Q(l).a.value
	});
}
//#endregion
export { $ as default };
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
