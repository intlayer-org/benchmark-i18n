import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, writable as r } from "svelte/store";
var i = {
	key: "preferences-section",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				arabicAr: "Arabic (ar)",
				chineseSimplifiedZhCn: "Chinese Simplified (zh-CN)",
				japaneseJa: "Japanese (ja)",
				spanishEs: "Spanish (es)",
				germanDe: "German (de)",
				frenchFr: "French (fr)",
				englishEn: "English (en)",
				defaultLanguage: "Default Language",
				toggleDarkMode: "Toggle dark mode",
				useDarkColorScheme: "Use dark color scheme",
				darkMode: "Dark Mode",
				toggleNotifications: "Toggle notifications",
				receiveWeeklyBenchmarkReports: "Receive weekly benchmark reports",
				emailNotifications: "Email Notifications",
				preferences: "Preferences"
			},
			fr: {
				arabicAr: "Arabe (ar)",
				chineseSimplifiedZhCn: "Chinois simplifié (zh-CN)",
				japaneseJa: "Japonais (ja)",
				spanishEs: "Espagnol (es)",
				germanDe: "Allemand (de)",
				frenchFr: "Français (fr)",
				englishEn: "Anglais (en)",
				defaultLanguage: "Langue par défaut",
				toggleDarkMode: "Basculer en mode sombre",
				useDarkColorScheme: "Utiliser le thème sombre",
				darkMode: "Mode sombre",
				toggleNotifications: "Basculer les notifications",
				receiveWeeklyBenchmarkReports: "Recevoir les rapports hebdomadaires",
				emailNotifications: "Notifications par email",
				preferences: "Préférences"
			},
			es: {
				arabicAr: "Árabe (ar)",
				chineseSimplifiedZhCn: "Chino simplificado (zh-CN)",
				japaneseJa: "Japonés (ja)",
				spanishEs: "Español (es)",
				germanDe: "Alemán (de)",
				frenchFr: "Francés (fr)",
				englishEn: "Inglés (en)",
				defaultLanguage: "Idioma predeterminado",
				toggleDarkMode: "Alternar modo oscuro",
				useDarkColorScheme: "Usar combinación de colores oscuros",
				darkMode: "Modo oscuro",
				toggleNotifications: "Alternar notificaciones",
				receiveWeeklyBenchmarkReports: "Recibir informes semanales de benchmarks",
				emailNotifications: "Notificaciones por correo electrónico",
				preferences: "Preferencias"
			},
			de: {
				arabicAr: "Arabisch (ar)",
				chineseSimplifiedZhCn: "Chinesisch (vereinfacht) (zh-CN)",
				japaneseJa: "Japanisch (ja)",
				spanishEs: "Spanisch (es)",
				germanDe: "Deutsch (de)",
				frenchFr: "Französisch (fr)",
				englishEn: "Englisch (en)",
				defaultLanguage: "Standardsprache",
				toggleDarkMode: "Dunkelmodus umschalten",
				useDarkColorScheme: "Dunkles Farbschema verwenden",
				darkMode: "Dunkelmodus",
				toggleNotifications: "Benachrichtigungen umschalten",
				receiveWeeklyBenchmarkReports: "Wöchentliche Benchmark-Berichte erhalten",
				emailNotifications: "E-Mail-Benachrichtigungen",
				preferences: "Einstellungen"
			},
			it: {
				arabicAr: "Arabo (ar)",
				chineseSimplifiedZhCn: "Cinese semplificato (zh-CN)",
				japaneseJa: "Giapponese (ja)",
				spanishEs: "Spagnolo (es)",
				germanDe: "Tedesco (de)",
				frenchFr: "Francese (fr)",
				englishEn: "Inglese (en)",
				defaultLanguage: "Lingua predefinita",
				toggleDarkMode: "Attiva/disattiva modalità scura",
				useDarkColorScheme: "Usa combinazione di colori scuri",
				darkMode: "Modalità scura",
				toggleNotifications: "Attiva/disattiva notifiche",
				receiveWeeklyBenchmarkReports: "Ricevi rapporti settimanali sui benchmark",
				emailNotifications: "Notifiche email",
				preferences: "Preferenze"
			},
			pt: {
				arabicAr: "Árabe (ar)",
				chineseSimplifiedZhCn: "Chinês Simplificado (zh-CN)",
				japaneseJa: "Japonês (ja)",
				spanishEs: "Espanhol (es)",
				germanDe: "Alemão (de)",
				frenchFr: "Francês (fr)",
				englishEn: "Inglês (en)",
				defaultLanguage: "Idioma padrão",
				toggleDarkMode: "Alternar modo escuro",
				useDarkColorScheme: "Usar esquema de cores escuras",
				darkMode: "Modo Escuro",
				toggleNotifications: "Alternar notificações",
				receiveWeeklyBenchmarkReports: "Receber relatórios semanais de benchmark",
				emailNotifications: "Notificações por e-mail",
				preferences: "Preferências"
			},
			zh: {
				arabicAr: "阿拉伯语 (ar)",
				chineseSimplifiedZhCn: "简体中文 (zh-CN)",
				japaneseJa: "日语 (ja)",
				spanishEs: "西班牙语 (es)",
				germanDe: "德语 (de)",
				frenchFr: "法语 (fr)",
				englishEn: "英语 (en)",
				defaultLanguage: "默认语言",
				toggleDarkMode: "切换深色模式",
				useDarkColorScheme: "使用深色配色方案",
				darkMode: "深色模式",
				toggleNotifications: "切换通知",
				receiveWeeklyBenchmarkReports: "接收每周基准报告",
				emailNotifications: "电子邮件通知",
				preferences: "偏好设置"
			},
			ja: {
				arabicAr: "アラビア語 (ar)",
				chineseSimplifiedZhCn: "中国語（簡体字）(zh-CN)",
				japaneseJa: "日本語 (ja)",
				spanishEs: "スペイン語 (es)",
				germanDe: "ドイツ語 (de)",
				frenchFr: "フランス語 (fr)",
				englishEn: "英語 (en)",
				defaultLanguage: "デフォルトの言語",
				toggleDarkMode: "ダークモードを切り替える",
				useDarkColorScheme: "ダークカラー構成を使用する",
				darkMode: "ダークモード",
				toggleNotifications: "通知を切り替える",
				receiveWeeklyBenchmarkReports: "毎週のベンチマークレポートを受け取る",
				emailNotifications: "メール通知",
				preferences: "設定"
			},
			ko: {
				arabicAr: "아랍어 (ar)",
				chineseSimplifiedZhCn: "중국어 간체 (zh-CN)",
				japaneseJa: "일본어 (ja)",
				spanishEs: "스페인어 (es)",
				germanDe: "독일어 (de)",
				frenchFr: "프랑스어 (fr)",
				englishEn: "영어 (en)",
				defaultLanguage: "기본 언어",
				toggleDarkMode: "어두운 모드 전환",
				useDarkColorScheme: "어두운 색 구성표 사용",
				darkMode: "어두운 모드",
				toggleNotifications: "알림 전환",
				receiveWeeklyBenchmarkReports: "주간 벤치마크 보고서 받기",
				emailNotifications: "이메일 알림",
				preferences: "환경 설정"
			},
			ru: {
				arabicAr: "Арабский (ar)",
				chineseSimplifiedZhCn: "Китайский упрощенный (zh-CN)",
				japaneseJa: "Японский (ja)",
				spanishEs: "Испанский (es)",
				germanDe: "Немецкий (de)",
				frenchFr: "Французский (fr)",
				englishEn: "Английский (en)",
				defaultLanguage: "Язык по умолчанию",
				toggleDarkMode: "Переключить темный режим",
				useDarkColorScheme: "Использовать темную цветовую схему",
				darkMode: "Темный режим",
				toggleNotifications: "Переключить уведомления",
				receiveWeeklyBenchmarkReports: "Получать еженедельные отчеты о бенчмарках",
				emailNotifications: "Email-уведомления",
				preferences: "Предпочтения"
			}
		}
	}
}, a = {
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
}, o = a?.defaultLocale, s = (() => {
	let { subscribe: e, set: t, update: i } = r({ locale: o });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: o })
	};
})(), c = Symbol("intlayer"), l = () => t(c), u = "default", d = /[^A-Za-z0-9._&=-]/g, f = /[^A-Za-z0-9._-]/g, p = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, m = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, p);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, h = (e) => e === void 0 ? u : typeof e == "string" ? m(e, d) : Object.keys(e).sort().map((t) => `${m(t, f)}=${m(String(e[t]), f)}`).join("&"), g = (e) => Array.isArray(e) ? e.length === 0 ? [u] : e.map(h) : [h(e)], _ = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? u : e[0] ?? "default";
}, v = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, y = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, b = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, x = (e, t) => {
	if (!y(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? u : _(g(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => v(e, n, t, s)).map((t) => b(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, S = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, C = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? g(n).join(",") : String(n)}`;
}).join("|") : "", w = "translation", T = "object", E = "array", D = (e, t) => {
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
}, O = /* @__PURE__ */ new WeakMap(), k = 0, A = (e) => {
	if (!e) return "base";
	let t = O.get(e);
	if (t) return t;
	k += 1;
	let n = `p${k}`;
	return O.set(e, n), n;
}, j = 256, M = /* @__PURE__ */ new WeakMap(), N = (e) => typeof e == "object" && !!e, P = (e, t, n) => `${e}_${t}_${A(n)}`, F = (e, t) => {
	if (!N(e)) return { hit: !1 };
	let n = M.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, I = (e, t, n) => {
	if (!N(e)) return n;
	let r = M.get(e);
	return r || (r = /* @__PURE__ */ new Map(), M.set(e, r)), r.size >= j && r.clear(), r.set(t, n), n;
}, L = (e, t = !0) => [
	W(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
	G,
	q,
	J,
	Z(e ?? a.defaultLocale),
	ee,
	Y,
	X
], R = (e, t, n = []) => D(e, {
	...t,
	plugins: n
}), z = (e, t, n) => {
	let { locale: r, selector: i } = S(t), o = P(r ?? a.defaultLocale, C(i), n), s = F(e, o);
	if (s.hit) return s.content;
	let c = n ?? L(r), l = x(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries
		};
		return R(e.content, t, c);
	};
	return l === null ? I(e, o, null) : Array.isArray(l) ? I(e, o, l.map(u)) : I(e, o, u(l));
}, B = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, V = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (B(e) && B(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : V(e[r], t[r]));
		return n;
	}
	return e;
}, H = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => V(e, t));
}, U = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, W = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? U : {
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
		return H(o, e, t);
	}
}, G = U, K = (e) => U, q = U, J = U, Y = U, X = U, Z = (e) => U, ee = U;
function Q(t, n) {
	e.push(n, !1);
	let r = e.prop(n, "Renderer", 8, void 0), i = e.prop(n, "rendererProps", 24, () => ({})), a = e.prop(n, "value", 8, void 0), o = e.mutable_source(), s = e.mutable_source(!1);
	e.legacy_pre_effect(() => e.deep_read_state(r()), () => {
		typeof r()?.then == "function" ? (e.set(s, !0), r().then((t) => {
			e.set(o, t), e.set(s, !1);
		})) : (e.set(o, r()), e.set(s, !1));
	}), e.legacy_pre_effect_reset(), e.init();
	var c = e.comment(), l = e.first_child(c), u = (e) => {}, d = (t) => {
		var n = e.comment(), r = e.first_child(n);
		e.element(r, () => e.get(o), !1, (t, n) => {
			e.attribute_effect(t, () => ({ ...i() }));
			var r = e.text();
			e.template_effect(() => e.set_text(r, a())), e.append(n, r);
		}), e.append(t, n);
	}, f = (t) => {
		e.get(o)(t, e.spread_props(i, {
			children: (t, n) => {
				e.next();
				var r = e.text();
				e.template_effect(() => e.set_text(r, a())), e.append(t, r);
			},
			$$slots: { default: !0 }
		}));
	}, p = (t) => {
		var n = e.text();
		e.template_effect(() => e.set_text(n, a())), e.append(t, n);
	};
	e.if(l, (t) => {
		e.get(s) ? t(u) : typeof e.get(o) == "string" ? t(d, 1) : typeof e.get(o) == "function" ? t(f, 2) : t(p, -1);
	}), e.append(t, c), e.pop();
}
var te = (e) => {
	let t = !!Q.prototype?.$destroy, n;
	if (n = t ? class extends Q {
		constructor(t) {
			super({
				...t,
				props: {
					...t.props,
					Renderer: e.component,
					rendererProps: e.props,
					value: e.value
				}
			});
		}
	} : (t) => Q(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "toString", {
		value: () => String(e.value ?? ""),
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "valueOf", {
		value: () => e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, Symbol.toPrimitive, {
		value: () => e.value ?? "",
		writable: !0,
		configurable: !0
	}), e.value !== null && e.value !== void 0) {
		let t = Object(e.value), r = Object.getPrototypeOf(t);
		for (let i of Object.getOwnPropertyNames(r)) {
			if (i === "constructor" || i in n) continue;
			let r = t[i];
			typeof r == "function" && Object.defineProperty(n, i, {
				value: r.bind(e.value),
				writable: !0,
				configurable: !0
			});
		}
	}
	return e.additionalProps && Object.assign(n, e.additionalProps), n;
}, ne = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => te({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, re = ne, ie = U, ae = U, oe = U, $ = /* @__PURE__ */ new Map(), se = (e, t = !0) => {
	let n = `${e ?? a.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		W(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
		G,
		K(e ?? a.defaultLocale),
		q,
		Z(e ?? a.defaultLocale),
		ee,
		Y,
		X,
		ne,
		re,
		ie,
		ae,
		oe
	];
	return $.set(n, r), r;
}, ce = (e, t) => z(e, t, se(typeof t == "object" && t ? t.locale : t)), le = (e, t) => {
	let r = l();
	return n([s], ([n]) => {
		let i = r?.locale ?? n.locale;
		return ce(e, t ?? i);
	});
}, ue = e.from_html("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"> </h2> <div class=\"space-y-4\"><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"> </p> <p class=\"text-xs text-muted-foreground\"> </p></div> <button type=\"button\" class=\"h-6 w-11 rounded-full bg-primary transition-colors\"><span class=\"block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform\"></span></button></div> <div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"> </p> <p class=\"text-xs text-muted-foreground\"> </p></div> <button type=\"button\" class=\"h-6 w-11 rounded-full bg-muted transition-colors\"><span class=\"block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform\"></span></button></div> <div><label for=\"settings-default-language\" class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <select id=\"settings-default-language\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none\"><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option></select></div></div></section>");
function de(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(s, "$content", a), [a, o] = e.setup_stores(), s = le(i);
	e.init();
	var c = ue(), l = e.child(c), u = e.only_child(l, !0), d = e.sibling(l, 2), f = e.child(d), p = e.child(f), m = e.child(p), h = e.only_child(m, !0), g = e.sibling(m, 2), _ = e.only_child(g, !0);
	e.reset(p);
	var v = e.sibling(p, 2);
	e.reset(f);
	var y = e.sibling(f, 2), b = e.child(y), x = e.child(b), S = e.only_child(x, !0), C = e.sibling(x, 2), w = e.only_child(C, !0);
	e.reset(b);
	var T = e.sibling(b, 2);
	e.reset(y);
	var E = e.sibling(y, 2), D = e.child(E), O = e.only_child(D, !0), k = e.sibling(D, 2), A = e.child(k), j = e.only_child(A, !0), M = {}, N = e.sibling(A), P = e.only_child(N, !0), F = {}, I = e.sibling(N), L = e.only_child(I, !0), R = {}, z = e.sibling(I), B = e.only_child(z, !0), V = {}, H = e.sibling(z), U = e.only_child(H, !0), W = {}, G = e.sibling(H), K = e.only_child(G, !0), q = {}, J = e.sibling(G), Y = e.only_child(J, !0), X = {};
	e.reset(k), e.reset(E), e.reset(d), e.reset(c), e.template_effect(() => {
		e.set_text(u, r().preferences), e.set_text(h, r().emailNotifications), e.set_text(_, r().receiveWeeklyBenchmarkReports), e.set_attribute(v, "aria-label", r().toggleNotifications), e.set_text(S, r().darkMode), e.set_text(w, r().useDarkColorScheme), e.set_attribute(T, "aria-label", r().toggleDarkMode), e.set_text(O, r().defaultLanguage), e.set_text(j, r().englishEn), M !== (M = r().englishEn) && (A.__value = M), e.set_text(P, r().frenchFr), F !== (F = r().frenchFr) && (N.__value = F), e.set_text(L, r().germanDe), R !== (R = r().germanDe) && (I.__value = R), e.set_text(B, r().spanishEs), V !== (V = r().spanishEs) && (z.__value = V), e.set_text(U, r().japaneseJa), W !== (W = r().japaneseJa) && (H.__value = W), e.set_text(K, r().chineseSimplifiedZhCn), q !== (q = r().chineseSimplifiedZhCn) && (G.__value = q), e.set_text(Y, r().arabicAr), X !== (X = r().arabicAr) && (J.__value = X);
	}), e.append(t, c), e.pop(), o();
}
export { de as default };
