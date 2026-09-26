import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useLayoutEffect as o, useMemo as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
var ee = {
	key: "open-positions",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				r: "Senior Frontend Engineer",
				c: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
				b: "Backend Engineer",
				f: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
				s: "Technical Writer",
				e: "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
				g: "DevRel Engineer",
				q: "San Francisco / Remote",
				i: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
				o: "QA Engineer",
				k: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
				m: "Open Positions",
				a: "Apply Now",
				p: "Remote",
				l: "Full-time",
				n: "Part-time",
				j: "Engineering",
				h: "Documentation",
				d: "Community"
			},
			fr: {
				r: "Ingénieur Frontend Senior",
				c: "Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement utilisant React, TypeScript et Vite.",
				b: "Ingénieur Backend",
				f: "Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de lancements automatisés par jour.",
				s: "Rédacteur Technique",
				e: "Créer des guides complets, des références API et des tutoriels pour notre plateforme de benchmarking.",
				g: "Ingénieur DevRel",
				q: "San Francisco / Télétravail",
				i: "S'engager avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.",
				o: "Ingénieur QA",
				k: "Assurer la précision et la fiabilité des résultats de benchmark via des tests rigoureux et une validation.",
				m: "Postes Ouverts",
				a: "Postuler Maintenant",
				p: "Télétravail",
				l: "Temps plein",
				n: "Temps partiel",
				j: "Ingénierie",
				h: "Documentation",
				d: "Communauté"
			},
			es: {
				r: "Ingeniero Frontend Principal",
				c: "Construir y mantener nuestro panel de benchmarking y herramientas de desarrollo usando React, TypeScript y Vite.",
				b: "Ingeniero Backend",
				f: "Diseñar y escalar nuestra infraestructura de benchmarking en la nube manejando miles de ejecuciones automatizadas diarias.",
				s: "Redactor Técnico",
				e: "Crear guías completas, referencias API y tutoriales para nuestra plataforma de benchmarking.",
				g: "Ingeniero DevRel",
				q: "San Francisco / Remoto",
				i: "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones de blog y contribuciones de código abierto.",
				o: "Ingeniero QA",
				k: "Asegurar la precisión y fiabilidad de los resultados de benchmark a través de pruebas y validaciones rigurosas.",
				m: "Puestos Abiertos",
				a: "Postular Ahora",
				p: "Remoto",
				l: "Tiempo completo",
				n: "Tiempo parcial",
				j: "Ingeniería",
				h: "Documentación",
				d: "Comunidad"
			},
			de: {
				r: "Senior Frontend-Entwickler",
				c: "Entwickeln und pflegen Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.",
				b: "Backend-Entwickler",
				f: "Entwurf und Skalierung unserer Cloud-Benchmarking-Infrastruktur für Tausende von täglichen automatisierten Durchläufen.",
				s: "Technischer Redakteur",
				e: "Erstellen Sie umfassende Anleitungen, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.",
				g: "DevRel-Ingenieur",
				q: "San Francisco / Remote",
				i: "Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.",
				o: "QA-Ingenieur",
				k: "Stellen Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen sicher.",
				m: "Offene Stellen",
				a: "Jetzt bewerben",
				p: "Remote",
				l: "Vollzeit",
				n: "Teilzeit",
				j: "Engineering",
				h: "Dokumentation",
				d: "Community"
			},
			it: {
				r: "Ingegnere frontend senior",
				c: "Crea e gestisci la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.",
				b: "Ingegnere backend",
				f: "Progetta e ridimensiona la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.",
				s: "Redattore tecnico",
				e: "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.",
				g: "Ingegnere DevRel",
				q: "San Francisco / Remoto",
				i: "Collabora con la comunità i18n attraverso talk, workshop, post sul blog e contributi open source.",
				o: "Ingegnere QA",
				k: "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.",
				m: "Posizioni aperte",
				a: "Candidati ora",
				p: "Remoto",
				l: "Tempo pieno",
				n: "Part-time",
				j: "Ingegneria",
				h: "Documentazione",
				d: "Comunità"
			},
			pt: {
				r: "Engenheiro Frontend Sênior",
				c: "Crie e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.",
				b: "Engenheiro Backend",
				f: "Projete e dimensione nossa infraestrutura de benchmarking em nuvem que lida com milhares de execuções automatizadas diariamente.",
				s: "Redator Técnico",
				e: "Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.",
				g: "Engenheiro DevRel",
				q: "San Francisco / Remoto",
				i: "Envolva-se com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.",
				o: "Engenheiro QA",
				k: "Garanta a precisão e a confiabilidade dos resultados dos benchmarks por meio de testes e validações rigorosos.",
				m: "Vagas abertas",
				a: "Candidatar-se agora",
				p: "Remoto",
				l: "Tempo integral",
				n: "Meio período",
				j: "Engenharia",
				h: "Documentação",
				d: "Comunidade"
			},
			zh: {
				r: "高级前端工程师",
				c: "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。",
				b: "后端工程师",
				f: "设计并扩展我们的云基准测试基础架构，每天处理数千次自动化运行。",
				s: "技术文档工程师",
				e: "为我们的基准测试平台创建全面的指南、API 参考和教程。",
				g: "开发者关系工程师",
				q: "旧金山 / 远程",
				i: "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。",
				o: "测试工程师",
				k: "通过严格的测试和验证，确保基准测试结果的准确性和可靠性。",
				m: "开放职位",
				a: "立即申请",
				p: "远程",
				l: "全职",
				n: "兼职",
				j: "工程",
				h: "文档",
				d: "社区"
			},
			ja: {
				r: "シニアフロントエンドエンジニア",
				c: "React、TypeScript、Vite を使用して、ベンチマークダッシュボードと開発者ツールを構築・保守します。",
				b: "バックエンドエンジニア",
				f: "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計・拡張します。",
				s: "テクニカルライター",
				e: "ベンチマークプラットフォーム向けの包括的なガイド、API リファレンス、およびチュートリアルを作成します。",
				g: "DevRel エンジニア",
				q: "サンフランシスコ / リモート",
				i: "講演、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18n コミュニティと交流します。",
				o: "QA エンジニア",
				k: "厳密なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。",
				m: "募集職種",
				a: "今すぐ応募",
				p: "リモート",
				l: "正社員",
				n: "アルバイト",
				j: "エンジニアリング",
				h: "ドキュメント",
				d: "コミュニティ"
			},
			ko: {
				r: "시니어 프런트 엔드 엔지니어",
				c: "React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.",
				b: "백엔드 엔지니어",
				f: "매일 수천 건의 자동 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.",
				s: "테크니컬 라이터",
				e: "벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 작성합니다.",
				g: "DevRel 엔지니어",
				q: "샌프란시스코 / 원격",
				i: "강연, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통하십시오.",
				o: "QA 엔지니어",
				k: "엄격한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.",
				m: "모집 부문",
				a: "지금 지원하기",
				p: "원격",
				l: "풀타임",
				n: "파트타임",
				j: "엔지니어링",
				h: "문서",
				d: "커뮤니티"
			},
			ru: {
				r: "Старший фронтенд-инженер",
				c: "Создание и поддержка нашей панели тестирования и инструментов разработчика с использованием React, TypeScript и Vite.",
				b: "Бэкенд-инженер",
				f: "Проектирование и масштабирование нашей облачной инфраструктуры для тестирования, обрабатывающей тысячи автоматических запусков ежедневно.",
				s: "Технический писатель",
				e: "Создание подробных руководств, справочников по API и учебных пособий для нашей платформы тестирования.",
				g: "DevRel-инженер",
				q: "Сан-Франциско / Удаленно",
				i: "Взаимодействие с сообществом i18n через выступления, семинары, посты в блоге и вклад в открытый исходный код.",
				o: "QA-инженер",
				k: "Обеспечение точности и надежности результатов тестирования посредством строгого тестирования и валидации.",
				m: "Открытые вакансии",
				a: "Подать заявку",
				p: "Удаленно",
				l: "Полный рабочий день",
				n: "Неполный рабочий день",
				j: "Разработка",
				h: "Документация",
				d: "Сообщество"
			}
		}
	}
}, f = {
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
}, p = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, te = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var m = {
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
}, h = (e = m) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!te) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ne = !1, g, _ = () => typeof window > "u" ? h(m) : (ne ||= (g = h(m), !0), g), v = /* @__PURE__ */ new Map(), re = (e, t) => Object.create(new Proxy(e, {
	get: (e, t, n) => {
		if (typeof t != "string" || t === "constructor" || t in e) return Reflect.get(e, t, n);
		let { value: r } = n;
		if (r == null) return;
		let i = Object(r)[t];
		return typeof i == "function" ? i.bind(r) : i;
	},
	has: (e, n) => n in e || typeof n == "string" && n !== "constructor" && t !== null && n in t
}), {
	toString: { value() {
		return String(this.value ?? "");
	} },
	valueOf: { value() {
		return this.value;
	} },
	[Symbol.toPrimitive]: { value() {
		return this.value ?? "";
	} }
}), ie = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = v.get(t);
	i || (i = /* @__PURE__ */ new Map(), v.set(t, i));
	let a = i.get(r);
	return a || (a = re(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ae = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : u(l, { children: e }),
	value: t,
	...n
}, ie(t)), y = /* @__PURE__ */ new WeakMap(), b = 0, oe = (e) => {
	if (!e) return "base";
	let t = y.get(e);
	if (t) return t;
	b += 1;
	let n = `p${b}`;
	return y.set(e, n), n;
}, se = 256, x = /* @__PURE__ */ new WeakMap(), S = (e) => typeof e == "object" && !!e, ce = (e, t, n) => `${e}_${t}_${oe(n)}`, le = (e, t) => {
	if (!S(e)) return { hit: !1 };
	let n = x.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, C = (e, t, n) => {
	if (!S(e)) return n;
	let r = x.get(e);
	return r || (r = /* @__PURE__ */ new Map(), x.set(e, r)), r.size >= se && r.clear(), r.set(t, n), n;
}, w = "translation", T = "enumeration", ue = "plural", de = "condition", E = "insertion", fe = "object", pe = "array", D = "markdown", O = "html", me = "gender", he = "select", k = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), A = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, A);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => A(e, k(t, e, {
		type: pe,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: fe,
			key: r
		};
		if (t.eager) {
			n[r] = A(e[r], k(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = A(e[r], k(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, j = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), M = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, N = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !M(e) || !M(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? N(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, P = (e, t, n) => {
	let r = (t) => e[t], i = r(t);
	if (typeof i == "string") return i;
	let a = [
		t,
		t.split("-")[0],
		n,
		n?.split("-")[0]
	], o = [];
	for (let e = 0; e < a.length; e++) {
		let t = a[e];
		if (!t || a.indexOf(t) < e) continue;
		let n = r(t);
		if (n !== void 0) {
			if (typeof n == "string") {
				if (o.length === 0) return n;
				continue;
			}
			o.push(n);
		}
	}
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => N(e, t));
}, F = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, I = (e) => {
	if (typeof e == "string") return e;
	if (F(e)) return e.nodeType === "html" ? e[O] : e[D];
}, L = (e, t) => {
	if (typeof e == "string") return t;
	if (F(e)) {
		let n = e.nodeType === "html" ? O : D;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, R = (e, t, n, r, i) => {
	let a = L(e, j(I(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, ge = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? z : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = P(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: w,
				key: e
			}]
		});
	}
}, V = z, H = (e) => z, U = z, _e = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: E }], i = e[E], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || F(e),
			transform: (e, n, r) => {
				if (F(e)) return (i) => R(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = j(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return K(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, W = [
	T,
	de,
	ue,
	me,
	he
], G = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !W.includes(i)) return t;
	let a = i === "plural" || i === "enumeration";
	return (e) => {
		if (typeof e == "object" && e) return t({
			...n,
			...e
		});
		if (a) return t({
			...n,
			count: e
		});
		let i = t(e);
		return !r && ge(i) ? i(n) : i;
	};
}, K = (e, t) => typeof t == "function" && W.includes(e?.nodeType ?? "") ? (n) => G(e, t, n) : t, q = z, J = z, Y = (e) => z, X = z, ve = (e, t = !0) => [
	B(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	V,
	H(e ?? f.defaultLocale),
	U,
	_e,
	Y(e ?? f.defaultLocale),
	X,
	q,
	J
].filter((e) => e !== z), ye = (e, t, n = []) => A(e, {
	...t,
	plugins: n
}), Z = /* @__PURE__ */ new WeakSet(), be = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ce(r ?? f.defaultLocale, "", n), o = le(e, a);
	if (o.hit) return o.content;
	let s = n ?? ve(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Z.has(e)
		};
		Z.add(e);
		try {
			return ye(e.content, t, s);
		} finally {
			t.eager && Z.delete(e);
		}
	};
	return c === null ? C(e, a, null) : Array.isArray(c) ? C(e, a, c.map(l)) : C(e, a, l(c));
}, xe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Q = /\{\{\s*(.*?)\s*\}\}/g, Se = (e, t = {}) => {
	if (!Object.values(t).some(xe)) return {
		isSimple: !0,
		parts: e.replace(Q, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Q), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Ce = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ae({
		value: t.children,
		children: t.children
	})
}, we = z, Te = (t, r) => {
	let i = Se(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ee = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: E }], i = e[E], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || F(e),
			transform: (e, n, r) => {
				if (F(e)) return (i) => R(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Te(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return K(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, De = z, Oe = z, $ = /* @__PURE__ */ new Map(), ke = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		Ce,
		B(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		V,
		H(e ?? f.defaultLocale),
		U,
		Y(e ?? f.defaultLocale),
		X,
		q,
		J,
		we,
		Ee,
		De,
		Oe
	].filter((e) => e !== z);
	return $.set(n, r), r;
}, Ae = (e, t) => be(e, t, ke(typeof t == "object" && t ? t.locale : t)), je = _, Me = t({
	get locale() {
		return je() ?? f?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Ne = (e, t) => {
	let { locale: n, variant: r } = i(Me) ?? {}, a = t ?? n, o = a;
	return s(() => Ae(e, a), [e.key, o]);
};
function Pe() {
	let e = Ne(ee), t = [
		{
			title: e.r.value,
			location: e.p.value,
			type: e.l.value,
			dept: e.j.value,
			desc: e.c.value
		},
		{
			title: e.b.value,
			location: e.p.value,
			type: e.l.value,
			dept: e.j.value,
			desc: e.f.value
		},
		{
			title: e.s.value,
			location: e.p.value,
			type: e.n.value,
			dept: e.h.value,
			desc: e.e.value
		},
		{
			title: e.g.value,
			location: e.q.value,
			type: e.l.value,
			dept: e.d.value,
			desc: e.i.value
		},
		{
			title: e.o.value,
			location: e.p.value,
			type: e.l.value,
			dept: e.j.value,
			desc: e.k.value
		}
	];
	return d(l, { children: [u("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: e.m
	}), u("div", {
		className: "space-y-4",
		children: t.map((t) => d("div", {
			className: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between",
			children: [d("div", { children: [
				u("h3", {
					className: "text-base font-semibold text-foreground",
					children: t.title
				}),
				u("p", {
					className: "text-sm text-muted-foreground",
					children: t.desc
				}),
				d("div", {
					className: "mt-2 flex gap-2",
					children: [
						u("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: t.dept
						}),
						u("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: t.location
						}),
						u("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: t.type
						})
					]
				})
			] }), u("button", {
				type: "button",
				className: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: e.a
			})]
		}, t.title))
	})] });
}
function Fe() {
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
function Ie(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Le({ children: e, locale: t }) {
	let [n] = c(() => typeof performance < "u" ? performance.now() : 0);
	return o(() => {
		Ie("AppRoot", n);
	}, [n]), a(() => {
		t && (document.documentElement.lang = t);
	}, [t]), a(() => {
		Fe();
	}, []), e;
}
function Re({ children: e }) {
	return u(Le, {
		locale: "en",
		children: e
	});
}
function ze() {
	return u(Re, { children: u(Pe, {}) });
}
export { ze as default };
