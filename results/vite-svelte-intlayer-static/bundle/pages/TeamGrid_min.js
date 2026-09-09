import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, get as r, writable as i } from "svelte/store";
var a = {
	key: "team-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"managesCommunityContributionsPartnership\":\"Manages community contributions, partnerships, and events. Background in open source governance.\",\"communityManager\":\"Community Manager\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\",\"dataAnalyst\":\"Data Analyst\",\"yukiTanaka\":\"Yuki Tanaka\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\",\"fullStackDeveloper\":\"Full-Stack Developer\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\",\"developerAdvocate\":\"Developer Advocate\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\",\"performanceEngineer\":\"Performance Engineer\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"Former Google engineer with 10 years of experience building internationalization systems at scale.\",\"founderLeadEngineer\":\"Founder & Lead Engineer\",\"sarahChen\":\"Sarah Chen\"},\"fr\":{\"managesCommunityContributionsPartnership\":\"Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.\",\"communityManager\":\"Responsable de communauté\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.\",\"dataAnalyst\":\"Analyste de données\",\"yukiTanaka\":\"Yuki Tanaka\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Maintient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.\",\"fullStackDeveloper\":\"Développeur full-stack\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"Passionnée par l'expérience et l'éducation des développeurs. Conférencière à React Conf, JSConf et i18nNext.\",\"developerAdvocate\":\"Défenseur des développeurs\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.\",\"performanceEngineer\":\"Ingénieur performance\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"Ancien ingénieur Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.\",\"founderLeadEngineer\":\"Fondateur et ingénieur principal\",\"sarahChen\":\"Sarah Chen\"},\"es\":{\"managesCommunityContributionsPartnership\":\"Gestiona contribuciones de la comunidad, asociaciones и eventos. Antecedentes en gobernanza de código abierto.\",\"communityManager\":\"Gerente de comunidad\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"Garantiza el rigor estadístico en todos los resultados de los benchmarks. Doctorado en Estadística Aplicada del MIT.\",\"dataAnalyst\":\"Analista de datos\",\"yukiTanaka\":\"Yuki Tanaka\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Mantiene la infraestructura de benchmarking и el proceso de CI/CD. Colaborador de código abierto en Lingui.\",\"fullStackDeveloper\":\"Desarrollador full-stack\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"Apasionada por la experiencia и la educación de los desarrolladores. Oradora en React Conf, JSConf и i18nNext.\",\"developerAdvocate\":\"Defensor de los desarrolladores\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"Se especializa en la optimización del rendimiento de JavaScript и la metodología de benchmarking. Anteriormente en Vercel.\",\"performanceEngineer\":\"Ingeniero de rendimiento\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"Antiguo ingeniero de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.\",\"founderLeadEngineer\":\"Fundador и ingeniero principal\",\"sarahChen\":\"Sarah Chen\"},\"de\":{\"managesCommunityContributionsPartnership\":\"Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\",\"communityManager\":\"Community-Manager\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"Stellt statistische Strenge in allen Benchmark-Ergebnissen sicher. PhD in Angewandter Statistik vom MIT.\",\"dataAnalyst\":\"Datenanalyst\",\"yukiTanaka\":\"Yuki Tanaka\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.\",\"fullStackDeveloper\":\"Full-Stack-Entwickler\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"Leidenschaftlich für Entwicklererfahrung und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.\",\"developerAdvocate\":\"Developer Advocate\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.\",\"performanceEngineer\":\"Performance-Ingenieur\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"Ehemaliger Google-Ingenieur mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\",\"founderLeadEngineer\":\"Gründer und leitender Ingenieur\",\"sarahChen\":\"Sarah Chen\"},\"it\":{\"managesCommunityContributionsPartnership\":\"Gestisce i contributi della community, le partnership e gli eventi. Esperienza nella governance open source.\",\"communityManager\":\"Community Manager\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato di ricerca in statistica applicata presso il MIT.\",\"dataAnalyst\":\"Analista di dati\",\"yukiTanaka\":\"Yuki Tanaka\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.\",\"fullStackDeveloper\":\"Sviluppatore full-stack\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"Appassionata di esperienza sviluppatore e formazione. Relatrice a React Conf, JSConf e i18nNext.\",\"developerAdvocate\":\"Developer Advocate\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente in Vercel.\",\"performanceEngineer\":\"Ingegnere delle prestazioni\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"Ex ingegnere Google con 10 anni di esperienza nella creazione di sistemi di internazionalizzazione su vasta scala.\",\"founderLeadEngineer\":\"Fondatore e ingegnere capo\",\"sarahChen\":\"Sarah Chen\"},\"pt\":{\"managesCommunityContributionsPartnership\":\"Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\",\"communityManager\":\"Gerente de Comunidade\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.\",\"dataAnalyst\":\"Analista de Dados\",\"yukiTanaka\":\"Yuki Tanaka\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Colaborador de código aberto do Lingui.\",\"fullStackDeveloper\":\"Desenvolvedor Full-Stack\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"Apaixonada por experiência e educação de desenvolvedores. Palestrante na React Conf, JSConf e i18nNext.\",\"developerAdvocate\":\"Developer Advocate\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\",\"performanceEngineer\":\"Engenheiro de Performance\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"Ex-engenheiro do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\",\"founderLeadEngineer\":\"Fundador e Engenheiro Principal\",\"sarahChen\":\"Sarah Chen\"},\"zh\":{\"managesCommunityContributionsPartnership\":\"管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\",\"communityManager\":\"社区经理\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。\",\"dataAnalyst\":\"数据分析师\",\"yukiTanaka\":\"田中幸\",\"maintainsTheBenchmarkingInfrastructureAn\":\"维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。\",\"fullStackDeveloper\":\"全栈开发人员\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"热爱开发人员体验和教育。曾在 React Conf, JSConf 和 i18nNext 发表演讲。\",\"developerAdvocate\":\"开发人员倡导者\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"专注于 JavaScript 性能优化和基准测试方法。曾就职于 Vercel。\",\"performanceEngineer\":\"性能工程师\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"前 Google 工程师，拥有 10 年构建大规模国际化系统的经验。\",\"founderLeadEngineer\":\"创始人兼首席工程师\",\"sarahChen\":\"陈莎拉\"},\"ja\":{\"managesCommunityContributionsPartnership\":\"コミュニティの貢献、パートナーシップ、およびイベントを管理します。オープンソースガバナンスの経歴があります。\",\"communityManager\":\"コミュニティマネージャー\",\"elenaKowalski\":\"エレナ・コワルスキー\",\"ensuresStatisticalRigorInAll\":\"すべてのベンチマーク結果において統計的な厳密さを保証します。MIT で応用統計学の博士号を取得。\",\"dataAnalyst\":\"データアナリスト\",\"yukiTanaka\":\"田中 勇気\",\"maintainsTheBenchmarkingInfrastructureAn\":\"ベンチマークインフラストラクチャと CI/CD パイプラインを維持します。Lingui へのオープンソース貢献者。\",\"fullStackDeveloper\":\"フルスタックデベロッパー\",\"tomasRodriguez\":\"トマス・ロドリゲス\",\"passionateAboutDeveloperExperienceAnd\":\"デベロッパーエクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、および i18nNext のスピーカー。\",\"developerAdvocate\":\"デベロッパーアドボケイト\",\"aishaPatel\":\"アイシャ・パテル\",\"specializesInJavascriptPerformanceOptimi\":\"JavaScript のパフォーマンス最適化とベンチマーク手法を専門としています。以前は Vercel に在籍。\",\"performanceEngineer\":\"パフォーマンスエンジニア\",\"marcusWeber\":\"マーカス・ウェーバー\",\"formerGoogleEngineerWith10\":\"元 Google エンジニアで、大規模な国際化システムの構築において 10 年の経験があります。\",\"founderLeadEngineer\":\"創設者兼リードエンジニア\",\"sarahChen\":\"サラ・チェン\"},\"ko\":{\"managesCommunityContributionsPartnership\":\"커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경이 있습니다.\",\"communityManager\":\"커뮤니티 매니저\",\"elenaKowalski\":\"엘레나 코발스키\",\"ensuresStatisticalRigorInAll\":\"모든 벤치마크 결과에서 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.\",\"dataAnalyst\":\"데이터 분석가\",\"yukiTanaka\":\"유키 타나카\",\"maintainsTheBenchmarkingInfrastructureAn\":\"벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui의 오픈 소스 기여자입니다.\",\"fullStackDeveloper\":\"풀스택 개발자\",\"tomasRodriguez\":\"토마스 로드리게스\",\"passionateAboutDeveloperExperienceAnd\":\"개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.\",\"developerAdvocate\":\"데벨로퍼 애드보킷\",\"aishaPatel\":\"아이샤 파텔\",\"specializesInJavascriptPerformanceOptimi\":\"JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.\",\"performanceEngineer\":\"성능 엔지니어\",\"marcusWeber\":\"마르쿠스 베버\",\"formerGoogleEngineerWith10\":\"대규모 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.\",\"founderLeadEngineer\":\"설립자 및 수석 엔지니어\",\"sarahChen\":\"사라 첸\"},\"ru\":{\"managesCommunityContributionsPartnership\":\"Управление вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.\",\"communityManager\":\"Комьюнити-менеджер\",\"elenaKowalski\":\"Елена Ковальски\",\"ensuresStatisticalRigorInAll\":\"Обеспечивает статистическую строгость всех результатов бенчмарков. Доктор философии (PhD) в области прикладной статистики Массачусетского технологического института (MIT).\",\"dataAnalyst\":\"Дата-аналитик\",\"yukiTanaka\":\"Юки Танака\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Поддерживает инфраструктуру бенчмаркинга и пайплайн CI/CD. Участник open source проекта Lingui.\",\"fullStackDeveloper\":\"Full-stack разработчик\",\"tomasRodriguez\":\"Томас Родригес\",\"passionateAboutDeveloperExperienceAnd\":\"Увлечена опытом разработки и обучением. Спикер на React Conf, JSConf и i18nNext.\",\"developerAdvocate\":\"Developer Advocate\",\"aishaPatel\":\"Айша Патель\",\"specializesInJavascriptPerformanceOptimi\":\"Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.\",\"performanceEngineer\":\"Инженер по производительности\",\"marcusWeber\":\"Маркус Вебер\",\"formerGoogleEngineerWith10\":\"Бывший инженер Google с 10-летним опытом создания масштабируемых систем интернационализации.\",\"founderLeadEngineer\":\"Основатель и ведущий инженер\",\"sarahChen\":\"Сара Чен\"}}}")
}, o = {
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
}, s = o?.defaultLocale, c = (() => {
	let { subscribe: e, set: t, update: r } = i({ locale: s });
	return {
		subscribe: e,
		setLocale: (e) => r((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: s })
	};
})(), l = Symbol("intlayer"), u = () => t(l), d = "default", f = /[^A-Za-z0-9._&=-]/g, p = /[^A-Za-z0-9._-]/g, m = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, h = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, m);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, g = (e) => e === void 0 ? d : typeof e == "string" ? h(e, f) : Object.keys(e).sort().map((t) => `${h(t, p)}=${h(String(e[t]), p)}`).join("&"), _ = (e) => Array.isArray(e) ? e.length === 0 ? [d] : e.map(g) : [g(e)], v = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? d : e[0] ?? "default";
}, y = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ee = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, te = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, b = (e, t) => {
	if (!ee(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? d : v(_(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => y(e, n, t, s)).map((t) => te(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, x = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, S = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? _(n).join(",") : String(n)}`;
}).join("|") : "", C = "translation", w = "object", T = "array", E = (e, t) => {
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
}, D = /* @__PURE__ */ new WeakMap(), O = 0, k = (e) => {
	if (!e) return "base";
	let t = D.get(e);
	if (t) return t;
	O += 1;
	let n = `p${O}`;
	return D.set(e, n), n;
}, A = 256, j = /* @__PURE__ */ new WeakMap(), M = (e) => typeof e == "object" && !!e, ne = (e, t, n) => `${e}_${t}_${k(n)}`, re = (e, t) => {
	if (!M(e)) return { hit: !1 };
	let n = j.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, N = (e, t, n) => {
	if (!M(e)) return n;
	let r = j.get(e);
	return r || (r = /* @__PURE__ */ new Map(), j.set(e, r)), r.size >= A && r.clear(), r.set(t, n), n;
}, P = (e, t = !0) => [
	V(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
	H,
	W,
	G,
	J(e ?? o.defaultLocale),
	Y,
	K,
	q
], F = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), I = (e, t, n) => {
	let { locale: r, selector: i } = x(t), a = ne(r ?? o.defaultLocale, S(i), n), s = re(e, a);
	if (s.hit) return s.content;
	let c = n ?? P(r), l = b(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries
		};
		return F(e.content, t, c);
	};
	return l === null ? N(e, a, null) : Array.isArray(l) ? N(e, a, l.map(u)) : N(e, a, u(l));
}, L = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, R = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (L(e) && L(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : R(e[r], t[r]));
		return n;
	}
	return e;
}, z = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => R(e, t));
}, B = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, V = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? B : {
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
		return z(o, e, t);
	}
}, H = B, U = (e) => B, W = B, G = B, K = B, q = B, J = (e) => B, Y = B;
function X(t, n) {
	e.push(n, !1);
	let r = e.prop(n, "Renderer", 8, void 0), i = e.prop(n, "rendererProps", 24, () => ({})), a = e.prop(n, "value", 8, void 0), o = e.mutable_source(), s = e.mutable_source(!1);
	e.legacy_pre_effect(() => e.deep_read_state(r()), () => {
		typeof r()?.then == "function" ? (e.set(s, !0), r().then((t) => {
			e.set(o, t), e.set(s, !1);
		})) : (e.set(o, r()), e.set(s, !1));
	}), e.legacy_pre_effect_reset(), e.init();
	var c = e.comment(), l = e.first_child(c), u = (e) => {}, d = (t) => {
		var n = e.comment(), r = e.first_child(n);
		e.element(r, () => e.get(o), !1, (t, n) => {
			e.attribute_effect(t, () => ({ ...i() }));
			var r = e.text();
			e.template_effect(() => e.set_text(r, a())), e.append(n, r);
		}), e.append(t, n);
	}, f = (t) => {
		e.get(o)(t, e.spread_props(i, {
			children: (t, n) => {
				e.next();
				var r = e.text();
				e.template_effect(() => e.set_text(r, a())), e.append(t, r);
			},
			$$slots: { default: !0 }
		}));
	}, p = (t) => {
		var n = e.text();
		e.template_effect(() => e.set_text(n, a())), e.append(t, n);
	};
	e.if(l, (t) => {
		e.get(s) ? t(u) : typeof e.get(o) == "string" ? t(d, 1) : typeof e.get(o) == "function" ? t(f, 2) : t(p, -1);
	}), e.append(t, c), e.pop();
}
var ie = (e) => {
	let t = !!X.prototype?.$destroy, n;
	if (n = t ? class extends X {
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
	} : (t) => X(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "toString", {
		value: () => String(e.value ?? ""),
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "valueOf", {
		value: () => e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, Symbol.toPrimitive, {
		value: () => e.value ?? "",
		writable: !0,
		configurable: !0
	}), e.value !== null && e.value !== void 0) {
		let t = Object(e.value), r = Object.getPrototypeOf(t);
		for (let i of Object.getOwnPropertyNames(r)) {
			if (i === "constructor" || i in n) continue;
			let r = t[i];
			typeof r == "function" && Object.defineProperty(n, i, {
				value: r.bind(e.value),
				writable: !0,
				configurable: !0
			});
		}
	}
	return e.additionalProps && Object.assign(n, e.additionalProps), n;
}, Z = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => ie({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, ae = Z, oe = B, se = B, ce = B, Q = /* @__PURE__ */ new Map(), le = (e, t = !0) => {
	let n = `${e ?? o.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		V(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
		H,
		U(e ?? o.defaultLocale),
		W,
		J(e ?? o.defaultLocale),
		Y,
		K,
		q,
		Z,
		ae,
		oe,
		se,
		ce
	];
	return Q.set(n, r), r;
}, $ = (e, t) => I(e, t, le(typeof t == "object" && t ? t.locale : t)), ue = (e, t) => {
	let r = u();
	return n([c], ([n]) => {
		let i = r?.locale ?? n.locale;
		return $(e, t ?? i);
	});
}, de = e.from_html("<div class=\"rounded-lg border border-border bg-card p-6 text-center\"><div class=\"mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground\"> </div> <h3 class=\"text-base font-semibold text-foreground\"> </h3> <p class=\"mb-2 text-xs font-medium text-primary\"> </p> <p class=\"text-sm text-muted-foreground\"> </p></div>"), fe = e.from_html("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\"></div>");
function pe(t, n) {
	e.push(n, !1);
	let i = ue(a), o = [
		{
			name: r(i).sarahChen,
			role: r(i).founderLeadEngineer,
			bio: r(i).formerGoogleEngineerWith10
		},
		{
			name: r(i).marcusWeber,
			role: r(i).performanceEngineer,
			bio: r(i).specializesInJavascriptPerformanceOptimi
		},
		{
			name: r(i).aishaPatel,
			role: r(i).developerAdvocate,
			bio: r(i).passionateAboutDeveloperExperienceAnd
		},
		{
			name: r(i).tomasRodriguez,
			role: r(i).fullStackDeveloper,
			bio: r(i).maintainsTheBenchmarkingInfrastructureAn
		},
		{
			name: r(i).yukiTanaka,
			role: r(i).dataAnalyst,
			bio: r(i).ensuresStatisticalRigorInAll
		},
		{
			name: r(i).elenaKowalski,
			role: r(i).communityManager,
			bio: r(i).managesCommunityContributionsPartnership
		}
	];
	e.init();
	var s = fe();
	e.each(s, 5, () => o, (e) => e.name, (t, n) => {
		var r = de(), i = e.child(r), a = e.only_child(i, !0), o = e.sibling(i, 2), s = e.only_child(o, !0), c = e.sibling(o, 2), l = e.only_child(c, !0), u = e.sibling(c, 2), d = e.only_child(u, !0);
		e.reset(r), e.template_effect((t) => {
			e.set_text(a, t), e.set_text(s, e.get(n).name), e.set_text(l, e.get(n).role), e.set_text(d, e.get(n).bio);
		}, [() => e.get(n).name.split(" ").map((e) => e[0]).join("")]), e.append(t, r);
	}), e.reset(s), e.append(t, s), e.pop();
}
export { pe as default };
