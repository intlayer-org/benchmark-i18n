import { effect as e, insert as t, setAttribute as n, template as r } from "solid-js/web";
import { createContext as i, createMemo as a, createUniqueId as o, lazy as s, useContext as c } from "solid-js";
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
}, d = {
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
}, f = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var p = {
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
}, m = (e = p) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!f) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, h = !1, g, _ = () => typeof window > "u" ? m(p) : (h ||= (g = m(p), !0), g), v = /* @__PURE__ */ new Map(), y = (e, t) => Object.create(new Proxy(e, {
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
}), b = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = v.get(t);
	i || (i = /* @__PURE__ */ new Map(), v.set(t, i));
	let a = i.get(r);
	return a || (a = y(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, x = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, b(t, Array.prototype)), r;
}, S = /* @__PURE__ */ new WeakMap(), C = 0, w = (e) => {
	if (!e) return "base";
	let t = S.get(e);
	if (t) return t;
	C += 1;
	let n = `p${C}`;
	return S.set(e, n), n;
}, T = 256, E = /* @__PURE__ */ new WeakMap(), D = (e) => typeof e == "object" && !!e, O = (e, t, n) => `${e}_${t}_${w(n)}`, k = (e, t) => {
	if (!D(e)) return { hit: !1 };
	let n = E.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, A = (e, t, n) => {
	if (!D(e)) return n;
	let r = E.get(e);
	return r || (r = /* @__PURE__ */ new Map(), E.set(e, r)), r.size >= T && r.clear(), r.set(t, n), n;
}, j = "translation", M = "object", N = "array", P = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), F = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, F);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => F(e, P(t, e, {
		type: N,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: M,
			key: r
		};
		if (t.eager) {
			n[r] = F(e[r], P(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = F(e[r], P(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, I = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, L = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !I(e) || !I(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? L(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, ee = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => L(e, t));
}, R = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, z = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? R : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = ee(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: j,
				key: e
			}]
		});
	}
}, B = R, V = (e) => R, H = R, te = R, U = R, W = R, G = (e) => R, K = R, q = (e, t = !0) => [
	z(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	B,
	V(e ?? u.defaultLocale),
	H,
	te,
	G(e ?? u.defaultLocale),
	K,
	U,
	W
].filter((e) => e !== R), J = (e, t, n = []) => F(e, {
	...t,
	plugins: n
}), Y = /* @__PURE__ */ new WeakSet(), X = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = O(r ?? u.defaultLocale, "", n), o = k(e, a);
	if (o.hit) return o.content;
	let s = n ?? q(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Y.has(e)
		};
		Y.add(e);
		try {
			return J(e.content, t, s);
		} finally {
			t.eager && Y.delete(e);
		}
	};
	return c === null ? A(e, a, null) : Array.isArray(c) ? A(e, a, c.map(l)) : A(e, a, l(c));
}, Z = null, Q = null;
Z?.catch(() => {}), Q?.catch(() => {});
var ne = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => x({
		value: t.children,
		children: t.children
	})
}, re = R, ie = R;
s(() => Z.then((e) => ({ default: e.MarkdownRenderer }))), s(() => Z.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var ae = R;
s(() => Q.then((e) => ({ default: e })));
var oe = R, $ = /* @__PURE__ */ new Map(), se = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		ne,
		z(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		B,
		V(e ?? u.defaultLocale),
		H,
		G(e ?? u.defaultLocale),
		K,
		U,
		W,
		re,
		ie,
		ae,
		oe
	].filter((e) => e !== R);
	return $.set(n, r), r;
}, ce = (e, t) => X(e, t, se(typeof t == "object" && t ? t.locale : t)), le = _, ue = i({
	locale: () => le() ?? u?.defaultLocale,
	setLocale: () => null
}), de = Symbol("LOADABLE_SETTLED_VALUE"), fe = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[de];
}, pe = (e, t) => {
	let n = c(ue) ?? {}, r = a(() => {
		let r = n?.locale?.();
		return ce(fe(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, me = r("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"></h2><div class=space-y-4><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"></p><p class=\"text-xs text-muted-foreground\"></p></div><button type=button class=\"h-6 w-11 rounded-full bg-primary transition-colors\"><span class=\"block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform\"></span></button></div><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"></p><p class=\"text-xs text-muted-foreground\"></p></div><button type=button class=\"h-6 w-11 rounded-full bg-muted transition-colors\"><span class=\"block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform\"></span></button></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option>");
function he() {
	let r = pe(l), i = o();
	return (() => {
		var a = me(), o = a.firstChild, s = o.nextSibling.firstChild, c = s.firstChild, l = c.firstChild, u = l.nextSibling, d = c.nextSibling, f = s.nextSibling, p = f.firstChild, m = p.firstChild, h = m.nextSibling, g = p.nextSibling, _ = f.nextSibling.firstChild, v = _.nextSibling, y = v.firstChild, b = y.nextSibling, x = b.nextSibling, S = x.nextSibling, C = S.nextSibling, w = C.nextSibling, T = w.nextSibling, E = T.nextSibling, D = E.nextSibling, O = D.nextSibling, k = O.nextSibling;
		return t(o, () => r().m), t(l, () => r().e), t(u, () => r().n), t(m, () => r().c), t(h, () => r().s), n(_, "for", i), t(_, () => r().d), n(v, "id", i), t(y, () => r().f), t(b, () => r().g), t(x, () => r().h), t(S, () => r().p), t(C, () => r().j), t(w, () => r().b), t(T, () => r().i), t(E, () => r().l), t(D, () => r().k), t(O, () => r().o), t(k, () => r().a), e((e) => {
			var t = r().r.value, i = r().q.value;
			return t !== e.e && n(d, "aria-label", e.e = t), i !== e.t && n(g, "aria-label", e.t = i), e;
		}, {
			e: void 0,
			t: void 0
		}), a;
	})();
}
export { he as default };
