import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { createContext as r, createMemo as i, lazy as a, useContext as o } from "solid-js";
var s = {
	key: "careers-header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				a: "Careers",
				b: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
			},
			fr: {
				a: "Carrières",
				b: "Rejoignez notre mission pour améliorer l'écosystème de l'internationalisation. Nous sommes une équipe en télétravail qui valorise l'impact, la transparence et l'apprentissage continu."
			},
			es: {
				a: "Carreras",
				b: "Únase a nuestra misión de mejorar el ecosistema de internacionalización. Somos un equipo que prioriza el trabajo remoto que valora el impacto, la transparencia y el aprendizaje continuo."
			},
			de: {
				a: "Karriere",
				b: "Schließen Sie sich unserer Mission an, das Ökosystem der Internationalisierung zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt."
			},
			it: {
				a: "Carriere",
				b: "Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team remote-first che valorizza l'impatto, la trasparenza e l'apprendimento continuo."
			},
			pt: {
				a: "Carreiras",
				b: "Junte-se à nossa missão para melhorar o ecossistema de internacionalização. Somos uma equipe que prioriza o trabalho remoto e valoriza o impacto, a transparência e o aprendizado contínuo."
			},
			zh: {
				a: "职业生涯",
				b: "加入我们的使命，改善国际化生态系统。我们是一支远程优先的团队，重视影响力、透明度和持续学习。"
			},
			ja: {
				a: "採用情報",
				b: "国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、インパクト、透明性、そして継続的な学習を大切にするリモートファーストのチームです。"
			},
			ko: {
				a: "채용",
				b: "국제화 생태계를 개선하려는 우리의 사명에 동참하십시오. 우리는 영향력, 투명성 및 지속적인 학습을 가치 있게 여기는 원격 우선 팀입니다."
			},
			ru: {
				a: "Вакансии",
				b: "Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы — команда, ориентированная на удаленную работу, которая ценит вклад, прозрачность и непрерывное обучение."
			}
		}
	}
}, c = {
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
}, l = {
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
}, u = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var d = {
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
}, f = ((e = d) => {
	let { locales: t } = c;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!u) for (let t = 0; t < (l.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(l.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})(d), p = r({
	locale: () => f ?? c?.defaultLocale,
	setLocale: () => null
}), m = /* @__PURE__ */ new WeakMap(), h = 0, ee = (e) => {
	if (!e) return "base";
	let t = m.get(e);
	if (t) return t;
	h += 1;
	let n = `p${h}`;
	return m.set(e, n), n;
}, g = 256, _ = /* @__PURE__ */ new WeakMap(), v = (e) => typeof e == "object" && !!e, y = (e, t, n) => `${e}_${t}_${ee(n)}`, b = (e, t) => {
	if (!v(e)) return { hit: !1 };
	let n = _.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, x = (e, t, n) => {
	if (!v(e)) return n;
	let r = _.get(e);
	return r || (r = /* @__PURE__ */ new Map(), _.set(e, r)), r.size >= g && r.clear(), r.set(t, n), n;
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
}, E = "default", D = /[^A-Za-z0-9._&=-]/g, O = /[^A-Za-z0-9._-]/g, k = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, A = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, k);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, j = (e) => e === void 0 ? E : typeof e == "string" ? A(e, D) : Object.keys(e).sort().map((t) => `${A(t, O)}=${A(String(e[t]), O)}`).join("&"), M = (e) => Array.isArray(e) ? e.length === 0 ? [E] : e.map(j) : [j(e)], te = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? E : e[0] ?? "default";
}, ne = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, re = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ie = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, ae = (e, t) => {
	if (!re(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? E : te(M(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ne(e, n, t, s)).map((t) => ie(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, oe = (e) => typeof e == "object" && e ? {
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
					type: S,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return I(o, e, t);
	}
}, z = L, B = (e) => L, V = L, H = L, U = L, W = L, G = (e) => L, K = L, q = (e, t = !0) => [
	R(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
	z,
	V,
	H,
	G(e ?? c.defaultLocale),
	K,
	U,
	W
], se = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), ce = (e, t, n) => {
	let { locale: r, selector: i } = oe(t), a = y(r ?? c.defaultLocale, N(i), n), o = b(e, a);
	if (o.hit) return o.content;
	let s = n ?? q(r), l = ae(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return se(e.content, t, s);
	};
	return l === null ? x(e, a, null) : Array.isArray(l) ? x(e, a, l.map(u)) : x(e, a, u(l));
}, J = {
	constructor: "constructor",
	length: "length",
	slice: "slice",
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, le = (e) => typeof e == "string" && /^\d+$/.test(e), ue = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		if (n === J.value) return t;
		if (n === Symbol.toPrimitive) return (e) => e === "number" ? Number(t) : t ?? "";
		if (n === J.toString) return () => String(t ?? "");
		if (n === J.valueOf) return () => t;
		if (n === J.slice) return Reflect.get(e, n, r);
		if (t != null && typeof n == "string" && n !== J.constructor && n !== J.length && !le(n)) {
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
var de = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => ue({
		...n,
		value: n.children,
		children: n.children
	})
}, fe = L, pe = L;
a(() => Y.then((e) => ({ default: e.MarkdownRenderer }))), a(() => Y.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var me = L;
a(() => X.then((e) => ({ default: e })));
var he = L, Z = /* @__PURE__ */ new Map(), ge = (e, t = !0) => {
	let n = `${e ?? c.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		R(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
		z,
		B(e ?? c.defaultLocale),
		V,
		G(e ?? c.defaultLocale),
		K,
		U,
		W,
		de,
		fe,
		pe,
		me,
		he
	];
	return Z.set(n, r), r;
}, _e = (e, t) => ce(e, t, ge(typeof t == "object" && t ? t.locale : t)), Q = Symbol("LOADABLE_SETTLED_VALUE"), ve = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[Q];
}, $ = (e, t) => {
	let n = o(p) ?? {}, r = i(() => {
		let r = n?.locale?.();
		return _e(ve(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, ye = {
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
}, be = n("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\">");
function xe() {
	let e = $(ye);
	return (() => {
		var n = be();
		return t(n, () => e().a), n;
	})();
}
var Se = n("<h1 class=\"mb-2 text-3xl font-bold text-foreground\">"), Ce = n("<p class=\"mb-4 text-muted-foreground\">");
function we() {
	let n = $(s);
	return [
		e(xe, {}),
		(() => {
			var e = Se();
			return t(e, () => n().a), e;
		})(),
		(() => {
			var e = Ce();
			return t(e, () => n().b), e;
		})()
	];
}
export { we as default };
