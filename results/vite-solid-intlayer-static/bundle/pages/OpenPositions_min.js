import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r, createContext as i, createMemo as a, lazy as o, useContext as s } from "solid-js";
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
}, l = {
	constructor: "constructor",
	length: "length",
	slice: "slice",
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, u = (e) => typeof e == "string" && /^\d+$/.test(e), d = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		if (n === l.value) return t;
		if (n === Symbol.toPrimitive) return (e) => e === "number" ? Number(t) : t ?? "";
		if (n === l.toString) return () => String(t ?? "");
		if (n === l.valueOf) return () => t;
		if (n === l.slice) return Reflect.get(e, n, r);
		if (t != null && typeof n == "string" && n !== l.constructor && n !== l.length && !u(n)) {
			let e = Object(t);
			if (n in e) {
				let r = Reflect.get(e, n);
				return typeof r == "function" ? r.bind(t) : r;
			}
		}
		return Reflect.get(e, n, r);
	} });
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
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, m = /* @__PURE__ */ new WeakMap(), h = 0, g = (e) => {
	if (!e) return "base";
	let t = m.get(e);
	if (t) return t;
	h += 1;
	let n = `p${h}`;
	return m.set(e, n), n;
}, _ = 256, v = /* @__PURE__ */ new WeakMap(), y = (e) => typeof e == "object" && !!e, b = (e, t, n) => `${e}_${t}_${g(n)}`, x = (e, t) => {
	if (!y(e)) return { hit: !1 };
	let n = v.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, S = (e, t, n) => {
	if (!y(e)) return n;
	let r = v.get(e);
	return r || (r = /* @__PURE__ */ new Map(), v.set(e, r)), r.size >= _ && r.clear(), r.set(t, n), n;
}, C = "translation", w = "object", T = "array", E = (e, t) => {
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
}, D = "default", O = /[^A-Za-z0-9._&=-]/g, k = /[^A-Za-z0-9._-]/g, A = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, j = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, A);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, M = (e) => e === void 0 ? D : typeof e == "string" ? j(e, O) : Object.keys(e).sort().map((t) => `${j(t, k)}=${j(String(e[t]), k)}`).join("&"), N = (e) => Array.isArray(e) ? e.length === 0 ? [D] : e.map(M) : [M(e)], ee = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? D : e[0] ?? "default";
}, te = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ne = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, re = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, ie = (e, t) => {
	if (!ne(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? D : ee(N(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => te(e, n, t, s)).map((t) => re(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ae = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, P = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? N(n).join(",") : String(n)}`;
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
					type: C,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return L(o, e, t);
	}
}, B = R, V = (e) => R, H = R, U = R, W = R, G = R, K = (e) => R, q = R, J = (e, t = !0) => [
	z(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	B,
	H,
	U,
	K(e ?? f.defaultLocale),
	q,
	W,
	G
], oe = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), se = (e, t, n) => {
	let { locale: r, selector: i } = ae(t), a = b(r ?? f.defaultLocale, P(i), n), o = x(e, a);
	if (o.hit) return o.content;
	let s = n ?? J(r), c = ie(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return oe(e.content, t, s);
	};
	return c === null ? S(e, a, null) : Array.isArray(c) ? S(e, a, c.map(l)) : S(e, a, l(c));
}, Y = null, X = null;
Y?.catch(() => {}), X?.catch(() => {});
var ce = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => d({
		...n,
		value: n.children,
		children: n.children
	})
}, le = R, ue = R;
o(() => Y.then((e) => ({ default: e.MarkdownRenderer }))), o(() => Y.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var de = R;
o(() => X.then((e) => ({ default: e })));
var fe = R, Z = /* @__PURE__ */ new Map(), pe = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		z(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		B,
		V(e ?? f.defaultLocale),
		H,
		K(e ?? f.defaultLocale),
		q,
		W,
		G,
		ce,
		le,
		ue,
		de,
		fe
	];
	return Z.set(n, r), r;
}, me = (e, t) => se(e, t, pe(typeof t == "object" && t ? t.locale : t)), Q = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var $ = {
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
}, he = ((e = $) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Q) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})($), ge = i({
	locale: () => he ?? f?.defaultLocale,
	setLocale: () => null
}), _e = Symbol("LOADABLE_SETTLED_VALUE"), ve = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[_e];
}, ye = (e, t) => {
	let n = s(ge) ?? {}, r = a(() => {
		let r = n?.locale?.();
		return me(ve(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, be = n("<h2 class=\"mb-6 text-2xl font-bold text-foreground\">"), xe = n("<div class=space-y-4>"), Se = n("<div class=\"flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between\"><div><h3 class=\"text-base font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p><div class=\"mt-2 flex gap-2\"><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"></span></div></div><button type=button class=\"shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function Ce() {
	let n = ye(c), i = [
		{
			title: n().p.value,
			location: n().n.value,
			type: "Full-time",
			dept: n().j.value,
			desc: n().c.value
		},
		{
			title: n().b.value,
			location: n().n.value,
			type: "Full-time",
			dept: n().j.value,
			desc: n().f.value
		},
		{
			title: n().q.value,
			location: n().n.value,
			type: "Part-time",
			dept: n().h.value,
			desc: n().e.value
		},
		{
			title: n().g.value,
			location: n().o.value,
			type: "Full-time",
			dept: n().d.value,
			desc: n().i.value
		},
		{
			title: n().m.value,
			location: n().n.value,
			type: "Full-time",
			dept: n().j.value,
			desc: n().k.value
		}
	];
	return [(() => {
		var e = be();
		return t(e, () => n().l), e;
	})(), (() => {
		var a = xe();
		return t(a, e(r, {
			each: i,
			children: (e) => (() => {
				var r = Se(), i = r.firstChild, a = i.firstChild, o = a.nextSibling, s = o.nextSibling.firstChild, c = s.nextSibling, l = c.nextSibling, u = i.nextSibling;
				return t(a, () => e.title), t(o, () => e.desc), t(s, () => e.dept), t(c, () => e.location), t(l, () => e.type), t(u, () => n().a), r;
			})()
		})), a;
	})()];
}
export { Ce as default };
