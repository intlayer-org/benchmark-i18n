import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useMemo as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
var ee = {
	key: "team-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Founder & Lead Engineer\",\"formerGoogleEngineerWith10\":\"Former Google engineer with 10 years of experience building internationalization systems at scale.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Performance Engineer\",\"specializesInJavascriptPerformanceOptimization\":\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Full-Stack Developer\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Data Analyst\",\"ensuresStatisticalRigorInAll\":\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Community Manager\",\"managesCommunityContributionsPartnershipsAnd\":\"Manages community contributions, partnerships, and events. Background in open source governance.\"},\"fr\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Fondatrice & Ingénieure principale\",\"formerGoogleEngineerWith10\":\"Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Ingénieur performance\",\"specializesInJavascriptPerformanceOptimization\":\"Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Développeur Full-Stack\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Entretient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Analyste de données\",\"ensuresStatisticalRigorInAll\":\"Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Responsable de communauté\",\"managesCommunityContributionsPartnershipsAnd\":\"Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.\"},\"es\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Fundadora e ingeniera principal\",\"formerGoogleEngineerWith10\":\"Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Ingeniero de rendimiento\",\"specializesInJavascriptPerformanceOptimization\":\"Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Desarrollador Full-Stack\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Analista de datos\",\"ensuresStatisticalRigorInAll\":\"Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Responsable de la comunidad\",\"managesCommunityContributionsPartnershipsAnd\":\"Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.\"},\"de\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Gründerin & Leitende Ingenieurin\",\"formerGoogleEngineerWith10\":\"Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Performance-Ingenieur\",\"specializesInJavascriptPerformanceOptimization\":\"Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Begeistert von Entwicklererfahrung und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Full-Stack-Entwickler\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Datenanalyst\",\"ensuresStatisticalRigorInAll\":\"Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in Angewandter Statistik am MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Community-Managerin\",\"managesCommunityContributionsPartnershipsAnd\":\"Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\"},\"it\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Fondatrice e Responsabile tecnico\",\"formerGoogleEngineerWith10\":\"Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Ingegnere delle prestazioni\",\"specializesInJavascriptPerformanceOptimization\":\"Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Sviluppatore Full-Stack\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Analista dati\",\"ensuresStatisticalRigorInAll\":\"Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Responsable della comunità\",\"managesCommunityContributionsPartnershipsAnd\":\"Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.\"},\"pt\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Fundadora e Engenheira Líder\",\"formerGoogleEngineerWith10\":\"Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Engenheiro de Performance\",\"specializesInJavascriptPerformanceOptimization\":\"Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Desenvolvedor Full-Stack\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Contribuidor open source para Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Analista de Dados\",\"ensuresStatisticalRigorInAll\":\"Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em estatística aplicada pelo MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Gerente de Comunidade\",\"managesCommunityContributionsPartnershipsAnd\":\"Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\"},\"zh\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"创始人兼首席工程师\",\"formerGoogleEngineerWith10\":\"前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"性能工程师\",\"specializesInJavascriptPerformanceOptimization\":\"专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"开发者关系倡导者\",\"passionateAboutDeveloperExperienceAnd\":\"对开发者体验和教育充满热情。React Conf、JSConf 和 i18nNext 的讲师。\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"全栈开发人员\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"维护基准测试基础设施和 CI/CD 管道。Lingui 开源贡献者。\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"数据分析师\",\"ensuresStatisticalRigorInAll\":\"确保所有基准测试结果的统计严谨性。麻省理工学院 (MIT) 应用统计学博士。\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"社区负责人\",\"managesCommunityContributionsPartnershipsAnd\":\"管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\"},\"ja\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"創設者 兼 リードエンジニア\",\"formerGoogleEngineerWith10\":\"大規模な国際化システムの構築に10年の経験を持つ元Googleエンジニア。\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"パフォーマンスエンジニア\",\"specializesInJavascriptPerformanceOptimization\":\"JavaScriptのパフォーマンス最適化とベンチマーク方法論を専門としています。以前はVercelに在籍。\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"デベロッパーアドボケイト\",\"passionateAboutDeveloperExperienceAnd\":\"デベロッパーエクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、i18nNextのスピーカー。\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"フルスタックデベロッパー\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"データアナリスト\",\"ensuresStatisticalRigorInAll\":\"すべてのベンチマーク結果の統計的厳密さを確保。MITで応用統計学の博士号を取得。\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"コミュニティマネージャー\",\"managesCommunityContributionsPartnershipsAnd\":\"コミュニティの貢献、パートナーシップ、イベントを管理。オープンソースガバナンスの経歴を持つ。\"},\"ko\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"설립자 겸 수석 엔지니어\",\"formerGoogleEngineerWith10\":\"규모 있는 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"성능 엔지니어\",\"specializesInJavascriptPerformanceOptimization\":\"JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"개발자 에반젤리스트\",\"passionateAboutDeveloperExperienceAnd\":\"개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"풀스택 개발자\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui 오픈 소스 기여자입니다.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"데이터 분석가\",\"ensuresStatisticalRigorInAll\":\"모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"커뮤니티 매니저\",\"managesCommunityContributionsPartnershipsAnd\":\"커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 분야의 배경을 가지고 있습니다.\"},\"ru\":{\"sarahChen\":\"Сара Чен (Sarah Chen)\",\"founderLeadEngineer\":\"Основатель и ведущий инженер\",\"formerGoogleEngineerWith10\":\"Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.\",\"marcusWeber\":\"Маркус Вебер (Marcus Weber)\",\"performanceEngineer\":\"Инженер по производительности\",\"specializesInJavascriptPerformanceOptimization\":\"Специализируется на оптимизации производительности JavaScript и методологии тестирования. Ранее работал в Vercel.\",\"aishaPatel\":\"Айша Патель (Aisha Patel)\",\"developerAdvocate\":\"Адвокат разработчиков\",\"passionateAboutDeveloperExperienceAnd\":\"Увлечена опытом разработчиков и обучением. Спикер на React Conf, JSConf и i18nNext.\",\"tomasRodriguez\":\"Томас Родригес (Tomás Rodríguez)\",\"fullStackDeveloper\":\"Фулстек-разработчик\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Поддерживает инфраструктуру тестирования и CI/CD пайплайн. Участник разработки Lingui с открытым исходным кодом.\",\"yukiTanaka\":\"Юки Танака (Yuki Tanaka)\",\"dataAnalyst\":\"Аналитик данных\",\"ensuresStatisticalRigorInAll\":\"Обеспечивает статистическую строгость всех результатов тестирования. Доктор прикладной статистики из MIT.\",\"elenaKowalski\":\"Елена Ковальски (Elena Kowalski)\",\"communityManager\":\"Комьюнити-менеджер\",\"managesCommunityContributionsPartnershipsAnd\":\"Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.\"}}}")
}, p = /* @__PURE__ */ new WeakMap(), m = 0, te = (e) => {
	if (!e) return "base";
	let t = p.get(e);
	if (t) return t;
	m += 1;
	let n = `p${m}`;
	return p.set(e, n), n;
}, h = 256, g = /* @__PURE__ */ new WeakMap(), _ = (e) => typeof e == "object" && !!e, v = (e, t, n) => `${e}_${t}_${te(n)}`, ne = (e, t) => {
	if (!_(e)) return { hit: !1 };
	let n = g.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, y = (e, t, n) => {
	if (!_(e)) return n;
	let r = g.get(e);
	return r || (r = /* @__PURE__ */ new Map(), g.set(e, r)), r.size >= h && r.clear(), r.set(t, n), n;
}, re = "translation", ie = "enumeration", ae = "plural", oe = "condition", b = "insertion", se = "object", ce = "array", x = "markdown", S = "html", C = "gender", le = "select", w = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, T);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, w(t, e, {
		type: ce,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: se,
			key: r
		};
		if (t.eager) {
			n[r] = T(e[r], w(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = T(e[r], w(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, ue = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, de = (e, t) => e[ue(e, t) ?? "fallback"], fe = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), E = {
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
}, D = {
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
}, pe = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, me = "\x1B[0m", he = "\x1B[34m", ge = "\x1B[31m", _e = "\x1B[32m", ve = "\x1B[36m", ye = (e) => e, be = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = ye(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, xe = (e, t) => (n, r) => be(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), O = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? me : n : me}` : e;
O("✗", ge), O("✓", _e), O("⏲", he);
var Se = 50, Ce = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Set(), Te = (e) => {
	we.has(e) || (we.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ee = {
	DisplayNames: class {
		of(e) {
			return e;
		}
	},
	ListFormat: class {
		format(e) {
			return Array.from(e).join(", ");
		}
		formatToParts(e) {
			return Array.from(e).flatMap((e, t) => t === 0 ? [{
				type: "element",
				value: e
			}] : [{
				type: "literal",
				value: ", "
			}, {
				type: "element",
				value: e
			}]);
		}
	},
	Segmenter: class {
		segment(e) {
			let t = 0;
			return Array.from(e).map((e) => {
				let n = t;
				return t += e.length, {
					segment: e,
					index: n
				};
			});
		}
	}
}, De = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Te(e), Ee[e]);
};
function k(e, t, n) {
	let r = t ?? E?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Ce.get(a);
	o || (o = /* @__PURE__ */ new Map(), Ce.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? De(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Se && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Oe = (e, t, n) => e[k("PluralRules", n).select(t)] ?? e.other, ke = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, A = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, j = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !A(e) || !A(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? j(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Ae = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => j(e, t));
}, M = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, je = (e) => {
	if (typeof e == "string") return e;
	if (M(e)) return e.nodeType === "html" ? e[S] : e[x];
}, Me = (e, t) => {
	if (typeof e == "string") return t;
	if (M(e)) {
		let n = e.nodeType === "html" ? S : x;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, N = (e, t, n, r, i) => {
	let a = Me(e, fe(je(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, P = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ne = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, F = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? P : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Ae(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: re,
				key: e
			}]
		});
	}
}, I = P, L = (e) => P, R = P, Pe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? P : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: b }], i = e[b], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || M(e),
			transform: (e, n, r) => {
				if (M(e)) return (i) => N(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = fe(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return B(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, z = [
	ie,
	oe,
	ae,
	C,
	le
], Fe = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !z.includes(i)) return t;
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
		return !r && Ne(i) ? i(n) : i;
	};
}, B = (e, t) => typeof t == "function" && z.includes(e?.nodeType ?? "") ? (n) => Fe(e, t, n) : t, V = P, H = P, U = (e) => P, W = P, Ie = (e, t = !0) => [
	F(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
	I,
	L(e ?? E.defaultLocale),
	R,
	Pe,
	U(e ?? E.defaultLocale),
	W,
	V,
	H
].filter((e) => e !== P), Le = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), G = /* @__PURE__ */ new WeakSet(), Re = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = v(r ?? E.defaultLocale, "", n), o = ne(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ie(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !G.has(e)
		};
		G.add(e);
		try {
			return Le(e.content, t, s);
		} finally {
			t.eager && G.delete(e);
		}
	};
	return c === null ? y(e, a, null) : Array.isArray(c) ? y(e, a, c.map(l)) : y(e, a, l(c));
}, ze = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Be = /\{\{\s*(.*?)\s*\}\}/g, Ve = (e, t = {}) => {
	if (!Object.values(t).some(ze)) return {
		isSimple: !0,
		parts: e.replace(Be, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Be), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, He = (e, t, n = ".") => {
	if (!t) return e;
	if (typeof e == "object" && e) {
		let n = e[t];
		if (n !== void 0) return n;
	}
	if (n === !1 || !t.includes(n)) return;
	let r = e;
	for (let e of t.split(n)) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, Ue = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], K = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, We = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? k("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? k("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : k("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return k("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Ge = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : i ? We(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : We(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = K(t, n);
	return r === void 0 ? e : String(r);
}), q = (e, t) => e[t] ?? e.count ?? e.n, J = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Ge(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return J(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(J(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return J(r[b], t, n);
	if (r.nodeType === "html") return J(r[S], t, n);
	if (r.nodeType === "plural") {
		let e = r[ae];
		return J(Oe(e, Number(q(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ie], i = Ue.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ue.includes(t) || (o[t] = n);
		let s = q(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = k("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? de(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return J(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[le], i = q(t, typeof r.variable == "string" ? r.variable : "value");
		return J(ke(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[C];
		return J(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Ke = (e, t = {}, n = "en") => {
	let r = J(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Y = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : o && t.push({
			tag: o,
			children: Y(s ?? "")
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, qe = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Je = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = Je(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), Ye = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Ye(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Xe = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return Ze(e, (e) => He(t, r(e)), r);
}, Ze = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return Ke(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = qe(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: Je(Y(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = qe(t), o = r(e, i);
			return o === void 0 ? n(e) : Ye(Y(o), a);
		}
	});
}, Qe = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, $e = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Qe(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, et = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var X = {
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
}, tt = (e = X) => {
	let { locales: t } = E;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!et) for (let t = 0; t < (D.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(D.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, nt = !1, Z, rt = () => typeof window > "u" ? tt(X) : (nt ||= (Z = tt(X), !0), Z), it = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (nt = !1, !et && D.storage.cookies)) for (let n = 0; n < D.storage.cookies.length; n++) {
		let { name: r, attributes: i } = D.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Qe(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, $e(r, e, i));
			} catch {}
		}
	}
}, at = /* @__PURE__ */ new Map(), ot = (e, t) => Object.create(new Proxy(e, {
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
}), st = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = at.get(t);
	i || (i = /* @__PURE__ */ new Map(), at.set(t, i));
	let a = i.get(r);
	return a || (a = ot(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ct = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...i(e) ? e : d(u, { children: e }),
	value: t,
	...n
}, st(t)), lt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ct({
		value: t.children,
		children: t.children
	})
}, ut = P, dt = (e, n) => {
	let i = Ve(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, ft = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? P : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: b }], i = e[b], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || M(e),
			transform: (e, n, r) => {
				if (M(e)) return (i) => N(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = dt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return B(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, pt = P, mt = P, Q = /* @__PURE__ */ new Map(), ht = (e, t = !0) => {
	let n = `${e ?? E.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		lt,
		F(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
		I,
		L(e ?? E.defaultLocale),
		R,
		U(e ?? E.defaultLocale),
		W,
		V,
		H,
		ut,
		ft,
		pt,
		mt
	].filter((e) => e !== P);
	return Q.set(n, r), r;
}, gt = (e, t) => Re(e, t, ht(typeof t == "object" && t ? t.locale : t)), _t = rt, vt = (e, t) => it(e, {
	...X,
	isCookieEnabled: t
}), yt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, bt = (e, t = E?.locales, n = E?.defaultLocale) => {
	if (t?.includes(e)) return e;
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
}, $ = n({
	get locale() {
		return _t() ?? E?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), xt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: u }) => {
	let { locales: f, defaultLocale: ee } = E ?? {}, [p, m] = l(() => e ?? _t() ?? t ?? ee), [te, h] = l(e);
	e !== te && (h(e), e && e !== p && m(e)), s(() => {
		yt();
	}, []);
	let g = a((e) => {
		if (p.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), vt(e, u);
		}
	}, [
		p,
		f,
		u
	]), _ = i ?? g, v = bt(p), ne = c(() => ({
		locale: v,
		setLocale: _,
		variant: n,
		disableEditor: o
	}), [
		v,
		_,
		n,
		o
	]);
	return d($.Provider, {
		value: ne,
		children: r
	});
}, St = ({ children: e, ...t }) => f(xt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Ct = (e, t) => {
	let { locale: n, variant: r } = o($) ?? {}, i = t ?? n, a = i;
	return c(() => gt(e, i), [e.key, a]);
}, wt = ((e, t) => {
	let { locale: n } = o($) ?? {};
	return Xe(n, Ct(e), t);
}), Tt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && xe({ log: pe })(`${O("IntlProvider", ve)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(St, {
	locale: e,
	children: t
}, String(e)));
function Et() {
	let e = wt(ee), t = [
		{
			name: e("sarahChen"),
			role: e("founderLeadEngineer"),
			bio: e("formerGoogleEngineerWith10")
		},
		{
			name: e("marcusWeber"),
			role: e("performanceEngineer"),
			bio: e("specializesInJavascriptPerformanceOptimization")
		},
		{
			name: e("aishaPatel"),
			role: e("developerAdvocate"),
			bio: e("passionateAboutDeveloperExperienceAnd")
		},
		{
			name: e("tomasRodriguez"),
			role: e("fullStackDeveloper"),
			bio: e("maintainsTheBenchmarkingInfrastructureAnd")
		},
		{
			name: e("yukiTanaka"),
			role: e("dataAnalyst"),
			bio: e("ensuresStatisticalRigorInAll")
		},
		{
			name: e("elenaKowalski"),
			role: e("communityManager"),
			bio: e("managesCommunityContributionsPartnershipsAnd")
		}
	];
	return d("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: t.map((e) => f("div", {
			className: "rounded-lg border border-border bg-card p-6 text-center",
			children: [
				d("div", {
					className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground",
					children: e.name.split(" ").map((e) => e[0]).join("")
				}),
				d("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.name
				}),
				d("p", {
					className: "mb-2 text-xs font-medium text-primary",
					children: e.role
				}),
				d("p", {
					className: "text-sm text-muted-foreground",
					children: e.bio
				})
			]
		}, e.name))
	});
}
function Dt({ children: t }) {
	return d(e.Suspense, {
		fallback: null,
		children: d(Tt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		})
	});
}
function Ot() {
	return d(Dt, { children: d(Et, {}) });
}
export { Ot as default };
