import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useId as o, useMemo as s, useRef as c, useState as l } from "react";
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
}, g = ({ children: e, value: t, additionalProps: n }) => {
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
}, _ = /* @__PURE__ */ new WeakMap(), v = 0, ee = (e) => {
	if (!e) return "base";
	let t = _.get(e);
	if (t) return t;
	v += 1;
	let n = `p${v}`;
	return _.set(e, n), n;
}, te = 256, y = /* @__PURE__ */ new WeakMap(), b = (e) => typeof e == "object" && !!e, ne = (e, t, n) => `${e}_${t}_${ee(n)}`, re = (e, t) => {
	if (!b(e)) return { hit: !1 };
	let n = y.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, x = (e, t, n) => {
	if (!b(e)) return n;
	let r = y.get(e);
	return r || (r = /* @__PURE__ */ new Map(), y.set(e, r)), r.size >= te && r.clear(), r.set(t, n), n;
}, S = "translation", C = "insertion", ie = "object", ae = "array", w = "markdown", T = "html", E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => E(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ae,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ie,
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
}, D = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), O = "default", k = /[^A-Za-z0-9._&=-]/g, A = /[^A-Za-z0-9._-]/g, oe = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, j = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, oe);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, M = (e) => e === void 0 ? O : typeof e == "string" ? j(e, k) : Object.keys(e).sort().map((t) => `${j(t, A)}=${j(String(e[t]), A)}`).join("&"), N = (e) => Array.isArray(e) ? e.length === 0 ? [O] : e.map(M) : [M(e)], se = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? O : e[0] ?? "default";
}, ce = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, le = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ue = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, de = (e, t) => {
	if (!le(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? O : se(N(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ce(e, n, t, s)).map((t) => ue(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, fe = (e) => typeof e == "object" && e ? {
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
}, pe = (e, t, n) => {
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
}, L = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, me = (e) => {
	if (typeof e == "string") return e;
	if (L(e)) return e.nodeType === "html" ? e[T] : e[w];
}, he = (e, t) => {
	if (typeof e == "string") return t;
	if (L(e)) {
		let n = e.nodeType === "html" ? T : w;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, R = (e, t, n, r, i) => {
	let a = he(e, D(me(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? z : {
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
		return pe(o, e, t);
	}
}, V = z, ge = (e) => z, H = z, _e = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: C }], i = e[C], a = {
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
}, U = z, W = z, G = (e) => z, K = z, ve = (e, t = !0) => [
	B(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	V,
	H,
	_e,
	G(e ?? m.defaultLocale),
	K,
	U,
	W
], ye = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), be = (e, t, n) => {
	let { locale: r, selector: i } = fe(t), a = ne(r ?? m.defaultLocale, P(i), n), o = re(e, a);
	if (o.hit) return o.content;
	let s = n ?? ve(r), c = de(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return ye(e.content, t, s);
	};
	return c === null ? x(e, a, null) : Array.isArray(c) ? x(e, a, c.map(l)) : x(e, a, l(c));
}, xe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", q = /\{\{\s*(.*?)\s*\}\}/g, Se = (e, t = {}) => {
	if (!Object.values(t).some(xe)) return {
		isSimple: !0,
		parts: e.replace(q, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(q), r = [];
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
	transform: (e, { plugins: t, ...n }) => g({
		...n,
		value: n.children,
		children: n.children
	})
}, we = z, Te = (t, r) => {
	let i = Se(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ee = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: C }], i = e[C], a = {
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
					let a = Te(i, e);
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
}, De = z, Oe = z, J = /* @__PURE__ */ new Map(), ke = (e, t = !0) => {
	let n = `${e ?? m.defaultLocale}_${t}`;
	if (J.has(n)) return J.get(n);
	let r = [
		B(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
		V,
		ge(e ?? m.defaultLocale),
		H,
		G(e ?? m.defaultLocale),
		K,
		U,
		W,
		Ce,
		we,
		Ee,
		De,
		Oe
	];
	return J.set(n, r), r;
}, Ae = (e, t) => be(e, t, ke(typeof t == "object" && t ? t.locale : t)), Y = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, je = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Y(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, X = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Z = {
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
}, Me = (e = Z) => {
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!X) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Ne = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !X && h.storage.cookies) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Y(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, je(r, e, i));
			} catch {}
		}
	}
}, Q = Me(Z), Pe = (e, t) => Ne(e, {
	...Z,
	isCookieEnabled: t
}), Fe = () => {
	let { locale: e } = i($) ?? {}, t = c(null);
	a(() => {}, []), a(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Ie = ({ children: e }) => (Fe(), e), Le = () => {
	let { locale: e } = i($) ?? {}, t = c(null);
	a(() => {}, []), a(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Re = ({ children: e }) => (Le(), e), ze = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Be = (e, t = m?.locales, n = m?.defaultLocale) => {
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
	locale: Q ?? m?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Ve = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = m ?? {}, [f, p] = l(e ?? Q ?? t ?? u);
	a(() => {
		e && e !== f && p(e);
	}, [e]), a(() => {
		ze();
	}, []);
	let h = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), Pe(e, s);
		}
	}), g = Be(f);
	return d($.Provider, {
		value: {
			locale: g,
			setLocale: h,
			variant: n,
			disableEditor: o
		},
		children: r
	});
}, He = ({ children: e, ...t }) => f(Ve, {
	...t,
	children: [
		d(Ie, {}),
		d(Re, {}),
		e
	]
}), Ue = (e, t) => {
	let { locale: n, variant: r } = i($) ?? {}, a = t ?? n, o = typeof a == "object" && a ? `${a.locale ?? ""}|${P(a)}` : a;
	return s(() => Ae(e, a), [e.key, o]);
};
function We() {
	let e = Ue(p), t = o();
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
function Ge({ children: e }) {
	return d(He, {
		locale: "en",
		children: e
	});
}
function Ke() {
	return d(Ge, { children: d(We, {}) });
}
export { Ke as default };
