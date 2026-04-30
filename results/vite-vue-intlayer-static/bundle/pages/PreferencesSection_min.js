import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, openBlock as u, ref as d, renderList as f, shallowRef as p, toDisplayString as m, toValue as h, watch as g } from "vue";
var _ = {
	key: "preferences-section",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				g: "Preferences",
				f: "Email Notifications",
				e: "Receive weekly benchmark reports",
				i: "Toggle notifications",
				b: "Dark Mode",
				a: "Use dark color scheme",
				h: "Toggle dark mode",
				c: "Default Language",
				d: [
					"English (en)",
					"French (fr)",
					"Spanish (es)",
					"German (de)",
					"Italian (it)",
					"Portuguese (pt)",
					"Chinese (zh)",
					"Japanese (ja)",
					"Korean (ko)",
					"Russian (ru)"
				]
			},
			fr: {
				g: "Préférences",
				f: "Notifications e-mail",
				e: "Recevoir les rapports hebdomadaires",
				i: "Activer/désactiver les notifications",
				b: "Mode sombre",
				a: "Utiliser le thème sombre",
				h: "Basculer le mode sombre",
				c: "Langue par défaut",
				d: [
					"Anglais (en)",
					"Français (fr)",
					"Espagnol (es)",
					"Allemand (de)",
					"Italien (it)",
					"Portugais (pt)",
					"Chinois (zh)",
					"Japonais (ja)",
					"Coréen (ko)",
					"Russe (ru)"
				]
			},
			es: {
				g: "Preferencias",
				f: "Notificaciones por correo electrónico",
				e: "Recibir informes semanales de benchmark",
				i: "Alternar notificaciones",
				b: "Modo oscuro",
				a: "Usar esquema de colores oscuros",
				h: "Alternar modo oscuro",
				c: "Idioma predeterminado",
				d: [
					"Inglés (en)",
					"Francés (fr)",
					"Español (es)",
					"Alemán (de)",
					"Italiano (it)",
					"Portugués (pt)",
					"Chino (zh)",
					"Japonés (ja)",
					"Coreano (ko)",
					"Ruso (ru)"
				]
			},
			de: {
				g: "Einstellungen",
				f: "E-Mail-Benachrichtigungen",
				e: "Erhalten Sie wöchentliche Benchmark-Berichte",
				i: "Benachrichtigungen umschalten",
				b: "Dunkelmodus",
				a: "Dunkles Farbschema verwenden",
				h: "Dunkelmodus umschalten",
				c: "Standardsprache",
				d: [
					"Englisch (en)",
					"Französisch (fr)",
					"Spanisch (es)",
					"Deutsch (de)",
					"Italienisch (it)",
					"Portugiesisch (pt)",
					"Chinesisch (zh)",
					"Japanisch (ja)",
					"Koreanisch (ko)",
					"Russisch (ru)"
				]
			},
			it: {
				g: "Preferenze",
				f: "Notifiche e-mail",
				e: "Ricevi rapporti settimanali sui benchmark",
				i: "Attiva/disattiva notifiche",
				b: "Modalità scura",
				a: "Usa schema colori scuri",
				h: "Attiva/disattiva modalità scura",
				c: "Lingua predefinita",
				d: [
					"Inglese (en)",
					"Francese (fr)",
					"Spagnolo (es)",
					"Tedesco (de)",
					"Italiano (it)",
					"Portoghese (pt)",
					"Cinese (zh)",
					"Giapponese (ja)",
					"Coreano (ko)",
					"Russo (ru)"
				]
			},
			pt: {
				g: "Preferências",
				f: "Notificações por e-mail",
				e: "Receber relatórios semanais de benchmark",
				i: "Alternar notificações",
				b: "Modo escuro",
				a: "Usar esquema de cores escuro",
				h: "Alternar modo escuro",
				c: "Idioma padrão",
				d: [
					"Inglês (en)",
					"Francês (fr)",
					"Espanhol (es)",
					"Alemão (de)",
					"Italiano (it)",
					"Português (pt)",
					"Chinês (zh)",
					"Japonês (ja)",
					"Coreano (ko)",
					"Russo (ru)"
				]
			},
			zh: {
				g: "偏好设置",
				f: "邮件通知",
				e: "接收每周基准报告",
				i: "切换通知",
				b: "深色模式",
				a: "使用深色配色方案",
				h: "切换深色模式",
				c: "默认语言",
				d: [
					"英语 (en)",
					"法语 (fr)",
					"西班牙语 (es)",
					"德语 (de)",
					"意大利语 (it)",
					"葡萄牙语 (pt)",
					"中文 (zh)",
					"日语 (ja)",
					"韩语 (ko)",
					"俄语 (ru)"
				]
			},
			ja: {
				g: "設定",
				f: "メール通知",
				e: "毎週のベンチマークレポートを受け取る",
				i: "通知を切り替える",
				b: "ダークモード",
				a: "ダークカラーの配色を使用する",
				h: "ダークモードを切り替える",
				c: "デフォルトの言語",
				d: [
					"英語 (en)",
					"フランス語 (fr)",
					"スペイン語 (es)",
					"ドイツ語 (de)",
					"イタリア語 (it)",
					"ポルトガル語 (pt)",
					"中国語 (zh)",
					"日本語 (ja)",
					"韓国語 (ko)",
					"ロシア語 (ru)"
				]
			},
			ko: {
				g: "환경 설정",
				f: "이메일 알림",
				e: "주간 벤치마크 보고서 받기",
				i: "알림 전환",
				b: "다크 모드",
				a: "어두운 색상 테마 사용",
				h: "다크 모드 전환",
				c: "기본 언어",
				d: [
					"영어 (en)",
					"프랑스어 (fr)",
					"스페인어 (es)",
					"독일어 (de)",
					"이탈리아어 (it)",
					"포르투갈어 (pt)",
					"중국어 (zh)",
					"일본어 (ja)",
					"한국어 (ko)",
					"러시아어 (ko)"
				]
			},
			ru: {
				g: "Настройки",
				f: "Электронные уведомления",
				e: "Получать еженедельные отчеты о бенчмарках",
				i: "Переключить уведомления",
				b: "Темная тема",
				a: "Использовать темную цветовую схему",
				h: "Переключить темную тему",
				c: "Язык по умолчанию",
				d: [
					"Английский (en)",
					"Французский (fr)",
					"Испанский (es)",
					"Немецкий (de)",
					"Итальянский (it)",
					"Португальский (pt)",
					"Китайский (zh)",
					"Японский (ja)",
					"Корейский (ko)",
					"Русский (ru)"
				]
			}
		}
	}
}, v = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = d(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	return Object.setPrototypeOf(o, String.prototype), Object.assign(o, {
		render: a,
		toString: () => String(r.value ?? ""),
		valueOf: () => r.value,
		[Symbol.toPrimitive]: () => r.value,
		toJSON: () => r.value,
		get raw() {
			return r.value;
		},
		set raw(e) {
			r.value = e;
		},
		get value() {
			return r.value;
		},
		use(e) {
			return v({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), l(o);
}, y = "translation", b = "object", ee = "array", x = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => x(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => x(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ee,
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
					type: b,
					key: r
				}]
			}, i = x(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, S = {
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
}, C = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, w = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (C(e) && C(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : w(e[r], t[r]));
		return n;
	}
	return e;
}, T = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => w(e, t));
}, E = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, D = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? E : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: y,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return T(o, e, t);
	}
}, O = E, k = E, te = E, A = E, j = (e) => E, M = E, N = (e, t = !0) => [
	D(e ?? S.defaultLocale, t ? S.defaultLocale : void 0),
	O,
	k,
	te,
	j(e ?? S.defaultLocale),
	M,
	A
], P = (e, t, n = []) => x(e, {
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
}, I = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => v({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => r(t(...e));
		Object.setPrototypeOf(a, Object.getPrototypeOf(i));
		for (let e of Object.getOwnPropertyNames(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		return l(a);
	}
}, L = E, R = E, z = E, B = /* @__PURE__ */ new Map(), V = (e, t = !0) => {
	let n = `${e ?? S.defaultLocale}_${t}`;
	if (B.has(n)) return B.get(n);
	let r = [
		D(e ?? S.defaultLocale, t ? S.defaultLocale : void 0),
		O,
		k,
		j(e ?? S.defaultLocale),
		M,
		A,
		I,
		L,
		R,
		z
	];
	return B.set(n, r), r;
}, H = (e, t) => F(e, t, V(t)), U = Symbol("intlayer"), W = (e, t) => t.reduce((e, t) => e?.[t], e), G = (e) => typeof e == "object" && !!e, K = (e) => typeof e == "function" || G(e) && ("render" in e || "setup" in e), q = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, J = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : K(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
		};
	}
})), Y = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return J(() => e.value);
		if (r == null) return n === Symbol.toPrimitive || n === "toString" ? () => "" : void 0;
		let i = r[n];
		return typeof i == "function" ? i.bind(r) : i;
	},
	ownKeys() {
		let t = e.value;
		return typeof t == "object" && t ? Reflect.ownKeys(t) : [];
	},
	getOwnPropertyDescriptor() {
		return {
			enumerable: !0,
			configurable: !0
		};
	}
}), X = (e, n) => {
	let r = a() ? s(U) : void 0, i = c(r?.locale) ? r.locale : d(r?.locale ?? S.defaultLocale), o = t(() => (n === void 0 ? void 0 : h(n)) ?? i.value), l = p({});
	g([() => h(e), () => o.value], ([e, t]) => {
		l.value = H(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => W(l.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return J(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), s = W(l.value, o);
			if (s === void 0 || G(s) && !K(s)) return u(o);
			if (q(s)) return Y(t(() => W(l.value, o)));
			let c = t(() => W(l.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = W(l.value, e);
			return G(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return u([]);
}, Z = i({
	__name: "PreferencesSection",
	setup(e, { expose: t }) {
		t();
		let { g: n, f: r, e: i, i: a, b: o, a: s, h: c, c: l, d: u } = X(_), d = {
			title: n,
			notificationsTitle: r,
			notificationsDescription: i,
			toggleNotifications: a,
			darkModeTitle: o,
			darkModeDescription: s,
			toggleDarkMode: c,
			languageLabel: l,
			languages: u
		};
		return Object.defineProperty(d, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), d;
	}
}), Q = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ne = { class: "rounded-lg border border-border bg-card p-6" }, re = { class: "mb-4 text-lg font-semibold text-foreground" }, ie = { class: "space-y-4" }, ae = { class: "flex items-center justify-between" }, oe = { class: "text-sm font-medium text-foreground" }, $ = { class: "text-xs text-muted-foreground" }, se = ["aria-label"], ce = { class: "flex items-center justify-between" }, le = { class: "text-sm font-medium text-foreground" }, ue = { class: "text-xs text-muted-foreground" }, de = ["aria-label"], fe = {
	for: "language",
	class: "mb-1 block text-sm font-medium text-foreground"
}, pe = {
	id: "language",
	class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
};
function me(t, i, a, o, s, c) {
	return u(), n("section", ne, [r("h2", re, m(o.title), 1), r("div", ie, [
		r("div", ae, [r("div", null, [r("p", oe, m(o.notificationsTitle), 1), r("p", $, m(o.notificationsDescription), 1)]), r("button", {
			type: "button",
			class: "h-6 w-11 rounded-full bg-primary transition-colors",
			"aria-label": o.toggleNotifications
		}, [...i[0] ||= [r("span", { class: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" }, null, -1)]], 8, se)]),
		r("div", ce, [r("div", null, [r("p", le, m(o.darkModeTitle), 1), r("p", ue, m(o.darkModeDescription), 1)]), r("button", {
			type: "button",
			class: "h-6 w-11 rounded-full bg-muted transition-colors",
			"aria-label": o.toggleDarkMode
		}, [...i[1] ||= [r("span", { class: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" }, null, -1)]], 8, de)]),
		r("div", null, [r("label", fe, m(o.languageLabel), 1), r("select", pe, [(u(!0), n(e, null, f(o.languages, (e) => (u(), n("option", { key: e }, m(e), 1))), 128))])])
	])]);
}
var he = Q(Z, [["render", me], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/settings/PreferencesSection.vue"]]);
export { he as default };
