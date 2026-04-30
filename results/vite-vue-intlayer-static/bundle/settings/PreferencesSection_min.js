import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, openBlock as u, ref as d, renderList as f, shallowRef as ee, toDisplayString as p, toValue as m, watch as h } from "vue";
var g = {
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
}, _ = ({ value: e, children: t, additionalProps: n = {} }) => {
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
			return _({
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
}, te = "translation", v = "object", y = "array", b = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => b(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => b(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: y,
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
					type: v,
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
}, x = {
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
}, S = (e) => {
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
}, w = (e, t, n) => {
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
}, T = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", E = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, D = (e, t) => T ? E : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: te,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return w(o, e, t);
	}
}, O = E, k = E, A = E, j = E, M = (e) => E, N = E, P = (e, t = !0) => [
	D(e ?? x.defaultLocale, t ? x.defaultLocale : void 0),
	O,
	k,
	A,
	M(e ?? x.defaultLocale),
	N,
	j
], F = (e, t, n = []) => b(e, {
	...t,
	plugins: n
}), I = (e, t, n = P(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return F(e.content, r, n);
}, L = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => _({
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
}, R = E, z = E, B = E, V = /* @__PURE__ */ new Map(), H = (e, t = !0) => {
	let n = `${e ?? x.defaultLocale}_${t}`;
	if (V.has(n)) return V.get(n);
	let r = [
		D(e ?? x.defaultLocale, t ? x.defaultLocale : void 0),
		O,
		k,
		M(e ?? x.defaultLocale),
		N,
		j,
		L,
		R,
		z,
		B
	];
	return V.set(n, r), r;
}, U = (e, t) => I(e, t, H(t)), W = Symbol("intlayer"), G = (e, t) => t.reduce((e, t) => e?.[t], e), K = (e) => typeof e == "object" && !!e, q = (e) => typeof e == "function" || K(e) && ("render" in e || "setup" in e), J = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Y = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : q(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
		};
	}
})), X = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Y(() => e.value);
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
}), Z = (e, n) => {
	let r = a() ? s(W) : void 0, i = c(r?.locale) ? r.locale : d(r?.locale ?? x.defaultLocale), o = t(() => (n === void 0 ? void 0 : m(n)) ?? i.value), l = ee({});
	h([() => m(e), () => o.value], ([e, t]) => {
		l.value = U(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => G(l.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Y(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), s = G(l.value, o);
			if (s === void 0 || K(s) && !q(s)) return u(o);
			if (J(s)) return X(t(() => G(l.value, o)));
			let c = t(() => G(l.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = G(l.value, e);
			return K(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return u([]);
}, Q = i({
	__name: "PreferencesSection",
	setup(e, { expose: t }) {
		t();
		let { g: n, f: r, e: i, i: a, b: o, a: s, h: c, c: l, d: u } = Z(g), d = {
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
}), ne = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, re = { class: "rounded-lg border border-border bg-card p-6" }, ie = { class: "mb-4 text-lg font-semibold text-foreground" }, ae = { class: "space-y-4" }, oe = { class: "flex items-center justify-between" }, $ = { class: "text-sm font-medium text-foreground" }, se = { class: "text-xs text-muted-foreground" }, ce = ["aria-label"], le = { class: "flex items-center justify-between" }, ue = { class: "text-sm font-medium text-foreground" }, de = { class: "text-xs text-muted-foreground" }, fe = ["aria-label"], pe = {
	for: "language",
	class: "mb-1 block text-sm font-medium text-foreground"
}, me = {
	id: "language",
	class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
};
function he(t, i, a, o, s, c) {
	return u(), n("section", re, [r("h2", ie, p(o.title), 1), r("div", ae, [
		r("div", oe, [r("div", null, [r("p", $, p(o.notificationsTitle), 1), r("p", se, p(o.notificationsDescription), 1)]), r("button", {
			type: "button",
			class: "h-6 w-11 rounded-full bg-primary transition-colors",
			"aria-label": o.toggleNotifications
		}, [...i[0] ||= [r("span", { class: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" }, null, -1)]], 8, ce)]),
		r("div", le, [r("div", null, [r("p", ue, p(o.darkModeTitle), 1), r("p", de, p(o.darkModeDescription), 1)]), r("button", {
			type: "button",
			class: "h-6 w-11 rounded-full bg-muted transition-colors",
			"aria-label": o.toggleDarkMode
		}, [...i[1] ||= [r("span", { class: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" }, null, -1)]], 8, fe)]),
		r("div", null, [r("label", pe, p(o.languageLabel), 1), r("select", me, [(u(!0), n(e, null, f(o.languages, (e) => (u(), n("option", { key: e }, p(e), 1))), 128))])])
	])]);
}
var ge = ne(Q, [["render", he], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/settings/PreferencesSection.vue"]]);
export { ge as default };
