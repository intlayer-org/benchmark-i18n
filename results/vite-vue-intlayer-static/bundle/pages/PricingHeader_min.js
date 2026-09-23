import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, createVNode as i, defineComponent as a, getCurrentInstance as o, h as s, inject as c, isRef as l, markRaw as u, openBlock as d, ref as f, shallowRef as ee, toDisplayString as p, toValue as m, unref as h, watch as g } from "vue";
var te = {
	key: "pricing-header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				b: "Simple, Transparent Pricing",
				a: "Choose the plan that fits your team. No hidden fees."
			},
			fr: {
				b: "Tarification simple et transparente",
				a: "Choisissez l'offre adaptée à votre équipe. Sans frais cachés."
			},
			es: {
				b: "Precios simples y transparentes",
				a: "Elija el plan que se adapte a su equipo. Sin cargos ocultos."
			},
			de: {
				b: "Einfache, transparente Preise",
				a: "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren."
			},
			it: {
				b: "Prezzi semplici e trasparenti",
				a: "Scegli il piano più adatto al tuo team. Nessun costo nascosto."
			},
			pt: {
				b: "Preços Simples e Transparentes",
				a: "Escolha o plano que melhor se adapta à sua equipe. Sem taxas ocultas."
			},
			zh: {
				b: "简单、透明的定价",
				a: "选择适合您团队的计划。无隐藏费用。"
			},
			ja: {
				b: "シンプルで透明性の高い料金体系",
				a: "チームに合ったプランをお選びください。隠れた費用はありません。"
			},
			ko: {
				b: "단순하고 투명한 요금제",
				a: "팀에 적합한 플랜을 선택하세요. 숨겨진 수수료가 없습니다."
			},
			ru: {
				b: "Простые и прозрачные цены",
				a: "Выберите план, который подходит вашей команде. Никаких скрытых платежей."
			}
		}
	}
}, _ = {
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
}, ne = Symbol("intlayer"), v = /* @__PURE__ */ new WeakMap(), y = 0, re = (e) => {
	if (!e) return "base";
	let t = v.get(e);
	if (t) return t;
	y += 1;
	let n = `p${y}`;
	return v.set(e, n), n;
}, ie = 256, b = /* @__PURE__ */ new WeakMap(), x = (e) => typeof e == "object" && !!e, ae = (e, t, n) => `${e}_${t}_${re(n)}`, S = (e, t) => {
	if (!x(e)) return { hit: !1 };
	let n = b.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, C = (e, t, n) => {
	if (!x(e)) return n;
	let r = b.get(e);
	return r || (r = /* @__PURE__ */ new Map(), b.set(e, r)), r.size >= ie && r.clear(), r.set(t, n), n;
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
}, O = "default", oe = /[^A-Za-z0-9._&=-]/g, k = /[^A-Za-z0-9._-]/g, se = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, A = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, se);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, j = (e) => e === void 0 ? O : typeof e == "string" ? A(e, oe) : Object.keys(e).sort().map((t) => `${A(t, k)}=${A(String(e[t]), k)}`).join("&"), M = (e) => Array.isArray(e) ? e.length === 0 ? [O] : e.map(j) : [j(e)], ce = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? O : e[0] ?? "default";
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
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? O : ce(M(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => le(e, n, t, s)).map((t) => de(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, pe = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, me = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? M(n).join(",") : String(n)}`;
}).join("|") : "", N = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, P = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (N(e) && N(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : P(e[r], t[r]));
		return n;
	}
	return e;
}, F = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => P(e, t));
}, I = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, L = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? I : {
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
		return F(o, e, t);
	}
}, R = I, z = (e) => I, B = I, he = I, V = I, H = I, U = (e) => I, W = I, ge = (e, t = !0) => [
	L(e ?? _.defaultLocale, t ? _.defaultLocale : void 0),
	R,
	B,
	he,
	U(e ?? _.defaultLocale),
	W,
	V,
	H
], _e = (e, t, n = []) => D(e, {
	...t,
	plugins: n
}), ve = (e, t, n) => {
	let { locale: r, selector: i } = pe(t), a = ae(r ?? _.defaultLocale, me(i), n), o = S(e, a);
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
	return c === null ? C(e, a, null) : Array.isArray(c) ? C(e, a, c.map(l)) : C(e, a, l(c));
}, G = ({ value: e, children: t, additionalProps: n = {} }) => {
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
			return G({
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
		let r = (e) => G({
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
}, be = I, xe = I, Se = I, K = /* @__PURE__ */ new Map(), Ce = (e, t = !0) => {
	let n = `${e ?? _.defaultLocale}_${t}`;
	if (K.has(n)) return K.get(n);
	let r = [
		L(e ?? _.defaultLocale, t ? _.defaultLocale : void 0),
		R,
		z(e ?? _.defaultLocale),
		B,
		U(e ?? _.defaultLocale),
		W,
		V,
		H,
		ye,
		be,
		xe,
		Se
	];
	return K.set(n, r), r;
}, q = (e, t) => ve(e, t, Ce(typeof t == "object" && t ? t.locale : t)), J = (e, t) => t.reduce((e, t) => e?.[t], e), Y = (e) => typeof e == "object" && !!e, X = (e) => typeof e == "function" || Y(e) && ("render" in e || "setup" in e), we = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Z = (e) => u(a({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : X(t) ? s(t) : Array.isArray(t) ? s("span", t) : t;
		};
	}
})), Q = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Z(() => e.value);
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
	let r = o() ? c(ne) : void 0, i = l(r?.locale) ? r.locale : f(r?.locale ?? _.defaultLocale), a = t(() => ({
		selector: void 0,
		locale: n === void 0 ? void 0 : m(n)
	})), s = t(() => a.value.locale ?? i.value), u = ee({});
	g([
		() => m(e),
		() => s.value,
		() => a.value.selector
	], ([e, t, n]) => {
		u.value = n ? q(e, {
			...n,
			locale: t
		}) : q(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let d = (e) => new Proxy({}, {
		get(n, r, i) {
			let a = t(() => J(u.value, e));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(n, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Z(() => a.value);
			let o = e.concat(r), s = J(u.value, o);
			if (s === void 0 || Y(s) && !X(s)) return d(o);
			if (we(s)) return Q(t(() => J(u.value, o)));
			if (typeof s == "function") {
				let t = J(u.value, e);
				return t != null && !Object.hasOwn(t, r) ? s.bind(t) : (...e) => J(u.value, o)?.(...e);
			}
			let c = t(() => J(u.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = J(u.value, e);
			return Y(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return d([]);
}, Te = {
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
}, Ee = { class: "mb-8 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm text-yellow-600 dark:text-yellow-400" }, De = a({
	__name: "MockBanner",
	setup(e) {
		let { a: t } = $(Te);
		return (e, r) => (d(), n("div", Ee, p(h(t)), 1));
	}
}), Oe = { class: "mb-12 text-center" }, ke = { class: "mb-3 text-3xl font-bold text-foreground" }, Ae = { class: "text-muted-foreground" }, je = a({
	__name: "PricingHeader",
	setup(t) {
		let { b: a, a: o } = $(te);
		return (t, s) => (d(), n(e, null, [i(De), r("div", Oe, [r("h1", ke, p(h(a)), 1), r("p", Ae, p(h(o)), 1)])], 64));
	}
});
export { je as default };
