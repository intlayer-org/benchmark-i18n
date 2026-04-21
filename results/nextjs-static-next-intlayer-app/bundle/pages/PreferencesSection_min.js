import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useLayoutEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
var p = {
	key: "preferences-section",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				e: "Email Notifications",
				k: "Receive weekly benchmark reports",
				n: "Toggle notifications",
				c: "Dark Mode",
				o: "Use dark color scheme",
				m: "Toggle dark mode",
				d: "Default Language",
				f: "English (en)",
				g: "French (fr)",
				h: "German (de)",
				l: "Spanish (es)",
				i: "Japanese (ja)",
				b: "Chinese Simplified (zh)",
				a: "Arabic (ar)",
				j: "Preferences"
			},
			fr: {
				e: "Notifications par email",
				k: "Recevoir des rapports hebdomadaires de benchmark",
				n: "Basculer les notifications",
				c: "Mode sombre",
				o: "Utiliser le schéma de couleurs sombres",
				m: "Basculer le mode sombre",
				d: "Langue par défaut",
				f: "Anglais (en)",
				g: "Français (fr)",
				h: "Allemand (de)",
				l: "Espagnol (es)",
				i: "Japonais (ja)",
				b: "Chinois Simplifié (zh)",
				a: "Arabe (ar)",
				j: "Préférences"
			},
			es: {
				e: "Notificaciones por correo electrónico",
				k: "Recibir informes semanales de benchmark",
				n: "Alternar notificaciones",
				c: "Modo oscuro",
				o: "Usar esquema de colores oscuros",
				m: "Alternar modo oscuro",
				d: "Idioma predeterminado",
				f: "Inglés (en)",
				g: "Francés (fr)",
				h: "Alemán (de)",
				l: "Español (es)",
				i: "Japonés (ja)",
				b: "Chino simplificado (zh)",
				a: "Árabe (ar)",
				j: "Preferencias"
			},
			de: {
				e: "E-Mail-Benachrichtigungen",
				k: "Wöchentliche Benchmark-Berichte erhalten",
				n: "Benachrichtigungen umschalten",
				c: "Dunkelmodus",
				o: "Dunkles Farbschema verwenden",
				m: "Dunkelmodus umschalten",
				d: "Standardsprache",
				f: "Englisch (en)",
				g: "Französisch (fr)",
				h: "Deutsch (de)",
				l: "Spanisch (es)",
				i: "Japanisch (ja)",
				b: "Chinesisch vereinfacht (zh)",
				a: "Arabisch (ar)",
				j: "Einstellungen"
			},
			it: {
				e: "Notifiche via email",
				k: "Ricevi rapporti settimanali sui benchmark",
				n: "Attiva/disattiva notifiche",
				c: "Modalità scura",
				o: "Usa lo schema colori scuro",
				m: "Attiva/disattiva modalità scura",
				d: "Lingua predefinita",
				f: "Inglese (en)",
				g: "Francese (fr)",
				h: "Tedesco (de)",
				l: "Spagnolo (es)",
				i: "Giapponese (ja)",
				b: "Cinese semplificato (zh)",
				a: "Arabo (ar)",
				j: "Preferenze"
			},
			pt: {
				e: "Notificações por e-mail",
				k: "Receber relatórios semanais de benchmarks",
				n: "Alternar notificações",
				c: "Modo Escuro",
				o: "Usar esquema de cores escuras",
				m: "Alternar modo escuro",
				d: "Idioma Padrão",
				f: "Inglês (en)",
				g: "Francês (fr)",
				h: "Alemão (de)",
				l: "Espanhol (es)",
				i: "Japonês (ja)",
				b: "Chinês Simplificado (zh)",
				a: "Árabe (ar)",
				j: "Preferências"
			},
			zh: {
				e: "邮件通知",
				k: "接收每周基准测试报告",
				n: "切换通知",
				c: "深色模式",
				o: "使用深色配色方案",
				m: "切换深色模式",
				d: "默认语言",
				f: "英语 (en)",
				g: "法语 (fr)",
				h: "德语 (de)",
				l: "西班牙语 (es)",
				i: "日语 (ja)",
				b: "中文简体 (zh)",
				a: "阿拉伯语 (ar)",
				j: "偏好设置"
			},
			ja: {
				e: "メール通知",
				k: "ベンチマーク週報を受け取る",
				n: "通知の切り替え",
				c: "ダークモード",
				o: "ダークカラー体系を使用する",
				m: "ダークモードの切り替え",
				d: "デフォルト言語",
				f: "英語 (en)",
				g: "フランス語 (fr)",
				h: "ドイツ語 (de)",
				l: "スペイン語 (es)",
				i: "日本語 (ja)",
				b: "中国語（簡体字）(zh)",
				a: "アラビア語 (ar)",
				j: "設定"
			},
			ko: {
				e: "이메일 알림",
				k: "주간 벤치마크 보고서 받기",
				n: "알림 토글",
				c: "다크 모드",
				o: "어두운 색상 체계 사용",
				m: "다크 모드 토글",
				d: "기본 언어",
				f: "영어 (en)",
				g: "프랑스어 (fr)",
				h: "독일어 (de)",
				l: "스페인어 (es)",
				i: "일본어 (ja)",
				b: "중국어 간체 (zh)",
				a: "아랍어 (ar)",
				j: "기본 설정"
			},
			ru: {
				e: "Email-уведомления",
				k: "Получать еженедельные отчеты о бенчмарках",
				n: "Переключить уведомления",
				c: "Темный режим",
				o: "Использовать темную цветовою схему",
				m: "Переключить темный режим",
				d: "Язык по умолчанию",
				f: "Английский (en)",
				g: "Французский (fr)",
				h: "Немецкий (de)",
				l: "Испанский (es)",
				i: "Японский (ja)",
				b: "Китайский упрощенный (zh)",
				a: "Арабский (ar)",
				j: "Настройки"
			}
		}
	}
}, m = {
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
}, h = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, g = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : d(u, { children: e });
	return new Proxy(i, { get(e, r, i) {
		return r === "value" ? t : n && r in n ? n[r] : Reflect.get(e, r, i);
	} });
}, _ = (e) => {
	if (typeof e != "object" || !e) return e;
	let { type: t, props: r } = ((e) => {
		let t = e.props?.children;
		if (Array.isArray(t)) {
			let r = t.map((e, t) => {
				let r = _(e);
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
			let n = _(t);
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
}, v = "translation", y = "insertion", ee = "object", te = "array", b = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => b(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => b(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: te,
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
					type: ee,
					key: r
				}]
			}, i = b(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, x = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), S = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, C = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (S(e) && S(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : C(e[r], t[r]));
		return n;
	}
	return e;
}, ne = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => C(e, t));
}, re = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", ie = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", w = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, T = (e, t) => re ? w : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: v,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return ne(o, e, t);
	}
}, E = w, D = w, ae = ie ? w : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = x(i, e);
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
}, O = w, k = (e) => w, A = w, j = (e, t = !0) => [
	T(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	E,
	D,
	ae,
	k(e ?? m.defaultLocale),
	A,
	O
], M = (e, t, n = []) => b(e, {
	...t,
	plugins: n
}), N = (e, t, n = j(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return M(e.content, r, n);
}, P = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", F = /\{\{\s*(.*?)\s*\}\}/g, I = (e, t = {}) => {
	if (!Object.values(t).some(P)) return {
		isSimple: !0,
		parts: e.replace(F, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(F), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, L = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", R = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", z = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", B = L ? w : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => g({
		...n,
		value: n.children,
		children: n.children
	})
}, V = R ? w : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => g({
		...n,
		value: "[[react-element]]",
		children: _(e)
	})
}, H = (t, r) => {
	let i = I(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, U = z ? w : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = H(i, e);
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
}, W = w, G = w, K = /* @__PURE__ */ new Map(), q = (e, t = !0) => {
	let n = `${e ?? m.defaultLocale}_${t}`;
	if (K.has(n)) return K.get(n);
	let r = [
		T(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
		E,
		D,
		k(e ?? m.defaultLocale),
		A,
		O,
		B,
		V,
		U,
		W,
		G
	];
	return K.set(n, r), r;
}, J = (e, t) => N(e, t, q(t)), oe = (e, t = m?.locales, n = m?.defaultLocale) => {
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
var se = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ce = (e) => {
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Y) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, le = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Y && h.storage.cookies) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, se(r, e, i));
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
}, Z = ce(X), ue = (e, t) => le(e, {
	...X,
	isCookieEnabled: t
}), de = () => {
	let { locale: e } = i(Q) ?? {}, t = c(null);
	a(() => {}, []), a(() => {
		!e || !t.current || t.current.currentLocale.set(e);
	}, [e]);
}, fe = ({ children: e }) => (de(), e), pe = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Q = t({
	locale: Z ?? m?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), $ = ({ locale: e, defaultLocale: t, children: n, setLocale: r, disableEditor: i, isCookieEnabled: o }) => {
	let { locales: s, defaultLocale: c } = m ?? {}, [u, f] = l(e ?? Z ?? t ?? c);
	a(() => {
		e && e !== u && f(e);
	}, [e]), a(() => {
		pe();
	}, []);
	let p = r ?? ((e) => {
		if (u.toString() !== e.toString()) {
			if (!s?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), ue(e, o);
		}
	}), h = oe(u);
	return d(Q.Provider, {
		value: {
			locale: h,
			setLocale: p,
			disableEditor: i
		},
		children: n
	});
}, me = ({ children: e, ...t }) => f($, {
	...t,
	children: [d(fe, {}), e]
}), he = (e, t) => {
	let { locale: n } = i(Q) ?? {};
	return s(() => J(e, t ?? n), [
		e.key,
		n,
		t
	]);
}, ge = (e) => d(me, { ...e });
function _e() {
	let e = he(p), t = "default-language";
	return f("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [d("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: e.j
		}), f("div", {
			className: "space-y-4",
			children: [
				f("div", {
					className: "flex items-center justify-between",
					children: [f("div", { children: [d("p", {
						className: "text-sm font-medium text-foreground",
						children: e.e
					}), d("p", {
						className: "text-xs text-muted-foreground",
						children: e.k
					})] }), d("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": e.n.value,
						children: d("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" })
					})]
				}),
				f("div", {
					className: "flex items-center justify-between",
					children: [f("div", { children: [d("p", {
						className: "text-sm font-medium text-foreground",
						children: e.c
					}), d("p", {
						className: "text-xs text-muted-foreground",
						children: e.o
					})] }), d("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": e.m.value,
						children: d("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" })
					})]
				}),
				f("div", { children: [d("label", {
					htmlFor: t,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: e.d
				}), f("select", {
					id: t,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						d("option", { children: e.f }),
						d("option", { children: e.g }),
						d("option", { children: e.h }),
						d("option", { children: e.l }),
						d("option", { children: e.i }),
						d("option", { children: e.b }),
						d("option", { children: e.a })
					]
				})] })
			]
		})]
	});
}
function ve() {
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
function ye(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function be({ children: e, locale: t }) {
	let [n] = l(() => typeof performance < "u" ? performance.now() : 0);
	return o(() => {
		ye("AppRoot", n);
	}, [n]), a(() => {
		t && (document.documentElement.lang = t);
	}, [t]), a(() => {
		ve();
	}, []), d(ge, {
		locale: t,
		children: e
	});
}
function xe({ children: e }) {
	return d(be, {
		locale: "en",
		children: e
	});
}
function Se() {
	return d(xe, { children: d(_e, {}) });
}
export { Se as default };
