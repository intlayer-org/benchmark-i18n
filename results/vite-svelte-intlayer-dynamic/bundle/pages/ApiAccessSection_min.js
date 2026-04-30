import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, writable as r } from "svelte/store";
var i = {
	de: () => import("./de-BECZ0d3s.js").then((e) => e.default),
	en: () => import("./en-D4C6kZiV.js").then((e) => e.default),
	es: () => import("./es-7NPQML3T.js").then((e) => e.default),
	fr: () => import("./fr-gfjemxNa.js").then((e) => e.default),
	it: () => import("./it-ChWcBR1r.js").then((e) => e.default),
	ja: () => import("./ja-CCyrFjoq.js").then((e) => e.default),
	ko: () => import("./ko-Bo0AVYc5.js").then((e) => e.default),
	pt: () => import("./pt-CoKrT4jg.js").then((e) => e.default),
	ru: () => import("./ru-DB_HUxVj.js").then((e) => e.default),
	zh: () => import("./zh-BfOuWf56.js").then((e) => e.default)
}, a = Symbol("intlayer"), o = () => t(a), s = {
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
}, c = s?.defaultLocale, l = (() => {
	let { subscribe: e, set: t, update: i } = r({ locale: c });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: c })
	};
})(), u = "translation", d = "object", f = "array", p = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => p(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => p(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: f,
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
					type: d,
					key: r
				}]
			}, i = p(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, m = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, h = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (m(e) && m(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : h(e[r], t[r]));
		return n;
	}
	return e;
}, g = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => h(e, t));
}, _ = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, v = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? _ : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: u,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return g(o, e, t);
	}
}, y = _, b = _, x = _, S = _, C = (e) => _, w = _, T = (e, t = !0) => [
	v(e ?? s.defaultLocale, t ? s.defaultLocale : void 0),
	y,
	b,
	x,
	C(e ?? s.defaultLocale),
	w,
	S
], E = (e, t, n = []) => p(e, {
	...t,
	plugins: n
}), D = (e, t, n = T(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return E(e.content, r, n);
};
function O(t, n) {
	let r = e.prop(n, "Renderer", 8, void 0), i = e.prop(n, "rendererProps", 24, () => ({})), a = e.prop(n, "value", 8, void 0);
	var o = e.comment(), s = e.first_child(o), c = (t) => {
		var n = e.comment(), o = e.first_child(n);
		e.element(o, r, !1, (t, n) => {
			e.attribute_effect(t, () => ({ ...i() }));
			var r = e.text();
			e.template_effect(() => e.set_text(r, a())), e.append(n, r);
		}), e.append(t, n);
	}, l = (t) => {
		r()(t, e.spread_props(i, {
			children: (t, n) => {
				e.next();
				var r = e.text();
				e.template_effect(() => e.set_text(r, a())), e.append(t, r);
			},
			$$slots: { default: !0 }
		}));
	}, u = (t) => {
		var n = e.text();
		e.template_effect(() => e.set_text(n, a())), e.append(t, n);
	};
	e.if(s, (e) => {
		typeof r() == "string" ? e(c) : typeof r() == "function" ? e(l, 1) : e(u, -1);
	}), e.append(t, o);
}
var k = (e) => {
	let t = !!O.prototype?.$destroy, n;
	return n = t ? class extends O {
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
	} : (t) => O(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "toString", {
		value: () => e.value?.toString() ?? "",
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), n;
}, A = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => k({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, j = A, M = _, N = _, P = _, F = /* @__PURE__ */ new Map(), I = (e, t = !0) => {
	let n = `${e ?? s.defaultLocale}_${t}`;
	if (F.has(n)) return F.get(n);
	let r = [
		v(e ?? s.defaultLocale, t ? s.defaultLocale : void 0),
		y,
		b,
		C(e ?? s.defaultLocale),
		w,
		S,
		A,
		j,
		M,
		N,
		P
	];
	return F.set(n, r), r;
}, L = (e, t) => D(e, t, I(t)), R = new Proxy(() => {}, {
	get: (e, t) => {
		if (t === Symbol.toPrimitive) return () => void 0;
		if (t === "toString") return () => "";
		if (t !== "then") return R;
	},
	apply: () => R
});
function z(e, t, r) {
	let i = o();
	return n(n(l, (e) => r ?? i?.locale ?? e.locale), (t, n) => {
		n(new Proxy({
			isLoading: !0,
			error: null
		}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : R }));
		let r = !1;
		return (async () => {
			try {
				let i = e[t];
				if (!i) return;
				let a = await i();
				if (r) return;
				n({
					...L(a, t),
					isLoading: !1,
					error: null
				});
			} catch (e) {
				if (r) return;
				console.error(e), n({
					isLoading: !1,
					error: e
				});
			}
		})(), () => {
			r = !0;
		};
	}, new Proxy({
		isLoading: !0,
		error: null
	}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : R }));
}
var B = e.from_html("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"> </h2> <div><label for=\"settings-api-key\" class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <div class=\"flex gap-2\"><input id=\"settings-api-key\" readonly=\"\" value=\"sk_bench_xxxxxxxxxxxxxxxxxxxx\" class=\"flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground\"/> <button type=\"button\" class=\"rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent\"> </button></div> <p class=\"mt-1 text-xs text-muted-foreground\"> </p></div></section>");
function V(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(s, "$content", a), [a, o] = e.setup_stores(), s = z(i, "api-access-section");
	e.init();
	var c = B(), l = e.child(c), u = e.child(l, !0);
	e.reset(l);
	var d = e.sibling(l, 2), f = e.child(d), p = e.child(f, !0);
	e.reset(f);
	var m = e.sibling(f, 2), h = e.child(m), g = e.sibling(h, 2), _ = e.child(g, !0);
	e.reset(g), e.reset(m);
	var v = e.sibling(m, 2), y = e.child(v, !0);
	e.reset(v), e.reset(d), e.reset(c), e.template_effect(() => {
		e.set_text(u, r().apiAccess), e.set_text(p, r().apiKey), e.set_text(_, r().copy), e.set_text(y, r().useThisKeyToAccess);
	}), e.append(t, c), e.pop(), o();
}
export { V as default };
var e = {
	key: "api-access-section",
	content: {
		useThisKeyToAccess: "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.",
		copy: "Kopieren",
		apiKey: "API-Schlüssel",
		apiAccess: "API-Zugriff"
	}
};
export { e as default };
var e = {
	key: "api-access-section",
	content: {
		useThisKeyToAccess: "Use this key to access the benchmarking API programmatically.",
		copy: "Copy",
		apiKey: "API Key",
		apiAccess: "API Access"
	}
};
export { e as default };
var e = {
	key: "api-access-section",
	content: {
		useThisKeyToAccess: "Use esta clave para acceder a la API de benchmarking mediante programación.",
		copy: "Copiar",
		apiKey: "Clave API",
		apiAccess: "Acceso API"
	}
};
export { e as default };
var e = {
	key: "api-access-section",
	content: {
		useThisKeyToAccess: "Utilisez cette clé pour accéder à l'API de benchmarking par programmation.",
		copy: "Copier",
		apiKey: "Clé d'API",
		apiAccess: "Accès à l'API"
	}
};
export { e as default };
var e = {
	key: "api-access-section",
	content: {
		useThisKeyToAccess: "Usa questa chiave per accedere programmaticamente all'API di benchmarking.",
		copy: "Copia",
		apiKey: "Chiave API",
		apiAccess: "Accesso API"
	}
};
export { e as default };
var e = {
	key: "api-access-section",
	content: {
		useThisKeyToAccess: "このキーを使用して、プログラムでベンチマーク API にアクセスします。",
		copy: "コピー",
		apiKey: "API キー",
		apiAccess: "API アクセス"
	}
};
export { e as default };
var e = {
	key: "api-access-section",
	content: {
		useThisKeyToAccess: "이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오.",
		copy: "복사",
		apiKey: "API 키",
		apiAccess: "API 액세스"
	}
};
export { e as default };
var e = {
	key: "api-access-section",
	content: {
		useThisKeyToAccess: "Use esta chave para acessar a API de benchmarking programaticamente.",
		copy: "Copiar",
		apiKey: "Chave API",
		apiAccess: "Acesso API"
	}
};
export { e as default };
var e = {
	key: "api-access-section",
	content: {
		useThisKeyToAccess: "Используйте этот ключ для программного доступа к API бенчмаркинга.",
		copy: "Копировать",
		apiKey: "API ключ",
		apiAccess: "API доступ"
	}
};
export { e as default };
var e = {
	key: "api-access-section",
	content: {
		useThisKeyToAccess: "使用此密钥以编程方式访问基准测试 API。",
		copy: "复制",
		apiKey: "API 密钥",
		apiAccess: "API 访问"
	}
};
export { e as default };
