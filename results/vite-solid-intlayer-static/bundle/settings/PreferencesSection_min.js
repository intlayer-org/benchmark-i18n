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
	constructor: "constructor",
	length: "length",
	slice: "slice",
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, d = (e) => typeof e == "string" && /^\d+$/.test(e), f = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		if (n === u.value) return t;
		if (n === Symbol.toPrimitive) return (e) => e === "number" ? Number(t) : t ?? "";
		if (n === u.toString) return () => String(t ?? "");
		if (n === u.valueOf) return () => t;
		if (n === u.slice) return Reflect.get(e, n, r);
		if (t != null && typeof n == "string" && n !== u.constructor && n !== u.length && !d(n)) {
			let e = Object(t);
			if (n in e) {
				let r = Reflect.get(e, n);
				return typeof r == "function" ? r.bind(t) : r;
			}
		}
		return Reflect.get(e, n, r);
	} });
}, p = {
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
}, m = {
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
}, h = /* @__PURE__ */ new WeakMap(), g = 0, _ = (e) => {
	if (!e) return "base";
	let t = h.get(e);
	if (t) return t;
	g += 1;
	let n = `p${g}`;
	return h.set(e, n), n;
}, v = 256, y = /* @__PURE__ */ new WeakMap(), b = (e) => typeof e == "object" && !!e, x = (e, t, n) => `${e}_${t}_${_(n)}`, S = (e, t) => {
	if (!b(e)) return { hit: !1 };
	let n = y.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, C = (e, t, n) => {
	if (!b(e)) return n;
	let r = y.get(e);
	return r || (r = /* @__PURE__ */ new Map(), y.set(e, r)), r.size >= v && r.clear(), r.set(t, n), n;
}, w = "translation", T = "object", E = "array", D = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => D(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => D(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: E,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: T,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = D(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = D(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, O = "default", k = /[^A-Za-z0-9._&=-]/g, A = /[^A-Za-z0-9._-]/g, j = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, M = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, j);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, N = (e) => e === void 0 ? O : typeof e == "string" ? M(e, k) : Object.keys(e).sort().map((t) => `${M(t, A)}=${M(String(e[t]), A)}`).join("&"), P = (e) => Array.isArray(e) ? e.length === 0 ? [O] : e.map(N) : [N(e)], ee = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? O : e[0] ?? "default";
}, te = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ne = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, re = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, F = (e, t) => {
	if (!ne(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? O : ee(P(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => te(e, n, t, s)).map((t) => re(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, I = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, L = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? P(n).join(",") : String(n)}`;
}).join("|") : "", R = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, z = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (R(e) && R(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : z(e[r], t[r]));
		return n;
	}
	return e;
}, ie = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => z(e, t));
}, B = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, V = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? B : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: w,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return ie(o, e, t);
	}
}, H = B, ae = (e) => B, U = B, W = B, G = B, K = B, q = (e) => B, J = B, oe = (e, t = !0) => [
	V(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	H,
	U,
	W,
	q(e ?? p.defaultLocale),
	J,
	G,
	K
], se = (e, t, n = []) => D(e, {
	...t,
	plugins: n
}), ce = (e, t, n) => {
	let { locale: r, selector: i } = I(t), a = x(r ?? p.defaultLocale, L(i), n), o = S(e, a);
	if (o.hit) return o.content;
	let s = n ?? oe(r), c = F(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return se(e.content, t, s);
	};
	return c === null ? C(e, a, null) : Array.isArray(c) ? C(e, a, c.map(l)) : C(e, a, l(c));
}, Y = null, X = null;
Y?.catch(() => {}), X?.catch(() => {});
var le = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => f({
		...n,
		value: n.children,
		children: n.children
	})
}, ue = B, de = B;
s(() => Y.then((e) => ({ default: e.MarkdownRenderer }))), s(() => Y.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var fe = B;
s(() => X.then((e) => ({ default: e })));
var pe = B, Z = /* @__PURE__ */ new Map(), me = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		V(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		H,
		ae(e ?? p.defaultLocale),
		U,
		q(e ?? p.defaultLocale),
		J,
		G,
		K,
		le,
		ue,
		de,
		fe,
		pe
	];
	return Z.set(n, r), r;
}, Q = (e, t) => ce(e, t, me(typeof t == "object" && t ? t.locale : t)), he = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var $ = {
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
}, ge = ((e = $) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!he) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})($), _e = i({
	locale: () => ge ?? p?.defaultLocale,
	setLocale: () => null
}), ve = Symbol("LOADABLE_SETTLED_VALUE"), ye = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[ve];
}, be = (e, t) => {
	let n = c(_e) ?? {}, r = a(() => {
		let r = n?.locale?.();
		return Q(ye(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, xe = r("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"></h2><div class=space-y-4><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"></p><p class=\"text-xs text-muted-foreground\"></p></div><button type=button class=\"h-6 w-11 rounded-full bg-primary transition-colors\"><span class=\"block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform\"></span></button></div><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"></p><p class=\"text-xs text-muted-foreground\"></p></div><button type=button class=\"h-6 w-11 rounded-full bg-muted transition-colors\"><span class=\"block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform\"></span></button></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option>");
function Se() {
	let r = be(l), i = o();
	return (() => {
		var a = xe(), o = a.firstChild, s = o.nextSibling.firstChild, c = s.firstChild, l = c.firstChild, u = l.nextSibling, d = c.nextSibling, f = s.nextSibling, p = f.firstChild, m = p.firstChild, h = m.nextSibling, g = p.nextSibling, _ = f.nextSibling.firstChild, v = _.nextSibling, y = v.firstChild, b = y.nextSibling, x = b.nextSibling, S = x.nextSibling, C = S.nextSibling, w = C.nextSibling, T = w.nextSibling, E = T.nextSibling, D = E.nextSibling, O = D.nextSibling, k = O.nextSibling;
		return t(o, () => r().m), t(l, () => r().e), t(u, () => r().n), t(m, () => r().c), t(h, () => r().s), n(_, "for", i), t(_, () => r().d), n(v, "id", i), t(y, () => r().f), t(b, () => r().g), t(x, () => r().h), t(S, () => r().p), t(C, () => r().j), t(w, () => r().b), t(T, () => r().i), t(E, () => r().l), t(D, () => r().k), t(O, () => r().o), t(k, () => r().a), e((e) => {
			var t = r().r.value, i = r().q.value;
			return t !== e.e && n(d, "aria-label", e.e = t), i !== e.t && n(g, "aria-label", e.t = i), e;
		}, {
			e: void 0,
			t: void 0
		}), a;
	})();
}
export { Se as default };
