import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useId as s, useMemo as c, useState as l } from "react";
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
}, h = {
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
}, g = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, _ = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = g(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, v = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var y = {
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
}, b = (e = y) => {
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!v) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, x = !1, S, ee = () => typeof window > "u" ? b(y) : (x ||= (S = b(y), !0), S), te = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (x = !1, !v && h.storage.cookies)) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: g(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, _(r, e, i));
			} catch {}
		}
	}
}, C = /* @__PURE__ */ new Map(), ne = (e, t) => Object.create(new Proxy(e, {
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
}), re = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = C.get(t);
	i || (i = /* @__PURE__ */ new Map(), C.set(t, i));
	let a = i.get(r);
	return a || (a = ne(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ie = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : d(u, { children: e }),
	value: t,
	...n
}, re(t)), w = /* @__PURE__ */ new WeakMap(), T = 0, ae = (e) => {
	if (!e) return "base";
	let t = w.get(e);
	if (t) return t;
	T += 1;
	let n = `p${T}`;
	return w.set(e, n), n;
}, oe = 256, E = /* @__PURE__ */ new WeakMap(), D = (e) => typeof e == "object" && !!e, se = (e, t, n) => `${e}_${t}_${ae(n)}`, ce = (e, t) => {
	if (!D(e)) return { hit: !1 };
	let n = E.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, O = (e, t, n) => {
	if (!D(e)) return n;
	let r = E.get(e);
	return r || (r = /* @__PURE__ */ new Map(), E.set(e, r)), r.size >= oe && r.clear(), r.set(t, n), n;
}, le = "translation", ue = "enumeration", de = "plural", fe = "condition", k = "insertion", pe = "object", me = "array", A = "markdown", j = "html", he = "gender", ge = "select", M = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), N = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, N);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => N(e, M(t, e, {
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
			n[r] = N(e[r], M(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = N(e[r], M(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, P = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), F = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, I = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !F(e) || !F(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? I(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, _e = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => I(e, t));
}, L = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, ve = (e) => {
	if (typeof e == "string") return e;
	if (L(e)) return e.nodeType === "html" ? e[j] : e[A];
}, ye = (e, t) => {
	if (typeof e == "string") return t;
	if (L(e)) {
		let n = e.nodeType === "html" ? j : A;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, R = (e, t, n, r, i) => {
	let a = ye(e, P(ve(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, be = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? z : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = _e(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: le,
				key: e
			}]
		});
	}
}, V = z, H = (e) => z, U = z, xe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: k }], i = e[k], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || L(e),
			transform: (e, n, r) => {
				if (L(e)) return (i) => R(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = P(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return G(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, W = [
	ue,
	fe,
	de,
	he,
	ge
], Se = (e, t, n, r = !1) => {
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
		return !r && be(i) ? i(n) : i;
	};
}, G = (e, t) => typeof t == "function" && W.includes(e?.nodeType ?? "") ? (n) => Se(e, t, n) : t, K = z, q = z, J = (e) => z, Y = z, Ce = (e, t = !0) => [
	B(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	V,
	H(e ?? m.defaultLocale),
	U,
	xe,
	J(e ?? m.defaultLocale),
	Y,
	K,
	q
].filter((e) => e !== z), we = (e, t, n = []) => N(e, {
	...t,
	plugins: n
}), X = /* @__PURE__ */ new WeakSet(), Te = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = se(r ?? m.defaultLocale, "", n), o = ce(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ce(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !X.has(e)
		};
		X.add(e);
		try {
			return we(e.content, t, s);
		} finally {
			t.eager && X.delete(e);
		}
	};
	return c === null ? O(e, a, null) : Array.isArray(c) ? O(e, a, c.map(l)) : O(e, a, l(c));
}, Ee = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Z = /\{\{\s*(.*?)\s*\}\}/g, De = (e, t = {}) => {
	if (!Object.values(t).some(Ee)) return {
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
}, Oe = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ie({
		value: t.children,
		children: t.children
	})
}, ke = z, Ae = (t, r) => {
	let i = De(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, je = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: k }], i = e[k], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || L(e),
			transform: (e, n, r) => {
				if (L(e)) return (i) => R(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ae(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return G(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Me = z, Ne = z, Q = /* @__PURE__ */ new Map(), Pe = (e, t = !0) => {
	let n = `${e ?? m.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		Oe,
		B(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
		V,
		H(e ?? m.defaultLocale),
		U,
		J(e ?? m.defaultLocale),
		Y,
		K,
		q,
		ke,
		je,
		Me,
		Ne
	].filter((e) => e !== z);
	return Q.set(n, r), r;
}, Fe = (e, t) => Te(e, t, Pe(typeof t == "object" && t ? t.locale : t)), Ie = ee, Le = (e, t) => te(e, {
	...y,
	isCookieEnabled: t
}), Re = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, ze = (e, t = m?.locales, n = m?.defaultLocale) => {
	if (t?.includes(e)) return e;
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
}, $ = t({
	get locale() {
		return Ie() ?? m?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Be = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: s, isCookieEnabled: u }) => {
	let { locales: f, defaultLocale: p } = m ?? {}, [h, g] = l(() => e ?? Ie() ?? t ?? p), [_, v] = l(e);
	e !== _ && (v(e), e && e !== h && g(e)), o(() => {
		Re();
	}, []);
	let y = i((e) => {
		if (h.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), Le(e, u);
		}
	}, [
		h,
		f,
		u
	]), b = a ?? y, x = ze(h), S = c(() => ({
		locale: x,
		setLocale: b,
		variant: n,
		disableEditor: s
	}), [
		x,
		b,
		n,
		s
	]);
	return d($.Provider, {
		value: S,
		children: r
	});
}, Ve = ({ children: e, ...t }) => f(Be, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), He = (e, t) => {
	let { locale: n, variant: r } = a($) ?? {}, i = t ?? n, o = i;
	return c(() => Fe(e, i), [e.key, o]);
};
function Ue() {
	let e = He(p), t = s();
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
function We({ children: e }) {
	return d(Ve, {
		locale: "en",
		children: e
	});
}
function Ge() {
	return d(We, { children: d(Ue, {}) });
}
export { Ge as default };
