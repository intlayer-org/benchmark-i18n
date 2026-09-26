import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useMemo as a } from "react";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
var l = {
	key: "team-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"o\":\"Sarah Chen\",\"h\":\"Founder & Lead Engineer\",\"g\":\"Former Google engineer with 10 years of experience building internationalization systems at scale.\",\"l\":\"Marcus Weber\",\"n\":\"Performance Engineer\",\"p\":\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Developer Advocate\",\"m\":\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Full-Stack Developer\",\"j\":\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Data Analyst\",\"f\":\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Community Manager\",\"k\":\"Manages community contributions, partnerships, and events. Background in open source governance.\"},\"fr\":{\"o\":\"Sarah Chen\",\"h\":\"Fondatrice & Ingénieure Principale\",\"g\":\"Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.\",\"l\":\"Marcus Weber\",\"n\":\"Ingénieur Performance\",\"p\":\"Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Auparavant chez Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Developer Advocate\",\"m\":\"Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Développeur Full-Stack\",\"j\":\"Maintient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Analyste de Données\",\"f\":\"Assure la rigueur statistique dans tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Gestionnaire de Communauté\",\"k\":\"Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.\"},\"es\":{\"o\":\"Sarah Chen\",\"h\":\"Fundadora e Ingeniera Principal\",\"g\":\"Ex ingeniera de Google con 10 años de experiencia construyendo sistemas de internacionalización a escala.\",\"l\":\"Marcus Weber\",\"n\":\"Ingeniero de Rendimiento\",\"p\":\"Especialista en optimización de rendimiento de JavaScript y metodología de benchmarking. Anteriormente en Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Evangelista de Desarrolladores\",\"m\":\"Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Desarrollador Full-Stack\",\"j\":\"Mantiene la infraestructura de benchmarking y el pipeline CI/CD. Colaborador de código abierto en Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Analista de Datos\",\"f\":\"Asegura el rigor estadístico en todos los resultados de los benchmarks. Doctorado en Estadística Aplicada del MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Gerente de Comunidad\",\"k\":\"Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Experiencia en gobernanza de código abierto.\"},\"de\":{\"o\":\"Sarah Chen\",\"h\":\"Gründerin & Leitende Ingenieurin\",\"g\":\"Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\",\"l\":\"Marcus Weber\",\"n\":\"Performance-Ingenieur\",\"p\":\"Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Developer Advocate\",\"m\":\"Leidenschaftlich für Developer Experience und Ausbildung. Sprecherin bei React Conf, JSConf und i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Full-Stack-Entwickler\",\"j\":\"Pflegt die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Beitragender zu Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Datenanalyst\",\"f\":\"Sorgt für statistische Strenge in allen Benchmark-Ergebnissen. PhD in angewandter Statistik vom MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Community-Manager\",\"k\":\"Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\"},\"it\":{\"o\":\"Sarah Chen\",\"h\":\"Fondatrice e lead engineer\",\"g\":\"Ex ingegnere di Google con 10 anni di esperienza nella creazione di sistemi di internazionalizzazione su larga scala.\",\"l\":\"Marcus Weber\",\"n\":\"Ingegnere delle prestazioni\",\"p\":\"Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Developer advocate\",\"m\":\"Appassionata di developer experience e formazione. Relatrice a React Conf, JSConf e i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Sviluppatore Full-Stack\",\"j\":\"Gestisce l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Analista di dati\",\"f\":\"Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata presso il MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Community manager\",\"k\":\"Gestisce i contributi della comunità, le partnership e gli eventi. Esperienza nella governance open source.\"},\"pt\":{\"o\":\"Sarah Chen\",\"h\":\"Fundadora e Engenheira Líder\",\"g\":\"Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\",\"l\":\"Marcus Weber\",\"n\":\"Engenheiro de Performance\",\"p\":\"Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Advogado de Desenvolvedores\",\"m\":\"Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Desenvolvedor Full-Stack\",\"j\":\"Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Colaborador de código aberto do Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Analista de Dados\",\"f\":\"Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em Estatística Aplicada pelo MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Gerente de Comunidade\",\"k\":\"Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\"},\"zh\":{\"o\":\"陈莎拉 (Sarah Chen)\",\"h\":\"创始人兼首席工程师\",\"g\":\"前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。\",\"l\":\"马库斯·韦伯 (Marcus Weber)\",\"n\":\"性能工程师\",\"p\":\"专注于 JavaScript 性能优化和基准测试方法。曾任职于 Vercel。\",\"a\":\"艾莎·帕特尔 (Aisha Patel)\",\"d\":\"开发者倡导者\",\"m\":\"热爱开发者体验和教育。React Conf、JSConf 和 i18nNext 的演讲者。\",\"q\":\"托马斯·罗德里格斯 (Tomás Rodríguez)\",\"i\":\"全栈开发人员\",\"j\":\"维护基准测试基础架构和 CI/CD 流水线。Lingui 的开源贡献者。\",\"r\":\"田中由纪 (Yuki Tanaka)\",\"c\":\"数据分析师\",\"f\":\"确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。\",\"e\":\"埃琳娜·科瓦尔斯基 (Elena Kowalski)\",\"b\":\"社区经理\",\"k\":\"管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\"},\"ja\":{\"o\":\"サラ・チェン (Sarah Chen)\",\"h\":\"創設者兼リードエンジニア\",\"g\":\"元 Google エンジニア。大規模な国際化システムの構築に 10 年の経験があります。\",\"l\":\"マーカス・ウェーバー (Marcus Weber)\",\"n\":\"パフォーマンスエンジニア\",\"p\":\"JavaScript のパフォーマンス最適化とベンチマーク方法論を専門としています。以前は Vercel に在籍していました。\",\"a\":\"アイシャ・パテル (Aisha Patel)\",\"d\":\"デベロッパーアドボケイト\",\"m\":\"デベロッパーエクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、i18nNext のスピーカー。\",\"q\":\"トマス・ロドリゲス (Tomás Rodríguez)\",\"i\":\"フルスタックデベロッパー\",\"j\":\"ベンチマークインフラストラクチャと CI/CD パイプラインを保守しています。Lingui へのオープンソースコントリビューターです。\",\"r\":\"田中由紀 (Yuki Tanaka)\",\"c\":\"データアナリスト\",\"f\":\"すべてのベンチマーク結果において統計的な厳密さを確保します。MIT で応用統計学の博士号を取得。\",\"e\":\"エレナ・コワルスキー (Elena Kowalski)\",\"b\":\"コミュニティマネージャー\",\"k\":\"コミュニティへの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経験があります。\"},\"ko\":{\"o\":\"사라 첸 (Sarah Chen)\",\"h\":\"설립자 및 리드 엔지니어\",\"g\":\"규모에 맞는 국제화 시스템을 구축한 10년 경력의 전직 Google 엔지니어입니다.\",\"l\":\"마르쿠스 베버 (Marcus Weber)\",\"n\":\"성능 엔지니어\",\"p\":\"JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.\",\"a\":\"아이샤 파텔 (Aisha Patel)\",\"d\":\"데벨로퍼 애드보킷\",\"m\":\"개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.\",\"q\":\"토마스 로드리게스 (Tomás Rodríguez)\",\"i\":\"풀스택 개발자\",\"j\":\"벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui의 오픈 소스 기여차입니다.\",\"r\":\"유키 다나카 (Yuki Tanaka)\",\"c\":\"데이터 분석가\",\"f\":\"모든 벤치마크 결과에서 통계적 엄밀성을 보장합니다. MIT에서 응용 통계학 박사 학위를 받았습니다.\",\"e\":\"엘레나 코발스키 (Elena Kowalski)\",\"b\":\"커뮤니티 매니저\",\"k\":\"커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경이 있습니다.\"},\"ru\":{\"o\":\"Сара Чен (Sarah Chen)\",\"h\":\"Основатель и ведущий инженер\",\"g\":\"Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.\",\"l\":\"Маркус Вебер (Marcus Weber)\",\"n\":\"Инженер по производительности\",\"p\":\"Специализируется на оптимизации производительности JavaScript и методологии тестирования. Ранее работал в Vercel.\",\"a\":\"Айша Патель (Aisha Patel)\",\"d\":\"Адвокат разработчиков\",\"m\":\"Увлечена опытом разработчиков и обучением. Спикер на React Conf, JSConf и i18nNext.\",\"q\":\"Томас Родригес (Tomás Rodríguez)\",\"i\":\"Фулстек-разработчик\",\"j\":\"Поддерживает инфраструктуру тестирования и CI/CD пайплайн. Участник разработки Lingui с открытым исходным кодом.\",\"r\":\"Юки Танака (Yuki Tanaka)\",\"c\":\"Аналитик данных\",\"f\":\"Обеспечивает статистическую строгость всех результатов тестирования. Доктор прикладной статистики из MIT.\",\"e\":\"Елена Ковальски (Elena Kowalski)\",\"b\":\"Комьюнити-менеджер\",\"k\":\"Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.\"}}}")
}, u = {
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
}, d = {
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
}, ee = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var f = {
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
}, p = (e = f) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ee) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, te = !1, m, ne = () => typeof window > "u" ? p(f) : (te ||= (m = p(f), !0), m), h = /* @__PURE__ */ new Map(), re = (e, t) => Object.create(new Proxy(e, {
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
}), g = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = h.get(t);
	i || (i = /* @__PURE__ */ new Map(), h.set(t, i));
	let a = i.get(r);
	return a || (a = re(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ie = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : s(o, { children: e }),
	value: t,
	...n
}, g(t)), _ = /* @__PURE__ */ new WeakMap(), v = 0, ae = (e) => {
	if (!e) return "base";
	let t = _.get(e);
	if (t) return t;
	v += 1;
	let n = `p${v}`;
	return _.set(e, n), n;
}, oe = 256, y = /* @__PURE__ */ new WeakMap(), b = (e) => typeof e == "object" && !!e, se = (e, t, n) => `${e}_${t}_${ae(n)}`, x = (e, t) => {
	if (!b(e)) return { hit: !1 };
	let n = y.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, S = (e, t, n) => {
	if (!b(e)) return n;
	let r = y.get(e);
	return r || (r = /* @__PURE__ */ new Map(), y.set(e, r)), r.size >= oe && r.clear(), r.set(t, n), n;
}, C = "translation", w = "enumeration", ce = "plural", le = "condition", T = "insertion", ue = "object", de = "array", E = "markdown", D = "html", fe = "gender", pe = "select", O = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), k = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, k);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => k(e, O(t, e, {
		type: de,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ue,
			key: r
		};
		if (t.eager) {
			n[r] = k(e[r], O(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = k(e[r], O(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, A = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), j = (e) => {
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
}, P = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, F = (e) => {
	if (typeof e == "string") return e;
	if (P(e)) return e.nodeType === "html" ? e[D] : e[E];
}, I = (e, t) => {
	if (typeof e == "string") return t;
	if (P(e)) {
		let n = e.nodeType === "html" ? D : E;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, L = (e, t, n, r, i) => {
	let a = I(e, A(F(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, R = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, z = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? R : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = N(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: C,
				key: e
			}]
		});
	}
}, V = R, H = (e) => R, U = R, me = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? R : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: T }], i = e[T], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || P(e),
			transform: (e, n, r) => {
				if (P(e)) return (i) => L(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = A(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return G(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, W = [
	w,
	le,
	ce,
	fe,
	pe
], he = (e, t, n, r = !1) => {
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
		return !r && z(i) ? i(n) : i;
	};
}, G = (e, t) => typeof t == "function" && W.includes(e?.nodeType ?? "") ? (n) => he(e, t, n) : t, K = R, q = R, J = (e) => R, Y = R, ge = (e, t = !0) => [
	B(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	V,
	H(e ?? u.defaultLocale),
	U,
	me,
	J(e ?? u.defaultLocale),
	Y,
	K,
	q
].filter((e) => e !== R), _e = (e, t, n = []) => k(e, {
	...t,
	plugins: n
}), X = /* @__PURE__ */ new WeakSet(), ve = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = se(r ?? u.defaultLocale, "", n), o = x(e, a);
	if (o.hit) return o.content;
	let s = n ?? ge(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !X.has(e)
		};
		X.add(e);
		try {
			return _e(e.content, t, s);
		} finally {
			t.eager && X.delete(e);
		}
	};
	return c === null ? S(e, a, null) : Array.isArray(c) ? S(e, a, c.map(l)) : S(e, a, l(c));
}, ye = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Z = /\{\{\s*(.*?)\s*\}\}/g, be = (e, t = {}) => {
	if (!Object.values(t).some(ye)) return {
		isSimple: !0,
		parts: e.replace(Z, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Z), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, xe = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ie({
		value: t.children,
		children: t.children
	})
}, Q = R, Se = (t, r) => {
	let i = be(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ce = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? R : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: T }], i = e[T], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || P(e),
			transform: (e, n, r) => {
				if (P(e)) return (i) => L(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Se(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return G(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, we = R, Te = R, $ = /* @__PURE__ */ new Map(), Ee = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		xe,
		B(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		V,
		H(e ?? u.defaultLocale),
		U,
		J(e ?? u.defaultLocale),
		Y,
		K,
		q,
		Q,
		Ce,
		we,
		Te
	].filter((e) => e !== R);
	return $.set(n, r), r;
}, De = (e, t) => ve(e, t, Ee(typeof t == "object" && t ? t.locale : t)), Oe = ne, ke = t({
	get locale() {
		return Oe() ?? u?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Ae = (e, t) => {
	let { locale: n, variant: r } = i(ke) ?? {}, o = t ?? n, s = o;
	return a(() => De(e, o), [e.key, s]);
};
function je() {
	let e = Ae(l), t = [
		{
			name: e.o.value,
			role: e.h.value,
			bio: e.g.value
		},
		{
			name: e.l.value,
			role: e.n.value,
			bio: e.p.value
		},
		{
			name: e.a.value,
			role: e.d.value,
			bio: e.m.value
		},
		{
			name: e.q.value,
			role: e.i.value,
			bio: e.j.value
		},
		{
			name: e.r.value,
			role: e.c.value,
			bio: e.f.value
		},
		{
			name: e.e.value,
			role: e.b.value,
			bio: e.k.value
		}
	];
	return s("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: t.map((e) => c("div", {
			className: "rounded-lg border border-border bg-card p-6 text-center",
			children: [
				s("div", {
					className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground",
					children: e.name.split(" ").map((e) => e[0]).join("")
				}),
				s("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.name
				}),
				s("p", {
					className: "mb-2 text-xs font-medium text-primary",
					children: e.role
				}),
				s("p", {
					className: "text-sm text-muted-foreground",
					children: e.bio
				})
			]
		}, e.name))
	});
}
export { je as default };
