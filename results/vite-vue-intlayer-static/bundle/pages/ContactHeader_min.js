import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, createTextVNode as i, createVNode as a, defineComponent as o, getCurrentInstance as s, h as c, inject as l, isRef as ee, markRaw as u, openBlock as d, ref as f, shallowRef as p, toDisplayString as m, toValue as h, unref as g, watch as _ } from "vue";
var v = {
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
}, y = {
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
}, te = Symbol("intlayer"), b = /* @__PURE__ */ new WeakMap(), x = 0, ne = (e) => {
	if (!e) return "base";
	let t = b.get(e);
	if (t) return t;
	x += 1;
	let n = `p${x}`;
	return b.set(e, n), n;
}, re = 256, S = /* @__PURE__ */ new WeakMap(), C = (e) => typeof e == "object" && !!e, w = (e, t, n) => `${e}_${t}_${ne(n)}`, ie = (e, t) => {
	if (!C(e)) return { hit: !1 };
	let n = S.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, T = (e, t, n) => {
	if (!C(e)) return n;
	let r = S.get(e);
	return r || (r = /* @__PURE__ */ new Map(), S.set(e, r)), r.size >= re && r.clear(), r.set(t, n), n;
}, ae = "translation", E = "object", D = "array", O = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => O(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => O(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: D,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: E,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = O(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = O(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, k = "default", oe = /[^A-Za-z0-9._&=-]/g, A = /[^A-Za-z0-9._-]/g, se = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, j = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, se);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, M = (e) => e === void 0 ? k : typeof e == "string" ? j(e, oe) : Object.keys(e).sort().map((t) => `${j(t, A)}=${j(String(e[t]), A)}`).join("&"), N = (e) => Array.isArray(e) ? e.length === 0 ? [k] : e.map(M) : [M(e)], ce = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? k : e[0] ?? "default";
}, le = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ue = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, de = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, fe = (e, t) => {
	if (!ue(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? k : ce(N(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => le(e, n, t, s)).map((t) => de(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, pe = (e) => typeof e == "object" && e ? {
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
					type: ae,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return L(o, e, t);
	}
}, B = R, me = (e) => R, V = R, he = R, H = R, U = R, W = (e) => R, G = R, ge = (e, t = !0) => [
	z(e ?? y.defaultLocale, t ? y.defaultLocale : void 0),
	B,
	V,
	he,
	W(e ?? y.defaultLocale),
	G,
	H,
	U
], _e = (e, t, n = []) => O(e, {
	...t,
	plugins: n
}), ve = (e, t, n) => {
	let { locale: r, selector: i } = pe(t), a = w(r ?? y.defaultLocale, P(i), n), o = ie(e, a);
	if (o.hit) return o.content;
	let s = n ?? ge(r), c = fe(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return _e(e.content, t, s);
	};
	return c === null ? T(e, a, null) : Array.isArray(c) ? T(e, a, c.map(l)) : T(e, a, l(c));
}, K = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = f(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
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
	return u(o);
}, ye = {
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
		return u(a);
	}
}, be = R, xe = R, Se = R, q = /* @__PURE__ */ new Map(), Ce = (e, t = !0) => {
	let n = `${e ?? y.defaultLocale}_${t}`;
	if (q.has(n)) return q.get(n);
	let r = [
		z(e ?? y.defaultLocale, t ? y.defaultLocale : void 0),
		B,
		me(e ?? y.defaultLocale),
		V,
		W(e ?? y.defaultLocale),
		G,
		H,
		U,
		ye,
		be,
		xe,
		Se
	];
	return q.set(n, r), r;
}, J = (e, t) => ve(e, t, Ce(typeof t == "object" && t ? t.locale : t)), Y = (e, t) => t.reduce((e, t) => e?.[t], e), X = (e) => typeof e == "object" && !!e, Z = (e) => typeof e == "function" || X(e) && ("render" in e || "setup" in e), we = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Q = (e) => u(o({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Z(t) ? c(t) : Array.isArray(t) ? c("span", t) : t;
		};
	}
})), Te = (e) => new Proxy({}, {
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
}), $ = (e, n) => {
	let r = s() ? l(te) : void 0, i = ee(r?.locale) ? r.locale : f(r?.locale ?? y.defaultLocale), a = t(() => ({
		selector: void 0,
		locale: n === void 0 ? void 0 : h(n)
	})), o = t(() => a.value.locale ?? i.value), c = p({});
	_([
		() => h(e),
		() => o.value,
		() => a.value.selector
	], ([e, t, n]) => {
		c.value = n ? J(e, {
			...n,
			locale: t
		}) : J(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (e) => new Proxy({}, {
		get(n, r, i) {
			let a = t(() => Y(c.value, e));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(n, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Q(() => a.value);
			let o = e.concat(r), s = Y(c.value, o);
			if (s === void 0 || X(s) && !Z(s)) return u(o);
			if (we(s)) return Te(t(() => Y(c.value, o)));
			if (typeof s == "function") {
				let t = Y(c.value, e);
				return t != null && !Object.hasOwn(t, r) ? s.bind(t) : (...e) => Y(c.value, o)?.(...e);
			}
			let l = t(() => Y(c.value, o));
			return new Proxy(l, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = Y(c.value, e);
			return X(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return u([]);
}, Ee = {
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
}, De = { class: "mb-8 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm text-yellow-600 dark:text-yellow-400" }, Oe = o({
	__name: "MockBanner",
	setup(e) {
		let { a: t } = $(Ee);
		return (e, r) => (d(), n("div", De, m(g(t)), 1));
	}
}), ke = { class: "mb-2 text-3xl font-bold text-foreground" }, Ae = { class: "mb-8 text-muted-foreground" }, je = o({
	__name: "ContactHeader",
	setup(t) {
		let o = $(v);
		return (t, s) => (d(), n(e, null, [
			a(Oe),
			r("h1", ke, m(g(o).getInTouch), 1),
			r("p", Ae, [
				i(m(g(o).haveIdeasFoundABug), 1),
				s[0] ||= r("a", {
					href: "mailto:contact@intlayer.org",
					class: "text-primary hover:underline"
				}, " contact@intlayer.org ", -1),
				s[1] ||= i(" . ", -1)
			])
		], 64));
	}
});
export { je as default };
