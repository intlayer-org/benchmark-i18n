import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, openBlock as u, ref as d, renderList as f, shallowRef as ee, toDisplayString as p, toValue as m, watch as h } from "vue";
var g = {
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
}, te = Symbol("intlayer"), v = /* @__PURE__ */ new WeakMap(), y = 0, ne = (e) => {
	if (!e) return "base";
	let t = v.get(e);
	if (t) return t;
	y += 1;
	let n = `p${y}`;
	return v.set(e, n), n;
}, re = 256, b = /* @__PURE__ */ new WeakMap(), x = (e) => typeof e == "object" && !!e, ie = (e, t, n) => `${e}_${t}_${ne(n)}`, S = (e, t) => {
	if (!x(e)) return { hit: !1 };
	let n = b.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, C = (e, t, n) => {
	if (!x(e)) return n;
	let r = b.get(e);
	return r || (r = /* @__PURE__ */ new Map(), b.set(e, r)), r.size >= re && r.clear(), r.set(t, n), n;
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
}, O = "default", ae = /[^A-Za-z0-9._&=-]/g, k = /[^A-Za-z0-9._-]/g, oe = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, A = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, oe);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, j = (e) => e === void 0 ? O : typeof e == "string" ? A(e, ae) : Object.keys(e).sort().map((t) => `${A(t, k)}=${A(String(e[t]), k)}`).join("&"), M = (e) => Array.isArray(e) ? e.length === 0 ? [O] : e.map(j) : [j(e)], se = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? O : e[0] ?? "default";
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
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? O : se(M(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ce(e, n, t, s)).map((t) => ue(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, fe = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, N = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? M(n).join(",") : String(n)}`;
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
					type: w,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return I(o, e, t);
	}
}, z = L, B = (e) => L, V = L, pe = L, H = L, U = L, W = (e) => L, G = L, me = (e, t = !0) => [
	R(e ?? _.defaultLocale, t ? _.defaultLocale : void 0),
	z,
	V,
	pe,
	W(e ?? _.defaultLocale),
	G,
	H,
	U
], he = (e, t, n = []) => D(e, {
	...t,
	plugins: n
}), ge = (e, t, n) => {
	let { locale: r, selector: i } = fe(t), a = ie(r ?? _.defaultLocale, N(i), n), o = S(e, a);
	if (o.hit) return o.content;
	let s = n ?? me(r), c = de(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return he(e.content, t, s);
	};
	return c === null ? C(e, a, null) : Array.isArray(c) ? C(e, a, c.map(l)) : C(e, a, l(c));
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
}, _e = {
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
}, ve = L, ye = L, be = L, q = /* @__PURE__ */ new Map(), xe = (e, t = !0) => {
	let n = `${e ?? _.defaultLocale}_${t}`;
	if (q.has(n)) return q.get(n);
	let r = [
		R(e ?? _.defaultLocale, t ? _.defaultLocale : void 0),
		z,
		B(e ?? _.defaultLocale),
		V,
		W(e ?? _.defaultLocale),
		G,
		H,
		U,
		_e,
		ve,
		ye,
		be
	];
	return q.set(n, r), r;
}, J = (e, t) => ge(e, t, xe(typeof t == "object" && t ? t.locale : t)), Y = (e, t) => t.reduce((e, t) => e?.[t], e), X = (e) => typeof e == "object" && !!e, Z = (e) => typeof e == "function" || X(e) && ("render" in e || "setup" in e), Se = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Q = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Z(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
		};
	}
})), Ce = (e) => new Proxy({}, {
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
	let r = a() ? s(te) : void 0, i = c(r?.locale) ? r.locale : d(r?.locale ?? _.defaultLocale), o = t(() => ({
		selector: void 0,
		locale: n === void 0 ? void 0 : m(n)
	})), l = t(() => o.value.locale ?? i.value), u = ee({});
	h([
		() => m(e),
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
			if (Se(s)) return Ce(t(() => Y(u.value, o)));
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
}, we = { class: "mb-12 grid gap-4 md:grid-cols-3" }, Te = { class: "text-sm font-semibold text-foreground" }, Ee = { class: "text-xs text-muted-foreground" }, De = i({
	__name: "CareersBenefits",
	setup(t) {
		let i = $(g), a = [
			{
				label: "Remote-first",
				value: i.workFromAnywhereInThe
			},
			{
				label: i.competitivePay,
				value: i.topOfMarketCompensation
			},
			{
				label: i.openSourceTime,
				value: i.x20TimeForOssContributions
			}
		];
		return (t, i) => (u(), n("div", we, [(u(), n(e, null, f(a, (e) => r("div", {
			key: e.label,
			class: "rounded-lg border border-border bg-card p-4 text-center"
		}, [r("p", Te, p(e.label), 1), r("p", Ee, p(e.value), 1)])), 64))]));
	}
});
export { De as default };
