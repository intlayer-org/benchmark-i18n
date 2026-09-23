import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, openBlock as u, ref as d, renderList as f, shallowRef as ee, toDisplayString as p, toValue as m, watch as te } from "vue";
var h = {
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
}, g = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = d(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	if (Object.assign(o, {
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
			return g({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), e != null) {
		let t = Object(e), n = Object.getPrototypeOf(t);
		for (let r of Object.getOwnPropertyNames(n)) {
			if (r === "constructor" || r in o) continue;
			let n = t[r];
			typeof n == "function" && Object.defineProperty(o, r, {
				value: n.bind(e),
				writable: !0,
				configurable: !0
			});
		}
	}
	return l(o);
}, _ = /* @__PURE__ */ new WeakMap(), v = 0, y = (e) => {
	if (!e) return "base";
	let t = _.get(e);
	if (t) return t;
	v += 1;
	let n = `p${v}`;
	return _.set(e, n), n;
}, ne = 256, b = /* @__PURE__ */ new WeakMap(), x = (e) => typeof e == "object" && !!e, re = (e, t, n) => `${e}_${t}_${y(n)}`, ie = (e, t) => {
	if (!x(e)) return { hit: !1 };
	let n = b.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, S = (e, t, n) => {
	if (!x(e)) return n;
	let r = b.get(e);
	return r || (r = /* @__PURE__ */ new Map(), b.set(e, r)), r.size >= ne && r.clear(), r.set(t, n), n;
}, C = "translation", w = "object", T = "array", E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => E(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: T,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: w,
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
}, D = "default", O = /[^A-Za-z0-9._&=-]/g, k = /[^A-Za-z0-9._-]/g, A = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, j = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, A);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, M = (e) => e === void 0 ? D : typeof e == "string" ? j(e, O) : Object.keys(e).sort().map((t) => `${j(t, k)}=${j(String(e[t]), k)}`).join("&"), N = (e) => Array.isArray(e) ? e.length === 0 ? [D] : e.map(M) : [M(e)], ae = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? D : e[0] ?? "default";
}, oe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, se = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ce = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, le = (e, t) => {
	if (!se(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? D : ae(N(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => oe(e, n, t, s)).map((t) => ce(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ue = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, de = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? N(n).join(",") : String(n)}`;
}).join("|") : "", P = {
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
}, F = (e) => {
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
}, L = (e, t, n) => {
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
}, R = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, z = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? R : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: C,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return L(o, e, t);
	}
}, B = R, V = (e) => R, H = R, fe = R, U = R, W = R, G = (e) => R, K = R, pe = (e, t = !0) => [
	z(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
	B,
	H,
	fe,
	G(e ?? P.defaultLocale),
	K,
	U,
	W
], me = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), he = (e, t, n) => {
	let { locale: r, selector: i } = ue(t), a = re(r ?? P.defaultLocale, de(i), n), o = ie(e, a);
	if (o.hit) return o.content;
	let s = n ?? pe(r), c = le(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return me(e.content, t, s);
	};
	return c === null ? S(e, a, null) : Array.isArray(c) ? S(e, a, c.map(l)) : S(e, a, l(c));
}, ge = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => g({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => {
			let n = t(...e);
			return r(n);
		};
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
}, q = R, _e = R, ve = R, J = /* @__PURE__ */ new Map(), ye = (e, t = !0) => {
	let n = `${e ?? P.defaultLocale}_${t}`;
	if (J.has(n)) return J.get(n);
	let r = [
		z(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
		B,
		V(e ?? P.defaultLocale),
		H,
		G(e ?? P.defaultLocale),
		K,
		U,
		W,
		ge,
		q,
		_e,
		ve
	];
	return J.set(n, r), r;
}, Y = (e, t) => he(e, t, ye(typeof t == "object" && t ? t.locale : t)), be = Symbol("intlayer"), X = (e, t) => t.reduce((e, t) => e?.[t], e), Z = (e) => typeof e == "object" && !!e, Q = (e) => typeof e == "function" || Z(e) && ("render" in e || "setup" in e), xe = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, $ = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Q(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
		};
	}
})), Se = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return $(() => e.value);
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
}), Ce = (e, n) => {
	let r = a() ? s(be) : void 0, i = c(r?.locale) ? r.locale : d(r?.locale ?? P.defaultLocale), o = t(() => ({
		selector: void 0,
		locale: n === void 0 ? void 0 : m(n)
	})), l = t(() => o.value.locale ?? i.value), u = ee({});
	te([
		() => m(e),
		() => l.value,
		() => o.value.selector
	], ([e, t, n]) => {
		u.value = n ? Y(e, {
			...n,
			locale: t
		}) : Y(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let f = (e) => new Proxy({}, {
		get(n, r, i) {
			let a = t(() => X(u.value, e));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(n, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return $(() => a.value);
			let o = e.concat(r), s = X(u.value, o);
			if (s === void 0 || Z(s) && !Q(s)) return f(o);
			if (xe(s)) return Se(t(() => X(u.value, o)));
			if (typeof s == "function") {
				let t = X(u.value, e);
				return t != null && !Object.hasOwn(t, r) ? s.bind(t) : (...e) => X(u.value, o)?.(...e);
			}
			let c = t(() => X(u.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = X(u.value, e);
			return Z(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return f([]);
}, we = i({
	__name: "PreferencesSection",
	setup(e, { expose: t }) {
		t();
		let { g: n, f: r, e: i, i: a, b: o, a: s, h: c, c: l, d: u } = Ce(h), d = {
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
}), Te = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Ee = { class: "rounded-lg border border-border bg-card p-6" }, De = { class: "mb-4 text-lg font-semibold text-foreground" }, Oe = { class: "space-y-4" }, ke = { class: "flex items-center justify-between" }, Ae = { class: "text-sm font-medium text-foreground" }, je = { class: "text-xs text-muted-foreground" }, Me = ["aria-label"], Ne = { class: "flex items-center justify-between" }, Pe = { class: "text-sm font-medium text-foreground" }, Fe = { class: "text-xs text-muted-foreground" }, Ie = ["aria-label"], Le = {
	for: "language",
	class: "mb-1 block text-sm font-medium text-foreground"
}, Re = {
	id: "language",
	class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
};
function ze(t, i, a, o, s, c) {
	return u(), n("section", Ee, [r("h2", De, p(o.title), 1), r("div", Oe, [
		r("div", ke, [r("div", null, [r("p", Ae, p(o.notificationsTitle), 1), r("p", je, p(o.notificationsDescription), 1)]), r("button", {
			type: "button",
			class: "h-6 w-11 rounded-full bg-primary transition-colors",
			"aria-label": o.toggleNotifications
		}, [...i[0] ||= [r("span", { class: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" }, null, -1)]], 8, Me)]),
		r("div", Ne, [r("div", null, [r("p", Pe, p(o.darkModeTitle), 1), r("p", Fe, p(o.darkModeDescription), 1)]), r("button", {
			type: "button",
			class: "h-6 w-11 rounded-full bg-muted transition-colors",
			"aria-label": o.toggleDarkMode
		}, [...i[1] ||= [r("span", { class: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" }, null, -1)]], 8, Ie)]),
		r("div", null, [r("label", Le, p(o.languageLabel), 1), r("select", Re, [(u(!0), n(e, null, f(o.languages, (e) => (u(), n("option", { key: e }, p(e), 1))), 128))])])
	])]);
}
var Be = Te(we, [["render", ze], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/settings/PreferencesSection.vue"]]);
export { Be as default };
