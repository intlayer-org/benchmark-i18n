import { Dynamic as e, effect as t, insert as n, setAttribute as r, template as i } from "solid-js/web";
import { createContext as a, createMemo as o, createUniqueId as s, useContext as c } from "solid-js";
var l = {
	key: "preferences-section",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				m: "Preferences",
				e: "Email Notifications",
				n: "Receive weekly benchmark reports",
				r: "Toggle notifications",
				c: "Dark Mode",
				s: "Use dark color scheme",
				q: "Toggle dark mode",
				d: "Default Language",
				f: "English (en)",
				g: "French (fr)",
				h: "German (de)",
				p: "Spanish (es)",
				j: "Japanese (ja)",
				b: "Chinese Simplified (zh-CN)",
				i: "Italian (it)",
				l: "Portuguese (pt)",
				k: "Korean (ko)",
				o: "Russian (ru)",
				a: "Arabic (ar)"
			},
			fr: {
				m: "Préférences",
				e: "Notifications par email",
				n: "Recevoir des rapports hebdomadaires de benchmark",
				r: "Basculer les notifications",
				c: "Mode sombre",
				s: "Utiliser le schéma de couleurs sombres",
				q: "Basculer le mode sombre",
				d: "Langue par défaut",
				f: "Anglais (en)",
				g: "Français (fr)",
				h: "Allemand (de)",
				p: "Espagnol (es)",
				j: "Japonais (ja)",
				b: "Chinois simplifié (zh-CN)",
				i: "Italien (it)",
				l: "Portugais (pt)",
				k: "Coréen (ko)",
				o: "Russe (ru)",
				a: "Arabe (ar)"
			},
			es: {
				m: "Preferencias",
				e: "Notificaciones por correo electrónico",
				n: "Recibe informes semanales de benchmarks",
				r: "Alternar notificaciones",
				c: "Modo oscuro",
				s: "Usar combinación de colores oscuros",
				q: "Alternar modo oscuro",
				d: "Idioma predeterminado",
				f: "Inglés (en)",
				g: "Francés (fr)",
				h: "Alemán (de)",
				p: "Español (es)",
				j: "Japonés (ja)",
				b: "Chino simplificado (zh-CN)",
				i: "Italiano (it)",
				l: "Portugués (pt)",
				k: "Coreano (ko)",
				o: "Ruso (ru)",
				a: "Árabe (ar)"
			},
			de: {
				m: "Einstellungen",
				e: "E-Mail-Benachrichtigungen",
				n: "Erhalten Sie wöchentliche Benchmark-Berichte",
				r: "Benachrichtigungen umschalten",
				c: "Dunkelmodus",
				s: "Dunkles Farbschema verwenden",
				q: "Dunkelmodus umschalten",
				d: "Standardsprache",
				f: "Englisch (en)",
				g: "Französisch (fr)",
				h: "Deutsch (de)",
				p: "Spanisch (es)",
				j: "Japanisch (ja)",
				b: "Chinesisch (Vereinfacht) (zh-CN)",
				i: "Italienisch (it)",
				l: "Portugiesisch (pt)",
				k: "Koreanisch (ko)",
				o: "Russisch (ru)",
				a: "Arabisch (ar)"
			},
			it: {
				m: "Preferenze",
				e: "Notifiche via email",
				n: "Ricevi rapporti settimanali sui benchmark",
				r: "Attiva/disattiva notifiche",
				c: "Modalità scura",
				s: "Usa lo schema colori scuro",
				q: "Attiva/disattiva modalità scura",
				d: "Lingua predefinita",
				f: "Inglese (en)",
				g: "Francese (fr)",
				h: "Tedesco (de)",
				p: "Spagnolo (es)",
				j: "Giapponese (ja)",
				b: "Cinese semplificato (zh-CN)",
				i: "Italiano (it)",
				l: "Portoghese (pt)",
				k: "Coreano (ko)",
				o: "Russo (ru)",
				a: "Arabo (ar)"
			},
			pt: {
				m: "Preferências",
				e: "Notificações por e-mail",
				n: "Receba relatórios semanais de benchmark",
				r: "Alternar notificações",
				c: "Modo escuro",
				s: "Usar esquema de cores escuro",
				q: "Alternar modo escuro",
				d: "Idioma padrão",
				f: "Inglês (en)",
				g: "Francês (fr)",
				h: "Alemão (de)",
				p: "Espanhol (es)",
				j: "Japonês (ja)",
				b: "Chinês Simplificado (zh-CN)",
				i: "Italiano (it)",
				l: "Português (pt)",
				k: "Coreano (ko)",
				o: "Russo (ru)",
				a: "Árabe (ar)"
			},
			zh: {
				m: "首选项",
				e: "电子邮件通知",
				n: "接收每周基准测试报告",
				r: "切换通知",
				c: "深色模式",
				s: "使用深色方案",
				q: "切换深色模式",
				d: "默认语言",
				f: "英语 (en)",
				g: "法语 (fr)",
				h: "德语 (de)",
				p: "西班牙语 (es)",
				j: "日语 (ja)",
				b: "简体中文 (zh-CN)",
				i: "意大利语 (it)",
				l: "葡萄牙语 (pt)",
				k: "韩语 (ko)",
				o: "俄语 (ru)",
				a: "阿拉伯语 (ar)"
			},
			ja: {
				m: "設定",
				e: "メール通知",
				n: "毎週のベンチマークレポートを受け取る",
				r: "通知を切り替える",
				c: "ダークモード",
				s: "ダークカラースキームを使用する",
				q: "ダークモードを切り替える",
				d: "デフォルトの言語",
				f: "英語 (en)",
				g: "フランス語 (fr)",
				h: "ドイツ語 (de)",
				p: "スペイン語 (es)",
				j: "日本語 (ja)",
				b: "中国語（簡体字）（zh-CN）",
				i: "イタリア語 (it)",
				l: "ポルトガル語 (pt)",
				k: "韓国語 (ko)",
				o: "ロシア語 (ru)",
				a: "アラビア語 (ar)"
			},
			ko: {
				m: "환경 설정",
				e: "이메일 알림",
				n: "주간 벤치마크 보고서 받기",
				r: "알림 전환",
				c: "다크 모드",
				s: "다크 색상 테마 사용",
				q: "다크 모드 전환",
				d: "기본 언어",
				f: "영어 (en)",
				g: "프랑스어 (fr)",
				h: "독일어 (de)",
				p: "스페인어 (es)",
				j: "일본어 (ja)",
				b: "중국어 간체 (zh-CN)",
				i: "이탈리아어 (it)",
				l: "포르투갈어 (pt)",
				k: "한국어 (ko)",
				o: "러시아어 (ko)",
				a: "아랍어 (ar)"
			},
			ru: {
				m: "Настройки",
				e: "Уведомления по электронной почте",
				n: "Получать еженедельные отчеты о бенчмарках",
				r: "Переключить уведомления",
				c: "Темная тема",
				s: "Использовать темную цветовую схему",
				q: "Переключить темную тему",
				d: "Язык по умолчанию",
				f: "Английский (en)",
				g: "Французский (fr)",
				h: "Немецкий (de)",
				p: "Испанский (es)",
				j: "Японский (ja)",
				b: "Китайский упрощенный (zh-CN)",
				i: "Итальянский (it)",
				l: "Португальский (pt)",
				k: "Корейский (ko)",
				o: "Русский (ru)",
				a: "Арабский (ar)"
			}
		}
	}
}, u = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
}, d = (t) => {
	if (typeof t == "string") return t;
	let { type: n, props: r } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let t = [], { children: n } = e.props;
			return Object.keys(n ?? {}).forEach((e) => {
				t.push(d(n?.[e]));
			}), {
				...e,
				props: {
					...e.props,
					children: t
				}
			};
		}
		return {
			...e,
			props: {
				...e.props,
				children: e.props?.children ?? []
			}
		};
	})(t);
	return e({
		component: n ?? "span",
		...r,
		children: r.children
	});
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
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, m = "translation", h = "object", g = "array", _ = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => _(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => _(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: g,
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
					type: h,
					key: r
				}]
			}, i = _(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, v = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, y = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (v(e) && v(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : y(e[r], t[r]));
		return n;
	}
	return e;
}, b = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => y(e, t));
}, x = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, S = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? x : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: m,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return b(o, e, t);
	}
}, C = x, w = x, T = x, E = x, D = (e) => x, O = x, k = (e, t = !0) => [
	S(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	C,
	w,
	T,
	D(e ?? f.defaultLocale),
	O,
	E
], A = (e, t, n = []) => _(e, {
	...t,
	plugins: n
}), j = (e, t, n = k(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return A(e.content, r, n);
}, M = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => u({
		...n,
		value: n.children,
		children: n.children
	})
}, N = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? x : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (e, { plugins: t, ...n }) => u({
		...n,
		value: "[[solid-element]]",
		children: typeof Node < "u" && e instanceof Node ? e : d(e)
	})
}, P = x, F = x, I = x, L = /* @__PURE__ */ new Map(), R = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if (L.has(n)) return L.get(n);
	let r = [
		S(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		C,
		w,
		D(e ?? f.defaultLocale),
		O,
		E,
		M,
		N,
		P,
		F,
		I
	];
	return L.set(n, r), r;
}, z = (e, t) => j(e, t, R(t)), B = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var V = (e = H) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!B) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, H = {
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
}, U = V(H), W = a({
	locale: () => U ?? f?.defaultLocale,
	setLocale: () => null
}), G = (e, t) => {
	let n = c(W) ?? {};
	return o(() => z(e, t ?? n?.locale?.()));
}, K = i("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"></h2><div class=space-y-4><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"></p><p class=\"text-xs text-muted-foreground\"></p></div><button type=button class=\"h-6 w-11 rounded-full bg-primary transition-colors\"><span class=\"block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform\"></span></button></div><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"></p><p class=\"text-xs text-muted-foreground\"></p></div><button type=button class=\"h-6 w-11 rounded-full bg-muted transition-colors\"><span class=\"block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform\"></span></button></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option>");
function q() {
	let e = G(l), i = s();
	return (() => {
		var a = K(), o = a.firstChild, s = o.nextSibling.firstChild, c = s.firstChild, l = c.firstChild, u = l.nextSibling, d = c.nextSibling, f = s.nextSibling, p = f.firstChild, m = p.firstChild, h = m.nextSibling, g = p.nextSibling, _ = f.nextSibling.firstChild, v = _.nextSibling, y = v.firstChild, b = y.nextSibling, x = b.nextSibling, S = x.nextSibling, C = S.nextSibling, w = C.nextSibling, T = w.nextSibling, E = T.nextSibling, D = E.nextSibling, O = D.nextSibling, k = O.nextSibling;
		return n(o, () => e().preferences), n(l, () => e().emailNotifications), n(u, () => e().receiveWeeklyBenchmarkReports), n(m, () => e().darkMode), n(h, () => e().useDarkColorScheme), r(_, "for", i), n(_, () => e().defaultLanguage), r(v, "id", i), n(y, () => e().englishEn), n(b, () => e().frenchFr), n(x, () => e().germanDe), n(S, () => e().spanishEs), n(C, () => e().japaneseJa), n(w, () => e().chineseSimplifiedZhCn), n(T, () => e().italianIt), n(E, () => e().portuguesePt), n(D, () => e().koreanKo), n(O, () => e().russianRu), n(k, () => e().arabicAr), t((t) => {
			var n = e().toggleNotifications.value, i = e().toggleDarkMode.value;
			return n !== t.e && r(d, "aria-label", t.e = n), i !== t.t && r(g, "aria-label", t.t = i), t;
		}, {
			e: void 0,
			t: void 0
		}), a;
	})();
}
export { q as default };
