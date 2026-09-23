import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, openBlock as u, ref as d, renderList as f, shallowRef as p, toDisplayString as m, toValue as h, unref as g, watch as _ } from "vue";
var ee = {
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
}, v = {
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
}, te = Symbol("intlayer"), y = /* @__PURE__ */ new WeakMap(), b = 0, ne = (e) => {
	if (!e) return "base";
	let t = y.get(e);
	if (t) return t;
	b += 1;
	let n = `p${b}`;
	return y.set(e, n), n;
}, x = 256, S = /* @__PURE__ */ new WeakMap(), C = (e) => typeof e == "object" && !!e, re = (e, t, n) => `${e}_${t}_${ne(n)}`, ie = (e, t) => {
	if (!C(e)) return { hit: !1 };
	let n = S.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, w = (e, t, n) => {
	if (!C(e)) return n;
	let r = S.get(e);
	return r || (r = /* @__PURE__ */ new Map(), S.set(e, r)), r.size >= x && r.clear(), r.set(t, n), n;
}, ae = "translation", T = "object", oe = "array", E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => E(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: oe,
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
}, M = (e) => e === void 0 ? D : typeof e == "string" ? j(e, O) : Object.keys(e).sort().map((t) => `${j(t, k)}=${j(String(e[t]), k)}`).join("&"), N = (e) => Array.isArray(e) ? e.length === 0 ? [D] : e.map(M) : [M(e)], se = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? D : e[0] ?? "default";
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
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? D : se(N(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ce(e, n, t, s)).map((t) => ue(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, fe = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, pe = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? N(n).join(",") : String(n)}`;
}).join("|") : "", P = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, F = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (P(e) && P(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : F(e[r], t[r]));
		return n;
	}
	return e;
}, I = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => F(e, t));
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
		return I(o, e, t);
	}
}, z = L, B = (e) => L, V = L, me = L, H = L, U = L, W = (e) => L, G = L, he = (e, t = !0) => [
	R(e ?? v.defaultLocale, t ? v.defaultLocale : void 0),
	z,
	V,
	me,
	W(e ?? v.defaultLocale),
	G,
	H,
	U
], ge = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), _e = (e, t, n) => {
	let { locale: r, selector: i } = fe(t), a = re(r ?? v.defaultLocale, pe(i), n), o = ie(e, a);
	if (o.hit) return o.content;
	let s = n ?? he(r), c = de(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return ge(e.content, t, s);
	};
	return c === null ? w(e, a, null) : Array.isArray(c) ? w(e, a, c.map(l)) : w(e, a, l(c));
}, K = ({ value: e, children: t, additionalProps: n = {} }) => {
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
			return K({
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
}, ve = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => K({
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
}, ye = L, be = L, xe = L, q = /* @__PURE__ */ new Map(), Se = (e, t = !0) => {
	let n = `${e ?? v.defaultLocale}_${t}`;
	if (q.has(n)) return q.get(n);
	let r = [
		R(e ?? v.defaultLocale, t ? v.defaultLocale : void 0),
		z,
		B(e ?? v.defaultLocale),
		V,
		W(e ?? v.defaultLocale),
		G,
		H,
		U,
		ve,
		ye,
		be,
		xe
	];
	return q.set(n, r), r;
}, J = (e, t) => _e(e, t, Se(typeof t == "object" && t ? t.locale : t)), Y = (e, t) => t.reduce((e, t) => e?.[t], e), X = (e) => typeof e == "object" && !!e, Z = (e) => typeof e == "function" || X(e) && ("render" in e || "setup" in e), Ce = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Q = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Z(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
		};
	}
})), we = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Q(() => e.value);
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
}), Te = (e, n) => {
	let r = a() ? s(te) : void 0, i = c(r?.locale) ? r.locale : d(r?.locale ?? v.defaultLocale), o = t(() => ({
		selector: void 0,
		locale: n === void 0 ? void 0 : h(n)
	})), l = t(() => o.value.locale ?? i.value), u = p({});
	_([
		() => h(e),
		() => l.value,
		() => o.value.selector
	], ([e, t, n]) => {
		u.value = n ? J(e, {
			...n,
			locale: t
		}) : J(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let f = (e) => new Proxy({}, {
		get(n, r, i) {
			let a = t(() => Y(u.value, e));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(n, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Q(() => a.value);
			let o = e.concat(r), s = Y(u.value, o);
			if (s === void 0 || X(s) && !Z(s)) return f(o);
			if (Ce(s)) return we(t(() => Y(u.value, o)));
			if (typeof s == "function") {
				let t = Y(u.value, e);
				return t != null && !Object.hasOwn(t, r) ? s.bind(t) : (...e) => Y(u.value, o)?.(...e);
			}
			let c = t(() => Y(u.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = Y(u.value, e);
			return X(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return f([]);
}, Ee = { class: "rounded-lg border border-border bg-card p-6" }, De = { class: "mb-4 text-lg font-semibold text-foreground" }, Oe = { class: "space-y-4" }, ke = { class: "flex items-center justify-between" }, Ae = { class: "text-sm font-medium text-foreground" }, je = { class: "text-xs text-muted-foreground" }, Me = ["aria-label"], Ne = { class: "flex items-center justify-between" }, Pe = { class: "text-sm font-medium text-foreground" }, $ = { class: "text-xs text-muted-foreground" }, Fe = ["aria-label"], Ie = {
	for: "language",
	class: "mb-1 block text-sm font-medium text-foreground"
}, Le = {
	id: "language",
	class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
}, Re = i({
	__name: "PreferencesSection",
	setup(t) {
		let { g: i, f: a, e: o, i: s, b: c, a: l, h: d, c: p, d: h } = Te(ee);
		return (t, _) => (u(), n("section", Ee, [r("h2", De, m(g(i)), 1), r("div", Oe, [
			r("div", ke, [r("div", null, [r("p", Ae, m(g(a)), 1), r("p", je, m(g(o)), 1)]), r("button", {
				type: "button",
				class: "h-6 w-11 rounded-full bg-primary transition-colors",
				"aria-label": g(s)
			}, [..._[0] ||= [r("span", { class: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" }, null, -1)]], 8, Me)]),
			r("div", Ne, [r("div", null, [r("p", Pe, m(g(c)), 1), r("p", $, m(g(l)), 1)]), r("button", {
				type: "button",
				class: "h-6 w-11 rounded-full bg-muted transition-colors",
				"aria-label": g(d)
			}, [..._[1] ||= [r("span", { class: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" }, null, -1)]], 8, Fe)]),
			r("div", null, [r("label", Ie, m(g(p)), 1), r("select", Le, [(u(!0), n(e, null, f(g(h), (e) => (u(), n("option", { key: e }, m(e), 1))), 128))])])
		])]));
	}
});
export { Re as default };
