import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useLayoutEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { jsxDEV as p } from "react/jsx-dev-runtime";
var m = {
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
}, h = {
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
}, g = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, ee = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : d(u, { children: e });
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
}, _ = /* @__PURE__ */ new WeakMap(), v = 0, te = (e) => {
	if (!e) return "base";
	let t = _.get(e);
	if (t) return t;
	v += 1;
	let n = `p${v}`;
	return _.set(e, n), n;
}, ne = 256, y = /* @__PURE__ */ new WeakMap(), b = (e) => typeof e == "object" && !!e, re = (e, t, n) => `${e}_${t}_${te(n)}`, ie = (e, t) => {
	if (!b(e)) return { hit: !1 };
	let n = y.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, x = (e, t, n) => {
	if (!b(e)) return n;
	let r = y.get(e);
	return r || (r = /* @__PURE__ */ new Map(), y.set(e, r)), r.size >= ne && r.clear(), r.set(t, n), n;
}, ae = "translation", S = "insertion", oe = "object", se = "array", C = "markdown", w = "html", T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => T(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: se,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: oe,
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
}, E = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), D = "default", ce = /[^A-Za-z0-9._&=-]/g, O = /[^A-Za-z0-9._-]/g, le = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, k = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, le);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, A = (e) => e === void 0 ? D : typeof e == "string" ? k(e, ce) : Object.keys(e).sort().map((t) => `${k(t, O)}=${k(String(e[t]), O)}`).join("&"), j = (e) => Array.isArray(e) ? e.length === 0 ? [D] : e.map(A) : [A(e)], ue = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? D : e[0] ?? "default";
}, de = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, fe = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, pe = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, me = (e, t) => {
	if (!fe(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? D : ue(j(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => de(e, n, t, s)).map((t) => pe(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, he = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, M = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? j(n).join(",") : String(n)}`;
}).join("|") : "", N = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, P = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (N(e) && N(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : P(e[r], t[r]));
		return n;
	}
	return e;
}, ge = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => P(e, t));
}, F = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, _e = (e) => {
	if (typeof e == "string") return e;
	if (F(e)) return e.nodeType === "html" ? e[w] : e[C];
}, ve = (e, t) => {
	if (typeof e == "string") return t;
	if (F(e)) {
		let n = e.nodeType === "html" ? w : C;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, I = (e, t, n, r, i) => {
	let a = ve(e, E(_e(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, L = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, R = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? L : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ae,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return ge(o, e, t);
	}
}, z = L, ye = (e) => L, B = L, be = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? L : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || F(e),
			transform: (e, n, r) => {
				if (F(e)) return (i) => I(e, i, n, t.plugins, r);
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
}, V = L, H = L, U = (e) => L, W = L, xe = (e, t = !0) => [
	R(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
	z,
	B,
	be,
	U(e ?? h.defaultLocale),
	W,
	V,
	H
], Se = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), Ce = (e, t, n) => {
	let { locale: r, selector: i } = he(t), a = re(r ?? h.defaultLocale, M(i), n), o = ie(e, a);
	if (o.hit) return o.content;
	let s = n ?? xe(r), c = me(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Se(e.content, t, s);
	};
	return c === null ? x(e, a, null) : Array.isArray(c) ? x(e, a, c.map(l)) : x(e, a, l(c));
}, we = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", G = /\{\{\s*(.*?)\s*\}\}/g, Te = (e, t = {}) => {
	if (!Object.values(t).some(we)) return {
		isSimple: !0,
		parts: e.replace(G, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(G), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Ee = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => ee({
		...n,
		value: n.children,
		children: n.children
	})
}, De = L, Oe = (t, r) => {
	let i = Te(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, ke = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? L : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || F(e),
			transform: (e, n, r) => {
				if (F(e)) return (i) => I(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Oe(i, e);
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
}, Ae = L, je = L, K = /* @__PURE__ */ new Map(), Me = (e, t = !0) => {
	let n = `${e ?? h.defaultLocale}_${t}`;
	if (K.has(n)) return K.get(n);
	let r = [
		R(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
		z,
		ye(e ?? h.defaultLocale),
		B,
		U(e ?? h.defaultLocale),
		W,
		V,
		H,
		Ee,
		De,
		ke,
		Ae,
		je
	];
	return K.set(n, r), r;
}, Ne = (e, t) => Ce(e, t, Me(typeof t == "object" && t ? t.locale : t)), q = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Pe = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = q(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, J = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Y = {
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
}, Fe = (e = Y) => {
	let { locales: t } = h;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!J) for (let t = 0; t < (g.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(g.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Ie = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !J && g.storage.cookies) for (let n = 0; n < g.storage.cookies.length; n++) {
		let { name: r, attributes: i } = g.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: q(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Pe(r, e, i));
			} catch {}
		}
	}
}, X = Fe(Y), Le = (e, t) => Ie(e, {
	...Y,
	isCookieEnabled: t
}), Re = () => {
	let { locale: e } = i(Z) ?? {}, t = c(null);
	a(() => {}, []), a(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, ze = ({ children: e }) => (Re(), e), Be = () => {
	let { locale: e } = i(Z) ?? {}, t = c(null);
	a(() => {}, []), a(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Ve = ({ children: e }) => (Be(), e), He = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Ue = (e, t = h?.locales, n = h?.defaultLocale) => {
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
}, Z = t({
	locale: X ?? h?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), We = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = h ?? {}, [f, p] = l(e ?? X ?? t ?? u);
	a(() => {
		e && e !== f && p(e);
	}, [e]), a(() => {
		He();
	}, []);
	let m = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), Le(e, s);
		}
	}), g = Ue(f);
	return d(Z.Provider, {
		value: {
			locale: g,
			setLocale: m,
			variant: n,
			disableEditor: o
		},
		children: r
	});
}, Ge = ({ children: e, ...t }) => f(We, {
	...t,
	children: [
		d(ze, {}),
		d(Ve, {}),
		e
	]
}), Ke = (e, t) => {
	let { locale: n, variant: r } = i(Z) ?? {}, a = t ?? n, o = typeof a == "object" && a ? `${a.locale ?? ""}|${M(a)}` : a;
	return s(() => Ne(e, a), [e.key, o]);
}, qe = (e) => d(Ge, { ...e }), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/pages/settings/PreferencesSection.tsx";
function Je() {
	let e = Ke(m), t = "default-language";
	return p("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [p("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: e.j
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 10,
			columnNumber: 7
		}, this), p("div", {
			className: "space-y-4",
			children: [
				p("div", {
					className: "flex items-center justify-between",
					children: [p("div", { children: [p("p", {
						className: "text-sm font-medium text-foreground",
						children: e.e
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 16,
						columnNumber: 13
					}, this), p("p", {
						className: "text-xs text-muted-foreground",
						children: e.k
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 19,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: Q,
						lineNumber: 15,
						columnNumber: 11
					}, this), p("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": e.n.value,
						children: p("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" }, void 0, !1, {
							fileName: Q,
							lineNumber: 28,
							columnNumber: 13
						}, this)
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 23,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 14,
					columnNumber: 9
				}, this),
				p("div", {
					className: "flex items-center justify-between",
					children: [p("div", { children: [p("p", {
						className: "text-sm font-medium text-foreground",
						children: e.c
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 33,
						columnNumber: 13
					}, this), p("p", {
						className: "text-xs text-muted-foreground",
						children: e.o
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 36,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: Q,
						lineNumber: 32,
						columnNumber: 11
					}, this), p("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": e.m.value,
						children: p("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" }, void 0, !1, {
							fileName: Q,
							lineNumber: 45,
							columnNumber: 13
						}, this)
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 40,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 31,
					columnNumber: 9
				}, this),
				p("div", { children: [p("label", {
					htmlFor: t,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: e.d
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 49,
					columnNumber: 11
				}, this), p("select", {
					id: t,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						p("option", { children: e.f }, void 0, !1, {
							fileName: Q,
							lineNumber: 59,
							columnNumber: 13
						}, this),
						p("option", { children: e.g }, void 0, !1, {
							fileName: Q,
							lineNumber: 60,
							columnNumber: 13
						}, this),
						p("option", { children: e.h }, void 0, !1, {
							fileName: Q,
							lineNumber: 61,
							columnNumber: 13
						}, this),
						p("option", { children: e.l }, void 0, !1, {
							fileName: Q,
							lineNumber: 62,
							columnNumber: 13
						}, this),
						p("option", { children: e.i }, void 0, !1, {
							fileName: Q,
							lineNumber: 63,
							columnNumber: 13
						}, this),
						p("option", { children: e.b }, void 0, !1, {
							fileName: Q,
							lineNumber: 64,
							columnNumber: 13
						}, this),
						p("option", { children: e.a }, void 0, !1, {
							fileName: Q,
							lineNumber: 65,
							columnNumber: 13
						}, this)
					]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 55,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: Q,
					lineNumber: 48,
					columnNumber: 9
				}, this)
			]
		}, void 0, !0, {
			fileName: Q,
			lineNumber: 13,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: Q,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
function Ye() {
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
function Xe(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var Ze = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/AppProviders.tsx";
function Qe({ children: e, locale: t }) {
	let [n] = l(() => typeof performance < "u" ? performance.now() : 0);
	return o(() => {
		Xe("AppRoot", n);
	}, [n]), a(() => {
		t && (document.documentElement.lang = t);
	}, [t]), a(() => {
		Ye();
	}, []), p(qe, {
		locale: t,
		children: e
	}, void 0, !1, {
		fileName: Ze,
		lineNumber: 35,
		columnNumber: 5
	}, this);
}
var $e = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/scripts/Wrapper.tsx";
function et({ children: e }) {
	return p(Qe, {
		locale: "en",
		children: e
	}, void 0, !1, {
		fileName: $e,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/pages/settings/PreferencesSection.wrapper.tsx";
function tt() {
	return p(et, { children: p(Je, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { tt as default };
