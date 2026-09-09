import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useLayoutEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { Fragment as p, jsxDEV as m } from "react/jsx-dev-runtime";
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
}, h = {
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
}, g = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, te = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : d(u, { children: e });
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
}, _ = /* @__PURE__ */ new WeakMap(), v = 0, ne = (e) => {
	if (!e) return "base";
	let t = _.get(e);
	if (t) return t;
	v += 1;
	let n = `p${v}`;
	return _.set(e, n), n;
}, re = 256, y = /* @__PURE__ */ new WeakMap(), b = (e) => typeof e == "object" && !!e, ie = (e, t, n) => `${e}_${t}_${ne(n)}`, ae = (e, t) => {
	if (!b(e)) return { hit: !1 };
	let n = y.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, x = (e, t, n) => {
	if (!b(e)) return n;
	let r = y.get(e);
	return r || (r = /* @__PURE__ */ new Map(), y.set(e, r)), r.size >= re && r.clear(), r.set(t, n), n;
}, oe = "translation", S = "insertion", se = "object", ce = "array", C = "markdown", w = "html", T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => T(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ce,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: se,
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
}, E = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), D = "default", le = /[^A-Za-z0-9._&=-]/g, O = /[^A-Za-z0-9._-]/g, ue = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, k = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ue);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, A = (e) => e === void 0 ? D : typeof e == "string" ? k(e, le) : Object.keys(e).sort().map((t) => `${k(t, O)}=${k(String(e[t]), O)}`).join("&"), j = (e) => Array.isArray(e) ? e.length === 0 ? [D] : e.map(A) : [A(e)], de = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? D : e[0] ?? "default";
}, fe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, pe = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, me = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, he = (e, t) => {
	if (!pe(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? D : de(j(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => fe(e, n, t, s)).map((t) => me(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ge = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, M = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? j(n).join(",") : String(n)}`;
}).join("|") : "", N = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, P = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (N(e) && N(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : P(e[r], t[r]));
		return n;
	}
	return e;
}, _e = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => P(e, t));
}, F = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, ve = (e) => {
	if (typeof e == "string") return e;
	if (F(e)) return e.nodeType === "html" ? e[w] : e[C];
}, ye = (e, t) => {
	if (typeof e == "string") return t;
	if (F(e)) {
		let n = e.nodeType === "html" ? w : C;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, I = (e, t, n, r, i) => {
	let a = ye(e, E(ve(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
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
					type: oe,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return _e(o, e, t);
	}
}, z = L, be = (e) => L, B = L, xe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? L : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || F(e),
			transform: (e, n, r) => {
				if (F(e)) return (i) => I(e, i, n, t.plugins, r);
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
}, V = L, H = L, U = (e) => L, W = L, Se = (e, t = !0) => [
	R(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
	z,
	B,
	xe,
	U(e ?? h.defaultLocale),
	W,
	V,
	H
], Ce = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), we = (e, t, n) => {
	let { locale: r, selector: i } = ge(t), a = ie(r ?? h.defaultLocale, M(i), n), o = ae(e, a);
	if (o.hit) return o.content;
	let s = n ?? Se(r), c = he(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Ce(e.content, t, s);
	};
	return c === null ? x(e, a, null) : Array.isArray(c) ? x(e, a, c.map(l)) : x(e, a, l(c));
}, Te = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", G = /\{\{\s*(.*?)\s*\}\}/g, Ee = (e, t = {}) => {
	if (!Object.values(t).some(Te)) return {
		isSimple: !0,
		parts: e.replace(G, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(G), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, De = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => te({
		...n,
		value: n.children,
		children: n.children
	})
}, Oe = L, ke = (t, r) => {
	let i = Ee(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ae = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? L : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || F(e),
			transform: (e, n, r) => {
				if (F(e)) return (i) => I(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = ke(i, e);
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
}, je = L, Me = L, K = /* @__PURE__ */ new Map(), Ne = (e, t = !0) => {
	let n = `${e ?? h.defaultLocale}_${t}`;
	if (K.has(n)) return K.get(n);
	let r = [
		R(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
		z,
		be(e ?? h.defaultLocale),
		B,
		U(e ?? h.defaultLocale),
		W,
		V,
		H,
		De,
		Oe,
		Ae,
		je,
		Me
	];
	return K.set(n, r), r;
}, Pe = (e, t) => we(e, t, Ne(typeof t == "object" && t ? t.locale : t)), q = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Fe = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = q(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, J = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Y = {
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
}, Ie = (e = Y) => {
	let { locales: t } = h;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!J) for (let t = 0; t < (g.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(g.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Le = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !J && g.storage.cookies) for (let n = 0; n < g.storage.cookies.length; n++) {
		let { name: r, attributes: i } = g.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: q(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Fe(r, e, i));
			} catch {}
		}
	}
}, X = Ie(Y), Re = (e, t) => Le(e, {
	...Y,
	isCookieEnabled: t
}), ze = () => {
	let { locale: e } = i(Z) ?? {}, t = c(null);
	a(() => {}, []), a(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Be = ({ children: e }) => (ze(), e), Ve = () => {
	let { locale: e } = i(Z) ?? {}, t = c(null);
	a(() => {}, []), a(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, He = ({ children: e }) => (Ve(), e), Ue = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, We = (e, t = h?.locales, n = h?.defaultLocale) => {
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
}, Z = t({
	locale: X ?? h?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Ge = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = h ?? {}, [f, p] = l(e ?? X ?? t ?? u);
	a(() => {
		e && e !== f && p(e);
	}, [e]), a(() => {
		Ue();
	}, []);
	let m = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), Re(e, s);
		}
	}), ee = We(f);
	return d(Z.Provider, {
		value: {
			locale: ee,
			setLocale: m,
			variant: n,
			disableEditor: o
		},
		children: r
	});
}, Ke = ({ children: e, ...t }) => f(Ge, {
	...t,
	children: [
		d(Be, {}),
		d(He, {}),
		e
	]
}), qe = (e, t) => {
	let { locale: n, variant: r } = i(Z) ?? {}, a = t ?? n, o = typeof a == "object" && a ? `${a.locale ?? ""}|${M(a)}` : a;
	return s(() => Pe(e, a), [e.key, o]);
}, Je = (e) => d(Ke, { ...e }), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/pages/careers/OpenPositions.tsx";
function Ye() {
	let e = qe(ee), t = [
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
	return m(p, { children: [m("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: e.m
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 47,
		columnNumber: 7
	}, this), m("div", {
		className: "space-y-4",
		children: t.map((t) => m("div", {
			className: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between",
			children: [m("div", { children: [
				m("h3", {
					className: "text-base font-semibold text-foreground",
					children: t.title
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 57,
					columnNumber: 15
				}, this),
				m("p", {
					className: "text-sm text-muted-foreground",
					children: t.desc
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 60,
					columnNumber: 15
				}, this),
				m("div", {
					className: "mt-2 flex gap-2",
					children: [
						m("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: t.dept
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 62,
							columnNumber: 17
						}, this),
						m("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: t.location
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 65,
							columnNumber: 17
						}, this),
						m("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: t.type
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 68,
							columnNumber: 17
						}, this)
					]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 61,
					columnNumber: 15
				}, this)
			] }, void 0, !0, {
				fileName: Q,
				lineNumber: 56,
				columnNumber: 13
			}, this), m("button", {
				type: "button",
				className: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: e.a
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 73,
				columnNumber: 13
			}, this)]
		}, t.title, !0, {
			fileName: Q,
			lineNumber: 52,
			columnNumber: 11
		}, this))
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 50,
		columnNumber: 7
	}, this)] }, void 0, !0, {
		fileName: Q,
		lineNumber: 46,
		columnNumber: 5
	}, this);
}
function Xe() {
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
function Ze(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var Qe = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/AppProviders.tsx";
function $e({ children: e, locale: t }) {
	let [n] = l(() => typeof performance < "u" ? performance.now() : 0);
	return o(() => {
		Ze("AppRoot", n);
	}, [n]), a(() => {
		t && (document.documentElement.lang = t);
	}, [t]), a(() => {
		Xe();
	}, []), m(Je, {
		locale: t,
		children: e
	}, void 0, !1, {
		fileName: Qe,
		lineNumber: 35,
		columnNumber: 5
	}, this);
}
var et = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/scripts/Wrapper.tsx";
function tt({ children: e }) {
	return m($e, {
		locale: "en",
		children: e
	}, void 0, !1, {
		fileName: et,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/pages/careers/OpenPositions.wrapper.tsx";
function nt() {
	return m(tt, { children: m(Ye, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { nt as default };
