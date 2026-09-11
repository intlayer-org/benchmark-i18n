import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { jsxDEV as p } from "react/jsx-dev-runtime";
var m = {
	key: "team-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Founder & Lead Engineer\",\"formerGoogleEngineerWith10\":\"Former Google engineer with 10 years of experience building internationalization systems at scale.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Performance Engineer\",\"specializesInJavascriptPerformanceOptimization\":\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Full-Stack Developer\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Data Analyst\",\"ensuresStatisticalRigorInAll\":\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Community Manager\",\"managesCommunityContributionsPartnershipsAnd\":\"Manages community contributions, partnerships, and events. Background in open source governance.\"},\"fr\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Fondatrice & Ingénieure principale\",\"formerGoogleEngineerWith10\":\"Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Ingénieur performance\",\"specializesInJavascriptPerformanceOptimization\":\"Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Développeur Full-Stack\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Entretient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Analyste de données\",\"ensuresStatisticalRigorInAll\":\"Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Responsable de communauté\",\"managesCommunityContributionsPartnershipsAnd\":\"Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.\"},\"es\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Fundadora e ingeniera principal\",\"formerGoogleEngineerWith10\":\"Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Ingeniero de rendimiento\",\"specializesInJavascriptPerformanceOptimization\":\"Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Desarrollador Full-Stack\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Analista de datos\",\"ensuresStatisticalRigorInAll\":\"Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Responsable de la comunidad\",\"managesCommunityContributionsPartnershipsAnd\":\"Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.\"},\"de\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Gründerin & Leitende Ingenieurin\",\"formerGoogleEngineerWith10\":\"Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Performance-Ingenieur\",\"specializesInJavascriptPerformanceOptimization\":\"Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Begeistert von Entwicklererfahrung und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Full-Stack-Entwickler\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Datenanalyst\",\"ensuresStatisticalRigorInAll\":\"Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in Angewandter Statistik am MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Community-Managerin\",\"managesCommunityContributionsPartnershipsAnd\":\"Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\"},\"it\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Fondatrice e Responsabile tecnico\",\"formerGoogleEngineerWith10\":\"Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Ingegnere delle prestazioni\",\"specializesInJavascriptPerformanceOptimization\":\"Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Sviluppatore Full-Stack\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Analista dati\",\"ensuresStatisticalRigorInAll\":\"Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Responsable della comunità\",\"managesCommunityContributionsPartnershipsAnd\":\"Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.\"},\"pt\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"Fundadora e Engenheira Líder\",\"formerGoogleEngineerWith10\":\"Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"Engenheiro de Performance\",\"specializesInJavascriptPerformanceOptimization\":\"Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"Developer Advocate\",\"passionateAboutDeveloperExperienceAnd\":\"Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"Desenvolvedor Full-Stack\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Contribuidor open source para Lingui.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"Analista de Dados\",\"ensuresStatisticalRigorInAll\":\"Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em estatística aplicada pelo MIT.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"Gerente de Comunidade\",\"managesCommunityContributionsPartnershipsAnd\":\"Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\"},\"zh\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"创始人兼首席工程师\",\"formerGoogleEngineerWith10\":\"前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"性能工程师\",\"specializesInJavascriptPerformanceOptimization\":\"专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"开发者关系倡导者\",\"passionateAboutDeveloperExperienceAnd\":\"对开发者体验和教育充满热情。React Conf、JSConf 和 i18nNext 的讲师。\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"全栈开发人员\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"维护基准测试基础设施和 CI/CD 管道。Lingui 开源贡献者。\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"数据分析师\",\"ensuresStatisticalRigorInAll\":\"确保所有基准测试结果的统计严谨性。麻省理工学院 (MIT) 应用统计学博士。\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"社区负责人\",\"managesCommunityContributionsPartnershipsAnd\":\"管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\"},\"ja\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"創設者 兼 リードエンジニア\",\"formerGoogleEngineerWith10\":\"大規模な国際化システムの構築に10年の経験を持つ元Googleエンジニア。\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"パフォーマンスエンジニア\",\"specializesInJavascriptPerformanceOptimization\":\"JavaScriptのパフォーマンス最適化とベンチマーク方法論を専門としています。以前はVercelに在籍。\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"デベロッパーアドボケイト\",\"passionateAboutDeveloperExperienceAnd\":\"デベロッパーエクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、i18nNextのスピーカー。\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"フルスタックデベロッパー\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"データアナリスト\",\"ensuresStatisticalRigorInAll\":\"すべてのベンチマーク結果の統計的厳密さを確保。MITで応用統計学の博士号を取得。\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"コミュニティマネージャー\",\"managesCommunityContributionsPartnershipsAnd\":\"コミュニティの貢献、パートナーシップ、イベントを管理。オープンソースガバナンスの経歴を持つ。\"},\"ko\":{\"sarahChen\":\"Sarah Chen\",\"founderLeadEngineer\":\"설립자 겸 수석 엔지니어\",\"formerGoogleEngineerWith10\":\"규모 있는 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.\",\"marcusWeber\":\"Marcus Weber\",\"performanceEngineer\":\"성능 엔지니어\",\"specializesInJavascriptPerformanceOptimization\":\"JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.\",\"aishaPatel\":\"Aisha Patel\",\"developerAdvocate\":\"개발자 에반젤리스트\",\"passionateAboutDeveloperExperienceAnd\":\"개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"fullStackDeveloper\":\"풀스택 개발자\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui 오픈 소스 기여자입니다.\",\"yukiTanaka\":\"Yuki Tanaka\",\"dataAnalyst\":\"데이터 분석가\",\"ensuresStatisticalRigorInAll\":\"모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.\",\"elenaKowalski\":\"Elena Kowalski\",\"communityManager\":\"커뮤니티 매니저\",\"managesCommunityContributionsPartnershipsAnd\":\"커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 분야의 배경을 가지고 있습니다.\"},\"ru\":{\"sarahChen\":\"Сара Чен (Sarah Chen)\",\"founderLeadEngineer\":\"Основатель и ведущий инженер\",\"formerGoogleEngineerWith10\":\"Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.\",\"marcusWeber\":\"Маркус Вебер (Marcus Weber)\",\"performanceEngineer\":\"Инженер по производительности\",\"specializesInJavascriptPerformanceOptimization\":\"Специализируется на оптимизации производительности JavaScript и методологии тестирования. Ранее работал в Vercel.\",\"aishaPatel\":\"Айша Патель (Aisha Patel)\",\"developerAdvocate\":\"Адвокат разработчиков\",\"passionateAboutDeveloperExperienceAnd\":\"Увлечена опытом разработчиков и обучением. Спикер на React Conf, JSConf и i18nNext.\",\"tomasRodriguez\":\"Томас Родригес (Tomás Rodríguez)\",\"fullStackDeveloper\":\"Фулстек-разработчик\",\"maintainsTheBenchmarkingInfrastructureAnd\":\"Поддерживает инфраструктуру тестирования и CI/CD пайплайн. Участник разработки Lingui с открытым исходным кодом.\",\"yukiTanaka\":\"Юки Танака (Yuki Tanaka)\",\"dataAnalyst\":\"Аналитик данных\",\"ensuresStatisticalRigorInAll\":\"Обеспечивает статистическую строгость всех результатов тестирования. Доктор прикладной статистики из MIT.\",\"elenaKowalski\":\"Елена Ковальски (Elena Kowalski)\",\"communityManager\":\"Комьюнити-менеджер\",\"managesCommunityContributionsPartnershipsAnd\":\"Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.\"}}}")
}, h = /* @__PURE__ */ new WeakMap(), ee = 0, te = (e) => {
	if (!e) return "base";
	let t = h.get(e);
	if (t) return t;
	ee += 1;
	let n = `p${ee}`;
	return h.set(e, n), n;
}, ne = 256, g = /* @__PURE__ */ new WeakMap(), _ = (e) => typeof e == "object" && !!e, re = (e, t, n) => `${e}_${t}_${te(n)}`, ie = (e, t) => {
	if (!_(e)) return { hit: !1 };
	let n = g.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, v = (e, t, n) => {
	if (!_(e)) return n;
	let r = g.get(e);
	return r || (r = /* @__PURE__ */ new Map(), g.set(e, r)), r.size >= ne && r.clear(), r.set(t, n), n;
}, ae = "translation", oe = "enumeration", se = "plural", y = "insertion", ce = "object", le = "array", ue = "markdown", b = "html", de = "gender", fe = "select", x = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => x(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => x(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: le,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ce,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = x(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = x(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, pe = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, me = (e, t) => e[pe(e, t) ?? "fallback"], he = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), S = "default", ge = /[^A-Za-z0-9._&=-]/g, _e = /[^A-Za-z0-9._-]/g, ve = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, C = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ve);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, w = (e) => e === void 0 ? S : typeof e == "string" ? C(e, ge) : Object.keys(e).sort().map((t) => `${C(t, _e)}=${C(String(e[t]), _e)}`).join("&"), T = (e) => Array.isArray(e) ? e.length === 0 ? [S] : e.map(w) : [w(e)], ye = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? S : e[0] ?? "default";
}, be = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, xe = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Se = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ce = (e, t) => {
	if (!xe(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? S : ye(T(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => be(e, n, t, s)).map((t) => Se(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, we = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, E = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? T(n).join(",") : String(n)}`;
}).join("|") : "", D = {
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
}, O = {
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
}, Te = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, Ee = "\x1B[0m", De = "\x1B[34m", Oe = "\x1B[31m", ke = "\x1B[32m", Ae = "\x1B[36m", je = (e) => e, Me = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = je(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Ne = (e, t) => (n, r) => Me(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), k = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? Ee : n : Ee}` : e;
k("✗", Oe), k("✓", ke), k("⏲", De);
var Pe = 50, Fe = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Set(), Le = (e) => {
	Ie.has(e) || (Ie.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Re = {
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
}, ze = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Le(e), Re[e]);
};
function A(e, t, n) {
	let r = t ?? D?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Fe.get(a);
	o || (o = /* @__PURE__ */ new Map(), Fe.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ze(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Pe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Be = (e, t, n) => e[A("PluralRules", n).select(t)] ?? e.other, Ve = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, j = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, M = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (j(e) && j(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : M(e[r], t[r]));
		return n;
	}
	return e;
}, He = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => M(e, t));
}, N = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ue = (e) => {
	if (typeof e == "string") return e;
	if (N(e)) return e.nodeType === "html" ? e[b] : e[ue];
}, We = (e, t) => {
	if (typeof e == "string") return t;
	if (N(e)) {
		let n = e.nodeType === "html" ? b : ue;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, P = (e, t, n, r, i) => {
	let a = We(e, he(Ue(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, F = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, I = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? F : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ae,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return He(o, e, t);
	}
}, L = F, Ge = (e) => F, R = F, Ke = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? F : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || N(e),
			transform: (e, n, r) => {
				if (N(e)) return (i) => P(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = he(i, e);
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
}, z = F, B = F, V = (e) => F, H = F, qe = (e, t = !0) => [
	I(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
	L,
	R,
	Ke,
	V(e ?? D.defaultLocale),
	H,
	z,
	B
], Je = (e, t, n = []) => x(e, {
	...t,
	plugins: n
}), Ye = (e, t, n) => {
	let { locale: r, selector: i } = we(t), a = re(r ?? D.defaultLocale, E(i), n), o = ie(e, a);
	if (o.hit) return o.content;
	let s = n ?? qe(r), c = Ce(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Je(e.content, t, s);
	};
	return c === null ? v(e, a, null) : Array.isArray(c) ? v(e, a, c.map(l)) : v(e, a, l(c));
}, Xe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", U = /\{\{\s*(.*?)\s*\}\}/g, Ze = (e, t = {}) => {
	if (!Object.values(t).some(Xe)) return {
		isSimple: !0,
		parts: e.replace(U, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(U), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Qe = (e, t, n = ".") => {
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
}, W = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], G = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, $e = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? A("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? A("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : A("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return A("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, et = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : i ? $e(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : $e(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = G(t, n);
	return r === void 0 ? e : String(r);
}), K = (e, t) => e[t] ?? e.count ?? e.n, q = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return et(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return q(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(q(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return q(r[y], t, n);
	if (r.nodeType === "html") return q(r[b], t, n);
	if (r.nodeType === "plural") {
		let e = r[se];
		return q(Be(e, Number(K(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[oe], i = W.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) W.includes(t) || (o[t] = n);
		let s = K(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = A("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? me(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return q(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[fe], i = K(t, typeof r.variable == "string" ? r.variable : "value");
		return q(Ve(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[de];
		return q(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, tt = (e, t = {}, n = "en") => {
	let r = q(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, J = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: J(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, nt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, rt = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = rt(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), Y = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Y(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), it = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return at(e, (e) => Qe(t, r(e)), r);
}, at = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return tt(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = nt(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: rt(J(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = nt(t), o = r(e, i);
			return o === void 0 ? n(e) : Y(J(o), a);
		}
	});
}, ot = ({ children: e, value: t, additionalProps: n }) => {
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
}, st = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => ot({
		...n,
		value: n.children,
		children: n.children
	})
}, ct = F, lt = (e, n) => {
	let i = Ze(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, ut = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? F : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || N(e),
			transform: (e, n, r) => {
				if (N(e)) return (i) => P(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = lt(i, e);
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
}, dt = F, ft = F, X = /* @__PURE__ */ new Map(), pt = (e, t = !0) => {
	let n = `${e ?? D.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		I(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
		L,
		Ge(e ?? D.defaultLocale),
		R,
		V(e ?? D.defaultLocale),
		H,
		z,
		B,
		st,
		ct,
		ut,
		dt,
		ft
	];
	return X.set(n, r), r;
}, mt = (e, t) => Ye(e, t, pt(typeof t == "object" && t ? t.locale : t)), ht = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, gt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = ht(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, _t = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, vt = (e = Z) => {
	let { locales: t } = D;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!_t) for (let t = 0; t < (O.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(O.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, yt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !_t && O.storage.cookies) for (let n = 0; n < O.storage.cookies.length; n++) {
		let { name: r, attributes: i } = O.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: ht(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, gt(r, e, i));
			} catch {}
		}
	}
}, bt = vt(Z), xt = (e, t) => yt(e, {
	...Z,
	isCookieEnabled: t
}), St = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Ct = ({ children: e }) => (St(), e), wt = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Tt = ({ children: e }) => (wt(), e), Et = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Dt = (e, t = D?.locales, n = D?.defaultLocale) => {
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
	locale: bt ?? D?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Ot = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = D ?? {}, [f, p] = l(e ?? bt ?? t ?? u);
	o(() => {
		e && e !== f && p(e);
	}, [e]), o(() => {
		Et();
	}, []);
	let m = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), xt(e, s);
		}
	}), h = Dt(f);
	return d(Q.Provider, {
		value: {
			locale: h,
			setLocale: m,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, kt = ({ children: e, ...t }) => f(Ot, {
	...t,
	children: [
		d(Ct, {}),
		d(Tt, {}),
		e
	]
}), At = (e, t) => {
	let { locale: n, variant: r } = a(Q) ?? {}, i = t ?? n, o = typeof i == "object" && i ? `${i.locale ?? ""}|${E(i)}` : i;
	return s(() => mt(e, i), [e.key, o]);
}, jt = ((e, t) => {
	let { locale: n } = a(Q) ?? {};
	return it(n, At(e), t);
}), Mt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Ne({ log: Te })(`${k("IntlProvider", Ae)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(kt, {
	locale: e,
	children: t
}, String(e))), $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/team/TeamGrid.tsx";
function Nt() {
	let e = jt(m), t = [
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
var Pt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function Ft({ children: t }) {
	return p(e.Suspense, {
		fallback: null,
		children: p(Mt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: Pt,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Pt,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var It = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/team/TeamGrid.wrapper.tsx";
function Lt() {
	return p(Ft, { children: p(Nt, {}, void 0, !1, {
		fileName: It,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: It,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Lt as default };
