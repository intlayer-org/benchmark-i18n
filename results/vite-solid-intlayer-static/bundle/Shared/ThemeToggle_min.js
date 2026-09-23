import { delegateEvents as e, effect as t, insert as n, setAttribute as r, template as i } from "solid-js/web";
import { createContext as a, createEffect as o, createMemo as s, createSignal as c, lazy as l, onMount as ee, useContext as u } from "solid-js";
var te = {
	key: "theme-toggle",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				d: "Theme mode: auto (system). Click to switch to light mode.",
				a: "Theme: Auto",
				b: "Theme: Dark",
				c: "Theme: Light"
			},
			fr: {
				d: "Mode thématique : auto (système). Cliquez pour passer en mode clair.",
				a: "Thème : Auto",
				b: "Thème : Sombre",
				c: "Thème : Clair"
			},
			es: {
				d: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
				a: "Tema: Automático",
				b: "Tema: Oscuro",
				c: "Tema: Claro"
			},
			de: {
				d: "Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.",
				a: "Design: Auto",
				b: "Design: Dunkel",
				c: "Design: Hell"
			},
			it: {
				d: "Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.",
				a: "Tema: Auto",
				b: "Tema: Scuro",
				c: "Tema: Chiaro"
			},
			pt: {
				d: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
				a: "Tema: Automático",
				b: "Tema: Escuro",
				c: "Tema: Claro"
			},
			zh: {
				d: "主题模式：自动（系统）。点击切换到亮色模式。",
				a: "主题：自动",
				b: "主题：深色",
				c: "主题：亮色"
			},
			ja: {
				d: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
				a: "テーマ：自動",
				b: "テーマ：ダーク",
				c: "テーマ：ライト"
			},
			ko: {
				d: "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
				a: "테마: 자동",
				b: "테마: 다크",
				c: "테마: 라이트"
			},
			ru: {
				d: "Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.",
				a: "Тема: Авто",
				b: "Тема: Темная",
				c: "Тема: Светлая"
			}
		}
	}
}, d = {
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
}, f = {
	mode: "prefix-all",
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, ne = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var p = {
	getCookie: (e) => document.cookie.split(";").find((t) => t.trim().startsWith(`${e}=`))?.split("=")[1],
	getLocaleStorage: (e) => localStorage.getItem(e),
	getSessionStorage: (e) => sessionStorage.getItem(e),
	isCookieEnabled: !0,
	setCookieStore: (e, t, n) => cookieStore.set({
		name: e,
		value: t,
		path: n.path,
		domain: n.domain,
		expires: n.expires,
		sameSite: n.sameSite
	}),
	setCookieString: (e, t) => {
		document.cookie = t;
	},
	setSessionStorage: (e, t) => sessionStorage.setItem(e, t),
	setLocaleStorage: (e, t) => localStorage.setItem(e, t)
}, re = ((e = p) => {
	let { locales: t } = d;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ne) for (let t = 0; t < (f.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(f.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})(p), m = a({
	locale: () => re ?? d?.defaultLocale,
	setLocale: () => null
}), h = /* @__PURE__ */ new WeakMap(), g = 0, ie = (e) => {
	if (!e) return "base";
	let t = h.get(e);
	if (t) return t;
	g += 1;
	let n = `p${g}`;
	return h.set(e, n), n;
}, ae = 256, _ = /* @__PURE__ */ new WeakMap(), v = (e) => typeof e == "object" && !!e, y = (e, t, n) => `${e}_${t}_${ie(n)}`, b = (e, t) => {
	if (!v(e)) return { hit: !1 };
	let n = _.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, x = (e, t, n) => {
	if (!v(e)) return n;
	let r = _.get(e);
	return r || (r = /* @__PURE__ */ new Map(), _.set(e, r)), r.size >= ae && r.clear(), r.set(t, n), n;
}, S = "translation", C = "object", w = "array", T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => T(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: w,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: C,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = T(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = T(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, E = "default", oe = /[^A-Za-z0-9._&=-]/g, D = /[^A-Za-z0-9._-]/g, se = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, O = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, se);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, k = (e) => e === void 0 ? E : typeof e == "string" ? O(e, oe) : Object.keys(e).sort().map((t) => `${O(t, D)}=${O(String(e[t]), D)}`).join("&"), A = (e) => Array.isArray(e) ? e.length === 0 ? [E] : e.map(k) : [k(e)], ce = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? E : e[0] ?? "default";
}, le = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ue = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, j = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, M = (e, t) => {
	if (!ue(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? E : ce(A(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => le(e, n, t, s)).map((t) => j(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, N = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, P = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? A(n).join(",") : String(n)}`;
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
					type: S,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return L(o, e, t);
	}
}, B = R, V = (e) => R, H = R, U = R, W = R, G = R, K = (e) => R, q = R, de = (e, t = !0) => [
	z(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
	B,
	H,
	U,
	K(e ?? d.defaultLocale),
	q,
	W,
	G
], fe = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), pe = (e, t, n) => {
	let { locale: r, selector: i } = N(t), a = y(r ?? d.defaultLocale, P(i), n), o = b(e, a);
	if (o.hit) return o.content;
	let s = n ?? de(r), c = M(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return fe(e.content, t, s);
	};
	return c === null ? x(e, a, null) : Array.isArray(c) ? x(e, a, c.map(l)) : x(e, a, l(c));
}, J = {
	constructor: "constructor",
	length: "length",
	slice: "slice",
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, me = (e) => typeof e == "string" && /^\d+$/.test(e), he = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		if (n === J.value) return t;
		if (n === Symbol.toPrimitive) return (e) => e === "number" ? Number(t) : t ?? "";
		if (n === J.toString) return () => String(t ?? "");
		if (n === J.valueOf) return () => t;
		if (n === J.slice) return Reflect.get(e, n, r);
		if (t != null && typeof n == "string" && n !== J.constructor && n !== J.length && !me(n)) {
			let e = Object(t);
			if (n in e) {
				let r = Reflect.get(e, n);
				return typeof r == "function" ? r.bind(t) : r;
			}
		}
		return Reflect.get(e, n, r);
	} });
}, Y = null, X = null;
Y?.catch(() => {}), X?.catch(() => {});
var ge = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => he({
		...n,
		value: n.children,
		children: n.children
	})
}, _e = R, ve = R;
l(() => Y.then((e) => ({ default: e.MarkdownRenderer }))), l(() => Y.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var ye = R;
l(() => X.then((e) => ({ default: e })));
var be = R, Z = /* @__PURE__ */ new Map(), xe = (e, t = !0) => {
	let n = `${e ?? d.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		z(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
		B,
		V(e ?? d.defaultLocale),
		H,
		K(e ?? d.defaultLocale),
		q,
		W,
		G,
		ge,
		_e,
		ve,
		ye,
		be
	];
	return Z.set(n, r), r;
}, Q = (e, t) => pe(e, t, xe(typeof t == "object" && t ? t.locale : t)), Se = Symbol("LOADABLE_SETTLED_VALUE"), Ce = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[Se];
}, we = (e, t) => {
	let n = u(m) ?? {}, r = s(() => {
		let r = n?.locale?.();
		return Q(Ce(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, Te = i("<button type=button class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\">");
function Ee() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function De() {
	let e = we(te), [i, a] = c("auto");
	ee(() => {
		let e = Ee();
		a(e), $(e);
	}), o(() => {
		if (i() !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => $("auto");
		return e.addEventListener("change", t), () => {
			e.removeEventListener("change", t);
		};
	});
	function s() {
		let e = i(), t = e === "light" ? "dark" : e === "dark" ? "auto" : "light";
		a(t), $(t), window.localStorage.setItem("theme", t);
	}
	let l = () => i() === "auto" ? e().d.value : `Theme mode: ${i()}. Click to switch mode.`, u = () => i() === "auto" ? e().a.value : i() === "dark" ? e().b.value : e().c.value;
	return (() => {
		var e = Te();
		return e.$$click = s, n(e, u), t((t) => {
			var n = l(), i = l();
			return n !== t.e && r(e, "aria-label", t.e = n), i !== t.t && r(e, "title", t.t = i), t;
		}, {
			e: void 0,
			t: void 0
		}), e;
	})();
}
e(["click"]);
export { De as default };
