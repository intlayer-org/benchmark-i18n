import { Dynamic as e, createComponent as t, insert as n, template as r } from "solid-js/web";
import { For as i, createContext as a, createMemo as o, useContext as s } from "solid-js";
var c = {
	key: "team-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"o\":\"Sarah Chen\",\"h\":\"Founder & Lead Engineer\",\"g\":\"Former Google engineer with 10 years of experience building internationalization systems at scale.\",\"l\":\"Marcus Weber\",\"n\":\"Performance Engineer\",\"p\":\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Developer Advocate\",\"m\":\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Full-Stack Developer\",\"j\":\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Data Analyst\",\"f\":\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Community Manager\",\"k\":\"Manages community contributions, partnerships, and events. Background in open source governance.\"},\"fr\":{\"o\":\"Sarah Chen\",\"h\":\"Fondatrice et ingénieure en chef\",\"g\":\"Ancienne ingénieure Google avec 10 ans d'expérience dans la création de systèmes d'internationalisation à grande échelle.\",\"l\":\"Marcus Weber\",\"n\":\"Ingénieur Performance\",\"p\":\"Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Developer Advocate\",\"m\":\"Passionnée par l'expérience et l'éducation des développeurs. Conférencière à React Conf, JSConf et i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Développeur Full-Stack\",\"j\":\"Maintient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Analyste de données\",\"f\":\"Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Community Manager\",\"k\":\"Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.\"},\"es\":{\"o\":\"Sarah Chen\",\"h\":\"Fundadora e ingeniera principal\",\"g\":\"Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.\",\"l\":\"Marcus Weber\",\"n\":\"Ingeniero de rendimiento\",\"p\":\"Especializado en optimización del rendimiento de JavaScript y metodología de benchmarking. Anteriormente en Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Defensor del desarrollador\",\"m\":\"Apasionada por la experiencia y educación del desarrollador. Ponente en React Conf, JSConf e i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Desarrollador Full-Stack\",\"j\":\"Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto en Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Analista de datos\",\"f\":\"Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Gerente de comunidad\",\"k\":\"Gestiona las contribuciones, asociaciones y eventos de la comunidad. Antecedentes en gobernanza de código abierto.\"},\"de\":{\"o\":\"Sarah Chen\",\"h\":\"Gründerin & leitende Ingenieurin\",\"g\":\"Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\",\"l\":\"Marcus Weber\",\"n\":\"Performance Engineer\",\"p\":\"Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Developer Advocate\",\"m\":\"Leidenschaft für Entwicklererfahrung und Bildung. Sprecher bei React Conf, JSConf und i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Full-Stack Developer\",\"j\":\"Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Data Analyst\",\"f\":\"Gewährleistet statistische Strenge bei allen Benchmark-Ergebnissen. PhD in angewandter Statistik vom MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Community Manager\",\"k\":\"Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\"},\"it\":{\"o\":\"Sarah Chen\",\"h\":\"Fondatore e Ingegnere Capo\",\"g\":\"Ex ingegnere Google con 10 anni di esperienza nella creazione di sistemi di internazionalizzazione su scala.\",\"l\":\"Marcus Weber\",\"n\":\"Ingegnere delle prestazioni\",\"p\":\"Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente in Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Developer Advocate\",\"m\":\"Appassionato di developer experience e formazione. Speaker a React Conf, JSConf e i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Sviluppatore Full-Stack\",\"j\":\"Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Contributore open source di Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Analista di dati\",\"f\":\"Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in Statistica Applicata al MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Community Manager\",\"k\":\"Gestisce i contributi della comunità, le partnership e gli eventi. Esperienza nella governance open source.\"},\"pt\":{\"o\":\"Sarah Chen\",\"h\":\"Fundador e Engenheiro Principal\",\"g\":\"Ex-engenheiro do Google com 10 anos de experiência na criação de sistemas de internacionalização em escala.\",\"l\":\"Marcus Weber\",\"n\":\"Engenheiro de Performance\",\"p\":\"Especializado em otimização de desempenho de JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Developer Advocate\",\"m\":\"Apaixonado por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Desenvolvedore Full-Stack\",\"j\":\"Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Analista de Dados\",\"f\":\"Garante o rigor estatístico em todos os resultados do benchmark. PhD em Estatística Aplicada pelo MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Gerente de Comunidade\",\"k\":\"Gerencia contribuições, parcerias e eventos da comunidade. Experiência em governança de código aberto.\"},\"zh\":{\"o\":\"Sarah Chen\",\"h\":\"创始人兼首席工程师\",\"g\":\"前 Google 工程师，拥有 10 年大规模构建国际化系统的经验。\",\"l\":\"Marcus Weber\",\"n\":\"性能工程师\",\"p\":\"专注于 JavaScript 性能优化和基准测试方法论。此前曾任职于 Vercel。\",\"a\":\"Aisha Patel\",\"d\":\"开发者关系\",\"m\":\"热衷于开发人员体验和教育。曾任 React Conf、JSConf 和 i18nNext 的演讲者。\",\"q\":\"Tomás Rodríguez\",\"i\":\"全栈开发人员\",\"j\":\"维护基准测试基础设施和 CI/CD 管道。Lingui 的开源贡献者。\",\"r\":\"Yuki Tanaka\",\"c\":\"数据分析师\",\"f\":\"确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。\",\"e\":\"Elena Kowalski\",\"b\":\"社区经理\",\"k\":\"管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\"},\"ja\":{\"o\":\"Sarah Chen\",\"h\":\"創設者兼リードエンジニア\",\"g\":\"大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。\",\"l\":\"Marcus Weber\",\"n\":\"パフォーマンスエンジニア\",\"p\":\"JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。以前はVercelに在籍。\",\"a\":\"Aisha Patel\",\"d\":\"デベロッパーアドボケイト\",\"m\":\"開発者エクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、およびi18nNextのスピーカー。\",\"q\":\"Tomás Rodríguez\",\"i\":\"フルスタックデベロッパー\",\"j\":\"ベンチマークインフラストラクチャとCI / CDパイプラインを保守します。Linguiへのオープンソースコントリビューター。\",\"r\":\"Yuki Tanaka\",\"c\":\"データアナリスト\",\"f\":\"すべてのベンチマーク結果における統計的な厳密さを保証します。MITで応用統計学の博士号を取得。\",\"e\":\"Elena Kowalski\",\"b\":\"コミュニティマネージャー\",\"k\":\"コミュニティへの貢献、パートナーシップ、およびイベントを管理します。オープンソースガバナンスの経歴。\"},\"ko\":{\"o\":\"Sarah Chen\",\"h\":\"설립자 및 수석 엔지니어\",\"g\":\"대규모 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.\",\"l\":\"Marcus Weber\",\"n\":\"성능 엔지니어\",\"p\":\"JavaScript 성능 최적화 및 벤치마킹 방법론을 전공했습니다. 이전에는 Vercel에서 근무했습니다.\",\"a\":\"Aisha Patel\",\"d\":\"디벨로퍼 애드보킷\",\"m\":\"개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.\",\"q\":\"Tomás Rodríguez\",\"i\":\"풀스택 개발자\",\"j\":\"벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui의 오픈 소스 기여자입니다.\",\"r\":\"Yuki Tanaka\",\"c\":\"데이터 분석가\",\"f\":\"모든 벤치마크 결과에서 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.\",\"e\":\"Elena Kowalski\",\"b\":\"커뮤니티 매니저\",\"k\":\"커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경.\"},\"ru\":{\"o\":\"Сара Чен\",\"h\":\"Основатель и ведущий инженер\",\"g\":\"Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.\",\"l\":\"Маркус Вебер\",\"n\":\"Инженер по производительности\",\"p\":\"Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.\",\"a\":\"Аиша Патель\",\"d\":\"Developer Advocate\",\"m\":\"Увлечен вопросами опыта разработчиков и обучения. Спикер на React Conf, JSConf и i18nNext.\",\"q\":\"Томас Родригес\",\"i\":\"Full-stack разработчик\",\"j\":\"Поддерживает инфраструктуру бенчмаркинга и пайплайн CI/CD. Автор open source вкладов в Lingui.\",\"r\":\"Юки Танака\",\"c\":\"Аналитик данных\",\"f\":\"Обеспечивает статистическую точность всех результатов бенчмарков. Доктор прикладной статистики (MIT).\",\"e\":\"Елена Ковальски\",\"b\":\"Комьюнити-менеджер\",\"k\":\"Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.\"}}}")
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
}, G = r("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\">"), K = r("<div class=\"rounded-lg border border-border bg-card p-6 text-center\"><div class=\"mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground\"></div><h3 class=\"text-base font-semibold text-foreground\"></h3><p class=\"mb-2 text-xs font-medium text-primary\"></p><p class=\"text-sm text-muted-foreground\">");
function q() {
	let e = W(c), r = [
		{
			name: e().sarahChen.value,
			role: e().founderLeadEngineer.value,
			bio: e().formerGoogleEngineerWith10.value
		},
		{
			name: e().marcusWeber.value,
			role: e().performanceEngineer.value,
			bio: e().specializesInJavascriptPerformanceOptimi.value
		},
		{
			name: e().aishaPatel.value,
			role: e().developerAdvocate.value,
			bio: e().passionateAboutDeveloperExperienceAnd.value
		},
		{
			name: e().tomasRodriguez.value,
			role: e().fullStackDeveloper.value,
			bio: e().maintainsTheBenchmarkingInfrastructureAn.value
		},
		{
			name: e().yukiTanaka.value,
			role: e().dataAnalyst.value,
			bio: e().ensuresStatisticalRigorInAll.value
		},
		{
			name: e().elenaKowalski.value,
			role: e().communityManager.value,
			bio: e().managesCommunityContributionsPartnership.value
		}
	];
	return (() => {
		var e = G();
		return n(e, t(i, {
			each: r,
			children: (e) => (() => {
				var t = K(), r = t.firstChild, i = r.nextSibling, a = i.nextSibling, o = a.nextSibling;
				return n(r, () => e.name.split(" ").map((e) => e[0]).join("")), n(i, () => e.name), n(a, () => e.role), n(o, () => e.bio), t;
			})()
		})), e;
	})();
}
export { q as default };
