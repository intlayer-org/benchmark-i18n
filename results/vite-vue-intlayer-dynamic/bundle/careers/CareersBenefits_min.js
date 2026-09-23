import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, openBlock as u, ref as d, renderList as f, shallowRef as p, toDisplayString as m, toValue as h, watch as g } from "vue";
var _ = {
	key: "careers-benefits",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				x20TimeForOssContributions: "20% time for OSS contributions",
				openSourceTime: "Open source time",
				topOfMarketCompensation: "Top-of-market compensation",
				competitivePay: "Competitive pay",
				workFromAnywhereInThe: "Work from anywhere in the world"
			},
			fr: {
				x20TimeForOssContributions: "20 % du temps pour les contributions OSS",
				openSourceTime: "Temps open source",
				topOfMarketCompensation: "Rémunération haut de gamme",
				competitivePay: "Salaire compétitif",
				workFromAnywhereInThe: "Travailler d'où vous voulez dans le monde"
			},
			es: {
				x20TimeForOssContributions: "20% del tiempo para contribuciones OSS",
				openSourceTime: "Tiempo de código abierto",
				topOfMarketCompensation: "Compensación líder en el mercado",
				competitivePay: "Salario competitivo",
				workFromAnywhereInThe: "Trabaja desde cualquier lugar del mundo"
			},
			de: {
				x20TimeForOssContributions: "20 % der Zeit für OSS-Beiträge",
				openSourceTime: "Open-Source-Zeit",
				topOfMarketCompensation: "Marktführende Vergütung",
				competitivePay: "Wettbewerbsfähige Bezahlung",
				workFromAnywhereInThe: "Arbeiten Sie von überall auf der Welt"
			},
			it: {
				x20TimeForOssContributions: "20% del tempo per contributi OSS",
				openSourceTime: "Tempo open source",
				topOfMarketCompensation: "Compensi ai vertici del mercato",
				competitivePay: "Retribuzione competitiva",
				workFromAnywhereInThe: "Lavora da qualsiasi parte del mondo"
			},
			pt: {
				x20TimeForOssContributions: "20% do tempo para contribuições OSS",
				openSourceTime: "Tempo de código aberto",
				topOfMarketCompensation: "Compensação no topo do mercado",
				competitivePay: "Pagamento competitivo",
				workFromAnywhereInThe: "Trabalhe de qualquer lugar do mundo"
			},
			zh: {
				x20TimeForOssContributions: "20% 的时间用于 OSS 贡献",
				openSourceTime: "开源时间",
				topOfMarketCompensation: "市场顶级的薪酬",
				competitivePay: "有竞争力的薪酬",
				workFromAnywhereInThe: "可以在世界任何地方工作"
			},
			ja: {
				x20TimeForOssContributions: "OSS貢献のための20％の時間",
				openSourceTime: "オープンソースの時間",
				topOfMarketCompensation: "市場トップクラスの報酬",
				competitivePay: "競争力のある給与",
				workFromAnywhereInThe: "世界中のどこからでも働ける"
			},
			ko: {
				x20TimeForOssContributions: "OSS 기여를 위한 20%의 시간",
				openSourceTime: "오픈 소스 시간",
				topOfMarketCompensation: "업계 최고 수준의 보상",
				competitivePay: "경쟁력 있는 급여",
				workFromAnywhereInThe: "세계 어디서나 근무 가능"
			},
			ru: {
				x20TimeForOssContributions: "20% времени на вклад в OSS",
				openSourceTime: "Время на открытый исходный код",
				topOfMarketCompensation: "Вознаграждение выше рыночного",
				competitivePay: "Конкурентоспособная оплата",
				workFromAnywhereInThe: "Работайте из любой точки мира"
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
}, D = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, O = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? D : {
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
		return l(a);
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
}, W = (e, t) => L(e, t, U(t)), G = Symbol("intlayer"), K = (e, t) => t.reduce((e, t) => e?.[t], e), q = (e) => typeof e == "object" && !!e, J = (e) => typeof e == "function" || q(e) && ("render" in e || "setup" in e), Y = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, X = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : J(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
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
	let r = a() ? s(G) : void 0, i = c(r?.locale) ? r.locale : d(r?.locale ?? C.defaultLocale), o = t(() => (n === void 0 ? void 0 : h(n)) ?? i.value), l = p({});
	g([() => h(e), () => o.value], ([e, t]) => {
		l.value = W(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => K(l.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return X(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), s = K(l.value, o);
			if (s === void 0 || q(s) && !J(s)) return u(o);
			if (Y(s)) return Z(t(() => K(l.value, o)));
			let c = t(() => K(l.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = K(l.value, e);
			return q(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return u([]);
}, $ = i({
	__name: "CareersBenefits",
	setup(e, { expose: t }) {
		t();
		let n = Q(_), r = {
			content: n,
			benefits: [
				{
					label: "Remote-first",
					value: n.workFromAnywhereInThe
				},
				{
					label: n.competitivePay,
					value: n.topOfMarketCompensation
				},
				{
					label: n.openSourceTime,
					value: n.x20TimeForOssContributions
				}
			]
		};
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), ee = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, te = { class: "mb-12 grid gap-4 md:grid-cols-3" }, ne = { class: "text-sm font-semibold text-foreground" }, re = { class: "text-xs text-muted-foreground" };
function ie(t, i, a, o, s, c) {
	return u(), n("div", te, [(u(), n(e, null, f(o.benefits, (e) => r("div", {
		key: e.label,
		class: "rounded-lg border border-border bg-card p-4 text-center"
	}, [r("p", ne, m(e.label), 1), r("p", re, m(e.value), 1)])), 64))]);
}
var ae = ee($, [["render", ie], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app/src/components/pages/careers/CareersBenefits.vue"]]);
export { ae as default };
