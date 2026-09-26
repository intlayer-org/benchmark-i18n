import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useMemo as a } from "react";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
var l = {
	key: "team-header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				b: "Our Team",
				a: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
			},
			fr: {
				b: "Notre Équipe",
				a: "Découvrez les personnes derrière i18n Benchmark. Une équipe diverse unie par une passion partagée pour les excellents outils de développement."
			},
			es: {
				b: "Nuestro Equipo",
				a: "Conozca a las personas detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas de desarrollo."
			},
			de: {
				b: "Unser Team",
				a: "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch eine gemeinsame Leidenschaft für großartige Entwicklertools vereint ist."
			},
			it: {
				b: "Il nostro team",
				a: "Incontra le persone dietro i18n Benchmark. Un team diversificato unito da una passione condivisa per i grandi strumenti per sviluppatori."
			},
			pt: {
				b: "Nossa Equipe",
				a: "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor."
			},
			zh: {
				b: "我们的团队",
				a: "认识 i18n Benchmark 背后的团队。一支多元化的团队，因为对优秀开发人员工具的共同热情而团结在一起。"
			},
			ja: {
				b: "私たちのチーム",
				a: "i18n Benchmark を支える人々を紹介します。素晴らしい開発者ツールへの情熱を共有する多様なチームです。"
			},
			ko: {
				b: "우리 팀",
				a: "i18n Benchmark 뒤에 있는 사람들을 만나보세요. 훌륭한 개발자 도구에 대한 공유된 열정으로 뭉친 다양한 팀입니다."
			},
			ru: {
				b: "Наша команда",
				a: "Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к отличным инструментам для разработчиков."
			}
		}
	}
}, u = {
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
}, d = {
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
}, f = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : s(o, { children: e });
	return new Proxy(i, { get(e, r, i) {
		if (r === "value") return t;
		if (r === Symbol.toPrimitive) return () => t ?? "";
		if (r === "toString") return () => String(t ?? "");
		if (r === "valueOf") return () => t;
		if (n && Object.hasOwn(n, r)) return n[r];
		if (t != null && typeof r == "string" && r !== "constructor" && !(r in e)) {
			let e = Object(t);
			if (r in e) {
				let n = e[r];
				return typeof n == "function" ? n.bind(t) : n;
			}
		}
		return Reflect.get(e, r, i);
	} });
}, p = /* @__PURE__ */ new WeakMap(), m = 0, h = (e) => {
	if (!e) return "base";
	let t = p.get(e);
	if (t) return t;
	m += 1;
	let n = `p${m}`;
	return p.set(e, n), n;
}, g = 256, _ = /* @__PURE__ */ new WeakMap(), v = (e) => typeof e == "object" && !!e, y = (e, t, n) => `${e}_${t}_${h(n)}`, ee = (e, t) => {
	if (!v(e)) return { hit: !1 };
	let n = _.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, b = (e, t, n) => {
	if (!v(e)) return n;
	let r = _.get(e);
	return r || (r = /* @__PURE__ */ new Map(), _.set(e, r)), r.size >= g && r.clear(), r.set(t, n), n;
}, te = "translation", x = "insertion", ne = "object", S = "array", C = "markdown", w = "html", T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => T(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: S,
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
}, E = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), D = "default", re = /[^A-Za-z0-9._&=-]/g, O = /[^A-Za-z0-9._-]/g, ie = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, k = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ie);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, A = (e) => e === void 0 ? D : typeof e == "string" ? k(e, re) : Object.keys(e).sort().map((t) => `${k(t, O)}=${k(String(e[t]), O)}`).join("&"), j = (e) => Array.isArray(e) ? e.length === 0 ? [D] : e.map(A) : [A(e)], M = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? D : e[0] ?? "default";
}, ae = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, oe = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, se = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, ce = (e, t) => {
	if (!oe(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? D : M(j(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ae(e, n, t, s)).map((t) => se(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, le = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, N = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? j(n).join(",") : String(n)}`;
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
}, L = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, R = (e) => {
	if (typeof e == "string") return e;
	if (L(e)) return e.nodeType === "html" ? e[w] : e[C];
}, z = (e, t) => {
	if (typeof e == "string") return t;
	if (L(e)) {
		let n = e.nodeType === "html" ? w : C;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, B = (e, t, n, r, i) => {
	let a = z(e, E(R(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, V = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, H = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? V : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: te,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return I(o, e, t);
	}
}, U = V, W = (e) => V, G = V, ue = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? V : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || L(e),
			transform: (e, n, r) => {
				if (L(e)) return (i) => B(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = E(i, e);
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
}, K = V, q = V, J = (e) => V, Y = V, de = (e, t = !0) => [
	H(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	U,
	G,
	ue,
	J(e ?? u.defaultLocale),
	Y,
	K,
	q
], fe = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), pe = (e, t, n) => {
	let { locale: r, selector: i } = le(t), a = y(r ?? u.defaultLocale, N(i), n), o = ee(e, a);
	if (o.hit) return o.content;
	let s = n ?? de(r), c = ce(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return fe(e.content, t, s);
	};
	return c === null ? b(e, a, null) : Array.isArray(c) ? b(e, a, c.map(l)) : b(e, a, l(c));
}, me = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", X = /\{\{\s*(.*?)\s*\}\}/g, he = (e, t = {}) => {
	if (!Object.values(t).some(me)) return {
		isSimple: !0,
		parts: e.replace(X, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(X), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, ge = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => f({
		...n,
		value: n.children,
		children: n.children
	})
}, _e = V, ve = (t, r) => {
	let i = he(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, ye = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? V : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || L(e),
			transform: (e, n, r) => {
				if (L(e)) return (i) => B(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = ve(i, e);
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
}, be = V, xe = V, Z = /* @__PURE__ */ new Map(), Se = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		H(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		U,
		W(e ?? u.defaultLocale),
		G,
		J(e ?? u.defaultLocale),
		Y,
		K,
		q,
		ge,
		_e,
		ye,
		be,
		xe
	];
	return Z.set(n, r), r;
}, Ce = (e, t) => pe(e, t, Se(typeof t == "object" && t ? t.locale : t)), we = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Q = {
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
}, Te = ((e = Q) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!we) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})(Q), Ee = t({
	locale: Te ?? u?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), $ = (e, t) => {
	let { locale: n, variant: r } = i(Ee) ?? {}, o = t ?? n, s = typeof o == "object" && o ? `${o.locale ?? ""}|${N(o)}` : o;
	return a(() => Ce(e, o), [e.key, s]);
}, De = {
	key: "app",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Go to GitHub\"},\"b\":{\"e\":\"Home\",\"f\":\"Methodology\",\"g\":\"Mock Pages\",\"i\":\"Products\",\"h\":\"Pricing\",\"k\":\"Team\",\"a\":\"Blog\",\"b\":\"Careers\",\"d\":\"FAQ\",\"c\":\"Contact\",\"j\":\"Settings\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.\",\"g\":\"Resources\",\"e\":\"GitHub\",\"f\":\"Methodology\",\"b\":\"Contact\",\"c\":\"Contributing\",\"a\":\"i18n Benchmark — Open-source project. Built with React, Vite & React Router.\"},\"f\":{\"a\":\"Theme: Auto\",\"b\":\"Theme: Dark\",\"e\":\"Theme: Light\",\"c\":\"Theme mode: auto (system). Click to switch to light mode.\",\"d\":\"Theme mode: {mode}. Click to switch mode.\"},\"c\":\"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.\"},\"fr\":{\"e\":{\"a\":\"Banc d'essai i18n\",\"d\":\"Benchmark i18n\",\"b\":\"contact@intlayer.org\",\"c\":\"Aller sur GitHub\"},\"b\":{\"e\":\"Accueil\",\"f\":\"Méthodologie\",\"g\":\"Pages fictives\",\"i\":\"Produits\",\"h\":\"Tarification\",\"k\":\"Équipe\",\"a\":\"Blog\",\"b\":\"Carrières\",\"d\":\"FAQ\",\"c\":\"Contact\",\"j\":\"Paramètres\"},\"a\":{\"h\":\"Benchmark i18n\",\"d\":\"Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.\",\"g\":\"Ressources\",\"e\":\"GitHub\",\"f\":\"Méthodologie\",\"b\":\"Contact\",\"c\":\"Contribution\",\"a\":\"Benchmark i18n — Projet open source. Construit avec React, Vite et React Router.\"},\"f\":{\"a\":\"Thème : Auto\",\"b\":\"Thème : Sombre\",\"e\":\"Thème : Clair\",\"c\":\"Mode thématique : auto (système). Cliquez pour passer en mode clair.\",\"d\":\"Mode thématique : {mode}. Cliquez pour changer de mode.\"},\"c\":\"⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.\"},\"es\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Ir a GitHub\"},\"b\":{\"e\":\"Inicio\",\"f\":\"Metodología\",\"g\":\"Páginas de prueba\",\"i\":\"Productos\",\"h\":\"Precios\",\"k\":\"Equipo\",\"a\":\"Blog\",\"b\":\"Carreras\",\"d\":\"FAQ\",\"c\":\"Contacto\",\"j\":\"Ajustes\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga и la reactividad de la aplicación.\",\"g\":\"Recursos\",\"e\":\"GitHub\",\"f\":\"Metodología\",\"b\":\"Contacto\",\"c\":\"Contribución\",\"a\":\"i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y React Router.\"},\"f\":{\"a\":\"Tema: Automático\",\"b\":\"Tema: Oscuro\",\"e\":\"Tema: Claro\",\"c\":\"Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.\",\"d\":\"Modo de tema: {mode}. Haga clic para cambiar de modo.\"},\"c\":\"⚠️ Esta página contiene datos de prueba solo para fines de benchmarking. No está relacionada con ninguna empresa o servicio real.\"},\"de\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Zu GitHub\"},\"b\":{\"e\":\"Startseite\",\"f\":\"Methodik\",\"g\":\"Testseiten\",\"i\":\"Produkte\",\"h\":\"Preise\",\"k\":\"Team\",\"a\":\"Blog\",\"b\":\"Karriere\",\"d\":\"FAQ\",\"c\":\"Kontakt\",\"j\":\"Einstellungen\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladezeit und die App-Reaktivität.\",\"g\":\"Ressourcen\",\"e\":\"GitHub\",\"f\":\"Methodik\",\"b\":\"Kontakt\",\"c\":\"Beitrag\",\"a\":\"i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & React Router.\"},\"f\":{\"a\":\"Design: Auto\",\"b\":\"Design: Dunkel\",\"e\":\"Design: Hell\",\"c\":\"Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.\",\"d\":\"Design-Modus: {mode}. Klicken Sie hier, um den Modus zu wechseln.\"},\"c\":\"⚠️ Diese Seite enthält Mock-Daten nur zu Benchmarking-Zwecken. Sie steht in keinem Zusammenhang mit einem echten Unternehmen oder einer echten Dienstleistung.\"},\"it\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Vai su GitHub\"},\"b\":{\"e\":\"Home\",\"f\":\"Metodologia\",\"g\":\"Pagine di prova\",\"i\":\"Prodotti\",\"h\":\"Prezzi\",\"k\":\"Team\",\"a\":\"Blog\",\"b\":\"Carriere\",\"d\":\"FAQ\",\"c\":\"Contatti\",\"j\":\"Impostazioni\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sul tempo di caricamento e sulla reattività dell'app.\",\"g\":\"Risorse\",\"e\":\"GitHub\",\"f\":\"Metodologia\",\"b\":\"Contatti\",\"c\":\"Contribuire\",\"a\":\"i18n Benchmark — Progetto open source. Costruito con React, Vite e React Router.\"},\"f\":{\"a\":\"Tema: Auto\",\"b\":\"Tema: Scuro\",\"e\":\"Tema: Chiaro\",\"c\":\"Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.\",\"d\":\"Modalità tema: {mode}. Fai clic per cambiare modalità.\"},\"c\":\"⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale.\"},\"pt\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Ir para o GitHub\"},\"b\":{\"e\":\"Início\",\"f\":\"Metodologia\",\"g\":\"Páginas de Teste\",\"i\":\"Produtos\",\"h\":\"Preços\",\"k\":\"Equipe\",\"a\":\"Blog\",\"b\":\"Carreiras\",\"d\":\"FAQ\",\"c\":\"Contato\",\"j\":\"Configurações\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade do aplicativo.\",\"g\":\"Recursos\",\"e\":\"GitHub\",\"f\":\"Metodologia\",\"b\":\"Contato\",\"c\":\"Contribuindo\",\"a\":\"i18n Benchmark — Projeto de código aberto. Construído com React, Vite e React Router.\"},\"f\":{\"a\":\"Tema: Automático\",\"b\":\"Tema: Escuro\",\"e\":\"Tema: Claro\",\"c\":\"Modo de tema: automático (sistema). Clique para mudar para o modo claro.\",\"d\":\"Modo de tema: {mode}. Clique para mudar o modo.\"},\"c\":\"⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhum negócio ou serviço real.\"},\"zh\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"前往 GitHub\"},\"b\":{\"e\":\"首页\",\"f\":\"方法论\",\"g\":\"模拟页面\",\"i\":\"产品\",\"h\":\"定价\",\"k\":\"团队\",\"a\":\"博客\",\"b\":\"职业\",\"d\":\"常见问题\",\"c\":\"联系我们\",\"j\":\"设置\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"一个开源测试应用程序，用于衡量国际化库对捆绑包大小、加载时间以及应用程序反应性的真实影响。\",\"g\":\"资源\",\"e\":\"GitHub\",\"f\":\"方法论\",\"b\":\"联系\",\"c\":\"贡献\",\"a\":\"i18n Benchmark — 开源项目。使用 React, Vite 和 React Router 构建。\"},\"f\":{\"a\":\"主题：自动\",\"b\":\"主题：深色\",\"e\":\"主题：亮色\",\"c\":\"主题模式：自动（系统）。点击切换到亮色模式。\",\"d\":\"主题模式：{mode}。点击切换模式。\"},\"c\":\"⚠️ 本页面包含仅用于基准测试目的的模拟数据。它与任何真实的业务或服务无关。\"},\"ja\":{\"e\":{\"a\":\"i18n ベンチ\",\"d\":\"i18n ベンチマーク\",\"b\":\"contact@intlayer.org\",\"c\":\"GitHub へ\"},\"b\":{\"e\":\"ホーム\",\"f\":\"方法論\",\"g\":\"モックページ\",\"i\":\"製品\",\"h\":\"価格設定\",\"k\":\"チーム\",\"a\":\"ブログ\",\"b\":\"採用情報\",\"d\":\"よくある質問\",\"c\":\"お問い合わせ\",\"j\":\"設定\"},\"a\":{\"h\":\"i18n ベンチマーク\",\"d\":\"国際化ライブラリがバンドルサイズ、ロード時間、およびアプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーションです。\",\"g\":\"リソース\",\"e\":\"GitHub\",\"f\":\"方法論\",\"b\":\"連絡先\",\"c\":\"貢献\",\"a\":\"i18n ベンチマーク — オープンソースプロジェクト。React、Vite、および React Router で構築されています。\"},\"f\":{\"a\":\"テーマ：自動\",\"b\":\"テーマ：ダーク\",\"e\":\"テーマ：ライト\",\"c\":\"テーマモード：自動（システム）。クリックしてライトモードに切り替えます。\",\"d\":\"テーマモード：{mode}。クリックしてモードを切り替えます。\"},\"c\":\"⚠️ このページにはベンチマーク目的のモックデータのみが含まれています。実際のビジネスやサービスとは関係ありません。\"},\"ko\":{\"e\":{\"a\":\"i18n 벤치\",\"d\":\"i18n 벤치마크\",\"b\":\"contact@intlayer.org\",\"c\":\"GitHub으로 이동\"},\"b\":{\"e\":\"홈\",\"f\":\"방법론\",\"g\":\"모적 페이지\",\"i\":\"제품\",\"h\":\"가격\",\"k\":\"팀\",\"a\":\"블로그\",\"b\":\"채용\",\"d\":\"자주 묻는 질문\",\"c\":\"문의\",\"j\":\"설정\"},\"a\":{\"h\":\"i18n 벤치마크\",\"d\":\"번들 크기, 로딩 시간 및 앱 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.\",\"g\":\"리소스\",\"e\":\"GitHub\",\"f\":\"방법론\",\"b\":\"연락처\",\"c\":\"기여\",\"a\":\"i18n 벤치마크 — 오픈 소스 프로젝트입니다. React, Vite 및 React Router로 구축되었습니다.\"},\"f\":{\"a\":\"테마: 자동\",\"b\":\"테마: 다크\",\"e\":\"테마: 라이트\",\"c\":\"테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.\",\"d\":\"테마 모드: {mode}. 모드를 전환하려면 클릭하세요.\"},\"c\":\"⚠️ 이 페이지에는 벤치마킹 목적의 모의 데이터만 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.\"},\"ru\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Перейти на GitHub\"},\"b\":{\"e\":\"Главная\",\"f\":\"Методология\",\"g\":\"Мок-страницы\",\"i\":\"Продукты\",\"h\":\"Цены\",\"k\":\"Команда\",\"a\":\"Блог\",\"b\":\"Вакансии\",\"d\":\"FAQ\",\"c\":\"Контакт\",\"j\":\"Настройки\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.\",\"g\":\"Ресурсы\",\"e\":\"GitHub\",\"f\":\"Методология\",\"b\":\"Контакт\",\"c\":\"Вклад в проект\",\"a\":\"i18n Benchmark — проект с открытым исходным кодом. Построен на React, Vite и React Router.\"},\"f\":{\"a\":\"Тема: Авто\",\"b\":\"Тема: Темная\",\"e\":\"Тема: Светлая\",\"c\":\"Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.\",\"d\":\"Режим темы: {mode}. Нажмите, чтобы изменить режим.\"},\"c\":\"⚠️ Эта страница содержит мок-данные только для целей бенчмаркинга. Она не связана с каким-либо реальным бизнесом или услугой.\"}}}")
}, Oe = () => {
	let e = $(De);
	return s("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e.c
	});
};
function ke() {
	let e = $(l);
	return c(o, { children: [
		s(Oe, {}),
		s("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: e.b
		}),
		s("p", {
			className: "mb-10 text-muted-foreground",
			children: e.a
		})
	] });
}
export { ke as default };
