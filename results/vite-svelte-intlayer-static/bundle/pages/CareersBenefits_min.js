import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, get as r, writable as i } from "svelte/store";
var a = {
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
				topOfMarketCompensation: "Rémunération au sommet du marché",
				competitivePay: "Salaire compétitif",
				workFromAnywhereInThe: "Travaillez de n'importe où dans le monde"
			},
			es: {
				x20TimeForOssContributions: "20% de tiempo para contribuciones de OSS",
				openSourceTime: "Tiempo de código abierto",
				topOfMarketCompensation: "Compensación superior al mercado",
				competitivePay: "Salario competitivo",
				workFromAnywhereInThe: "Trabaje desde cualquier lugar del mundo"
			},
			de: {
				x20TimeForOssContributions: "20 % Zeit für OSS-Beiträge",
				openSourceTime: "Open-Source-Zeit",
				topOfMarketCompensation: "Marktgerechte Vergütung",
				competitivePay: "Wettbewerbsfähige Bezahlung",
				workFromAnywhereInThe: "Arbeiten Sie von überall auf der Welt"
			},
			it: {
				x20TimeForOssContributions: "20% del tempo per i contributi OSS",
				openSourceTime: "Tempo open source",
				topOfMarketCompensation: "Compenso ai vertici del mercato",
				competitivePay: "Retribuzione competitiva",
				workFromAnywhereInThe: "Lavora da qualsiasi parte del mondo"
			},
			pt: {
				x20TimeForOssContributions: "20% do tempo para contribuições OSS",
				openSourceTime: "Tempo de código aberto",
				topOfMarketCompensation: "Remuneração acima do mercado",
				competitivePay: "Salário competitivo",
				workFromAnywhereInThe: "Trabalhe de qualquer lugar do mundo"
			},
			zh: {
				x20TimeForOssContributions: "20% 的时间用于 OSS 贡献",
				openSourceTime: "开源时间",
				topOfMarketCompensation: "市场顶尖的薪酬",
				competitivePay: "具有竞争力的薪酬",
				workFromAnywhereInThe: "在全球任何地方工作"
			},
			ja: {
				x20TimeForOssContributions: "OSS への貢献のための 20% の時間",
				openSourceTime: "オープンソースの時間",
				topOfMarketCompensation: "市場トップレベルの報酬",
				competitivePay: "競争力のある給与",
				workFromAnywhereInThe: "世界中のどこからでも仕事ができます"
			},
			ko: {
				x20TimeForOssContributions: "OSS 기여를 위한 20%의 시간",
				openSourceTime: "오픈 소스 시간",
				topOfMarketCompensation: "업계 최고 수준의 보상",
				competitivePay: "경쟁력 있는 급여",
				workFromAnywhereInThe: "전 세계 어디서나 근무 가능"
			},
			ru: {
				x20TimeForOssContributions: "20% времени на вклад в OSS",
				openSourceTime: "Время на open source",
				topOfMarketCompensation: "Компенсация выше рыночной",
				competitivePay: "Конкурентоспособная зарплата",
				workFromAnywhereInThe: "Работайте из любой точки мира"
			}
		}
	}
}, o = {
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
}, s = o?.defaultLocale, c = (() => {
	let { subscribe: e, set: t, update: r } = i({ locale: s });
	return {
		subscribe: e,
		setLocale: (e) => r((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: s })
	};
})(), l = Symbol("intlayer"), u = () => t(l), d = "default", f = /[^A-Za-z0-9._&=-]/g, p = /[^A-Za-z0-9._-]/g, m = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, h = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, m);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, g = (e) => e === void 0 ? d : typeof e == "string" ? h(e, f) : Object.keys(e).sort().map((t) => `${h(t, p)}=${h(String(e[t]), p)}`).join("&"), _ = (e) => Array.isArray(e) ? e.length === 0 ? [d] : e.map(g) : [g(e)], v = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? d : e[0] ?? "default";
}, y = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ee = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, te = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, b = (e, t) => {
	if (!ee(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? d : v(_(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => y(e, n, t, s)).map((t) => te(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, x = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, S = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? _(n).join(",") : String(n)}`;
}).join("|") : "", C = "translation", w = "object", T = "array", E = (e, t) => {
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
}, D = /* @__PURE__ */ new WeakMap(), O = 0, k = (e) => {
	if (!e) return "base";
	let t = D.get(e);
	if (t) return t;
	O += 1;
	let n = `p${O}`;
	return D.set(e, n), n;
}, A = 256, j = /* @__PURE__ */ new WeakMap(), M = (e) => typeof e == "object" && !!e, ne = (e, t, n) => `${e}_${t}_${k(n)}`, re = (e, t) => {
	if (!M(e)) return { hit: !1 };
	let n = j.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, N = (e, t, n) => {
	if (!M(e)) return n;
	let r = j.get(e);
	return r || (r = /* @__PURE__ */ new Map(), j.set(e, r)), r.size >= A && r.clear(), r.set(t, n), n;
}, P = (e, t = !0) => [
	V(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
	H,
	W,
	G,
	J(e ?? o.defaultLocale),
	Y,
	K,
	q
], F = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), I = (e, t, n) => {
	let { locale: r, selector: i } = x(t), a = ne(r ?? o.defaultLocale, S(i), n), s = re(e, a);
	if (s.hit) return s.content;
	let c = n ?? P(r), l = b(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries
		};
		return F(e.content, t, c);
	};
	return l === null ? N(e, a, null) : Array.isArray(l) ? N(e, a, l.map(u)) : N(e, a, u(l));
}, L = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, R = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (L(e) && L(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : R(e[r], t[r]));
		return n;
	}
	return e;
}, z = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => R(e, t));
}, B = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, V = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? B : {
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
		return z(o, e, t);
	}
}, H = B, U = (e) => B, W = B, G = B, K = B, q = B, J = (e) => B, Y = B;
function X(t, n) {
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
var ie = (e) => {
	let t = !!X.prototype?.$destroy, n;
	if (n = t ? class extends X {
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
	} : (t) => X(t, {
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
}, Z = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => ie({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, ae = Z, oe = B, se = B, ce = B, Q = /* @__PURE__ */ new Map(), le = (e, t = !0) => {
	let n = `${e ?? o.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		V(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
		H,
		U(e ?? o.defaultLocale),
		W,
		J(e ?? o.defaultLocale),
		Y,
		K,
		q,
		Z,
		ae,
		oe,
		se,
		ce
	];
	return Q.set(n, r), r;
}, $ = (e, t) => I(e, t, le(typeof t == "object" && t ? t.locale : t)), ue = (e, t) => {
	let r = u();
	return n([c], ([n]) => {
		let i = r?.locale ?? n.locale;
		return $(e, t ?? i);
	});
}, de = e.from_html("<div class=\"rounded-lg border border-border bg-card p-4 text-center\"><p class=\"text-sm font-semibold text-foreground\"> </p> <p class=\"text-xs text-muted-foreground\"> </p></div>"), fe = e.from_html("<div class=\"mb-12 grid gap-4 md:grid-cols-3\"></div>");
function pe(t, n) {
	e.push(n, !1);
	let i = ue(a), o = [
		{
			label: "Remote-first",
			value: r(i).workFromAnywhereInThe
		},
		{
			label: r(i).competitivePay,
			value: r(i).topOfMarketCompensation
		},
		{
			label: r(i).openSourceTime,
			value: r(i).x20TimeForOssContributions
		}
	];
	e.init();
	var s = fe();
	e.each(s, 5, () => o, (e) => e.label, (t, n) => {
		var r = de(), i = e.child(r), a = e.only_child(i, !0), o = e.sibling(i, 2), s = e.only_child(o, !0);
		e.reset(r), e.template_effect(() => {
			e.set_text(a, e.get(n).label), e.set_text(s, e.get(n).value);
		}), e.append(t, r);
	}), e.reset(s), e.append(t, s), e.pop();
}
export { pe as default };
