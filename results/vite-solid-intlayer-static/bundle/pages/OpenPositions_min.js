import { Dynamic as e, createComponent as t, insert as n, template as r } from "solid-js/web";
import { For as i, createContext as a, createMemo as o, useContext as s } from "solid-js";
var c = {
	key: "open-positions",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				p: "Senior Frontend Engineer",
				n: "Remote",
				j: "Engineering",
				c: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
				b: "Backend Engineer",
				f: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
				q: "Technical Writer",
				h: "Documentation",
				e: "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
				g: "DevRel Engineer",
				o: "San Francisco / Remote",
				d: "Community",
				i: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
				m: "QA Engineer",
				k: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
				l: "Open Positions",
				a: "Apply Now"
			},
			fr: {
				p: "Ingénieur Frontend Senior",
				n: "À distance",
				j: "Ingénierie",
				c: "Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.",
				b: "Ingénieur Backend",
				f: "Concevoir et mettre à l’échelle notre infrastructure de benchmarking cloud gérant des milliers d’exécutions automatisées chaque jour.",
				q: "Rédacteur Technique",
				h: "Documentation",
				e: "Créer des guides complets, des références API et des tutoriels pour notre plateforme de benchmarking.",
				g: "Ingénieur DevRel",
				o: "San Francisco / À distance",
				d: "Communauté",
				i: "Interagir avec la communauté i18n par des conférences, des ateliers, des articles de blog et des contributions open source.",
				m: "Ingénieur QA",
				k: "Assurer l'exactitude et la fiabilité des résultats de benchmark grâce à des tests et des validations rigoureux.",
				l: "Postes Ouverts",
				a: "Postuler Maintenant"
			},
			es: {
				p: "Ingeniero Frontend Senior",
				n: "Remoto",
				j: "Ingeniería",
				c: "Cree y mantenga nuestro panel de benchmarking y herramientas de desarrollo utilizando React, TypeScript y Vite.",
				b: "Ingeniero Backend",
				f: "Diseñe y escale nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.",
				q: "Redactor Técnico",
				h: "Documentación",
				e: "Cree guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.",
				g: "Ingeniero DevRel",
				o: "San Francisco / Remoto",
				d: "Comunidad",
				i: "Participe con la comunidad i18n a través de charlas, talleres, publicaciones de blog y contribuciones de código abierto.",
				m: "Ingeniero QA",
				k: "Garantice la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.",
				l: "Posiciones abiertas",
				a: "Postular ahora"
			},
			de: {
				p: "Senior Frontend Engineer",
				n: "Remote",
				j: "Engineering",
				c: "Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.",
				b: "Backend Engineer",
				f: "Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.",
				q: "Technical Writer",
				h: "Dokumentation",
				e: "Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.",
				g: "DevRel Engineer",
				o: "San Francisco / Remote",
				d: "Community",
				i: "Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.",
				m: "QA Engineer",
				k: "Stellen Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen sicher.",
				l: "Offene Stellen",
				a: "Jetzt bewerben"
			},
			it: {
				p: "Ingegnere Frontend Senior",
				n: "Remoto",
				j: "Ingegneria",
				c: "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.",
				b: "Backend Engineer",
				f: "Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.",
				q: "Scrittore tecnico",
				h: "Documentazione",
				e: "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.",
				g: "Ingegnere DevRel",
				o: "San Francisco / Remoto",
				d: "Comunità",
				i: "Interagisci con la comunità i18n attraverso talk, workshop, post sul blog e contributi open source.",
				m: "Ingegnere QA",
				k: "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.",
				l: "Posizioni aperte",
				a: "Candidati ora"
			},
			pt: {
				p: "Engenheiro Frontend Sênior",
				n: "Remoto",
				j: "Engenharia",
				c: "Crie e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.",
				b: "Engenheiro Backend",
				f: "Projete e dimensione nossa infraestrutura de benchmarking em nuvem que lida com milhares de execuções automatizadas diariamente.",
				q: "Escritor Técnico",
				h: "Documentação",
				e: "Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.",
				g: "Engenheiro DevRel",
				o: "San Francisco / Remoto",
				d: "Comunidade",
				i: "Envolva-se com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.",
				m: "Engenheiro de QA",
				k: "Garanta a precisão e a confiabilidade dos resultados do benchmark por meio de testes e validação rigorosos.",
				l: "Vagas abertas",
				a: "Candidatar-se agora"
			},
			zh: {
				p: "高级前端工程师",
				n: "远程",
				j: "工程",
				c: "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。",
				b: "后端工程师",
				f: "设计并扩展我们的云基准测试基础设施，每天处理数千次自动化运行。",
				q: "技术文档工程师",
				h: "文档",
				e: "为我们的基准测试平台创建全面的指南、API 参考和教程。",
				g: "开发者关系工程师",
				o: "旧金山 / 远程",
				d: "社区",
				i: "通过演讲、工作坊、博客文章和开源贡献与 i18n 社区互动。",
				m: "质量保证工程师",
				k: "通过严格的测试和验证，确保基准测试结果的准确性和可靠性。",
				l: "开放职位",
				a: "现在申请"
			},
			ja: {
				p: "シニアフロントエンドエンジニア",
				n: "リモート",
				j: "エンジニアリング",
				c: "React、TypeScript、およびViteを使用して、ベンチマークダッシュボードと開発者ツールを構築および保守します。",
				b: "バックエンドエンジニア",
				f: "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計およびスケールします。",
				q: "テクニカルライター",
				h: "ドキュメント",
				e: "ベンチマークプラットフォームの包括的なガイド、APIリファレンス、およびチュートリアルを作成します。",
				g: "DevRelエンジニア",
				o: "サンフランシスコ / リモート",
				d: "コミュニティ",
				i: "トーク、ワークショップ、ブログ投稿、およびオープンソースへの貢献を通じて、i18nコミュニティと交流します。",
				m: "QAエンジニア",
				k: "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。",
				l: "募集中の職種",
				a: "今すぐ応募"
			},
			ko: {
				p: "시니어 프론트엔드 엔지니어",
				n: "원격",
				j: "엔지니어링",
				c: "React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.",
				b: "백엔드 엔지니어",
				f: "매일 수천 건의 자동화된 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.",
				q: "테크니컬 라이터",
				h: "문서",
				e: "벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 만듭니다.",
				g: "DevRel 엔지니어",
				o: "샌프란시스코 / 원격",
				d: "커뮤니티",
				i: "강연, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통하십시오.",
				m: "QA 엔지니어",
				k: "엄격한 테스트 및 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.",
				l: "채용 중인 직무",
				a: "지금 지원하기"
			},
			ru: {
				p: "Старший фронтенд-инженер",
				n: "Удаленно",
				j: "Разработка",
				c: "Создание и поддержка нашего дашборда для бенчмаркинга и инструментов разработки с использованием React, TypeScript и Vite.",
				b: "Бэкенд-инженер",
				f: "Проектирование и масштабирование нашей облачной инфраструктуры для бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.",
				q: "Технический писатель",
				h: "Документация",
				e: "Создание подробных руководств, справочников по API и учебных пособий для нашей платформы бенчмаркинга.",
				g: "DevRel-инженер",
				o: "Сан-Франциско / Удаленно",
				d: "Сообщество",
				i: "Взаимодействие с сообществом i18n посредством выступлений, семинаров, постов в блогах и вклада в open source.",
				m: "QA-инженер",
				k: "Обеспечение точности и надежности результатов бенчмарков путем тщательного тестирования и валидации.",
				l: "Открытые вакансии",
				a: "Подать заявку"
			}
		}
	}
}, l = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
}, u = (t) => {
	if (typeof t == "string") return t;
	let { type: n, props: r } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let t = [], { children: n } = e.props;
			return Object.keys(n ?? {}).forEach((e) => {
				t.push(u(n?.[e]));
			}), {
				...e,
				props: {
					...e.props,
					children: t
				}
			};
		}
		return {
			...e,
			props: {
				...e.props,
				children: e.props?.children ?? []
			}
		};
	})(t);
	return e({
		component: n ?? "span",
		...r,
		children: r.children
	});
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
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, p = "translation", m = "object", h = "array", g = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => g(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => g(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: h,
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
					type: m,
					key: r
				}]
			}, i = g(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, _ = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, v = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (_(e) && _(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : v(e[r], t[r]));
		return n;
	}
	return e;
}, y = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => v(e, t));
}, b = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, x = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? b : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: p,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return y(o, e, t);
	}
}, S = b, C = b, w = b, T = b, E = (e) => b, D = b, O = (e, t = !0) => [
	x(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
	S,
	C,
	w,
	E(e ?? d.defaultLocale),
	D,
	T
], k = (e, t, n = []) => g(e, {
	...t,
	plugins: n
}), A = (e, t, n = O(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return k(e.content, r, n);
}, j = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => l({
		...n,
		value: n.children,
		children: n.children
	})
}, M = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? b : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (e, { plugins: t, ...n }) => l({
		...n,
		value: "[[solid-element]]",
		children: typeof Node < "u" && e instanceof Node ? e : u(e)
	})
}, N = b, P = b, F = b, I = /* @__PURE__ */ new Map(), L = (e, t = !0) => {
	let n = `${e ?? d.defaultLocale}_${t}`;
	if (I.has(n)) return I.get(n);
	let r = [
		x(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
		S,
		C,
		E(e ?? d.defaultLocale),
		D,
		T,
		j,
		M,
		N,
		P,
		F
	];
	return I.set(n, r), r;
}, R = (e, t) => A(e, t, L(t)), z = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var B = (e = V) => {
	let { locales: t } = d;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!z) for (let t = 0; t < (f.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(f.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, V = {
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
}, H = B(V), U = a({
	locale: () => H ?? d?.defaultLocale,
	setLocale: () => null
}), W = (e, t) => {
	let n = s(U) ?? {};
	return o(() => R(e, t ?? n?.locale?.()));
}, G = r("<h2 class=\"mb-6 text-2xl font-bold text-foreground\">"), K = r("<div class=space-y-4>"), q = r("<div class=\"flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between\"><div><h3 class=\"text-base font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p><div class=\"mt-2 flex gap-2\"><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span></div></div><button type=button class=\"shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function J() {
	let e = W(c), r = [
		{
			title: e().seniorFrontendEngineer.value,
			location: e().remote.value,
			type: "Full-time",
			dept: e().engineering.value,
			desc: e().buildAndMaintainOurBenchmarking.value
		},
		{
			title: e().backendEngineer.value,
			location: e().remote.value,
			type: "Full-time",
			dept: e().engineering.value,
			desc: e().designAndScaleOurCloud.value
		},
		{
			title: e().technicalWriter.value,
			location: e().remote.value,
			type: "Part-time",
			dept: e().documentation.value,
			desc: e().createComprehensiveGuidesApiReferences.value
		},
		{
			title: e().devrelEngineer.value,
			location: e().sanFranciscoRemote.value,
			type: "Full-time",
			dept: e().community.value,
			desc: e().engageWithTheI18nCommunity.value
		},
		{
			title: e().qaEngineer.value,
			location: e().remote.value,
			type: "Full-time",
			dept: e().engineering.value,
			desc: e().ensureTheAccuracyAndReliability.value
		}
	];
	return [(() => {
		var t = G();
		return n(t, () => e().openPositions), t;
	})(), (() => {
		var a = K();
		return n(a, t(i, {
			each: r,
			children: (t) => (() => {
				var r = q(), i = r.firstChild, a = i.firstChild, o = a.nextSibling, s = o.nextSibling.firstChild, c = s.nextSibling, l = c.nextSibling, u = i.nextSibling;
				return n(a, () => t.title), n(o, () => t.desc), n(s, () => t.dept), n(c, () => t.location), n(l, () => t.type), n(u, () => e().applyNow), r;
			})()
		})), a;
	})()];
}
export { J as default };
