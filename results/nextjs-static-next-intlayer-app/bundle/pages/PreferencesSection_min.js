import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useLayoutEffect as o, useMemo as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
var ee = {
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
				b: "Chinese Simplified (zh-CN)",
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
}, ne = !1, g, _ = () => typeof window > "u" ? h(m) : (ne ||= (g = h(m), !0), g), v = /* @__PURE__ */ new Map(), re = (e, t) => Object.create(new Proxy(e, {
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
}), ie = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = v.get(t);
	i || (i = /* @__PURE__ */ new Map(), v.set(t, i));
	let a = i.get(r);
	return a || (a = re(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ae = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : u(l, { children: e }),
	value: t,
	...n
}, ie(t)), y = /* @__PURE__ */ new WeakMap(), b = 0, oe = (e) => {
	if (!e) return "base";
	let t = y.get(e);
	if (t) return t;
	b += 1;
	let n = `p${b}`;
	return y.set(e, n), n;
}, se = 256, x = /* @__PURE__ */ new WeakMap(), S = (e) => typeof e == "object" && !!e, ce = (e, t, n) => `${e}_${t}_${oe(n)}`, le = (e, t) => {
	if (!S(e)) return { hit: !1 };
	let n = x.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, C = (e, t, n) => {
	if (!S(e)) return n;
	let r = x.get(e);
	return r || (r = /* @__PURE__ */ new Map(), x.set(e, r)), r.size >= se && r.clear(), r.set(t, n), n;
}, w = "translation", T = "enumeration", ue = "plural", de = "condition", E = "insertion", fe = "object", pe = "array", D = "markdown", O = "html", me = "gender", he = "select", k = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), A = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, A);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => A(e, k(t, e, {
		type: pe,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: fe,
			key: r
		};
		if (t.eager) {
			n[r] = A(e[r], k(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = A(e[r], k(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, j = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), M = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, N = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !M(e) || !M(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? N(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, P = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => N(e, t));
}, F = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, I = (e) => {
	if (typeof e == "string") return e;
	if (F(e)) return e.nodeType === "html" ? e[O] : e[D];
}, L = (e, t) => {
	if (typeof e == "string") return t;
	if (F(e)) {
		let n = e.nodeType === "html" ? O : D;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, R = (e, t, n, r, i) => {
	let a = L(e, j(I(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, ge = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? z : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = P(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: w,
				key: e
			}]
		});
	}
}, V = z, H = (e) => z, U = z, _e = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: E }], i = e[E], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || F(e),
			transform: (e, n, r) => {
				if (F(e)) return (i) => R(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = j(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return K(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, W = [
	T,
	de,
	ue,
	me,
	he
], G = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !W.includes(i)) return t;
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
		return !r && ge(i) ? i(n) : i;
	};
}, K = (e, t) => typeof t == "function" && W.includes(e?.nodeType ?? "") ? (n) => G(e, t, n) : t, q = z, J = z, Y = (e) => z, X = z, ve = (e, t = !0) => [
	B(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	V,
	H(e ?? f.defaultLocale),
	U,
	_e,
	Y(e ?? f.defaultLocale),
	X,
	q,
	J
].filter((e) => e !== z), ye = (e, t, n = []) => A(e, {
	...t,
	plugins: n
}), Z = /* @__PURE__ */ new WeakSet(), be = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ce(r ?? f.defaultLocale, "", n), o = le(e, a);
	if (o.hit) return o.content;
	let s = n ?? ve(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Z.has(e)
		};
		Z.add(e);
		try {
			return ye(e.content, t, s);
		} finally {
			t.eager && Z.delete(e);
		}
	};
	return c === null ? C(e, a, null) : Array.isArray(c) ? C(e, a, c.map(l)) : C(e, a, l(c));
}, xe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Q = /\{\{\s*(.*?)\s*\}\}/g, Se = (e, t = {}) => {
	if (!Object.values(t).some(xe)) return {
		isSimple: !0,
		parts: e.replace(Q, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Q), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Ce = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ae({
		value: t.children,
		children: t.children
	})
}, we = z, Te = (t, r) => {
	let i = Se(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ee = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: E }], i = e[E], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || F(e),
			transform: (e, n, r) => {
				if (F(e)) return (i) => R(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Te(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return K(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, De = z, Oe = z, $ = /* @__PURE__ */ new Map(), ke = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		Ce,
		B(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		V,
		H(e ?? f.defaultLocale),
		U,
		Y(e ?? f.defaultLocale),
		X,
		q,
		J,
		we,
		Ee,
		De,
		Oe
	].filter((e) => e !== z);
	return $.set(n, r), r;
}, Ae = (e, t) => be(e, t, ke(typeof t == "object" && t ? t.locale : t)), je = _, Me = t({
	get locale() {
		return je() ?? f?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Ne = (e, t) => {
	let { locale: n, variant: r } = i(Me) ?? {}, a = t ?? n, o = a;
	return s(() => Ae(e, a), [e.key, o]);
};
function Pe() {
	let e = Ne(ee), t = "default-language";
	return d("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [u("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: e.j
		}), d("div", {
			className: "space-y-4",
			children: [
				d("div", {
					className: "flex items-center justify-between",
					children: [d("div", { children: [u("p", {
						className: "text-sm font-medium text-foreground",
						children: e.e
					}), u("p", {
						className: "text-xs text-muted-foreground",
						children: e.k
					})] }), u("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": e.n.value,
						children: u("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" })
					})]
				}),
				d("div", {
					className: "flex items-center justify-between",
					children: [d("div", { children: [u("p", {
						className: "text-sm font-medium text-foreground",
						children: e.c
					}), u("p", {
						className: "text-xs text-muted-foreground",
						children: e.o
					})] }), u("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": e.m.value,
						children: u("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" })
					})]
				}),
				d("div", { children: [u("label", {
					htmlFor: t,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: e.d
				}), d("select", {
					id: t,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						u("option", { children: e.f }),
						u("option", { children: e.g }),
						u("option", { children: e.h }),
						u("option", { children: e.l }),
						u("option", { children: e.i }),
						u("option", { children: e.b }),
						u("option", { children: e.a })
					]
				})] })
			]
		})]
	});
}
function Fe() {
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
function Ie(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Le({ children: e, locale: t }) {
	let [n] = c(() => typeof performance < "u" ? performance.now() : 0);
	return o(() => {
		Ie("AppRoot", n);
	}, [n]), a(() => {
		t && (document.documentElement.lang = t);
	}, [t]), a(() => {
		Fe();
	}, []), e;
}
function Re({ children: e }) {
	return u(Le, {
		locale: "en",
		children: e
	});
}
function ze() {
	return u(Re, { children: u(Pe, {}) });
}
export { ze as default };
