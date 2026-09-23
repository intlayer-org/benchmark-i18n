import { computed as e, createElementBlock as t, defineComponent as n, getCurrentInstance as r, h as i, inject as a, isRef as o, markRaw as s, onMounted as c, onUnmounted as l, openBlock as u, ref as d, shallowRef as f, toDisplayString as p, toValue as m, unref as h, watch as g } from "vue";
var _ = {
	key: "theme-toggle",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				d: "Theme: Auto",
				e: "Theme: Dark",
				f: "Theme: Light",
				a: "Theme mode: auto (system). Click to switch to light mode.",
				c: "Theme mode: light. Click to switch to dark mode.",
				b: "Theme mode: dark. Click to switch to auto mode."
			},
			fr: {
				d: "Thème : Auto",
				e: "Thème : Sombre",
				f: "Thème : Clair",
				a: "Mode de thème : auto (système). Cliquez pour passer au mode clair.",
				c: "Mode de thème : clair. Cliquez pour passer au mode sombre.",
				b: "Mode de thème : sombre. Cliquez pour passer au mode auto."
			},
			es: {
				d: "Tema: Automático",
				e: "Tema: Oscuro",
				f: "Tema: Claro",
				a: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
				c: "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
				b: "Modo de tema: oscuro. Haga clic para cambiar al modo automático."
			},
			de: {
				d: "Design: Auto",
				e: "Design: Dunkel",
				f: "Design: Hell",
				a: "Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.",
				c: "Design-Modus: Hell. Klicken Sie hier, um in den dunklen Modus zu wechseln.",
				b: "Design-Modus: Dunkel. Klicken Sie hier, um in den automatischen Modus zu wechseln."
			},
			it: {
				d: "Tema: Auto",
				e: "Tema: Scuro",
				f: "Tema: Chiaro",
				a: "Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.",
				c: "Modalità tema: chiara. Fai clic per passare alla modalità scura.",
				b: "Modalità tema: scura. Fai clic per passare alla modalità automatica."
			},
			pt: {
				d: "Tema: Automático",
				e: "Tema: Escuro",
				f: "Tema: Claro",
				a: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
				c: "Modo de tema: claro. Clique para mudar para o modo escuro.",
				b: "Modo de tema: escuro. Clique para mudar para o modo automático."
			},
			zh: {
				d: "主题：自动",
				e: "主题：深色",
				f: "主题：亮色",
				a: "主题模式：自动（系统）。点击切换到亮色模式。",
				c: "主题模式：浅色。点击切换到深色模式。",
				b: "主题模式：深色。点击切换到自动模式。"
			},
			ja: {
				d: "テーマ：自動",
				e: "テーマ：ダーク",
				f: "テーマ：ライト",
				a: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
				c: "テーマモード：ライト。クリックしてダークモードに切り替えます。",
				b: "テーマモード：ダーク。クリックして自動モードに切り替えます。"
			},
			ko: {
				d: "테마: 자동",
				e: "테마: 다크",
				f: "테마: 라이트",
				a: "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
				c: "테마 모드: 라이트. 다크 모드로 전환하려면 클릭하세요.",
				b: "테마 모드: 다크. 자동 모드로 전환하려면 클릭하세요."
			},
			ru: {
				d: "Тема: Авто",
				e: "Тема: Темная",
				f: "Тема: Светлая",
				a: "Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.",
				c: "Режим темы: светлый. Нажмите, чтобы перейти в темную тему.",
				b: "Режим темы: темный. Нажмите, чтобы перейти в автоматический режим."
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
	}), s(o);
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
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : T(e[r], t[r]));
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
		return s(a);
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
}, W = (e, t) => L(e, t, U(t)), G = Symbol("intlayer"), K = (e, t) => t.reduce((e, t) => e?.[t], e), q = (e) => typeof e == "object" && !!e, J = (e) => typeof e == "function" || q(e) && ("render" in e || "setup" in e), Y = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, X = (e) => s(n({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : J(t) ? i(t) : Array.isArray(t) ? i("span", t) : t;
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
}), Q = (t, n) => {
	let i = r() ? a(G) : void 0, s = o(i?.locale) ? i.locale : d(i?.locale ?? C.defaultLocale), c = e(() => (n === void 0 ? void 0 : m(n)) ?? s.value), l = f({});
	g([() => m(t), () => c.value], ([e, t]) => {
		l.value = W(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (t) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = e(() => K(l.value, t));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return X(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = t.concat(r), s = K(l.value, o);
			if (s === void 0 || q(s) && !J(s)) return u(o);
			if (Y(s)) return Z(e(() => K(l.value, o)));
			let c = e(() => K(l.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let e = K(l.value, t);
			return q(e) ? Reflect.ownKeys(e) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return u([]);
}, $ = ["aria-label", "title"], ee = n({
	__name: "ThemeToggle",
	setup(e) {
		let { d: n, e: r, f: i, a, c: o, b: s } = Q(_), f = d("auto");
		function m() {
			if (typeof window > "u") return "auto";
			let e = window.localStorage.getItem("theme");
			return e === "light" || e === "dark" || e === "auto" ? e : "auto";
		}
		function v(e) {
			let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
			document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
		}
		c(() => {
			let e = m();
			f.value = e, v(e);
		});
		let y = null;
		g(f, (e) => {
			if (e === "auto") {
				let e = window.matchMedia("(prefers-color-scheme: dark)");
				y = () => v("auto"), e.addEventListener("change", y);
			} else y &&= (window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", y), null);
		}, { immediate: !0 }), l(() => {
			y && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", y);
		});
		function b() {
			let e = f.value === "light" ? "dark" : f.value === "dark" ? "auto" : "light";
			f.value = e, v(e), window.localStorage.setItem("theme", e);
		}
		let x = () => f.value === "auto" ? a.value : f.value === "light" ? o.value : s.value;
		return (e, a) => (u(), t("button", {
			type: "button",
			onClick: b,
			"aria-label": x(),
			title: x(),
			class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
		}, p(f.value === "auto" ? h(n) : f.value === "dark" ? h(r) : h(i)), 9, $));
	}
});
export { ee as default };
