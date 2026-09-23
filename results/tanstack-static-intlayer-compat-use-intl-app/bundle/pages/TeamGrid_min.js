import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { jsxDEV as p } from "react/jsx-dev-runtime";
var ee = {
	key: "team-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Founder & Lead Engineer\",\"formerGoogleEngineerWith10\":\"Former Google engineer with 10 years of experience building internationalization systems at scale.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Performance Engineer\",\"specializesInJavascriptPerformanceOptimization\":\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Full-Stack Developer\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Data Analyst\",\"ensuresStatisticalRigorInAll\":\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Community Manager\",\"managesCommunityContributionsPartnershipsAnd\":\"Manages community contributions, partnerships, and events. Background in open source governance.\"},\"fr\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Fondatrice & Ingénieure principale\",\"formerGoogleEngineerWith10\":\"Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Ingénieur performance\",\"specializesInJavascriptPerformanceOptimization\":\"Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Développeur Full-Stack\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Entretient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Analyste de données\",\"ensuresStatisticalRigorInAll\":\"Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Responsable de communauté\",\"managesCommunityContributionsPartnershipsAnd\":\"Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.\"},\"es\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Fundadora e ingeniera principal\",\"formerGoogleEngineerWith10\":\"Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Ingeniero de rendimiento\",\"specializesInJavascriptPerformanceOptimization\":\"Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Desarrollador Full-Stack\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Analista de datos\",\"ensuresStatisticalRigorInAll\":\"Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Responsable de la comunidad\",\"managesCommunityContributionsPartnershipsAnd\":\"Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.\"},\"de\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Gründerin & Leitende Ingenieurin\",\"formerGoogleEngineerWith10\":\"Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Performance-Ingenieur\",\"specializesInJavascriptPerformanceOptimization\":\"Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Begeistert von Entwicklererfahrung und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Full-Stack-Entwickler\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Datenanalyst\",\"ensuresStatisticalRigorInAll\":\"Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in Angewandter Statistik am MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Community-Managerin\",\"managesCommunityContributionsPartnershipsAnd\":\"Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\"},\"it\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Fondatrice e Responsabile tecnico\",\"formerGoogleEngineerWith10\":\"Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Ingegnere delle prestazioni\",\"specializesInJavascriptPerformanceOptimization\":\"Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Sviluppatore Full-Stack\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Analista dati\",\"ensuresStatisticalRigorInAll\":\"Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Responsable della comunità\",\"managesCommunityContributionsPartnershipsAnd\":\"Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.\"},\"pt\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Fundadora e Engenheira Líder\",\"formerGoogleEngineerWith10\":\"Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Engenheiro de Performance\",\"specializesInJavascriptPerformanceOptimization\":\"Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Desenvolvedor Full-Stack\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Contribuidor open source para Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Analista de Dados\",\"ensuresStatisticalRigorInAll\":\"Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em estatística aplicada pelo MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Gerente de Comunidade\",\"managesCommunityContributionsPartnershipsAnd\":\"Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\"},\"zh\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"创始人兼首席工程师\",\"formerGoogleEngineerWith10\":\"前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"性能工程师\",\"specializesInJavascriptPerformanceOptimization\":\"专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"开发者关系倡导者\",\"passionateAboutDeveloperExperienceAnd\":\"对开发者体验和教育充满热情。React Conf、JSConf 和 i18nNext 的讲师。\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"全栈开发人员\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"维护基准测试基础设施和 CI/CD 管道。Lingui 开源贡献者。\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"数据分析师\",\"ensuresStatisticalRigorInAll\":\"确保所有基准测试结果的统计严谨性。麻省理工学院 (MIT) 应用统计学博士。\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"社区负责人\",\"managesCommunityContributionsPartnershipsAnd\":\"管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\"},\"ja\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"創設者 兼 リードエンジニア\",\"formerGoogleEngineerWith10\":\"大規模な国際化システムの構築に10年の経験を持つ元Googleエンジニア。\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"パフォーマンスエンジニア\",\"specializesInJavascriptPerformanceOptimization\":\"JavaScriptのパフォーマンス最適化とベンチマーク方法論を専門としています。以前はVercelに在籍。\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"デベロッパーアドボケイト\",\"passionateAboutDeveloperExperienceAnd\":\"デベロッパーエクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、i18nNextのスピーカー。\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"フルスタックデベロッパー\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"データアナリスト\",\"ensuresStatisticalRigorInAll\":\"すべてのベンチマーク結果の統計的厳密さを確保。MITで応用統計学の博士号を取得。\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"コミュニティマネージャー\",\"managesCommunityContributionsPartnershipsAnd\":\"コミュニティの貢献、パートナーシップ、イベントを管理。オープンソースガバナンスの経歴を持つ。\"},\"ko\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"설립자 겸 수석 엔지니어\",\"formerGoogleEngineerWith10\":\"규모 있는 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"성능 엔지니어\",\"specializesInJavascriptPerformanceOptimization\":\"JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"개발자 에반젤리스트\",\"passionateAboutDeveloperExperienceAnd\":\"개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"풀스택 개발자\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui 오픈 소스 기여자입니다.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"데이터 분석가\",\"ensuresStatisticalRigorInAll\":\"모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"커뮤니티 매니저\",\"managesCommunityContributionsPartnershipsAnd\":\"커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 분야의 배경을 가지고 있습니다.\"},\"ru\":{\"sarahChen\":\"Сара Чен (Sarah Chen)\",\"founderLeadEngineer\":\"Основатель и ведущий инженер\",\"formerGoogleEngineerWith10\":\"Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.\",\"marcusWeber\":\"Маркус Вебер (Marcus Weber)\",\"performanceEngineer\":\"Инженер по производительности\",\"specializesInJavascriptPerformanceOptimization\":\"Специализируется на оптимизации производительности JavaScript и методологии тестирования. Ранее работал в Vercel.\",\"aishaPatel\":\"Айша Патель (Aisha Patel)\",\"developerAdvocate\":\"Адвокат разработчиков\",\"passionateAboutDeveloperExperienceAnd\":\"Увлечена опытом разработчиков и обучением. Спикер на React Conf, JSConf и i18nNext.\",\"tomasRodriguez\":\"Томас Родригес (Tomás Rodríguez)\",\"fullStackDeveloper\":\"Фулстек-разработчик\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Поддерживает инфраструктуру тестирования и CI/CD пайплайн. Участник разработки Lingui с открытым исходным кодом.\",\"yukiTanaka\":\"Юки Танака (Yuki Tanaka)\",\"dataAnalyst\":\"Аналитик данных\",\"ensuresStatisticalRigorInAll\":\"Обеспечивает статистическую строгость всех результатов тестирования. Доктор прикладной статистики из MIT.\",\"elenaKowalski\":\"Елена Ковальски (Elena Kowalski)\",\"communityManager\":\"Комьюнити-менеджер\",\"managesCommunityContributionsPartnershipsAnd\":\"Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.\"}}}")
}, m = /* @__PURE__ */ new WeakMap(), te = 0, ne = (e) => {
	if (!e) return "base";
	let t = m.get(e);
	if (t) return t;
	te += 1;
	let n = `p${te}`;
	return m.set(e, n), n;
}, re = 256, h = /* @__PURE__ */ new WeakMap(), ie = (e) => typeof e == "object" && !!e, ae = (e, t, n) => `${e}_${t}_${ne(n)}`, oe = (e, t) => {
	if (!ie(e)) return { hit: !1 };
	let n = h.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, g = (e, t, n) => {
	if (!ie(e)) return n;
	let r = h.get(e);
	return r || (r = /* @__PURE__ */ new Map(), h.set(e, r)), r.size >= re && r.clear(), r.set(t, n), n;
}, se = "translation", ce = "enumeration", le = "plural", _ = "insertion", ue = "object", de = "array", fe = "markdown", v = "html", pe = "gender", me = "select", y = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), b = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => b(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => b(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: de,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ue,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = b(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = b(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, he = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ge = (e, t) => e[he(e, t) ?? "fallback"], _e = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), x = "default", ve = /[^A-Za-z0-9._&=-]/g, ye = /[^A-Za-z0-9._-]/g, be = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, S = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, be);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, xe = (e) => e === void 0 ? x : typeof e == "string" ? S(e, ve) : Object.keys(e).sort().map((t) => `${S(t, ye)}=${S(String(e[t]), ye)}`).join("&"), Se = (e) => Array.isArray(e) ? e.length === 0 ? [x] : e.map(xe) : [xe(e)], Ce = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? x : e[0] ?? "default";
}, we = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Te = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Ee = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, De = (e, t) => {
	if (!Te(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? x : Ce(Se(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => we(e, n, t, s)).map((t) => Ee(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Oe = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, ke = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Se(n).join(",") : String(n)}`;
}).join("|") : "", C = {
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
}, w = {
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
}, Ae = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, je = "\x1B[0m", Me = "\x1B[34m", Ne = "\x1B[31m", Pe = "\x1B[32m", Fe = "\x1B[36m", Ie = (e) => e, Le = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ie(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Re = (e, t) => (n, r) => Le(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), T = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? je : n : je}` : e;
T("✗", Ne), T("✓", Pe), T("⏲", Me);
var ze = 50, Be = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Set(), He = (e) => {
	Ve.has(e) || (Ve.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ue = {
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
}, We = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (He(e), Ue[e]);
};
function E(e, t, n) {
	let r = t ?? C?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Be.get(a);
	o || (o = /* @__PURE__ */ new Map(), Be.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? We(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ze && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ge = (e, t, n) => e[E("PluralRules", n).select(t)] ?? e.other, Ke = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, qe = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Je = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (qe(e) && qe(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Je(e[r], t[r]));
		return n;
	}
	return e;
}, Ye = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Je(e, t));
}, D = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Xe = (e) => {
	if (typeof e == "string") return e;
	if (D(e)) return e.nodeType === "html" ? e[v] : e[fe];
}, Ze = (e, t) => {
	if (typeof e == "string") return t;
	if (D(e)) {
		let n = e.nodeType === "html" ? v : fe;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Qe = (e, t, n, r, i) => {
	let a = Ze(e, _e(Xe(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, O = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, k = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? O : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: se,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Ye(o, e, t);
	}
}, A = O, $e = (e) => O, j = O, et = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? O : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || D(e),
			transform: (e, n, r) => {
				if (D(e)) return (i) => Qe(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = _e(i, e);
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
}, M = O, N = O, P = (e) => O, F = O, tt = (e, t = !0) => [
	k(e ?? C.defaultLocale, t ? C.defaultLocale : void 0),
	A,
	j,
	et,
	P(e ?? C.defaultLocale),
	F,
	M,
	N
], nt = (e, t, n = []) => b(e, {
	...t,
	plugins: n
}), rt = (e, t, n) => {
	let { locale: r, selector: i } = Oe(t), a = ae(r ?? C.defaultLocale, ke(i), n), o = oe(e, a);
	if (o.hit) return o.content;
	let s = n ?? tt(r), c = De(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return nt(e.content, t, s);
	};
	return c === null ? g(e, a, null) : Array.isArray(c) ? g(e, a, c.map(l)) : g(e, a, l(c));
}, it = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", I = /\{\{\s*(.*?)\s*\}\}/g, at = (e, t = {}) => {
	if (!Object.values(t).some(it)) return {
		isSimple: !0,
		parts: e.replace(I, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(I), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, L = (e) => y(ce, e), ot = (e) => y(pe, e), st = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, R = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = st(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, ct = /* @__PURE__ */ new Set([
	"area",
	"base",
	"br",
	"col",
	"embed",
	"hr",
	"img",
	"input",
	"link",
	"meta",
	"source",
	"track",
	"wbr"
]), lt = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, ut = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(lt)) {
		let e = !!r[1], i = r[2], a = r[3], o = !!r[4];
		if (!(a.trimStart().startsWith("://") || a.trimStart().startsWith(":"))) {
			if (e) {
				if (n.length === 0) t.push({
					type: "error",
					message: `Closing tag </${i}> has no matching opening tag`
				});
				else {
					let e = n[n.length - 1];
					e.tag.toLowerCase() !== i.toLowerCase() && t.push({
						type: "error",
						message: `Mismatched closing tag: expected </${e.tag}> but found </${i}>`
					}), n.pop();
				}
			} else {
				let e = ct.has(i.toLowerCase());
				!o && !e && n.push({ tag: i });
			}
		}
	}
	for (let e of n) t.push({
		type: "error",
		message: `Unclosed HTML tag: <${e.tag}>`
	});
	return {
		valid: t.filter((e) => e.type === "error").length === 0,
		issues: t
	};
}, z = (e, t) => y(v, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = ut(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return R(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => R(await e)), typeof n == "string") return R(n);
	try {
		return R(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), B = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, V = (e) => y(_, e, { fields: (() => {
	if (typeof e == "string") return B(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => B(await e)), typeof t == "string") return B(t);
	try {
		return B(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), H = (e) => y(le, e), dt = (e, t) => y(me, e, { variable: t }), ft = (e) => {
	let t = 0, n = () => {
		let n = [], i = "";
		for (; t < e.length;) {
			let a = e[t];
			if (a === "{") i &&= (n.push(i), ""), t++, n.push(r());
			else if (a === "}") break;
			else if (a === "'") {
				if (t + 1 < e.length && e[t + 1] === "'") i += "'", t += 2;
				else {
					let n = e.indexOf("'", t + 1);
					n === -1 ? (i += "'", t++) : (i += e.substring(t + 1, n), t = n + 1);
				}
			} else i += a, t++;
		}
		return i && n.push(i), n;
	}, r = () => {
		let r = "";
		for (; t < e.length && /[^,}]/.test(e[t]);) r += e[t], t++;
		if (r = r.trim(), t >= e.length) throw Error("Unclosed argument");
		if (e[t] === "}") return t++, {
			type: "argument",
			name: r
		};
		if (e[t] === ",") {
			t++;
			let i = "";
			for (; t < e.length && /[^,}]/.test(e[t]);) i += e[t], t++;
			if (i = i.trim(), t >= e.length) throw Error("Unclosed argument");
			if (e[t] === "}") return t++, {
				type: "argument",
				name: r,
				format: { type: i }
			};
			if (e[t] === ",") {
				if (t++, i === "plural" || i === "select" || i === "selectordinal") {
					let a = {};
					for (; t < e.length && e[t] !== "}";) {
						for (; t < e.length && /\s/.test(e[t]);) t++;
						let r = "";
						for (; t < e.length && /[^{\s]/.test(e[t]);) r += e[t], t++;
						for (; t < e.length && /\s/.test(e[t]);) t++;
						if (e[t] !== "{") throw Error("Expected { after option key");
						t++;
						let i = n();
						if (e[t] !== "}") throw Error("Expected } after option value");
						for (t++, a[r] = i; t < e.length && /\s/.test(e[t]);) t++;
					}
					if (t++, i === "plural") return {
						type: "plural",
						name: r,
						options: a
					};
					if (i === "select") return {
						type: "select",
						name: r,
						options: a
					};
					if (i === "selectordinal") return {
						type: "selectordinal",
						name: r,
						options: a
					};
				} else {
					let n = "";
					for (; t < e.length && e[t] !== "}";) n += e[t], t++;
					if (t >= e.length) throw Error("Unclosed argument");
					return n = n.trim(), t++, {
						type: "argument",
						name: r,
						format: {
							type: i,
							style: n
						}
					};
				}
			}
		}
		throw Error("Malformed argument");
	};
	return n();
}, U = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? z(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? z(t) : V(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? z(t) : t;
		if (t.type === "argument") return t.format ? V(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : V(`{{${t.name}}}`);
		if (t.type === "plural") {
			let e = {}, n = !1;
			for (let e of Object.keys(t.options)) if (e.startsWith("=")) {
				n = !0;
				break;
			}
			if (n) {
				for (let [n, r] of Object.entries(t.options)) {
					let i = n;
					n.startsWith("=") ? i = n.substring(1) : n === "one" ? i = "1" : n === "two" ? i = "2" : n === "few" ? i = "<=3" : n === "many" ? i = ">=4" : n === "other" && (i = "fallback");
					let a = r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
					e[i] = U(a);
				}
				return e.__intlayer_icu_var = t.name, L(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = U(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return H(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = U(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? ot({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : dt(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = U(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, L(e);
		}
	}
	return e.map((e) => U([e]));
}, pt = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return U(ft(e));
		} catch {
			return e;
		}
	}
}, mt = (e) => b(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...pt
	}]
}), ht = (e) => {
	let t = 0, n = () => {
		let n = [], a = "";
		for (; t < e.length;) {
			let o = e[t];
			if (o === "{" && e[t + 1] === "{") a &&= (n.push(a), ""), t += 2, n.push(r());
			else if (o === "{") a &&= (n.push(a), ""), t++, n.push(i());
			else if (o === "}") break;
			else a += o, t++;
		}
		return a && n.push(a), n;
	}, r = () => {
		let n = "";
		for (; t < e.length;) {
			if (e[t] === "}" && e[t + 1] === "}") return t += 2, {
				type: "argument",
				name: n.trim()
			};
			n += e[t], t++;
		}
		throw Error("Unclosed i18next variable");
	}, i = () => {
		let r = "";
		for (; t < e.length && /[^,}]/.test(e[t]);) r += e[t], t++;
		if (r = r.trim(), t >= e.length) throw Error("Unclosed argument");
		if (e[t] === "}") return t++, {
			type: "argument",
			name: r
		};
		if (e[t] === ",") {
			t++;
			let i = "";
			for (; t < e.length && /[^,}]/.test(e[t]);) i += e[t], t++;
			if (i = i.trim(), t >= e.length) throw Error("Unclosed argument");
			if (e[t] === "}") return t++, {
				type: "argument",
				name: r,
				format: { type: i }
			};
			if (e[t] === ",") {
				if (t++, i === "plural" || i === "select") {
					let a = {};
					for (; t < e.length && e[t] !== "}";) {
						for (; t < e.length && /\s/.test(e[t]);) t++;
						let r = "";
						for (; t < e.length && /[^{\s]/.test(e[t]);) r += e[t], t++;
						for (; t < e.length && /\s/.test(e[t]);) t++;
						if (e[t] !== "{") throw Error("Expected { after option key");
						t++;
						let i = n();
						if (e[t] !== "}") throw Error("Expected } after option value");
						for (t++, a[r] = i; t < e.length && /\s/.test(e[t]);) t++;
					}
					if (t++, i === "plural") return {
						type: "plural",
						name: r,
						options: a
					};
					if (i === "select") return {
						type: "select",
						name: r,
						options: a
					};
				} else {
					let n = "";
					for (; t < e.length && e[t] !== "}";) n += e[t], t++;
					if (t >= e.length) throw Error("Unclosed argument");
					return n = n.trim(), t++, {
						type: "argument",
						name: r,
						format: {
							type: i,
							style: n
						}
					};
				}
			}
		}
		throw Error("Malformed argument");
	};
	return n();
}, W = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? z(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? z(t) : V(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? z(t) : t;
		if (t.type === "argument") return t.format ? V(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : V(`{{${t.name}}}`);
		if (t.type === "plural") {
			let e = {}, n = !1;
			for (let e of Object.keys(t.options)) if (e.startsWith("=")) {
				n = !0;
				break;
			}
			if (n) {
				for (let [n, r] of Object.entries(t.options)) {
					let i = n;
					n.startsWith("=") ? i = n.substring(1) : n === "one" ? i = "1" : n === "two" ? i = "2" : n === "few" ? i = "<=3" : n === "many" ? i = ">=4" : n === "other" && (i = "fallback");
					let a = r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
					e[i] = W(a);
				}
				return e.__intlayer_icu_var = t.name, L(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = W(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return H(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = W(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? ot({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : dt(e, t.name);
		}
	}
	return e.map((e) => W([e]));
}, gt = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return W(ht(e));
		} catch {
			return e;
		}
	}
}, _t = (e) => b(e, {
	dictionaryKey: "i18next",
	keyPath: [],
	plugins: [{
		id: "i18next",
		...gt
	}]
}), vt = (e, t, n = ".") => {
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
}, yt = (e) => {
	let t = 0, n = [], r = "";
	for (; t < e.length;) {
		let i = e[t];
		if (i === "{") {
			r &&= (n.push(r), ""), t++;
			let i = "";
			for (; t < e.length && e[t] !== "}";) i += e[t], t++;
			t < e.length && t++, n.push({
				type: "argument",
				name: i.trim()
			});
		} else r += i, t++;
	}
	return r && n.push(r), n;
}, bt = (e) => {
	let t = [], n = "", r = 0;
	for (; r < e.length;) {
		let i = e[r];
		i === "\\" && r + 1 < e.length && e[r + 1] === "|" ? (n += "|", r += 2) : i === "|" ? (t.push(n.trim()), n = "", r++) : (n += i, r++);
	}
	return t.push(n.trim()), t.map(yt);
}, G = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") return e[0];
	let t = "";
	for (let n of e) t += typeof n == "string" ? n : `{{${n.name}}}`;
	return V(t);
}, xt = (e) => {
	if (e.length === 1) return G(e[0]);
	let t = {};
	return e.length === 2 ? L({
		1: G(e[0]),
		fallback: G(e[1])
	}) : e.length === 3 ? L({
		0: G(e[0]),
		1: G(e[1]),
		fallback: G(e[2])
	}) : (e.forEach((n, r) => {
		r === e.length - 1 ? t.fallback = G(n) : t[r.toString()] = G(n);
	}), t.__intlayer_vue_i18n_var = "count", L(t));
}, St = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("|")),
	transform: (e) => {
		try {
			return xt(bt(e));
		} catch {
			return e;
		}
	}
}, Ct = (e) => b(e, {
	dictionaryKey: "vue-i18n",
	keyPath: [],
	plugins: [{
		id: "vue-i18n",
		...St
	}]
}), wt = [
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
}, Tt = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? E("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? E("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : E("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return E("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Et = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{}]+?)\s*\}\}/g, (e, n) => {
	let r = K(t, n);
	return r === void 0 ? e : String(r);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : Tt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = K(t, n);
	return r === void 0 ? e : String(r);
}), q = (e, t) => e[t] ?? e.count ?? e.n, J = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Et(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return J(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(J(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return J(r[_], t, n);
	if (r.nodeType === "html") return J(r[v], t, n);
	if (r.nodeType === "plural") {
		let e = r[le];
		return J(Ge(e, Number(q(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ce], i = wt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) wt.includes(t) || (o[t] = n);
		let s = q(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = E("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ge(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return J(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[me], i = q(t, typeof r.variable == "string" ? r.variable : "value");
		return J(Ke(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[pe];
		return J(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Dt = {
	icu: (e) => mt(e),
	i18next: (e) => _t(e),
	"vue-i18n": (e) => Ct(e)
}, Ot = (e, t = {}, n = "en", r = "icu") => {
	let i = J(typeof e == "string" ? Dt[r](e) : e, t, n);
	return typeof i == "string" ? i : String(i ?? "");
}, Y = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: Y(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, kt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, At = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = At(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), jt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = jt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Mt = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return Nt(e, (e) => vt(t, r(e)), r);
}, Nt = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return Ot(i, r, e, "icu");
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = kt(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: At(Y(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = kt(t), o = r(e, i);
			return o === void 0 ? n(e) : jt(Y(o), a);
		}
	});
}, Pt = ({ children: e, value: t, additionalProps: n }) => {
	let r = i(e) ? e : d(u, { children: e });
	return new Proxy(r, { get(e, r, i) {
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
}, Ft = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => Pt({
		...n,
		value: n.children,
		children: n.children
	})
}, It = O, Lt = (e, n) => {
	let i = at(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, Rt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? O : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || D(e),
			transform: (e, n, r) => {
				if (D(e)) return (i) => Qe(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Lt(i, e);
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
}, zt = O, Bt = O, X = /* @__PURE__ */ new Map(), Vt = (e, t = !0) => {
	let n = `${e ?? C.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		k(e ?? C.defaultLocale, t ? C.defaultLocale : void 0),
		A,
		$e(e ?? C.defaultLocale),
		j,
		P(e ?? C.defaultLocale),
		F,
		M,
		N,
		Ft,
		It,
		Rt,
		zt,
		Bt
	];
	return X.set(n, r), r;
}, Ht = (e, t) => rt(e, t, Vt(typeof t == "object" && t ? t.locale : t)), Ut = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Wt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Ut(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Gt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Z = {
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
}, Kt = (e = Z) => {
	let { locales: t } = C;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Gt) for (let t = 0; t < (w.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(w.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, qt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Gt && w.storage.cookies) for (let n = 0; n < w.storage.cookies.length; n++) {
		let { name: r, attributes: i } = w.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Ut(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Wt(r, e, i));
			} catch {}
		}
	}
}, Jt = Kt(Z), Yt = (e, t) => qt(e, {
	...Z,
	isCookieEnabled: t
}), Xt = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Zt = ({ children: e }) => (Xt(), e), Qt = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, $t = ({ children: e }) => (Qt(), e), en = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, tn = (e, t = C?.locales, n = C?.defaultLocale) => {
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
}, Q = n({
	locale: Jt ?? C?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), nn = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = C ?? {}, [f, p] = l(e ?? Jt ?? t ?? u);
	o(() => {
		e && e !== f && p(e);
	}, [e]), o(() => {
		en();
	}, []);
	let ee = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), Yt(e, s);
		}
	}), m = tn(f);
	return d(Q.Provider, {
		value: {
			locale: m,
			setLocale: ee,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, rn = ({ children: e, ...t }) => f(nn, {
	...t,
	children: [
		d(Zt, {}),
		d($t, {}),
		e
	]
}), an = (e, t) => {
	let { locale: n, variant: r } = a(Q) ?? {}, i = t ?? n, o = typeof i == "object" && i ? `${i.locale ?? ""}|${ke(i)}` : i;
	return s(() => Ht(e, i), [e.key, o]);
}, on = ((e, t) => {
	let { locale: n } = a(Q) ?? {};
	return Mt(n, an(e), t);
}), sn = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Re({ log: Ae })(`${T("IntlProvider", Fe)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(rn, {
	locale: e,
	children: t
}, String(e))), $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/team/TeamGrid.tsx";
function cn() {
	let e = on(ee), t = [
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
	return p("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: t.map((e) => p("div", {
			className: "rounded-lg border border-border bg-card p-6 text-center",
			children: [
				p("div", {
					className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground",
					children: e.name.split(" ").map((e) => e[0]).join("")
				}, void 0, !1, {
					fileName: $,
					lineNumber: 46,
					columnNumber: 11
				}, this),
				p("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.name
				}, void 0, !1, {
					fileName: $,
					lineNumber: 52,
					columnNumber: 11
				}, this),
				p("p", {
					className: "mb-2 text-xs font-medium text-primary",
					children: e.role
				}, void 0, !1, {
					fileName: $,
					lineNumber: 53,
					columnNumber: 11
				}, this),
				p("p", {
					className: "text-sm text-muted-foreground",
					children: e.bio
				}, void 0, !1, {
					fileName: $,
					lineNumber: 54,
					columnNumber: 11
				}, this)
			]
		}, e.name, !0, {
			fileName: $,
			lineNumber: 42,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: $,
		lineNumber: 40,
		columnNumber: 5
	}, this);
}
var ln = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function un({ children: t }) {
	return p(e.Suspense, {
		fallback: null,
		children: p(sn, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: ln,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: ln,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var dn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/team/TeamGrid.wrapper.tsx";
function fn() {
	return p(un, { children: p(cn, {}, void 0, !1, {
		fileName: dn,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: dn,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { fn as default };
