import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, createTextVNode as i, createVNode as a, defineComponent as o, getCurrentInstance as s, h as c, inject as l, isRef as u, markRaw as d, openBlock as f, ref as p, shallowRef as ee, toDisplayString as m, toValue as h, watch as g } from "vue";
var _ = {
	key: "contact-header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				haveIdeasFoundABug: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at",
				getInTouch: "Get in Touch"
			},
			fr: {
				haveIdeasFoundABug: "Vous avez des idées, trouvé un bug ou voulez proposer un benchmark ? Contactez-nous à",
				getInTouch: "Contactez-nous"
			},
			es: {
				haveIdeasFoundABug: "¿Tiene ideas, encontró un error o quiere contribuir con un benchmark? Póngase en contacto con nosotros en",
				getInTouch: "Ponerse en contacto"
			},
			de: {
				haveIdeasFoundABug: "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter",
				getInTouch: "Kontaktieren Sie uns"
			},
			it: {
				haveIdeasFoundABug: "Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo",
				getInTouch: "Mettiti in contatto"
			},
			pt: {
				haveIdeasFoundABug: "Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em",
				getInTouch: "Entre em contato"
			},
			zh: {
				haveIdeasFoundABug: "有想法、发现了错误或想贡献基准测试？请通过以下方式联系我们",
				getInTouch: "联系我们"
			},
			ja: {
				haveIdeasFoundABug: "アイデアがある、バグを見つけた、またはベンチマークを提供したいですか？こちらまでお問い合わせください：",
				getInTouch: "お問い合わせ"
			},
			ko: {
				haveIdeasFoundABug: "아이디어가 있거나 버그를 발견했거나 벤치마크를 제공하고 싶으신가요? 다음 주소로 문의해 주세요.",
				getInTouch: "연락처"
			},
			ru: {
				haveIdeasFoundABug: "Есть идеи, нашли ошибку или хотите предложить бенчмарк? Свяжитесь с нами по адресу",
				getInTouch: "Связаться с нами"
			}
		}
	}
}, v = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = p(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
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
	}), d(o);
}, y = "translation", b = "object", x = "array", S = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => S(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => S(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: x,
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
			}, i = S(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, C = {
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
}, w = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, T = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (w(e) && w(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : T(e[r], t[r]));
		return n;
	}
	return e;
}, E = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => T(e, t));
}, te = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", D = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, O = (e, t) => te ? D : {
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
		return E(o, e, t);
	}
}, k = D, A = D, j = D, M = D, N = (e) => D, P = D, F = (e, t = !0) => [
	O(e ?? C.defaultLocale, t ? C.defaultLocale : void 0),
	k,
	A,
	j,
	N(e ?? C.defaultLocale),
	P,
	M
], I = (e, t, n = []) => S(e, {
	...t,
	plugins: n
}), L = (e, t, n = F(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return I(e.content, r, n);
}, R = {
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
		return d(a);
	}
}, z = D, B = D, V = D, H = /* @__PURE__ */ new Map(), U = (e, t = !0) => {
	let n = `${e ?? C.defaultLocale}_${t}`;
	if (H.has(n)) return H.get(n);
	let r = [
		O(e ?? C.defaultLocale, t ? C.defaultLocale : void 0),
		k,
		A,
		N(e ?? C.defaultLocale),
		P,
		M,
		R,
		z,
		B,
		V
	];
	return H.set(n, r), r;
}, W = (e, t) => L(e, t, U(t)), G = Symbol("intlayer"), K = (e, t) => t.reduce((e, t) => e?.[t], e), q = (e) => typeof e == "object" && !!e, J = (e) => typeof e == "function" || q(e) && ("render" in e || "setup" in e), Y = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, X = (e) => d(o({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : J(t) ? c(t) : Array.isArray(t) ? c("span", t) : t;
		};
	}
})), Z = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return X(() => e.value);
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
}), Q = (e, n) => {
	let r = s() ? l(G) : void 0, i = u(r?.locale) ? r.locale : p(r?.locale ?? C.defaultLocale), a = t(() => (n === void 0 ? void 0 : h(n)) ?? i.value), o = ee({});
	g([() => h(e), () => a.value], ([e, t]) => {
		o.value = W(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let c = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => K(o.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return X(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let s = e.concat(r), l = K(o.value, s);
			if (l === void 0 || q(l) && !J(l)) return c(s);
			if (Y(l)) return Z(t(() => K(o.value, s)));
			let u = t(() => K(o.value, s));
			return new Proxy(u, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = K(o.value, e);
			return q(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return c([]);
}, ne = {
	key: "mock-banner",
	content: {
		nodeType: "translation",
		translation: {
			en: { a: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service." },
			fr: { a: "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel." },
			es: { a: "⚠️ Esta página contiene datos de prueba solo para fines de benchmarking. No está relacionada con ninguna empresa o servicio real." },
			de: { a: "⚠️ Diese Seite enthält Mock-Daten nur zu Benchmarking-Zwecken. Sie steht in keinem Zusammenhang mit einem echten Unternehmen oder einer echten Dienstleistung." },
			it: { a: "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale." },
			pt: { a: "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhum negócio ou serviço real." },
			zh: { a: "⚠️ 本页面包含仅用于基准测试目的的模拟数据。它与任何真实的业务 or 服务无关。" },
			ja: { a: "⚠️ このページにはベンチマーク目的のモックデータのみが含まれています。実際のビジネスやサービスとは関係ありません。" },
			ko: { a: "⚠️ 이 페이지에는 벤치마킹 목적의 모의 데이터만 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다." },
			ru: { a: "⚠️ Эта страница содержит мок-данные только для целей бенчмаркинга. Она не связана с каким-либо реальным бизнесом или услугой." }
		}
	}
}, re = o({
	__name: "MockBanner",
	setup(e, { expose: t }) {
		t();
		let { a: n } = Q(ne), r = { message: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), $ = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ie = { class: "mb-8 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm text-yellow-600 dark:text-yellow-400" };
function ae(e, t, r, i, a, o) {
	return f(), n("div", ie, m(i.message), 1);
}
var oe = $(re, [["render", ae], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/MockBanner.vue"]]), se = o({
	__name: "ContactHeader",
	setup(e, { expose: t }) {
		t();
		let n = {
			content: Q(_),
			MockBanner: oe
		};
		return Object.defineProperty(n, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), n;
	}
}), ce = { class: "mb-2 text-3xl font-bold text-foreground" }, le = { class: "mb-8 text-muted-foreground" };
function ue(t, o, s, c, l, u) {
	return f(), n(e, null, [
		a(c.MockBanner),
		r("h1", ce, m(c.content.getInTouch), 1),
		r("p", le, [
			i(m(c.content.haveIdeasFoundABug), 1),
			o[0] ||= r("a", {
				href: "mailto:contact@intlayer.org",
				class: "text-primary hover:underline"
			}, " contact@intlayer.org ", -1),
			o[1] ||= i(" . ", -1)
		])
	], 64);
}
var de = $(se, [["render", ue], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/contact/ContactHeader.vue"]]);
export { de as default };
