import { Fragment as e, Profiler as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as ee } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
var f = {
	key: "careers-header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				b: "Careers",
				a: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
			},
			fr: {
				b: "Carrières",
				a: "Rejoignez notre mission pour améliorer l'écosystème de l'internationalisation. Nous sommes une équipe télétravail d'abord qui valorise l'impact, la transparence et l'apprentissage continu."
			},
			es: {
				b: "Carreras",
				a: "Únete a nuestra misión para mejorar el ecosistema de internacionalización. Somos un equipo remoto primero que valora el impacto, la transparencia y el aprendizaje continuo."
			},
			de: {
				b: "Karriere",
				a: "Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wirkung, Transparenz und kontinuierliches Lernen schätzt."
			},
			it: {
				b: "Carriere",
				a: "Unisciti alla nostra missione per migliorare l’ecosistema di internazionalizzazione. Siamo un team remote-first che valorizza l’impatto, la trasparenza e l’apprendimento continuo."
			},
			pt: {
				b: "Carreiras",
				a: "Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe que prioriza o trabalho remoto e que valoriza o impacto, a transparência e o aprendizado contínuo."
			},
			zh: {
				b: "职业",
				a: "加入我们改善国际化生态系统的使命。我们是一个远程优先的团队，重视影响力、透明度和持续学习。"
			},
			ja: {
				b: "採用情報",
				a: "国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、影響力、透明性、継続的な学習を重視するリモートファーストのチームです。"
			},
			ko: {
				b: "채용",
				a: "국제화 생태계를 개선하기 위한 우리의 임무에 동참하십시오. 우리는 영향력, 투명성 및 지속적인 학습을 중요하게 생각하는 원격 우선 팀입니다."
			},
			ru: {
				b: "Карьера",
				a: "Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы команда, работающая удаленно, которая ценит влияние, прозрачность и непрерывное обучение."
			}
		}
	}
}, p = {
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
	defaultLocale: "en"
}, m = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, h = ({ children: e, value: t, additionalProps: n }) => {
	let r = i(e) ? e : u(l, { children: e });
	return new Proxy(r, { get(e, r, i) {
		return r === "value" ? t : n && Object.keys(n).includes(r) ? n[r] : Reflect.get(e, r, i);
	} });
}, g = (e) => {
	if (typeof e != "object" || !e) return e;
	let { type: t, props: n } = ((e) => {
		let t = e.props?.children;
		if (Array.isArray(t)) {
			let n = t.map((e, t) => {
				let n = g(e);
				if (typeof n == "object" && n && "type" in n) {
					let e = n;
					return r(e.type, {
						...e.props,
						key: t
					}, ...Array.isArray(e.props?.children) ? e.props.children : e.props?.children === void 0 ? [] : [e.props.children]);
				}
				return n;
			});
			return {
				...e,
				props: {
					...e.props,
					children: n
				}
			};
		} else if (t != null) {
			let n = g(t);
			return {
				...e,
				props: {
					...e.props,
					children: [n]
				}
			};
		}
		return {
			...e,
			props: {
				...e.props,
				children: []
			}
		};
	})(e);
	return r(t ?? "span", n, ...n.children);
}, te = "translation", _ = "insertion", ne = "object", re = "array", v = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => v(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => v(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: re,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ne,
				key: r
			}]
		};
		n[r] = v(e[r], i);
	}
	return n;
}, ie = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), y = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, b = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (y(e) && y(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : b(e[r], t[r]));
		return n;
	}
	return e;
}, ae = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => b(e, t));
}, x = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", S = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", C = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, w = (e, t) => x ? C : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = { ...n.translation ?? {} };
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: te,
					key: e
				}]
			};
			a[e] = i(a[e], t);
		}
		return ae(a, e, t);
	}
}, T = C, E = C, oe = S ? C : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = ie(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
	}
}, D = C, O = (e) => C, k = C, A = (e, t = !0) => [
	w(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	T,
	E,
	oe,
	O(e ?? p.defaultLocale),
	k,
	D
].filter(Boolean), j = (e, t, n = []) => v(e, {
	...t,
	plugins: n
}), M = (e, t, n = A(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return j(e.content, r, n);
}, N = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", P = /\{\{\s*(.*?)\s*\}\}/g, F = (e, t = {}) => {
	if (!Object.values(t).some(N)) return {
		isSimple: !0,
		parts: e.replace(P, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(P), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, I = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", L = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", R = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", z = I ? C : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => h({
		...n,
		value: n.children,
		children: n.children
	})
}, B = L ? C : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => h({
		...n,
		value: "[[react-element]]",
		children: g(e)
	})
}, V = (t, n) => {
	let i = F(t, n);
	return i.isSimple ? i.parts : r(e, null, ...i.parts.map((t, n) => r(e, { key: n }, t)));
}, H = R ? C : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = V(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		}, o = n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
		return typeof i == "object" && i && "nodeType" in i && ["enumeration", "condition"].includes(i.nodeType) ? (e) => (t) => {
			let n = o(t);
			return typeof n == "function" ? n(e) : n;
		} : o;
	}
}, U = C, W = C, G = (e, t = !0) => [
	w(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	T,
	E,
	O(e ?? p.defaultLocale),
	k,
	D,
	z,
	B,
	H,
	U,
	W
].filter(Boolean), K = (e, t) => M(e, t, G(t)), q = (e, t = p?.locales, n = p?.defaultLocale) => {
	let r = [e].flat(), i = (e) => e.trim().toLowerCase();
	try {
		for (let e of r) {
			let n = i(e), r = t.find((e) => i(e) === n);
			if (r) return r;
			let [a] = n.split("-"), o = t.find((e) => i(e).split("-")[0] === a);
			if (o) return o;
		}
	} catch {}
	return n;
}, J = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var se = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ce = (e) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!J) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, le = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !J && m.storage.cookies) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, se(r, e, i));
			} catch {}
		}
	}
}, Y = {
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
}, X = ce(Y), ue = (e, t) => le(e, {
	...Y,
	isCookieEnabled: t
}), de = () => {
	let { locale: e } = a(Z) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		!e || !t.current || t.current.currentLocale.set(e);
	}, [e]);
}, fe = ({ children: e }) => (de(), e), pe = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Z = n({
	locale: X ?? p?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), me = ({ locale: e, defaultLocale: t, children: n, setLocale: r, disableEditor: i, isCookieEnabled: a }) => {
	let { locales: s, defaultLocale: c } = p ?? {}, [l, d] = ee(e ?? X ?? t ?? c);
	o(() => {
		e && e !== l && d(e);
	}, [e]), o(() => {
		pe();
	}, []);
	let f = r ?? ((e) => {
		if (l.toString() !== e.toString()) {
			if (!s?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			d(e), ue(e, a);
		}
	}), m = q(l);
	return u(Z.Provider, {
		value: {
			locale: m,
			setLocale: f,
			disableEditor: i
		},
		children: n
	});
}, Q = ({ children: e, ...t }) => d(me, {
	...t,
	children: [u(fe, {}), e]
}), $ = (e, t) => {
	let { locale: n } = a(Z) ?? {};
	return s(() => K(e, t ?? n), [
		e.key,
		n,
		t
	]);
}, he = (e) => u(Q, { ...e }), ge = {
	key: "mock-banner",
	content: {
		nodeType: "translation",
		translation: {
			en: { a: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service." },
			fr: { a: "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel." },
			es: { a: "⚠️ Esta página contiene datos simulados solo para fines de benchmarking. No está relacionada con ningún negocio o servicio real." },
			de: { a: "⚠️ Diese Seite enthält fiktive Daten, die nur Benchmark-Zwecken dienen. Sie stehen in keinem Zusammenhang mit realen Unternehmen oder Dienstleistungen." },
			it: { a: "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale." },
			pt: { a: "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada com qualquer negócio o serviço real." },
			zh: { a: "⚠️ 此页面仅包含用于基准测试的模拟数据。它与任何真实的业务或服务无关。" },
			ja: { a: "⚠️ このページにはベンチマークのみを目的とした模擬データが含まれています。実際のビジネスやサービスとは関係ありません。" },
			ko: { a: "⚠️ 이 페이지는 벤치마킹 목적으로만 사용되는 모의 데이터를 포함하고 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다." },
			ru: { a: "⚠️ Эта страница содержит фиктивные данные только для целей тестирования производительности. Она не связана с каким-либо реальным бизнесом или услугой." }
		}
	}
}, _e = () => u("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: $(ge).a
});
//#endregion
//#region src/components/pages/careers/CareersHeader.tsx
function ve() {
	let e = $(f);
	return d(l, { children: [
		u(_e, {}),
		u("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: e.b
		}),
		u("p", {
			className: "mb-4 text-muted-foreground",
			children: e.a
		})
	] });
}
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
function ye() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function be(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
//#endregion
//#region src/components/AppProviders.tsx
function xe({ children: e, locale: n }) {
	return o(() => {
		n && (document.documentElement.lang = n);
	}, [n]), o(() => {
		ye();
	}, []), u(t, {
		id: "AppRoot",
		onRender: be,
		children: u(he, {
			locale: n,
			children: e
		})
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function Se({ children: e }) {
	return u(xe, {
		locale: "en",
		children: e
	});
}
//#endregion
//#region src/components/pages/careers/CareersHeader.wrapper.tsx
function Ce() {
	return u(Se, { children: u(ve, {}) });
}
//#endregion
export { Ce as default };
