import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, writable as r } from "svelte/store";
import "svelte/internal/flags/legacy";
var i = {
	key: "team-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"managesCommunityContributionsPartnership\":\"Manages community contributions, partnerships, and events. Background in open source governance.\",\"communityManager\":\"Community Manager\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\",\"dataAnalyst\":\"Data Analyst\",\"yukiTanaka\":\"Yuki Tanaka\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\",\"fullStackDeveloper\":\"Full-Stack Developer\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\",\"developerAdvocate\":\"Developer Advocate\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\",\"performanceEngineer\":\"Performance Engineer\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"Former Google engineer with 10 years of experience building internationalization systems at scale.\",\"founderLeadEngineer\":\"Founder & Lead Engineer\",\"sarahChen\":\"Sarah Chen\"},\"fr\":{\"managesCommunityContributionsPartnership\":\"Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.\",\"communityManager\":\"Responsable de communauté\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.\",\"dataAnalyst\":\"Analyste de données\",\"yukiTanaka\":\"Yuki Tanaka\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Maintient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.\",\"fullStackDeveloper\":\"Développeur full-stack\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"Passionnée par l'expérience et l'éducation des développeurs. Conférencière à React Conf, JSConf et i18nNext.\",\"developerAdvocate\":\"Défenseur des développeurs\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.\",\"performanceEngineer\":\"Ingénieur performance\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"Ancien ingénieur Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.\",\"founderLeadEngineer\":\"Fondateur et ingénieur principal\",\"sarahChen\":\"Sarah Chen\"},\"es\":{\"managesCommunityContributionsPartnership\":\"Gestiona contribuciones de la comunidad, asociaciones и eventos. Antecedentes en gobernanza de código abierto.\",\"communityManager\":\"Gerente de comunidad\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"Garantiza el rigor estadístico en todos los resultados de los benchmarks. Doctorado en Estadística Aplicada del MIT.\",\"dataAnalyst\":\"Analista de datos\",\"yukiTanaka\":\"Yuki Tanaka\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Mantiene la infraestructura de benchmarking и el proceso de CI/CD. Colaborador de código abierto en Lingui.\",\"fullStackDeveloper\":\"Desarrollador full-stack\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"Apasionada por la experiencia и la educación de los desarrolladores. Oradora en React Conf, JSConf и i18nNext.\",\"developerAdvocate\":\"Defensor de los desarrolladores\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"Se especializa en la optimización del rendimiento de JavaScript и la metodología de benchmarking. Anteriormente en Vercel.\",\"performanceEngineer\":\"Ingeniero de rendimiento\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"Antiguo ingeniero de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.\",\"founderLeadEngineer\":\"Fundador и ingeniero principal\",\"sarahChen\":\"Sarah Chen\"},\"de\":{\"managesCommunityContributionsPartnership\":\"Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\",\"communityManager\":\"Community-Manager\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"Stellt statistische Strenge in allen Benchmark-Ergebnissen sicher. PhD in Angewandter Statistik vom MIT.\",\"dataAnalyst\":\"Datenanalyst\",\"yukiTanaka\":\"Yuki Tanaka\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.\",\"fullStackDeveloper\":\"Full-Stack-Entwickler\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"Leidenschaftlich für Entwicklererfahrung und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.\",\"developerAdvocate\":\"Developer Advocate\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.\",\"performanceEngineer\":\"Performance-Ingenieur\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"Ehemaliger Google-Ingenieur mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\",\"founderLeadEngineer\":\"Gründer und leitender Ingenieur\",\"sarahChen\":\"Sarah Chen\"},\"it\":{\"managesCommunityContributionsPartnership\":\"Gestisce i contributi della community, le partnership e gli eventi. Esperienza nella governance open source.\",\"communityManager\":\"Community Manager\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato di ricerca in statistica applicata presso il MIT.\",\"dataAnalyst\":\"Analista di dati\",\"yukiTanaka\":\"Yuki Tanaka\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.\",\"fullStackDeveloper\":\"Sviluppatore full-stack\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"Appassionata di esperienza sviluppatore e formazione. Relatrice a React Conf, JSConf e i18nNext.\",\"developerAdvocate\":\"Developer Advocate\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente in Vercel.\",\"performanceEngineer\":\"Ingegnere delle prestazioni\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"Ex ingegnere Google con 10 anni di esperienza nella creazione di sistemi di internazionalizzazione su vasta scala.\",\"founderLeadEngineer\":\"Fondatore e ingegnere capo\",\"sarahChen\":\"Sarah Chen\"},\"pt\":{\"managesCommunityContributionsPartnership\":\"Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\",\"communityManager\":\"Gerente de Comunidade\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.\",\"dataAnalyst\":\"Analista de Dados\",\"yukiTanaka\":\"Yuki Tanaka\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Colaborador de código aberto do Lingui.\",\"fullStackDeveloper\":\"Desenvolvedor Full-Stack\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"Apaixonada por experiência e educação de desenvolvedores. Palestrante na React Conf, JSConf e i18nNext.\",\"developerAdvocate\":\"Developer Advocate\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\",\"performanceEngineer\":\"Engenheiro de Performance\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"Ex-engenheiro do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\",\"founderLeadEngineer\":\"Fundador e Engenheiro Principal\",\"sarahChen\":\"Sarah Chen\"},\"zh\":{\"managesCommunityContributionsPartnership\":\"管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\",\"communityManager\":\"社区经理\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。\",\"dataAnalyst\":\"数据分析师\",\"yukiTanaka\":\"田中幸\",\"maintainsTheBenchmarkingInfrastructureAn\":\"维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。\",\"fullStackDeveloper\":\"全栈开发人员\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"热爱开发人员体验和教育。曾在 React Conf, JSConf 和 i18nNext 发表演讲。\",\"developerAdvocate\":\"开发人员倡导者\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"专注于 JavaScript 性能优化和基准测试方法。曾就职于 Vercel。\",\"performanceEngineer\":\"性能工程师\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"前 Google 工程师，拥有 10 年构建大规模国际化系统的经验。\",\"founderLeadEngineer\":\"创始人兼首席工程师\",\"sarahChen\":\"陈莎拉\"},\"ja\":{\"managesCommunityContributionsPartnership\":\"コミュニティの貢献、パートナーシップ、およびイベントを管理します。オープンソースガバナンスの経歴があります。\",\"communityManager\":\"コミュニティマネージャー\",\"elenaKowalski\":\"エレナ・コワルスキー\",\"ensuresStatisticalRigorInAll\":\"すべてのベンチマーク結果において統計的な厳密さを保証します。MIT で応用統計学の博士号を取得。\",\"dataAnalyst\":\"データアナリスト\",\"yukiTanaka\":\"田中 勇気\",\"maintainsTheBenchmarkingInfrastructureAn\":\"ベンチマークインフラストラクチャと CI/CD パイプラインを維持します。Lingui へのオープンソース貢献者。\",\"fullStackDeveloper\":\"フルスタックデベロッパー\",\"tomasRodriguez\":\"トマス・ロドリゲス\",\"passionateAboutDeveloperExperienceAnd\":\"デベロッパーエクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、および i18nNext のスピーカー。\",\"developerAdvocate\":\"デベロッパーアドボケイト\",\"aishaPatel\":\"アイシャ・パテル\",\"specializesInJavascriptPerformanceOptimi\":\"JavaScript のパフォーマンス最適化とベンチマーク手法を専門としています。以前は Vercel に在籍。\",\"performanceEngineer\":\"パフォーマンスエンジニア\",\"marcusWeber\":\"マーカス・ウェーバー\",\"formerGoogleEngineerWith10\":\"元 Google エンジニアで、大規模な国際化システムの構築において 10 年の経験があります。\",\"founderLeadEngineer\":\"創設者兼リードエンジニア\",\"sarahChen\":\"サラ・チェン\"},\"ko\":{\"managesCommunityContributionsPartnership\":\"커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경이 있습니다.\",\"communityManager\":\"커뮤니티 매니저\",\"elenaKowalski\":\"엘레나 코발스키\",\"ensuresStatisticalRigorInAll\":\"모든 벤치마크 결과에서 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.\",\"dataAnalyst\":\"데이터 분석가\",\"yukiTanaka\":\"유키 타나카\",\"maintainsTheBenchmarkingInfrastructureAn\":\"벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui의 오픈 소스 기여자입니다.\",\"fullStackDeveloper\":\"풀스택 개발자\",\"tomasRodriguez\":\"토마스 로드리게스\",\"passionateAboutDeveloperExperienceAnd\":\"개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.\",\"developerAdvocate\":\"데벨로퍼 애드보킷\",\"aishaPatel\":\"아이샤 파텔\",\"specializesInJavascriptPerformanceOptimi\":\"JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.\",\"performanceEngineer\":\"성능 엔지니어\",\"marcusWeber\":\"마르쿠스 베버\",\"formerGoogleEngineerWith10\":\"대규모 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.\",\"founderLeadEngineer\":\"설립자 및 수석 엔지니어\",\"sarahChen\":\"사라 첸\"},\"ru\":{\"managesCommunityContributionsPartnership\":\"Управление вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.\",\"communityManager\":\"Комьюнити-менеджер\",\"elenaKowalski\":\"Елена Ковальски\",\"ensuresStatisticalRigorInAll\":\"Обеспечивает статистическую строгость всех результатов бенчмарков. Доктор философии (PhD) в области прикладной статистики Массачусетского технологического института (MIT).\",\"dataAnalyst\":\"Дата-аналитик\",\"yukiTanaka\":\"Юки Танака\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Поддерживает инфраструктуру бенчмаркинга и пайплайн CI/CD. Участник open source проекта Lingui.\",\"fullStackDeveloper\":\"Full-stack разработчик\",\"tomasRodriguez\":\"Томас Родригес\",\"passionateAboutDeveloperExperienceAnd\":\"Увлечена опытом разработки и обучением. Спикер на React Conf, JSConf и i18nNext.\",\"developerAdvocate\":\"Developer Advocate\",\"aishaPatel\":\"Айша Патель\",\"specializesInJavascriptPerformanceOptimi\":\"Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.\",\"performanceEngineer\":\"Инженер по производительности\",\"marcusWeber\":\"Маркус Вебер\",\"formerGoogleEngineerWith10\":\"Бывший инженер Google с 10-летним опытом создания масштабируемых систем интернационализации.\",\"founderLeadEngineer\":\"Основатель и ведущий инженер\",\"sarahChen\":\"Сара Чен\"}}}")
}, a = {
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
}, o = a?.defaultLocale, s = (() => {
	let { subscribe: e, set: t, update: i } = r({ locale: o });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: o })
	};
})(), c = Symbol("intlayer"), l = () => t(c), u = /* @__PURE__ */ new Map(), d = (e, t) => Object.create(new Proxy(e, {
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
}), f = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = u.get(t);
	i || (i = /* @__PURE__ */ new Map(), u.set(t, i));
	let a = i.get(r);
	return a || (a = d(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, p = "translation", m = "object", h = "array", g = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), _ = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, _);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => _(e, g(t, e, {
		type: h,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: m,
			key: r
		};
		if (t.eager) {
			n[r] = _(e[r], g(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = _(e[r], g(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, v = /* @__PURE__ */ new WeakMap(), y = 0, b = (e) => {
	if (!e) return "base";
	let t = v.get(e);
	if (t) return t;
	y += 1;
	let n = `p${y}`;
	return v.set(e, n), n;
}, x = 256, S = /* @__PURE__ */ new WeakMap(), C = (e) => typeof e == "object" && !!e, w = (e, t, n) => `${e}_${t}_${b(n)}`, T = (e, t) => {
	if (!C(e)) return { hit: !1 };
	let n = S.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, E = (e, t, n) => {
	if (!C(e)) return n;
	let r = S.get(e);
	return r || (r = /* @__PURE__ */ new Map(), S.set(e, r)), r.size >= x && r.clear(), r.set(t, n), n;
}, D = (e, t = !0) => [
	F(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
	I,
	L(e ?? a.defaultLocale),
	R,
	z,
	H(e ?? a.defaultLocale),
	U,
	B,
	V
].filter((e) => e !== P), O = (e, t, n = []) => _(e, {
	...t,
	plugins: n
}), k = /* @__PURE__ */ new WeakSet(), A = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, o = w(r ?? a.defaultLocale, "", n), s = T(e, o);
	if (s.hit) return s.content;
	let c = n ?? D(r), l = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries,
			eager: !k.has(e)
		};
		k.add(e);
		try {
			return O(e.content, t, c);
		} finally {
			t.eager && k.delete(e);
		}
	};
	return l === null ? E(e, o, null) : Array.isArray(l) ? E(e, o, l.map(u)) : E(e, o, u(l));
}, j = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, M = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !j(e) || !j(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? M(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, N = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => M(e, t));
}, P = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, F = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? P : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = N(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: p,
				key: e
			}]
		});
	}
}, I = P, L = (e) => P, R = P, z = P, B = P, V = P, H = (e) => P, U = P;
function W(t, n) {
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
var G = (e) => {
	let t = !!W.prototype?.$destroy, n;
	return n = t ? function(t) {
		return new W({
			...t,
			props: {
				...t.props,
				Renderer: e.component,
				rendererProps: e.props,
				value: e.value
			}
		});
	} : (t) => W(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), Object.setPrototypeOf(n, f(e.value, Function.prototype)), n;
}, K = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => G({
		value: t.children ?? e,
		component: void 0,
		props: {}
	})
}, q = K, J = P, Y = P, X = P, Z = /* @__PURE__ */ new Map(), Q = (e, t = !0) => {
	let n = `${e ?? a.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		K,
		F(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
		I,
		L(e ?? a.defaultLocale),
		R,
		H(e ?? a.defaultLocale),
		U,
		B,
		V,
		q,
		J,
		Y,
		X
	].filter((e) => e !== P);
	return Z.set(n, r), r;
}, $ = (e, t) => A(e, t, Q(typeof t == "object" && t ? t.locale : t)), ee = (e, t) => {
	let r = l();
	return n([s], ([n]) => {
		let i = r?.locale ?? n.locale;
		return $(e, t ?? i);
	});
}, te = e.from_html("<div class=\"rounded-lg border border-border bg-card p-6 text-center\"><div class=\"mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground\"> </div> <h3 class=\"text-base font-semibold text-foreground\"> </h3> <p class=\"mb-2 text-xs font-medium text-primary\"> </p> <p class=\"text-sm text-muted-foreground\"> </p></div>"), ne = e.from_html("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\"></div>");
function re(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(s, "$content", a), [a, o] = e.setup_stores(), s = ee(i), c = e.derived(() => [
		{
			name: r().sarahChen,
			role: r().founderLeadEngineer,
			bio: r().formerGoogleEngineerWith10
		},
		{
			name: r().marcusWeber,
			role: r().performanceEngineer,
			bio: r().specializesInJavascriptPerformanceOptimi
		},
		{
			name: r().aishaPatel,
			role: r().developerAdvocate,
			bio: r().passionateAboutDeveloperExperienceAnd
		},
		{
			name: r().tomasRodriguez,
			role: r().fullStackDeveloper,
			bio: r().maintainsTheBenchmarkingInfrastructureAn
		},
		{
			name: r().yukiTanaka,
			role: r().dataAnalyst,
			bio: r().ensuresStatisticalRigorInAll
		},
		{
			name: r().elenaKowalski,
			role: r().communityManager,
			bio: r().managesCommunityContributionsPartnership
		}
	]);
	var l = ne();
	e.each(l, 21, () => e.get(c), e.index, (t, n) => {
		var r = te(), i = e.child(r), a = e.only_child(i, !0), o = e.sibling(i, 2), s = e.only_child(o, !0), c = e.sibling(o, 2), l = e.only_child(c, !0), u = e.sibling(c, 2), d = e.only_child(u, !0);
		e.reset(r), e.template_effect((t) => {
			e.set_text(a, t), e.set_text(s, e.get(n).name), e.set_text(l, e.get(n).role), e.set_text(d, e.get(n).bio);
		}, [() => String(e.get(n).name ?? "").split(" ").map((e) => e[0]).join("")]), e.append(t, r);
	}), e.reset(l), e.append(t, l), e.pop(), o();
}
export { re as default };
